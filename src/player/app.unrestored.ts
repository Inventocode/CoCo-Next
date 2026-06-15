/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-6
 */

"use strict"

import { B } from "./wrappers/web/index"
import { F } from "./wrappers/mobile/community"
import { V } from "../../unrestored/player/2635/2637/index__part-5"
import * as /* [auto-meaningful-name] */Shared_player_audit from /* 288 */"../shared/player/audit"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_514 from /* 514 */"../../unrestored/player/2635/2637/514/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../unrestored/shared/1571/2636/68"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../shared/tools/index"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../unrestored/shared/1571/2636/28/index"
import /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_328 from /* 328 */"../../unrestored/shared/1571/2636/328"
import * as /* [auto-meaningful-name] */Module_1063 from /* 1063 */"../../unrestored/player/2635/2637/1063"
import /* [auto-meaningful-name] */Module_10631 from /* 1063 */"../../unrestored/player/2635/2637/1063"
function K(t, e, n) {
  return X.apply(this, arguments)
}
function X() {
  return (X = Module_7.a(RegeneratorRuntime.mark(function t(e, n, r) {
    var /* [auto-meaningful-name] */window$wx
    var /* [auto-meaningful-name] */t$sent
    var a
    var s
    var c
    return RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2
            return Shared_tools_index.cb("https://res2.wx.qq.com/open/js/jweixin-1.6.0.js")
          case 2:
            window$wx = window.wx
            t.prev = 3
            t.next = 6
            return V()
          case 6:
            t$sent = t.sent
            window$wx.config({
              debug: false,
              appId: t$sent.appId,
              timestamp: t$sent.timestamp,
              nonceStr: t$sent.nonceStr,
              signature: t$sent.signature,
              jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZon"]
            })
            t.next = 13
            break
          case 10:
            t.prev = 10
            t.t0 = t.catch(3)
            console.error("getWeixinInfo error", t.t0)
          case 13:
            a = Shared_tools_index.N(window.location.href)
            s = a.title || e
            c = a.desc || n
            window$wx.ready(function () {
              window$wx.onMenuShareAppMessage({
                title: s,
                desc: c,
                link: window.location.href,
                imgUrl: r
              })
              window$wx.onMenuShareTimeline({
                title: c,
                link: window.location.href,
                imgUrl: r
              })
            })
          case 17:
          case "end":
            return t.stop()
        }
      }
    }, t, null, [[3, 10]])
  }))).apply(this, arguments)
}
var q = React.memo(function () {
  var t = useState()
  var e = Module_10.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = useState(true)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var m = useState(true)
  var b = Module_10.a(m, 2)
  var _ = b[0]
  var y = b[1]
  var w = useState("")
  var E = Module_10.a(w, 2)
  var O = E[0]
  var T = E[1]
  var A = useRef()
  function S() {
    return (S = Module_7.a(RegeneratorRuntime.mark(function t() {
      var e
      var n
      var r
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var a
      var s
      var c
      var f
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = Shared_tools_index.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 30
                break
              }
              t.next = 6
              return Module_177.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              Shared_player_audit.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return Shared_player_audit.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return Shared_player_audit.c(a)
            case 20:
              a = t.sent
            case 21:
              if (A.current = a, s = a.title || "CoCo", c = a.description || Module_328.c, f = a.coverUrl || "", document.title || (document.title = s), !navigator.userAgent.toLowerCase().includes("micromessenger")) {
                t.next = 29
                break
              }
              t.next = 29
              return K(s, c, f)
            case 29:
              l(false)
            case 30:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  useEffect(function () {
    !function () {
      S.apply(this, arguments)
    }()
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        T(t.data.payload)
        y(false)
        var e = document.getElementById("editor-iframe")
        if (e) {
          document.body.removeChild(e)
        }
      }
    }, false)
  }, [])
  useEffect(function () {
    if (!_ && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = O
      }
      o(Module_6.a({}, A.current))
    }
  }, [O, _])
  return n ? React.createElement("div", {
    className: Module_10631.community
  }, c && React.createElement("img", {
    src: "https://static.bcmcdn.com/crc-uploader/2021/12/35f947eec3186875243a6ffb6efd5cf5.gif",
    alt: "loading",
    className: Module_10631.loading
  }), React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: Module_10631.camera
  }), React.createElement(Module_514.a, n)) : React.createElement(React.Fragment, null)
})
var Z = function (t) {
  var /* [auto-meaningful-name] */t$channel = t.channel
  return React.createElement(React.Fragment, null, function () {
    switch (t$channel) {
      case Module_68.a.H5:
        return React.createElement(q, null)
      default:
        return React.createElement(F, null)
    }
  }())
}
var J = React.memo(function () {
  var t = (Shared_tools_index.N(window.location.href).channel || "").toUpperCase()
  window.history.pushState = function () {}
  window.history.replaceState = function () {}
  return Module_28.f() ? React.createElement(Z, {
    channel: t
  }) : React.createElement(B, {
    channel: t
  })
})
ReactDom.render(React.createElement(J, null), document.getElementById("root"))
