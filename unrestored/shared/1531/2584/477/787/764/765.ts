/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：765
 */

"use strict";

export { u as a };
import r = require("../../../36/483/39");
import i = require("../720/805");
import o = require("../316");
import a = require("../265");
import s = require("../435/index");
import c = require("./722");
var u = function (e) {
  function t(t, n) {
    var r = e.call(this, t) || this;
    r._measurements = {};
    r._hub = i.b();
    if (o.d(n, i.a)) {
      r._hub = n;
    }
    r.name = t.name || "";
    r.metadata = t.metadata || {};
    r._trimEnd = t.trimEnd;
    r.transaction = r;
    return r;
  }
  r.c(t, e);
  t.prototype.setName = function (e) {
    this.name = e;
  };
  t.prototype.initSpanRecorder = function (e) {
    if (undefined === e) {
      e = 1e3;
    }
    if (!this.spanRecorder) {
      this.spanRecorder = new c.b(e);
    }
    this.spanRecorder.add(this);
  };
  t.prototype.setMeasurements = function (e) {
    this._measurements = r.a({}, e);
  };
  t.prototype.setMetadata = function (e) {
    this.metadata = r.a(r.a({}, this.metadata), e);
  };
  t.prototype.finish = function (t) {
    var n = this;
    if (undefined === this.endTimestamp) {
      if (!this.name) {
        a.a.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
        this.name = "<unlabeled transaction>";
      }
      e.prototype.finish.call(this, t);
      if (true === this.sampled) {
        var r = this.spanRecorder ? this.spanRecorder.spans.filter(function (e) {
          return e !== n && e.endTimestamp;
        }) : [];
        if (this._trimEnd && r.length > 0) {
          this.endTimestamp = r.reduce(function (e, t) {
            return e.endTimestamp && t.endTimestamp ? e.endTimestamp > t.endTimestamp ? e : t : e;
          }).endTimestamp;
        }
        var i = {
          contexts: {
            trace: this.getTraceContext()
          },
          spans: r,
          start_timestamp: this.startTimestamp,
          tags: this.tags,
          timestamp: this.endTimestamp,
          transaction: this.name,
          type: "transaction",
          debug_meta: this.metadata
        };
        if (Object.keys(this._measurements).length > 0) {
          a.a.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, undefined, 2));
          i.measurements = this._measurements;
        }
        a.a.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".");
        return this._hub.captureEvent(i);
      }
      a.a.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
    }
  };
  t.prototype.toContext = function () {
    var t = e.prototype.toContext.call(this);
    return s.a(r.a(r.a({}, t), {
      name: this.name,
      trimEnd: this._trimEnd
    }));
  };
  t.prototype.updateWithContext = function (t) {
    var n;
    e.prototype.updateWithContext.call(this, t);
    this.name = null !== (n = t.name) && undefined !== n ? n : "";
    this._trimEnd = t.trimEnd;
    return this;
  };
  return t;
}(c.a);
export default u;