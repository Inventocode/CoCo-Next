/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-5
 */

"use strict"

import { "72__part-0__u" as u } from "./index__part-0"
import { "72__part-4__ce" as ce } from "./index__part-4"
import * as _ from "./14"
import * as b from "./8"
import * as /* [auto-meaningful-name] */$$_16 from "../16"
var ge = 0
function be() {
  return ge > 0
}
function _e() {
  ge += 1
  setTimeout(function () {
    ge -= 1
  })
}
function Ee(e, t, n) {
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
  } catch (o) {
    return e
  }
  var r = function () {
    var r = Array.prototype.slice.call(arguments)
    try {
      if (n && "function" === typeof n) {
        n.apply(this, arguments)
      }
      var i = r.map(function (e) {
        return Ee(e, t)
      })
      return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
    } catch (o) {
      _e()
      $$_16.c(function (e) {
        e.addEventProcessor(function (e) {
          var n = u({}, e)
          if (t.mechanism) {
            _.b(n, undefined, undefined)
            _.a(n, t.mechanism)
          }
          n.extra = u(u({}, n.extra), {
            arguments: r
          })
          return n
        })
        $$_16.a(o)
      })
      throw o
    }
  }
  try {
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      r[i] = e[i]
    }
  } catch (a) {}
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
  } catch (a) {}
  return r
}
function Oe(e) {
  if (undefined === e) {
    e = {}
  }
  if (e.eventId) {
    if (e.dsn) {
      var t = document.createElement("script")
      t.async = true
      t.src = new ce(e.dsn).getReportDialogEndpoint(e)
      if (e.onLoad) {
        t.onload = e.onLoad
      }
      (document.head || document.body).appendChild(t)
    } else {
      b.a.error("Missing dsn option in showReportDialog call")
    }
  } else {
    b.a.error("Missing eventId option in showReportDialog call")
  }
}
export { be as "72__part-5__be" }
export { Ee as "72__part-5__Ee" }
export { Oe as "72__part-5__Oe" }
