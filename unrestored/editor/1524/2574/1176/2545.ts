"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.init_data_blocks = void 0;
var r = require("./2540/579");
exports.init_data_blocks = function (e, t) {
  var n = [{
    type: "variables_get",
    message0: (0, r.i18n)("variables_get"),
    args0: [{
      type: "field_dropdown",
      name: "VAR",
      options: function () {
        return t("any", !0);
      }
    }],
    output: !0,
    colour: (0, r.i18n)("ORANGE_2"),
    inputsInline: !0
  }, {
    type: "variables_set",
    message0: (0, r.i18n)("variables_set"),
    args0: [{
      type: "field_dropdown",
      name: "VAR",
      options: function () {
        return t("any");
      }
    }, {
      type: "input_value",
      name: "VALUE",
      align: "CENTRE",
      check: ["Number", "String", "Boolean", "Array"]
    }],
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0,
    colour: (0, r.i18n)("ORANGE_2")
  }, {
    type: "change_variable",
    message0: (0, r.i18n)("change_variable"),
    args0: [{
      type: "field_dropdown",
      name: "valname",
      options: function () {
        return t("any");
      }
    }, {
      type: "field_dropdown",
      name: "method",
      options: [[(0, r.i18n)("increase"), "increase"], [(0, r.i18n)("decrease"), "decrease"]]
    }, {
      type: "input_value",
      name: "n",
      check: "Number",
      align: "CENTRE"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: (0, r.i18n)("ORANGE_2"),
    inputsInline: !0
  }, {
    type: "lists_get",
    message0: (0, r.i18n)("lists_get"),
    args0: [{
      type: "field_dropdown",
      name: "VAR",
      options: function () {
        return t("list", !0);
      }
    }],
    output: "Array",
    colour: (0, r.i18n)("ORANGE_1"),
    inputsInline: !0
  }, {
    type: "lists_append",
    message0: (0, r.i18n)("lists_append"),
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["String", "Number", "Boolean", "Array"]
    }, {
      type: "input_value",
      name: "VAR",
      check: ["Array"]
    }],
    colour: (0, r.i18n)("ORANGE_1"),
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  }, {
    type: "lists_insert_value",
    message0: (0, r.i18n)("lists_insert_value"),
    args0: [{
      type: "input_value",
      name: "VAR",
      align: "CENTRE",
      check: "Array"
    }, {
      type: "input_value",
      check: "Number",
      name: "INDEX",
      align: "CENTRE"
    }, {
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }],
    colour: (0, r.i18n)("ORANGE_1"),
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  }, {
    type: "lists_copy",
    message0: (0, r.i18n)("lists_copy"),
    args0: [{
      type: "input_value",
      name: "TARGET",
      check: "Array"
    }, {
      type: "input_value",
      name: "VALUE",
      check: "Array"
    }],
    colour: (0, r.i18n)("ORANGE_1"),
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  }, {
    type: "lists_length",
    message0: (0, r.i18n)("lists_length"),
    args0: [{
      type: "input_value",
      name: "VAR",
      check: "Array"
    }],
    output: "Number",
    colour: (0, r.i18n)("ORANGE_1"),
    inputsInline: !0
  }, {
    type: "lists_is_exist",
    message0: (0, r.i18n)("lists_is_exist"),
    args0: [{
      type: "input_value",
      name: "VAR",
      check: "Array"
    }, {
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }],
    colour: (0, r.i18n)("ORANGE_1"),
    output: "Boolean",
    inputsInline: !0
  }, {
    type: "lists_index_of",
    message0: (0, r.i18n)("lists_index_of"),
    args0: [{
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }, {
      type: "input_value",
      name: "VAR",
      check: "Array"
    }],
    colour: (0, r.i18n)("ORANGE_1"),
    output: "Number",
    inputsInline: !0
  }];
  e.define_blocks_with_json_array(n);
  Object.assign(e.blocks_xml, {
    variables_get: '<block type="variables_get" />',
    variables_set: '<block type="variables_set">\n      ' + (0, r.number_value)("VALUE", "0") + "\n    </block>",
    change_variable: '<block type="change_variable">\n      ' + (0, r.number_value)("n", "1") + "\n    </block>",
    lists_get: '<block type="lists_get" />',
    lists_append: '<block type="lists_append">\n      ' + (0, r.number_value)("VALUE", "0") + '\n      <value name="VAR">\n        <shadow type="lists_get">\n        </shadow>\n      </value>\n    </block>',
    lists_insert_value: '<block type="lists_insert_value">\n      <value name="VAR">\n        <shadow type="lists_get">\n        </shadow>\n      </value>\n      ' + (0, r.number_value)("INDEX", "1", "1,,1") + "\n      " + (0, r.number_value)("VALUE", "0") + "\n    </block>",
    lists_copy: '<block type="lists_copy">\n      <value name="TARGET">\n        <shadow type="lists_get">\n        </shadow>\n      </value>\n      <value name="VALUE">\n        <shadow type="lists_get">\n        </shadow>\n      </value>\n    </block>',
    lists_length: '<block type="lists_length">\n      <value name="VAR">\n        <shadow type="lists_get">\n        </shadow>\n      </value>\n    </block>',
    lists_is_exist: '<block type="lists_is_exist">\n      <value name="VAR">\n        <shadow type="lists_get">\n        </shadow>\n      </value>\n      ' + (0, r.number_value)("VALUE") + "\n    </block>",
    lists_index_of: '<block type="lists_index_of">\n      ' + (0, r.number_value)("VALUE") + '\n      <value name="VAR">\n        <shadow type="lists_get">\n        </shadow>\n      </value>\n    </block>'
  });
};