const { Given, When, Then } = require("@cucumber/cucumber");
const BrowserManager = require("../../../core/BrowserManager");
const { expect } = require("chai");
const { credentials } = require("../../../env.json");
const LoginPage = require("../../../trello/page_object/login_page");
const TopBarPage = require("../../../trello/page_object/common/top_bar_page");

Given("I navigate to trello login page", async () => {
  await BrowserManager.driver.get(credentials.trelloURL);
  await BrowserManager.driver.findElement(LoginPage.loginBtn).click();
});

When("I introduce the {string} user credentials", async (userRole) => {
  const user = credentials[userRole];
  await BrowserManager.driver.findElement(LoginPage.usernameLbl).sendKeys(user.email);
  await BrowserManager.driver.findElement(LoginPage.loginSubmitBtn).click();
  await BrowserManager.driver.findElement(LoginPage.passwordLbl).sendKeys(user.password);
});

When("I click on login button", async () => {
  await BrowserManager.driver.findElement(LoginPage.loginSubmitBtn).click();
});

Then("I verify that {string} user is logged", async (userRole) => {
  const user = credentials[userRole];
  await BrowserManager.driver.findElement(TopBarPage.headerMemberMenuBtn).click();
  const actualEmailElement = await BrowserManager.driver
    .findElement(TopBarPage.accountMenuEmailLbl(user.email))
    .getText();
  expect(actualEmailElement).to.exist;
});
