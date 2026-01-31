/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：692__part-1
 */

"use strict"

import { w, E, C, O } from "./692__part-0"
import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_1048_416 from "../../1048/416"
var S = ["prepare", "start", "active", "end"]
function T(e) {
  return "active" === e || "end" === e
}
var B = function (e, t) {
  var n = useState("none")
  var r = $$_$$_40_index.a(n, 2)
  var i = r[0]
  var a = r[1]
  var c = function () {
    var e = useRef(null)
    function t() {
      $$_$$_1048_416.a.cancel(e.current)
    }
    useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [
      function n(r) {
        var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
        t()
        var o = $$_$$_1048_416.a(function () {
          if (i <= 1) {
            r({
              isCanceled: function () {
                return o !== e.current
              }
            })
          } else {
            n(r, i - 1)
          }
        })
        e.current = o
      }, t
    ]
  }()
  var u = $$_$$_40_index.a(c, 2)
  var l = u[0]
  var f = u[1]
  O(function () {
    if ("none" !== i && "end" !== i) {
      var e = S.indexOf(i)
      var n = S[e + 1]
      var r = t(i)
      if (false === r) {
        a(n)
      } else {
        l(function (e) {
          function t() {
            if (!e.isCanceled()) {
              a(n)
            }
          }
          if (true === r) {
            t()
          } else {
            Promise.resolve(r).then(t)
          }
        })
      }
    }
  }, [e, i])
  useEffect(function () {
    return function () {
      f()
    }
  }, [])
  return [
    function () {
      a("prepare")
    }, i
  ]
}
function D(e, t, n, a) {
  var /* [auto-meaningful-name] */a$motionEnter = a.motionEnter
  var u = undefined === a$motionEnter || a$motionEnter
  var /* [auto-meaningful-name] */a$motionAppear = a.motionAppear
  var f = undefined === a$motionAppear || a$motionAppear
  var /* [auto-meaningful-name] */a$motionLeave = a.motionLeave
  var h = undefined === a$motionLeave || a$motionLeave
  var /* [auto-meaningful-name] */a$motionDeadline = a.motionDeadline
  var /* [auto-meaningful-name] */a$motionLeaveImmediately = a.motionLeaveImmediately
  var /* [auto-meaningful-name] */a$onAppearPrepare = a.onAppearPrepare
  var /* [auto-meaningful-name] */a$onEnterPrepare = a.onEnterPrepare
  var /* [auto-meaningful-name] */a$onLeavePrepare = a.onLeavePrepare
  var /* [auto-meaningful-name] */a$onAppearStart = a.onAppearStart
  var /* [auto-meaningful-name] */a$onEnterStart = a.onEnterStart
  var /* [auto-meaningful-name] */a$onLeaveStart = a.onLeaveStart
  var /* [auto-meaningful-name] */a$onAppearActive = a.onAppearActive
  var /* [auto-meaningful-name] */a$onEnterActive = a.onEnterActive
  var /* [auto-meaningful-name] */a$onLeaveActive = a.onLeaveActive
  var /* [auto-meaningful-name] */a$onAppearEnd = a.onAppearEnd
  var /* [auto-meaningful-name] */a$onEnterEnd = a.onEnterEnd
  var /* [auto-meaningful-name] */a$onLeaveEnd = a.onLeaveEnd
  var /* [auto-meaningful-name] */a$onVisibleChanged = a.onVisibleChanged
  var P = C()
  var N = $$_$$_40_index.a(P, 2)
  var M = N[0]
  var L = N[1]
  var j = C("none")
  var U = $$_$$_40_index.a(j, 2)
  var H = U[0]
  var V = U[1]
  var G = C(null)
  var z = $$_$$_40_index.a(G, 2)
  var Q = z[0]
  var W = z[1]
  var K = useRef(false)
  var X = useRef(null)
  var Y = useRef(false)
  var q = useRef(null)
  function $() {
    return n() || q.current
  }
  var J = useRef(false)
  function Z(e) {
    var t
    var n = $()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === H && J.current) {
        t = null === a$onAppearEnd || undefined === a$onAppearEnd ? undefined : a$onAppearEnd(n, e)
      } else {
        if ("enter" === H && J.current) {
          t = null === a$onEnterEnd || undefined === a$onEnterEnd ? undefined : a$onEnterEnd(n, e)
        } else {
          if ("leave" === H && J.current) {
            t = null === a$onLeaveEnd || undefined === a$onLeaveEnd ? undefined : a$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || Y.current)) {
        V("none")
        W(null)
      }
    }
  }
  var ee = function (e) {
    var t = useRef()
    var n = useRef(e)
    n.current = e
    var r = useCallback(function (e) {
      n.current(e)
    }, [])
    function i(e) {
      if (e) {
        e.removeEventListener(E, r)
        e.removeEventListener(w, r)
      }
    }
    useEffect(function () {
      return function () {
        i(t.current)
      }
    }, [])
    return [
      function (e) {
        if (t.current && t.current !== e) {
          i(t.current)
        }
        if (e && e !== t.current) {
          e.addEventListener(E, r)
          e.addEventListener(w, r)
          t.current = e
        }
      }, i
    ]
  }(Z)
  var te = $$_$$_40_index.a(ee, 1)[0]
  var ne = useMemo(function () {
    var e
    var t
    var n
    switch (H) {
      case "appear":
        e = {}
        $$_$$_35.a(e, "prepare", a$onAppearPrepare)
        $$_$$_35.a(e, "start", a$onAppearStart)
        $$_$$_35.a(e, "active", a$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_$$_35.a(t, "prepare", a$onEnterPrepare)
        $$_$$_35.a(t, "start", a$onEnterStart)
        $$_$$_35.a(t, "active", a$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_$$_35.a(n, "prepare", a$onLeavePrepare)
        $$_$$_35.a(n, "start", a$onLeaveStart)
        $$_$$_35.a(n, "active", a$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [H])
  var re = B(H, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */ne$prepare = ne.prepare
      return !!ne$prepare && ne$prepare($())
    }
    var n
    if (ae in ne) {
      W((null === (n = ne[ae]) || undefined === n ? undefined : n.call(ne, $(), null)) || null)
    }
    if ("active" === ae) {
      te($())
      if (a$motionDeadline > 0) {
        clearTimeout(X.current)
        X.current = setTimeout(function () {
          Z({
            deadline: true
          })
        }, a$motionDeadline)
      }
    }
    return true
  })
  var ie = $$_$$_40_index.a(re, 2)
  var oe = ie[0]
  var ae = ie[1]
  var se = T(ae)
  J.current = se
  O(function () {
    L(t)
    var n
    var /* [auto-meaningful-name] */K$current = K.current
    K.current = true
    if (e) {
      if (!K$current && t && f) {
        n = "appear"
      }
      if (K$current && t && u) {
        n = "enter"
      }
      if (K$current && !t && h || !K$current && a$motionLeaveImmediately && !t && h) {
        n = "leave"
      }
      if (n) {
        V(n)
        oe()
      }
    }
  }, [t])
  useEffect(function () {
    if ("appear" === H && !f || "enter" === H && !u || "leave" === H && !h) {
      V("none")
    }
  }, [f, u, h])
  useEffect(function () {
    return function () {
      clearTimeout(X.current)
      Y.current = true
    }
  }, [])
  useEffect(function () {
    if (undefined !== M && "none" === H) {
      if (!(null === a$onVisibleChanged || undefined === a$onVisibleChanged)) {
        a$onVisibleChanged(M)
      }
    }
  }, [M, H])
  var ce = Q
  if (ne.prepare && "start" === ae) {
    ce = $$_$$_21.a({
      transition: "none"
    }, ce)
  }
  return [H, ae, ce, null !== M && undefined !== M ? M : t]
}
export { T }
export { D }
