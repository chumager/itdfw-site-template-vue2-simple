"use strict";
/* global Datauri, Log, moment, numeral, _ */

const path = require("path");
const {fonts} = require("./Core");
const images = {
  header: new Datauri(path.join(__dirname, "../html/images/header_mandato.png")).content,
  footer: new Datauri(path.join(__dirname, "../html/images/footer_mandato.png")).content
};
//este archivo contiene los mandatos en una estructura que se puede usar para incluirlos en options, enum y createPDF
//TODO, recordar agregar el schema cuando se use con createPDF

module.exports = [
  {
    //schema: Project,
    virtual: "mandato",
    name: "Mandato",
    func: "getMandato",
    fonts,
    options: {
      hidden: "view",
      hiddenDetail: true
    },
    //type: "json",
    filename: val => `Mandato ${val.name}.pdf`,
    async dd(req) {
      Log.silly("getMandato", "start");
      let {user, model, userData} = req.session;
      const investor = user && model && (await req.db[model].findById(user));
      userData = userData || (await investor.userData(req));
      let {monto} = req.query;
      let dd = {
        header: {
          image: "header",
          alignment: "center",
          width: 610
        },
        footer: {
          image: "footer",
          width: 610
        },
        images,
        style: {},
        pageSize: "LEGAL",
        pageMargins: [40, 80, 40, 40],
        defaultStyle: {
          font: "Raleway",
          fontSize: 11,
          preserveLeadingSpaces: true,
          lineHeight: 1.5,
          alignment: "justify"
        },
        content: []
      };
      /*eslint-disable max-len*/
      dd.content = [
        {
          text: `En Santiago, Chile, a ${moment().format("DD [de] MMMM [de] YYYY")}, comparece ${
            userData.fullname
          }, RUT N°: ${userData.rut}, ${(userData.address &&
            userData.address.formatted_address &&
            `con domicilio en ${userData.address.fullAddress};`) ||
            ""} en adelante el “Mandante”, quien declara: 
Primero: que en este acto viene en conferir poder especial a Doble Impacto SpA, RUT N° 76.792.913-7, en adelante el “Mandatario”, para negociar, acordar, suscribir, perfeccionar y ejecutar por cuenta y representación del Mandante todo acto, contrato y operación necesarios y conducentes para dar en mutuo o préstamo a la empresa ${
            this.constructor.modelName === "Project" ? this.company.name : this.project.company.name
          }, en adelante el “Deudor”, la suma de ${numeral(monto).format(
            "$0,0"
          )}, para lo cual tendrá las siguientes facultades:`
        },
        {
          ol: [
            "recibir dineros como fondos por rendir y entregárselos por cuenta del Mandante al Deudor, sea mediante depósito o transferencia electrónica, contra recepción de un pagaré debidamente firmado por el Deudor en términos que razonablemente defina el Mandatario;",
            "recibir y custodiar   el pagaré o cualquier otro instrumento firmado por el Deudor; cobrar y percibir todas y cada una de las cuotas del capital dado en mutuo o préstamo, sus intereses y demás pagos que se estipulen a favor del Mandante; aceptar daciones en pago del Deudor y recibir facturas u otros instrumentos cedidas en dominio, cobranza y/o garantía;",
            "deducir de los cobros al Deudor, toda suma que hubieren acordado el Mandante y Mandatario en favor de éste, sean estas comisiones, honorarios y/o cualquier tipo de compensación;",
            "efectuar la cobranza judicial y extrajudicial de toda deuda y obligación del Deudor en favor del Mandante que se contraiga bajo el presente instrumento, pudiendo especialmente el Mandatario endosar en cobranza, en dominio o garantía, a sí mismo o a terceros, todos y cada uno del o los pagarés y demás instrumentos que se hayan suscrito en cumplimiento del presente mandato, en los términos del Art. 22 de la Ley 18.902 sobre Letra de Cambio y Pagaré, endoso que conforme al art. 29 de la misma ley abarca todas las atribuciones propias del mandato judicial, incluyendo todas las atribuciones contempladas en ambos incisos del artículo séptimo del Código de Procedimiento Civil, y especialmente las de demandar, deducir querellas criminales, iniciar cualquier otra gestión judicial, reconvenir, contestar reconvenciones, desistirse en primera instancia de la acción deducida, renunciar a los recursos o términos legales, transigir, comprometer, otorgar a los árbitros las facultades de arbitradores, aprobar convenios, verificar créditos, impugnar verificaciones y percibir, a fin de proseguir con todas las acciones de cobranza que correspondan; a mayor abundamiento el Mandante confiere poder al Mandatario para cobrar facturas, letras de cambio, pagarés y demás efectos de comercio, depositarlos en las cuentas corrientes bancarias que estime convenientes, hacerlos protestar, endosarlos en cobranza, retirarlos y percibir su importe, y ejercer y oponer todas las acciones y excepciones que en derecho correspondan al Mandante para obtener el pago íntegro y oportuno de los montos adeudados al Mandante; este mandato incluye también la ejecución de toda clase de garantías, pudiendo el Mandatario ceder a terceros los derechos emanados de las garantías constituidas en mi favor, otorgar cartas de pago con subrogación en los términos del artículo 1611 de Código Civil, traspasando al nuevo acreedor todos los derechos, acciones, privilegios y garantías que tenga contra el deudor, así como contra los terceros obligados solidaria o subsidiariamente a la deuda; se faculta expresamente al mandatario a descontar de los montos recuperados, todos los gastos incurridos en estas gestiones de cobranza, con antelación y preferencia del crédito del mandante.",
            "celebrar, suscribir y ejecutar todo tipo de cauciones o garantías a favor del Mandante para asegurar el cumplimiento de los montos dados en mutuo o préstamo bajo el presente mandato, incluyendo sin limitación los actos, contratos o convenciones de hipotecas, prendas, prendas sin desplazamiento, fianzas, avales, codeudas y cesiones condicionales, pudiendo estipular toda clase de contraprestaciones, precios, intereses, rentas, honorarios, remuneraciones, reajustes, indemnizaciones, condiciones, plazos y modalidades y convenir o modificar toda clase de pactos o estipulaciones, sean de la esencia, de la naturaleza o meramente accidentales; además, podrá recibir, percibir, entregar, exigir rendiciones de cuentas y ejecutar todos los derechos y acciones que por cualesquiera de estas garantías competan al Mandante; firmar, suscribir y modificar todas las escrituras o instrumentos públicos o privados que sean necesarios para la correcta constitución de las garantías de los montos dados en préstamo o mutuo bajo el presente mandato; practicar todo tipo de inscripciones en los Conservadores de Bienes Raíces y en el Servicio de Registro Civil e Identificación; modificar, desahuciar, anular, rescindir, resciliar, resolver, revocar y terminar los actos, contratos o convenciones antes señalados; pagar, novar, compensar, remitir, modificar y extinguir de cualquier modo toda clase de obligaciones establecidas en dichas cauciones y garantías;",
            "suscribir cesiones de derechos, créditos y contratos, puras y  simples o sujetas a una o más condiciones, en favor del Mandante como cesionario;",
            "para el adecuado desempeño de su cometido, el Mandatario podrá designar   abogados patrocinantes y nombrar apoderados con todas o algunas de las facultades señaladas, quedando autorizados para delegar este poder, total o parcialmente, u otorgar poderes especiales y reasumirlos cuantas veces lo estimen necesario."
          ],
          type: "lower-alpha"
        },
        `Segundo. El Mandatario solo será responsable de culpa grave bajo el presente mandato.

Tercero. Este mandato es irrevocable en los términos del Art. 241 del Código de Comercio, por interesar a quién da mandato y a terceros. 

Cuarto. El Mandante declara que: a) los fondos a ser dados en préstamo bajo el presente mandato provienen de actividades lícitas; b) el presente mandato y su ejecución son operaciones legítimas que no configuran delito alguno, incluyendo aquellos contemplados bajo la Ley N° 19.913 y 20.393.`
      ];
      Log.silly("getMandato", "end");
      return dd;
    }
  },
  {
    //schema: Project,
    virtual: "mandatoFI",
    name: "Mandato Fondo de Inversión",
    func: "getMandatoFI",
    fonts,
    options: {
      hidden: "view",
      hiddenDetail: true
    },
    preFunc($, res, DD) {
      //primero verificamos que no se esté llamando desde Project.
      Log.silly(this.constructor.modelName);
      if (this.constructor.modelName === "Project") {
        DD.content.push(
          "Este Mandato no puede ser visualizado desde la simulación de inversión, ya que requiere datos extras definidos posteriormente a la inversión, se creará posteriormente,"
        );
        return true;
      }
      //asumimos que el metodo viene de inversión.
      //verificamos que tenga los campos.
      const {fecha_mandato, rep_legal, rep_legal_DI} = this;
      Log.silly(
        "mandatoFI preFunc",
        fecha_mandato,
        rep_legal,
        rep_legal_DI,
        !(fecha_mandato && rep_legal.length && rep_legal_DI.length)
      );
      if (!(fecha_mandato && rep_legal.length && rep_legal_DI.length)) {
        if (this.__req) {
          Log.silly("mandatoFI", "tiene req", !!this.__req);
          const {res} = this.__req;
          const error = _.compact([
            !fecha_mandato ? "Fecha de mandato" : null,
            !rep_legal.length ? "Representantes Legales del Fondo de Inversión" : null,
            !rep_legal_DI.length ? "Representantes legales de DobleImpacto" : null
          ])
            .join(", ")
            .replace(/,\s([^,]+)$/, " y $1");
          res.json &&
            res.status(500).json({
              message: `Para este mandato hace falta: ${error}, por favor edite la inversión para completar los datos faltantes`
            });
          return false;
        }
        DD.content.push(
          "Este Mandato no puede ser, ya que requiere datos extras definidos posteriormente a la inversión, se creará posteriormente,"
        );
      }
      //evaluamos si viene __req
      /*
       *if (!this.__req) {
       *  Log.warn("para este mandato se necesita información desde el cliente");
       *  res.json && res.json({status: "Para este mandato se necesita la información desde el request"});
       *  return false;
       *}
       *let {rrll, rrllDI, fecha} = this.__req.body;
       *if (!(rrll && rrllDI && fecha)) {
       *  const {
       *    db: {base: db}
       *  } = this.constructor;
       *  Log.warn("mandatoFI", "para este mandato se necesita información desde el cliente");
       *  this.depopulate("investor");
       *  const schema = new db.Schema(
       *    {
       *      fecha: {
       *        type: Date,
       *        name: "Fecha Mandato",
       *        appendToBody: false
       *      },
       *      rep_legal: db.CrossArray("Rut", "/APP/AAA/Inversionista.rep_legal", "investor", "rut", {
       *        name: "Rep. Legal(es)",
       *        min: 1,
       *        stacked: false,
       *        horizontal: false
       *      })
       *    },
       *    {
       *      _id: false
       *    }
       *  );
       *  Log.warn("mandatoFI", schema);
       *  this.__req.res.json &&
       *    this.__req.res.json({
       *      status: "Para este mandato se necesita la información desde el formulario",
       *      title: "Datos para el mandato",
       *      form: this.constructor.toInputs(schema),
       *      model: {
       *        investor: this.investor
       *      }
       *    });
       *  return false;
       *}
       */
      return true;
    },
    //type: "json",
    filename: val => `Mandato ${val.name}.pdf`,
    dd() {
      Log.silly("getMandatoFI", "start");
      let dd = {
        header: {
          image: "header",
          alignment: "center",
          width: 610
        },
        footer: {
          image: "footer",
          width: 610
        },
        images,
        style: {},
        pageSize: "LEGAL",
        pageMargins: [40, 80, 40, 40],
        defaultStyle: {
          font: "Raleway",
          fontSize: 11,
          preserveLeadingSpaces: true,
          lineHeight: 1.5,
          alignment: "justify"
        },
        content: []
      };
      const {
        fecha_mandato,
        amount,
        rep_legal_DI,
        project: {
          company: {name: company_name, _id: company_rut}
        }
      } = this;
      const fecha_mandatoF = moment(fecha_mandato).format("DD [de] MMMM [de] YYYY");
      const rrll = this.getRepLegal()
        .map(rl => `${rl.fullname}, cedula nacional de identidad ${rl.rut}`)
        .join("# ")
        .replace(/#\s([^#]+)$/, " y $1")
        .replace(/#/g, ",");
      const rrllDI = rep_legal_DI
        .map(rl => `${rl.nombre}, cedula nacional de identidad N° ${rl.rut}`)
        .join("# ")
        .replace(/#\s([^#]+)$/, " y $1")
        .replace(/#/g, ",");
      console.debug(this.rep_legal_DI);
      /*eslint-disable max-len*/
      dd.content = [
        {
          text: [
            `En Santiago, Chile, ${fecha_mandatoF}, comparecen `,
            {
              text: "Quest Doble Impacto Fondo de Inversión",
              bold: true
            },
            ` RUT 77.054.124-7, fondo de inversión público administrado por Quest Administradora General de Fondos S.A., RUT 76.798.260-7, debidamente representada por ${rrll}, ${
              this.rep_legal.length > 1 ? "todos " : ""
            }con domicilio en Avenida las Condes 11.700, torre A, piso 10, comuna de Vitacura, Santiago en adelante el `,
            {
              text: "“Mandante”",
              bold: true
            },
            ", por una parte, y, por la otra, ",
            {
              text: "Doble Impacto SpA",
              bold: true
            },
            `, RUT N° 76.792.913-7, debidamente representada por ${rrllDI}, todos domiciliados en Los Jesuitas N° 727, comuna de Providencia, Santiago en adelante el `,
            {
              text: "“Mandatario”",
              bold: true
            },
            " y conjuntamente con el Mandante, como las ",
            {
              text: "“Partes”",
              bold: true
            },
            ", quienes celebran un contrato de mandato en los términos que se indican a continuación:"
          ]
        },
        {
          text: "\nCLÁUSULA PRIMERA. Antecedentes:\n\n",
          bold: true
        },
        {
          text: [
            "Mediante instrumento privado de fecha 17 de julio de 2019, las Partes celebraron un Contrato Marco (el ",
            {
              text: "“Contrato Marco”",
              bold: true
            },
            "), en virtud del cual se comprometieron a celebrar contratos de mandato para facultar al Mandatario: ",
            {
              text: "(a)",
              bold: true
            },
            " de manera irrevocable y mientras se encuentre vigente el Contrato Marco, con relación a materias operacionales vinculadas a la formalización de la adquisición de títulos de crédito o instrumentos de deuda emitidos por Deudores Seleccionados, según este concepto se define en el Contrato Marco /los ",
            {
              text: "“Deudores Seleccionados”",
              bold: true
            },
            "/, y ",
            {
              text: "(b)",
              bold: true
            },
            " de manera revocable, para realizar gestiones de cobranza respecto a los Deudores Seleccionados."
          ]
        },
        {
          text: "\nCLÁUSULA SEGUNDA. Mandato Irrevocable:\n\n",
          bold: true
        },
        {
          text: [
            {
              text: "Primero:",
              bold: true
            },
            " En este acto el Mandante viene en conferir poder especial al Mandatario, quien acepta el encargo, para negociar, acordar, suscribir, perfeccionar y ejecutar por cuenta y representación del Mandante todo acto, contrato y operación necesarios y conducentes para invertir en títulos de crédito o instrumentos de deuda emitidos por la empresa que se señala a continuación, en adelante el ",
            {
              text: "“Deudor”",
              bold: true
            },
            ", con las facultades indicadas en el párrafo Segundo siguiente, la suma que se indica a continuación:\n"
          ]
        },
        {
          color: "#4d2c62",
          table: {
            widths: ["*", "*", "*"],
            headerRows: 1,
            body: [
              [
                {
                  text: "Nombre Deudor",
                  alignment: "center",
                  fillColor: "#4b2a60",
                  color: "white"
                },
                {
                  text: "RUT",
                  alignment: "center",
                  fillColor: "#4b2a60",
                  color: "white"
                },
                {
                  text: "Monto Inversión",
                  alignment: "center",
                  fillColor: "#4b2a60",
                  color: "white"
                }
              ],
              [
                company_name,
                {
                  text: company_rut,
                  alignment: "right"
                },
                {
                  text: numeral(amount).format("$0,0"),
                  alignment: "right"
                }
              ]
            ]
          }
        },
        {
          text: [
            {
              text: "\nSegundo:",
              bold: true
            },
            " El Mandatario tendrá las siguientes facultades para la ejecución del mandato a que se refiere la presente Cláusula Segunda:\n"
          ]
        },
        {
          ol: [
            "Recibir dineros como fondos por rendir y entregárselos por cuenta del Mandante al Deudor, en los montos y términos indicados precedentemente, sea mediante depósito o transferencia electrónica, contra recepción de un pagaré debidamente firmado por el Deudor, en los términos que razonablemente defina el Mandatario;",
            "Recibir el o los pagarés firmados por el Deudor; y",
            "Celebrar, suscribir y ejecutar todo tipo de cauciones o garantías a favor del Mandante para asegurar el cumplimiento de los montos dados al Deudor contra la adquisición de títulos de crédito o instrumentos de deuda conforme al presente mandato, incluyendo sin limitación los actos, contratos o convenciones de hipotecas, prendas, prendas sin desplazamiento, fianzas, avales, codeudas, fianzas y codeudas solidarias y cesiones condicionales, pudiendo estipular toda clase de contraprestaciones, precios, intereses, rentas, honorarios, remuneraciones, reajustes, indemnizaciones, condiciones, plazos y modalidades y convenir o modificar toda clase de pactos o estipulaciones, sean de la esencia, de la naturaleza o meramente accidentales; además, podrá recibir, percibir, entregar, exigir rendiciones de cuentas y ejecutar todos los derechos y acciones que por cualesquiera de estas garantías competan al Mandante; firmar, suscribir y modificar todas las escrituras o instrumentos públicos o privados que sean necesarios para la correcta constitución de las garantías de los títulos de crédito o instrumentos de deuda adquiridos conforme al presente mandato; practicar todo tipo de inscripciones en los Conservadores de Bienes Raíces y en el Servicio de Registro Civil e Identificación; modificar, desahuciar, anular, rescindir, resciliar, resolver, revocar y terminar los actos, contratos o convenciones antes señalados; pagar, novar, compensar, remitir, modificar y extinguir de cualquier modo toda clase de obligaciones establecidas en dichas cauciones y garantías."
          ],
          separator: ["(", ")\t"],
          type: "lower-alpha"
        },
        {
          text: [
            {
              text: "Tercero: ",
              bold: true
            },
            "Mientras se encuentre vigente el Contrato Marco, el mandato contenido en esta Cláusula Segunda será irrevocable en los términos del Art. 241 del Código de Comercio, por interesar su ejecución tanto al Mandante como al Mandatario."
          ]
        },
        {
          text: "\nCLÁUSULA TERCERA. Mandato Revocable:\n\n",
          bold: true
        },
        {
          text: [
            {
              text: "Primero:",
              bold: true
            },
            " En este acto el Mandante viene en conferir poder especial al Mandatario, quien acepta el encargo, para que realice todas las gestiones de cobro y ejecución de los títulos de crédito e instrumentos de deuda adquiridos conforme al presente mandato, con las facultades indicadas en el párrafo Segundo siguiente."
          ]
        },
        {
          text: [
            {
              text: "\nSegundo:",
              bold: true
            },
            " Para la ejecución del mandato otorgado en la presente Cláusula Tercera, el Mandatario tendrá las siguientes facultades:"
          ]
        },
        {
          ol: [
            "Cobrar y percibir todas y cada una de las cuotas del capital de los títulos de crédito o instrumentos de deuda emitidos por el Deudor, sus intereses y demás pagos que se estipulen a favor del Mandante; aceptar daciones en pago del Deudor y recibir facturas u otros instrumentos cedidos en dominio, cobranza y/o garantía;",
            "Deducir de los cobros al Deudor, toda suma que hubieren acordado el Mandante y Mandatario en favor de éste, sean estas comisiones, honorarios y/o cualquier tipo de compensación;",
            "Efectuar la cobranza judicial y extrajudicial de todo título de crédito o instrumento de deuda correspondiente al Deudor, adquirido conforme al presente instrumento, pudiendo especialmente el Mandatario endosar en cobranza, en dominio o garantía, a sí mismo o a terceros, todos y cada uno del o los pagarés y demás instrumentos que se hayan suscrito en cumplimiento del presente mandato, en los términos del Art. 22 de la Ley 18.092 sobre Letra de Cambio y Pagaré, endoso que conforme al art. 29 de la misma ley abarca todas las atribuciones propias del mandato judicial, incluyendo todas las atribuciones contempladas en ambos incisos del artículo séptimo del Código de Procedimiento Civil, y especialmente las de demandar, deducir querellas criminales, iniciar cualquier otra gestión judicial, reconvenir, contestar reconvenciones, desistirse en primera instancia de la acción deducida, renunciar a los recursos o términos legales, transigir, comprometer, otorgar a los árbitros las facultades de arbitradores, aprobar convenios, verificar créditos, impugnar verificaciones y percibir, a fin de proseguir con todas las acciones de cobranza que correspondan; a mayor abundamiento el Mandante confiere poder al Mandatario para cobrar facturas, letras de cambio, pagarés y demás efectos de comercio, depositarlos en las cuentas corrientes bancarias que estime convenientes, hacerlos protestar, endosarlos en cobranza, retirarlos y percibir su importe, y ejercer y oponer todas las acciones y excepciones que en derecho correspondan al Mandante para obtener el pago íntegro y oportuno de los montos adeudados al Mandante; este mandato incluye también la ejecución de toda clase de garantías, pudiendo el Mandatario ceder a terceros los derechos emanados de las garantías constituidas en favor del Mandante, otorgar cartas de pago con subrogación en los términos del artículo 1611 de Código Civil, traspasando al nuevo acreedor todos los derechos, acciones, privilegios y garantías que tenga contra el deudor, así como contra los terceros obligados solidaria o subsidiariamente a la deuda;",
            "Aceptar daciones en pago del Deudor y recibir facturas u otros instrumentos cedidos en dominio, cobranza y/o garantía, aceptar novaciones, refinanciamientos, repactaciones, convenios de pago y toda clase de convenciones con el Deudor distintas del pago; y",
            "Suscribir cesiones de derechos, créditos y contratos, puras y simples o sujetas a una o más condiciones, en favor del Mandante como cesionario."
          ],
          separator: ["(", ")\t"],
          type: "lower-alpha"
        },
        "Para el adecuado desempeño de su cometido, el Mandatario podrá designar abogados patrocinantes y nombrar apoderados con todas o algunas de las facultades señaladas, quedando autorizados para delegar este poder, total o parcialmente, u otorgar poderes especiales y reasumirlos cuantas veces lo estimen necesario.",
        {
          text: [
            {
              text: "\nTercero:",
              bold: true
            },
            " El Mandante puede revocar el mandato otorgado en esta Cláusula Tercera en cualquier momento y reasumir una o más facultades contempladas en él cuantas veces lo estime necesario."
          ]
        },
        {
          text: "\nCLÁUSULA CUARTA. Misceláneo.\n",
          bold: true
        },
        {
          text: [
            {
              text: "\nPrimero:",
              bold: true
            },
            " El Mandatario será responsable de culpa leve bajo el presente mandato."
          ]
        },
        {
          text: [
            {
              text: "\nSegundo:",
              bold: true
            },
            " El Mandatario podrá ejercer este mandato obrando siempre conforme a los términos del Contrato Marco, circunstancias que no será necesario acreditar a terceros, estableciéndose en el sólo interés de las relaciones entre el Mandante y el Mandatario."
          ]
        },
        {
          text: [
            {
              text: "\nTercero:",
              bold: true
            },
            " Una vez finalizado el encargo, el Mandatario deberá rendir cuenta de su gestión."
          ]
        },
        {
          text: [
            {
              text: "\nCuarto:",
              bold: true
            },
            " El Mandante declara que los fondos a ser dados en préstamo bajo el presente mandato provienen de actividades lícitas."
          ]
        },
        {
          stack: [
            {
              text: `\nLa personería de ${this.getRepLegal()
                .map(rl => rl.fullname)
                .join(", ")
                .replace(
                  /,\s([^,]+)$/,
                  " y $1"
                )} para actuar en representación de Quest Doble Impacto Fondo de Inversión, consta en escritura pública otorgada en la Notaría de Santiago de don René Benavente Cash con fecha 4 de Junio de 2019, bajo el número de Repertorio 23.050-2019.\n`,
              alignment: "justify"
            },
            {
              text: `La personería de ${rep_legal_DI
                .map(rl => rl.nombre)
                .join(", ")
                .replace(
                  /,\s([^,]+)$/,
                  " y $1"
                )} para actuar en representación de Doble Impacto SpA, consta escritura pública otorgada en la Notaría de Santiago de doña M. Angélica Galán Bäuerle con fecha 21 de marzo del año 2018, bajo el número de Repertorio 773-2018.`,
              alignment: "justify"
            },
            "\n\n\n\n",
            {
              columns: this.getRepLegal().map(rep => {
                return {
                  columns: [
                    {
                      width: "*",
                      text: ""
                    },
                    {
                      width: "auto",
                      table: {
                        body: [
                          [
                            {
                              text: ["p.p. ", {text: "Quest Doble Impacto Fondo de Inversión", bold: true}],
                              alignment: "center",
                              border: [false, true, false, false]
                            }
                          ],
                          [{text: "RUT N° 77.054.124-7", alignment: "center"}],
                          [{text: rep.fullname, alignment: "center"}],
                          [{text: `RUT N° ${rep.rut}`, alignment: "center"}]
                        ]
                      },
                      layout: {
                        defaultBorder: false
                      }
                    },
                    {
                      width: "*",
                      text: ""
                    }
                  ]
                };
              }),
              style: {
                lineHeight: 1
              }
            },
            "\n\n\n\n",
            {
              alignment: "center",
              columns: rep_legal_DI.map(rep => {
                return {
                  width: "*",
                  columns: [
                    {
                      width: "*",
                      text: ""
                    },
                    {
                      width: "auto",
                      table: {
                        body: [
                          [
                            {
                              text: ["p.p. ", {text: "Doble Impacto SpA.", bold: true}],
                              alignment: "center",
                              border: [false, true, false, false]
                            }
                          ],
                          [{text: "RUT N° 76.792.913-7", alignment: "center"}],
                          [{text: rep.nombre, alignment: "center"}],
                          [{text: `RUT N° ${rep.rut}`, alignment: "center"}]
                        ]
                      },
                      layout: {
                        defaultBorder: false
                      }
                    },
                    {
                      width: "*",
                      text: ""
                    }
                  ]
                };
              }),
              style: {
                lineHeight: 1
              }
            }
          ],
          alignment: "center",
          unbreakable: true
        }
      ];
      Log.silly("getMandatoFI", "end");
      return dd;
    }
  }
];
