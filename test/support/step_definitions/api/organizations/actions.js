const { Given, When } = require("@cucumber/cucumber");
const { flatten } = require("flat");
const RequestManager = require("../../../../../core/api/request_manager");

Given("I set the body of a new organization with:", function (table) {
  this.entities.organization = table.rowsHash();
});

When("I send a {string} request to {string} for an organization", async function (method, endpoint) {
  endpoint = endpoint.replace(/\[(.*?)\]/g, (_, value) => flatten(this.entities)[value]);

  this.response = await RequestManager.sendRequest(method, endpoint);
  this.entities.organization = this.response.data;
});
