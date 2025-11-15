/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：694
 */

"use strict"

module.exports = function (e, t, n, r, o, i, a, s) {
  if (!e) {
    var c
    if (undefined === t) {
      c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
    } else {
      var l = [n, r, o, i, a, s]
      var u = 0;
      (c = new Error(t.replace(/%s/g, function () {
        return l[u++]
      }))).name = "Invariant Violation"
    }
    c.framesToPop = 1
    throw c
  }
}
