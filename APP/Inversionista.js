"use strict";
/* global Log, */

const Pago = {
  GET: {
    bank(req, res) {
      //verificamos si tiene cuenta bancaria de lo contrario le damos los datos.
      const {user} = req.session;
      if (!user) return res.status(500).json({message: "Sin usuario de sesión"}); //esto nunca debería pasar;
      req.db.Inversionista.findById(user)
        .lean()
        .select("banco")
        .exec()
        .then(data => {
          Log.silly("Pago.bank", JSON.stringify(data, null, 2));
          if (data.banco && data.banco.length) return res.json(true);
          //no tiene cuenta retornamos el form del banco.
          return res.json(req.db.Inversionista.formCreate().find(el => el.name === "banco").inputs);
        });
    },
    json(req, res) {
      let trx;
      //delete req.session.trx;
      if (!req.session.trx) {
        trx = null;
      } else {
        trx = req.session.trx;
      }
      const query = {
        min_amount: {$lte: trx.amount},
        max_amount: {$gte: trx.amount}
      };
      res.json({
        trx,
        //TODO los payers deben estar filtrados por el monto de la trx
        payers: req.db.Payer.find(query).sort({order: 1}).lean().exec()
      });
    }
  },
  POST: {
    bank(req, res) {
      req.db.Inversionista.findById(req.session.user).then(user => {
        user.set("banco", [req.body]);
        user.save().then(() => res.json(true));
      });
    },
    async json(req, res) {
      try {
        //TODO verificar condiciones de borde, como trx ya definidas
        //generamos una transacción simulada
        let {project, subject, amount} = req.body;
        //delete req.session.trx;
        //if(!req.session.trx){
        let {user} = req.session;
        const inversionista = await req.db.Inversionista.findById(user);
        const banco = inversionista.banco[0];
        let investment = await req.db.Investment.Create(
          {
            investor: user,
            subject,
            currency: "CLP",
            amount,
            project,
            banco
          },
          req
        );
        //investment.setReq(req);
        //await investment.save();
        investment = investment.toJSON();
        req.session.trx = investment;
        Log.silly("TRX created", investment);
        const query = {
          min_amount: {$lte: investment.amount},
          max_amount: {$gte: investment.amount}
        };
        const payers = await req.db.Payer.find(query).sort({order: 1}).lean();
        res.json({
          trx: investment,
          payers
        });
      } catch (err) {
        Log.error("TRX not created", err);
        res.json(Promise.reject(new Error("Hubo un error al generar la transacción")));
      }
    }
  },
  component: "Pago",
  name: "Pago de una Inversión",
  description:
    /*eslint-disable-next-line max-len*/
    "Inicia una operación de pago de una inversión. Consulta si el inversionista tiene cuenta bancaria asociada, de no tenerla le presenta un formularo para ingresar los datos bancarios, posteriormente crea la inversión en estado inicial y presenta las opciones de pago, lo que posteriomente dirige a las interfaces de pago de cada tipo en particular",
  methods: ["GET", "POST"],
  hidden: true
};
module.exports = {
  Pago
};
