const { By } = require("selenium-webdriver");

class OrganizationPage {
  organizationNameTxt = (organizationName) =>
    By.xpath(`// span [@data-testid="home-team-tab-name"] [text()="${organizationName}"]`);
  organizationSettingsBtn = By.css('[data-testid="admin-settings-dropdown-button"]');
  organizationAccountSettingsBtn = By.css('[href$="/account"]');
  deleteOrganizationBtn = By.css('[data-testid="delete-workspace-button"]');
  submitDeleteOrganizationLbl = By.css('[data-testid="delete-workspace-confirm-field"]');
  submitDeleteOrganizationBtn = By.css('[data-testid="delete-workspace-confirm-button"]');
}

module.exports = new OrganizationPage();
