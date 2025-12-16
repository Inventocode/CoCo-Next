/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-58
 */

"use strict"

import { Hf } from "./index__part-56"
import { Xf } from "./index__part-57"
import * as /* [auto-meaningful-name] */$_127 from "./127"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_228_index from "./228/index"
var Zf = {
  type: An.x,
  category: {
    iconId: $_127.i,
    blocks: An.x
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"list_viewer_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, Jd.sb({
        property: "__opacity",
        widgetType: An.x,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"list_viewer_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat($_127.l, ",").concat($_127.j, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_set_data_source\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DATA_SOURCE\">\n        <shadow type=\"data_source_get\"></shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"list_viewer_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, Jd.sb({
        property: "__opacity",
        widgetType: An.x,
        widgetId: e
      }), "<block type=\"list_viewer_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), "<block type=\"list_viewer_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), "<block type=\"list_viewer_get_data_source\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, Jd.sb({
        property: "__visible",
        widgetType: An.x,
        widgetId: e
      }), Jd.sb({
        property: "__disabled",
        widgetType: An.x,
        widgetId: e
      }), rp.d, "<block type=\"list_viewer_child_widget_on_press\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n    </block>"), rp.d, "<block type=\"list_viewer_child_widget_bind_column\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <value name=\"COLUMN\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_child_widget_set_string_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(rp.c, "</field>\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_child_widget_set_font_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <value name=\"VALUE\">\n        <shadow type=\"math_number\"><field name=\"NUM\" constraints=\"12,99,1\">16</field></shadow>\n      </value>\n    </block>"), "<block type=\"list_viewer_child_widget_set_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(rp.c, "</field>\n      <value name=\"VALUE\">\n      <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">#000000</field></shadow>\n      </value>\n    </block>"), rp.d, "<block type=\"list_viewer_child_widget_get_string_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(rp.c, "</field>\n    </block>"), "<block type=\"list_viewer_child_widget_get_font_size\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n    </block>"), "<block type=\"list_viewer_child_widget_get_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(rp.c, "</field>\n    </block>")
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("list_viewer_on_press_index", function () {
        return "".concat(ep.a, "index")
      })
      e.insertBlockSnippetGenerator("list_viewer_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        return o && o !== rp.c && i ? ep.n("onListViewerPress", [ep.o(o)], i, [a]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_set_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        if (!o || o === rp.c) {
          return ""
        }
        var a = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "setListViewerWidgetWidth" : "setListViewerWidgetHeight"
        return ep.l(ep.n(a, [ep.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("list_viewer_set_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        if (!o || o === rp.c) {
          return ""
        }
        var a = "positionX" === e.getFieldValue(r, "POSITION_TYPE") ? "setListViewerWidgetPositionX" : "setListViewerWidgetPositionY"
        return ep.l(ep.n(a, [ep.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("data_source_get", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "DATA_SOURCE") || ""
        return o === rp.c ? "" : ep.o(o)
      })
      e.insertBlockSnippetGenerator("list_viewer_set_data_source", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "DATA_SOURCE", e.ORDER_FUNCTION_CALL) || ""
        return o && o !== rp.c && i && i !== rp.c ? ep.l(ep.n("setListViewerWidgetDataSource", [ep.o(o), i]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_set_visible", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "show" === e.getFieldValue(r, "VISIBLE")
        return o && o !== rp.c ? ep.n("setListViewerWidgetVisible", [ep.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_set_disabled", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "disabled" === e.getFieldValue(r, "DISABLED")
        return o && o !== rp.c ? ep.n("setListViewerWidgetDisabled", [ep.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "getListViewerWidgetWidth" : "getListViewerWidgetHeight"
        return o && o !== rp.c ? ep.s(i, [ep.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_get_position", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "positionX" === e.getFieldValue(r, "POSITION_TYPE") ? "getListViewerWidgetPositionX" : "getListViewerWidgetPositionY"
        return o && o !== rp.c ? ep.s(i, [ep.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_get_data_source", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o && o !== rp.c ? ep.s("getListViewerWidgetDataSource", [ep.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_on_press_index", function () {
        return "".concat(ep.a, "index")
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.statementToCode(t, n, "DO")
        var s = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        if (!o || o === rp.c) {
          return ""
        }
        if (!i || i === rp.c) {
          return ""
        }
        if (!a) {
          return ""
        }
        var c = "".concat(o, "_").concat(i)
        return ep.n("onListViewerChildWidgetPress", [ep.o(c)], a, [s])
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_bind_column", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.valueToCode(t, n, "COLUMN", e.ORDER_FUNCTION_CALL)
        return o && o !== rp.c && i && i !== rp.c ? ep.l(ep.n("setListViewerChildWidgetBindColumn", [ep.o(o), ep.o(i), a]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_set_string_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return o && o !== rp.c && i && i !== rp.c && a && a !== rp.c ? ep.l(ep.n("setListViewerChildWidgetAttribute", [ep.o(o), s, ep.o(i), ep.o(a), c]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_set_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var s = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return o && o !== rp.c && i && i !== rp.c ? ep.l(ep.n("setListViewerChildWidgetAttribute", [ep.o(o), a, ep.o(i), ep.o("fontSize"), s]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_set_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return o && o !== rp.c && i && i !== rp.c && a && a !== rp.c ? ep.l(ep.n("setListViewerChildWidgetAttribute", [ep.o(o), s, ep.o(i), ep.o(a), c]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_get_string_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return o && o !== rp.c && i && i !== rp.c && a ? ep.l(ep.s("getListViewerChildWidgetAttribute", [ep.o(o), s, ep.o(i), ep.o(a)]), r, e, false, true) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_get_font_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return o && o !== rp.c && i && i !== rp.c ? ep.l(ep.s("getListViewerChildWidgetAttribute", [ep.o(o), a, ep.o(i), ep.o("fontSize")]), r, e, false, true) : ""
      })
      e.insertBlockSnippetGenerator("list_viewer_child_widget_get_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return o && o !== rp.c && i && i !== rp.c && a ? ep.l(ep.s("getListViewerChildWidgetAttribute", [ep.o(o), s, ep.o(i), ep.o(a)]), r, e, false, true) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var /* [auto-meaningful-name] */BKY_BLOCK_TAB_ICON = "%{BKY_BLOCK_TAB_ICON}"
      var r = [[t.Msg.TEXT_CONTENT, "content"]]
      var o = [[t.Msg.TEXT_COLOR, "color"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var i = [[t.Msg.IMAGE, "fileId"]]
      var a = [[t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var s = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType(An.x)
        },
        optOnchange: function (e) {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */_this$source_block
          var r = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("SLOT_WIDGET")
          var o = null === (_this$source_block = this.source_block) || undefined === _this$source_block ? undefined : _this$source_block.get_field("ATTRIBUTE")
          if (!(null === r || undefined === r)) {
            r.set_value(rp.c)
          }
          if (!(null === o || undefined === o)) {
            o.set_value(rp.c)
          }
        }
      }
      var c = {
        type: "field_coco_dropdown",
        name: "SLOT_WIDGET",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var t = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || $_228_index.a()
          var n = $_46_index.c().getListViewerChildWidgetList(t)
          return n
        },
        optOnchange: u
      }
      var l = {
        type: "field_coco_dropdown",
        name: "SLOT_WIDGET",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var t = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || $_228_index.a()
          var n = $_46_index.c().getListViewerChildWidgetList(t, An.H)
          return n
        },
        optOnchange: u
      }
      function u(e) {
        var /* [auto-meaningful-name] */this$source_block
        var n = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("ATTRIBUTE")
        if (!(null === n || undefined === n)) {
          n.set_value(rp.c)
        }
      }
      var d = {
        type: "field_coco_dropdown",
        name: "ATTRIBUTE",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */_this$source_block2
          var n = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || $_228_index.a()
          var o = null === (_this$source_block2 = this.source_block) || undefined === _this$source_block2 ? undefined : _this$source_block2.get_field_value("SLOT_WIDGET")
          var a = Jd.Cb(n)
          var s = []
          if (a && o) {
            var /* [auto-meaningful-name] */a$attributes
            var l
            var u = Jd.Cb(null === (a$attributes = a.attributes) || undefined === a$attributes || null === (l = a$attributes.templateSlotMap[o]) || undefined === l ? undefined : l.widgetId)
            if ((null === u || undefined === u ? undefined : u.type) === An.H) {
              s = s.concat(r)
            }
            if ((null === u || undefined === u ? undefined : u.type) === An.v) {
              s = s.concat(i)
            }
          }
          s.push([rp.b, rp.c])
          return s
        }
      }
      var p = {
        type: "field_coco_dropdown",
        name: "ATTRIBUTE",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */_this$source_block3
          var n = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || $_228_index.a()
          var r = null === (_this$source_block3 = this.source_block) || undefined === _this$source_block3 ? undefined : _this$source_block3.get_field_value("SLOT_WIDGET")
          var i = Jd.Cb(n)
          var s = []
          if (i && r) {
            var /* [auto-meaningful-name] */i$attributes
            var l
            var u = Jd.Cb(null === (i$attributes = i.attributes) || undefined === i$attributes || null === (l = i$attributes.templateSlotMap[r]) || undefined === l ? undefined : l.widgetId)
            if ((null === u || undefined === u ? undefined : u.type) === An.H) {
              s = s.concat(o)
            }
            if ((null === u || undefined === u ? undefined : u.type) === An.v) {
              s = s.concat(a)
            }
          }
          s.push([rp.b, rp.c])
          return s
        }
      }
      e.insertBlockProfile("list_viewer_on_press", {
        type: "list_viewer_on_press",
        message0: "%{BKY_LIST_VIEWER_ON_PRESS}",
        args0: [
          ep.e(BKY_BLOCK_TAB_ICON, true), D.a({}, s), {
            type: "input_value",
            name: "INDEX",
            check: "String",
            align: "CENTRE",
            default_shadow: "<shadow type=\"list_viewer_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "list_viewer_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_on_press_index", {
        type: "list_viewer_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: ["Number", "String"],
        required_context: "list_viewer_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("list_viewer_set_size", {
        type: "list_viewer_set_size",
        message0: "%{BKY_LIST_VIEWER_SET_PROPERTY}",
        args0: [
          D.a({}, s), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
            optOnchange: function (e) {
              var t = e || ""
              !function (e, t, n, r) {
                var /* [auto-meaningful-name] */e$source_block = e.source_block
                var i = null === e$source_block || undefined === e$source_block ? undefined : e$source_block.get_shadow_field("NUM")
                if (i && "FieldNumber" === i.field_type) {
                  i.set_value(t)
                  i.set_constraints(r, n, 1)
                }
              }(this, "100", "width" === t ? $_127.k : $_127.j, "width" === t ? $_127.m : $_127.l)
            }
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
      e.insertBlockProfile("list_viewer_set_position", {
        type: "list_viewer_set_position",
        message0: "%{BKY_LIST_VIEWER_SET_PROPERTY}",
        args0: [
          D.a({}, s), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
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
      e.insertBlockProfile("data_source_get", {
        type: "data_source_get",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DATA_SOURCE",
            custom: true,
            advancedOptions: function () {
              return $_46_index.c().getGlobalGridList(this)
            }
          }
        ],
        output: "String",
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_set_data_source", {
        type: "list_viewer_set_data_source",
        message0: "%{BKY_LIST_VIEWER_SET_DATA_SOURCE}",
        args0: [
          D.a({}, s), {
            type: "input_value",
            name: "DATA_SOURCE",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_set_visible", {
        type: "list_viewer_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
          }, D.a({}, s)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_set_disabled", {
        type: "list_viewer_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISABLED",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, D.a({}, s)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_get_size", {
        type: "list_viewer_get_size",
        message0: "%{BKY_LIST_VIEWER_GET_PROPERTY}",
        args0: [
          D.a({}, s), {
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
      e.insertBlockProfile("list_viewer_get_position", {
        type: "list_viewer_get_position",
        message0: "%{BKY_LIST_VIEWER_GET_PROPERTY}",
        args0: [
          D.a({}, s), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_get_data_source", {
        type: "list_viewer_get_data_source",
        message0: "%{BKY_LIST_VIEWER_GET_DATA_SOURCE}",
        args0: [D.a({}, s)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_on_press", {
        type: "list_viewer_child_widget_on_press",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_ON_PRESS}",
        args0: [
          ep.e(BKY_BLOCK_TAB_ICON, true), D.a({}, s), D.a({}, c), {
            type: "input_value",
            name: "INDEX",
            check: "Number",
            align: "CENTRE",
            default_shadow: "<shadow type=\"list_viewer_child_widget_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "list_viewer_child_widget_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_on_press_index", {
        type: "list_viewer_child_widget_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: "Number",
        required_context: "list_viewer_child_widget_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("list_viewer_child_widget_bind_column", {
        type: "list_viewer_child_widget_bind_column",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_BIND_COLUMN}",
        args0: [
          D.a({}, s), D.a({}, c), {
            type: "input_value",
            name: "COLUMN",
            check: "String"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_set_string_attributes", {
        type: "list_viewer_child_widget_set_string_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES}",
        args0: [
          D.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, c), D.a(D.a({}, d), {}, {
            optOnchange: function (e) {
              var /* [auto-meaningful-name] */this$source_block
              var n = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_input("VALUE")
              if ("content" === e) {
                if (!(null === n || undefined === n)) {
                  n.set_check(["String", "Number", "Boolean", "Array"])
                }
              }
              if ("fileId" === e) {
                if (!(null === n || undefined === n)) {
                  n.set_check(["String"])
                }
              }
            }
          }), {
            type: "input_value",
            name: "VALUE",
            check: ["String", "Number", "Boolean"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_set_color_attributes", {
        type: "list_viewer_child_widget_set_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES}",
        args0: [
          D.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, c), D.a({}, p), {
            type: "input_value",
            name: "VALUE",
            check: ["Color"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_set_font_size", {
        type: "list_viewer_child_widget_set_font_size",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_FONT_SIZE}",
        args0: [
          D.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, l), {
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
      e.insertBlockProfile("list_viewer_child_widget_get_string_attributes", {
        type: "list_viewer_child_widget_get_string_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES}",
        args0: [
          D.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, c), D.a({}, d)
        ],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_get_font_size", {
        type: "list_viewer_child_widget_get_font_size",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_FONT_SIZE}",
        args0: [
          D.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, l)
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("list_viewer_child_widget_get_color_attributes", {
        type: "list_viewer_child_widget_get_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES}",
        args0: [
          D.a({}, s), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, c), D.a({}, p)
        ],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: $_127.i,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["list_viewer_on_press", "list_viewer_set_size", "list_viewer_set_position", "list_viewer_set_data_source", "list_viewer_set_visible", "list_viewer_set_disabled", "list_viewer_get_size", "list_viewer_get_position", "list_viewer_get_data_source", "list_viewer_child_widget_on_press", "list_viewer_child_widget_bind_column", "list_viewer_child_widget_set_string_attributes", "list_viewer_child_widget_set_font_size", "list_viewer_child_widget_set_color_attributes", "list_viewer_child_widget_get_string_attributes", "list_viewer_child_widget_get_font_size", "list_viewer_child_widget_get_color_attributes"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["list_viewer_on_press", "list_viewer_child_widget_on_press"]
}
var Jf = {
  icon: $_127.i,
  title: "ListViewerWidget.widgetName",
  type: An.x,
  previewAreaWidgetTitle: "ListViewerWidget.widgetName",
  component: Xf,
  editConfig: Hf,
  blockConfig: Zf,
  isInvisibleWidget: false,
  widget: {
    isGlobalWidget: false,
    size: {
      width: $_127.h,
      height: $_127.d
    },
    widgetIds: [],
    attributes: {
      disabled: false,
      backgroundColor: $_127.c,
      templateRenderType: $_127.e,
      templateType: $_127.g,
      dataSource: "",
      templateSlotMap: {}
    }
  },
  isDiscard: true
}
export { Jf }
