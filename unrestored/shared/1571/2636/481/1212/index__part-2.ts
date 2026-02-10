/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1212__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_799_38 from "../799/38"
import * as /* [auto-meaningful-name] */$_1049 from "./1049"
import * as /* [auto-meaningful-name] */$_2644 from "./2644"
import * as /* [auto-meaningful-name] */$_918 from "./918"
import * as /* [auto-meaningful-name] */$_395 from "./395"
import * as /* [auto-meaningful-name] */$_746 from "./746"
var d = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
var h = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this._options = t
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_1049.b(function (t) {
      var n = $_2644.a()
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
    return this._isSentryError(e, t) ? ($_918.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + $_395.d(e)), true) : this._isIgnoredError(e, t) ? ($_918.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + $_395.d(e)), true) : this._isDeniedUrl(e, t) ? ($_918.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + $_395.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true) : !this._isAllowedUrl(e, t) && ($_918.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + $_395.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true)
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
        return $_746.a(e, t)
      })
    })
  }
  e.prototype._isDeniedUrl = function (e, t) {
    if (!t.denyUrls || !t.denyUrls.length) {
      return false
    }
    var n = this._getEventFilterUrl(e)
    return !!n && t.denyUrls.some(function (e) {
      return $_746.a(n, e)
    })
  }
  e.prototype._isAllowedUrl = function (e, t) {
    if (!t.allowUrls || !t.allowUrls.length) {
      return true
    }
    var n = this._getEventFilterUrl(e)
    return !n || t.allowUrls.some(function (e) {
      return $_746.a(n, e)
    })
  }
  e.prototype._mergeOptions = function (e) {
    if (undefined === e) {
      e = {}
    }
    return {
      allowUrls: $$_799_38.f(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
      denyUrls: $$_799_38.f(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
      ignoreErrors: $$_799_38.f(this._options.ignoreErrors || [], e.ignoreErrors || [], d),
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
        $_918.a.error("Cannot extract message for event " + $_395.d(e))
        return []
      }
    }
    return []
  }
  e.prototype._getLastValidUrl = function (e) {
    var t
    var n
    if (undefined === e) {
      e = []
    }
    for (var r = e.length - 1; r >= 0; r--) {
      var i = e[r]
      if ("<anonymous>" !== (null === (t = i) || undefined === t ? undefined : t.filename) && "[native code]" !== (null === (n = i) || undefined === n ? undefined : n.filename)) {
        return i.filename || null
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
      $_918.a.error("Cannot extract url for event " + $_395.d(e))
      return null
    }
  }
  e.id = "InboundFilters"
  return e
}()
export { h }
