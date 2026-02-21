/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-23
 */

"use strict"

import { Q } from "./index__part-3"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../src/shared/ui/language"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useCallback, useEffect, useLayoutEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as wn from "./90"
import * as /* [auto-meaningful-name] */$_738_index from "./738/index"
import * as Tn from "./68"
import * as Sn from "./55"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_618 from "./618"
import /* [auto-meaningful-name] */$_6181 from "./618"
var Nn = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$vibrating = e.vibrating
  var /* [auto-meaningful-name] */e$scale = e.scale
  return React.createElement("div", {
    className: Classnames($_6181.deviceFrameContainer, $_6181.galaxy5),
    style: {
      transform: "scale(".concat(e$scale, ")")
    }
  }, React.createElement("div", {
    className: Classnames($_6181.deviceFrame, {
      vibrate: e$vibrating
    })
  }, e$children, React.createElement("div", {
    className: $_6181.mask
  })))
})
var Rn = React.memo(function () {
  var e = useSelector(function (e) {
    return e.project.playing
  })
  var t = useSelector(function (e) {
    return e.project.playedAt
  })
  var n = useSelector(function (e) {
    return e.project.id
  })
  var r = useSelector(function (e) {
    return e.common.language
  })
  var o = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useRef()
  var d = useRef()
  var p = useRef(null)
  var m = useRef(null)
  var g = useRef(null)
  var v = useState(null)
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(1)
  var w = $_10_index.a(O, 2)
  var C = w[0]
  var A = w[1]
  var j = function (e) {
    var t = Date.now() + e.data.duration
    if (!(d.current && d.current >= t)) {
      l(true)
      window.clearTimeout(u.current)
      u.current = window.setTimeout(function () {
        return l(false)
      }, e.data.duration)
      d.current = t
    }
  }
  function N() {
    window.clearTimeout(u.current)
    d.current = 0
    l(false)
  }
  var R = useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$data$id = e$data.id
    var /* [auto-meaningful-name] */e$data$tab = e$data.tab
    var /* [auto-meaningful-name] */e$data$value = e$data.value
    o($$_$$_$$_$$_src_editor_redux_common_actions.Pj(e$data$id, "value", e$data$value))
    if (!(e$data$tab !== $$_$$_$$_$$_src_editor_widget_builtIn_types.B && e$data$tab !== $$_$$_$$_$$_src_editor_widget_builtIn_types.G)) {
      o($$_$$_$$_$$_src_editor_redux_common_actions.Pj(e$data$id, "defaultValue", e$data$value))
    }
  }, [o])
  var k = useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data$type = e.data.type
    localStorage.removeItem("".concat(e$data$type, "DialogPermission"))
    o($$_$$_$$_$$_src_editor_redux_common_actions.Ej({
      type: e$data$type,
      visible: true,
      onConfirm: function () {
        localStorage.setItem("".concat(e$data$type, "DialogPermission"), "true")
      },
      onDeny: function () {
        localStorage.setItem("".concat(e$data$type, "DialogPermission"), "false")
      }
    }))
  }, [o])
  var x = useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data = e.data
    var n = ""
    var /* [auto-meaningful-name] */e$data$widgetType = e$data.widgetType
    var /* [auto-meaningful-name] */e$data$widgetId = e$data.widgetId
    e$data.message = e$data.message || ""
    if (!e$data$widgetType && e$data$widgetId) {
      var c = Et.Bb(e$data$widgetId)
      if (c) {
        e$data$widgetType = c.type
      }
    }
    if (e$data$widgetType) {
      var l = Et.Db(e$data$widgetType)
      var u = $_710$a$formatMessage({
        id: (null === l || undefined === l ? undefined : l.title) || (null === l || undefined === l ? undefined : l.previewAreaWidgetTitle)
      })
      if (u) {
        n += "【".concat(u, "】")
      }
    }
    if (e$data$widgetId) {
      var d = Et.Fb(e$data$widgetId)
      if (d) {
        n += "".concat(d, " ")
      }
    }
    if (e$data.msgType === Sn.a) {
      if (e$data$widgetType && !$$_$$_$$_$$_src_shared_widget_custom_load.q(e$data$widgetType)) {
        e$data.message = $$_$$_$$_$$_src_shared_ui_language.d(e$data.message, e$data.values)
      }
    } else {
      e$data.message = $$_$$_$$_$$_src_shared_ui_language.f(r, e$data.message, e$data.values)
    }
    if (n) {
      e$data.message = "".concat(n).concat(e$data.message)
    }
    o($$_$$_$$_$$_src_editor_redux_common_actions.nf(e$data))
    if (!("error" !== e$data.type && "customError" !== e$data.type && "lintError" !== e$data.type)) {
      $_141_index.a("ConsoleDetail", {
        errorMessage: e$data.message,
        warningMessage: ""
      })
    }
    if ("warning" === e$data.type) {
      $_141_index.a("ConsoleDetail", {
        errorMessage: "",
        warningMessage: e$data.message
      })
    }
  }, [o, $_710$a$formatMessage, r])
  useEffect(function () {
    Q.add(Tn.b.DEVICE_VIBRATE, j)
    Q.add(Tn.b.DEVICE_NOT_VIBRATE, N)
    Q.add(Tn.b.PLAYER_DATA_WATCH, R)
    Q.add(Tn.b.RUNTIME_LOG, x)
    Q.add(Tn.b.PLAYER_PERMISSION, k)
  }, [x, R, k])
  useEffect(function () {
    function e() {
      o($$_$$_$$_$$_src_editor_redux_common_actions.vi(!navigator.onLine))
    }
    window.addEventListener("online", e)
    window.addEventListener("offline", e)
    return function () {
      window.removeEventListener("online", e)
      window.removeEventListener("offline", e)
    }
  }, [o])
  useEffect(function () {
    if (!e) {
      if (u.current) {
        window.clearTimeout(u.current)
      }
      d.current = 0
      l(false)
    }
  }, [e, o])
  useLayoutEffect(function () {
    if (e && p.current && m.current) {
      var /* [auto-meaningful-name] */p$current$clientWidth = p.current.clientWidth
      var /* [auto-meaningful-name] */p$current$clientHeight = p.current.clientHeight
      var r = Math.min((p$current$clientWidth - 208) / 384, (p$current$clientHeight - 20) / 700, 1)
      r = Math.floor(10 * r) / 10
      var o = p$current$clientWidth / 2 + 192 * (r = Math.max(r, .7))
      if (g.current) {
        g.current.style.left = "".concat(o, "px")
      }
      A(r)
    }
  }, [e])
  var D = window.location.search.split("?")[1]
  var M = new URLSearchParams(D).get("archiveId")
  var L = M ? "?&archiveId=".concat(M) : ""
  var P = "#id=".concat(n, "&ts=").concat(t, "&emulator=1")
  return React.createElement("div", {
    style: {
      display: e ? undefined : "none"
    },
    className: $_6181.wrapper,
    ref: p
  }, React.createElement("div", {
    className: $_6181.deviceFrameWrapper
  }, React.createElement(Nn, {
    vibrating: c && e,
    scale: C
  }, e && React.createElement("iframe", {
    ref: function (e) {
      m.current = e
      E((null === e || undefined === e ? undefined : e.contentWindow) || null)
    },
    title: "Coco Player",
    sandbox: "allow-forms allow-modals allow-popups allow-same-origin allow-scripts",
    src: "".concat("/editor/editor-player.html").concat(L).concat(P)
  }))), React.createElement("div", {
    className: $_6181.emulatorWrapper,
    ref: g
  }, React.createElement($_738_index.a, {
    messageWindow: y
  })))
})
export { Rn }
