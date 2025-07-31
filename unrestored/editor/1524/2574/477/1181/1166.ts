"use strict";

export { i as a };
var r = require("./306");
function i(e, t) {
  try {
    for (var n = e, r = [], i = 0, a = 0, s = " > ".length, c = void 0; n && i++ < 5 && !("html" === (c = o(n, t)) || i > 1 && a + r.length * s + c.length >= 80);) {
      r.push(c);
      a += c.length;
      n = n.parentNode;
    }
    return r.reverse().join(" > ");
  } catch (u) {
    return "<unknown>";
  }
}
function o(e, t) {
  var n;
  var i;
  var o;
  var a;
  var s;
  var c;
  var u;
  var l = e;
  var f = [];
  if (!l || !l.tagName) {
    return "";
  }
  f.push(l.tagName.toLowerCase());
  var h = (null === (n = t) || void 0 === n ? void 0 : n.length) ? t.filter(function (e) {
    return l.getAttribute(e);
  }).map(function (e) {
    return [e, l.getAttribute(e)];
  }) : null;
  if (null === (i = h) || void 0 === i ? void 0 : i.length) {
    h.forEach(function (e) {
      f.push("[" + e[0] + '="' + e[1] + '"]');
    });
  } else if (l.id && f.push("#" + l.id), (o = l.className) && Object(r.k)(o)) {
    for (a = o.split(/\s+/), u = 0; u < a.length; u++) {
      f.push("." + a[u]);
    }
  }
  var d = ["type", "name", "title", "alt"];
  for (u = 0; u < d.length; u++) {
    s = d[u];
    if (c = l.getAttribute(s)) {
      f.push("[" + s + '="' + c + '"]');
    }
  }
  return f.join("");
}
export default i;