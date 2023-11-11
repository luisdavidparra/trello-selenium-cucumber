const { By } = require("selenium-webdriver");

class LeftBarPage {
  homeTeamNameBtn = (organizationName) =>
    By.xpath(`// span[@data-testid="home-team-tab-name"] [text()="${organizationName}"]`);
  homeTeamSettingsBtn = By.xpath(`// a[@data-testid="home-team-settings-tab"]`);
}

module.exports = new LeftBarPage();
