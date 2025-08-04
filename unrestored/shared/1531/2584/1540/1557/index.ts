"use strict";

var r = require("../1623/86");
var o = require("../1736/167");
var i = require("../1541/819");
var a = require("../1738/231");
var s = require("../1623/309");
var c = require("../1735/257");
var l = require("./707");
var u = require("./821/index");
var d = require("./822");
var p = require("../1742/247/index");
var f = require("../1734/629/index");
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