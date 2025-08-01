"use strict";

var r = require("./445");
var i = require("./1377");
var o = require("./2369/index");
var a = require("./1383");
function s(e) {
  var t = new o(e);
  var n = i(o.prototype.request, t);
  r.extend(n, o.prototype, t);
  r.extend(n, t);
  return n;
}
var c = s(require("./1380/index"));
c.Axios = o;
c.create = function (e) {
  return s(a(c.defaults, e));
};
c.Cancel = require("./1384");
c.CancelToken = require("./2382");
c.isCancel = require("./1379");
c.all = function (e) {
  return Promise.all(e);
};
c.spread = require("./2383");
module.exports = c;
module.exports.default = c;