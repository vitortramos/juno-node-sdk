/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class DigitalAccountResource extends BaseResource_1.BaseResource {
  constructor() {
    super(...arguments);
    this.baseUri = "/digital-accounts";
  }
  async get(token) {
    return this.httpGet("/", token);
  }
  async create(payload, token) {
    return this.httpPost("/", payload, token);
  }
  async update(payload, token) {
    return this.httpPatch("/", payload, token);
  }
}
exports.DigitalAccountResource = DigitalAccountResource;
//# sourceMappingURL=DigitalAccountResource.js.map
