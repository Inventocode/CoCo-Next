/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：114
 */

"use strict"

export { s as d }
export { c as b }
export { l as c }
export { u as a }
import /* [auto-meaningful-name] */$$_$$_47 = require("../../47")
import /* [auto-meaningful-name] */$$_$$_9 = require("../../9")
import /* [auto-meaningful-name] */$$_$$_15 = require("../../15")
import /* [auto-meaningful-name] */$$_$$_48_index = require("../../48/index")
function s(e) {
  return undefined !== c(e)
}
function c(e) {
  if ("string" === typeof e) {
    if ("" === e) {
      return e
    }
    if ($$_$$_15.U(e)) {
      return e
    }
    var t = $$_$$_48_index.a().getState()
    var n = t.imageFileMap.get(e)
    if (n) {
      var s = $$_$$_9.lb(n)
      if (s) {
        return s
      }
    }
    if (e.endsWith(".svg")) {
      var c
      var /* [auto-meaningful-name] */t$iconFileMap = t.iconFileMap
      var u = $$_$$_47.a(t$iconFileMap.values())
      try {
        for (u.s(); !(c = u.n()).done;) {
          var /* [auto-meaningful-name] */c$value = c.value
          if ("".concat(c$value.name, ".svg") === e) {
            return c$value.cdnUrl || c$value.source
          }
        }
      } catch (p) {
        u.e(p)
      } finally {
        u.f()
      }
    }
  }
}
function l(e) {
  var t = u(e)
  return Boolean(t)
}
function u(e) {
  if ("string" === typeof e) {
    var t = $$_$$_48_index.a().getState()
    var /* [auto-meaningful-name] */t$iconFileMap = t.iconFileMap
    var s = t$iconFileMap.get(e)
    if (s) {
      return s
    }
    var c
    var l = $$_$$_47.a(t$iconFileMap.values())
    try {
      for (l.s(); !(c = l.n()).done;) {
        var /* [auto-meaningful-name] */c$value = c.value
        if (c$value.name + ".svg" === e) {
          return c$value
        }
      }
    } catch (f) {
      l.e(f)
    } finally {
      l.f()
    }
    var d = t.imageFileMap.get(e)
    var p = $$_$$_15.U(e) ? e : d ? $$_$$_9.lb(d) : ""
    return ".svg" === (null === d || undefined === d ? undefined : d.extension) ? {
      id: d.id,
      name: d.id,
      source: d.source,
      cdnUrl: p || ""
    } : (null === p || undefined === p ? undefined : p.endsWith(".svg")) ? {
      id: p,
      name: p,
      cdnUrl: p
    } : p
  }
}
export default u
