/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3
 */

"use strict"

export { v as a } from "./486/92"
export { l as b } from "./486/92"
export { s as c } from "./486/92"
export { j as d } from "./486/92"
export { u as e } from "./486/92"
export { x as f } from "./486/92"
export { f as g }
export { d as h }
require("./486/229")
require("../19")
import /* [auto-meaningful-name] */$_486_179 = require("./486/179")
import /* [auto-meaningful-name] */$_486_92 = require("./486/92")
require("./486/982")
var o = function (e) {
  return {
    done: true,
    value: e
  }
}
var a = {}
function s(e) {
  return $_486_179.b(e) ? "channel" : $_486_179.l(e) ? String(e) : $_486_179.d(e) ? e.name : String(e)
}
function c(e, t, n) {
  var /* [auto-meaningful-name] */i$stateUpdater
  var /* [auto-meaningful-name] */i$errorState
  var /* [auto-meaningful-name] */i$effect
  var u = t
  function l(t, n) {
    if (u === a) {
      return o(t)
    }
    if (n && !i$errorState) {
      u = a
      throw n
    }
    if (i$stateUpdater) {
      i$stateUpdater(t)
    }
    var i = n ? e[i$errorState](n) : e[u]()
    u = i.nextState
    i$effect = i.effect
    i$stateUpdater = i.stateUpdater
    i$errorState = i.errorState
    return u === a ? o(t) : i$effect
  }
  return $_486_92.N(l, function (e) {
    return l(null, e)
  }, n)
}
function u(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var a
  var u = {
    done: false,
    value: $_486_92.i(e)
  }
  var l = function (e) {
    return {
      done: false,
      value: $_486_92.j.apply(undefined, [t].concat(r, [e]))
    }
  }
  var f = function (e) {
    return a = e
  }
  return c({
    q1: function () {
      return {
        nextState: "q2",
        effect: u,
        stateUpdater: f
      }
    },
    q2: function () {
      return {
        nextState: "q1",
        effect: l(a)
      }
    }
  }, "q1", "takeEvery(" + s(e) + ", " + t.name + ")")
}
function l(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var a
  var u
  var l = {
    done: false,
    value: $_486_92.i(e)
  }
  var f = function (e) {
    return {
      done: false,
      value: $_486_92.j.apply(undefined, [t].concat(r, [e]))
    }
  }
  var d = function (e) {
    return {
      done: false,
      value: $_486_92.k(e)
    }
  }
  var h = function (e) {
    return a = e
  }
  var p = function (e) {
    return u = e
  }
  return c({
    q1: function () {
      return {
        nextState: "q2",
        effect: l,
        stateUpdater: p
      }
    },
    q2: function () {
      return a ? {
        nextState: "q3",
        effect: d(a)
      } : {
        nextState: "q1",
        effect: f(u),
        stateUpdater: h
      }
    },
    q3: function () {
      return {
        nextState: "q1",
        effect: f(u),
        stateUpdater: h
      }
    }
  }, "q1", "takeLatest(" + s(e) + ", " + t.name + ")")
}
function f(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  return $_486_92.j.apply(undefined, [u, e, t].concat(r))
}
function d(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  return $_486_92.j.apply(undefined, [l, e, t].concat(r))
}
