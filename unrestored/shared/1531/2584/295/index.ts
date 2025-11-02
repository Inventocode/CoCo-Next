/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：295
 */

"use strict"

var r
import o = require("../10/index");
import i = require("../47");
import React = require("react");
var s = function __importDefault(module) {
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
import u = require("../53");
require("./829")
import d = require("../94/index");
var _a
_a = s.a.memo(s.a.forwardRef(function (e, t) {
  var e$warning = e.warning
  var e$placeholder = e.placeholder
  var e$value = e.value
  var e$defaultValue = e.defaultValue
  var e$onChange = e.onChange
  var e$onBlur = e.onBlur
  var e$onClick = e.onClick
  var e$onMouseDown = e.onMouseDown
  var e$onKeyDown = e.onKeyDown
  var e$onFocus = e.onFocus
  var e$onCompositionStart = e.onCompositionStart
  var e$onCompositionEnd = e.onCompositionEnd
  var e$onClearCallback = e.onClearCallback
  var e$before = e.before
  var e$after = e.after
  var e$style = e.style
  var e$className = e.className
  var e$max = e.max
  var e$min = e.min
  var e$maxLength = e.maxLength
  var e$disabled = e.disabled
  var e$type = e.type
  var k = undefined === e$type ? "text" : e$type
  var e$dependency = e.dependency
  var e$rules = e.rules
  var e$readOnly = e.readOnly
  var L = undefined !== e$readOnly && e$readOnly
  var e$isTrimmed = e.isTrimmed
  var B = undefined !== e$isTrimmed && e$isTrimmed
  var e$clearButtonVisible = e.clearButtonVisible
  var G = React.useState(false)
  var U = o.a(G, 2)
  var W = U[0]
  var H = U[1]
  var V = React.useState(false)
  var z = o.a(V, 2)
  var Y = z[0]
  var K = z[1]
  var q = React.useRef(null)
  var X = React.useRef("")
  var Q = React.useState(!!e$defaultValue || !!e$value)
  var Z = o.a(Q, 2)
  var J = Z[0]
  var $ = Z[1]
  var ee = React.useRef(true)
  React.useEffect(function () {
    var q$current = q.current
    if (undefined === e$value && q$current) {
      q$current.value = undefined === e$defaultValue ? "" : e$defaultValue.toString().substr(0, e$maxLength || 1 / 0)
      $(!q$current.value)
    }
  }, [q, e$dependency, e$value, e$defaultValue])
  React.useEffect(function () {
    var q$current = q.current
    if (undefined !== e$value && q$current) {
      q$current.value = e$value.toString().substr(0, e$maxLength)
    }
  }, [q, e$value, e$maxLength])
  React.useImperativeHandle(t, function () {
    var /* [auto-meaningful-name] */_q$current
    return {
      input: q.current,
      value: (null === (_q$current = q.current) || undefined === _q$current ? undefined : _q$current.value) || "",
      focus: function () {
        var /* [auto-meaningful-name] */q$current
        return null === (q$current = q.current) || undefined === q$current ? undefined : q$current.focus()
      },
      blur: function () {
        var /* [auto-meaningful-name] */q$current
        return null === (q$current = q.current) || undefined === q$current ? undefined : q$current.blur()
      },
      select: function () {
        var /* [auto-meaningful-name] */q$current
        return null === (q$current = q.current) || undefined === q$current ? undefined : q$current.select()
      }
    }
  })
  var te = function (e) {
    var q$current = q.current
    if (q$current) {
      var q$current$value = q$current.value
      if (e$rules) {
        var r = function (e, t, n) {
          var r
          var o = i.a(n)
          try {
            for (o.s(); !(r = o.n()).done;) {
              var r$value = r.value
              if (!e.match(r$value.rule)) {
                return {
                  status: "fail",
                  value: t,
                  massage: r$value.message
                }
              }
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return {
            status: "success",
            value: e
          }
        }(q$current$value, X.current, e$rules)
        if ("fail" === r.status) {
          re(r)
          return void (q$current.value = r.value)
        }
      }
      if (u.u.test(q$current$value)) {
        q$current.value = "-"
      } else {
        var o = function (e, t) {
          var n = "success"
          if (!u.x.test(e)) {
            n = "fail"
          }
          var r = parseFloat(e)
          if (t && r > t) {
            n = "fail"
            r = t
          }
          return {
            status: n,
            value: isNaN(r) ? "" : r.toString()
          }
        }(q$current$value, e$max)
        re(o)
        q$current.value = o.value
        if (!(e$min && Number(o.value) < e$min)) {
          if (e$onChange) {
            e$onChange(o.value || "0", e)
          }
        }
      }
    }
  }
  var ne = function () {
    var q$current = q.current
    if (q$current) {
      var q$current$value = q$current.value
      var n = q$current$value
      var r = function (e, t, n, r) {
        var t$current = t.current
        if ("" !== e) {
          if (r) {
            var a
            var s = i.a(r)
            try {
              for (s.s(); !(a = s.n()).done;) {
                var a$value = a.value
                if (!e.match(a$value.rule)) {
                  return {
                    status: "fail",
                    value: t$current,
                    massage: a$value.message
                  }
                }
              }
            } catch (h) {
              s.e(h)
            } finally {
              s.f()
            }
          }
          if (n && (e.length <= n || e.length < t$current.length)) {
            t.current = e
            return {
              status: "success",
              value: e
            }
          }
          if (undefined !== n && e.length > t$current.length) {
            return {
              status: "fail",
              value: t$current,
              massage: "The maximum support length is exceeded"
            }
          }
        }
        for (var l = -1, u = 0; u < e.length; u++) {
          if (e[u] !== t$current[u]) {
            l = u
            break
          }
        }
        if (l > -1 && undefined !== n) {
          for (var d = t$current, p = l; p < e.length; p++) {
            var f = t$current.slice(0, l) + e.slice(l, p) + t$current.slice(l)
            if (f.length > n) {
              break
            }
            d = f
          }
          t.current = d
          return {
            status: "success",
            value: d
          }
        }
        return {
          status: "success",
          value: e
        }
      }(q$current$value, X, e$maxLength, e$rules)
      n = r.value
      if (!ee.current) {
        n = q$current$value
      }
      q$current.value = n
      re(r)
      return n
    }
  }
  var re = function (e) {
    if ("fail" === e.status) {
      if (!r) {
        K(true)
        r = setTimeout(function () {
          K(false)
          r = null
        }, 600)
      }
    } else {
      K(false)
    }
  }
  var oe = React.useCallback(function (e) {
    H(true)
    if (e$onFocus) {
      e$onFocus(e)
    }
  }, [e$onFocus])
  var ie = React.useCallback(function (e) {
    H(false)
    var q$current = q.current
    if (q$current) {
      var _q$current$value = q$current.value
      var q$current$value = q$current.value
      if ("number" === k) {
        q$current$value = function (e, t, n) {
          var r = parseFloat(e) || 0
          if (undefined !== n) {
            r = Math.max(r, n)
          }
          if (undefined !== t) {
            r = Math.min(r, t)
          }
          return r.toString()
        }(_q$current$value, e$max, e$min)
      }
      if (B) {
        q$current$value = q$current$value.trim()
      }
      q$current.value = q$current$value
      if (q$current$value !== _q$current$value && e$onChange) {
        e$onChange(q$current$value, e)
      }
      if (e$onBlur) {
        e$onBlur(q$current$value, e)
      }
    }
  }, [q, k, B, e$onBlur, e$onChange, e$max, e$min])
  var ae = {
    disabled: e$disabled,
    placeholder: e$placeholder,
    value: e$value
  }
  return s.a.createElement("div", {
    className: l()("coco-input", e$className, {
      "coco-input-focus": W,
      "coco-input-disabled": e$disabled,
      "coco-input-warning": e$warning,
      "coco-input-warning-animation": Y
    }),
    style: e$style
  }, e$before, s.a.createElement("input", Object.assign({
    ref: q,
    onChange: function (e) {
      $(!e.currentTarget.value)
      if ("number" === k) {
        te(e)
      } else {
        (function (e) {
          var t = ne()
          if (undefined !== t && e$onChange) {
            e$onChange(t, e)
          }
        })(e)
      }
    },
    onFocus: oe,
    onBlur: ie,
    onClick: e$onClick,
    onMouseDown: e$onMouseDown,
    onKeyDown: function (e) {
      var q$current = q.current
      if (q$current) {
        if (13 === e.keyCode) {
          q$current.blur()
        }
        if (e$onKeyDown) {
          e$onKeyDown(e)
        }
      }
    },
    readOnly: L,
    onCompositionStart: function () {
      ee.current = false
      if (e$onCompositionStart) {
        e$onCompositionStart()
      }
    },
    onCompositionEnd: function (e) {
      ee.current = true
      ne()
      if (e$onCompositionEnd) {
        e$onCompositionEnd(e)
      }
    }
  }, ae)), e$clearButtonVisible && !J && s.a.createElement("div", {
    onMouseDown: function (e) {
      var q$current = q.current
      e.stopPropagation()
      e.preventDefault()
      if (q$current) {
        q$current.value = ""
        q$current.focus()
        $(true)
        if (e$onClearCallback) {
          e$onClearCallback()
        }
      }
    },
    className: "coco-input-clear-button"
  }, s.a.createElement(d.a, {
    type: "icon-close"
  })), e$after)
}))
export { _a as a }
export default _a
