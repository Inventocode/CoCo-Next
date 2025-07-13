"use strict";

var r = require("../935/1065/1217").IteratorPrototype;
import * as o from "./575";
import * as i from "./627";
import * as a from "../1738/531";
import * as s from "../935/822";
var c = function () {
  return this;
};
module.exports = function (e, t, n) {
  var l = t + " Iterator";
  e.prototype = o(r, {
    next: i(1, n)
  });
  a(e, l, !1, !0);
  s[l] = c;
  return e;
};