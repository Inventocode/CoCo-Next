/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-6
 */

"use strict"

import { i, a, u, f } from "./index__part-0"
import { z, B } from "./index__part-3"
import { ve } from "./index__part-4"
import { Oe } from "./index__part-5"
import * as /* [auto-meaningful-name] */$$_49_50 from "../49/50"
import * as /* [auto-meaningful-name] */$$_49_25 from "../49/25"
import * as /* [auto-meaningful-name] */$$_49_14 from "../49/14"
import * as /* [auto-meaningful-name] */$$_49_8 from "../49/8"
import * as /* [auto-meaningful-name] */$$_16_32 from "../16/32"
import * as /* [auto-meaningful-name] */$$_49_40 from "../49/40"
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
      $$_16_32.b().addBreadcrumb({
        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
        event_id: e.event_id,
        level: e.level,
        message: $$_49_14.d(e)
      }, {
        event: e
      })
    }
  }
  e.prototype.setupOnce = function () {
    var e = this
    if (this._options.console) {
      $$_49_50.a({
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
      $$_49_50.a({
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
      $$_49_50.a({
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
      $$_49_50.a({
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
      $$_49_50.a({
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
      message: $$_49_25.b(e.args, " ")
    }
    if ("assert" === e.level) {
      if (false !== e.args[0]) {
        return
      }
      t.message = "Assertion failed: " + ($$_49_25.b(e.args.slice(1), " ") || "console.assert")
      t.data.arguments = e.args.slice(1)
    }
    $$_16_32.b().addBreadcrumb(t, {
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
      t = e.event.target ? $$_49_40.a(e.event.target, n) : $$_49_40.a(e.event, n)
    } catch (r) {
      t = "<unknown>"
    }
    if (0 !== t.length) {
      $$_16_32.b().addBreadcrumb({
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
      $$_16_32.b().addBreadcrumb({
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
          $$_16_32.b().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: B.Error,
            type: "http"
          }, {
            data: e.error,
            input: e.args
          })
        } else {
          $$_16_32.b().addBreadcrumb({
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
    var t = $$_49_14.e()
    var /* [auto-meaningful-name] */e$from = e.from
    var r = e.to
    var i = $$_49_14.h(t.location.href)
    var o = $$_49_14.h(e$from)
    var a = $$_49_14.h(r)
    if (!o.path) {
      o = i
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      e$from = o.relative
    }
    $$_16_32.b().addBreadcrumb({
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
      packages: [
        {
          name: "npm:@sentry/browser",
          version: i
        }
      ],
      version: i
    }
    return e.call(this, ve, t) || this
  }
  a(t, e)
  t.prototype.showReportDialog = function (e) {
    if (undefined === e) {
      e = {}
    }
    if ($$_49_14.e().document) {
      if (this._isEnabled()) {
        Oe(u(u({}, e), {
          dsn: e.dsn || this.getDsn()
        }))
      } else {
        $$_49_8.a.error("Trying to call showReportDialog with Sentry Client disabled")
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
export { Se }
export { ke }
