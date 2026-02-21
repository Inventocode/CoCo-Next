/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：560
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import { useEffect, createElement, forwardRef, useContext, createContext, useState, useRef, useMemo, useCallback, useLayoutEffect } from "react"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import * as /* [auto-meaningful-name] */$$_1545_800 from "../1545/800"
function d(e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$invalidate = e.invalidate
  var /* [auto-meaningful-name] */e$item = e.item
  var /* [auto-meaningful-name] */e$renderItem = e.renderItem
  var /* [auto-meaningful-name] */e$responsive = e.responsive
  var /* [auto-meaningful-name] */e$registerSize = e.registerSize
  var /* [auto-meaningful-name] */e$itemKey = e.itemKey
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$display = e.display
  var /* [auto-meaningful-name] */e$order = e.order
  var /* [auto-meaningful-name] */e$component = e.component
  var E = undefined === e$component ? "div" : e$component
  var O = $$_54.a(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"])
  var w = e$responsive && !e$display
  function C(e) {
    e$registerSize(e$itemKey, e)
  }
  useEffect(function () {
    return function () {
      C(null)
    }
  }, [])
  var T
  var S = e$renderItem && undefined !== e$item ? e$renderItem(e$item) : e$children
  if (!e$invalidate) {
    T = {
      opacity: w ? 0 : 1,
      height: w ? 0 : undefined,
      overflowY: w ? "hidden" : undefined,
      order: e$responsive ? e$order : undefined,
      pointerEvents: w ? "none" : undefined,
      position: w ? "absolute" : undefined
    }
  }
  var A = {}
  if (w) {
    A["aria-hidden"] = true
  }
  var I = createElement(E, $$_19.a({
    className: Classnames1(!e$invalidate && e$prefixCls, e$className),
    style: $$_21.a($$_21.a({}, T), e$style)
  }, A, O, {
    ref: t
  }), S)
  if (e$responsive) {
    I = createElement($$_1545_800.a, {
      onResize: function (e) {
        C(e.offsetWidth)
      }
    }, I)
  }
  return I
}
var p = forwardRef(d)
p.displayName = "Item"
var f = p
var h = function (e) {
  return +setTimeout(e, 16)
}
var m = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  h = function (e) {
    return window.requestAnimationFrame(e)
  }
  m = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var g = 0
var _ = new Map()
function v(e) {
  _.delete(e)
}
function b(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = g += 1
  function r(t) {
    if (0 === t) {
      v(n)
      e()
    } else {
      var o = h(function () {
        r(t - 1)
      })
      _.set(n, o)
    }
  }
  r(t)
  return n
}
b.cancel = function (e) {
  var t = _.get(e)
  v(t)
  return m(t)
}
var y = function (e, t) {
  var n = useContext(w)
  if (!n) {
    var /* [auto-meaningful-name] */e$component = e.component
    var i = undefined === e$component ? "div" : e$component
    var c = $$_54.a(e, ["component"])
    return createElement(i, $$_19.a({}, c, {
      ref: t
    }))
  }
  var /* [auto-meaningful-name] */n$className = n.className
  var d = $$_54.a(n, ["className"])
  var /* [auto-meaningful-name] */e$className = e.className
  var h = $$_54.a(e, ["className"])
  return createElement(w.Provider, {
    value: null
  }, createElement(f, $$_19.a({
    ref: t,
    className: Classnames1(n$className, e$className)
  }, d, h)))
}
var E = forwardRef(y)
E.displayName = "RawItem"
var O = E
var w = createContext(null)
function C(e) {
  return "+ ".concat(e.length, " ...")
}
function T(e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var c = undefined === e$prefixCls ? "rc-overflow" : e$prefixCls
  var /* [auto-meaningful-name] */e$data = e.data
  var p = undefined === e$data ? [] : e$data
  var /* [auto-meaningful-name] */e$renderItem = e.renderItem
  var /* [auto-meaningful-name] */e$renderRawItem = e.renderRawItem
  var /* [auto-meaningful-name] */e$itemKey = e.itemKey
  var /* [auto-meaningful-name] */e$itemWidth = e.itemWidth
  var v = undefined === e$itemWidth ? 10 : e$itemWidth
  var /* [auto-meaningful-name] */e$ssr = e.ssr
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$maxCount = e.maxCount
  var /* [auto-meaningful-name] */e$renderRest = e.renderRest
  var /* [auto-meaningful-name] */e$renderRawRest = e.renderRawRest
  var /* [auto-meaningful-name] */e$suffix = e.suffix
  var /* [auto-meaningful-name] */e$component = e.component
  var N = undefined === e$component ? "div" : e$component
  var /* [auto-meaningful-name] */e$itemComponent = e.itemComponent
  var /* [auto-meaningful-name] */e$onVisibleChange = e.onVisibleChange
  var x = $$_54.a(e, ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"])
  var D = function () {
    var e = useState({})
    var t = $$_40_index.a(e, 2)[1]
    var n = useRef([])
    var r = useRef(false)
    var o = 0
    var a = 0
    useEffect(function () {
      return function () {
        r.current = true
      }
    }, [])
    return function (e) {
      var i = o
      o += 1
      if (n.current.length < i + 1) {
        n.current[i] = e
      }
      return [
        n.current[i], function (e) {
          n.current[i] = "function" === typeof e ? e(n.current[i]) : e
          b.cancel(a)
          a = b(function () {
            if (!r.current) {
              t({})
            }
          })
        }
      ]
    }
  }()
  var M = "full" === e$ssr
  var L = D(null)
  var P = $$_40_index.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = B || 0
  var W = D(new Map())
  var U = $$_40_index.a(W, 2)
  var H = U[0]
  var V = U[1]
  var z = D(0)
  var Y = $$_40_index.a(z, 2)
  var K = Y[0]
  var q = Y[1]
  var X = D(0)
  var Q = $$_40_index.a(X, 2)
  var Z = Q[0]
  var J = Q[1]
  var $ = D(0)
  var ee = $$_40_index.a($, 2)
  var te = ee[0]
  var ne = ee[1]
  var re = useState(null)
  var oe = $$_40_index.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = useState(null)
  var ce = $$_40_index.a(se, 2)
  var le = ce[0]
  var ue = ce[1]
  var de = useMemo(function () {
    return null === le && M ? Number.MAX_SAFE_INTEGER : le || 0
  }, [le, B])
  var pe = useState(false)
  var fe = $$_40_index.a(pe, 2)
  var he = fe[0]
  var me = fe[1]
  var ge = "".concat(c, "-item")
  var _e = Math.max(K, Z)
  var ve = p.length && "responsive" === e$maxCount
  var be = "invalidate" === e$maxCount
  var ye = ve || "number" === typeof e$maxCount && p.length > e$maxCount
  var Ee = useMemo(function () {
    var e = p
    if (ve) {
      e = null === B && M ? p : p.slice(0, Math.min(p.length, G / v))
    } else {
      if ("number" === typeof e$maxCount) {
        e = p.slice(0, e$maxCount)
      }
    }
    return e
  }, [p, v, B, e$maxCount, ve])
  var Oe = useMemo(function () {
    return ve ? p.slice(de + 1) : p.slice(Ee.length)
  }, [p, Ee, ve, de])
  var we = useCallback(function (e, t) {
    var n
    return "function" === typeof e$itemKey ? e$itemKey(e) : null !== (n = e$itemKey && (null === e || undefined === e ? undefined : e[e$itemKey])) && undefined !== n ? n : t
  }, [e$itemKey])
  var Ce = useCallback(e$renderItem || function (e) {
    return e
  }, [e$renderItem])
  function Te(e, t) {
    ue(e)
    if (!t) {
      me(e < p.length - 1)
      if (!(null === e$onVisibleChange || undefined === e$onVisibleChange)) {
        e$onVisibleChange(e)
      }
    }
  }
  function Se(e, t) {
    V(function (n) {
      var r = new Map(n)
      if (null === t) {
        r.delete(e)
      } else {
        r.set(e, t)
      }
      return r
    })
  }
  function Ae(e) {
    return H.get(we(Ee[e], e))
  }
  useLayoutEffect(function () {
    if (G && _e && Ee) {
      var e = te
      var /* [auto-meaningful-name] */Ee$length = Ee.length
      var n = Ee$length - 1
      if (!Ee$length) {
        Te(0)
        return void ae(null)
      }
      for (var r = 0; r < Ee$length; r += 1) {
        var o = Ae(r)
        if (undefined === o) {
          Te(r - 1, true)
          break
        }
        e += o
        if (0 === n && e <= G || r === n - 1 && e + Ae(n) <= G) {
          Te(n)
          ae(null)
          break
        }
        if (e + _e > G) {
          Te(r - 1)
          ae(e - o - te + Z)
          break
        }
      }
      if (e$suffix && Ae(0) + te > G) {
        ae(null)
      }
    }
  }, [G, H, Z, te, we, Ee])
  var Ie = he && !!Oe.length
  var je = {}
  if (null !== ie && ve) {
    je = {
      position: "absolute",
      left: ie,
      top: 0
    }
  }
  var Ne
  var Re = {
    prefixCls: ge,
    responsive: ve,
    component: e$itemComponent,
    invalidate: be
  }
  var ke = e$renderRawItem ? function (e, t) {
    var n = we(e, t)
    return createElement(w.Provider, {
      key: n,
      value: $$_21.a($$_21.a({}, Re), {}, {
        order: t,
        item: e,
        itemKey: n,
        registerSize: Se,
        display: t <= de
      })
    }, e$renderRawItem(e, t))
  } : function (e, t) {
    var n = we(e, t)
    return createElement(f, $$_19.a({}, Re, {
      order: t,
      key: n,
      item: e,
      renderItem: Ce,
      itemKey: n,
      registerSize: Se,
      display: t <= de
    }))
  }
  var xe = {
    order: Ie ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(ge, "-rest"),
    registerSize: function (e, t) {
      J(t)
      q(Z)
    },
    display: Ie
  }
  if (e$renderRawRest) {
    if (e$renderRawRest) {
      Ne = createElement(w.Provider, {
        value: $$_21.a($$_21.a({}, Re), xe)
      }, e$renderRawRest(Oe))
    }
  } else {
    var De = e$renderRest || C
    Ne = createElement(f, $$_19.a({}, Re, xe), "function" === typeof De ? De(Oe) : De)
  }
  var Me = createElement(N, $$_19.a({
    className: Classnames1(!be && c, e$className),
    style: e$style,
    ref: t
  }, x), Ee.map(ke), ye ? Ne : null, e$suffix && createElement(f, $$_19.a({}, Re, {
    order: de,
    className: "".concat(ge, "-suffix"),
    registerSize: function (e, t) {
      ne(t)
    },
    display: true,
    style: je
  }), e$suffix))
  if (ve) {
    Me = createElement($$_1545_800.a, {
      onResize: function (e, t) {
        F(t.clientWidth)
      }
    }, Me)
  }
  return Me
}
var S = forwardRef(T)
S.displayName = "Overflow"
S.Item = O
S.RESPONSIVE = "responsive"
S.INVALIDATE = "invalidate"
var A = S
export { A as a }
export default A
