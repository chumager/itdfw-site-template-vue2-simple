"use strict";
/*global got, numeral*/
const prepagar = {
  GET: {
    filter(req, res) {
      const filter = new req.DB.Schema(
        {
          pagare: {
            type: "ObjectId",
            ref: "Pagare",
            filter: true,
            name: "Pagaré",
            onlyRef: true,
            required: true
          },
          date: {
            type: Date,
            filter: true,
            name: "Fecha de Pago",
            required: true
          }
        },
        {_id: false}
      );
      req.SCHEMA = filter;
      res.json(req.db.Pagare.formCreate(req));
    },
    resumeFields(req, res) {
      const fields = new req.DB.Schema(
        {
          pagare: {
            type: "ObjectId",
            ref: "Pagare",
            name: "Pagaré",
            noExtraInfo: true,
            tdClass: "number"
          },
          date: {
            type: Date,
            filter: true,
            name: "Fecha de Pago",
            required: true,
            tdClass: "number"
          },
          currentDays: {
            type: Number,
            name: "Días de Interés"
          },
          currentInterest: {
            type: "Currency",
            name: "Interés a la Fecha"
          },
          punishmentDays: {
            type: Number,
            name: "Días de Comisión de Prepago"
          },
          punishmentInterest: {
            type: "Currency",
            name: "Comisión de Prepago"
          },
          totalAmount: {
            type: "Currency",
            name: "Capital Adeudado"
          },
          total: {
            type: "Currency",
            name: "Total Prepago"
          },
          normalPay: {
            type: "Currency",
            name: "Total Pago Regular"
          },
          prepayDiff: {
            type: "Currency",
            name: "Diferencia"
          }
        },
        {_id: false}
      );
      const inputs = req.db.Pagare.toInputs({SCHEMA: fields, req});
      res.json(req.db.Pagare.tableFields(req, inputs));
    },
    async query(req, res) {
      const {pagare, date} = req.query;
      const Pagare = await req.db.Pagare.findById(pagare);
      Pagare.setLocal({date});
      res.json({quotes: Pagare.getPayableQuotes()});
    },
    table(req, res) {
      res.json(req.db.Pagare.tableFields(req));
    },
    async calculate(req, res) {
      const {pagare, date, quotePos} = req.query;
      const Pagare = await req.db.Pagare.findById(pagare);
      const Pagare2 = await req.db.Pagare.findById(pagare);
      const quotes2 = Pagare2.getPayableQuotes().slice(0, quotePos);
      quotes2.forEach(quote => {
        quote.setLocal({date});
      });
      const normalPay = quotes2.reduce((sum, quote) => sum + quote.remanent, 0);
      //const {quotes, totalAmount, punishmentDays, punishmentInterest, currentDays, currentInterest} = Pagare.simulatePrepayQuotes(date, quotePos);
      const simulation = await Pagare.simulatePrepayQuotes({date, pos: quotePos});
      res.json({...simulation, normalPay});
    }
  },
  PUT: {
    async convert(req) {
      const {pagare, date, quotePos} = req.body;
      const Pagare = await req.db.Pagare.findById(pagare);
      Pagare.prepayQuotes(date, quotePos, req);
    }
  },
  component: "PrepagarPagare",
  methods: ["GET", "PUT"],
  name: "Prepagar Pagarés",
  description: "Permite prepagar un pagaré"
};
const punishment = {
  GET: {
    async json(req, res) {
      //solicitamos la UF de hoy.
      try {
        const {id, UF} = req.query;
        //verificamos la deuda a castigar.
        if (!id || !UF) return res.json(0);
        const pagare = await req.db.Pagare.findById(id);
        const total = Math.round(
          (await pagare.simulateRepactQuotes(req))
            .filter(quote => quote.days_past_due)
            .reduce((sum, quote) => sum + quote.paid, 0)
        );
        //aplicamos el castigo al pagaré.
        const totalUF = total / UF;
        const punishments = [0.09, 0.06, 0.03];
        const segments = [0, 0, 0];
        if (totalUF > 50) segments[2] = totalUF - 50;
        if (totalUF > 10) segments[1] = totalUF - segments[2] - 10;
        segments[0] = Math.min(totalUF, 10);
        const punishment = segments.reduce((sum, val, id) => sum + val * punishments[id], 0) * UF;
        res.json(punishment);
      } catch (err) {
        if (err.response) return res.status(500).send(err.response.body);
        res.json(err);
      }
    }
  },
  methods: ["GET"],
  isAnonymous: true //TODO por ahora
};
module.exports = {
  prepagar,
  punishment
};
