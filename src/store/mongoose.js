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

const findOneAndUpdate = ({
  schema,
  payload,
  update,
  options = { new: true },
}) => schema.findOneAndUpdate(payload, update, options);

module.exports = {
  getAll,
  insertOne,
  deleteOne,
  findOne,
  findOneAndUpdate,
};
