const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const fs = require("fs");
const verifySchema = require("../../../../../core/utils/ajv");

Then('I verify that the response status should be "{int}"', function (expectedAnswer) {
  expect(this.response.status).to.eql(expectedAnswer);
});

Then(
  "I verify that the response body on the organization should contain:",
  function (expectedAnswer) {
    expect(this.entities.organization).to.includes(expectedAnswer.rowsHash());
  }
);

Then("I verify that the body matches with {string} schema", function (schemaName) {
  const expectedSchema = JSON.parse(
    fs.readFileSync(`./trello/resources/schemas/${schemaName}.json`),
    { encoding: "utf8" }
  );
  expect(verifySchema(expectedSchema, this.entities.organization)).to.be.true;
});
