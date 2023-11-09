const { By } = require("selenium-webdriver");

class TopBarPage {
  headerMemberMenuBtn = By.css('[data-testid="header-member-menu-button"]');
  accountMenuEmailLbl = (email) =>
    By.xpath(`// div [@data-testid="account-menu-account-section"] // div [text()="${email}"]`);
  logoutBtn = By.css('[data-testid="account-menu-logout"]');
  headerCreateMenuBtn = By.css('[data-testid="header-create-menu-button"]');
  headerCreateTeamBtn = By.css('[data-testid="header-create-team-button"]');
  headerCreateTeamNameLbl = By.css('[data-testid="header-create-team-name-input"]');
  headerCreateTeamTypeDdl = By.css('[data-testid="header-create-team-type-input"]');
  headerCreateTeamSubmitBtn = By.css('[data-testid="header-create-team-submit-button"]');
  headerCreateTeamShowLaterBtn = By.css('[data-testid="show-later-button"]');
}

module.exports = new TopBarPage();
