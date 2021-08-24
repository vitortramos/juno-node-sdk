/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const errors_1 = require("../errors");
const helpers_1 = require("../helpers");
class AuthResource {
  constructor({ junoAuthClient, clientId, secret }) {
    this.junoClient = junoAuthClient;
    this.basicToken = Buffer.from(`${clientId}:${secret}`).toString("base64");
  }
  async doRequest(endpoint, payload) {
    try {
      const encodedPayload = helpers_1.RequestHelper.toEncodedUrlFormat(payload);
      const { data } = await this.junoClient.post(endpoint, encodedPayload, {
        headers: {
          Authorization: `Basic ${this.basicToken}`,
        },
      });
      return data;
    } catch (err) {
      if (err.response) {
        throw new errors_1.JunoError(err.response.data.message, err.response.data);
      }
      throw err;
    }
  }
  async generateOAuthToken() {
    this.oAuthTokenData = await this.doRequest("/oauth/token", {
      grant_type: "client_credentials",
    });
    this.oAuthToken = this.oAuthTokenData.access_token;
    return this.oAuthToken;
  }
  async refreshOAuthToken() {
    try {
      const decoded = jwt.decode(this.oAuthToken);
      const currentTime = Date.now() / 1000;
      if ((decoded === null || decoded === void 0 ? void 0 : decoded.exp) < currentTime) {
        return this.generateOAuthToken();
      }
      return this.oAuthToken;
    } catch (err) {
      return this.generateOAuthToken();
    }
  }
  async getOAuthToken() {
    if (!this.oAuthToken) {
      return this.generateOAuthToken();
    }
    return this.refreshOAuthToken();
  }
}
exports.AuthResource = AuthResource;
//# sourceMappingURL=AuthResource.js.map
