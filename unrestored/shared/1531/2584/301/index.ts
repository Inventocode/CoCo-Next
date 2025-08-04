"use strict";

export { Qe as d };
export { Ze as b };
export { b as a } from "../46/index";
export { d as c } from "../46/index";
export { f as e } from "../46/index";
var r = {};
Object.defineProperty(r, "setBlockGroupProfile", {
  get: function () {
    return v;
  }
});
Object.defineProperty(r, "setBlockGroupXML", {
  get: function () {
    return b;
  }
});
Object.defineProperty(r, "setBlockGroupSnippet", {
  get: function () {
    return y;
  }
});
var o = {};
Object.defineProperty(o, "setBlockGroupProfile", {
  get: function () {
    return w;
  }
});
Object.defineProperty(o, "setBlockGroupXML", {
  get: function () {
    return C;
  }
});
Object.defineProperty(o, "setBlockGroupSnippet", {
  get: function () {
    return T;
  }
});
var i = {};
Object.defineProperty(i, "setBlockGroupProfile", {
  get: function () {
    return S;
  }
});
Object.defineProperty(i, "setBlockGroupXML", {
  get: function () {
    return I;
  }
});
Object.defineProperty(i, "setBlockGroupSnippet", {
  get: function () {
    return A;
  }
});
Object.defineProperty(i, "setBlockGroupExtra", {
  get: function () {
    return j;
  }
});
var a = {};
Object.defineProperty(a, "setBlockGroupProfile", {
  get: function () {
    return N;
  }
});
Object.defineProperty(a, "setBlockGroupXML", {
  get: function () {
    return R;
  }
});
Object.defineProperty(a, "setBlockGroupSnippet", {
  get: function () {
    return k;
  }
});
var s = {};
Object.defineProperty(s, "setBlockGroupProfile", {
  get: function () {
    return W;
  }
});
Object.defineProperty(s, "setBlockGroupXML", {
  get: function () {
    return H;
  }
});
Object.defineProperty(s, "setBlockGroupSnippet", {
  get: function () {
    return V;
  }
});
Object.defineProperty(s, "setBlockGroupExtra", {
  get: function () {
    return z;
  }
});
var c = {};
Object.defineProperty(c, "setBlockGroupProfile", {
  get: function () {
    return Y;
  }
});
Object.defineProperty(c, "setBlockGroupXML", {
  get: function () {
    return K;
  }
});
Object.defineProperty(c, "setBlockGroupSnippet", {
  get: function () {
    return q;
  }
});
Object.defineProperty(c, "setBlockGroupExtra", {
  get: function () {
    return X;
  }
});
var l = {};
Object.defineProperty(l, "setBlockGroupProfile", {
  get: function () {
    return Q;
  }
});
Object.defineProperty(l, "setBlockGroupXML", {
  get: function () {
    return Z;
  }
});
Object.defineProperty(l, "setBlockGroupSnippet", {
  get: function () {
    return J;
  }
});
var u = {};
Object.defineProperty(u, "setBlockGroupProfile", {
  get: function () {
    return $;
  }
});
Object.defineProperty(u, "setBlockGroupXML", {
  get: function () {
    return ee;
  }
});
Object.defineProperty(u, "setBlockGroupExtra", {
  get: function () {
    return te;
  }
});
Object.defineProperty(u, "setBlockGroupSnippet", {
  get: function () {
    return ne;
  }
});
var d = {};
Object.defineProperty(d, "setBlockGroupProfile", {
  get: function () {
    return oe;
  }
});
Object.defineProperty(d, "setBlockGroupXML", {
  get: function () {
    return ie;
  }
});
Object.defineProperty(d, "setBlockGroupSnippet", {
  get: function () {
    return ae;
  }
});
var p = {};
Object.defineProperty(p, "setBlockGroupProfile", {
  get: function () {
    return se;
  }
});
Object.defineProperty(p, "setBlockGroupSnippet", {
  get: function () {
    return ce;
  }
});
var f = {};
Object.defineProperty(f, "setBlockGroupProfile", {
  get: function () {
    return _e;
  }
});
Object.defineProperty(f, "setBlockGroupSnippet", {
  get: function () {
    return ve;
  }
});
var h = require("../25/index");
var m = require("../17/index");
var g = require("../9");
var _ = require("../4/index");
function v(e) {
  e.insertBlockProfile("phone_vibrate", {
    type: "phone_vibrate",
    message0: "%{BKY_PHONE_VIBRATE}",
    args0: [{
      type: "input_value",
      name: "SECONDS",
      check: ["Number"]
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0
  });
  e.insertBlockProfile("brightness_set_brightness", {
    type: "brightness_set_brightness",
    message0: "%{BKY_BRIGHTNESS_SET_BRIGHTNESS}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["Number"]
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0
  });
  e.insertBlockProfile("brightness_get_brightness", {
    type: "brightness_get_brightness",
    message0: "%{BKY_BRIGHTNESS_GET_BRIGHTNESS}",
    output: ["Number"],
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0
  });
  e.insertBlockProfile("brightness_set_keep_screen_on", {
    type: "brightness_set_keep_screen_on",
    message0: "%{BKY_BRIGHTNESS_SET_KEEP_SCREEN_ON}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["Boolean"]
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0
  });
  e.insertBlockProfile("phone_battery_level", {
    type: "phone_battery_level",
    message0: "%{BKY_PHONE_BATTERY_LEVEL}",
    output: ["Number"],
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0
  });
}
function b(e) {
  e.insertBlockXML("phone_vibrate", "<value name=\"SECONDS\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"0,,0.1\">1</field>\n      </shadow>\n    </value>");
  e.insertBlockXML("date_get_current_date");
  e.insertBlockXML("date_check_date_is_equal", "<value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>");
  e.insertBlockXML("date_get_date_minus_operation", "<value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>");
  e.insertBlockXML("brightness_set_brightness", "<value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"0,100,1\">50</field>\n      </shadow>\n    </value>");
  e.insertBlockXML("brightness_get_brightness");
  e.insertBlockXML("brightness_set_keep_screen_on", "<value name=\"VALUE\">\n      <shadow type=\"widget_boolean\">\n        <field name=\"BOOL\">TRUE</field>\n      </shadow>\n    </value>");
  e.insertBlockXML("phone_battery_level");
}
function y(e) {
  e.insertBlockSnippetGenerator("phone_vibrate", function (t, n) {
    var r = e.valueToCode(t, n, "SECONDS", e.ORDER_FUNCTION_CALL) || "0";
    return Object(_.n)("startDeviceVibrating", [r + " * 1000"]);
  });
  e.insertBlockSnippetGenerator("brightness_set_brightness", function (t, n) {
    var r = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    var o = t.blocks[n];
    return Object(_.l)(Object(_.j)("brightness.setBrightness", [r]), o, e, !0);
  });
  e.insertBlockSnippetGenerator("brightness_get_brightness", function (t, n) {
    var r = t.blocks[n];
    return Object(_.l)(Object(_.r)("brightness.getBrightness"), r, e, !0, !0);
  });
  e.insertBlockSnippetGenerator("brightness_set_keep_screen_on", function (t, n) {
    var r = t.blocks[n];
    var o = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    return Object(_.l)(Object(_.n)("brightness.setKeepScreenOn", [o]), r, e);
  });
  e.insertBlockSnippetGenerator("phone_battery_level", function (t, n) {
    var r = t.blocks[n];
    return Object(_.l)(Object(_.r)("device.getBatteryLevel"), r, e, !0, !0);
  });
}
var E;
var O = require("../46/index");
function w(e, t) {
  var n = "%{BKY_BLOCK_TAB_ICON}";
  e.insertBlockProfile("screen_on_open", {
    type: "screen_on_open",
    message0: "%{BKY_SCREEN_ON_OPEN}",
    args0: [Object(_.e)(n, !0)],
    message1: "%1",
    args1: [{
      type: "input_statement",
      name: "DO"
    }],
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("screen_on_open_get_param_value", {
    type: "screen_on_open_get_param_value",
    message0: "%{BKY_SCREEN_PARAM}",
    output: "String",
    required_context: "screen_on_open_get_param_value_DO",
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  });
  e.insertBlockProfile("screen_on_open_get_param", {
    type: "screen_on_open_get_param",
    message0: "%{BKY_SCREEN_ON_OPEN_GET_PARAM}",
    args0: [Object(_.e)(n, !0), {
      type: "input_value",
      name: "PARAMETER",
      align: "CENTRE",
      default_shadow: "<shadow type=\"screen_on_open_get_param_value\" />"
    }, {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO",
      provided_context: "screen_on_open_get_param_value_DO"
    }],
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("screen_navigate_to", {
    type: "screen_navigate_to",
    message0: "%{BKY_SCREEN_NAVIGATE_TO}",
    args0: [{
      type: "field_coco_dropdown",
      name: "SCREEN_ID",
      custom: !0,
      options: function () {
        return [].concat(Object(h.a)(Object(O.c)().getScreenList()), [{
          type: "line"
        }, {
          type: "basic",
          text: t.Msg.SCREEN_NEXT,
          value: "nextScreen"
        }, {
          type: "basic",
          text: t.Msg.SCREEN_PREV,
          value: "prevScreen"
        }]);
      }
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("screen_navigate_to_by_value", {
    type: "screen_navigate_to_by_value",
    message0: "%{BKY_SCREEN_NAVIGATE_TO_BY_VALUE}",
    args0: [{
      type: "field_coco_dropdown",
      name: "SCREEN_ID",
      custom: !0,
      options: function () {
        return [].concat(Object(h.a)(Object(O.c)().getScreenList()), [{
          type: "line"
        }, {
          type: "basic",
          text: t.Msg.SCREEN_NEXT,
          value: "nextScreen"
        }, {
          type: "basic",
          text: t.Msg.SCREEN_PREV,
          value: "prevScreen"
        }]);
      }
    }, {
      type: "input_value",
      name: "PARAMETER"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("new_screen_navigate_to", {
    type: "new_screen_navigate_to",
    message0: "%{BKY_SCREEN_NAVIGATE_TO}",
    args0: [{
      type: "input_value",
      name: "SCREEN_ID",
      check: ["String", "Number"]
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("screen_input", {
    type: "screen_input",
    message0: "%1",
    args0: [{
      type: "field_coco_dropdown",
      name: "SCREEN_ID",
      custom: !0,
      options: function () {
        return [].concat(Object(h.a)(Object(O.c)().getScreenList()), [{
          type: "line"
        }, {
          type: "basic",
          text: t.Msg.SCREEN_NEXT,
          value: "nextScreen"
        }, {
          type: "basic",
          text: t.Msg.SCREEN_PREV,
          value: "prevScreen"
        }]);
      }
    }],
    colour: "#ffffff",
    output: "String",
    tooltip: "%{BKY_SCREEN_INPUT_TOOLTIP}"
  });
  e.insertBlockProfile("new_screen_navigate_to_by_value", {
    type: "new_screen_navigate_to_by_value",
    message0: "%{BKY_SCREEN_NAVIGATE_TO_BY_VALUE}",
    args0: [{
      type: "input_value",
      name: "SCREEN_ID",
      check: ["String", "Number"]
    }, {
      type: "input_value",
      name: "PARAMETER"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
}
function C(e) {
  e.insertBlockXML("screen_on_open");
  e.insertBlockXML("screen_on_open_get_param");
  e.insertBlockXML("screen_input", void 0, !0);
  e.insertBlockXML("screen_navigate_to");
  e.insertBlockXML("screen_navigate_to_by_value", "    <value name=\"PARAMETER\">\n  <shadow type=\"text\">\n    <field name=\"TEXT\">参数</field>\n  </shadow>\n</value>");
  e.insertBlockXML("new_screen_navigate_to", "<value name=\"SCREEN_ID\">\n      <shadow type=\"screen_input\"></shadow>\n    </value>", !0);
  e.insertBlockXML("new_screen_navigate_to_by_value", "<value name=\"SCREEN_ID\">\n        <shadow type=\"screen_input\"></shadow>\n      </value>\n      <value name=\"PARAMETER\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">参数</field>\n    </shadow>\n  </value>", !0);
  e.insertBlockXML("broadcast_on_receive", "<value name=\"BROADCAST\">\n      <shadow type=\"broadcast_input\"></shadow>\n    </value>", !0);
  e.insertBlockXML("broadcast_send", "<value name=\"BROADCAST\">\n      <shadow type=\"broadcast_input\"></shadow>\n    </value>", !0);
  e.insertBlockXML("broadcast_send_and_wait", "<value name=\"BROADCAST\">\n      <shadow type=\"broadcast_input\"></shadow>\n    </value>", !0);
}
function T(e) {
  e.insertBlockSnippetGenerator("screen_input", function (t, n) {
    var r = t.blocks[n];
    return JSON.stringify(e.getFieldValue(r, "SCREEN_ID"));
  });
  e.insertBlockSnippetGenerator("screen_on_open", function (t, n) {
    var r = e.statementToCode(t, n, "DO");
    return r ? Object(_.m)("onScreenOpen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))], r) : "";
  });
  e.insertBlockSnippetGenerator("screen_on_open_get_param_value", function () {
    return "screenOpenParamValue";
  });
  e.insertBlockSnippetGenerator("screen_on_open_get_param", function (t, n) {
    var r = e.statementToCode(t, n, "DO");
    if (!r) {
      return "";
    }
    var o = e.valueToCode(t, n, "PARAMETER", e.ORDER_FUNCTION_CALL);
    return Object(_.n)("onScreenOpen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))], r, [o]);
  });
  e.insertBlockSnippetGenerator("screen_navigate_to", function (t, n) {
    var r = Object(_.o)(e.getFieldValue(t.blocks[n], "SCREEN_ID") || "");
    return r === Object(_.o)("nextScreen") ? Object(_.n)("navigateToNextScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]) : r === Object(_.o)("prevScreen") ? Object(_.n)("navigateToPrevScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]) : Object(_.n)("navigateToScreen", [r]);
  });
  e.insertBlockSnippetGenerator("screen_navigate_to_by_value", function (t, n) {
    var r = Object(_.o)(e.getFieldValue(t.blocks[n], "SCREEN_ID") || "");
    var o = e.valueToCode(t, n, "PARAMETER", e.ORDER_FUNCTION_CALL);
    return r === Object(_.o)("nextScreen") ? Object(_.n)("navigateToNextScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__")), o]) : r === Object(_.o)("prevScreen") ? Object(_.n)("navigateToPrevScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__")), o]) : Object(_.n)("navigateToScreen", [r, o]);
  });
  e.insertBlockSnippetGenerator("new_screen_navigate_to", function (t, n) {
    var r = t.blocks[n];
    var o = e.valueToCode(t, n, "SCREEN_ID", e.ORDER_FUNCTION_CALL);
    return o.includes(Object(_.o)("nextScreen")) ? Object(_.l)(Object(_.n)("navigateToNextScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]), r, e) : o.includes(Object(_.o)("prevScreen")) ? Object(_.l)(Object(_.n)("navigateToPrevScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__"))]), r, e) : Object(_.l)(Object(_.n)("navigateToScreen", [o]), r, e);
  });
  e.insertBlockSnippetGenerator("new_screen_navigate_to_by_value", function (t, n) {
    var r = t.blocks[n];
    var o = e.valueToCode(t, n, "SCREEN_ID", e.ORDER_FUNCTION_CALL);
    var i = e.valueToCode(t, n, "PARAMETER", e.ORDER_FUNCTION_CALL);
    return o.includes(Object(_.o)("nextScreen")) ? Object(_.l)(Object(_.n)("navigateToNextScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__")), i]), r, e) : o.includes(Object(_.o)("prevScreen")) ? Object(_.l)(Object(_.n)("navigateToPrevScreen", [Object(_.o)(e.getDynamicValue("__CURRENT_SCREEN_ID__")), i]), r, e) : Object(_.l)(Object(_.n)("navigateToScreen", [o, i]), r, e);
  });
}
function S(e, t) {
  e.insertBlockProfile("loop_finitely", {
    type: "loop_finitely",
    message0: "%{BKY_REPEAT}",
    args0: [{
      type: "input_value",
      name: "TIMES",
      check: "Number",
      align: "CENTRE"
    }, {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("sleep", {
    type: "sleep",
    message0: "%{BKY_WAIT_SECS}",
    args0: [{
      type: "input_value",
      name: "SECONDS",
      check: "Number",
      align: "CENTRE"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("loop_conditionally", {
    type: "loop_conditionally",
    message0: "%{BKY_REPEAT_WHEN}",
    args0: [{
      type: "input_value",
      name: "CONDITION",
      check: "Boolean",
      align: "CENTRE"
    }, {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0,
    tooltip: "%{BKY_REPEAT_WHEN_TOOLTIP}"
  });
  e.insertBlockProfile("loop_infinitely", {
    type: "loop_infinitely",
    message0: "%{BKY_REPEAT_FOREVER}",
    args0: [{
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("wait_until", {
    type: "wait_until",
    message0: "%{BKY_SLEEP_UTIL}",
    args0: [{
      type: "input_value",
      name: "CONDITION",
      check: "Boolean",
      align: "CENTRE"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("break_loop", {
    type: "break_loop",
    message0: "%{BKY_BREAK}",
    args0: [],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0,
    tooltip: "%{BKY_BREAK_TOOLTIP}"
  });
  e.insertBlockProfile("continue_loop", {
    type: "continue_loop",
    message0: "%{BKY_CONTINUE}",
    args0: [],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("console_log", {
    type: "console_log",
    message0: "%{BKY_CONSOLE_LOG}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0,
    mutator: "CONSOLE_MUTATOR"
  });
  e.insertBlockProfile("new_console_log", {
    type: "new_console_log",
    message0: "%{BKY_NEW_CONSOLE_LOG}",
    args0: [{
      type: "field_coco_dropdown",
      custom: !0,
      name: "TYPE",
      options: [["%{BKY_TO_LOG}", E.LOG], ["%{BKY_TO_ERROR}", E.ERROR], ["%{BKY_TO_WARNING}", E.WARNING]]
    }, {
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0,
    mutator: "CONSOLE_MUTATOR"
  });
  e.insertBlockProfile("console_error", {
    type: "console_error",
    message0: "%{BKY_CONSOLE_ERROR}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0,
    mutator: "CONSOLE_MUTATOR"
  });
  e.insertBlockProfile("controls_for", {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["Number"],
      default_shadow: "<shadow type=\"controls_for_value\" />"
    }, {
      type: "input_value",
      name: "FROM",
      check: "Number"
    }, {
      type: "input_value",
      name: "TO",
      check: "Number"
    }, {
      type: "input_value",
      name: "BY",
      check: "Number"
    }],
    message1: "%1",
    args1: [{
      type: "input_statement",
      name: "DO",
      provided_context: "controls_for_DO"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0,
    tooltip: "%{BKY_CONTROLS_FOR_TOOLTIP}"
  });
  e.insertBlockProfile("controls_for_closed_range", {
    type: "controls_for_closed_range",
    message0: "%{BKY_CONTROLS_FOR_CLOSED_RANGE}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["Number"],
      default_shadow: "<shadow type=\"controls_for_value\" />"
    }, {
      type: "input_value",
      name: "FROM",
      check: "Number"
    }, {
      type: "input_value",
      name: "TO",
      check: "Number"
    }, {
      type: "input_value",
      name: "BY",
      check: "Number"
    }],
    message1: "%1",
    args1: [{
      type: "input_statement",
      name: "DO",
      provided_context: "controls_for_DO"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_CONTROL_HUE}",
    inputsInline: !0,
    tooltip: "%{BKY_CONTROLS_FOR_CLOSED_RANGE_TOOLTIP}"
  });
  e.insertBlockProfile("controls_for_value", {
    type: "controls_for_value",
    message0: "%{BKY_CONTROLS_NUMBER}",
    output: "Number",
    required_context: "controls_for_DO",
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  });
}
function I(e, t) {
  e.insertBlockXML("controls_if", ["\n    <value name=\"IF0\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>\n  ", " \n    <mutation else=\"1\"></mutation>\n    <value name=\"IF0\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>"]);
  e.insertBlockXML("controls_for_closed_range", ["\n    <value name=\"FROM\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\",,1\">1</field>\n      </shadow>\n    </value>\n    <value name=\"TO\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\",,1\">10</field>\n      </shadow>\n    </value>\n    <value name=\"BY\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\",,1\">1</field>\n      </shadow>\n    </value>"]);
  e.insertBlockXML("loop_finitely", "\n    <value name=\"TIMES\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"1,,1\">20</field>\n      </shadow>\n    </value>\n    ");
  e.insertBlockXML("sleep", "\n    <value name=\"SECONDS\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"0\">1</field>\n      </shadow>\n    </value>\n    ");
  e.insertBlockXML("loop_conditionally", "\n    <value name=\"CONDITION\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>\n  ");
  e.insertBlockXML("loop_infinitely");
  e.insertBlockXML("wait_until", "\n    <value name=\"CONDITION\">\n      <empty type=\"logic_empty\">\n        <field name=\"BOOL\"></field>\n      </empty>\n    </value>\n    ");
  e.insertBlockXML("console_log", "\n    <mutation items=\"0\"></mutation>\n    <value name=\"VALUE\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">".concat(t.Msg.CONSOLE_LOG_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "));
  e.insertBlockXML("new_console_log", "\n    <mutation items=\"0\"></mutation>\n    <value name=\"VALUE\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">".concat(t.Msg.CONSOLE_LOG_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "));
  e.insertBlockXML("console_error", "\n    <mutation items=\"0\"></mutation>\n    <value name=\"VALUE\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">".concat(t.Msg.CONSOLE_ERROR_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "));
  e.insertBlockXML("break_loop");
  e.insertBlockXML("continue_loop");
}
function A(e) {
  e.insertBlockSnippetGenerator("loop_conditionally", function (t, n) {
    var r = e.valueToCode(t, n, "CONDITION", e.ORDER_FUNCTION_CALL) || "false";
    var o = e.statementToCode(t, n, "DO");
    return o ? Object(_.i)("asyncScheduler.loopConditionally", o, [Object(_.g)(r, !0)]) : "";
  });
  e.insertBlockSnippetGenerator("break_loop", function () {
    return Object(_.i)("asyncScheduler.breakLoop");
  });
  e.insertBlockSnippetGenerator("continue_loop", function () {
    return Object(_.i)("asyncScheduler.continueLoop");
  });
  e.insertBlockSnippetGenerator("loop_finitely", function (t, n) {
    var r = e.valueToCode(t, n, "TIMES", e.ORDER_FUNCTION_CALL);
    var o = e.statementToCode(t, n, "DO");
    return o ? Object(_.i)("asyncScheduler.loopFinitely", o, [r]) : "";
  });
  e.insertBlockSnippetGenerator("loop_infinitely", function (t, n) {
    var r = e.statementToCode(t, n, "DO");
    return r ? Object(_.i)("asyncScheduler.loopInfinitely", r) : "";
  });
  e.insertBlockSnippetGenerator("sleep", function (t, n) {
    var r = e.valueToCode(t, n, "SECONDS", e.ORDER_FUNCTION_CALL) || "0";
    return "await AsyncScheduler.sleep(".concat(r, " * 1000);\n");
  });
  e.insertBlockSnippetGenerator("wait_until", function (t, n) {
    var r = e.valueToCode(t, n, "CONDITION", e.ORDER_FUNCTION_CALL) || "false";
    return Object(_.i)("asyncScheduler.waitUntil", void 0, [Object(_.g)(r, !0)]);
  });
  e.insertBlockSnippetGenerator("console_log", function (t, n) {
    for (var r = t.blocks[n], o = [e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""], i = r.mutation, a = m.Blink.xml.text_to_dom(i).getAttribute("items"), s = a ? parseInt(a) : 0, c = 0; c < s; c++) {
      var l = e.valueToCode(t, n, "VALUE".concat(c), e.ORDER_FUNCTION_CALL);
      if (l) {
        o.push(l);
      }
    }
    var u = e.getDynamicValue("__CURRENT_SCREEN_ID__");
    return Object(_.n)("consoleLog", [Object(_.o)(u), Object(_.o)(r.id)].concat(o));
  });
  e.insertBlockSnippetGenerator("new_console_log", function (t, n) {
    for (var r = t.blocks[n], o = e.getFieldValue(r, "TYPE"), i = [e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""], a = r.mutation, s = m.Blink.xml.text_to_dom(a).getAttribute("items"), c = s ? parseInt(s) : 0, l = 0; l < c; l++) {
      var u = e.valueToCode(t, n, "VALUE".concat(l), e.ORDER_FUNCTION_CALL);
      if (u) {
        i.push(u);
      }
    }
    var d = "consoleLog";
    if (o === E.ERROR) {
      d = "consoleError";
    } else {
      if (o === E.WARNING) {
        d = "consoleWarning";
      }
    }
    var p = e.getDynamicValue("__CURRENT_SCREEN_ID__");
    return Object(_.n)(d, [Object(_.o)(p), Object(_.o)(r.id)].concat(i));
  });
  e.insertBlockSnippetGenerator("console_error", function (t, n) {
    for (var r = t.blocks[n], o = [e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""], i = r.mutation, a = m.Blink.xml.text_to_dom(i).getAttribute("items"), s = a ? parseInt(a) : 0, c = 0; c < s; c++) {
      var l = e.valueToCode(t, n, "VALUE".concat(c), e.ORDER_FUNCTION_CALL);
      if (l) {
        o.push(l);
      }
    }
    var u = e.getDynamicValue("__CURRENT_SCREEN_ID__");
    return Object(_.n)("consoleError", [Object(_.o)(u), Object(_.o)(r.id)].concat(o));
  });
  e.insertBlockSnippetGenerator("controls_for", function (t, n) {
    var r = e.valueToCode(t, n, "FROM", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "TO", e.ORDER_FUNCTION_CALL);
    var i = e.valueToCode(t, n, "BY", e.ORDER_FUNCTION_CALL);
    var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    var s = e.statementToCode(t, n, "DO");
    return s ? Object(_.i)("asyncScheduler.loopStep", s, [r, o, i], [a]) : "";
  });
  e.insertBlockSnippetGenerator("controls_for_closed_range", function (t, n) {
    var r = e.valueToCode(t, n, "FROM", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "TO", e.ORDER_FUNCTION_CALL);
    var i = e.valueToCode(t, n, "BY", e.ORDER_FUNCTION_CALL);
    var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    var s = e.statementToCode(t, n, "DO");
    return s ? Object(_.i)("asyncScheduler.loopStepClosedRange", s, [r, o, i], [a]) : "";
  });
  e.insertBlockSnippetGenerator("controls_for_value", function () {
    return "".concat(_.a, "value");
  });
}
function j(e) {
  var t = "<shadow type=\"text\"><field name=\"TEXT\"></field></shadow>";
  e.extensions.register_mutator("CONSOLE_MUTATOR", {
    updateShape_: function () {
      e.events.disable();
      for (var n = 0; n < this.itemCount_; n++) {
        var r = "VALUE".concat(n);
        if (!this.get_input(r)) {
          this.append_shadow_input(r, t);
        }
      }
      if (0 === this.itemCount_) {
        if (this.get_input("MUTATE_REMOVE_BUTTON")) {
          this.remove_input("MUTATE_REMOVE_BUTTON");
        }
        if (!this.get_input("MUTATE_ADD_BUTTON")) {
          this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Object(_.p)(), "MUTATE_ADD_BUTTON");
        }
      } else {
        if (!this.get_input("MUTATE_REMOVE_BUTTON")) {
          this.append_dummy_input("MUTATE_REMOVE_BUTTON").append_field(Object(_.q)(void 0), "MUTATE_REMOVE_BUTTON");
        }
        if (!this.get_input("MUTATE_ADD_BUTTON")) {
          this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Object(_.p)(), "MUTATE_ADD_BUTTON");
        }
      }
      e.events.enable();
    },
    addMutation: function (e) {
      var n = this;
      var r = "VALUE".concat(this.itemCount_);
      _.b.call(this, r, function () {
        if (!n.get_input("MUTATE_REMOVE_BUTTON")) {
          n.append_dummy_input("MUTATE_REMOVE_BUTTON", "MUTATE_ADD_BUTTON").append_field(Object(_.q)(void 0), "MUTATE_REMOVE_BUTTON");
        }
        var e = n.append_value_input(r, "MUTATE_REMOVE_BUTTON");
        n.itemCount_++;
        return e;
      }, t, e);
    },
    removeMutation: function () {
      var e = this;
      var t = "VALUE".concat(this.itemCount_ - 1);
      _.t.call(this, t, "TEXT", function () {
        e.remove_input(t);
        if (1 === e.itemCount_) {
          e.remove_input("MUTATE_REMOVE_BUTTON");
        }
        e.itemCount_--;
      });
    },
    mutationToDom: function () {
      var e = document.createElement("mutation");
      e.setAttribute("items", String(this.itemCount_));
      return e;
    },
    domToMutation: function (e) {
      this.itemCount_ = parseInt(e.getAttribute("items"), 10);
      this.cacheId = {};
      this.updateShape_();
    }
  });
}
function N(e, t) {
  e.insertBlockProfile("variables_get", {
    type: "variables_get",
    message0: "%1",
    args0: [{
      type: "field_coco_dropdown",
      name: "VAR",
      custom: !0,
      advancedOptions: function () {
        return Object(O.c)().getPrimitiveVariableList(this);
      }
    }],
    output: !0,
    colour: "%{BKY_VARIABLES_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("variables_set", {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [{
      type: "field_coco_dropdown",
      name: "VAR",
      custom: !0,
      advancedOptions: function () {
        return Object(O.c)().getPrimitiveVariableList(this);
      }
    }, {
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }],
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_VARIABLES_HUE}"
  });
  e.insertBlockProfile("variables_change", {
    type: "variables_change",
    message0: "%{BKY_CHANGE_VARIABLE}",
    args0: [{
      type: "field_coco_dropdown",
      name: "VAR",
      custom: !0,
      advancedOptions: function () {
        return Object(O.c)().getPrimitiveVariableList(this);
      }
    }, {
      type: "field_coco_dropdown",
      name: "METHOD",
      custom: !0,
      options: function () {
        return [[t.Msg.INCREASE, "increase"], [t.Msg.DECREASE, "decrease"]];
      }
    }, {
      type: "input_value",
      name: "VALUE",
      check: ["Number", "String", "Boolean", "Array"],
      align: "CENTRE"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_VARIABLES_HUE}",
    inputsInline: !0
  });
}
function R(e) {
  e.insertBlockXML("variables_get", "", !0);
  e.insertBlockXML("variables_set", "<value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">0</field>\n        </shadow>\n    </value>", !0);
  e.insertBlockXML("variables_change", "<value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\">1</field>\n        </shadow>\n    </value>", !0);
}
function k(e) {
  e.insertBlockSnippetGenerator("variables_get", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "VAR");
    return o !== g.h && o ? Object(_.s)("getVariableValue", [Object(_.o)(o)]) : "";
  });
  e.insertBlockSnippetGenerator("variables_set", function (t, n) {
    var r = t.blocks[n];
    var o = e.valueToCode(t, n, "VALUE", e.ORDER_ASSIGNMENT) || "0";
    var i = e.getFieldValue(r, "VAR") || "";
    return i !== g.h && i ? Object(_.n)("setVariableValue", [Object(_.o)(i), o]) : "";
  });
  e.insertBlockSnippetGenerator("variables_change", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "METHOD") || "";
    var i = e.getFieldValue(r, "VAR") || "";
    var a = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || "0";
    var s = Number(a);
    if (!isNaN(s)) {
      a = s > 0 ? a : "(".concat(a, ")");
    }
    return "increase" === o ? Object(_.n)("increaseVariable", [Object(_.o)(i), a]) : "decrease" === o ? Object(_.n)("decreaseVariable", [Object(_.o)(i), a]) : "";
  });
}
!function (e) {
  e.LOG = "LOG";
  e.ERROR = "ERROR";
  e.WARNING = "WARNING";
}(E || (E = {}));
var x;
var D;
var M;
var L;
var P;
var B;
var F;
var G = require("../323");
var U = "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"1,,1\">1</field></shadow>";
function W(e, t) {
  function n(e) {
    if (!t.events.is_undoing()) {
      var n;
      var r;
      var o = this.source_block;
      if (o) {
        if ("nth" === e) {
          if (!(null === (n = o.addMutation) || void 0 === n)) {
            n.call(o);
          }
        } else if (!(null === (r = o.removeMutation) || void 0 === r)) {
          r.call(o);
        }
      }
    }
  }
  e.insertBlockProfile("array_get", {
    type: "array_get",
    message0: "%1",
    args0: [{
      type: "field_coco_dropdown",
      name: "ARRAY",
      custom: !0,
      advancedOptions: function () {
        return Object(O.c)().getArrayVariableList(this);
      }
    }],
    output: "Array",
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("lists_append", {
    type: "lists_append",
    message0: "%{BKY_LISTS_APPEND}",
    args0: [{
      type: "input_value",
      name: "VALUE"
    }, {
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  });
  e.insertBlockProfile("lists_insert_value", {
    type: "lists_insert_value",
    message0: "%{BKY_INSERT_LISTS_ITEM_BY_INDEX}",
    args0: [{
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
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
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  });
  e.insertBlockProfile("array_copy", {
    type: "array_copy",
    message0: "%{BKY_COPY_ARRAY}",
    args0: [{
      type: "input_value",
      name: "FROM",
      check: ["Array"]
    }, {
      type: "input_value",
      name: "TO",
      check: ["Array"]
    }],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  });
  e.insertBlockProfile("array_get_length", {
    type: "array_get_length",
    message0: "%{BKY_GET_ARRAY_LENGTH}",
    args0: [{
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }],
    output: "Number",
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("lists_index_of", {
    type: "lists_index_of",
    message0: "%{BKY_GET_ARRAY_ITEM_INDEX}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }, {
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }],
    colour: "%{BKY_LISTS_HUE}",
    output: "Number",
    inputsInline: !0
  });
  e.insertBlockProfile("lists_is_exist", {
    type: "lists_is_exist",
    message0: "%{BKY_CHECK_ITEM_IN_ARRAY}",
    args0: [{
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }, {
      type: "input_value",
      name: "VALUE",
      align: "CENTRE"
    }],
    colour: "%{BKY_LISTS_HUE}",
    output: "Boolean",
    inputsInline: !0
  });
  e.insertBlockProfile("array_remove_item", {
    type: "array_remove_item",
    message0: "%{BKY_REMOVE_ARRAY_ITEM}",
    args0: [{
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }, {
      type: "field_coco_dropdown",
      name: "ITEM_POS",
      custom: !0,
      optOnchange: n,
      options: function () {
        return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ITEM, "lastItem"], [t.Msg.ALL_ITEM, "allItem"]];
      }
    }],
    message1: "%1",
    args1: [{
      type: "input_value",
      name: "INDEX",
      check: ["Number"]
    }],
    message2: "%{BKY_ARRAY_ITEM} %1",
    args2: [{
      type: "input_dummy",
      name: "ITEM"
    }],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0,
    mutator: "ARRAY_ITEM_MUTATOR"
  });
  e.insertBlockProfile("lists_replace", {
    type: "lists_replace",
    message0: "%{BKY_LISTS_REPLACE}",
    args0: [{
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }, {
      type: "field_coco_dropdown",
      name: "ITEM_POS",
      custom: !0,
      optOnchange: n,
      options: function () {
        return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ITEM, "lastItem"]];
      }
    }],
    message1: "%1",
    args1: [{
      type: "input_value",
      name: "INDEX",
      check: ["Number"]
    }],
    message2: "%{BKY_ARRAY_ITEM} %1",
    args2: [{
      type: "input_dummy",
      name: "ITEM"
    }],
    message3: "%{BKY_IS} %1",
    args3: [{
      type: "input_value",
      name: "VALUE"
    }],
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0,
    mutator: "ARRAY_ITEM_MUTATOR"
  });
  e.insertBlockProfile("array_get_item", {
    type: "array_get_item",
    message0: "%1 %2",
    args0: [{
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }, {
      type: "field_coco_dropdown",
      name: "ITEM_POS",
      custom: !0,
      optOnchange: n,
      options: function () {
        return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ITEM, "lastItem"]];
      }
    }],
    message1: "%1",
    args1: [{
      type: "input_value",
      name: "INDEX",
      check: ["Number"]
    }],
    message2: "%{BKY_ARRAY_ITEM} %1",
    args2: [{
      type: "input_dummy",
      name: "ITEM"
    }],
    colour: "%{BKY_LISTS_HUE}",
    output: !0,
    inputsInline: !0,
    mutator: "ARRAY_ITEM_MUTATOR"
  });
  e.insertBlockProfile("array_current_item", {
    type: "array_current_item",
    message0: "%{BKY_ARRAY_CURRENT_ITEM}",
    output: ["String", "Number", "Array", "Boolean"],
    required_context: "array_foreach_DO",
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  });
  e.insertBlockProfile("array_foreach", {
    type: "array_foreach",
    message0: "%{BKY_ARRAY_FOREACH}",
    args0: [{
      type: "input_value",
      name: "ARRAY",
      check: ["Array"]
    }, {
      type: "input_value",
      name: "ARRAY_CURRENT_ITEM",
      default_shadow: "<shadow type=\"array_current_item\" />"
    }, {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO",
      provided_context: "array_foreach_DO"
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_LISTS_HUE}",
    inputsInline: !0
  });
}
function H(e) {
  e.insertBlockXML("lists_replace", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"1,,1\">1</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n    ", !0);
  e.insertBlockXML("array_remove_item", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n  ", !0);
  e.insertBlockXML("array_get", void 0, !0);
  e.insertBlockXML("lists_append", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", !0);
  e.insertBlockXML("lists_insert_value", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", !0);
  e.insertBlockXML("array_copy", "\n    <value name=\"FROM\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"TO\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    ", !0);
  e.insertBlockXML("array_get_item", "\n    <mutation pos='nth'></mutation>\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"INDEX\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints='1,,1'>1</field>\n      </shadow>\n    </value>\n  ", !0);
  e.insertBlockXML("array_get_length", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    ", !0);
  e.insertBlockXML("lists_index_of", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", !0);
  e.insertBlockXML("lists_is_exist", "\n    <value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\">0</field>\n      </shadow>\n    </value>\n  ", !0);
  e.insertBlockXML("array_foreach", "<value name=\"ARRAY\">\n      <shadow type=\"array_get\"></shadow>\n    </value>", !0);
}
function V(e) {
  e.insertBlockSnippetGenerator("array_get", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "ARRAY") || "";
    return Object(_.s)("getVariableValue", [Object(_.o)(o)]);
  });
  var t = function (t, n) {
    var r = Object(G.a)(n);
    var o = r.blockId && t.blocks[r.blockId];
    return o && e.getFieldValue(o, "ARRAY") || "";
  };
  e.insertBlockSnippetGenerator("lists_append", function (n, r) {
    var o = n.blocks[r];
    var i = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL);
    var a = t(n, i);
    var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL);
    return Object(_.l)(Object(_.n)("pushArrayItem", [i, s, Object(_.o)(a)]), o, e);
  });
  e.insertBlockSnippetGenerator("lists_insert_value", function (n, r) {
    var o = n.blocks[r];
    var i = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL);
    var a = t(n, i);
    var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL);
    var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL);
    return Object(_.l)(Object(_.n)("insertArrayItemByIndex", [i, s, c + " - 1", Object(_.o)(a)]), o, e);
  });
  e.insertBlockSnippetGenerator("array_remove_item", function (n, r) {
    var o = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL);
    var i = t(n, o);
    var a = n.blocks[r];
    var s = e.getFieldValue(a, "ITEM_POS") || "";
    if ("nth" === s) {
      var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL);
      return Object(_.l)(Object(_.n)("removeArrayItemByIndex", [o, c + " - 1", Object(_.o)(i)]), a, e);
    }
    return "lastItem" === s ? Object(_.l)(Object(_.n)("removeLastArrayItem", [o, Object(_.o)(i)]), a, e) : Object(_.l)(Object(_.n)("removeAllArrayItem", [o, Object(_.o)(i)]), a, e);
  });
  e.insertBlockSnippetGenerator("lists_replace", function (n, r) {
    var o = n.blocks[r];
    var i = e.valueToCode(n, r, "ARRAY", e.ORDER_FUNCTION_CALL);
    var a = t(n, i);
    var s = e.getFieldValue(o, "ITEM_POS") || "";
    var c = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL);
    if ("nth" === s) {
      var l = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL);
      return Object(_.l)(Object(_.n)("setArrayItemByIndex", [i, c, l + " - 1", Object(_.o)(a)]), o, e);
    }
    return Object(_.l)(Object(_.n)("setArrayLastItem", [i, c, Object(_.o)(a)]), o, e);
  });
  e.insertBlockSnippetGenerator("array_copy", function (n, r) {
    var o = n.blocks[r];
    var i = e.valueToCode(n, r, "FROM", e.ORDER_FUNCTION_CALL);
    var a = e.valueToCode(n, r, "TO", e.ORDER_FUNCTION_CALL);
    return Object(_.l)(Object(_.n)("copyArray", [i, a, Object(_.o)(t(n, a))]), o, e);
  });
  e.insertBlockSnippetGenerator("array_get_item", function (t, n) {
    var r = t.blocks[n];
    var o = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL);
    if ("nth" === (e.getFieldValue(r, "ITEM_POS") || "")) {
      var i = e.valueToCode(t, n, "INDEX", e.ORDER_FUNCTION_CALL);
      return Object(_.l)(Object(_.s)("getArrayItemByIndex", [o, i + " - 1"]), r, e, !1, !0);
    }
    return Object(_.l)(Object(_.s)("getArrayLastItem", [o]), r, e, !1, !0);
  });
  e.insertBlockSnippetGenerator("array_get_length", function (t, n) {
    var r = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL);
    return Object(_.s)("getArrayLength", [r]);
  });
  e.insertBlockSnippetGenerator("lists_index_of", function (t, n) {
    var r = t.blocks[n];
    var o = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL);
    var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    return Object(_.l)(Object(_.s)("getArrayItemIndex", [o, i, "1"]), r, e, !1, !0);
  });
  e.insertBlockSnippetGenerator("lists_is_exist", function (t, n) {
    var r = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    return Object(_.s)("checkItemInArray", [r, o]);
  });
  e.insertBlockSnippetGenerator("array_current_item", function () {
    return "arrayCurrentItem";
  });
  e.insertBlockSnippetGenerator("array_foreach", function (t, n) {
    var r = e.valueToCode(t, n, "ARRAY", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "ARRAY_CURRENT_ITEM", e.ORDER_FUNCTION_CALL);
    var i = e.statementToCode(t, n, "DO");
    return i ? Object(_.l)(Object(_.i)("asyncScheduler.listForEach", i, [r], [o]), t.blocks[n], e, !0) : "";
  });
}
function z(e) {
  e.extensions.register_mutator("ARRAY_ITEM_MUTATOR", {
    updateShape_: function (t) {
      var n = "add" === t;
      var r = this.get_input("INDEX");
      if (n) {
        if (!r) {
          var o = this.get_input_index("VALUE");
          var i = -1 === o ? o : 2;
          this.append_shadow_input("INDEX", U, i).set_check("Number");
          this.append_dummy_input("ITEM", i + 1).append_field(e.Msg.ARRAY_ITEM);
        }
      } else if (r) {
        this.remove_input("INDEX");
        this.remove_input("ITEM");
      }
    },
    addMutation: function (t) {
      var n = this;
      _.b.call(this, "INDEX", function () {
        var t = n.get_input_index("VALUE");
        var r = -1 === t ? 2 : t;
        var o = n.append_value_input("INDEX", r).set_check("Number");
        n.append_dummy_input("ITEM", r + 1).append_field(e.Msg.ARRAY_ITEM);
        return o;
      }, U, t);
    },
    removeMutation: function () {
      var e = this;
      _.t.call(this, "INDEX", "NUM", function () {
        e.remove_input("INDEX");
        e.remove_input("ITEM");
      });
    },
    domToMutation: function () {
      var e;
      this.cacheId = {};
      var t = null === (e = this.get_field("ITEM_POS")) || void 0 === e ? void 0 : e.get_value();
      this.updateShape_("nth" === t ? "add" : "remove");
    },
    mutationToDom: function () {
      var e;
      var t = document.createElement("mutation");
      var n = null === (e = this.get_field("ITEM_POS")) || void 0 === e ? void 0 : e.get_value();
      t.setAttribute("pos", n || "");
      return t;
    }
  });
}
function Y(e, t) {
  e.insertBlockProfile("object_get", {
    type: "object_get",
    message0: "%{BKY_OBJECT_GET}",
    args0: [{
      type: "field_coco_dropdown",
      name: "OBJECT",
      custom: !0,
      advancedOptions: function () {
        return Object(O.c)().getObjectVariableList(this);
      }
    }],
    output: "Object",
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("object_create", {
    type: "object_create",
    message0: "",
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0,
    output: "Object",
    mutator: "OBJECT_CREATE_MUTATOR"
  });
  e.insertBlockProfile("object_set_item", {
    type: "object_set_item",
    message0: "%{BKY_OBJECT_SET_ITEM}",
    args0: [{
      type: "input_value",
      name: "OBJECT",
      check: ["Object"]
    }, {
      type: "input_value",
      name: "KEY",
      check: ["String", "Number"]
    }, {
      type: "input_value",
      name: "VALUE"
    }],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  });
  e.insertBlockProfile("object_delete_item", {
    type: "object_delete_item",
    message0: "%{BKY_OBJECT_DELETE_ITEM}",
    args0: [{
      type: "input_value",
      name: "OBJECT",
      check: ["Object"]
    }, {
      type: "input_value",
      name: "KEY",
      check: ["String", "Number"]
    }],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  });
  e.insertBlockProfile("object_clear", {
    type: "object_clear",
    message0: "%{BKY_OBJECT_CLEAR}",
    args0: [{
      type: "input_value",
      name: "OBJECT",
      check: ["Object"]
    }],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0,
    previousStatement: !0,
    nextStatement: !0
  });
  e.insertBlockProfile("object_length", {
    type: "object_length",
    message0: "%{BKY_OBJECT_LENGTH}",
    args0: [{
      type: "input_value",
      name: "OBJECT",
      check: ["Object"]
    }],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0,
    output: "Number"
  });
  e.insertBlockProfile("object_get_item", {
    type: "object_get_item",
    message0: "%{BKY_OBJECT_GET_ITEM}",
    args0: [{
      type: "input_value",
      name: "OBJECT",
      check: ["Object"]
    }, {
      type: "input_value",
      name: "KEY",
      check: ["String", "Number"]
    }],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0,
    output: !0
  });
  e.insertBlockProfile("object_include_key", {
    type: "object_include_key",
    message0: "%{BKY_OBJECT_INCLUDE_KEY}",
    args0: [{
      type: "input_value",
      name: "OBJECT",
      check: ["Object"]
    }, {
      type: "input_value",
      name: "KEY",
      check: ["String", "Number"]
    }],
    colour: "%{BKY_SOUND_HUE}",
    inputsInline: !0,
    output: "Boolean"
  });
}
function K(e) {
  e.insertBlockXML("object_get", void 0, !0);
  e.insertBlockXML("object_create", "<mutation items='1'></mutation>", !0);
  e.insertBlockXML("object_set_item", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>\n    <value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" allow_text=\"true\">0</field>\n      </shadow>\n    </value>", !0);
  e.insertBlockXML("object_delete_item", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>", !0);
  e.insertBlockXML("object_clear", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>", !0);
  e.insertBlockXML("object_length", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>", !0);
  e.insertBlockXML("object_get_item", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>", !0);
  e.insertBlockXML("object_include_key", "<value name=\"OBJECT\">\n      <shadow type=\"object_get\"></shadow>\n    </value>\n    <value name=\"KEY\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">key</field>\n      </shadow>\n    </value>", !0);
}
function q(e) {
  var t = function (t, n) {
    var r = Object(G.a)(n);
    var o = r.blockId && t.blocks[r.blockId];
    var i = o && e.getFieldValue(o, "OBJECT");
    return JSON.stringify(i);
  };
  e.insertBlockSnippetGenerator("object_get", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "OBJECT") || "";
    return Object(_.s)("getVariableValue", [Object(_.o)(o)]);
  });
  e.insertBlockSnippetGenerator("object_create", function (t, n) {
    for (var r = 0, o = "[";;) {
      var i = e.valueToCode(t, n, "KEY".concat(r), e.ORDER_FUNCTION_CALL);
      var a = e.valueToCode(t, n, "VALUE".concat(r), e.ORDER_FUNCTION_CALL);
      if (!i || !a) {
        break;
      }
      o += "[".concat(i, ", ").concat(a, "],");
      r++;
    }
    o += "]";
    var s = t.blocks[n];
    return Object(_.l)(Object(_.s)("createTempObject", [o]), s, e, !1, !0);
  });
  e.insertBlockSnippetGenerator("object_set_item", function (n, r) {
    var o = n.blocks[r];
    var i = e.valueToCode(n, r, "OBJECT", e.ORDER_FUNCTION_CALL);
    var a = e.valueToCode(n, r, "KEY", e.ORDER_FUNCTION_CALL);
    var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL);
    var c = t(n, i);
    return Object(_.l)(Object(_.n)("setObjectItem", [c, i, a, s]), o, e);
  });
  e.insertBlockSnippetGenerator("object_delete_item", function (n, r) {
    var o = n.blocks[r];
    var i = e.valueToCode(n, r, "OBJECT", e.ORDER_FUNCTION_CALL);
    var a = e.valueToCode(n, r, "KEY", e.ORDER_FUNCTION_CALL);
    var s = t(n, i);
    return Object(_.l)(Object(_.n)("deleteObjectItem", [s, i, a]), o, e);
  });
  e.insertBlockSnippetGenerator("object_get_item", function (t, n) {
    var r = e.valueToCode(t, n, "OBJECT", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "KEY", e.ORDER_FUNCTION_CALL);
    var i = t.blocks[n];
    return Object(_.l)(Object(_.s)("getObjectItem", [r, o]), i, e, !1, !0);
  });
  e.insertBlockSnippetGenerator("object_clear", function (n, r) {
    var o = n.blocks[r];
    var i = e.valueToCode(n, r, "OBJECT", e.ORDER_FUNCTION_CALL);
    var a = t(n, i);
    return Object(_.l)(Object(_.n)("clearObject", [a, i]), o, e);
  });
  e.insertBlockSnippetGenerator("object_length", function (t, n) {
    var r = e.valueToCode(t, n, "OBJECT", e.ORDER_FUNCTION_CALL);
    var o = t.blocks[n];
    return Object(_.l)(Object(_.s)("getObjectLength", [r]), o, e, !1, !0);
  });
  e.insertBlockSnippetGenerator("object_include_key", function (t, n) {
    var r = e.valueToCode(t, n, "OBJECT", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "KEY", e.ORDER_FUNCTION_CALL);
    var i = t.blocks[n];
    return Object(_.l)(Object(_.s)("checkKeyInObject", [r, o]), i, e, !1, !0);
  });
}
function X(e) {
  e.extensions.register_mutator("OBJECT_CREATE_MUTATOR", {
    itemCount_: 0,
    updateShape_: function () {
      e.events.disable();
      if (!this.get_input("TITLE")) {
        this.append_dummy_input("TITLE").append_field(e.Msg.OBJECT, "TEXT");
      }
      if (this.get_input("MUTATE_REMOVE_BUTTON")) {
        this.remove_input("MUTATE_REMOVE_BUTTON");
      }
      if (this.get_input("MUTATE_ADD_BUTTON")) {
        this.remove_input("MUTATE_ADD_BUTTON");
      }
      for (var t = this.itemCount_;; t++) {
        var n = "KEY".concat(t);
        if (!this.get_input(n)) {
          break;
        }
        this.remove_input(n);
        var r = "VALUE".concat(t);
        if (!this.get_input(r)) {
          break;
        }
        this.remove_input(r);
      }
      for (var o = 0; o < this.itemCount_; o++) {
        var i = "KEY".concat(o);
        if (!this.get_input(i)) {
          var a = this.append_shadow_input(i, "<shadow type=\"text\"><field name=\"TEXT\">key".concat(o + 1, "</field></shadow>"));
          a.set_check(["Number", "String"]);
          if (0 !== o) {
            a.append_field(",");
          }
        }
        var s = "VALUE".concat(o);
        if (!this.get_input(s)) {
          this.append_shadow_input(s, "<shadow type=\"math_number\"><field name=\"NUM\" allow_text=\"true\">0</field></shadow>").append_field(":");
        }
      }
      if (0 === this.itemCount_) {
        if (this.get_input("MUTATE_REMOVE_BUTTON")) {
          this.remove_input("MUTATE_REMOVE_BUTTON");
        }
        this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Object(_.p)(), "MUTATE_ADD_BUTTON");
      } else {
        this.append_dummy_input("MUTATE_REMOVE_BUTTON").append_field(Object(_.q)(void 0), "MUTATE_REMOVE_BUTTON");
        this.append_dummy_input("MUTATE_ADD_BUTTON").append_field(Object(_.p)(), "MUTATE_ADD_BUTTON");
      }
      e.events.enable();
    },
    addMutation: function (t) {
      if (e.events.is_undoing()) {
        if ("number" === typeof t) {
          this.itemCount_ = t;
          this.updateShape_();
        }
      } else {
        var n = this.itemCount_;
        this.itemCount_++;
        this.updateShape_();
        var r = Object(_.c)("mutation", {
          block: this,
          old_value: n,
          new_value: this.itemCount_
        });
        e.events.fire(r);
      }
    },
    removeMutation: function (t) {
      if (e.events.is_undoing()) {
        if ("number" === typeof t) {
          this.itemCount_ = t;
          this.updateShape_();
        }
      } else {
        var n = this.itemCount_;
        this.itemCount_--;
        this.updateShape_();
        var r = Object(_.c)("mutation", {
          block: this,
          old_value: n,
          new_value: this.itemCount_
        });
        e.events.fire(r);
      }
    },
    mutationToDom: function () {
      var e = document.createElement("mutation");
      e.setAttribute("items", String(this.itemCount_));
      return e;
    },
    domToMutation: function (e) {
      this.itemCount_ = parseInt(e.getAttribute("items"), 10);
      this.updateShape_();
    }
  });
}
function Q(e, t) {
  var n = "%{BKY_BLOCK_CLOUD_ICON}";
  e.insertBlockProfile("app_on_mount", {
    type: "app_on_mount",
    message0: "%{BKY_APP_ON_MOUNT}",
    args0: [Object(_.e)(n, !0), {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("app_on_switch_background", {
    type: "app_on_switch_background",
    message0: "%{BKY_APP_ON_SWITCH}",
    args0: [Object(_.e)(n, !0), {
      type: "field_coco_dropdown",
      name: "APP_STATE",
      custom: !0,
      options: function () {
        return [[t.Msg.APP_BACKGROUND, "background"], [t.Msg.APP_ACTIVE, "active"]];
      }
    }, {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("broadcast_input", {
    type: "broadcast_input",
    message0: "%1",
    args0: [{
      type: "field_coco_dropdown",
      name: "BROADCAST",
      custom: !0,
      advancedOptions: function () {
        return Object(O.c)().getBroadcastList(this);
      }
    }],
    colour: "#ffffff",
    output: "String",
    tooltip: "%{BKY_BROADCAST_INPUT_TOOLTIP}"
  });
  e.insertBlockProfile("broadcast_on_receive", {
    type: "broadcast_on_receive",
    message0: "%{BKY_BROADCAST_ON_RECEIVE}",
    args0: [Object(_.e)(n, !0), {
      type: "input_value",
      name: "BROADCAST",
      check: ["String", "Boolean"]
    }, {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("broadcast_send", {
    type: "broadcast_send",
    message0: "%{BKY_BROADCAST_SEND}",
    args0: [{
      type: "input_value",
      name: "BROADCAST",
      check: ["String", "Boolean"]
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("broadcast_send_and_wait", {
    type: "broadcast_send_and_wait",
    message0: "%{BKY_BROADCAST_SEND_AND_WAIT}",
    args0: [{
      type: "input_value",
      name: "BROADCAST",
      check: ["String", "Boolean"]
    }],
    previousStatement: !0,
    nextStatement: !0,
    colour: "%{BKY_EVENTS_HUE}",
    inputsInline: !0
  });
}
function Z(e) {
  e.insertBlockXML("app_on_mount");
  e.insertBlockXML("app_on_switch_background");
  e.insertBlockXML("when", "\n      <value name=\"CONDITION\">\n        <empty type=\"logic_empty\">\n          <field name=\"BOOL\"></field>\n        </empty>\n      </value>\n      ");
  e.insertBlockXML("broadcast_input", void 0, !0);
}
function J(e) {
  var t = function (t, n) {
    var r = e.valueToCode(t, n, "BROADCAST", e.ORDER_FUNCTION_CALL);
    var o = JSON.stringify(e.getDynamicValue("__CURRENT_SCREEN_ID__"));
    return "".concat(o, " + ").concat(r);
  };
  e.insertBlockSnippetGenerator("app_on_mount", function (t, n) {
    var r = e.statementToCode(t, n, "DO");
    return r ? Object(_.m)("onAppMount", void 0, r) : "";
  });
  e.insertBlockSnippetGenerator("app_on_switch_background", function (t, n) {
    var r = t.blocks[n];
    var o = e.statementToCode(t, n, "DO");
    return o ? "active" === (e.getFieldValue(r, "APP_STATE") || "") ? Object(_.m)("onAppActive", void 0, o) : Object(_.m)("onAppBackground", void 0, o) : "";
  });
  e.insertBlockSnippetGenerator("broadcast_input", function (t, n) {
    var r = t.blocks[n];
    return JSON.stringify(e.getFieldValue(r, "BROADCAST"));
  });
  e.insertBlockSnippetGenerator("broadcast_on_receive", function (n, r) {
    var o = e.statementToCode(n, r, "DO");
    return o ? Object(_.m)("onCustomEvent", [t(n, r)], o) : "";
  });
  e.insertBlockSnippetGenerator("broadcast_send", function (e, n) {
    return Object(_.n)("emitCustomEvent", [t(e, n)]);
  });
  e.insertBlockSnippetGenerator("broadcast_send_and_wait", function (e, n) {
    return Object(_.j)("emitCustomEventAndWait", [t(e, n)]);
  });
}
function $(e) {
  e.insertBlockProfile("math_compare", {
    type: "math_compare",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A",
      check: ["Number", "String", "Boolean", "Array"]
    }, {
      type: "field_coco_dropdown",
      custom: !0,
      name: "OP",
      options: [["=", F.EQUAL], ["≠", F.UNEQUAL], ["<", F.LESS_THAN], ["≤", F.LESS_THAN_OR_EQUAL], [">", F.GREATER_THAN], ["≥", F.GREATER_THAN_OR_EQUAL]]
    }, {
      type: "input_value",
      name: "B",
      check: ["Number", "String", "Boolean", "Array"]
    }],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}"
  });
  e.insertBlockProfile("math_operation", {
    type: "math_operation",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A",
      check: "Number"
    }, {
      type: "field_coco_dropdown",
      name: "OP",
      custom: !0,
      options: [["%{BKY_MATH_ADDITION_SYMBOL}", D.ADD], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", D.MINUS], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", D.MULTIPLY], ["%{BKY_MATH_DIVISION_SYMBOL}", D.DIVIDE], ["%{BKY_MATH_POWER_SYMBOL}", D.POWER]]
    }, {
      type: "input_value",
      name: "B",
      check: "Number"
    }],
    inputsInline: !0,
    output: "Number",
    colour: "%{BKY_MATH_HUE}"
  });
  e.insertBlockProfile("math_random_integer", {
    type: "math_random_integer",
    message0: "%{BKY_RANDOM_NUM}",
    args0: [{
      type: "input_value",
      name: "INPUT_A",
      check: "Number",
      align: "CENTRE"
    }, {
      type: "input_value",
      name: "INPUT_B",
      check: "Number",
      align: "CENTRE"
    }],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("math_number_property", {
    type: "math_number_property",
    message0: "%1 %{BKY_MATH_IS} %2",
    args0: [{
      type: "input_value",
      name: "NUMBER_TO_CHECK",
      check: "Number",
      align: "CENTRE"
    }, {
      type: "field_coco_dropdown",
      name: "PROPERTY",
      custom: !0,
      options: [["%{BKY_MATH_EVEN}", x.EVEN], ["%{BKY_MATH_ODD}", x.ODD], ["%{BKY_MATH_PRIME}", x.PRIME], ["%{BKY_MATH_WHOLE}", x.WHOLE], ["%{BKY_MATH_POSITIVE}", x.POSITIVE], ["%{BKY_MATH_NEGATIVE}", x.NEGATIVE]]
    }],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_MATH_HUE}"
  });
  e.insertBlockProfile("logic_operation", {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [{
      type: "input_value",
      name: "A",
      check: "Boolean"
    }, {
      type: "field_coco_dropdown",
      custom: !0,
      name: "OP",
      options: [["%{BKY_LOGIC_OPERATION_AND}", M.AND], ["%{BKY_LOGIC_OPERATION_OR}", M.OR]]
    }, {
      type: "input_value",
      name: "B",
      check: "Boolean"
    }],
    inputsInline: !0,
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}"
  });
  e.insertBlockProfile("math_complex_operation", {
    type: "math_complex_operation",
    message0: "%1 %2",
    args0: [{
      type: "field_coco_dropdown",
      custom: !0,
      name: "OP",
      options: [["%{BKY_MATH_SINGLE_OP_ROOT}", L.ROOT], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", L.ABS], ["-", L.NEG], ["ln", L.LN], ["log10", L.LOG10], ["e^", L.EXP], ["10^", L.POW10]]
    }, {
      type: "input_value",
      name: "NUM",
      check: "Number"
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}"
  });
  e.insertBlockProfile("math_round", {
    type: "math_round",
    message0: "%1 %2",
    args0: [{
      type: "field_coco_dropdown",
      custom: !0,
      name: "OP",
      options: [["%{BKY_MATH_ROUND_OPERATOR_ROUND}", B.ROUND], ["%{BKY_MATH_ROUND_OPERATOR_CEIL}", B.CEIL], ["%{BKY_MATH_ROUND_OPERATOR_FLOOR}", B.FLOOR]]
    }, {
      type: "input_shadow",
      name: "NUM",
      field_type: "math",
      default_text: "0"
    }],
    output: "Number",
    colour: "%{BKY_MATH_HUE}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}"
  });
  e.insertBlockProfile("logic_boolean", {
    type: "logic_boolean",
    message0: "%1",
    args0: [{
      type: "field_coco_dropdown",
      custom: !0,
      name: "BOOL",
      options: [["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]]
    }],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}"
  });
  e.insertBlockProfile("math_check_divisible", {
    type: "math_check_divisible",
    message0: "%{BKY_DIVISIBLE_BY}",
    args0: [{
      type: "input_value",
      name: "NUMBER_TO_CHECK",
      check: "Number"
    }, {
      type: "input_value",
      name: "DIVISOR",
      check: "Number"
    }],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("math_calculate_expression", {
    type: "math_calculate_expression",
    message0: "%{BKY_CALCULATE}",
    args0: [{
      type: "input_value",
      name: "INPUT",
      check: ["String", "Number", "Boolean"]
    }],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("text_convert_type", {
    type: "text_convert_type",
    message0: "%{BKY_CONVERT_TYPE}",
    args0: [{
      type: "input_value",
      name: "ORIGINAL_VALUE",
      check: ["String", "Number", "Array", "Boolean", "Object"],
      align: "CENTRE"
    }, {
      type: "field_coco_dropdown",
      name: "TYPE",
      custom: !0,
      options: [["%{BKY_NUMBER_TYPE}", "number"], ["%{BKY_STRING_TYPE}", "string"], ["%{BKY_BOOLEAN_TYPE}", "boolean"]]
    }],
    output: ["String", "Number", "Boolean"],
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("text_get_length", {
    type: "text_get_length",
    message0: "%{BKY_TEXT_LENGTH}",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["String", "Number", "Boolean"]
    }],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("text_slice", {
    type: "text_slice",
    message0: "%{BKY_TEXT_SLICE}",
    args0: [{
      type: "input_value",
      name: "STRING",
      check: ["String", "Boolean", "Number"]
    }, {
      type: "input_value",
      name: "NUM0",
      check: ["Number"]
    }],
    output: "String",
    inputsInline: !0,
    colour: "%{BKY_LOGIC_HUE}",
    mutator: "TEXT_SLICE_MUTATOR"
  });
  e.insertBlockProfile("text_check_contain", {
    type: "text_check_contain",
    message0: "%{BKY_TEXT_CONTAIN}",
    args0: [{
      type: "input_value",
      name: "TEXT1",
      check: ["String", "Number", "Boolean"]
    }, {
      type: "input_value",
      name: "TEXT2",
      check: ["String", "Number", "Boolean"]
    }],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("text_split_text", {
    type: "text_split_text",
    message0: "%{BKY_TEXT_SPLIT}",
    args0: [{
      type: "input_value",
      name: "STR_TO_SPLIT",
      check: ["String", "Number", "Boolean"]
    }, {
      type: "input_value",
      name: "SPLIT_STR",
      check: ["String", "Number", "Boolean"]
    }],
    output: "Array",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("text_shadow", {
    type: "text_shadow",
    message0: "%1",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["String"]
    }],
    output: "String",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("text_rich_text", {
    type: "text_rich_text",
    message0: "%1",
    args0: [{
      type: "field_input",
      name: "TEXT",
      text: ""
    }],
    output: "String",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0,
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  });
  e.insertBlockProfile("math_shadow_number", {
    type: "math_shadow_number",
    message0: "%1",
    args0: [{
      type: "input_value",
      name: "VALUE",
      check: ["Number"]
    }],
    output: "Number",
    colour: "%{BKY_LOGIC_HUE}",
    inputsInline: !0
  });
  e.insertBlockProfile("text_multiline", {
    type: "text_multiline",
    message0: "%1",
    args0: [{
      type: "field_multiline_input",
      name: "TEXT",
      text: "",
      max_width: 310
    }],
    output: "String",
    colour: "%{BKY_TEXT_HUE}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"]
  });
}
function ee(e) {
  e.insertBlockXML("math_shadow_number", "\n  <value name=\"VALUE\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("math_calculate_expression", "\n  <value name=\"INPUT\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">1+2</field>\n    </shadow>\n  </value>\n  ");
  e.insertBlockXML("math_operation", "\n  <value name=\"A\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n  <value name=\"B\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("math_random_integer", "\n  <value name=\"INPUT_A\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n  <value name=\"INPUT_B\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">5</field>\n    </shadow>\n  </value>\n  ");
  e.insertBlockXML("math_number_property", "\n  <mutation divisor_input=\"false\"></mutation>\n  <field name=\"PROPERTY\">EVEN</field>\n  <value name=\"NUMBER_TO_CHECK\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("math_check_divisible", "\n  <value name=\"NUMBER_TO_CHECK\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">9</field>\n    </shadow>\n  </value>\n  <value name=\"DIVISOR\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">3</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("logic_operation", "\n  <value name=\"A\">\n    <empty type=\"logic_empty\">\n      <field name=\"BOOL\"></field>\n    </empty>\n  </value>\n  <value name=\"B\">\n    <empty type=\"logic_empty\">\n      <field name=\"BOOL\"></field>\n    </empty>\n  </value>\n  ");
  e.insertBlockXML("math_complex_operation", "\n  <value name=\"NUM\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("math_modulo", "\n  <value name=\"DIVIDEND\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">64</field>\n    </shadow>\n  </value>\n  <value name=\"DIVISOR\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">10</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("math_trig", "\n  <field name=\"OP\">SIN</field>\n  <value name=\"NUM\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">45</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("math_round", "\n  <field name=\"OP\">ROUND</field>\n  <value name=\"NUM\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">3.1</field>\n    </shadow>\n  </value>\n  ");
  e.insertBlockXML("math_compare", "\n  <value name=\"A\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n  <value name=\"B\">\n    <shadow type=\"math_number\">\n      <field name=\"NUM\">0</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("logic_boolean");
  e.insertBlockXML("logic_negate", "\n  <value name=\"BOOL\">\n    <empty type=\"logic_empty\">\n      <field name=\"BOOL\"></field>\n    </empty>\n  </value>\n");
  e.insertBlockXML("text_shadow", "\n  <value name=\"VALUE\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">Hello</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("text_convert_type", "\n  <value name=\"ORIGINAL_VALUE\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">123</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("text_join", "\n  <mutation items=\"2\"></mutation>\n  <value name=\"ADD0\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">ab</field>\n    </shadow>\n  </value>\n  <value name=\"ADD1\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">c</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("text_get_length", "\n  <value name=\"VALUE\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">abc</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("text_slice", "\n      <mutation items=\"1\"></mutation>\n      <value name=\"STRING\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">abc</field>\n        </shadow>\n      </value>\n      <value name=\"NUM0\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=\"1,,1\">1</field>\n        </shadow>\n      </value>\n    ");
  e.insertBlockXML("text_check_contain", "\n  <value name=\"TEXT1\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">abc</field>\n    </shadow>\n  </value>\n  <value name=\"TEXT2\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">abc</field>\n    </shadow>\n  </value>\n");
  e.insertBlockXML("text_split_text", "\n  <value name=\"STR_TO_SPLIT\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">1,2,3,4</field>\n    </shadow>\n  </value>\n  <value name=\"SPLIT_STR\">\n    <shadow type=\"text\">\n      <field name=\"TEXT\">,</field>\n    </shadow>\n  </value>\n");
}
function te(e, t) {
  e.Blocks.math_trig = {
    shadow: "<shadow type=\"math_number\"><field name=\"NUM\">45</field></shadow>",
    init: function () {
      this.set_colour(e.theme.block_color.MATH_HUE.fill);
      var n = new t({
        type: "field_coco_dropdown",
        name: "OP",
        custom: !0,
        options: [[e.Msg.MATH_TRIG_SIN, P.SIN], [e.Msg.MATH_TRIG_COS, P.COS], [e.Msg.MATH_TRIG_TAN, P.TAN], [e.Msg.MATH_TRIG_ASIN, P.ASIN], [e.Msg.MATH_TRIG_ACOS, P.ACOS], [e.Msg.MATH_TRIG_ATAN, P.ATAN]],
        optOnchange: function (e) {
          var t;
          var n = "SIN" === e || "COS" === e || "TAN" === e;
          if (null === (t = this.source_block) || void 0 === t ? void 0 : t.updateShape_) {
            this.source_block.updateShape_(n);
          }
        }
      });
      this.append_dummy_input().append_field(n, "OP");
      this.append_shadow_input("NUM", e.Blocks.math_trig.shadow).set_check("Number");
      this.append_dummy_input("DEGREES").append_field(e.Msg.MATH_DEGREES);
      this.set_inputs_inline(!0);
      this.set_output(!0);
    },
    updateShape_: function (t) {
      var n = this.get_input("DEGREES");
      if (t) {
        if (!n) {
          this.append_dummy_input("DEGREES").append_field(e.Msg.MATH_DEGREES);
        }
      } else {
        if (n) {
          this.remove_input("DEGREES");
        }
      }
    }
  };
  var n = "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"1,,1\">2</field></shadow>";
  e.extensions.register_mutator("TEXT_SLICE_MUTATOR", {
    updateShape_: function () {
      e.events.disable();
      if (1 === this.itemCount_) {
        this.append_dummy_input("TITLE_TAIL").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_END);
        this.append_dummy_input("MUTATE_BUTTON").append_field(Object(_.p)(), "MUTATE_BUTTON");
      } else {
        this.append_dummy_input("CONTENT_TO").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_TO);
        this.append_shadow_input("NUM".concat(this.itemCount_ - 1), n);
        this.append_dummy_input("TITLE_TAIL").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_END);
        this.append_dummy_input("MUTATE_BUTTON").append_field(Object(_.q)(void 0), "MUTATE_BUTTON");
      }
      e.events.enable();
    },
    addMutation: function (t) {
      var r = this;
      var o = "NUM".concat(this.itemCount_);
      _.b.call(this, o, function () {
        r.append_dummy_input("CONTENT_TO", "TITLE_TAIL").append_field(e.Msg.OPERATORS_TEXT_SELECT_CHANGEABLE_TO);
        var t = r.append_value_input(o, "TITLE_TAIL");
        r.itemCount_++;
        if (r.get_input("MUTATE_BUTTON")) {
          r.remove_input("MUTATE_BUTTON");
        }
        r.append_dummy_input("MUTATE_BUTTON").append_field(Object(_.q)(void 0), "MUTATE_BUTTON");
        return t;
      }, n, t);
    },
    removeMutation: function () {
      var e = this;
      var t = "NUM".concat(this.itemCount_ - 1);
      _.t.call(this, t, "NUM", function () {
        e.remove_input("CONTENT_TO");
        e.remove_input(t);
        e.itemCount_--;
        if (e.get_input("MUTATE_BUTTON")) {
          e.remove_input("MUTATE_BUTTON");
        }
        e.append_dummy_input("MUTATE_BUTTON").append_field(Object(_.p)(), "MUTATE_BUTTON");
      });
    },
    mutationToDom: function () {
      var e = document.createElement("mutation");
      e.setAttribute("items", String(this.itemCount_));
      return e;
    },
    domToMutation: function (e) {
      this.itemCount_ = parseInt(e.getAttribute("items"), 10);
      this.cacheId = {};
      this.updateShape_();
    }
  });
}
function ne(e) {
  e.insertBlockSnippetGenerator("math_shadow_number", function (t, n) {
    return e.valueToCode(t, n, "VALUE", e.ORDER_NONE);
  });
  e.insertBlockSnippetGenerator("math_operation", function (t, n) {
    var r = {
      ADD: e.ORDER_ADDITION,
      MINUS: e.ORDER_SUBTRACTION,
      MULTIPLY: e.ORDER_MULTIPLICATION,
      DIVIDE: e.ORDER_DIVISION,
      POWER: e.ORDER_COMMA
    };
    var o = t.blocks[n];
    var i = e.getFieldValue(o, "OP") || "";
    var a = r[i];
    var s = e.valueToCode(t, n, "A", a);
    var c = e.valueToCode(t, n, "B", a);
    return Object(_.s)("mathOperation", [Object(_.o)(i), s, c]);
  });
  e.insertBlockSnippetGenerator("math_random_integer", function (t, n) {
    var r = e.valueToCode(t, n, "INPUT_A", e.ORDER_COMMA);
    var o = e.valueToCode(t, n, "INPUT_B", e.ORDER_COMMA);
    return Object(_.s)("getRandomInteger", [r, o]);
  });
  e.insertBlockSnippetGenerator("math_number_property", function (t, n) {
    var r = t.blocks[n];
    var o = e.valueToCode(t, n, "NUMBER_TO_CHECK", e.ORDER_MODULUS);
    var i = e.getFieldValue(r, "PROPERTY") || "";
    return Object(_.s)("determineNumberType", [Object(_.o)(i), o]);
  });
  e.insertBlockSnippetGenerator("math_check_divisible", function (t, n) {
    var r = e.valueToCode(t, n, "NUMBER_TO_CHECK", e.ORDER_MODULUS);
    var o = e.valueToCode(t, n, "DIVISOR", e.ORDER_MODULUS);
    return Object(_.s)("checkDivisibility", [r, o]);
  });
  e.insertBlockSnippetGenerator("logic_operation", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "OP") || "";
    var i = "AND" === o ? e.ORDER_LOGICAL_AND : e.ORDER_LOGICAL_OR;
    var a = e.valueToCode(t, n, "A", i) || "false";
    var s = e.valueToCode(t, n, "B", i) || "false";
    return Object(_.s)("logicOperation", [Object(_.o)(o), a, s]);
  });
  e.insertBlockSnippetGenerator("math_calculate_expression", function (t, n) {
    var r = e.valueToCode(t, n, "INPUT", e.ORDER_MEMBER);
    return Object(_.s)("calculateMathExpression", [r]);
  });
  e.insertBlockSnippetGenerator("math_complex_operation", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "OP") || "";
    var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL);
    return Object(_.s)("complexMathOperation", [Object(_.o)(o), i]);
  });
  e.insertBlockSnippetGenerator("math_modulo", function (t, n) {
    var r = e.valueToCode(t, n, "DIVIDEND", e.ORDER_MODULUS);
    var o = e.valueToCode(t, n, "DIVISOR", e.ORDER_MODULUS);
    return Object(_.s)("remainderOperation", [r, o]);
  });
  e.insertBlockSnippetGenerator("math_trig", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "OP") || "";
    var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL);
    return Object(_.s)("mathTrig", [Object(_.o)(o), i]);
  });
  e.insertBlockSnippetGenerator("math_round", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "OP") || "";
    var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL);
    return Object(_.s)("mathRound", [Object(_.o)(o), i]);
  });
  e.insertBlockSnippetGenerator("math_compare", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "OP") || "";
    var i = "EQ" === o || "NEQ" === o ? e.ORDER_EQUALITY : e.ORDER_RELATIONAL;
    var a = e.valueToCode(t, n, "A", i);
    var s = e.valueToCode(t, n, "B", i);
    return Object(_.s)("compareNumbers", [Object(_.o)(o), a, s]);
  });
  e.insertBlockSnippetGenerator("text_convert_type", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "TYPE") || "";
    var i = e.valueToCode(t, n, "ORIGINAL_VALUE", e.ORDER_FUNCTION_CALL);
    return i ? Object(_.s)("convertValueType", [i, Object(_.o)(o)]) : "";
  });
  e.insertBlockSnippetGenerator("text_slice", function (t, n) {
    var r = e.valueToCode(t, n, "STRING", e.ORDER_MEMBER);
    var o = e.valueToCode(t, n, "NUM0", e.ORDER_COMMA);
    var i = e.valueToCode(t, n, "NUM1", e.ORDER_COMMA);
    return i ? Object(_.s)("extractString", [r, o, i]) : Object(_.s)("extractString", [r, o]);
  });
  e.insertBlockSnippetGenerator("text_join", function (t, n) {
    for (var r = Object.keys(t.connections[n]).length, o = new Array(r), i = 0; i < r; i++) {
      o[i] = e.valueToCode(t, n, "ADD".concat(i), e.ORDER_COMMA) || "''";
    }
    return Object(_.s)("concatStrings", o);
  });
  e.insertBlockSnippetGenerator("text_shadow", function (t, n) {
    return e.valueToCode(t, n, "VALUE", e.ORDER_NONE);
  });
  e.insertBlockSnippetGenerator("text_get_length", function (t, n) {
    var r = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    return Object(_.s)("getStringLength", [r]);
  });
  e.insertBlockSnippetGenerator("text_check_contain", function (t, n) {
    var r = e.valueToCode(t, n, "TEXT1", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "TEXT2", e.ORDER_COMMA);
    return Object(_.s)("checkStringContain", [r, o]);
  });
  e.insertBlockSnippetGenerator("text_split_text", function (t, n) {
    var r = e.valueToCode(t, n, "STR_TO_SPLIT", e.ORDER_FUNCTION_CALL) || "''";
    var o = e.valueToCode(t, n, "SPLIT_STR", e.ORDER_COMMA);
    return Object(_.s)("splitString", [r, o]);
  });
  e.insertBlockSnippetGenerator("text_multiline", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "TEXT") || "";
    return [JSON.stringify(o), e.ORDER_ATOMIC];
  });
  e.insertBlockSnippetGenerator("text_rich_text", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "TEXT") || "";
    return [JSON.stringify(o), e.ORDER_ATOMIC];
  });
}
!function (e) {
  e.EVEN = "EVEN";
  e.ODD = "ODD";
  e.PRIME = "PRIME";
  e.WHOLE = "WHOLE";
  e.POSITIVE = "POSITIVE";
  e.NEGATIVE = "NEGATIVE";
}(x || (x = {}));
(function (e) {
  e.ADD = "ADD";
  e.MINUS = "MINUS";
  e.MULTIPLY = "MULTIPLY";
  e.DIVIDE = "DIVIDE";
  e.POWER = "POWER";
})(D || (D = {}));
(function (e) {
  e.AND = "AND";
  e.OR = "OR";
})(M || (M = {}));
(function (e) {
  e.ROOT = "ROOT";
  e.ABS = "ABS";
  e.NEG = "NEG";
  e.LN = "LN";
  e.LOG10 = "LOG10";
  e.EXP = "EXP";
  e.POW10 = "POW10";
})(L || (L = {}));
(function (e) {
  e.SIN = "SIN";
  e.COS = "COS";
  e.TAN = "TAN";
  e.ASIN = "ASIN";
  e.ACOS = "ACOS";
  e.ATAN = "ATAN";
})(P || (P = {}));
(function (e) {
  e.ROUND = "ROUND";
  e.CEIL = "CEIL";
  e.FLOOR = "FLOOR";
})(B || (B = {}));
(function (e) {
  e.EQUAL = "EQ";
  e.UNEQUAL = "NEQ";
  e.LESS_THAN = "LT";
  e.LESS_THAN_OR_EQUAL = "LTE";
  e.GREATER_THAN = "GT";
  e.GREATER_THAN_OR_EQUAL = "GTE";
})(F || (F = {}));
var re = require("./173");
function oe(e) {
  e.insertBlockProfile("procedures_2_param_block", {
    type: "procedures_2_param_block",
    message0: "%1",
    args0: [{
      type: "field_label_serializable",
      name: "param",
      text: "x"
    }],
    output: !0,
    colour: "%{BKY_PARAM_BLOCK_COLOR}",
    extensions: ["param_block"]
  });
}
function ie(e) {
  e.insertBlockXML(re.PROCEDURE_BLOCK_TYPES.DEF, "", !0);
  e.insertBlockXML(re.PROCEDURE_BLOCK_TYPES.CALL_RETURN, "", !0);
  e.insertBlockXML(re.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, "", !0);
}
function ae(e) {
  function t(t, n, r) {
    var o = n.blocks[r];
    var i = e.getDynamicValue("__CURRENT_SCREEN_ID__");
    var a = e.getFieldValue(o, "NAME") || "";
    var s = Object(_.f)(a, i);
    var c = Object.keys(o.shadows).filter(function (e) {
      return e.startsWith("ARG");
    }).map(function (t) {
      return e.valueToCode(n, r, t, e.ORDER_ATOMIC);
    });
    return Object(_.l)("(await Coco.tryExecute(".concat(["".concat(s), JSON.stringify({
      functionName: s,
      screenId: i
    })].concat(Object(h.a)(c)).join(", "), "))"), o, e, !0, !0);
  }
  e.insertBlockSnippetGenerator("procedures_2_param_block", function (t, n) {
    var r = t.blocks[n];
    return e.getFieldValue(r, "param") || "";
  });
  e.insertBlockSnippetGenerator(re.PROCEDURE_BLOCK_TYPES.DEF, function (t, n) {
    var r = t.blocks[n];
    var o = e.getDynamicValue("__CURRENT_SCREEN_ID__");
    var i = e.getFieldValue(r, "NAME") || "";
    var a = Object.keys(r.shadows).filter(function (e) {
      return e.startsWith("PARAMS");
    }).map(function (r) {
      return e.valueToCode(t, n, r, e.ORDER_ATOMIC);
    });
    e.setDynamicValue("__DEFINING_PROCEDURE__", "true");
    var s = e.statementToCode(t, n, "STACK");
    e.deleteDynamicValue("__DEFINING_PROCEDURE__");
    return "async function ".concat(Object(_.f)(i, o), "(").concat(a.join(", "), ") {\n").concat(s, "}\n");
  });
  e.insertBlockSnippetGenerator(re.PROCEDURE_BLOCK_TYPES.RETURN, function (t, n) {
    var r = t.blocks[n];
    return "return /* blockId=".concat(n, ";blockType=").concat(re.PROCEDURE_BLOCK_TYPES.RETURN, " */ ").concat(Object.keys(r.shadows).length + Object.keys(r.fields).length > 2 ? e.valueToCode(t, n, "VALUE", e.ORDER_NONE) : "", ";\n");
  });
  e.insertBlockSnippetGenerator(re.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, function (e, n) {
    return t(re.PROCEDURE_BLOCK_TYPES.CALL_NORETURN, e, n) + ";\n";
  });
  e.insertBlockSnippetGenerator(re.PROCEDURE_BLOCK_TYPES.CALL_RETURN, function (n, r) {
    return [t(re.PROCEDURE_BLOCK_TYPES.CALL_RETURN, n, r), e.ORDER_FUNCTION_CALL];
  });
  e.insertBlockSnippetGenerator(re.PROCEDURE_BLOCK_TYPES.PARAM, function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "param_name");
    return [o ? "".concat(o, " /* blockId=").concat(n, ";blockType=").concat(re.PROCEDURE_BLOCK_TYPES.PARAM, " */") : "", e.ORDER_ATOMIC];
  });
  e.insertBlockSnippetGenerator(re.PROCEDURE_BLOCK_TYPES.PARAM_ON_BLOCK, function (t, n) {
    var r = t.blocks[n];
    return [e.getFieldValue(r, "param_name") || "", e.ORDER_ATOMIC];
  });
}
function se(e, t) {
  e.insertBlockProfile("date_get_current_date", {
    type: "date_get_current_date",
    message0: "%{BKY_DATE_GET_CURRENT_DATE}",
    args0: [{
      type: "field_coco_dropdown",
      name: "DATE_TYPE",
      custom: !0,
      options: function () {
        return [[t.Msg.DATE_CURRENT_TIME, "time"], [t.Msg.DATE_CURRENT_YEAR, "year"], [t.Msg.DATE_CURRENT_MONTH, "month"], [t.Msg.DATE_CURRENT_DATE, "date"], [t.Msg.DATE_CURRENT_DAY_NAME, "dayName"], [t.Msg.DATE_CURRENT_DAY_NUM, "day"], [t.Msg.DATE_CURRENT_HOUR, "hour"], [t.Msg.DATE_CURRENT_MINUTE, "minute"], [t.Msg.DATE_CURRENT_SECOND, "second"]];
      }
    }],
    output: ["Number", "String"],
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0,
    tooltip: "%{BKY_DATE_GET_CURRENT_DATE_TOOLTIP}"
  });
  e.insertBlockProfile("date_check_date_is_equal", {
    type: "date_check_date_is_equal",
    message0: "%{BKY_DATE_CHECK_DATE_IS_EQUAL}",
    args0: [{
      type: "input_value",
      name: "DATE_A",
      check: "String"
    }, {
      type: "input_value",
      name: "DATE_B",
      check: "String"
    }],
    output: "Boolean",
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0
  });
  e.insertBlockProfile("date_get_date_minus_operation", {
    type: "date_get_date_minus_operation",
    message0: "%{BKY_DATE_GET_DATE_MINUS_OPERATION}",
    args0: [{
      type: "input_value",
      name: "DATE_A",
      check: "String"
    }, {
      type: "input_value",
      name: "DATE_B",
      check: "String"
    }, {
      type: "field_coco_dropdown",
      name: "OPERATION_TYPE",
      custom: !0,
      options: [["%{BKY_DAYS}", "days"], ["%{BKY_YEAR}", "year"], ["%{BKY_MONTH}", "month"], ["%{BKY_HOUR}", "hour"], ["%{BKY_MINUTE}", "minute"], ["%{BKY_SECOND}", "second"]]
    }],
    output: "Number",
    colour: "%{BKY_BLUE_6}",
    inputsInline: !0
  });
}
function ce(e) {
  e.insertBlockSnippetGenerator("date_get_current_date", function (t, n) {
    var r = t.blocks[n];
    switch (e.getFieldValue(r, "DATE_TYPE")) {
      case "time":
        return Object(_.s)("getCurrentFormatDateTime");
      case "year":
        return Object(_.s)("getCurrentYear");
      case "month":
        return Object(_.s)("getCurrentMonth");
      case "date":
        return Object(_.s)("getCurrentDate");
      case "dayName":
        return Object(_.s)("getCurrentDayName");
      case "day":
        return Object(_.s)("getCurrentDay");
      case "hour":
        return Object(_.s)("getCurrentHour");
      case "minute":
        return Object(_.s)("getCurrentMinute");
      case "second":
        return Object(_.s)("getCurrentSecond");
      default:
        return "";
    }
  });
  e.insertBlockSnippetGenerator("date_check_date_is_equal", function (t, n) {
    var r = e.valueToCode(t, n, "DATE_A", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "DATE_B", e.ORDER_FUNCTION_CALL);
    return r && o ? Object(_.s)("checkDateIsEqual", [r, o]) : "";
  });
  e.insertBlockSnippetGenerator("date_get_date_minus_operation", function (t, n) {
    var r = e.valueToCode(t, n, "DATE_A", e.ORDER_FUNCTION_CALL);
    var o = e.valueToCode(t, n, "DATE_B", e.ORDER_FUNCTION_CALL);
    var i = t.blocks[n];
    var a = e.getFieldValue(i, "OPERATION_TYPE");
    return a && r && o ? Object(_.s)("getDateOperation", [r, o, Object(_.o)(a)]) : "";
  });
}
var le = require("../36/index");
var ue = require("../121/index");
var de = require("../15");
var pe = require("../36/85");
function fe(e, t) {
  var n;
  if (Array.isArray(e)) {
    var r = typeof t;
    n = "number" === r || "string" === r || "boolean" === r && e.includes(r) ? r : e[0];
  } else {
    n = e;
  }
  var o = "<shadow type=\"text\">\n    <field name=\"TEXT\">".concat(t, "</field>\n  </shadow>");
  switch (n) {
    case "number":
      o = "<shadow type=\"math_number\">\n      <field name=\"NUM\">".concat(t, "</field>\n    </shadow>");
      break;
    case "boolean":
      o = "<shadow type=\"widget_boolean\">\n      <field name=\"BOOL\">".concat(t ? "TRUE" : "FALSE", "</field>\n    </shadow>");
      break;
    case "color":
      o = "<shadow type=\"color_picker\">\n      <field name=\"COLOR_PALETTE\">".concat(Object(de.i)(t) ? "#ffffff" : t, "</field>\n    </shadow>");
      break;
    case "image":
      o = "<shadow type=\"image_file_list_dropdown\">\n        <field name=\"IMAGE_FILE_ID\">".concat(g.h, "</field>\n      </shadow>");
      break;
    case "icon":
      o = "<shadow type=\"icon_file_list_dropdown\">\n          <field name=\"ICON_FILE_ID\">".concat(g.h, "</field>\n        </shadow>");
      break;
    case "multilineString":
      o = "<shadow type=\"text_multiline\">\n        <field name=\"TEXT\">".concat(t, "</field>\n      </shadow>");
      break;
    case "richTextString":
      o = "<shadow type=\"text_rich_text\">\n          <field name=\"TEXT\">".concat(function (e) {
        var t = {
          "&": "&amp;",
          "\"": "&quot;",
          "'": "&apos;",
          "<": "&lt;",
          ">": "&gt;"
        };
        return e.replace(/[&"'<>]/g, function (e) {
          return t[e];
        });
      }(t), "</field>\n        </shadow>");
  }
  return o;
}
function he(e, t) {
  return t.map(function (t) {
    var n = Object(pe.a)(e, t.label);
    if (void 0 === n) {
      n = t.label;
    }
    return t.image ? [n, String(t.value), {
      src: t.image,
      width: 30,
      height: 30,
      margin_right: 4,
      is_hide: t.isHideFieldImage
    }] : [n, String(t.value)];
  });
}
var me = require("./541");
var ge = require("./652");
function _e(e, t) {
  !function (e, t) {
    var n = {
      event: "event",
      widgetType: "",
      updateShape_: function () {
        var e = this;
        var n = Object(le.h)(this.widgetType, this.event);
        if (!n) {
          console.error("WIDGET_EVENT_MUTATOR getWidgetEvent error", this.widgetType, this.event);
          this.append_statement_input("DO", void 0);
          this.set_disabled(!0);
          this.set_field_value(t.Msg.INVALID_BLOCK, "EVENT");
          return void this.set_colour("#abafb6");
        }
        this.set_disabled(!1);
        var r = n.label;
        var o = n.params;
        var i = n.subTypes;
        var a = n.tooltip;
        var s = n.blockOptions;
        var c = n.key;
        var l = Object(pe.a)(this.widgetType, r);
        if (this.isAnyWidget) {
          var u;
          var d = "任意" + Object(le.k)(this.widgetType);
          if (!(null === (u = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === u)) {
            u.append_field(d);
          }
        } else {
          var p;
          var f = new ue.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: !0,
            options: function () {
              return Object(O.c)().getWidgetListByType(e.widgetType);
            }
          });
          if (!(null === (p = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === p)) {
            p.append_field(f, "WIDGET_ID");
          }
        }
        if (a) {
          var h = Object(pe.a)(this.widgetType, a);
          this.set_tooltip(h);
        }
        if (null === s || void 0 === s ? void 0 : s.icon) {
          var m = this.inputList[0].fieldRow[0];
          if (!m || "FieldIcon" !== m.field_type) {
            return;
          }
          m.set_value(t.utils.replace_message_references(s.icon));
        }
        var g = Object(le.i)(this.widgetType, c);
        this.append_statement_input("DO", void 0, g);
        if (i) {
          this.set_field_value(l, "EVENT");
          i.forEach(function (t) {
            var n = t.key;
            var r = t.dropdown;
            var o = "PARAM_".concat(n);
            var i = new ue.a({
              type: "field_coco_dropdown",
              name: o,
              custom: !0,
              options: he(e.widgetType, r)
            });
            e.append_dummy_input("", "DO").append_field(i, o);
          });
        } else {
          this.set_field_value(l + t.Msg.WIDGET_EVENT_SUFFIX, "EVENT");
        }
        o.forEach(function (t) {
          var n = t.key;
          var r = t.label;
          var o = t.dropdown;
          var i = "PARAM_".concat(n);
          var a = Object(pe.a)(e.widgetType, r);
          if (o) {
            var s = new ue.a({
              type: "field_coco_dropdown",
              name: i,
              custom: !0,
              options: he(e.widgetType, o)
            });
            var c = e.append_dummy_input("", "DO");
            if (a) {
              c.append_field(a, "".concat(i, "_LABEL"));
            }
            c.append_field(s, i);
          } else {
            e.append_shadow_input(i, "<shadow type=\"widget_event_param\">\n              <field name=\"PARAM_NAME\">".concat(a, "</field>\n              <mutation widget_type=\"").concat(e.widgetType, "\" event=\"").concat(e.event, "\" param=\"").concat(n, "\"></mutation>\n            </shadow>"), "DO");
          }
        });
        if (this.isAnyWidget) {
          var _ = le.a;
          var v = "PARAM_".concat(_);
          var b = le.b;
          this.append_shadow_input(v, "<shadow type=\"widget_event_param\">\n          <field name=\"PARAM_NAME\">".concat(b, "</field>\n          <mutation widget_type=\"").concat(this.widgetType, "\" event=\"").concat(this.event, "\" param=\"").concat(_, "\"></mutation>\n        </shadow>"), "DO");
        }
      },
      domToMutation: function (e) {
        this.event = e.getAttribute("event") || this.event;
        this.widgetType = e.getAttribute("widget_type") || this.widgetType;
        this.isAnyWidget = "true" === e.getAttribute("is_any_widget");
        this.updateShape_();
      },
      mutationToDom: function () {
        var e = document.createElement("mutation");
        e.setAttribute("event", this.event);
        e.setAttribute("widget_type", this.widgetType);
        e.setAttribute("is_any_widget", String(this.isAnyWidget));
        return e;
      }
    };
    var r = {
      param: "",
      event: "",
      widgetType: "",
      domToMutation: function (e) {
        var t = this;
        this.param = e.getAttribute("param") || this.param;
        this.event = e.getAttribute("event") || this.event;
        this.widgetType = e.getAttribute("widget_type") || this.widgetType;
        var n = Object(le.h)(this.widgetType, this.event);
        if (this.widgetType || this.event) {
          if (!n) {
            console.error("WIDGET_EVENT_PARAM_MUTATOR getWidgetEvent error", this.widgetType, this.event, this.param);
            this.set_output(!0);
            return void this.set_disabled(!0);
          }
          this.set_disabled(!1);
          var r = Object(le.i)(this.widgetType, this.event);
          if (this.param === le.a) {
            this.set_output(!0, "string", r);
          } else {
            var o = n.params.find(function (e) {
              return e.key === t.param;
            });
            if (!o) {
              return void console.error("WIDGET_EVENT_PARAM_MUTATOR get param error", this.widgetType, this.event, this.param);
            }
            var i = o.valueType;
            var a = Object(le.g)(i);
            this.set_output(!0, a, r);
          }
        } else {
          this.set_output(!0);
        }
      },
      mutationToDom: function () {
        var e = document.createElement("mutation");
        e.setAttribute("param", this.param);
        e.setAttribute("event", this.event);
        e.setAttribute("widget_type", this.widgetType);
        return e;
      }
    };
    t.extensions.register_mutator("widget_event_mutator", n);
    t.extensions.register_mutator("widget_event_param_mutator", r);
    t.define_blocks_with_json_array([{
      type: "widget_event",
      message0: "%{BKY_WIDGET_EVENT_MSG}",
      args0: [Object(_.e)("%{BKY_BLOCK_TAB_ICON}", !0), {
        type: "input_dummy",
        name: "WIDGET_ID_CONTAINER"
      }, {
        type: "field_label",
        name: "EVENT",
        text: ""
      }],
      colour: "%{BKY_EVENTS_HUE}",
      inputsInline: !0,
      mutator: "widget_event_mutator"
    }]);
    t.define_blocks_with_json_array([{
      type: "widget_event_param",
      message0: "%{BKY_WIDGET_EVENT_PARAM_MSG}",
      args0: [{
        type: "field_label_serializable",
        name: "PARAM_NAME",
        text: ""
      }],
      inputsInline: !0,
      colour: "%{BKY_PARAM_BLOCK_COLOR}",
      mutator: "widget_event_param_mutator",
      extensions: ["param_block"]
    }]);
  }(0, t);
  (function (e, t) {
    var n = {
      property: "",
      widgetType: "",
      updateShape_: function () {
        var e;
        var n = this;
        var r = Object(le.l)(this.widgetType, this.property);
        if (!r) {
          console.error("WIDGET_GET_MUTATOR getWidgetProperty error", this.widgetType, this.property);
          this.set_disabled(!0);
          this.set_output(!0);
          this.set_field_value(t.Msg.INVALID_BLOCK, "PROPERTY");
          return void this.set_colour("#abafb6");
        }
        this.set_disabled(!1);
        var o;
        var i;
        var a = r.label;
        var s = r.valueType;
        var c = r.tooltip;
        var l = r.blockOptions;
        var u = void 0 === l ? {} : l;
        var d = Object(pe.a)(this.widgetType, a);
        this.set_field_value(t.Msg.WIDGET_OF, "PROPERTY");
        if (this.isAnyWidget) {
          var p;
          var f = Object(le.k)(this.widgetType);
          if (!(null === (p = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === p)) {
            p.append_field(f);
          }
          this.append_shadow_input("WIDGET_ID", "<empty type=\"widget_any_id\"></empty>", "PROPERTY");
        } else {
          var h;
          var m = new ue.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: !0,
            options: function () {
              return Object(O.c)().getWidgetListByType(n.widgetType);
            }
          });
          if (!(null === (h = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === h)) {
            h.append_field(m, "WIDGET_ID");
          }
        }
        if ("object" === typeof u.getter && (null === (i = o = u.getter.keys) || void 0 === i ? void 0 : i.length)) {
          var g = [];
          o.forEach(function (e) {
            var t = Object(le.l)(n.widgetType, e);
            if (t) {
              var r = Object(pe.a)(n.widgetType, t.label);
              g.push([r, e]);
            } else {
              console.error("WIDGET_GET_MUTATOR getWidgetProperty error", n.widgetType, e);
            }
          });
          this.append_dummy_input().append_field(new ue.a({
            type: "field_coco_dropdown",
            name: "PROPERTY_KEY",
            custom: !0,
            options: function () {
              return g;
            }
          }), "PROPERTY_KEY");
          if (d) {
            this.append_dummy_input().append_field("".concat(d));
          }
        }
        switch (r.key) {
          case "__position":
            this.append_dummy_input().append_field(new ue.a({
              type: "field_coco_dropdown",
              name: "POSITION_TYPE",
              custom: !0,
              options: function () {
                return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]];
              }
            }), "POSITION_TYPE");
            break;
          case "__opacity":
            this.set_field_value("".concat(t.Msg.WIDGET_OF, " ").concat(t.Msg.WIDGET_OPACITY), "PROPERTY");
            break;
          case "__visible":
            this.set_field_value(t.Msg.WIDGET_VISIBLE, "PROPERTY");
            break;
          case "__disabled":
            this.set_field_value(t.Msg.WIDGET_DISABLED, "PROPERTY");
            break;
          default:
            if (!(null === (e = o) || void 0 === e ? void 0 : e.length)) {
              this.set_field_value("".concat("boolean" === s ? "" : t.Msg.WIDGET_OF, " ").concat(d), "PROPERTY");
            }
        }
        var _ = Object(le.g)(s);
        this.set_output(!0, _);
        if (c) {
          var v = Object(pe.a)(this.widgetType, c);
          this.set_tooltip(v);
        }
      },
      domToMutation: function (e) {
        this.property = e.getAttribute("property") || this.property;
        this.widgetType = e.getAttribute("widget_type") || this.widgetType;
        this.isAnyWidget = "true" === e.getAttribute("is_any_widget");
        this.updateShape_();
      },
      mutationToDom: function () {
        var e = document.createElement("mutation");
        e.setAttribute("property", this.property);
        e.setAttribute("widget_type", this.widgetType);
        e.setAttribute("is_any_widget", String(this.isAnyWidget));
        return e;
      }
    };
    t.extensions.register_mutator("widget_get_mutator", n);
    t.define_blocks_with_json_array([{
      type: "widget_get",
      message0: "%{BKY_WIDGET_GET_MSG}",
      args0: [{
        type: "input_dummy",
        name: "WIDGET_ID_CONTAINER"
      }, {
        type: "field_label",
        name: "PROPERTY",
        text: "property"
      }],
      output: ["String"],
      colour: "%{BKY_APPEARANCE_HUE}",
      inputsInline: !0,
      mutator: "widget_get_mutator"
    }]);
  })(0, t);
  (function (e, t) {
    var n = {
      property: "property",
      widgetType: "",
      updateShape_: function () {
        var e;
        var n = this;
        var r = Object(le.l)(this.widgetType, this.property);
        if (!r) {
          console.error("WIDGET_SET_MUTATOR getWidgetProperty error", this.widgetType, this.property);
          this.set_disabled(!0);
          this.set_field_value(t.Msg.INVALID_BLOCK, "PROPERTY");
          return void this.set_colour("#abafb6");
        }
        this.set_disabled(!1);
        var o;
        var i;
        var a;
        var s;
        var c;
        var l = r.valueType;
        var u = r.defaultValue;
        var d = r.label;
        var p = r.tooltip;
        var f = r.checkType;
        var h = r.dropdown;
        var g = r.validators;
        var _ = r.blockOptions;
        var v = void 0 === _ ? {} : _;
        var b = Object(pe.a)(this.widgetType, d);
        var y = !1;
        if (g && "number" === l) {
          var E = g;
          var w = E.isInteger;
          y = !!w;
          o = Object(le.p)(E);
          i = Object(le.n)(E);
        }
        if (!("__position" !== r.key && "__size" !== r.key)) {
          y = !0;
        }
        if ("__visible" !== r.key && "__disabled" !== r.key) {
          if (!(null === (a = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === a)) {
            a.insert_field_at(0, t.Msg.WIDGET_SET);
          }
        }
        if (this.isAnyWidget) {
          var C;
          var T = Object(le.k)(this.widgetType);
          if (!(null === (C = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === C)) {
            C.append_field(T);
          }
          this.append_shadow_input("WIDGET_ID", "<empty type=\"widget_any_id\"></empty>", "PROPERTY");
        } else {
          var S;
          var I = new ue.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: !0,
            options: function () {
              return Object(O.c)().getWidgetListByType(n.widgetType);
            }
          });
          if (!(null === (S = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === S)) {
            S.append_field(I, "WIDGET_ID");
          }
        }
        if ("object" === typeof v.setter && (null === (c = s = v.setter.keys) || void 0 === c ? void 0 : c.length)) {
          var A = [];
          s.forEach(function (e, t) {
            var r = Object(le.l)(n.widgetType, e);
            if (r) {
              if (0 === t && "number" === r.valueType) {
                if (r.validators) {
                  i = Object(le.n)(r.validators);
                  o = Object(le.p)(r.validators);
                }
                if (!(void 0 !== o || "__width" !== r.key && "__height" !== r.key)) {
                  o = 0;
                }
              }
              var a = Object(pe.a)(n.widgetType, r.label);
              A.push([a, e]);
            } else {
              console.error("WIDGET_GET_MUTATOR getWidgetProperty error", n.widgetType, e);
            }
          });
          this.set_field_value(t.Msg.WIDGET_OF, "PROPERTY");
          this.append_dummy_input().append_field(new ue.a({
            type: "field_coco_dropdown",
            name: "PROPERTY_KEY",
            custom: !0,
            options: function () {
              return A;
            },
            optOnchange: function (e) {
              var t = Object(le.l)(n.widgetType, e);
              if (t) {
                var r;
                if ("color" === t.valueType) {
                  r = "COLOR";
                }
                var o;
                var i;
                var a = n.get_shadow_field("VALUE", r);
                if (a) {
                  a.set_value(String(t.defaultValue));
                  if ("number" === t.valueType) {
                    if (t.validators) {
                      o = Object(le.p)(t.validators);
                      i = Object(le.n)(t.validators);
                    }
                    if (!(void 0 !== o || "__width" !== t.key && "__height" !== t.key)) {
                      o = 0;
                    }
                    a.set_constraints(o, i, y ? 1 : void 0);
                  }
                }
              }
            }
          }), "PROPERTY_KEY");
          var j = b ? "".concat(b, " ").concat(t.Msg.WIDGET_SET_TO) : t.Msg.WIDGET_SET_TO;
          this.append_dummy_input().append_field(j);
        }
        switch (r.key) {
          case "__position":
            this.set_field_value(t.Msg.WIDGET_OF, "PROPERTY");
            this.append_dummy_input().append_field(new ue.a({
              type: "field_coco_dropdown",
              name: "POSITION_TYPE",
              custom: !0,
              options: function () {
                return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]];
              }
            }), "POSITION_TYPE");
            this.append_dummy_input().append_field(t.Msg.WIDGET_SET_TO);
            break;
          case "__opacity":
            this.set_field_value("".concat(t.Msg.WIDGET_OF, " ").concat(t.Msg.WIDGET_OPACITY, " ").concat(t.Msg.WIDGET_SET_TO), "PROPERTY");
            break;
          case "__visible":
            this.append_dummy_input("", 0).append_field(new ue.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: !0,
              options: function () {
                return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]];
              }
            }), "VALUE");
            this.inputList.forEach(function (e) {
              if (e.get_field("PROPERTY")) {
                e.remove_field("PROPERTY");
              }
            });
            break;
          case "__disabled":
            this.append_dummy_input("", 0).append_field(new ue.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: !0,
              options: function () {
                return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]];
              }
            }), "VALUE");
            this.inputList.forEach(function (e) {
              if (e.get_field("PROPERTY")) {
                e.remove_field("PROPERTY");
              }
            });
            break;
          default:
            if (!(null === (e = s) || void 0 === e ? void 0 : e.length)) {
              this.set_field_value("".concat(t.Msg.WIDGET_OF, " ").concat(b, " ").concat(t.Msg.WIDGET_SET_TO), "PROPERTY");
            }
        }
        var N = Object(le.f)(l, f);
        if ("__visible" !== r.key && "__disabled" !== r.key) {
          if (h) {
            var R = new ue.a({
              type: "field_coco_dropdown",
              name: "VALUE",
              custom: !0,
              options: he(this.widgetType, h)
            });
            R.set_value(String(u));
            this.append_dummy_input().append_field(R, "VALUE");
          } else {
            var k = "";
            if ("string" === l) {
              k = Object(pe.a)(this.widgetType, String(u));
            }
            var x = fe(l, k || u);
            this.append_shadow_input("VALUE", x).set_check(N);
          }
        }
        if ("number" === l && (g || "__position" === r.key || "__size" === r.key)) {
          var D = this.get_shadow_field("VALUE");
          D.set_constraints(o, i, y ? 1 : void 0);
          if ("__opacity" === r.key) {
            D.set_controller_option({
              type: m.I.ControllerType.SLIDER,
              left_text: t.Msg["opacity.invisible"],
              right_text: t.Msg["opacity.visible"]
            });
          }
        }
        if (p) {
          var M = Object(pe.a)(this.widgetType, p);
          this.set_tooltip(M);
        }
      },
      domToMutation: function (e) {
        this.property = e.getAttribute("property") || this.property;
        this.widgetType = e.getAttribute("widget_type") || this.widgetType;
        this.isAnyWidget = "true" === e.getAttribute("is_any_widget");
        this.updateShape_();
      },
      mutationToDom: function () {
        var e = document.createElement("mutation");
        e.setAttribute("property", this.property);
        e.setAttribute("widget_type", this.widgetType);
        e.setAttribute("is_any_widget", String(this.isAnyWidget));
        return e;
      }
    };
    t.extensions.register_mutator("widget_set_mutator", n);
    t.define_blocks_with_json_array([{
      type: "widget_set",
      message0: "%{BKY_WIDGET_SET_MSG}",
      args0: [{
        type: "input_dummy",
        name: "WIDGET_ID_CONTAINER"
      }, {
        type: "field_label",
        name: "PROPERTY",
        text: "property"
      }],
      previousStatement: !0,
      nextStatement: !0,
      inputsInline: !0,
      colour: "%{BKY_APPEARANCE_HUE}",
      mutator: "widget_set_mutator"
    }]);
  })(0, t);
  (function (e, t) {
    var n = {
      method: "method",
      widgetType: "",
      isAnyWidget: !1,
      updateShape_: function () {
        var e = this;
        var n = Object(le.j)(this.widgetType, this.method);
        if (!n) {
          console.error("WIDGET_METHOD_MUTATOR getWidgetMethod error", this.widgetType, this.method);
          this.set_disabled(!0);
          this.append_dummy_input().append_field(t.Msg.INVALID_BLOCK, "METHOD");
          return void this.set_colour("#abafb6");
        }
        this.set_disabled(!1);
        var r = this.get_input("WIDGET_ID_CONTAINER");
        if (this.isAnyWidget) {
          var o = Object(le.k)(this.widgetType);
          if (!(null === r || void 0 === r)) {
            r.append_field(o);
          }
          this.append_shadow_input("WIDGET_ID", "<empty type=\"widget_any_id\"></empty>");
          if ("__setVisible" === n.key) {
            var i = new ue.a({
              type: "field_coco_dropdown",
              name: "DISPLAY",
              custom: !0,
              options: function () {
                return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]];
              }
            });
            this.append_dummy_input().append_field(i, "DISPLAY");
          }
          if ("__setDisabled" === n.key) {
            var a = new ue.a({
              type: "field_coco_dropdown",
              name: "DISABLED",
              custom: !0,
              options: function () {
                return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]];
              }
            });
            this.append_dummy_input().append_field(a, "DISABLED");
          }
        } else {
          var s = new ue.a({
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: !0,
            options: function () {
              return Object(O.c)().getWidgetListByType(e.widgetType);
            }
          });
          if (!(null === r || void 0 === r)) {
            r.append_field(s, "WIDGET_ID");
          }
        }
        var c;
        var l = n.label;
        var u = n.params;
        var d = n.tooltip;
        var p = n.blockOptions;
        var f = void 0 === p ? {} : p;
        var h = n.valueType;
        if (!1 !== f.callMethodLabel) {
          var g;
          var _ = (null === (g = f.callMethodLabel) || void 0 === g ? void 0 : g.toString()) || "";
          var v = Object(pe.a)(this.widgetType, _) || t.Msg.WIDGET_METHOD_CALL_MSG;
          var b = new ge.FieldLabel({
            text: v
          });
          if (!(null === r || void 0 === r)) {
            r.insert_field_at(0, b);
          }
        }
        if (f.icon && (t.Msg[f.icon] ? c = t.Msg[f.icon] : f.icon.startsWith("https://") && (c = f.icon), c)) {
          var y = new me.FieldImage({
            src: c
          });
          this.append_dummy_input("ICON_CONTAINER", "WIDGET_ID_CONTAINER").append_field(y);
        }
        if (f.color) {
          this.set_colour(f.color);
        }
        if (h) {
          this.set_next_statement(!1);
          this.set_previous_statement(!1);
          var E = Object(le.g)(h);
          this.set_output(!0, E);
        }
        var w = Object(pe.a)(this.widgetType, l);
        if (w) {
          this.append_dummy_input().append_field(w, "METHOD");
        }
        if (d) {
          var C = Object(pe.a)(this.widgetType, d);
          this.set_tooltip(C);
        }
        if (!1 === f.inputsInline) {
          this.set_inputs_inline(f.inputsInline);
        }
        u.forEach(function (t) {
          var n = t.label;
          var r = t.labelAfter;
          var o = t.valueType;
          var i = t.checkType;
          var a = t.defaultValue;
          var s = t.key;
          var c = t.dropdown;
          var l = t.controller;
          var u = Object(pe.a)(e.widgetType, n);
          var d = "PARAM_".concat(s);
          if (c) {
            var p = new ue.a({
              type: "field_coco_dropdown",
              name: d,
              custom: !0,
              options: he(e.widgetType, c)
            });
            var f = e.append_dummy_input();
            if (u) {
              f.append_field(u, "".concat(d, "_LABEL"));
            }
            f.append_field(p, d);
          } else {
            var h = fe(o, a);
            var g = e.append_shadow_input(d, h);
            var _ = Object(le.f)(o, i);
            g.set_check(_);
            if (u) {
              g.insert_field_at(0, u, "".concat(d, "_LABEL"));
            }
            if ("number" === o && l) {
              var v = e.get_shadow_field(d);
              if (!(null === v || void 0 === v)) {
                v.set_constraints(l.min, l.max, 1);
              }
              if (l.leftText && l.rightText) {
                if (!(null === v || void 0 === v)) {
                  v.set_controller_option({
                    type: m.I.ControllerType.SLIDER,
                    left_text: l.leftText,
                    right_text: l.rightText
                  });
                }
              }
            }
          }
          if (r) {
            var b = Object(pe.a)(e.widgetType, r);
            e.append_dummy_input("").append_field(b, "".concat(d, "_LABEL_AFTER"));
          }
        });
      },
      domToMutation: function (e) {
        this.method = e.getAttribute("method") || this.method;
        this.widgetType = e.getAttribute("widget_type") || this.widgetType;
        this.isAnyWidget = "true" === e.getAttribute("is_any_widget");
        this.updateShape_();
      },
      mutationToDom: function () {
        var e = document.createElement("mutation");
        e.setAttribute("method", this.method);
        e.setAttribute("widget_type", this.widgetType);
        e.setAttribute("is_any_widget", String(this.isAnyWidget));
        return e;
      }
    };
    t.extensions.register_mutator("widget_method_mutator", n);
    t.define_blocks_with_json_array([{
      type: "widget_method",
      message0: "%{BKY_WIDGET_METHOD_MSG}",
      args0: [{
        type: "input_dummy",
        name: "WIDGET_ID_CONTAINER"
      }],
      previousStatement: !0,
      nextStatement: !0,
      inputsInline: !0,
      colour: "%{BKY_VARIABLES_HUE}",
      mutator: "widget_method_mutator"
    }]);
  })(0, t);
  var n = {
    property: "property",
    widgetType: "",
    updateShape_: function () {
      var e = this;
      var t = Object(le.l)(this.widgetType, this.property);
      if (t) {
        var n = t.defaultValue;
        var r = t.dropdown;
        if (r) {
          this.set_shadow(!0);
          var o = new ue.a({
            type: "field_coco_dropdown",
            name: "VALUE",
            custom: !0,
            options: function () {
              return he(e.widgetType, r);
            }
          });
          if (!this.get_field("VALUE")) {
            this.append_dummy_input("").append_field(o, "VALUE");
            o.set_value(String(n));
          }
        } else {
          console.error("WIDGET_DROPDOWN_MUTATOR dropdown is invalid", r);
        }
      } else {
        console.error("WIDGET_DROPDOWN_MUTATOR getWidgetProperty error", this.widgetType, this.property);
      }
    },
    domToMutation: function (e) {
      this.property = e.getAttribute("property") || this.property;
      this.widgetType = e.getAttribute("widget_type") || this.widgetType;
      this.updateShape_();
    },
    mutationToDom: function () {
      var e = document.createElement("mutation");
      e.setAttribute("property", this.property);
      e.setAttribute("widget_type", this.widgetType);
      return e;
    }
  };
  t.extensions.register_mutator("widget_dropdown_mutator", n);
  t.define_blocks_with_json_array([{
    type: "widget_color",
    message0: "%{BKY_WIDGET_COLOR_MSG}",
    args0: [{
      type: "field_colour",
      name: "COLOR",
      colour: "#ffffff"
    }],
    colour: "#ffffff",
    output: ["Color"]
  }]);
  t.define_blocks_with_json_array([{
    type: "widget_boolean",
    message0: "%{BKY_WIDGET_BOOLEAN_MSG}",
    args0: [{
      type: "field_coco_dropdown",
      name: "BOOL",
      custom: !0,
      options: [["%{BKY_WIDGET_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_WIDGET_BOOLEAN_FALSE}", "FALSE"]]
    }],
    output: "Boolean",
    colour: "%{BKY_LOGIC_HUE}"
  }]);
  t.define_blocks_with_json_array([{
    type: "widget_dropdown",
    message0: "",
    args0: [],
    output: ["String", "Boolean", "Number"],
    colour: "%{BKY_APPEARANCE_HUE}",
    mutator: "widget_dropdown_mutator"
  }]);
  t.define_blocks_with_json_array([{
    type: "widget_any_id",
    message0: "",
    args0: [],
    output: "String"
  }]);
}
function ve(e) {
  e.insertBlockSnippetGenerator("widget_get", function (t, n) {
    var r;
    var o = t.blocks[n];
    var i = o.mutation;
    var a = m.Blink.xml.text_to_dom(i);
    var s = a.getAttribute("property");
    var c = a.getAttribute("widget_type");
    var l = "true" === a.getAttribute("is_any_widget");
    if (!s || !c) {
      return "";
    }
    var u = e.getFieldValue(o, "WIDGET_ID") || "";
    u = Object(_.o)(u);
    if (l) {
      u = e.valueToCode(t, n, "WIDGET_ID", e.ORDER_FUNCTION_CALL);
    }
    var d = Object(le.l)(c, s);
    if (!d) {
      return "";
    }
    var p;
    var f = d.blockOptions;
    var h = void 0 === f ? {} : f;
    if ("object" === typeof h.getter && (null === (p = h.getter.keys) || void 0 === p ? void 0 : p.length)) {
      s = e.getFieldValue(o, "PROPERTY_KEY") || "";
      var g = Object(le.l)(c, s);
      if (!g) {
        return "";
      }
      h = g.blockOptions || {};
    }
    var v = e.getFieldValue(o, "POSITION_TYPE") || "";
    if ("__opacity" === s) {
      return Object(_.s)("getWidgetOpacity", [u]);
    }
    if ("__visible" === s) {
      return Object(_.s)("getWidgetVisible", [u]);
    }
    if ("__disabled" === s) {
      return Object(_.s)("getWidgetDisabled", [u]);
    }
    if ("__width" === s || "__height" === s) {
      var b = "__width" === s ? "getWidgetWidth" : "getWidgetHeight";
      return Object(_.s)(b, [u]);
    }
    if (v) {
      var y = "positionX" === v ? "getWidgetPositionX" : "getWidgetPositionY";
      return Object(_.s)(y, [u]);
    }
    return "string" === typeof (null === (r = h.getter) || void 0 === r ? void 0 : r.func) ? Object(_.s)(h.getter.func, [u, Object(_.o)(s)]) : Object(_.s)("getProperty", [u, Object(_.o)(s)], Object(le.q)(c));
  });
  e.insertBlockSnippetGenerator("widget_set", function (t, n) {
    var r;
    var o = t.blocks[n];
    var i = o.mutation;
    var a = m.Blink.xml.text_to_dom(i);
    var s = a.getAttribute("property");
    var c = a.getAttribute("widget_type");
    var l = "true" === a.getAttribute("is_any_widget");
    if (!s || !c) {
      return "";
    }
    var u = e.getFieldValue(o, "WIDGET_ID") || "";
    u = Object(_.o)(u);
    if (l) {
      u = e.valueToCode(t, n, "WIDGET_ID", e.ORDER_FUNCTION_CALL);
    }
    var d = Object(le.l)(c, s);
    if (!d) {
      return "";
    }
    var p;
    var f = d.blockOptions;
    var h = void 0 === f ? {} : f;
    if ("object" === typeof h.setter && (null === (p = h.setter.keys) || void 0 === p ? void 0 : p.length)) {
      s = e.getFieldValue(o, "PROPERTY_KEY") || "";
      var g = Object(le.l)(c, s);
      if (!g) {
        return "";
      }
      h = g.blockOptions || {};
    }
    var v = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL);
    if (d.dropdown) {
      v = Object(_.o)(e.getFieldValue(o, "VALUE") || "");
    }
    var b = e.getFieldValue(o, "POSITION_TYPE") || "";
    if ("__opacity" === s) {
      return Object(_.l)(Object(_.n)("setWidgetOpacity", [u, v]), o, e);
    }
    if ("__visible" === s) {
      var y = "show" === e.getFieldValue(o, "VALUE");
      return Object(_.l)(Object(_.n)("setWidgetVisible", [u, y]), o, e);
    }
    if ("__disabled" === s) {
      var E = "disabled" === e.getFieldValue(o, "VALUE");
      return Object(_.l)(Object(_.n)("setWidgetAttribute", [u, Object(_.o)("disabled"), E]), o, e);
    }
    if ("__width" === s || "__height" === s) {
      var O = "__width" === s ? "setWidgetWidth" : "setWidgetHeight";
      return Object(_.l)(Object(_.n)(O, [u, v]), o, e);
    }
    if (b) {
      var w = "positionX" === b ? "setWidgetPositionX" : "setWidgetPositionY";
      return Object(_.l)(Object(_.n)(w, [u, v]), o, e);
    }
    return "string" === typeof (null === (r = h.setter) || void 0 === r ? void 0 : r.func) ? Object(_.l)(Object(_.n)(h.setter.func, [u, v]), o, e) : Object(_.l)(Object(_.n)("setProperty", [u, Object(_.o)(s), v], void 0, void 0, Object(le.q)(c)), o, e);
  });
  e.insertBlockSnippetGenerator("widget_event", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "WIDGET_ID") || "";
    var i = r.mutation;
    var a = m.Blink.xml.text_to_dom(i);
    var s = a.getAttribute("event");
    var c = e.getDynamicValue("__CURRENT_SCREEN_ID__");
    var l = a.getAttribute("widget_type");
    var u = "true" === a.getAttribute("is_any_widget");
    if (!s || !l) {
      return "";
    }
    var d = Object(le.h)(l, s);
    if (!d) {
      return "";
    }
    var p = d.params;
    var f = d.subTypes;
    var h = [];
    if (!(null === f || void 0 === f)) {
      f.forEach(function (t) {
        s += e.getFieldValue(r, "PARAM_".concat(t.key)) || "";
      });
    }
    p.forEach(function (e) {
      h.push("".concat(_.a).concat(e.key));
    });
    if (u) {
      h.push("".concat(_.a).concat(le.a));
    }
    var g = e.statementToCode(t, n, "DO");
    return g ? Object(_.n)("onWidgetEvent", [Object(_.o)(l), Object(_.o)(s), u ? Object(_.o)(c) : Object(_.o)(o)], g, h, Object(le.q)(l)) : "";
  });
  e.insertBlockSnippetGenerator("widget_event_param", function (e, t) {
    var n = e.blocks[t].mutation;
    var r = m.Blink.xml.text_to_dom(n).getAttribute("param");
    return "".concat(_.a).concat(r);
  });
  e.insertBlockSnippetGenerator("widget_method", function (t, n) {
    var r = t.blocks[n];
    var o = r.mutation;
    var i = m.Blink.xml.text_to_dom(o);
    var a = i.getAttribute("method");
    var s = i.getAttribute("widget_type");
    var c = "true" === i.getAttribute("is_any_widget");
    if (!a || !s) {
      return "";
    }
    var l = Object(le.j)(s, a);
    if (!l) {
      return "";
    }
    var u = [];
    var d = e.getFieldValue(r, "WIDGET_ID") || "";
    if (c) {
      d = e.valueToCode(t, n, "WIDGET_ID", e.ORDER_FUNCTION_CALL);
      u.push(d);
    } else {
      u.push(Object(_.o)(d));
    }
    u.push(Object(_.o)(a));
    var p = l.params;
    var f = l.valueType;
    var h = [];
    p.forEach(function (o) {
      var i = o.key;
      var a = o.dropdown;
      var s = "PARAM_".concat(i);
      var c = "''";
      try {
        c = e.valueToCode(t, n, s, e.ORDER_FUNCTION_CALL) || "''";
      } catch (l) {
        console.error("widget_method valueToCode error", l);
      }
      if (a) {
        c = Object(_.o)(e.getFieldValue(r, s) || "");
      }
      u.push(c);
      h.push(c);
    });
    if ("__setVisible" === l.key) {
      var g = "show" === e.getFieldValue(r, "DISPLAY");
      return Object(_.l)(Object(_.n)("setWidgetVisible", [d, g]), r, e);
    }
    if ("__setDisabled" === l.key) {
      var v = "disabled" === e.getFieldValue(r, "DISABLED");
      return Object(_.l)(Object(_.n)("setWidgetAttribute", [d, Object(_.o)("disabled"), v]), r, e);
    }
    return f ? Object(_.l)(Object(_.r)("callMethod", u), r, e, !0, !0) : Object(_.l)(Object(_.j)("callMethod", u, void 0, void 0, Object(le.q)(s)), r, e);
  });
  e.insertBlockSnippetGenerator("widget_color", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "COLOR");
    return Object(_.o)(o);
  });
  e.insertBlockSnippetGenerator("color_picker", function (t, n) {
    var r;
    var o = t.blocks[n];
    var i = m.Blink.xml.text_to_dom(o.mutation);
    var a = function (r) {
      return e.valueToCode(t, n, r, e.ORDER_COMMA);
    };
    switch (Number(i.getAttribute("format"))) {
      case m.I.EColorFormat.ColorPalette:
        r = Object(_.s)("getColorHex", [Object(_.o)(i.getAttribute("color") || "")]);
        break;
      case m.I.EColorFormat.ColorString:
        r = Object(_.s)("getColorHex", [a("COLOR_STRING")]);
        break;
      case m.I.EColorFormat.HSVA:
        r = Object(_.s)("getColorHsva", [a("H"), a("S"), a("V"), a("A")]);
        break;
      case m.I.EColorFormat.RGBA:
        r = Object(_.s)("getColorRgba", [a("R"), a("G"), a("B"), a("A")]);
    }
    return r || "";
  });
  e.insertBlockSnippetGenerator("widget_boolean", function (t, n) {
    var r = t.blocks[n];
    return ["TRUE" === e.getFieldValue(r, "BOOL") ? "true" : "false", e.ORDER_ATOMIC];
  });
  e.insertBlockSnippetGenerator("widget_dropdown", function (t, n) {
    var r = t.blocks[n];
    var o = e.getFieldValue(r, "VALUE");
    return Object(_.o)(o);
  });
  e.insertBlockSnippetGenerator("widget_any_id", function (e, t) {
    return Object(_.o)("");
  });
}
var be = {
  "zh-CN": {
    PRESS: "点击",
    PRESS_IN: "按下",
    PRESS_OUT: "松开",
    PRESS_HOLD: "按住",
    SIZE: "尺寸大小",
    HUGE: "超大",
    LARGE: "大",
    MEDIUM: "中",
    SMALL: "小",
    TINY: "超小",
    INCREASE: "增加",
    DECREASE: "减少",
    SET: "设置",
    OF: "的",
    IMAGE: "图片",
    CONTENT: "文本内容",
    TEXT_CONTENT: "文本",
    TEXT_COLOR: "文本颜色",
    BACKGROUND_COLOR: "背景颜色",
    ALIGN: "对齐方式",
    LEFT_ALIGN: "居左",
    CENTER_ALIGN: "居中",
    RIGHT_ALIGN: "居右",
    TOP_ALIGN: "居上",
    BOTTOM_ALIGN: "居下",
    FONT_SIZE: "字号",
    HEIGHT: "高度",
    WIDTH: "宽度",
    POSITION_X: "X坐标",
    POSITION_Y: "Y坐标",
    TEXT: "文本",
    SHOW: "显示",
    HIDE: "隐藏",
    DISABLED: "禁用",
    ABLE: "启用",
    BRIGHTNESS: "亮度",
    ALPHA: "透明度",
    HUE: "色相",
    SATURATION: "饱和度",
    HORIZONTAL: "水平",
    HORIZONTAL_FLIPPED: "水平翻转",
    VERTICAL_FLIPPED: "垂直翻转",
    VERTICAL: "垂直",
    MOVE_TOP: "最上层",
    MOVE_BOTTOM: "最底层",
    MOVE_UP: "上一层",
    MOVE_DOWN: "下一层",
    "opacity.invisible": "透明",
    "opacity.visible": "不透明",
    INVALID_BLOCK: "无效积木：相关控件已被移除",
    COLOR: "颜色",
    MODE: "样式",
    ICON: "图标",
    SYSTEM: "系统",
    EVENT: "事件",
    CONTROL: "控制",
    PHONE: "功能",
    OPERATOR: "运算",
    PRIMITIVE: "变量",
    ARRAY: "列表",
    OBJECT: "字典",
    FUNCTION: "函数",
    STORAGE: "数据库",
    SENSE: "传感",
    COMPONENTS: "界面控件",
    INVISIBLE_COMPONENTS: "屏幕功能",
    GLOBAL_COMPONENTS: "全局功能",
    ANY_COMPONENTS: "任意控件",
    WHEN: "%1 当 %2 %3",
    REPEAT_FOREVER: "重复执行 %1 %2",
    REPEAT: "重复执行 %1 次 %2 %3",
    REPEAT_WHEN: "当 %1 重复执行 %2 %3",
    REPEAT_WHEN_TOOLTIP: "如果值为真(true)，则重复执行C口内的代码。\n如果值为假(false)，则结束重复执行。",
    BREAK: "退出循环",
    BREAK_TOOLTIP: "结束循环，执行重复执行下面的代码。",
    WAIT_SECS: "等待 %1 秒",
    SLEEP_UTIL: "保持等待直到%1",
    CONTINUE: "跳过此次循环，进入下次循环",
    CONSOLE_LOG: "在控制台打印 %1",
    NEW_CONSOLE_LOG: "在控制台 %1 %2",
    CONSOLE_ERROR: "在控制台报错 %1",
    TO_LOG: "打印",
    TO_ERROR: "报错",
    TO_WARNING: "预警",
    CONSOLE_LOG_DEFAULT_VALUE: "调试信息",
    CONSOLE_ERROR_DEFAULT_VALUE: "报错信息",
    CONTROLS_FOR: "重复执行 %1 从 %2 到 %3 前，间隔 %4",
    CONTROLS_FOR_TOOLTIP: "for循环积木。变量“数字”初始时为1，每次重复执行后增加1；直到“数字”等于10时，结束重复执行。",
    CONTROLS_FOR_CLOSED_RANGE: "重复执行 %1 从 %2 到 %3，间隔 %4",
    CONTROLS_FOR_CLOSED_RANGE_TOOLTIP: "for 循环积木。变量“数字”初始值为1，每次重复执行后增加1；当“数字”小于或者等于10时，执行开口里的语句",
    CONTROLS_NUMBER: "数字",
    VARIABLE: "变量",
    VARIABLES_GLOBAL: "全局变量 %1",
    VARIABLES_GET: "%1",
    VARIABLES_SET: "设置变量 %1 的值为 %2",
    CHANGE_VARIABLE: "将变量 %1 %2 %3",
    VARIABLES_CREATE: "创建变量 %1 为 %2",
    SHOW_HIDE_VARIABLE: "%1 变量 %2",
    LISTS_APPEND: "添加 %1 到 %2 末尾",
    INSERT_LISTS_ITEM_BY_INDEX: "插入 %3 到 %1 的第 %2 项",
    COPY_ARRAY: "复制 %1 到 %2",
    GET_ARRAY_LENGTH: "%1 的长度",
    GET_ARRAY_ITEM_INDEX: "%2 中第一个 %1 的位置",
    CHECK_ITEM_IN_ARRAY: "%1 中包含 %2",
    LIST: "列表",
    NTH: "第",
    LAST_ITEM: "最后一项",
    ALL_ITEM: "所有项",
    ITEM: "项",
    DELETE: "删除",
    REPLACE: "替换",
    IS: "为",
    REMOVE_ARRAY_ITEM: "删除 %1 %2",
    ARRAY_ITEM: "项",
    LISTS_REPLACE: "替换 %1 %2",
    ARRAY_CURRENT_ITEM: "当前项",
    ARRAY_FOREACH: "遍历 %1 取 %2，重复执行 %3 %4",
    OBJECT_GET_VALUE: "获取对象 %1 属性为 %2 的值",
    OBJECT_GET_VALUE_TOOLTIP: "获取对象中某个属性的值。比如对象A为：\n{\"province\":\"广东\",\"city\":\"深圳\",\"weather\":\"多云\"}\n那其属性为province的值为广东，属性为city的值为深圳，属性为weather的值为多云。",
    OBJECT_JSON_PARSE: "将文本 %1 解析为对象",
    OBJECT_JSON_PARSE_TOOLTIP: "将符合json结构的文本内容（比如HTTP客户端获得文本时的文本内容）转换成对象类型，嵌入到“获取对象？属性为（“”）的值”积木中，可以进一步获取对象中某个属性的值。",
    OBJECT_GET: "%1",
    OBJECT_SET_ITEM: "设置 %1 键 %2 的值为 %3",
    OBJECT_DELETE_ITEM: "删除 %1 中的键 %2",
    OBJECT_CLEAR: "清空 %1",
    OBJECT_LENGTH: "%1 键的总数",
    OBJECT_GET_ITEM: "%1 键 %2 的值",
    OBJECT_INCLUDE_KEY: "键 %2 存在于 %1",
    MATH_IS: "是",
    MATH_EVEN: "偶数",
    MATH_ODD: "奇数",
    MATH_PRIME: "质数",
    MATH_WHOLE: "整数",
    MATH_POSITIVE: "正数",
    MATH_NEGATIVE: "负数",
    MATH_ROUND_OPERATOR_ROUND: "四舍五入",
    MATH_ROUND_OPERATOR_CEIL: "向上舍入",
    MATH_ROUND_OPERATOR_FLOOR: "向下舍入",
    REMINDER_OPERATION: "%1 ÷ %2 的余数",
    RANDOM_NUM: "在 %1 到 %2 间随机整数",
    DIVISIBLE_BY: "%1 能被 %2 整除",
    CALCULATE: "数学运算 %1",
    TEXT_SELECT: "%1 的第 %2 到第 %3 个字符",
    TEXT_LENGTH: "%1 的长度",
    TEXT_CONTAIN: "%1 包含 %2",
    TEXT_SPLIT: "把 %1 按 %2 分开成列表",
    CONVERT_TYPE: "把 %1 转换为 %2 类型",
    NUMBER_TYPE: "数字",
    STRING_TYPE: "字符串",
    BOOLEAN_TYPE: "布尔值",
    TEXT_SLICE: "%1 的第 %2",
    OPERATORS_TEXT_SELECT_CHANGEABLE_TO: "到第",
    OPERATORS_TEXT_SELECT_CHANGEABLE_END: "个字符串",
    APP_ON_MOUNT: "%1 当打开应用时 %2 %3",
    APP_ON_SWITCH: "%1 当应用 %2 时 %3 %4",
    APP_ACTIVE: "返回前台",
    APP_BACKGROUND: "切到后台",
    BROADCAST_ON_RECEIVE: "%1 当 收到 广播 %2 时 %3 %4",
    BROADCAST_SEND: "发送广播 %1",
    BROADCAST_SEND_AND_WAIT: "发送广播 %1 并等待",
    BROADCAST_INPUT_TOOLTIP: "嵌入“字符串” ：按 “广播名称” 检索",
    SCREEN_ON_OPEN: "%1 当打开屏幕时",
    SCREEN_ON_OPEN_GET_PARAM: "%1 当打开屏幕时 %2 %3 %4",
    SCREEN_ON_PRESS: "%1 当屏幕被点击时 %2 %3 %4 %5",
    SCREEN_ON_PRESS_MSG0: "%1 当 屏幕 被 %2 时 %3 %4 %5 %6",
    SCREEN_UPDATE_BACKGROUND_COLOR: "设置 %1 的 背景颜色 为 %2",
    SCREEN_SET_BACKGROUND_IMAGE: "设置 %1 的 背景图片 为 %2",
    NEW_SCREEN_UPDATE_BACKGROUND_COLOR: "设置 屏幕 的 背景颜色 为 %1",
    NEW_SCREEN_SET_BACKGROUND_IMAGE: "设置 屏幕 的 背景图片 为 %1",
    SCREEN_GET_BACKGROUND_IMAGE: "%1 的 背景图片",
    SCREEN_NAVIGATE_TO: "切换到屏幕 %1",
    SCREEN_NAVIGATE_TO_BY_VALUE: "切换到屏幕 %1 并传值 %2",
    SCREEN_HEIGHT: "高度",
    SCREEN_WIDTH: "宽度",
    SCREEN_GET_COLOR: "%1 的 背景颜色",
    SCREEN_GET_SIZE: "%1 的 %2",
    NEW_SCREEN_GET_COLOR: "屏幕 的 背景颜色",
    NEW_SCREEN_GET_SIZE: "屏幕 的 %1",
    NEW_SCREEN_GET_BACKGROUND_IMAGE: "屏幕 的 背景图片",
    SCREEN_PREV: "上一屏",
    SCREEN_NEXT: "下一屏",
    SCREEN_PARAM: "参数",
    SCREEN_CHECK_IF_PRESSED: "屏幕 被 按住",
    SCREEN_INPUT_TOOLTIP: "嵌入“字符串”：按“屏幕名称”检索\n 嵌入“数字”：按“屏幕序号”检索",
    PHONE_VIBRATE: "手机振动 %1 秒",
    PHONE_BATTERY_LEVEL: "当前电量",
    BRIGHTNESS_SET_BRIGHTNESS: "设置屏幕亮度为 %1",
    BRIGHTNESS_GET_BRIGHTNESS: "当前屏幕亮度",
    BRIGHTNESS_SET_KEEP_SCREEN_ON: "设置屏幕是否保持常亮 %1",
    GYROSCOPE_ON_PHONE_SHAKE: "%1 当手机被摇晃时 %2 %3",
    GYROSCOPE_PHONE_GET_COMPASS: "指南针",
    GYROSCOPE_PHONE_GET_COMPASS_TOOLTIP: "手机设备顶部朝向。\n正北为 0\n正南为 180\n正西为 270\n正东为 90",
    GYROSCOPE_PHONE_GET_ORIENTATION_VALUE: "手机在 %1 方向的 %2",
    VOLUME_SENSOR_SET_DETECTION_STATE: "%1 环境音量传感器",
    VOLUME_SENSOR_GET_CURRENT_VALUE: "当前环境音量",
    ROTATION: "倾斜角度",
    GRAVITY: "加速度分量",
    TIME: "时间",
    YEAR: "年",
    MONTH: "月",
    DATE: "日",
    DAYS: "天数",
    DAY_NAME: "星期（文本）",
    DAY_NUM: "星期（数字）",
    HOUR: "小时",
    MINUTE: "分钟",
    SECOND: "秒",
    DATE_OBJECT: "日期",
    START: "开始",
    STOP: "停止",
    RESET: "重置",
    OPEN: "开启",
    CLOSE: "关闭",
    DATE_SET_TIMER_STATE: "%1 %2",
    DATE_TIMER: "%1",
    DATE_GET_CURRENT_DATE: "%1",
    DATE_GET_CURRENT_DATE_TOOLTIP: "电脑上运行时，获取的是电脑系统当前的时间。\n手机上运行时，获取的是手机系统当前的时间。",
    DATE_CURRENT_TIME: "当前 时间",
    DATE_CURRENT_YEAR: "当前 年",
    DATE_CURRENT_MONTH: "当前 月",
    DATE_CURRENT_DATE: "当前 日",
    DATE_CURRENT_DAY_NAME: "当前 星期（文本）",
    DATE_CURRENT_DAY_NUM: "当前 星期（数字）",
    DATE_CURRENT_HOUR: "当前 小时",
    DATE_CURRENT_MINUTE: "当前 分钟",
    DATE_CURRENT_SECOND: "当前 秒",
    DATE_CHECK_DATE_IS_EQUAL: "%1 与 %2 是否相等",
    DATE_GET_DATE_MINUS_OPERATION: "%1 减去 %2 的 %3",
    DATE_PICKER_ON_SELECT_DONE: "%1 当 %2 完成选择时 %3 %4 %5 %6 %7",
    DATE_PICKER_OPEN_SELECT_DIALOG: "调用 %1 进行选择",
    DATE_PICKER_GET_DATE: "%1 的日期",
    TIME_PICKER_ON_SELECT_DONE: "%1 当 %2 完成选择时 %3 %4 %5 %6 %7",
    TIME_PICKER_OPEN_SELECT_DIALOG: "调用 %1 进行选择",
    TIME_PICKER_GET_TIME: "%1 的时间",
    HTTP_CLIENT_ON_SUCCESS: "%1 当 %2 获得文本时 %3 %4 %5 %6",
    HTTP_CLIENT_ON_SUCCESS_TOOLTIP: "请求成功时触发该事件，返回内容存储在“文本内容”积木中。",
    HTTP_CLIENT_ON_ERROR: "%1 当 %2 出错时 %3 %4 %5 %6",
    HTTP_CLIENT_ON_ERROR_TOOLTIP: "请求失败时触发该事件，错误原因存储在“错误消息”积木中。",
    HTTP_CLIENT_SET_URL: "设置 %1 的网址为 %2",
    HTTP_CLIENT_SET_HEADER: "设置 %1 的请求头为 %2",
    HTTP_CLIENT_SEND_WITH_GET_REQUEST: "调用 %1 发送 GET 请求",
    HTTP_CLIENT_SEND_WITH_GET_REQUEST_TOOLTIP: "如果使用的api接口的调用方式为get，则设置好网址和请求参数后，使用该积木发送get请求。",
    HTTP_CLIENT_SEND_WITH_POST_REQUEST: "调用 %1 发送 POST 请求，文本为 %2",
    HTTP_CLIENT_SEND_WITH_POST_REQUEST_TOOLTIP: "如果使用的api接口的调用方式为post，则设置好网址和请求文本后，使用该积木发送post请求。",
    HTTP_CLIENT_GET_URL: "%1 的网址",
    HTTP_CLIENT_STATUS: "响应代码",
    HTTP_CLIENT_RESPONSE: "文本内容",
    HTTP_CLIENT_ERROR_STATUS: "错误代码",
    HTTP_CLIENT_ERROR_RESPONSE: "错误消息",
    HTTP_CLIENT_SEND_DELETE_REQUEST: "调用 %1 发送 DELETE 请求",
    HTTP_CLIENT_SEND_PUT_REQUEST: "调用 %1 发送 PUT 请求，文本为 %2",
    HTTP_CLIENT_SEND_PATCH_REQUEST: "调用 %1 发送 PATCH 请求，文本为 %2",
    SOUND_MAN: "男声",
    SOUND_WOMAN: "女声",
    SOUND_CHILD: "童声",
    SOUND_VOLUME: "音量",
    SOUND_RATE: "音速",
    AUDIO_PLAY_SOUND: "播放 %1",
    AUDIO_STOP_SOUND: "停止 %1",
    AUDIO_PAUSE_SOUND: "暂停 %1",
    AUDIO_SET_SOUND_FILE: "设置 %1 的音源为 %2",
    AUDIO_SET_VOLUME_OR_RATE: "设置 %1 %2 大小为 %3",
    AUDIO_CHANGE_VOLUME_OR_RATE: "设置 %1 %2 %3 %4",
    TEXT2SPEECH_SPEAK_TEXT: "%1 朗读 %2",
    TEXT2SPEECH_SPEAK_TEXT_AND_WAIT: "%1 朗读 %2 直到结束",
    TEXT2SPEECH_DEFAULT_TEXT: "你好",
    CAMERA_PHOTO: "照片",
    CAMERA_VIDEO: "视频",
    CAMERA_SET_CAMERA_DIRECTION: "设置相机为 %1 摄像头",
    CAMERA_GET_CAMERA_TAKE_PHOTO: "调用相机拍照，当完成时返回 %1 %2",
    CAMERA_GET_CAMERA_TAKE_VIDEO: "调用相机录像，当完成时返回 %1 %2",
    CAMERA_GET_CAMERA_CHOOSE_PHOTO: "打开相册进行选择，当完成时返回 %1 %2",
    TEXT_WIDGET_ON_PRESS: "%1 当 %2 被点击时 %3 %4",
    TEXT_WIDGET_GET_PROPERTY: "%1 的 %2",
    TEXT_WIDGET_GET_CONTENT: "%1 的 文本",
    TEXT_WIDGET_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    TEXT_WIDGET_SET_ALIGN: "设置 %1 的 %2 为",
    TEXT_WIDGET_SET_CONTENT: "设置 %1 的 文本 为 %2",
    TEXT_WIDGET_SET_FONT_SIZE: "设置 %1 的 字号 为 %2",
    TEXT_WIDGET_GET_FONT_SIZE: "%1 的 字号",
    TEXT_WIDGET_HORIZONTAL_ALIGN: "水平对齐",
    TEXT_WIDGET_VERTICAL_ALIGN: "垂直对齐",
    BUTTON_ON_PRESS: "%1 当按钮 %2 被 %3 %4 %5",
    BUTTON_SET_CONTENT: "设置 %1 的文本为 %2",
    BUTTON_SET_COLOR: "设置 %1 的颜色为 %2",
    BUTTON_SET_SIZE_TYPE: "设置 %1 的尺寸大小为 %2",
    BUTTON_SET_MODE: "设置 %1 的样式为 %2",
    BUTTON_GET_COLOR: "%1 的颜色",
    BUTTON_GET_CONTENT: "%1 的文本",
    BUTTON_CONTAINED_TEXT: "底色白字",
    BUTTON_OUTLINED_TEXT: "白底彩字",
    BUTTON_CONTAINED_ICON: "底色图标",
    BUTTON_OUTLINED_ICON: "白底图标",
    BUTTON_DEFAULT_TEXT: "按钮",
    INPUT_ON_FOCUS: "%1 当输入框 %2 获取焦点时 %3 %4",
    INPUT_ON_BLUR: "%1 当输入框 %2 失去焦点时 %3 %4",
    INPUT_ON_CHANGE: "%1 当输入框 %2 的内容改变时 %3 %4",
    INPUT_SET_INPUT_CONTENT: "设置 %1 的 %2 为 %3",
    INPUT_SET_MODE: "设置 %1 的 样式为 %2",
    INPUT_SET_COLOR: "设置 %1 的 颜色 %2",
    INPUT_SET_POSITION: "设置 %1 的 %2 为",
    INPUT_SET_SIZE: "设置 %1 的 尺寸 %2",
    INPUT_GET_COLOR: " %1 的 颜色",
    INPUT_GET_CONTENT: "%1 的 %2",
    INPUT_GET_POSITION: "%1 的 %2",
    INPUT_ASSERT_STATE: "%1 是否 %2",
    INPUT_GET_HAS_ERROR_MESSAGE: "%1 是否 报错",
    INPUT_GET_PROPERTY: "%1 的 %2",
    INPUT_ERROR_TIPS: "%1 %2 报错提示",
    INPUT_OUTLINED_NORMAL: "线框",
    INPUT_CONTAINED_NORMAL: "底色",
    INPUT_CONTAINED_ROUND: "圆角",
    INPUT_OUTLINED_FLAT: "横线",
    INPUT_CONTENT: "输入文案",
    INPUT_PLACEHOLDER: "提示文案",
    INPUT_ERROR_MESSAGE: "报错文案",
    INPUT_REPORT_ERROR: "报错",
    INPUT_DEFAULT_ERROR_MESSAGE: "输入错误",
    INPUT_DEFAULT_VALUE: "输入框内容",
    INPUT_DEFAULT_PLACEHOLDER: "提示语内容",
    LOCAL_STORAGE_GET_ALL_FIELD_KEYS: "%1 的所有键",
    LOCAL_STORAGE_GET_KEY_VALUE_COUNT: "%1 键的总数",
    LOCAL_STORAGE_ASSERT_KEY_IN: "键 %1 存在于 %2",
    LOCAL_STORAGE_SET_VALUE_BY_KEY: "设置 %1 键 %2 的值为 %3",
    LOCAL_STORAGE_SET_VALUE_BY_KEY_TOOLTIP: "如果数据库中存在该键，则修改键的值。\n如果不存在，则新增一个键值对。",
    LOCAL_STORAGE_GET_VALUE_BY_KEY: "%1 键 %2 的值",
    LOCAL_STORAGE_CLEAR_ALL_DATA: "清空 %1",
    LOCAL_STORAGE_DELETE_ITEM: "删除 %1 的键 %2",
    NEW_LOCAL_STORAGE_GET_ALL_FIELD_KEYS: "%1%2 的所有键",
    CLOUD_STORAGE_ON_ERROR: "%1 当 %2 出错时 %3 %4 %5 %6",
    CLOUD_STORAGE_ON_ERROR_TOOLTIP: "当新增、修改、删除、获取数据库的键值对出现错误时，触发该事件，错误原因存储在“错误消息”积木中。",
    CLOUD_STORAGE_SET_VALUE_BY_KEY: "%1 设置 %2 %3 的值为 %4, 失败时返回 %5",
    CLOUD_STORAGE_SET_VALUE_BY_KEY_TOOLTIP: "如果云数据库中存在该键，则修改键的值。\n如果不存在，则新增一个键值对。",
    CLOUD_STORAGE_GET_ALL_FIELD_KEYS: "%1 %2  的所有键, 失败时返回 %3",
    CLOUD_STORAGE_GET_KEY_VALUE_COUNT: "%1 %2 的键值对个数, 失败时返回 %3",
    CLOUD_STORAGE_ASSERT_KEY_IN: "%1 键 %2 是否存在于 %3, 失败时返回 %4",
    CLOUD_STORAGE_GET_VALUE_BY_KEY: "%1 %2 中键为 %3 的值, 失败时返回 %4",
    CLOUD_STORAGE_CLEAR_ALL_DATA: "%1 清空 %2 所有键值对, 失败时返回 %3",
    CLOUD_STORAGE_DELETE_ITEM: "%1 删除 %2 的 %3 和值, 失败时返回 %4",
    CLOUD_STORAGE_CANNOT_REMOVED_ITEM: "无法删除键和值",
    CLOUD_STORAGE_CANNOT_SET_ITEM: "无法设置该值",
    CLOUD_STORAGE_CANNOT_CLEAR: "无法清空所有键值对",
    CLOUD_STORAGE_CANNOT_GET_ITEM: "无法获取值",
    CLOUD_STORAGE_CANNOT_GET_ITEM_COUNT: "无法获取键值对个数",
    CLOUD_STORAGE_CANNOT_GET_ALL_ITEM: "无法获取所有键",
    CLOUD_STORAGE_CANNOT_ASSERT_KEY: "无法判断键是否存在",
    CLOUD_STORAGE_PARAM_ERROR_TYPE: "错误类型",
    CLOUD_STORAGE_PARAM_ERROR_MESSAGE: "错误信息",
    IMAGE_ON_PRESS: "%1当 %2 被点击时 %3 %4",
    IMAGE_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    IMAGE_GET_PROPERTY: "%1 的 %2",
    IMAGE_GET_FILE_ID: "%1 的 图片",
    IMAGE_SET_FIELD_ID: "设置 %1 图片为 %2",
    IMAGE_GET_FILE_ID_TOOLTIP: "返回图片名称或链接。",
    IMAGE_SET_FIELD_ID_TOOLTIP: "设置图片显示的图片，可以嵌入项目内图片资源的名称或网络图片的链接。",
    CANVAS_CLEAR_ALL_BRUSH: "清除 %1 的 笔迹",
    CANVAS_TO_DATA_URL: "保存 %1 为图片",
    CANVAS_SET_VISIBLE: "%2 %1",
    CANVAS_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    CANVAS_SET_BACKGROUND_COLOR: "设置 %1 的 背景颜色 为 %2",
    CANVAS_SET_BACKGROUND_IMAGE: "设置 %1 的 背景图片 为 %2",
    CANVAS_GET_PROPERTY: "%1 的 %2",
    CANVAS_GET_BACKGROUND_COLOR: "%1 的 背景颜色",
    CANVAS_GET_BACKGROUND_IMAGE: "%1 的 背景图片",
    CANVAS_ON_CANVAS_PRESS_MSG0: "%1 当 %2 被 %3 时 %4 %5",
    CANVAS_ON_CANVAS_PRESS_MSG1: "%1",
    CANVAS_ON_CANVAS_SWIPE: "%1 当 %2 被 划过时",
    CANVAS_CHECK_IF_PRESSED: "%1 被 按住",
    PARAM_POSITION_X: "X坐标",
    PARAM_POSITION_Y: "Y坐标",
    BRUSH: "画笔",
    BRUSH_SET_PEN_UP: "%1 抬笔",
    BRUSH_SET_PEN_DOWN: "%1 落笔",
    PEN_UP: "抬笔",
    PEN_DOWN: "落笔",
    BRUSH_SET_PEN_UP_OR_DOWN: "%1 %2",
    BRUSH_DRAW_POINT: "%1 画点：x %2 y %3",
    BRUSH_DRAW_LINE: "%1 画线：x1 %2 y1 %3 x2 %4 y2 %5",
    BRUSH_DRAW_CIRCLE: "%1 画圆：半径 %2",
    BRUSH_DRAW_ARC: "%1 画弧：半径 %2 角度 %3",
    BRUSH_DRAW_POLYGON: "%1 画 %2 边形：边长 %3",
    BRUSH_SET_COLOR: "设置 %1 的 颜色 为 %2",
    BRUSH_SET_FILL_COLOR: "设置 %1 的 填充色 为 %2",
    BRUSH_SET_FILL_PATH: "设置 当前 为 %1 填充 %2",
    POINT_START: "起点",
    POINT_END: "终点",
    BRUSH_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    BRUSH_SET_PEN_SIZE: "设置 %1 的 粗细 为 %2",
    BRUSH_CHANGE_PEN_SIZE: "将 %1 的 粗细 %2 %3",
    BRUSH_CHANGE_PROPERTY: "将 %1 的 %2 %3 %4",
    BRUSH_GET_PROPERTY: "%1 的 %2",
    BRUSH_GET_DRAW_PROCESS: "%1 是否开启 绘画过程",
    BRUSH_GET_COLOR: "%1 的 颜色",
    BRUSH_GET_PEN_SIZE: "%1 的 粗细",
    BRUSH_MOVE_FORWARD: "%1 移动 %2 步",
    BRUSH_MOVE_FORWARD_OR_BACKWARD: "%1 %2 移动 %3 像素",
    FORWARD: "向前",
    BACKWARD: "向后",
    BRUSH_ROTATE: "%1 旋转 %2 度",
    ROTATE_LEFT: "向左",
    ROTATE_RIGHT: "向右",
    BRUSH_ROTATE_LEFT_OR_RIGHT: "%1 %2 旋转 %3 度",
    BRUSH_SET_ROTATION: "设置 %1 的 方向 为 %2 度",
    BRUSH_GET_ROTATION: "%1 的 方向",
    BRUSH_FACE_TO: "%1 面向 %2",
    BRUSH_MOVE_TO_POSITION: "%1 移动到 x %2 y %3",
    BRUSH_MOVE_TO: "%1 移动到 %2",
    BRUSH_CHANGE_POSITION: "将 %1 的 %2 %3 %4",
    BRUSH_CHANGE_POSITION_IN_TIME: "在 %2 秒内，%1 移动到 x %3 y %4",
    BRUSH_CHANGE_POSITION_TYPE_IN_TIME: "在 %2 秒内，将 %1 的 %3 %4 %5",
    BRUSH_CHANGE_Z_INDEX: "将 %1 移至 %2",
    INDEX_UP: "上一层",
    INDEX_DOWN: "下一层",
    INDEX_TOP: "最上层",
    INDEX_BOTTOM: "最底层",
    ACTOR: "角色",
    TOUCH_POINT: "触碰点",
    BOUNDARY: "边缘",
    BOUNDARY_TOP: "上边缘",
    BOUNDARY_RIGHT: "右边缘",
    BOUNDARY_BOTTOM: "下边缘",
    BOUNDARY_LEFT: "左边缘",
    BOUNDARY_ANY: "画布边缘",
    SCALE_A: "比例大小",
    SCALE_X: "宽度比例",
    SCALE_Y: "高度比例",
    RANDOM: "随机",
    SCALE: "大小",
    DEGREE: "角度",
    FADE_IN: "逐渐显示",
    FADE_OUT: "逐渐隐藏",
    PLAY_CIRCULARLY: "循环",
    PLAY_INFINITELY: "无限循环",
    PLAY_TIME: "次",
    ACTOR_STOP_ACTION: "停止 %1 的 动作播放",
    ACTOR_PLAY_ACTION: "播放 %1 的 %2 间隔 %3 毫秒，%4",
    ACTOR_PLAY_ACTION_AND_WAIT: "播放 %1 的 %2 间隔 %3 毫秒，循环 %4 次， 直到结束",
    ACTOR_PLAY_COUNT: "%1",
    ACTOR_ON_ACTOR_BUMP_MSG0: "%1 当 %2 碰到 %3 时",
    ACTOR_ON_ACTOR_BUMP_MSG1: "%1",
    ACTOR_ON_ACTOR_LEAVE_MSG0: "%1 当 %2 离开 %3 时",
    ACTOR_ON_ACTOR_LEAVE_MSG1: "%1",
    ACTOR_ON_ACTOR_PRESS_MSG0: "%1 当 %2 被 %3 时 %4 %5",
    ACTOR_ON_ACTOR_PRESS_MSG1: "%1",
    ACTOR_ROTATE: "%1 旋转 %2 度",
    ACTOR_MOVE_FORWARD: "%1 移动 %2 像素",
    ACTOR_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    ACTOR_SET_ROTATION: "设置 %1 的 方向 为 %2 度",
    ACTOR_FACE_TO: "%1 面向 %2",
    ACTOR_ROTATE_AROUND: "%1 绕 %2 旋转 %3 度",
    ACTOR_MOVE_TO_POSITION: "%1 移动到 x %2 y %3",
    ACTOR_MOVE_TO: "%1 移动到 %2",
    ACTOR_CHANGE_POSITION: "将 %1 的 %2 %3 %4",
    ACTOR_CHANGE_POSITION_TYPE_IN_TIME: "在 %2 秒内，将 %1 的 %3 %4 %5",
    ACTOR_CHANGE_POSITION_IN_TIME: "在 %2 秒内，%1 移动到 x %3 y %4",
    ACTOR_SET_VISIBLE: "%2 %1",
    ACTOR_SHOW_HIDE_IN_TIME: "在 %2 秒内，%3 %1",
    ACTOR_CHANGE_OPACITY: "将 %1 的 不透明度 %2 %3",
    ACTOR_SET_SCALE: "设置 %1 的 大小 为 %2",
    ACTOR_CHANGE_SCALE: "将 %1 的 大小 %2 %3",
    ACTOR_SET_SCALE_WITH_SECTION: "设置 %1 的 %2 为 %3",
    ACTOR_CHANGE_SCALE_WITH_SECTION: "将 %1 的 %2 %3 %4",
    ACTOR_GET_SCALE_WITH_SECTION: "%1 的 %2",
    ACTOR_SET_FLIPPED: "%1 %2",
    ACTOR_CHECK_IF_FLIPPED: "%1 是否 %2",
    ACTOR_GET_PROPERTY: "%1 的 %2",
    ACTOR_MOVE_Z_INDEX: "%1 移至 %2",
    ACTOR_PREVIOUS_NEXT_STYLE: "切换 %1 的 %2 造型",
    ACTOR_SET_CURRENT_STYLE: "设置 %1 的 造型 为 %2 %3",
    ACTOR_SET_CURRENT_ACTION_TOOLTIP: "嵌入为“字符串”类型：按“动作名称”检索。",
    ACTOR_SET_CURRENT_STYLE_TOOLTIP: "嵌入为“数字”类型：按“造型编号”检索。",
    ACTOR_TALK: "对话",
    ACTOR_THINK: "思考",
    ACTOR_SHOW_DIALOG: "%1 %2 %3",
    ACTOR_SHOW_DIALOG_IN_TIME: "%1 %2 %3 持续 %4 秒",
    ACTOR_STYLE: "造型编号",
    ACTOR_GET_STYLE_INDEX: "%1 的 造型编号",
    ACTOR_GET_ACTION_NAME: "%1 的 动作名称",
    ACTOR_GET_ROTATION: "%1 的 方向",
    ACTOR_NEXT_ONE: "下一个",
    ACTOR_PREVIOUS_ONE: "上一个",
    ACTOR_CHECK_IF_PRESSED: "%1 被 按住",
    ACTOR_CHECK_IF_BUMPED: "%1 碰到 %2",
    ACTOR_CHECK_IF_LEFT: "%1 离开 %2",
    RADIO_ON_SELECTED: "%1 当 %2 被选中时%3 %4 %5 %6",
    RADIO_ON_SELECTED_TOOLTIP: "选中项：被选中选项的序号，数字类型\n选中内容：被选中选项的文本内容，字符串类型",
    RADIO_SET_HEADLINE: "设置 %1 的题干内容为 %2",
    RADIO_SET_OPTION_COUNT: "设置 %1 的选项数量为 %2",
    RADIO_SET_OPTION_CONTENT: "设置 %1 第 %2 项的内容为 %3",
    RADIO_SET_OPTION_SELECTED_OR_DISABLED: "%1 %2 第 %3 项",
    RADIO_CLEAR_SELECTED: "清空 %1 所有选项状态",
    RADIO_CLEAR_SELECTED_TOOLTIP: "取消选中当前选中项。",
    RADIO_SET_OPTION_FEEDBACK: "设置 %1 第 %2 项的反馈为 %3",
    RADIO_SET_OPTION_FEEDBACK_TOOLTIP: "如果某一项为正确选项，则设置反馈为正确，当前选项会变为绿色，出现√。\n如果某一项为错误选项，则设置反馈为错误，当前选项会变为红色，出现×。",
    RADIO_CLEAR_FEEDBACK: "清空 %1 所有选项的反馈",
    RADIO_CLEAR_FEEDBACK_TOOLTIP: "清除所有选项正确和错误的样式反馈。",
    RADIO_DELETE_OPTION: "删除 %1 第 %2 项",
    RADIO_PUSH_OPTION: "添加选项 %1 到 %2 的末尾",
    RADIO_SET_WIDGET_POSITION: "设置 %1 的 %2 为 %3",
    RADIO_GET_SELECTED_OPTION_INDEX: "%1 的选中项",
    RADIO_GET_SELECTED_OPTION_INDEX_TOOLTIP: "返回被选中选项的序号",
    RADIO_GET_SELECTED_OPTION_CONTENT: "%1的选中项内容",
    RADIO_GET_SELECTED_OPTION_CONTENT_TOOLTIP: "返回被选中选项的文本内容",
    RADIO_GET_OPTION_CONTENT_BY_INDEX: "%1 第 %2 项的内容",
    RADIO_GET_HEADLINE: "%1 的题干内容 ",
    RADIO_GET_PROPERTY: "%1 的 %2",
    RADIO_PARAM_SELECTED_INDEX: "选中项",
    RADIO_PARAM_SELECTED_CONTENT: "选中项内容",
    SELECTED: "选中",
    OPTION_COUNT: "项数",
    CORRECT: "正确",
    INCORRECT: "错误",
    UNSELECTED: "取消选中",
    CHECKBOX_ON_SELECTED: "%1 当 %2 被 %3 时 %4 %5 %6 %7",
    CHECKBOX_ON_SELECTED_TOOLTIP: "选中项列表：被选中所有选项的序号，列表类型\n选中内容列表：被选中所有选项的文本内容，列表类型",
    CHECKBOX_ON_CHANGE: "%1 当 %2 选项状态发生改变时 %3 %4 %5 %6",
    CHECKBOX_ON_CHANGE_TOOLTIP: "某一项被选中或取消选中时都会触发该事件。\n改变项：被选中或被取消的选项序号\n改变结果：值为真(true)时表示该项被选中，值为假(false)时表示该项被取消选中",
    CHECKBOX_SET_HEADLINE: "设置 %1 的题干内容为 %2",
    CHECKBOX_SET_OPTION_COUNT: "设置 %1 的选项数量为 %2",
    CHECKBOX_SET_OPTION_CONTENT: "设置 %1 第 %2 项内容为 %3",
    CHECKBOX_SET_OPTION_STATE: "%1 %2 第 %3 项",
    CHECKBOX_CLEAR_SELECTED: "清空 %1 所有选项状态",
    CHECKBOX_CLEAR_SELECTED_TOOLTIP: "取消多选框所有选项的选中状态。",
    CHECKBOX_SET_OPTION_FEEDBACK: "设置 %1 第 %2 项的反馈为 %3",
    CHECKBOX_SET_OPTION_FEEDBACK_TOOLTIP: "如果某一项为正确选项，则设置反馈为正确，当前选项会变为绿色，出现√。\n如果某一项为错误选项，则设置反馈为错误，当前选项会变为红色，出现×。",
    CHECKBOX_CLEAR_FEEDBACK: "清空 %1 所有选项的反馈",
    CHECKBOX_CLEAR_FEEDBACK_TOOLTIP: "清除所有选项正确和错误的样式反馈。",
    CHECKBOX_DELETE_OPTION: "删除 %1 第 %2 项",
    CHECKBOX_PUSH_OPTION: "添加选项 %1 到 %2 的末尾",
    CHECKBOX_SET_WIDGET_POSITION: "设置 %1 的 %2 为 %3",
    CHECKBOX_GET_SELECTED_OPTION_INDEX: "%1 的选中项列表",
    CHECKBOX_GET_SELECTED_OPTION_INDEX_TOOLTIP: "返回被选中所有选项的序号，列表类型",
    CHECKBOX_GET_SELECTED_OPTION_CONTENT: "%1 的选中内容列表",
    CHECKBOX_GET_SELECTED_OPTION_CONTENT_TOOLTIP: "返回被选中所有选项的文本内容，列表类型",
    CHECKBOX_GET_OPTION_CONTENT_BY_INDEX: "%1 第 %2 项的内容",
    CHECKBOX_GET_HEADLINE: "%1 的题干内容 ",
    CHECKBOX_GET_PROPERTY: "%1 的 %2",
    CHECKBOX_PARAM_SELECTED_INDEX_LIST: "选中项列表",
    CHECKBOX_PARAM_SELECTED_CONTENT_LIST: "选中内容列表",
    CHECKBOX_PARAM_SELECTED_INDEX: "改变项",
    CHECKBOX_PARAM_SELECTED_RESULT: "改变结果",
    WEBVIEW_ON_START_LOAD: "%1 当 %2 开始加载时 %3 %4",
    WEBVIEW_ON_LOADED: "%1 当 %2 加载完成时 %3 %4",
    WEBVIEW_ON_LOAD_ERROR: "%1 当 %2 加载失败时 %3 %4",
    WEBVIEW_SET_URL: "设置 %1 的网址为 %2",
    WEBVIEW_REFRESH: "重新加载 %1",
    WEBVIEW_GET_URL: "%1 的网址",
    WEBVIEW_GET_PROPERTY: "%1 的 %2",
    SWITCH_ON_STATE_CHANGE: "%1 当 %2 状态发生改变时 %3 %4 %5",
    SWITCH_SET_STATE: "设置 %1 的状态为 %2",
    SWITCH_SET_POSITION: "设置 %1 的 %2 为 %3",
    SWITCH_GET_STATE: "%1 的状态",
    SWITCH_GET_POSITION: "%1 的 %2",
    SWITCH_PARAM_STATE: "状态",
    SLIDER_ON_CHANGE: "%1 当 %2 滑块位置改变时 %3 %4 %5",
    SLIDER_ON_SLIDE_START_AND_END: "%1 当 %2 %3 时 %4 %5 %6",
    SLIDER_SET_VALUE: "设置 %1 的 %2 为 %3",
    SLIDER_SET_SLIDE_VALUE: "设置 %1 的 滑块位置 为 %2",
    SLIDER_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    SLIDER_GET_VALUE: "%1 的 滑块位置",
    SLIDER_GET_SLIDE_VALUE: "%1 的 滑块位置",
    SLIDER_GET_PROPERTY: "%1 的 %2",
    SLIDER_START_TO_SLIDE: "开始滑动",
    SLIDER_END_TO_SLIDE: "结束滑动",
    SLIDER_MAX_VALUE: "最大值",
    SLIDER_MIN_VALUE: "最小值",
    SLIDER_VALUE: "滑块位置",
    SLIDER_PARAM_VALUE: "滑块位置",
    ROOM_CREATE_ROOM: "创建房间 %1 房间人数 %2 %3 %4",
    ROOM_FAILED_TEXT: "失败则执行",
    ROOM_SUCCESS_TEXT: "成功则执行",
    ROOM_DEFAULT_ROOM_NAME: "房间名",
    ROOM_USERS: "房间人数",
    ROOM_LIST: "房间名称列表",
    ROOM_DEFAULT_CREATE_ERROR: "失败原因",
    ROOM_DEFAULT_NICKNAME: "昵称",
    ROOM_CREATE_NICKNAME: "设置我在房间的昵称 %1 %2 %3",
    ROOM_GET_ROOM_LIST: "获取房间列表 %1 %2 %3",
    ROOM_ENTER_ROOM: "进入房间 %1 %2 %3",
    ROOM_SEND_MESSAGE: "发送房间信息 %1",
    ROOM_RECEIVE_MESSAGE: "%1 当收到房间消息  %2 %3 %4",
    ROOM_ENTER: "进入房间",
    ROOM_EXIT: "退出房间",
    ROOM_RECEIVE_ROOM_INFO: "%1 当收到房间通知  %2 %3 %4 %5",
    ROOM_EXIT_ROOM: "退出房间",
    ROOM_NETWORK_ERROR: "%1 当发生错误%2 %3 %4",
    ROOM_GET_ONLINE_USERS: "房间人员列表",
    ROOM_NAME: "房间名",
    ROOM_USER_NAME: "用户名",
    ROOM_MESSAGE: "消息",
    ROOM_ERROR_INFO: "错误信息",
    ROOM_CURRENT_ROOM_NAME: "当前进入的房间名",
    ROOM_CURRENT_ROOM_USERS: "当前进入的房间人员列表",
    LIST_VIEWER_ON_PRESS: "%1 当 %2 被点击时 %3 %4 %5",
    LIST_VIEWER_SET_PROPERTY: "设置 %1 的 %2 为 %3",
    LIST_VIEWER_SET_DATA_SOURCE: "设置 %1 的数据源为 %2",
    LIST_VIEWER_GET_PROPERTY: "%1 的 %2",
    LIST_VIEWER_GET_DATA_SOURCE: "%1 的数据源",
    LIST_VIEWER_CHILD_WIDGET_ON_PRESS: "%1 当 %2 的 %3 被点击时 %4 %5 %6",
    LIST_VIEWER_CHILD_WIDGET_BIND_COLUMN: "将 %1 的 %2 绑定 %3",
    LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES: "设置 %1 第 %2 行 %3 的 %4 为 %5",
    LIST_VIEWER_CHILD_WIDGET_SET_FONT_SIZE: "设置 %1 第 %2 行 %3 的字号为 %4",
    LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES: "%1 第 %2 行 %3 的 %4",
    LIST_VIEWER_CHILD_WIDGET_GET_FONT_SIZE: "%1 第 %2 行 %3 的字号",
    LIST_VIEWER_ROW_INDEX: "行数",
    WIDGET_OF: "的",
    WIDGET_GET_MSG: "%1 %2",
    WIDGET_SET: "设置",
    WIDGET_SET_MSG: "%1 %2",
    WIDGET_SET_TO: "为",
    WIDGET_EVENT_MSG: "%1 当 %2 %3",
    WIDGET_EVENT_SUFFIX: "时",
    WIDGET_EVENT_PARAM_MSG: "%1",
    WIDGET_METHOD_MSG: "%1",
    WIDGET_METHOD_CALL_MSG: "调用",
    WIDGET_COLOR_MSG: "%1",
    WIDGET_BOOLEAN_MSG: "%1",
    WIDGET_BOOLEAN_TRUE: "是",
    WIDGET_BOOLEAN_FALSE: "否",
    WIDGET_OPACITY: "不透明度",
    WIDGET_VISIBLE: "是否 显示",
    WIDGET_DISABLED: "是否 启用",
    CLOUD_DB_QUERY_BY_COLUMN_RESULT: "查询结果",
    CLOUD_DB_QUERY_BY_COUNT_RESULT: "查询结果",
    CLOUD_DB_ERROR_NAME: "错误数据库名称",
    CLOUD_DB_ERROR_INFO: "错误信息",
    CLOUD_DB_ERROR: "%1 当 云数据库出错时 %2 %3 %4 %5",
    CLOUD_DB_INSERT: "新增行 %1 到 %2 %3 %4 %5",
    CLOUD_DB_DELETE: "删除 %1 中满足条件 %2 %3 %4 的行 %5 %6 %7",
    CLOUD_DB_UPDATE: "更新 %1 中满足条件 %2 %3 %4 的行 %5 为 %6 %7 %8",
    CLOUD_DB_QUERY_BY_COLUMN: "查询 %1 中满足条件 %2 %3 %4 的数据 %5 %6 %7",
    CLOUD_DB_ASC: "升序",
    CLOUD_DB_DESC: "降序",
    CLOUD_DB_QUERY_BY_COUNT: "查询 %1 的 %2 %3 %4 %5",
    CLOUD_DB_ROW: "行数",
    CLOUD_DB_COLUMN: "列数",
    CLOUD_DB_FAIL_RESULT: "失败原因",
    TABLE_DATA_ON_CHANGE: "%1 当 %2 数据发生变动时 %3 %4 ",
    TABLE_DATA_ON_ERROR: "%1 当 数据表出错时 %2 %3 %4 %5",
    TABLE_DATA_PARAM_ERROR_WIDGET_TITLE: "错误数据表名称",
    TABLE_DATA_PARAM_ERROR_MESSAGE: "错误信息",
    TABLE_DATA_SET_VALUE_BY_ROW_AND_COLUMN: "替换 %1 列:%2 行:%3 的值为 %4",
    TABLE_DATA_INSERT_ROW_DATA: "插入行 %1",
    TABLE_DATA_DELETE_ROW_DATA: "删除 %1 %2",
    TABLE_DATA_CLEAR_DATA: "清空 %1",
    TABLE_DATA_GET_VALUE_BY_ROW_AND_COLUMN: "%1 列:%2 行:%3 的值",
    TABLE_DATA_GET_ROW_LENGTH: "%1 的总行数",
    TABLE_DATA_GET_COLUMN_DATA: "%1 %2 的 %3",
    TABLE_DATA_GET_ROW_DATA: "%1 %2 的 %3",
    LAST_ROW: "最后一行",
    ALL_ROW: "所有行",
    ROW: "行",
    COLUMN: "列",
    EVENT_ADD: "新增",
    EVENT_SETTER: "设置",
    EVENT_DELETE: "删除",
    EVENT_QUERY: "查询",
    EVENT_CLEAR: "清空",
    ERROR_INFO: "错误信息",
    QUERY_RESULT: "查询结果",
    FAIL_RESULT: "失败原因",
    ALL_KEYS_RESULT: "%1 查询结果",
    CLOUD_SPACE_DICT_ON_ERROR: "%1 当 %2 %3 出错时 %4 %5 %6",
    CLOUD_SPACE_DICT_ON_ERROR_TOOLTIP: "捕获云字典积木执行时的错误信息。",
    CLOUD_SPACE_DICT_SET_KEY_VALUE: "设置 %1 键 %2 的值为 %3 %4 %5 %6",
    CLOUD_SPACE_DICT_SET_KEY_VALUE_TOOLTIP: "输入已有键名则修改其值，输入新的键名则直接新建一个键值对。",
    CLOUD_SPACE_DICT_DELETE_KEY: "删除 %1 的键 %2 %3 %4 %5",
    CLOUD_SPACE_DICT_DELETE_KEY_TOOLTIP: "删除云字典中某个键值对，不可撤销。",
    CLOUD_SPACE_DICT_GET_VALUE_BY_KEY: "查询 %1 中 键为 %2 的值 %3 %4 %5",
    CLOUD_SPACE_DICT_GET_VALUE_BY_KEY_TOOLTIP: "查询云字典某个键的值。",
    CLOUD_SPACE_DICT_GET_KEY_COUNT: "查询 %1 键的总数 %2 %3 %4",
    CLOUD_SPACE_DICT_GET_KEY_COUNT_TOOLTIP: "查询云字典键值对个数。",
    CLOUD_SPACE_DICT_GET_ALL_KEYS: "查询 %1 所有键名 %2 %3 %4",
    CLOUD_SPACE_DICT_GET_ALL_KEYS_TOOLTIP: "查询云字典所有键名，返回列表结构。",
    CLOUD_SPACE_DICT_CLEAR_DATA: "清空 %1 %2 %3 %4",
    CLOUD_SPACE_DICT_CLEAR_DATA_TOOLTIP: "清空云字典所有数据，不可撤销。",
    CLOUD_TABLE_EVENT_ADD: "新增",
    CLOUD_TABLE_EVENT_SETTER: "替换",
    CLOUD_TABLE_EVENT_DELETE: "删除",
    CLOUD_TABLE_EVENT_QUERY: "查询",
    CLOUD_TABLE_EVENT_CLEAR: "清空",
    CLOUT_TABLE_FAILED_TEXT: "失败则执行",
    CLOUD_TABLE_QUERY_BY_COLUMN_LIST_RESULT: "%1查询结果",
    CLOUD_TABLE_QUERY_BY_COLUMN_LINE_NUMBER_RESULT: "%1行号列表",
    CLOUD_TABLE_QUERY_BY_COLUMN_RESULT: "查询结果",
    CLOUD_TABLE_QUERY_BY_COUNT_RESULT: "查询结果",
    CLOUD_TABLE_ERROR_NAME: "错误云数据表名称",
    CLOUD_TABLE_ERROR_INFO: "错误信息",
    CLOUD_TABLE_ERROR: "%1 当 %2 %3出错时 %4 %5 %6",
    CLOUD_TABLE_ERROR_TOOLTIP: "捕获云数据表积木执行时的错误信息。",
    CLOUD_TABLE_INSERT: "新增行 %1 到 %2 %3 %4 %5",
    CLOUD_TABLE_INSERT_TOOLTIP: "在云数据表最后一行新增数据：支持嵌入字符或列表数据，均以逗号为分列标识。",
    CLOUD_TABLE_DELETE: "删除 %1 中 %2 %3 %4 的行 %5 %6 %7",
    CLOUD_TABLE_DELETE_TOOLTIP: "删除云数据表中满足条件的行，不可撤销。",
    CLOUD_TABLE_UPDATE: "更新 %1 中 %2 %3 %4 的行： %5 为 %6 %7 %8",
    CLOUD_TABLE_UPDATE_TOOLTIP: "更新云数据表中满足条件的行，不可撤销。",
    CLOUD_TABLE_QUERY_BY_COLUMN: "查询 %1 中 %2 %3 %4 的数据 %5 %6 %7",
    CLOUD_TABLE_QUERY_BY_COLUMN_TOOLTIP: "查询云数据表满足条件的数据：返回列表结构，若有多个数据则返回二维列表。",
    CLOUD_TABLE_ASC: "升序",
    CLOUD_TABLE_DESC: "降序",
    CLOUD_TABLE_QUERY_BY_COUNT: "查询 %1 的 %2 %3 %4 %5",
    CLOUD_TABLE_QUERY_BY_COUNT_TOOLTIP: "查询云数据表的行数或列数。",
    CLOUD_TABLE_ROW: "行数",
    CLOUD_TABLE_COLUMN: "列数",
    CLOUD_TABLE_FAIL_RESULT: "失败原因",
    CLOUD_TABLE_CLEAR_ALL: "清空 %1 %2 %3 %4",
    CLOUD_TABLE_CLEAR_ALL_TOOLTIP: "清空云数据表所有数据，不可撤销。"
  }
};
var ye = require("../6");
var Ee = require("../27");
var Oe = require("../40");
var we = require("./224");
var Ce = require("./203");
var Te = require("../57/index");
var Se = require("../58/index");
var Ie = require("./326");
var Ae = require("../125/index");
var je = require("./480");
var Ne = function (e) {
  Object(Te.a)(n, e);
  var t = Object(Se.a)(n);
  function n(e) {
    var r;
    var o;
    Object(Ee.a)(this, n);
    (o = t.call(this, Object(ye.a)(Object(ye.a)({}, e), {}, {
      opt_value: e.opt_value || (null === (r = e.get_options()[0]) || void 0 === r ? void 0 : r.value) || 0
    }, e.numberOptions))).dropdownConfig = e;
    o.arrow = void 0;
    o.menu_items = [];
    o.menu = void 0;
    o.padding_x = 0;
    o.text_margin = 0;
    return o;
  }
  Object(Oe.a)(n, [{
    key: "render_text_element",
    value: function () {
      if (this.text_element && this.field_group) {
        Object(Ae.remove_children)(this.text_element);
        this.text_element.appendChild(document.createTextNode(this.get_display_text()));
        var e = this.utils.get_cached_width(this.text_element);
        this.text_margin = e < this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD ? (this.theme.renderer.TEXT_MIN_WIDTH_IN_FIELD - e) / 2 : 0;
        this.size_.width += this.text_margin;
        this.text_element.setAttribute("y", String(this.size_.height / 2));
        this.text_element.setAttribute("x", String(this.size_.width - 3));
        this.size_.width += e + this.text_margin;
      }
    }
  }, {
    key: "render_arrow",
    value: function () {
      var e = this;
      if (this.field_group && this.source_block) {
        if (!this.arrow) {
          this.arrow = Object(je.draw_arrow)(this.source_block.workspace.options.dropdown.arrow_type);
          this.field_group.appendChild(this.arrow);
        }
        this.size_.width += this.source_block.workspace.options.dropdown.padding;
        this.arrow.setAttribute("transform", "translate(".concat(this.size_.width, ", ").concat(this.size_.height / 2 - 7, ")"));
        this.size_.width += this.source_block.workspace.options.dropdown.padding - 2;
        if (this.source_block.is_shadow()) {
          var t = function () {
            var t;
            var n = null === (t = e.source_block) || void 0 === t ? void 0 : t.get_parent();
            if (n && e.arrow) {
              e.arrow.style.fill = n.get_colour().toString();
            }
          };
          if (this.events.is_record_undo()) {
            t();
          } else {
            window.setTimeout(t);
          }
        } else {
          this.arrow.style.fill = this.source_block.get_colour().toString();
        }
      }
    }
  }, {
    key: "show_editor",
    value: function () {
      var e = Object(we.a)(Object(Ce.a)(n.prototype), "show_editor", this).call(this);
      if (!this.source_block) {
        return e;
      }
      var t = this.source_block.workspace.get_scale();
      e.style.paddingLeft = "".concat((this.padding_x + this.text_margin) * t, "px");
      e.style.textAlign = "start";
      this.menu = this.create_dropdown_element();
      return e;
    }
  }, {
    key: "on_html_input_change",
    value: function () {
      Object(we.a)(Object(Ce.a)(n.prototype), "on_html_input_change", this).call(this);
      if (this.html_input) {
        var e;
        var t = (null === (e = this.workspace_) || void 0 === e ? void 0 : e.get_scale()) || 1;
        this.html_input.style.paddingLeft = "".concat((this.padding_x + this.text_margin) * t, "px");
      }
      this.highlight_matched();
    }
  }, {
    key: "create_dropdown_element",
    value: function () {
      var e = this;
      this.menu_items = [];
      var t = document.createElement("div");
      t.classList.add("menu-wrapper");
      for (var n = this.dropdownConfig.get_options(), r = function (r) {
          var o = n[r].value.toString();
          var i = document.createElement("div");
          i.classList.add("menu-item");
          i.dataset.value = o;
          i.innerText = o;
          i.setAttribute("tabindex", "-1");
          i.style.outline = "none";
          if (o === e.get_value()) {
            i.classList.add("menu_item_selected");
          }
          t.appendChild(i);
          i.style.minWidth = "".concat(172, "px");
          i.addEventListener("click", function () {
            e.set_html_input_value(o);
            e.set_value(o);
            e.widget_div.hide();
          });
          e.menu_items.push(i);
        }, o = 0; o < n.length; o++) {
        r(o);
      }
      t.classList.add("blocklyDropdownMenu");
      var i = Object(Ae.create_dom)("div", {
        style: "position: fixed",
        class: "blocklyWidgetDiv"
      });
      i.appendChild(t);
      document.body.appendChild(i);
      i.style.display = "block";
      var a = Object(je.position_dropdown)(t, this);
      i.style.left = "".concat(a[0], "px");
      i.style.top = "".concat(a[1], "px");
      return i;
    }
  }, {
    key: "highlight_matched",
    value: function () {
      var e = this;
      if (this.menu) {
        for (var t = function (t, n) {
            var r = e.menu_items[t];
            if (e.get_value() === r.dataset.value) {
              r.classList.add("menu-item-hover");
              var o = r.getBoundingClientRect();
              var i = e.menu.getBoundingClientRect();
              var a = o.top < i.top;
              var s = o.bottom > i.bottom;
              if (a || s) {
                requestAnimationFrame(function () {
                  if (e.menu) {
                    r.scrollIntoView(a);
                    if (!e.menu.classList.contains("scroll-smooth")) {
                      e.menu.classList.add("scroll-smooth");
                    }
                  }
                });
              }
            } else {
              r.classList.remove("menu-item-hover");
            }
          }, n = 0, r = this.menu_items.length; n < r; n++) {
          t(n);
        }
      }
    }
  }, {
    key: "render_",
    value: function () {
      this.size_.width = 0;
      if (this.visible_ && this.field_group && this.source_block) {
        this.size_.width = this.padding_x;
        this.update_height();
        this.render_text_element();
        this.render_arrow();
      }
    }
  }, {
    key: "widget_dispose",
    value: function () {
      var e = this;
      return function () {
        Object(we.a)(Object(Ce.a)(n.prototype), "widget_dispose", e).call(e)();
        if (e.menu) {
          Object(Ae.remove_node)(e.menu);
        }
        e.menu_items = [];
        e.menu = void 0;
        e.widget_div.hide();
      };
    }
  }, {
    key: "dispose",
    value: function () {
      Object(we.a)(Object(Ce.a)(n.prototype), "dispose", this).call(this);
      if (this.menu) {
        Object(Ae.remove_node)(this.menu);
      }
      this.widget_div.hide_if_owner(this);
    }
  }]);
  return n;
}(Ie.FieldNumber);
Ne.field_type = "field_coco_number_dropdown";
var Re = require("../135");
var ke = Ie.FieldNumber.prototype.show_editor;
Ie.FieldNumber.prototype.show_editor = function () {
  var e = this;
  var t = m.BU.dom.create_dom("input", "blocklyHtmlInput");
  if (!this.source_block) {
    return t;
  }
  ke.call(this);
  var n = this.get_absolute_xy();
  var r = this.source_block.is_shadow() && this.source_block.parent_block || this.source_block;
  var o = r.workspace.get_scale();
  var i = this.get_size().height;
  var a = r.is_wrap_shape() ? 42 : r.height + 2;
  var s = n[1] + i * o / 2 + a * o / 2;
  var c = 0;
  var l = 100;
  var u = "";
  var d = "";
  if ("audio_set_volume_or_rate" === r.type) {
    var p = r.get_field_value("OP");
    c = "SOUND_VOLUME" === p ? Re.g : Re.e;
    l = "SOUND_VOLUME" === p ? Re.f : Re.d;
    u = "SOUND_VOLUME" === p ? "小" : "慢";
    d = "SOUND_VOLUME" === p ? "大" : "快";
    this.set_constraints(c, l, 1);
    var f = {
      payload: {
        value: this.get_value(),
        left: n[0],
        top: s,
        min: c,
        max: l,
        minText: u,
        maxText: d,
        setValue: function (t) {
          e.set_value(t);
        }
      },
      type: "SHOW_BLOCKS_SLIDER"
    };
    Object(O.c)().dispatchAction(f);
  }
  return t;
};
var xe = Ie.FieldNumber.prototype.set_value;
Ie.FieldNumber.prototype.set_value = function (e) {
  xe.call(this, e);
  if (Object(O.c)().getSliderVisible()) {
    if (!e || isNaN(Number(e))) {
      return;
    }
    Object(O.c)().dispatchAction({
      payload: {
        value: e
      },
      type: "UPDATE_BLOCKS_SLIDER_VALUE"
    });
  }
};
var De = require("./374");
var Me = require("./500");
var Le = require("../38/index");
var Pe = require("../2");
var Be = require("../28/index");
var Fe = De.FieldTextInput.prototype.show_editor;
De.FieldTextInput.prototype.show_editor = function () {
  var e;
  var t = this;
  var n = Fe.call(this);
  if ("text_rich_text" === (null === (e = this.source_block) || void 0 === e ? void 0 : e.type)) {
    Object(Le.a)(Object(Pe.Bh)({
      content: this.get_value(),
      onConfirm: function (e) {
        t.set_value(Object(Be.i)(e));
      }
    }));
    m.Blink.widget_div.hide();
  }
  return n;
};
De.FieldTextInput.prototype.get_display_text = function () {
  var e;
  if ("text_rich_text" === (null === (e = this.source_block) || void 0 === e ? void 0 : e.type)) {
    var t = this.get_value();
    var n = document.createElement("div");
    n.innerHTML = t;
    var r = n.innerText;
    return Object(Be.i)(r);
  }
  return Me.Field.prototype.get_display_text.call(this);
};
var Ge = require("./726");
Ge.FieldColour.prototype.show_editor = function () {
  var e;
  var t = this;
  m.Blink.widget_div.hide();
  this.widget_div.show(this, this.widget_dispose.bind(this));
  var n = this.get_absolute_xy();
  var r = (null === (e = this.source_block) || void 0 === e ? void 0 : e.workspace.get_scale()) || 1;
  var o = this.get_value();
  var i = window.innerWidth;
  var a = window.innerHeight;
  var s = 40 * r;
  var c = -10 * r;
  if (n[1] + s + 322 > a) {
    n[1] -= 362;
  }
  if (n[0] + c + 288 > i) {
    n[0] -= 288;
  }
  var l = n[1] + s;
  var u = n[0] + c;
  var d = Object(Pe.hj)({
    value: o,
    selectValue: function (e) {
      var n;
      if (!(null === (n = t.border_rect) || void 0 === n)) {
        n.setAttribute("fill", e);
      }
    },
    setValue: function (e) {
      t.set_value(Object(de.nb)(e));
    },
    top: l,
    left: u
  });
  Object(O.c)().dispatchAction(d);
};
var Ue;
var We = require("../21/index");
function He() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DOC_KEYS_WRAPPER", "DOC_KEYS");
      if (n) {
        var r;
        var o = Object(O.c)().getLocalDocumentFieldList(null === (r = t.get_new_value()) || void 0 === r ? void 0 : r.toString(), n);
        n.set_value(o[0].value);
      }
    }
  });
}
function Ve() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DOC_KEYS_WRAPPER", "DOC_KEYS");
      if (n) {
        var r;
        var o = Object(O.c)().getCloudDocumentFieldList(null === (r = t.get_new_value()) || void 0 === r ? void 0 : r.toString(), n);
        n.set_value(o[0].value);
      }
    }
  });
}
function ze() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("INPUT_COLUMN", "COLUMNS");
      var r = e.get_shadow_field("UPDATE_COLUMN_VALUE", "COLUMNS");
      if (n) {
        var o;
        var i = Object(O.c)().getCloudDBColumnList(null === (o = t.get_new_value()) || void 0 === o ? void 0 : o.toString(), n);
        n.set_value(i[0].value);
      }
      if (r) {
        var a;
        var s = Object(O.c)().getCloudDBColumnList(null === (a = t.get_new_value()) || void 0 === a ? void 0 : a.toString(), r);
        r.set_value(s[0].value);
      }
    }
  });
}
function Ye() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("COLUMN_WRAPPER", "COLUMN");
      if (n) {
        var r;
        var o = Object(O.c)().getTableDataColumnList(null === (r = t.get_new_value()) || void 0 === r ? void 0 : r.toString());
        n.set_value(o[0].value);
      }
    }
  });
}
function Ke() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = Object(We.getActorActionInputField)(e);
      if (n) {
        var r = Object(O.c)().getActorActionList(t.get_new_value())[0].value || g.h;
        if (!(null === n || void 0 === n)) {
          n.set_value(r);
        }
      }
    }
  });
}
function qe() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DICT_KEYS_WRAPPER", "KEYS");
      if (n) {
        var r = Object(O.c)().getCloudDictKeyList(t.get_new_value());
        n.set_value(r[0].value);
      }
    }
  });
}
function Xe() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("INPUT_COLUMN", "COLUMNS");
      if (n) {
        var r = Object(O.c)().getCloudTableColumnList(t.get_new_value());
        n.set_value(r[0].value);
      }
    }
  });
}
function Qe() {
  m.Blink.extensions.register(Ue.UPDATE_KEY_AFTER_SELECTING_DOC, He);
  m.Blink.extensions.register(Ue.UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC, Ve);
  m.Blink.extensions.register(Ue.UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB, ze);
  m.Blink.extensions.register(Ue.UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA, Ye);
  m.Blink.extensions.register(Ue.UPDATE_ACTION_AFTER_SELECT_ACTOR, Ke);
  m.Blink.extensions.register(Ue.UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT, qe);
  m.Blink.extensions.register(Ue.UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE, Xe);
  m.Blink.registry.field.register(ue.a.field_type, ue.a);
  m.Blink.registry.field.register(Ne.field_type, Ne);
  O.e.apply(void 0, [m.Blink, ue.a, s, c, o, i, u, r, a, d, l, p, f].concat(Object(h.a)(Object(g.M)())));
  var e = Object(O.a)();
  m.Blink.define_blocks_with_json_array(e);
}
function Ze() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zh-CN";
  return be[e];
}
!function (e) {
  e.UPDATE_KEY_AFTER_SELECTING_DOC = "UPDATE_KEY_AFTER_SELECTING_DOC";
  e.UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC = "UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC";
  e.UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB = "UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB";
  e.UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA = "UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA";
  e.UPDATE_ACTION_AFTER_SELECT_ACTOR = "UPDATE_ACTION_AFTER_SELECT_ACTOR";
  e.UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT = "UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT";
  e.UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE = "UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE";
}(Ue || (Ue = {}));