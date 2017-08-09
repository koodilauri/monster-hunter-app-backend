const inspector = require("schema-inspector")
const _ = require("lodash")
const errors = require("../config/errors")
const validations = require("../config/bodyValidations").validations

exports.validateBody = (name, schema) => (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.log("body: ", req.body)
  }
  const validation = _.get(validations, `${name}.${schema}`)
  const result = inspector.validate(validation, req.body)
  console.log(result, validation)
  if (result.error.length !== 0) {
    throw new errors.BadRequestError(`${result.error[0].property} ${result.error[0].message}`, result.error)
  } else {
    next()
  }
}
