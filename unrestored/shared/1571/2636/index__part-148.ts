/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-148
 */

"use strict"

import { gT, _T, vT } from "./index__part-146"
import { OT } from "./index__part-147"
import qC from "./99"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as Et from "./9"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_935 from "./935"
import /* [auto-meaningful-name] */_$_ from "./935"
var TT = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var r = _React.useMemo(function () {
    return n.options.some(function (e) {
      var /* [auto-meaningful-name] */e$icon
      var n
      return $_17_index.BU.base.is_old_dropdown_option(e) ? "string" === typeof (null === (n = e[2]) || undefined === n ? undefined : n.src) : "basic" === e.type && "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src)
    })
  }, [n])
  return React.createElement($_13_index.w, {
    className: N(qC.dynamicDataList, r && qC.imageTextDataList),
    open: n.visible,
    value: n.value,
    onChange: function (e) {
      if ("__EMPTY_VALUE__" !== e) {
        n.setValue(e)
      }
      t($$_$$_$$_$$_src_editor_redux_common_actions.gh())
    }
  }, n.options.map(function (t, n) {
    var r
    if ($_17_index.BU.base.is_old_dropdown_option(t)) {
      return t[1] === Et.h && t[0] === Et.g ? React.createElement("div", {
        className: qC.nullItem
      }, $_710_index$a$formatMessage({
        id: "closeHeadline"
      })) : React.createElement($_13_index.p, {
        value: t[1],
        key: n,
        className: qC.dropdownOption
      }, t[2] && "string" === typeof (null === (r = t[2]) || undefined === r ? undefined : r.src) && React.createElement("div", {
        className: qC.dropdownImageBox
      }, React.createElement("img", {
        src: t[2].src,
        className: qC.image,
        alt: ""
      })), React.createElement("span", null, t[0]))
    }
    if ("line" === t.type) {
      return React.createElement("div", {
        className: qC.line,
        key: n
      })
    }
    if ("basic" === t.type) {
      var /* [auto-meaningful-name] */t$icon
      var /* [auto-meaningful-name] */_t$icon
      if (t.value === Et.h && t.text === Et.g) {
        return
      }
      return React.createElement($_13_index.p, {
        value: t.value,
        key: n,
        className: qC.dropdownOption
      }, "nextScreen" !== t.value && "prevScreen" !== t.value && React.createElement("div", {
        className: _$_.screenIndex
      }, n + 1, "."), ("nextScreen" === t.value || "prevScreen" === t.value) && React.createElement("div", {
        className: _$_.screenIndex
      }, ""), "string" === typeof (null === (t$icon = t.icon) || undefined === t$icon ? undefined : t$icon.src) && React.createElement("div", {
        className: qC.dropdownImageBox
      }, "nextScreen" === t.value && React.createElement($_13_index.j, {
        className: _$_.dropdownImageScreen,
        type: "icon-prev-screen"
      }), "prevScreen" === t.value && React.createElement($_13_index.j, {
        className: _$_.dropdownImageScreen,
        type: "icon-next-screen"
      }), React.createElement("img", {
        src: t.icon.src,
        className: qC.image,
        alt: ""
      })), "object" === typeof (null === (_t$icon = t.icon) || undefined === _t$icon ? undefined : _t$icon.src) && React.createElement("div", {
        className: qC.dropdownIconBox
      }, React.createElement($_13_index.j, {
        type: "icon-screen-variable"
      })), React.createElement("span", null, t.text))
    }
  }))
})
var ST = _React.memo(function () {
  var e = _React.useRef(null)
  var t = $_16_index.d()
  var n = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */n$position = n.position
  var /* [auto-meaningful-name] */n$blockInfo = n.blockInfo
  var i = _React.useState(0)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = _React.useState(-1e3)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  _React.useEffect(function () {
    if (n.visible) {
      if (n$position.top > window.innerHeight / 2 && e.current) {
        var /* [auto-meaningful-name] */e$current$clientHeight = e.current.clientHeight
        var i = n$position.top - e$current$clientHeight * n$blockInfo.scale - n$blockInfo.blockHeight
        c(i)
      } else {
        c(n$position.top)
      }
      if (e.current && n$position.left + e.current.clientWidth > window.innerWidth) {
        var a = n$position.left - e.current.clientWidth + n$blockInfo.fieldWidth
        p(a)
      } else {
        p(n$position.left)
      }
      if (e.current) {
        e.current.focus()
      }
    }
  })
  _React.useEffect(function () {
    function r(n) {
      var /* [auto-meaningful-name] */n$target = n.target
      var /* [auto-meaningful-name] */e$current = e.current
      if (!(e$current && e$current.contains(n$target))) {
        t($$_$$_$$_$$_src_editor_redux_common_actions.gh())
        document.body.removeEventListener("mousedown", r, {
          capture: true
        })
      }
    }
    if (n.visible) {
      document.body.addEventListener("mousedown", r, {
        capture: true
      })
    }
    return function () {
      document.body.removeEventListener("mousedown", r, {
        capture: true
      })
    }
  }, [t, n])
  return React.createElement("div", {
    ref: e,
    className: qC.blockDropdown,
    style: {
      position: "fixed",
      top: s,
      left: d,
      transformOrigin: "left top",
      transform: "scale(".concat(n.blockInfo.scale, ")"),
      zIndex: 2
    }
  }, [K.a.IMAGE_DROPDOWN, K.a.ICON_DROPDOWN].includes(n.type) && React.createElement(_T, {
    type: n.type
  }), n.type === K.a.SOUND_DROPDOWN && React.createElement(vT, null), n.type === K.a.DYNAMIC_DROPDOWN && React.createElement(gT, null), n.type === K.a.ACTOR_STYLE_DROPDOWN && React.createElement(OT, null), n.type === K.a.SCREEN_DROPDOWN && React.createElement(TT, null))
})
export { ST }
