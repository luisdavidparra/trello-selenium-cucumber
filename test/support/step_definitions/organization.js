const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const TopBarPage = require("../../../trello/page_object/common/top_bar_page");
const { clickOn, sendKeys, pressEnterKey, getElement } = require("../../../core/actions");
const OrganizationPage = require("../../../trello/page_object/organization_page");

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
