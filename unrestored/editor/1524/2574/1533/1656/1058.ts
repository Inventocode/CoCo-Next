var r = require("../1250/472");
var o = require("../1534/631");
var i = require("../1534/1060");
var a = require("../1659/241");
module.exports = r("Reflect", "ownKeys") || function (e) {
  var t = o.f(a(e));
  var n = i.f;
  return n ? t.concat(n(e)) : t;
};