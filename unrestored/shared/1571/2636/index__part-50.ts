/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-50
 */

"use strict"

import { bf } from "./index__part-49"
import * as /* [auto-meaningful-name] */$_262 from "./262"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as An from "./5"
import * as D from "./6"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_547_index from "./547/index"
var Ef = function (e) {
  return React.createElement($_547_index.a, Object.assign({}, e, {
    isEditState: true
  }))
}
var /* [auto-meaningful-name] */BKY_BLOCK_INTERNET_ICON = "%{BKY_BLOCK_INTERNET_ICON}"
var wf = {
  type: "field_coco_dropdown",
  name: "WIDGET_ID",
  custom: true,
  options: function () {
    return $_46_index.c().getWidgetListByType(An.L)
  }
}
var Cf = {
  type: An.L,
  category: {
    iconId: $_262.a,
    blocks: An.L
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"webview_on_start_load\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"webview_on_load\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"webview_on_load_error\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"webview_set_url\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), Jd.sb({
        property: "__opacity",
        widgetType: An.L,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"webview_refresh\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"webview_set_visible\" uncache=\"true\">\n    ".concat(t, "\n    </block>"), "<block type=\"webview_set_disabled\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"webview_get_url\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Jd.sb({
        property: "__opacity",
        widgetType: An.L,
        widgetId: e
      }), Jd.sb({
        property: "__size",
        widgetType: An.L,
        widgetId: e
      }), Jd.sb({
        property: "__position",
        widgetType: An.L,
        widgetId: e
      }), rp.d, Jd.sb({
        property: "__visible",
        widgetType: An.L,
        widgetId: e
      }), Jd.sb({
        property: "__disabled",
        widgetType: An.L,
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
      e.insertBlockSnippetGenerator("webview_on_start_load", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? ep.n("onWebViewWidgetStartLoad", [ep.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("webview_on_load", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? ep.n("onWebViewWidgetLoaded", [ep.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("webview_on_load_error", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? ep.n("onWebViewWidgetLoadError", [ep.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("webview_set_url", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL)
        var c = ep.o(e.getDynamicValue("__CURRENT_SCREEN_ID__"))
        var l = ep.o(o$block.id)
        return ep.l(ep.n("setWebViewWidgetUrl", [ep.o(o$widgetId), s, c, l]), o$block, e)
      })
      e.insertBlockSnippetGenerator("webview_refresh", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.n("refreshWebViewWidget", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("webview_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return ep.n("setWebViewWidgetVisible", [ep.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("webview_set_disabled", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = "disabled" === e.getFieldValue(o$block, "DISPLAY")
        return ep.n("setWebViewWidgetDisabled", [ep.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("webview_get_url", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.s("getWebViewWidgetUrl", [ep.o(tEN$widgetId)])
      })
      e.insertBlockSnippetGenerator("webview_get_property", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var /* [auto-meaningful-name] */o$block = o.block
        var s = ""
        switch (e.getFieldValue(o$block, "PROPERTY")) {
          case "positionX":
            s = "getWebViewWidgetPositionX"
            break
          case "positionY":
            s = "getWebViewWidgetPositionY"
            break
          case "width":
            s = "getWebViewWidgetWidth"
            break
          case "height":
            s = "getWebViewWidgetHeight"
        }
        return ep.s(s, [ep.o(o$widgetId)])
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("webview_on_start_load", {
        type: "webview_on_start_load",
        message0: "%{BKY_WEBVIEW_ON_START_LOAD}",
        args0: [
          ep.e(BKY_BLOCK_INTERNET_ICON, true), D.a({}, wf), {
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
      e.insertBlockProfile("webview_on_load", {
        type: "webview_on_load",
        message0: "%{BKY_WEBVIEW_ON_LOADED}",
        args0: [
          ep.e(BKY_BLOCK_INTERNET_ICON, true), D.a({}, wf), {
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
      e.insertBlockProfile("webview_on_load_error", {
        type: "webview_on_load_error",
        message0: "%{BKY_WEBVIEW_ON_LOAD_ERROR}",
        args0: [
          ep.e(BKY_BLOCK_INTERNET_ICON, true), D.a({}, wf), {
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
      e.insertBlockProfile("webview_set_url", {
        type: "webview_set_url",
        message0: "%{BKY_WEBVIEW_SET_URL}",
        args0: [
          D.a({}, wf), {
            type: "input_value",
            name: "VALUE",
            align: "CENTRE",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_refresh", {
        type: "webview_refresh",
        message0: "%{BKY_WEBVIEW_REFRESH}",
        args0: [D.a({}, wf)],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_get_url", {
        type: "webview_get_url",
        message0: "%{BKY_WEBVIEW_GET_URL}",
        args0: [D.a({}, wf)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_set_visible", {
        type: "webview_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: function () {
              return [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
            }
          }, D.a({}, wf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_set_disabled", {
        type: "webview_set_disabled",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DISPLAY",
            custom: true,
            options: function () {
              return [[t.Msg.ABLE, "able"], [t.Msg.DISABLED, "disabled"]]
            }
          }, D.a({}, wf)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("webview_get_property", {
        type: "webview_get_property",
        message0: "%{BKY_WEBVIEW_GET_PROPERTY}",
        args0: [
          D.a({}, wf), {
            type: "field_coco_dropdown",
            name: "PROPERTY",
            custom: true,
            options: function () {
              return [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"], [t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]]
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
    iconId: $_262.a,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["webview_on_start_load", "webview_on_load", "webview_on_load_error", "webview_refresh", "webview_set_visible", "webview_set_disabled", "webview_set_url", "webview_get_url", "webview_get_property"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["webview_on_start_load", "webview_on_load", "webview_on_load_error"]
}
var Tf = {
  icon: $_262.a,
  title: "Webview.widgetName",
  type: An.L,
  previewAreaWidgetTitle: "Webview.widgetName",
  component: Ef,
  editConfig: bf,
  blockConfig: Cf,
  isInvisibleWidget: $_262.e,
  widget: {
    isGlobalWidget: $_262.d,
    size: {
      width: 360,
      height: 200
    },
    attributes: {
      url: "",
      disabled: false,
      refreshTimestamp: 0
    }
  }
}
export { Tf }
