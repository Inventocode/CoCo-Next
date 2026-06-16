/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：67
 */

"use strict"

export { l as a }
import * as /* [auto-meaningful-name] */Module_3 from /* 3 */"../3"
import * as /* [auto-meaningful-name] */Module_69 from /* 69 */"../../307/69/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../307/11"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../../307/12"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"../../307/23"
import * as /* [auto-meaningful-name] */Module_1 from /* 1 */"../1"
import * as /* [auto-meaningful-name] */Module_50 from /* 50 */"./50"
var l = function (e) {
  function t(t, n) {
    var r = e.call(this, t) || this
    r._measurements = {}
    r._hub = Module_69.b()
    if (Module_11.g(n, Module_69.a)) {
      r._hub = n
    }
    r.name = t.name || ""
    r.metadata = t.metadata || {}
    r._trimEnd = t.trimEnd
    r.transaction = r
    return r
  }
  Module_3.b(t, e)
  t.prototype.setName = function (e) {
    this.name = e
  }
  t.prototype.initSpanRecorder = function (e) {
    if (undefined === e) {
      e = 1e3
    }
    if (!this.spanRecorder) {
      this.spanRecorder = new Module_50.b(e)
    }
    this.spanRecorder.add(this)
  }
  t.prototype.setMeasurements = function (e) {
    this._measurements = Module_3.a({}, e)
  }
  t.prototype.setMetadata = function (e) {
    this.metadata = Module_3.a(Module_3.a({}, this.metadata), e)
  }
  t.prototype.finish = function (t) {
    var n = this
    if (undefined === this.endTimestamp) {
      if (!this.name) {
        if (Module_1.a) {
          Module_12.c.warn("Transaction has no name, falling back to `<unlabeled transaction>`.")
        }
        this.name = "<unlabeled transaction>"
      }
      e.prototype.finish.call(this, t)
      if (true === this.sampled) {
        var r = this.spanRecorder ? this.spanRecorder.spans.filter(function (e) {
          return e !== n && e.endTimestamp
        }) : []
        if (this._trimEnd && r.length > 0) {
          this.endTimestamp = r.reduce(function (e, t) {
            return e.endTimestamp && t.endTimestamp ? e.endTimestamp > t.endTimestamp ? e : t : e
          }).endTimestamp
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
          sdkProcessingMetadata: this.metadata
        }
        if (Object.keys(this._measurements).length > 0) {
          if (Module_1.a) {
            Module_12.c.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, undefined, 2))
          }
          i.measurements = this._measurements
        }
        if (Module_1.a) {
          Module_12.c.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".")
        }
        return this._hub.captureEvent(i)
      }
      if (Module_1.a) {
        Module_12.c.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
      }
      var o = this._hub.getClient()
      var s = o && o.getTransport && o.getTransport()
      if (s && s.recordLostEvent) {
        s.recordLostEvent("sample_rate", "transaction")
      }
    }
  }
  t.prototype.toContext = function () {
    var t = e.prototype.toContext.call(this)
    return Module_23.c(Module_3.a(Module_3.a({}, t), {
      name: this.name,
      trimEnd: this._trimEnd
    }))
  }
  t.prototype.updateWithContext = function (t) {
    var /* [auto-meaningful-name] */t$name
    e.prototype.updateWithContext.call(this, t)
    this.name = null !== (t$name = t.name) && undefined !== t$name ? t$name : ""
    this._trimEnd = t.trimEnd
    return this
  }
  return t
}(Module_50.a)
export default l
