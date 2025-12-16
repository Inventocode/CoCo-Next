/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-42
 */

"use strict"

import * as Pp from "./95"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as D from "./6"
import * as Fp from "./76"
var Wp = {
  type: An.w,
  category: {
    iconId: Pp.b,
    blocks: An.w
  },
  categoryClass: {
    text: "",
    iconId: Pp.b,
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"input_on_focus\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), "<block type=\"input_on_blur\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), "<block type=\"input_on_change\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), "<sep gap=\"50\"></sep>", Jd.cb({
        widgetType: An.w,
        title: "文案",
        lineId: "text"
      }), "<block type=\"input_set_content\" uncache=\"true\">\n    ".concat(t, "\n    <value name=\"CONTENT\">\n      <shadow type=\"text\">\n        <field name=\"TEXT\">").concat($_17_index.Blink.Msg.INPUT_DEFAULT_VALUE, "</field>\n      </shadow>\n    </value>\n  </block>"), Jd.sb({
        property: "contentColor",
        widgetType: An.w,
        widgetId: e,
        isSetProperty: true
      }), Jd.sb({
        property: "fontSize",
        widgetType: An.w,
        widgetId: e,
        isSetProperty: true
      }), Jd.sb({
        property: "textAlign",
        widgetType: An.w,
        widgetId: e,
        isSetProperty: true
      }), Jd.cb({
        widgetType: An.w,
        title: "样式",
        lineId: "style"
      }), Jd.qb({
        property: "setTemplateMode",
        widgetType: An.w,
        widgetId: e
      }), Jd.qb({
        property: "setBackgroundImage",
        widgetType: An.w,
        widgetId: e
      }), Jd.cb({
        widgetType: An.w,
        title: "通用",
        lineId: "common"
      }), Jd.sb({
        property: "__opacity",
        widgetType: An.w,
        widgetId: e,
        isSetProperty: true
      }), Jd.sb({
        property: "__size",
        widgetType: An.w,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"input_set_position\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"POSITION_TYPE\">positionX</field>\n        <value name=\"NUM\">\n          <shadow type=\"math_number\">\n            <field name=\"NUM\" constraints=',,1'>100</field>\n          </shadow>\n        </value>\n    </block>"), "<block type=\"input_set_visible\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"VISIBLE\">show</field>\n      </block>"), "<block type=\"input_set_disabled\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"DISABLE\">disabled</field>\n      </block>"), "<block type=\"input_set_error_message\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"OPEN\">open</field>\n        <value name=\"CONTENT\">\n          <shadow type=\"text\">\n            <field name=\"TEXT\">").concat($_17_index.Blink.Msg.INPUT_DEFAULT_ERROR_MESSAGE, "</field>\n          </shadow>\n        </value>\n      </block>"), "<sep gap=\"50\"></sep>", Jd.cb({
        widgetType: An.w,
        title: "返回值",
        lineId: "getter"
      }), "<block type=\"input_get_text\" uncache=\"true\">\n        ".concat(t, "\n      </block>"), Jd.sb({
        property: "errorMessage",
        widgetType: An.w,
        widgetId: e
      }), Jd.sb({
        property: "contentColor",
        widgetType: An.w,
        widgetId: e
      }), Jd.sb({
        property: "fontSize",
        widgetType: An.w,
        widgetId: e
      }), Jd.sb({
        property: "__opacity",
        widgetType: An.w,
        widgetId: e
      }), Jd.sb({
        property: "__size",
        widgetType: An.w,
        widgetId: e
      }), "<block type=\"input_get_position\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"POSITION_TYPE\">positionX</field>\n      </block>"), "<sep gap=\"50\"></sep>", Jd.sb({
        property: "hasErrorMessage",
        widgetType: An.w,
        widgetId: e
      }), Jd.sb({
        property: "__visible",
        widgetType: An.w,
        widgetId: e
      }), Jd.sb({
        property: "__disabled",
        widgetType: An.w,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      [
        {
          type: "input_on_focus",
          funcName: "onInputFocus"
        }, {
          type: "input_on_blur",
          funcName: "onInputBlur"
        }, {
          type: "input_on_change",
          funcName: "onInputChange"
        }
      ].forEach(function (t) {
        e.insertBlockSnippetGenerator(t.type, function (n, r) {
          var o = n.blocks[r]
          var i = e.getFieldValue(o, "WIDGET_ID") || ""
          var a = e.statementToCode(n, r, "DO")
          return a ? ep.n(t.funcName, [ep.o(i)], a) : ""
        })
      });
      [
        {
          type: "input_set_mode",
          funcName: "setInputWidgetMode",
          field: "MODE"
        }, {
          type: "input_set_size_type",
          funcName: "setInputWidgetSizeType",
          field: "SIZE_TYPE"
        }
      ].forEach(function (t) {
        e.insertBlockSnippetGenerator(t.type, function (n, r) {
          var o = n.blocks[r]
          var i = e.getFieldValue(o, "WIDGET_ID") || ""
          var a = e.getFieldValue(o, t.field)
          return a ? ep.n(t.funcName, [ep.o(i), ep.o(a)]) : ""
        })
      })
      e.insertBlockSnippetGenerator("input_field_color", function (t, n) {
        var r = t.blocks[n]
        return ep.o(e.getFieldValue(r, "COLOR_VALUE") || "")
      })
      e.insertBlockSnippetGenerator("input_set_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "COLOR", e.ORDER_FUNCTION_CALL)
        return ep.n("setInputWidgetColor", [ep.o(o), i])
      })
      e.insertBlockSnippetGenerator("input_set_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "POSITION_TYPE")
        var a = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL) || ""
        return a && i ? ep.l(ep.n("positionX" === i ? "setInputWidgetPositionX" : "setInputWidgetPositionY", [ep.o(o), a]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("input_set_visible", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "show" === e.getFieldValue(r, "VISIBLE")
        return ep.n("setInputWidgetVisible", [ep.o(o), i])
      })
      e.insertBlockSnippetGenerator("input_set_disabled", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "disabled" === e.getFieldValue(r, "DISABLED")
        return ep.l(ep.n("setInputWidgetDisabled", [ep.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("input_set_error_message", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "open" === e.getFieldValue(r, "ERROR_SWITCH")
        var a = e.valueToCode(t, n, "CONTENT", e.ORDER_FUNCTION_CALL) || ""
        return i ? ep.n("setInputWidgetErrorMessage", [ep.o(o), a]) : ep.n("unsetInputWidgetErrorMessage", [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("input_set_content", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "TYPE")
        var a = e.valueToCode(t, n, "CONTENT", e.ORDER_FUNCTION_CALL) || ""
        return i ? ep.n("setWidgetTextAttribute", [ep.o(o), ep.o(i), a]) : ""
      })
      e.insertBlockSnippetGenerator("input_get_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return ep.s("getInputWidgetColor", [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("input_get_text", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "TEXT")
        if (!i) {
          return ""
        }
        var a = ""
        a = "inputContent" === i ? "getInputWidgetValue" : "getInputWidgetPlaceholder"
        return ep.s(a, [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("input_get_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "POSITION_TYPE")
        if (!i) {
          return ""
        }
        var a = ""
        a = "positionX" === i ? "getInputWidgetPositionX" : "getInputWidgetPositionY"
        return ep.s(a, [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("input_assert_state", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return "error" === e.getFieldValue(r, "STATE") ? ep.s("checkIfInputWidgetHasErrorMessage", [ep.o(o)]) : "(\n          Coco.getInputWidgetDisabled(".concat(ep.o(o), ")\n        )")
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType("INPUT_WIDGET")
        }
      }
      function r(e) {
        if (this.source_block) {
          var /* [auto-meaningful-name] */this$source_block = this.source_block
          var r = "open" === e
          var /* [auto-meaningful-name] */this$source_block$inputList = this$source_block.inputList
          var /* [auto-meaningful-name] */this$source_block$inputListThis$source_block$inputList$length1$name = this$source_block$inputList[this$source_block$inputList.length - 1].name
          if (r) {
            this$source_block.append_shadow_input_json("CONTENT", "text", t.Msg.INPUT_DEFAULT_ERROR_MESSAGE).set_check(["String", "Number"])
          } else {
            this$source_block.removeInput(this$source_block$inputListThis$source_block$inputList$length1$name)
          }
        }
      }
      [
        {
          type: "input_on_focus",
          message: "%{BKY_INPUT_ON_FOCUS}"
        }, {
          type: "input_on_blur",
          message: "%{BKY_INPUT_ON_BLUR}"
        }, {
          type: "input_on_change",
          message: "%{BKY_INPUT_ON_CHANGE}"
        }
      ].forEach(function (o) {
        e.insertBlockProfile(o.type, {
          type: o.type,
          message0: o.message,
          args0: [
            ep.e("%{BKY_BLOCK_INPUT_ICON}", true), D.a({}, n), {
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
        e.insertBlockProfile("input_set_mode", {
          type: "input_set_mode",
          message0: "%{BKY_INPUT_SET_MODE}",
          args0: [
            D.a({}, n), {
              type: "field_coco_dropdown",
              name: "MODE",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_OUTLINED_NORMAL, Fp.c.OUTLINED_NORMAL], [t.Msg.INPUT_CONTAINED_NORMAL, Fp.c.CONTAINED_NORMAL], [t.Msg.INPUT_CONTAINED_ROUND, Fp.c.CONTAINED_ROUND], [t.Msg.INPUT_OUTLINED_FLAT, Fp.c.OUTLINED_FLAT]]
              }
            }
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_size_type", {
          type: "input_set_size_type",
          message0: "%{BKY_INPUT_SET_SIZE}",
          args0: [
            D.a({}, n), {
              type: "field_coco_dropdown",
              name: "SIZE_TYPE",
              custom: true,
              options: function () {
                return [[t.Msg.SMALL, An.s.SMALL], [t.Msg.MEDIUM, An.s.MEDIUM], [t.Msg.LARGE, An.s.LARGE]]
              }
            }
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_color", {
          type: "input_set_color",
          message0: "%{BKY_INPUT_SET_COLOR}",
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
        e.insertBlockProfile("input_field_color", {
          type: "input_field_color",
          message0: "%1",
          args0: [
            {
              type: "field_colour",
              name: "COLOR_VALUE",
              colour: Pp.e
            }
          ],
          colour: "#ffffff",
          output: ["Color"]
        })
        e.insertBlockProfile("input_set_position", {
          type: "input_set_position",
          message0: "%{BKY_INPUT_SET_POSITION}",
          args0: [
            D.a({}, n), {
              type: "field_coco_dropdown",
              name: "POSITION_TYPE",
              custom: true,
              options: function () {
                return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
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
        e.insertBlockProfile("input_set_visible", {
          type: "input_set_visible",
          message0: "%1 %2",
          args0: [
            {
              type: "field_coco_dropdown",
              name: "VISIBLE",
              custom: true,
              options: function () {
                return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
              }
            }, D.a({}, n)
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_disabled", {
          type: "input_set_disabled",
          message0: "%1 %2",
          args0: [
            {
              type: "field_coco_dropdown",
              name: "DISABLED",
              custom: true,
              options: function () {
                return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
              }
            }, D.a({}, n)
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_content", {
          type: "input_set_content",
          message0: "%{BKY_INPUT_SET_INPUT_CONTENT}",
          args0: [
            D.a({}, n), {
              type: "field_coco_dropdown",
              name: "TYPE",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_CONTENT, "value"], [t.Msg.INPUT_PLACEHOLDER, "placeholder"]]
              },
              optOnchange: function (e) {
                var /* [auto-meaningful-name] */this$source_block = this.source_block
                var r = e || (null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_field_value("TYPE"))
                if (r) {
                  var o = "value" === r ? t.Msg.INPUT_DEFAULT_VALUE : t.Msg.INPUT_DEFAULT_PLACEHOLDER
                  var i = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_shadow_field("CONTENT", "TEXT")
                  if (!(null === i || undefined === i)) {
                    i.set_value(o)
                  }
                }
              }
            }, {
              type: "input_value",
              name: "CONTENT",
              check: ["String", "Number", "Boolean", "Array", "Object"]
            }
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_set_error_message", {
          type: "input_set_error_message",
          message0: "%{BKY_INPUT_ERROR_TIPS}",
          args0: [
            {
              type: "field_coco_dropdown",
              name: "ERROR_SWITCH",
              custom: true,
              options: function () {
                return [[t.Msg.OPEN, "open"], [t.Msg.CLOSE, "close"]]
              },
              optOnchange: r
            }, D.a({}, n)
          ],
          message1: "%1",
          args1: [
            {
              type: "input_value",
              name: "CONTENT",
              check: ["String", "Number", "Boolean", "Array", "Object"]
            }
          ],
          previousStatement: true,
          nextStatement: true,
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_get_color", {
          type: "input_get_color",
          message0: "%{BKY_INPUT_GET_COLOR}",
          args0: [D.a({}, n)],
          output: ["String", "Color"],
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_get_text", {
          type: "input_get_text",
          message0: "%{BKY_INPUT_GET_PROPERTY}",
          args0: [
            D.a({}, n), {
              type: "field_coco_dropdown",
              name: "TEXT",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_CONTENT, "inputContent"], [t.Msg.INPUT_PLACEHOLDER, "placeholder"]]
              }
            }
          ],
          output: ["String"],
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_get_position", {
          type: "input_get_position",
          message0: "%{BKY_INPUT_GET_PROPERTY}",
          args0: [
            D.a({}, n), {
              type: "field_coco_dropdown",
              name: "POSITION_TYPE",
              custom: true,
              options: function () {
                return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
              }
            }
          ],
          output: ["String", "Number"],
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
        e.insertBlockProfile("input_assert_state", {
          type: "input_assert_state",
          message0: "%{BKY_INPUT_ASSERT_STATE}",
          args0: [
            D.a({}, n), {
              type: "field_coco_dropdown",
              name: "STATE",
              custom: true,
              options: function () {
                return [[t.Msg.INPUT_REPORT_ERROR, "error"], [t.Msg.DISABLED, "disabled"]]
              }
            }
          ],
          output: ["Boolean"],
          colour: "%{BKY_APPEARANCE_HUE}",
          inputsInline: true
        })
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["input_on_focus", "input_on_blur", "input_on_change", "input_set_mode", "input_set_size_type", "input_set_color", "input_set_position", "input_set_visible", "input_set_disabled", "input_set_error_message", "input_get_color", "input_get_text", "input_get_position", "input_assert_state", "input_set_content"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["input_on_focus", "input_on_blur", "input_on_change"]
}
export { Wp }
