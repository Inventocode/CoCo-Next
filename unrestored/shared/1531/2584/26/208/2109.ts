"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register_procedure_generator = undefined;
var r = require("../../17/497/387");
var i = require("../../301/173");
exports.register_procedure_generator = function (e) {
  e.register(i.PROCEDURE_BLOCK_TYPES.DEF, function (t) {
    var n = t.get_field_value("NAME");
    (0, r.assert)(n);
    var o = t.inputList.filter(function (e) {
      return e.name.startsWith(i.PROCEDURE_BLOCK_INPUT_NAMES.PARAM_PREFIX);
    }).map(function (n) {
      return e.value_to_code(t, n.name, e.ORDER_ATOMIC);
    });
    var a = e.statement_to_code(t, "STACK");
    return "function " + n + "(" + o.join(", ") + ") {\n" + a + "}";
  });
  e.register(i.PROCEDURE_BLOCK_TYPES.RETURN, function (t) {
    return t.get_input("VALUE") ? "return " + e.value_to_code(t, "VALUE", e.ORDER_NONE) + ";\n" : "return;\n";
  });
  var t = function (t) {
    var n = t.get_field_value("NAME");
    (0, r.assert)(n);
    return n + "(" + t.inputList.filter(function (e) {
      return e.name.startsWith("ARG");
    }).map(function (n) {
      return e.value_to_code(t, n.name, e.ORDER_NONE);
    }).join(", ") + ")";
  };
  e.register(i.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, function (e) {
    return t(e) + ";\n";
  });
  e.register(i.PROCEDURE_BLOCK_TYPES.CALL_RETURN, function (n) {
    return [t(n), e.ORDER_FUNCTION_CALL];
  });
  var n = function (t) {
    var n = t.get_field_value("param_name");
    (0, r.assert)(n);
    return [n, e.ORDER_ATOMIC];
  };
  e.register(i.PROCEDURE_BLOCK_TYPES.PARAM, n);
  e.register(i.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, n);
};