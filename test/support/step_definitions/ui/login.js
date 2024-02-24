const { Given, When, Then } = require("@cucumber/cucumber");
const BrowserManager = require("../../../../core/browser_manager");
const { expect } = require("chai");
const { credentials } = require("../../../../env.json");
const LoginPage = require("../../../../trello/page_object/login_page");
const TopBarPage = require("../../../../trello/page_object/common/top_bar_page");
const { clickOn, sendKeys, getText } = require("../../../../core/ui/actions");

Given("I navigate to trello login page", async () => {
  await BrowserManager.driver.get(credentials.trelloURL);
  await clickOn(LoginPage.loginBtn);
});

When("I introduce the {string} user credentials", async (userRole) => {
  const user = credentials[userRole];
  await sendKeys(LoginPage.usernameLbl, user.email);
  await clickOn(LoginPage.loginSubmitBtn);
  await sendKeys(LoginPage.passwordLbl, user.password);
});

When("I click on login button", async () => {
  await clickOn(LoginPage.loginSubmitBtn);
});

Then("I verify that {string} user is logged", async (userRole) => {
  const user = credentials[userRole];
  await clickOn(TopBarPage.headerMemberMenuBtn);
  const actualEmailElementText = await getText(TopBarPage.accountMenuEmailLbl(user.email));
  expect(actualEmailElementText).to.eql(user.email);
});

Given("I login into trello page with {string} user credentials", async (userRole) => {
  const user = credentials[userRole];
  await BrowserManager.driver.get(credentials.trelloURL);
  await clickOn(LoginPage.loginBtn);
  await sendKeys(LoginPage.usernameLbl, user.email);
  await clickOn(LoginPage.loginSubmitBtn);
  await sendKeys(LoginPage.passwordLbl, user.password);
  await clickOn(LoginPage.loginSubmitBtn);
});
