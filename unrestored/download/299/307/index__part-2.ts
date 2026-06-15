/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-2
 */

"use strict"

import { m } from "./index__part-1"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_57 from /* 57 */"./57"
var b = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
var w = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
var S = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this._options = t
    this.name = e.id
  }
  e.prototype.setupOnce = function (t, n) {
    t(function (t) {
      var r = n()
      if (r) {
        var i = r.getIntegration(e)
        if (i) {
          var o = r.getClient()
          var a = o ? o.getOptions() : {}
          var s = function (e, t) {
            if (undefined === e) {
              e = {}
            }
            if (undefined === t) {
              t = {}
            }
            return {
              allowUrls: m(e.whitelistUrls || [], e.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
              denyUrls: m(e.blacklistUrls || [], e.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
              ignoreErrors: m(e.ignoreErrors || [], t.ignoreErrors || [], w),
              ignoreInternal: undefined === e.ignoreInternal || e.ignoreInternal
            }
          }(i._options, a)
          return function (e, t) {
            if (t.ignoreInternal && function (e) {
              try {
                return "SentryError" === e.exception.values[0].type
              } catch (t) {}
              return false
            }(e)) {
              if (b) {
                Module_12.c.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Module_76.d(e))
              }
              return true
            }
            if (function (e, t) {
              if (!t || !t.length) {
                return false
              }
              return function (e) {
                if (e.message) {
                  return [e.message]
                }
                if (e.exception) {
                  try {
                    var t = e.exception.values && e.exception.values[0] || {}
                    var /* [auto-meaningful-name] */t$type = t.type
                    var r = undefined === t$type ? "" : t$type
                    var /* [auto-meaningful-name] */t$value = t.value
                    var o = undefined === t$value ? "" : t$value
                    return ["" + o, r + ": " + o]
                  } catch (a) {
                    if (b) {
                      Module_12.c.error("Cannot extract message for event " + Module_76.d(e))
                    }
                    return []
                  }
                }
                return []
              }(e).some(function (e) {
                return t.some(function (t) {
                  return Module_57.a(e, t)
                })
              })
            }(e, t.ignoreErrors)) {
              if (b) {
                Module_12.c.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Module_76.d(e))
              }
              return true
            }
            if (function (e, t) {
              if (!t || !t.length) {
                return false
              }
              var n = O(e)
              return !!n && t.some(function (e) {
                return Module_57.a(n, e)
              })
            }(e, t.denyUrls)) {
              if (b) {
                Module_12.c.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Module_76.d(e) + ".\nUrl: " + O(e))
              }
              return true
            }
            if (!function (e, t) {
              if (!t || !t.length) {
                return true
              }
              var n = O(e)
              return !n || t.some(function (e) {
                return Module_57.a(n, e)
              })
            }(e, t.allowUrls)) {
              if (b) {
                Module_12.c.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Module_76.d(e) + ".\nUrl: " + O(e))
              }
              return true
            }
            return false
          }(t, s) ? null : t
        }
      }
      return t
    })
  }
  e.id = "InboundFilters"
  return e
}()
function k(e) {
  if (undefined === e) {
    e = []
  }
  for (var t = e.length - 1; t >= 0; t--) {
    var n = e[t]
    if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) {
      return n.filename || null
    }
  }
  return null
}
function O(e) {
  try {
    if (e.stacktrace) {
      return k(e.stacktrace.frames)
    }
    var /* [auto-meaningful-name] */e$exception$values0$stacktrace$frames
    try {
      e$exception$values0$stacktrace$frames = e.exception.values[0].stacktrace.frames
    } catch (n) {}
    return e$exception$values0$stacktrace$frames ? k(e$exception$values0$stacktrace$frames) : null
  } catch (r) {
    if (b) {
      Module_12.c.error("Cannot extract url for event " + Module_76.d(e))
    }
    return null
  }
}
export { b }
export { S }
