/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：788
 */

"use strict"

import /* [auto-meaningful-name] */$$_19 = require("../19")
import /* [auto-meaningful-name] */React = require("react")
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
}(React)
import /* [auto-meaningful-name] */$$_242_index = require("../242/index")
import /* [auto-meaningful-name] */$$_20 = require("../20")
import /* [auto-meaningful-name] */$$_108 = require("../108")
function l(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_108.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
import /* [auto-meaningful-name] */$$_75_index = require("../75/index")
var d = function __importDefault(module) {
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
}($$_75_index)
function p(e) {
  return e instanceof HTMLElement ? e : d.a.findDOMNode(e)
}
import /* [auto-meaningful-name] */ResizeObserverPolyfill = require("resize-observer-polyfill")
var h = new Map()
var m = new ResizeObserverPolyfill.default(function (e) {
  e.forEach(function (e) {
    var t
    var /* [auto-meaningful-name] */e$target = e.target
    if (!(null === (t = h.get(e$target)) || undefined === t)) {
      t.forEach(function (e) {
        return e(e$target)
      })
    }
  })
})
import /* [auto-meaningful-name] */$$_95 = require("../95")
import /* [auto-meaningful-name] */$$_96 = require("../96")
import /* [auto-meaningful-name] */$$_120 = require("../120")
import /* [auto-meaningful-name] */$$_140 = require("../140")
var y = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    $$_95.a(this, n)
    return t.apply(this, arguments)
  }
  $$_96.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var E = React.createContext(null)
function O(e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var r = React.useRef(null)
  var i = React.useRef(null)
  var c = React.useContext(E)
  var u = React.useRef({
    width: 0,
    height: 0,
    offsetWidth: 0,
    offsetHeight: 0
  })
  var d = React.isValidElement(e$children) && function (e) {
    var /* [auto-meaningful-name] */r$prototype
    var /* [auto-meaningful-name] */e$prototype
    var r = $$_242_index.isMemo(e) ? e.type.type : e.type
    return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
  }(e$children)
  var f = d ? e$children.ref : null
  var g = React.useMemo(function () {
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
  var _ = React.useRef(e)
  _.current = e
  var v = React.useCallback(function (e) {
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
      var v = $$_20.a($$_20.a({}, h), {}, {
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
  React.useEffect(function () {
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
  return React.createElement(y, {
    ref: i
  }, d ? React.cloneElement(e$children, {
    ref: g
  }) : e$children)
}
function w(e) {
  return function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var r = []
    i.a.Children.forEach(t, function (t) {
      if (undefined !== t && null !== t || n.keepEmpty) {
        if (Array.isArray(t)) {
          r = r.concat(e(t))
        } else {
          if ($$_242_index.isFragment(t) && t.props) {
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
    return React.createElement(O, $$_19.a({}, e, {
      key: i
    }), t)
  })
}
w.Collection = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onBatchResize = e.onBatchResize
  var r = React.useRef(0)
  var i = React.useRef([])
  var a = React.useContext(E)
  var s = React.useCallback(function (e, t, o) {
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
  return React.createElement(E.Provider, {
    value: s
  }, e$children)
}
export { w as a }
export default w
