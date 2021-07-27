const user = require("../users/user.model");
const { comparePass } = require("../../utils/bcrypt");
const { sign } = require("../../utils/jwt");

module.exports = (injectedDB) => {
  const login = (_, { input }) => {
    const payload = { email: input.email };
    return injectedDB
      .findOne(user, payload)
      .then(async (data) => {
        const response = { token: null, isValidAuth: false };
        const result = await comparePass(input.password, data.password);
        if (result) {
          response.token = sign({ id: data.id, email: data.email });
          response.isValidAuth = true;
        }
        return response;
      })
      .catch((e) => {
        throw new Error("Invalid Data");
      });
  };

  return {
    Mutation: { login },
  };
};
