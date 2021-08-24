/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResource_1 = require("./BaseResource");
class PaymentResource extends BaseResource_1.BaseResource {
  constructor() {
    super(...arguments);
    this.baseUri = "/payments";
  }
  pay(payment) {
    return this.httpPost("/", payment);
  }
}
exports.PaymentResource = PaymentResource;
//# sourceMappingURL=PaymentResource.js.map
