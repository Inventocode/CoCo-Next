/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2627__part-4
 */

"use strict"

import { "2627__part-1__b" as b } from "./index__part-1"
import { "2627__part-3__I" as I, "2627__part-3__F" as F, "2627__part-3__N" as N, "2627__part-3__M" as M, "2627__part-3__j" as j, "2627__part-3__L" as L, "2627__part-3__U" as U, "2627__part-3__H" as H } from "./index__part-3"
var P = ""
import * as /* [auto-meaningful-name] */$$_363_index from "../363/index"
import * as /* [auto-meaningful-name] */$$_33_index from "../33/index"
import * as /* [auto-meaningful-name] */$$_789 from "../789"
import * as /* [auto-meaningful-name] */$_686 from "./686"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
import * as /* [auto-meaningful-name] */$_605 from "./605"
var z = function (e, t) {
  var /* [auto-meaningful-name] */e$afterClose = e.afterClose
  var /* [auto-meaningful-name] */e$config = e.config
  var a = React.useState(true)
  var s = $$_33_index.a(a, 2)
  var c = s[0]
  var u = s[1]
  var l = React.useState(e$config)
  var f = $$_33_index.a(l, 2)
  var d = f[0]
  var _ = f[1]
  var A = React.useContext($$_789.b)
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
  React.useImperativeHandle(t, function () {
    return {
      destroy: b,
      update: function (e) {
        _(function (t) {
          return $$_19.a($$_19.a({}, t), e)
        })
      }
    }
  })
  return React.createElement($_686.a, {
    componentName: "Modal",
    defaultLocale: $_605.a.Modal
  }, function (e) {
    return React.createElement(I, $$_19.a({
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
var Q = React.forwardRef(z)
var W = 0
var K = React.memo(React.forwardRef(function (e, t) {
  var n = function () {
    var e = React.useState([])
    var t = $$_33_index.a(e, 2)
    var n = t[0]
    var r = t[1]
    return [n, React.useCallback(function (e) {
      r(function (t) {
        return [].concat($$_80_index.a(t), [e])
      })
      return function () {
        r(function (t) {
          return t.filter(function (t) {
            return t !== e
          })
        })
      }
    }, [])]
  }()
  var r = $$_33_index.a(n, 2)
  var i = r[0]
  var a = r[1]
  React.useImperativeHandle(t, function () {
    return {
      patchElement: a
    }
  }, [])
  return React.createElement(React.Fragment, null, i)
}))
function X(e) {
  return N(M(e))
}
var Y = b
Y.useModal = function () {
  var e = React.useRef(null)
  var t = React.useState([])
  var n = $$_33_index.a(t, 2)
  var r = n[0]
  var i = n[1]
  React.useEffect(function () {
    if (r.length) {
      $$_80_index.a(r).forEach(function (e) {
        e()
      })
      i([])
    }
  }, [r])
  var a = React.useCallback(function (t) {
    return function (n) {
      var /* [auto-meaningful-name] */e$current
      W += 1
      var a
      var s = React.createRef()
      var c = React.createElement(Q, {
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
              return [].concat($$_80_index.a(t), [e])
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
              return [].concat($$_80_index.a(e), [t])
            })
          }
        }
      }
    }
  }, [])
  return [React.useMemo(function () {
    return {
      info: a(j),
      success: a(L),
      error: a(U),
      warning: a(M),
      confirm: a(H)
    }
  }, []), React.createElement(K, {
    ref: e
  })]
}
Y.info = function (e) {
  return N(j(e))
}
Y.success = function (e) {
  return N(L(e))
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
  for (; F.length;) {
    var e = F.pop()
    if (e) {
      e()
    }
  }
}
Y.config = function (e) {
  var /* [auto-meaningful-name] */e$rootPrefixCls = e.rootPrefixCls
  $$_363_index.a(false, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead.")
  P = e$rootPrefixCls
}
export { P as "2627__part-4__P" }
export { Y as "2627__part-4__Y" }
