/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：722
 */

"use strict"

export { c as b }
export { u as a }
import * as /* [auto-meaningful-name] */$$_39 from "../39"
import * as /* [auto-meaningful-name] */$$_364 from "../364"
import * as /* [auto-meaningful-name] */$$_926 from "../926"
import * as /* [auto-meaningful-name] */$$_435_index from "../435/index"
import * as /* [auto-meaningful-name] */$$_350 from "../350"
var c = function () {
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
    this.traceId = $$_364.c()
    this.spanId = $$_364.c().substring(16)
    this.startTimestamp = $$_926.d()
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
    var n = new e($$_39.a($$_39.a({}, t), {
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
    this.tags = $$_39.a($$_39.a({}, this.tags), ((n = {})[e] = t, n))
    return this
  }
  e.prototype.setData = function (e, t) {
    var n
    this.data = $$_39.a($$_39.a({}, this.data), ((n = {})[e] = t, n))
    return this
  }
  e.prototype.setStatus = function (e) {
    this.status = e
    return this
  }
  e.prototype.setHttpStatus = function (e) {
    this.setTag("http.status_code", String(e))
    var t = $$_350.a.fromHttpCode(e)
    if (t !== $$_350.a.UnknownError) {
      this.setStatus(t)
    }
    return this
  }
  e.prototype.isSuccess = function () {
    return this.status === $$_350.a.Ok
  }
  e.prototype.finish = function (e) {
    this.endTimestamp = "number" === typeof e ? e : $$_926.d()
  }
  e.prototype.toTraceparent = function () {
    var e = ""
    if (undefined !== this.sampled) {
      e = this.sampled ? "-1" : "-0"
    }
    return this.traceId + "-" + this.spanId + e
  }
  e.prototype.toContext = function () {
    return $$_435_index.a({
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
    return $$_435_index.a({
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
    return $$_435_index.a({
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
