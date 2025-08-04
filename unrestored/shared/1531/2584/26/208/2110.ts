"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.register_procedure_json_generator = void 0;
var r = require("../../301/173");
exports.register_procedure_json_generator = function (e) {
  e.register(r.PROCEDURE_BLOCK_TYPES.DEF, function (t, n) {
    var i = t.blocks[n];
    var o = e.get_field_value(i, "NAME");
    var a = Object.keys(i.shadows).filter(function (e) {
      return e.startsWith(r.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX);
    }).map(function (r) {
      return e.value_to_code(t, n, r, e.ORDER_ATOMIC);
    });
    var s = e.statement_to_code(t, n, "STACK");
    return "function " + o + "(" + a.join(", ") + ") {\n" + s + "}";
  });
  e.register(r.PROCEDURE_BLOCK_TYPES.RETURN, function (t, n) {
    var r = t.blocks[n];
    return Object.keys(r.shadows).length > 2 ? "return " + e.value_to_code(t, n, "VALUE", e.ORDER_NONE) + ";\n" : "return;\n";
  });
  var t = function (t, n) {
    var r = t.blocks[n];
    return e.get_field_value(r, "NAME") + "(" + Object.keys(r.shadows).filter(function (e) {
      return e.startsWith("ARG");
    }).map(function (r) {
      return e.value_to_code(t, n, r, e.ORDER_NONE);
    }).join(", ") + ")";
  };
  e.register(r.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, function (e, n) {
    return t(e, n) + ";\n";
  });
  e.register(r.PROCEDURE_BLOCK_TYPES.CALL_RETURN, function (n, r) {
    return [t(n, r), e.ORDER_FUNCTION_CALL];
  });
  var n = function (t, n) {
    var r = t.blocks[n];
    return [e.get_field_value(r, "param_name"), e.ORDER_ATOMIC];
  };
  e.register(r.PROCEDURE_BLOCK_TYPES.PARAM, n);
  e.register(r.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, n);
};