/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-6
 */

"use strict"

import { "72__part-0__i" as i, "72__part-0__a" as a, "72__part-0__u" as u, "72__part-0__f" as f } from "./index__part-0"
import { "72__part-3__z" as z, "72__part-3__B" as B } from "./index__part-3"
import { "72__part-4__ve" as ve } from "./index__part-4"
import { "72__part-5__Oe" as Oe } from "./index__part-5"
import * as k from "./50"
import * as E from "./25"
import * as _ from "./14"
import * as b from "./8"
import * as g from "./32"
import * as we from "./40"
var Se = function () {
  function e(t) {
    this.name = e.id
    this._options = u({
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
      g.b().addBreadcrumb({
        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
        event_id: e.event_id,
        level: e.level,
        message: _.d(e)
      }, {
        event: e
      })
    }
  }
  e.prototype.setupOnce = function () {
    var e = this
    if (this._options.console) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._consoleBreadcrumb.apply(e, f(t))
        },
        type: "console"
      })
    }
    if (this._options.dom) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._domBreadcrumb.apply(e, f(t))
        },
        type: "dom"
      })
    }
    if (this._options.xhr) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._xhrBreadcrumb.apply(e, f(t))
        },
        type: "xhr"
      })
    }
    if (this._options.fetch) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._fetchBreadcrumb.apply(e, f(t))
        },
        type: "fetch"
      })
    }
    if (this._options.history) {
      k.a({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._historyBreadcrumb.apply(e, f(t))
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
      level: B.fromString(e.level),
      message: E.b(e.args, " ")
    }
    if ("assert" === e.level) {
      if (false !== e.args[0]) {
        return
      }
      t.message = "Assertion failed: " + (E.b(e.args.slice(1), " ") || "console.assert")
      t.data.arguments = e.args.slice(1)
    }
    g.b().addBreadcrumb(t, {
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
      t = e.event.target ? we.a(e.event.target, n) : we.a(e.event, n)
    } catch (r) {
      t = "<unknown>"
    }
    if (0 !== t.length) {
      g.b().addBreadcrumb({
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
      g.b().addBreadcrumb({
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
          g.b().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: B.Error,
            type: "http"
          }, {
            data: e.error,
            input: e.args
          })
        } else {
          g.b().addBreadcrumb({
            category: "fetch",
            data: u(u({}, e.fetchData), {
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
    var t = _.e()
    var /* [auto-meaningful-name] */e$from = e.from
    var r = e.to
    var i = _.h(t.location.href)
    var o = _.h(e$from)
    var a = _.h(r)
    if (!o.path) {
      o = i
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      e$from = o.relative
    }
    g.b().addBreadcrumb({
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
var ke = function (e) {
  function t(t) {
    if (undefined === t) {
      t = {}
    }
    t._metadata = t._metadata || {}
    t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: "npm:@sentry/browser",
        version: i
      }],
      version: i
    }
    return e.call(this, ve, t) || this
  }
  a(t, e)
  t.prototype.showReportDialog = function (e) {
    if (undefined === e) {
      e = {}
    }
    if (_.e().document) {
      if (this._isEnabled()) {
        Oe(u(u({}, e), {
          dsn: e.dsn || this.getDsn()
        }))
      } else {
        b.a.error("Trying to call showReportDialog with Sentry Client disabled")
      }
    }
  }
  t.prototype._prepareEvent = function (t, n, r) {
    t.platform = t.platform || "javascript"
    return e.prototype._prepareEvent.call(this, t, n, r)
  }
  t.prototype._sendEvent = function (t) {
    var n = this.getIntegration(Se)
    if (n) {
      n.addSentryBreadcrumb(t)
    }
    e.prototype._sendEvent.call(this, t)
  }
  return t
}(z)
export { Se as "72__part-6__Se" }
export { ke as "72__part-6__ke" }
