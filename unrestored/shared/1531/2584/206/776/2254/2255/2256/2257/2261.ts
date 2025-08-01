"use strict";

var r = require("../../../../../../../../3272/3198/2668/220");
var i = require("../../../../../../../../3272/3198/2668/230");
var o = require("../../../../../../../../3272/3198/2668/2689/356/index");
var a = require("../../../../../../../../3272/3198/2668/2689/357/index");
var s = require("../1119/843");
var c = require("../844");
module.exports = function (e) {
  o(n, e);
  var t = a(n);
  function n(e, i, o, a, s) {
    var u;
    r(this, n);
    (u = t.call(this)).tokens = e;
    u.comments = i;
    u.tokenIndex = c.getFirstIndex(e, o, a);
    u.commentIndex = c.search(i, a);
    u.border = s;
    return u;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      var e = this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex] : null;
      var t = this.commentIndex < this.comments.length ? this.comments[this.commentIndex] : null;
      if (e && (!t || e.range[0] < t.range[0])) {
        this.current = e;
        this.tokenIndex += 1;
      } else {
        if (t) {
          this.current = t;
          this.commentIndex += 1;
        } else {
          this.current = null;
        }
      }
      return Boolean(this.current) && (-1 === this.border || this.current.range[1] <= this.border);
    }
  }]);
  return n;
}(s);