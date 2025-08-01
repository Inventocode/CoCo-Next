"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.isStackOverflowExeption = void 0;
var r = require("../../1312/443");
exports.isStackOverflowExeption = function (e) {
  return e instanceof RangeError || e.message === r.STACK_OVERFLOW;
};