"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("../../1366/444");
exports.isStackOverflowExeption = function (e) {
  return e instanceof RangeError || e.message === r.STACK_OVERFLOW;
};