var r = require("./1269");
var i = require("../../1274/1093/index");
var o = require("../../1812/1092/index");
var a = require("../../1812/1092/1267");
var s = Object.getOwnPropertySymbols ? function (e) {
  for (var t = []; e;) {
    r(t, o(e));
    e = i(e);
  }
  return t;
} : a;
module.exports = s;