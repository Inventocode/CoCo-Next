/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：978
 */

"use strict"

var r = require("../180")
var i = function e(t, n) {
  r(this, e)
  this.name = t
  this.identifiers = []
  this.references = []
  this.defs = []
  this.tainted = false
  this.stack = true
  this.scope = n
}
i.CatchClause = "CatchClause"
i.Parameter = "Parameter"
i.FunctionName = "FunctionName"
i.ClassName = "ClassName"
i.Variable = "Variable"
i.ImportBinding = "ImportBinding"
i.ImplicitGlobalVariable = "ImplicitGlobalVariable"
module.exports = i
