"use strict";

var r = require("../../../../../../36/2668/220");
var i = require("../../../../../../36/2668/230");
var o = require("../../../../../../36/2668/2689/703/index");
var a = require("../../../../../../38/607/1970/529");
var s = require("../../../../../../38/607/356");
var c = require("../../../../../../38/607/357/index");
var u = require("./2263/1118");
module.exports = function (e) {
  s(n, e);
  var t = c(n);
  function n(e, i) {
    var o;
    r(this, n);
    (o = t.call(this, e)).predicate = i;
    return o;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      for (var e = this.predicate; o(a(n.prototype), "moveNext", this).call(this);) {
        if (e(this.current)) {
          return true;
        }
      }
      return false;
    }
  }]);
  return n;
}(u);