var r = require("./1272");
var i = require("../../1277/1094");
var o = require("../../1819/1093/index");
var a = require("../../1819/1093/1270");
var s = Object.getOwnPropertySymbols ? function (e) {
  for (var t = []; e;) {
    r(t, o(e));
    e = i(e);
  }
  return t;
} : a;
module.exports = s;