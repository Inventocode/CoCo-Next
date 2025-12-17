/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1212__part-4
 */

"use strict"

import * as o from "./38"
import * as /* [auto-meaningful-name] */$_2673 from "./2673"
var N = Object.setPrototypeOf || ({
  __proto__: []
} instanceof Array ? function (e, t) {
    e.__proto__ = t
    return e
  } : function (e, t) {
    for (var n in t) if (!e.hasOwnProperty(n)) {
      e[n] = t[n]
    }
    return e
  })
var M = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    var r = e.call(this, t) || this
    r.message = t
    r.name = this$constructor.prototype.constructor.name
    N(r, this$constructor.prototype)
    return r
  }
  o.c(t, e)
  return t
}(Error)
var L = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
var j = function () {
  function e(e) {
    if ("string" === typeof e) {
      this._fromString(e)
    } else {
      this._fromComponents(e)
    }
    this._validate()
  }
  e.prototype.toString = function (e) {
    if (undefined === e) {
      e = false
    }
    var t = this
    var /* [auto-meaningful-name] */t$host = t.host
    var /* [auto-meaningful-name] */t$path = t.path
    var /* [auto-meaningful-name] */t$pass = t.pass
    var /* [auto-meaningful-name] */t$port = t.port
    var /* [auto-meaningful-name] */t$projectId = t.projectId
    return t.protocol + "://" + t.publicKey + (e && t$pass ? ":" + t$pass : "") + "@" + t$host + (t$port ? ":" + t$port : "") + "/" + (t$path ? t$path + "/" : t$path) + t$projectId
  }
  e.prototype._fromString = function (e) {
    var t = L.exec(e)
    if (!t) {
      throw new M("Invalid Dsn")
    }
    var n = o.d(t.slice(1), 6)
    var r = n[0]
    var i = n[1]
    var a = n[2]
    var s = undefined === a ? "" : a
    var c = n[3]
    var u = n[4]
    var l = undefined === u ? "" : u
    var f = ""
    var d = n[5]
    var h = d.split("/")
    if (h.length > 1) {
      f = h.slice(0, -1).join("/")
      d = h.pop()
    }
    if (d) {
      var p = d.match(/^\d+/)
      if (p) {
        d = p[0]
      }
    }
    this._fromComponents({
      host: c,
      pass: s,
      path: f,
      projectId: d,
      port: l,
      protocol: r,
      publicKey: i
    })
  }
  e.prototype._fromComponents = function (e) {
    if ("user" in e && !("publicKey" in e)) {
      e.publicKey = e.user
    }
    this.user = e.publicKey || ""
    this.protocol = e.protocol
    this.publicKey = e.publicKey || ""
    this.pass = e.pass || ""
    this.host = e.host
    this.port = e.port || ""
    this.path = e.path || ""
    this.projectId = e.projectId
  }
  e.prototype._validate = function () {
    var e = this;
    ["protocol", "publicKey", "host", "projectId"].forEach(function (t) {
      if (!e[t]) {
        throw new M("Invalid Dsn: " + t + " missing")
      }
    })
    if (!this.projectId.match(/^\d+$/)) {
      throw new M("Invalid Dsn: Invalid projectId " + this.projectId)
    }
    if ("http" !== this.protocol && "https" !== this.protocol) {
      throw new M("Invalid Dsn: Invalid protocol " + this.protocol)
    }
    if (this.port && isNaN(parseInt(this.port, 10))) {
      throw new M("Invalid Dsn: Invalid port " + this.port)
    }
  }
  return e
}()
export { M }
export { j }
