/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2585
 */

"use strict"

import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import "../../../shared/1531/2584/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_75_index from "../../../shared/1531/2584/75/index"
import /* [auto-meaningful-name] */_$$_$$_$$_shared_1531_2584_75_index from "../../../shared/1531/2584/75/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_28_index from "../../../shared/1531/2584/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_15 from "../../../shared/1531/2584/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_68 from "../../../shared/1531/2584/68"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_6 from "../../../shared/1531/2584/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_7 from "../../../shared/1531/2584/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_10_index from "../../../shared/1531/2584/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_8 from "../../../shared/1531/2584/8"
import /* [auto-meaningful-name] */_$$_$$_$$_shared_1531_2584_ from "../../../shared/1531/2584/8"
import * as /* [auto-meaningful-name] */$_511_index from "./511/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_177 from "../../../shared/1531/2584/177"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_729_index from "../../../shared/1531/2584/729/index"
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
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_13_index from "../../../shared/1531/2584/13/index"
import * as /* [auto-meaningful-name] */$_1020 from "./1020"
import /* [auto-meaningful-name] */_$_ from "./1020"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_289 from "../../../shared/1531/2584/289"
import * as /* [auto-meaningful-name] */$_527 from "./527"
import /* [auto-meaningful-name] */_$_2 from "./527"
function k(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var R = _React.memo(function () {
  var t = React.useState()
  var e = $$_$$_$$_shared_1531_2584_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = React.useState(1)
  var s = $$_$$_$$_shared_1531_2584_10_index.a(a, 2)
  var u = s[0]
  var l = s[1]
  var m = React.useState(false)
  var S = $$_$$_$$_shared_1531_2584_10_index.a(m, 2)
  var j = S[0]
  var R = S[1]
  var N = React.useState(false)
  var x = $$_$$_$$_shared_1531_2584_10_index.a(N, 2)
  var D = x[0]
  var L = x[1]
  var B = React.useState(true)
  var P = $$_$$_$$_shared_1531_2584_10_index.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = React.useState("")
  var H = $$_$$_$$_shared_1531_2584_10_index.a(W, 2)
  var V = H[0]
  var G = H[1]
  var z = React.useRef()
  var Y = React.useRef()
  var K = React.useRef()
  function X() {
    return (X = $$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t() {
      var e
      var n
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var o
      return _RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!(n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1])) {
                t.next = 22
                break
              }
              t.next = 4
              return $$_$$_$$_shared_1531_2584_177.g(n)
            case 4:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              $$_$$_$$_shared_1531_2584_289.a(t$sent$data$bcmc_url)
              t.next = 8
              return fetch(t$sent$data$bcmc_url)
            case 8:
              t$sent = t.sent
              t.next = 11
              return t$sent.json()
            case 11:
              o = t.sent
              t.next = 14
              return $$_$$_$$_shared_1531_2584_289.b()
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19
                break
              }
              t.next = 18
              return $$_$$_$$_shared_1531_2584_289.c(o)
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
  React.useEffect(function () {
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
  React.useEffect(function () {
    if (!U && K.current) {
      if (K.current.blockCode) {
        K.current.blockCode = V
      }
      o($$_$$_$$_shared_1531_2584_6.a($$_$$_$$_shared_1531_2584_6.a({}, K.current), {}, {
        shouldOpenEmulator: true
      }))
      w()
      O()
    }
  }, [V, U])
  React.useEffect(function () {
    function t() {
      var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
      l(window$innerWidth > 1366 ? 1 : window$innerWidth > 992 ? .9 : window$innerWidth > 700 ? .83 : .57)
    }
    t()
    window.onresize = t
  }, [])
  var q = function (t) {
    var /* [auto-meaningful-name] */t$data = t.data
    if (t$data.type === $$_$$_$$_shared_1531_2584_68.b.DEVICE_VIBRATE) {
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
    if (t$data.type === $$_$$_$$_shared_1531_2584_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(z.current)
      Y.current = 0
      R(false)
    } else {
      if (t$data.type === $$_$$_$$_shared_1531_2584_68.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
        L(!!t$data.data.visiblePanel)
      }
    }
  }
  React.useEffect(function () {
    window.addEventListener("message", q)
    return function () {
      window.removeEventListener("message", q)
    }
  }, [])
  return _React.createElement("div", {
    className: _$_2.community
  }, _React.createElement("div", {
    id: "webPlayer",
    className: _$$_$$_$$_shared_1531_2584_(_$_2.main),
    style: {
      transform: k(u),
      left: D ? "35%" : "50%"
    }
  }, _React.createElement("div", {
    className: _$$_$$_$$_shared_1531_2584_(j && _$_2.vibrate, _$_2.playerWrapper)
  }, n && _React.createElement($_511_index.a, n)), _React.createElement("div", {
    className: _$$_$$_$$_shared_1531_2584_(j && _$_2.vibrate, _$_2.deviceFrame)
  }), _React.createElement("div", {
    className: _$_2.emulatorWrapper
  }, _React.createElement($$_$$_$$_shared_1531_2584_729_index.a, {
    messageWindow: window
  }))), _React.createElement("div", {
    className: _$_2.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, _React.createElement("img", {
    src: _$_,
    className: _$_2.appUrlBtnImg,
    alt: ""
  }), _React.createElement("span", null, "去CoCo制作"), _React.createElement($$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-fold-left",
    className: _$_2.appUrlBtnIcon
  })))
})
import * as /* [auto-meaningful-name] */$_528 from "./528"
import /* [auto-meaningful-name] */_$_3 from "./528"
function D(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var L = _React.memo(function () {
  var t = React.useState()
  var e = $$_$$_$$_shared_1531_2584_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = React.useState(1)
  var s = $$_$$_$$_shared_1531_2584_10_index.a(a, 2)
  var l = s[0]
  var m = s[1]
  var y = React.useState(false)
  var w = $$_$$_$$_shared_1531_2584_10_index.a(y, 2)
  var E = w[0]
  var O = w[1]
  var T = React.useState(false)
  var S = $$_$$_$$_shared_1531_2584_10_index.a(T, 2)
  var j = S[0]
  var M = S[1]
  var k = React.useState(true)
  var R = $$_$$_$$_shared_1531_2584_10_index.a(k, 2)
  var N = R[0]
  var L = R[1]
  var B = React.useState("")
  var P = $$_$$_$$_shared_1531_2584_10_index.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = React.useRef()
  var H = React.useRef()
  var V = React.useRef()
  function G() {
    return (G = $$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t() {
      var e
      var n
      var r
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var a
      return _RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = $$_$$_$$_shared_1531_2584_15.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 22
                break
              }
              t.next = 6
              return $$_$$_$$_shared_1531_2584_177.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              $$_$$_$$_shared_1531_2584_289.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return $$_$$_$$_shared_1531_2584_289.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return $$_$$_$$_shared_1531_2584_289.c(a)
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
    var /* [auto-meaningful-name] */t$data = t.data
    if (t$data.type === $$_$$_$$_shared_1531_2584_68.b.DEVICE_VIBRATE) {
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
    if (t$data.type === $$_$$_$$_shared_1531_2584_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(W.current)
      H.current = 0
      O(false)
    } else {
      if (t$data.type === $$_$$_$$_shared_1531_2584_68.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
        M(!!t$data.data.visiblePanel)
      }
    }
  }
  React.useEffect(function () {
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
  React.useEffect(function () {
    if (!N && V.current) {
      if (V.current.blockCode) {
        V.current.blockCode = U
      }
      o($$_$$_$$_shared_1531_2584_6.a($$_$$_$$_shared_1531_2584_6.a({}, V.current), {}, {
        shouldOpenEmulator: true
      }))
    }
  }, [U, N])
  React.useEffect(function () {
    window.addEventListener("message", z)
    return function () {
      window.removeEventListener("message", z)
    }
  }, [])
  React.useEffect(function () {
    function t() {
      var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
      m(window$innerWidth > 1366 ? 1 : window$innerWidth > 992 ? .9 : window$innerWidth > 700 ? .83 : .57)
    }
    t()
    window.onresize = t
  }, [])
  return _React.createElement("div", {
    className: _$_3.community
  }, _React.createElement("div", {
    id: "webPlayer",
    className: _$$_$$_$$_shared_1531_2584_(_$_3.main),
    style: {
      transform: D(l),
      left: j ? "35%" : "50%"
    }
  }, _React.createElement("div", {
    className: _$$_$$_$$_shared_1531_2584_(E && _$_3.vibrate, _$_3.playerWrapper)
  }, n && _React.createElement($_511_index.a, n)), _React.createElement("div", {
    className: _$$_$$_$$_shared_1531_2584_(E && _$_3.vibrate, _$_3.deviceFrame)
  }), _React.createElement("div", {
    className: _$_3.emulatorWrapper
  }, _React.createElement($$_$$_$$_shared_1531_2584_729_index.a, {
    messageWindow: window
  }))), _React.createElement("div", {
    className: _$_3.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, _React.createElement("img", {
    src: _$_,
    className: _$_3.appUrlBtnImg,
    alt: ""
  }), _React.createElement("span", null, "去CoCo制作"), _React.createElement($$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-fold-left",
    className: _$_3.appUrlBtnIcon
  })))
})
import "../../../shared/1531/2584/1160"
var B = function (t) {
  var /* [auto-meaningful-name] */t$channel = t.channel
  return _React.createElement(_React.Fragment, null, function () {
    switch (t$channel) {
      case $$_$$_$$_shared_1531_2584_68.a.H5:
        return _React.createElement(L, null)
      default:
        return _React.createElement(R, null)
    }
  }())
}
import * as /* [auto-meaningful-name] */$_1182 from "./1182"
import /* [auto-meaningful-name] */_$_4 from "./1182"
var F = _React.memo(function () {
  var t = React.useState()
  var e = $$_$$_$$_shared_1531_2584_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = React.useState(true)
  var s = $$_$$_$$_shared_1531_2584_10_index.a(a, 2)
  var u = s[0]
  var c = s[1]
  var l = React.useState("")
  var m = $$_$$_$$_shared_1531_2584_10_index.a(l, 2)
  var b = m[0]
  var _ = m[1]
  var A = React.useRef()
  function S() {
    return I.apply(this, arguments)
  }
  function I() {
    return (I = $$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t() {
      var e
      var n
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var o
      return _RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!(n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1])) {
                t.next = 22
                break
              }
              t.next = 4
              return $$_$$_$$_shared_1531_2584_177.g(n, 1)
            case 4:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              $$_$$_$$_shared_1531_2584_289.a(t$sent$data$bcmc_url)
              t.next = 8
              return fetch(t$sent$data$bcmc_url)
            case 8:
              t$sent = t.sent
              t.next = 11
              return t$sent.json()
            case 11:
              o = t.sent
              t.next = 14
              return $$_$$_$$_shared_1531_2584_289.b()
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19
                break
              }
              t.next = 18
              return $$_$$_$$_shared_1531_2584_289.c(o)
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
  React.useEffect(function () {
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
  React.useEffect(function () {
    if (!u && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = b
      }
      o($$_$$_$$_shared_1531_2584_6.a({}, A.current))
      w()
      O()
    }
  }, [b, u])
  return n ? _React.createElement("div", {
    className: _$_4.community
  }, _React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: _$_4.camera
  }), _React.createElement($_511_index.a, n)) : _React.createElement(_React.Fragment, null)
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_59_index from "../../../shared/1531/2584/59/index"
function V() {
  var t = $$_$$_$$_shared_1531_2584_59_index.b()
  var e = "https://".concat({
    development: "backend-dev",
    test: "backend-test",
    staging: "staging-api",
    production: "api"
  }[t] || "api", ".codemao.cn/tiger/wechat/config/js_sdk")
  var n = {
    url: window.location.href
  }
  return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(e, n).then(function () {
    var t = $$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e) {
      return _RegeneratorRuntime.wrap(function (t) {
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
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1531_2584_327 from "../../../shared/1531/2584/327"
import * as /* [auto-meaningful-name] */$_1041 from "./1041"
import /* [auto-meaningful-name] */_$_5 from "./1041"
function K(t, e, n) {
  return X.apply(this, arguments)
}
function X() {
  return (X = $$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e, n, r) {
    var /* [auto-meaningful-name] */window$wx
    var /* [auto-meaningful-name] */t$sent
    var a
    var s
    var c
    return _RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2
            return $$_$$_$$_shared_1531_2584_15.cb("https://res2.wx.qq.com/open/js/jweixin-1.6.0.js")
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
            a = $$_$$_$$_shared_1531_2584_15.N(window.location.href)
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
var q = _React.memo(function () {
  var t = React.useState()
  var e = $$_$$_$$_shared_1531_2584_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = React.useState(true)
  var s = $$_$$_$$_shared_1531_2584_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var m = React.useState(true)
  var b = $$_$$_$$_shared_1531_2584_10_index.a(m, 2)
  var _ = b[0]
  var y = b[1]
  var w = React.useState("")
  var E = $$_$$_$$_shared_1531_2584_10_index.a(w, 2)
  var O = E[0]
  var T = E[1]
  var A = React.useRef()
  function S() {
    return (S = $$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t() {
      var e
      var n
      var r
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var a
      var s
      var c
      var f
      return _RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = $$_$$_$$_shared_1531_2584_15.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 30
                break
              }
              t.next = 6
              return $$_$$_$$_shared_1531_2584_177.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              $$_$$_$$_shared_1531_2584_289.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return $$_$$_$$_shared_1531_2584_289.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return $$_$$_$$_shared_1531_2584_289.c(a)
            case 20:
              a = t.sent
            case 21:
              if (A.current = a, s = a.title || "CoCo", c = a.description || $$_$$_$$_shared_1531_2584_327.c, f = a.coverUrl || "", document.title || (document.title = s), !navigator.userAgent.toLowerCase().includes("micromessenger")) {
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
  React.useEffect(function () {
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
  React.useEffect(function () {
    if (!_ && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = O
      }
      o($$_$$_$$_shared_1531_2584_6.a({}, A.current))
    }
  }, [O, _])
  return n ? _React.createElement("div", {
    className: _$_5.community
  }, c && _React.createElement("img", {
    src: "https://static.codemao.cn/crc-uploader/2021/12/35f947eec3186875243a6ffb6efd5cf5.gif",
    alt: "loading",
    className: _$_5.loading
  }), _React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: _$_5.camera
  }), _React.createElement($_511_index.a, n)) : _React.createElement(_React.Fragment, null)
})
var Z = function (t) {
  var /* [auto-meaningful-name] */t$channel = t.channel
  return _React.createElement(_React.Fragment, null, function () {
    switch (t$channel) {
      case $$_$$_$$_shared_1531_2584_68.a.H5:
        return _React.createElement(q, null)
      default:
        return _React.createElement(F, null)
    }
  }())
}
var J = _React.memo(function () {
  var t = ($$_$$_$$_shared_1531_2584_15.N(window.location.href).channel || "").toUpperCase()
  window.history.pushState = function () {}
  window.history.replaceState = function () {}
  return $$_$$_$$_shared_1531_2584_28_index.f() ? _React.createElement(Z, {
    channel: t
  }) : _React.createElement(B, {
    channel: t
  })
})
_$$_$$_$$_shared_1531_2584_75_index.render(_React.createElement(J, null), document.getElementById("root"))
