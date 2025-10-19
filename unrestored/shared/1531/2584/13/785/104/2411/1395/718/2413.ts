/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2413
 */

var r = require("./849");
var i = Object.prototype;
var o = i.hasOwnProperty;
var a = i.toString;
var s = r ? r.toStringTag : undefined;
module.exports = function (e) {
  var t = o.call(e, s);
  var n = e[s];
  try {
    e[s] = undefined;
    var r = true;
  } catch (c) {}
  var i = a.call(e);
  if (r) {
    if (t) {
      e[s] = n;
    } else {
      delete e[s];
    }
  }
  return i;
};