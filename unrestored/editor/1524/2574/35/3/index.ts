"use strict";

export { v as a } from "./92";
export { l as b } from "./92";
export { s as c } from "./92";
export { j as d } from "./92";
export { u as e } from "./92";
export { x as f } from "./92";
export { f as g };
export { h };
require("./229");
require("../../19");
var r = require("./179");
var i = require("./92");
require("./981");
var o = function (e) {
  return {
    done: !0,
    value: e
  };
};
var a = {};
function s(e) {
  return Object(r.b)(e) ? "channel" : Object(r.l)(e) ? String(e) : Object(r.d)(e) ? e.name : String(e);
}
function c(e, t, n) {
  var r;
  var s;
  var c;
  var u = t;
  function l(t, n) {
    if (u === a) {
      return o(t);
    }
    if (n && !s) {
      throw u = a, n;
    }
    if (r) {
      r(t);
    }
    var i = n ? e[s](n) : e[u]();
    u = i.nextState;
    c = i.effect;
    r = i.stateUpdater;
    s = i.errorState;
    return u === a ? o(t) : c;
  }
  return Object(i.N)(l, function (e) {
    return l(null, e);
  }, n);
}
function u(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) {
    r[o - 2] = arguments[o];
  }
  var a;
  var u = {
    done: !1,
    value: Object(i.i)(e)
  };
  var l = function (e) {
    return {
      done: !1,
      value: i.j.apply(void 0, [t].concat(r, [e]))
    };
  };
  var f = function (e) {
    return a = e;
  };
  return c({
    q1: function () {
      return {
        nextState: "q2",
        effect: u,
        stateUpdater: f
      };
    },
    q2: function () {
      return {
        nextState: "q1",
        effect: l(a)
      };
    }
  }, "q1", "takeEvery(" + s(e) + ", " + t.name + ")");
}
function l(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) {
    r[o - 2] = arguments[o];
  }
  var a;
  var u;
  var l = {
    done: !1,
    value: Object(i.i)(e)
  };
  var f = function (e) {
    return {
      done: !1,
      value: i.j.apply(void 0, [t].concat(r, [e]))
    };
  };
  var h = function (e) {
    return {
      done: !1,
      value: Object(i.k)(e)
    };
  };
  var d = function (e) {
    return a = e;
  };
  var p = function (e) {
    return u = e;
  };
  return c({
    q1: function () {
      return {
        nextState: "q2",
        effect: l,
        stateUpdater: p
      };
    },
    q2: function () {
      return a ? {
        nextState: "q3",
        effect: h(a)
      } : {
        nextState: "q1",
        effect: f(u),
        stateUpdater: d
      };
    },
    q3: function () {
      return {
        nextState: "q1",
        effect: f(u),
        stateUpdater: d
      };
    }
  }, "q1", "takeLatest(" + s(e) + ", " + t.name + ")");
}
function f(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) {
    r[o - 2] = arguments[o];
  }
  return i.j.apply(void 0, [u, e, t].concat(r));
}
function h(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) {
    r[o - 2] = arguments[o];
  }
  return i.j.apply(void 0, [l, e, t].concat(r));
}