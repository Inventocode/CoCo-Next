var r = require("../1274/1272");
var i = require("../../1277/1094/index");
var o = require("../../1273/1093/index");
var a = require("./1270");
var s = Object.getOwnPropertySymbols ? function (e) {
  for (var t = []; e;) {
    r(t, o(e));
    e = i(e);
  }
  return t;
} : a;
module.exports = s;