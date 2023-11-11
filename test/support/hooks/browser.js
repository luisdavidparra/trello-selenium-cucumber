const { Before, After, Status } = require("@cucumber/cucumber");
const BrowserManager = require("../../../core/browser_manager");
const fsp = require("fs").promises;

Before({ tags: "@openBrowser" }, async () => {
  await BrowserManager.createBrowser();
});

After({ tags: "@closeBrowser" }, async (scenario) => {
  if (scenario.result.status === Status.FAILED) {
    console.error(`Scenario ${scenario.pickle.name} is failing`);
    const image = await BrowserManager.driver.takeScreenshot();
    await fsp.writeFile(`./screenshots/${scenario.pickle.name}.png`, image, "base64");
    await BrowserManager.closeBrowser();
    return this.attach(image, "image/png");
  }
  await BrowserManager.closeBrowser();
});
