const db = require("../../store/mongoose");
const ctrl = require("./user.ctrl");

module.exports = ctrl(db);
