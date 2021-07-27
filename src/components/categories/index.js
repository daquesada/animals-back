const db = require("../../store/mongoose");
const ctrl = require("./category.ctrl");

module.exports = ctrl(db);
