const { By } = require("selenium-webdriver");

class OrganizationPage {
  organizationNameTxt = (organizationName) =>
    By.xpath(`// span [@data-testid="home-team-tab-name"] [text()="${organizationName}"]`);
  organizationSettingsBtn = By.css('[data-testid="admin-settings-dropdown-button"]');
  organizationAccountSettingsBtn = By.css('[href$="/account"]');
  deleteOrganizationBtn = By.css('[data-testid="delete-workspace-button"]');
  submitDeleteOrganizationLbl = By.css('[data-testid="delete-workspace-confirm-field"]');
  submitDeleteOrganizationBtn = By.css('[data-testid="delete-workspace-confirm-button"]');
  editNameBtn = By.css('[data-testid="EditIcon"]');
  editNameLbl = By.css("#displayName");
  submitEditedOrganizationBtn = By.css('[type="submit"]');
  editedOrganzationNameTxt = By.css('[class="js-current-details"] h2');
}

module.exports = new OrganizationPage();
