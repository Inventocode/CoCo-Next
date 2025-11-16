/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-1
 */

"use strict"

import { "72__part-0__v" as v } from "./index__part-0"
import * as /* [auto-meaningful-name] */$_36_index from "./36/index"
import * as g from "./32"
import * as b from "./8"
import * as _ from "./14"
import * as E from "./25"
var O = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
var w = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this._options = t
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_36_index.b(function (t) {
      var n = g.b()
      if (!n) {
        return t
      }
      var r = n.getIntegration(e)
      if (r) {
        var i = n.getClient()
        var o = i ? i.getOptions() : {}
        var a = "function" === typeof r._mergeOptions ? r._mergeOptions(o) : {}
        return "function" !== typeof r._shouldDropEvent ? t : r._shouldDropEvent(t, a) ? null : t
      }
      return t
    })
  }
  e.prototype._shouldDropEvent = function (e, t) {
    return this._isSentryError(e, t) ? (b.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + _.d(e)), true) : this._isIgnoredError(e, t) ? (b.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + _.d(e)), true) : this._isDeniedUrl(e, t) ? (b.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + _.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true) : !this._isAllowedUrl(e, t) && (b.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + _.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true)
  }
  e.prototype._isSentryError = function (e, t) {
    if (!t.ignoreInternal) {
      return false
    }
    try {
      return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || false
    } catch (n) {
      return false
    }
  }
  e.prototype._isIgnoredError = function (e, t) {
    return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some(function (e) {
      return t.ignoreErrors.some(function (t) {
        return E.a(e, t)
      })
    })
  }
  e.prototype._isDeniedUrl = function (e, t) {
    if (!t.denyUrls || !t.denyUrls.length) {
      return false
    }
    var n = this._getEventFilterUrl(e)
    return !!n && t.denyUrls.some(function (e) {
      return E.a(n, e)
    })
  }
  e.prototype._isAllowedUrl = function (e, t) {
    if (!t.allowUrls || !t.allowUrls.length) {
      return true
    }
    var n = this._getEventFilterUrl(e)
    return !n || t.allowUrls.some(function (e) {
      return E.a(n, e)
    })
  }
  e.prototype._mergeOptions = function (e) {
    if (undefined === e) {
      e = {}
    }
    return {
      allowUrls: v(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
      denyUrls: v(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
      ignoreErrors: v(this._options.ignoreErrors || [], e.ignoreErrors || [], O),
      ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
    }
  }
  e.prototype._getPossibleEventMessages = function (e) {
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
        b.a.error("Cannot extract message for event " + _.d(e))
        return []
      }
    }
    return []
  }
  e.prototype._getLastValidUrl = function (e) {
    var t
    if (undefined === e) {
      e = []
    }
    for (var n = e.length - 1; n >= 0; n--) {
      var r = e[n]
      if ("<anonymous>" !== (null === (t = r) || undefined === t ? undefined : t.filename)) {
        return r.filename || null
      }
    }
    return null
  }
  e.prototype._getEventFilterUrl = function (e) {
    try {
      if (e.stacktrace) {
        var /* [auto-meaningful-name] */e$stacktrace$frames = e.stacktrace.frames
        return this._getLastValidUrl(e$stacktrace$frames)
      }
      if (e.exception) {
        var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames
        return this._getLastValidUrl(n)
      }
      return null
    } catch (r) {
      b.a.error("Cannot extract url for event " + _.d(e))
      return null
    }
  }
  e.id = "InboundFilters"
  return e
}()
export { w as "72__part-1__w" }
