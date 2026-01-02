/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-72
 */

"use strict"

import { um } from "./index__part-71"
import * as /* [auto-meaningful-name] */$_234 from "./234"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as D from "./6"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_551_index from "./551/index"
var pm = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement($_551_index.a, Object.assign({}, e, {
    onDatePickerChange: function (e) {
      if (e$onChange) {
        e$onChange("timeStamp", new Date(e).getTime())
      }
    }
  }))
}
var fm = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.n,
  category: {
    iconId: $_234.h,
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.n
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"date_picker_on_select_done\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"date_picker_open_select_dialog\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"date_picker_get_date\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"date_picker_get_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, rp.e]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("date_picker_on_select_done", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "PARAM_DATE", e.ORDER_ATOMIC)
        var s = e.valueToCode(t, n, "PARAM_YEAR", e.ORDER_ATOMIC)
        var c = e.valueToCode(t, n, "PARAM_MONTH", e.ORDER_ATOMIC)
        var l = e.valueToCode(t, n, "PARAM_DAY", e.ORDER_ATOMIC)
        return o && i ? ep.n("argsOnDatePickerSelectDone", [ep.o(o)], i, [a, s, c, l]) : ""
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_date", function () {
        return "date"
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_year", function () {
        return "year"
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_month", function () {
        return "month"
      })
      e.insertBlockSnippetGenerator("date_picker_on_select_done_day", function () {
        return "day"
      })
      e.insertBlockSnippetGenerator("date_picker_open_select_dialog", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? ep.n("openDatePickerDialog", [ep.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("date_picker_get_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        if (!o) {
          return ""
        }
        var i = e.getFieldValue(r, "TYPE")
        return i ? ep.s("getDatePickerValue", [ep.o(o), ep.o(i)]) : ""
      })
      e.insertBlockSnippetGenerator("date_picker_get_date", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? ep.s("getDatePickerDate", [ep.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType($$_$$_$$_$$_src_editor_widget_builtIn_types.n)
        }
      }
      e.insertBlockProfile("date_picker_on_select_done", {
        type: "date_picker_on_select_done",
        message0: "%{BKY_DATE_PICKER_ON_SELECT_DONE}",
        args0: [
          ep.e("%{BKY_BLOCK_TAB_ICON}", true), D.a({}, n), {
            type: "input_value",
            name: "PARAM_DATE",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_date\" />"
          }, {
            type: "input_value",
            name: "PARAM_YEAR",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_year\" />"
          }, {
            type: "input_value",
            name: "PARAM_MONTH",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_month\" />"
          }, {
            type: "input_value",
            name: "PARAM_DAY",
            align: "CENTRE",
            default_shadow: "<shadow type=\"date_picker_on_select_done_day\" />"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "date_picker_on_select_done_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_picker_on_select_done_date", {
        type: "date_picker_on_select_done_date",
        message0: "%{BKY_DATE_OBJECT}",
        output: ["String"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_on_select_done_year", {
        type: "date_picker_on_select_done_year",
        message0: "%{BKY_YEAR}",
        output: ["Number"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_on_select_done_month", {
        type: "date_picker_on_select_done_month",
        message0: "%{BKY_MONTH}",
        output: ["Number"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_on_select_done_day", {
        type: "date_picker_on_select_done_day",
        message0: "%{BKY_DATE}",
        output: ["Number"],
        required_context: "date_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("date_picker_open_select_dialog", {
        type: "date_picker_open_select_dialog",
        message0: "%{BKY_DATE_PICKER_OPEN_SELECT_DIALOG}",
        args0: [D.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_picker_get_value", {
        type: "date_picker_get_value",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.YEAR, "year"], [t.Msg.MONTH, "month"], [t.Msg.DATE, "date"]]
            }
          }
        ],
        output: ["Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_picker_get_date", {
        type: "date_picker_get_date",
        message0: "%{BKY_DATE_PICKER_GET_DATE}",
        args0: [D.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: $_234.h,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["date_picker_on_select_done", "date_picker_open_select_dialog", "date_picker_get_value", "date_picker_get_date"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["date_picker_on_select_done"]
}
var hm = {
  icon: $_234.h,
  title: "DatePickerWidget.widgetName",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.n,
  previewAreaWidgetTitle: "DatePickerWidget.widgetName",
  component: pm,
  editConfig: um,
  blockConfig: fm,
  isInvisibleWidget: $_234.f,
  widget: {
    isGlobalWidget: $_234.e,
    size: {
      width: $_234.g,
      height: $_234.d
    },
    attributes: {
      timeStamp: 0,
      fontSize: $_234.c,
      color: $_234.b,
      backgroundColor: $_234.a
    }
  }
}
export { hm }
