"use strict";

var r = require("../../../../../../../../3262/3188/2658/220");
var i = require("../../../../../../../../3262/3188/2658/230");
var o = require("../../../../../../../../3262/3188/2658/2679/356/index");
var a = require("../../../../../../../../3262/3188/2658/2679/357/index");
var s = require("../1116/842");
var c = require("../843");
module.exports = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, i, o, a, s) {
    var u;
    r(this, n);
    (u = t.call(this)).tokens = e;
    u.index = c.getLastIndex(e, o, s);
    u.indexEnd = c.getFirstIndex(e, o, a);
    return u;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      return this.index >= this.indexEnd && (this.current = this.tokens[this.index], this.index -= 1, !0);
    }
  }, {
    key: "getOneToken",
    value: function () {
      return this.index >= this.indexEnd ? this.tokens[this.index] : null;
    }
  }]);
  return n;
}(s);