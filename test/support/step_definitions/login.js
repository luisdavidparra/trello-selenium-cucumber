const { By, until } = require("selenium-webdriver");
const { Given, When, Then } = require("@cucumber/cucumber");
const BrowserManager = require("../../../core/BrowserManager");
const { expect } = require("chai");
const { credentials } = require("../../../env.json");

Given("I navigate to trello login page", async () => {
  await BrowserManager.driver.get(credentials.trelloURL);
  await BrowserManager.driver.findElement(By.css("[data-uuid$=_login]")).click();
});

When("I introduce the user credentials:", async (dataTable) => {
  const userValues = dataTable.rowsHash();
  Object.keys(userValues).forEach((key) => {
    userValues[key] = credentials.admin[key];
  });
  await BrowserManager.driver.wait(until.elementLocated(By.css("#username")));
  await BrowserManager.driver.findElement(By.css("#username")).sendKeys(userValues.email);
  await BrowserManager.driver.findElement(By.css("#login-submit")).click();
  await BrowserManager.driver.findElement(By.css("#password")).sendKeys(userValues.password);
});

When("I click on login button", async () => {
  await BrowserManager.driver.findElement(By.css("#login-submit")).click();
});

Then("I verify that user {string} is logged", async (expectedEmail) => {
  await BrowserManager.driver
    .findElement(By.css('[data-testid="header-member-menu-button"]'))
    .click();
  const actualEmailLabel = await BrowserManager.driver
    .findElement(
      By.xpath(
        `// div [@data-testid="account-menu-account-section"] // div [text()="${credentials.admin[expectedEmail]}"]`
      )
    )
    .getText();
  expect(actualEmailLabel).to.equal(credentials.admin[expectedEmail]);
});
