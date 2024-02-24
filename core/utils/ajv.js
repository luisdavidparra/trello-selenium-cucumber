const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });

function verifySchema(schema, data) {
  const valid = ajv.compile(schema);
  if (!valid(data)) {
    return valid.errors;
  }
  return true;
}

module.exports = verifySchema;
