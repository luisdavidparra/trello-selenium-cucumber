const { By } = require("selenium-webdriver");

class TopBarPage {
  headerMemberMenuBtn = By.css('[data-testid="header-member-menu-button"]');
  accountMenuEmailLbl = (email) =>
    By.xpath(`// div [@data-testid="account-menu-account-section"] // div [text()="${email}"]`);
}

module.exports = new TopBarPage();
