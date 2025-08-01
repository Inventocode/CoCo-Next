"use strict";

export { O as b };
export { w as a };
var r = {};
Object.defineProperty(r, "borderColorEnhance", {
  get: function () {
    return p;
  }
});
Object.defineProperty(r, "backgroundColorEnhance", {
  get: function () {
    return f;
  }
});
Object.defineProperty(r, "defaultContainedError", {
  get: function () {
    return h;
  }
});
Object.defineProperty(r, "defaultOutlineError", {
  get: function () {
    return m;
  }
});
var o = {};
Object.defineProperty(o, "buttonPress", {
  get: function () {
    return v;
  }
});
var i = {};
Object.defineProperty(i, "checkNormal", {
  get: function () {
    return b;
  }
});
var a = require("../../25/index");
var s = require("../../11");
var c = require("../../5");
var l = require("../../204");
var u = require("../../51/index");
var d = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(u);
function p(e, t) {
  return [Object(l.default)({
    targets: "#".concat(e),
    borderColor: d()(t).darken(.3).hex(),
    duration: 2e3
  })];
}
function f(e, t) {
  return [Object(l.default)({
    targets: "#".concat(e),
    backgroundColor: d()(t).darken(.3).alpha(.1).rgb().string(),
    duration: 2e3
  })];
}
function h(e) {
  return [Object(l.default)({
    targets: "#".concat(e, " input"),
    translateX: [-4, 4, -2, 2, -1, 1, 0],
    duration: 300,
    easing: "linear"
  })];
}
function m(e) {
  return [Object(l.default)({
    targets: "#".concat(e, " input"),
    translateX: [-4, 4, -2, 2, -1, 1, 0],
    duration: 300,
    easing: "linear"
  })];
}
var g;
var _ = require("../../729/302");
function v(e, t) {
  var n = document.querySelectorAll("#".concat(e, " .radio-widget-button"))[t];
  return n ? [Object(l.default)({
    targets: n,
    scale: [{
      value: .95,
      duration: 100
    }, {
      value: 1,
      duration: 200
    }]
  })] : [];
}
function b(e, t) {
  var n = document.querySelectorAll("#".concat(e, " .checkbox-widget-box "))[t];
  return n ? [Object(l.default)({
    targets: n.querySelector("svg"),
    scale: [.8, 1.2],
    duration: 500
  })] : [];
}
g = {};
Object(s.a)(g, c.w, r);
Object(s.a)(g, c.d, _);
Object(s.a)(g, c.C, o);
Object(s.a)(g, c.g, i);
var y = g;
var E = new Map();
function O(e, t, n) {
  w(e);
  var r = y[t];
  if (n && r && n in r) {
    for (var o = arguments.length, i = new Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) {
      i[s - 3] = arguments[s];
    }
    var c = r[n].apply(r, [e].concat(i));
    E.set(e, [].concat(Object(a.a)(E.get(e) || []), Object(a.a)(c)));
  }
}
function w(e) {
  var t = E.get(e);
  if (t) {
    t.reverse().forEach(function (e) {
      return e.reset();
    });
  }
  E.set(e, []);
}
export default w;