const mongoose = require("mongoose");

const { database } = require("../config");

mongoose
  .connect(database.URI, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch(() => console.log("try again"));

/**
 * DATA ACCESS
 */

const getAll = (schema) => schema.find();

const insertOne = (schema) => schema.save();

const deleteOne = (schema, payload) => schema.deleteOne(payload);

const findOne = (schema, payload) => schema.findOne(payload);

module.exports = {
  getAll,
  insertOne,
  deleteOne,
  findOne,
};
