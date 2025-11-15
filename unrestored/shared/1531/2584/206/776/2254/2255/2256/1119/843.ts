/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：843
 */

"use strict"

var r = require("../../../../220")
var i = require("../../../../230")
module.exports = function () {
  function e() {
    r(this, e)
    this.current = null
  }
  i(e, [{
    key: "getOneToken",
    value: function () {
      return this.moveNext() ? this.current : null
    }
  }, {
    key: "getAllTokens",
    value: function () {
      for (var e = []; this.moveNext();) {
        e.push(this.current)
      }
      return e
    }
  }, {
    key: "moveNext",
    value: function () {
      throw new Error("Not implemented.")
    }
  }])
  return e
}()
