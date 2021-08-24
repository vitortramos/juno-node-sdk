/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class BalanceResource extends BaseResource_1.BaseResource {
  constructor() {
    super(...arguments);
    this.baseUri = "/balance";
  }
  getBalance(token) {
    return this.httpGet("/", token);
  }
}
exports.BalanceResource = BalanceResource;
//# sourceMappingURL=BalanceResource.js.map
