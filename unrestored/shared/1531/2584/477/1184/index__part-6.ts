/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1184__part-6
 */

"use strict"

import { "1184__part-5__he" as he } from "./index__part-5"
import * as /* [auto-meaningful-name] */$_394 from "./394"
import * as /* [auto-meaningful-name] */$_905 from "./905"
import * as /* [auto-meaningful-name] */$$_787_39 from "../787/39"
import * as /* [auto-meaningful-name] */$$_340_index from "../340/index"
var be = 0
function we() {
  return be > 0
}
function Ee() {
  be += 1
  setTimeout(function () {
    be -= 1
  })
}
function xe(e, t, n) {
  if (undefined === t) {
    t = {}
  }
  if ("function" !== typeof e) {
    return e
  }
  try {
    if (e.__sentry__) {
      return e
    }
    if (e.__sentry_wrapped__) {
      return e.__sentry_wrapped__
    }
  } catch (a) {
    return e
  }
  var r = function () {
    var r = Array.prototype.slice.call(arguments)
    try {
      if (n && "function" === typeof n) {
        n.apply(this, arguments)
      }
      var i = r.map(function (e) {
        return xe(e, t)
      })
      return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
    } catch (a) {
      Ee()
      $$_340_index.c(function (e) {
        e.addEventProcessor(function (e) {
          var n = $$_787_39.a({}, e)
          if (t.mechanism) {
            $_394.b(n, undefined, undefined)
            $_394.a(n, t.mechanism)
          }
          n.extra = $$_787_39.a($$_787_39.a({}, n.extra), {
            arguments: r
          })
          return n
        })
        $$_340_index.a(a)
      })
      throw a
    }
  }
  try {
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      r[i] = e[i]
    }
  } catch (s) {}
  e.prototype = e.prototype || {}
  r.prototype = e.prototype
  Object.defineProperty(e, "__sentry_wrapped__", {
    enumerable: false,
    value: r
  })
  Object.defineProperties(r, {
    __sentry__: {
      enumerable: false,
      value: true
    },
    __sentry_original__: {
      enumerable: false,
      value: e
    }
  })
  try {
    if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
      Object.defineProperty(r, "name", {
        get: function () {
          return e.name
        }
      })
    }
  } catch (s) {}
  return r
}
function Ce(e) {
  if (undefined === e) {
    e = {}
  }
  if (e.eventId) {
    if (e.dsn) {
      var t = document.createElement("script")
      t.async = true
      t.src = new he(e.dsn).getReportDialogEndpoint(e)
      if (e.onLoad) {
        t.onload = e.onLoad
      }
      (document.head || document.body).appendChild(t)
    } else {
      $_905.a.error("Missing dsn option in showReportDialog call")
    }
  } else {
    $_905.a.error("Missing eventId option in showReportDialog call")
  }
}
export { we as "1184__part-6__we" }
export { xe as "1184__part-6__xe" }
export { Ce as "1184__part-6__Ce" }
