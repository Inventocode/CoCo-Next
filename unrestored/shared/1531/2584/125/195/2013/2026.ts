"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenizationState = undefined;
(function (e) {
  e[e.BaseCase = 0] = "BaseCase";
  e[e.PercentFound = 1] = "PercentFound";
  e[e.DigitFound = 2] = "DigitFound";
  e[e.MsgRefFound = 3] = "MsgRefFound";
})(exports.TokenizationState || (exports.TokenizationState = {}));