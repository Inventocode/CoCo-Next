/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：86
 */

var r = require("../1785/194")
var /* [auto-meaningful-name] */require$$_1581_386$f = require("../1581/386").f
var i = require("../1782/425")
var a = require("../1282/400/index")
var s = require("../1282/400/1077")
var c = require("../1584/1239")
var l = require("../1648/829")
module.exports = function (e, t) {
  var n
  var u
  var d
  var p
  var f
  var /* [auto-meaningful-name] */e$target = e.target
  var /* [auto-meaningful-name] */e$global = e.global
  var /* [auto-meaningful-name] */e$stat = e.stat
  if (n = e$global ? r : e$stat ? r[e$target] || s(e$target, {}) : (r[e$target] || {}).prototype) {
    for (u in t) {
      p = t[u]
      d = e.noTargetGet ? (f = require$$_1581_386$f(n, u)) && f.value : n[u]
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
