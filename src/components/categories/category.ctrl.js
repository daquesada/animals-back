const category = require("./category.model");
const userModel = require("../users/user.model");
const { v4: uuid } = require("uuid");

async function checkIsUserLogged(context) {
  const { email, id } = context;
  if (!id) throw new Error("you must be logged in to perform this action");
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("user does not exist");
  return user;
}

module.exports = (injectedDB) => {
  const getCategories = () =>
    injectedDB
      .getAll(category)
      .then((data) => data)
      .catch(() => {
        throw new Error("Internal Error");
      });

  const getCategory = (_, { input }) =>
    injectedDB
      .findOne(category, input)
      .then((data) => data)
      .catch(() => {
        throw new Error("Internal Error");
      });

  const createCategory = async (_, { input }, context) => {
    await checkIsUserLogged(context);
    input.id = uuid();

    return injectedDB
      .insertOne(new category(input))
      .then((data) => data)
      .catch(() => {
        throw new Error("Internal Error");
      });
  };

  const deleteCategory = async (_, { input }, context) => {
    await checkIsUserLogged(context);

    return injectedDB
      .deleteOne(category, input)
      .then((data) => {
        let res = {
          message: "category deleted",
          deletedCount: data.deletedCount,
        };
        if (data.deletedCount == 0) {
          res.message = "There's not category with that data";
        }
        return res;
      })
      .catch(() => {
        throw new Error("Internal Error");
      });
  };
  return {
    Query: { getCategories, getCategory },
    Mutation: { createCategory, deleteCategory },
  };
};
