/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-6
 */

"use strict"

import { a, s, u } from "./index__part-0"
import { d, g } from "./index__part-1"
import { N } from "./index__part-3"
import { L } from "./index__part-4"
import { G, X, Q, Z, ee, te, ne, re, ie, ae } from "./index__part-5"
import * as /* [auto-meaningful-name] */Module_305 from /* 305 */"./305/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"./39"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
import * as /* [auto-meaningful-name] */Module_77 from /* 77 */"./77"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"./23"
import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"./127"
import * as /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
var ce = "?"
function le(e, t, n, r) {
  var i = {
    filename: e,
    function: t,
    in_app: true
  }
  if (undefined !== n) {
    i.lineno = n
  }
  if (undefined !== r) {
    i.colno = r
  }
  return i
}
var fe = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
var pe = /\((\S*)(?::(\d+))(?::(\d+))\)/
var de = [
  30, function (e) {
    var t = fe.exec(e)
    if (t) {
      if (t[2] && 0 === t[2].indexOf("eval")) {
        var n = pe.exec(t[2])
        if (n) {
          t[2] = n[1]
          t[3] = n[2]
          t[4] = n[3]
        }
      }
      var r = u(ke(t[1] || ce, t[2]), 2)
      var i = r[0]
      return le(r[1], i, t[3] ? +t[3] : undefined, t[4] ? +t[4] : undefined)
    }
  }
]
var he = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
var ge = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
var me = [
  50, function (e) {
    var t
    var n = he.exec(e)
    if (n) {
      if (n[3] && n[3].indexOf(" > eval") > -1) {
        var r = ge.exec(n[3])
        if (r) {
          n[1] = n[1] || "eval"
          n[3] = r[1]
          n[4] = r[2]
          n[5] = ""
        }
      }
      var i = n[3]
      var o = n[1] || ce
      o = (t = u(ke(o, i), 2))[0]
      return le(i = t[1], o, n[4] ? +n[4] : undefined, n[5] ? +n[5] : undefined)
    }
  }
]
var ve = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
var ye = [
  40, function (e) {
    var t = ve.exec(e)
    return t ? le(t[2], t[1] || ce, +t[3], t[4] ? +t[4] : undefined) : undefined
  }
]
var _e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i
var be = [
  10, function (e) {
    var t = _e.exec(e)
    return t ? le(t[2], t[3] || ce, +t[1]) : undefined
  }
]
var we = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i
var Se = [
  20, function (e) {
    var t = we.exec(e)
    return t ? le(t[5], t[3] || t[4] || ce, +t[1], +t[2]) : undefined
  }
]
var ke = function (e, t) {
  var n = -1 !== e.indexOf("safari-extension")
  var r = -1 !== e.indexOf("safari-web-extension")
  return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : ce, n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
}
function Oe(e) {
  var t = Te(e)
  var n = {
    type: e && e.name,
    value: je(e)
  }
  if (t.length) {
    n.stacktrace = {
      frames: t
    }
  }
  if (undefined === n.type && "" === n.value) {
    n.value = "Unrecoverable error caught"
  }
  return n
}
function Ee(e) {
  return {
    exception: {
      values: [Oe(e)]
    }
  }
}
function Te(e) {
  var t = e.stacktrace || e.stack || ""
  var n = function (e) {
    if (e) {
      if ("number" === typeof e.framesToPop) {
        return e.framesToPop
      }
      if (xe.test(e.message)) {
        return 1
      }
    }
    return 0
  }(e)
  try {
    return Module_88.a(be, Se, de, ye, me)(t, n)
  } catch (r) {}
  return []
}
var xe = /Minified React error #\d+;/i
function je(e) {
  var t = e && e.message
  return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
}
function Pe(e, t, n, r) {
  var i
  if (Module_11.e(e) && e.error) {
    return Ee(e.error)
  }
  if (Module_11.a(e) || Module_11.b(e)) {
    var o = e
    if ("stack" in e) {
      i = Ee(e)
    } else {
      var a = o.name || (Module_11.a(o) ? "DOMError" : "DOMException")
      var u = o.message ? a + ": " + o.message : a
      i = Ce(u, t, n)
      Module_76.b(i, u)
    }
    if ("code" in o) {
      i.tags = s(s({}, i.tags), {
        "DOMException.code": "" + o.code
      })
    }
    return i
  }
  return Module_11.d(e) ? Ee(e) : Module_11.i(e) || Module_11.f(e) ? (i = function (e, t, n) {
    var r = {
      exception: {
        values: [
          {
            type: Module_11.f(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Module_23.d(e)
          }
        ]
      },
      extra: {
        __serialized__: Module_305.b(e)
      }
    }
    if (t) {
      var i = Te(t)
      if (i.length) {
        r.stacktrace = {
          frames: i
        }
      }
    }
    return r
  }(e, t, r), Module_76.a(i, {
    synthetic: true
  }), i) : (i = Ce(e, t, n), Module_76.b(i, "" + e, undefined), Module_76.a(i, {
    synthetic: true
  }), i)
}
function Ce(e, t, n) {
  var r = {
    message: e
  }
  if (n && t) {
    var i = Te(t)
    if (i.length) {
      r.stacktrace = {
        frames: i
      }
    }
  }
  return r
}
function Ie(e) {
  var t = []
  function n(e) {
    return t.splice(t.indexOf(e), 1)[0]
  }
  return {
    $: t,
    add: function (r) {
      if (!(undefined === e || t.length < e)) {
        return Module_77.b(new N("Not adding Promise due to buffer limit reached."))
      }
      var i = r()
      if (-1 === t.indexOf(i)) {
        t.push(i)
      }
      i.then(function () {
        return n(i)
      }).then(null, function () {
        return n(i).then(null, function () {})
      })
      return i
    },
    drain: function (e) {
      return new Module_77.a(function (n, r) {
        var /* [auto-meaningful-name] */t$length = t.length
        if (!t$length) {
          return n(true)
        }
        var o = setTimeout(function () {
          if (e && e > 0) {
            n(false)
          }
        }, e)
        t.forEach(function (e) {
          Module_77.c(e).then(function () {
            if (! --t$length) {
              clearTimeout(o)
              n(true)
            }
          }, r)
        })
      })
    }
  }
}
function Ne(e, t) {
  return e[t] || e.all || 0
}
function Ae(e, t, n) {
  if (undefined === n) {
    n = Date.now()
  }
  return Ne(e, t) > n
}
function Re(e, t, n) {
  var r
  var /* [auto-meaningful-name] */l$return
  var o
  var /* [auto-meaningful-name] */g$return
  if (undefined === n) {
    n = Date.now()
  }
  var s = Module_5.a({}, e)
  var u = t["x-sentry-rate-limits"]
  var c = t["retry-after"]
  if (u) {
    try {
      for (var l = Module_5.e(u.trim().split(",")), f = l.next(); !f.done; f = l.next()) {
        var p = f.value.split(":", 2)
        var d = parseInt(p[0], 10)
        var h = 1e3 * (isNaN(d) ? 60 : d)
        if (p[1]) {
          try {
            for (o = undefined, g = Module_5.e(p[1].split(";")), m = g.next(), undefined; !m.done; m = g.next()) {
              var g
              var m
              s[m.value] = n + h
            }
          } catch (v) {
            o = {
              error: v
            }
          } finally {
            try {
              if (m && !m.done && (g$return = g.return)) {
                g$return.call(g)
              }
            } finally {
              if (o) {
                throw o.error
              }
            }
          }
        } else {
          s.all = n + h
        }
      }
    } catch (y) {
      r = {
        error: y
      }
    } finally {
      try {
        if (f && !f.done && (l$return = l.return)) {
          l$return.call(l)
        }
      } finally {
        if (r) {
          throw r.error
        }
      }
    }
  } else if (c) {
    s.all = n + function (e, t) {
      if (undefined === t) {
        t = Date.now()
      }
      var n = parseInt("" + e, 10)
      if (!isNaN(n)) {
        return 1e3 * n
      }
      var r = Date.parse("" + e)
      return isNaN(r) ? 6e4 : r - t
    }(c, n)
  }
  return s
}
function Le(e) {
  return e >= 200 && e < 300 ? "success" : 429 === e ? "rate_limit" : e >= 400 && e < 500 ? "invalid" : e >= 500 ? "failed" : "unknown"
}
function De(e, t, n) {
  if (undefined === n) {
    n = Ie(e.bufferSize || 30)
  }
  var r = {}
  return {
    send: function (e) {
      var i = function (e) {
        var t = Module_5.c(e, 2)
        var n = Module_5.c(t[1], 1)
        return Module_5.c(n[0], 1)[0].type
      }(e)
      var o = "event" === i ? "error" : i
      var a = {
        category: o,
        body: ee(e)
      }
      return Ae(r, o) ? Module_77.b({
        status: "rate_limit",
        reason: Me(r, o)
      }) : n.add(function () {
        return t(a).then(function (e) {
          var /* [auto-meaningful-name] */e$body = e.body
          var /* [auto-meaningful-name] */e$headers = e.headers
          var /* [auto-meaningful-name] */e$reason = e.reason
          var a = Le(e.statusCode)
          if (e$headers) {
            r = Re(r, e$headers)
          }
          return "success" === a ? Module_77.c({
            status: a,
            reason: e$reason
          }) : Module_77.b({
            status: a,
            reason: e$reason || e$body || ("rate_limit" === a ? Me(r, o) : "Unknown transport error")
          })
        })
      })
    },
    flush: function (e) {
      return n.drain(e)
    }
  }
}
function Me(e, t) {
  return "Too many " + t + " requests, backing off until: " + new Date(Ne(e, t)).toISOString()
}
var Ue
var Be = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
var He = Module_22.a()
function Fe() {
  if (Ue) {
    return Ue
  }
  if (Module_127.a(He.fetch)) {
    return Ue = He.fetch.bind(He)
  }
  var /* [auto-meaningful-name] */He$document = He.document
  var /* [auto-meaningful-name] */He$fetch = He.fetch
  if (He$document && "function" === typeof He$document.createElement) {
    try {
      var n = He$document.createElement("iframe")
      n.hidden = true
      He$document.head.appendChild(n)
      var /* [auto-meaningful-name] */n$contentWindow = n.contentWindow
      if (n$contentWindow && n$contentWindow.fetch) {
        He$fetch = n$contentWindow.fetch
      }
      He$document.head.removeChild(n)
    } catch (i) {
      if (Be) {
        Module_12.c.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
      }
    }
  }
  return Ue = He$fetch.bind(He)
}
function $e(e, t) {
  if ("[object Navigator]" === Object.prototype.toString.call(He && He.navigator) && "function" === typeof He.navigator.sendBeacon) {
    return He.navigator.sendBeacon.bind(He.navigator)(e, t)
  }
  if (Module_127.b()) {
    var n = Fe()
    n(e, {
      body: t,
      method: "POST",
      credentials: "omit",
      keepalive: true
    }).then(null, function (e) {
      console.error(e)
    })
  } else {
    ;
  }
}
function ze(e) {
  return "event" === e ? "error" : e
}
var qe = Module_22.a()
var Ve = function () {
  function e(e) {
    var t = this
    this.options = e
    this._buffer = Ie(30)
    this._rateLimits = {}
    this._outcomes = {}
    this._api = G(e.dsn, e._metadata, e.tunnel)
    this.url = X(this._api.dsn)
    if (this.options.sendClientReports && qe.document) {
      qe.document.addEventListener("visibilitychange", function () {
        if ("hidden" === qe.document.visibilityState) {
          t._flushOutcomes()
        }
      })
    }
  }
  e.prototype.sendEvent = function (e) {
    return this._sendRequest(function (e, t) {
      var n
      var r = te(t)
      var i = e.type || "event"
      var o = "transaction" === i || !!t.tunnel
      var a = (e.sdkProcessingMetadata || {}).transactionSampling || {}
      var /* [auto-meaningful-name] */a$method = a.method
      var /* [auto-meaningful-name] */a$rate = a.rate
      ne(e, t.metadata.sdk)
      e.tags = e.tags || {}
      e.extra = e.extra || {}
      if (!(e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized)) {
        e.tags.skippedNormalization = true
        e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"
      }
      delete e.sdkProcessingMetadata
      try {
        n = JSON.stringify(e)
      } catch (p) {
        e.tags.JSONStringifyError = true
        e.extra.JSONStringifyError = p
        try {
          n = JSON.stringify(Module_305.a(e))
        } catch (h) {
          var c = h
          n = JSON.stringify({
            message: "JSON.stringify error after renormalization",
            extra: {
              message: c.message,
              stack: c.stack
            }
          })
        }
      }
      var l = {
        body: n,
        type: i,
        url: o ? Q(t.dsn, t.tunnel) : X(t.dsn)
      }
      if (o) {
        var f = Z(d(d({
          event_id: e.event_id,
          sent_at: new Date().toISOString()
        }, r && {
          sdk: r
        }), !!t.tunnel && {
          dsn: L(t.dsn)
        }), [
          [
            {
              type: i,
              sample_rates: [
                {
                  id: a$method,
                  rate: a$rate
                }
              ]
            }, l.body
          ]
        ])
        l.body = ee(f)
      }
      return l
    }(e, this._api), e)
  }
  e.prototype.sendSession = function (e) {
    return this._sendRequest(function (e, t) {
      var n = g(re(e, t), 2)
      var r = n[0]
      var i = n[1]
      return {
        body: ee(r),
        type: i,
        url: Q(t.dsn, t.tunnel)
      }
    }(e, this._api), e)
  }
  e.prototype.close = function (e) {
    return this._buffer.drain(e)
  }
  e.prototype.recordLostEvent = function (e, t) {
    var n
    if (this.options.sendClientReports) {
      var r = ze(t) + ":" + e
      if (Be) {
        Module_12.c.log("Adding outcome: " + r)
      }
      this._outcomes[r] = (null !== (n = this._outcomes[r]) && undefined !== n ? n : 0) + 1
    }
  }
  e.prototype._flushOutcomes = function () {
    if (this.options.sendClientReports) {
      var /* [auto-meaningful-name] */this$_outcomes = this._outcomes
      this._outcomes = {}
      if (Object.keys(this$_outcomes).length) {
        if (Be) {
          Module_12.c.log("Flushing outcomes:\n" + JSON.stringify(this$_outcomes, null, 2))
        }
        var t
        var n
        var r
        var i = Q(this._api.dsn, this._api.tunnel)
        var o = Object.keys(this$_outcomes).map(function (t) {
          var n = u(t.split(":"), 2)
          var r = n[0]
          return {
            reason: n[1],
            category: r,
            quantity: this$_outcomes[t]
          }
        })
        t = o
        var a = Z((n = this._api.tunnel && L(this._api.dsn)) ? {
          dsn: n
        } : {}, [
          [
            {
              type: "client_report"
            }, {
              timestamp: r || Module_39.b(),
              discarded_events: t
            }
          ]
        ])
        try {
          $e(i, ee(a))
        } catch (s) {
          if (Be) {
            Module_12.c.error(s)
          }
        }
      } else if (Be) {
        Module_12.c.log("No outcomes to flush")
      }
    }
  }
  e.prototype._handleResponse = function (e) {
    var /* [auto-meaningful-name] */e$requestType = e.requestType
    var /* [auto-meaningful-name] */e$response = e.response
    var /* [auto-meaningful-name] */e$headers = e.headers
    var /* [auto-meaningful-name] */e$resolve = e.resolve
    var /* [auto-meaningful-name] */e$reject = e.reject
    var a = Le(e$response.status)
    this._rateLimits = Re(this._rateLimits, e$headers)
    if (this._isRateLimited(e$requestType) && Be) {
      Module_12.c.warn("Too many " + e$requestType + " requests, backing off until: " + this._disabledUntil(e$requestType))
    }
    if ("success" !== a) {
      e$reject(e$response)
    } else {
      e$resolve({
        status: a
      })
    }
  }
  e.prototype._disabledUntil = function (e) {
    var t = ze(e)
    return new Date(Ne(this._rateLimits, t))
  }
  e.prototype._isRateLimited = function (e) {
    var t = ze(e)
    return Ae(this._rateLimits, t)
  }
  return e
}()
var Ge = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = Fe()
    }
    var r = e.call(this, t) || this
    r._fetch = n
    return r
  }
  a(t, e)
  t.prototype._sendRequest = function (e, t) {
    var n = this
    if (this._isRateLimited(e.type)) {
      this.recordLostEvent("ratelimit_backoff", e.type)
      return Promise.reject({
        event: t,
        type: e.type,
        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
        status: 429
      })
    }
    var r = {
      body: e.body,
      method: "POST",
      referrerPolicy: Module_127.e() ? "origin" : ""
    }
    if (undefined !== this.options.fetchParameters) {
      Object.assign(r, this.options.fetchParameters)
    }
    if (undefined !== this.options.headers) {
      r.headers = this.options.headers
    }
    return this._buffer.add(function () {
      return new Module_77.a(function (t, i) {
        n._fetch(e.url, r).then(function (r) {
          var o = {
            "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": r.headers.get("Retry-After")
          }
          n._handleResponse({
            requestType: e.type,
            response: r,
            headers: o,
            resolve: t,
            reject: i
          })
        }).catch(i)
      })
    }).then(undefined, function (t) {
      if (t instanceof N) {
        n.recordLostEvent("queue_overflow", e.type)
      } else {
        n.recordLostEvent("network_error", e.type)
      }
      throw t
    })
  }
  return t
}(Ve)
var We = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  a(t, e)
  t.prototype._sendRequest = function (e, t) {
    var n = this
    return this._isRateLimited(e.type) ? (this.recordLostEvent("ratelimit_backoff", e.type), Promise.reject({
      event: t,
      type: e.type,
      reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
      status: 429
    })) : this._buffer.add(function () {
      return new Module_77.a(function (t, r) {
        var i = new XMLHttpRequest()
        for (var o in i.onreadystatechange = function () {
          if (4 === i.readyState) {
            var o = {
              "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": i.getResponseHeader("Retry-After")
            }
            n._handleResponse({
              requestType: e.type,
              response: i,
              headers: o,
              resolve: t,
              reject: r
            })
          }
        }, i.open("POST", e.url), n.options.headers) if (Object.prototype.hasOwnProperty.call(n.options.headers, o)) {
          i.setRequestHeader(o, n.options.headers[o])
        }
        i.send(e.body)
      })
    }).then(undefined, function (t) {
      if (t instanceof N) {
        n.recordLostEvent("queue_overflow", e.type)
      } else {
        n.recordLostEvent("network_error", e.type)
      }
      throw t
    })
  }
  return t
}(Ve)
var Ke = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  a(t, e)
  t.prototype.eventFromException = function (e, t) {
    return function (e, t, n) {
      var r = Pe(e, t && t.syntheticException || undefined, n)
      Module_76.a(r)
      r.level = ie.Error
      if (t && t.event_id) {
        r.event_id = t.event_id
      }
      return Module_77.c(r)
    }(e, t, this._options.attachStacktrace)
  }
  t.prototype.eventFromMessage = function (e, t, n) {
    if (undefined === t) {
      t = ie.Info
    }
    return function (e, t, n, r) {
      if (undefined === t) {
        t = ie.Info
      }
      var i = Ce(e, n && n.syntheticException || undefined, r)
      i.level = t
      if (n && n.event_id) {
        i.event_id = n.event_id
      }
      return Module_77.c(i)
    }(e, t, n, this._options.attachStacktrace)
  }
  t.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      return e.prototype._setupTransport.call(this)
    }
    var t
    var n
    var r = s(s({}, this._options.transportOptions), {
      dsn: this._options.dsn,
      tunnel: this._options.tunnel,
      sendClientReports: this._options.sendClientReports,
      _metadata: this._options._metadata
    })
    var i = G(r.dsn, r._metadata, r.tunnel)
    var o = Q(i.dsn, i.tunnel)
    if (this._options.transport) {
      return new this._options.transport(r)
    }
    if (Module_127.b()) {
      var a = s({}, r.fetchParameters)
      this._newTransport = (t = {
        requestOptions: a,
        url: o
      }, undefined === n && (n = Fe()), De({
        bufferSize: t.bufferSize
      }, function (e) {
        var r = s({
          body: e.body,
          method: "POST",
          referrerPolicy: "origin"
        }, t.requestOptions)
        return n(t.url, r).then(function (e) {
          return e.text().then(function (t) {
            return {
              body: t,
              headers: {
                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": e.headers.get("Retry-After")
              },
              reason: e.statusText,
              statusCode: e.status
            }
          })
        })
      }))
      return new Ge(r)
    }
    this._newTransport = function (e) {
      return De({
        bufferSize: e.bufferSize
      }, function (t) {
        return new Module_77.a(function (n, r) {
          var i = new XMLHttpRequest()
          for (var o in i.onreadystatechange = function () {
            if (4 === i.readyState) {
              var e = {
                body: i.response,
                headers: {
                  "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                  "retry-after": i.getResponseHeader("Retry-After")
                },
                reason: i.statusText,
                statusCode: i.status
              }
              n(e)
            }
          }, i.open("POST", e.url), e.headers) if (Object.prototype.hasOwnProperty.call(e.headers, o)) {
            i.setRequestHeader(o, e.headers[o])
          }
          i.send(t.body)
        })
      })
    }({
      url: o,
      headers: r.headers
    })
    return new We(r)
  }
  return t
}(ae)
export { Oe }
export { Pe }
export { Be }
export { Ke }
