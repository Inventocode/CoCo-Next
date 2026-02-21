/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1512
 */

"use strict"

import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { memo, useRef, useState, useLayoutEffect, useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import { useSelector, useDispatch } from "react-redux"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_472 from "./472"
import /* [auto-meaningful-name] */$_4721 from "./472"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as m from "./9"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$_238 from "./238"
var _a
_a = memo(function () {
  var t
  var n = useRef()
  var s = useRef(null)
  var p = useState(false)
  var b = $_10_index.a(p, 2)
  var y = b[0]
  var E = b[1]
  var O = useRef(null)
  var w = useSelector(function (e) {
    return e.project.contextMenuInfo
  }).toJS()
  var /* [auto-meaningful-name] */w$position = w.position
  var /* [auto-meaningful-name] */w$visible = w.visible
  var /* [auto-meaningful-name] */w$widgetId = w.widgetId
  var A = m.Bb(w$widgetId)
  var I = useSelector(function (e) {
    return e.project.screens
  })
  var j = null === (t = $_238.d()) || undefined === t ? undefined : t.id
  useLayoutEffect(function () {
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
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var R = useDispatch()
  useEffect(function () {
    var t = function t() {
      setImmediate(function () {
        R($$_$$_$$_$$_src_editor_redux_common_actions.Wg())
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
    R($$_$$_$$_$$_src_editor_redux_common_actions.Ef(m.w(w$widgetId), e))
  }
  var x = function () {
    var /* [auto-meaningful-name] */n$current
    var t = null === (n$current = n.current) || undefined === n$current ? undefined : n$current.id
    if (j && t) {
      R($$_$$_$$_$$_src_editor_redux_common_actions.Mf(t, j))
    }
  }
  var D = function () {
    n.current = undefined
  }
  useLayoutEffect(function () {
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
  return React1.createElement("div", {
    className: $_4721.wrapper,
    ref: s,
    style: {
      display: w$visible ? "block" : "none"
    }
  }, React1.createElement("div", {
    className: Classnames1($_4721.menuItem),
    onMouseDown: function () {
      R($$_$$_$$_$$_src_editor_redux_common_actions.Ef(m.w(w$widgetId)))
    }
  }, $_710$a$formatMessage({
    id: "copyAndPaste"
  })), ![$$_$$_$$_$$_src_editor_widget_builtIn_types.a, $$_$$_$$_$$_src_editor_widget_builtIn_types.c].includes((null === A || undefined === A ? undefined : A.type) || "") && React1.createElement("div", {
    className: Classnames1($_4721.menuItem, $_4721.copyTo),
    onMouseEnter: function () {
      E(true)
    },
    onMouseLeave: function () {
      E(false)
    }
  }, React1.createElement("span", null, $_710$a$formatMessage({
    id: "copyTo"
  })), " ", React1.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-right"
  }), React1.createElement("ul", {
    ref: O,
    className: $_4721.screens,
    style: {
      display: y ? "block" : "none"
    }
  }, I.map(function (e, t) {
    return React1.createElement("li", {
      key: e.get("id"),
      onMouseDown: k.bind(null, e.id)
    }, React1.createElement("span", null, "".concat(t + 1, ".")), React1.createElement("div", {
      className: $_4721.screenSnapshot
    }, React1.createElement("img", {
      src: e.get("snapshot"),
      alt: ""
    })), React1.createElement("p", null, e.get("title")))
  }))), React1.createElement("div", {
    onMouseDown: function () {
      var e = m.Fb(w$widgetId || "")
      var t = $_710$a$formatMessage({
        id: "deleteWidget"
      }) + "“" + $_190.f(e, 10) + "”?"
      var r = $_26_index.z.checkFieldValueIsSelected("WIDGET_ID", w$widgetId)
      var o = $_26_index.z.checkSomeFieldValueIsSelected("WIDGET_ID", m.U(w$widgetId))
      if (r || o) {
        n.current = m.Bb(w$widgetId)
        R($$_$$_$$_$$_src_editor_redux_common_actions.zh({
          onConfirm: x,
          onClose: D,
          allowText: $_710$a$formatMessage({
            id: "delete"
          }),
          title: t,
          isDangerous: true,
          content: $_710$a$formatMessage({
            id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        if (j) {
          R($$_$$_$$_$$_src_editor_redux_common_actions.Mf(w$widgetId, j))
        }
      }
    },
    className: Classnames1($_4721.menuItem, $_4721.delete)
  }, $_710$a$formatMessage({
    id: "delete"
  })))
})
export { _a as a }
export default _a
