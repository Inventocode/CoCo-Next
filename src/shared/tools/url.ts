/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：312
 */

export { d as u }
export { p as s }
export { f as w }
export { h as g }
export { m as i }
export { g as c }
export { v as d }
export { E as e }
export { T as b }
export { A as h }
export { I as A }
export { N as q }
export { R as f }
export { k as z }
export { x as j }
export { B as l }
export { F as k }
export { G as x }
export { W as y }
export { H as r }
export { V as m }
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../unrestored/shared/1571/2636/7"
import { getEnvironment } from "../env"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_133 from "../../../unrestored/shared/1571/2636/133"

export const WIDGET_POST_FORM_URL = "https://owfemtgc1d.feishu.cn/share/base/form/shrcnlokP3seuMFtmTLxCAh40Sc"

export function isDataUrl(urlString: string) {
  return urlString.indexOf("data:") === 0
}

export function isDataImageUrl(urlString: string) {
  return urlString.indexOf("data:image/") === 0
}

function d(e) {
  return e.startsWith("file:///") || e.startsWith("content://")
}

function p(e) {
  return 0 === e.indexOf("blob:")
}

function f(e) {
  return "string" === typeof e && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("file:///") || e.startsWith("content://") || 0 === e.indexOf("blob:") || 0 === e.indexOf("data:image/"))
}

