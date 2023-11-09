const { By } = require("selenium-webdriver");

class TopBarPage {
  headerMemberMenuBtn = By.css('[data-testid="header-member-menu-button"]');
  accountMenuEmailLbl = (email) =>
    By.xpath(`// div [@data-testid="account-menu-account-section"] // div [text()="${email}"]`);
  logoutBtn = By.css('[data-testid="account-menu-logout"]');
}

module.exports = new TopBarPage();
