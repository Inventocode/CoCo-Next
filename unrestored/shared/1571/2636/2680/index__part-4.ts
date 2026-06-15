/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2680__part-4
 */

"use strict"

import { b } from "./index__part-1"
import { I, R, N, M, L, j, U, H } from "./index__part-3"
var P = ""
import * as /* [auto-meaningful-name] */Module_364 from /* 364 */"../364/index"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../40/index"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"../801/index"
import * as /* [auto-meaningful-name] */Module_694 from /* 694 */"../801/694/index"
import { useState, useContext, useImperativeHandle, createElement, forwardRef, memo, useCallback, Fragment, useRef, useEffect, createRef, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_79 from /* 79 */"../79/index"
import * as /* [auto-meaningful-name] */Module_609 from /* 609 */"./609"
var z = function (e, t) {
  var /* [auto-meaningful-name] */e$afterClose = e.afterClose
  var /* [auto-meaningful-name] */e$config = e.config
  var a = useState(true)
  var s = Module_40.a(a, 2)
  var c = s[0]
  var u = s[1]
  var l = useState(e$config)
  var f = Module_40.a(l, 2)
  var d = f[0]
  var _ = f[1]
  var A = useContext(Module_801.b)
  var /* [auto-meaningful-name] */A$direction = A.direction
  var /* [auto-meaningful-name] */A$getPrefixCls = A.getPrefixCls
  var m = A$getPrefixCls("modal")
  var y = A$getPrefixCls()
  var b = function () {
    u(false)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
      t[n] = arguments[n]
    }
    var r = t.some(function (e) {
      return e && e.triggerCancel
    })
    if (d.onCancel && r) {
      d.onCancel()
    }
  }
  useImperativeHandle(t, function () {
    return {
      destroy: b,
      update: function (e) {
        _(function (t) {
          return Module_19.a(Module_19.a({}, t), e)
        })
      }
    }
  })
  return createElement(Module_694.a, {
    componentName: "Modal",
    defaultLocale: Module_609.a.Modal
  }, function (e) {
    return createElement(I, Module_19.a({
      prefixCls: m,
      rootPrefixCls: y
    }, d, {
      close: b,
      visible: c,
      afterClose: e$afterClose,
      okText: d.okText || (d.okCancel ? e.okText : e.justOkText),
      direction: A$direction,
      cancelText: d.cancelText || e.cancelText
    }))
  })
}
var Q = forwardRef(z)
var W = 0
var K = memo(forwardRef(function (e, t) {
  var n = function () {
    var e = useState([])
    var t = Module_40.a(e, 2)
    var n = t[0]
    var r = t[1]
    return [
      n, useCallback(function (e) {
        r(function (t) {
          return [].concat(Module_79.a(t), [e])
        })
        return function () {
          r(function (t) {
            return t.filter(function (t) {
              return t !== e
            })
          })
        }
      }, [])
    ]
  }()
  var r = Module_40.a(n, 2)
  var i = r[0]
  var a = r[1]
  useImperativeHandle(t, function () {
    return {
      patchElement: a
    }
  }, [])
  return createElement(Fragment, null, i)
}))
function X(e) {
  return N(M(e))
}
var Y = b
Y.useModal = function () {
  var e = useRef(null)
  var t = useState([])
  var n = Module_40.a(t, 2)
  var r = n[0]
  var i = n[1]
  useEffect(function () {
    if (r.length) {
      Module_79.a(r).forEach(function (e) {
        e()
      })
      i([])
    }
  }, [r])
  var a = useCallback(function (t) {
    return function (n) {
      var /* [auto-meaningful-name] */e$current
      W += 1
      var a
      var s = createRef()
      var c = createElement(Q, {
        key: "modal-".concat(W),
        config: t(n),
        ref: s,
        afterClose: function () {
          a()
        }
      })
      a = null === (e$current = e.current) || undefined === e$current ? undefined : e$current.patchElement(c)
      return {
        destroy: function () {
          function e() {
            var /* [auto-meaningful-name] */s$current
            if (!(null === (s$current = s.current) || undefined === s$current)) {
              s$current.destroy()
            }
          }
          if (s.current) {
            e()
          } else {
            i(function (t) {
              return [].concat(Module_79.a(t), [e])
            })
          }
        },
        update: function (e) {
          function t() {
            var /* [auto-meaningful-name] */s$current
            if (!(null === (s$current = s.current) || undefined === s$current)) {
              s$current.update(e)
            }
          }
          if (s.current) {
            t()
          } else {
            i(function (e) {
              return [].concat(Module_79.a(e), [t])
            })
          }
        }
      }
    }
  }, [])
  return [
    useMemo(function () {
      return {
        info: a(L),
        success: a(j),
        error: a(U),
        warning: a(M),
        confirm: a(H)
      }
    }, []), createElement(K, {
      ref: e
    })
  ]
}
Y.info = function (e) {
  return N(L(e))
}
Y.success = function (e) {
  return N(j(e))
}
Y.error = function (e) {
  return N(U(e))
}
Y.warning = X
Y.warn = X
Y.confirm = function (e) {
  return N(H(e))
}
Y.destroyAll = function () {
  for (; R.length;) {
    var e = R.pop()
    if (e) {
      e()
    }
  }
}
Y.config = function (e) {
  var /* [auto-meaningful-name] */e$rootPrefixCls = e.rootPrefixCls
  Module_364.a(false, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead.")
  P = e$rootPrefixCls
}
export { P }
export { Y }
