const jwt = require("jsonwebtoken");
const {
  jwt: { secret },
} = require("../config");

const sign = (data = {}, options = { expiresIn: "1d" }) => {
  return jwt.sign(data, secret, options);
};

const verify = (token) => {
  return jwt.verify(token, secret);
};

const check = {
  own: (req, res, next, owner) => {
    const decoded = decodeHeader(req);
    //auth
    if (decoded.data !== owner) {
      throw error("invalid data", 400);
    } else {
      next();
    }
  },
  logged: (req) => {
    const decoded = decodeHeader(req);
  },
};
const getToken = (auth) => {
  if (!auth) {
    return "";
  }
  if (auth.indexOf("Bearer ") === -1) {
    return "";
  }

  let token = auth.replace("Bearer ", "");
  return token;
};

const decodeHeader = (req) => {
  let decoded = "";
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  decoded = verify(token);
  req.user = decoded;
  return decoded;
};

module.exports = { sign, check };
