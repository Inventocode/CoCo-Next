"use strict";

var r = require("../../../../../../36/2668/220");
var i = require("../../../../../../36/2668/230");
var o = require("../../../../../../38/607/356");
var a = require("../../../../../../38/607/357/index");
var s = require("./843");
var c = require("../844");
module.exports = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, i, o, a, s) {
    var u;
    r(this, n);
    (u = t.call(this)).tokens = e;
    u.index = c.getFirstIndex(e, o, a);
    u.indexEnd = c.getLastIndex(e, o, s);
    return u;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      return this.index <= this.indexEnd && (this.current = this.tokens[this.index], this.index += 1, !0);
    }
  }, {
    key: "getOneToken",
    value: function () {
      return this.index <= this.indexEnd ? this.tokens[this.index] : null;
    }
  }, {
    key: "getAllTokens",
    value: function () {
      return this.tokens.slice(this.index, this.indexEnd + 1);
    }
  }]);
  return n;
}(s);