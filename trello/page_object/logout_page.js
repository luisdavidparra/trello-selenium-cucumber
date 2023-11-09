const { By } = require("selenium-webdriver");

class LogoutPage {
  submitLogoutBtn = By.css('[data-testid="logout-button"]');
}

module.exports = new LogoutPage();
