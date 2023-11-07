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

When("I introduce the user credentials:", async (dataTable) => {
  const userValues = dataTable.rowsHash();
  Object.keys(userValues).forEach((key) => {
    userValues[key] = credentials.admin[key];
  });
  await BrowserManager.driver.findElement(LoginPage.usernameLbl).sendKeys(userValues.email);
  await BrowserManager.driver.findElement(LoginPage.loginSubmitBtn).click();
  await BrowserManager.driver.findElement(LoginPage.passwordLbl).sendKeys(userValues.password);
});

When("I click on login button", async () => {
  await BrowserManager.driver.findElement(LoginPage.loginSubmitBtn).click();
});

Then("I verify that user {string} is logged", async (expectedEmail) => {
  await BrowserManager.driver.findElement(TopBarPage.headerMemberMenuBtn).click();
  const actualEmailLabel = await BrowserManager.driver
    .findElement(TopBarPage.accountMenuEmailLbl(credentials.admin[expectedEmail]))
    .getText();
  expect(actualEmailLabel).to.equal(credentials.admin[expectedEmail]);
});
