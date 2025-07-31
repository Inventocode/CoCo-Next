"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.init_logic_blocks = void 0;
var r = require("./2540/579");
exports.init_logic_blocks = function (e) {
  var t = [{
    type: "logic_negate",
    message0: (0, r.i18n)("LOGIC_NEGATE_TITLE"),
    args0: [{
      type: "input_value",
      name: "BOOL",
      check: ["Boolean"]
    }],
    output: "Boolean",
    colour: (0, r.i18n)("ORANGE_3")
  }, {
    type: "logic_boolean",
    message0: "%1",
    args0: [{
      type: "field_dropdown",
      name: "BOOL",
      options: [[(0, r.i18n)("LOGIC_BOOLEAN_TRUE"), "TRUE"], [(0, r.i18n)("LOGIC_BOOLEAN_FALSE"), "FALSE"]]
    }],
    output: "Boolean",
    colour: (0, r.i18n)("ORANGE_3"),
    tooltip: (0, r.i18n)("LOGIC_BOOLEAN_TOOLTIP")
  }, {
    type: "logic_compare",
    message0: (0, r.i18n)("logic_compare"),
    args0: [{
      type: "input_value",
      name: "A",
      check: ["Number", "String", "Boolean", "Array"]
    }, {
      type: "field_dropdown",
      name: "OP",
      options: [["=", "EQ"], ["\u2260", "NEQ"], ["<", "LT"], ["\u2264", "LTE"], [">", "GT"], ["\u2265", "GTE"]]
    }, {
      type: "input_value",
      name: "B",
      check: ["Number", "String", "Boolean", "Array"]
    }],
    inputsInline: !0,
    output: "Boolean",
    colour: (0, r.i18n)("ORANGE_3"),
    extensions: ["logic_op_tooltip"]
  }, {
    type: "logic_operation",
    message0: (0, r.i18n)("logic_operation"),
    args0: [{
      type: "input_value",
      name: "A",
      check: "Boolean"
    }, {
      type: "field_dropdown",
      name: "OP",
      options: [[(0, r.i18n)("LOGIC_OPERATION_AND"), "AND"], [(0, r.i18n)("LOGIC_OPERATION_OR"), "OR"]]
    }, {
      type: "input_value",
      name: "B",
      check: "Boolean"
    }],
    inputsInline: !0,
    output: "Boolean",
    colour: (0, r.i18n)("ORANGE_3"),
    extensions: ["logic_op_tooltip"]
  }];
  e.define_blocks_with_json_array(t);
  var n = {
    EQ: (0, r.i18n)("LOGIC_COMPARE_TOOLTIP_EQ"),
    NEQ: (0, r.i18n)("LOGIC_COMPARE_TOOLTIP_NEQ"),
    LT: (0, r.i18n)("LOGIC_COMPARE_TOOLTIP_LT"),
    LTE: (0, r.i18n)("LOGIC_COMPARE_TOOLTIP_LTE"),
    GT: (0, r.i18n)("LOGIC_COMPARE_TOOLTIP_GT"),
    GTE: (0, r.i18n)("LOGIC_COMPARE_TOOLTIP_GTE"),
    AND: (0, r.i18n)("LOGIC_OPERATION_TOOLTIP_AND"),
    OR: (0, r.i18n)("LOGIC_OPERATION_TOOLTIP_OR")
  };
  e.extensions.register("logic_op_tooltip", e.extensions.build_tooltip_for_dropdown("OP", n));
  Object.assign(e.blocks_xml, {
    logic_negate: '<block type="logic_negate">\n      ' + (0, r.logic_value)("BOOL") + "\n    </block>\n    ",
    logic_boolean: '<block type="logic_boolean" />',
    logic_compare: '<block type="logic_compare">\n      ' + (0, r.number_value)("A", "0") + "\n      " + (0, r.number_value)("B", "0") + "\n    </block>\n    ",
    logic_operation: '<block type="logic_operation">\n      ' + (0, r.logic_value)("A") + "\n      " + (0, r.logic_value)("B") + "\n    </block>\n    "
  });
};