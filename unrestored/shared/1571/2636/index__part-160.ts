/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-160
 */

"use strict"

import { WS } from "./index__part-158"
import { JS } from "./index__part-159"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_569 from "./569"
import /* [auto-meaningful-name] */_$_ from "./569"
import * as /* [auto-meaningful-name] */$_936 from "./936"
import /* [auto-meaningful-name] */_$_2 from "./936"
var rA = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var /* [auto-meaningful-name] */e$setVisible = e.setVisible
  var s = $_16_index.d()
  var c = _React.useRef(null)
  _React.useEffect(function () {
    if (c.current) {
      clearTimeout(c.current)
    }
    if (e$visible) {
      c.current = window.setTimeout(function () {
        e$setVisible(false)
      }, 3e3)
    }
  }, [s, e$visible, r, e$setVisible])
  return e$visible ? React.createElement("div", {
    className: _$_2.toastWrapper
  }, React.createElement("div", {
    className: _$_2.toast
  }, i && React.createElement($_13_index.j, {
    type: "icon-alert-success",
    className: _$_2.icon
  }), React.createElement("div", {
    className: _$_2.textWrapper
  }, "已重置为初始数据"))) : null
})
var oA = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = $_16_index.e(function (e) {
    return e.dataWatch.dataWatchToast
  })
  var r = function () {
    t($$_$$_$$_$$_src_shared_events_messagesWrapper.Vi(undefined))
  }
  var o = function () {
    window.open("https://codemao-guide.yuque.com/bfiekm/sbo5kh/mhfhe11vyex2f0w4?singleDoc#", "_blank")
  }
  return React.createElement("div", {
    className: N(_$_.wrapper)
  }, React.createElement("div", {
    className: N(_$_.flexSc, _$_.header)
  }, React.createElement("h3", {
    className: _$_.title
  }, $_710_index$a$formatMessage({
    id: "dataWatch"
  })), React.createElement("div", {
    className: _$_.toast
  }, React.createElement(rA, {
    visible: n.visible,
    toast: n.toast || "",
    showIcon: true,
    setVisible: function () {
      return t($$_$$_$$_$$_src_shared_events_messagesWrapper.nh())
    }
  })), React.createElement("span", {
    className: N(_$_.closeBtn, "DevToolCloseButton"),
    onClick: r
  }, React.createElement($_13_index.j, {
    type: "icon-close-bold"
  }))), React.createElement("div", {
    className: N(_$_.content)
  }, React.createElement("div", {
    className: _$_.shadowContent
  }, React.createElement(WS, null), React.createElement(JS, null), React.createElement("div", {
    className: N(_$_.help),
    onClick: o
  }, "看看怎么用？"))))
})
export { rA }
export { oA }
