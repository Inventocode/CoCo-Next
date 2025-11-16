/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-7
 */

"use strict"

import { "72__part-0__r" as r, "72__part-0__i" as i, "72__part-0__u" as u, "72__part-0__f" as f } from "./index__part-0"
import { "72__part-3__B" as B } from "./index__part-3"
import { "72__part-4__J" as J, "72__part-4__te" as te, "72__part-4__ie" as ie } from "./index__part-4"
import { "72__part-5__be" as be, "72__part-5__Ee" as Ee } from "./index__part-5"
import { "72__part-6__Se" as Se, "72__part-6__ke" as ke } from "./index__part-6"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as I from "./9"
import * as k from "./50"
import * as _ from "./14"
import * as b from "./8"
import * as g from "./32"
import * as /* [auto-meaningful-name] */$_36_index from "./36/index"
import * as Te from "./34"
var je = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
var xe = function () {
  function e(t) {
    this.name = e.id
    this._options = u({
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    var e = _.e()
    if (this._options.setTimeout) {
      $_17_index.c(e, "setTimeout", this._wrapTimeFunction.bind(this))
    }
    if (this._options.setInterval) {
      $_17_index.c(e, "setInterval", this._wrapTimeFunction.bind(this))
    }
    if (this._options.requestAnimationFrame) {
      $_17_index.c(e, "requestAnimationFrame", this._wrapRAF.bind(this))
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in e) {
      $_17_index.c(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this))
    }
    if (this._options.eventTarget) {
      (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : je).forEach(this._wrapEventTarget.bind(this))
    }
  }
  e.prototype._wrapTimeFunction = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      var r = t[0]
      t[0] = Ee(r, {
        mechanism: {
          data: {
            function: Te.a(e)
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
      return e.call(this, Ee(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: Te.a(e)
          },
          handled: true,
          type: "instrument"
        }
      }))
    }
  }
  e.prototype._wrapEventTarget = function (e) {
    var t = _.e()
    var n = t[e] && t[e].prototype
    if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
      $_17_index.c(n, "addEventListener", function (t) {
        return function (n, r, i) {
          try {
            if ("function" === typeof r.handleEvent) {
              r.handleEvent = Ee(r.handleEvent.bind(r), {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: Te.a(r),
                    target: e
                  },
                  handled: true,
                  type: "instrument"
                }
              })
            }
          } catch (o) {}
          return t.call(this, n, Ee(r, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: Te.a(r),
                target: e
              },
              handled: true,
              type: "instrument"
            }
          }), i)
        }
      })
      $_17_index.c(n, "removeEventListener", function (e) {
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
          $_17_index.c(r, e, function (t) {
            var n = {
              mechanism: {
                data: {
                  function: e,
                  handler: Te.a(t)
                },
                handled: true,
                type: "instrument"
              }
            }
            if (t.__sentry_original__) {
              n.mechanism.data.handler = Te.a(t.__sentry_original__)
            }
            return Ee(t, n)
          })
        }
      })
      return e.apply(this, t)
    }
  }
  e.id = "TryCatch"
  return e
}()
var Ce = function () {
  function e(t) {
    this.name = e.id
    this._onErrorHandlerInstalled = false
    this._onUnhandledRejectionHandlerInstalled = false
    this._options = u({
      onerror: true,
      onunhandledrejection: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50
    if (this._options.onerror) {
      b.a.log("Global Handler attached: onerror")
      this._installGlobalOnErrorHandler()
    }
    if (this._options.onunhandledrejection) {
      b.a.log("Global Handler attached: onunhandledrejection")
      this._installGlobalOnUnhandledRejectionHandler()
    }
  }
  e.prototype._installGlobalOnErrorHandler = function () {
    var t = this
    if (!this._onErrorHandlerInstalled) {
      k.a({
        callback: function (n) {
          var /* [auto-meaningful-name] */n$error = n.error
          var i = g.b()
          var o = i.getIntegration(e)
          var a = n$error && true === n$error.__sentry_own_request__
          if (o && !be() && !a) {
            var s = i.getClient()
            var u = undefined === n$error && I.k(n.msg) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(ie(n$error || n.msg, undefined, {
              attachStacktrace: s && s.getOptions().attachStacktrace,
              rejection: false
            }), n.url, n.line, n.column)
            _.a(u, {
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
      k.a({
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
          } catch (l) {}
          var i = g.b()
          var o = i.getIntegration(e)
          var a = r && true === r.__sentry_own_request__
          if (!o || be() || a) {
            return true
          }
          var s = i.getClient()
          var u = I.i(r) ? t._eventFromRejectionWithPrimitive(r) : ie(r, undefined, {
            attachStacktrace: s && s.getOptions().attachStacktrace,
            rejection: true
          })
          u.level = B.Error
          _.a(u, {
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
    var o = I.e(e) ? e.message : e
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
    var a = I.k(t) && t.length > 0 ? t : _.f()
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
var Re = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._key = t.key || "cause"
    this._limit = t.limit || 5
  }
  e.prototype.setupOnce = function () {
    $_36_index.b(function (t, n) {
      var r = g.b().getIntegration(e)
      if (r) {
        var i = r._handler && r._handler.bind(r)
        return "function" === typeof i ? i(t, n) : t
      }
      return t
    })
  }
  e.prototype._handler = function (e, t) {
    if (!e.exception || !e.exception.values || !t || !I.g(t.originalException, Error)) {
      return e
    }
    var n = this._walkErrorTree(t.originalException, this._key)
    e.exception.values = f(n, e.exception.values)
    return e
  }
  e.prototype._walkErrorTree = function (e, t, n) {
    if (undefined === n) {
      n = []
    }
    if (!I.g(e[t], Error) || n.length + 1 >= this._limit) {
      return n
    }
    var r = te(J(e[t]))
    return this._walkErrorTree(e[t], t, f([r], n))
  }
  e.id = "LinkedErrors"
  return e
}()
var Pe = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (t, n) {
    t(function (t) {
      var r = n().getIntegration(e)
      if (r) {
        try {
          if (r._shouldDropEvent(t, r._previousEvent)) {
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
var Ne = _.e()
var Ie = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_36_index.b(function (t) {
      var /* [auto-meaningful-name] */t$request
      var /* [auto-meaningful-name] */Ne$location
      var /* [auto-meaningful-name] */_t$request
      if (g.b().getIntegration(e)) {
        if (!Ne.navigator && !Ne.location && !Ne.document) {
          return t
        }
        var o = (null === (t$request = t.request) || undefined === t$request ? undefined : t$request.url) || (null === (Ne$location = Ne.location) || undefined === Ne$location ? undefined : Ne$location.href)
        var /* [auto-meaningful-name] */Ne$document$referrer = (Ne.document || {}).referrer
        var /* [auto-meaningful-name] */Ne$navigator$userAgent = (Ne.navigator || {}).userAgent
        var l = u(u(u({}, null === (_t$request = t.request) || undefined === _t$request ? undefined : _t$request.headers), Ne$document$referrer && {
          Referer: Ne$document$referrer
        }), Ne$navigator$userAgent && {
          "User-Agent": Ne$navigator$userAgent
        })
        var c = u(u({}, o && {
          url: o
        }), {
          headers: l
        })
        return u(u({}, t), {
          request: c
        })
      }
      return t
    })
  }
  e.id = "UserAgent"
  return e
}()
var Le = [new r.InboundFilters(), new r.FunctionToString(), new xe(), new Se(), new Ce(), new Re(), new Pe(), new Ie()]
function Ae(e) {
  if (undefined === e) {
    e = {}
  }
  if (undefined === e.defaultIntegrations) {
    e.defaultIntegrations = Le
  }
  if (undefined === e.release) {
    var t = _.e()
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
      b.a.enable()
    }
    var r = g.b()
    if (!(null === (n = r.getScope()) || undefined === n)) {
      n.update(t.initialScope)
    }
    var i = new e(t)
    r.bindClient(i)
  })(ke, e)
  if (e.autoSessionTracking) {
    (function () {
      if ("undefined" === typeof _.e().document) {
        return void b.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
      }
      var e = g.b()
      if ("function" !== typeof e.startSession || "function" !== typeof e.captureSession) {
        return
      }
      e.startSession({
        ignoreDuration: true
      })
      e.captureSession()
      k.a({
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
function De(e) {
  e._metadata = e._metadata || {}
  e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [{
      name: "npm:@sentry/react",
      version: i
    }],
    version: i
  }
  Ae(e)
}
export { De as "72__part-7__De" }
