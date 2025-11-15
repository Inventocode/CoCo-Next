/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1327
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.load_json_js_generator_tell = exports.load_json_js_generators_control = undefined
exports.load_json_js_generators_control = function (e) {
  e.register("repeat_forever", function (t, n) {
    return "while(true) {\n" + e.statement_to_code(t, n, "DO") + "}\n"
  })
  e.register("repeat_n_times", function (t, n) {
    return "for (let i = 0; i < " + e.value_to_code(t, n, "times", e.ORDER_FUNCTION_CALL) + "; i++) {\n" + e.statement_to_code(t, n, "DO") + "}\n"
  })
  e.register("repeat_forever_until", function (t, n) {
    return "while(!" + e.value_to_code(t, n, "condition", e.ORDER_FUNCTION_CALL) + ") {\n" + e.statement_to_code(t, n, "DO") + "}\n"
  })
  e.register("break", function () {
    return "break;\n"
  })
  e.register("warp", function (t, n) {
    return "warp(function() {\n" + e.statement_to_code(t, n, "DO") + "});\n"
  })
  e.register("wait", function (t, n) {
    return "wait_for_sec(" + e.value_to_code(t, n, "time", e.ORDER_FUNCTION_CALL) + ");\n"
  })
  e.register("wait_until", function (t, n) {
    return "wait_until(" + e.value_to_code(t, n, "condition", e.ORDER_FUNCTION_CALL) + ");\n"
  })
  e.register("destruct", function () {
    return "destruct();\n"
  })
  e.register("controls_if", function (t, n) {
    for (var r = Object.keys(t.blocks[n].shadows), /* [auto-meaningful-name] */r$filterFunctionEReturn_IF09$_$testE$length = r.filter(function (e) {
        return /^IF[0-9]+$/.test(e)
      }).length, o = 1, a = "if (" + (e.value_to_code(t, n, "IF0", e.ORDER_FUNCTION_CALL) || "false") + ") {\n" + e.statement_to_code(t, n, "DO0") + "}"; o < r$filterFunctionEReturn_IF09$_$testE$length;) {
      a += " else if (" + (e.value_to_code(t, n, "IF" + o, e.ORDER_FUNCTION_CALL) || "false") + ") {\n" + e.statement_to_code(t, n, "DO" + o) + "}"
      o++
    }
    if (r.indexOf("ELSE") > -1) {
      a += " else {\n" + e.statement_to_code(t, n, "ELSE") + "}\n"
    }
    return a
  })
}
exports.load_json_js_generator_tell = function (e, t) {
  e.register("tell", function (n, r) {
    var i
    var o = e.get_field_value(n.blocks[r], "sprite")
    return "call_events_of('" + ((null === (i = t().find(function (e) {
      return e[1] === o
    })) || undefined === i ? undefined : i[0]) || "?") + "'), function() {\n" + e.statement_to_code(n, r, "DO") + "});\n"
  })
  e.register("sync_tell", function (n, r) {
    var i
    var o = e.get_field_value(n.blocks[r], "sprite")
    return "call_sync_events_of('" + ((null === (i = t().find(function (e) {
      return e[1] === o
    })) || undefined === i ? undefined : i[0]) || "?") + "'), function() {\n" + e.statement_to_code(n, r, "DO") + "});\n"
  })
}
