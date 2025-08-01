"use strict";

var r = require("../442");
var i = require("./1290");
var o = require("./1947");
var a = require("./1948/index");
var s = require("../1295");
function c(e) {
  this.defaults = e;
  this.interceptors = {
    request: new o(),
    response: new o()
  };
}
c.prototype.request = function (e) {
  if ("string" === typeof e) {
    (e = arguments[1] || {}).url = arguments[0];
  } else {
    e = e || {};
  }
  if ((e = s(this.defaults, e)).method) {
    e.method = e.method.toLowerCase();
  } else {
    if (this.defaults.method) {
      e.method = this.defaults.method.toLowerCase();
    } else {
      e.method = "get";
    }
  }
  var t = [a, void 0];
  var n = Promise.resolve(e);
  for (this.interceptors.request.forEach(function (e) {
    t.unshift(e.fulfilled, e.rejected);
  }), this.interceptors.response.forEach(function (e) {
    t.push(e.fulfilled, e.rejected);
  }); t.length;) {
    n = n.then(t.shift(), t.shift());
  }
  return n;
};
c.prototype.getUri = function (e) {
  e = s(this.defaults, e);
  return i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};
r.forEach(["delete", "get", "head", "options"], function (e) {
  c.prototype[e] = function (t, n) {
    return this.request(s(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
r.forEach(["post", "put", "patch"], function (e) {
  c.prototype[e] = function (t, n, r) {
    return this.request(s(r || {}, {
      method: e,
      url: t,
      data: n
    }));
  };
});
module.exports = c;