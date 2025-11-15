/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：765
 */

"use strict"

export { u as a }
import /* [auto-meaningful-name] */$$_39 = require("../39")
import /* [auto-meaningful-name] */$_805 = require("./805")
import /* [auto-meaningful-name] */$$_316 = require("../316")
import /* [auto-meaningful-name] */$$_265 = require("../265")
import /* [auto-meaningful-name] */$$_435_index = require("../435/index")
import /* [auto-meaningful-name] */$$_764_722 = require("../764/722")
var u = function (e) {
  function t(t, n) {
    var r = e.call(this, t) || this
    r._measurements = {}
    r._hub = $_805.b()
    if ($$_316.d(n, $_805.a)) {
      r._hub = n
    }
    r.name = t.name || ""
    r.metadata = t.metadata || {}
    r._trimEnd = t.trimEnd
    r.transaction = r
    return r
  }
  $$_39.c(t, e)
  t.prototype.setName = function (e) {
    this.name = e
  }
  t.prototype.initSpanRecorder = function (e) {
    if (undefined === e) {
      e = 1e3
    }
    if (!this.spanRecorder) {
      this.spanRecorder = new $$_764_722.b(e)
    }
    this.spanRecorder.add(this)
  }
  t.prototype.setMeasurements = function (e) {
    this._measurements = $$_39.a({}, e)
  }
  t.prototype.setMetadata = function (e) {
    this.metadata = $$_39.a($$_39.a({}, this.metadata), e)
  }
  t.prototype.finish = function (t) {
    var n = this
    if (undefined === this.endTimestamp) {
      if (!this.name) {
        $$_265.a.warn("Transaction has no name, falling back to `<unlabeled transaction>`.")
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
          $$_265.a.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, undefined, 2))
          i.measurements = this._measurements
        }
        $$_265.a.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + ".")
        return this._hub.captureEvent(i)
      }
      $$_265.a.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
    }
  }
  t.prototype.toContext = function () {
    var t = e.prototype.toContext.call(this)
    return $$_435_index.a($$_39.a($$_39.a({}, t), {
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
}($$_764_722.a)
export default u
