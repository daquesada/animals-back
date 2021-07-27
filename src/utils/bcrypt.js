const bcrypt = require("bcrypt");
const {
  bcrypt: { SALTS_ROUNDS },
} = require("../config");

exports.hashPassword = function (plainPass) {
  return bcrypt
    .genSalt(SALTS_ROUNDS)
    .then((salt) => bcrypt.hash(plainPass, salt))
    .then((hashed) => hashed)
    .catch((e) => {
      throw new Error("Dont work");
    });
};

exports.comparePass = (plainPass, hash) => {
  return bcrypt
    .compare(plainPass, hash)
    .then((result) => result)
    .catch((e) => e);
};
