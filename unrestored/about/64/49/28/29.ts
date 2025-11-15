/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：29
 */

"use strict"

export { l as a }
import * as r from "../1"
import * as /* [auto-meaningful-name] */$$_$$_72_32 from "../../72/32"
import * as /* [auto-meaningful-name] */$$_$$_72_9 from "../../72/9"
import * as /* [auto-meaningful-name] */$$_$$_72_8 from "../../72/8"
import * as /* [auto-meaningful-name] */$$_$$_72_17_index from "../../72/17/index"
import * as u from "./24"
var l = function (e) {
  function t(t, n) {
    var r = e.call(this, t) || this
    r._measurements = {}
    r._hub = $$_$$_72_32.b()
    if ($$_$$_72_9.g(n, $$_$$_72_32.a)) {
      r._hub = n
    }
    r.name = t.name || ""
    r.metadata = t.metadata || {}
    r._trimEnd = t.trimEnd
    r.transaction = r
    return r
  }
  r.b(t, e)
  t.prototype.setName = function (e) {
    this.name = e
  }
  t.prototype.initSpanRecorder = function (e) {
    if (undefined === e) {
      e = 1e3
    }
    if (!this.spanRecorder) {
      this.spanRecorder = new u.b(e)
    }
    this.spanRecorder.add(this)
  }
  t.prototype.setMeasurements = function (e) {
    this._measurements = r.a({}, e)
  }
  t.prototype.setMetadata = function (e) {
    this.metadata = r.a(r.a({}, this.metadata), e)
  }
  t.prototype.finish = function (t) {
    var n = this
    if (undefined === this.endTimestamp) {
      if (!this.name) {
        $$_$$_72_8.a.warn("Transaction has no name, falling back to `<unlabeled transaction>`.")
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
          $$_$$_72_8.a.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, undefined, 2))
          i.measurements = this._measurements
        }
        $$_$$_72_8.a.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".")
        return this._hub.captureEvent(i)
      }
      $$_$$_72_8.a.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
    }
  }
  t.prototype.toContext = function () {
    var t = e.prototype.toContext.call(this)
    return $$_$$_72_17_index.a(r.a(r.a({}, t), {
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
}(u.a)
export default l
