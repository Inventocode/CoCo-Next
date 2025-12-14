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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as wn from "./90"
import * as /* [auto-meaningful-name] */$_738_index from "./738/index"
import * as Tn from "./68"
import * as Sn from "./55"
import * as An from "./5"
import * as /* [auto-meaningful-name] */$_618 from "./618"
import /* [auto-meaningful-name] */_$_ from "./618"
var Nn = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$vibrating = e.vibrating
  var /* [auto-meaningful-name] */e$scale = e.scale
  return React.createElement("div", {
    className: N(_$_.deviceFrameContainer, _$_.galaxy5),
    style: {
      transform: "scale(".concat(e$scale, ")")
    }
  }, React.createElement("div", {
    className: N(_$_.deviceFrame, {
      vibrate: e$vibrating
    })
  }, e$children, React.createElement("div", {
    className: _$_.mask
  })))
})
var Rn = React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.project.playing
  })
  var t = $_16_index.e(function (e) {
    return e.project.playedAt
  })
  var n = $_16_index.e(function (e) {
    return e.project.id
  })
  var r = $_16_index.e(function (e) {
    return e.common.language
  })
  var o = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = _React.useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useRef()
  var d = _React.useRef()
  var p = _React.useRef(null)
  var m = _React.useRef(null)
  var g = _React.useRef(null)
  var v = _React.useState(null)
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = _React.useState(1)
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
  var R = _React.useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$data$id = e$data.id
    var /* [auto-meaningful-name] */e$data$tab = e$data.tab
    var /* [auto-meaningful-name] */e$data$value = e$data.value
    o($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$data$id, "value", e$data$value))
    if (!(e$data$tab !== An.B && e$data$tab !== An.G)) {
      o($$_$$_$$_$$_src_shared_events_messagesWrapper.Pj(e$data$id, "defaultValue", e$data$value))
    }
  }, [o])
  var k = _React.useCallback(function (e) {
    var /* [auto-meaningful-name] */e$data$type = e.data.type
    localStorage.removeItem("".concat(e$data$type, "DialogPermission"))
    o($$_$$_$$_$$_src_shared_events_messagesWrapper.Ej({
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
  var x = _React.useCallback(function (e) {
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
      var u = $_710_index$a$formatMessage({
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
    o($$_$$_$$_$$_src_shared_events_messagesWrapper.nf(e$data))
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
  }, [o, $_710_index$a$formatMessage, r])
  _React.useEffect(function () {
    Q.add(Tn.b.DEVICE_VIBRATE, j)
    Q.add(Tn.b.DEVICE_NOT_VIBRATE, N)
    Q.add(Tn.b.PLAYER_DATA_WATCH, R)
    Q.add(Tn.b.RUNTIME_LOG, x)
    Q.add(Tn.b.PLAYER_PERMISSION, k)
  }, [x, R, k])
  _React.useEffect(function () {
    function e() {
      o($$_$$_$$_$$_src_shared_events_messagesWrapper.vi(!navigator.onLine))
    }
    window.addEventListener("online", e)
    window.addEventListener("offline", e)
    return function () {
      window.removeEventListener("online", e)
      window.removeEventListener("offline", e)
    }
  }, [o])
  _React.useEffect(function () {
    if (!e) {
      if (u.current) {
        window.clearTimeout(u.current)
      }
      d.current = 0
      l(false)
    }
  }, [e, o])
  _React.useLayoutEffect(function () {
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
    className: _$_.wrapper,
    ref: p
  }, React.createElement("div", {
    className: _$_.deviceFrameWrapper
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
    className: _$_.emulatorWrapper,
    ref: g
  }, React.createElement($_738_index.a, {
    messageWindow: y
  })))
})
export { Rn }
