/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：776
 */

"use strict"

export { u as a }
import * as /* [auto-meaningful-name] */$$_$$_1212_38 from "../../1212/38"
import * as /* [auto-meaningful-name] */$$_220_817 from "../220/817"
import * as /* [auto-meaningful-name] */$$_317 from "../317"
import * as /* [auto-meaningful-name] */$$_264 from "../264"
import * as /* [auto-meaningful-name] */$$_439_index from "../439/index"
import * as /* [auto-meaningful-name] */$_731 from "./731"
var u = function (e) {
  function t(t, n) {
    var r = e.call(this, t) || this
    r._measurements = {}
    r._hub = $$_220_817.b()
    if ($$_317.d(n, $$_220_817.a)) {
      r._hub = n
    }
    r.name = t.name || ""
    r.metadata = t.metadata || {}
    r._trimEnd = t.trimEnd
    r.transaction = r
    return r
  }
  $$_$$_1212_38.c(t, e)
  t.prototype.setName = function (e) {
    this.name = e
  }
  t.prototype.initSpanRecorder = function (e) {
    if (undefined === e) {
      e = 1e3
    }
    if (!this.spanRecorder) {
      this.spanRecorder = new $_731.b(e)
    }
    this.spanRecorder.add(this)
  }
  t.prototype.setMeasurements = function (e) {
    this._measurements = $$_$$_1212_38.a({}, e)
  }
  t.prototype.setMetadata = function (e) {
    this.metadata = $$_$$_1212_38.a($$_$$_1212_38.a({}, this.metadata), e)
  }
  t.prototype.finish = function (t) {
    var n = this
    if (undefined === this.endTimestamp) {
      if (!this.name) {
        $$_264.a.warn("Transaction has no name, falling back to `<unlabeled transaction>`.")
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
          debug_meta: this.metadata
        }
        if (Object.keys(this._measurements).length > 0) {
          $$_264.a.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, undefined, 2))
          i.measurements = this._measurements
        }
        $$_264.a.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".")
        return this._hub.captureEvent(i)
      }
      $$_264.a.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
    }
  }
  t.prototype.toContext = function () {
    var t = e.prototype.toContext.call(this)
    return $$_439_index.a($$_$$_1212_38.a($$_$$_1212_38.a({}, t), {
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
}($_731.a)
export default u
