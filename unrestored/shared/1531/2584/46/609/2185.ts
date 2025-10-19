/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2185
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load_json_js_generator_events = undefined;
exports.load_json_js_generator_events = function (e) {
  var t = function (t, n) {
    for (var r = "", i = e.find_next_block(t, n); i;) {
      var o = e.block_to_code(t, i);
      r += e.prefix_lines("string" === typeof o ? o : o[0], "  ");
      i = e.find_next_block(t, i);
    }
    return r;
  };
  e.register("start_on_click", function (e, n) {
    return "when_start(function() {\n" + t(e, n) + "});\n";
  });
  e.register("start_on_click_2", function (t, n) {
    return "when_start(function() {\n" + e.statement_to_code(t, n, "DO") + "});\n";
  });
  e.register("on_running_group_activated", function (e, n) {
    return "when_switch_to_current_screen(function() {\n" + t(e, n) + "});\n";
  });
  e.register("self_listen", function (t, n) {
    var r = e.statement_to_code(t, n, "DO");
    return "when_get_signal(" + (e.value_to_code(t, n, "message", e.ORDER_FUNCTION_CALL) || "''") + ", function() {\n" + r + "});\n";
  });
  e.register("self_broadcast", function (t, n) {
    return "send_signal(" + (e.value_to_code(t, n, "message", e.ORDER_FUNCTION_CALL) || "''") + ");\n";
  });
  e.register("self_broadcast_and_wait", function (t, n) {
    return "send_signal_and_wait(" + (e.value_to_code(t, n, "message", e.ORDER_FUNCTION_CALL) || "''") + ");\n";
  });
  e.register("when", function (t, n) {
    var r = e.statement_to_code(t, n, "DO");
    return "when (" + (e.value_to_code(t, n, "condition", e.ORDER_FUNCTION_CALL) || "false") + ", function() {\n" + r + "});\n";
  });
  e.register("terminate", function () {
    return "terminate();\n";
  });
};