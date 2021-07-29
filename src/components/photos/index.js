const db = require("../../store/mongoose");
const ctrl = require("./photo.ctrl");

module.exports = ctrl(db);
