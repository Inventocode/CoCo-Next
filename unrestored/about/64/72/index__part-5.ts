/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-5
 */

"use strict"

import { u } from "./index__part-0"
import { ce } from "./index__part-4"
import * as /* [auto-meaningful-name] */$$_49_14 from "../49/14"
import * as /* [auto-meaningful-name] */$$_49_8 from "../49/8"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
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
      $$_16_index.c(function (e) {
        e.addEventProcessor(function (e) {
          var n = u({}, e)
          if (t.mechanism) {
            $$_49_14.b(n, undefined, undefined)
            $$_49_14.a(n, t.mechanism)
          }
          n.extra = u(u({}, n.extra), {
            arguments: r
          })
          return n
        })
        $$_16_index.a(o)
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
      $$_49_8.a.error("Missing dsn option in showReportDialog call")
    }
  } else {
    $$_49_8.a.error("Missing eventId option in showReportDialog call")
  }
}
export { be }
export { Ee }
export { Oe }
