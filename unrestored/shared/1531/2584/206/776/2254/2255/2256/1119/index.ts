"use strict";

var r = require("../../../../../../../../3272/3198/2668/220");
var i = require("../../../../../../../../3272/3198/2668/230");
var o = require("../../../../../../../../3272/3198/2668/2689/356/index");
var a = require("../../../../../../../../3272/3198/2668/2689/357/index");
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