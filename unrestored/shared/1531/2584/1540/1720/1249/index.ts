/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1249
 */

var r = require("../../1623/309");
var o = require("../../1735/257");
var i = require("../../1253/934");
var a = require("../../1253/824");
var s = require("./1064");
var c = require("../../1253/632");
var l = require("../258/index").aTypedArrayConstructor;
module.exports = function (e) {
  var t;
  var n;
  var u;
  var d;
  var p;
  var f;
  var h = r(e);
  var m = arguments.length;
  var g = m > 1 ? arguments[1] : undefined;
  var _ = undefined !== g;
  var v = a(h);
  if (undefined != v && !s(v)) {
    for (f = (p = i(h, v)).next, h = []; !(d = f.call(p)).done;) {
      h.push(d.value);
    }
  }
  for (_ && m > 2 && (g = c(g, arguments[2], 2)), n = o(h.length), u = new (l(this))(n), t = 0; n > t; t++) {
    u[t] = _ ? g(h[t], t) : h[t];
  }
  return u;
};