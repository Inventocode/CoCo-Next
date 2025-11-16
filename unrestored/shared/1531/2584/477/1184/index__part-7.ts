/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1184__part-7
 */

"use strict"

import { "1184__part-0__r" as r } from "./index__part-0"
import { "1184__part-3__O" as O } from "./index__part-3"
import { "1184__part-5__Q" as Q, "1184__part-5__W" as W, "1184__part-5__te" as te, "1184__part-5__ie" as ie, "1184__part-5__se" as se, "1184__part-5__me" as me } from "./index__part-5"
import { "1184__part-6__we" as we, "1184__part-6__xe" as xe, "1184__part-6__Ce" as Ce } from "./index__part-6"
import * as /* [auto-meaningful-name] */$_987 from "./987"
import * as /* [auto-meaningful-name] */$_561_index from "./561/index"
import * as /* [auto-meaningful-name] */$_306 from "./306"
import * as /* [auto-meaningful-name] */$_737 from "./737"
import * as /* [auto-meaningful-name] */$_394 from "./394"
import * as /* [auto-meaningful-name] */$_905 from "./905"
import * as /* [auto-meaningful-name] */$$_340_2592_index from "../340/2592/index"
import * as /* [auto-meaningful-name] */$_1027 from "./1027"
import * as /* [auto-meaningful-name] */$$_787_39 from "../787/39"
import * as /* [auto-meaningful-name] */$_1169 from "./1169"
var ke = function () {
  function e(t) {
    this.name = e.id
    this._options = $$_787_39.a({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true
    }, t)
  }
  e.prototype.addSentryBreadcrumb = function (e) {
    if (this._options.sentry) {
      $$_340_2592_index.a().addBreadcrumb({
        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
        event_id: e.event_id,
        level: e.level,
        message: $_394.d(e)
      }, {
        event: e
      })
    }
  }
  e.prototype.setupOnce = function () {
    var e = this
    if (this._options.console) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._consoleBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "console"
      })
    }
    if (this._options.dom) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._domBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "dom"
      })
    }
    if (this._options.xhr) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._xhrBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "xhr"
      })
    }
    if (this._options.fetch) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._fetchBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "fetch"
      })
    }
    if (this._options.history) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._historyBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "history"
      })
    }
  }
  e.prototype._consoleBreadcrumb = function (e) {
    var t = {
      category: "console",
      data: {
        arguments: e.args,
        logger: "console"
      },
      level: W.fromString(e.level),
      message: $_737.b(e.args, " ")
    }
    if ("assert" === e.level) {
      if (false !== e.args[0]) {
        return
      }
      t.message = "Assertion failed: " + ($_737.b(e.args.slice(1), " ") || "console.assert")
      t.data.arguments = e.args.slice(1)
    }
    $$_340_2592_index.a().addBreadcrumb(t, {
      input: e.args,
      level: e.level
    })
  }
  e.prototype._domBreadcrumb = function (e) {
    var t
    var n = "object" === typeof this._options.dom ? this._options.dom.serializeAttribute : undefined
    if ("string" === typeof n) {
      n = [n]
    }
    try {
      t = e.event.target ? $_1169.a(e.event.target, n) : $_1169.a(e.event, n)
    } catch (r) {
      t = "<unknown>"
    }
    if (0 !== t.length) {
      $$_340_2592_index.a().addBreadcrumb({
        category: "ui." + e.name,
        message: t
      }, {
        event: e.event,
        name: e.name,
        global: e.global
      })
    }
  }
  e.prototype._xhrBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (e.xhr.__sentry_own_request__) {
        return
      }
      var t = e.xhr.__sentry_xhr__ || {}
      var /* [auto-meaningful-name] */t$method = t.method
      var /* [auto-meaningful-name] */t$url = t.url
      var /* [auto-meaningful-name] */t$status_code = t.status_code
      var /* [auto-meaningful-name] */t$body = t.body
      $$_340_2592_index.a().addBreadcrumb({
        category: "xhr",
        data: {
          method: t$method,
          url: t$url,
          status_code: t$status_code
        },
        type: "http"
      }, {
        xhr: e.xhr,
        input: t$body
      })
    } else {
      ;
    }
  }
  e.prototype._fetchBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (!(e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method)) {
        if (e.error) {
          $$_340_2592_index.a().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: W.Error,
            type: "http"
          }, {
            data: e.error,
            input: e.args
          })
        } else {
          $$_340_2592_index.a().addBreadcrumb({
            category: "fetch",
            data: $$_787_39.a($$_787_39.a({}, e.fetchData), {
              status_code: e.response.status
            }),
            type: "http"
          }, {
            input: e.args,
            response: e.response
          })
        }
      }
    }
  }
  e.prototype._historyBreadcrumb = function (e) {
    var t = $_394.e()
    var /* [auto-meaningful-name] */e$from = e.from
    var r = e.to
    var i = $_394.h(t.location.href)
    var o = $_394.h(e$from)
    var a = $_394.h(r)
    if (!o.path) {
      o = i
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      e$from = o.relative
    }
    $$_340_2592_index.a().addBreadcrumb({
      category: "navigation",
      data: {
        from: e$from,
        to: r
      }
    })
  }
  e.id = "Breadcrumbs"
  return e
}()
var Se = function (e) {
  function t(t) {
    if (undefined === t) {
      t = {}
    }
    t._metadata = t._metadata || {}
    t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: "npm:@sentry/browser",
        version: "6.12.0"
      }],
      version: "6.12.0"
    }
    return e.call(this, me, t) || this
  }
  $$_787_39.c(t, e)
  t.prototype.showReportDialog = function (e) {
    if (undefined === e) {
      e = {}
    }
    if ($_394.e().document) {
      if (this._isEnabled()) {
        Ce($$_787_39.a($$_787_39.a({}, e), {
          dsn: e.dsn || this.getDsn()
        }))
      } else {
        $_905.a.error("Trying to call showReportDialog with Sentry Client disabled")
      }
    }
  }
  t.prototype._prepareEvent = function (t, n, r) {
    t.platform = t.platform || "javascript"
    return e.prototype._prepareEvent.call(this, t, n, r)
  }
  t.prototype._sendEvent = function (t) {
    var n = this.getIntegration(ke)
    if (n) {
      n.addSentryBreadcrumb(t)
    }
    e.prototype._sendEvent.call(this, t)
  }
  return t
}(Q)
var Te = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
var Be = function () {
  function e(t) {
    this.name = e.id
    this._options = $$_787_39.a({
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    var e = $_394.e()
    if (this._options.setTimeout) {
      $_561_index.c(e, "setTimeout", this._wrapTimeFunction.bind(this))
    }
    if (this._options.setInterval) {
      $_561_index.c(e, "setInterval", this._wrapTimeFunction.bind(this))
    }
    if (this._options.requestAnimationFrame) {
      $_561_index.c(e, "requestAnimationFrame", this._wrapRAF.bind(this))
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in e) {
      $_561_index.c(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this))
    }
    if (this._options.eventTarget) {
      (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Te).forEach(this._wrapEventTarget.bind(this))
    }
  }
  e.prototype._wrapTimeFunction = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      var r = t[0]
      t[0] = xe(r, {
        mechanism: {
          data: {
            function: $_987.a(e)
          },
          handled: true,
          type: "instrument"
        }
      })
      return e.apply(this, t)
    }
  }
  e.prototype._wrapRAF = function (e) {
    return function (t) {
      return e.call(this, xe(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: $_987.a(e)
          },
          handled: true,
          type: "instrument"
        }
      }))
    }
  }
  e.prototype._wrapEventTarget = function (e) {
    var t = $_394.e()
    var n = t[e] && t[e].prototype
    if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
      $_561_index.c(n, "addEventListener", function (t) {
        return function (n, r, i) {
          try {
            if ("function" === typeof r.handleEvent) {
              r.handleEvent = xe(r.handleEvent.bind(r), {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: $_987.a(r),
                    target: e
                  },
                  handled: true,
                  type: "instrument"
                }
              })
            }
          } catch (o) {}
          return t.call(this, n, xe(r, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: $_987.a(r),
                target: e
              },
              handled: true,
              type: "instrument"
            }
          }), i)
        }
      })
      $_561_index.c(n, "removeEventListener", function (e) {
        return function (t, n, r) {
          var i
          var o = n
          try {
            var a = null === (i = o) || undefined === i ? undefined : i.__sentry_wrapped__
            if (a) {
              e.call(this, t, a, r)
            }
          } catch (s) {}
          return e.call(this, t, o, r)
        }
      })
    }
  }
  e.prototype._wrapXHR = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      var r = this
      var i = ["onload", "onerror", "onprogress", "onreadystatechange"]
      i.forEach(function (e) {
        if (e in r && "function" === typeof r[e]) {
          $_561_index.c(r, e, function (t) {
            var n = {
              mechanism: {
                data: {
                  function: e,
                  handler: $_987.a(t)
                },
                handled: true,
                type: "instrument"
              }
            }
            if (t.__sentry_original__) {
              n.mechanism.data.handler = $_987.a(t.__sentry_original__)
            }
            return xe(t, n)
          })
        }
      })
      return e.apply(this, t)
    }
  }
  e.id = "TryCatch"
  return e
}()
var De = function () {
  function e(t) {
    this.name = e.id
    this._onErrorHandlerInstalled = false
    this._onUnhandledRejectionHandlerInstalled = false
    this._options = $$_787_39.a({
      onerror: true,
      onunhandledrejection: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50
    if (this._options.onerror) {
      $_905.a.log("Global Handler attached: onerror")
      this._installGlobalOnErrorHandler()
    }
    if (this._options.onunhandledrejection) {
      $_905.a.log("Global Handler attached: onunhandledrejection")
      this._installGlobalOnUnhandledRejectionHandler()
    }
  }
  e.prototype._installGlobalOnErrorHandler = function () {
    var t = this
    if (!this._onErrorHandlerInstalled) {
      O({
        callback: function (n) {
          var /* [auto-meaningful-name] */n$error = n.error
          var i = $$_340_2592_index.a()
          var o = i.getIntegration(e)
          var a = n$error && true === n$error.__sentry_own_request__
          if (o && !we() && !a) {
            var s = i.getClient()
            var u = undefined === n$error && $_306.k(n.msg) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(se(n$error || n.msg, undefined, {
              attachStacktrace: s && s.getOptions().attachStacktrace,
              rejection: false
            }), n.url, n.line, n.column)
            $_394.a(u, {
              handled: false,
              type: "onerror"
            })
            i.captureEvent(u, {
              originalException: n$error
            })
          }
        },
        type: "error"
      })
      this._onErrorHandlerInstalled = true
    }
  }
  e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
    var t = this
    if (!this._onUnhandledRejectionHandlerInstalled) {
      O({
        callback: function (n) {
          var r = n
          try {
            if ("reason" in n) {
              r = n.reason
            } else {
              if ("detail" in n && "reason" in n.detail) {
                r = n.detail.reason
              }
            }
          } catch (f) {}
          var i = $$_340_2592_index.a()
          var o = i.getIntegration(e)
          var a = r && true === r.__sentry_own_request__
          if (!o || we() || a) {
            return true
          }
          var s = i.getClient()
          var u = $_306.i(r) ? t._eventFromRejectionWithPrimitive(r) : se(r, undefined, {
            attachStacktrace: s && s.getOptions().attachStacktrace,
            rejection: true
          })
          u.level = W.Error
          $_394.a(u, {
            handled: false,
            type: "onunhandledrejection"
          })
          i.captureEvent(u, {
            originalException: r
          })
        },
        type: "unhandledrejection"
      })
      this._onUnhandledRejectionHandlerInstalled = true
    }
  }
  e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
    var i
    var o = $_306.e(e) ? e.message : e
    var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)
    if (a) {
      i = a[1]
      o = a[2]
    }
    var s = {
      exception: {
        values: [{
          type: i || "Error",
          value: o
        }]
      }
    }
    return this._enhanceEventWithInitialFrame(s, t, n, r)
  }
  e.prototype._eventFromRejectionWithPrimitive = function (e) {
    return {
      exception: {
        values: [{
          type: "UnhandledRejection",
          value: "Non-Error promise rejection captured with value: " + String(e)
        }]
      }
    }
  }
  e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
    e.exception = e.exception || {}
    e.exception.values = e.exception.values || []
    e.exception.values[0] = e.exception.values[0] || {}
    e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}
    e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || []
    var i = isNaN(parseInt(r, 10)) ? undefined : r
    var o = isNaN(parseInt(n, 10)) ? undefined : n
    var a = $_306.k(t) && t.length > 0 ? t : $_394.f()
    if (0 === e.exception.values[0].stacktrace.frames.length) {
      e.exception.values[0].stacktrace.frames.push({
        colno: i,
        filename: a,
        function: "?",
        in_app: true,
        lineno: o
      })
    }
    return e
  }
  e.id = "GlobalHandlers"
  return e
}()
var Ie = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._key = t.key || "cause"
    this._limit = t.limit || 5
  }
  e.prototype.setupOnce = function () {
    $_1027.b(function (t, n) {
      var r = $$_340_2592_index.a().getIntegration(e)
      if (r) {
        var i = r._handler && r._handler.bind(r)
        return "function" === typeof i ? i(t, n) : t
      }
      return t
    })
  }
  e.prototype._handler = function (e, t) {
    if (!e.exception || !e.exception.values || !t || !$_306.g(t.originalException, Error)) {
      return e
    }
    var n = this._walkErrorTree(t.originalException, this._key)
    e.exception.values = $$_787_39.f(n, e.exception.values)
    return e
  }
  e.prototype._walkErrorTree = function (e, t, n) {
    if (undefined === n) {
      n = []
    }
    if (!$_306.g(e[t], Error) || n.length + 1 >= this._limit) {
      return n
    }
    var r = ie(te(e[t]))
    return this._walkErrorTree(e[t], t, $$_787_39.f([r], n))
  }
  e.id = "LinkedErrors"
  return e
}()
var Fe = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (t, n) {
    t(function (t) {
      var r = n().getIntegration(e)
      if (r) {
        try {
          if (r._shouldDropEvent(t, r._previousEvent)) {
            $_905.a.warn("Event dropped due to being a duplicate of previously captured event.")
            return null
          }
        } catch (i) {
          return r._previousEvent = t
        }
        return r._previousEvent = t
      }
      return t
    })
  }
  e.prototype._shouldDropEvent = function (e, t) {
    return !!t && (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t))
  }
  e.prototype._isSameMessageEvent = function (e, t) {
    var /* [auto-meaningful-name] */e$message = e.message
    var /* [auto-meaningful-name] */t$message = t.message
    return !(!e$message && !t$message) && !(e$message && !t$message || !e$message && t$message) && e$message === t$message && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)
  }
  e.prototype._getFramesFromEvent = function (e) {
    var /* [auto-meaningful-name] */e$exception = e.exception
    if (e$exception) {
      try {
        return e$exception.values[0].stacktrace.frames
      } catch (n) {
        return
      }
    } else if (e.stacktrace) {
      return e.stacktrace.frames
    }
  }
  e.prototype._isSameStacktrace = function (e, t) {
    var n = this._getFramesFromEvent(e)
    var r = this._getFramesFromEvent(t)
    if (!n && !r) {
      return true
    }
    if (n && !r || !n && r) {
      return false
    }
    n = n
    if ((r = r).length !== n.length) {
      return false
    }
    for (var i = 0; i < r.length; i++) {
      var o = r[i]
      var a = n[i]
      if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) {
        return false
      }
    }
    return true
  }
  e.prototype._getExceptionFromEvent = function (e) {
    return e.exception && e.exception.values && e.exception.values[0]
  }
  e.prototype._isSameExceptionEvent = function (e, t) {
    var n = this._getExceptionFromEvent(t)
    var r = this._getExceptionFromEvent(e)
    return !(!n || !r) && n.type === r.type && n.value === r.value && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)
  }
  e.prototype._isSameFingerprint = function (e, t) {
    var /* [auto-meaningful-name] */e$fingerprint = e.fingerprint
    var /* [auto-meaningful-name] */t$fingerprint = t.fingerprint
    if (!e$fingerprint && !t$fingerprint) {
      return true
    }
    if (e$fingerprint && !t$fingerprint || !e$fingerprint && t$fingerprint) {
      return false
    }
    e$fingerprint = e$fingerprint
    t$fingerprint = t$fingerprint
    try {
      return !(e$fingerprint.join("") !== t$fingerprint.join(""))
    } catch (i) {
      return false
    }
  }
  e.id = "Dedupe"
  return e
}()
var Re = $_394.e()
var Pe = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_1027.b(function (t) {
      var /* [auto-meaningful-name] */t$request
      var /* [auto-meaningful-name] */Re$location
      var /* [auto-meaningful-name] */_t$request
      if ($$_340_2592_index.a().getIntegration(e)) {
        if (!Re.navigator && !Re.location && !Re.document) {
          return t
        }
        var a = (null === (t$request = t.request) || undefined === t$request ? undefined : t$request.url) || (null === (Re$location = Re.location) || undefined === Re$location ? undefined : Re$location.href)
        var /* [auto-meaningful-name] */Re$document$referrer = (Re.document || {}).referrer
        var /* [auto-meaningful-name] */Re$navigator$userAgent = (Re.navigator || {}).userAgent
        var l = $$_787_39.a($$_787_39.a($$_787_39.a({}, null === (_t$request = t.request) || undefined === _t$request ? undefined : _t$request.headers), Re$document$referrer && {
          Referer: Re$document$referrer
        }), Re$navigator$userAgent && {
          "User-Agent": Re$navigator$userAgent
        })
        var f = $$_787_39.a($$_787_39.a({}, a && {
          url: a
        }), {
          headers: l
        })
        return $$_787_39.a($$_787_39.a({}, t), {
          request: f
        })
      }
      return t
    })
  }
  e.id = "UserAgent"
  return e
}()
var Ne = [new r.InboundFilters(), new r.FunctionToString(), new Be(), new ke(), new De(), new Ie(), new Fe(), new Pe()]
function Me(e) {
  if (undefined === e) {
    e = {}
  }
  if (undefined === e.defaultIntegrations) {
    e.defaultIntegrations = Ne
  }
  if (undefined === e.release) {
    var t = $_394.e()
    if (t.SENTRY_RELEASE && t.SENTRY_RELEASE.id) {
      e.release = t.SENTRY_RELEASE.id
    }
  }
  if (undefined === e.autoSessionTracking) {
    e.autoSessionTracking = true
  }
  (function (e, t) {
    var n
    if (true === t.debug) {
      $_905.a.enable()
    }
    var r = $$_340_2592_index.a()
    if (!(null === (n = r.getScope()) || undefined === n)) {
      n.update(t.initialScope)
    }
    var i = new e(t)
    r.bindClient(i)
  })(Se, e)
  if (e.autoSessionTracking) {
    (function () {
      if ("undefined" === typeof $_394.e().document) {
        return void $_905.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
      }
      var e = $$_340_2592_index.a()
      if ("function" !== typeof e.startSession || "function" !== typeof e.captureSession) {
        return
      }
      e.startSession({
        ignoreDuration: true
      })
      e.captureSession()
      O({
        callback: function (t) {
          var /* [auto-meaningful-name] */t$from = t.from
          var r = t.to
          if (undefined !== t$from && t$from !== r) {
            e.startSession({
              ignoreDuration: true
            })
            e.captureSession()
          }
        },
        type: "history"
      })
    })()
  }
}
function je(e) {
  e._metadata = e._metadata || {}
  e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [{
      name: "npm:@sentry/react",
      version: "6.12.0"
    }],
    version: "6.12.0"
  }
  Me(e)
}
export { je as "1184__part-7__je" }
