const errors = (err, req, res, next) => {
  if (err.code === "invalid_token") return next();
  // return next(err);
  if (res.headersSent) {
    return next(err);
  }
  const { status } = err;
  res.status(status).json(err);
};

module.exports = errors;
