/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1512
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"./710"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_472 from /* 472 */"./472"
import /* [auto-meaningful-name] */Module_4721 from /* 472 */"./472"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_190 from /* 190 */"./190"
import * as /* [auto-meaningful-name] */Module_26 from /* 26 */"./26/index"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"./238"
var _a
_a = React.memo(function () {
  var t
  var n = React.useRef()
  var s = React.useRef(null)
  var p = React.useState(false)
  var b = Module_10.a(p, 2)
  var y = b[0]
  var E = b[1]
  var O = React.useRef(null)
  var w = useSelector(function (e) {
    return e.project.contextMenuInfo
  }).toJS()
  var /* [auto-meaningful-name] */w$position = w.position
  var /* [auto-meaningful-name] */w$visible = w.visible
  var /* [auto-meaningful-name] */w$widgetId = w.widgetId
  var A = Module_9.Bb(w$widgetId)
  var I = useSelector(function (e) {
    return e.project.screens
  })
  var j = null === (t = Module_238.d()) || undefined === t ? undefined : t.id
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
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var R = useDispatch()
  React.useEffect(function () {
    var t = function t() {
      setImmediate(function () {
        R(Src_editor_redux_common_actions.Wg())
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
    R(Src_editor_redux_common_actions.Ef(Module_9.w(w$widgetId), e))
  }
  var x = function () {
    var /* [auto-meaningful-name] */n$current
    var t = null === (n$current = n.current) || undefined === n$current ? undefined : n$current.id
    if (j && t) {
      R(Src_editor_redux_common_actions.Mf(t, j))
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
  return React1.createElement("div", {
    className: Module_4721.wrapper,
    ref: s,
    style: {
      display: w$visible ? "block" : "none"
    }
  }, React1.createElement("div", {
    className: Classnames1(Module_4721.menuItem),
    onMouseDown: function () {
      R(Src_editor_redux_common_actions.Ef(Module_9.w(w$widgetId)))
    }
  }, Module_710$a$formatMessage({
    id: "copyAndPaste"
  })), ![Src_editor_widget_builtIn_types.a, Src_editor_widget_builtIn_types.c].includes((null === A || undefined === A ? undefined : A.type) || "") && React1.createElement("div", {
    className: Classnames1(Module_4721.menuItem, Module_4721.copyTo),
    onMouseEnter: function () {
      E(true)
    },
    onMouseLeave: function () {
      E(false)
    }
  }, React1.createElement("span", null, Module_710$a$formatMessage({
    id: "copyTo"
  })), " ", React1.createElement(Src_shared_ui_components_index.j, {
    type: "icon-right"
  }), React1.createElement("ul", {
    ref: O,
    className: Module_4721.screens,
    style: {
      display: y ? "block" : "none"
    }
  }, I.map(function (e, t) {
    return React1.createElement("li", {
      key: e.get("id"),
      onMouseDown: k.bind(null, e.id)
    }, React1.createElement("span", null, "".concat(t + 1, ".")), React1.createElement("div", {
      className: Module_4721.screenSnapshot
    }, React1.createElement("img", {
      src: e.get("snapshot"),
      alt: ""
    })), React1.createElement("p", null, e.get("title")))
  }))), React1.createElement("div", {
    onMouseDown: function () {
      var e = Module_9.Fb(w$widgetId || "")
      var t = Module_710$a$formatMessage({
        id: "deleteWidget"
      }) + "“" + Module_190.f(e, 10) + "”?"
      var r = Module_26.z.checkFieldValueIsSelected("WIDGET_ID", w$widgetId)
      var o = Module_26.z.checkSomeFieldValueIsSelected("WIDGET_ID", Module_9.U(w$widgetId))
      if (r || o) {
        n.current = Module_9.Bb(w$widgetId)
        R(Src_editor_redux_common_actions.zh({
          onConfirm: x,
          onClose: D,
          allowText: Module_710$a$formatMessage({
            id: "delete"
          }),
          title: t,
          isDangerous: true,
          content: Module_710$a$formatMessage({
            id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        if (j) {
          R(Src_editor_redux_common_actions.Mf(w$widgetId, j))
        }
      }
    },
    className: Classnames1(Module_4721.menuItem, Module_4721.delete)
  }, Module_710$a$formatMessage({
    id: "delete"
  })))
})
export { _a as a }
export default _a
