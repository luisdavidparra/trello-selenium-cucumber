const { When, Then } = require("@cucumber/cucumber");
const BrowserManager = require("../../../core/browser_manager");
const { expect } = require("chai");
const LoginPage = require("../../../trello/page_object/login_page");
const LogoutPage = require("../../../trello/page_object/logout_page");
const TopBarPage = require("../../../trello/page_object/common/top_bar_page");
const { until } = require("selenium-webdriver");
const { clickOn, getElement } = require("../../../core/ui/actions");

When("I logout from trello page", async () => {
  await clickOn(TopBarPage.headerMemberMenuBtn);
  await clickOn(TopBarPage.logoutBtn);
  await clickOn(LogoutPage.submitLogoutBtn);
});

Then("I verify that user is loged out", async () => {
  await BrowserManager.driver.wait(until.elementLocated(LoginPage.loginBtn));
  const loginElement = await getElement(LoginPage.loginBtn);
  expect(loginElement).to.exist;
});
