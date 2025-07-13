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
    u.tokenIndex = c.getLastIndex(e, o, s);
    u.commentIndex = c.search(i, s) - 1;
    u.border = a;
    return u;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      var e = this.tokenIndex >= 0 ? this.tokens[this.tokenIndex] : null;
      var t = this.commentIndex >= 0 ? this.comments[this.commentIndex] : null;
      if (e && (!t || e.range[1] > t.range[1])) {
        this.current = e;
        this.tokenIndex -= 1;
      } else {
        if (t) {
          this.current = t;
          this.commentIndex -= 1;
        } else {
          this.current = null;
        }
      }
      return Boolean(this.current) && (-1 === this.border || this.current.range[0] >= this.border);
    }
  }]);
  return n;
}(s);