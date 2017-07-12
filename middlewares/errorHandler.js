const errors = require("../config/errors")

exports.handleErrors = (err, req, res, next) => {
  if (err) {
    const statusCode = err.statusCode !== undefined ? err.statusCode : 500;

    if (process.env.NODE_ENV === "development") {
      console.log("Caught an error!", err)
      console.log(JSON.stringify(err, null, 2))
      if (err.message !== undefined) {
        res.status(statusCode).send(err);
      } else {
        res.status(statusCode).send({
          message: "Something caused an internal server error",
          stack: err.stack,
        });
      }
    } else {
      const message = err.message ? err.message : "Internal server error.";
      res.status(statusCode).send(message);
    }
  } else {
    next();
  }
}