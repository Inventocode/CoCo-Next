/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1512
 */

"use strict"

import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import * as s from "./8"
import c from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_472 from "./472"
import /* [auto-meaningful-name] */_$_ from "./472"
import * as h from "../../../../src/editor/widget/built-in/types"
import * as m from "./9"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$_238 from "./238"
var _a
_a = React.memo(function () {
  var t
  var n = React.useRef()
  var s = React.useRef(null)
  var p = React.useState(false)
  var b = $_10_index.a(p, 2)
  var y = b[0]
  var E = b[1]
  var O = React.useRef(null)
  var w = $_16_index.e(function (e) {
    return e.project.contextMenuInfo
  }).toJS()
  var /* [auto-meaningful-name] */w$position = w.position
  var /* [auto-meaningful-name] */w$visible = w.visible
  var /* [auto-meaningful-name] */w$widgetId = w.widgetId
  var A = m.Bb(w$widgetId)
  var I = $_16_index.e(function (e) {
    return e.project.screens
  })
  var j = null === (t = $_238.d()) || undefined === t ? undefined : t.id
  React.useLayoutEffect(function () {
    var /* [auto-meaningful-name] */s$current = s.current
    if (w$visible && s$current) {
      var /* [auto-meaningful-name] */s$current$clientHeight = s$current.clientHeight
      var n = window.innerHeight - (w$position.y + s$current$clientHeight)
      if (n < 0) {
        w$position.y += n
      }
      s$current.style.top = w$position.y + "px"
      s$current.style.left = w$position.x + "px"
    }
  }, [w$visible, w$position])
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var R = $_16_index.d()
  React.useEffect(function () {
    var t = function t() {
      setImmediate(function () {
        R($$_$$_$$_$$_src_shared_events_messagesWrapper.Wg())
        document.removeEventListener("mousedown", t, true)
      })
    }
    if (w$visible) {
      document.addEventListener("mousedown", t, true)
    }
    return function () {
      return document.removeEventListener("mousedown", t, true)
    }
  }, [R, w$visible])
  var k = function (e) {
    R($$_$$_$$_$$_src_shared_events_messagesWrapper.Ef(m.w(w$widgetId), e))
  }
  var x = function () {
    var /* [auto-meaningful-name] */n$current
    var t = null === (n$current = n.current) || undefined === n$current ? undefined : n$current.id
    if (j && t) {
      R($$_$$_$$_$$_src_shared_events_messagesWrapper.Mf(t, j))
    }
  }
  var D = function () {
    n.current = undefined
  }
  React.useLayoutEffect(function () {
    var /* [auto-meaningful-name] */O$current = O.current
    if (O$current) {
      if (y) {
        var t = O$current.getClientRects()[0]
        var n = t.height + t.y - window.innerHeight
        if (n > 0) {
          O$current.style.top = O$current.offsetTop - n + "px"
        }
      } else {
        O$current.style.top = "10px"
      }
    }
  }, [y])
  return _React.createElement("div", {
    className: _$_.wrapper,
    ref: s,
    style: {
      display: w$visible ? "block" : "none"
    }
  }, _React.createElement("div", {
    className: c(_$_.menuItem),
    onMouseDown: function () {
      R($$_$$_$$_$$_src_shared_events_messagesWrapper.Ef(m.w(w$widgetId)))
    }
  }, $_710_index$a$formatMessage({
    id: "copyAndPaste"
  })), ![h.a, h.c].includes((null === A || undefined === A ? undefined : A.type) || "") && _React.createElement("div", {
    className: c(_$_.menuItem, _$_.copyTo),
    onMouseEnter: function () {
      E(true)
    },
    onMouseLeave: function () {
      E(false)
    }
  }, _React.createElement("span", null, $_710_index$a$formatMessage({
    id: "copyTo"
  })), " ", _React.createElement($_13_index.j, {
    type: "icon-right"
  }), _React.createElement("ul", {
    ref: O,
    className: _$_.screens,
    style: {
      display: y ? "block" : "none"
    }
  }, I.map(function (e, t) {
    return _React.createElement("li", {
      key: e.get("id"),
      onMouseDown: k.bind(null, e.id)
    }, _React.createElement("span", null, "".concat(t + 1, ".")), _React.createElement("div", {
      className: _$_.screenSnapshot
    }, _React.createElement("img", {
      src: e.get("snapshot"),
      alt: ""
    })), _React.createElement("p", null, e.get("title")))
  }))), _React.createElement("div", {
    onMouseDown: function () {
      var e = m.Fb(w$widgetId || "")
      var t = $_710_index$a$formatMessage({
        id: "deleteWidget"
      }) + "“" + $_190.f(e, 10) + "”?"
      var r = $_26_index.z.checkFieldValueIsSelected("WIDGET_ID", w$widgetId)
      var o = $_26_index.z.checkSomeFieldValueIsSelected("WIDGET_ID", m.U(w$widgetId))
      if (r || o) {
        n.current = m.Bb(w$widgetId)
        R($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
          onConfirm: x,
          onClose: D,
          allowText: $_710_index$a$formatMessage({
            id: "delete"
          }),
          title: t,
          isDangerous: true,
          content: $_710_index$a$formatMessage({
            id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        if (j) {
          R($$_$$_$$_$$_src_shared_events_messagesWrapper.Mf(w$widgetId, j))
        }
      }
    },
    className: c(_$_.menuItem, _$_.delete)
  }, $_710_index$a$formatMessage({
    id: "delete"
  })))
})
export { _a as a }
export default _a
