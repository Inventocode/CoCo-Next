/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1172
 */

"use strict"

module.exports = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  if (e) {
    for (var n = {
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
          name: "queryKey",
          parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
          strict: /^(?:([^:/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?))?((((?:[^?#/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose: /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
      }, r = n.parser[t.strictMode ? "strict" : "loose"].exec(e), i = {}, o = 14; o--;) {
      i[n.key[o]] = r[o] || ""
    }
    i[n.q.name] = {}
    i[n.key[12]].replace(n.q.parser, function (e, t, r) {
      if (t) {
        i[n.q.name][t] = r
      }
    })
    return i
  }
}
