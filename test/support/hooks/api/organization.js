const { After, Before } = require("@cucumber/cucumber");
const RequestManager = require("../../../../core/api/request_manager");
const { data, api } = require("../../../../env.json");

After({ tags: "@deleteOrganization" }, async function () {
  const organizations = await RequestManager.sendRequest("get", api.endpoints.getAllOrganizations);
  for (let i = 0; i < organizations.data.length; i++) {
    if (
      organizations.data[i].displayName == data.organizationName ||
      organizations.data[i].displayName == this.entities.organization?.displayName
    ) {
      await RequestManager.sendRequest(
        "delete",
        api.endpoints.deleteorganizationById.replace("{id}", organizations.data[i].id)
      );
    }
  }
});

Before({ tags: "@createOrganization" }, async function () {
  await RequestManager.sendRequest(
    "post",
    api.endpoints.createOrganization.replace("{name}", data.organizationName)
  );
});

After({ tags: "@deleteEditedOrganization" }, async function () {
  const organizations = await RequestManager.sendRequest("get", api.endpoints.getAllOrganizations);
  for (let i = 0; i < organizations.data.length; i++) {
    if (organizations.data[i].displayName == data.editedOrganizationName) {
      const res = await RequestManager.sendRequest(
        "delete",
        api.endpoints.deleteorganizationById.replace("{id}", organizations.data[i].id)
      );
    }
  }
});
