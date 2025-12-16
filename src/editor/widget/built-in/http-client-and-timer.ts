/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-74
 */

import { Yh } from "../../../../unrestored/shared/1571/2636/index__part-68"
import { gm } from "../../../../unrestored/shared/1571/2636/index__part-73"
import * as /* [auto-meaningful-name] */$_235 from "../../../../unrestored/shared/1571/2636/235"
import * as rp from "../../../../unrestored/shared/1571/2636/61"
import * as /* [auto-meaningful-name] */$_46_index from "../../../../unrestored/shared/1571/2636/46/index"
import * as ep from "../../../../unrestored/shared/1571/2636/4"
import * as Types from "./types"
import * as D from "../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_552_index from "../../../../unrestored/shared/1571/2636/552/index"
var vm = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement($_552_index.a, Object.assign({}, e, {
    onDatePickerChange: function (e) {
      if (e$onChange) {
        e$onChange("timeStamp", new Date(e).getTime())
      }
    }
  }))
}
var bm = {
  type: Types.TIME_PICKER_WIDGET,
  category: {
    iconId: $_235.h,
    blocks: Types.TIME_PICKER_WIDGET
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"time_picker_on_select_done\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"time_picker_open_select_dialog\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"time_picker_get_time\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"time_picker_get_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, rp.e]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("time_picker_on_select_done", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "PARAM_TIME", e.ORDER_ATOMIC)
        var s = e.valueToCode(t, n, "PARAM_HOUR", e.ORDER_ATOMIC)
        var c = e.valueToCode(t, n, "PARAM_MINUTE", e.ORDER_ATOMIC)
        var l = e.valueToCode(t, n, "PARAM_SECOND", e.ORDER_ATOMIC)
        return o && i ? ep.n("argsOnTimePickerSelectDone", [ep.o(o)], i, [a, s, c, l]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_time", function () {
        return "time"
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_hour", function () {
        return "hour"
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_minute", function () {
        return "minute"
      })
      e.insertBlockSnippetGenerator("time_picker_on_select_done_second", function () {
        return "second"
      })
      e.insertBlockSnippetGenerator("time_picker_open_select_dialog", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? ep.n("openTimePickerDialog", [ep.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_get_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        if (!o) {
          return ""
        }
        var i = e.getFieldValue(r, "TYPE")
        return i ? ep.s("getTimePickerValue", [ep.o(o), ep.o(i)]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_get_time", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? ep.s("getTimePickerTime", [ep.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType(Types.TIME_PICKER_WIDGET)
        }
      }
      e.insertBlockProfile("time_picker_on_select_done", {
        type: "time_picker_on_select_done",
        message0: "%{BKY_TIME_PICKER_ON_SELECT_DONE}",
        args0: [
          ep.e("%{BKY_BLOCK_TAB_ICON}", true), D.a({}, n), {
            type: "input_value",
            name: "PARAM_TIME",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_time\" />"
          }, {
            type: "input_value",
            name: "PARAM_HOUR",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_hour\" />"
          }, {
            type: "input_value",
            name: "PARAM_MINUTE",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_minute\" />"
          }, {
            type: "input_value",
            name: "PARAM_SECOND",
            align: "CENTRE",
            default_shadow: "<shadow type=\"time_picker_on_select_done_second\" />"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "time_picker_on_select_done_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_on_select_done_time", {
        type: "time_picker_on_select_done_time",
        message0: "%{BKY_TIME}",
        output: ["String"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_on_select_done_hour", {
        type: "time_picker_on_select_done_hour",
        message0: "%{BKY_HOUR}",
        output: ["Number"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_on_select_done_minute", {
        type: "time_picker_on_select_done_minute",
        message0: "%{BKY_MINUTE}",
        output: ["Number"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_on_select_done_second", {
        type: "time_picker_on_select_done_second",
        message0: "%{BKY_SECOND}",
        output: ["Number"],
        required_context: "time_picker_on_select_done_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("time_picker_open_select_dialog", {
        type: "time_picker_open_select_dialog",
        message0: "%{BKY_TIME_PICKER_OPEN_SELECT_DIALOG}",
        args0: [D.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_get_time", {
        type: "time_picker_get_time",
        message0: "%{BKY_TIME_PICKER_GET_TIME}",
        args0: [D.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_get_value", {
        type: "time_picker_get_value",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "TYPE",
            custom: true,
            options: function () {
              return [[t.Msg.HOUR, "hour"], [t.Msg.MINUTE, "minute"], [t.Msg.SECOND, "second"]]
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
    iconId: $_235.h,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["time_picker_on_select_done", "time_picker_open_select_dialog", "time_picker_get_value", "time_picker_get_time"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["time_picker_on_select_done"]
}
var ym = {
  icon: $_235.h,
  title: "TimePickerWidget.widgetName",
  type: Types.TIME_PICKER_WIDGET,
  previewAreaWidgetTitle: "TimePickerWidget.widgetName",
  component: vm,
  editConfig: gm,
  blockConfig: bm,
  isInvisibleWidget: $_235.f,
  widget: {
    isGlobalWidget: $_235.e,
    size: {
      width: $_235.g,
      height: $_235.d
    },
    attributes: {
      timeStamp: 0,
      fontSize: $_235.c,
      color: $_235.b,
      backgroundColor: $_235.a
    }
  }
}
var Em = [
  {
    type: "WidgetTitle"
  }
]
var Om = {
  type: Types.I,
  category: {
    iconId: "icon-widget-timer",
    blocks: Types.I
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"date_set_timing\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"date_get_timing_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("date_set_timing", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "STATE")
        var i = e.getFieldValue(r, "WIDGET_ID") || ""
        if (!i) {
          return ""
        }
        switch (o) {
          case "start":
            return ep.n("startTiming", [ep.o(i)])
          case "stop":
            return ep.n("stopTiming", [ep.o(i)])
          case "reset":
            return ep.n("resetTiming", [ep.o(i)])
          default:
            return ""
        }
      })
      e.insertBlockSnippetGenerator("date_get_timing_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? ep.s("getTimingValue", [ep.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType(Types.I)
        }
      }
      e.insertBlockProfile("date_set_timing", {
        type: "date_set_timing",
        message0: "%{BKY_DATE_SET_TIMER_STATE}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "STATE",
            custom: true,
            options: function () {
              return [[t.Msg.START, "start"], [t.Msg.STOP, "stop"], [t.Msg.RESET, "reset"]]
            }
          }, D.a({}, n)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_get_timing_value", {
        type: "date_get_timing_value",
        message0: "%{BKY_DATE_TIMER}",
        args0: [D.a({}, n)],
        output: "Number",
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-timer",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["date_set_timing", "date_get_timing_value"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
var wm = {
  icon: "icon-widget-timer",
  title: "TimerWidget.widgetName",
  type: Types.I,
  previewAreaWidgetTitle: "TimerWidget.widgetName",
  component: Yh,
  editConfig: Em,
  blockConfig: Om,
  isInvisibleWidget: true,
  widget: {
    isGlobalWidget: false,
    size: {
      width: 0,
      height: 0
    },
    attributes: {}
  }
}
var Am = [
  {
    type: "WidgetTitle"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/cloud-room"
  }
]
export { ym }
export { wm }
export { HTTPClientWidget as Sm } from "./network/http-client"
export { Am }
