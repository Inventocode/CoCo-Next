"use strict";

var r = require("./437");
var o = require("./633");
var i = require("./822");
var a = require("../1738/423/index");
var s = require("./1065/index");
var c = a.set;
var l = a.getterFor("Array Iterator");
module.exports = s(Array, "Array", function (e, t) {
  c(this, {
    type: "Array Iterator",
    target: r(e),
    index: 0,
    kind: t
  });
}, function () {
  var e = l(this);
  var t = e.target;
  var n = e.kind;
  var r = e.index++;
  return !t || r >= t.length ? (e.target = void 0, {
    value: void 0,
    done: !0
  }) : "keys" == n ? {
    value: r,
    done: !1
  } : "values" == n ? {
    value: t[r],
    done: !1
  } : {
    value: [r, t[r]],
    done: !1
  };
}, "values");
i.Arguments = i.Array;
o("keys");
o("values");
o("entries");