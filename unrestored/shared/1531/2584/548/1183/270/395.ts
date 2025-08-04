"use strict";

export { s as d };
export { u as c };
export { l as a };
export { f as b };
export { d as e };
var r = require("./1506");
function i(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  return Math.min(Math.max(t, e), n);
}
function o(e) {
  if (e.type) {
    return e;
  }
  if ("#" === e.charAt(0)) {
    return o(function (e) {
      e = e.substr(1);
      var t = new RegExp(".{1,".concat(e.length >= 6 ? 2 : 1, "}"), "g");
      var n = e.match(t);
      if (n && 1 === n[0].length) {
        n = n.map(function (e) {
          return e + e;
        });
      }
      return n ? "rgb".concat(4 === n.length ? "a" : "", "(").concat(n.map(function (e, t) {
        return t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3;
      }).join(", "), ")") : "";
    }(e));
  }
  var t = e.indexOf("(");
  var n = e.substring(0, t);
  if (-1 === ["rgb", "rgba", "hsl", "hsla"].indexOf(n)) {
    throw new Error(Object(r.a)(3, e));
  }
  var i = e.substring(t + 1, e.length - 1).split(",");
  return {
    type: n,
    values: i = i.map(function (e) {
      return parseFloat(e);
    })
  };
}
function a(e) {
  var t = e.type;
  var n = e.values;
  if (-1 !== t.indexOf("rgb")) {
    n = n.map(function (e, t) {
      return t < 3 ? parseInt(e, 10) : e;
    });
  } else {
    if (-1 !== t.indexOf("hsl")) {
      n[1] = "".concat(n[1], "%");
      n[2] = "".concat(n[2], "%");
    }
  }
  return "".concat(t, "(").concat(n.join(", "), ")");
}
function s(e, t) {
  var n = c(e);
  var r = c(t);
  return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
function c(e) {
  var t = "hsl" === (e = o(e)).type ? o(function (e) {
    var t = (e = o(e)).values;
    var n = t[0];
    var r = t[1] / 100;
    var i = t[2] / 100;
    var s = r * Math.min(i, 1 - i);
    var c = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12;
      return i - s * Math.max(Math.min(t - 3, 9 - t, 1), -1);
    };
    var u = "rgb";
    var l = [Math.round(255 * c(0)), Math.round(255 * c(8)), Math.round(255 * c(4))];
    if ("hsla" === e.type) {
      u += "a";
      l.push(t[3]);
    }
    return a({
      type: u,
      values: l
    });
  }(e)).values : e.values;
  t = t.map(function (e) {
    return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
  });
  return Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function u(e, t) {
  return l(e, t);
}
function l(e, t) {
  e = o(e);
  t = i(t);
  if (!("rgb" !== e.type && "hsl" !== e.type)) {
    e.type += "a";
  }
  e.values[3] = t;
  return a(e);
}
function f(e, t) {
  e = o(e);
  t = i(t);
  if (-1 !== e.type.indexOf("hsl")) {
    e.values[2] *= 1 - t;
  } else if (-1 !== e.type.indexOf("rgb")) {
    for (var n = 0; n < 3; n += 1) {
      e.values[n] *= 1 - t;
    }
  }
  return a(e);
}
function d(e, t) {
  e = o(e);
  t = i(t);
  if (-1 !== e.type.indexOf("hsl")) {
    e.values[2] += (100 - e.values[2]) * t;
  } else if (-1 !== e.type.indexOf("rgb")) {
    for (var n = 0; n < 3; n += 1) {
      e.values[n] += (255 - e.values[n]) * t;
    }
  }
  return a(e);
}
export default l;