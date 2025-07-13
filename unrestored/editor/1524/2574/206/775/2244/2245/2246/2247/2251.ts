"use strict";

import * as r from "../../../../../../../../3262/3188/2658/220";
import * as i from "../../../../../../../../3262/3188/2658/230";
import * as o from "../../../../../../../../3262/3188/2658/2679/356/index";
import * as a from "../../../../../../../../3262/3188/2658/2679/357/index";
import * as s from "../1116/842";
import * as c from "../843";
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