/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2221
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.load_json_js_generator_text = undefined
exports.load_json_js_generator_text = function (e) {
  e.register("text_select", function (t, n) {
    return [(e.value_to_code(t, n, "string", e.ORDER_MEMBER) || "''") + ".slice(" + e.value_to_code(t, n, "char_start_index", e.ORDER_MEMBER) + " - 1, " + e.value_to_code(t, n, "char_end_index", e.ORDER_MEMBER) + ")", e.ORDER_ATOMIC]
  })
  e.register("text_length", function (t, n) {
    return [(e.value_to_code(t, n, "VALUE", e.ORDER_MEMBER) || "''") + ".length", e.ORDER_ATOMIC]
  })
  e.register("text_contain", function (t, n) {
    return [(e.value_to_code(t, n, "TEXT1", e.ORDER_MEMBER) || "''") + ".includes(" + (e.value_to_code(t, n, "TEXT2", e.ORDER_MEMBER) || "''") + ")", e.ORDER_FUNCTION_CALL]
  })
  e.register("text_split", function (t, n) {
    return [(e.value_to_code(t, n, "TEXT_TO_SPLIT", e.ORDER_MEMBER) || "''") + ".split(" + (e.value_to_code(t, n, "SPLIT_TEXT", e.ORDER_MEMBER) || "''") + ")", e.ORDER_FUNCTION_CALL]
  })
  e.register("text_join", function (t, n) {
    var /* [auto-meaningful-name] */Object$keysT$blocksN$shadows$filterFunctionEReturn_ADD09$_$testE$length = Object.keys(t.blocks[n].shadows).filter(function (e) {
      return /^ADD[0-9]+$/.test(e)
    }).length
    switch (Object$keysT$blocksN$shadows$filterFunctionEReturn_ADD09$_$testE$length) {
      case 0:
        return ["''", e.ORDER_ATOMIC]
      case 1:
        return ["String(" + (e.value_to_code(t, n, "ADD0", e.ORDER_NONE) || "") + ")", e.ORDER_FUNCTION_CALL]
      case 2:
        return ["String(" + (e.value_to_code(t, n, "ADD0", e.ORDER_NONE) || "''") + ") + String(" + (e.value_to_code(t, n, "ADD1", e.ORDER_NONE) || "''") + ")", e.ORDER_ADDITION]
      default:
        for (var i = new Array(Object$keysT$blocksN$shadows$filterFunctionEReturn_ADD09$_$testE$length), o = 0; o < Object$keysT$blocksN$shadows$filterFunctionEReturn_ADD09$_$testE$length; o++) {
          i[o] = e.value_to_code(t, n, "ADD" + o, e.ORDER_COMMA) || "''"
        }
        return ["[" + i.join(",") + "].join('')", e.ORDER_FUNCTION_CALL]
    }
  })
}
