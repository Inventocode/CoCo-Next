"use strict";

import * as r from "../1626/86/index";
import * as o from "../1626/167";
import * as i from "../1534/818";
import * as a from "../1626/231";
import * as s from "../1623/309";
import * as c from "../1728/257";
import * as l from "./707";
import * as u from "./820/index";
import * as d from "./821";
import * as p from "../1735/247/index";
import * as f from "../1727/629";
var h = p("isConcatSpreadable");
var m = f >= 51 || !o(function () {
  var e = [];
  e[h] = !1;
  return e.concat()[0] !== e;
});
var g = d("concat");
var _ = function (e) {
  if (!a(e)) {
    return !1;
  }
  var t = e[h];
  return void 0 !== t ? !!t : i(e);
};
r({
  target: "Array",
  proto: !0,
  forced: !m || !g
}, {
  concat: function (e) {
    var t;
    var n;
    var r;
    var o;
    var i;
    var a = s(this);
    var d = u(a, 0);
    var p = 0;
    for (t = -1, r = arguments.length; t < r; t++) {
      if (_(i = -1 === t ? a : arguments[t])) {
        if (p + (o = c(i.length)) > 9007199254740991) {
          throw TypeError("Maximum allowed index exceeded");
        }
        for (n = 0; n < o; n++, p++) {
          if (n in i) {
            l(d, p, i[n]);
          }
        }
      } else {
        if (p >= 9007199254740991) {
          throw TypeError("Maximum allowed index exceeded");
        }
        l(d, p++, i);
      }
    }
    d.length = p;
    return d;
  }
});