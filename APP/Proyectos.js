"use strict";
/*global Log */
const GeneraPagares = {
  GET(req, res) {
    //consultamos todos los proyectos y generamos los pagarés correspondientes.
    Log.info("GeneraPagares", "start");
    req.db.Project.find()
      .autopopulate()
      .exec()
      .then(projects => {
        Log.silly("GeneraPagares", "cantidad de proyectos:", projects.length);
        return Promise.all(
          projects.map(project => {
            return req.db.Pagare.createFromProject(project);
          })
        );
      })
      .then(result => {
        //transformamos el resultado
        result = result.reduce((arr, val) => arr.concat(val), []);
        res.json(result);
      })
      .catch(err => {
        Log.error("GeneraPagares", err);
        res.status(500).json(err);
      });
  },
  name: "Generación Automática de pagarés (NO ASIGNAR)",
  description:
    "Permite generar todos los pagarés de la plataforma, por el consumo de recursos\
  necesarios para operar no se debe asignar",
  methods: ["GET"],
  component: "PagareAll",
  routes: undefined
};
module.exports = {
  GeneraPagares
};
