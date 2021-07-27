require("dotenv").config();
module.exports = {
  server: {
    PORT: process.env.PORT || 3001,
  },
  database: {
    URI: process.env.DATABASE || "mongodb://localhost/test",
  },
  bcrypt: {
    SALTS_ROUNDS: parseInt(process.env.SALT_ROUNDS) || 1,
  },
  jwt: {
    secret: process.env.SECRET || "supersecrect",
  },
};
