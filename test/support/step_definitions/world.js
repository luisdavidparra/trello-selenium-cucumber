const { setWorldConstructor, setDefaultTimeout, World } = require("@cucumber/cucumber");
const { cucumberTimeout } = require("../../../env.json");

setDefaultTimeout(cucumberTimeout);

class CustomWorld extends World {
  constructor(options) {
    super(options);
  }
  entities = {
    board: {},
  };
}

setWorldConstructor(CustomWorld);
