/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：84
 */

"use strict"

export { r as a }
export { p as b }
export { f as xc }
export { h as Mb }
export { m as cb }
export { g as db }
export { v as tb }
export { b as nc }
export { y as bb }
export { E as ec }
export { O as Ob }
export { w as Z }
export { T as Y }
export { I as dc }
export { j as Nb }
export { N as B }
export { k as I }
export { x as Ub }
export { D as J }
export { M as Vb }
export { L as G }
export { P as Sb }
export { B as H }
export { F as Tb }
export { G as ub }
export { U as eb }
export { W as vb }
export { H as oc }
export { V as pc }
export { z as qc }
export { Y as s }
export { K as wb }
export { q as u }
export { X as yb }
export { Q as v }
export { Z as zb }
export { J as t }
export { $ as xb }
export { ee as fc }
export { te as K }
export { ne as Wb }
export { re as L }
export { oe as Xb }
export { ie as M }
export { ae as Yb }
export { se as hb }
export { ce as gc }
export { le as jb }
export { ue as ic }
export { de as kb }
export { pe as jc }
export { fe as ib }
export { he as hc }
export { me as Fb }
export { ge as sc }
export { _e as d }
export { ve as N }
export { be as f }
export { ye as P }
export { Ee as g }
export { Oe as Q }
export { we as e }
export { Ce as O }
export { Te as Zb }
export { Se as R }
export { Ie as Pb }
export { Ae as C }
export { je as Qb }
export { Ne as E }
export { Re as Rb }
export { ke as F }
export { xe as c }
export { De as D }
export { Me as o }
export { Le as ob }
export { Pe as i }
export { Be as T }
export { Fe as j }
export { Ge as U }
export { Ue as h }
export { We as S }
export { He as vc }
export { Ve as Jb }
export { ze as uc }
export { Ye as Ib }
export { Ke as tc }
export { qe as Hb }
export { Xe as z }
export { Qe as Db }
export { Ze as w }
export { Je as Ab }
export { $e as y }
export { et as Cb }
export { tt as x }
export { nt as Bb }
export { rt as p }
export { ot as qb }
export { it as q }
export { at as rb }
export { st as r }
export { ct as sb }
export { lt as mc }
export { ut as pb }
export { dt as k }
export { pt as nb }
export { ft as n }
export { ht as gb }
export { mt as m }
export { gt as fb }
export { _t as l }
export { vt as ab }
export { bt as A }
export { yt as Gb }
export { Et as lc }
export { Ot as mb }
export { wt as kc }
export { Ct as lb }
export { Tt as wc }
export { St as Kb }
export { At as Lb }
export { Nt as ac }
export { Rt as cc }
export { kt as X }
export { xt as V }
export { Dt as bc }
export { Mt as W }
export { Lt as rc }
export { Pt as Eb }
var r
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(RegeneratorRuntime)
import a = require("../7")
import /* [auto-meaningful-name] */$$_15 = require("../15")
import /* [auto-meaningful-name] */$$_48_index = require("../48/index")
var l = new Map()
var /* [auto-meaningful-name] */_APP_ = "!@_APP_@!"
function d(e) {
  return l.get(e)
}
function p(e, t, n) {
  var r = d(t)
  if (!r) {
    (function (e, t) {
      l.set(e, t)
    })(t, r = new Map())
  }
  var o = r.get(e)
  if (o) {
    o.push(n)
  } else {
    r.set(e, [n])
  }
}
function f(e, t, n) {
  var r = d(t)
  if (r) {
    var o = r.get(e)
    if (o) {
      var i = o.findIndex(function (e) {
        return e === n
      })
      if (i > -1) {
        o.splice(i, 1)
      }
    }
  }
}
function h(e, t) {
  var n
  var r = d(t)
  if (r) {
    n = r.get(e)
  }
  return n || []
}
function m(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  var i = h(e, t)
  i.forEach(function (e) {
    e.call.apply(e, [undefined].concat(r))
  })
}
function g(e, t) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = a.a(i.a.mark(function e(t, n) {
    var /* [auto-meaningful-name] */c$length
    var o
    var a
    var s
    var c = arguments
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            for (c$length = c.length, o = new Array(c$length > 2 ? c$length - 2 : 0), a = 2; a < c$length; a++) {
              o[a - 2] = c[a]
            }
            s = h(t, n)
            e.next = 4
            return Promise.all(s.map(function (e) {
              return e.call.apply(e, [undefined].concat(o))
            }))
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function v(e) {
  m(r.ERROR, "!@_RUNTIME_LOG_@!", e)
}
function b(e) {
  p(r.ERROR, "!@_RUNTIME_LOG_@!", e)
}
function y() {
  m(r.SHAKE, "!@_DEVICE_@!")
}
function E(e) {
  p(r.SHAKE, "!@_DEVICE_@!", e)
}
function O(e) {
  f(r.SHAKE, "!@_DEVICE_@!", e)
}
function w(e) {
  return C.apply(this, arguments)
}
function C() {
  return (C = a.a(i.a.mark(function e(t) {
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return g(r.CUSTOM, t)
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function T(e) {
  return S.apply(this, arguments)
}
function S() {
  return (S = a.a(i.a.mark(function e(t) {
    var /* [auto-meaningful-name] */c$length
    var o
    var a
    var c = arguments
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_15.lb(10)
          case 2:
            for (c$length = c.length, o = new Array(c$length > 1 ? c$length - 1 : 0), a = 1; a < c$length; a++) {
              o[a - 1] = c[a]
            }
            m.apply(undefined, [r.CUSTOM, t].concat(o))
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function I(e, t) {
  p(r.CUSTOM, e, t)
}
!function (e) {
  e.ACTIVE = "ACTIVE"
  e.BACKGROUND = "BACKGROUND"
  e.BLUR = "BLUR"
  e.CHANGE = "CHANGE"
  e.CUSTOM = "CUSTOM"
  e.ERROR = "ERROR"
  e.FOCUS = "FOCUS"
  e.MOUNT = "MOUNT"
  e.PRESS = "PRESS"
  e.PRESS_IN = "PRESS_IN"
  e.PRESS_OUT = "PRESS_OUT"
  e.PRESS_HOLD = "PRESS_HOLD"
  e.SELECTED = "SELECTED"
  e.UNSELECTED = "UNSELECTED"
  e.SHAKE = "SHAKE"
  e.SWITCH_TO = "SWITCH_TO"
  e.SCREEN_OPEN = "SCREEN_OPEN"
  e.UNMOUNT = "UNMOUNT"
  e.SWIPE = "SWIPE"
  e.START_LOAD = "START_LOAD"
  e.LOADED = "LOADED"
  e.LOADED_ERROR = "LOADED_ERROR"
  e.START_TO_SLIDE = "START_TO_SLIDE"
  e.END_TO_SLIDE = "END_TO_SLIDE"
  e.CLOUD_DOCUMENT_ERROR = "CLOUD_DOCUMENT_ERROR"
  e.HTTP_CLIENT_SUCCESS = "HTTP_CLIENT_SUCCESS"
  e.HTTP_CLIENT_ERROR = "HTTP_CLIENT_ERROR"
  e.ROOM_MESSAGE = "ROOM_MESSAGE"
  e.ROOM_MEMBER_JOIN = "ROOM_MEMBER_JOIN"
  e.ROOM_MEMBER_LEAVE = "ROOM_MEMBER_LEAVE"
  e.ROOM_ERROR = "ROOM_ERROR"
  e.DATA_PICKER_SELECT_DONE = "DATA_PICKER_SELECT_DONE"
  e.TIME_PICKER_SELECT_DONE = "TIME_PICKER_SELECT_DONE"
  e.WIDGET_EVENT = "WIDGET_EVENT"
  e.CLOUD_DB_ERROR = "CLOUD_DB_ERROR"
  e.CLOUD_DICT_ERROR = "CLOUD_DICT_ERROR"
  e.CLOUD_TABLE_ERROR = "CLOUD_TABLE_ERROR"
}(r || (r = {}))
var A = Promise.all([])
function j(e) {
  A = Promise.all(e)
}
function N() {
  return R.apply(this, arguments)
}
function R() {
  return (R = a.a(i.a.mark(function e() {
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return A
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function k() {
  m(r.MOUNT, _APP_)
}
function x(e) {
  p(r.MOUNT, _APP_, e)
}
function D() {
  m(r.UNMOUNT, _APP_)
}
function M(e) {
  p(r.UNMOUNT, _APP_, e)
}
function L() {
  m(r.ACTIVE, _APP_)
}
function P(e) {
  p(r.ACTIVE, _APP_, e)
}
function B() {
  m(r.BACKGROUND, _APP_)
}
function F(e) {
  p(r.BACKGROUND, _APP_, e)
}
function G(e) {
  m(r.MOUNT, e)
}
function U(e) {
  m(r.SHAKE, e)
}
function W(e, t) {
  m(r.SCREEN_OPEN, e, t)
}
function H(e, t) {
  p(r.MOUNT, e, t)
}
function V(e, t) {
  p(r.SCREEN_OPEN, e, t)
}
function z(e, t) {
  p(r.PRESS_IN, e, t)
}
function Y(e, t) {
  p(r.PRESS, e, t)
}
function K(e, t, n) {
  m(r.PRESS, e, Math.ceil(t), Math.ceil(n))
}
function q(e, t) {
  p(r.PRESS_IN, e, t)
}
function X(e, t, n) {
  m(r.PRESS_IN, e, Math.ceil(t), Math.ceil(n))
}
function Q(e, t) {
  p(r.PRESS_OUT, e, t)
}
function Z(e, t, n) {
  m(r.PRESS_OUT, e, Math.ceil(t), Math.ceil(n))
}
function J(e, t) {
  p(r.PRESS_HOLD, e, t)
}
function $(e, t, n) {
  return g(r.PRESS_HOLD, e, Math.ceil(t), Math.ceil(n))
}
function ee(e, t) {
  p(r.SHAKE, e, t)
}
function te(e) {
  m(r.PRESS, e)
}
function ne(e, t) {
  p(r.PRESS, e, t)
}
function re(e) {
  m(r.PRESS_IN, e)
}
function oe(e, t) {
  p(r.PRESS_IN, e, t)
}
function ie(e) {
  m(r.PRESS_OUT, e)
}
function ae(e, t) {
  p(r.PRESS_OUT, e, t)
}
function se(e) {
  m(r.PRESS_OUT, e)
}
function ce(e, t) {
  p(r.PRESS_OUT, e, t)
}
function le(e) {
  m(r.CHANGE, e)
}
function ue(e, t) {
  p(r.CHANGE, e, t)
}
function de(e) {
  m(r.FOCUS, e)
}
function pe(e, t) {
  p(r.FOCUS, e, t)
}
function fe(e) {
  m(r.BLUR, e)
}
function he(e, t) {
  p(r.BLUR, e, t)
}
function me(e) {
  m(r.PRESS_OUT, e)
}
function ge(e, t) {
  p(r.PRESS_OUT, e, t)
}
function _e(e, t) {
  p(r.PRESS, e, t)
}
function ve(e, t) {
  m(r.PRESS, e, Math.round(t.x), Math.round(t.y))
}
function be(e, t) {
  p(r.PRESS_IN, e, t)
}
function ye(e, t) {
  m(r.PRESS_IN, e, Math.round(t.x), Math.round(t.y))
}
function Ee(e, t) {
  p(r.PRESS_OUT, e, t)
}
function Oe(e, t) {
  m(r.PRESS_OUT, e, Math.round(t.x), Math.round(t.y))
}
function we(e, t) {
  p(r.PRESS_HOLD, e, t)
}
function Ce(e, t) {
  return g(r.PRESS_HOLD, e, Math.round(t.x), Math.round(t.y))
}
function Te(e, t) {
  p(r.SWIPE, e, t)
}
function Se(e, t) {
  m(r.SWIPE, e, t)
}
function Ie(e, t) {
  p(r.PRESS, e, t)
}
function Ae(e, t) {
  m(r.PRESS, e, Math.round(t.x), Math.round(t.y))
}
function je(e, t) {
  p(r.PRESS_IN, e, t)
}
function Ne(e, t) {
  m(r.PRESS_IN, e, Math.round(t.x), Math.round(t.y))
}
function Re(e, t) {
  p(r.PRESS_OUT, e, t)
}
function ke(e, t) {
  m(r.PRESS_OUT, e, Math.round(t.x), Math.round(t.y))
}
function xe(e, t) {
  p(r.PRESS_HOLD, e, t)
}
function De(e, t) {
  return g(r.PRESS_HOLD, e, Math.round(t.x), Math.round(t.y))
}
function Me(e, t) {
  p(r.SELECTED, e, t)
}
function Le(e, t, n) {
  m(r.SELECTED, e, t, n)
}
function Pe(e, t) {
  p(r.SELECTED, e, t)
}
function Be(e, t, n) {
  m(r.SELECTED, e, t, n)
}
function Fe(e, t) {
  p(r.UNSELECTED, e, t)
}
function Ge(e, t, n) {
  m(r.UNSELECTED, e, t, n)
}
function Ue(e, t) {
  p(r.CHANGE, e, t)
}
function We(e, t, n) {
  m(r.CHANGE, e, t, n)
}
function He(e, t) {
  p(r.START_LOAD, e, t)
}
function Ve(e) {
  m(r.START_LOAD, e)
}
function ze(e, t) {
  p(r.LOADED, e, t)
}
function Ye(e) {
  m(r.LOADED, e)
}
function Ke(e, t) {
  p(r.LOADED_ERROR, e, t)
}
function qe(e) {
  m(r.LOADED_ERROR, e)
}
function Xe(e, t) {
  p(r.CHANGE, e, t)
}
function Qe(e, t) {
  m(r.CHANGE, e, t)
}
function Ze(e, t) {
  p(r.CHANGE, e, t)
}
function Je(e, t) {
  m(r.CHANGE, e, t)
}
function $e(e, t) {
  p(r.START_TO_SLIDE, e, t)
}
function et(e, t) {
  m(r.START_TO_SLIDE, e, t)
}
function tt(e, t) {
  p(r.END_TO_SLIDE, e, t)
}
function nt(e, t) {
  m(r.END_TO_SLIDE, e, t)
}
function rt(e) {
  p(r.ROOM_MEMBER_JOIN, _APP_, e)
}
function ot(e) {
  m(r.ROOM_MEMBER_JOIN, _APP_, e)
}
function it(e) {
  p(r.ROOM_MEMBER_LEAVE, _APP_, e)
}
function at(e) {
  m(r.ROOM_MEMBER_LEAVE, _APP_, e)
}
function st(e, t) {
  p(r.ROOM_MESSAGE, e, t)
}
function ct(e, t) {
  m(r.ROOM_MESSAGE, e, t)
}
function lt(e) {
  p(r.ROOM_ERROR, _APP_, e)
}
function ut(e) {
  m(r.ROOM_ERROR, _APP_, e)
}
function dt(e, t) {
  p(r.CLOUD_DOCUMENT_ERROR, e, t)
}
function pt(e, t, n) {
  m(r.CLOUD_DOCUMENT_ERROR, e, t, n)
}
function ft(e, t) {
  p(r.HTTP_CLIENT_SUCCESS, e, t)
}
function ht(e, t, n) {
  m(r.HTTP_CLIENT_SUCCESS, e, t, n)
}
function mt(e, t) {
  p(r.HTTP_CLIENT_ERROR, e, t)
}
function gt(e, t, n) {
  m(r.HTTP_CLIENT_ERROR, e, t, n)
}
function _t(e, t) {
  p(r.DATA_PICKER_SELECT_DONE, e, t)
}
function vt(e, t, n, o, i) {
  m(r.DATA_PICKER_SELECT_DONE, e, t, n, o, i)
}
function bt(e, t) {
  p(r.TIME_PICKER_SELECT_DONE, e, t)
}
function yt(e, t, n, o, i) {
  m(r.TIME_PICKER_SELECT_DONE, e, t, n, o, i)
}
function Et(e, t) {
  p(r.PRESS, e, t)
}
function Ot(e, t) {
  m(r.PRESS, e, t)
}
function wt(e, t) {
  p(r.PRESS, e, t)
}
function Ct(e, t) {
  m(r.PRESS, e, t)
}
function Tt(e, t, n, o) {
  var i = [e, t, n].join("_@@_")
  p(r.WIDGET_EVENT, i, o)
}
function St(e, t, n) {
  return It.apply(this, arguments)
}
function It() {
  return (It = a.a(i.a.mark(function e(t, n, o) {
    var a
    var /* [auto-meaningful-name] */$$_48_index$a$getState$currentScreenId
    var /* [auto-meaningful-name] */f$length
    var u
    var d
    var p
    var f = arguments
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            for (a = [t, n, o].join("_@@_"), $$_48_index$a$getState$currentScreenId = $$_48_index.a().getState().currentScreenId, f$length = f.length, u = new Array(f$length > 3 ? f$length - 3 : 0), d = 3; d < f$length; d++) {
              u[d - 3] = f[d]
            }
            m.apply(undefined, [r.WIDGET_EVENT, a].concat(u))
            p = [t, n, $$_48_index$a$getState$currentScreenId].join("_@@_")
            m.apply(undefined, [r.WIDGET_EVENT, p, o].concat(u))
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function At(e, t) {
  return jt.apply(this, arguments)
}
function jt() {
  return (jt = a.a(i.a.mark(function e(t, n) {
    var /* [auto-meaningful-name] */u$length
    var a
    var s
    var c
    var u = arguments
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            for (u$length = u.length, a = new Array(u$length > 2 ? u$length - 2 : 0), s = 2; s < u$length; s++) {
              a[s - 2] = u[s]
            }
            c = t + "_@@_" + n + "_@@_"
            Array.from(l.keys()).forEach(function (e) {
              if (e.startsWith(c)) {
                m.apply(undefined, [r.WIDGET_EVENT, e].concat(a))
              }
            })
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Nt(e) {
  p(r.CLOUD_DB_ERROR, _APP_, e)
}
function Rt(e, t) {
  p(r.CLOUD_TABLE_ERROR, e, t)
}
function kt(e, t) {
  var n = [JSON.parse(t).errorInfo]
  m.apply(undefined, [r.CLOUD_TABLE_ERROR, e].concat(n))
}
function xt(e) {
  var t = JSON.parse(e)
  var n = [t.cloudDBName, t.errorInfo]
  m.apply(undefined, [r.CLOUD_DB_ERROR, _APP_].concat(n))
}
function Dt(e, t) {
  p(r.CLOUD_DICT_ERROR, e, t)
}
function Mt(e, t) {
  m(r.CLOUD_DICT_ERROR, e, t)
}
function Lt(e, t) {
  p(r.CHANGE, e, t)
}
function Pt(e) {
  m(r.CHANGE, e)
}
export default r
