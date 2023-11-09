const { until } = require("selenium-webdriver");
const BrowserManager = require("./BrowserManager");

async function clickOn(locator) {
  await BrowserManager.driver.wait(until.elementLocated(locator));
  await BrowserManager.driver.findElement(locator).click();
}

async function sendKeys(locator, value) {
  await BrowserManager.driver.wait(until.elementLocated(locator));
  await BrowserManager.driver.findElement(locator).sendKeys(value);
}

async function getText(locator) {
  await BrowserManager.driver.wait(until.elementLocated(locator));
  return await BrowserManager.driver.findElement(locator).getText();
}

async function getElement(locator) {
  await BrowserManager.driver.wait(until.elementLocated(locator));
  return await BrowserManager.driver.findElement(locator);
}

module.exports = {
  clickOn,
  sendKeys,
  getText,
  getElement,
};
