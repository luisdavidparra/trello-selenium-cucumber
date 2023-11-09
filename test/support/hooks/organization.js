const { After } = require("@cucumber/cucumber");
const { clickOn, sendKeys, moveToElement } = require("../../../core/actions");
const OrganizationPage = require("../../../trello/page_object/organization_page");
const { data } = require("../../../env.json");

After({ tags: "@deleteOrganization" }, async () => {
  await clickOn(OrganizationPage.organizationSettingsBtn);
  await clickOn(OrganizationPage.organizationAccountSettingsBtn);
  await moveToElement(OrganizationPage.deleteOrganizationBtn);
  await clickOn(OrganizationPage.deleteOrganizationBtn);
  await sendKeys(OrganizationPage.submitDeleteOrganizationLbl, data.organizationName);
  await clickOn(OrganizationPage.submitDeleteOrganizationBtn);
});
