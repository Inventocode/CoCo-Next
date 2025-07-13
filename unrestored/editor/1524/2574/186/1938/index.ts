"use strict";

import * as r from "./442";
import * as i from "./1286";
import * as o from "./1939/index";
import * as a from "./1292";
function s(e) {
  var t = new o(e);
  var n = i(o.prototype.request, t);
  r.extend(n, o.prototype, t);
  r.extend(n, t);
  return n;
}
var c = s(require("./1289/index"));
c.Axios = o;
c.create = function (e) {
  return s(a(c.defaults, e));
};
c.Cancel = require("./1293");
c.CancelToken = require("./1952");
c.isCancel = require("./1288");
c.all = function (e) {
  return Promise.all(e);
};
c.spread = require("./1953");
c.isAxiosError = require("./1954");
module.exports = c;
e.exports.default = c;