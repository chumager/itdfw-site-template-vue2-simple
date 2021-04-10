"use strict";

const set = {
  GET(req, res) {
    res.json(
      req.db.Counter_Pagare.findOne({id: "Pagare"})
        .select("seq")
        .lean()
    );
  },
  PUT(req, res) {
    const {counter} = req.body;
    res.json(req.db.Counter_Pagare.updateOne({id: "Pagare"}, {seq: counter}));
  },
  name: "Configurar Contador Pagaré",
  description: "Permite configurar el número que se usará para el próximo pagaré",
  component: "ContadorPagare",
  isAnonymous: process.env.NODE_ENV !== "production",
  methods: ["GET", "PUT"]
};

module.exports = {set};
