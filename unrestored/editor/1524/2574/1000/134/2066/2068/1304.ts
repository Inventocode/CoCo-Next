"use strict";

import * as r from "../../838/443";
exports.isStackOverflowExeption = function (e) {
  return e instanceof RangeError || e.message === r.STACK_OVERFLOW;
};