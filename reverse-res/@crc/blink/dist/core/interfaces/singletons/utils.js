"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizationState = void 0;
var TokenizationState;
(function (TokenizationState) {
    /**
     * Base case.
     */
    TokenizationState[TokenizationState["BaseCase"] = 0] = "BaseCase";
    /**
     * % found.
     */
    TokenizationState[TokenizationState["PercentFound"] = 1] = "PercentFound";
    /**
     * Digit found.
     */
    TokenizationState[TokenizationState["DigitFound"] = 2] = "DigitFound";
    /**
     * Message ref found.
     */
    TokenizationState[TokenizationState["MsgRefFound"] = 3] = "MsgRefFound";
})(TokenizationState = exports.TokenizationState || (exports.TokenizationState = {}));
