/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：50
 */

"use strict"

export { s as b }
export { u as a }
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"../3"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"../../307/76"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../307/39"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"../../307/23"
var s = function () {
  function e(e) {
    if (undefined === e) {
      e = 1e3
    }
    this.spans = []
    this._maxlen = e
  }
  e.prototype.add = function (e) {
    if (this.spans.length > this._maxlen) {
      e.spanRecorder = undefined
    } else {
      this.spans.push(e)
    }
  }
  return e
}()
var u = function () {
  function e(e) {
    this.traceId = Module_76.f()
    this.spanId = Module_76.f().substring(16)
    this.startTimestamp = Module_39.d()
    this.tags = {}
    this.data = {}
    if (!e) {
      return this
    }
    if (e.traceId) {
      this.traceId = e.traceId
    }
    if (e.spanId) {
      this.spanId = e.spanId
    }
    if (e.parentSpanId) {
      this.parentSpanId = e.parentSpanId
    }
    if ("sampled" in e) {
      this.sampled = e.sampled
    }
    if (e.op) {
      this.op = e.op
    }
    if (e.description) {
      this.description = e.description
    }
    if (e.data) {
      this.data = e.data
    }
    if (e.tags) {
      this.tags = e.tags
    }
    if (e.status) {
      this.status = e.status
    }
    if (e.startTimestamp) {
      this.startTimestamp = e.startTimestamp
    }
    if (e.endTimestamp) {
      this.endTimestamp = e.endTimestamp
    }
  }
  e.prototype.child = function (e) {
    return this.startChild(e)
  }
  e.prototype.startChild = function (t) {
    var n = new e(Module_3.a(Module_3.a({}, t), {
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId
    }))
    n.spanRecorder = this.spanRecorder
    if (n.spanRecorder) {
      n.spanRecorder.add(n)
    }
    n.transaction = this.transaction
    return n
  }
  e.prototype.setTag = function (e, t) {
    var n
    this.tags = Module_3.a(Module_3.a({}, this.tags), ((n = {})[e] = t, n))
    return this
  }
  e.prototype.setData = function (e, t) {
    var n
    this.data = Module_3.a(Module_3.a({}, this.data), ((n = {})[e] = t, n))
    return this
  }
  e.prototype.setStatus = function (e) {
    this.status = e
    return this
  }
  e.prototype.setHttpStatus = function (e) {
    this.setTag("http.status_code", String(e))
    var t = function (e) {
      if (e < 400 && e >= 100) {
        return "ok"
      }
      if (e >= 400 && e < 500) {
        switch (e) {
          case 401:
            return "unauthenticated"
          case 403:
            return "permission_denied"
          case 404:
            return "not_found"
          case 409:
            return "already_exists"
          case 413:
            return "failed_precondition"
          case 429:
            return "resource_exhausted"
          default:
            return "invalid_argument"
        }
      }
      if (e >= 500 && e < 600) {
        switch (e) {
          case 501:
            return "unimplemented"
          case 503:
            return "unavailable"
          case 504:
            return "deadline_exceeded"
          default:
            return "internal_error"
        }
      }
      return "unknown_error"
    }(e)
    if ("unknown_error" !== t) {
      this.setStatus(t)
    }
    return this
  }
  e.prototype.isSuccess = function () {
    return "ok" === this.status
  }
  e.prototype.finish = function (e) {
    this.endTimestamp = "number" === typeof e ? e : Module_39.d()
  }
  e.prototype.toTraceparent = function () {
    var e = ""
    if (undefined !== this.sampled) {
      e = this.sampled ? "-1" : "-0"
    }
    return this.traceId + "-" + this.spanId + e
  }
  e.prototype.toContext = function () {
    return Module_23.c({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId
    })
  }
  e.prototype.updateWithContext = function (e) {
    var /* [auto-meaningful-name] */e$data
    var /* [auto-meaningful-name] */e$spanId
    var /* [auto-meaningful-name] */e$startTimestamp
    var /* [auto-meaningful-name] */e$tags
    var /* [auto-meaningful-name] */e$traceId
    this.data = null !== (e$data = e.data) && undefined !== e$data ? e$data : {}
    this.description = e.description
    this.endTimestamp = e.endTimestamp
    this.op = e.op
    this.parentSpanId = e.parentSpanId
    this.sampled = e.sampled
    this.spanId = null !== (e$spanId = e.spanId) && undefined !== e$spanId ? e$spanId : this.spanId
    this.startTimestamp = null !== (e$startTimestamp = e.startTimestamp) && undefined !== e$startTimestamp ? e$startTimestamp : this.startTimestamp
    this.status = e.status
    this.tags = null !== (e$tags = e.tags) && undefined !== e$tags ? e$tags : {}
    this.traceId = null !== (e$traceId = e.traceId) && undefined !== e$traceId ? e$traceId : this.traceId
    return this
  }
  e.prototype.getTraceContext = function () {
    return Module_23.c({
      data: Object.keys(this.data).length > 0 ? this.data : undefined,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
      trace_id: this.traceId
    })
  }
  e.prototype.toJSON = function () {
    return Module_23.c({
      data: Object.keys(this.data).length > 0 ? this.data : undefined,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
      timestamp: this.endTimestamp,
      trace_id: this.traceId
    })
  }
  return e
}()
export default u
