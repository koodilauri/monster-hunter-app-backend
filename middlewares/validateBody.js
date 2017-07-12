const inspector = require("schema-inspector")
const _ = require("lodash")
const errors = require("../config/errors")
const validations = require("../config/bodyValidations")

exports.validateBody = (name, schema) => (req, res, next) => {
  const validation = _.get(validations.validations, `${name}.${schema}`)
  const result = inspector.validate(validation, req.body)
  console.log("result: ",result)
  if (result.error.length !== 0) {
    throw new errors.BadRequestError(`${result.error[0].property} ${result.error[0].message}`, result.error)
  }else{
    next()
  }
}