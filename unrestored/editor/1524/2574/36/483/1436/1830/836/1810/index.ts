var r = require("../../638");
var i = require("../../../../1437/958");
var o = require("./1811");
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