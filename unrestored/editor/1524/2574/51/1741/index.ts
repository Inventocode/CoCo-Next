var r = require("./1251");
var i = require("./1742/index");
var o = {};
for (var a in r) if (r.hasOwnProperty(a)) {
  o[r[a]] = a;
}
var s = module.exports = {
  to: {},
  get: {}
};
function c(e, t, n) {
  return Math.min(Math.max(t, e), n);
}
function u(e) {
  var t = e.toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
s.get = function (e) {
  var t;
  var n;
  switch (e.substring(0, 3).toLowerCase()) {
    case "hsl":
      t = s.get.hsl(e);
      n = "hsl";
      break;
    case "hwb":
      t = s.get.hwb(e);
      n = "hwb";
      break;
    default:
      t = s.get.rgb(e);
      n = "rgb";
  }
  return t ? {
    model: n,
    value: t
  } : null;
};
s.get.rgb = function (e) {
  if (!e) {
    return null;
  }
  var t;
  var n;
  var i;
  var o = [0, 0, 0, 1];
  if (t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
    for (i = t[2], t = t[1], n = 0; n < 3; n++) {
      var a = 2 * n;
      o[n] = parseInt(t.slice(a, a + 2), 16);
    }
    if (i) {
      o[3] = parseInt(i, 16) / 255;
    }
  } else if (t = e.match(/^#([a-f0-9]{3,4})$/i)) {
    for (i = (t = t[1])[3], n = 0; n < 3; n++) {
      o[n] = parseInt(t[n] + t[n], 16);
    }
    if (i) {
      o[3] = parseInt(i + i, 16) / 255;
    }
  } else if (t = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
    for (n = 0; n < 3; n++) {
      o[n] = parseInt(t[n + 1], 0);
    }
    if (t[4]) {
      o[3] = parseFloat(t[4]);
    }
  } else {
    if (!(t = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) {
      return (t = e.match(/(\D+)/)) ? "transparent" === t[1] ? [0, 0, 0, 0] : (o = r[t[1]]) ? (o[3] = 1, o) : null : null;
    }
    for (n = 0; n < 3; n++) {
      o[n] = Math.round(2.55 * parseFloat(t[n + 1]));
    }
    if (t[4]) {
      o[3] = parseFloat(t[4]);
    }
  }
  for (n = 0; n < 3; n++) {
    o[n] = c(o[n], 0, 255);
  }
  o[3] = c(o[3], 0, 1);
  return o;
};
s.get.hsl = function (e) {
  if (!e) {
    return null;
  }
  var t = e.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
  if (t) {
    var n = parseFloat(t[4]);
    return [(parseFloat(t[1]) + 360) % 360, c(parseFloat(t[2]), 0, 100), c(parseFloat(t[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)];
  }
  return null;
};
s.get.hwb = function (e) {
  if (!e) {
    return null;
  }
  var t = e.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
  if (t) {
    var n = parseFloat(t[4]);
    return [(parseFloat(t[1]) % 360 + 360) % 360, c(parseFloat(t[2]), 0, 100), c(parseFloat(t[3]), 0, 100), c(isNaN(n) ? 1 : n, 0, 1)];
  }
  return null;
};
s.to.hex = function () {
  var e = i(arguments);
  return "#" + u(e[0]) + u(e[1]) + u(e[2]) + (e[3] < 1 ? u(Math.round(255 * e[3])) : "");
};
s.to.rgb = function () {
  var e = i(arguments);
  return e.length < 4 || 1 === e[3] ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")";
};
s.to.rgb.percent = function () {
  var e = i(arguments);
  var t = Math.round(e[0] / 255 * 100);
  var n = Math.round(e[1] / 255 * 100);
  var r = Math.round(e[2] / 255 * 100);
  return e.length < 4 || 1 === e[3] ? "rgb(" + t + "%, " + n + "%, " + r + "%)" : "rgba(" + t + "%, " + n + "%, " + r + "%, " + e[3] + ")";
};
s.to.hsl = function () {
  var e = i(arguments);
  return e.length < 4 || 1 === e[3] ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
};
s.to.hwb = function () {
  var e = i(arguments);
  var t = "";
  if (e.length >= 4 && 1 !== e[3]) {
    t = ", " + e[3];
  }
  return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")";
};
s.to.keyword = function (e) {
  return o[e.slice(0, 3)];
};