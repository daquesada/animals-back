const express = require("express");
// const morgan = require("morgan");
const cors = require("cors");
const jwtExpress = require("express-jwt");
const errors = require("./utils/errors");
const app = express();
const { jwt } = require("./config");

app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());

// auth middleware
const auth = jwtExpress({
  secret: jwt.secret,
  algorithms: ["HS256"],
  credentialsRequired: false,
});

app.use(errors);
app.use(auth);

module.exports = app;
