/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2189
 */

"use strict"

var r = require("../../../1036/1363/569")
var i = require("./2192")
var o = require("./2195/index")
var a = require("./1110")
var s = require("./964")
var require$1328Index$Scope = require("./1328/index").Scope
var require$2199$version = require("./2199").version
module.exports = {
  version: require$2199$version,
  Reference: a,
  Variable: s,
  Scope: require$1328Index$Scope,
  ScopeManager: i,
  analyze: function (e, t) {
    var n = function e(t, n) {
      function r(e) {
        return "object" === typeof e && e instanceof Object && !(e instanceof Array) && !(e instanceof RegExp)
      }
      for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
        var o = n[i]
        if (r(o)) {
          if (r(t[i])) {
            e(t[i], o)
          } else {
            t[i] = e({}, o)
          }
        } else {
          t[i] = o
        }
      }
      return t
    }({
      optimistic: false,
      directive: false,
      nodejsScope: false,
      impliedStrict: false,
      sourceType: "script",
      ecmaVersion: 5,
      childVisitorKeys: null,
      fallback: "iteration"
    }, t)
    var a = new i(n)
    new o(n, a).visit(e)
    r(null === a.__currentScope, "currentScope should be null.")
    return a
  }
}
