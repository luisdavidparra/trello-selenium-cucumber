const { Builder } = require("selenium-webdriver");

module.exports = class BrowserManager {
  constructor() {
    this.driver = null;
  }

  static async createBrowser() {
    if (!this.driver) {
      this.driver = new Builder().forBrowser("chrome").build();
      this.driver.manage().window().maximize();
      this.driver.manage().setTimeouts({ implicit: 10000 });
    }
  }

  static async closeBrowser() {
    await this.driver.quit();
    this.driver = null;
  }
};
