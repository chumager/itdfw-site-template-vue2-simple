"use strict";
/*global Datauri, numeral, moment, babel_transform, _, Log, percentage, currency, numeralAdd, SE */
const {default: calcular_cuotas} = babel_transform(__dirname + "/../lib/calcular_cuotas.js");
const path = require("path");
const fonts = {
  Helvetica: {
    normal: path.join(__dirname, "../Helvetica LT Std/HelveticaLTStd-Roman.otf"),
    bold: path.join(__dirname, "../Helvetica LT Std/HelveticaLTStd-BlkCond.otf")
  },
  Apex: {
    normal: path.join(__dirname, "../html/fonts/ApexNew-Book.otf"),
    bold: path.join(__dirname, "../html/fonts/ApexNew-Bold.otf")
  },
  Raleway: {
    normal: path.join(__dirname, "../Raleway/Raleway-Regular.ttf"),
    bold: path.join(__dirname, "../Raleway/Raleway-Bold.ttf")
  }
};
const images = {
  header: new Datauri(path.join(__dirname, "../html/images/simulacion_header.png")).content
};

function calcular(value) {
  /*
   *value.dues.forEach(due => {
   *  for (let key in due) {
   *    due[key] = numeral(due[key]).value();
   *  }
   *});
   */
  let Vue = {
    set(obj, prop, val) {
      obj[prop] = val;
    }
  };
  let {amount, nar: I, periodicity, dues, lack, credit_type} = value;
  lack = lack || 0;
  //I = numeral(I).value();
  let ct = credit_type ? credit_type.toLowerCase() : "cuotas iguales";
  //let P = numeral(amount).value();
  let P = amount;
  dues = calcular_cuotas({ct, dues, lack, P, I, periodicity});
  dues &&
    dues.forEach(due => {
      let data = ["cuota", "saldo", "capital", "amount", "interest"];
      data.forEach(v => Vue.set(due, v, currency(due[v])));
    });
}
const operationalStatus = ["Normal", "Prepagado/a", "Refinancido/a", "Repactado/a"];
const paymentStatus = ["Programada", "Abonada", "Pagada"];
function getPaymentStatus() {
  if (this.payments.length === 0) return "Programado";
  else if (Math.round(this.balance) === 0) return "Pagado";
  return "Abonado";
}
module.exports = {
  operationalStatus,
  paymentStatus,
  getOperationalStatus(quotes) {
    //obtenemos el estado de la última cuota
    const lastQuote = [...quotes].slice(-1)[0];
    if (lastQuote) return lastQuote.operationalStatus;
    return "Normal";
  },
  SimulacionFactoringPDF(db, schema, filename) {
    db.createPDF({
      schema,
      virtual: "documento",
      name: "Documento",
      func: "getSimulacionFactoring",
      fonts,
      filename,
      dd(req) {
        let value = this.toJSON();
        calcular(value);
        let {
          amount_voucher,
          amount_requested,
          amount,
          commission,
          legal_amount,
          expenses,
          periodicity,
          dues,
          nar,
          cae
        } = value;
        let duration = moment.duration(1, periodicity.measure).asDays() * periodicity.duration;
        const ratio = percentage(amount / amount_voucher);
        const {interest} = dues[0];
        //calculamos P
        //primero calculamos el Impuesto de timbres y estampillas
        //let credit_months = Math.floor((dues.length * duration) / 30) + 1;
        let commission_final = (((commission || 0) * duration) / 360) * (1 + numeral(req.Config.IVA).value());
        let translate = {
          days: ["día", "días"],
          weeks: ["semana", "semanas"],
          months: ["mes", "meses"],
          years: ["año", "años"]
        };
        let dd = {
          header: {
            image: "header",
            alignment: "center",
            width: 200,
            margin: [0, 30]
          },
          images,
          style: {},
          pageSize: "LETTER",
          pageMargins: [40, 100, 40, 40],
          defaultStyle: {
            font: "Raleway",
            fontSize: 11,
            preserveLeadingSpaces: true,
            lineHeight: 1.5
          },
          content: [
            {
              text: `${moment().format("DD [de] MMMM [de] YYYY")}`,
              alignment: "right"
            },
            {
              color: "#4d2c62",
              table: {
                widths: ["*", "*"],
                headerRows: 1,
                body: [
                  [
                    {
                      text: "Simulación Financiamiento",
                      alignment: "center",
                      colSpan: 2,
                      fillColor: "#4b2a60",
                      color: "white"
                    },
                    {}
                  ],
                  ["Nombre Cliente", this.company.name],
                  ["RUT", this.company._id],
                  ["Monto Factura", {text: currency(amount_voucher), alignment: "right"}],
                  [
                    {
                      text: ["Monto Financiamiento ", {text: `(factura descontada ${ratio})`, fontSize: 10}],
                      bold: true
                    },
                    {text: currency(amount), bold: true, alignment: "right"}
                  ],
                  [
                    {text: ["Asesoría Estructura Financiera (1)", {text: " (AEF Doble Impacto)", fontSize: 8}]},
                    {text: currency(amount * commission_final), alignment: "right"}
                  ],
                  ["Intereses Inversionistas (2)", {text: currency(interest), alignment: "right"}],
                  [
                    {text: "Monto a Entregar Cliente", bold: true},
                    {text: currency(amount_requested), bold: true, alignment: "right"}
                  ],
                  ["Gastos Notariales (3)", {text: currency(legal_amount), alignment: "right"}],
                  [
                    "Otros Gastos (4)",
                    {text: numeralAdd(...expenses.map(el => el.amount)).format("$0,0"), alignment: "right"}
                  ],
                  [
                    {text: "Gasto Total Operación (1)+(2)+(3)+(4)", bold: true},
                    {
                      text: numeralAdd(
                        dues[0].interest,
                        legal_amount,
                        numeralAdd(...expenses.map(el => el.amount)).format("$0,0"),
                        amount * commission_final
                      ).format("$0,0"),
                      bold: true,
                      alignment: "right"
                    }
                  ],
                  ["CAE", {text: percentage(cae), alignment: "right"}],
                  [
                    "Tasa AEF Doble Impacto + IVA (anual)",
                    {
                      text: percentage(commission * (1 + numeral(this.getConfig().IVA).value())),
                      alignment: "right"
                    }
                  ],
                  ["Tasa Retorno Inversionista (anual)", {text: percentage(nar), alignment: "right"}],
                  [
                    `Plazo (${translate[periodicity.measure][1]})`,
                    {text: periodicity.duration * dues.length, alignment: "right"}
                  ],
                  [
                    {text: "Saldo a Favor del Cliente", bold: true},
                    {
                      text: currency(
                        amount_voucher -
                          amount -
                          expenses.map(el => el.amount).reduce((sum, val) => sum + val, 0) -
                          (legal_amount || 0)
                      ),
                      bold: true,
                      alignment: "right"
                    }
                  ]
                ]
              },
              layout: {
                fillColor(i) {
                  if ([4, 7, 10, 15].includes(i)) return "#d2ccd9";
                  return "#eae6ed";
                },
                hLineColor: "white",
                vLineColor: "white"
              }
            },
            "\n\n",
            {
              color: "#4b2a60",
              ul: [
                {
                  text:
                    /* eslint-disable-next-line max-len */
                    "La entrega de esta simulación no implica que el financiamiento se encuentre aprobado. La aprobación y sus condiciones están sujetas a la evaluación de impacto y riesgo crédito por parte de Doble Impacto.",
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                /* eslint-disable-next-line max-len */
                "Costo Total de financiamiento incluye asesoría de estructura financiera, impuestos, gastos notariales, intereses y otros gastos (tasaciones, inscripciones, seguros, otros)."
              ]
            }
          ]
        };
        return dd;
      }
    });
  },
  SimulacionPDF(db, schema, filename) {
    db.createPDF({
      schema,
      virtual: "documento",
      name: "Documento",
      func: "getSimulacionFactoring",
      fonts,
      filename,
      dd() {
        let value = this.toJSON();
        calcular(value);
        let {
          amount_requested,
          amount,
          totalDue,
          commission,
          legal_amount,
          expenses,
          periodicity,
          dues,
          nar,
          cae,
          credit_type,
          has_ite
        } = value;
        let duration = moment.duration(1, periodicity.measure).asDays() * periodicity.duration;
        //calculamos P
        //primero calculamos el Impuesto de timbres y estampillas
        let credit_months = Math.floor((dues.length * duration) / 30) + 1;
        let ITE = credit_months < 12 ? 0.066 * credit_months : 0.8;
        ITE = has_ite ? ITE / 100 : 0;
        let commission_final = ((commission || 0) / 12) * (credit_months - 1);
        let translate = {
          days: ["día", "días"],
          weeks: ["semana", "semanas"],
          months: ["mes", "meses"],
          years: ["año", "años"]
        };
        let dd = {
          header: {
            image: "header",
            alignment: "center",
            width: 200,
            margin: [0, 30]
          },
          images,
          style: {},
          pageSize: "LETTER",
          pageMargins: [40, 100, 40, 40],
          defaultStyle: {
            font: "Raleway",
            fontSize: 11,
            preserveLeadingSpaces: true,
            lineHeight: 1.5
          },
          content: [
            {
              text: `${moment().format("DD [de] MMMM [de] YYYY")}`,
              alignment: "right"
            },
            {
              color: "#4d2c62",
              table: {
                widths: ["*", "*"],
                headerRows: 1,
                body: [
                  [
                    {
                      text: "Simulación Financiamiento",
                      alignment: "center",
                      colSpan: 2,
                      fillColor: "#4b2a60",
                      color: "white"
                    },
                    {}
                  ],
                  ["Nombre Cliente", this.company.name],
                  ["RUT", this.company._id],
                  [
                    {text: "Monto Financiamiento", bold: true},
                    {text: currency(amount), bold: true, alignment: "right"}
                  ],
                  [
                    {text: ["Asesoría Estructura Financiera (1)", {text: " (AEF Doble Impacto)", fontSize: 8}]},
                    {
                      text: currency(amount_requested * commission_final),
                      alignment: "right"
                    }
                  ],
                  ["Impuesto Timbres y Estampillas (2)", {text: currency(amount * ITE), alignment: "right"}],
                  ["Gastos Notariales (3)", {text: currency(legal_amount), alignment: "right"}],
                  [
                    "Otros Gastos (4)",
                    {text: numeralAdd(...expenses.map(el => el.amount)).format("$0,0"), alignment: "right"}
                  ],
                  [
                    "Gasto Total Operación (1)+(2)+(3)+(4)",
                    {
                      text: numeralAdd(
                        ...expenses.map(el => el.amount),
                        legal_amount,
                        amount * ITE,
                        amount_requested * commission_final
                      ).format("$0,0"),
                      alignment: "right"
                    }
                  ],
                  [
                    {text: "Monto a Entregar Cliente", bold: true},
                    {text: currency(amount_requested), bold: true, alignment: "right"}
                  ],
                  ["CAE", {text: percentage(cae), alignment: "right"}],
                  ["Tasa AEF Doble Impacto (anual)", {text: percentage(commission), alignment: "right"}],
                  ["Tasa Retorno Inversionista (anual)", {text: percentage(nar), alignment: "right"}],
                  [
                    `Plazo (${translate[periodicity.measure][1]})`,
                    {text: periodicity.duration * dues.length, alignment: "right"}
                  ],
                  ["Amortización", credit_type],
                  [
                    {text: "Costo Total Financiamiento", bold: true},
                    {text: totalDue, bold: true, alignment: "right"}
                  ]
                ]
              },
              layout: {
                fillColor(i) {
                  if ([3, 9, 15].includes(i)) return "#d2ccd9";
                  return "#eae6ed";
                },
                hLineColor: "white",
                vLineColor: "white"
              }
            },
            "\n\n",
            {
              color: "#4b2a60",
              ul: [
                {
                  text:
                    /* eslint-disable-next-line max-len */
                    "La entrega de esta simulación no implica que el financiamiento se encuentre aprobado. La aprobación y sus condiciones están sujetas a la evaluación de impacto y riesgo crédito por parte de Doble Impacto.",
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                /* eslint-disable-next-line max-len */
                "Costo Total de financiamiento incluye asesoría de estructura financiera, impuestos, gastos notariales, intereses y otros gastos (tasaciones, inscripciones, seguros, otros)."
              ],
              pageBreak: "after"
            },
            {
              color: "#4d2c62",
              table: {
                widths: ["*", "*", "*", "*"],
                headerRows: 1,
                body: [
                  [
                    {text: "Cuota", alignment: "center", fillColor: "#4b2a60", color: "white"},
                    {text: "Amortización", alignment: "center", fillColor: "#4b2a60", color: "white"},
                    {text: "Interés", alignment: "center", fillColor: "#4b2a60", color: "white"},
                    {text: "Valor Cuota", alignment: "center", fillColor: "#4b2a60", color: "white"}
                  ],
                  ...dues
                    .map(due =>
                      ["amount", "interest", "quote"].reduce(
                        (obj, key) => Object.assign(obj, {[key]: currency(due[key])}),
                        {}
                      )
                    )
                    .map((due, id) => {
                      let ret = [id + 1, due.amount, due.interest, due.quote];
                      return ret;
                    })
                ]
              },
              layout: {
                fillColor(i) {
                  if (i % 2) return "#d2ccd9";
                  return "#eae6ed";
                },
                hLineColor: "white",
                vLineColor: "white"
              },
              style: {
                alignment: "right"
              }
            }
          ]
        };
        return dd;
      }
    });
  },
  FeeSimple(db) {
    const schema = new db.Schema(
      {
        amount: {
          type: "Currency",
          min: 0,
          default: 0,
          name: "Amortización"
        },
        interest: {
          type: "Currency",
          min: 0,
          name: "Interés",
          default: 0
        }
      },
      {_id: false, id: false, hideCreationdate: true}
    );
    Object.assign(
      schema.virtual("quote").get(function () {
        return this.amount + this.interest;
      }).options,
      {
        name: "Cuota",
        type: "Currency",
        component: "Currency",
        tdClass: "number",
        hidden: ["create", "update"]
      }
    );
    return schema;
  },
  Fee(db) {
    Log.warn(
      "Fee",
      "recuerde que si usa esta función como auxiliar en un esquema base dede reemplazar mir por 'localMir'"
    );
    const payment = new db.Schema(
      {
        date: {
          type: Date,
          name: "Pago",
          lazy: false,
          required: true
        },
        amount: {
          type: "Currency",
          min: 0,
          default: 0,
          name: "Monto",
          required: "El monto del pago es requerido"
        },
        voucher: {
          type: "File",
          name: "Comprobante"
        },
        days_past_payment: {
          name: "Días al pago",
          type: Number,
          hidden: "create"
        },
        interest: {
          name: "Interés Moratorio",
          type: "Currency",
          hidden: "create"
        },
        balance: {
          name: "Saldo",
          type: "Currency",
          hidden: "create"
        }
      },
      {id: false}
    );
    const quote = new db.Schema(
      {
        to_pay: {
          type: Date,
          name: "F. Vcto.",
          readonly: true
        },
        amount: {
          type: "Currency",
          min: 0,
          default: 0,
          name: "Amort.",
          popupTable: "Amortización"
        },
        interest: {
          type: "Currency",
          min: 0,
          name: "Interés",
          default: 0
        },
        paid_date: {
          type: Date,
          name: "Último Pago",
          filter: "between"
        },
        voucher: {
          type: "File",
          name: "Comp.",
          popupTable: "Comprobante de Pago"
        },
        message: {
          type: String,
          name: "Mensaje",
          hidden: "view"
        },
        operationalStatus: {
          type: String,
          name: "Estado Operacional",
          enum: operationalStatus,
          default: "Normal",
          hidden: ["create", "update"]
        },
        paymentStatus: {
          type: String,
          name: "Estado de Pago",
          enum: paymentStatus,
          get: getPaymentStatus,
          set: getPaymentStatus
        },
        payments: {
          type: [payment],
          name: "Pagos",
          noStacked: true,
          horizontal: false,
          onlyCreate: true
        }
      },
      {_id: true, id: false}
    );
    Object.assign(
      quote.virtual("quote").get(function quote() {
        return Math.round(this.amount + this.interest);
      }).options,
      {
        name: "Cuota",
        type: "Currency",
        component: "Currency"
      }
    );
    Object.assign(
      quote.virtual("paid").get(function paid() {
        //primero evaluamos si no hay pagos.
        return this.payments.reduce((sum, payment) => (sum += payment ? payment.amount : 0), 0);
      }).options,
      {
        name: "Pagado",
        type: "Currency",
        component: "Currency"
      }
    );
    Object.assign(
      quote.virtual("moratory").get(function moratory() {
        //primero evaluamos si no hay pagos.
        return this.payments.reduce((sum, payment) => (sum += payment ? payment.interest : 0), 0);
      }).options,
      {
        name: "Mora Pagada",
        type: "Currency",
        component: "Currency"
      }
    );
    Object.assign(
      quote.virtual("balance").get(function moratory() {
        //primero evaluamos si no hay pagos.
        const l = this.payments.length;
        return l > 0 ? this.payments[l - 1].balance : this.quote;
      }).options,
      {
        name: "Saldo",
        type: "Currency",
        component: "Currency"
      }
    );
    Object.assign(
      quote.virtual("amount_paid").get(function amount_paid() {
        const {amount, paid, interest, moratory} = this;
        const discountFirst = this.schema.get("discountFirst") || "amount";
        //recuperamos cuanto ha pagado
        const balance = paid - moratory;
        if (discountFirst === "amount") {
          //tomamos el valor menor entre la amortización de la cuota y el balance pagado;
          return Math.round(Math.min(amount, balance));
        }
        //primero se descuenta el interés
        return balance > interest ? Math.round(Math.min(balance - interest, amount)) : 0;
      }).options,
      {
        name: "Amort. Pagada",
        type: "Currency"
        //hidden: true
      }
    );
    Object.assign(
      quote.virtual("interest_paid").get(function interest_paid() {
        const {amount, interest, moratory, paid} = this;
        const discountFirst = this.schema.get("discountFirst") || "amount";
        const balance = paid - moratory; //balance del pago
        if (discountFirst === "interest") {
          //tomamos el valor menor entre el interés de la cuota y el balance pagado;
          return Math.round(Math.min(interest, balance));
        }
        //si el balance es mayor que la amortización se la asignamos al interés
        return balance > amount ? Math.round(Math.min(balance - amount, interest)) : 0;
      }).options,
      {
        name: "Interés Pagado",
        type: "Currency"
        //hidden: true
      }
    );
    quote.pre("validate", async function () {
      //escape rápido para caso de modelo débil
      if (!this.parent()) return;
      if (!this._id) this._id = db.Types.ObjectId();
      const l = this.payments.length;
      if (l > 0) {
        const {date, voucher} = this.payments[l - 1];
        if (this.paid_date?.getTime() !== date.getTime()) this.paid_date = date;
        if (Math.round(this.balance) === 0 && voucher) {
          this.voucher = voucher;
        }
      }
      if (l === 0 && this.paid_date) this.paid_date = undefined;
    });
    return {quote, payment};
  },
  Expenses(db) {
    return new db.Schema(
      {
        amount: {
          type: "Currency",
          required: "El monto debe tener valor",
          default: 0,
          name: "Gasto"
        },
        description: {
          type: String,
          required: "el gasto debe tener descripción",
          name: "Descripción"
        },
        date: {
          type: Date,
          name: "Fecha",
          required: "El gasto debe tener la fecha en la que se realizó",
          lazy: false
        },
        voucher: {
          type: "File",
          name: "Comprobante"
        }
      },
      {_id: false, id: false}
    );
  },
  fonts,
  calcTotalAmount: arr =>
    currency(arr.reduce((total, {amount, interest}) => total + numeralAdd(amount, interest).value(), 0)),
  calcCapitalAmount: arr => currency(arr.reduce((total, {amount}) => total + amount, 0)),
  IRR(schema, virtual, name, amountName) {
    Object.assign(
      schema.virtual(virtual).get(function () {
        let duration = moment.duration(this.periodicity.duration, this.periodicity.measure).asDays();
        let {dues} = this;
        let amount = this[amountName];
        //amount = numeral(amount).value();
        let cuotas = dues.map(({amount, interest}) => numeralAdd(amount, interest).value());
        let sumC = cuotas.reduce((sum, c) => sum + c, 0);
        let sumCM = cuotas.reduce((sum, c, id) => sum + c * (id + 1), 0);
        let sumCD = cuotas.reduce((sum, c, id) => sum + c / (id + 1), 0);

        let r1 = (sumC / amount) ** (sumC / sumCM) - 1;
        let r2 = (sumC / amount) ** (sumCD / sumC) - 1;
        if (Math.abs(r2 - r1) < 0.0001) return (360 / duration) * ((r1 + r2) / 2);

        const VAN = i => -amount + cuotas.reduce((sum, cuota, id) => sum + cuota / (1 + i) ** (id + 1), 0);

        let max;
        let min;
        let last = r1;
        let count = 1000;
        let step = (r2 - r1) / count;
        for (let i = 0; i < count; i++) {
          let r = r1 + step * i;
          let VANi = VAN(r);
          if (VANi < 0) {
            max = last;
            min = r;
            break;
          }
          last = r;
        }
        return percentage((360 / duration) * ((max + min) / 2));
      }).options,
      {
        name,
        type: "percentage"
      }
    );
  },
  toProject(db, schema, modelName) {
    db.addActionButton({
      schema,
      name: "toProject",
      options: {
        name: "Convertir a Proyecto",
        type: String,
        hiddenDetail: true,
        tablePos: 1000000
      },
      method: "POST",
      getFunc() {
        let {_id} = this;
        let tipo_simulacion = this.constructor.modelName;
        let simulacion = _id;
        return this.db
          .model("Project")
          .findOne({tipo_simulacion, simulacion})
          .lean()
          .then(res => {
            let text;
            if (!res) text = "Convertir";
            if (res) {
              text = res.status === "En Borrador" ? "Actualizar" : "Convertida";
            }
            return {_id, text, disabled: !!res && res.status !== "En Borrador"};
          });
      },
      Func(req, res) {
        req.db[modelName]
          .findById(req.query.id)
          .populate("company")
          .then(sim => {
            let {company} = sim;
            Log.silly("Simulacion.toProject", "find", sim);
            if (company.estado !== "Activa") {
              res.status(500);
              return {
                /* eslint-disable-next-line max-len */
                message: `La empresa ${company.name} - ${company._id} no está activa, para poder pasar a proyecto primero debe activarla`,
                status: "error"
              };
            }
            //buscamos el proyecto.
            let tipo_simulacion = modelName;
            let simulacion = req.query.id;
            sim = sim.toJSON({versionKey: false, virtuals: false, getters: false});
            [
              "_id",
              "creationUser",
              "creationUserModel",
              "creationDate",
              "updateUser",
              "updateUserModel",
              "updateDate"
            ].forEach(key => delete sim[key]);
            Log.silly("Simulacion.sim", "project", sim);
            return req.db.Project.findOne({tipo_simulacion, simulacion}).then(proy => {
              if (_.isEmpty(proy)) proy = new req.db.Project(sim);
              proy.simulacion = simulacion;
              proy.tipo_simulacion = tipo_simulacion;
              proy.setReq(req);
              proy.setLocal("__toUpdate", true);
              proy.set(sim);
              proy.set({company: company._id});
              Log.silly("Simulacion.project", "project", proy);
              return proy
                .FWpresave(req)
                .then(() => {
                  return proy.save().then(P => {
                    Log.silly("Simulacion.saved", P);
                  });
                })
                .then(() => {
                  if (proy.isNew) return {status: "new"};
                  else if (proy.status !== "En Borrador") return {status: "published"};
                  else return {status: "update"};
                })
                .catch(err => {
                  Log.error("toProject API", SE(err));
                  res.status(500);
                  return {status: "error"};
                });
            });
          })
          .then(res.json)
          .catch(err => {
            Log.error("toProject", err);
            res.status(500).json(SE(err));
          });
      }
    });
  },
  /*
   *simulacionUpdateDelete(schema) {
   *  schema.virtual("_update").get(async function() {
   *    const project = await this.model("Project").findOne({
   *      simulacion: this._id,
   *      tipo_simulacion: this.constructor.modelName
   *    });
   *    if (!project) return true;
   *    if (project.status !== "En Borrador") return false;
   *    return true;
   *  });
   *  schema.virtual("_delete").get(async function() {
   *    const project = await this.model("Project").findOne({
   *      simulacion: this._id,
   *      tipo_simulacion: this.constructor.modelName
   *    });
   *    if (!project) return true;
   *    return false;
   *  });
   *},
   */
  refInvestedProjects(db, schema, query = {}) {
    db.addGetRef(schema, async function investedProjects(req) {
      const {id, filter} = req.query;
      //consultamos los proyectos.
      Log.silly("refInvestedProjects", req.query, req.body);
      const projects = await req.db.Investment.distinct("project", {
        investor: req.actualUser,
        status: "Terminada",
        ...(id ? {project: id} : {}),
        ...query
      });
      const result = await req.db.Project.find({
        _id: {$in: projects},
        ...(filter ? {name: new RegExp(filter, "i")} : {})
      })
        .select("_id name")
        .lean();
      return result.map(res => ({text: res.name, value: res._id}));
    });
  },
  refInvestedCompanies(db, schema, query = {}) {
    db.addGetRef(schema, async function investedCompanies(req) {
      const {id, filter} = req.query;
      //consultamos los proyectos.
      Log.silly("refInvestedCompanies", req.query, req.body);
      const projects = await req.db.Investment.distinct("project", {
        investor: req.actualUser,
        status: "Terminada"
      });
      //consultamos las empresas de los proyectos de las inversiones
      const companies = await req.db.Project.distinct("company", {
        _id: {$in: projects}
      });
      const result = await req.db.Empresa.find({
        $and: [{_id: {$in: companies}}, id ? {_id: id} : {}],
        ...(filter ? {name: new RegExp(filter, "i")} : {}),
        ...query
      })
        .select("_id name")
        .lean();
      return result.map(res => ({text: res.name, value: res._id}));
    });
  },
  refInvestedPagares(db, schema, query = {}) {
    db.addGetRef(schema, async function investedPagares(req) {
      const {id, filter} = req.query;
      //consultamos los proyectos.
      Log.silly("refInvestedPagares", req.query, req.body);
      const investments = await req.db.Investment.distinct("_id", {
        investor: req.actualUser,
        status: "Terminada"
      });
      const result = await req.db.Pagare.find({
        investments: {$in: investments},
        ...(id ? {_id: id} : {}),
        ...(filter ? {mnemotecnico: new RegExp(filter, "i")} : {}),
        ...query
      })
        .select("_id mnemotecnico")
        .lean();
      return result.map(res => ({text: res.mnemotecnico, value: res._id}));
    });
  },
  /* Posibles casos
   *  iguales, o no hay cuotas 0 o las cuotas antiguas no fueron reducidas anteriormente. Los datos se transfieren antes de compactar
   *  quotes > old_quotes, las cuotas antiguas ya fueron reducidas. Los datos se transfieren después de compactar
   *  quotes < old_quotes, ERROR, quotes siempre viene con el tamaño original.
   */
  reduceAndCompactQuotes({quotes, rate, old_quotes = [], keep_fields = []}) {
    let localQuotes = [...quotes].map(quote => (quote.toJSON ? quote.toJSON() : quote));
    let patch = old_quotes.length === 0 ? true : false;
    /*
     *Log.silly("reduceAndCompactQuotes", localQuotes.length, old_quotes.length);
     *Log.silly("reduceAndCompactQuotes", localQuotes);
     */
    if (old_quotes.length === localQuotes.length) {
      //significa que las cuotas no han sido reducidas o no hay cuotas 0
      patch = true;
      localQuotes = localQuotes.map((quote, id) => {
        return {...quote, ..._.pick(old_quotes[id], keep_fields)};
      });
      //Log.silly("reduceAndCompactQuotes", "same size", localQuotes);
    }
    localQuotes = localQuotes
      .filter(q => q.amount + q.interest > 0)
      .map(quote => ({
        ...(quote.toJSON ? quote.toJSON() : quote),
        amount: quote.amount * rate,
        interest: quote.interest * rate
      }));
    //Log.silly("reduceAndCompactQuotes", "after compact", localQuotes.length);
    if (!patch) {
      if (old_quotes.length === localQuotes.length) {
        //significa que las cuotas ya se modificaron anteriormente.
        localQuotes = localQuotes.map((quote, id) => {
          return {...quote, ..._.pick(old_quotes[id], keep_fields)};
        });
        //Log.silly("reduceAndCompactQuotes", "last patch", localQuotes.length);
      } else throw {message: "El tamaño de las cuotas nuevas y las antiguas no coincide"};
    }
    return localQuotes;
  },
  setDatesQuotes({quotes, date, periodicity, field = "date"}) {
    return [...quotes].map((quote, id) => {
      const cicle = moment.duration(periodicity.duration * (id + 1), periodicity.measure);
      const localDate = moment(date);
      localDate.add(cicle);
      return {
        ...(quote.toJSON ? quote.toJSON() : quote),
        [field]: localDate.toDate()
      };
    });
  }
};
