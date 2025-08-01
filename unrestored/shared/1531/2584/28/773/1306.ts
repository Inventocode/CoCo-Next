var r = require("./1982/1101");
function i(e) {
  var t;
  var n = r.spaceIndex(e);
  t = -1 === n ? e.slice(1, -1) : e.slice(1, n + 1);
  if ("/" === (t = r.trim(t).toLowerCase()).slice(0, 1)) {
    t = t.slice(1);
  }
  if ("/" === t.slice(-1)) {
    t = t.slice(0, -1);
  }
  return t;
}
function o(e) {
  return "</" === e.slice(0, 2);
}
var a = /[^a-zA-Z0-9\\_:.-]/gim;
function s(e, t) {
  for (; t < e.length; t++) {
    var n = e[t];
    if (" " !== n) {
      return "=" === n ? t : -1;
    }
  }
}
function c(e, t) {
  for (; t < e.length; t++) {
    var n = e[t];
    if (" " !== n) {
      return "'" === n || '"' === n ? t : -1;
    }
  }
}
function u(e, t) {
  for (; t > 0; t--) {
    var n = e[t];
    if (" " !== n) {
      return "=" === n ? t : -1;
    }
  }
}
function l(e) {
  return function (e) {
    return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1];
  }(e) ? e.substr(1, e.length - 2) : e;
}
exports.parseTag = function (e, t, n) {
  "use strict";

  var r = "";
  var a = 0;
  var s = !1;
  var c = !1;
  var u = 0;
  var l = e.length;
  var f = "";
  var d = "";
  e: for (u = 0; u < l; u++) {
    var h = e.charAt(u);
    if (!1 === s) {
      if ("<" === h) {
        s = u;
        continue;
      }
    } else if (!1 === c) {
      if ("<" === h) {
        r += n(e.slice(a, u));
        s = u;
        a = u;
        continue;
      }
      if (">" === h || u === l - 1) {
        r += n(e.slice(a, s));
        f = i(d = e.slice(s, u + 1));
        r += t(s, r.length, f, d, o(d));
        a = u + 1;
        s = !1;
        continue;
      }
      if ('"' === h || "'" === h) {
        for (var p = 1, _ = e.charAt(u - p); "" === _.trim() || "=" === _;) {
          if ("=" === _) {
            c = h;
            continue e;
          }
          _ = e.charAt(u - ++p);
        }
      }
    } else if (h === c) {
      c = !1;
      continue;
    }
  }
  if (a < l) {
    r += n(e.substr(a));
  }
  return r;
};
exports.parseAttr = function (e, t) {
  "use strict";

  var n = 0;
  var i = 0;
  var o = [];
  var f = !1;
  var d = e.length;
  function h(e, n) {
    if (!((e = (e = r.trim(e)).replace(a, "").toLowerCase()).length < 1)) {
      var i = t(e, n || "");
      if (i) {
        o.push(i);
      }
    }
  }
  for (var p = 0; p < d; p++) {
    var _;
    var A = e.charAt(p);
    if (!1 !== f || "=" !== A) {
      if (!1 === f || p !== i) {
        if (/\s|\n|\t/.test(A)) {
          e = e.replace(/\s|\n|\t/g, " ");
          if (!1 === f) {
            if (-1 === (_ = s(e, p))) {
              h(r.trim(e.slice(n, p)));
              f = !1;
              n = p + 1;
              continue;
            }
            p = _ - 1;
            continue;
          }
          if (-1 === (_ = u(e, p - 1))) {
            h(f, l(r.trim(e.slice(n, p))));
            f = !1;
            n = p + 1;
            continue;
          }
        } else {
          ;
        }
      } else {
        if (-1 === (_ = e.indexOf(A, p + 1))) {
          break;
        }
        h(f, r.trim(e.slice(i + 1, _)));
        f = !1;
        n = (p = _) + 1;
      }
    } else {
      f = e.slice(n, p);
      n = p + 1;
      i = '"' === e.charAt(n) || "'" === e.charAt(n) ? n : c(e, p + 1);
    }
  }
  if (n < e.length) {
    if (!1 === f) {
      h(e.slice(n));
    } else {
      h(f, l(r.trim(e.slice(n))));
    }
  }
  return r.trim(o.join(" "));
};