/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-48
 */

"use strict"

import { df } from "./index__part-46"
import { ff } from "./index__part-47"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_200 from "./200"
var mf = {
  type: "field_coco_dropdown",
  name: "WIDGET_ID",
  custom: true,
  options: function () {
    return $_46_index.c().getWidgetListByType(An.g)
  }
}
var gf = {
  type: An.g,
  category: {
    iconId: $_200.e,
    blocks: An.g
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"checkbox_on_select\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_on_change\" uncache=\"true\">\n    ".concat(t, "\n  </block>"), rp.d, "<block type=\"checkbox_set_headline\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"HEADLINE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), rp.d, "<block type=\"checkbox_set_option_count\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COUNT\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>4</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_set_option_content\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n      <value name=\"CONTENT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_set_option_state\" uncache=\"true\">\n      <field name=\"STATE\">selected</field>\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_clear_selected\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"checkbox_set_option_feedback\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"STATE\">correct</field>\n    </block>"), "<block type=\"checkbox_clear_feedback\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"checkbox_delete_option\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_push_option\" uncache=\"true\">\n      <value name=\"CONTENT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n      ".concat(t, "\n    </block>"), Jd.sb({
        property: "__opacity",
        widgetType: An.g,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"checkbox_set_position\" uncache=\"true\">\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"checkbox_set_visible\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"checkbox_get_selected_option_index\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_get_selected_option_content\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"checkbox_get_option_content_by_index\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='", 1, ",", 8, ",1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"checkbox_get_headline\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"widget_get\">\n      <mutation property=\"optionCount\" widget_type=\"".concat(An.g, "\"></mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>"), "<block type=\"widget_get\">\n      <mutation property=\"__position\" widget_type=\"".concat(An.g, "\"></mutation>\n      <field name=\"WIDGET_ID\">").concat(e, "</field>\n    </block>"), Jd.sb({
        property: "__opacity",
        widgetType: An.g,
        widgetId: e
      }), rp.d, Jd.sb({
        property: "__visible",
        widgetType: An.g,
        widgetId: e
      }), Jd.sb({
        property: "__disabled",
        widgetType: An.g,
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
      e.insertBlockSnippetGenerator("checkbox_on_select", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var c = e.getFieldValue(o$block, "TYPE")
        var l = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        var u = e.statementToCode(n, r, "DO")
        if (!u) {
          return ""
        }
        var d = "selected" === c ? "argsOnCheckboxWidgetSelected" : "argsOnCheckboxWidgetUnselected"
        return ep.n(d, [ep.o(o$widgetId)], u, [s, l])
      })
      e.insertBlockSnippetGenerator("checkbox_on_select_content", function () {
        return "".concat(ep.a, "contentList")
      })
      e.insertBlockSnippetGenerator("checkbox_on_select_index", function () {
        return "".concat(ep.a, "indexList")
      })
      e.insertBlockSnippetGenerator("checkbox_on_change", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(n, r, "RESULT", e.ORDER_FUNCTION_CALL)
        var s = e.statementToCode(n, r, "DO")
        return s ? ep.n("argsOnCheckboxWidgetChange", [ep.o(tNR$widgetId)], s, [i, a]) : ""
      })
      e.insertBlockSnippetGenerator("checkbox_on_change_result", function () {
        return "result"
      })
      e.insertBlockSnippetGenerator("checkbox_on_change_index", function () {
        return "index"
      })
      e.insertBlockSnippetGenerator("checkbox_set_headline", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.valueToCode(n, r, "HEADLINE", e.ORDER_FUNCTION_CALL)
        return ep.n("setCheckboxWidgetHeadline", [ep.o(tNR$widgetId), i])
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_count", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "COUNT", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("setCheckboxWidgetOptionCount", [ep.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_content", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("setCheckboxWidgetOptionContent", [ep.o(o$widgetId), s, c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_state", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "STATE")) {
          case "selected":
            s = "setCheckboxWidgetOptionSelected"
            break
          case "unselected":
            s = "setCheckboxWidgetOptionUnselected"
            break
          case "disabled":
            s = "setCheckboxWidgetOptionDisabled"
        }
        var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n(s, [ep.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_clear_selected", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.n("clearCheckboxWidgetSelected", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_set_option_feedback", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.getFieldValue(o$block, "STATE") || ""
        var c = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("setCheckboxWidgetOptionFeedback", [ep.o(o$widgetId), c, ep.o(s)]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_clear_feedback", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.n("clearCheckboxWidgetFeedback", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_delete_option", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("deleteCheckboxWidgetOption", [ep.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_push_option", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "CONTENT", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("pushOptionToCheckboxWidget", [ep.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.getFieldValue(o$block, "POSITION_TYPE") || ""
        var c = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var l = "positionX" === s ? "setCheckboxWidgetPositionX" : "setCheckboxWidgetPositionY"
        return ep.l(ep.n(l, [ep.o(o$widgetId), c]), o$block, e)
      })
      e.insertBlockSnippetGenerator("checkbox_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return ep.n("setCheckboxWidgetVisible", [ep.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("checkbox_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "disabled" === e.getFieldValue(o$block, "DISPLAY")
        return ep.n("setCheckboxWidgetDisabled", [ep.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("checkbox_get_selected_option_index", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.s("getCheckboxWidgetSelectedOptionIndex", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_get_selected_option_content", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        return ep.l(ep.s("getCheckboxWidgetSelectedOptionContent", [ep.o(o$widgetId)]), o$block, e, false, true)
      })
      e.insertBlockSnippetGenerator("checkbox_get_option_content_by_index", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "INDEX", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.s("getCheckboxWidgetOptionContentByIndex", [ep.o(o$widgetId), s]), o$block, e, false, true)
      })
      e.insertBlockSnippetGenerator("checkbox_get_headline", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.s("getCheckboxWidgetHeadline", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("checkbox_get_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "optionCount":
            s = "getCheckboxWidgetOptionCount"
            break
          case "positionX":
            s = "getCheckboxWidgetPositionX"
            break
          case "positionY":
            s = "getCheckboxWidgetPositionY"
        }
        return s ? ep.s(s, [ep.o(o$widgetId)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("checkbox_on_select", {
        type: "checkbox_on_select",
        message0: "%{BKY_CHECKBOX_ON_SELECTED}",
        args0: [
          ep.e("%{BKY_BLOCK_TAB_ICON}", true), D.a({}, mf), {
            type: "field_coco_dropdown",
            name: "TYPE",
            custom: true,
            options: [[t.Msg.SELECTED, "selected"], [t.Msg.UNSELECTED, "unselected"]]
          }, {
            type: "input_value",
            name: "INDEX",
            align: "CENTRE",
            default_shadow: "<shadow type=\"checkbox_on_select_index\" />"
          }, {
            type: "input_value",
            name: "CONTENT",
            align: "CENTRE",
            default_shadow: "<shadow type=\"checkbox_on_select_content\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "checkbox_on_select_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_ON_SELECTED_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_on_select_index", {
        type: "checkbox_on_select_index",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_INDEX_LIST}",
        output: "Array",
        required_context: "checkbox_on_select_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_on_select_content", {
        type: "checkbox_on_select_content",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_CONTENT_LIST}",
        output: "Array",
        required_context: "checkbox_on_select_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_on_change", {
        type: "checkbox_on_change",
        message0: "%{BKY_CHECKBOX_ON_CHANGE}",
        args0: [
          ep.e("%{BKY_BLOCK_TAB_ICON}", true), D.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            align: "CENTRE",
            default_shadow: "<shadow type=\"checkbox_on_change_index\" />"
          }, {
            type: "input_value",
            name: "RESULT",
            align: "CENTRE",
            check: "Boolean",
            default_shadow: "<shadow type=\"checkbox_on_change_result\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "checkbox_on_change_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_ON_CHANGE_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_on_change_index", {
        type: "checkbox_on_change_index",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_INDEX}",
        output: "Number",
        required_context: "checkbox_on_change_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_on_change_result", {
        type: "checkbox_on_change_result",
        message0: "%{BKY_CHECKBOX_PARAM_SELECTED_RESULT}",
        output: "Boolean",
        required_context: "checkbox_on_change_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("checkbox_set_headline", {
        type: "checkbox_set_headline",
        message0: "%{BKY_CHECKBOX_SET_HEADLINE}",
        args0: [
          D.a({}, mf), {
            type: "input_value",
            name: "HEADLINE",
            align: "CENTRE",
            check: ["String", "Array", "Boolean", "Number", "Object"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_option_count", {
        type: "checkbox_set_option_count",
        message0: "%{BKY_CHECKBOX_SET_OPTION_COUNT}",
        args0: [
          D.a({}, mf), {
            type: "input_value",
            name: "COUNT",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_option_content", {
        type: "checkbox_set_option_content",
        message0: "%{BKY_CHECKBOX_SET_OPTION_CONTENT}",
        args0: [
          D.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
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
      e.insertBlockProfile("checkbox_set_option_state", {
        type: "checkbox_set_option_state",
        message0: "%{BKY_CHECKBOX_SET_OPTION_STATE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: [[t.Msg.SELECTED, "selected"], [t.Msg.UNSELECTED, "unselected"], [t.Msg.DISABLED, "disabled"]]
          }, D.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_clear_selected", {
        type: "checkbox_clear_selected",
        message0: "%{BKY_CHECKBOX_CLEAR_SELECTED}",
        args0: [D.a({}, mf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_CLEAR_SELECTED_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_set_option_feedback", {
        type: "checkbox_set_option_feedback",
        message0: "%{BKY_CHECKBOX_SET_OPTION_FEEDBACK}",
        args0: [
          D.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }, {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: [[t.Msg.CORRECT, "correct"], [t.Msg.INCORRECT, "incorrect"]]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_SET_OPTION_FEEDBACK_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_clear_feedback", {
        type: "checkbox_clear_feedback",
        message0: "%{BKY_CHECKBOX_CLEAR_FEEDBACK}",
        args0: [D.a({}, mf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_CLEAR_FEEDBACK_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_delete_option", {
        type: "checkbox_delete_option",
        message0: "%{BKY_CHECKBOX_DELETE_OPTION}",
        args0: [
          D.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_push_option", {
        type: "checkbox_push_option",
        message0: "%{BKY_CHECKBOX_PUSH_OPTION}",
        args0: [
          {
            type: "input_value",
            name: "CONTENT",
            check: ["String", "Number", "Boolean", "Array"]
          }, D.a({}, mf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_position", {
        type: "checkbox_set_position",
        message0: "%{BKY_CHECKBOX_SET_WIDGET_POSITION}",
        args0: [
          D.a({}, mf), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
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
      e.insertBlockProfile("checkbox_set_visible", {
        type: "checkbox_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, D.a({}, mf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_set_disabled", {
        type: "checkbox_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, D.a({}, mf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_get_selected_option_index", {
        type: "checkbox_get_selected_option_index",
        message0: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_INDEX}",
        args0: [D.a({}, mf)],
        output: ["Array"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_INDEX_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_get_selected_option_content", {
        type: "checkbox_get_selected_option_content",
        message0: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_CONTENT}",
        args0: [D.a({}, mf)],
        output: ["Array"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CHECKBOX_GET_SELECTED_OPTION_CONTENT_TOOLTIP}"
      })
      e.insertBlockProfile("checkbox_get_option_content_by_index", {
        type: "checkbox_get_option_content_by_index",
        message0: "%{BKY_CHECKBOX_GET_OPTION_CONTENT_BY_INDEX}",
        args0: [
          D.a({}, mf), {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_get_headline", {
        type: "checkbox_get_headline",
        message0: "%{BKY_CHECKBOX_GET_HEADLINE}",
        args0: [D.a({}, mf)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("checkbox_get_property", {
        type: "checkbox_get_property",
        message0: "%{BKY_CHECKBOX_GET_PROPERTY}",
        args0: [
          D.a({}, mf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.OPTION_COUNT, "optionCount"], [t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
            }
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: $_200.e,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["checkbox_on_select", "checkbox_on_change", "checkbox_set_headline", "checkbox_set_option_count", "checkbox_set_option_content", "checkbox_set_option_state", "checkbox_clear_selected", "checkbox_set_option_feedback", "checkbox_clear_feedback", "checkbox_delete_option", "checkbox_push_option", "checkbox_set_visible", "checkbox_set_disabled", "checkbox_get_selected_option_index", "checkbox_set_position", "checkbox_get_selected_option_content", "checkbox_get_option_content_by_index", "checkbox_get_headline", "checkbox_get_property"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["checkbox_on_select", "checkbox_on_change"]
}
var _f = {
  icon: $_200.e,
  title: "checkbox",
  type: An.g,
  previewAreaWidgetTitle: "checkbox",
  component: ff,
  editConfig: df,
  blockConfig: gf,
  isInvisibleWidget: $_200.c,
  widget: {
    isGlobalWidget: $_200.b,
    size: {
      width: 280,
      height: 119
    },
    attributes: {
      disabled: false,
      sizeAdaptive: An.q.AUTO_HEIGHT,
      headlineVisible: true,
      options: [
        {
          content: "%{COCO_defaultOption1}",
          state: "none"
        }, {
          content: "%{COCO_defaultOption2}",
          state: "none"
        }
      ],
      headline: "%{COCO_defaultHeadlineContext}",
      color: $_200.f,
      sizeType: An.s.MEDIUM
    }
  }
}
export { _f }
