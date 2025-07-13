"use strict";

(function (e) {
  exports.codeFrameColumns = l;
  exports.default = function (t, n, r) {
    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!i) {
      i = !0;
      var s = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      if (e.emitWarning) {
        e.emitWarning(s, "DeprecationWarning");
      } else {
        var o = new Error(s);
        o.name = "DeprecationWarning";
        console.warn(new Error(s));
      }
    }
    var u = {
      start: {
        column: r = Math.max(r, 0),
        line: n
      }
    };
    return l(t, u, a);
  };
  var r = require("./2957");
  var i = !1;
  function a(e) {
    return {
      gutter: e.grey,
      marker: e.red.bold,
      message: e.red.bold
    };
  }
  var s = /\r\n|[\n\r\u2028\u2029]/;
  function o(e, t, n) {
    var r = Object.assign({
      column: 0,
      line: -1
    }, e.start);
    var i = Object.assign({}, r, e.end);
    var a = n || {};
    var s = a.linesAbove;
    var o = void 0 === s ? 2 : s;
    var l = a.linesBelow;
    var u = void 0 === l ? 3 : l;
    var c = r.line;
    var p = r.column;
    var f = i.line;
    var d = i.column;
    var h = Math.max(c - (o + 1), 0);
    var y = Math.min(t.length, f + u);
    if (-1 === c) {
      h = 0;
    }
    if (-1 === f) {
      y = t.length;
    }
    var m = f - c;
    var v = {};
    if (m) {
      for (var g = 0; g <= m; g++) {
        var T = g + c;
        if (p) {
          if (0 === g) {
            var b = t[T - 1].length;
            v[T] = [p, b - p + 1];
          } else if (g === m) {
            v[T] = [0, d];
          } else {
            var S = t[T - g].length;
            v[T] = [0, S];
          }
        } else {
          v[T] = !0;
        }
      }
    } else {
      v[c] = p === d ? !p || [p, 0] : [p, d - p];
    }
    return {
      start: h,
      end: y,
      markerLines: v
    };
  }
  function l(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var i = (n.highlightCode || n.forceColor) && (0, r.shouldHighlight)(n);
    var l = (0, r.getChalk)(n);
    var u = a(l);
    var c = function (e, t) {
      return i ? e(t) : t;
    };
    var p = e.split(s);
    var f = o(t, p, n);
    var d = f.start;
    var h = f.end;
    var y = f.markerLines;
    var m = t.start && "number" === typeof t.start.column;
    var v = String(h).length;
    var g = i ? (0, r.default)(e, n) : e;
    var T = g.split(s, h).slice(d, h).map(function (e, t) {
      var r = d + 1 + t;
      var i = " ".concat(r).slice(-v);
      var a = " ".concat(i, " |");
      var s = y[r];
      var o = !y[r + 1];
      if (s) {
        var l = "";
        if (Array.isArray(s)) {
          var p = e.slice(0, Math.max(s[0] - 1, 0)).replace(/[^\t]/g, " ");
          var f = s[1] || 1;
          l = ["\n ", c(u.gutter, a.replace(/\d/g, " ")), " ", p, c(u.marker, "^").repeat(f)].join("");
          if (o && n.message) {
            l += " " + c(u.message, n.message);
          }
        }
        return [c(u.marker, ">"), c(u.gutter, a), e.length > 0 ? " ".concat(e) : "", l].join("");
      }
      return " ".concat(c(u.gutter, a)).concat(e.length > 0 ? " ".concat(e) : "");
    }).join("\n");
    if (n.message && !m) {
      T = "".concat(" ".repeat(v + 1)).concat(n.message, "\n").concat(T);
    }
    return i ? l.reset(T) : T;
  }
}).call(this, require("../../../../../../../1184/368"));