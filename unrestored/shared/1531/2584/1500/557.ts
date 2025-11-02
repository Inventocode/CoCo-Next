/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：557
 */

"use strict"

import r = require("../19");
import o = require("../20");
import i = require("../33/index");
import a = require("../54");
import React = require("react");
import c = require("../8");
var l = function __importDefault(module) {
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
}(c)
import u = require("../1504/788");
function d(e, t) {
  var e$prefixCls = e.prefixCls
  var e$invalidate = e.invalidate
  var e$item = e.item
  var e$renderItem = e.renderItem
  var e$responsive = e.responsive
  var e$registerSize = e.registerSize
  var e$itemKey = e.itemKey
  var e$className = e.className
  var e$style = e.style
  var e$children = e.children
  var e$display = e.display
  var e$order = e.order
  var e$component = e.component
  var E = undefined === e$component ? "div" : e$component
  var O = a.a(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"])
  var w = e$responsive && !e$display
  function C(e) {
    e$registerSize(e$itemKey, e)
  }
  React.useEffect(function () {
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
  var I = {}
  if (w) {
    I["aria-hidden"] = true
  }
  var A = React.createElement(E, r.a({
    className: l()(!e$invalidate && e$prefixCls, e$className),
    style: o.a(o.a({}, T), e$style)
  }, I, O, {
    ref: t
  }), S)
  if (e$responsive) {
    A = React.createElement(u.a, {
      onResize: function (e) {
        C(e.offsetWidth)
      }
    }, A)
  }
  return A
}
var p = React.forwardRef(d)
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
  var n = React.useContext(w)
  if (!n) {
    var e$component = e.component
    var i = undefined === e$component ? "div" : e$component
    var c = a.a(e, ["component"])
    return React.createElement(i, r.a({}, c, {
      ref: t
    }))
  }
  var n$className = n.className
  var d = a.a(n, ["className"])
  var e$className = e.className
  var h = a.a(e, ["className"])
  return React.createElement(w.Provider, {
    value: null
  }, React.createElement(f, r.a({
    ref: t,
    className: l()(n$className, e$className)
  }, d, h)))
}
var E = React.forwardRef(y)
E.displayName = "RawItem"
var O = E
var w = React.createContext(null)
function C(e) {
  return "+ ".concat(e.length, " ...")
}
function T(e, t) {
  var e$prefixCls = e.prefixCls
  var c = undefined === e$prefixCls ? "rc-overflow" : e$prefixCls
  var e$data = e.data
  var p = undefined === e$data ? [] : e$data
  var e$renderItem = e.renderItem
  var e$renderRawItem = e.renderRawItem
  var e$itemKey = e.itemKey
  var e$itemWidth = e.itemWidth
  var v = undefined === e$itemWidth ? 10 : e$itemWidth
  var e$ssr = e.ssr
  var e$style = e.style
  var e$className = e.className
  var e$maxCount = e.maxCount
  var e$renderRest = e.renderRest
  var e$renderRawRest = e.renderRawRest
  var e$suffix = e.suffix
  var e$component = e.component
  var N = undefined === e$component ? "div" : e$component
  var e$itemComponent = e.itemComponent
  var e$onVisibleChange = e.onVisibleChange
  var x = a.a(e, ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"])
  var D = function () {
    var e = React.useState({})
    var t = i.a(e, 2)[1]
    var n = React.useRef([])
    var r = React.useRef(false)
    var o = 0
    var a = 0
    React.useEffect(function () {
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
      return [n.current[i], function (e) {
        n.current[i] = "function" === typeof e ? e(n.current[i]) : e
        b.cancel(a)
        a = b(function () {
          if (!r.current) {
            t({})
          }
        })
      }]
    }
  }()
  var M = "full" === e$ssr
  var L = D(null)
  var P = i.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = B || 0
  var U = D(new Map())
  var W = i.a(U, 2)
  var H = W[0]
  var V = W[1]
  var z = D(0)
  var Y = i.a(z, 2)
  var K = Y[0]
  var q = Y[1]
  var X = D(0)
  var Q = i.a(X, 2)
  var Z = Q[0]
  var J = Q[1]
  var $ = D(0)
  var ee = i.a($, 2)
  var te = ee[0]
  var ne = ee[1]
  var re = React.useState(null)
  var oe = i.a(re, 2)
  var ie = oe[0]
  var ae = oe[1]
  var se = React.useState(null)
  var ce = i.a(se, 2)
  var le = ce[0]
  var ue = ce[1]
  var de = React.useMemo(function () {
    return null === le && M ? Number.MAX_SAFE_INTEGER : le || 0
  }, [le, B])
  var pe = React.useState(false)
  var fe = i.a(pe, 2)
  var he = fe[0]
  var me = fe[1]
  var ge = "".concat(c, "-item")
  var _e = Math.max(K, Z)
  var ve = p.length && "responsive" === e$maxCount
  var be = "invalidate" === e$maxCount
  var ye = ve || "number" === typeof e$maxCount && p.length > e$maxCount
  var Ee = React.useMemo(function () {
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
  var Oe = React.useMemo(function () {
    return ve ? p.slice(de + 1) : p.slice(Ee.length)
  }, [p, Ee, ve, de])
  var we = React.useCallback(function (e, t) {
    var n
    return "function" === typeof e$itemKey ? e$itemKey(e) : null !== (n = e$itemKey && (null === e || undefined === e ? undefined : e[e$itemKey])) && undefined !== n ? n : t
  }, [e$itemKey])
  var Ce = React.useCallback(e$renderItem || function (e) {
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
  function Ie(e) {
    return H.get(we(Ee[e], e))
  }
  React.useLayoutEffect(function () {
    if (G && _e && Ee) {
      var e = te
      var ee$length = Ee.length
      var n = ee$length - 1
      if (!ee$length) {
        Te(0)
        return void ae(null)
      }
      for (var r = 0; r < ee$length; r += 1) {
        var o = Ie(r)
        if (undefined === o) {
          Te(r - 1, true)
          break
        }
        e += o
        if (0 === n && e <= G || r === n - 1 && e + Ie(n) <= G) {
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
      if (e$suffix && Ie(0) + te > G) {
        ae(null)
      }
    }
  }, [G, H, Z, te, we, Ee])
  var Ae = he && !!Oe.length
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
    return React.createElement(w.Provider, {
      key: n,
      value: o.a(o.a({}, Re), {}, {
        order: t,
        item: e,
        itemKey: n,
        registerSize: Se,
        display: t <= de
      })
    }, e$renderRawItem(e, t))
  } : function (e, t) {
    var n = we(e, t)
    return React.createElement(f, r.a({}, Re, {
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
    order: Ae ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(ge, "-rest"),
    registerSize: function (e, t) {
      J(t)
      q(Z)
    },
    display: Ae
  }
  if (e$renderRawRest) {
    if (e$renderRawRest) {
      Ne = React.createElement(w.Provider, {
        value: o.a(o.a({}, Re), xe)
      }, e$renderRawRest(Oe))
    }
  } else {
    var De = e$renderRest || C
    Ne = React.createElement(f, r.a({}, Re, xe), "function" === typeof De ? De(Oe) : De)
  }
  var Me = React.createElement(N, r.a({
    className: l()(!be && c, e$className),
    style: e$style,
    ref: t
  }, x), Ee.map(ke), ye ? Ne : null, e$suffix && React.createElement(f, r.a({}, Re, {
    order: de,
    className: "".concat(ge, "-suffix"),
    registerSize: function (e, t) {
      ne(t)
    },
    display: true,
    style: je
  }), e$suffix))
  if (ve) {
    Me = React.createElement(u.a, {
      onResize: function (e, t) {
        F(t.clientWidth)
      }
    }, Me)
  }
  return Me
}
var S = React.forwardRef(T)
S.displayName = "Overflow"
S.Item = O
S.RESPONSIVE = "responsive"
S.INVALIDATE = "invalidate"
var I = S
export { I as a }
export default I
