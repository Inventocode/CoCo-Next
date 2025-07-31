"use strict";

export { Xe as d };
export { Qe as b };
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
  e.insertBlockXML("phone_vibrate", '<value name="SECONDS">\n      <shadow type="math_number">\n        <field name="NUM" constraints="0,,0.1">1</field>\n      </shadow>\n    </value>');
  e.insertBlockXML("date_get_current_date");
  e.insertBlockXML("date_check_date_is_equal", '<value name="DATE_A">\n      <shadow type="date_get_current_date"></shadow>\n    </value>\n    <value name="DATE_B">\n      <shadow type="date_get_current_date"></shadow>\n    </value>');
  e.insertBlockXML("date_get_date_minus_operation", '<value name="DATE_A">\n      <shadow type="date_get_current_date"></shadow>\n    </value>\n    <value name="DATE_B">\n      <shadow type="date_get_current_date"></shadow>\n    </value>');
  e.insertBlockXML("brightness_set_brightness", '<value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM" constraints="0,100,1">50</field>\n      </shadow>\n    </value>');
  e.insertBlockXML("brightness_get_brightness");
  e.insertBlockXML("brightness_set_keep_screen_on", '<value name="VALUE">\n      <shadow type="widget_boolean">\n        <field name="BOOL">TRUE</field>\n      </shadow>\n    </value>');
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
      default_shadow: '<shadow type="screen_on_open_get_param_value" />'
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
  e.insertBlockXML("screen_navigate_to_by_value", '    <value name="PARAMETER">\n  <shadow type="text">\n    <field name="TEXT">\u53c2\u6570</field>\n  </shadow>\n</value>');
  e.insertBlockXML("new_screen_navigate_to", '<value name="SCREEN_ID">\n      <shadow type="screen_input"></shadow>\n    </value>', !0);
  e.insertBlockXML("new_screen_navigate_to_by_value", '<value name="SCREEN_ID">\n        <shadow type="screen_input"></shadow>\n      </value>\n      <value name="PARAMETER">\n    <shadow type="text">\n      <field name="TEXT">\u53c2\u6570</field>\n    </shadow>\n  </value>', !0);
  e.insertBlockXML("broadcast_on_receive", '<value name="BROADCAST">\n      <shadow type="broadcast_input"></shadow>\n    </value>', !0);
  e.insertBlockXML("broadcast_send", '<value name="BROADCAST">\n      <shadow type="broadcast_input"></shadow>\n    </value>', !0);
  e.insertBlockXML("broadcast_send_and_wait", '<value name="BROADCAST">\n      <shadow type="broadcast_input"></shadow>\n    </value>', !0);
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
      default_shadow: '<shadow type="controls_for_value" />'
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
      default_shadow: '<shadow type="controls_for_value" />'
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
  e.insertBlockXML("controls_if", ['\n    <value name="IF0">\n      <empty type="logic_empty">\n        <field name="BOOL"></field>\n      </empty>\n    </value>\n  ', ' \n    <mutation else="1"></mutation>\n    <value name="IF0">\n      <empty type="logic_empty">\n        <field name="BOOL"></field>\n      </empty>\n    </value>']);
  e.insertBlockXML("controls_for_closed_range", ['\n    <value name="FROM">\n      <shadow type="math_number">\n        <field name="NUM" constraints=",,1">1</field>\n      </shadow>\n    </value>\n    <value name="TO">\n      <shadow type="math_number">\n        <field name="NUM" constraints=",,1">10</field>\n      </shadow>\n    </value>\n    <value name="BY">\n      <shadow type="math_number">\n        <field name="NUM" constraints=",,1">1</field>\n      </shadow>\n    </value>']);
  e.insertBlockXML("loop_finitely", '\n    <value name="TIMES">\n      <shadow type="math_number">\n        <field name="NUM" constraints="1,,1">20</field>\n      </shadow>\n    </value>\n    ');
  e.insertBlockXML("sleep", '\n    <value name="SECONDS">\n      <shadow type="math_number">\n        <field name="NUM" constraints="0">1</field>\n      </shadow>\n    </value>\n    ');
  e.insertBlockXML("loop_conditionally", '\n    <value name="CONDITION">\n      <empty type="logic_empty">\n        <field name="BOOL"></field>\n      </empty>\n    </value>\n  ');
  e.insertBlockXML("loop_infinitely");
  e.insertBlockXML("wait_until", '\n    <value name="CONDITION">\n      <empty type="logic_empty">\n        <field name="BOOL"></field>\n      </empty>\n    </value>\n    ');
  e.insertBlockXML("console_log", '\n    <mutation items="0"></mutation>\n    <value name="VALUE">\n      <shadow type="text">\n        <field name="TEXT">'.concat(t.Msg.CONSOLE_LOG_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "));
  e.insertBlockXML("new_console_log", '\n    <mutation items="0"></mutation>\n    <value name="VALUE">\n      <shadow type="text">\n        <field name="TEXT">'.concat(t.Msg.CONSOLE_LOG_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "));
  e.insertBlockXML("console_error", '\n    <mutation items="0"></mutation>\n    <value name="VALUE">\n      <shadow type="text">\n        <field name="TEXT">'.concat(t.Msg.CONSOLE_ERROR_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n    "));
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
  var t = '<shadow type="text"><field name="TEXT"></field></shadow>';
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
  e.insertBlockXML("variables_set", '<value name="VALUE">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n    </value>', !0);
  e.insertBlockXML("variables_change", '<value name="VALUE">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n    </value>', !0);
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
var U = '<shadow type="math_number"><field name="NUM" constraints="1,,1">1</field></shadow>';
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
      default_shadow: '<shadow type="array_current_item" />'
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
  e.insertBlockXML("lists_replace", '\n    <mutation pos=\'nth\'></mutation>\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="INDEX">\n      <shadow type="math_number">\n        <field name="NUM" constraints="1,,1">1</field>\n      </shadow>\n    </value>\n    <value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n    ', !0);
  e.insertBlockXML("array_remove_item", '\n    <mutation pos=\'nth\'></mutation>\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="INDEX">\n      <shadow type="math_number">\n        <field name="NUM" constraints=\'1,,1\'>1</field>\n      </shadow>\n    </value>\n  ', !0);
  e.insertBlockXML("array_get", void 0, !0);
  e.insertBlockXML("lists_append", '\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n  ', !0);
  e.insertBlockXML("lists_insert_value", '\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="INDEX">\n      <shadow type="math_number">\n        <field name="NUM" constraints=\'1,,1\'>1</field>\n      </shadow>\n    </value>\n    <value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n  ', !0);
  e.insertBlockXML("array_copy", '\n    <value name="FROM">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="TO">\n      <shadow type="array_get"></shadow>\n    </value>\n    ', !0);
  e.insertBlockXML("array_get_item", '\n    <mutation pos=\'nth\'></mutation>\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="INDEX">\n      <shadow type="math_number">\n        <field name="NUM" constraints=\'1,,1\'>1</field>\n      </shadow>\n    </value>\n  ', !0);
  e.insertBlockXML("array_get_length", '\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    ', !0);
  e.insertBlockXML("lists_index_of", '\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n  ', !0);
  e.insertBlockXML("lists_is_exist", '\n    <value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>\n    <value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM">0</field>\n      </shadow>\n    </value>\n  ', !0);
  e.insertBlockXML("array_foreach", '<value name="ARRAY">\n      <shadow type="array_get"></shadow>\n    </value>', !0);
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
  e.insertBlockXML("object_set_item", '<value name="OBJECT">\n      <shadow type="object_get"></shadow>\n    </value>\n    <value name="KEY">\n      <shadow type="text">\n        <field name="TEXT">key</field>\n      </shadow>\n    </value>\n    <value name="VALUE">\n      <shadow type="math_number">\n        <field name="NUM" allow_text="true">0</field>\n      </shadow>\n    </value>', !0);
  e.insertBlockXML("object_delete_item", '<value name="OBJECT">\n      <shadow type="object_get"></shadow>\n    </value>\n    <value name="KEY">\n      <shadow type="text">\n        <field name="TEXT">key</field>\n      </shadow>\n    </value>', !0);
  e.insertBlockXML("object_clear", '<value name="OBJECT">\n      <shadow type="object_get"></shadow>\n    </value>', !0);
  e.insertBlockXML("object_length", '<value name="OBJECT">\n      <shadow type="object_get"></shadow>\n    </value>', !0);
  e.insertBlockXML("object_get_item", '<value name="OBJECT">\n      <shadow type="object_get"></shadow>\n    </value>\n    <value name="KEY">\n      <shadow type="text">\n        <field name="TEXT">key</field>\n      </shadow>\n    </value>', !0);
  e.insertBlockXML("object_include_key", '<value name="OBJECT">\n      <shadow type="object_get"></shadow>\n    </value>\n    <value name="KEY">\n      <shadow type="text">\n        <field name="TEXT">key</field>\n      </shadow>\n    </value>', !0);
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
          var a = this.append_shadow_input(i, '<shadow type="text"><field name="TEXT">key'.concat(o + 1, "</field></shadow>"));
          a.set_check(["Number", "String"]);
          if (0 !== o) {
            a.append_field(",");
          }
        }
        var s = "VALUE".concat(o);
        if (!this.get_input(s)) {
          this.append_shadow_input(s, '<shadow type="math_number"><field name="NUM" allow_text="true">0</field></shadow>').append_field(":");
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
  e.insertBlockXML("when", '\n      <value name="CONDITION">\n        <empty type="logic_empty">\n          <field name="BOOL"></field>\n        </empty>\n      </value>\n      ');
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
      options: [["=", F.EQUAL], ["\u2260", F.UNEQUAL], ["<", F.LESS_THAN], ["\u2264", F.LESS_THAN_OR_EQUAL], [">", F.GREATER_THAN], ["\u2265", F.GREATER_THAN_OR_EQUAL]]
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
  e.insertBlockXML("math_shadow_number", '\n  <value name="VALUE">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("math_calculate_expression", '\n  <value name="INPUT">\n    <shadow type="text">\n      <field name="TEXT">1+2</field>\n    </shadow>\n  </value>\n  ');
  e.insertBlockXML("math_operation", '\n  <value name="A">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n  <value name="B">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("math_random_integer", '\n  <value name="INPUT_A">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n  <value name="INPUT_B">\n    <shadow type="math_number">\n      <field name="NUM">5</field>\n    </shadow>\n  </value>\n  ');
  e.insertBlockXML("math_number_property", '\n  <mutation divisor_input="false"></mutation>\n  <field name="PROPERTY">EVEN</field>\n  <value name="NUMBER_TO_CHECK">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("math_check_divisible", '\n  <value name="NUMBER_TO_CHECK">\n    <shadow type="math_number">\n      <field name="NUM">9</field>\n    </shadow>\n  </value>\n  <value name="DIVISOR">\n    <shadow type="math_number">\n      <field name="NUM">3</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("logic_operation", '\n  <value name="A">\n    <empty type="logic_empty">\n      <field name="BOOL"></field>\n    </empty>\n  </value>\n  <value name="B">\n    <empty type="logic_empty">\n      <field name="BOOL"></field>\n    </empty>\n  </value>\n  ');
  e.insertBlockXML("math_complex_operation", '\n  <value name="NUM">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("math_modulo", '\n  <value name="DIVIDEND">\n    <shadow type="math_number">\n      <field name="NUM">64</field>\n    </shadow>\n  </value>\n  <value name="DIVISOR">\n    <shadow type="math_number">\n      <field name="NUM">10</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("math_trig", '\n  <field name="OP">SIN</field>\n  <value name="NUM">\n    <shadow type="math_number">\n      <field name="NUM">45</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("math_round", '\n  <field name="OP">ROUND</field>\n  <value name="NUM">\n    <shadow type="math_number">\n      <field name="NUM">3.1</field>\n    </shadow>\n  </value>\n  ');
  e.insertBlockXML("math_compare", '\n  <value name="A">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n  <value name="B">\n    <shadow type="math_number">\n      <field name="NUM">0</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("logic_boolean");
  e.insertBlockXML("logic_negate", '\n  <value name="BOOL">\n    <empty type="logic_empty">\n      <field name="BOOL"></field>\n    </empty>\n  </value>\n');
  e.insertBlockXML("text_shadow", '\n  <value name="VALUE">\n    <shadow type="text">\n      <field name="TEXT">Hello</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("text_convert_type", '\n  <value name="ORIGINAL_VALUE">\n    <shadow type="text">\n      <field name="TEXT">123</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("text_join", '\n  <mutation items="2"></mutation>\n  <value name="ADD0">\n    <shadow type="text">\n      <field name="TEXT">ab</field>\n    </shadow>\n  </value>\n  <value name="ADD1">\n    <shadow type="text">\n      <field name="TEXT">c</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("text_get_length", '\n  <value name="VALUE">\n    <shadow type="text">\n      <field name="TEXT">abc</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("text_slice", '\n      <mutation items="1"></mutation>\n      <value name="STRING">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n      <value name="NUM0">\n        <shadow type="math_number">\n          <field name="NUM" constraints="1,,1">1</field>\n        </shadow>\n      </value>\n    ');
  e.insertBlockXML("text_check_contain", '\n  <value name="TEXT1">\n    <shadow type="text">\n      <field name="TEXT">abc</field>\n    </shadow>\n  </value>\n  <value name="TEXT2">\n    <shadow type="text">\n      <field name="TEXT">abc</field>\n    </shadow>\n  </value>\n');
  e.insertBlockXML("text_split_text", '\n  <value name="STR_TO_SPLIT">\n    <shadow type="text">\n      <field name="TEXT">1,2,3,4</field>\n    </shadow>\n  </value>\n  <value name="SPLIT_STR">\n    <shadow type="text">\n      <field name="TEXT">,</field>\n    </shadow>\n  </value>\n');
}
function te(e, t) {
  e.Blocks.math_trig = {
    shadow: '<shadow type="math_number"><field name="NUM">45</field></shadow>',
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
  var n = '<shadow type="math_number"><field name="NUM" constraints="1,,1">2</field></shadow>';
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
var de = require("../15/index");
var pe = require("../35/85");
function fe(e, t) {
  var n;
  if (Array.isArray(e)) {
    var r = typeof t;
    n = "number" === r || "string" === r || "boolean" === r && e.includes(r) ? r : e[0];
  } else {
    n = e;
  }
  var o = '<shadow type="text">\n    <field name="TEXT">'.concat(t, "</field>\n  </shadow>");
  switch (n) {
    case "number":
      o = '<shadow type="math_number">\n      <field name="NUM">'.concat(t, "</field>\n    </shadow>");
      break;
    case "boolean":
      o = '<shadow type="widget_boolean">\n      <field name="BOOL">'.concat(t ? "TRUE" : "FALSE", "</field>\n    </shadow>");
      break;
    case "color":
      o = '<shadow type="color_picker">\n      <field name="COLOR_PALETTE">'.concat(Object(de.i)(t) ? "#ffffff" : t, "</field>\n    </shadow>");
      break;
    case "image":
      o = '<shadow type="image_file_list_dropdown">\n        <field name="IMAGE_FILE_ID">'.concat(g.h, "</field>\n      </shadow>");
      break;
    case "icon":
      o = '<shadow type="icon_file_list_dropdown">\n          <field name="ICON_FILE_ID">'.concat(g.h, "</field>\n        </shadow>");
      break;
    case "multilineString":
      o = '<shadow type="text_multiline">\n        <field name="TEXT">'.concat(t, "</field>\n      </shadow>");
      break;
    case "richTextString":
      o = '<shadow type="text_rich_text">\n          <field name="TEXT">'.concat(function (e) {
        var t = {
          "&": "&amp;",
          '"': "&quot;",
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
          var d = "\u4efb\u610f" + Object(le.k)(this.widgetType);
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
        if (this.append_statement_input("DO", void 0, g), i ? (this.set_field_value(l, "EVENT"), i.forEach(function (t) {
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
        })) : this.set_field_value(l + t.Msg.WIDGET_EVENT_SUFFIX, "EVENT"), o.forEach(function (t) {
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
            e.append_shadow_input(i, '<shadow type="widget_event_param">\n              <field name="PARAM_NAME">'.concat(a, '</field>\n              <mutation widget_type="').concat(e.widgetType, '" event="').concat(e.event, '" param="').concat(n, '"></mutation>\n            </shadow>'), "DO");
          }
        }), this.isAnyWidget) {
          var _ = le.a;
          var v = "PARAM_".concat(_);
          var b = le.b;
          this.append_shadow_input(v, '<shadow type="widget_event_param">\n          <field name="PARAM_NAME">'.concat(b, '</field>\n          <mutation widget_type="').concat(this.widgetType, '" event="').concat(this.event, '" param="').concat(_, '"></mutation>\n        </shadow>'), "DO");
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
        if (this.set_field_value(t.Msg.WIDGET_OF, "PROPERTY"), this.isAnyWidget) {
          var p;
          var f = Object(le.k)(this.widgetType);
          if (!(null === (p = this.get_input("WIDGET_ID_CONTAINER")) || void 0 === p)) {
            p.append_field(f);
          }
          this.append_shadow_input("WIDGET_ID", '<empty type="widget_any_id"></empty>', "PROPERTY");
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
        if (this.set_output(!0, _), c) {
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
        if ("__position" !== r.key && "__size" !== r.key || (y = !0), "__visible" !== r.key && "__disabled" !== r.key) {
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
          this.append_shadow_input("WIDGET_ID", '<empty type="widget_any_id"></empty>', "PROPERTY");
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
                  if (a.set_value(String(t.defaultValue)), "number" === t.valueType) {
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
          if (null === r || void 0 === r || r.append_field(o), this.append_shadow_input("WIDGET_ID", '<empty type="widget_any_id"></empty>'), "__setVisible" === n.key) {
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
        if (f.color && this.set_colour(f.color), h) {
          this.set_next_statement(!1);
          this.set_previous_statement(!1);
          var E = Object(le.g)(h);
          this.set_output(!0, E);
        }
        var w = Object(pe.a)(this.widgetType, l);
        if (w && this.append_dummy_input().append_field(w, "METHOD"), d) {
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
            if (g.set_check(_), u && g.insert_field_at(0, u, "".concat(d, "_LABEL")), "number" === o && l) {
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
    if (p.forEach(function (o) {
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
    }), "__setVisible" === l.key) {
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
    PRESS: "\u70b9\u51fb",
    PRESS_IN: "\u6309\u4e0b",
    PRESS_OUT: "\u677e\u5f00",
    PRESS_HOLD: "\u6309\u4f4f",
    SIZE: "\u5c3a\u5bf8\u5927\u5c0f",
    HUGE: "\u8d85\u5927",
    LARGE: "\u5927",
    MEDIUM: "\u4e2d",
    SMALL: "\u5c0f",
    TINY: "\u8d85\u5c0f",
    INCREASE: "\u589e\u52a0",
    DECREASE: "\u51cf\u5c11",
    SET: "\u8bbe\u7f6e",
    OF: "\u7684",
    IMAGE: "\u56fe\u7247",
    CONTENT: "\u6587\u672c\u5185\u5bb9",
    TEXT_CONTENT: "\u6587\u672c",
    TEXT_COLOR: "\u6587\u672c\u989c\u8272",
    BACKGROUND_COLOR: "\u80cc\u666f\u989c\u8272",
    ALIGN: "\u5bf9\u9f50\u65b9\u5f0f",
    LEFT_ALIGN: "\u5c45\u5de6",
    CENTER_ALIGN: "\u5c45\u4e2d",
    RIGHT_ALIGN: "\u5c45\u53f3",
    TOP_ALIGN: "\u5c45\u4e0a",
    BOTTOM_ALIGN: "\u5c45\u4e0b",
    FONT_SIZE: "\u5b57\u53f7",
    HEIGHT: "\u9ad8\u5ea6",
    WIDTH: "\u5bbd\u5ea6",
    POSITION_X: "X\u5750\u6807",
    POSITION_Y: "Y\u5750\u6807",
    TEXT: "\u6587\u672c",
    SHOW: "\u663e\u793a",
    HIDE: "\u9690\u85cf",
    DISABLED: "\u7981\u7528",
    ABLE: "\u542f\u7528",
    BRIGHTNESS: "\u4eae\u5ea6",
    ALPHA: "\u900f\u660e\u5ea6",
    HUE: "\u8272\u76f8",
    SATURATION: "\u9971\u548c\u5ea6",
    HORIZONTAL: "\u6c34\u5e73",
    HORIZONTAL_FLIPPED: "\u6c34\u5e73\u7ffb\u8f6c",
    VERTICAL_FLIPPED: "\u5782\u76f4\u7ffb\u8f6c",
    VERTICAL: "\u5782\u76f4",
    MOVE_TOP: "\u6700\u4e0a\u5c42",
    MOVE_BOTTOM: "\u6700\u5e95\u5c42",
    MOVE_UP: "\u4e0a\u4e00\u5c42",
    MOVE_DOWN: "\u4e0b\u4e00\u5c42",
    "opacity.invisible": "\u900f\u660e",
    "opacity.visible": "\u4e0d\u900f\u660e",
    INVALID_BLOCK: "\u65e0\u6548\u79ef\u6728\uff1a\u76f8\u5173\u63a7\u4ef6\u5df2\u88ab\u79fb\u9664",
    COLOR: "\u989c\u8272",
    MODE: "\u6837\u5f0f",
    ICON: "\u56fe\u6807",
    SYSTEM: "\u7cfb\u7edf",
    EVENT: "\u4e8b\u4ef6",
    CONTROL: "\u63a7\u5236",
    PHONE: "\u529f\u80fd",
    OPERATOR: "\u8fd0\u7b97",
    PRIMITIVE: "\u53d8\u91cf",
    ARRAY: "\u5217\u8868",
    OBJECT: "\u5b57\u5178",
    FUNCTION: "\u51fd\u6570",
    STORAGE: "\u6570\u636e\u5e93",
    SENSE: "\u4f20\u611f",
    COMPONENTS: "\u754c\u9762\u63a7\u4ef6",
    INVISIBLE_COMPONENTS: "\u5c4f\u5e55\u529f\u80fd",
    GLOBAL_COMPONENTS: "\u5168\u5c40\u529f\u80fd",
    ANY_COMPONENTS: "\u4efb\u610f\u63a7\u4ef6",
    WHEN: "%1 \u5f53 %2 %3",
    REPEAT_FOREVER: "\u91cd\u590d\u6267\u884c %1 %2",
    REPEAT: "\u91cd\u590d\u6267\u884c %1 \u6b21 %2 %3",
    REPEAT_WHEN: "\u5f53 %1 \u91cd\u590d\u6267\u884c %2 %3",
    REPEAT_WHEN_TOOLTIP: "\u5982\u679c\u503c\u4e3a\u771f(true)\uff0c\u5219\u91cd\u590d\u6267\u884cC\u53e3\u5185\u7684\u4ee3\u7801\u3002\n\u5982\u679c\u503c\u4e3a\u5047(false)\uff0c\u5219\u7ed3\u675f\u91cd\u590d\u6267\u884c\u3002",
    BREAK: "\u9000\u51fa\u5faa\u73af",
    BREAK_TOOLTIP: "\u7ed3\u675f\u5faa\u73af\uff0c\u6267\u884c\u91cd\u590d\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\u3002",
    WAIT_SECS: "\u7b49\u5f85 %1 \u79d2",
    SLEEP_UTIL: "\u4fdd\u6301\u7b49\u5f85\u76f4\u5230%1",
    CONTINUE: "\u8df3\u8fc7\u6b64\u6b21\u5faa\u73af\uff0c\u8fdb\u5165\u4e0b\u6b21\u5faa\u73af",
    CONSOLE_LOG: "\u5728\u63a7\u5236\u53f0\u6253\u5370 %1",
    NEW_CONSOLE_LOG: "\u5728\u63a7\u5236\u53f0 %1 %2",
    CONSOLE_ERROR: "\u5728\u63a7\u5236\u53f0\u62a5\u9519 %1",
    TO_LOG: "\u6253\u5370",
    TO_ERROR: "\u62a5\u9519",
    TO_WARNING: "\u9884\u8b66",
    CONSOLE_LOG_DEFAULT_VALUE: "\u8c03\u8bd5\u4fe1\u606f",
    CONSOLE_ERROR_DEFAULT_VALUE: "\u62a5\u9519\u4fe1\u606f",
    CONTROLS_FOR: "\u91cd\u590d\u6267\u884c %1 \u4ece %2 \u5230 %3 \u524d\uff0c\u95f4\u9694 %4",
    CONTROLS_FOR_TOOLTIP: "for\u5faa\u73af\u79ef\u6728\u3002\u53d8\u91cf\u201c\u6570\u5b57\u201d\u521d\u59cb\u65f6\u4e3a1\uff0c\u6bcf\u6b21\u91cd\u590d\u6267\u884c\u540e\u589e\u52a01\uff1b\u76f4\u5230\u201c\u6570\u5b57\u201d\u7b49\u4e8e10\u65f6\uff0c\u7ed3\u675f\u91cd\u590d\u6267\u884c\u3002",
    CONTROLS_FOR_CLOSED_RANGE: "\u91cd\u590d\u6267\u884c %1 \u4ece %2 \u5230 %3\uff0c\u95f4\u9694 %4",
    CONTROLS_FOR_CLOSED_RANGE_TOOLTIP: "for \u5faa\u73af\u79ef\u6728\u3002\u53d8\u91cf\u201c\u6570\u5b57\u201d\u521d\u59cb\u503c\u4e3a1\uff0c\u6bcf\u6b21\u91cd\u590d\u6267\u884c\u540e\u589e\u52a01\uff1b\u5f53\u201c\u6570\u5b57\u201d\u5c0f\u4e8e\u6216\u8005\u7b49\u4e8e10\u65f6\uff0c\u6267\u884c\u5f00\u53e3\u91cc\u7684\u8bed\u53e5",
    CONTROLS_NUMBER: "\u6570\u5b57",
    VARIABLE: "\u53d8\u91cf",
    VARIABLES_GLOBAL: "\u5168\u5c40\u53d8\u91cf %1",
    VARIABLES_GET: "%1",
    VARIABLES_SET: "\u8bbe\u7f6e\u53d8\u91cf %1 \u7684\u503c\u4e3a %2",
    CHANGE_VARIABLE: "\u5c06\u53d8\u91cf %1 %2 %3",
    VARIABLES_CREATE: "\u521b\u5efa\u53d8\u91cf %1 \u4e3a %2",
    SHOW_HIDE_VARIABLE: "%1 \u53d8\u91cf %2",
    LISTS_APPEND: "\u6dfb\u52a0 %1 \u5230 %2 \u672b\u5c3e",
    INSERT_LISTS_ITEM_BY_INDEX: "\u63d2\u5165 %3 \u5230 %1 \u7684\u7b2c %2 \u9879",
    COPY_ARRAY: "\u590d\u5236 %1 \u5230 %2",
    GET_ARRAY_LENGTH: "%1 \u7684\u957f\u5ea6",
    GET_ARRAY_ITEM_INDEX: "%2 \u4e2d\u7b2c\u4e00\u4e2a %1 \u7684\u4f4d\u7f6e",
    CHECK_ITEM_IN_ARRAY: "%1 \u4e2d\u5305\u542b %2",
    LIST: "\u5217\u8868",
    NTH: "\u7b2c",
    LAST_ITEM: "\u6700\u540e\u4e00\u9879",
    ALL_ITEM: "\u6240\u6709\u9879",
    ITEM: "\u9879",
    DELETE: "\u5220\u9664",
    REPLACE: "\u66ff\u6362",
    IS: "\u4e3a",
    REMOVE_ARRAY_ITEM: "\u5220\u9664 %1 %2",
    ARRAY_ITEM: "\u9879",
    LISTS_REPLACE: "\u66ff\u6362 %1 %2",
    ARRAY_CURRENT_ITEM: "\u5f53\u524d\u9879",
    ARRAY_FOREACH: "\u904d\u5386 %1 \u53d6 %2\uff0c\u91cd\u590d\u6267\u884c %3 %4",
    OBJECT_GET_VALUE: "\u83b7\u53d6\u5bf9\u8c61 %1 \u5c5e\u6027\u4e3a %2 \u7684\u503c",
    OBJECT_GET_VALUE_TOOLTIP: '\u83b7\u53d6\u5bf9\u8c61\u4e2d\u67d0\u4e2a\u5c5e\u6027\u7684\u503c\u3002\u6bd4\u5982\u5bf9\u8c61A\u4e3a\uff1a\n{"province":"\u5e7f\u4e1c","city":"\u6df1\u5733","weather":"\u591a\u4e91"}\n\u90a3\u5176\u5c5e\u6027\u4e3aprovince\u7684\u503c\u4e3a\u5e7f\u4e1c\uff0c\u5c5e\u6027\u4e3acity\u7684\u503c\u4e3a\u6df1\u5733\uff0c\u5c5e\u6027\u4e3aweather\u7684\u503c\u4e3a\u591a\u4e91\u3002',
    OBJECT_JSON_PARSE: "\u5c06\u6587\u672c %1 \u89e3\u6790\u4e3a\u5bf9\u8c61",
    OBJECT_JSON_PARSE_TOOLTIP: "\u5c06\u7b26\u5408json\u7ed3\u6784\u7684\u6587\u672c\u5185\u5bb9\uff08\u6bd4\u5982HTTP\u5ba2\u6237\u7aef\u83b7\u5f97\u6587\u672c\u65f6\u7684\u6587\u672c\u5185\u5bb9\uff09\u8f6c\u6362\u6210\u5bf9\u8c61\u7c7b\u578b\uff0c\u5d4c\u5165\u5230\u201c\u83b7\u53d6\u5bf9\u8c61\uff1f\u5c5e\u6027\u4e3a\uff08\u201c\u201d\uff09\u7684\u503c\u201d\u79ef\u6728\u4e2d\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u83b7\u53d6\u5bf9\u8c61\u4e2d\u67d0\u4e2a\u5c5e\u6027\u7684\u503c\u3002",
    OBJECT_GET: "%1",
    OBJECT_SET_ITEM: "\u8bbe\u7f6e %1 \u952e %2 \u7684\u503c\u4e3a %3",
    OBJECT_DELETE_ITEM: "\u5220\u9664 %1 \u4e2d\u7684\u952e %2",
    OBJECT_CLEAR: "\u6e05\u7a7a %1",
    OBJECT_LENGTH: "%1 \u952e\u7684\u603b\u6570",
    OBJECT_GET_ITEM: "%1 \u952e %2 \u7684\u503c",
    OBJECT_INCLUDE_KEY: "\u952e %2 \u5b58\u5728\u4e8e %1",
    MATH_IS: "\u662f",
    MATH_EVEN: "\u5076\u6570",
    MATH_ODD: "\u5947\u6570",
    MATH_PRIME: "\u8d28\u6570",
    MATH_WHOLE: "\u6574\u6570",
    MATH_POSITIVE: "\u6b63\u6570",
    MATH_NEGATIVE: "\u8d1f\u6570",
    MATH_ROUND_OPERATOR_ROUND: "\u56db\u820d\u4e94\u5165",
    MATH_ROUND_OPERATOR_CEIL: "\u5411\u4e0a\u820d\u5165",
    MATH_ROUND_OPERATOR_FLOOR: "\u5411\u4e0b\u820d\u5165",
    REMINDER_OPERATION: "%1 \xf7 %2 \u7684\u4f59\u6570",
    RANDOM_NUM: "\u5728 %1 \u5230 %2 \u95f4\u968f\u673a\u6574\u6570",
    DIVISIBLE_BY: "%1 \u80fd\u88ab %2 \u6574\u9664",
    CALCULATE: "\u6570\u5b66\u8fd0\u7b97 %1",
    TEXT_SELECT: "%1 \u7684\u7b2c %2 \u5230\u7b2c %3 \u4e2a\u5b57\u7b26",
    TEXT_LENGTH: "%1 \u7684\u957f\u5ea6",
    TEXT_CONTAIN: "%1 \u5305\u542b %2",
    TEXT_SPLIT: "\u628a %1 \u6309 %2 \u5206\u5f00\u6210\u5217\u8868",
    CONVERT_TYPE: "\u628a %1 \u8f6c\u6362\u4e3a %2 \u7c7b\u578b",
    NUMBER_TYPE: "\u6570\u5b57",
    STRING_TYPE: "\u5b57\u7b26\u4e32",
    BOOLEAN_TYPE: "\u5e03\u5c14\u503c",
    TEXT_SLICE: "%1 \u7684\u7b2c %2",
    OPERATORS_TEXT_SELECT_CHANGEABLE_TO: "\u5230\u7b2c",
    OPERATORS_TEXT_SELECT_CHANGEABLE_END: "\u4e2a\u5b57\u7b26\u4e32",
    APP_ON_MOUNT: "%1 \u5f53\u6253\u5f00\u5e94\u7528\u65f6 %2 %3",
    APP_ON_SWITCH: "%1 \u5f53\u5e94\u7528 %2 \u65f6 %3 %4",
    APP_ACTIVE: "\u8fd4\u56de\u524d\u53f0",
    APP_BACKGROUND: "\u5207\u5230\u540e\u53f0",
    BROADCAST_ON_RECEIVE: "%1 \u5f53 \u6536\u5230 \u5e7f\u64ad %2 \u65f6 %3 %4",
    BROADCAST_SEND: "\u53d1\u9001\u5e7f\u64ad %1",
    BROADCAST_SEND_AND_WAIT: "\u53d1\u9001\u5e7f\u64ad %1 \u5e76\u7b49\u5f85",
    BROADCAST_INPUT_TOOLTIP: "\u5d4c\u5165\u201c\u5b57\u7b26\u4e32\u201d \uff1a\u6309 \u201c\u5e7f\u64ad\u540d\u79f0\u201d \u68c0\u7d22",
    SCREEN_ON_OPEN: "%1 \u5f53\u6253\u5f00\u5c4f\u5e55\u65f6",
    SCREEN_ON_OPEN_GET_PARAM: "%1 \u5f53\u6253\u5f00\u5c4f\u5e55\u65f6 %2 %3 %4",
    SCREEN_ON_PRESS: "%1 \u5f53\u5c4f\u5e55\u88ab\u70b9\u51fb\u65f6 %2 %3 %4 %5",
    SCREEN_ON_PRESS_MSG0: "%1 \u5f53 \u5c4f\u5e55 \u88ab %2 \u65f6 %3 %4 %5 %6",
    SCREEN_UPDATE_BACKGROUND_COLOR: "\u8bbe\u7f6e %1 \u7684 \u80cc\u666f\u989c\u8272 \u4e3a %2",
    SCREEN_SET_BACKGROUND_IMAGE: "\u8bbe\u7f6e %1 \u7684 \u80cc\u666f\u56fe\u7247 \u4e3a %2",
    NEW_SCREEN_UPDATE_BACKGROUND_COLOR: "\u8bbe\u7f6e \u5c4f\u5e55 \u7684 \u80cc\u666f\u989c\u8272 \u4e3a %1",
    NEW_SCREEN_SET_BACKGROUND_IMAGE: "\u8bbe\u7f6e \u5c4f\u5e55 \u7684 \u80cc\u666f\u56fe\u7247 \u4e3a %1",
    SCREEN_GET_BACKGROUND_IMAGE: "%1 \u7684 \u80cc\u666f\u56fe\u7247",
    SCREEN_NAVIGATE_TO: "\u5207\u6362\u5230\u5c4f\u5e55 %1",
    SCREEN_NAVIGATE_TO_BY_VALUE: "\u5207\u6362\u5230\u5c4f\u5e55 %1 \u5e76\u4f20\u503c %2",
    SCREEN_HEIGHT: "\u9ad8\u5ea6",
    SCREEN_WIDTH: "\u5bbd\u5ea6",
    SCREEN_GET_COLOR: "%1 \u7684 \u80cc\u666f\u989c\u8272",
    SCREEN_GET_SIZE: "%1 \u7684 %2",
    NEW_SCREEN_GET_COLOR: "\u5c4f\u5e55 \u7684 \u80cc\u666f\u989c\u8272",
    NEW_SCREEN_GET_SIZE: "\u5c4f\u5e55 \u7684 %1",
    NEW_SCREEN_GET_BACKGROUND_IMAGE: "\u5c4f\u5e55 \u7684 \u80cc\u666f\u56fe\u7247",
    SCREEN_PREV: "\u4e0a\u4e00\u5c4f",
    SCREEN_NEXT: "\u4e0b\u4e00\u5c4f",
    SCREEN_PARAM: "\u53c2\u6570",
    SCREEN_CHECK_IF_PRESSED: "\u5c4f\u5e55 \u88ab \u6309\u4f4f",
    SCREEN_INPUT_TOOLTIP: "\u5d4c\u5165\u201c\u5b57\u7b26\u4e32\u201d\uff1a\u6309\u201c\u5c4f\u5e55\u540d\u79f0\u201d\u68c0\u7d22\n \u5d4c\u5165\u201c\u6570\u5b57\u201d\uff1a\u6309\u201c\u5c4f\u5e55\u5e8f\u53f7\u201d\u68c0\u7d22",
    PHONE_VIBRATE: "\u624b\u673a\u632f\u52a8 %1 \u79d2",
    PHONE_BATTERY_LEVEL: "\u5f53\u524d\u7535\u91cf",
    BRIGHTNESS_SET_BRIGHTNESS: "\u8bbe\u7f6e\u5c4f\u5e55\u4eae\u5ea6\u4e3a %1",
    BRIGHTNESS_GET_BRIGHTNESS: "\u5f53\u524d\u5c4f\u5e55\u4eae\u5ea6",
    BRIGHTNESS_SET_KEEP_SCREEN_ON: "\u8bbe\u7f6e\u5c4f\u5e55\u662f\u5426\u4fdd\u6301\u5e38\u4eae %1",
    GYROSCOPE_ON_PHONE_SHAKE: "%1 \u5f53\u624b\u673a\u88ab\u6447\u6643\u65f6 %2 %3",
    GYROSCOPE_PHONE_GET_COMPASS: "\u6307\u5357\u9488",
    GYROSCOPE_PHONE_GET_COMPASS_TOOLTIP: "\u624b\u673a\u8bbe\u5907\u9876\u90e8\u671d\u5411\u3002\n\u6b63\u5317\u4e3a 0\n\u6b63\u5357\u4e3a 180\n\u6b63\u897f\u4e3a 270\n\u6b63\u4e1c\u4e3a 90",
    GYROSCOPE_PHONE_GET_ORIENTATION_VALUE: "\u624b\u673a\u5728 %1 \u65b9\u5411\u7684 %2",
    VOLUME_SENSOR_SET_DETECTION_STATE: "%1 \u73af\u5883\u97f3\u91cf\u4f20\u611f\u5668",
    VOLUME_SENSOR_GET_CURRENT_VALUE: "\u5f53\u524d\u73af\u5883\u97f3\u91cf",
    ROTATION: "\u503e\u659c\u89d2\u5ea6",
    GRAVITY: "\u52a0\u901f\u5ea6\u5206\u91cf",
    TIME: "\u65f6\u95f4",
    YEAR: "\u5e74",
    MONTH: "\u6708",
    DATE: "\u65e5",
    DAYS: "\u5929\u6570",
    DAY_NAME: "\u661f\u671f\uff08\u6587\u672c\uff09",
    DAY_NUM: "\u661f\u671f\uff08\u6570\u5b57\uff09",
    HOUR: "\u5c0f\u65f6",
    MINUTE: "\u5206\u949f",
    SECOND: "\u79d2",
    DATE_OBJECT: "\u65e5\u671f",
    START: "\u5f00\u59cb",
    STOP: "\u505c\u6b62",
    RESET: "\u91cd\u7f6e",
    OPEN: "\u5f00\u542f",
    CLOSE: "\u5173\u95ed",
    DATE_SET_TIMER_STATE: "%1 %2",
    DATE_TIMER: "%1",
    DATE_GET_CURRENT_DATE: "%1",
    DATE_GET_CURRENT_DATE_TOOLTIP: "\u7535\u8111\u4e0a\u8fd0\u884c\u65f6\uff0c\u83b7\u53d6\u7684\u662f\u7535\u8111\u7cfb\u7edf\u5f53\u524d\u7684\u65f6\u95f4\u3002\n\u624b\u673a\u4e0a\u8fd0\u884c\u65f6\uff0c\u83b7\u53d6\u7684\u662f\u624b\u673a\u7cfb\u7edf\u5f53\u524d\u7684\u65f6\u95f4\u3002",
    DATE_CURRENT_TIME: "\u5f53\u524d \u65f6\u95f4",
    DATE_CURRENT_YEAR: "\u5f53\u524d \u5e74",
    DATE_CURRENT_MONTH: "\u5f53\u524d \u6708",
    DATE_CURRENT_DATE: "\u5f53\u524d \u65e5",
    DATE_CURRENT_DAY_NAME: "\u5f53\u524d \u661f\u671f\uff08\u6587\u672c\uff09",
    DATE_CURRENT_DAY_NUM: "\u5f53\u524d \u661f\u671f\uff08\u6570\u5b57\uff09",
    DATE_CURRENT_HOUR: "\u5f53\u524d \u5c0f\u65f6",
    DATE_CURRENT_MINUTE: "\u5f53\u524d \u5206\u949f",
    DATE_CURRENT_SECOND: "\u5f53\u524d \u79d2",
    DATE_CHECK_DATE_IS_EQUAL: "%1 \u4e0e %2 \u662f\u5426\u76f8\u7b49",
    DATE_GET_DATE_MINUS_OPERATION: "%1 \u51cf\u53bb %2 \u7684 %3",
    DATE_PICKER_ON_SELECT_DONE: "%1 \u5f53 %2 \u5b8c\u6210\u9009\u62e9\u65f6 %3 %4 %5 %6 %7",
    DATE_PICKER_OPEN_SELECT_DIALOG: "\u8c03\u7528 %1 \u8fdb\u884c\u9009\u62e9",
    DATE_PICKER_GET_DATE: "%1 \u7684\u65e5\u671f",
    TIME_PICKER_ON_SELECT_DONE: "%1 \u5f53 %2 \u5b8c\u6210\u9009\u62e9\u65f6 %3 %4 %5 %6 %7",
    TIME_PICKER_OPEN_SELECT_DIALOG: "\u8c03\u7528 %1 \u8fdb\u884c\u9009\u62e9",
    TIME_PICKER_GET_TIME: "%1 \u7684\u65f6\u95f4",
    HTTP_CLIENT_ON_SUCCESS: "%1 \u5f53 %2 \u83b7\u5f97\u6587\u672c\u65f6 %3 %4 %5 %6",
    HTTP_CLIENT_ON_SUCCESS_TOOLTIP: "\u8bf7\u6c42\u6210\u529f\u65f6\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0c\u8fd4\u56de\u5185\u5bb9\u5b58\u50a8\u5728\u201c\u6587\u672c\u5185\u5bb9\u201d\u79ef\u6728\u4e2d\u3002",
    HTTP_CLIENT_ON_ERROR: "%1 \u5f53 %2 \u51fa\u9519\u65f6 %3 %4 %5 %6",
    HTTP_CLIENT_ON_ERROR_TOOLTIP: "\u8bf7\u6c42\u5931\u8d25\u65f6\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0c\u9519\u8bef\u539f\u56e0\u5b58\u50a8\u5728\u201c\u9519\u8bef\u6d88\u606f\u201d\u79ef\u6728\u4e2d\u3002",
    HTTP_CLIENT_SET_URL: "\u8bbe\u7f6e %1 \u7684\u7f51\u5740\u4e3a %2",
    HTTP_CLIENT_SET_HEADER: "\u8bbe\u7f6e %1 \u7684\u8bf7\u6c42\u5934\u4e3a %2",
    HTTP_CLIENT_SEND_WITH_GET_REQUEST: "\u8c03\u7528 %1 \u53d1\u9001 GET \u8bf7\u6c42",
    HTTP_CLIENT_SEND_WITH_GET_REQUEST_TOOLTIP: "\u5982\u679c\u4f7f\u7528\u7684api\u63a5\u53e3\u7684\u8c03\u7528\u65b9\u5f0f\u4e3aget\uff0c\u5219\u8bbe\u7f6e\u597d\u7f51\u5740\u548c\u8bf7\u6c42\u53c2\u6570\u540e\uff0c\u4f7f\u7528\u8be5\u79ef\u6728\u53d1\u9001get\u8bf7\u6c42\u3002",
    HTTP_CLIENT_SEND_WITH_POST_REQUEST: "\u8c03\u7528 %1 \u53d1\u9001 POST \u8bf7\u6c42\uff0c\u6587\u672c\u4e3a %2",
    HTTP_CLIENT_SEND_WITH_POST_REQUEST_TOOLTIP: "\u5982\u679c\u4f7f\u7528\u7684api\u63a5\u53e3\u7684\u8c03\u7528\u65b9\u5f0f\u4e3apost\uff0c\u5219\u8bbe\u7f6e\u597d\u7f51\u5740\u548c\u8bf7\u6c42\u6587\u672c\u540e\uff0c\u4f7f\u7528\u8be5\u79ef\u6728\u53d1\u9001post\u8bf7\u6c42\u3002",
    HTTP_CLIENT_GET_URL: "%1 \u7684\u7f51\u5740",
    HTTP_CLIENT_STATUS: "\u54cd\u5e94\u4ee3\u7801",
    HTTP_CLIENT_RESPONSE: "\u6587\u672c\u5185\u5bb9",
    HTTP_CLIENT_ERROR_STATUS: "\u9519\u8bef\u4ee3\u7801",
    HTTP_CLIENT_ERROR_RESPONSE: "\u9519\u8bef\u6d88\u606f",
    HTTP_CLIENT_SEND_DELETE_REQUEST: "\u8c03\u7528 %1 \u53d1\u9001 DELETE \u8bf7\u6c42",
    HTTP_CLIENT_SEND_PUT_REQUEST: "\u8c03\u7528 %1 \u53d1\u9001 PUT \u8bf7\u6c42\uff0c\u6587\u672c\u4e3a %2",
    HTTP_CLIENT_SEND_PATCH_REQUEST: "\u8c03\u7528 %1 \u53d1\u9001 PATCH \u8bf7\u6c42\uff0c\u6587\u672c\u4e3a %2",
    SOUND_MAN: "\u7537\u58f0",
    SOUND_WOMAN: "\u5973\u58f0",
    SOUND_CHILD: "\u7ae5\u58f0",
    SOUND_VOLUME: "\u97f3\u91cf",
    SOUND_RATE: "\u97f3\u901f",
    AUDIO_PLAY_SOUND: "\u64ad\u653e %1",
    AUDIO_STOP_SOUND: "\u505c\u6b62 %1",
    AUDIO_PAUSE_SOUND: "\u6682\u505c %1",
    AUDIO_SET_SOUND_FILE: "\u8bbe\u7f6e %1 \u7684\u97f3\u6e90\u4e3a %2",
    AUDIO_SET_VOLUME_OR_RATE: "\u8bbe\u7f6e %1 %2 \u5927\u5c0f\u4e3a %3",
    AUDIO_CHANGE_VOLUME_OR_RATE: "\u8bbe\u7f6e %1 %2 %3 %4",
    TEXT2SPEECH_SPEAK_TEXT: "%1 \u6717\u8bfb %2",
    TEXT2SPEECH_SPEAK_TEXT_AND_WAIT: "%1 \u6717\u8bfb %2 \u76f4\u5230\u7ed3\u675f",
    TEXT2SPEECH_DEFAULT_TEXT: "\u4f60\u597d",
    CAMERA_PHOTO: "\u7167\u7247",
    CAMERA_VIDEO: "\u89c6\u9891",
    CAMERA_SET_CAMERA_DIRECTION: "\u8bbe\u7f6e\u76f8\u673a\u4e3a %1 \u6444\u50cf\u5934",
    CAMERA_GET_CAMERA_TAKE_PHOTO: "\u8c03\u7528\u76f8\u673a\u62cd\u7167\uff0c\u5f53\u5b8c\u6210\u65f6\u8fd4\u56de %1 %2",
    CAMERA_GET_CAMERA_TAKE_VIDEO: "\u8c03\u7528\u76f8\u673a\u5f55\u50cf\uff0c\u5f53\u5b8c\u6210\u65f6\u8fd4\u56de %1 %2",
    CAMERA_GET_CAMERA_CHOOSE_PHOTO: "\u6253\u5f00\u76f8\u518c\u8fdb\u884c\u9009\u62e9\uff0c\u5f53\u5b8c\u6210\u65f6\u8fd4\u56de %1 %2",
    TEXT_WIDGET_ON_PRESS: "%1 \u5f53 %2 \u88ab\u70b9\u51fb\u65f6 %3 %4",
    TEXT_WIDGET_GET_PROPERTY: "%1 \u7684 %2",
    TEXT_WIDGET_GET_CONTENT: "%1 \u7684 \u6587\u672c",
    TEXT_WIDGET_SET_PROPERTY: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    TEXT_WIDGET_SET_ALIGN: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a",
    TEXT_WIDGET_SET_CONTENT: "\u8bbe\u7f6e %1 \u7684 \u6587\u672c \u4e3a %2",
    TEXT_WIDGET_SET_FONT_SIZE: "\u8bbe\u7f6e %1 \u7684 \u5b57\u53f7 \u4e3a %2",
    TEXT_WIDGET_GET_FONT_SIZE: "%1 \u7684 \u5b57\u53f7",
    TEXT_WIDGET_HORIZONTAL_ALIGN: "\u6c34\u5e73\u5bf9\u9f50",
    TEXT_WIDGET_VERTICAL_ALIGN: "\u5782\u76f4\u5bf9\u9f50",
    BUTTON_ON_PRESS: "%1 \u5f53\u6309\u94ae %2 \u88ab %3 %4 %5",
    BUTTON_SET_CONTENT: "\u8bbe\u7f6e %1 \u7684\u6587\u672c\u4e3a %2",
    BUTTON_SET_COLOR: "\u8bbe\u7f6e %1 \u7684\u989c\u8272\u4e3a %2",
    BUTTON_SET_SIZE_TYPE: "\u8bbe\u7f6e %1 \u7684\u5c3a\u5bf8\u5927\u5c0f\u4e3a %2",
    BUTTON_SET_MODE: "\u8bbe\u7f6e %1 \u7684\u6837\u5f0f\u4e3a %2",
    BUTTON_GET_COLOR: "%1 \u7684\u989c\u8272",
    BUTTON_GET_CONTENT: "%1 \u7684\u6587\u672c",
    BUTTON_CONTAINED_TEXT: "\u5e95\u8272\u767d\u5b57",
    BUTTON_OUTLINED_TEXT: "\u767d\u5e95\u5f69\u5b57",
    BUTTON_CONTAINED_ICON: "\u5e95\u8272\u56fe\u6807",
    BUTTON_OUTLINED_ICON: "\u767d\u5e95\u56fe\u6807",
    BUTTON_DEFAULT_TEXT: "\u6309\u94ae",
    INPUT_ON_FOCUS: "%1 \u5f53\u8f93\u5165\u6846 %2 \u83b7\u53d6\u7126\u70b9\u65f6 %3 %4",
    INPUT_ON_BLUR: "%1 \u5f53\u8f93\u5165\u6846 %2 \u5931\u53bb\u7126\u70b9\u65f6 %3 %4",
    INPUT_ON_CHANGE: "%1 \u5f53\u8f93\u5165\u6846 %2 \u7684\u5185\u5bb9\u6539\u53d8\u65f6 %3 %4",
    INPUT_SET_INPUT_CONTENT: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    INPUT_SET_MODE: "\u8bbe\u7f6e %1 \u7684 \u6837\u5f0f\u4e3a %2",
    INPUT_SET_COLOR: "\u8bbe\u7f6e %1 \u7684 \u989c\u8272 %2",
    INPUT_SET_POSITION: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a",
    INPUT_SET_SIZE: "\u8bbe\u7f6e %1 \u7684 \u5c3a\u5bf8 %2",
    INPUT_GET_COLOR: " %1 \u7684 \u989c\u8272",
    INPUT_GET_CONTENT: "%1 \u7684 %2",
    INPUT_GET_POSITION: "%1 \u7684 %2",
    INPUT_ASSERT_STATE: "%1 \u662f\u5426 %2",
    INPUT_GET_HAS_ERROR_MESSAGE: "%1 \u662f\u5426 \u62a5\u9519",
    INPUT_GET_PROPERTY: "%1 \u7684 %2",
    INPUT_ERROR_TIPS: "%1 %2 \u62a5\u9519\u63d0\u793a",
    INPUT_OUTLINED_NORMAL: "\u7ebf\u6846",
    INPUT_CONTAINED_NORMAL: "\u5e95\u8272",
    INPUT_CONTAINED_ROUND: "\u5706\u89d2",
    INPUT_OUTLINED_FLAT: "\u6a2a\u7ebf",
    INPUT_CONTENT: "\u8f93\u5165\u6587\u6848",
    INPUT_PLACEHOLDER: "\u63d0\u793a\u6587\u6848",
    INPUT_ERROR_MESSAGE: "\u62a5\u9519\u6587\u6848",
    INPUT_REPORT_ERROR: "\u62a5\u9519",
    INPUT_DEFAULT_ERROR_MESSAGE: "\u8f93\u5165\u9519\u8bef",
    INPUT_DEFAULT_VALUE: "\u8f93\u5165\u6846\u5185\u5bb9",
    INPUT_DEFAULT_PLACEHOLDER: "\u63d0\u793a\u8bed\u5185\u5bb9",
    LOCAL_STORAGE_GET_ALL_FIELD_KEYS: "%1 \u7684\u6240\u6709\u952e",
    LOCAL_STORAGE_GET_KEY_VALUE_COUNT: "%1 \u952e\u7684\u603b\u6570",
    LOCAL_STORAGE_ASSERT_KEY_IN: "\u952e %1 \u5b58\u5728\u4e8e %2",
    LOCAL_STORAGE_SET_VALUE_BY_KEY: "\u8bbe\u7f6e %1 \u952e %2 \u7684\u503c\u4e3a %3",
    LOCAL_STORAGE_SET_VALUE_BY_KEY_TOOLTIP: "\u5982\u679c\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u8be5\u952e\uff0c\u5219\u4fee\u6539\u952e\u7684\u503c\u3002\n\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u65b0\u589e\u4e00\u4e2a\u952e\u503c\u5bf9\u3002",
    LOCAL_STORAGE_GET_VALUE_BY_KEY: "%1 \u952e %2 \u7684\u503c",
    LOCAL_STORAGE_CLEAR_ALL_DATA: "\u6e05\u7a7a %1",
    LOCAL_STORAGE_DELETE_ITEM: "\u5220\u9664 %1 \u7684\u952e %2",
    NEW_LOCAL_STORAGE_GET_ALL_FIELD_KEYS: "%1%2 \u7684\u6240\u6709\u952e",
    CLOUD_STORAGE_ON_ERROR: "%1 \u5f53 %2 \u51fa\u9519\u65f6 %3 %4 %5 %6",
    CLOUD_STORAGE_ON_ERROR_TOOLTIP: "\u5f53\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u3001\u83b7\u53d6\u6570\u636e\u5e93\u7684\u952e\u503c\u5bf9\u51fa\u73b0\u9519\u8bef\u65f6\uff0c\u89e6\u53d1\u8be5\u4e8b\u4ef6\uff0c\u9519\u8bef\u539f\u56e0\u5b58\u50a8\u5728\u201c\u9519\u8bef\u6d88\u606f\u201d\u79ef\u6728\u4e2d\u3002",
    CLOUD_STORAGE_SET_VALUE_BY_KEY: "%1 \u8bbe\u7f6e %2 %3 \u7684\u503c\u4e3a %4, \u5931\u8d25\u65f6\u8fd4\u56de %5",
    CLOUD_STORAGE_SET_VALUE_BY_KEY_TOOLTIP: "\u5982\u679c\u4e91\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u8be5\u952e\uff0c\u5219\u4fee\u6539\u952e\u7684\u503c\u3002\n\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u65b0\u589e\u4e00\u4e2a\u952e\u503c\u5bf9\u3002",
    CLOUD_STORAGE_GET_ALL_FIELD_KEYS: "%1 %2  \u7684\u6240\u6709\u952e, \u5931\u8d25\u65f6\u8fd4\u56de %3",
    CLOUD_STORAGE_GET_KEY_VALUE_COUNT: "%1 %2 \u7684\u952e\u503c\u5bf9\u4e2a\u6570, \u5931\u8d25\u65f6\u8fd4\u56de %3",
    CLOUD_STORAGE_ASSERT_KEY_IN: "%1 \u952e %2 \u662f\u5426\u5b58\u5728\u4e8e %3, \u5931\u8d25\u65f6\u8fd4\u56de %4",
    CLOUD_STORAGE_GET_VALUE_BY_KEY: "%1 %2 \u4e2d\u952e\u4e3a %3 \u7684\u503c, \u5931\u8d25\u65f6\u8fd4\u56de %4",
    CLOUD_STORAGE_CLEAR_ALL_DATA: "%1 \u6e05\u7a7a %2 \u6240\u6709\u952e\u503c\u5bf9, \u5931\u8d25\u65f6\u8fd4\u56de %3",
    CLOUD_STORAGE_DELETE_ITEM: "%1 \u5220\u9664 %2 \u7684 %3 \u548c\u503c, \u5931\u8d25\u65f6\u8fd4\u56de %4",
    CLOUD_STORAGE_CANNOT_REMOVED_ITEM: "\u65e0\u6cd5\u5220\u9664\u952e\u548c\u503c",
    CLOUD_STORAGE_CANNOT_SET_ITEM: "\u65e0\u6cd5\u8bbe\u7f6e\u8be5\u503c",
    CLOUD_STORAGE_CANNOT_CLEAR: "\u65e0\u6cd5\u6e05\u7a7a\u6240\u6709\u952e\u503c\u5bf9",
    CLOUD_STORAGE_CANNOT_GET_ITEM: "\u65e0\u6cd5\u83b7\u53d6\u503c",
    CLOUD_STORAGE_CANNOT_GET_ITEM_COUNT: "\u65e0\u6cd5\u83b7\u53d6\u952e\u503c\u5bf9\u4e2a\u6570",
    CLOUD_STORAGE_CANNOT_GET_ALL_ITEM: "\u65e0\u6cd5\u83b7\u53d6\u6240\u6709\u952e",
    CLOUD_STORAGE_CANNOT_ASSERT_KEY: "\u65e0\u6cd5\u5224\u65ad\u952e\u662f\u5426\u5b58\u5728",
    CLOUD_STORAGE_PARAM_ERROR_TYPE: "\u9519\u8bef\u7c7b\u578b",
    CLOUD_STORAGE_PARAM_ERROR_MESSAGE: "\u9519\u8bef\u4fe1\u606f",
    IMAGE_ON_PRESS: "%1\u5f53 %2 \u88ab\u70b9\u51fb\u65f6 %3 %4",
    IMAGE_SET_PROPERTY: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    IMAGE_GET_PROPERTY: "%1 \u7684 %2",
    IMAGE_GET_FILE_ID: "%1 \u7684 \u56fe\u7247",
    IMAGE_SET_FIELD_ID: "\u8bbe\u7f6e %1 \u56fe\u7247\u4e3a %2",
    IMAGE_GET_FILE_ID_TOOLTIP: "\u8fd4\u56de\u56fe\u7247\u540d\u79f0\u6216\u94fe\u63a5\u3002",
    IMAGE_SET_FIELD_ID_TOOLTIP: "\u8bbe\u7f6e\u56fe\u7247\u663e\u793a\u7684\u56fe\u7247\uff0c\u53ef\u4ee5\u5d4c\u5165\u9879\u76ee\u5185\u56fe\u7247\u8d44\u6e90\u7684\u540d\u79f0\u6216\u7f51\u7edc\u56fe\u7247\u7684\u94fe\u63a5\u3002",
    CANVAS_CLEAR_ALL_BRUSH: "\u6e05\u9664 %1 \u7684 \u7b14\u8ff9",
    CANVAS_TO_DATA_URL: "\u4fdd\u5b58 %1 \u4e3a\u56fe\u7247",
    CANVAS_SET_VISIBLE: "%2 %1",
    CANVAS_SET_PROPERTY: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    CANVAS_SET_BACKGROUND_COLOR: "\u8bbe\u7f6e %1 \u7684 \u80cc\u666f\u989c\u8272 \u4e3a %2",
    CANVAS_SET_BACKGROUND_IMAGE: "\u8bbe\u7f6e %1 \u7684 \u80cc\u666f\u56fe\u7247 \u4e3a %2",
    CANVAS_GET_PROPERTY: "%1 \u7684 %2",
    CANVAS_GET_BACKGROUND_COLOR: "%1 \u7684 \u80cc\u666f\u989c\u8272",
    CANVAS_GET_BACKGROUND_IMAGE: "%1 \u7684 \u80cc\u666f\u56fe\u7247",
    CANVAS_ON_CANVAS_PRESS_MSG0: "%1 \u5f53 %2 \u88ab %3 \u65f6 %4 %5",
    CANVAS_ON_CANVAS_PRESS_MSG1: "%1",
    CANVAS_ON_CANVAS_SWIPE: "%1 \u5f53 %2 \u88ab \u5212\u8fc7\u65f6",
    CANVAS_CHECK_IF_PRESSED: "%1 \u88ab \u6309\u4f4f",
    PARAM_POSITION_X: "X\u5750\u6807",
    PARAM_POSITION_Y: "Y\u5750\u6807",
    BRUSH: "\u753b\u7b14",
    BRUSH_SET_PEN_UP: "%1 \u62ac\u7b14",
    BRUSH_SET_PEN_DOWN: "%1 \u843d\u7b14",
    PEN_UP: "\u62ac\u7b14",
    PEN_DOWN: "\u843d\u7b14",
    BRUSH_SET_PEN_UP_OR_DOWN: "%1 %2",
    BRUSH_DRAW_POINT: "%1 \u753b\u70b9\uff1ax %2 y %3",
    BRUSH_DRAW_LINE: "%1 \u753b\u7ebf\uff1ax1 %2 y1 %3 x2 %4 y2 %5",
    BRUSH_DRAW_CIRCLE: "%1 \u753b\u5706\uff1a\u534a\u5f84 %2",
    BRUSH_DRAW_ARC: "%1 \u753b\u5f27\uff1a\u534a\u5f84 %2 \u89d2\u5ea6 %3",
    BRUSH_DRAW_POLYGON: "%1 \u753b %2 \u8fb9\u5f62\uff1a\u8fb9\u957f %3",
    BRUSH_SET_COLOR: "\u8bbe\u7f6e %1 \u7684 \u989c\u8272 \u4e3a %2",
    BRUSH_SET_FILL_COLOR: "\u8bbe\u7f6e %1 \u7684 \u586b\u5145\u8272 \u4e3a %2",
    BRUSH_SET_FILL_PATH: "\u8bbe\u7f6e \u5f53\u524d \u4e3a %1 \u586b\u5145 %2",
    POINT_START: "\u8d77\u70b9",
    POINT_END: "\u7ec8\u70b9",
    BRUSH_SET_PROPERTY: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    BRUSH_SET_PEN_SIZE: "\u8bbe\u7f6e %1 \u7684 \u7c97\u7ec6 \u4e3a %2",
    BRUSH_CHANGE_PEN_SIZE: "\u5c06 %1 \u7684 \u7c97\u7ec6 %2 %3",
    BRUSH_CHANGE_PROPERTY: "\u5c06 %1 \u7684 %2 %3 %4",
    BRUSH_GET_PROPERTY: "%1 \u7684 %2",
    BRUSH_GET_DRAW_PROCESS: "%1 \u662f\u5426\u5f00\u542f \u7ed8\u753b\u8fc7\u7a0b",
    BRUSH_GET_COLOR: "%1 \u7684 \u989c\u8272",
    BRUSH_GET_PEN_SIZE: "%1 \u7684 \u7c97\u7ec6",
    BRUSH_MOVE_FORWARD: "%1 \u79fb\u52a8 %2 \u6b65",
    BRUSH_MOVE_FORWARD_OR_BACKWARD: "%1 %2 \u79fb\u52a8 %3 \u50cf\u7d20",
    FORWARD: "\u5411\u524d",
    BACKWARD: "\u5411\u540e",
    BRUSH_ROTATE: "%1 \u65cb\u8f6c %2 \u5ea6",
    ROTATE_LEFT: "\u5411\u5de6",
    ROTATE_RIGHT: "\u5411\u53f3",
    BRUSH_ROTATE_LEFT_OR_RIGHT: "%1 %2 \u65cb\u8f6c %3 \u5ea6",
    BRUSH_SET_ROTATION: "\u8bbe\u7f6e %1 \u7684 \u65b9\u5411 \u4e3a %2 \u5ea6",
    BRUSH_GET_ROTATION: "%1 \u7684 \u65b9\u5411",
    BRUSH_FACE_TO: "%1 \u9762\u5411 %2",
    BRUSH_MOVE_TO_POSITION: "%1 \u79fb\u52a8\u5230 x %2 y %3",
    BRUSH_MOVE_TO: "%1 \u79fb\u52a8\u5230 %2",
    BRUSH_CHANGE_POSITION: "\u5c06 %1 \u7684 %2 %3 %4",
    BRUSH_CHANGE_POSITION_IN_TIME: "\u5728 %2 \u79d2\u5185\uff0c%1 \u79fb\u52a8\u5230 x %3 y %4",
    BRUSH_CHANGE_POSITION_TYPE_IN_TIME: "\u5728 %2 \u79d2\u5185\uff0c\u5c06 %1 \u7684 %3 %4 %5",
    BRUSH_CHANGE_Z_INDEX: "\u5c06 %1 \u79fb\u81f3 %2",
    INDEX_UP: "\u4e0a\u4e00\u5c42",
    INDEX_DOWN: "\u4e0b\u4e00\u5c42",
    INDEX_TOP: "\u6700\u4e0a\u5c42",
    INDEX_BOTTOM: "\u6700\u5e95\u5c42",
    ACTOR: "\u89d2\u8272",
    TOUCH_POINT: "\u89e6\u78b0\u70b9",
    BOUNDARY: "\u8fb9\u7f18",
    BOUNDARY_TOP: "\u4e0a\u8fb9\u7f18",
    BOUNDARY_RIGHT: "\u53f3\u8fb9\u7f18",
    BOUNDARY_BOTTOM: "\u4e0b\u8fb9\u7f18",
    BOUNDARY_LEFT: "\u5de6\u8fb9\u7f18",
    BOUNDARY_ANY: "\u753b\u5e03\u8fb9\u7f18",
    SCALE_A: "\u6bd4\u4f8b\u5927\u5c0f",
    SCALE_X: "\u5bbd\u5ea6\u6bd4\u4f8b",
    SCALE_Y: "\u9ad8\u5ea6\u6bd4\u4f8b",
    RANDOM: "\u968f\u673a",
    SCALE: "\u5927\u5c0f",
    DEGREE: "\u89d2\u5ea6",
    FADE_IN: "\u9010\u6e10\u663e\u793a",
    FADE_OUT: "\u9010\u6e10\u9690\u85cf",
    PLAY_CIRCULARLY: "\u5faa\u73af",
    PLAY_INFINITELY: "\u65e0\u9650\u5faa\u73af",
    PLAY_TIME: "\u6b21",
    ACTOR_STOP_ACTION: "\u505c\u6b62 %1 \u7684 \u52a8\u4f5c\u64ad\u653e",
    ACTOR_PLAY_ACTION: "\u64ad\u653e %1 \u7684 %2 \u95f4\u9694 %3 \u6beb\u79d2\uff0c%4",
    ACTOR_PLAY_ACTION_AND_WAIT: "\u64ad\u653e %1 \u7684 %2 \u95f4\u9694 %3 \u6beb\u79d2\uff0c\u5faa\u73af %4 \u6b21\uff0c \u76f4\u5230\u7ed3\u675f",
    ACTOR_PLAY_COUNT: "%1",
    ACTOR_ON_ACTOR_BUMP_MSG0: "%1 \u5f53 %2 \u78b0\u5230 %3 \u65f6",
    ACTOR_ON_ACTOR_BUMP_MSG1: "%1",
    ACTOR_ON_ACTOR_LEAVE_MSG0: "%1 \u5f53 %2 \u79bb\u5f00 %3 \u65f6",
    ACTOR_ON_ACTOR_LEAVE_MSG1: "%1",
    ACTOR_ON_ACTOR_PRESS_MSG0: "%1 \u5f53 %2 \u88ab %3 \u65f6 %4 %5",
    ACTOR_ON_ACTOR_PRESS_MSG1: "%1",
    ACTOR_ROTATE: "%1 \u65cb\u8f6c %2 \u5ea6",
    ACTOR_MOVE_FORWARD: "%1 \u79fb\u52a8 %2 \u50cf\u7d20",
    ACTOR_SET_PROPERTY: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    ACTOR_SET_ROTATION: "\u8bbe\u7f6e %1 \u7684 \u65b9\u5411 \u4e3a %2 \u5ea6",
    ACTOR_FACE_TO: "%1 \u9762\u5411 %2",
    ACTOR_ROTATE_AROUND: "%1 \u7ed5 %2 \u65cb\u8f6c %3 \u5ea6",
    ACTOR_MOVE_TO_POSITION: "%1 \u79fb\u52a8\u5230 x %2 y %3",
    ACTOR_MOVE_TO: "%1 \u79fb\u52a8\u5230 %2",
    ACTOR_CHANGE_POSITION: "\u5c06 %1 \u7684 %2 %3 %4",
    ACTOR_CHANGE_POSITION_TYPE_IN_TIME: "\u5728 %2 \u79d2\u5185\uff0c\u5c06 %1 \u7684 %3 %4 %5",
    ACTOR_CHANGE_POSITION_IN_TIME: "\u5728 %2 \u79d2\u5185\uff0c%1 \u79fb\u52a8\u5230 x %3 y %4",
    ACTOR_SET_VISIBLE: "%2 %1",
    ACTOR_SHOW_HIDE_IN_TIME: "\u5728 %2 \u79d2\u5185\uff0c%3 %1",
    ACTOR_CHANGE_OPACITY: "\u5c06 %1 \u7684 \u4e0d\u900f\u660e\u5ea6 %2 %3",
    ACTOR_SET_SCALE: "\u8bbe\u7f6e %1 \u7684 \u5927\u5c0f \u4e3a %2",
    ACTOR_CHANGE_SCALE: "\u5c06 %1 \u7684 \u5927\u5c0f %2 %3",
    ACTOR_SET_SCALE_WITH_SECTION: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    ACTOR_CHANGE_SCALE_WITH_SECTION: "\u5c06 %1 \u7684 %2 %3 %4",
    ACTOR_GET_SCALE_WITH_SECTION: "%1 \u7684 %2",
    ACTOR_SET_FLIPPED: "%1 %2",
    ACTOR_CHECK_IF_FLIPPED: "%1 \u662f\u5426 %2",
    ACTOR_GET_PROPERTY: "%1 \u7684 %2",
    ACTOR_MOVE_Z_INDEX: "%1 \u79fb\u81f3 %2",
    ACTOR_PREVIOUS_NEXT_STYLE: "\u5207\u6362 %1 \u7684 %2 \u9020\u578b",
    ACTOR_SET_CURRENT_STYLE: "\u8bbe\u7f6e %1 \u7684 \u9020\u578b \u4e3a %2 %3",
    ACTOR_SET_CURRENT_ACTION_TOOLTIP: "\u5d4c\u5165\u4e3a\u201c\u5b57\u7b26\u4e32\u201d\u7c7b\u578b\uff1a\u6309\u201c\u52a8\u4f5c\u540d\u79f0\u201d\u68c0\u7d22\u3002",
    ACTOR_SET_CURRENT_STYLE_TOOLTIP: "\u5d4c\u5165\u4e3a\u201c\u6570\u5b57\u201d\u7c7b\u578b\uff1a\u6309\u201c\u9020\u578b\u7f16\u53f7\u201d\u68c0\u7d22\u3002",
    ACTOR_TALK: "\u5bf9\u8bdd",
    ACTOR_THINK: "\u601d\u8003",
    ACTOR_SHOW_DIALOG: "%1 %2 %3",
    ACTOR_SHOW_DIALOG_IN_TIME: "%1 %2 %3 \u6301\u7eed %4 \u79d2",
    ACTOR_STYLE: "\u9020\u578b\u7f16\u53f7",
    ACTOR_GET_STYLE_INDEX: "%1 \u7684 \u9020\u578b\u7f16\u53f7",
    ACTOR_GET_ACTION_NAME: "%1 \u7684 \u52a8\u4f5c\u540d\u79f0",
    ACTOR_GET_ROTATION: "%1 \u7684 \u65b9\u5411",
    ACTOR_NEXT_ONE: "\u4e0b\u4e00\u4e2a",
    ACTOR_PREVIOUS_ONE: "\u4e0a\u4e00\u4e2a",
    ACTOR_CHECK_IF_PRESSED: "%1 \u88ab \u6309\u4f4f",
    ACTOR_CHECK_IF_BUMPED: "%1 \u78b0\u5230 %2",
    ACTOR_CHECK_IF_LEFT: "%1 \u79bb\u5f00 %2",
    RADIO_ON_SELECTED: "%1 \u5f53 %2 \u88ab\u9009\u4e2d\u65f6%3 %4 %5 %6",
    RADIO_ON_SELECTED_TOOLTIP: "\u9009\u4e2d\u9879\uff1a\u88ab\u9009\u4e2d\u9009\u9879\u7684\u5e8f\u53f7\uff0c\u6570\u5b57\u7c7b\u578b\n\u9009\u4e2d\u5185\u5bb9\uff1a\u88ab\u9009\u4e2d\u9009\u9879\u7684\u6587\u672c\u5185\u5bb9\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b",
    RADIO_SET_HEADLINE: "\u8bbe\u7f6e %1 \u7684\u9898\u5e72\u5185\u5bb9\u4e3a %2",
    RADIO_SET_OPTION_COUNT: "\u8bbe\u7f6e %1 \u7684\u9009\u9879\u6570\u91cf\u4e3a %2",
    RADIO_SET_OPTION_CONTENT: "\u8bbe\u7f6e %1 \u7b2c %2 \u9879\u7684\u5185\u5bb9\u4e3a %3",
    RADIO_SET_OPTION_SELECTED_OR_DISABLED: "%1 %2 \u7b2c %3 \u9879",
    RADIO_CLEAR_SELECTED: "\u6e05\u7a7a %1 \u6240\u6709\u9009\u9879\u72b6\u6001",
    RADIO_CLEAR_SELECTED_TOOLTIP: "\u53d6\u6d88\u9009\u4e2d\u5f53\u524d\u9009\u4e2d\u9879\u3002",
    RADIO_SET_OPTION_FEEDBACK: "\u8bbe\u7f6e %1 \u7b2c %2 \u9879\u7684\u53cd\u9988\u4e3a %3",
    RADIO_SET_OPTION_FEEDBACK_TOOLTIP: "\u5982\u679c\u67d0\u4e00\u9879\u4e3a\u6b63\u786e\u9009\u9879\uff0c\u5219\u8bbe\u7f6e\u53cd\u9988\u4e3a\u6b63\u786e\uff0c\u5f53\u524d\u9009\u9879\u4f1a\u53d8\u4e3a\u7eff\u8272\uff0c\u51fa\u73b0\u221a\u3002\n\u5982\u679c\u67d0\u4e00\u9879\u4e3a\u9519\u8bef\u9009\u9879\uff0c\u5219\u8bbe\u7f6e\u53cd\u9988\u4e3a\u9519\u8bef\uff0c\u5f53\u524d\u9009\u9879\u4f1a\u53d8\u4e3a\u7ea2\u8272\uff0c\u51fa\u73b0\xd7\u3002",
    RADIO_CLEAR_FEEDBACK: "\u6e05\u7a7a %1 \u6240\u6709\u9009\u9879\u7684\u53cd\u9988",
    RADIO_CLEAR_FEEDBACK_TOOLTIP: "\u6e05\u9664\u6240\u6709\u9009\u9879\u6b63\u786e\u548c\u9519\u8bef\u7684\u6837\u5f0f\u53cd\u9988\u3002",
    RADIO_DELETE_OPTION: "\u5220\u9664 %1 \u7b2c %2 \u9879",
    RADIO_PUSH_OPTION: "\u6dfb\u52a0\u9009\u9879 %1 \u5230 %2 \u7684\u672b\u5c3e",
    RADIO_SET_WIDGET_POSITION: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    RADIO_GET_SELECTED_OPTION_INDEX: "%1 \u7684\u9009\u4e2d\u9879",
    RADIO_GET_SELECTED_OPTION_INDEX_TOOLTIP: "\u8fd4\u56de\u88ab\u9009\u4e2d\u9009\u9879\u7684\u5e8f\u53f7",
    RADIO_GET_SELECTED_OPTION_CONTENT: "%1\u7684\u9009\u4e2d\u9879\u5185\u5bb9",
    RADIO_GET_SELECTED_OPTION_CONTENT_TOOLTIP: "\u8fd4\u56de\u88ab\u9009\u4e2d\u9009\u9879\u7684\u6587\u672c\u5185\u5bb9",
    RADIO_GET_OPTION_CONTENT_BY_INDEX: "%1 \u7b2c %2 \u9879\u7684\u5185\u5bb9",
    RADIO_GET_HEADLINE: "%1 \u7684\u9898\u5e72\u5185\u5bb9 ",
    RADIO_GET_PROPERTY: "%1 \u7684 %2",
    RADIO_PARAM_SELECTED_INDEX: "\u9009\u4e2d\u9879",
    RADIO_PARAM_SELECTED_CONTENT: "\u9009\u4e2d\u9879\u5185\u5bb9",
    SELECTED: "\u9009\u4e2d",
    OPTION_COUNT: "\u9879\u6570",
    CORRECT: "\u6b63\u786e",
    INCORRECT: "\u9519\u8bef",
    UNSELECTED: "\u53d6\u6d88\u9009\u4e2d",
    CHECKBOX_ON_SELECTED: "%1 \u5f53 %2 \u88ab %3 \u65f6 %4 %5 %6 %7",
    CHECKBOX_ON_SELECTED_TOOLTIP: "\u9009\u4e2d\u9879\u5217\u8868\uff1a\u88ab\u9009\u4e2d\u6240\u6709\u9009\u9879\u7684\u5e8f\u53f7\uff0c\u5217\u8868\u7c7b\u578b\n\u9009\u4e2d\u5185\u5bb9\u5217\u8868\uff1a\u88ab\u9009\u4e2d\u6240\u6709\u9009\u9879\u7684\u6587\u672c\u5185\u5bb9\uff0c\u5217\u8868\u7c7b\u578b",
    CHECKBOX_ON_CHANGE: "%1 \u5f53 %2 \u9009\u9879\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6 %3 %4 %5 %6",
    CHECKBOX_ON_CHANGE_TOOLTIP: "\u67d0\u4e00\u9879\u88ab\u9009\u4e2d\u6216\u53d6\u6d88\u9009\u4e2d\u65f6\u90fd\u4f1a\u89e6\u53d1\u8be5\u4e8b\u4ef6\u3002\n\u6539\u53d8\u9879\uff1a\u88ab\u9009\u4e2d\u6216\u88ab\u53d6\u6d88\u7684\u9009\u9879\u5e8f\u53f7\n\u6539\u53d8\u7ed3\u679c\uff1a\u503c\u4e3a\u771f(true)\u65f6\u8868\u793a\u8be5\u9879\u88ab\u9009\u4e2d\uff0c\u503c\u4e3a\u5047(false)\u65f6\u8868\u793a\u8be5\u9879\u88ab\u53d6\u6d88\u9009\u4e2d",
    CHECKBOX_SET_HEADLINE: "\u8bbe\u7f6e %1 \u7684\u9898\u5e72\u5185\u5bb9\u4e3a %2",
    CHECKBOX_SET_OPTION_COUNT: "\u8bbe\u7f6e %1 \u7684\u9009\u9879\u6570\u91cf\u4e3a %2",
    CHECKBOX_SET_OPTION_CONTENT: "\u8bbe\u7f6e %1 \u7b2c %2 \u9879\u5185\u5bb9\u4e3a %3",
    CHECKBOX_SET_OPTION_STATE: "%1 %2 \u7b2c %3 \u9879",
    CHECKBOX_CLEAR_SELECTED: "\u6e05\u7a7a %1 \u6240\u6709\u9009\u9879\u72b6\u6001",
    CHECKBOX_CLEAR_SELECTED_TOOLTIP: "\u53d6\u6d88\u591a\u9009\u6846\u6240\u6709\u9009\u9879\u7684\u9009\u4e2d\u72b6\u6001\u3002",
    CHECKBOX_SET_OPTION_FEEDBACK: "\u8bbe\u7f6e %1 \u7b2c %2 \u9879\u7684\u53cd\u9988\u4e3a %3",
    CHECKBOX_SET_OPTION_FEEDBACK_TOOLTIP: "\u5982\u679c\u67d0\u4e00\u9879\u4e3a\u6b63\u786e\u9009\u9879\uff0c\u5219\u8bbe\u7f6e\u53cd\u9988\u4e3a\u6b63\u786e\uff0c\u5f53\u524d\u9009\u9879\u4f1a\u53d8\u4e3a\u7eff\u8272\uff0c\u51fa\u73b0\u221a\u3002\n\u5982\u679c\u67d0\u4e00\u9879\u4e3a\u9519\u8bef\u9009\u9879\uff0c\u5219\u8bbe\u7f6e\u53cd\u9988\u4e3a\u9519\u8bef\uff0c\u5f53\u524d\u9009\u9879\u4f1a\u53d8\u4e3a\u7ea2\u8272\uff0c\u51fa\u73b0\xd7\u3002",
    CHECKBOX_CLEAR_FEEDBACK: "\u6e05\u7a7a %1 \u6240\u6709\u9009\u9879\u7684\u53cd\u9988",
    CHECKBOX_CLEAR_FEEDBACK_TOOLTIP: "\u6e05\u9664\u6240\u6709\u9009\u9879\u6b63\u786e\u548c\u9519\u8bef\u7684\u6837\u5f0f\u53cd\u9988\u3002",
    CHECKBOX_DELETE_OPTION: "\u5220\u9664 %1 \u7b2c %2 \u9879",
    CHECKBOX_PUSH_OPTION: "\u6dfb\u52a0\u9009\u9879 %1 \u5230 %2 \u7684\u672b\u5c3e",
    CHECKBOX_SET_WIDGET_POSITION: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    CHECKBOX_GET_SELECTED_OPTION_INDEX: "%1 \u7684\u9009\u4e2d\u9879\u5217\u8868",
    CHECKBOX_GET_SELECTED_OPTION_INDEX_TOOLTIP: "\u8fd4\u56de\u88ab\u9009\u4e2d\u6240\u6709\u9009\u9879\u7684\u5e8f\u53f7\uff0c\u5217\u8868\u7c7b\u578b",
    CHECKBOX_GET_SELECTED_OPTION_CONTENT: "%1 \u7684\u9009\u4e2d\u5185\u5bb9\u5217\u8868",
    CHECKBOX_GET_SELECTED_OPTION_CONTENT_TOOLTIP: "\u8fd4\u56de\u88ab\u9009\u4e2d\u6240\u6709\u9009\u9879\u7684\u6587\u672c\u5185\u5bb9\uff0c\u5217\u8868\u7c7b\u578b",
    CHECKBOX_GET_OPTION_CONTENT_BY_INDEX: "%1 \u7b2c %2 \u9879\u7684\u5185\u5bb9",
    CHECKBOX_GET_HEADLINE: "%1 \u7684\u9898\u5e72\u5185\u5bb9 ",
    CHECKBOX_GET_PROPERTY: "%1 \u7684 %2",
    CHECKBOX_PARAM_SELECTED_INDEX_LIST: "\u9009\u4e2d\u9879\u5217\u8868",
    CHECKBOX_PARAM_SELECTED_CONTENT_LIST: "\u9009\u4e2d\u5185\u5bb9\u5217\u8868",
    CHECKBOX_PARAM_SELECTED_INDEX: "\u6539\u53d8\u9879",
    CHECKBOX_PARAM_SELECTED_RESULT: "\u6539\u53d8\u7ed3\u679c",
    WEBVIEW_ON_START_LOAD: "%1 \u5f53 %2 \u5f00\u59cb\u52a0\u8f7d\u65f6 %3 %4",
    WEBVIEW_ON_LOADED: "%1 \u5f53 %2 \u52a0\u8f7d\u5b8c\u6210\u65f6 %3 %4",
    WEBVIEW_ON_LOAD_ERROR: "%1 \u5f53 %2 \u52a0\u8f7d\u5931\u8d25\u65f6 %3 %4",
    WEBVIEW_SET_URL: "\u8bbe\u7f6e %1 \u7684\u7f51\u5740\u4e3a %2",
    WEBVIEW_REFRESH: "\u91cd\u65b0\u52a0\u8f7d %1",
    WEBVIEW_GET_URL: "%1 \u7684\u7f51\u5740",
    WEBVIEW_GET_PROPERTY: "%1 \u7684 %2",
    SWITCH_ON_STATE_CHANGE: "%1 \u5f53 %2 \u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6 %3 %4 %5",
    SWITCH_SET_STATE: "\u8bbe\u7f6e %1 \u7684\u72b6\u6001\u4e3a %2",
    SWITCH_SET_POSITION: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    SWITCH_GET_STATE: "%1 \u7684\u72b6\u6001",
    SWITCH_GET_POSITION: "%1 \u7684 %2",
    SWITCH_PARAM_STATE: "\u72b6\u6001",
    SLIDER_ON_CHANGE: "%1 \u5f53 %2 \u6ed1\u5757\u4f4d\u7f6e\u6539\u53d8\u65f6 %3 %4 %5",
    SLIDER_ON_SLIDE_START_AND_END: "%1 \u5f53 %2 %3 \u65f6 %4 %5 %6",
    SLIDER_SET_VALUE: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    SLIDER_SET_SLIDE_VALUE: "\u8bbe\u7f6e %1 \u7684 \u6ed1\u5757\u4f4d\u7f6e \u4e3a %2",
    SLIDER_SET_PROPERTY: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    SLIDER_GET_VALUE: "%1 \u7684 \u6ed1\u5757\u4f4d\u7f6e",
    SLIDER_GET_SLIDE_VALUE: "%1 \u7684 \u6ed1\u5757\u4f4d\u7f6e",
    SLIDER_GET_PROPERTY: "%1 \u7684 %2",
    SLIDER_START_TO_SLIDE: "\u5f00\u59cb\u6ed1\u52a8",
    SLIDER_END_TO_SLIDE: "\u7ed3\u675f\u6ed1\u52a8",
    SLIDER_MAX_VALUE: "\u6700\u5927\u503c",
    SLIDER_MIN_VALUE: "\u6700\u5c0f\u503c",
    SLIDER_VALUE: "\u6ed1\u5757\u4f4d\u7f6e",
    SLIDER_PARAM_VALUE: "\u6ed1\u5757\u4f4d\u7f6e",
    ROOM_CREATE_ROOM: "\u521b\u5efa\u623f\u95f4 %1 \u623f\u95f4\u4eba\u6570 %2 %3 %4",
    ROOM_FAILED_TEXT: "\u5931\u8d25\u5219\u6267\u884c",
    ROOM_SUCCESS_TEXT: "\u6210\u529f\u5219\u6267\u884c",
    ROOM_DEFAULT_ROOM_NAME: "\u623f\u95f4\u540d",
    ROOM_USERS: "\u623f\u95f4\u4eba\u6570",
    ROOM_LIST: "\u623f\u95f4\u540d\u79f0\u5217\u8868",
    ROOM_DEFAULT_CREATE_ERROR: "\u5931\u8d25\u539f\u56e0",
    ROOM_DEFAULT_NICKNAME: "\u6635\u79f0",
    ROOM_CREATE_NICKNAME: "\u8bbe\u7f6e\u6211\u5728\u623f\u95f4\u7684\u6635\u79f0 %1 %2 %3",
    ROOM_GET_ROOM_LIST: "\u83b7\u53d6\u623f\u95f4\u5217\u8868 %1 %2 %3",
    ROOM_ENTER_ROOM: "\u8fdb\u5165\u623f\u95f4 %1 %2 %3",
    ROOM_SEND_MESSAGE: "\u53d1\u9001\u623f\u95f4\u4fe1\u606f %1",
    ROOM_RECEIVE_MESSAGE: "%1 \u5f53\u6536\u5230\u623f\u95f4\u6d88\u606f  %2 %3 %4",
    ROOM_ENTER: "\u8fdb\u5165\u623f\u95f4",
    ROOM_EXIT: "\u9000\u51fa\u623f\u95f4",
    ROOM_RECEIVE_ROOM_INFO: "%1 \u5f53\u6536\u5230\u623f\u95f4\u901a\u77e5  %2 %3 %4 %5",
    ROOM_EXIT_ROOM: "\u9000\u51fa\u623f\u95f4",
    ROOM_NETWORK_ERROR: "%1 \u5f53\u53d1\u751f\u9519\u8bef%2 %3 %4",
    ROOM_GET_ONLINE_USERS: "\u623f\u95f4\u4eba\u5458\u5217\u8868",
    ROOM_NAME: "\u623f\u95f4\u540d",
    ROOM_USER_NAME: "\u7528\u6237\u540d",
    ROOM_MESSAGE: "\u6d88\u606f",
    ROOM_ERROR_INFO: "\u9519\u8bef\u4fe1\u606f",
    ROOM_CURRENT_ROOM_NAME: "\u5f53\u524d\u8fdb\u5165\u7684\u623f\u95f4\u540d",
    ROOM_CURRENT_ROOM_USERS: "\u5f53\u524d\u8fdb\u5165\u7684\u623f\u95f4\u4eba\u5458\u5217\u8868",
    LIST_VIEWER_ON_PRESS: "%1 \u5f53 %2 \u88ab\u70b9\u51fb\u65f6 %3 %4 %5",
    LIST_VIEWER_SET_PROPERTY: "\u8bbe\u7f6e %1 \u7684 %2 \u4e3a %3",
    LIST_VIEWER_SET_DATA_SOURCE: "\u8bbe\u7f6e %1 \u7684\u6570\u636e\u6e90\u4e3a %2",
    LIST_VIEWER_GET_PROPERTY: "%1 \u7684 %2",
    LIST_VIEWER_GET_DATA_SOURCE: "%1 \u7684\u6570\u636e\u6e90",
    LIST_VIEWER_CHILD_WIDGET_ON_PRESS: "%1 \u5f53 %2 \u7684 %3 \u88ab\u70b9\u51fb\u65f6 %4 %5 %6",
    LIST_VIEWER_CHILD_WIDGET_BIND_COLUMN: "\u5c06 %1 \u7684 %2 \u7ed1\u5b9a %3",
    LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES: "\u8bbe\u7f6e %1 \u7b2c %2 \u884c %3 \u7684 %4 \u4e3a %5",
    LIST_VIEWER_CHILD_WIDGET_SET_FONT_SIZE: "\u8bbe\u7f6e %1 \u7b2c %2 \u884c %3 \u7684\u5b57\u53f7\u4e3a %4",
    LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES: "%1 \u7b2c %2 \u884c %3 \u7684 %4",
    LIST_VIEWER_CHILD_WIDGET_GET_FONT_SIZE: "%1 \u7b2c %2 \u884c %3 \u7684\u5b57\u53f7",
    LIST_VIEWER_ROW_INDEX: "\u884c\u6570",
    WIDGET_OF: "\u7684",
    WIDGET_GET_MSG: "%1 %2",
    WIDGET_SET: "\u8bbe\u7f6e",
    WIDGET_SET_MSG: "%1 %2",
    WIDGET_SET_TO: "\u4e3a",
    WIDGET_EVENT_MSG: "%1 \u5f53 %2 %3",
    WIDGET_EVENT_SUFFIX: "\u65f6",
    WIDGET_EVENT_PARAM_MSG: "%1",
    WIDGET_METHOD_MSG: "%1",
    WIDGET_METHOD_CALL_MSG: "\u8c03\u7528",
    WIDGET_COLOR_MSG: "%1",
    WIDGET_BOOLEAN_MSG: "%1",
    WIDGET_BOOLEAN_TRUE: "\u662f",
    WIDGET_BOOLEAN_FALSE: "\u5426",
    WIDGET_OPACITY: "\u4e0d\u900f\u660e\u5ea6",
    WIDGET_VISIBLE: "\u662f\u5426 \u663e\u793a",
    WIDGET_DISABLED: "\u662f\u5426 \u542f\u7528",
    CLOUD_DB_QUERY_BY_COLUMN_RESULT: "\u67e5\u8be2\u7ed3\u679c",
    CLOUD_DB_QUERY_BY_COUNT_RESULT: "\u67e5\u8be2\u7ed3\u679c",
    CLOUD_DB_ERROR_NAME: "\u9519\u8bef\u6570\u636e\u5e93\u540d\u79f0",
    CLOUD_DB_ERROR_INFO: "\u9519\u8bef\u4fe1\u606f",
    CLOUD_DB_ERROR: "%1 \u5f53 \u4e91\u6570\u636e\u5e93\u51fa\u9519\u65f6 %2 %3 %4 %5",
    CLOUD_DB_INSERT: "\u65b0\u589e\u884c %1 \u5230 %2 %3 %4 %5",
    CLOUD_DB_DELETE: "\u5220\u9664 %1 \u4e2d\u6ee1\u8db3\u6761\u4ef6 %2 %3 %4 \u7684\u884c %5 %6 %7",
    CLOUD_DB_UPDATE: "\u66f4\u65b0 %1 \u4e2d\u6ee1\u8db3\u6761\u4ef6 %2 %3 %4 \u7684\u884c %5 \u4e3a %6 %7 %8",
    CLOUD_DB_QUERY_BY_COLUMN: "\u67e5\u8be2 %1 \u4e2d\u6ee1\u8db3\u6761\u4ef6 %2 %3 %4 \u7684\u6570\u636e %5 %6 %7",
    CLOUD_DB_ASC: "\u5347\u5e8f",
    CLOUD_DB_DESC: "\u964d\u5e8f",
    CLOUD_DB_QUERY_BY_COUNT: "\u67e5\u8be2 %1 \u7684 %2 %3 %4 %5",
    CLOUD_DB_ROW: "\u884c\u6570",
    CLOUD_DB_COLUMN: "\u5217\u6570",
    CLOUD_DB_FAIL_RESULT: "\u5931\u8d25\u539f\u56e0",
    TABLE_DATA_ON_CHANGE: "%1 \u5f53 %2 \u6570\u636e\u53d1\u751f\u53d8\u52a8\u65f6 %3 %4 ",
    TABLE_DATA_ON_ERROR: "%1 \u5f53 \u6570\u636e\u8868\u51fa\u9519\u65f6 %2 %3 %4 %5",
    TABLE_DATA_PARAM_ERROR_WIDGET_TITLE: "\u9519\u8bef\u6570\u636e\u8868\u540d\u79f0",
    TABLE_DATA_PARAM_ERROR_MESSAGE: "\u9519\u8bef\u4fe1\u606f",
    TABLE_DATA_SET_VALUE_BY_ROW_AND_COLUMN: "\u66ff\u6362 %1 \u5217:%2 \u884c:%3 \u7684\u503c\u4e3a %4",
    TABLE_DATA_INSERT_ROW_DATA: "\u63d2\u5165\u884c %1",
    TABLE_DATA_DELETE_ROW_DATA: "\u5220\u9664 %1 %2",
    TABLE_DATA_CLEAR_DATA: "\u6e05\u7a7a %1",
    TABLE_DATA_GET_VALUE_BY_ROW_AND_COLUMN: "%1 \u5217:%2 \u884c:%3 \u7684\u503c",
    TABLE_DATA_GET_ROW_LENGTH: "%1 \u7684\u603b\u884c\u6570",
    TABLE_DATA_GET_COLUMN_DATA: "%1 %2 \u7684 %3",
    TABLE_DATA_GET_ROW_DATA: "%1 %2 \u7684 %3",
    LAST_ROW: "\u6700\u540e\u4e00\u884c",
    ALL_ROW: "\u6240\u6709\u884c",
    ROW: "\u884c",
    COLUMN: "\u5217",
    EVENT_ADD: "\u65b0\u589e",
    EVENT_SETTER: "\u8bbe\u7f6e",
    EVENT_DELETE: "\u5220\u9664",
    EVENT_QUERY: "\u67e5\u8be2",
    EVENT_CLEAR: "\u6e05\u7a7a",
    ERROR_INFO: "\u9519\u8bef\u4fe1\u606f",
    QUERY_RESULT: "\u67e5\u8be2\u7ed3\u679c",
    FAIL_RESULT: "\u5931\u8d25\u539f\u56e0",
    ALL_KEYS_RESULT: "%1 \u67e5\u8be2\u7ed3\u679c",
    CLOUD_SPACE_DICT_ON_ERROR: "%1 \u5f53 %2 %3 \u51fa\u9519\u65f6 %4 %5 %6",
    CLOUD_SPACE_DICT_ON_ERROR_TOOLTIP: "\u6355\u83b7\u4e91\u5b57\u5178\u79ef\u6728\u6267\u884c\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u3002",
    CLOUD_SPACE_DICT_SET_KEY_VALUE: "\u8bbe\u7f6e %1 \u952e %2 \u7684\u503c\u4e3a %3 %4 %5 %6",
    CLOUD_SPACE_DICT_SET_KEY_VALUE_TOOLTIP: "\u8f93\u5165\u5df2\u6709\u952e\u540d\u5219\u4fee\u6539\u5176\u503c\uff0c\u8f93\u5165\u65b0\u7684\u952e\u540d\u5219\u76f4\u63a5\u65b0\u5efa\u4e00\u4e2a\u952e\u503c\u5bf9\u3002",
    CLOUD_SPACE_DICT_DELETE_KEY: "\u5220\u9664 %1 \u7684\u952e %2 %3 %4 %5",
    CLOUD_SPACE_DICT_DELETE_KEY_TOOLTIP: "\u5220\u9664\u4e91\u5b57\u5178\u4e2d\u67d0\u4e2a\u952e\u503c\u5bf9\uff0c\u4e0d\u53ef\u64a4\u9500\u3002",
    CLOUD_SPACE_DICT_GET_VALUE_BY_KEY: "\u67e5\u8be2 %1 \u4e2d \u952e\u4e3a %2 \u7684\u503c %3 %4 %5",
    CLOUD_SPACE_DICT_GET_VALUE_BY_KEY_TOOLTIP: "\u67e5\u8be2\u4e91\u5b57\u5178\u67d0\u4e2a\u952e\u7684\u503c\u3002",
    CLOUD_SPACE_DICT_GET_KEY_COUNT: "\u67e5\u8be2 %1 \u952e\u7684\u603b\u6570 %2 %3 %4",
    CLOUD_SPACE_DICT_GET_KEY_COUNT_TOOLTIP: "\u67e5\u8be2\u4e91\u5b57\u5178\u952e\u503c\u5bf9\u4e2a\u6570\u3002",
    CLOUD_SPACE_DICT_GET_ALL_KEYS: "\u67e5\u8be2 %1 \u6240\u6709\u952e\u540d %2 %3 %4",
    CLOUD_SPACE_DICT_GET_ALL_KEYS_TOOLTIP: "\u67e5\u8be2\u4e91\u5b57\u5178\u6240\u6709\u952e\u540d\uff0c\u8fd4\u56de\u5217\u8868\u7ed3\u6784\u3002",
    CLOUD_SPACE_DICT_CLEAR_DATA: "\u6e05\u7a7a %1 %2 %3 %4",
    CLOUD_SPACE_DICT_CLEAR_DATA_TOOLTIP: "\u6e05\u7a7a\u4e91\u5b57\u5178\u6240\u6709\u6570\u636e\uff0c\u4e0d\u53ef\u64a4\u9500\u3002",
    CLOUD_TABLE_EVENT_ADD: "\u65b0\u589e",
    CLOUD_TABLE_EVENT_SETTER: "\u66ff\u6362",
    CLOUD_TABLE_EVENT_DELETE: "\u5220\u9664",
    CLOUD_TABLE_EVENT_QUERY: "\u67e5\u8be2",
    CLOUD_TABLE_EVENT_CLEAR: "\u6e05\u7a7a",
    CLOUT_TABLE_FAILED_TEXT: "\u5931\u8d25\u5219\u6267\u884c",
    CLOUD_TABLE_QUERY_BY_COLUMN_LIST_RESULT: "%1\u67e5\u8be2\u7ed3\u679c",
    CLOUD_TABLE_QUERY_BY_COLUMN_LINE_NUMBER_RESULT: "%1\u884c\u53f7\u5217\u8868",
    CLOUD_TABLE_QUERY_BY_COLUMN_RESULT: "\u67e5\u8be2\u7ed3\u679c",
    CLOUD_TABLE_QUERY_BY_COUNT_RESULT: "\u67e5\u8be2\u7ed3\u679c",
    CLOUD_TABLE_ERROR_NAME: "\u9519\u8bef\u4e91\u6570\u636e\u8868\u540d\u79f0",
    CLOUD_TABLE_ERROR_INFO: "\u9519\u8bef\u4fe1\u606f",
    CLOUD_TABLE_ERROR: "%1 \u5f53 %2 %3\u51fa\u9519\u65f6 %4 %5 %6",
    CLOUD_TABLE_ERROR_TOOLTIP: "\u6355\u83b7\u4e91\u6570\u636e\u8868\u79ef\u6728\u6267\u884c\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u3002",
    CLOUD_TABLE_INSERT: "\u65b0\u589e\u884c %1 \u5230 %2 %3 %4 %5",
    CLOUD_TABLE_INSERT_TOOLTIP: "\u5728\u4e91\u6570\u636e\u8868\u6700\u540e\u4e00\u884c\u65b0\u589e\u6570\u636e\uff1a\u652f\u6301\u5d4c\u5165\u5b57\u7b26\u6216\u5217\u8868\u6570\u636e\uff0c\u5747\u4ee5\u9017\u53f7\u4e3a\u5206\u5217\u6807\u8bc6\u3002",
    CLOUD_TABLE_DELETE: "\u5220\u9664 %1 \u4e2d %2 %3 %4 \u7684\u884c %5 %6 %7",
    CLOUD_TABLE_DELETE_TOOLTIP: "\u5220\u9664\u4e91\u6570\u636e\u8868\u4e2d\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\uff0c\u4e0d\u53ef\u64a4\u9500\u3002",
    CLOUD_TABLE_UPDATE: "\u66f4\u65b0 %1 \u4e2d %2 %3 %4 \u7684\u884c\uff1a %5 \u4e3a %6 %7 %8",
    CLOUD_TABLE_UPDATE_TOOLTIP: "\u66f4\u65b0\u4e91\u6570\u636e\u8868\u4e2d\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\uff0c\u4e0d\u53ef\u64a4\u9500\u3002",
    CLOUD_TABLE_QUERY_BY_COLUMN: "\u67e5\u8be2 %1 \u4e2d %2 %3 %4 \u7684\u6570\u636e %5 %6 %7",
    CLOUD_TABLE_QUERY_BY_COLUMN_TOOLTIP: "\u67e5\u8be2\u4e91\u6570\u636e\u8868\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\uff1a\u8fd4\u56de\u5217\u8868\u7ed3\u6784\uff0c\u82e5\u6709\u591a\u4e2a\u6570\u636e\u5219\u8fd4\u56de\u4e8c\u7ef4\u5217\u8868\u3002",
    CLOUD_TABLE_ASC: "\u5347\u5e8f",
    CLOUD_TABLE_DESC: "\u964d\u5e8f",
    CLOUD_TABLE_QUERY_BY_COUNT: "\u67e5\u8be2 %1 \u7684 %2 %3 %4 %5",
    CLOUD_TABLE_QUERY_BY_COUNT_TOOLTIP: "\u67e5\u8be2\u4e91\u6570\u636e\u8868\u7684\u884c\u6570\u6216\u5217\u6570\u3002",
    CLOUD_TABLE_ROW: "\u884c\u6570",
    CLOUD_TABLE_COLUMN: "\u5217\u6570",
    CLOUD_TABLE_FAIL_RESULT: "\u5931\u8d25\u539f\u56e0",
    CLOUD_TABLE_CLEAR_ALL: "\u6e05\u7a7a %1 %2 %3 %4",
    CLOUD_TABLE_CLEAR_ALL_TOOLTIP: "\u6e05\u7a7a\u4e91\u6570\u636e\u8868\u6240\u6709\u6570\u636e\uff0c\u4e0d\u53ef\u64a4\u9500\u3002"
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
        if (this.arrow || (this.arrow = Object(je.draw_arrow)(this.source_block.workspace.options.dropdown.arrow_type), this.field_group.appendChild(this.arrow)), this.size_.width += this.source_block.workspace.options.dropdown.padding, this.arrow.setAttribute("transform", "translate(".concat(this.size_.width, ", ").concat(this.size_.height / 2 - 7, ")")), this.size_.width += this.source_block.workspace.options.dropdown.padding - 2, this.source_block.is_shadow()) {
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
      if (Object(we.a)(Object(Ce.a)(n.prototype), "on_html_input_change", this).call(this), this.html_input) {
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
    u = "SOUND_VOLUME" === p ? "\u5c0f" : "\u6162";
    d = "SOUND_VOLUME" === p ? "\u5927" : "\u5feb";
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
  if (xe.call(this, e), Object(O.c)().getSliderVisible()) {
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
var Pe = require("../2/index");
var Be = De.FieldTextInput.prototype.show_editor;
De.FieldTextInput.prototype.show_editor = function () {
  var e;
  var t = this;
  var n = Be.call(this);
  if ("text_rich_text" === (null === (e = this.source_block) || void 0 === e ? void 0 : e.type)) {
    Object(Le.a)(Object(Pe.Bh)({
      content: this.get_value(),
      onConfirm: function (e) {
        t.set_value(e);
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
    return n.innerText;
  }
  return Me.Field.prototype.get_display_text.call(this);
};
var Fe = require("./726");
Fe.FieldColour.prototype.show_editor = function () {
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
var Ge;
var Ue = require("../21/index");
function We() {
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
function He() {
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
function Ve() {
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
function ze() {
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
function Ye() {
  var e = this;
  this.set_on_block_change(function (t) {
    if (!m.Blink.events.is_undoing() && t.type === m.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = Object(Ue.getActorActionInputField)(e);
      if (n) {
        var r = Object(O.c)().getActorActionList(t.get_new_value())[0].value || g.h;
        if (!(null === n || void 0 === n)) {
          n.set_value(r);
        }
      }
    }
  });
}
function Ke() {
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
function qe() {
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
function Xe() {
  m.Blink.extensions.register(Ge.UPDATE_KEY_AFTER_SELECTING_DOC, We);
  m.Blink.extensions.register(Ge.UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC, He);
  m.Blink.extensions.register(Ge.UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB, Ve);
  m.Blink.extensions.register(Ge.UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA, ze);
  m.Blink.extensions.register(Ge.UPDATE_ACTION_AFTER_SELECT_ACTOR, Ye);
  m.Blink.extensions.register(Ge.UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT, Ke);
  m.Blink.extensions.register(Ge.UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE, qe);
  m.Blink.registry.field.register(ue.a.field_type, ue.a);
  m.Blink.registry.field.register(Ne.field_type, Ne);
  O.e.apply(void 0, [m.Blink, ue.a, s, c, o, i, u, r, a, d, l, p, f].concat(Object(h.a)(Object(g.M)())));
  var e = Object(O.a)();
  m.Blink.define_blocks_with_json_array(e);
}
function Qe() {
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
}(Ge || (Ge = {}));