/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-4
 */

"use strict"

import { N } from "./index__part-3"
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37"
var R = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
function L(e, t) {
  if (undefined === t) {
    t = false
  }
  var /* [auto-meaningful-name] */e$host = e.host
  var /* [auto-meaningful-name] */e$path = e.path
  var /* [auto-meaningful-name] */e$pass = e.pass
  var /* [auto-meaningful-name] */e$port = e.port
  var /* [auto-meaningful-name] */e$projectId = e.projectId
  return e.protocol + "://" + e.publicKey + (t && e$pass ? ":" + e$pass : "") + "@" + e$host + (e$port ? ":" + e$port : "") + "/" + (e$path ? e$path + "/" : e$path) + e$projectId
}
function D(e) {
  if ("user" in e && !("publicKey" in e)) {
    e.publicKey = e.user
  }
  return {
    user: e.publicKey || "",
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  }
}
function M(e) {
  var t = "string" === typeof e ? function (e) {
    var t = R.exec(e)
    if (!t) {
      throw new N("Invalid Sentry Dsn: " + e)
    }
    var n = Module_5.c(t.slice(1), 6)
    var r = n[0]
    var i = n[1]
    var o = n[2]
    var a = undefined === o ? "" : o
    var s = n[3]
    var u = n[4]
    var c = undefined === u ? "" : u
    var l = ""
    var f = n[5]
    var p = f.split("/")
    if (p.length > 1) {
      l = p.slice(0, -1).join("/")
      f = p.pop()
    }
    if (f) {
      var d = f.match(/^\d+/)
      if (d) {
        f = d[0]
      }
    }
    return D({
      host: s,
      pass: a,
      path: l,
      projectId: f,
      port: c,
      protocol: r,
      publicKey: i
    })
  }(e) : D(e);
  (function (e) {
    if (Module_37.a) {
      var /* [auto-meaningful-name] */e$port = e.port
      var /* [auto-meaningful-name] */e$projectId = e.projectId
      var /* [auto-meaningful-name] */e$protocol = e.protocol;
      ["protocol", "publicKey", "host", "projectId"].forEach(function (t) {
        if (!e[t]) {
          throw new N("Invalid Sentry Dsn: " + t + " missing")
        }
      })
      if (!e$projectId.match(/^\d+$/)) {
        throw new N("Invalid Sentry Dsn: Invalid projectId " + e$projectId)
      }
      if (!function (e) {
        return "http" === e || "https" === e
      }(e$protocol)) {
        throw new N("Invalid Sentry Dsn: Invalid protocol " + e$protocol)
      }
      if (e$port && isNaN(parseInt(e$port, 10))) {
        throw new N("Invalid Sentry Dsn: Invalid port " + e$port)
      }
    }
  })(t)
  return t
}
export { L }
export { M }
