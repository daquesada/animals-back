const formatError = (e) => {
  const response = { message: e.message, code: e.extensions.code };
  if (e.extensions.code.includes("VALIDATION")) {
    response.code = "VALIDATION ERROR";
  }
  if (e.extensions.code.includes("INTERNAL")) {
    response.code = "INTERNAL ERROR";
  }
  return response;
};

module.exports = { formatError };
