/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-7
 */

"use strict"

import { s } from "./index__part-0"
import { L, M } from "./index__part-4"
import { W } from "./index__part-5"
import { Be } from "./index__part-6"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"./23"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../28"
var Ye = Module_22.a()
var Xe = 0
function Qe() {
  return Xe > 0
}
function Ze(e, t, n) {
  if (undefined === t) {
    t = {}
  }
  if ("function" !== typeof e) {
    return e
  }
  try {
    var /* [auto-meaningful-name] */e$__sentry_wrapped__ = e.__sentry_wrapped__
    if (e$__sentry_wrapped__) {
      return e$__sentry_wrapped__
    }
    if (Module_23.f(e)) {
      return e
    }
  } catch (a) {
    return e
  }
  var i = function () {
    var r = Array.prototype.slice.call(arguments)
    try {
      if (n && "function" === typeof n) {
        n.apply(this, arguments)
      }
      var i = r.map(function (e) {
        return Ze(e, t)
      })
      return e.apply(this, i)
    } catch (o) {
      Xe += 1
      setTimeout(function () {
        Xe -= 1
      })
      Module_28.c(function (e) {
        e.addEventProcessor(function (e) {
          if (t.mechanism) {
            Module_76.b(e, undefined, undefined)
            Module_76.a(e, t.mechanism)
          }
          e.extra = s(s({}, e.extra), {
            arguments: r
          })
          return e
        })
        Module_28.a(o)
      })
      throw o
    }
  }
  try {
    for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
      i[o] = e[o]
    }
  } catch (u) {}
  Module_23.g(i, e)
  Module_23.a(e, "__sentry_wrapped__", i)
  try {
    if (Object.getOwnPropertyDescriptor(i, "name").configurable) {
      Object.defineProperty(i, "name", {
        get: function () {
          return e.name
        }
      })
    }
  } catch (u) {}
  return i
}
function et(e) {
  if (undefined === e) {
    e = {}
  }
  if (Ye.document) {
    if (e.eventId) {
      if (e.dsn) {
        var t = Ye.document.createElement("script")
        t.async = true
        t.src = function (e, t) {
          var n = M(e)
          var r = W(n) + "embed/error-page/"
          var i = "dsn=" + L(n)
          for (var o in t) if ("dsn" !== o) {
            if ("user" === o) {
              if (!t.user) {
                continue
              }
              if (t.user.name) {
                i += "&name=" + encodeURIComponent(t.user.name)
              }
              if (t.user.email) {
                i += "&email=" + encodeURIComponent(t.user.email)
              }
            } else {
              i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(t[o])
            }
          }
          return r + "?" + i
        }(e.dsn, e)
        if (e.onLoad) {
          t.onload = e.onLoad
        }
        var n = Ye.document.head || Ye.document.body
        if (n) {
          n.appendChild(t)
        }
      } else if (Be) {
        Module_12.c.error("Missing dsn option in showReportDialog call")
      }
    } else if (Be) {
      Module_12.c.error("Missing eventId option in showReportDialog call")
    }
  }
}
export { Qe }
export { Ze }
export { et }
