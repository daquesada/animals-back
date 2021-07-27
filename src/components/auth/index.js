const db = require("../../store/mongoose");
const ctrl = require("./auth.ctrl");

module.exports = ctrl(db);
