"use strict";

export { f as d };
export { h as c };
export { m as b };
export { g as a };
export { _ as e };
export { b as j };
export { y as h };
export { E as i };
export { O as f };
export { w as g };
export { C as k };
export { T as l };
var r = require("./6");
var o = require("./25/index");
var i = require("./98");
var a = require("./36/index");
var s = require("./5");
var c = require("./76");
var l = require("./4/index");
var u = require("./46/index");
var d = {
  type: s.D,
  category: {
    iconId: "icon-screen",
    blocks: s.D
  },
  categoryClass: {
    text: "",
    iconId: "icon-screen",
    blocks: []
  },
  getTemplate: function (e) {
    return ["<block type=\"screen_on_press\" uncache=\"true\"></block>", f, "<block type=\"new_screen_set_background_color\" uncache=\"true\">\n    <value name=\"COLOR\">\n      <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">".concat(c.c, "</field></shadow>\n    </value>\n    </block>"), "<block type=\"new_screen_set_background_image\" uncache=\"true\">\n      <value name=\"IMAGE_FILE_ID\">\n        <shadow type=\"image_file_list_dropdown\">\n          <field name=\"IMAGE_FILE_ID\">".concat(h, "</field>\n        </shadow>\n      </value>\n    </block>"), f, "<block type=\"new_screen_get_size\" uncache=\"true\">\n    </block>", "<block type=\"new_screen_get_color\" uncache=\"true\">\n    </block>\n    <block type=\"new_screen_get_background_image\" uncache=\"true\">\n    </block>\n    ", f, "<block type=\"screen_check_if_pressed\" uncache=\"true\">\n    </block>"];
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      function t(t, n) {
        var r = t.blocks[n];
        return {
          block: r,
          widgetId: e.getFieldValue(r, "WIDGET_ID") || ""
        };
      }
      e.insertBlockSnippetGenerator("screen_on_press_positionX", function () {
        return "screenPressPositionX";
      });
      e.insertBlockSnippetGenerator("screen_on_press_positionY", function () {
        return "screenPressPositionY";
      });
      e.insertBlockSnippetGenerator("screen_on_press", function (n, r) {
        var o = t(n, r).block;
        var i = e.getFieldValue(o, "PRESS_EVENT") || "";
        var a = e.statementToCode(n, r, "DO");
        var s = e.valueToCode(n, r, "POSITION_X", e.ORDER_FUNCTION_CALL);
        var c = e.valueToCode(n, r, "POSITION_Y", e.ORDER_FUNCTION_CALL);
        if (!a) {
          return "";
        }
        var u = "";
        u = "press" === i ? "argsOnScreenPress" : "pressIn" === i ? "argsOnScreenPressIn" : "pressHold" === i ? "argsOnScreenPressHold" : "argsOnScreenPressOut";
        return Object(l.n)(u, [Object(l.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))], a, [s, c]);
      });
      e.insertBlockSnippetGenerator("screen_field_color", function (t, n) {
        var r = t.blocks[n];
        return Object(l.o)(e.getFieldValue(r, "COLOR_VALUE") || "");
      });
      e.insertBlockSnippetGenerator("screen_set_background_color", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || "";
        var o = e.valueToCode(t, n, "COLOR", e.ORDER_FUNCTION_CALL);
        return Object(l.n)("setScreenBackgroundColor", [Object(l.o)(r), o]);
      });
      e.insertBlockSnippetGenerator("screen_check_if_pressed", function (t, n) {
        return Object(l.s)("checkIfScreenPressed", [Object(l.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]);
      });
      e.insertBlockSnippetGenerator("screen_set_background_image", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || "";
        var o = e.valueToCode(t, n, "IMAGE_FILE_ID", e.ORDER_FUNCTION_CALL);
        return o ? Object(l.n)("setScreenBackgroundImageId", [Object(l.o)(r), o]) : "";
      });
      e.insertBlockSnippetGenerator("screen_get_color", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || "";
        return Object(l.s)("getScreenBackgroundColor", [Object(l.o)(r)]);
      });
      e.insertBlockSnippetGenerator("screen_get_size", function (t, n) {
        var r = t.blocks[n];
        var o = e.getFieldValue(r, "SCREEN_ID") || "";
        var i = e.getFieldValue(r, "PROPERTY") || "";
        return Object(l.s)("height" === i ? "getScreenHeight" : "getScreenWidth", [Object(l.o)(o)]);
      });
      e.insertBlockSnippetGenerator("screen_get_background_image", function (t, n) {
        var r = e.getFieldValue(t.blocks[n], "SCREEN_ID") || "";
        return Object(l.s)("getScreenBackgroundImage", [Object(l.o)(r)]);
      });
      e.insertBlockSnippetGenerator("new_screen_set_background_color", function (n, r) {
        var o = t(n, r).block;
        var i = e.getDynamicValue("__CURRENT_SCREEN_ID__");
        var a = e.valueToCode(n, r, "COLOR", e.ORDER_FUNCTION_CALL);
        return Object(l.l)(Object(l.n)("setScreenBackgroundColor", [Object(l.o)(i), a]), o, e);
      });
      e.insertBlockSnippetGenerator("new_screen_set_background_image", function (n, r) {
        var o = e.getDynamicValue("__CURRENT_SCREEN_ID__");
        var i = t(n, r).block;
        var a = e.valueToCode(n, r, "IMAGE_FILE_ID", e.ORDER_FUNCTION_CALL);
        return a ? Object(l.l)(Object(l.n)("setScreenBackgroundImageId", [Object(l.o)(o), a]), i, e) : "";
      });
      e.insertBlockSnippetGenerator("new_screen_get_color", function (t, n) {
        var r = e.getDynamicValue("__CURRENT_SCREEN_ID__");
        return Object(l.s)("getScreenBackgroundColor", [Object(l.o)(r)]);
      });
      e.insertBlockSnippetGenerator("new_screen_get_size", function (t, n) {
        var r = t.blocks[n];
        var o = e.getDynamicValue("__CURRENT_SCREEN_ID__") || "";
        var i = e.getFieldValue(r, "PROPERTY") || "";
        return Object(l.s)("height" === i ? "getScreenHeight" : "getScreenWidth", [Object(l.o)(o)]);
      });
      e.insertBlockSnippetGenerator("new_screen_get_background_image", function (t, n) {
        var r = e.getDynamicValue("__CURRENT_SCREEN_ID__");
        return Object(l.s)("getScreenBackgroundImage", [Object(l.o)(r)]);
      });
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("screen_on_press", {
        type: "screen_on_press",
        message0: "%{BKY_SCREEN_ON_PRESS_MSG0}",
        args0: [Object(l.e)("%{BKY_BLOCK_TAB_ICON}", !0), {
          type: "field_coco_dropdown",
          name: "PRESS_EVENT",
          custom: !0,
          options: function () {
            return [[t.Msg.PRESS, "press"], [t.Msg.PRESS_IN, "pressIn"], [t.Msg.PRESS_HOLD, "pressHold"], [t.Msg.PRESS_OUT, "pressOut"]];
          }
        }, {
          type: "input_value",
          name: "POSITION_X",
          align: "CENTRE",
          default_shadow: "<shadow type=\"screen_on_press_positionX\" />"
        }, {
          type: "input_value",
          name: "POSITION_Y",
          align: "CENTRE",
          default_shadow: "<shadow type=\"screen_on_press_positionY\" />"
        }, {
          type: "input_dummy",
          align: "CENTRE"
        }, {
          type: "input_statement",
          name: "DO",
          provided_context: "screen_on_press_DO"
        }],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: !0
      });
      e.insertBlockProfile("screen_on_press_positionX", {
        type: "screen_on_press_positionX",
        message0: "%{BKY_PARAM_POSITION_X}",
        output: "Number",
        required_context: "screen_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      });
      e.insertBlockProfile("screen_on_press_positionY", {
        type: "screen_on_press_positionY",
        message0: "%{BKY_PARAM_POSITION_Y}",
        output: "Number",
        required_context: "screen_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      });
      e.insertBlockProfile("screen_set_background_color", {
        type: "screen_set_background_color",
        message0: "%{BKY_SCREEN_UPDATE_BACKGROUND_COLOR}",
        args0: [{
          type: "field_coco_dropdown",
          name: "SCREEN_ID",
          custom: !0,
          advancedOptions: function () {
            return Object(u.c)().getScreenList();
          }
        }, {
          type: "input_value",
          check: ["Color", "String"],
          name: "COLOR"
        }],
        previousStatement: !0,
        nextStatement: !0,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: !0
      });
      e.insertBlockProfile("screen_field_color", {
        type: "screen_field_color",
        message0: "%1",
        args0: [{
          type: "field_colour",
          name: "COLOR_VALUE",
          colour: "#ffffff"
        }],
        colour: "#ffffff",
        output: ["Color"]
      });
      e.insertBlockProfile("screen_get_size", {
        type: "screen_get_size",
        message0: "%{BKY_SCREEN_GET_SIZE}",
        args0: [{
          type: "field_coco_dropdown",
          name: "SCREEN_ID",
          custom: !0,
          options: function () {
            return Object(u.c)().getScreenList();
          }
        }, {
          type: "field_coco_dropdown",
          name: "PROPERTY",
          custom: !0,
          options: function () {
            return [{
              type: "basic",
              text: t.Msg.SCREEN_HEIGHT,
              value: "height"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_WIDTH,
              value: "width"
            }];
          }
        }],
        output: ["Number"],
        inputsInline: !0,
        colour: "%{BKY_APPEARANCE_HUE}"
      });
      e.insertBlockProfile("screen_get_color", {
        type: "screen_get_color",
        message0: "%{BKY_SCREEN_GET_COLOR}",
        args0: [{
          type: "field_coco_dropdown",
          name: "SCREEN_ID",
          custom: !0,
          options: function () {
            return Object(u.c)().getScreenList();
          }
        }],
        output: ["String", "Color"],
        inputsInline: !0,
        colour: "%{BKY_APPEARANCE_HUE}"
      });
      e.insertBlockProfile("screen_set_background_image", {
        type: "screen_set_background_image",
        message0: "%{BKY_SCREEN_SET_BACKGROUND_IMAGE}",
        args0: [{
          type: "field_coco_dropdown",
          name: "SCREEN_ID",
          custom: !0,
          advancedOptions: function () {
            return Object(u.c)().getScreenList();
          }
        }, {
          type: "input_value",
          name: "IMAGE_FILE_ID",
          check: ["String"]
        }],
        previousStatement: !0,
        nextStatement: !0,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: !0
      });
      e.insertBlockProfile("screen_get_background_image", {
        type: "screen_get_background_image",
        message0: "%{BKY_SCREEN_GET_BACKGROUND_IMAGE}",
        args0: [{
          type: "field_coco_dropdown",
          name: "SCREEN_ID",
          custom: !0,
          advancedOptions: function () {
            return Object(u.c)().getScreenList();
          }
        }],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: !0
      });
      e.insertBlockProfile("new_screen_get_size", {
        type: "new_screen_get_size",
        message0: "%{BKY_NEW_SCREEN_GET_SIZE}",
        args0: [{
          type: "field_coco_dropdown",
          name: "PROPERTY",
          custom: !0,
          options: function () {
            return [{
              type: "basic",
              text: t.Msg.SCREEN_HEIGHT,
              value: "height"
            }, {
              type: "basic",
              text: t.Msg.SCREEN_WIDTH,
              value: "width"
            }];
          }
        }],
        output: ["Number"],
        inputsInline: !0,
        colour: "%{BKY_APPEARANCE_HUE}"
      });
      e.insertBlockProfile("new_screen_get_color", {
        type: "new_screen_get_color",
        message0: "%{BKY_NEW_SCREEN_GET_COLOR}",
        args0: [],
        output: ["String", "Color"],
        inputsInline: !0,
        colour: "%{BKY_APPEARANCE_HUE}"
      });
      e.insertBlockProfile("new_screen_set_background_color", {
        type: "new_screen_set_background_color",
        message0: "%{BKY_NEW_SCREEN_UPDATE_BACKGROUND_COLOR}",
        args0: [{
          type: "input_value",
          check: ["Color", "String"],
          name: "COLOR"
        }],
        previousStatement: !0,
        nextStatement: !0,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: !0
      });
      e.insertBlockProfile("new_screen_set_background_image", {
        type: "new_screen_set_background_image",
        message0: "%{BKY_NEW_SCREEN_SET_BACKGROUND_IMAGE}",
        args0: [{
          type: "input_value",
          name: "IMAGE_FILE_ID",
          check: ["String"]
        }],
        previousStatement: !0,
        nextStatement: !0,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: !0
      });
      e.insertBlockProfile("new_screen_get_background_image", {
        type: "new_screen_get_background_image",
        message0: "%{BKY_NEW_SCREEN_GET_BACKGROUND_IMAGE}",
        args0: [],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: !0
      });
      e.insertBlockProfile("screen_check_if_pressed", {
        type: "screen_check_if_pressed",
        message0: "%{BKY_SCREEN_CHECK_IF_PRESSED}",
        args0: [],
        output: "Boolean",
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: !0
      });
    }
  },
  renameBlocksInfo: {
    blocksList: ["screen_get_size", "screen_on_open_get_param", "screen_set_background_color", "screen_get_color", "screen_navigate_to", "screen_navigate_to_by_value", "screen_set_background_image", "screen_get_background_image", "new_screen_navigate_to", "new_screen_navigate_to_by_value", "screen_check_if_pressed", "screen_input"],
    fieldName: "SCREEN_ID"
  },
  topBlocks: ["screen_on_open_get_param", "screen_on_open", "screen_on_press", "app_on_switch_background", "broadcast_on_receive", "widget_event"]
};
var p = require("./35");
var f = "<sep gap=\"".concat(45, "\"></sep>");
var h = "DROPDOWN_PLACEHOLDER_OPTION_VALUE";
var m = "?";
var g = "DROPDOWN_PLACEHOLDER_EMPTY_IMAGE_VALUE";
var _ = "\n  <block type=\"date_get_current_date\" uncache=\"true\">\n  </block>\n  <block type=\"date_check_date_is_equal\" uncache=\"true\">\n    <value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n  </block>\n  <block type=\"date_get_date_minus_operation\" uncache=\"true\">\n    <value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n  </block>";
function v() {
  var e = [d];
  Object(p.K)().forEach(function (t) {
    if (t.blockConfig) {
      e.push(t.blockConfig);
    }
    var n = t.blockConfig.getTemplate;
    t.blockConfig.getTemplate = function (e, r) {
      if (r) {
        if (!t.hasAnyWidget) {
          console.error("anyWidget is not supported");
          return [];
        }
        var o = i.f(t.type);
        if (o) {
          return Object(a.e)(null, o.type, o.types, !0);
        }
      }
      return n(e);
    };
  });
  return e;
}
function b() {
  var e = new Map();
  var t = [];
  v().forEach(function (e) {
    t.push.apply(t, Object(o.a)(e.topBlocks));
  });
  t.forEach(function (t) {
    e.set(t, !0);
  });
  return e;
}
function y() {
  var e = {};
  v().forEach(function (t) {
    e[t.type] = t.category;
  });
  return Object(r.a)({}, e);
}
function E() {
  var e = {};
  v().forEach(function (t) {
    e[t.type] = t.categoryClass;
  });
  return e;
}
function O() {
  var e = [];
  v().forEach(function (t) {
    e.push(t.blockDeclareGroup);
  });
  return e;
}
function w() {
  var e = {};
  v().forEach(function (t) {
    e[t.type] = t.renameBlocksInfo;
    if (!e[t.type].blocksList.includes("widget_set")) {
      e[t.type].blocksList.push("widget_set");
    }
    if (!e[t.type].blocksList.includes("widget_get")) {
      e[t.type].blocksList.push("widget_get");
    }
    if (!e[t.type].blocksList.includes("widget_method")) {
      e[t.type].blocksList.push("widget_method");
    }
  });
  return e;
}
function C(e, t, n) {
  var r = v().find(function (t) {
    return t.type === e;
  });
  return r ? r.getTemplate(t, n) : [];
}
function T(e, t, n) {
  var r;
  var o;
  var i = 100;
  var a = null === n || void 0 === n ? void 0 : n.find(function (e) {
    return e.label === t;
  });
  if (a) {
    o = a.min;
    r = a.max;
    i = a.value;
  } else {
    switch (t) {
      case "positionX":
      case "positionY":
        o = -(r = "positionX" === t ? c.a : c.b);
        break;
      case "width":
        r = c.e;
        o = 24;
        break;
      case "height":
        r = c.d;
        o = 24;
        break;
      case "fontSize":
        r = 99;
        o = 12;
        i = 16;
    }
  }
  !function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.b;
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "NUM";
    var i = e.source_block;
    var a = null === i || void 0 === i ? void 0 : i.get_shadow_field(o);
    if (a && "FieldNumber" === a.field_type) {
      a.set_value(r.toString());
      a.set_constraints(t, n, 1);
    }
  }(e, o, r, i);
}
export default g;