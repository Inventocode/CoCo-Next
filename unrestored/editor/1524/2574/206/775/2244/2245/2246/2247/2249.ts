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