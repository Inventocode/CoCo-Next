"use strict";

import * as r from "./445";
import * as i from "./1370";
import * as o from "./2359/index";
import * as a from "./1376";
function s(e) {
  var t = new o(e);
  var n = i(o.prototype.request, t);
  r.extend(n, o.prototype, t);
  r.extend(n, t);
  return n;
}
var c = s(require("./1373/index"));
c.Axios = o;
c.create = function (e) {
  return s(a(c.defaults, e));
};
c.Cancel = require("./1377");
c.CancelToken = require("./2372");
c.isCancel = require("./1372");
c.all = function (e) {
  return Promise.all(e);
};
c.spread = require("./2373");
module.exports = c;
e.exports.default = c;