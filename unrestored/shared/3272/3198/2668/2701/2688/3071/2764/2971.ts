"use strict";

var r = require("../../../../../../3200/494");
var i = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
var a = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
var s = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
var o = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
var l = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1b"], ["a", "\x07"]]);
function u(e) {
  return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : l.get(e) || e;
}
function c(e, t) {
  var n;
  var i;
  var a = [];
  var l = t.trim().split(/\s*,\s*/g);
  var c = r(l);
  try {
    for (c.s(); !(i = c.n()).done;) {
      var p = i.value;
      if (isNaN(p)) {
        if (!(n = p.match(s))) {
          throw new Error("Invalid Chalk template style argument: ".concat(p, " (in style '").concat(e, "')"));
        }
        a.push(n[2].replace(o, function (e, t, n) {
          return t ? u(t) : n;
        }));
      } else {
        a.push(Number(p));
      }
    }
  } catch (f) {
    c.e(f);
  } finally {
    c.f();
  }
  return a;
}
function p(e) {
  a.lastIndex = 0;
  for (var t, n = []; null !== (t = a.exec(e));) {
    var r = t[1];
    if (t[2]) {
      var i = c(r, t[2]);
      n.push([r].concat(i));
    } else {
      n.push([r]);
    }
  }
  return n;
}
function f(e, t) {
  var n;
  var i = {};
  var a = r(t);
  try {
    for (a.s(); !(n = a.n()).done;) {
      var s;
      var o = n.value;
      var l = r(o.styles);
      try {
        for (l.s(); !(s = l.n()).done;) {
          var u = s.value;
          i[u[0]] = o.inverse ? null : u.slice(1);
        }
      } catch (h) {
        l.e(h);
      } finally {
        l.f();
      }
    }
  } catch (h) {
    a.e(h);
  } finally {
    a.f();
  }
  for (var c = e, p = 0, f = Object.keys(i); p < f.length; p++) {
    var d = f[p];
    if (Array.isArray(i[d])) {
      if (!(d in c)) {
        throw new Error("Unknown Chalk style: ".concat(d));
      }
      c = i[d].length > 0 ? c[d].apply(c, i[d]) : c[d];
    }
  }
  return c;
}
module.exports = function (e, t) {
  var n = [];
  var r = [];
  var a = [];
  t.replace(i, function (t, i, s, o, l, c) {
    if (i) {
      a.push(u(i));
    } else if (o) {
      var d = a.join("");
      a = [];
      r.push(0 === n.length ? d : f(e, n)(d));
      n.push({
        inverse: s,
        styles: p(o)
      });
    } else if (l) {
      if (0 === n.length) {
        throw new Error("Found extraneous } in Chalk template literal");
      }
      r.push(f(e, n)(a.join("")));
      a = [];
      n.pop();
    } else {
      a.push(c);
    }
  });
  r.push(a.join(""));
  if (n.length > 0) {
    var s = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");
    throw new Error(s);
  }
  return r.join("");
};