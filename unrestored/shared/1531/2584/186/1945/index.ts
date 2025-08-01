"use strict";

var r = require("./442");
var i = require("./1289");
var o = require("./1946/index");
var a = require("./1295");
function s(e) {
  var t = new o(e);
  var n = i(o.prototype.request, t);
  r.extend(n, o.prototype, t);
  r.extend(n, t);
  return n;
}
var c = s(require("./1292/index"));
c.Axios = o;
c.create = function (e) {
  return s(a(c.defaults, e));
};
c.Cancel = require("./1296");
c.CancelToken = require("./1959");
c.isCancel = require("./1291");
c.all = function (e) {
  return Promise.all(e);
};
c.spread = require("./1960");
c.isAxiosError = require("./1961");
module.exports = c;
module.exports.default = c;