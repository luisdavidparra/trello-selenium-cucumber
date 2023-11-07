const { By } = require("selenium-webdriver");

class LoginPage {
  loginBtn = By.css("[data-uuid$=_login]");
  usernameLbl = By.css("#username");
  passwordLbl = By.css("#password");
  loginSubmitBtn = By.css("#login-submit");
}

module.exports = new LoginPage();
