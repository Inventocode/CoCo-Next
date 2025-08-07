"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = require("../../1366/444");
exports.isStackOverflowExeption = function (e) {
  return e instanceof RangeError || e.message === r.STACK_OVERFLOW;
};