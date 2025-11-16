/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-4
 */

"use strict"

import { "72__part-0__a" as a, "72__part-0__u" as u, "72__part-0__l" as l, "72__part-0__p" as p, "72__part-0__v" as v } from "./index__part-0"
import { "72__part-2__C" as C, "72__part-2__N" as N } from "./index__part-2"
import { "72__part-3__U" as U, "72__part-3__B" as B, "72__part-3__q" as q } from "./index__part-3"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as I from "./9"
import * as S from "./33"
import * as _ from "./14"
import * as b from "./8"
import * as H from "./41"
var V = "?"
var W = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
var $ = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
var Y = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
var X = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
var Q = /\((\S*)(?::(\d+))(?::(\d+))\)/
var K = /Minified React error #\d+;/i
function J(e) {
  var t = null
  var n = 0
  if (e) {
    if ("number" === typeof e.framesToPop) {
      n = e.framesToPop
    } else {
      if (K.test(e.message)) {
        n = 1
      }
    }
  }
  try {
    if (t = function (e) {
      if (!e || !e.stacktrace) {
        return null
      }
      for (var t, /* [auto-meaningful-name] */e$stacktrace = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = e$stacktrace.split("\n"), a = [], s = 0; s < o.length; s += 2) {
        var u = null
        if (t = r.exec(o[s])) {
          u = {
            url: t[2],
            func: t[3],
            args: [],
            line: +t[1],
            column: null
          }
        } else {
          if (t = i.exec(o[s])) {
            u = {
              url: t[6],
              func: t[3] || t[4],
              args: t[5] ? t[5].split(",") : [],
              line: +t[1],
              column: +t[2]
            }
          }
        }
        if (u) {
          if (!u.func && u.line) {
            u.func = V
          }
          a.push(u)
        }
      }
      if (!a.length) {
        return null
      }
      return {
        message: ee(e),
        name: e.name,
        stack: a
      }
    }(e)) {
      return Z(t, n)
    }
  } catch (r) {}
  try {
    if (t = function (e) {
      if (!e || !e.stack) {
        return null
      }
      for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
        if (n = W.exec(o[a])) {
          var s = n[2] && 0 === n[2].indexOf("native")
          if (n[2] && 0 === n[2].indexOf("eval") && (t = Q.exec(n[2]))) {
            n[2] = t[1]
            n[3] = t[2]
            n[4] = t[3]
          }
          var u = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2]
          var l = n[1] || V
          var c = -1 !== l.indexOf("safari-extension")
          var f = -1 !== l.indexOf("safari-web-extension")
          if (c || f) {
            l = -1 !== l.indexOf("@") ? l.split("@")[0] : V
            u = c ? "safari-extension:" + u : "safari-web-extension:" + u
          }
          r = {
            url: u,
            func: l,
            args: s ? [n[2]] : [],
            line: n[3] ? +n[3] : null,
            column: n[4] ? +n[4] : null
          }
        } else if (n = Y.exec(o[a])) {
          r = {
            url: n[2],
            func: n[1] || V,
            args: [],
            line: +n[3],
            column: n[4] ? +n[4] : null
          }
        } else {
          if (!(n = $.exec(o[a]))) {
            continue
          }
          if (n[3] && n[3].indexOf(" > eval") > -1 && (t = X.exec(n[3]))) {
            n[1] = n[1] || "eval"
            n[3] = t[1]
            n[4] = t[2]
            n[5] = ""
          } else {
            if (!(0 !== a || n[5] || undefined === e.columnNumber)) {
              i[0].column = e.columnNumber + 1
            }
          }
          r = {
            url: n[3],
            func: n[1] || V,
            args: n[2] ? n[2].split(",") : [],
            line: n[4] ? +n[4] : null,
            column: n[5] ? +n[5] : null
          }
        }
        if (!r.func && r.line) {
          r.func = V
        }
        i.push(r)
      }
      if (!i.length) {
        return null
      }
      return {
        message: ee(e),
        name: e.name,
        stack: i
      }
    }(e)) {
      return Z(t, n)
    }
  } catch (r) {}
  return {
    message: ee(e),
    name: e && e.name,
    stack: [],
    failed: true
  }
}
function Z(e, t) {
  try {
    return u(u({}, e), {
      stack: e.stack.slice(t)
    })
  } catch (n) {
    return e
  }
}
function ee(e) {
  var t = e && e.message
  return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
}
function te(e) {
  var t = re(e.stack)
  var n = {
    type: e.name,
    value: e.message
  }
  if (t && t.length) {
    n.stacktrace = {
      frames: t
    }
  }
  if (undefined === n.type && "" === n.value) {
    n.value = "Unrecoverable error caught"
  }
  return n
}
function ne(e) {
  return {
    exception: {
      values: [te(e)]
    }
  }
}
function re(e) {
  if (!e || !e.length) {
    return []
  }
  var t = e
  var n = t[0].func || ""
  var r = t[t.length - 1].func || ""
  if (!(-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException"))) {
    t = t.slice(1)
  }
  if (-1 !== r.indexOf("sentryWrapped")) {
    t = t.slice(0, -1)
  }
  return t.slice(0, 50).map(function (e) {
    return {
      colno: null === e.column ? undefined : e.column,
      filename: e.url || t[0].url,
      function: e.func || "?",
      in_app: true,
      lineno: null === e.line ? undefined : e.line
    }
  }).reverse()
}
function ie(e, t, n) {
  var r
  if (undefined === n) {
    n = {}
  }
  if (I.e(e) && e.error) {
    return r = ne(J(e = e.error))
  }
  if (I.a(e) || I.b(e)) {
    var i = e
    var o = i.name || (I.a(i) ? "DOMError" : "DOMException")
    var a = i.message ? o + ": " + i.message : o
    r = oe(a, t, n)
    _.b(r, a)
    if ("code" in i) {
      r.tags = u(u({}, r.tags), {
        "DOMException.code": "" + i.code
      })
    }
    return r
  }
  return I.d(e) ? r = ne(J(e)) : I.h(e) || I.f(e) ? (r = function (e, t, n) {
    var r = {
      exception: {
        values: [{
          type: I.f(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
          value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + $_17_index.b(e)
        }]
      },
      extra: {
        __serialized__: $_17_index.e(e)
      }
    }
    if (t) {
      var i = re(J(t).stack)
      r.stacktrace = {
        frames: i
      }
    }
    return r
  }(e, t, n.rejection), _.a(r, {
    synthetic: true
  }), r) : (r = oe(e, t, n), _.b(r, "" + e, undefined), _.a(r, {
    synthetic: true
  }), r)
}
function oe(e, t, n) {
  if (undefined === n) {
    n = {}
  }
  var r = {
    message: e
  }
  if (n.attachStacktrace && t) {
    var i = re(J(t).stack)
    r.stacktrace = {
      frames: i
    }
  }
  return r
}
function ae(e) {
  if (e.metadata && e.metadata.sdk) {
    var /* [auto-meaningful-name] */e$metadata$sdk = e.metadata.sdk
    return {
      name: e$metadata$sdk.name,
      version: e$metadata$sdk.version
    }
  }
}
function se(e, t) {
  return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = v(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = v(e.sdk.packages || [], t.packages || []), e) : e
}
function ue(e, t) {
  var n = ae(t)
  var r = "aggregates" in e ? "sessions" : "session"
  return {
    body: JSON.stringify(p(p({
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r
    }) + "\n" + JSON.stringify(e),
    type: r,
    url: t.getEnvelopeEndpointWithUrlEncodedAuth()
  }
}
function le(e, t) {
  var n = ae(t)
  var r = e.type || "event"
  var i = "transaction" === r || t.forceEnvelope()
  var o = e.debug_meta || {}
  var /* [auto-meaningful-name] */o$transactionSampling = o.transactionSampling
  var s = function (e, t) {
    var n = {}
    for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
      n[r] = e[r]
    }
    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]]
        }
      }
    }
    return n
  }(o, ["transactionSampling"])
  var u = o$transactionSampling || {}
  var /* [auto-meaningful-name] */u$method = u.method
  var /* [auto-meaningful-name] */u$rate = u.rate
  if (0 === Object.keys(s).length) {
    delete e.debug_meta
  } else {
    e.debug_meta = s
  }
  var f = {
    body: JSON.stringify(n ? se(e, t.metadata.sdk) : e),
    type: r,
    url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
  }
  if (i) {
    var d = JSON.stringify(p(p({
      event_id: e.event_id,
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r,
      sample_rates: [{
        id: u$method,
        rate: u$rate
      }]
    }) + "\n" + f.body
    f.body = d
  }
  return f
}
var ce = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = {}
    }
    this.dsn = e
    this._dsnObject = new N(e)
    this.metadata = t
    this._tunnel = n
  }
  e.prototype.getDsn = function () {
    return this._dsnObject
  }
  e.prototype.forceEnvelope = function () {
    return !!this._tunnel
  }
  e.prototype.getBaseApiEndpoint = function () {
    var e = this.getDsn()
    var t = e.protocol ? e.protocol + ":" : ""
    var n = e.port ? ":" + e.port : ""
    return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
  }
  e.prototype.getStoreEndpoint = function () {
    return this._getIngestEndpoint("store")
  }
  e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    return this.getStoreEndpoint() + "?" + this._encodedAuth()
  }
  e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
    return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
  }
  e.prototype.getStoreEndpointPath = function () {
    var e = this.getDsn()
    return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
  }
  e.prototype.getRequestHeaders = function (e, t) {
    var n = this.getDsn()
    var r = ["Sentry sentry_version=7"]
    r.push("sentry_client=" + e + "/" + t)
    r.push("sentry_key=" + n.publicKey)
    if (n.pass) {
      r.push("sentry_secret=" + n.pass)
    }
    return {
      "Content-Type": "application/json",
      "X-Sentry-Auth": r.join(", ")
    }
  }
  e.prototype.getReportDialogEndpoint = function (e) {
    if (undefined === e) {
      e = {}
    }
    var t = this.getDsn()
    var n = this.getBaseApiEndpoint() + "embed/error-page/"
    var r = []
    for (var i in r.push("dsn=" + t.toString()), e) if ("dsn" !== i) {
      if ("user" === i) {
        if (!e.user) {
          continue
        }
        if (e.user.name) {
          r.push("name=" + encodeURIComponent(e.user.name))
        }
        if (e.user.email) {
          r.push("email=" + encodeURIComponent(e.user.email))
        }
      } else {
        r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]))
      }
    }
    return r.length ? n + "?" + r.join("&") : n
  }
  e.prototype._getEnvelopeEndpoint = function () {
    return this._getIngestEndpoint("envelope")
  }
  e.prototype._getIngestEndpoint = function (e) {
    return this._tunnel ? this._tunnel : "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/"
  }
  e.prototype._encodedAuth = function () {
    var e = {
      sentry_key: this.getDsn().publicKey,
      sentry_version: "7"
    }
    return $_17_index.f(e)
  }
  return e
}()
var fe = function () {
  function e(e) {
    this._limit = e
    this._buffer = []
  }
  e.prototype.isReady = function () {
    return undefined === this._limit || this.length() < this._limit
  }
  e.prototype.add = function (e) {
    var t = this
    if (!this.isReady()) {
      return S.a.reject(new C("Not adding Promise due to buffer limit reached."))
    }
    var n = e()
    if (-1 === this._buffer.indexOf(n)) {
      this._buffer.push(n)
    }
    n.then(function () {
      return t.remove(n)
    }).then(null, function () {
      return t.remove(n).then(null, function () {})
    })
    return n
  }
  e.prototype.remove = function (e) {
    return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
  }
  e.prototype.length = function () {
    return this._buffer.length
  }
  e.prototype.drain = function (e) {
    var t = this
    return new S.a(function (n) {
      var r = setTimeout(function () {
        if (e && e > 0) {
          n(false)
        }
      }, e)
      S.a.all(t._buffer).then(function () {
        clearTimeout(r)
        n(true)
      }).then(null, function () {
        n(true)
      })
    })
  }
  return e
}()
var de = {
  event: "error",
  transaction: "transaction",
  session: "session",
  attachment: "attachment"
}
var pe = function () {
  function e(e) {
    this.options = e
    this._buffer = new fe(30)
    this._rateLimits = {}
    this._api = new ce(e.dsn, e._metadata, e.tunnel)
    this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
  }
  e.prototype.sendEvent = function (e) {
    throw new C("Transport Class has to implement `sendEvent` method")
  }
  e.prototype.close = function (e) {
    return this._buffer.drain(e)
  }
  e.prototype._handleResponse = function (e) {
    var /* [auto-meaningful-name] */e$requestType = e.requestType
    var /* [auto-meaningful-name] */e$response = e.response
    var /* [auto-meaningful-name] */e$headers = e.headers
    var /* [auto-meaningful-name] */e$resolve = e.resolve
    var /* [auto-meaningful-name] */e$reject = e.reject
    var a = U.fromHttpCode(e$response.status)
    if (this._handleRateLimit(e$headers)) {
      b.a.warn("Too many " + e$requestType + " requests, backing off until: " + this._disabledUntil(e$requestType))
    }
    if (a !== U.Success) {
      e$reject(e$response)
    } else {
      e$resolve({
        status: a
      })
    }
  }
  e.prototype._disabledUntil = function (e) {
    var t = de[e]
    return this._rateLimits[t] || this._rateLimits.all
  }
  e.prototype._isRateLimited = function (e) {
    return this._disabledUntil(e) > new Date(Date.now())
  }
  e.prototype._handleRateLimit = function (e) {
    var t
    var /* [auto-meaningful-name] */u$return
    var r
    var /* [auto-meaningful-name] */h$return
    var o = Date.now()
    var a = e["x-sentry-rate-limits"]
    var s = e["retry-after"]
    if (a) {
      try {
        for (var u = l(a.trim().split(",")), c = u.next(); !c.done; c = u.next()) {
          var f = c.value.split(":", 2)
          var d = parseInt(f[0], 10)
          var p = 1e3 * (isNaN(d) ? 60 : d)
          try {
            for (r = undefined, h = l(f[1].split(";")), m = h.next(), undefined; !m.done; m = h.next()) {
              var h
              var m
              var /* [auto-meaningful-name] */m$value = m.value
              this._rateLimits[m$value || "all"] = new Date(o + p)
            }
          } catch (y) {
            r = {
              error: y
            }
          } finally {
            try {
              if (m && !m.done && (h$return = h.return)) {
                h$return.call(h)
              }
            } finally {
              if (r) {
                throw r.error
              }
            }
          }
        }
      } catch (g) {
        t = {
          error: g
        }
      } finally {
        try {
          if (c && !c.done && (u$return = u.return)) {
            u$return.call(u)
          }
        } finally {
          if (t) {
            throw t.error
          }
        }
      }
      return true
    }
    return !!s && (this._rateLimits.all = new Date(o + _.g(o, s)), true)
  }
  return e
}()
var he = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = function () {
        var e
        var /* [auto-meaningful-name] */o$contentWindow
        var n = _.e()
        if (H.a(n.fetch)) {
          return n.fetch.bind(n)
        }
        var /* [auto-meaningful-name] */n$document = n.document
        var /* [auto-meaningful-name] */n$fetch = n.fetch
        if ("function" === typeof (null === (e = n$document) || undefined === e ? undefined : e.createElement)) {
          try {
            var o = n$document.createElement("iframe")
            o.hidden = true
            n$document.head.appendChild(o)
            if (null === (o$contentWindow = o.contentWindow) || undefined === o$contentWindow ? undefined : o$contentWindow.fetch) {
              n$fetch = o.contentWindow.fetch
            }
            n$document.head.removeChild(o)
          } catch (a) {
            b.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a)
          }
        }
        return n$fetch.bind(n)
      }()
    }
    var r = e.call(this, t) || this
    r._fetch = n
    return r
  }
  a(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(le(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(ue(e, this._api), e)
  }
  t.prototype._sendRequest = function (e, t) {
    var n = this
    if (this._isRateLimited(e.type)) {
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
      referrerPolicy: H.e() ? "origin" : ""
    }
    if (undefined !== this.options.fetchParameters) {
      Object.assign(r, this.options.fetchParameters)
    }
    if (undefined !== this.options.headers) {
      r.headers = this.options.headers
    }
    return this._buffer.add(function () {
      return new S.a(function (t, i) {
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
    })
  }
  return t
}(pe)
var me = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  a(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(le(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(ue(e, this._api), e)
  }
  t.prototype._sendRequest = function (e, t) {
    var n = this
    return this._isRateLimited(e.type) ? Promise.reject({
      event: t,
      type: e.type,
      reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
      status: 429
    }) : this._buffer.add(function () {
      return new S.a(function (t, r) {
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
        }, i.open("POST", e.url), n.options.headers) if (n.options.headers.hasOwnProperty(o)) {
          i.setRequestHeader(o, n.options.headers[o])
        }
        i.send(e.body)
      })
    })
  }
  return t
}(pe)
var ve = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  a(t, e)
  t.prototype.eventFromException = function (e, t) {
    return function (e, t, n) {
      var r = ie(t, n && n.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      _.a(r, {
        handled: true,
        type: "generic"
      })
      r.level = B.Error
      if (n && n.event_id) {
        r.event_id = n.event_id
      }
      return S.a.resolve(r)
    }(this._options, e, t)
  }
  t.prototype.eventFromMessage = function (e, t, n) {
    if (undefined === t) {
      t = B.Info
    }
    return function (e, t, n, r) {
      if (undefined === n) {
        n = B.Info
      }
      var i = oe(t, r && r.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      i.level = n
      if (r && r.event_id) {
        i.event_id = r.event_id
      }
      return S.a.resolve(i)
    }(this._options, e, t, n)
  }
  t.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      return e.prototype._setupTransport.call(this)
    }
    var t = u(u({}, this._options.transportOptions), {
      dsn: this._options.dsn,
      tunnel: this._options.tunnel,
      _metadata: this._options._metadata
    })
    return this._options.transport ? new this._options.transport(t) : H.b() ? new he(t) : new me(t)
  }
  return t
}(q)
export { J as "72__part-4__J" }
export { te as "72__part-4__te" }
export { ie as "72__part-4__ie" }
export { ce as "72__part-4__ce" }
export { ve as "72__part-4__ve" }
