"use strict";
const credit_type = [
  "Libre",
  "Cuotas Iguales",
  //"Cuotas Iguales con Carencia",
  "Cuotas Iguales con Carencia de Capital",
  "Bullet",
  "Bullet con Pago de Intereses"
];
function calcular_cuotas({ct, dues, lack, P, I, periodicity, moment}) {
  console.debug("calcular_cuotas start", ct);
  if (!moment) moment = global.moment;
  let capital = P;
  let duration = moment.duration(1, periodicity.measure).asDays() * periodicity.duration;
  if (periodicity.measure === "years") duration = periodicity.duration * 360;
  let i = (I / 360) * duration;
  let interes_carencia = P * i;
  //let newDues = _.cloneDeep(dues);
  let newDues = JSON.parse(JSON.stringify(dues));
  let ldue = newDues[newDues.length - 1];
  let cuota;
  let amount;
  let interest;
  let saldo;
  switch (ct) {
    case "cuotas iguales":
    //eslint no-fallthrough: "off"
    case "cuotas iguales con carencia":
    case "cuotas iguales con carencia de capital":
      /*eslint no-case-declarations: "off" */
      let n = newDues.length;
      //TODO asumimos valores correctos para empezar
      if (!ct.endsWith("capital")) P += P * i * lack;
      let C = (P * i * (1 + i) ** (n - lack)) / ((1 + i) ** (n - lack) - 1);
      cuota = C;

      for (let id = 0; id < newDues.length; id++) {
        cuota = C;
        let due = newDues[id];
        let amount = 0;
        let interest = 0;
        let saldo;
        if (id < lack) {
          if (ct.endsWith("capital")) {
            interest = P * i;
            cuota = interest;
          } else {
            cuota = 0;

            capital += interes_carencia;
            interest = 0;
          }
        } else {
          interest = capital * i;
          amount = cuota - interest;
        }
        const c_a = capital - amount;
        saldo = Math.abs(c_a) < 0.001 ? 0 : c_a;
        newDues[id] = {...due, amount, interest, cuota, capital, saldo};
        capital = saldo;
      }
      break;
    case "bullet":
      newDues.forEach((due, id) => {
        let saldo = capital;
        let interest = 0;
        let cuota = 0;
        let amount = 0;
        newDues[id] = {...due, amount, interest, cuota, capital, saldo};
      });
      interest = interes_carencia * newDues.length;
      cuota = capital + interest;
      amount = capital;
      saldo = 0;
      newDues[newDues.length - 1] = {...ldue, amount, interest, cuota, capital, saldo};
      break;
    case "bullet con pago de intereses":
      newDues.forEach((due, id) => {
        let amount = 0;
        let saldo = capital;
        let interest = interes_carencia;
        cuota = interes_carencia;
        newDues[id] = {...due, amount, interest, cuota, capital, saldo};
      });
      amount = P;
      interest = interes_carencia;
      cuota = capital + interes_carencia;
      saldo = 0;
      newDues[newDues.length - 1] = {...ldue, amount, interest, cuota, capital, saldo};
      break;
    case "libre":
      //TODO validar que el capital y el saldo se calculen
      Array.isArray(newDues) &&
        newDues.forEach(due => {
          due.cuota = due.amount + due.interest;
        });
      break;
  }
  console.debug("calcular_cuotas final");
  return newDues;
}
export default calcular_cuotas;
export {credit_type};
