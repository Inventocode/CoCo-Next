"use strict";

export { s as d };
export { c as b };
export { l as c };
export { u as a };
import r = require("../../47");
import o = require("../../9");
import i = require("../../15");
import a = require("../../48/index");
function s(e) {
  return undefined !== c(e);
}
function c(e) {
  if ("string" === typeof e) {
    if ("" === e) {
      return e;
    }
    if (i.U(e)) {
      return e;
    }
    var t = a.a().getState();
    var n = t.imageFileMap.get(e);
    if (n) {
      var s = o.lb(n);
      if (s) {
        return s;
      }
    }
    if (e.endsWith(".svg")) {
      var c;
      var l = t.iconFileMap;
      var u = r.a(l.values());
      try {
        for (u.s(); !(c = u.n()).done;) {
          var d = c.value;
          if ("".concat(d.name, ".svg") === e) {
            return d.cdnUrl || d.source;
          }
        }
      } catch (p) {
        u.e(p);
      } finally {
        u.f();
      }
    }
  }
}
function l(e) {
  var t = u(e);
  return Boolean(t);
}
function u(e) {
  if ("string" === typeof e) {
    var t = a.a().getState();
    var n = t.iconFileMap;
    var s = n.get(e);
    if (s) {
      return s;
    }
    var c;
    var l = r.a(n.values());
    try {
      for (l.s(); !(c = l.n()).done;) {
        var u = c.value;
        if (u.name + ".svg" === e) {
          return u;
        }
      }
    } catch (f) {
      l.e(f);
    } finally {
      l.f();
    }
    var d = t.imageFileMap.get(e);
    var p = i.U(e) ? e : d ? o.lb(d) : "";
    return ".svg" === (null === d || undefined === d ? undefined : d.extension) ? {
      id: d.id,
      name: d.id,
      source: d.source,
      cdnUrl: p || ""
    } : (null === p || undefined === p ? undefined : p.endsWith(".svg")) ? {
      id: p,
      name: p,
      cdnUrl: p
    } : p;
  }
}
export default u;