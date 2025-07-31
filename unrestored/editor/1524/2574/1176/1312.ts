"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.init_shadows = void 0;
var r = require("./2540/579");
exports.init_shadows = function (e) {
  var t = [{
    type: "logic_empty",
    message0: "%1",
    args0: [{
      type: "field_label",
      name: "BOOL",
      text: ""
    }],
    output: "Boolean",
    colour: (0, r.i18n)("ORANGE_3"),
    tooltip: (0, r.i18n)("LOGIC_BOOLEAN_TOOLTIP")
  }, {
    type: "math_number",
    message0: "%1",
    args0: [{
      type: "field_number",
      name: "NUM",
      value: 0
    }],
    output: "Number",
    colour: (0, r.i18n)("ORANGE_3"),
    tooltip: (0, r.i18n)("MATH_NUMBER_TOOLTIP"),
    extensions: ["parent_tooltip_when_inline"]
  }, {
    type: "text",
    message0: "%1",
    args0: [{
      type: "field_input",
      name: "TEXT",
      text: ""
    }],
    output: "String",
    colour: (0, r.i18n)("ORANGE_3"),
    tooltip: (0, r.i18n)("TEXT_TEXT_TOOLTIP"),
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  }, {
    type: "multiline_text",
    message0: "%1",
    args0: [{
      type: "field_multiline_input",
      name: "TEXT",
      text: "",
      max_width: 264
    }],
    output: "String",
    colour: (0, r.i18n)("ORANGE_3"),
    tooltip: (0, r.i18n)("TEXT_TEXT_TOOLTIP"),
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  }, {
    type: "default_value",
    message0: "%1",
    args0: [{
      type: "field_default_value",
      name: "TEXT",
      default_value: "0"
    }],
    output: "String",
    colour: (0, r.i18n)("TEXTS_HUE"),
    tooltip: (0, r.i18n)("TEXT_TEXT_TOOLTIP"),
    extensions: ["parent_tooltip_when_inline"]
  }];
  e.define_blocks_with_json_array(t);
  e.Blocks.SHADOW = e.Blocks.SHADOW || {};
  Object.assign(e.Blocks.SHADOW, {
    logic: '<empty type="logic_empty"><field name="BOOL"></field></empty>',
    text: '<shadow type="text"><field name="TEXT"></field></shadow>',
    math: '<shadow type="math_number"><field name="NUM">0</field></shadow>',
    multiline_text: '<shadow type="multiline_text"><field name="TEXT"></field></shadow>',
    default_value: '<shadow type="default_value"><field name="TEXT"></field></shadow>'
  });
};