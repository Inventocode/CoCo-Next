/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2627
 */

"use strict"

import r = require("../29");
import i = require("../19");
import React = require("react");
import a = require("./1501");
import s = require("../8");
var c = function __importDefault(module) {
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
}(s)
import u = require("../791");
import l = require("./611");
import f = require("../612");
import d = require("./790/index");
import h = require("./686/index");
import p = require("../789");
import _ = require("./462");
var A
var g = function () {
  return _.a() && window.document.documentElement
}
import v = require("../431");
var m = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]]
      }
    }
  }
  return n
}
if (g()) {
  document.documentElement.addEventListener("click", function (e) {
    A = {
      x: e.pageX,
      y: e.pageY
    }
    setTimeout(function () {
      A = null
    }, 100)
  }, true)
}
var y = function (e) {
  var t
  var n = React.useContext(p.b)
  var n$getPopupContainer = n.getPopupContainer
  var n$getPrefixCls = n.getPrefixCls
  var n$direction = n.direction
  var y = function (t) {
    var e$onCancel = e.onCancel
    if (!(null === e$onCancel || undefined === e$onCancel)) {
      e$onCancel(t)
    }
  }
  var b = function (t) {
    var e$onOk = e.onOk
    if (!(null === e$onOk || undefined === e$onOk)) {
      e$onOk(t)
    }
  }
  var w = function (t) {
    var e$okText = e.okText
    var e$okType = e.okType
    var e$cancelText = e.cancelText
    var e$confirmLoading = e.confirmLoading
    return React.createElement(React.Fragment, null, React.createElement(f.a, i.a({
      onClick: y
    }, e.cancelButtonProps), e$cancelText || t.cancelText), React.createElement(f.a, i.a({}, d.a(e$okType), {
      loading: e$confirmLoading,
      onClick: b
    }, e.okButtonProps), e$okText || t.okText))
  }
  var e$prefixCls = e.prefixCls
  var e$footer = e.footer
  var e$visible = e.visible
  var e$wrapClassName = e.wrapClassName
  var e$centered = e.centered
  var e$getContainer = e.getContainer
  var e$closeIcon = e.closeIcon
  var e$focusTriggerAfterClose = e.focusTriggerAfterClose
  var D = undefined === e$focusTriggerAfterClose || e$focusTriggerAfterClose
  var I = m(e, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"])
  var F = n$getPrefixCls("modal", e$prefixCls)
  var R = n$getPrefixCls()
  var P = React.createElement(h.a, {
    componentName: "Modal",
    defaultLocale: l.b()
  }, w)
  var N = React.createElement("span", {
    className: "".concat(F, "-close-x")
  }, e$closeIcon || React.createElement(u.a, {
    className: "".concat(F, "-close-icon")
  }))
  var M = c()(e$wrapClassName, (t = {}, r.a(t, "".concat(F, "-centered"), !!e$centered), r.a(t, "".concat(F, "-wrap-rtl"), "rtl" === n$direction), t))
  return React.createElement(a.a, i.a({}, I, {
    getContainer: undefined === e$getContainer ? n$getPopupContainer : e$getContainer,
    prefixCls: F,
    wrapClassName: M,
    footer: undefined === e$footer ? P : e$footer,
    visible: e$visible,
    mousePosition: A,
    onClose: y,
    closeIcon: N,
    focusTriggerAfterClose: D,
    transitionName: v.b(R, "zoom", e.transitionName),
    maskTransitionName: v.b(R, "fade", e.maskTransitionName)
  }))
}
y.defaultProps = {
  width: 520,
  confirmLoading: false,
  visible: false,
  okType: "primary"
}
var b = y
import w = require("../75/index");
import E = require("./1024");
import x = require("./1023");
import C = require("./1025");
import O = require("./914");
import k = require("../33/index");
function S(e) {
  return !(!e || !e.then)
}
var T = function (e) {
  var t = React.useRef(false)
  var n = React.useRef()
  var r = React.useState(false)
  var a = k.a(r, 2)
  var s = a[0]
  var c = a[1]
  React.useEffect(function () {
    var t
    if (e.autoFocus) {
      var n$current = n.current
      t = setTimeout(function () {
        return n$current.focus()
      })
    }
    return function () {
      if (t) {
        clearTimeout(t)
      }
    }
  }, [])
  var e$type = e.type
  var e$children = e.children
  var e$prefixCls = e.prefixCls
  var e$buttonProps = e.buttonProps
  return React.createElement(f.a, i.a({}, d.a(e$type), {
    onClick: function (n) {
      var e$actionFn = e.actionFn
      var _e$close = e.close
      if (!t.current) {
        t.current = true
        if (e$actionFn) {
          var o
          if (e.emitEvent) {
            o = e$actionFn(n)
            if (e.quitOnNullishReturnValue && !S(o)) {
              t.current = false
              return void _e$close(n)
            }
          } else if (e$actionFn.length) {
            o = e$actionFn(_e$close)
            t.current = false
          } else if (!(o = e$actionFn())) {
            return void _e$close()
          }
          !function (n) {
            var e$close = e.close
            if (S(n)) {
              c(true)
              n.then(function () {
                c(false)
                e$close.apply(undefined, arguments)
                t.current = false
              }, function (e) {
                console.error(e)
                c(false)
                t.current = false
              })
            }
          }(o)
        } else {
          _e$close()
        }
      }
    },
    loading: s,
    prefixCls: e$prefixCls
  }, e$buttonProps, {
    ref: n
  }), e$children)
}
import B = require("../363/index");
import D = require("./285/index");
var I = function (e) {
  var e$icon = e.icon
  var e$onCancel = e.onCancel
  var e$onOk = e.onOk
  var e$close = e.close
  var e$zIndex = e.zIndex
  var e$afterClose = e.afterClose
  var e$visible = e.visible
  var e$keyboard = e.keyboard
  var e$centered = e.centered
  var e$getContainer = e.getContainer
  var e$maskStyle = e.maskStyle
  var e$okText = e.okText
  var e$okButtonProps = e.okButtonProps
  var e$cancelText = e.cancelText
  var e$cancelButtonProps = e.cancelButtonProps
  var e$direction = e.direction
  var e$prefixCls = e.prefixCls
  var e$rootPrefixCls = e.rootPrefixCls
  var e$iconPrefixCls = e.iconPrefixCls
  var e$bodyStyle = e.bodyStyle
  var e$closable = e.closable
  var k = undefined !== e$closable && e$closable
  var e$closeIcon = e.closeIcon
  var e$modalRender = e.modalRender
  var e$focusTriggerAfterClose = e.focusTriggerAfterClose
  B.a(!("string" === typeof e$icon && e$icon.length > 2), "Modal", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(e$icon, "` at https://ant.design/components/icon"))
  var R = e.okType || "primary"
  var P = "".concat(e$prefixCls, "-confirm")
  var N = !("okCancel" in e) || e.okCancel
  var M = e.width || 416
  var j = e.style || {}
  var L = undefined === e.mask || e.mask
  var U = undefined !== e.maskClosable && e.maskClosable
  var H = null !== e.autoFocusButton && (e.autoFocusButton || "ok")
  var V = c()(P, "".concat(P, "-").concat(e.type), r.a({}, "".concat(P, "-rtl"), "rtl" === e$direction), e.className)
  var G = N && React.createElement(T, {
    actionFn: e$onCancel,
    close: e$close,
    autoFocus: "cancel" === H,
    buttonProps: e$cancelButtonProps,
    prefixCls: "".concat(e$rootPrefixCls, "-btn")
  }, e$cancelText)
  return React.createElement(D.a, {
    prefixCls: e$rootPrefixCls,
    iconPrefixCls: e$iconPrefixCls,
    direction: e$direction
  }, React.createElement(b, {
    prefixCls: e$prefixCls,
    className: V,
    wrapClassName: c()(r.a({}, "".concat(P, "-centered"), !!e.centered)),
    onCancel: function () {
      return e$close({
        triggerCancel: true
      })
    },
    visible: e$visible,
    title: "",
    footer: "",
    transitionName: v.b(e$rootPrefixCls, "zoom", e.transitionName),
    maskTransitionName: v.b(e$rootPrefixCls, "fade", e.maskTransitionName),
    mask: L,
    maskClosable: U,
    maskStyle: e$maskStyle,
    style: j,
    bodyStyle: e$bodyStyle,
    width: M,
    zIndex: e$zIndex,
    afterClose: e$afterClose,
    keyboard: e$keyboard,
    centered: e$centered,
    getContainer: e$getContainer,
    closable: k,
    closeIcon: e$closeIcon,
    modalRender: e$modalRender,
    focusTriggerAfterClose: e$focusTriggerAfterClose
  }, React.createElement("div", {
    className: "".concat(P, "-body-wrapper")
  }, React.createElement("div", {
    className: "".concat(P, "-body")
  }, e$icon, undefined === e.title ? null : React.createElement("span", {
    className: "".concat(P, "-title")
  }, e.title), React.createElement("div", {
    className: "".concat(P, "-content")
  }, e.content)), React.createElement("div", {
    className: "".concat(P, "-btns")
  }, G, React.createElement(T, {
    type: R,
    actionFn: e$onOk,
    close: e$close,
    autoFocus: "ok" === H,
    buttonProps: e$okButtonProps,
    prefixCls: "".concat(e$rootPrefixCls, "-btn")
  }, e$okText)))))
}
var F = []
var R = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]]
      }
    }
  }
  return n
}
var P = ""
function N(e) {
  var t = document.createDocumentFragment()
  var n = i.a(i.a({}, e), {
    close: s,
    visible: true
  })
  function r() {
    w.unmountComponentAtNode(t)
    for (var arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      r[i] = arguments[i]
    }
    var o = r.some(function (e) {
      return e && e.triggerCancel
    })
    if (e.onCancel && o) {
      e.onCancel.apply(e, r)
    }
    for (var a = 0; a < F.length; a++) {
      var c = F[a]
      if (c === s) {
        F.splice(a, 1)
        break
      }
    }
  }
  function a(e) {
    var e$okText = e.okText
    var e$cancelText = e.cancelText
    var e$prefixCls = e.prefixCls
    var s = R(e, ["okText", "cancelText", "prefixCls"])
    setTimeout(function () {
      var e = l.b()
      var c = D.b()
      var c$getPrefixCls = c.getPrefixCls
      var c$getIconPrefixCls = c.getIconPrefixCls
      var d = c$getPrefixCls(undefined, P)
      var h = e$prefixCls || "".concat(d, "-modal")
      var p = c$getIconPrefixCls()
      w.render(React.createElement(I, i.a({}, s, {
        prefixCls: h,
        rootPrefixCls: d,
        iconPrefixCls: p,
        okText: e$okText || (s.okCancel ? e.okText : e.justOkText),
        cancelText: e$cancelText || e.cancelText
      })), t)
    })
  }
  function s() {
    for (var t = this, arguments$length = arguments.length, s = new Array(arguments$length), c = 0; c < arguments$length; c++) {
      s[c] = arguments[c]
    }
    a(n = i.a(i.a({}, n), {
      visible: false,
      afterClose: function () {
        if ("function" === typeof e.afterClose) {
          e.afterClose()
        }
        r.apply(t, s)
      }
    }))
  }
  a(n)
  F.push(s)
  return {
    destroy: s,
    update: function (e) {
      a(n = "function" === typeof e ? e(n) : i.a(i.a({}, n), e))
    }
  }
}
function M(e) {
  return i.a(i.a({
    icon: React.createElement(O.a, null),
    okCancel: false
  }, e), {
    type: "warning"
  })
}
function j(e) {
  return i.a(i.a({
    icon: React.createElement(E.a, null),
    okCancel: false
  }, e), {
    type: "info"
  })
}
function L(e) {
  return i.a(i.a({
    icon: React.createElement(x.a, null),
    okCancel: false
  }, e), {
    type: "success"
  })
}
function U(e) {
  return i.a(i.a({
    icon: React.createElement(C.a, null),
    okCancel: false
  }, e), {
    type: "error"
  })
}
function H(e) {
  return i.a(i.a({
    icon: React.createElement(O.a, null),
    okCancel: true
  }, e), {
    type: "confirm"
  })
}
import V = require("../80/index");
import G = require("./605");
var z = function (e, t) {
  var e$afterClose = e.afterClose
  var e$config = e.config
  var a = React.useState(true)
  var s = k.a(a, 2)
  var c = s[0]
  var u = s[1]
  var l = React.useState(e$config)
  var f = k.a(l, 2)
  var d = f[0]
  var _ = f[1]
  var A = React.useContext(p.b)
  var a$direction = A.direction
  var a$getPrefixCls = A.getPrefixCls
  var m = a$getPrefixCls("modal")
  var y = a$getPrefixCls()
  var b = function () {
    u(false)
    for (var arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
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
          return i.a(i.a({}, t), e)
        })
      }
    }
  })
  return React.createElement(h.a, {
    componentName: "Modal",
    defaultLocale: G.a.Modal
  }, function (e) {
    return React.createElement(I, i.a({
      prefixCls: m,
      rootPrefixCls: y
    }, d, {
      close: b,
      visible: c,
      afterClose: e$afterClose,
      okText: d.okText || (d.okCancel ? e.okText : e.justOkText),
      direction: a$direction,
      cancelText: d.cancelText || e.cancelText
    }))
  })
}
var Q = React.forwardRef(z)
var W = 0
var K = React.memo(React.forwardRef(function (e, t) {
  var n = function () {
    var e = React.useState([])
    var t = k.a(e, 2)
    var n = t[0]
    var r = t[1]
    return [n, React.useCallback(function (e) {
      r(function (t) {
        return [].concat(V.a(t), [e])
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
  var r = k.a(n, 2)
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
  var n = k.a(t, 2)
  var r = n[0]
  var i = n[1]
  React.useEffect(function () {
    if (r.length) {
      V.a(r).forEach(function (e) {
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
              return [].concat(V.a(t), [e])
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
              return [].concat(V.a(e), [t])
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
  var e$rootPrefixCls = e.rootPrefixCls
  B.a(false, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead.")
  P = e$rootPrefixCls
}
export { Y as a }
export default Y
