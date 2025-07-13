"use strict";

import * as r from "../../2325/444";
exports.isStackOverflowExeption = function (e) {
  return e instanceof RangeError || e.message === r.STACK_OVERFLOW;
};