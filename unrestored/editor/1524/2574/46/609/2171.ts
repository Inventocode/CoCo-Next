"use strict";

exports.load_json_js_generator_logic = function (e) {
  e.register("logic_negate", function (t, n) {
    var r = e.ORDER_LOGICAL_NOT;
    return ["!" + (e.value_to_code(t, n, "BOOL", r) || "false"), r];
  });
  e.register("logic_boolean", function (t, n) {
    return ["TRUE" == e.get_field_value(t.blocks[n], "BOOL") ? "true" : "false", e.ORDER_ATOMIC];
  });
  e.register("logic_compare", function (t, n) {
    var r = {
      EQ: "===",
      NEQ: "!=",
      LT: "<",
      LTE: "<=",
      GT: ">",
      GTE: ">="
    }[e.get_field_value(t.blocks[n], "OP") || ""];
    var i = "===" == r || "!=" == r ? e.ORDER_EQUALITY : e.ORDER_RELATIONAL;
    return [(e.value_to_code(t, n, "A", i) || "0") + " " + r + " " + (e.value_to_code(t, n, "B", i) || "0"), i];
  });
  e.register("logic_operation", function (t, n) {
    var r = "AND" == e.get_field_value(t.blocks[n], "OP") ? "&&" : "||";
    var i = "&&" == r ? e.ORDER_LOGICAL_AND : e.ORDER_LOGICAL_OR;
    return [(e.value_to_code(t, n, "A", i) || "false") + " " + r + " " + (e.value_to_code(t, n, "B", i) || "false"), i];
  });
};