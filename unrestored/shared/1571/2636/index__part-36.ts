/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-36
 */

"use strict"

import { $d } from "./index__part-35"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as /* [auto-meaningful-name] */$_146 from "./146"
import * as Qu from "./60"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as D from "./6"
import * as ep from "./4"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as /* [auto-meaningful-name] */$_118_index from "./118/index"
import * as rp from "./61"
var op = {
  type: An.H,
  category: {
    iconId: $_146.b,
    blocks: An.H
  },
  categoryClass: {
    text: "",
    iconId: $_146.b,
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"text_widget_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $d, "<block type=\"text_widget_set_content\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"CONTENT\">\n        <shadow type=\"text_multiline\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.TEXT, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_color\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COLOR\">\n        <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">").concat($_146.e, "</field></shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_font_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat(Qu.n, ",,1'>16</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_align\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $d, Jd.sb({
        property: "__opacity",
        widgetType: An.H,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"text_widget_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat($_146.l, ",").concat($_146.j, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"text_widget_set_position\" uncache=\"true\">\n        ".concat(t, "\n        <field name=\"POSITION_TYPE\">positionX</field>\n        <value name=\"NUM\">\n          <shadow type=\"math_number\">\n            <field name=\"NUM\" constraints=',,1'>100</field>\n          </shadow>\n        </value>\n    </block>"), "<block type=\"text_widget_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $d, "<block type='text_widget_get_content' uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type='text_widget_get_color' uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type='text_widget_get_font_size' uncache=\"true\">\n      ".concat(t, "\n    </block>"), Jd.sb({
        property: "__opacity",
        widgetType: An.H,
        widgetId: e
      }), "<block type=\"text_widget_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), "<block type=\"text_widget_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), $d, Jd.sb({
        property: "__visible",
        widgetType: An.H,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("text_widget_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        return i ? ep.n("onTextPress", [ep.o(o)], i) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_set_visible", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "show" === e.getFieldValue(r, "DISPLAY")
        return ep.n("setTextWidgetVisible", [ep.o(o), i])
      })
      e.insertBlockSnippetGenerator("text_widget_get_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "COLOR_TYPE") || ""
        if (!o || !i) {
          return ""
        }
        var a = "textColor" === i ? "getTextWidgetFontColor" : "getTextWidgetBackgroundColor"
        return ep.s(a, [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_get_content", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        return o ? ep.s("getTextWidgetContent", [ep.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_field_color", function (t, n) {
        var r = t.blocks[n]
        return ep.o(e.getFieldValue(r, "COLOR_VALUE") || "")
      })
      e.insertBlockSnippetGenerator("text_widget_get_property", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "PROPERTY")
        if (!o || !i) {
          return ""
        }
        var a = ""
        switch (i) {
          case "height":
            a = "getTextWidgetHeight"
            break
          case "width":
            a = "getTextWidgetWidth"
            break
          case "fontSize":
            a = "getTextWidgetFontSize"
            break
          case "positionX":
            a = "getTextWidgetPositionX"
            break
          case "positionY":
            a = "getTextWidgetPositionY"
        }
        return ep.s(a, [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_content", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "CONTENT", e.ORDER_FUNCTION_CALL)
        return o ? ep.n("setTextWidgetContent", [ep.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_set_color", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "COLOR_TYPE")
        var a = e.valueToCode(t, n, "COLOR", e.ORDER_FUNCTION_CALL)
        return o && i && a ? ep.l(ep.n("textColor" === i ? "setTextWidgetFontColor" : "setTextWidgetBackgroundColor", [ep.o(o), a]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("text_widget_set_align", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "ALIGN_TYPE")
        var a = e.getFieldValue(r, "ALIGN_VALUE")
        if (!(o && i && a)) {
          return ""
        }
        var s = "horizontal" === i ? "setTextWidgetHorizontalAlignment" : "setTextWidgetVerticalAlignment"
        return ep.n(s, [ep.o(o), ep.o(a)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_property", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "PROPERTY")
        if (!o || !i) {
          return ""
        }
        var a = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL) || "''"
        var s = ""
        switch (i) {
          case "height":
            s = "setTextWidgetHeight"
            break
          case "width":
            s = "setTextWidgetWidth"
            break
          case "fontSize":
            s = "setTextWidgetFontSize"
            break
          case "positionX":
            s = "setTextWidgetPositionX"
            break
          case "positionY":
            s = "setTextWidgetPositionY"
        }
        return ep.l(ep.n(s, [ep.o(o), a]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_set_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "POSITION_TYPE") || ""
        var a = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL) || ""
        return ep.l(ep.n("positionX" === i ? "setTextWidgetPositionX" : "setTextWidgetPositionY", [ep.o(o), a]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_get_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = "positionX" === (e.getFieldValue(r, "POSITION_TYPE") || "") ? "getTextWidgetPositionX" : "getTextWidgetPositionY"
        return ep.s(i, [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        var a = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "setTextWidgetWidth" : "setTextWidgetHeight"
        return ep.l(ep.n(a, [ep.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "getTextWidgetWidth" : "getTextWidgetHeight"
        return ep.s(i, [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("text_widget_set_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("setTextWidgetFontSize", [ep.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("text_widget_get_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        return o ? ep.s("getTextWidgetFontSize", [ep.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType(An.H)
        }
      }
      function r(e) {
        rp.l(this, e, [
          {
            label: "width",
            min: $_146.m,
            max: $_146.k,
            value: 100
          }, {
            label: "height",
            min: $_146.l,
            max: $_146.j,
            value: 100
          }
        ])
      }
      e.insertBlockProfile("text_widget_on_press", {
        type: "text_widget_on_press",
        message0: "%{BKY_TEXT_WIDGET_ON_PRESS}",
        args0: [
          ep.e("%{BKY_BLOCK_TAB_ICON}", true), D.a({}, n), {
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
      e.insertBlockProfile("text_widget_set_content", {
        type: "text_widget_set_content",
        message0: "%{BKY_TEXT_WIDGET_SET_CONTENT}",
        args0: [
          D.a({}, n), {
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
      e.insertBlockProfile("text_widget_set_color", {
        type: "text_widget_set_color",
        message0: "%{BKY_TEXT_WIDGET_SET_PROPERTY}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "COLOR_TYPE",
            custom: true,
            options: [[t.Msg.TEXT_COLOR, "textColor"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
          }, {
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
      e.insertBlockProfile("text_widget_field_color", {
        type: "text_widget_field_color",
        message0: "%1",
        args0: [
          {
            type: "field_colour",
            name: "COLOR_VALUE",
            colour: "#000000"
          }
        ],
        colour: "#ffffff",
        output: ["Color"]
      })
      e.insertBlockProfile("text_widget_set_align", {
        type: "text_widget_set_align",
        message0: "%{BKY_TEXT_WIDGET_SET_ALIGN}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "ALIGN_TYPE",
            custom: true,
            options: [[t.Msg.TEXT_WIDGET_HORIZONTAL_ALIGN, "horizontal"], [t.Msg.TEXT_WIDGET_VERTICAL_ALIGN, "vertical"]],
            optOnchange: function (e) {
              if (this.source_block) {
                var /* [auto-meaningful-name] */this$source_block = this.source_block
                var /* [auto-meaningful-name] */this$source_block$inputList = this$source_block.inputList
                var /* [auto-meaningful-name] */this$source_block$inputListThis$source_block$inputList$length1$name = this$source_block$inputList[this$source_block$inputList.length - 1].name
                this$source_block.removeInput(this$source_block$inputListThis$source_block$inputList$length1$name)
                var i = []
                i = "horizontal" === e ? [[t.Msg.LEFT_ALIGN, "left"], [t.Msg.CENTER_ALIGN, "center"], [t.Msg.RIGHT_ALIGN, "right"]] : [[t.Msg.TOP_ALIGN, "flex-start"], [t.Msg.CENTER_ALIGN, "center"], [t.Msg.BOTTOM_ALIGN, "flex-end"]]
                var a = new $_118_index.a({
                  type: "field_coco_dropdown",
                  name: "ALIGN_VALUE",
                  custom: true,
                  options: i
                })
                this$source_block.appendDummyInput("ALIGN").append_field(a, "ALIGN_VALUE")
              }
            }
          }
        ],
        message1: "%1 %2",
        args1: [
          {
            type: "field_coco_dropdown",
            name: "ALIGN_VALUE",
            custom: true,
            options: [[t.Msg.LEFT_ALIGN, "left"], [t.Msg.CENTER_ALIGN, "center"], [t.Msg.RIGHT_ALIGN, "right"]]
          }, {
            type: "input_dummy",
            name: "ALIGN"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_property", {
        type: "text_widget_set_property",
        message0: "%{BKY_SET} %1 %{BKY_OF} %2 %{BKY_IS}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: [[t.Msg.FONT_SIZE, "fontSize"], [t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"], [t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]],
            optOnchange: r
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
      e.insertBlockProfile("text_widget_set_visible", {
        type: "text_widget_set_visible",
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
              return $_46_index.c().getWidgetListByType(An.H)
            }
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_get_content", {
        type: "text_widget_get_content",
        message0: "%{BKY_TEXT_WIDGET_GET_CONTENT}",
        args0: [D.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_get_color", {
        type: "text_widget_get_color",
        message0: "%{BKY_TEXT_WIDGET_GET_PROPERTY}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "COLOR_TYPE",
            custom: true,
            options: [[t.Msg.TEXT_COLOR, "textColor"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
          }
        ],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_get_property", {
        type: "text_widget_get_property",
        message0: "%{BKY_TEXT_WIDGET_GET_PROPERTY}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.FONT_SIZE, "fontSize"], [t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"], [t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
            }
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_position", {
        type: "text_widget_set_position",
        message0: "%{BKY_SET} %1 %{BKY_OF} %2 %{BKY_IS}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
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
      e.insertBlockProfile("text_widget_get_position", {
        type: "text_widget_get_position",
        message0: "%1 %{BKY_OF} %2",
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
      e.insertBlockProfile("text_widget_set_size", {
        type: "text_widget_set_size",
        message0: "%{BKY_SET} %1 %{BKY_OF} %2 %{BKY_IS} %3",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
            optOnchange: r
          }, {
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
      e.insertBlockProfile("text_widget_get_size", {
        type: "text_widget_get_size",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_set_font_size", {
        type: "text_widget_set_font_size",
        message0: "%{BKY_TEXT_WIDGET_SET_FONT_SIZE}",
        args0: [
          D.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("text_widget_get_font_size", {
        type: "text_widget_get_font_size",
        message0: "%{BKY_TEXT_WIDGET_GET_FONT_SIZE}",
        args0: [D.a({}, n)],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["text_widget_on_press", "text_widget_set_visible", "text_widget_set_color", "text_widget_set_content", "text_widget_set_align", "text_widget_set_property", "text_widget_get_property", "text_widget_set_position", "text_widget_get_position", "text_widget_set_size", "text_widget_get_size", "text_widget_set_font_size", "text_widget_get_font_size", "text_widget_get_content", "text_widget_get_color"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["text_widget_on_press"]
}
export { op }
