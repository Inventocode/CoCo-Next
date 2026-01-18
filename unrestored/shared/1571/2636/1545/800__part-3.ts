/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：800__part-3
 */

"use strict"

import { l } from "./800__part-0"
import { p } from "./800__part-1"
import { h, m } from "./800__part-2"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_241_index from "../241/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
var y = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    $$_103.a(this, n)
    return t.apply(this, arguments)
  }
  $$_106.a(n, [
    {
      key: "render",
      value: function () {
        return this.props.children
      }
    }
  ])
  return n
}(React1.Component)
var E = React1.createContext(null)
function O(e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var r = React1.useRef(null)
  var i = React1.useRef(null)
  var c = React1.useContext(E)
  var u = React1.useRef({
    width: 0,
    height: 0,
    offsetWidth: 0,
    offsetHeight: 0
  })
  var d = React1.isValidElement(e$children) && function (e) {
    var /* [auto-meaningful-name] */r$prototype
    var /* [auto-meaningful-name] */e$prototype
    var r = $$_241_index.isMemo(e) ? e.type.type : e.type
    return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
  }(e$children)
  var f = d ? e$children.ref : null
  var g = React1.useMemo(function () {
    return function () {
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
        t[n] = arguments[n]
      }
      return function (e) {
        t.forEach(function (t) {
          l(t, e)
        })
      }
    }(f, r)
  }, [f, r])
  var _ = React1.useRef(e)
  _.current = e
  var v = React1.useCallback(function (e) {
    var /* [auto-meaningful-name] */_$current = _.current
    var /* [auto-meaningful-name] */_$current$onResize = _$current.onResize
    var /* [auto-meaningful-name] */_$current$data = _$current.data
    var o = e.getBoundingClientRect()
    var /* [auto-meaningful-name] */o$width = o.width
    var /* [auto-meaningful-name] */o$height = o.height
    var /* [auto-meaningful-name] */e$offsetWidth = e.offsetWidth
    var /* [auto-meaningful-name] */e$offsetHeight = e.offsetHeight
    var p = Math.floor(o$width)
    var f = Math.floor(o$height)
    if (u.current.width !== p || u.current.height !== f || u.current.offsetWidth !== e$offsetWidth || u.current.offsetHeight !== e$offsetHeight) {
      var h = {
        width: p,
        height: f,
        offsetWidth: e$offsetWidth,
        offsetHeight: e$offsetHeight
      }
      u.current = h
      var m = e$offsetWidth === Math.round(o$width) ? o$width : e$offsetWidth
      var g = e$offsetHeight === Math.round(o$height) ? o$height : e$offsetHeight
      var v = $$_21.a($$_21.a({}, h), {}, {
        offsetWidth: m,
        offsetHeight: g
      })
      if (!(null === c || undefined === c)) {
        c(v, e, _$current$data)
      }
      if (_$current$onResize) {
        Promise.resolve().then(function () {
          _$current$onResize(v, e)
        })
      }
    }
  }, [])
  React1.useEffect(function () {
    var e
    var t
    var o = p(r.current) || p(i.current)
    if (o && !e$disabled) {
      e = o
      t = v
      if (!h.has(e)) {
        h.set(e, new Set())
        m.observe(e)
      }
      h.get(e).add(t)
    }
    return function () {
      return function (e, t) {
        if (h.has(e)) {
          h.get(e).delete(t)
          if (!h.get(e).size) {
            m.unobserve(e)
            h.delete(e)
          }
        }
      }(o, v)
    }
  }, [r.current, e$disabled])
  return React1.createElement(y, {
    ref: i
  }, d ? React1.cloneElement(e$children, {
    ref: g
  }) : e$children)
}
function w(e) {
  return function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var r = []
    React.Children.forEach(t, function (t) {
      if (undefined !== t && null !== t || n.keepEmpty) {
        if (Array.isArray(t)) {
          r = r.concat(e(t))
        } else {
          if ($$_241_index.isFragment(t) && t.props) {
            r = r.concat(e(t.props.children, n))
          } else {
            r.push(t)
          }
        }
      }
    })
    return r
  }(e.children).map(function (t, n) {
    var i = (null === t || undefined === t ? undefined : t.key) || "".concat("rc-observer-key", "-").concat(n)
    return React1.createElement(O, $$_19.a({}, e, {
      key: i
    }), t)
  })
}
w.Collection = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onBatchResize = e.onBatchResize
  var r = React1.useRef(0)
  var i = React1.useRef([])
  var a = React1.useContext(E)
  var s = React1.useCallback(function (e, t, o) {
    r.current += 1
    var /* [auto-meaningful-name] */r$current = r.current
    i.current.push({
      size: e,
      element: t,
      data: o
    })
    Promise.resolve().then(function () {
      if (r$current === r.current) {
        if (!(null === e$onBatchResize || undefined === e$onBatchResize)) {
          e$onBatchResize(i.current)
        }
        i.current = []
      }
    })
    if (!(null === a || undefined === a)) {
      a(e, t, o)
    }
  }, [e$onBatchResize, a])
  return React1.createElement(E.Provider, {
    value: s
  }, e$children)
}
export { w }
