/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2270
 */

"use strict"

var r = require("../../../38/607/624/index")
var i = require("../../../36/2668/220")
var o = require("../../../36/2668/230")
var a = require("./2271/index")
var s = require("../1112")
var c = require("../807/index")("eslint:config-comment-parser")
module.exports = function () {
  function e() {
    i(this, e)
  }
  o(e, [{
    key: "parseStringConfig",
    value: function (e, t) {
      c("Parsing String config")
      var n = {}
      e.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([,:])[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/g, "$1").split(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|,+/).forEach(function (e) {
        if (e) {
          var i = e.split(":")
          var o = r(i, 2)
          var a = o[0]
          var s = o[1]
          var c = undefined === s ? null : s
          n[a] = {
            value: c,
            comment: t
          }
        }
      })
      return n
    }
  }, {
    key: "parseJsonConfig",
    value: function (e, t) {
      c("Parsing JSON config")
      var n = {}
      try {
        n = a.parse("Object", e) || {}
        if (s.isEverySeverityValid(n)) {
          return {
            success: true,
            config: n
          }
        }
      } catch (i) {
        c("Levn parsing failed; falling back to manual parsing.")
      }
      n = {}
      var r = e.replace(/([\x2D\/-9A-Za-z]+):/g, "\"$1\":").replace(/(\]|[0-9])[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(?=")/, "$1,")
      try {
        n = JSON.parse("{".concat(r, "}"))
      } catch (i) {
        c("Manual parsing failed.")
        return {
          success: false,
          error: {
            ruleId: null,
            fatal: true,
            severity: 2,
            message: "Failed to parse JSON from '".concat(r, "': ").concat(i.message),
            line: t.start.line,
            column: t.start.column + 1
          }
        }
      }
      return {
        success: true,
        config: n
      }
    }
  }, {
    key: "parseListConfig",
    value: function (e) {
      c("Parsing list config")
      var t = {}
      e.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*/g, ",").split(/,+/).forEach(function (e) {
        var n = e.trim()
        if (n) {
          t[n] = true
        }
      })
      return t
    }
  }])
  return e
}()
