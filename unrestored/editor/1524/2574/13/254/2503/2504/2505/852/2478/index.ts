var r = require("../../../../../2518/2519/475");
var i = require("./1146");
var o = require("./2479");
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