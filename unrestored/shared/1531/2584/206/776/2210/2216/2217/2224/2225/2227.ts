/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2227
 */

"use strict"

module.exports = function (e, t, n) {
  var r = " "
  var i = e.schema[t]
  var o = e.schemaPath + e.util.getProperty(t)
  var a = e.errSchemaPath + "/" + t
  var s = !e.opts.allErrors
  var c = e.util.copy(e)
  var u = ""
  c.level++
  var l = "valid" + c.level
  var c$baseId = c.baseId
  var d = true
  var h = i
  if (h) {
    for (var p, _ = -1, A = h.length - 1; _ < A;) {
      p = h[_ += 1]
      if (e.opts.strictKeywords ? "object" == typeof p && Object.keys(p).length > 0 || false === p : e.util.schemaHasRules(p, e.RULES.all)) {
        d = false
        c.schema = p
        c.schemaPath = o + "[" + _ + "]"
        c.errSchemaPath = a + "/" + _
        r += "  " + e.validate(c) + " "
        c.baseId = c$baseId
        if (s) {
          r += " if (" + l + ") { "
          u += "}"
        }
      }
    }
  }
  if (s) {
    r += d ? " if (true) { " : " " + u.slice(0, -1) + " "
  }
  return r
}
