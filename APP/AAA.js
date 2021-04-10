"use strict";

/*global REST,moment,Log, numeral, cipher */
const PortalInversionista = {
  async GET(req, res) {
    const model = req.params.ext;
    const config = {model};
    if (model === "clear") {
      delete req.session.portalFrom;
      return res.json({clear: true});
    }
    const investor = req.actualUser;
    if (model === "tabs") {
      Log.silly("PortalInversionista", investor, req.session.user);
      const inv = await req.db.Inversionista.findById(investor);
      await inv.populate("tipo").execPopulate();
      Log.silly("PortalInversionista inversionista", inv);
      const {representedUser, portalFrom} = req.session;
      const components = [...inv.tipo.componentes].filter(comp => {
        if (comp.delegatedUser) return true;
        if (portalFrom || representedUser) return false;
        return true;
      });
      Log.silly("PortalInversionista components", components);
      return res.json(components);
    }
    if (req.query.type === "specs" && model === "json") return res.json({});
    if (model !== "cartola") return REST(config).GET.json(req, res);
    //Log.silly("CARTOLA", ObjectId(investor));
    //ODS
    let ods = await Promise.all([
      req.db.ODS.find().lean(),
      req.db.Investment.aggregate([
        {
          $match: {
            investor,
            active: true,
            status: "Terminada",
            isPaid: false
          }
        },
        {
          $project: {
            project: 1
          }
        },
        {
          $lookup: {
            from: "projects",
            localField: "project",
            foreignField: "_id",
            as: "project"
          }
        },
        {
          $unwind: {
            path: "$project"
          }
        },
        {
          $project: {
            ODS: "$project.ODS"
          }
        },
        {
          $unwind: {
            path: "$ODS"
          }
        },
        {
          $group: {
            _id: 1,
            ODS: {
              $addToSet: "$ODS"
            }
          }
        }
      ])
    ]).then(v => {
      let [ods, [selected]] = JSON.parse(JSON.stringify(v));
      console.log(selected);
      return ods.map(el => {
        return {
          active: selected ? selected.ODS.includes(el._id) : false,
          img: "/APP/AAA/getFile.json?xhr=true&file=" + el.icon
        };
      });
    });
    const [allODS, currentODS] = await Promise.all([
      req.db.ODS.find().lean(),
      req.db.Investment.find({
        investor,
        status: "Terminada",
        isPaid: false
      })
        .populate({path: "project", select: "ODS"})
        .select("project")
        .lean()
    ]);
    let odsNEW = allODS.map(ods => ({
      active: currentODS.includes(ods._id),
      img: "/APP/AAA/getFile.json?xhr=true&file=" + ods.icon
    }));

    //SUMMARY
    let summary = req.db.Investment.aggregate([
      {
        $match: {
          investor,
          active: true,
          status: "Terminada"
        }
      },
      {
        $unwind: {
          path: "$refund"
        }
      },
      {
        $match: {
          $expr: {$in: [{$type: "$refund.paid_date"}, ["missing", "null"]]},
          $or: [{"refund.amount": {$ne: 0}}, {"refund.interest": {$ne: 0}}]
        }
      },
      {
        $group: {
          _id: 1,
          total_current_investments: {
            $addToSet: "$_id"
          },
          current_investment_amount: {
            $sum: "$refund.amount"
          }
        }
      },
      {
        $project: {
          total_current_investments: {$size: "$total_current_investments"},
          current_investment_amount: 1,
          _id: 0
        }
      }
    ]).then(([{total_current_investments = 0, current_investment_amount = 0} = {}]) => ({
      total_current_investments,
      current_investment_amount: numeral(current_investment_amount).format("$0,0")
    }));
    //SUMMARY REPLACEMENT
    let current_investmens = await req.db.Investment.find({investor, status: "Terminada", isPaid: false});
    let summaryNEW = {
      total_current_investments: current_investmens.length,
      current_investment_amount: [...current_investmens].reduce((sum, investment) => sum + investment.amount_pending, 0)
    };
    //EXPIRATIONS
    //inicio del cálculo
    //Log.silly("MOMENT", moment.localeData());
    let date = moment().set({D: 1, h: 0, m: 0, s: 0, ms: 0});
    let months = new Array(5).fill(0).map(() => {
      let start = moment(date);
      let end = moment(date.add(1, "M"));
      let month = start.format("MMMM");
      return {
        start,
        end,
        month
      };
    });
    delete months[0].start;
    async function expiration(start, end, month) {
      start = start && start.toDate();
      end = end.toDate();
      let filter = {
        $lt: end
      };
      if (start) filter.$gte = start;
      //Log.silly("EXPIRATIONS start", start, end, month);
      let aggregate = [
        {
          $match: {
            status: "Terminada",
            active: true,
            investor,
            refund: {
              $elemMatch: {
                to_pay: filter,
                paid_date: {$exists: false}
              }
            }
          }
        },
        {
          $project: {
            project: 1,
            refund: 1
          }
        },
        {
          $unwind: {
            path: "$refund"
          }
        },
        {
          $project: {
            project: 1,
            monto: {
              $add: ["$refund.amount", "$refund.interest"]
            },
            fecha_cuota: "$refund.to_pay",
            fecha_pagada: "$refund.paid_date"
          }
        },
        {
          $match: {
            monto: {$ne: 0}
          }
        },
        {
          $lookup: {
            from: "projects",
            let: {
              project: "$project"
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$_id", "$$project"]
                  }
                }
              },
              {
                $project: {
                  name: 1,
                  _id: 0
                }
              }
            ],
            as: "project"
          }
        },
        {
          $unwind: {
            path: "$project"
          }
        },
        {
          $match: {
            fecha_cuota: filter,
            fecha_pagada: {$exists: false}
          }
        },
        {
          $project: {
            name: "$project.name",
            monto: 1,
            fecha_cuota: 1
          }
        },
        {
          $sort: {
            fecha_cuota: 1,
            name: 1
          }
        },
        {
          $group: {
            _id: null,
            cantidad: {
              $sum: 1
            },
            monto: {
              $sum: "$monto"
            },
            detail: {
              $push: {
                proyecto: "$name",
                monto: "$monto",
                fecha_cuota: "$fecha_cuota"
              }
            }
          }
        }
      ];
      return req.db.Investment.aggregate(aggregate)
        .then(res => {
          res = res[0];
          //Log.silly("EXPIRATIONS", res);
          if (!res)
            return {
              month,
              monto: "$0",
              detail: []
            };
          return {
            month,
            monto: numeral(res.monto).format("$0,0"),
            cantidad: res.cantidad,
            detail: res.detail
          };
        })
        .catch(err => Log.error("EXPIRATIONS", err));
    }
    async function expirationNEW(start, end, month) {
      start = start && start.toDate();
      end = end.toDate();
      let filter = {
        $lt: end
      };
      if (start) filter.$gte = start;
      try {
        const quotes = await req.db.Investment_refund.find({investor, isPaid: false, to_pay: filter}).populate({
          path: "project",
          select: {name: 1}
        });
        let monto = 0;
        const detail = [];
        const cantidad = [...quotes].length;
        [...quotes].forEach(quote => {
          monto += quote.balance;
          detail.push({
            proyecto: quote.project.name,
            monto: quote.balance,
            fecha_cuota: new Date(quote.to_pay).getTime()
          });
        });
        return {
          month,
          monto,
          detail,
          cantidad
        };
      } catch (err) {
        Log.error("EXPIRATIONS", err);
        return {
          month,
          monto: 0,
          detail: []
        };
      }
    }
    const investments = Promise.all([
      req.db.Investment.aggregate([
        {
          $match: {
            investor,
            active: true,
            status: "Terminada"
          }
        },
        {
          $lookup: {
            from: "projects",
            localField: "project",
            foreignField: "_id",
            as: "project"
          }
        },
        {
          $unwind: {
            path: "$project"
          }
        },
        {
          $unwind: {
            path: "$refund"
          }
        },
        {
          $match: {
            "refund.paid_date": {
              $exists: false
            }
          }
        },
        {
          $project: {
            area: {
              $toObjectId: "$project.area.area"
            },
            sector: {
              $toObjectId: "$project.area.sector"
            },
            amount: {
              $add: ["$refund.amount", "$refund.interest"]
            }
          }
        },
        {
          $match: {
            amount: {
              $gt: 0.0
            }
          }
        },
        {
          $lookup: {
            from: "areas",
            localField: "area",
            foreignField: "_id",
            as: "area"
          }
        },
        {
          $lookup: {
            from: "sectors",
            localField: "sector",
            foreignField: "_id",
            as: "sector"
          }
        },
        {
          $unwind: {
            path: "$area"
          }
        },
        {
          $unwind: {
            path: "$sector"
          }
        },
        {
          $project: {
            section: "$area.name",
            sector: "$sector.name",
            amount: 1,
            color: "$area.color"
          }
        },
        {
          $group: {
            _id: 1,
            all: {
              $push: {
                section: "$section",
                sector: "$sector",
                color: "$color",
                amount: "$amount"
              }
            },
            total: {
              $sum: "$amount"
            }
          }
        },
        {
          $unwind: {
            path: "$all"
          }
        },
        {
          $project: {
            sector: "$all.sector",
            section: "$all.section",
            color: "$all.color",
            sector_total: "$all.amount",
            total: 1
          }
        },
        {
          $group: {
            _id: {
              sector: "$sector",
              color: "$color",
              section: "$section"
            },
            sectorTotal: {
              $sum: "$sector_total"
            },
            total: {
              $avg: "$total"
            }
          }
        },
        {
          $group: {
            _id: "$_id.section",
            color: {
              $last: "$_id.color"
            },
            sectors: {
              $push: {
                sector: "$_id.sector",
                value: "$sectorTotal"
              }
            },
            total: {
              $avg: "$total"
            },
            value: {
              $sum: "$sectorTotal"
            }
          }
        },
        {
          $project: {
            section: "$_id",
            color: "$color",
            sectors: {
              $map: {
                input: "$sectors",
                in: {
                  sector: "$$this.sector",
                  value: {
                    $multiply: [
                      {
                        $divide: ["$$this.value", "$value"]
                      },
                      100
                    ]
                  }
                }
              }
            },
            value: {
              $multiply: [
                {
                  $divide: ["$value", "$total"]
                },
                100
              ]
            }
          }
        }
      ]),
      req.db.Area.aggregate([
        {
          $match: {
            active: true
          }
        },
        {
          $lookup: {
            from: "sectors",
            let: {
              id: "$_id"
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$area", "$$id"]
                  }
                }
              },
              {
                $sort: {
                  position: 1
                }
              }
            ],
            as: "sectores"
          }
        },
        {
          $project: {
            section: "$name",
            color: 1,
            position: 1,
            sectors: {
              $map: {
                input: "$sectores",
                in: {
                  sector: "$$this.name",
                  position: "$$this.position"
                }
              }
            }
          }
        },
        {
          $sort: {
            position: 1
          }
        }
      ])
    ]).then(([investments, all]) => {
      //Log.silly("INVESTMENTS", JSON.stringify(investments, null, 2));
      //Log.silly("INVESTMENTS ALL", JSON.stringify(all, null, 2));
      return all.map(area => {
        return {
          ...area,
          value: (investments.find(inv => inv.section === area.section) || {}).value || 0,
          sectors: area.sectors.map(sector => {
            return {
              ...sector,
              value:
                (
                  (investments.find(inv => inv.section === area.section) || {sectors: []}).sectors.find(
                    sector2 => sector2.sector === sector.sector
                  ) || {}
                ).value || 0
            };
          })
        };
      });
    });
    //Log.silly("CARTOLA", months);
    res.json({
      ods,
      odsNEW,
      summary,
      summaryNEW,
      investments,
      expirations: Promise.map(
        months,
        async ({start, end, month}, id) =>
          await expiration(start, end, month).then(exp => {
            if (id === 0) exp.popup = "Incluye cuotas pendientes de pago de periodos anteriores";
            return exp;
          })
      ),
      expirationsNEW: Promise.map(
        months,
        async ({start, end, month}, id) =>
          await expirationNEW(start, end, month).then(exp => {
            if (id === 0) exp.popup = "Incluye cuotas pendientes de pago de periodos anteriores";
            return exp;
          })
      )
    });
  },
  methods: ["GET"],
  component: "Inversionista",
  hidden: true,
  name: "Portal del Inversionista",
  description:
    /*eslint-disable-next-line max-len*/
    "Interfaz del portal del inversionista, calcula y envía toda la información necesaria para que el componente pueda presentarla al inversionista, cualquier envío de datos al portal se debe definir en esta función"
};
const PortalTercero = {
  GET(req, res) {
    PortalInversionista.GET(req, res);
  },
  POST: {
    json(req, res) {
      const {id} = req.body;
      req.session.portalFrom = id;
      res.json({status: "ok"});
    },
    ref(req, res) {
      res.json(cipher("Inversionista"));
    }
  },
  component: "InversionistaTercero",
  name: "Visor del Portal Inversionista de Terceros",
  description:
    /*eslint-disable-next-line max-len*/
    "Permite ver el portal de un inversionista como si fuera él, pero no permite invertir por razones de seguridad, para ello se debe usar la función de inversión a nombre de terceros",
  methods: ["GET", "POST"]
};
const PortalTest = {
  GET(req, res) {
    //req.db.Inversionista.findOne({email: /chumager@gmail.com/i}).then(inv => {
    Log.silly("PortalTest user", req.Config.develop);
    req.session.portalFrom = req.Config.develop.investor;
    PortalInversionista.GET(req, res);
    //});
  },
  name: "Portal del Inversionista",
  methods: ["GET"],
  component: "Inversionista",
  hidden: process.env.NODE_ENV === "production",
  inNav: true,
  isAnonymous: process.env.NODE_ENV !== "production"
};
module.exports = {
  PortalInversionista,
  PortalTercero,
  PortalTest
};
