/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：180
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"../76"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"../23"
var a = function () {
  function e(e) {
    this.errors = 0
    this.sid = Module_76.f()
    this.duration = 0
    this.status = "ok"
    this.init = true
    this.ignoreDuration = false
    var t = Module_39.c()
    this.timestamp = t
    this.started = t
    if (e) {
      this.update(e)
    }
  }
  e.prototype.update = function (e) {
    if (undefined === e) {
      e = {}
    }
    if (e.user) {
      if (!this.ipAddress && e.user.ip_address) {
        this.ipAddress = e.user.ip_address
      }
      if (!(this.did || e.did)) {
        this.did = e.user.id || e.user.email || e.user.username
      }
    }
    this.timestamp = e.timestamp || Module_39.c()
    if (e.ignoreDuration) {
      this.ignoreDuration = e.ignoreDuration
    }
    if (e.sid) {
      this.sid = 32 === e.sid.length ? e.sid : Module_76.f()
    }
    if (undefined !== e.init) {
      this.init = e.init
    }
    if (!this.did && e.did) {
      this.did = "" + e.did
    }
    if ("number" === typeof e.started) {
      this.started = e.started
    }
    if (this.ignoreDuration) {
      this.duration = undefined
    } else if ("number" === typeof e.duration) {
      this.duration = e.duration
    } else {
      var t = this.timestamp - this.started
      this.duration = t >= 0 ? t : 0
    }
    if (e.release) {
      this.release = e.release
    }
    if (e.environment) {
      this.environment = e.environment
    }
    if (!this.ipAddress && e.ipAddress) {
      this.ipAddress = e.ipAddress
    }
    if (!this.userAgent && e.userAgent) {
      this.userAgent = e.userAgent
    }
    if ("number" === typeof e.errors) {
      this.errors = e.errors
    }
    if (e.status) {
      this.status = e.status
    }
  }
  e.prototype.close = function (e) {
    if (e) {
      this.update({
        status: e
      })
    } else {
      if ("ok" === this.status) {
        this.update({
          status: "exited"
        })
      } else {
        this.update()
      }
    }
  }
  e.prototype.toJSON = function () {
    return Module_23.c({
      sid: "" + this.sid,
      init: this.init,
      started: new Date(1e3 * this.started).toISOString(),
      timestamp: new Date(1e3 * this.timestamp).toISOString(),
      status: this.status,
      errors: this.errors,
      did: "number" === typeof this.did || "string" === typeof this.did ? "" + this.did : undefined,
      duration: this.duration,
      attrs: {
        release: this.release,
        environment: this.environment,
        ip_address: this.ipAddress,
        user_agent: this.userAgent
      }
    })
  }
  return e
}()
export default a
