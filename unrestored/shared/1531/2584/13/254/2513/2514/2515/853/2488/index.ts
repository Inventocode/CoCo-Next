var r = require("../../../../../2528/2529/475");
var i = require("../../../../../../785/104/2483/2484/2485/1417/1149");
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