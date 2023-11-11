const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const TopBarPage = require("../../../trello/page_object/common/top_bar_page");
const {
  clickOn,
  sendKeys,
  pressEnterKey,
  getElement,
  clearInput,
  getText,
} = require("../../../core/ui/actions");
const OrganizationPage = require("../../../trello/page_object/organization_page");
const LeftBarPage = require("../../../trello/page_object/common/left_bar_page");

When("I open the menu to create a new organization", async () => {
  await clickOn(TopBarPage.headerCreateMenuBtn);
  await clickOn(TopBarPage.headerCreateTeamBtn);
});

When("I set the organization name {string}", async (organizationName) => {
  await sendKeys(TopBarPage.headerCreateTeamNameLbl, organizationName);
});

When("I select the default organization type", async () => {
  await clickOn(TopBarPage.headerCreateTeamTypeDdl);
  await pressEnterKey();
});

When("I click on continue button to submit values", async () => {
  await clickOn(TopBarPage.headerCreateTeamSubmitBtn);
  await clickOn(TopBarPage.headerCreateTeamShowLaterBtn);
});

Then("I verify that organization {string} was created", async (organizationName) => {
  const organizationNameElement = await getElement(
    OrganizationPage.organizationNameTxt(organizationName)
  );
  expect(organizationNameElement).to.exist;
});

When("I open {string} organization settings", async (organizationName) => {
  await clickOn(LeftBarPage.homeTeamNameBtn(organizationName));
  await clickOn(LeftBarPage.homeTeamSettingsBtn);
});

When("I change the name to {string}", async (editedOrganizationName) => {
  await clickOn(OrganizationPage.editNameBtn);
  await clearInput(OrganizationPage.editNameLbl);
  await sendKeys(OrganizationPage.editNameLbl, editedOrganizationName);
});

When("I save the edited organization", async () => {
  await clickOn(OrganizationPage.submitEditedOrganizationBtn);
});

Then("I verify that organization new name is {string}", async (editedOrganizationName) => {
  const organizationNameElementText = await getText(OrganizationPage.editedOrganzationNameTxt);
  expect(organizationNameElementText).to.eql(editedOrganizationName);
});
