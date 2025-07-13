"use strict";

import * as r from "../../../../../../../3262/3188/2658/220";
import * as i from "../../../../../../../3262/3188/2658/2679/356/index";
import * as o from "../../../../../../../3262/3188/2658/2679/357/index";
import * as a from "./1116/index";
module.exports = function (e) {
  i(n, e);
  var t = o(n);
  function n(e, i, o, a, s, c, u) {
    var l;
    r(this, n);
    (l = t.call(this, e, i, o, a, s)).index = Math.max(0, l.index - c);
    l.indexEnd = Math.min(e.length - 1, l.indexEnd + u);
    return l;
  }
  return n;
}(a);