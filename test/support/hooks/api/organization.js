const { After } = require("@cucumber/cucumber");
const RequestManager = require("../../../../core/api/request_manager");
const { data, api } = require("../../../../env.json");

After({ tags: "@deleteOrganization" }, async () => {
  const organizations = await RequestManager.sendRequest("get", api.endpoints.getAllOrganizations);
  for (let i = 0; i < organizations.data.length; i++) {
    if (organizations.data[i].displayName == data.organizationName) {
      await RequestManager.sendRequest(
        "delete",
        api.endpoints.deleteorganizationById.replace("id", organizations.data[i].id)
      );
    }
  }
});
