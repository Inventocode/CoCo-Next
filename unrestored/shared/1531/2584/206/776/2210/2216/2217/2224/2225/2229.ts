/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2229
 */

"use strict"

module.exports = function (e, t, n) {
  var r = " "
  var i = e.schema[t]
  var o = e.errSchemaPath + "/" + t
  e.opts.allErrors
  var a = e.util.toQuotedString(i)
  if (true === e.opts.$comment) {
    r += " console.log(" + a + ");"
  } else {
    if ("function" == typeof e.opts.$comment) {
      r += " self._opts.$comment(" + a + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"
    }
  }
  return r
}
