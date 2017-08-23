const errors = require("../config/errors")

exports.handleErrors = (err, req, res, next) => {
  if (err) {
    const statusCode = err.statusCode !== undefined ? err.statusCode : 500;

    if (process.env.NODE_ENV === "development") {
      console.log("Caught an error!", err)
      console.log(JSON.stringify(err, null, 2))
      if (err.message !== undefined) {
        console.log({ "error": err })
        res.status(statusCode).json({ "error": err });
      } else {
        console.log({
          message: "Something caused an internal server error",
          stack: err.stack,
        })
        res.status(statusCode).json({
          message: "Something caused an internal server error",
          stack: err.stack,
        });
      }
    } else {
      const message = err.message ? err.message : "Internal server error.";
      console.log({ "message": message })
      res.status(statusCode).json({
        "error": {
          "message": message
        }
      });
    }
  } else {
    next();
  }
}