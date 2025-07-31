var r = require("./1087/index");
var i = require("./712");
var o = require("../1436/1095/index");
var a = require("./835/index");
var s = require("./958");
var c = require("./833/index");
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