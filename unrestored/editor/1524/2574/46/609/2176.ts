"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.load_json_js_generator_sensing = void 0;
exports.load_json_js_generator_sensing = function (e) {
  e.register("get_time", function (t, n) {
    return ["value_of_current_time('" + e.get_field_value(t.blocks[n], "op") + "')", e.ORDER_ATOMIC];
  });
  e.register("get_timer", function () {
    return ["value_of_timer()", e.ORDER_ATOMIC];
  });
  e.register("reset_timer", function () {
    return "reset_timer();\n";
  });
};