/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2585
 */

"use strict"

import * as _React from "react"
import React from "react"
import "../../../shared/1531/2584/710/index"
import * as o from "../../../shared/1531/2584/75/index"
import a from "../../../shared/1531/2584/75/index"
import * as s from "../../../shared/1531/2584/28/index"
import * as u from "../../../shared/1531/2584/15"
import * as c from "../../../shared/1531/2584/68"
import * as _RegeneratorRuntime from "regenerator-runtime"
import RegeneratorRuntime from "regenerator-runtime"
import * as f from "../../../shared/1531/2584/6"
import * as h from "../../../shared/1531/2584/7"
import * as p from "../../../shared/1531/2584/10/index"
import * as m from "../../../shared/1531/2584/8"
import b from "../../../shared/1531/2584/8"
import * as g from "./511/index"
import * as v from "../../../shared/1531/2584/177"
import * as _ from "../../../shared/1531/2584/729/index"
function y() {
  window.parent.postMessage({
    type: "ON_INIT_SUCCESS"
  }, "*")
}
function w() {
  window.parent.postMessage({
    type: "ON_LOAD_SUCCESS",
    payload: {
      keyboard_staus: "none"
    }
  }, "*")
}
function E() {
  window.parent.postMessage({
    type: "ON_LOAD_FAIL"
  }, "*")
}
function O() {
  window.parent.postMessage({
    type: "ON_PLAYER_START"
  }, "*")
}
function T(t) {
  window.addEventListener("message", function (e) {
    if ("RESET_PLAYER" === e.data.type) {
      t()
    }
  })
}
import * as A from "../../../shared/1531/2584/13/index"
import * as S from "./1020"
import I from "./1020"
import * as C from "../../../shared/1531/2584/289"
import * as j from "./527"
import M from "./527"
function k(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var R = React.memo(function () {
  var t = _React.useState()
  var e = p.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = _React.useState(1)
  var s = p.a(a, 2)
  var u = s[0]
  var l = s[1]
  var m = _React.useState(false)
  var S = p.a(m, 2)
  var j = S[0]
  var R = S[1]
  var N = _React.useState(false)
  var x = p.a(N, 2)
  var D = x[0]
  var L = x[1]
  var B = _React.useState(true)
  var P = p.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = _React.useState("")
  var H = p.a(W, 2)
  var V = H[0]
  var G = H[1]
  var z = _React.useRef()
  var Y = _React.useRef()
  var K = _React.useRef()
  function X() {
    return (X = h.a(RegeneratorRuntime.mark(function t() {
      var e
      var n
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var o
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!(n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1])) {
                t.next = 22
                break
              }
              t.next = 4
              return v.g(n)
            case 4:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              C.a(t$sent$data$bcmc_url)
              t.next = 8
              return fetch(t$sent$data$bcmc_url)
            case 8:
              t$sent = t.sent
              t.next = 11
              return t$sent.json()
            case 11:
              o = t.sent
              t.next = 14
              return C.b()
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19
                break
              }
              t.next = 18
              return C.c(o)
            case 18:
              o = t.sent
            case 19:
              K.current = o
              t.next = 23
              break
            case 22:
              E()
            case 23:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  _React.useEffect(function () {
    y();
    (function () {
      X.apply(this, arguments)
    })()
    T(function () {
      window.location.reload()
    })
    document.body.click()
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        G(t.data.payload)
        F(false)
        var e = document.getElementById("editor-iframe")
        if (e) {
          document.body.removeChild(e)
        }
      }
    }, false)
  }, [])
  _React.useEffect(function () {
    if (!U && K.current) {
      if (K.current.blockCode) {
        K.current.blockCode = V
      }
      o(f.a(f.a({}, K.current), {}, {
        shouldOpenEmulator: true
      }))
      w()
      O()
    }
  }, [V, U])
  _React.useEffect(function () {
    function t() {
      var window$innerWidth = window.innerWidth
      l(window$innerWidth > 1366 ? 1 : window$innerWidth > 992 ? .9 : window$innerWidth > 700 ? .83 : .57)
    }
    t()
    window.onresize = t
  }, [])
  var q = function (t) {
    var t$data = t.data
    if (t$data.type === c.b.DEVICE_VIBRATE) {
      var n = Date.now() + t$data.data.duration
      if (Y.current && Y.current >= n) {
        return
      }
      R(true)
      window.clearTimeout(z.current)
      z.current = window.setTimeout(function () {
        return R(false)
      }, t$data.data.duration)
      return void (Y.current = n)
    }
    if (t$data.type === c.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(z.current)
      Y.current = 0
      R(false)
    } else {
      if (t$data.type === c.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
        L(!!t$data.data.visiblePanel)
      }
    }
  }
  _React.useEffect(function () {
    window.addEventListener("message", q)
    return function () {
      window.removeEventListener("message", q)
    }
  }, [])
  return React.createElement("div", {
    className: M.community
  }, React.createElement("div", {
    id: "webPlayer",
    className: b(M.main),
    style: {
      transform: k(u),
      left: D ? "35%" : "50%"
    }
  }, React.createElement("div", {
    className: b(j && M.vibrate, M.playerWrapper)
  }, n && React.createElement(g.a, n)), React.createElement("div", {
    className: b(j && M.vibrate, M.deviceFrame)
  }), React.createElement("div", {
    className: M.emulatorWrapper
  }, React.createElement(_.a, {
    messageWindow: window
  }))), React.createElement("div", {
    className: M.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, React.createElement("img", {
    src: I,
    className: M.appUrlBtnImg,
    alt: ""
  }), React.createElement("span", null, "去CoCo制作"), React.createElement(A.j, {
    type: "icon-fold-left",
    className: M.appUrlBtnIcon
  })))
})
import * as N from "./528"
import x from "./528"
function D(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var L = React.memo(function () {
  var t = _React.useState()
  var e = p.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = _React.useState(1)
  var s = p.a(a, 2)
  var l = s[0]
  var m = s[1]
  var y = _React.useState(false)
  var w = p.a(y, 2)
  var E = w[0]
  var O = w[1]
  var T = _React.useState(false)
  var S = p.a(T, 2)
  var j = S[0]
  var M = S[1]
  var k = _React.useState(true)
  var R = p.a(k, 2)
  var N = R[0]
  var L = R[1]
  var B = _React.useState("")
  var P = p.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = _React.useRef()
  var H = _React.useRef()
  var V = _React.useRef()
  function G() {
    return (G = h.a(RegeneratorRuntime.mark(function t() {
      var e
      var n
      var r
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var a
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = u.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 22
                break
              }
              t.next = 6
              return v.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              C.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return C.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return C.c(a)
            case 20:
              a = t.sent
            case 21:
              V.current = a
            case 22:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  var z = function (t) {
    var t$data = t.data
    if (t$data.type === c.b.DEVICE_VIBRATE) {
      var n = Date.now() + t$data.data.duration
      if (H.current && H.current >= n) {
        return
      }
      O(true)
      window.clearTimeout(W.current)
      W.current = window.setTimeout(function () {
        return O(false)
      }, t$data.data.duration)
      return void (H.current = n)
    }
    if (t$data.type === c.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(W.current)
      H.current = 0
      O(false)
    } else {
      if (t$data.type === c.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
        M(!!t$data.data.visiblePanel)
      }
    }
  }
  _React.useEffect(function () {
    !function () {
      G.apply(this, arguments)
    }()
    document.body.click()
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        F(t.data.payload)
        L(false)
        var e = document.getElementById("editor-iframe")
        if (e) {
          document.body.removeChild(e)
        }
      }
    }, false)
  }, [])
  _React.useEffect(function () {
    if (!N && V.current) {
      if (V.current.blockCode) {
        V.current.blockCode = U
      }
      o(f.a(f.a({}, V.current), {}, {
        shouldOpenEmulator: true
      }))
    }
  }, [U, N])
  _React.useEffect(function () {
    window.addEventListener("message", z)
    return function () {
      window.removeEventListener("message", z)
    }
  }, [])
  _React.useEffect(function () {
    function t() {
      var window$innerWidth = window.innerWidth
      m(window$innerWidth > 1366 ? 1 : window$innerWidth > 992 ? .9 : window$innerWidth > 700 ? .83 : .57)
    }
    t()
    window.onresize = t
  }, [])
  return React.createElement("div", {
    className: x.community
  }, React.createElement("div", {
    id: "webPlayer",
    className: b(x.main),
    style: {
      transform: D(l),
      left: j ? "35%" : "50%"
    }
  }, React.createElement("div", {
    className: b(E && x.vibrate, x.playerWrapper)
  }, n && React.createElement(g.a, n)), React.createElement("div", {
    className: b(E && x.vibrate, x.deviceFrame)
  }), React.createElement("div", {
    className: x.emulatorWrapper
  }, React.createElement(_.a, {
    messageWindow: window
  }))), React.createElement("div", {
    className: x.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, React.createElement("img", {
    src: I,
    className: x.appUrlBtnImg,
    alt: ""
  }), React.createElement("span", null, "去CoCo制作"), React.createElement(A.j, {
    type: "icon-fold-left",
    className: x.appUrlBtnIcon
  })))
})
import "../../../shared/1531/2584/1160"
var B = function (t) {
  var t$channel = t.channel
  return React.createElement(React.Fragment, null, function () {
    switch (t$channel) {
      case c.a.H5:
        return React.createElement(L, null)
      default:
        return React.createElement(R, null)
    }
  }())
}
import * as P from "./1182"
import U from "./1182"
var F = React.memo(function () {
  var t = _React.useState()
  var e = p.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = _React.useState(true)
  var s = p.a(a, 2)
  var u = s[0]
  var c = s[1]
  var l = _React.useState("")
  var m = p.a(l, 2)
  var b = m[0]
  var _ = m[1]
  var A = _React.useRef()
  function S() {
    return I.apply(this, arguments)
  }
  function I() {
    return (I = h.a(RegeneratorRuntime.mark(function t() {
      var e
      var n
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var o
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!(n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1])) {
                t.next = 22
                break
              }
              t.next = 4
              return v.g(n, 1)
            case 4:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              C.a(t$sent$data$bcmc_url)
              t.next = 8
              return fetch(t$sent$data$bcmc_url)
            case 8:
              t$sent = t.sent
              t.next = 11
              return t$sent.json()
            case 11:
              o = t.sent
              t.next = 14
              return C.b()
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19
                break
              }
              t.next = 18
              return C.c(o)
            case 18:
              o = t.sent
            case 19:
              A.current = o
              t.next = 23
              break
            case 22:
              E()
            case 23:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  _React.useEffect(function () {
    y()
    S()
    T(S)
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        _(t.data.payload)
        c(false)
        var e = document.getElementById("editor-iframe")
        if (e) {
          document.body.removeChild(e)
        }
      }
    }, false)
  }, [])
  _React.useEffect(function () {
    if (!u && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = b
      }
      o(f.a({}, A.current))
      w()
      O()
    }
  }, [b, u])
  return n ? React.createElement("div", {
    className: U.community
  }, React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: U.camera
  }), React.createElement(g.a, n)) : React.createElement(React.Fragment, null)
})
import * as W from "../../../../src/shared/utils/network/axios-with-credentials"
import * as H from "../../../shared/1531/2584/59/index"
function V() {
  var t = H.b()
  var e = "https://".concat({
    development: "backend-dev",
    test: "backend-test",
    staging: "staging-api",
    production: "api"
  }[t] || "api", ".codemao.cn/tiger/wechat/config/js_sdk")
  var n = {
    url: window.location.href
  }
  return W.a.post(e, n).then(function () {
    var t = h.a(RegeneratorRuntime.mark(function t(e) {
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (200 !== e.status) {
                t.next = 4
                break
              }
              return t.abrupt("return", Promise.resolve(e.data))
            case 4:
              return t.abrupt("return", Promise.reject("error"))
            case 5:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()).catch(function (t) {
    return Promise.reject(t)
  })
}
import * as G from "../../../shared/1531/2584/327"
import * as z from "./1041"
import Y from "./1041"
function K(t, e, n) {
  return X.apply(this, arguments)
}
function X() {
  return (X = h.a(RegeneratorRuntime.mark(function t(e, n, r) {
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
            return u.cb("https://res2.wx.qq.com/open/js/jweixin-1.6.0.js")
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
            a = u.N(window.location.href)
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
  var e = p.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = _React.useState(true)
  var s = p.a(a, 2)
  var c = s[0]
  var l = s[1]
  var m = _React.useState(true)
  var b = p.a(m, 2)
  var _ = b[0]
  var y = b[1]
  var w = _React.useState("")
  var E = p.a(w, 2)
  var O = E[0]
  var T = E[1]
  var A = _React.useRef()
  function S() {
    return (S = h.a(RegeneratorRuntime.mark(function t() {
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
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = u.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 30
                break
              }
              t.next = 6
              return v.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              C.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return C.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return C.c(a)
            case 20:
              a = t.sent
            case 21:
              if (A.current = a, s = a.title || "CoCo", c = a.description || G.c, f = a.coverUrl || "", document.title || (document.title = s), !navigator.userAgent.toLowerCase().includes("micromessenger")) {
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
      o(f.a({}, A.current))
    }
  }, [O, _])
  return n ? React.createElement("div", {
    className: Y.community
  }, c && React.createElement("img", {
    src: "https://static.codemao.cn/crc-uploader/2021/12/35f947eec3186875243a6ffb6efd5cf5.gif",
    alt: "loading",
    className: Y.loading
  }), React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: Y.camera
  }), React.createElement(g.a, n)) : React.createElement(React.Fragment, null)
})
var Z = function (t) {
  var t$channel = t.channel
  return React.createElement(React.Fragment, null, function () {
    switch (t$channel) {
      case c.a.H5:
        return React.createElement(q, null)
      default:
        return React.createElement(F, null)
    }
  }())
}
var J = React.memo(function () {
  var t = (u.N(window.location.href).channel || "").toUpperCase()
  window.history.pushState = function () {}
  window.history.replaceState = function () {}
  return s.f() ? React.createElement(Z, {
    channel: t
  }) : React.createElement(B, {
    channel: t
  })
})
a.render(React.createElement(J, null), document.getElementById("root"))
