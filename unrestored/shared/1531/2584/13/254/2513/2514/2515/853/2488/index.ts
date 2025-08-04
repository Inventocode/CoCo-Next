var r = require("../../../../../2533/1420/475");
var i = require("../../2516/1417/1149");
var o = require("./2489");
var a = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  if (!r(e)) {
    return o(e);
  }
  var t = i(e);
  var n = [];
  for (var s in e) if ("constructor" != s || !t && a.call(e, s)) {
    n.push(s);
  }
  return n;
};