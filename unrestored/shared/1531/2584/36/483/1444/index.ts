var r = require("./1088/index");
var i = require("./712");
var o = require("../1443/1096/index");
var a = require("./836/index");
var s = require("./959");
var c = require("./834/index");
var u = Object.prototype.hasOwnProperty;
var l = o(function (e, t) {
  if (s(t) || a(t)) {
    i(t, c(t), e);
  } else {
    for (var n in t) if (u.call(t, n)) {
      r(e, n, t[n]);
    }
  }
});
module.exports = l;