/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：72__part-2
 */

"use strict"

import * as S from "./33"
import * as /* [auto-meaningful-name] */$$_49_50 from "../49/50"
import * as T from "./70"
import * as j from "./18"
var x = Object.setPrototypeOf || ({
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
var C = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    var r = e.call(this, t) || this
    r.message = t
    r.name = this$constructor.prototype.constructor.name
    x(r, this$constructor.prototype)
    return r
  }
  j.b(t, e)
  return t
}(Error)
var R = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
var /* [auto-meaningful-name] */InvalidDsn = "Invalid Dsn"
var N = function () {
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
    var t = R.exec(e)
    if (!t) {
      throw new C(InvalidDsn)
    }
    var n = j.c(t.slice(1), 6)
    var r = n[0]
    var i = n[1]
    var o = n[2]
    var a = undefined === o ? "" : o
    var s = n[3]
    var u = n[4]
    var l = undefined === u ? "" : u
    var c = ""
    var f = n[5]
    var d = f.split("/")
    if (d.length > 1) {
      c = d.slice(0, -1).join("/")
      f = d.pop()
    }
    if (f) {
      var p = f.match(/^\d+/)
      if (p) {
        f = p[0]
      }
    }
    this._fromComponents({
      host: s,
      pass: a,
      path: c,
      projectId: f,
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
        throw new C("Invalid Dsn: " + t + " missing")
      }
    })
    if (!this.projectId.match(/^\d+$/)) {
      throw new C("Invalid Dsn: Invalid projectId " + this.projectId)
    }
    if ("http" !== this.protocol && "https" !== this.protocol) {
      throw new C("Invalid Dsn: Invalid protocol " + this.protocol)
    }
    if (this.port && isNaN(parseInt(this.port, 10))) {
      throw new C("Invalid Dsn: Invalid port " + this.port)
    }
  }
  return e
}()
export { C }
export { N }
