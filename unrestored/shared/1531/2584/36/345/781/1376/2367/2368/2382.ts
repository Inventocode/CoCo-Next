"use strict";

var r = require("./1384");
function i(e) {
  if ("function" !== typeof e) {
    throw new TypeError("executor must be a function.");
  }
  var t;
  this.promise = new Promise(function (e) {
    t = e;
  });
  var n = this;
  e(function (e) {
    if (!n.reason) {
      n.reason = new r(e);
      t(n.reason);
    }
  });
}
i.prototype.throwIfRequested = function () {
  if (this.reason) {
    throw this.reason;
  }
};
i.source = function () {
  var e;
  return {
    token: new i(function (t) {
      e = t;
    }),
    cancel: e
  };
};
module.exports = i;