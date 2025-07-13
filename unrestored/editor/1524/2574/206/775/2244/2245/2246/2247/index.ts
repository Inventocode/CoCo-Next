"use strict";

import * as r from "../../../../../../../../3262/3188/2658/220";
import * as i from "../../../../../../../../3262/3188/2658/230";
import * as o from "./2248";
import * as a from "./2249";
import * as s from "./2250";
import * as c from "./2251";
import * as u from "../1116/index";
import * as l from "./2252";
import * as f from "./2253/index";
var h = function () {
  function e(t, n) {
    r(this, e);
    this.TokenCursor = t;
    this.TokenCommentCursor = n;
  }
  i(e, [{
    key: "createBaseCursor",
    value: function (e, t, n, r, i, o) {
      return new (o ? this.TokenCommentCursor : this.TokenCursor)(e, t, n, r, i);
    }
  }, {
    key: "createCursor",
    value: function (e, t, n, r, i, o, a, c, u) {
      var h = this.createBaseCursor(e, t, n, r, i, o);
      if (a) {
        h = new s(h, a);
      }
      if (c >= 1) {
        h = new f(h, c);
      }
      if (u >= 0) {
        h = new l(h, u);
      }
      return h;
    }
  }]);
  return e;
}();
exports.forward = new h(u, c);
exports.backward = new h(a, o);