function h(e) {
  var t = e.split(",")
  var n = t[0].match(/:(.*?);/)
  if (n) {
    for (var r = n[1], o = atob(t[1]), /* [auto-meaningful-name] */o$length = o.length, a = new Uint8Array(o$length); o$length--;) {
      a[o$length] = o.charCodeAt(o$length)
    }
    return new Blob([a], {
      type: r
    })
  }
  return null
}
function m(e, t) {
  var n = h(e)
  return n ? new File([n], t, {
    type: n.type
  }) : null
}
function g(e) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = $$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return fetch(t)
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.blob()
          case 5:
            e$sent1 = e.sent
            return e.abrupt("return", e$sent1)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function v(e, t) {
  return b.apply(this, arguments)
}
function b() {
  return (b = $$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return g(t)
          case 2:
            if ((e$sent = e.sent).type !== $$_$$_$$_unrestored_shared_1571_2636_133.c) {
              e.next = 9
              break
            }
            e.next = 6
            return e$sent.text()
          case 6:
            e$sent1 = e.sent
            a = y(e$sent1)
            return e.abrupt("return", new File([a], n, {
              type: e$sent.type
            }))
          case 9:
            return e.abrupt("return", new File([e$sent], n, {
              type: e$sent.type
            }))
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function y(e) {
  var t = document.createElement("div")
  t.innerHTML = e
  for (var n = t.getElementsByTagName("script"); n.length > 0;) {
    var /* [auto-meaningful-name] */n0$parentNode
    if (!(null === (n0$parentNode = n[0].parentNode) || undefined === n0$parentNode)) {
      n0$parentNode.removeChild(n[0])
    }
  }
  for (var o = t.getElementsByTagName("*"), i = 0; i < o.length; i++) {
    for (var a = o[i], /* [auto-meaningful-name] */a$attributes = a.attributes, c = a$attributes.length - 1; c >= 0; c--) {
      var l = a$attributes[c]
      if (l.name.startsWith("on") || "href" === l.name && l.value.startsWith("javascript:") || "xlink:href" === l.name && l.value.startsWith("javascript:")) {
        a.removeAttribute(l.name)
      }
    }
  }
  return t.innerHTML
}
function E(e, t) {
  return O.apply(this, arguments)
}
function O() {
  return (O = $$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return g(t)
          case 2:
            e$sent = e.sent
            e.next = 5
            return e$sent.text()
          case 5:
            e$sent1 = e.sent
            a = y(e$sent1)
            return e.abrupt("return", new File([a], n, {
              type: e$sent.type
            }))
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function w(e) {
  return C.apply(this, arguments)
}
function C() {
  return (C = $$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e, n) {
              var r = new FileReader()
              r.onload = function (t) {
                if (t.target && t.target.result) {
                  e(t.target.result.toString())
                } else {
                  n(new Error("blob to base64 is error"))
                }
              }
              r.readAsDataURL(t)
            }))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function T(e) {
  return S.apply(this, arguments)
}
function S() {
  return (S = $$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return g(t)
          case 2:
            e$sent = e.sent
            e.next = 5
            return w(e$sent)
          case 5:
            return e.abrupt("return", e.sent)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function A(e) {
  var t = h(e)
  return t ? I(t) : ""
}
function I(e) {
  return URL.createObjectURL(e)
}
function j(e) {
  var t = new URLSearchParams(e)
  var /* [auto-meaningful-name] */inviteCode = "inviteCode"
  var r = t.get(inviteCode)
  if (r) {
    t.set(inviteCode, r.split(" ")[0])
  }
  return t
}
function N(e) {
  var t = {}
  var n = e.split("?")[1]
  if (!n) {
    return {}
  }
  var r = j(n)
  Array.from(r).forEach(function (e) {
    t[e[0]] = e[1]
  })
  return t
}
function R(e) {
  var t = j(window.location.search)
  e.forEach(function (e) {
    t.delete(e)
  })
  var n = t.toString()
  var r = n ? "?" + n : ""
  window.history.replaceState(null, "", "/editor/".concat(r))
}
function k(workId) {
  ((e) => {
    var t = j(window.location.search)
    for (var n in e) t.set(n, e[n])
    var r = "?" + t.toString()
    window.history.replaceState(null, "", "/editor/".concat(r))
  })({ workId })
}
function x(e, t) {
  var n = "?workId=".concat(e, "&inviteCode=").concat(t)
  return window.location.origin + window.location.pathname + n
}

function getBaseUrl() {
  return getEnvironment() === "production" ? "https://coco.codemao.cn" : window.location.origin
}

export function getPlayerCommunityUrl(workId: string) {
  return getBaseUrl() + `/editor/player/${workId}?channel=community`
}

export function getPlayerH5Url(workId: string) {
  return getBaseUrl() + `/editor/player/${workId}?channel=h5`
}

export function getCommunityWorkUrl(workId: string) {
  const environment = getEnvironment()
  let prefix = ""
  if (environment === "development" || environment === "dev") {
    prefix = "dev-"
  } else if (environment === "test") {
    prefix = "test-"
  } else  if (environment === "staging") {
    prefix = "staging-"
  }
  return `https://${prefix}shequ.codemao.cn/work/${workId}`
}

function B() {
  var e = getEnvironment()
  var t = ""
  if ("development" === e || "dev" === e) {
    t = "dev-"
  } else {
    if ("test" === e) {
      t = "test-"
    } else {
      if ("staging" === e) {
        t = "staging-"
      }
    }
  }
  return "https://".concat(t, "coco.codemao.cn")
}

function F() {
  var e = getEnvironment()
  var t = ""
  if ("development" === e || "dev" === e) {
    t = "dev-"
  } else {
    if ("test" === e) {
      t = "test-"
    } else {
      if ("staging" === e) {
        t = "staging-"
      }
    }
  }
  return "https://".concat(t, "cloud-space.codemao.cn")
}

function G(e) {
  return e.startsWith("http://") || e.startsWith("https://")
}

function W(e) {
  try {
    var t = new URL(e).hostname.endsWith("codemao.cn")
    return !["login", "oauth", "register", "captcha", "/accounts/token", "/cookie/info", "kitten", "nemo", "neko", "wood"].some(function (n) {
      return t && e.includes(n)
    })
  } catch (n) {
    console.error("isValidUrl error", n)
    return true
  }
}

var U = ["socketcv.codemao.cn"]
function H(e) {
  for (var t = false, n = 0; n < U.length; n++) {
    if (null === e || undefined === e ? undefined : e.includes(U[n])) {
      t = true
      break
    }
  }
  return t
}
function V() {
  return "https://".concat(function () {
    var e = getEnvironment()
    var t = ""
    if ("development" === e || "dev" === e) {
      t = "dev-"
    } else {
      if ("test" === e) {
        t = "test-"
      } else {
        if ("staging" === e) {
          t = "staging-"
        }
      }
    }
    return t
  }(), "shequ.codemao.cn/setting")
}
