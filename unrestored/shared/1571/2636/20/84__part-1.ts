/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：84__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as a from "../7"
import * as /* [auto-meaningful-name] */$$_15 from "../../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$$_48_index from "../48/index"
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
  return (_ = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */c$length
    var o
    var a
    var s
    var c = arguments
    return RegeneratorRuntime1.wrap(function (e) {
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
  return (C = a.a(RegeneratorRuntime1.mark(function e(t) {
    return RegeneratorRuntime1.wrap(function (e) {
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
  return (S = a.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */c$length
    var o
    var a
    var c = arguments
    return RegeneratorRuntime1.wrap(function (e) {
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
function A(e, t) {
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
var I = Promise.all([])
function j(e) {
  I = Promise.all(e)
}
function N() {
  return R.apply(this, arguments)
}
function R() {
  return (R = a.a(RegeneratorRuntime1.mark(function e() {
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return I
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
function W(e) {
  m(r.SHAKE, e)
}
function U(e, t) {
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
function Ae(e, t) {
  p(r.PRESS, e, t)
}
function Ie(e, t) {
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
function We(e, t) {
  p(r.CHANGE, e, t)
}
function Ue(e, t, n) {
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
  return At.apply(this, arguments)
}
function At() {
  return (At = a.a(RegeneratorRuntime1.mark(function e(t, n, o) {
    var a
    var /* [auto-meaningful-name] */$$_48_index$a$getState$currentScreenId
    var /* [auto-meaningful-name] */f$length
    var u
    var d
    var p
    var f = arguments
    return RegeneratorRuntime1.wrap(function (e) {
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
function It(e, t) {
  return jt.apply(this, arguments)
}
function jt() {
  return (jt = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */u$length
    var a
    var s
    var c
    var u = arguments
    return RegeneratorRuntime1.wrap(function (e) {
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
export { r }
export { p }
export { f }
export { h }
export { m }
export { g }
export { v }
export { b }
export { y }
export { E }
export { O }
export { w }
export { T }
export { A }
export { j }
export { N }
export { k }
export { x }
export { D }
export { M }
export { L }
export { P }
export { B }
export { F }
export { G }
export { W }
export { U }
export { H }
export { V }
export { z }
export { Y }
export { K }
export { q }
export { X }
export { Q }
export { Z }
export { J }
export { $ }
export { ee }
export { te }
export { ne }
export { re }
export { oe }
export { ie }
export { ae }
export { se }
export { ce }
export { le }
export { ue }
export { de }
export { pe }
export { fe }
export { he }
export { me }
export { ge }
export { _e }
export { ve }
export { be }
export { ye }
export { Ee }
export { Oe }
export { we }
export { Ce }
export { Te }
export { Se }
export { Ae }
export { Ie }
export { je }
export { Ne }
export { Re }
export { ke }
export { xe }
export { De }
export { Me }
export { Le }
export { Pe }
export { Be }
export { Fe }
export { Ge }
export { We }
export { Ue }
export { He }
export { Ve }
export { ze }
export { Ye }
export { Ke }
export { qe }
export { Xe }
export { Qe }
export { Ze }
export { Je }
export { $e }
export { et }
export { tt }
export { nt }
export { rt }
export { ot }
export { it }
export { at }
export { st }
export { ct }
export { lt }
export { ut }
export { dt }
export { pt }
export { ft }
export { ht }
export { mt }
export { gt }
export { _t }
export { vt }
export { bt }
export { yt }
export { Et }
export { Ot }
export { wt }
export { Ct }
export { Tt }
export { St }
export { It }
export { Nt }
export { Rt }
export { kt }
export { xt }
export { Dt }
export { Mt }
export { Lt }
export { Pt }
