"use strict";

var r = require("../442");
function i() {
  this.handlers = [];
}
i.prototype.use = function (e, t) {
  this.handlers.push({
    fulfilled: e,
    rejected: t
  });
  return this.handlers.length - 1;
};
i.prototype.eject = function (e) {
  if (this.handlers[e]) {
    this.handlers[e] = null;
  }
};
i.prototype.forEach = function (e) {
  r.forEach(this.handlers, function (t) {
    if (null !== t) {
      e(t);
    }
  });
};
module.exports = i;