const { ValidationError } = require("apollo-server-express");
const userSchema = require("./user.model");
const { v4: uuidv4 } = require("uuid");
const { hashPassword } = require("../../utils/bcrypt");

module.exports = (injectedDB) => {
  const getAllUsers = () => injectedDB.getAll(userSchema).then((data) => data);

  const insertOneUser = async (_, { input }) => {
    input.id = uuidv4();
    input.password = await hashPassword(input.password);

    return injectedDB
      .insertOne(new userSchema(input))
      .then((data) => data)
      .catch((e) => {
        let message = "Wrong Data";
        if (e.message.includes("Write a valid email")) {
          message = "Write a valid email";
        }
        if (e.message.includes("dup key")) {
          message = "Email duplicated";
        }
        throw new ValidationError(message);
      });
  };

  const deleteOneUser = (_, { payload }) => {
    return injectedDB
      .deleteOne(userSchema, payload)
      .then((data) => {
        let res = { message: "user deleted", deletedCount: data.deletedCount };
        if (data.deletedCount == 0) {
          res.message = "There's not user with that data";
        }
        return res;
      })
      .catch((e) => {
        console.log(e);
        throw new ValidationError("Wrong Data");
      });
  };
  return {
    Query: { getAllUsers },
    Mutation: { insertOneUser, deleteOneUser },
  };
};
