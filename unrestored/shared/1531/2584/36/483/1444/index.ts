var r = require("./1088/index");
var i = require("../1445/712/index");
var o = require("../1445/1096/index");
var a = require("./836/index");
var s = require("./959");
var c = require("../1445/834/index");
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