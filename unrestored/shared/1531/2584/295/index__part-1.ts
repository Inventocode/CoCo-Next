/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：295__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_47 from "../47"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as c from "../8"
import l from "../8"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import "./829"
import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
var _a
_a = _React.memo(_React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$warning = e.warning
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var /* [auto-meaningful-name] */e$onFocus = e.onFocus
  var /* [auto-meaningful-name] */e$onCompositionStart = e.onCompositionStart
  var /* [auto-meaningful-name] */e$onCompositionEnd = e.onCompositionEnd
  var /* [auto-meaningful-name] */e$onClearCallback = e.onClearCallback
  var /* [auto-meaningful-name] */e$before = e.before
  var /* [auto-meaningful-name] */e$after = e.after
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$min = e.min
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$type = e.type
  var k = undefined === e$type ? "text" : e$type
  var /* [auto-meaningful-name] */e$dependency = e.dependency
  var /* [auto-meaningful-name] */e$rules = e.rules
  var /* [auto-meaningful-name] */e$readOnly = e.readOnly
  var L = undefined !== e$readOnly && e$readOnly
  var /* [auto-meaningful-name] */e$isTrimmed = e.isTrimmed
  var B = undefined !== e$isTrimmed && e$isTrimmed
  var /* [auto-meaningful-name] */e$clearButtonVisible = e.clearButtonVisible
  var G = React.useState(false)
  var U = $$_10_index.a(G, 2)
  var W = U[0]
  var H = U[1]
  var V = React.useState(false)
  var z = $$_10_index.a(V, 2)
  var Y = z[0]
  var K = z[1]
  var q = React.useRef(null)
  var X = React.useRef("")
  var Q = React.useState(!!e$defaultValue || !!e$value)
  var Z = $$_10_index.a(Q, 2)
  var J = Z[0]
  var $ = Z[1]
  var ee = React.useRef(true)
  React.useEffect(function () {
    var /* [auto-meaningful-name] */q$current = q.current
    if (undefined === e$value && q$current) {
      q$current.value = undefined === e$defaultValue ? "" : e$defaultValue.toString().substr(0, e$maxLength || 1 / 0)
      $(!q$current.value)
    }
  }, [q, e$dependency, e$value, e$defaultValue])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */q$current = q.current
    if (undefined !== e$value && q$current) {
      q$current.value = e$value.toString().substr(0, e$maxLength)
    }
  }, [q, e$value, e$maxLength])
  React.useImperativeHandle(t, function () {
    var /* [auto-meaningful-name] */q$current
    return {
      input: q.current,
      value: (null === (q$current = q.current) || undefined === q$current ? undefined : q$current.value) || "",
      focus: function () {
        var /* [auto-meaningful-name] */_q$current
        return null === (_q$current = q.current) || undefined === _q$current ? undefined : _q$current.focus()
      },
      blur: function () {
        var /* [auto-meaningful-name] */_q$current2
        return null === (_q$current2 = q.current) || undefined === _q$current2 ? undefined : _q$current2.blur()
      },
      select: function () {
        var /* [auto-meaningful-name] */_q$current3
        return null === (_q$current3 = q.current) || undefined === _q$current3 ? undefined : _q$current3.select()
      }
    }
  })
  var te = function (e) {
    var /* [auto-meaningful-name] */q$current = q.current
    if (q$current) {
      var /* [auto-meaningful-name] */q$current$value = q$current.value
      if (e$rules) {
        var r = function (e, t, n) {
          var r
          var o = $$_47.a(n)
          try {
            for (o.s(); !(r = o.n()).done;) {
              var /* [auto-meaningful-name] */r$value = r.value
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
      if ($$_53.u.test(q$current$value)) {
        q$current.value = "-"
      } else {
        var o = function (e, t) {
          var /* [auto-meaningful-name] */Success = "success"
          if (!$$_53.x.test(e)) {
            Success = "fail"
          }
          var r = parseFloat(e)
          if (t && r > t) {
            Success = "fail"
            r = t
          }
          return {
            status: Success,
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
    var /* [auto-meaningful-name] */q$current = q.current
    if (q$current) {
      var /* [auto-meaningful-name] */q$current$value = q$current.value
      var n = q$current$value
      var r = function (e, t, n, r) {
        var /* [auto-meaningful-name] */t$current = t.current
        if ("" !== e) {
          if (r) {
            var a
            var s = $$_47.a(r)
            try {
              for (s.s(); !(a = s.n()).done;) {
                var /* [auto-meaningful-name] */a$value = a.value
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
    var /* [auto-meaningful-name] */q$current = q.current
    if (q$current) {
      var /* [auto-meaningful-name] */q$current$value = q$current.value
      var /* [auto-meaningful-name] */_q$current$value = q$current.value
      if ("number" === k) {
        _q$current$value = function (e, t, n) {
          var r = parseFloat(e) || 0
          if (undefined !== n) {
            r = Math.max(r, n)
          }
          if (undefined !== t) {
            r = Math.min(r, t)
          }
          return r.toString()
        }(q$current$value, e$max, e$min)
      }
      if (B) {
        _q$current$value = _q$current$value.trim()
      }
      q$current.value = _q$current$value
      if (_q$current$value !== q$current$value && e$onChange) {
        e$onChange(_q$current$value, e)
      }
      if (e$onBlur) {
        e$onBlur(_q$current$value, e)
      }
    }
  }, [q, k, B, e$onBlur, e$onChange, e$max, e$min])
  var ae = {
    disabled: e$disabled,
    placeholder: e$placeholder,
    value: e$value
  }
  return _React.createElement("div", {
    className: l("coco-input", e$className, {
      "coco-input-focus": W,
      "coco-input-disabled": e$disabled,
      "coco-input-warning": e$warning,
      "coco-input-warning-animation": Y
    }),
    style: e$style
  }, e$before, _React.createElement("input", Object.assign({
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
      var /* [auto-meaningful-name] */q$current = q.current
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
  }, ae)), e$clearButtonVisible && !J && _React.createElement("div", {
    onMouseDown: function (e) {
      var /* [auto-meaningful-name] */q$current = q.current
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
  }, _React.createElement($$_94_index.a, {
    type: "icon-close"
  })), e$after)
}))
export { _a as "295__part-1___a" }
