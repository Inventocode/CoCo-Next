/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-74
 */

"use strict"

import { Yh } from "../../../../unrestored/shared/1571/2636/index__part-68"
import { gm } from "../../../../unrestored/shared/1571/2636/index__part-73"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_235 from "../../../../unrestored/shared/1571/2636/235"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_61 from "../../../../unrestored/shared/1571/2636/61"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_46_index from "../../../../unrestored/shared/1571/2636/46/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_4 from "../../../../unrestored/shared/1571/2636/4"
import * as /* [auto-meaningful-name] */$_types from "./types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_552_index from "../../../../unrestored/shared/1571/2636/552/index"
var vm = function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_552_index.a, Object.assign({}, e, {
    onDatePickerChange: function (e) {
      if (e$onChange) {
        e$onChange("timeStamp", new Date(e).getTime())
      }
    }
  }))
}
var bm = {
  type: $_types.J,
  category: {
    iconId: $$_$$_$$_$$_unrestored_shared_1571_2636_235.h,
    blocks: $_types.J
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"time_picker_on_select_done\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $$_$$_$$_$$_unrestored_shared_1571_2636_61.d, "<block type=\"time_picker_open_select_dialog\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $$_$$_$$_$$_unrestored_shared_1571_2636_61.d, "<block type=\"time_picker_get_time\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"time_picker_get_value\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $$_$$_$$_$$_unrestored_shared_1571_2636_61.d, $$_$$_$$_$$_unrestored_shared_1571_2636_61.e]
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
        return o && i ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("argsOnTimePickerSelectDone", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o)], i, [a, s, c, l]) : ""
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
        return o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("openTimePickerDialog", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_get_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        if (!o) {
          return ""
        }
        var i = e.getFieldValue(r, "TYPE")
        return i ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.s("getTimePickerValue", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o), $$_$$_$$_$$_unrestored_shared_1571_2636_4.o(i)]) : ""
      })
      e.insertBlockSnippetGenerator("time_picker_get_time", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.s("getTimePickerTime", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $$_$$_$$_$$_unrestored_shared_1571_2636_46_index.c().getWidgetListByType($_types.J)
        }
      }
      e.insertBlockProfile("time_picker_on_select_done", {
        type: "time_picker_on_select_done",
        message0: "%{BKY_TIME_PICKER_ON_SELECT_DONE}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_4.e("%{BKY_BLOCK_TAB_ICON}", true), $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
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
        args0: [$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_get_time", {
        type: "time_picker_get_time",
        message0: "%{BKY_TIME_PICKER_GET_TIME}",
        args0: [$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("time_picker_get_value", {
        type: "time_picker_get_value",
        message0: "%1 %{BKY_OF} %2",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
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
    iconId: $$_$$_$$_$$_unrestored_shared_1571_2636_235.h,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["time_picker_on_select_done", "time_picker_open_select_dialog", "time_picker_get_value", "time_picker_get_time"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["time_picker_on_select_done"]
}
var ym = {
  icon: $$_$$_$$_$$_unrestored_shared_1571_2636_235.h,
  title: "TimePickerWidget.widgetName",
  type: $_types.J,
  previewAreaWidgetTitle: "TimePickerWidget.widgetName",
  component: vm,
  editConfig: gm,
  blockConfig: bm,
  isInvisibleWidget: $$_$$_$$_$$_unrestored_shared_1571_2636_235.f,
  widget: {
    isGlobalWidget: $$_$$_$$_$$_unrestored_shared_1571_2636_235.e,
    size: {
      width: $$_$$_$$_$$_unrestored_shared_1571_2636_235.g,
      height: $$_$$_$$_$$_unrestored_shared_1571_2636_235.d
    },
    attributes: {
      timeStamp: 0,
      fontSize: $$_$$_$$_$$_unrestored_shared_1571_2636_235.c,
      color: $$_$$_$$_$$_unrestored_shared_1571_2636_235.b,
      backgroundColor: $$_$$_$$_$$_unrestored_shared_1571_2636_235.a
    }
  }
}
var Em = [
  {
    type: "WidgetTitle"
  }
]
var Om = {
  type: $_types.I,
  category: {
    iconId: "icon-widget-timer",
    blocks: $_types.I
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
            return $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("startTiming", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(i)])
          case "stop":
            return $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("stopTiming", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(i)])
          case "reset":
            return $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("resetTiming", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(i)])
          default:
            return ""
        }
      })
      e.insertBlockSnippetGenerator("date_get_timing_value", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.s("getTimingValue", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o)]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $$_$$_$$_$$_unrestored_shared_1571_2636_46_index.c().getWidgetListByType($_types.I)
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
          }, $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("date_get_timing_value", {
        type: "date_get_timing_value",
        message0: "%{BKY_DATE_TIMER}",
        args0: [$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n)],
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
  type: $_types.I,
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
var Cm = [
  {
    type: "WidgetTitle"
  }, {
    type: "TextInput",
    key: "url",
    label: "HttpClientWidget.url"
  }, {
    type: "HttpHeader"
  }, {
    type: "HttpParams"
  }, {
    type: "HttpBody"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/http-client"
  }
]
var Tm = {
  type: $_types.u,
  category: {
    iconId: "icon-widget-http-client",
    blocks: $_types.u
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"http_on_client_success\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"http_on_client_error\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $$_$$_$$_$$_unrestored_shared_1571_2636_61.d, "<block type=\"http_set_client_url\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"http_set_client_header\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"http_send_get_request\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"http_send_post_request\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), $$_$$_$$_$$_unrestored_shared_1571_2636_61.d, "<block type=\"http_get_client_url\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), $$_$$_$$_$$_unrestored_shared_1571_2636_61.d, "<block type=\"object_json_parse\" uncache=\"true\">\n      <value name=\"TEXT\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      function t(t, n, r, o) {
        var i = t.blocks[n]
        var a = e.getFieldValue(i, "WIDGET_ID") || ""
        if (!a) {
          return ""
        }
        var s = ""
        if (o) {
          s = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        }
        return $$_$$_$$_$$_unrestored_shared_1571_2636_4.l($$_$$_$$_$$_unrestored_shared_1571_2636_4.n("httpClientSendRequest", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(a), $$_$$_$$_$$_unrestored_shared_1571_2636_4.o(r), s]), i, e)
      }
      e.insertBlockSnippetGenerator("http_on_client_success", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "HTTP_CODE", e.ORDER_ATOMIC)
        var s = e.valueToCode(t, n, "RESPONSE", e.ORDER_ATOMIC)
        return i && o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("argsOnHttpClientSuccess", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o)], i, [a, s]) : ""
      })
      e.insertBlockSnippetGenerator("http_on_client_success_code", function () {
        return "successCode"
      })
      e.insertBlockSnippetGenerator("http_on_client_success_response", function () {
        return "successResponse"
      })
      e.insertBlockSnippetGenerator("http_on_client_error_code", function () {
        return "errorCode"
      })
      e.insertBlockSnippetGenerator("http_on_client_error_response", function () {
        return "errorResponse"
      })
      e.insertBlockSnippetGenerator("http_on_client_error", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "HTTP_CODE", e.ORDER_ATOMIC)
        var s = e.valueToCode(t, n, "MESSAGE", e.ORDER_ATOMIC)
        return i && o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("argsOnHttpClientError", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o)], i, [a, s]) : ""
      })
      e.insertBlockSnippetGenerator("room_create_room_name", function () {
        return "room_name"
      })
      e.insertBlockSnippetGenerator("http_on_client_error_response", function () {
        return "response"
      })
      e.insertBlockSnippetGenerator("http_set_client_url", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("setHttpClientUrl", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("http_set_client_header", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        return o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.n("setHttpClientHeader", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o), i]) : ""
      })
      e.insertBlockSnippetGenerator("http_send_get_request", function (e, n) {
        return t(e, n, "get", false)
      })
      e.insertBlockSnippetGenerator("http_send_delete_request", function (e, n) {
        return t(e, n, "delete", false)
      })
      e.insertBlockSnippetGenerator("http_send_post_request", function (e, n) {
        return t(e, n, "post", true)
      })
      e.insertBlockSnippetGenerator("http_send_put_request", function (e, n) {
        return t(e, n, "put", true)
      })
      e.insertBlockSnippetGenerator("http_send_patch_request", function (e, n) {
        return t(e, n, "patch", true)
      })
      e.insertBlockSnippetGenerator("http_get_client_url", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        return o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.s("getHttpClientUrl", [$$_$$_$$_$$_unrestored_shared_1571_2636_4.o(o)]) : ""
      })
      e.insertBlockSnippetGenerator("object_json_parse", function (t, n) {
        var r = e.valueToCode(t, n, "TEXT", e.ORDER_FUNCTION_CALL)
        return $$_$$_$$_$$_unrestored_shared_1571_2636_4.s("jsonParseToObject", [r])
      })
      e.insertBlockSnippetGenerator("object_get_value", function (t, n) {
        var r = e.valueToCode(t, n, "OBJECT", e.ORDER_FUNCTION_CALL)
        if (!r || r === $$_$$_$$_$$_unrestored_shared_1571_2636_61.c) {
          return ""
        }
        var o = e.valueToCode(t, n, "KEY", e.ORDER_FUNCTION_CALL)
        return o ? $$_$$_$$_$$_unrestored_shared_1571_2636_4.s("objectGetValue", [r, o]) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $$_$$_$$_$$_unrestored_shared_1571_2636_46_index.c().getWidgetListByType($_types.u)
        }
      }
      e.insertBlockProfile("http_on_client_success", {
        type: "http_on_client_success",
        message0: "%{BKY_HTTP_CLIENT_ON_SUCCESS}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_4.e("%{BKY_BLOCK_INTERNET_ICON}", true), $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
            type: "input_value",
            name: "HTTP_CODE",
            check: "Number",
            default_shadow: "<shadow type=\"http_on_client_success_code\" />"
          }, {
            type: "input_value",
            name: "RESPONSE",
            check: "String",
            default_shadow: "<shadow type=\"http_on_client_success_response\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "http_on_client_success_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_HTTP_CLIENT_ON_SUCCESS_TOOLTIP}"
      })
      e.insertBlockProfile("http_on_client_success_code", {
        type: "http_on_client_success_code",
        message0: "".concat(t.Msg.HTTP_CLIENT_STATUS),
        output: "Number",
        required_context: "http_on_client_success_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("http_on_client_success_response", {
        type: "http_on_client_success_response",
        message0: "".concat(t.Msg.HTTP_CLIENT_RESPONSE),
        output: "String",
        required_context: "http_on_client_success_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("http_on_client_error", {
        type: "http_on_client_error",
        message0: "%{BKY_HTTP_CLIENT_ON_ERROR}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_4.e("%{BKY_BLOCK_INTERNET_ICON}", true), $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
            type: "input_value",
            name: "HTTP_CODE",
            check: "Number",
            default_shadow: "<shadow type=\"http_on_client_error_code\" />"
          }, {
            type: "input_value",
            name: "MESSAGE",
            check: "String",
            default_shadow: "<shadow type=\"http_on_client_error_response\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "http_on_client_error_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_HTTP_CLIENT_ON_ERROR_TOOLTIP}"
      })
      e.insertBlockProfile("http_on_client_error_code", {
        type: "http_on_client_error_code",
        message0: "".concat(t.Msg.HTTP_CLIENT_ERROR_STATUS),
        output: "Number",
        required_context: "http_on_client_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("http_on_client_error_response", {
        type: "http_on_client_error_response",
        message0: "".concat(t.Msg.HTTP_CLIENT_ERROR_RESPONSE),
        output: "String",
        required_context: "http_on_client_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("http_set_client_url", {
        type: "http_set_client_url",
        message0: "%{BKY_HTTP_CLIENT_SET_URL}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("http_set_client_header", {
        type: "http_set_client_header",
        message0: "%{BKY_HTTP_CLIENT_SET_HEADER}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("http_send_get_request", {
        type: "http_send_get_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_WITH_GET_REQUEST}",
        args0: [$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n)],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        tooltip: "%{BKY_HTTP_CLIENT_SEND_WITH_GET_REQUEST_TOOLTIP}"
      })
      e.insertBlockProfile("http_send_delete_request", {
        type: "http_send_delete_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_DELETE_REQUEST}",
        args0: [$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n)],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}"
      })
      e.insertBlockProfile("http_send_post_request", {
        type: "http_send_post_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_WITH_POST_REQUEST}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}",
        tooltip: "%{BKY_HTTP_CLIENT_SEND_WITH_POST_REQUEST_TOOLTIP}"
      })
      e.insertBlockProfile("http_send_put_request", {
        type: "http_send_put_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_PUT_REQUEST}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}"
      })
      e.insertBlockProfile("http_send_patch_request", {
        type: "http_send_patch_request",
        message0: "%{BKY_HTTP_CLIENT_SEND_PATCH_REQUEST}",
        args0: [
          $$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n), {
            type: "input_value",
            name: "VALUE",
            check: "String",
            align: "CENTRE"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_CONTROL_HUE}"
      })
      e.insertBlockProfile("http_get_client_url", {
        type: "http_get_client_url",
        message0: "%{BKY_HTTP_CLIENT_GET_URL}",
        args0: [$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, n)],
        output: "String",
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("object_json_parse", {
        type: "object_json_parse",
        message0: "%{BKY_OBJECT_JSON_PARSE}",
        args0: [
          {
            type: "input_value",
            name: "TEXT",
            check: "String",
            align: "CENTRE"
          }
        ],
        output: "Object",
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_OBJECT_JSON_PARSE_TOOLTIP}"
      })
      e.insertBlockProfile("object_get_value", {
        type: "object_get_value",
        message0: "%{BKY_OBJECT_GET_VALUE}",
        args0: [
          {
            type: "input_value",
            name: "OBJECT",
            check: ["Object"]
          }, {
            type: "input_value",
            name: "KEY",
            check: "String",
            align: "CENTRE"
          }
        ],
        output: ["String", "Object", "Number", "Array", "Boolean"],
        colour: "%{BKY_CONTROL_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_OBJECT_GET_VALUE_TOOLTIP}"
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-http-client",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["http_on_client_success", "http_on_client_error", "http_set_client_url", "http_set_client_header", "http_send_get_request", "http_send_post_request", "http_get_client_url"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["http_on_client_success", "http_on_client_error"]
}
var Sm = {
  icon: "icon-widget-http-client",
  title: "HttpClientWidget.widgetName",
  type: $_types.u,
  previewAreaWidgetTitle: "HttpClientWidget.widgetName",
  component: Yh,
  editConfig: Cm,
  blockConfig: Tm,
  isInvisibleWidget: true,
  widget: {
    isGlobalWidget: false,
    size: {
      width: 0,
      height: 0
    },
    attributes: {
      url: "https://restapi.amap.com/v3/weather/weatherInfo",
      header: [],
      params: [
        {
          key: "city",
          value: "440300"
        }, {
          key: "key",
          value: "4f9570617280f00607575cca7272841e"
        }
      ],
      body: ""
    }
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
export { Sm }
export { Am }
