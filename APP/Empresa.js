"use strict";
/* global _, SE, Log, */
const Proyecto = {
  name: "Visor de Proyecto",
  route: {
    component: "Project",
    props: true,
    children: [
      {
        path: ":id",
        component: "Project",
        props: true
      }
    ]
  },
  hidden: true,
  methods: ["GET"],
  description: "Permite ver la interfáz de un proyecto, si es posible invertir",
  isAnonymous: true
};
const Proyectos = {
  GET(req, res) {
    let end;
    const start = new Date();
    let {id, offset = 0, limit, type} = req.query;
    type = type || "find";
    let q;
    let status = ["En Financiamiento", "En Formalización", "En Curso", "Cerrado"];
    if (id)
      q = req.db.Project.findById(id)
        .populate("ODS", "icon -_id")
        .populate("company", "name logo description -_id")
        .populate("area.area", null, "Area")
        .populate("area.sector", null, "Sector")
        .then(proj =>
          _.pickBy(proj.toJSON({virtuals: true}), (value, key) => {
            if (key.startsWith("mandato")) return true;
            return [
              "name",
              "ODS",
              "company",
              "area",
              "periodicity",
              "amount",
              "financed",
              "presentation",
              "team",
              "credit_description",
              "nar",
              "dues",
              "carousel",
              "impact",
              "impact_value",
              "impact_text",
              "status",
              "max",
              "min",
              "qty"
            ].includes(key);
          })
        );
    else {
      /*
       *q = req.db.Project.find({status: {$in: status}})
       *  .populate("allInvestments")
       */
      if (type === "aggregate")
        q = req.db.Project.aggregate([
          {
            $match: {
              active: true,
              status: {
                $in: ["En Financiamiento", "En Formalización", "En Curso", "Cerrado"]
              },
              visible: {$ne: false}
            }
          },
          {
            $addFields: {
              qty: {
                $size: "$dues"
              }
            }
          },
          {
            $project: {
              amount: 1,
              background: 1,
              periodicity: 1,
              history: 1,
              qty: 1,
              financed: 1,
              nar: 1,
              name: 1,
              status: 1
            }
          }
        ]);
      else
        q = req.db.Project.find({
          status: {
            $in: ["En Financiamiento", "En Formalización", "En Curso", "Cerrado"]
          },
          visible: {$ne: false}
        })
          .select("_id amount background periodicity dues history financed nar name status")
          .lean();
      q = q
        .then(data => {
          end = new Date();
          Log.silly("Proyectos", "datos recuperados", end - start);
          return data.sort((a, b) => {
            let {status: aStatus} = a;
            let {status: bStatus} = b;
            if (aStatus === bStatus) {
              let aDate = a.history[0].date;
              let bDate = b.history[0].date;
              if (aStatus === "En Financiamiento") return aDate - bDate;
              return bDate - aDate;
            }
            let aLevel = status.indexOf(aStatus);
            let bLevel = status.indexOf(bStatus);
            return aLevel - bLevel;
          });
        })
        .then(data => {
          end = new Date();
          Log.silly("Proyectos", "datos ordenados", end - start);
          data = data.map(el => {
            if (el.dues) el.qty = el.dues.length;
            el.dues = undefined;
            el.history = undefined;
            return el;
          });
          end = new Date();
          Log.silly("Proyectos", "tiempo", end - start);
          return data;
        });
    }
    q.then(result => {
      let output;
      if (!limit) output = result;
      else output = result.slice(offset * 1, offset * 1 + limit * 1);
      end = new Date();
      Log.silly("Proyectos", "final", end - start);
      res.json(output);
    }).catch(err => {
      Log.error("Proyectos", err);
      res.status(500).json(SE(err));
    });
  },
  hidden: true,
  name: "Obtener datos de proyectos",
  description: "Permite obtener la información sobre todos o un proyecto para su visualización",
  component: "Projects",
  methods: ["GET"],
  isAnonymous: true
};
const Financed = {
  GET(req, res) {
    let q = req.db.Project.find({address: {$exists: true}})
      .select("address background")
      .lean();
    //.cursor();
    res.json(q);
  },
  inNav: false,
  hidden: true,
  name: "Proyectos Financiados",
  description: "Entrega la información de los proyectos que ya están financiados para el mapa",
  methods: ["GET"],
  isAnonymous: true
};

module.exports = {
  Proyecto,
  Proyectos,
  Financed
};
