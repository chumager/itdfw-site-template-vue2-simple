try {
  const pnp = require("./.pnp.js");
  pnp.setup();
} catch (e) {}
const conf = require("@chumager/itdfw-site-base/.eslintrc");
module.exports = conf;
