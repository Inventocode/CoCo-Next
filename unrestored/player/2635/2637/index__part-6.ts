/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-6
 */

"use strict"

import { B } from "./index__part-3"
import { F } from "./index__part-4"
import { V } from "./index__part-5"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_288 from "../../../shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_177 from "../../../shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$_514_index from "./514/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_10_index from "../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_7 from "../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_6 from "../../../shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_68 from "../../../shared/1571/2636/68"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_15 from "../../../shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_28_index from "../../../shared/1571/2636/28/index"
import /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_80_index from "../../../shared/1571/2636/80/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_328 from "../../../shared/1571/2636/328"
import * as /* [auto-meaningful-name] */$_1063 from "./1063"
import /* [auto-meaningful-name] */_$_ from "./1063"
function K(t, e, n) {
  return X.apply(this, arguments)
}
function X() {
  return (X = $$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e, n, r) {
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
            return $$_$$_$$_shared_1571_2636_15.cb("https://res2.wx.qq.com/open/js/jweixin-1.6.0.js")
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
            a = $$_$$_$$_shared_1571_2636_15.N(window.location.href)
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
  var t = _React.useState()
  var e = $$_$$_$$_shared_1571_2636_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = _React.useState(true)
  var s = $$_$$_$$_shared_1571_2636_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var m = _React.useState(true)
  var b = $$_$$_$$_shared_1571_2636_10_index.a(m, 2)
  var _ = b[0]
  var y = b[1]
  var w = _React.useState("")
  var E = $$_$$_$$_shared_1571_2636_10_index.a(w, 2)
  var O = E[0]
  var T = E[1]
  var A = _React.useRef()
  function S() {
    return (S = $$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t() {
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
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = $$_$$_$$_shared_1571_2636_15.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 30
                break
              }
              t.next = 6
              return $$_$$_$$_shared_1571_2636_177.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              $$_$$_$$_shared_1571_2636_288.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return $$_$$_$$_shared_1571_2636_288.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return $$_$$_$$_shared_1571_2636_288.c(a)
            case 20:
              a = t.sent
            case 21:
              if (A.current = a, s = a.title || "CoCo", c = a.description || $$_$$_$$_shared_1571_2636_328.c, f = a.coverUrl || "", document.title || (document.title = s), !navigator.userAgent.toLowerCase().includes("micromessenger")) {
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
  _React.useEffect(function () {
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
  _React.useEffect(function () {
    if (!_ && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = O
      }
      o($$_$$_$$_shared_1571_2636_6.a({}, A.current))
    }
  }, [O, _])
  return n ? React.createElement("div", {
    className: _$_.community
  }, c && React.createElement("img", {
    src: "https://static.bcmcdn.com/crc-uploader/2021/12/35f947eec3186875243a6ffb6efd5cf5.gif",
    alt: "loading",
    className: _$_.loading
  }), React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: _$_.camera
  }), React.createElement($_514_index.a, n)) : React.createElement(React.Fragment, null)
})
var Z = function (t) {
  var /* [auto-meaningful-name] */t$channel = t.channel
  return React.createElement(React.Fragment, null, function () {
    switch (t$channel) {
      case $$_$$_$$_shared_1571_2636_68.a.H5:
        return React.createElement(q, null)
      default:
        return React.createElement(F, null)
    }
  }())
}
var J = React.memo(function () {
  var t = ($$_$$_$$_shared_1571_2636_15.N(window.location.href).channel || "").toUpperCase()
  window.history.pushState = function () {}
  window.history.replaceState = function () {}
  return $$_$$_$$_shared_1571_2636_28_index.f() ? React.createElement(Z, {
    channel: t
  }) : React.createElement(B, {
    channel: t
  })
})
$$_$$_$$_shared_1571_2636_80_index.render(React.createElement(J, null), document.getElementById("root"))
