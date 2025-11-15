/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2627
 */

"use strict"

import /* [auto-meaningful-name] */$$_29 = require("../29")
import /* [auto-meaningful-name] */$$_19 = require("../19")
import /* [auto-meaningful-name] */React = require("react")
import /* [auto-meaningful-name] */$_1501 = require("./1501")
import s = require("../8")
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
import /* [auto-meaningful-name] */$$_791 = require("../791")
import /* [auto-meaningful-name] */$_611 = require("./611")
import /* [auto-meaningful-name] */$$_612 = require("../612")
import /* [auto-meaningful-name] */$_790_index = require("./790/index")
import /* [auto-meaningful-name] */$_686 = require("./686")
import /* [auto-meaningful-name] */$$_789 = require("../789")
import /* [auto-meaningful-name] */$_462 = require("./462")
var A
var g = function () {
  return $_462.a() && window.document.documentElement
}
import /* [auto-meaningful-name] */$$_431 = require("../431")
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
  var n = React.useContext($$_789.b)
  var /* [auto-meaningful-name] */n$getPopupContainer = n.getPopupContainer
  var /* [auto-meaningful-name] */n$getPrefixCls = n.getPrefixCls
  var /* [auto-meaningful-name] */n$direction = n.direction
  var y = function (t) {
    var /* [auto-meaningful-name] */e$onCancel = e.onCancel
    if (!(null === e$onCancel || undefined === e$onCancel)) {
      e$onCancel(t)
    }
  }
  var b = function (t) {
    var /* [auto-meaningful-name] */e$onOk = e.onOk
    if (!(null === e$onOk || undefined === e$onOk)) {
      e$onOk(t)
    }
  }
  var w = function (t) {
    var /* [auto-meaningful-name] */e$okText = e.okText
    var /* [auto-meaningful-name] */e$okType = e.okType
    var /* [auto-meaningful-name] */e$cancelText = e.cancelText
    var /* [auto-meaningful-name] */e$confirmLoading = e.confirmLoading
    return React.createElement(React.Fragment, null, React.createElement($$_612.a, $$_19.a({
      onClick: y
    }, e.cancelButtonProps), e$cancelText || t.cancelText), React.createElement($$_612.a, $$_19.a({}, $_790_index.a(e$okType), {
      loading: e$confirmLoading,
      onClick: b
    }, e.okButtonProps), e$okText || t.okText))
  }
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$footer = e.footer
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$wrapClassName = e.wrapClassName
  var /* [auto-meaningful-name] */e$centered = e.centered
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
  var /* [auto-meaningful-name] */e$focusTriggerAfterClose = e.focusTriggerAfterClose
  var D = undefined === e$focusTriggerAfterClose || e$focusTriggerAfterClose
  var I = m(e, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"])
  var F = n$getPrefixCls("modal", e$prefixCls)
  var R = n$getPrefixCls()
  var P = React.createElement($_686.a, {
    componentName: "Modal",
    defaultLocale: $_611.b()
  }, w)
  var N = React.createElement("span", {
    className: "".concat(F, "-close-x")
  }, e$closeIcon || React.createElement($$_791.a, {
    className: "".concat(F, "-close-icon")
  }))
  var M = c()(e$wrapClassName, (t = {}, $$_29.a(t, "".concat(F, "-centered"), !!e$centered), $$_29.a(t, "".concat(F, "-wrap-rtl"), "rtl" === n$direction), t))
  return React.createElement($_1501.a, $$_19.a({}, I, {
    getContainer: undefined === e$getContainer ? n$getPopupContainer : e$getContainer,
    prefixCls: F,
    wrapClassName: M,
    footer: undefined === e$footer ? P : e$footer,
    visible: e$visible,
    mousePosition: A,
    onClose: y,
    closeIcon: N,
    focusTriggerAfterClose: D,
    transitionName: $$_431.b(R, "zoom", e.transitionName),
    maskTransitionName: $$_431.b(R, "fade", e.maskTransitionName)
  }))
}
y.defaultProps = {
  width: 520,
  confirmLoading: false,
  visible: false,
  okType: "primary"
}
var b = y
import /* [auto-meaningful-name] */$$_75_index = require("../75/index")
import /* [auto-meaningful-name] */$_1024 = require("./1024")
import /* [auto-meaningful-name] */$_1023 = require("./1023")
import /* [auto-meaningful-name] */$_1025 = require("./1025")
import /* [auto-meaningful-name] */$_914 = require("./914")
import /* [auto-meaningful-name] */$$_33_index = require("../33/index")
function S(e) {
  return !(!e || !e.then)
}
var T = function (e) {
  var t = React.useRef(false)
  var n = React.useRef()
  var r = React.useState(false)
  var a = $$_33_index.a(r, 2)
  var s = a[0]
  var c = a[1]
  React.useEffect(function () {
    var t
    if (e.autoFocus) {
      var /* [auto-meaningful-name] */n$current = n.current
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
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$buttonProps = e.buttonProps
  return React.createElement($$_612.a, $$_19.a({}, $_790_index.a(e$type), {
    onClick: function (n) {
      var /* [auto-meaningful-name] */e$actionFn = e.actionFn
      var /* [auto-meaningful-name] */e$close = e.close
      if (!t.current) {
        t.current = true
        if (e$actionFn) {
          var o
          if (e.emitEvent) {
            o = e$actionFn(n)
            if (e.quitOnNullishReturnValue && !S(o)) {
              t.current = false
              return void e$close(n)
            }
          } else if (e$actionFn.length) {
            o = e$actionFn(e$close)
            t.current = false
          } else if (!(o = e$actionFn())) {
            return void e$close()
          }
          !function (n) {
            var /* [auto-meaningful-name] */_e$close = e.close
            if (S(n)) {
              c(true)
              n.then(function () {
                c(false)
                _e$close.apply(undefined, arguments)
                t.current = false
              }, function (e) {
                console.error(e)
                c(false)
                t.current = false
              })
            }
          }(o)
        } else {
          e$close()
        }
      }
    },
    loading: s,
    prefixCls: e$prefixCls
  }, e$buttonProps, {
    ref: n
  }), e$children)
}
import /* [auto-meaningful-name] */$$_363_index = require("../363/index")
import /* [auto-meaningful-name] */$_285_index = require("./285/index")
var I = function (e) {
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$onOk = e.onOk
  var /* [auto-meaningful-name] */e$close = e.close
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$afterClose = e.afterClose
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$keyboard = e.keyboard
  var /* [auto-meaningful-name] */e$centered = e.centered
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$maskStyle = e.maskStyle
  var /* [auto-meaningful-name] */e$okText = e.okText
  var /* [auto-meaningful-name] */e$okButtonProps = e.okButtonProps
  var /* [auto-meaningful-name] */e$cancelText = e.cancelText
  var /* [auto-meaningful-name] */e$cancelButtonProps = e.cancelButtonProps
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$rootPrefixCls = e.rootPrefixCls
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var /* [auto-meaningful-name] */e$bodyStyle = e.bodyStyle
  var /* [auto-meaningful-name] */e$closable = e.closable
  var k = undefined !== e$closable && e$closable
  var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
  var /* [auto-meaningful-name] */e$modalRender = e.modalRender
  var /* [auto-meaningful-name] */e$focusTriggerAfterClose = e.focusTriggerAfterClose
  $$_363_index.a(!("string" === typeof e$icon && e$icon.length > 2), "Modal", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(e$icon, "` at https://ant.design/components/icon"))
  var R = e.okType || "primary"
  var P = "".concat(e$prefixCls, "-confirm")
  var N = !("okCancel" in e) || e.okCancel
  var M = e.width || 416
  var j = e.style || {}
  var L = undefined === e.mask || e.mask
  var U = undefined !== e.maskClosable && e.maskClosable
  var H = null !== e.autoFocusButton && (e.autoFocusButton || "ok")
  var V = c()(P, "".concat(P, "-").concat(e.type), $$_29.a({}, "".concat(P, "-rtl"), "rtl" === e$direction), e.className)
  var G = N && React.createElement(T, {
    actionFn: e$onCancel,
    close: e$close,
    autoFocus: "cancel" === H,
    buttonProps: e$cancelButtonProps,
    prefixCls: "".concat(e$rootPrefixCls, "-btn")
  }, e$cancelText)
  return React.createElement($_285_index.a, {
    prefixCls: e$rootPrefixCls,
    iconPrefixCls: e$iconPrefixCls,
    direction: e$direction
  }, React.createElement(b, {
    prefixCls: e$prefixCls,
    className: V,
    wrapClassName: c()($$_29.a({}, "".concat(P, "-centered"), !!e.centered)),
    onCancel: function () {
      return e$close({
        triggerCancel: true
      })
    },
    visible: e$visible,
    title: "",
    footer: "",
    transitionName: $$_431.b(e$rootPrefixCls, "zoom", e.transitionName),
    maskTransitionName: $$_431.b(e$rootPrefixCls, "fade", e.maskTransitionName),
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
  var n = $$_19.a($$_19.a({}, e), {
    close: s,
    visible: true
  })
  function r() {
    $$_75_index.unmountComponentAtNode(t)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
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
    var /* [auto-meaningful-name] */e$okText = e.okText
    var /* [auto-meaningful-name] */e$cancelText = e.cancelText
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    var s = R(e, ["okText", "cancelText", "prefixCls"])
    setTimeout(function () {
      var e = $_611.b()
      var c = $_285_index.b()
      var /* [auto-meaningful-name] */c$getPrefixCls = c.getPrefixCls
      var /* [auto-meaningful-name] */c$getIconPrefixCls = c.getIconPrefixCls
      var d = c$getPrefixCls(undefined, P)
      var h = e$prefixCls || "".concat(d, "-modal")
      var p = c$getIconPrefixCls()
      $$_75_index.render(React.createElement(I, $$_19.a({}, s, {
        prefixCls: h,
        rootPrefixCls: d,
        iconPrefixCls: p,
        okText: e$okText || (s.okCancel ? e.okText : e.justOkText),
        cancelText: e$cancelText || e.cancelText
      })), t)
    })
  }
  function s() {
    for (var t = this, /* [auto-meaningful-name] */arguments$length = arguments.length, s = new Array(arguments$length), c = 0; c < arguments$length; c++) {
      s[c] = arguments[c]
    }
    a(n = $$_19.a($$_19.a({}, n), {
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
      a(n = "function" === typeof e ? e(n) : $$_19.a($$_19.a({}, n), e))
    }
  }
}
function M(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_914.a, null),
    okCancel: false
  }, e), {
    type: "warning"
  })
}
function j(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1024.a, null),
    okCancel: false
  }, e), {
    type: "info"
  })
}
function L(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1023.a, null),
    okCancel: false
  }, e), {
    type: "success"
  })
}
function U(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_1025.a, null),
    okCancel: false
  }, e), {
    type: "error"
  })
}
function H(e) {
  return $$_19.a($$_19.a({
    icon: React.createElement($_914.a, null),
    okCancel: true
  }, e), {
    type: "confirm"
  })
}
import /* [auto-meaningful-name] */$$_80_index = require("../80/index")
import /* [auto-meaningful-name] */$_605 = require("./605")
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
export { Y as a }
export default Y
