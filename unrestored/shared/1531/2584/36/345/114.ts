"use strict";

export { s as d };
export { c as b };
export { l as c };
export { u as a };
var r = require("../../47");
var o = require("../../9");
var i = require("../../15");
var a = require("../../48/index");
function s(e) {
  return void 0 !== c(e);
}
function c(e) {
  if ("string" === typeof e) {
    if ("" === e) {
      return e;
    }
    if (Object(i.U)(e)) {
      return e;
    }
    var t = Object(a.a)().getState();
    var n = t.imageFileMap.get(e);
    if (n) {
      var s = Object(o.lb)(n);
      if (s) {
        return s;
      }
    }
    if (e.endsWith(".svg")) {
      var c;
      var l = t.iconFileMap;
      var u = Object(r.a)(l.values());
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
    var t = Object(a.a)().getState();
    var n = t.iconFileMap;
    var s = n.get(e);
    if (s) {
      return s;
    }
    var c;
    var l = Object(r.a)(n.values());
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
    var p = Object(i.U)(e) ? e : d ? Object(o.lb)(d) : "";
    return ".svg" === (null === d || void 0 === d ? void 0 : d.extension) ? {
      id: d.id,
      name: d.id,
      source: d.source,
      cdnUrl: p || ""
    } : (null === p || void 0 === p ? void 0 : p.endsWith(".svg")) ? {
      id: p,
      name: p,
      cdnUrl: p
    } : p;
  }
}
export default u;