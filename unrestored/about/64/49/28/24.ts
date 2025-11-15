/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24
 */

"use strict"

export { u as b }
export { l as a }
import * as r from "../1"
import * as /* [auto-meaningful-name] */$$_$$_72_14 from "../../72/14"
import * as /* [auto-meaningful-name] */$$_$$_72_31 from "../../72/31"
import * as /* [auto-meaningful-name] */$$_$$_72_17_index from "../../72/17/index"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
var u = function () {
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
var l = function () {
  function e(e) {
    this.traceId = $$_$$_72_14.i()
    this.spanId = $$_$$_72_14.i().substring(16)
    this.startTimestamp = $$_$$_72_31.d()
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
    var n = new e(r.a(r.a({}, t), {
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
    this.tags = r.a(r.a({}, this.tags), ((n = {})[e] = t, n))
    return this
  }
  e.prototype.setData = function (e, t) {
    var n
    this.data = r.a(r.a({}, this.data), ((n = {})[e] = t, n))
    return this
  }
  e.prototype.setStatus = function (e) {
    this.status = e
    return this
  }
  e.prototype.setHttpStatus = function (e) {
    this.setTag("http.status_code", String(e))
    var t = $$_12.a.fromHttpCode(e)
    if (t !== $$_12.a.UnknownError) {
      this.setStatus(t)
    }
    return this
  }
  e.prototype.isSuccess = function () {
    return this.status === $$_12.a.Ok
  }
  e.prototype.finish = function (e) {
    this.endTimestamp = "number" === typeof e ? e : $$_$$_72_31.d()
  }
  e.prototype.toTraceparent = function () {
    var e = ""
    if (undefined !== this.sampled) {
      e = this.sampled ? "-1" : "-0"
    }
    return this.traceId + "-" + this.spanId + e
  }
  e.prototype.toContext = function () {
    return $$_$$_72_17_index.a({
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
    return $$_$$_72_17_index.a({
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
    return $$_$$_72_17_index.a({
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
export default l
