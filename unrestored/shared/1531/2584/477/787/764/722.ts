/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：722
 */

"use strict";

export { c as b };
export { u as a };
import r = require("../../../36/483/39");
import i = require("../364");
import o = require("../926");
import a = require("../435/index");
import s = require("../350");
var c = function () {
  function e(e) {
    if (undefined === e) {
      e = 1e3;
    }
    this.spans = [];
    this._maxlen = e;
  }
  e.prototype.add = function (e) {
    if (this.spans.length > this._maxlen) {
      e.spanRecorder = undefined;
    } else {
      this.spans.push(e);
    }
  };
  return e;
}();
var u = function () {
  function e(e) {
    this.traceId = i.c();
    this.spanId = i.c().substring(16);
    this.startTimestamp = o.d();
    this.tags = {};
    this.data = {};
    if (!e) {
      return this;
    }
    if (e.traceId) {
      this.traceId = e.traceId;
    }
    if (e.spanId) {
      this.spanId = e.spanId;
    }
    if (e.parentSpanId) {
      this.parentSpanId = e.parentSpanId;
    }
    if ("sampled" in e) {
      this.sampled = e.sampled;
    }
    if (e.op) {
      this.op = e.op;
    }
    if (e.description) {
      this.description = e.description;
    }
    if (e.data) {
      this.data = e.data;
    }
    if (e.tags) {
      this.tags = e.tags;
    }
    if (e.status) {
      this.status = e.status;
    }
    if (e.startTimestamp) {
      this.startTimestamp = e.startTimestamp;
    }
    if (e.endTimestamp) {
      this.endTimestamp = e.endTimestamp;
    }
  }
  e.prototype.child = function (e) {
    return this.startChild(e);
  };
  e.prototype.startChild = function (t) {
    var n = new e(r.a(r.a({}, t), {
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId
    }));
    n.spanRecorder = this.spanRecorder;
    if (n.spanRecorder) {
      n.spanRecorder.add(n);
    }
    n.transaction = this.transaction;
    return n;
  };
  e.prototype.setTag = function (e, t) {
    var n;
    this.tags = r.a(r.a({}, this.tags), ((n = {})[e] = t, n));
    return this;
  };
  e.prototype.setData = function (e, t) {
    var n;
    this.data = r.a(r.a({}, this.data), ((n = {})[e] = t, n));
    return this;
  };
  e.prototype.setStatus = function (e) {
    this.status = e;
    return this;
  };
  e.prototype.setHttpStatus = function (e) {
    this.setTag("http.status_code", String(e));
    var t = s.a.fromHttpCode(e);
    if (t !== s.a.UnknownError) {
      this.setStatus(t);
    }
    return this;
  };
  e.prototype.isSuccess = function () {
    return this.status === s.a.Ok;
  };
  e.prototype.finish = function (e) {
    this.endTimestamp = "number" === typeof e ? e : o.d();
  };
  e.prototype.toTraceparent = function () {
    var e = "";
    if (undefined !== this.sampled) {
      e = this.sampled ? "-1" : "-0";
    }
    return this.traceId + "-" + this.spanId + e;
  };
  e.prototype.toContext = function () {
    return a.a({
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
    });
  };
  e.prototype.updateWithContext = function (e) {
    var t;
    var n;
    var r;
    var i;
    var o;
    this.data = null !== (t = e.data) && undefined !== t ? t : {};
    this.description = e.description;
    this.endTimestamp = e.endTimestamp;
    this.op = e.op;
    this.parentSpanId = e.parentSpanId;
    this.sampled = e.sampled;
    this.spanId = null !== (n = e.spanId) && undefined !== n ? n : this.spanId;
    this.startTimestamp = null !== (r = e.startTimestamp) && undefined !== r ? r : this.startTimestamp;
    this.status = e.status;
    this.tags = null !== (i = e.tags) && undefined !== i ? i : {};
    this.traceId = null !== (o = e.traceId) && undefined !== o ? o : this.traceId;
    return this;
  };
  e.prototype.getTraceContext = function () {
    return a.a({
      data: Object.keys(this.data).length > 0 ? this.data : undefined,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
      trace_id: this.traceId
    });
  };
  e.prototype.toJSON = function () {
    return a.a({
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
    });
  };
  return e;
}();
export default u;