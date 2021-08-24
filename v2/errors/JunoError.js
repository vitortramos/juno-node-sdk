"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JunoError extends Error {
  constructor(message, rawError) {
    super(message);
    this.name = "JunoError";
    this.rawError = rawError;
  }
}
exports.JunoError = JunoError;
//# sourceMappingURL=JunoError.js.map
