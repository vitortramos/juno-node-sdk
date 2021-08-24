/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class ChargeResource extends BaseResource_1.BaseResource {
  constructor() {
    super(...arguments);
    this.baseUri = "/charges";
  }
  get(filter) {
    return this.httpGet("/", undefined, filter);
  }
  getById(id) {
    return this.httpGet(`/${id}`);
  }
  create(charge) {
    return this.httpPost("/", charge);
  }
}
exports.ChargeResource = ChargeResource;
//# sourceMappingURL=ChargeResource.js.map
