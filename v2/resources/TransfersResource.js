/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const errors_1 = require("../errors");
const BaseResource_1 = require("./BaseResource");
class TransfersResource extends BaseResource_1.BaseResource {
  constructor() {
    super(...arguments);
    this.baseUri = "/transfers";
    this._requiredTokenTypes = [enums_1.TransferTypes.DEFAULT_BANK_ACCOUNT, enums_1.TransferTypes.PIX];
  }
  /**
   * Requests a Transfer
   * @param token User token
   * @param requestTransferInput
   */
  create(requestTransferInput) {
    const { token, ...payload } = requestTransferInput;
    if (!token && this._requiredTokenTypes.includes(payload.type)) {
      throw new errors_1.JunoParamsMissingError("token wasn't provided.");
    }
    return this.httpPost("/", payload, token);
  }
}
exports.TransfersResource = TransfersResource;
//# sourceMappingURL=TransfersResource.js.map
