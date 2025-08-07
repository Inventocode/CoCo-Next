"use strict";

var r = require("../1678/437");
var o = require("./633");
var i = require("./823");
var a = require("../1745/423/index");
var s = require("./1066");
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
  return !t || r >= t.length ? (e.target = undefined, {
    value: undefined,
    done: true
  }) : "keys" == n ? {
    value: r,
    done: false
  } : "values" == n ? {
    value: t[r],
    done: false
  } : {
    value: [r, t[r]],
    done: false
  };
}, "values");
i.Arguments = i.Array;
o("keys");
o("values");
o("entries");