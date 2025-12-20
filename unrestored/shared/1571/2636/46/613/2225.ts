/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2225
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.load_json_js_generators_data = undefined
exports.load_json_js_generators_data = function (e, t) {
  var n = function (e, n) {
    var r
    return (null === (r = t(n).find(function (t) {
      return t[1] === e
    })) || undefined === r ? undefined : r[0]) || "?"
  }
  e.register("variables_get", function (t, r) {
    var i = e.get_field_value(t.blocks[r], "VAR") || "?"
    return [n(i, "any") || "?", e.ORDER_ATOMIC]
  })
  e.register("variables_set", function (t, r) {
    var i = e.value_to_code(t, r, "VALUE", e.ORDER_ASSIGNMENT) || "0"
    var o = e.get_field_value(t.blocks[r], "VAR") || "?"
    return (n(o, "any") || "?") + " = " + i + ";\n"
  })
  e.register("change_variable", function (t, r) {
    var i = e.get_field_value(t.blocks[r], "valname") || ""
    var o = n(i, "any") || "?"
    var a = e.get_field_value(t.blocks[r], "method")
    var s = e.value_to_code(t, r, "n", e.ORDER_FUNCTION_CALL) || "''"
    s = Number(s) > 0 ? s : "(" + s + ")"
    return "increase" === a ? o + " = " + o + " + " + s + ";\n" : "decrease" === a ? o + " = " + o + " - " + s + ";\n" : ""
  })
  e.register("lists_get", function (t, r) {
    var i = e.get_field_value(t.blocks[r], "VAR") || "?"
    return [n(i, "list") || "?", e.ORDER_ATOMIC]
  })
  var r = function (t, n, r) {
    var i = e.value_to_code(t, n, r, e.ORDER_FUNCTION_CALL) || "[]"
    return "?" === i ? "[]" : i
  }
  var i = function (t, n, r) {
    return e.value_to_code(t, n, r, e.ORDER_FUNCTION_CALL) || "''"
  }
  e.register("lists_append", function (e, t) {
    return r(e, t, "VAR") + ".push(" + i(e, t, "VALUE") + ");\n"
  })
  e.register("lists_insert_value", function (t, n) {
    return r(t, n, "VAR") + ".splice(" + function (t, n, r) {
      var i = parseInt(e.value_to_code(t, n, r, e.ORDER_FUNCTION_CALL) || "0")
      return i > 0 ? i - 1 : i + 1
    }(t, n, "INDEX") + ", 0, " + i(t, n, "VALUE") + ");\n"
  })
  e.register("lists_copy", function (e, t) {
    return r(e, t, "TARGET") + " = " + r(e, t, "VALUE") + ".concat();\n"
  })
  e.register("lists_length", function (t, n) {
    return [r(t, n, "VAR") + ".length", e.ORDER_FUNCTION_CALL]
  })
  e.register("lists_is_exist", function (t, n) {
    return [r(t, n, "VAR") + ".includes(" + i(t, n, "VALUE") + ")", e.ORDER_FUNCTION_CALL]
  })
  e.register("lists_index_of", function (t, n) {
    return [r(t, n, "VAR") + ".indexOf(" + i(t, n, "VALUE") + ")", e.ORDER_FUNCTION_CALL]
  })
}
