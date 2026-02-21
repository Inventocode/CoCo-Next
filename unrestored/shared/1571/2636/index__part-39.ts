/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-39
 */

"use strict"

import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index from "../../../../src/shared/packages/@crc/blink/src/index"
import * as kn from "./75"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as Et from "./9"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_314 from "./314"
import * as Sp from "./83"
var Ap = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.d,
  category: {
    iconId: $_314.d,
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.d
  },
  categoryClass: {
    text: "",
    iconId: $_314.d,
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"button_on_press\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), rp.d, "<block type=\"button_set_content\" uncache=\"true\">\n        ".concat(t, "\n        <value name=\"CONTENT\">\n          <shadow type=\"text\">\n            <field name=\"TEXT\">").concat($$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.Msg.BUTTON_DEFAULT_TEXT, "</field>\n          </shadow>\n        </value>\n      </block>"), "<block type=\"button_set_mode\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"MODE\">").concat(Sp.b.CONTAINED_TEXT, "</field>\n      </block>"), "<block type=\"button_set_color\" uncache=\"true\">\n        ".concat(t, "\n        <value name=\"COLOR\">\n          <shadow type=\"button_field_color\"></shadow>\n        </value>\n      </block>"), Jd.sb({
        property: "__opacity",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.d,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"button_set_size_type\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"SIZE_TYPE\">").concat(Sp.c.MEDIUM, "</field>\n      </block>"), "<block type=\"button_set_position\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"POSITION_TYPE\">positionX</field>\n        <value name=\"NUM\">\n          <shadow type=\"math_number\">\n            <field name=\"NUM\" constraints='").concat(-kn.a, ",").concat(kn.a, ",1'>100</field>\n          </shadow>\n        </value>\n    </block>"), rp.d, "<block type=\"button_set_visible\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), "<block type=\"button_set_disabled\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), rp.d, "<block type=\"button_get_content\" uncache=\"true\">\n    ".concat(t, "\n    </block>"), "<block type=\"button_get_color\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Jd.sb({
        property: "__opacity",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.d,
        widgetId: e
      }), "<block type=\"button_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), rp.d, Jd.sb({
        property: "__visible",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.d,
        widgetId: e
      }), Jd.sb({
        property: "__disabled",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.d,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      function t(t, n) {
        var r = t.blocks[n]
        return {
          block: r,
          widgetId: e.getFieldValue(r, "WIDGET_ID") || ""
        }
      }
      e.insertBlockSnippetGenerator("button_on_press", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "PRESS_EVENT") || ""
        var c = e.statementToCode(n, r, "DO")
        return c ? "press" === s ? ep.n("onButtonPress", [ep.o(o$widgetId)], c) : "pressIn" === s ? ep.n("onButtonPressIn", [ep.o(o$widgetId)], c) : ep.n("onButtonPressOut", [ep.o(o$widgetId)], c) : ""
      })
      e.insertBlockSnippetGenerator("button_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "show" === e.getFieldValue(o$block, "DISPLAY")
        return ep.n("setButtonWidgetVisible", [ep.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("button_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "disabled" === e.getFieldValue(o$block, "DISABLED")
        return ep.l(ep.n("setButtonWidgetDisabled", [ep.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("button_get_content", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.s("getButtonWidgetText", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("button_get_color", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.s("getButtonWidgetColor", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("button_field_color", function (n, r) {
        var /* [auto-meaningful-name] */tNR$block = t(n, r).block
        return ep.o(e.getFieldValue(tNR$block, "COLOR_VALUE") || "")
      })
      e.insertBlockSnippetGenerator("button_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "positionX" === (e.getFieldValue(o$block, "POSITION_TYPE") || "") ? "getButtonWidgetPositionX" : "getButtonWidgetPositionY"
        return ep.s(s, [ep.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("button_set_content", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        return ep.n("setButtonWidgetText", [ep.o(tNR$widgetId), i])
      })
      e.insertBlockSnippetGenerator("button_set_mode", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "MODE") || ""
        return ep.n("setButtonWidgetMode", [ep.o(o$widgetId), ep.o(s)])
      })
      e.insertBlockSnippetGenerator("button_set_color", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "COLOR", e.ORDER_FUNCTION_CALL)
        return ep.n("setButtonWidgetColor", [ep.o(tNR$widgetId), i])
      })
      e.insertBlockSnippetGenerator("button_set_size_type", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "SIZE_TYPE") || ""
        return ep.n("setButtonWidgetSizeType", [ep.o(o$widgetId), ep.o(s)])
      })
      e.insertBlockSnippetGenerator("button_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "POSITION_TYPE") || ""
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL) || ""
        return ep.l(ep.n("positionX" === s ? "setButtonWidgetPositionX" : "setButtonWidgetPositionY", [ep.o(o$widgetId), c]), o$block, e)
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType("BUTTON_WIDGET")
        }
      }
      e.insertBlockProfile("button_on_press", {
        type: "button_on_press",
        message0: "%{BKY_BUTTON_ON_PRESS}",
        args0: [
          ep.e("%{BKY_BLOCK_TAB_ICON}", true), {
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getWidgetListByType("BUTTON_WIDGET")
            }
          }, {
            type: "field_coco_dropdown",
            name: "PRESS_EVENT",
            custom: true,
            options: function () {
              return [[t.Msg.PRESS, "press"], [t.Msg.PRESS_IN, "pressIn"], [t.Msg.PRESS_OUT, "pressOut"]]
            }
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_set_content", {
        type: "button_set_content",
        message0: "%{BKY_BUTTON_SET_CONTENT}",
        args0: [
          D.a({}, n), {
            type: "input_value",
            name: "CONTENT"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_set_mode", {
        type: "button_set_mode",
        message0: "%{BKY_BUTTON_SET_MODE}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "MODE",
            custom: true,
            options: [[t.Msg.BUTTON_CONTAINED_TEXT, Sp.b.CONTAINED_TEXT], [t.Msg.BUTTON_OUTLINED_TEXT, Sp.b.OUTLINED_TEXT], [t.Msg.BUTTON_CONTAINED_ICON, Sp.b.CONTAINED_ICON], [t.Msg.BUTTON_OUTLINED_ICON, Sp.b.OUTLINED_ICON]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_set_color", {
        type: "button_set_color",
        message0: "%{BKY_BUTTON_SET_COLOR}",
        args0: [
          D.a({}, n), {
            type: "input_value",
            check: ["Color", "String"],
            name: "COLOR"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_field_color", {
        type: "button_field_color",
        message0: "%1",
        args0: [
          {
            type: "field_colour",
            name: "COLOR_VALUE",
            colour: $_314.a
          }
        ],
        colour: "#ffffff",
        output: ["Color"]
      })
      e.insertBlockProfile("button_set_size_type", {
        type: "button_set_size_type",
        message0: "%{BKY_BUTTON_SET_SIZE_TYPE}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.TINY, Sp.c.TINY], [t.Msg.SMALL, Sp.c.SMALL], [t.Msg.MEDIUM, Sp.c.MEDIUM], [t.Msg.LARGE, Sp.c.LARGE], [t.Msg.HUGE, Sp.c.HUGE]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_set_position", {
        type: "button_set_position",
        message0: "%{BKY_SET} %1 %{BKY_OF} %2 %{BKY_IS}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getWidgetListByType("BUTTON_WIDGET")
            }
          }, {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]],
            optOnchange: function (e) {
              Et.Gb(this, e)
            }
          }
        ],
        message1: "%1",
        args1: [
          {
            type: "input_value",
            name: "NUM",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_set_visible", {
        type: "button_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, {
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getWidgetListByType("BUTTON_WIDGET")
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_set_disabled", {
        type: "button_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISABLED",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, {
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getWidgetListByType("BUTTON_WIDGET")
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_get_content", {
        type: "button_get_content",
        message0: "%{BKY_BUTTON_GET_CONTENT}",
        args0: [D.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_get_color", {
        type: "button_get_color",
        message0: "%{BKY_BUTTON_GET_COLOR}",
        args0: [D.a({}, n)],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("button_get_position", {
        type: "button_get_position",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getWidgetListByType("BUTTON_WIDGET")
            }
          }, {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
            }
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["button_on_press", "button_set_content", "button_set_mode", "button_set_color", "button_set_size_type", "button_set_position", "button_set_visible", "button_set_disabled", "button_get_content", "button_get_color", "button_get_position"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["button_on_press"]
}
var Ip = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, [
    {
      type: "VisibleSwitch"
    }, {
      type: "DisabledSwitch"
    }
  ], {
    type: "ButtonMode"
  }, {
    type: "Color",
    label: "color"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "ButtonSizeType"
  }, {
    type: "Coordinate"
  }
]
export { Ap }
export { Ip }
