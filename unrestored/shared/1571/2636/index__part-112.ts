/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-112
 */

"use strict"

import { Xr } from "../../../../src/editor/ui/preview-area/screen-list"
import { gy } from "./index__part-103"
import { FE } from "./index__part-111"
import qv from "./88"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1519 from "./1519"
import /* [auto-meaningful-name] */_$_ from "./1519"
var HE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var o = (0, $_710_index.a().formatMessage)({
    id: e$formConfig.label || "alignment"
  })
  var /* [auto-meaningful-name] */e$formConfig$horizontalKey = e$formConfig.horizontalKey
  var a = undefined === e$formConfig$horizontalKey ? "textAlign" : e$formConfig$horizontalKey
  var /* [auto-meaningful-name] */e$formConfig$verticalKey = e$formConfig.verticalKey
  var c = undefined === e$formConfig$verticalKey ? "justifyContent" : e$formConfig$verticalKey
  var l = e$getValue(a)
  var u = e$getValue(c)
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, _$_.content, "changeHorizontalAlign"),
    label: o,
    align: "vertical"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, React.createElement(gy, {
    keyName: a,
    onChange: e$onChange,
    textAlign: l
  })), React.createElement("div", null, React.createElement(FE, {
    keyName: c,
    onChange: e$onChange,
    textAlign: u
  }))))
})
var VE = function (e) {
  var /* [auto-meaningful-name] */e$formConfig$hasDisableOrVisible = e.formConfig.hasDisableOrVisible
  var n = undefined !== e$formConfig$hasDisableOrVisible && e$formConfig$hasDisableOrVisible
  var r = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = $_16_index.d()
  var a = Et.Bb(r || "")
  var s = a ? Et.Fb(a.id) : ""
  if (!a) {
    return React.createElement(React.Fragment, null)
  }
  var c = a.id
  var /* [auto-meaningful-name] */a$type = a.type
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, qv.formWidgetTitle, "changeTitle", k.a({}, qv.formWidgetTitleWithDisableOrVisible, n)),
    label: $_710_index$a$formatMessage({
      id: "WidgetForm.title"
    }),
    align: "vertical"
  }, React.createElement(Xr, {
    value: s,
    renameInputValue: function (e) {
      var t = Et.Pb(c, a$type, e)
      i($$_$$_$$_$$_src_shared_events_messagesWrapper.Ng(c, t, true, true))
      return t
    },
    onChange: function (e) {
      i($$_$$_$$_$$_src_shared_events_messagesWrapper.Ng(c, e, true, true))
    },
    checkValueIsRepeat: function (e) {
      return Et.t(c, e)
    }
  }))
}
export { HE }
export { VE }
