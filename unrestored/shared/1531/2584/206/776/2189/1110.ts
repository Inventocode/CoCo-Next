/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1110
 */

"use strict"

var r = require("../../../36/2668/220")
var i = require("../../../36/2668/230")
var o = function () {
  function e(t, n, i, o, a, s, c) {
    r(this, e)
    this.identifier = t
    this.from = n
    this.tainted = false
    this.resolved = null
    this.flag = i
    if (this.isWrite()) {
      this.writeExpr = o
      this.partial = s
      this.init = c
    }
    this.__maybeImplicitGlobal = a
  }
  i(e, [{
    key: "isStatic",
    value: function () {
      return !this.tainted && this.resolved && this.resolved.scope.isStatic()
    }
  }, {
    key: "isWrite",
    value: function () {
      return !!(this.flag & e.WRITE)
    }
  }, {
    key: "isRead",
    value: function () {
      return !!(this.flag & e.READ)
    }
  }, {
    key: "isReadOnly",
    value: function () {
      return this.flag === e.READ
    }
  }, {
    key: "isWriteOnly",
    value: function () {
      return this.flag === e.WRITE
    }
  }, {
    key: "isReadWrite",
    value: function () {
      return this.flag === e.RW
    }
  }])
  return e
}()
o.READ = 1
o.WRITE = 2
o.RW = 3
module.exports = o
