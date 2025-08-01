"use strict";

function r(e) {
  return /^[+-]?Infinity$/.test(e) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?$/.test(e);
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.load_json_js_generator_shadow = void 0;
exports.load_json_js_generator_shadow = function (e) {
  e.register("logic_empty", function () {
    return ["false", e.ORDER_ATOMIC];
  });
  e.register("math_number", function (t, n) {
    var i = e.get_field_value(t.blocks[n], "NUM") || e.get_field_value(t.blocks[n], "TEXT") || "";
    if (!r(i)) {
      i = e.quote(i);
    }
    return [i, e.ORDER_ATOMIC];
  });
  e.register("text", function (t, n) {
    return [e.quote(e.get_field_value(t.blocks[n], "TEXT") || ""), e.ORDER_ATOMIC];
  });
  e.register("multiline_text", function (t, n) {
    return [e.quote(e.get_field_value(t.blocks[n], "TEXT") || ""), e.ORDER_ATOMIC];
  });
  e.register("default_value", function (t, n) {
    var i = e.get_field_value(t.blocks[n], "TEXT") || "";
    if (!r(i)) {
      i = e.quote(i);
    }
    return [i, e.ORDER_ATOMIC];
  });
};