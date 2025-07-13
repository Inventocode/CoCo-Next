"use strict";

import * as r from "./1064";
import * as o from "../1250/824";
module.exports = r ? {}.toString : function () {
  return "[object " + o(this) + "]";
};