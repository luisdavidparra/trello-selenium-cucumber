const axios = require("axios").default;
const { api, credentials: { admin } } = require("../../env.json");

class RequestManager {
  constructor(baseURL, timeout, headers) {
    this.axios = axios.create({
      baseURL: baseURL,
      timeout: timeout,
      headers: headers,
      validateStatus: null,
    });
  }

  async sendRequest(verb, endpoint, body = null, headers) {
    const response = await this.axios.request({
      method: verb,
      url: endpoint,
      data: body,
      headers: headers,
    });
    return response;
  }
}

module.exports = new RequestManager(api.baseURL, api.timeout, {
  Authorization: `OAuth oauth_consumer_key="${admin.oauth_consumer_key}", oauth_token="${admin.oauth_token}"`,
});
