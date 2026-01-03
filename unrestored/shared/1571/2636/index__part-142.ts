/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-142
 */

"use strict"

import { wy } from "./index__part-105"
import { FC } from "./index__part-141"
import /* [auto-meaningful-name] */$_420 from "./420"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1057 from "./1057"
import /* [auto-meaningful-name] */_$_ from "./1057"
var UC = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$editConfig = e.editConfig
  var /* [auto-meaningful-name] */e$widgetIcon = e.widgetIcon
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var i = Jd.Cb(e$widgetId)
  var a = e$editConfig.some(function (e) {
    return !Array.isArray(e) && "HelpUrl" === e.type
  })
  var s = $_238.b()
  var c = $_16_index.d()
  if (!i || !i.type) {
    return null
  }
  function l(e) {
    var t = i
    return e in t ? t[e] : t.attributes && e in t.attributes ? t.attributes[e] : undefined
  }
  var u = function (e, n) {
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$key = e.key
    var s = FC[e$type]
    var u = "".concat(e$widgetId, "-").concat(e$type, "-").concat(e$key || "")
    if (s) {
      return React.createElement(s, {
        key: u,
        widgetId: e$widgetId,
        keyName: e$key,
        icon: e$widgetIcon,
        onChange: function (e, n) {
          !function (e, n, r) {
            var i = true
            if ($$_$$_$$_$$_src_shared_widget_custom_load.q(e$widgetType)) {
              if (!(Jd.k.includes(e) && Jd.l.includes(r))) {
                i = false
              }
            }
            c($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, e, n, undefined, undefined, undefined, i))
          }(e, n, e$type)
        },
        getValue: l,
        formConfig: e,
        renderInline: n
      })
    }
  }
  return React.createElement($_13_index.h, {
    className: N(_$_.formGroup, a && _$_.formGroupHasHelpUrl),
    "data-updated-at": s
  }, React.createElement("div", null, function e(n, r) {
    return n.map(function (n, o) {
      return Array.isArray(n) ? React.createElement($_13_index.u, {
        key: "".concat(e$widgetId, "-").concat(o),
        className: _$_.formItemWrapper,
        align: "middle",
        justify: "space-between"
      }, e(n, true)) : u(n, r)
    })
  }(e$editConfig, false)))
})
var HC = _React.memo(function () {
  var e = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var r = $_16_index.e(function (e) {
    return e.common.widgetAttributeVisible
  })
  var o = $_16_index.e(function (e) {
    return e.common.consoleHeight
  })
  var i = $_16_index.e(function (e) {
    return e.common.blockyToolboxPinned
  })
  var a = n ? Et.Bb(n) : undefined
  var s = $_16_index.e(function (e) {
    return e.uiConfig.widgetEditor
  }) === K.j.ReadOnly
  var c = function () {
    var t
    if (!(e($$_$$_$$_$$_src_editor_redux_common_actions.fj(false)), i)) {
      $_26_index.g.setSelectedItem()
      if (!(null === (t = $_26_index.g.getToolbox()) || undefined === t)) {
        t.flyout.hide()
      }
    }
  }
  if (n && !a) {
    e($$_$$_$$_$$_src_editor_redux_common_actions.fj(false))
    return null
  }
  if (null === a || undefined === a ? undefined : a.type) {
    var /* [auto-meaningful-name] */a$type = a.type
    var u = Et.Db(a$type)
    if (u) {
      var /* [auto-meaningful-name] */u$editConfig = u.editConfig
      var /* [auto-meaningful-name] */u$icon = u.icon
      var /* [auto-meaningful-name] */u$childWidgetEditConfig = u.childWidgetEditConfig
      var m = a.parentId && u$childWidgetEditConfig ? u$childWidgetEditConfig : u$editConfig
      return React.createElement("div", {
        className: N($_420.wrapper, !r && $_420.hide),
        style: {
          bottom: o + 8
        }
      }, React.createElement("div", {
        className: $_420.header
      }, React.createElement("h3", {
        className: $_420.title
      }, $_710_index$a$formatMessage({
        id: "property"
      })), React.createElement("div", {
        onClick: c,
        className: $_420.close
      }, React.createElement($_13_index.j, {
        type: "icon-close-bold"
      }))), React.createElement("div", {
        className: N($_420.content, s && $_420.readonly)
      }, React.createElement(UC, {
        widgetId: a.id,
        widgetType: a.type,
        editConfig: m,
        widgetIcon: u$icon
      })))
    }
  }
  return React.createElement("div", {
    className: N($_420.wrapper, !r && $_420.hide),
    style: {
      bottom: o + 8
    }
  }, React.createElement("div", {
    className: $_420.header
  }, React.createElement("h3", {
    className: $_420.title
  }, $_710_index$a$formatMessage({
    id: "property"
  })), React.createElement("div", {
    onClick: c,
    className: $_420.close
  }, React.createElement($_13_index.j, {
    type: "icon-close-bold"
  }))), React.createElement("div", {
    className: N($_420.content, s && $_420.readonly)
  }, React.createElement(wy, null)))
})
export { HC }
