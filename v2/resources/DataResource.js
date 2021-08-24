/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class DataResource extends BaseResource_1.BaseResource {
  constructor() {
    super(...arguments);
    this.baseUri = "/data";
  }
  async getBanks() {
    return this.httpGet("/banks");
  }
  // vitor
  async getbusinessAreas() {
    return this.httpGet("/business-areas");
  }
}
exports.DataResource = DataResource;
//# sourceMappingURL=DataResource.js.map
