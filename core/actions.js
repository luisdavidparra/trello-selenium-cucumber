const { until, Key } = require("selenium-webdriver");
const BrowserManager = require("./browser_manager");

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

async function pressEnterKey() {
  await BrowserManager.driver.actions().sendKeys(Key.RETURN).perform();
}

async function moveToElement(locator) {
  const element = await BrowserManager.driver.findElement(locator);
  await BrowserManager.driver.executeScript("arguments[0].scrollIntoView(true);", element);
}

module.exports = {
  clickOn,
  sendKeys,
  getText,
  getElement,
  pressEnterKey,
  moveToElement,
};
