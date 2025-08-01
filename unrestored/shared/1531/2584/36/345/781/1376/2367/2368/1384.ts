"use strict";

function r(e) {
  this.message = e;
}
r.prototype.toString = function () {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
r.prototype.__CANCEL__ = !0;
module.exports = r;