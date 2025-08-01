var r = require("../1253/472");
var o = require("../1541/631");
var i = require("../1541/1061");
var a = require("../1666/241");
module.exports = r("Reflect", "ownKeys") || function (e) {
  var t = o.f(a(e));
  var n = i.f;
  return n ? t.concat(n(e)) : t;
};