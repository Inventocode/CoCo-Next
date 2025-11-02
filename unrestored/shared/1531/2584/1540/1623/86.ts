/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：86
 */

var r = require("../1736/194")
var require$$1659386Index$f = require("../1659/386/index").f
var i = require("../1740/422")
var a = require("../1745/398/index")
var s = require("../1745/398/1056")
var c = require("../1544/1210")
var l = require("../1667/818")
module.exports = function (e, t) {
  var n
  var u
  var d
  var p
  var f
  var e$target = e.target
  var e$global = e.global
  var e$stat = e.stat
  if (n = e$global ? r : e$stat ? r[e$target] || s(e$target, {}) : (r[e$target] || {}).prototype) {
    for (u in t) {
      p = t[u]
      d = e.noTargetGet ? (f = require$$1659386Index$f(n, u)) && f.value : n[u]
      if (!l(e$global ? u : e$target + (e$stat ? "." : "#") + u, e.forced) && undefined !== d) {
        if (typeof p === typeof d) {
          continue
        }
        c(p, d)
      }
      if (e.sham || d && d.sham) {
        i(p, "sham", true)
      }
      a(n, u, p, e)
    }
  }
}
