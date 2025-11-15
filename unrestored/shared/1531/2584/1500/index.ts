/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1500
 */

"use strict"

export { Je as a }
import /* [auto-meaningful-name] */$$_19 = require("../19")
import /* [auto-meaningful-name] */$$_29 = require("../29")
import /* [auto-meaningful-name] */$$_20 = require("../20")
import /* [auto-meaningful-name] */$$_80_index = require("../80/index")
import /* [auto-meaningful-name] */$$_33_index = require("../33/index")
import /* [auto-meaningful-name] */$$_54 = require("../54")
import /* [auto-meaningful-name] */React = require("react")
import /* [auto-meaningful-name] */$$_330 = require("../330")
var d = function () {
  if ("undefined" === typeof navigator || "undefined" === typeof window) {
    return false
  }
  var e = navigator.userAgent || navigator.vendor || window.opera
  return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)))
}
import /* [auto-meaningful-name] */$$_108 = require("../108")
import /* [auto-meaningful-name] */$$_242_index = require("../242/index")
function h(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_108.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function m() {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
    t[n] = arguments[n]
  }
  return function (e) {
    t.forEach(function (t) {
      h(t, e)
    })
  }
}
import g = require("../8")
var _ = function __importDefault(module) {
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
}(g)
function v(e, t) {
  var n = t || {}
  var /* [auto-meaningful-name] */n$defaultValue = n.defaultValue
  var /* [auto-meaningful-name] */n$value = n.value
  var /* [auto-meaningful-name] */n$onChange = n.onChange
  var /* [auto-meaningful-name] */n$postState = n.postState
  var c = React.useState(function () {
    return undefined !== n$value ? n$value : undefined !== n$defaultValue ? "function" === typeof n$defaultValue ? n$defaultValue() : n$defaultValue : "function" === typeof e ? e() : e
  })
  var u = $$_33_index.a(c, 2)
  var d = u[0]
  var p = u[1]
  var f = undefined !== n$value ? n$value : d
  if (n$postState) {
    f = n$postState(f)
  }
  var h = React.useRef(true)
  React.useEffect(function () {
    if (h.current) {
      h.current = false
    } else {
      if (undefined === n$value) {
        p(n$value)
      }
    }
  }, [n$value])
  return [f, function (e) {
    p(e)
    if (f !== e && n$onChange) {
      n$onChange(e, f)
    }
  }]
}
import /* [auto-meaningful-name] */$$_783 = require("../783")
import /* [auto-meaningful-name] */$$_556_557 = require("../556/557")
import /* [auto-meaningful-name] */$$_733 = require("../733")
var O = function (e, t) {
  var n
  var /* [auto-meaningful-name] */n$props
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var a = e.id
  var /* [auto-meaningful-name] */e$inputElement = e.inputElement
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var /* [auto-meaningful-name] */e$editable = e.editable
  var /* [auto-meaningful-name] */e$accessibilityIndex = e.accessibilityIndex
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onPaste = e.onPaste
  var /* [auto-meaningful-name] */e$onCompositionStart = e.onCompositionStart
  var /* [auto-meaningful-name] */e$onCompositionEnd = e.onCompositionEnd
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$attrs = e.attrs
  var I = e$inputElement || React.createElement("input", null)
  var A = I
  var /* [auto-meaningful-name] */A$ref = A.ref
  var /* [auto-meaningful-name] */A$props = A.props
  var /* [auto-meaningful-name] */A$props$onKeyDown = A$props.onKeyDown
  var /* [auto-meaningful-name] */A$props$onChange = A$props.onChange
  var /* [auto-meaningful-name] */A$props$onMouseDown = A$props.onMouseDown
  var /* [auto-meaningful-name] */A$props$onCompositionStart = A$props.onCompositionStart
  var /* [auto-meaningful-name] */A$props$onCompositionEnd = A$props.onCompositionEnd
  var /* [auto-meaningful-name] */A$props$style = A$props.style
  return I = React.cloneElement(I, $$_20.a($$_20.a({
    id: a,
    ref: m(t, A$ref),
    disabled: e$disabled,
    tabIndex: e$tabIndex,
    autoComplete: e$autoComplete || "off",
    type: "search",
    autoFocus: e$autoFocus,
    className: _()("".concat(e$prefixCls, "-selection-search-input"), null === (n = I) || undefined === n || null === (n$props = n.props) || undefined === n$props ? undefined : n$props.className),
    style: $$_20.a($$_20.a({}, A$props$style), {}, {
      opacity: e$editable ? null : 0
    }),
    role: "combobox",
    "aria-expanded": e$open,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": "".concat(a, "_list_").concat(e$accessibilityIndex)
  }, e$attrs), {}, {
    value: e$editable ? e$value : "",
    maxLength: e$maxLength,
    readOnly: !e$editable,
    unselectable: e$editable ? null : "on",
    onKeyDown: function (e) {
      e$onKeyDown(e)
      if (A$props$onKeyDown) {
        A$props$onKeyDown(e)
      }
    },
    onMouseDown: function (e) {
      e$onMouseDown(e)
      if (A$props$onMouseDown) {
        A$props$onMouseDown(e)
      }
    },
    onChange: function (e) {
      e$onChange(e)
      if (A$props$onChange) {
        A$props$onChange(e)
      }
    },
    onCompositionStart: function (e) {
      e$onCompositionStart(e)
      if (A$props$onCompositionStart) {
        A$props$onCompositionStart(e)
      }
    },
    onCompositionEnd: function (e) {
      e$onCompositionEnd(e)
      if (A$props$onCompositionEnd) {
        A$props$onCompositionEnd(e)
      }
    },
    onPaste: e$onPaste
  }))
}
var w = React.forwardRef(O)
w.displayName = "Input"
var C = w
import /* [auto-meaningful-name] */$$_487 = require("../487")
function S(e, t) {
  if ($$_487.b) {
    React.useLayoutEffect(e, t)
  } else {
    React.useEffect(e, t)
  }
}
var I = function (e) {
  e.preventDefault()
  e.stopPropagation()
}
var A = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$values = e.values
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$searchValue = e.searchValue
  var /* [auto-meaningful-name] */e$inputRef = e.inputRef
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$showSearch = e.showSearch
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var /* [auto-meaningful-name] */e$accessibilityIndex = e.accessibilityIndex
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$removeIcon = e.removeIcon
  var /* [auto-meaningful-name] */e$maxTagCount = e.maxTagCount
  var /* [auto-meaningful-name] */e$maxTagTextLength = e.maxTagTextLength
  var /* [auto-meaningful-name] */e$maxTagPlaceholder = e.maxTagPlaceholder
  var j = undefined === e$maxTagPlaceholder ? function (e) {
    return "+ ".concat(e.length, " ...")
  } : e$maxTagPlaceholder
  var /* [auto-meaningful-name] */e$tagRender = e.tagRender
  var /* [auto-meaningful-name] */e$onToggleOpen = e.onToggleOpen
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$onInputChange = e.onInputChange
  var /* [auto-meaningful-name] */e$onInputPaste = e.onInputPaste
  var /* [auto-meaningful-name] */e$onInputKeyDown = e.onInputKeyDown
  var /* [auto-meaningful-name] */e$onInputMouseDown = e.onInputMouseDown
  var /* [auto-meaningful-name] */e$onInputCompositionStart = e.onInputCompositionStart
  var /* [auto-meaningful-name] */e$onInputCompositionEnd = e.onInputCompositionEnd
  var F = React.useRef(null)
  var G = React.useState(0)
  var U = $$_33_index.a(G, 2)
  var W = U[0]
  var H = U[1]
  var V = React.useState(false)
  var z = $$_33_index.a(V, 2)
  var Y = z[0]
  var K = z[1]
  var q = "".concat(e$prefixCls, "-selection")
  var X = e$open || "tags" === e$mode ? e$searchValue : ""
  var Q = "tags" === e$mode || e$showSearch && (e$open || Y)
  function Z(e, t, n, r, i) {
    return React.createElement("span", {
      className: _()("".concat(q, "-item"), $$_29.a({}, "".concat(q, "-item-disabled"), n)),
      title: "string" === typeof e || "number" === typeof e ? e.toString() : undefined
    }, React.createElement("span", {
      className: "".concat(q, "-item-content")
    }, t), r && React.createElement($$_733.a, {
      className: "".concat(q, "-item-remove"),
      onMouseDown: I,
      onClick: i,
      customizeIcon: e$removeIcon
    }, "×"))
  }
  S(function () {
    H(F.current.scrollWidth)
  }, [X])
  var J = React.createElement("div", {
    className: "".concat(q, "-search"),
    style: {
      width: W
    },
    onFocus: function () {
      K(true)
    },
    onBlur: function () {
      K(false)
    }
  }, React.createElement(C, {
    ref: e$inputRef,
    open: e$open,
    prefixCls: e$prefixCls,
    id: t,
    inputElement: null,
    disabled: e$disabled,
    autoFocus: e$autoFocus,
    autoComplete: e$autoComplete,
    editable: Q,
    accessibilityIndex: e$accessibilityIndex,
    value: X,
    onKeyDown: e$onInputKeyDown,
    onMouseDown: e$onInputMouseDown,
    onChange: e$onInputChange,
    onPaste: e$onInputPaste,
    onCompositionStart: e$onInputCompositionStart,
    onCompositionEnd: e$onInputCompositionEnd,
    tabIndex: e$tabIndex,
    attrs: $$_783.a(e, true)
  }), React.createElement("span", {
    ref: F,
    className: "".concat(q, "-search-mirror"),
    "aria-hidden": true
  }, X, " "))
  var $ = React.createElement($$_556_557.a, {
    prefixCls: "".concat(q, "-overflow"),
    data: e$values,
    renderItem: function (e) {
      var /* [auto-meaningful-name] */_e$disabled = e.disabled
      var /* [auto-meaningful-name] */e$label = e.label
      var /* [auto-meaningful-name] */e$value = e.value
      var o = !e$disabled && !_e$disabled
      var a = e$label
      if ("number" === typeof e$maxTagTextLength && ("string" === typeof e$label || "number" === typeof e$label)) {
        var s = String(a)
        if (s.length > e$maxTagTextLength) {
          a = "".concat(s.slice(0, e$maxTagTextLength), "...")
        }
      }
      var c = function (e) {
        if (e) {
          e.stopPropagation()
        }
        e$onSelect(e$value, {
          selected: false
        })
      }
      return "function" === typeof e$tagRender ? function (e, t, n, r, o) {
        return React.createElement("span", {
          onMouseDown: function (e) {
            I(e)
            e$onToggleOpen(!e$open)
          }
        }, e$tagRender({
          label: t,
          value: e,
          disabled: n,
          closable: r,
          onClose: o
        }))
      }(e$value, a, _e$disabled, o, c) : Z(e$label, a, _e$disabled, o, c)
    },
    renderRest: function (e) {
      var t = "function" === typeof j ? j(e) : j
      return Z(t, t, false)
    },
    suffix: J,
    itemKey: "key",
    maxCount: e$maxTagCount
  })
  return React.createElement(React.Fragment, null, $, !e$values.length && !X && React.createElement("span", {
    className: "".concat(q, "-placeholder")
  }, e$placeholder))
}
var j = function (e) {
  var /* [auto-meaningful-name] */e$inputElement = e.inputElement
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var r = e.id
  var /* [auto-meaningful-name] */e$inputRef = e.inputRef
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var /* [auto-meaningful-name] */e$accessibilityIndex = e.accessibilityIndex
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$values = e.values
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$showSearch = e.showSearch
  var /* [auto-meaningful-name] */e$searchValue = e.searchValue
  var /* [auto-meaningful-name] */e$activeValue = e.activeValue
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$onInputKeyDown = e.onInputKeyDown
  var /* [auto-meaningful-name] */e$onInputMouseDown = e.onInputMouseDown
  var /* [auto-meaningful-name] */e$onInputChange = e.onInputChange
  var /* [auto-meaningful-name] */e$onInputPaste = e.onInputPaste
  var /* [auto-meaningful-name] */e$onInputCompositionStart = e.onInputCompositionStart
  var /* [auto-meaningful-name] */e$onInputCompositionEnd = e.onInputCompositionEnd
  var A = React.useState(false)
  var j = $$_33_index.a(A, 2)
  var N = j[0]
  var R = j[1]
  var k = "combobox" === e$mode
  var x = k || e$showSearch
  var D = e$values[0]
  var M = e$searchValue || ""
  if (k && e$activeValue && !N) {
    M = e$activeValue
  }
  React.useEffect(function () {
    if (k) {
      R(false)
    }
  }, [k, e$activeValue])
  var L = !("combobox" !== e$mode && !e$open) && !!M
  var P = !D || "string" !== typeof D.label && "number" !== typeof D.label ? undefined : D.label.toString()
  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "".concat(e$prefixCls, "-selection-search")
  }, React.createElement(C, {
    ref: e$inputRef,
    prefixCls: e$prefixCls,
    id: r,
    open: e$open,
    inputElement: e$inputElement,
    disabled: e$disabled,
    autoFocus: e$autoFocus,
    autoComplete: e$autoComplete,
    editable: x,
    accessibilityIndex: e$accessibilityIndex,
    value: M,
    onKeyDown: e$onInputKeyDown,
    onMouseDown: e$onInputMouseDown,
    onChange: function (e) {
      R(true)
      e$onInputChange(e)
    },
    onPaste: e$onInputPaste,
    onCompositionStart: e$onInputCompositionStart,
    onCompositionEnd: e$onInputCompositionEnd,
    tabIndex: e$tabIndex,
    attrs: $$_783.a(e, true),
    maxLength: k ? e$maxLength : undefined
  })), !k && D && !L && React.createElement("span", {
    className: "".concat(e$prefixCls, "-selection-item"),
    title: P
  }, D.label), !D && !L && React.createElement("span", {
    className: "".concat(e$prefixCls, "-selection-placeholder")
  }, e$placeholder))
}
function N() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 250
  var t = React.useRef(null)
  var n = React.useRef(null)
  function r(r) {
    if (r || null === t.current) {
      t.current = r
    }
    window.clearTimeout(n.current)
    n.current = window.setTimeout(function () {
      t.current = null
    }, e)
  }
  React.useEffect(function () {
    return function () {
      window.clearTimeout(n.current)
    }
  }, [])
  return [function () {
    return t.current
  }, r]
}
var R = function (e, t) {
  var n = React.useRef(null)
  var o = React.useRef(false)
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$showSearch = e.showSearch
  var /* [auto-meaningful-name] */e$tokenWithEnter = e.tokenWithEnter
  var /* [auto-meaningful-name] */e$onSearch = e.onSearch
  var /* [auto-meaningful-name] */e$onSearchSubmit = e.onSearchSubmit
  var /* [auto-meaningful-name] */e$onToggleOpen = e.onToggleOpen
  var /* [auto-meaningful-name] */e$onInputKeyDown = e.onInputKeyDown
  var /* [auto-meaningful-name] */e$domRef = e.domRef
  React.useImperativeHandle(t, function () {
    return {
      focus: function () {
        n.current.focus()
      },
      blur: function () {
        n.current.blur()
      }
    }
  })
  var b = N(0)
  var y = $$_33_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = React.useRef(null)
  var C = function (e) {
    if (false !== e$onSearch(e, true, o.current)) {
      e$onToggleOpen(true)
    }
  }
  var T = {
    inputRef: n,
    onInputKeyDown: function (e) {
      var /* [auto-meaningful-name] */e$which = e.which
      if (!(e$which !== $$_330.a.UP && e$which !== $$_330.a.DOWN)) {
        e.preventDefault()
      }
      if (e$onInputKeyDown) {
        e$onInputKeyDown(e)
      }
      if (!(e$which !== $$_330.a.ENTER || "tags" !== e$mode || o.current || e$open)) {
        e$onSearchSubmit(e.target.value)
      }
      if (![$$_330.a.SHIFT, $$_330.a.TAB, $$_330.a.BACKSPACE, $$_330.a.ESC].includes(e$which)) {
        e$onToggleOpen(true)
      }
    },
    onInputMouseDown: function () {
      O(true)
    },
    onInputChange: function (e) {
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      if (e$tokenWithEnter && w.current && /[\r\n]/.test(w.current)) {
        var n = w.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ")
        e$target$value = e$target$value.replace(n, w.current)
      }
      w.current = null
      C(e$target$value)
    },
    onInputPaste: function (e) {
      var t = e.clipboardData.getData("text")
      w.current = t
    },
    onInputCompositionStart: function () {
      o.current = true
    },
    onInputCompositionEnd: function (e) {
      o.current = false
      if ("combobox" !== e$mode) {
        C(e.target.value)
      }
    }
  }
  var S = e$multiple ? React.createElement(A, $$_19.a({}, e, T)) : React.createElement(j, $$_19.a({}, e, T))
  return React.createElement("div", {
    ref: e$domRef,
    className: "".concat(e$prefixCls, "-selector"),
    onClick: function (e) {
      if (e.target !== n.current) {
        if (undefined !== document.body.style.msTouchAction) {
          setTimeout(function () {
            n.current.focus()
          })
        } else {
          n.current.focus()
        }
      }
    },
    onMouseDown: function (e) {
      var t = E()
      if (!(e.target === n.current || t)) {
        e.preventDefault()
      }
      if (!(("combobox" === e$mode || e$showSearch && t) && e$open)) {
        if (e$open) {
          e$onSearch("", true, false)
        }
        e$onToggleOpen()
      }
    }
  }, S)
}
var k = React.forwardRef(R)
k.displayName = "Selector"
var x = k
import /* [auto-meaningful-name] */$$_95 = require("../95")
import /* [auto-meaningful-name] */$$_96 = require("../96")
import /* [auto-meaningful-name] */$$_103 = require("../103")
import /* [auto-meaningful-name] */$$_120 = require("../120")
import /* [auto-meaningful-name] */$$_140 = require("../140")
import /* [auto-meaningful-name] */$$_75_index = require("../75/index")
var G = function __importDefault(module) {
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
var U = function (e) {
  return +setTimeout(e, 16)
}
var W = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  U = function (e) {
    return window.requestAnimationFrame(e)
  }
  W = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var H = 0
var V = new Map()
function z(e) {
  V.delete(e)
}
function Y(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = H += 1
  function r(t) {
    if (0 === t) {
      z(n)
      e()
    } else {
      var o = U(function () {
        r(t - 1)
      })
      V.set(n, o)
    }
  }
  r(t)
  return n
}
function K(e, t) {
  return !!e && e.contains(t)
}
function q(e) {
  return e instanceof HTMLElement ? e : G.a.findDOMNode(e)
}
function X(e, t, n, r) {
  var o = G.a.unstable_batchedUpdates ? function (e) {
    G.a.unstable_batchedUpdates(n, e)
  } : n
  if (e.addEventListener) {
    e.addEventListener(t, o, r)
  }
  return {
    remove: function () {
      if (e.removeEventListener) {
        e.removeEventListener(t, o)
      }
    }
  }
}
function Q() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement)
}
Y.cancel = function (e) {
  var t = V.get(e)
  z(t)
  return W(t)
}
var Z = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var i = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var a = React.useRef(false)
  if (!a.current && Q()) {
    i.current = e$getContainer()
    a.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */i$current
      var /* [auto-meaningful-name] */i$current$parentNode
      if (!(null === (i$current = i.current) || undefined === i$current || null === (i$current$parentNode = i$current.parentNode) || undefined === i$current$parentNode)) {
        i$current$parentNode.removeChild(i.current)
      }
    }
  }, [])
  return i.current ? G.a.createPortal(e$children, i.current) : null
})
function J(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function $(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var ee = function (e, t) {
  var n = {
    animationend: $("Animation", "AnimationEnd"),
    transitionend: $("Transition", "TransitionEnd")
  }
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition
    }
  }
  return n
}(Q(), "undefined" !== typeof window ? window : {})
var te = {}
if (Q()) {
  var ne = document.createElement("div")
  te = ne.style
}
var re = {}
function oe(e) {
  if (re[e]) {
    return re[e]
  }
  var t = ee[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, o = 0; o < n$length; o += 1) {
      var i = n[o]
      if (Object.prototype.hasOwnProperty.call(t, i) && i in te) {
        re[e] = t[i]
        return re[e]
      }
    }
  }
  return ""
}
var ie = oe("animationend")
var ae = oe("transitionend")
var se = !(!ie || !ae)
var ce = ie || "animationend"
var le = ae || "transitionend"
function ue(e, t) {
  return e ? "object" === $$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function de(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_33_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [o, function (e) {
    if (!t.current) {
      i(e)
    }
  }]
}
var pe = Q() ? React.useLayoutEffect : React.useEffect
var fe = ["prepare", "start", "active", "end"]
function he(e) {
  return "active" === e || "end" === e
}
var me = function (e, t) {
  var n = React.useState("none")
  var r = $$_33_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = function () {
    var e = React.useRef(null)
    function t() {
      Y.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var i = Y(function () {
        if (o <= 1) {
          r({
            isCanceled: function () {
              return i !== e.current
            }
          })
        } else {
          n(r, o - 1)
        }
      })
      e.current = i
    }, t]
  }()
  var c = $$_33_index.a(a, 2)
  var u = c[0]
  var d = c[1]
  pe(function () {
    if ("none" !== o && "end" !== o) {
      var e = fe.indexOf(o)
      var n = fe[e + 1]
      var r = t(o)
      if (false === r) {
        i(n)
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              i(n)
            }
          }
          if (true === r) {
            t()
          } else {
            Promise.resolve(r).then(t)
          }
        })
      }
    }
  }, [e, o])
  React.useEffect(function () {
    return function () {
      d()
    }
  }, [])
  return [function () {
    i("prepare")
  }, o]
}
function ge(e, t, n, r) {
  var /* [auto-meaningful-name] */r$motionEnter = r.motionEnter
  var c = undefined === r$motionEnter || r$motionEnter
  var /* [auto-meaningful-name] */r$motionAppear = r.motionAppear
  var d = undefined === r$motionAppear || r$motionAppear
  var /* [auto-meaningful-name] */r$motionLeave = r.motionLeave
  var f = undefined === r$motionLeave || r$motionLeave
  var /* [auto-meaningful-name] */r$motionDeadline = r.motionDeadline
  var /* [auto-meaningful-name] */r$motionLeaveImmediately = r.motionLeaveImmediately
  var /* [auto-meaningful-name] */r$onAppearPrepare = r.onAppearPrepare
  var /* [auto-meaningful-name] */r$onEnterPrepare = r.onEnterPrepare
  var /* [auto-meaningful-name] */r$onLeavePrepare = r.onLeavePrepare
  var /* [auto-meaningful-name] */r$onAppearStart = r.onAppearStart
  var /* [auto-meaningful-name] */r$onEnterStart = r.onEnterStart
  var /* [auto-meaningful-name] */r$onLeaveStart = r.onLeaveStart
  var /* [auto-meaningful-name] */r$onAppearActive = r.onAppearActive
  var /* [auto-meaningful-name] */r$onEnterActive = r.onEnterActive
  var /* [auto-meaningful-name] */r$onLeaveActive = r.onLeaveActive
  var /* [auto-meaningful-name] */r$onAppearEnd = r.onAppearEnd
  var /* [auto-meaningful-name] */r$onEnterEnd = r.onEnterEnd
  var /* [auto-meaningful-name] */r$onLeaveEnd = r.onLeaveEnd
  var /* [auto-meaningful-name] */r$onVisibleChanged = r.onVisibleChanged
  var j = de()
  var N = $$_33_index.a(j, 2)
  var R = N[0]
  var k = N[1]
  var x = de("none")
  var D = $$_33_index.a(x, 2)
  var M = D[0]
  var L = D[1]
  var P = de(null)
  var B = $$_33_index.a(P, 2)
  var F = B[0]
  var G = B[1]
  var U = React.useRef(false)
  var W = React.useRef(null)
  var H = React.useRef(false)
  var V = React.useRef(null)
  function z() {
    return n() || V.current
  }
  var Y = React.useRef(false)
  function K(e) {
    var t
    var n = z()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && Y.current) {
        t = null === r$onAppearEnd || undefined === r$onAppearEnd ? undefined : r$onAppearEnd(n, e)
      } else {
        if ("enter" === M && Y.current) {
          t = null === r$onEnterEnd || undefined === r$onEnterEnd ? undefined : r$onEnterEnd(n, e)
        } else {
          if ("leave" === M && Y.current) {
            t = null === r$onLeaveEnd || undefined === r$onLeaveEnd ? undefined : r$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || H.current)) {
        L("none")
        G(null)
      }
    }
  }
  var q = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function o(e) {
      if (e) {
        e.removeEventListener(le, r)
        e.removeEventListener(ce, r)
      }
    }
    React.useEffect(function () {
      return function () {
        o(t.current)
      }
    }, [])
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current)
      }
      if (e && e !== t.current) {
        e.addEventListener(le, r)
        e.addEventListener(ce, r)
        t.current = e
      }
    }, o]
  }(K)
  var X = $$_33_index.a(q, 1)[0]
  var Q = React.useMemo(function () {
    var e
    var t
    var n
    switch (M) {
      case "appear":
        e = {}
        $$_29.a(e, "prepare", r$onAppearPrepare)
        $$_29.a(e, "start", r$onAppearStart)
        $$_29.a(e, "active", r$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_29.a(t, "prepare", r$onEnterPrepare)
        $$_29.a(t, "start", r$onEnterStart)
        $$_29.a(t, "active", r$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_29.a(n, "prepare", r$onLeavePrepare)
        $$_29.a(n, "start", r$onLeaveStart)
        $$_29.a(n, "active", r$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [M])
  var Z = me(M, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */Q$prepare = Q.prepare
      return !!Q$prepare && Q$prepare(z())
    }
    var n
    if (ee in Q) {
      G((null === (n = Q[ee]) || undefined === n ? undefined : n.call(Q, z(), null)) || null)
    }
    if ("active" === ee) {
      X(z())
      if (r$motionDeadline > 0) {
        clearTimeout(W.current)
        W.current = setTimeout(function () {
          K({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var J = $$_33_index.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = he(ee)
  Y.current = te
  pe(function () {
    k(t)
    var n
    var /* [auto-meaningful-name] */U$current = U.current
    U.current = true
    if (e) {
      if (!U$current && t && d) {
        n = "appear"
      }
      if (U$current && t && c) {
        n = "enter"
      }
      if (U$current && !t && f || !U$current && r$motionLeaveImmediately && !t && f) {
        n = "leave"
      }
      if (n) {
        L(n)
        $()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === M && !d || "enter" === M && !c || "leave" === M && !f) {
      L("none")
    }
  }, [d, c, f])
  React.useEffect(function () {
    return function () {
      clearTimeout(W.current)
      H.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== R && "none" === M) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(R)
      }
    }
  }, [R, M])
  var ne = F
  if (Q.prepare && "start" === ee) {
    ne = $$_20.a({
      transition: "none"
    }, ne)
  }
  return [M, ee, ne, null !== R && undefined !== R ? R : t]
}
var _e = function (e) {
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
var ve = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_108.a(e)) {
    t = e.transitionSupport
  }
  var r = React.forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var a = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var u = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var v = n(e)
    var b = React.useRef()
    var y = React.useRef()
    var E = ge(v, a, function () {
      try {
        return q(b.current || y.current)
      } catch (e) {
        return null
      }
    }, e)
    var O = $$_33_index.a(E, 4)
    var w = O[0]
    var C = O[1]
    var T = O[2]
    var S = O[3]
    var I = React.useRef(S)
    if (S) {
      I.current = true
    }
    var A = React.useRef(t)
    A.current = t
    var j
    var N = React.useCallback(function (e) {
      b.current = e
      h(A.current, e)
    }, [])
    var R = $$_20.a($$_20.a({}, e$eventProps), {}, {
      visible: a
    })
    if (e$children) {
      if ("none" !== w && n(e)) {
        var k
        var x
        if ("prepare" === C) {
          x = "prepare"
        } else {
          if (he(C)) {
            x = "active"
          } else {
            if ("start" === C) {
              x = "start"
            }
          }
        }
        j = e$children($$_20.a($$_20.a({}, R), {}, {
          className: _()(ue(e$motionName, w), (k = {}, $$_29.a(k, ue(e$motionName, "".concat(w, "-").concat(x)), x), $$_29.a(k, e$motionName, "string" === typeof e$motionName), k)),
          style: T
        }), N)
      } else {
        j = S ? e$children($$_20.a({}, R), N) : !u && I.current ? e$children($$_20.a($$_20.a({}, R), {}, {
          className: e$leavedClassName
        }), N) : e$forceRender ? e$children($$_20.a($$_20.a({}, R), {}, {
          style: {
            display: "none"
          }
        }), N) : null
      }
    } else {
      j = null
    }
    return React.createElement(_e, {
      ref: y
    }, j)
  })
  r.displayName = "CSSMotion"
  return r
}(se)
function be(e) {
  var t
  t = e && "object" === $$_108.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_20.a($$_20.a({}, t), {}, {
    key: String(t.key)
  })
}
function ye() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(be)
}
function Ee() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var a = ye(e)
  var s = ye(t)
  a.forEach(function (e) {
    for (var t = false, a = r; a < t$length; a += 1) {
      var c = s[a]
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return $$_20.a($$_20.a({}, e), {}, {
              status: "add"
            })
          }))
          r = a
        }
        n.push($$_20.a($$_20.a({}, c), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_20.a($$_20.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(s.slice(r).map(function (e) {
      return $$_20.a($$_20.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var c = {}
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    c[e$key] = (c[e$key] || 0) + 1
  })
  var l = Object.keys(c).filter(function (e) {
    return c[e] > 1
  })
  l.forEach(function (e) {
    (n = n.filter(function (t) {
      var /* [auto-meaningful-name] */t$key = t.key
      var /* [auto-meaningful-name] */t$status = t.status
      return t$key !== e || "remove" !== t$status
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep"
      }
    })
  })
  return n
}
var Oe = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : ve
  var n = function (e) {
    $$_120.a(o, e)
    var n = $$_140.a(o)
    function o() {
      var e
      $$_95.a(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_20.a($$_20.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_96.a(o, [{
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$component = this$props.component
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
        var u = $$_54.a(this$props, ["component", "children", "onVisibleChanged"])
        var d = this$props$component || React.Fragment
        var p = {}
        Oe.forEach(function (e) {
          p[e] = u[e]
          delete u[e]
        })
        delete u.keys
        return React.createElement(d, u, this$state$keyEntities.map(function (n) {
          var /* [auto-meaningful-name] */n$status = n.status
          var i = $$_54.a(n, ["status"])
          var u = "add" === n$status || "keep" === n$status
          return React.createElement(t, $$_19.a({}, p, {
            key: i.key,
            visible: u,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                this$props$onVisibleChanged(t, {
                  key: i.key
                })
              }
              if (!t) {
                e.removeKey(i.key)
              }
            }
          }), this$props$children)
        }))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var /* [auto-meaningful-name] */e$keys = e.keys
        var /* [auto-meaningful-name] */t$keyEntities = t.keyEntities
        var o = ye(e$keys)
        return {
          keyEntities: Ee(t$keyEntities, o).filter(function (e) {
            var t = t$keyEntities.find(function (t) {
              var /* [auto-meaningful-name] */t$key = t.key
              return e.key === t$key
            })
            return !t || "removed" !== t.status || "remove" !== e.status
          })
        }
      }
    }])
    return o
  }(React.Component)
  n.defaultProps = {
    component: "div"
  }
}(se)
var we = ve
function Ce(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$motion = e.motion
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  return e$motion || (e$animation ? {
    motionName: "".concat(e$prefixCls, "-").concat(e$animation)
  } : e$transitionName ? {
    motionName: e$transitionName
  } : null)
}
function Te(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$mask = e.mask
  var /* [auto-meaningful-name] */e$maskMotion = e.maskMotion
  var /* [auto-meaningful-name] */e$maskAnimation = e.maskAnimation
  var /* [auto-meaningful-name] */e$maskTransitionName = e.maskTransitionName
  if (!e$mask) {
    return null
  }
  var d = {}
  if (e$maskMotion || e$maskTransitionName || e$maskAnimation) {
    d = $$_20.a({
      motionAppear: true
    }, Ce({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return React.createElement(we, $$_19.a({}, d, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    return React.createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: _()("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
import /* [auto-meaningful-name] */$$_556_555_index = require("../556/555/index")
import /* [auto-meaningful-name] */$$_110 = require("../110")
var Ae = function __importDefault(module) {
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
}($$_110)
import /* [auto-meaningful-name] */$$_171 = require("../171")
var Ne = ["measure", "align", null, "motion"]
var Re = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$stretch = e.stretch
  var /* [auto-meaningful-name] */e$destroyPopupOnHide = e.destroyPopupOnHide
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$align = e.align
  var /* [auto-meaningful-name] */e$point = e.point
  var /* [auto-meaningful-name] */e$getRootDomNode = e.getRootDomNode
  var /* [auto-meaningful-name] */e$getClassNameFromAlign = e.getClassNameFromAlign
  var /* [auto-meaningful-name] */e$onAlign = e.onAlign
  var /* [auto-meaningful-name] */e$onMouseEnter = e.onMouseEnter
  var /* [auto-meaningful-name] */e$onMouseLeave = e.onMouseLeave
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onTouchStart = e.onTouchStart
  var T = React.useRef()
  var S = React.useRef()
  var I = React.useState()
  var A = $$_33_index.a(I, 2)
  var j = A[0]
  var N = A[1]
  var R = function (e) {
    var t = React.useState({
      width: 0,
      height: 0
    })
    var n = $$_33_index.a(t, 2)
    var r = n[0]
    var o = n[1]
    return [React.useMemo(function () {
      var t = {}
      if (e) {
        var /* [auto-meaningful-name] */r$width = r.width
        var /* [auto-meaningful-name] */r$height = r.height
        if (-1 !== e.indexOf("height") && r$height) {
          t.height = r$height
        } else {
          if (-1 !== e.indexOf("minHeight") && r$height) {
            t.minHeight = r$height
          }
        }
        if (-1 !== e.indexOf("width") && r$width) {
          t.width = r$width
        } else {
          if (-1 !== e.indexOf("minWidth") && r$width) {
            t.minWidth = r$width
          }
        }
      }
      return t
    }, [e, r]), function (e) {
      o({
        width: e.offsetWidth,
        height: e.offsetHeight
      })
    }]
  }(e$stretch)
  var k = $$_33_index.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = function (e, t) {
    var n = React.useState(null)
    var r = $$_33_index.a(n, 2)
    var o = r[0]
    var i = r[1]
    var a = React.useRef()
    var c = React.useRef(false)
    function u(e) {
      if (!c.current) {
        i(e)
      }
    }
    function d() {
      Y.cancel(a.current)
    }
    React.useEffect(function () {
      u("measure")
    }, [e])
    React.useEffect(function () {
      switch (o) {
        case "measure":
          t()
      }
      if (o) {
        a.current = Y($$_171.a(Ae.a.mark(function e() {
          var t
          var n
          return Ae.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = Ne.indexOf(o)
                  if ((n = Ne[t + 1]) && -1 !== t) {
                    u(n)
                  }
                case 3:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        })))
      }
    }, [o])
    React.useEffect(function () {
      return function () {
        c.current = true
        d()
      }
    }, [])
    return [o, function (e) {
      d()
      a.current = Y(function () {
        u(function (e) {
          switch (o) {
            case "align":
              return "motion"
            case "motion":
              return "stable"
          }
          return e
        })
        if (!(null === e || undefined === e)) {
          e()
        }
      })
    }]
  }(e$visible, function () {
    if (e$stretch) {
      D(e$getRootDomNode())
    }
  })
  var L = $$_33_index.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = React.useRef()
  function G() {
    var /* [auto-meaningful-name] */T$current
    if (!(null === (T$current = T.current) || undefined === T$current)) {
      T$current.forceAlign()
    }
  }
  function U(e, t) {
    var n = e$getClassNameFromAlign(t)
    if (j !== n) {
      N(n)
    }
    if ("align" === P) {
      if (j !== n) {
        Promise.resolve().then(function () {
          G()
        })
      } else {
        B(function () {
          var /* [auto-meaningful-name] */F$current
          if (!(null === (F$current = F.current) || undefined === F$current)) {
            F$current.call(F)
          }
        })
      }
      if (!(null === e$onAlign || undefined === e$onAlign)) {
        e$onAlign(e, t)
      }
    }
  }
  var W = $$_20.a({}, Ce(e))
  function H() {
    return new Promise(function (e) {
      F.current = e
    })
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = W[e]
    W[e] = function (e, n) {
      B()
      return null === t || undefined === t ? undefined : t(e, n)
    }
  })
  React.useEffect(function () {
    if (!(W.motionName || "motion" !== P)) {
      B()
    }
  }, [W.motionName, P])
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: G,
      getElement: function () {
        return S.current
      }
    }
  })
  var V = $$_20.a($$_20.a({}, x), {}, {
    zIndex: e$zIndex,
    opacity: "motion" !== P && "stable" !== P && e$visible ? 0 : undefined,
    pointerEvents: "stable" === P ? undefined : "none"
  }, e$style)
  var z = true
  if (!(!(null === e$align || undefined === e$align ? undefined : e$align.points) || "align" !== P && "stable" !== P)) {
    z = false
  }
  var K = e$children
  if (React.Children.count(e$children) > 1) {
    K = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return React.createElement(we, $$_19.a({
    visible: e$visible,
    ref: S,
    leavedClassName: "".concat(e$prefixCls, "-hidden")
  }, W, {
    onAppearPrepare: H,
    onEnterPrepare: H,
    removeOnLeave: e$destroyPopupOnHide,
    forceRender: e$forceRender
  }), function (e, t) {
    var /* [auto-meaningful-name] */_e$className = e.className
    var /* [auto-meaningful-name] */_e$style = e.style
    var s = _()(e$prefixCls, e$className, j, _e$className)
    return React.createElement($$_556_555_index.a, {
      target: e$point || e$getRootDomNode,
      key: "popup",
      ref: T,
      monitorWindowResize: true,
      disabled: z,
      align: e$align,
      onAlign: U
    }, React.createElement("div", {
      ref: t,
      className: s,
      onMouseEnter: e$onMouseEnter,
      onMouseLeave: e$onMouseLeave,
      onMouseDownCapture: e$onMouseDown,
      onTouchStartCapture: e$onTouchStart,
      style: $$_20.a($$_20.a({}, _e$style), V)
    }, K))
  })
})
Re.displayName = "PopupInner"
var ke = Re
var xe = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var /* [auto-meaningful-name] */E$mobileUndefinedE$mobileE$mobile$popupClassName = (e$mobile = undefined === e$mobile ? {} : e$mobile).popupClassName
  var /* [auto-meaningful-name] */e$mobile$popupStyle = e$mobile.popupStyle
  var /* [auto-meaningful-name] */e$mobile$popupMotion = e$mobile.popupMotion
  var f = undefined === e$mobile$popupMotion ? {} : e$mobile$popupMotion
  var /* [auto-meaningful-name] */e$mobile$popupRender = e$mobile.popupRender
  var m = React.useRef()
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return m.current
      }
    }
  })
  var g = $$_20.a({
    zIndex: e$zIndex
  }, e$mobile$popupStyle)
  var v = e$children
  if (React.Children.count(e$children) > 1) {
    v = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  if (e$mobile$popupRender) {
    v = e$mobile$popupRender(v)
  }
  return React.createElement(we, $$_19.a({
    visible: e$visible,
    ref: m,
    removeOnLeave: true
  }, f), function (e, t) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    var a = _()(e$prefixCls, E$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return React.createElement("div", {
      ref: t,
      className: a,
      style: $$_20.a($$_20.a({}, e$style), g)
    }, v)
  })
})
xe.displayName = "MobilePopupInner"
var De = xe
var Me = ["visible", "mobile"]
var Le = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$mobile = e.mobile
  var a = $$_54.a(e, Me)
  var u = React.useState(e$visible)
  var p = $$_33_index.a(u, 2)
  var f = p[0]
  var h = p[1]
  var m = React.useState(false)
  var g = $$_33_index.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = $$_20.a($$_20.a({}, a), {}, {
    visible: f
  })
  React.useEffect(function () {
    h(e$visible)
    if (e$visible && e$mobile) {
      v(d())
    }
  }, [e$visible, e$mobile])
  var y = _ ? React.createElement(De, $$_19.a({}, b, {
    mobile: e$mobile,
    ref: t
  })) : React.createElement(ke, $$_19.a({}, b, {
    ref: t
  }))
  return React.createElement("div", null, React.createElement(Te, b), y)
})
Le.displayName = "Popup"
var Pe = Le
var Be = React.createContext(null)
function Fe() {}
function Ge() {
  return ""
}
function Ue(e) {
  return e ? e.ownerDocument : window.document
}
var We = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var He = function (e) {
  var t = function (t) {
    $$_120.a(o, t)
    var n = $$_140.a(o)
    function o(e) {
      var t
      var i
      $$_95.a(this, o);
      (t = n.call(this, e)).popupRef = React.createRef()
      t.triggerRef = React.createRef()
      t.attachId = undefined
      t.clickOutsideHandler = undefined
      t.touchOutsideHandler = undefined
      t.contextMenuOutsideHandler1 = undefined
      t.contextMenuOutsideHandler2 = undefined
      t.mouseDownTimeout = undefined
      t.focusTime = undefined
      t.preClickTime = undefined
      t.preTouchTime = undefined
      t.delayTimer = undefined
      t.hasPopupMouseDown = undefined
      t.onMouseEnter = function (e) {
        var /* [auto-meaningful-name] */t$props$mouseEnterDelay = t.props.mouseEnterDelay
        t.fireEvents("onMouseEnter", e)
        t.delaySetPopupVisible(true, t$props$mouseEnterDelay, t$props$mouseEnterDelay ? null : e)
      }
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e)
        t.setPoint(e)
      }
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e)
        t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
      }
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer()
      }
      t.onPopupMouseLeave = function (e) {
        var /* [auto-meaningful-name] */t$popupRef$current
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && K(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
        }
      }
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e)
        t.clearDelayTimer()
        if (t.isFocusToShow()) {
          t.focusTime = Date.now()
          t.delaySetPopupVisible(true, t.props.focusDelay)
        }
      }
      t.onMouseDown = function (e) {
        t.fireEvents("onMouseDown", e)
        t.preClickTime = Date.now()
      }
      t.onTouchStart = function (e) {
        t.fireEvents("onTouchStart", e)
        t.preTouchTime = Date.now()
      }
      t.onBlur = function (e) {
        t.fireEvents("onBlur", e)
        t.clearDelayTimer()
        if (t.isBlurToHide()) {
          t.delaySetPopupVisible(false, t.props.blurDelay)
        }
      }
      t.onContextMenu = function (e) {
        e.preventDefault()
        t.fireEvents("onContextMenu", e)
        t.setPopupVisible(true, e)
      }
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close()
        }
      }
      t.onClick = function (e) {
        t.fireEvents("onClick", e)
        if (t.focusTime) {
          var n
          if (t.preClickTime && t.preTouchTime) {
            n = Math.min(t.preClickTime, t.preTouchTime)
          } else {
            if (t.preClickTime) {
              n = t.preClickTime
            } else {
              if (t.preTouchTime) {
                n = t.preTouchTime
              }
            }
          }
          if (Math.abs(n - t.focusTime) < 20) {
            return
          }
          t.focusTime = 0
        }
        t.preClickTime = 0
        t.preTouchTime = 0
        if (t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault()
        }
        var r = !t.state.popupVisible
        if (t.isClickToHide() && !r || r && t.isClickToShow()) {
          t.setPopupVisible(!t.state.popupVisible, e)
        }
      }
      t.onPopupMouseDown = function () {
        var /* [auto-meaningful-name] */t$context
        t.hasPopupMouseDown = true
        clearTimeout(t.mouseDownTimeout)
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = false
        }, 0)
        if (t.context) {
          (t$context = t.context).onPopupMouseDown.apply(t$context, arguments)
        }
      }
      t.onDocumentClick = function (e) {
        if (!t.props.mask || t.props.maskClosable) {
          var /* [auto-meaningful-name] */e$target = e.target
          var r = t.getRootDomNode()
          var o = t.getPopupDomNode()
          if (!(K(r, e$target) && !t.isContextMenuOnly() || K(o, e$target) || t.hasPopupMouseDown)) {
            t.close()
          }
        }
      }
      t.getRootDomNode = function () {
        var /* [auto-meaningful-name] */t$props$getTriggerDOMNode = t.props.getTriggerDOMNode
        if (t$props$getTriggerDOMNode) {
          return t$props$getTriggerDOMNode(t.triggerRef.current)
        }
        try {
          var n = q(t.triggerRef.current)
          if (n) {
            return n
          }
        } catch (r) {}
        return G.a.findDOMNode($$_103.a(t))
      }
      t.getPopupClassNameFromAlign = function (e) {
        var n = []
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$popupPlacement = t$props.popupPlacement
        var /* [auto-meaningful-name] */t$props$builtinPlacements = t$props.builtinPlacements
        var /* [auto-meaningful-name] */t$props$prefixCls = t$props.prefixCls
        var /* [auto-meaningful-name] */t$props$alignPoint = t$props.alignPoint
        var /* [auto-meaningful-name] */t$props$getPopupClassNameFromAlign = t$props.getPopupClassNameFromAlign
        if (t$props$popupPlacement && t$props$builtinPlacements) {
          n.push(function (e, t, n, r) {
            for (var /* [auto-meaningful-name] */n$points = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
              var s = i[a]
              if (J(e[s].points, n$points, r)) {
                return "".concat(t, "-placement-").concat(s)
              }
            }
            return ""
          }(t$props$builtinPlacements, t$props$prefixCls, e, t$props$alignPoint))
        }
        if (t$props$getPopupClassNameFromAlign) {
          n.push(t$props$getPopupClassNameFromAlign(e))
        }
        return n.join(" ")
      }
      t.getComponent = function () {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$prefixCls = t$props.prefixCls
        var /* [auto-meaningful-name] */t$props$destroyPopupOnHide = t$props.destroyPopupOnHide
        var /* [auto-meaningful-name] */t$props$popupClassName = t$props.popupClassName
        var /* [auto-meaningful-name] */t$props$onPopupAlign = t$props.onPopupAlign
        var /* [auto-meaningful-name] */t$props$popupMotion = t$props.popupMotion
        var /* [auto-meaningful-name] */t$props$popupAnimation = t$props.popupAnimation
        var /* [auto-meaningful-name] */t$props$popupTransitionName = t$props.popupTransitionName
        var /* [auto-meaningful-name] */t$props$popupStyle = t$props.popupStyle
        var /* [auto-meaningful-name] */t$props$mask = t$props.mask
        var /* [auto-meaningful-name] */t$props$maskAnimation = t$props.maskAnimation
        var /* [auto-meaningful-name] */t$props$maskTransitionName = t$props.maskTransitionName
        var /* [auto-meaningful-name] */t$props$maskMotion = t$props.maskMotion
        var /* [auto-meaningful-name] */t$props$zIndex = t$props.zIndex
        var /* [auto-meaningful-name] */t$props$popup = t$props.popup
        var /* [auto-meaningful-name] */t$props$stretch = t$props.stretch
        var /* [auto-meaningful-name] */t$props$alignPoint = t$props.alignPoint
        var /* [auto-meaningful-name] */t$props$mobile = t$props.mobile
        var /* [auto-meaningful-name] */t$props$forceRender = t$props.forceRender
        var /* [auto-meaningful-name] */t$state = t.state
        var /* [auto-meaningful-name] */t$state$popupVisible = t$state.popupVisible
        var /* [auto-meaningful-name] */t$state$point = t$state.point
        var T = t.getPopupAlign()
        var S = {}
        if (t.isMouseEnterToShow()) {
          S.onMouseEnter = t.onPopupMouseEnter
        }
        if (t.isMouseLeaveToHide()) {
          S.onMouseLeave = t.onPopupMouseLeave
        }
        S.onMouseDown = t.onPopupMouseDown
        S.onTouchStart = t.onPopupMouseDown
        return React.createElement(Pe, $$_19.a({
          prefixCls: t$props$prefixCls,
          destroyPopupOnHide: t$props$destroyPopupOnHide,
          visible: t$state$popupVisible,
          point: t$props$alignPoint && t$state$point,
          className: t$props$popupClassName,
          align: T,
          onAlign: t$props$onPopupAlign,
          animation: t$props$popupAnimation,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, S, {
          stretch: t$props$stretch,
          getRootDomNode: t.getRootDomNode,
          style: t$props$popupStyle,
          mask: t$props$mask,
          zIndex: t$props$zIndex,
          transitionName: t$props$popupTransitionName,
          maskAnimation: t$props$maskAnimation,
          maskTransitionName: t$props$maskTransitionName,
          maskMotion: t$props$maskMotion,
          ref: t.popupRef,
          motion: t$props$popupMotion,
          mobile: t$props$mobile,
          forceRender: t$props$forceRender
        }), "function" === typeof t$props$popup ? t$props$popup() : t$props$popup)
      }
      t.attachParent = function (e) {
        Y.cancel(t.attachId)
        var n
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$getPopupContainer = t$props.getPopupContainer
        var /* [auto-meaningful-name] */t$props$getDocument = t$props.getDocument
        var a = t.getRootDomNode()
        if (t$props$getPopupContainer) {
          if (a || 0 === t$props$getPopupContainer.length) {
            n = t$props$getPopupContainer(a)
          }
        } else {
          n = t$props$getDocument(t.getRootDomNode()).body
        }
        if (n) {
          n.appendChild(e)
        } else {
          t.attachId = Y(function () {
            t.attachParent(e)
          })
        }
      }
      t.getContainer = function () {
        var e = (0, t.props.getDocument)(t.getRootDomNode()).createElement("div")
        e.style.position = "absolute"
        e.style.top = "0"
        e.style.left = "0"
        e.style.width = "100%"
        t.attachParent(e)
        return e
      }
      t.setPoint = function (e) {
        if (t.props.alignPoint && e) {
          t.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          })
        }
      }
      t.handlePortalUpdate = function () {
        if (t.state.prevPopupVisible !== t.state.popupVisible) {
          t.props.afterPopupVisibleChange(t.state.popupVisible)
        }
      }
      t.triggerContextValue = {
        onPopupMouseDown: t.onPopupMouseDown
      }
      i = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible
      t.state = {
        prevPopupVisible: i,
        popupVisible: i
      }
      We.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n)
        }
      })
      return t
    }
    $$_96.a(o, [{
      key: "componentDidMount",
      value: function () {
        this.componentDidUpdate()
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        var e
        var /* [auto-meaningful-name] */this$props = this.props
        if (this.state.popupVisible) {
          if (!(this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow())) {
            e = this$props.getDocument(this.getRootDomNode())
            this.clickOutsideHandler = X(e, "mousedown", this.onDocumentClick)
          }
          if (!this.touchOutsideHandler) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.touchOutsideHandler = X(e, "touchstart", this.onDocumentClick)
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.contextMenuOutsideHandler1 = X(e, "scroll", this.onContextMenuClose)
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = X(window, "blur", this.onContextMenuClose)))
        }
        this.clearOutsideHandler()
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer()
        this.clearOutsideHandler()
        clearTimeout(this.mouseDownTimeout)
        Y.cancel(this.attachId)
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var /* [auto-meaningful-name] */this$popupRef$current
        return (null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current ? undefined : this$popupRef$current.getElement()) || null
      }
    }, {
      key: "getPopupAlign",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$popupPlacement = this$props.popupPlacement
        var /* [auto-meaningful-name] */this$props$popupAlign = this$props.popupAlign
        var /* [auto-meaningful-name] */this$props$builtinPlacements = this$props.builtinPlacements
        return this$props$popupPlacement && this$props$builtinPlacements ? function (e, t, n) {
          var r = e[t] || {}
          return $$_20.a($$_20.a({}, r), n)
        }(this$props$builtinPlacements, this$props$popupPlacement, this$props$popupAlign) : this$props$popupAlign
      }
    }, {
      key: "setPopupVisible",
      value: function (e, t) {
        var /* [auto-meaningful-name] */this$props$alignPoint = this.props.alignPoint
        var /* [auto-meaningful-name] */this$state$popupVisible = this.state.popupVisible
        this.clearDelayTimer()
        if (this$state$popupVisible !== e) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: e,
              prevPopupVisible: this$state$popupVisible
            })
          }
          this.props.onPopupVisibleChange(e)
        }
        if (this$props$alignPoint && t && e) {
          this.setPoint(t)
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function (e, t, n) {
        var r = this
        var o = 1e3 * t
        this.clearDelayTimer()
        if (o) {
          var i = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, i)
            r.clearDelayTimer()
          }, o)
        } else {
          this.setPopupVisible(e, n)
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function () {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer)
          this.delayTimer = null
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function () {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove()
          this.clickOutsideHandler = null
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove()
          this.contextMenuOutsideHandler1 = null
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove()
          this.contextMenuOutsideHandler2 = null
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove()
          this.touchOutsideHandler = null
        }
      }
    }, {
      key: "createTwoChains",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$children$props = this.props.children.props
        var /* [auto-meaningful-name] */this$props = this.props
        return this$props$children$props[e] && this$props[e] ? this["fire".concat(e)] : this$props$children$props[e] || this$props[e]
      }
    }, {
      key: "isClickToShow",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$action = this$props.action
        var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("click") || -1 !== this$props$showAction.indexOf("click")
      }
    }, {
      key: "isContextMenuOnly",
      value: function () {
        var /* [auto-meaningful-name] */this$props$action = this.props.action
        return "contextMenu" === this$props$action || 1 === this$props$action.length && "contextMenu" === this$props$action[0]
      }
    }, {
      key: "isContextMenuToShow",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$action = this$props.action
        var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("contextMenu") || -1 !== this$props$showAction.indexOf("contextMenu")
      }
    }, {
      key: "isClickToHide",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$action = this$props.action
        var /* [auto-meaningful-name] */this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("click") || -1 !== this$props$hideAction.indexOf("click")
      }
    }, {
      key: "isMouseEnterToShow",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$action = this$props.action
        var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$showAction.indexOf("mouseEnter")
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$action = this$props.action
        var /* [auto-meaningful-name] */this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$hideAction.indexOf("mouseLeave")
      }
    }, {
      key: "isFocusToShow",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$action = this$props.action
        var /* [auto-meaningful-name] */this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$showAction.indexOf("focus")
      }
    }, {
      key: "isBlurToHide",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$action = this$props.action
        var /* [auto-meaningful-name] */this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$hideAction.indexOf("blur")
      }
    }, {
      key: "forcePopupAlign",
      value: function () {
        var /* [auto-meaningful-name] */this$popupRef$current
        if (this.state.popupVisible) {
          if (!(null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current)) {
            this$popupRef$current.forceAlign()
          }
        }
      }
    }, {
      key: "fireEvents",
      value: function (e, t) {
        var n = this.props.children.props[e]
        if (n) {
          n(t)
        }
        var r = this.props[e]
        if (r) {
          r(t)
        }
      }
    }, {
      key: "close",
      value: function () {
        this.setPopupVisible(false)
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$state$popupVisible = this.state.popupVisible
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$forceRender = this$props.forceRender
        var /* [auto-meaningful-name] */this$props$alignPoint = this$props.alignPoint
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var /* [auto-meaningful-name] */this$props$autoDestroy = this$props.autoDestroy
        var u = React.Children.only(this$props$children)
        var d = {
          key: "trigger"
        }
        if (this.isContextMenuToShow()) {
          d.onContextMenu = this.onContextMenu
        } else {
          d.onContextMenu = this.createTwoChains("onContextMenu")
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          d.onClick = this.onClick
          d.onMouseDown = this.onMouseDown
          d.onTouchStart = this.onTouchStart
        } else {
          d.onClick = this.createTwoChains("onClick")
          d.onMouseDown = this.createTwoChains("onMouseDown")
          d.onTouchStart = this.createTwoChains("onTouchStart")
        }
        if (this.isMouseEnterToShow()) {
          d.onMouseEnter = this.onMouseEnter
          if (this$props$alignPoint) {
            d.onMouseMove = this.onMouseMove
          }
        } else {
          d.onMouseEnter = this.createTwoChains("onMouseEnter")
        }
        if (this.isMouseLeaveToHide()) {
          d.onMouseLeave = this.onMouseLeave
        } else {
          d.onMouseLeave = this.createTwoChains("onMouseLeave")
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          d.onFocus = this.onFocus
          d.onBlur = this.onBlur
        } else {
          d.onFocus = this.createTwoChains("onFocus")
          d.onBlur = this.createTwoChains("onBlur")
        }
        var p = _()(u && u.props && u.props.className, this$props$className)
        if (p) {
          d.className = p
        }
        var h = $$_20.a({}, d)
        if (function (e) {
          var /* [auto-meaningful-name] */r$prototype
          var /* [auto-meaningful-name] */e$prototype
          var r = $$_242_index.isMemo(e) ? e.type.type : e.type
          return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
        }(u)) {
          h.ref = m(this.triggerRef, u.ref)
        }
        var g
        var v = React.cloneElement(u, h)
        if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
          g = React.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent())
        }
        if (!this$state$popupVisible && this$props$autoDestroy) {
          g = null
        }
        return React.createElement(Be.Provider, {
          value: this.triggerContextValue
        }, v, g)
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var /* [auto-meaningful-name] */e$popupVisible = e.popupVisible
        var r = {}
        if (undefined !== e$popupVisible && t.popupVisible !== e$popupVisible) {
          r.popupVisible = e$popupVisible
          r.prevPopupVisible = t.popupVisible
        }
        return r
      }
    }])
    return o
  }(React.Component)
  t.contextType = Be
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: Ge,
    getDocument: Ue,
    onPopupVisibleChange: Fe,
    afterPopupVisibleChange: Fe,
    onPopupAlign: Fe,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  }
  return t
}(Z)
var Ve = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange"]
var ze = function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  e.disabled
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$popupElement = e.popupElement
  var /* [auto-meaningful-name] */e$containerWidth = e.containerWidth
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  var /* [auto-meaningful-name] */e$dropdownStyle = e.dropdownStyle
  var /* [auto-meaningful-name] */e$dropdownClassName = e.dropdownClassName
  var /* [auto-meaningful-name] */e$direction = e.direction
  var v = undefined === e$direction ? "ltr" : e$direction
  var /* [auto-meaningful-name] */e$placement = e.placement
  var /* [auto-meaningful-name] */e$dropdownMatchSelectWidth = e.dropdownMatchSelectWidth
  var E = undefined === e$dropdownMatchSelectWidth || e$dropdownMatchSelectWidth
  var /* [auto-meaningful-name] */e$dropdownRender = e.dropdownRender
  var /* [auto-meaningful-name] */e$dropdownAlign = e.dropdownAlign
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$empty = e.empty
  var /* [auto-meaningful-name] */e$getTriggerDOMNode = e.getTriggerDOMNode
  var /* [auto-meaningful-name] */e$onPopupVisibleChange = e.onPopupVisibleChange
  var A = $$_54.a(e, Ve)
  var j = "".concat(e$prefixCls, "-dropdown")
  var N = e$popupElement
  if (e$dropdownRender) {
    N = e$dropdownRender(e$popupElement)
  }
  var R = React.useMemo(function () {
    return function (e) {
      var t = "number" !== typeof e ? 0 : 1
      return {
        bottomLeft: {
          points: ["tl", "bl"],
          offset: [0, 4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        bottomRight: {
          points: ["tr", "br"],
          offset: [0, 4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        topLeft: {
          points: ["bl", "tl"],
          offset: [0, -4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        topRight: {
          points: ["br", "tr"],
          offset: [0, -4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        }
      }
    }(E)
  }, [E])
  var k = e$animation ? "".concat(j, "-").concat(e$animation) : e$transitionName
  var x = React.useRef(null)
  React.useImperativeHandle(t, function () {
    return {
      getPopupElement: function () {
        return x.current
      }
    }
  })
  var D = $$_20.a({
    minWidth: e$containerWidth
  }, e$dropdownStyle)
  if ("number" === typeof E) {
    D.width = E
  } else {
    if (E) {
      D.width = e$containerWidth
    }
  }
  return React.createElement(He, $$_19.a({}, A, {
    showAction: e$onPopupVisibleChange ? ["click"] : [],
    hideAction: e$onPopupVisibleChange ? ["click"] : [],
    popupPlacement: e$placement || ("rtl" === v ? "bottomRight" : "bottomLeft"),
    builtinPlacements: R,
    prefixCls: j,
    popupTransitionName: k,
    popup: React.createElement("div", {
      ref: x
    }, N),
    popupAlign: e$dropdownAlign,
    popupVisible: e$visible,
    getPopupContainer: e$getPopupContainer,
    popupClassName: _()(e$dropdownClassName, $$_29.a({}, "".concat(j, "-empty"), e$empty)),
    popupStyle: D,
    getTriggerDOMNode: e$getTriggerDOMNode,
    onPopupVisibleChange: e$onPopupVisibleChange
  }), e$children)
}
var Ye = React.forwardRef(ze)
Ye.displayName = "SelectTrigger"
var Ke = Ye
import /* [auto-meaningful-name] */$_1476 = require("./1476")
import /* [auto-meaningful-name] */$$_519_index = require("../519/index")
var Qe = ["prefixCls", "className", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "filterSort", "optionFilterProp", "autoClearSearchValue", "onSearch", "fieldNames", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "tabIndex", "getInputElement", "getRawInputElement", "getPopupContainer", "placement", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]
var Ze = ["removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "tabIndex"]
function Je(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$components$optionList = e.components.optionList
  var /* [auto-meaningful-name] */e$convertChildrenToData = e.convertChildrenToData
  var /* [auto-meaningful-name] */e$flattenOptions = e.flattenOptions
  var /* [auto-meaningful-name] */e$getLabeledValue = e.getLabeledValue
  var /* [auto-meaningful-name] */e$filterOptions = e.filterOptions
  var /* [auto-meaningful-name] */e$isValueDisabled = e.isValueDisabled
  var /* [auto-meaningful-name] */e$findValueOption = e.findValueOption
  e.warningProps
  var /* [auto-meaningful-name] */e$fillOptionsWithMissingValue = e.fillOptionsWithMissingValue
  var /* [auto-meaningful-name] */e$omitDOMProps = e.omitDOMProps
  function C(e, C) {
    var I
    var /* [auto-meaningful-name] */_e$prefixCls = e.prefixCls
    var j = undefined === _e$prefixCls ? e$prefixCls : _e$prefixCls
    var /* [auto-meaningful-name] */e$className = e.className
    var k = e.id
    var /* [auto-meaningful-name] */e$open = e.open
    var /* [auto-meaningful-name] */e$defaultOpen = e.defaultOpen
    var /* [auto-meaningful-name] */e$options = e.options
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$mode = e.mode
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
    var /* [auto-meaningful-name] */e$labelInValue = e.labelInValue
    var /* [auto-meaningful-name] */e$showSearch = e.showSearch
    var /* [auto-meaningful-name] */e$inputValue = e.inputValue
    var /* [auto-meaningful-name] */e$searchValue = e.searchValue
    var /* [auto-meaningful-name] */e$filterOption = e.filterOption
    var /* [auto-meaningful-name] */e$filterSort = e.filterSort
    var /* [auto-meaningful-name] */e$optionFilterProp = e.optionFilterProp
    var q = undefined === e$optionFilterProp ? "value" : e$optionFilterProp
    var /* [auto-meaningful-name] */e$autoClearSearchValue = e.autoClearSearchValue
    var Q = undefined === e$autoClearSearchValue || e$autoClearSearchValue
    var /* [auto-meaningful-name] */e$onSearch = e.onSearch
    var /* [auto-meaningful-name] */e$fieldNames = e.fieldNames
    var /* [auto-meaningful-name] */e$allowClear = e.allowClear
    var /* [auto-meaningful-name] */e$clearIcon = e.clearIcon
    var /* [auto-meaningful-name] */e$showArrow = e.showArrow
    var /* [auto-meaningful-name] */e$inputIcon = e.inputIcon
    var /* [auto-meaningful-name] */e$menuItemSelectedIcon = e.menuItemSelectedIcon
    var /* [auto-meaningful-name] */e$disabled = e.disabled
    var /* [auto-meaningful-name] */e$loading = e.loading
    var /* [auto-meaningful-name] */e$defaultActiveFirstOption = e.defaultActiveFirstOption
    var /* [auto-meaningful-name] */e$notFoundContent = e.notFoundContent
    var ce = undefined === e$notFoundContent ? "Not Found" : e$notFoundContent
    var /* [auto-meaningful-name] */e$optionLabelProp = e.optionLabelProp
    var /* [auto-meaningful-name] */e$backfill = e.backfill
    e.tabIndex
    var /* [auto-meaningful-name] */e$getInputElement = e.getInputElement
    var /* [auto-meaningful-name] */e$getRawInputElement = e.getRawInputElement
    var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
    var /* [auto-meaningful-name] */e$placement = e.placement
    var /* [auto-meaningful-name] */e$listHeight = e.listHeight
    var ge = undefined === e$listHeight ? 200 : e$listHeight
    var /* [auto-meaningful-name] */e$listItemHeight = e.listItemHeight
    var ve = undefined === e$listItemHeight ? 20 : e$listItemHeight
    var /* [auto-meaningful-name] */e$animation = e.animation
    var /* [auto-meaningful-name] */e$transitionName = e.transitionName
    var /* [auto-meaningful-name] */e$virtual = e.virtual
    var /* [auto-meaningful-name] */e$dropdownStyle = e.dropdownStyle
    var /* [auto-meaningful-name] */e$dropdownClassName = e.dropdownClassName
    var /* [auto-meaningful-name] */e$dropdownMatchSelectWidth = e.dropdownMatchSelectWidth
    var /* [auto-meaningful-name] */e$dropdownRender = e.dropdownRender
    var /* [auto-meaningful-name] */e$dropdownAlign = e.dropdownAlign
    var /* [auto-meaningful-name] */e$showAction = e.showAction
    var Ae = undefined === e$showAction ? [] : e$showAction
    var /* [auto-meaningful-name] */e$direction = e.direction
    var /* [auto-meaningful-name] */e$tokenSeparators = e.tokenSeparators
    var /* [auto-meaningful-name] */e$tagRender = e.tagRender
    var /* [auto-meaningful-name] */e$onPopupScroll = e.onPopupScroll
    var /* [auto-meaningful-name] */e$onDropdownVisibleChange = e.onDropdownVisibleChange
    var /* [auto-meaningful-name] */e$onFocus = e.onFocus
    var /* [auto-meaningful-name] */e$onBlur = e.onBlur
    var /* [auto-meaningful-name] */e$onKeyUp = e.onKeyUp
    var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
    var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
    var /* [auto-meaningful-name] */e$onChange = e.onChange
    var /* [auto-meaningful-name] */e$onSelect = e.onSelect
    var /* [auto-meaningful-name] */e$onDeselect = e.onDeselect
    var /* [auto-meaningful-name] */e$onClear = e.onClear
    var /* [auto-meaningful-name] */e$internalProps = e.internalProps
    var Ve = undefined === e$internalProps ? {} : e$internalProps
    var ze = $$_54.a(e, Qe)
    var Ye = Ve.mark === $_1476.a
    var Je = e$omitDOMProps ? e$omitDOMProps(ze) : ze
    Ze.forEach(function (e) {
      delete Je[e]
    })
    var $e = React.useRef(null)
    var et = React.useRef(null)
    var tt = React.useRef(null)
    var nt = React.useRef(null)
    var rt = React.useMemo(function () {
      return (e$tokenSeparators || []).some(function (e) {
        return ["\n", "\r\n"].includes(e)
      })
    }, [e$tokenSeparators])
    var ot = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 10
      var t = React.useState(false)
      var n = $$_33_index.a(t, 2)
      var r = n[0]
      var o = n[1]
      var i = React.useRef(null)
      var a = function () {
        window.clearTimeout(i.current)
      }
      React.useEffect(function () {
        return a
      }, [])
      var c = function (t, n) {
        a()
        i.current = window.setTimeout(function () {
          o(t)
          if (n) {
            n()
          }
        }, e)
      }
      return [r, c, a]
    }()
    var it = $$_33_index.a(ot, 3)
    var at = it[0]
    var st = it[1]
    var ct = it[2]
    var lt = React.useState()
    var ut = $$_33_index.a(lt, 2)
    var dt = ut[0]
    var pt = ut[1]
    React.useEffect(function () {
      pt("rc_select_".concat($$_487.a()))
    }, [])
    var ft = k || dt
    var ht = e$optionLabelProp
    if (undefined === ht) {
      ht = e$options ? "label" : "children"
    }
    var mt = "combobox" !== e$mode && e$labelInValue
    var gt = "tags" === e$mode || "multiple" === e$mode
    var _t = undefined !== e$showSearch ? e$showSearch : gt || "combobox" === e$mode
    var vt = React.useState(false)
    var bt = $$_33_index.a(vt, 2)
    var yt = bt[0]
    var Et = bt[1]
    React.useEffect(function () {
      Et(d())
    }, [])
    var Ot = React.useRef(null)
    React.useImperativeHandle(C, function () {
      var /* [auto-meaningful-name] */tt$current
      var /* [auto-meaningful-name] */_tt$current
      var /* [auto-meaningful-name] */nt$current
      return {
        focus: null === (tt$current = tt.current) || undefined === tt$current ? undefined : tt$current.focus,
        blur: null === (_tt$current = tt.current) || undefined === _tt$current ? undefined : _tt$current.blur,
        scrollTo: null === (nt$current = nt.current) || undefined === nt$current ? undefined : nt$current.scrollTo
      }
    })
    var wt = v(e$defaultValue, {
      value: e$value
    })
    var Ct = $$_33_index.a(wt, 2)
    var Tt = Ct[0]
    var St = Ct[1]
    var It = React.useMemo(function () {
      return $$_487.e(Tt, {
        labelInValue: mt,
        combobox: "combobox" === e$mode
      })
    }, [Tt, mt])
    var At = $$_33_index.a(It, 2)
    var jt = At[0]
    var Nt = At[1]
    var Rt = React.useMemo(function () {
      return new Set(jt)
    }, [jt])
    var kt = React.useState(null)
    var xt = $$_33_index.a(kt, 2)
    var Dt = xt[0]
    var Mt = xt[1]
    var Lt = React.useState("")
    var Pt = $$_33_index.a(Lt, 2)
    var Bt = Pt[0]
    var Ft = Pt[1]
    var Gt = Bt
    if ("combobox" === e$mode && undefined !== Tt) {
      Gt = Tt
    } else {
      if (undefined !== e$searchValue) {
        Gt = e$searchValue
      } else {
        if (e$inputValue) {
          Gt = e$inputValue
        }
      }
    }
    var Ut = React.useMemo(function () {
      var e = e$options
      if (undefined === e) {
        e = e$convertChildrenToData(e$children)
      }
      if ("tags" === e$mode && e$fillOptionsWithMissingValue) {
        e = e$fillOptionsWithMissingValue(e, Tt, ht, e$labelInValue)
      }
      return e || []
    }, [e$options, e$children, e$mode, Tt])
    var Wt = React.useMemo(function () {
      return e$flattenOptions(Ut, e)
    }, [Ut])
    var Ht = function (e) {
      var t = React.useRef(null)
      var n = React.useMemo(function () {
        var t = new Map()
        e.forEach(function (e) {
          var /* [auto-meaningful-name] */_e$value = e.value
          t.set(_e$value, e)
        })
        return t
      }, [e])
      t.current = n
      return function (e) {
        return e.map(function (e) {
          return t.current.get(e)
        }).filter(Boolean)
      }
    }(Wt)
    var Vt = React.useMemo(function () {
      if (!Gt || !_t) {
        return $$_80_index.a(Ut)
      }
      var e = e$filterOptions(Gt, Ut, {
        optionFilterProp: q,
        filterOption: "combobox" === e$mode && undefined === e$filterOption ? function () {
          return true
        } : e$filterOption
      })
      if ("tags" === e$mode && e.every(function (e) {
        return e[q] !== Gt
      })) {
        e.unshift({
          value: Gt,
          label: Gt,
          key: "__RC_SELECT_TAG_PLACEHOLDER__"
        })
      }
      return e$filterSort && Array.isArray(e) ? $$_80_index.a(e).sort(e$filterSort) : e
    }, [Ut, Gt, e$mode, _t, e$filterSort])
    var zt = React.useMemo(function () {
      return e$flattenOptions(Vt, e)
    }, [Vt])
    React.useEffect(function () {
      if (nt.current && nt.current.scrollTo) {
        nt.current.scrollTo(0)
      }
    }, [Gt])
    var Yt = React.useMemo(function () {
      var e = jt.map(function (e) {
        var t = Ht([e])
        var n = e$getLabeledValue(e, {
          options: t,
          prevValueMap: Nt,
          labelInValue: mt,
          optionLabelProp: ht
        })
        return $$_20.a($$_20.a({}, n), {}, {
          disabled: e$isValueDisabled(e, t)
        })
      })
      return e$mode || 1 !== e.length || null !== e[0].value || null !== e[0].label ? e : []
    }, [Tt, Ut, e$mode])
    Yt = function (e) {
      var t = React.useRef(e)
      return React.useMemo(function () {
        var n = new Map()
        t.current.forEach(function (e) {
          var /* [auto-meaningful-name] */_e$value2 = e.value
          var /* [auto-meaningful-name] */e$label = e.label
          if (_e$value2 !== e$label) {
            n.set(_e$value2, e$label)
          }
        })
        var r = e.map(function (e) {
          var t = n.get(e.value)
          return e.isCacheable && t ? $$_20.a($$_20.a({}, e), {}, {
            label: t
          }) : e
        })
        t.current = r
        return r
      }, [e])
    }(Yt)
    var Kt = function (t, n, r) {
      var o = Ht([t])
      var i = e$findValueOption([t], o, {
        props: e
      })[0]
      if (!Ve.skipTriggerSelect) {
        var a = mt ? e$getLabeledValue(t, {
          options: o,
          prevValueMap: Nt,
          labelInValue: mt,
          optionLabelProp: ht
        }) : t
        if (n && e$onSelect) {
          e$onSelect(a, i)
        } else {
          if (!n && e$onDeselect) {
            e$onDeselect(a, i)
          }
        }
      }
      if (Ye) {
        if (n && Ve.onRawSelect) {
          Ve.onRawSelect(t, i, r)
        } else {
          if (!n && Ve.onRawDeselect) {
            Ve.onRawDeselect(t, i, r)
          }
        }
      }
    }
    var qt = React.useState([])
    var Xt = $$_33_index.a(qt, 2)
    var Qt = Xt[0]
    var Zt = Xt[1]
    var Jt = function (t) {
      if (!Ye || !Ve.skipTriggerChange) {
        var n = Ht(t)
        var r = $$_487.f(Array.from(t), {
          labelInValue: mt,
          options: n,
          getLabeledValue: e$getLabeledValue,
          prevValueMap: Nt,
          optionLabelProp: ht
        })
        var o = gt ? r : r[0]
        if (e$onChange && (0 !== jt.length || 0 !== r.length)) {
          var a = e$findValueOption(t, n, {
            prevValueOptions: Qt,
            props: e
          })
          Zt(a.map(function (e, n) {
            var r = $$_20.a({}, e)
            Object.defineProperty(r, "_INTERNAL_OPTION_VALUE_", {
              get: function () {
                return t[n]
              }
            })
            return r
          }))
          e$onChange(o, gt ? a : a[0])
        }
        St(o)
      }
    }
    var $t = function (e, t) {
      var n
      var /* [auto-meaningful-name] */t$selected = t.selected
      var /* [auto-meaningful-name] */t$source = t.source
      if (!e$disabled) {
        if (gt) {
          n = new Set(jt)
          if (t$selected) {
            n.add(e)
          } else {
            n.delete(e)
          }
        } else {
          (n = new Set()).add(e)
        }
        if (gt || !gt && Array.from(jt)[0] !== e) {
          Jt(Array.from(n))
        }
        Kt(e, !gt || t$selected, t$source)
        if ("combobox" === e$mode) {
          Ft(String(e))
          Mt("")
        } else {
          if (!(gt && !Q)) {
            Ft("")
            Mt("")
          }
        }
      }
    }
    var en = "combobox" === e$mode && "function" === typeof e$getInputElement && e$getInputElement() || null
    var tn = "function" === typeof e$getRawInputElement && e$getRawInputElement()
    var nn = v(undefined, {
      defaultValue: e$defaultOpen,
      value: e$open
    })
    var rn = $$_33_index.a(nn, 2)
    var on = rn[0]
    var an = rn[1]
    var sn = on
    var cn = !ce && !Vt.length
    if (e$disabled || cn && sn && "combobox" === e$mode) {
      sn = false
    }
    var ln
    var un = !cn && sn
    var dn = function (e) {
      var t = undefined !== e ? e : !sn
      if (!(on === t || e$disabled)) {
        an(t)
        if (e$onDropdownVisibleChange) {
          e$onDropdownVisibleChange(t)
        }
      }
    }
    if (tn) {
      ln = function (e) {
        dn(e)
      }
    }
    (function (e, t, n) {
      var r = React.useRef(null)
      r.current = {
        open: t,
        triggerOpen: n
      }
      React.useEffect(function () {
        function t(t) {
          var /* [auto-meaningful-name] */t$target = t.target
          if (t$target.shadowRoot && t.composed) {
            t$target = t.composedPath()[0] || t$target
          }
          if (r.current.open && e().filter(function (e) {
            return e
          }).every(function (e) {
            return !e.contains(t$target) && e !== t$target
          })) {
            r.current.triggerOpen(false)
          }
        }
        window.addEventListener("mousedown", t)
        return function () {
          return window.removeEventListener("mousedown", t)
        }
      }, [])
    })(function () {
      var /* [auto-meaningful-name] */et$current
      return [$e.current, null === (et$current = et.current) || undefined === et$current ? undefined : et$current.getPopupElement()]
    }, un, dn)
    var pn = function (e, t, n) {
      var r = true
      var o = e
      Mt(null)
      var i = n ? null : $$_519_index.g(e, e$tokenSeparators)
      var s = i
      if ("combobox" === e$mode) {
        if (t) {
          Jt([o])
        }
      } else if (i) {
        o = ""
        if ("tags" !== e$mode) {
          s = i.map(function (e) {
            var t = Wt.find(function (t) {
              return t.data[ht] === e
            })
            return t ? t.data.value : null
          }).filter(function (e) {
            return null !== e
          })
        }
        var c = Array.from(new Set([].concat($$_80_index.a(jt), $$_80_index.a(s))))
        Jt(c)
        c.forEach(function (e) {
          Kt(e, true, "input")
        })
        dn(false)
        r = false
      }
      Ft(o)
      if (e$onSearch && Gt !== o) {
        e$onSearch(o)
      }
      return r
    }
    React.useEffect(function () {
      if (on && e$disabled) {
        an(false)
      }
      if (e$disabled) {
        st(false)
      }
    }, [e$disabled])
    React.useEffect(function () {
      if (!(sn || gt || "combobox" === e$mode)) {
        pn("", false, false)
      }
    }, [sn])
    var fn = N()
    var hn = $$_33_index.a(fn, 2)
    var mn = hn[0]
    var gn = hn[1]
    var _n = React.useRef(false)
    var vn = []
    React.useEffect(function () {
      return function () {
        vn.forEach(function (e) {
          return clearTimeout(e)
        })
        vn.splice(0, vn.length)
      }
    }, [])
    var bn = React.useState(0)
    var yn = $$_33_index.a(bn, 2)
    var En = yn[0]
    var On = yn[1]
    var wn = undefined !== e$defaultActiveFirstOption ? e$defaultActiveFirstOption : "combobox" !== e$mode
    var Cn = React.useState(null)
    var Tn = $$_33_index.a(Cn, 2)
    var Sn = Tn[0]
    var In = Tn[1]
    var An = React.useState({})
    var jn = $$_33_index.a(An, 2)[1]
    S(function () {
      if (un) {
        var /* [auto-meaningful-name] */$e$current
        var t = Math.ceil(null === ($e$current = $e.current) || undefined === $e$current ? undefined : $e$current.offsetWidth)
        if (!(Sn === t || Number.isNaN(t))) {
          In(t)
        }
      }
    }, [un])
    var Nn
    var Rn = React.createElement(e$components$optionList, {
      ref: nt,
      prefixCls: j,
      id: ft,
      open: sn,
      childrenAsData: !e$options,
      options: Vt,
      fieldNames: e$fieldNames,
      flattenOptions: zt,
      multiple: gt,
      values: Rt,
      height: ge,
      itemHeight: ve,
      onSelect: function (e, t) {
        $t(e, $$_20.a($$_20.a({}, t), {}, {
          source: "option"
        }))
      },
      onToggleOpen: dn,
      onActiveValue: function (e, t) {
        var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}
        var /* [auto-meaningful-name] */n$source = n.source
        var o = undefined === n$source ? "keyboard" : n$source
        On(t)
        if (e$backfill && "combobox" === e$mode && null !== e && "keyboard" === o) {
          Mt(String(e))
        }
      },
      defaultActiveFirstOption: wn,
      notFoundContent: ce,
      onScroll: e$onPopupScroll,
      searchValue: Gt,
      menuItemSelectedIcon: e$menuItemSelectedIcon,
      virtual: false !== e$virtual && false !== e$dropdownMatchSelectWidth,
      onMouseEnter: function () {
        jn({})
      },
      direction: e$direction
    })
    if (!e$disabled && e$allowClear && (jt.length || Gt)) {
      Nn = React.createElement($$_733.a, {
        className: "".concat(j, "-clear"),
        onMouseDown: function () {
          if (Ye && Ve.onClear) {
            Ve.onClear()
          }
          if (e$onClear) {
            e$onClear()
          }
          Jt([])
          pn("", false, false)
        },
        customizeIcon: e$clearIcon
      }, "×")
    }
    var kn
    var xn = undefined !== e$showArrow ? e$showArrow : e$loading || !gt && "combobox" !== e$mode
    if (xn) {
      kn = React.createElement($$_733.a, {
        className: _()("".concat(j, "-arrow"), $$_29.a({}, "".concat(j, "-arrow-loading"), e$loading)),
        customizeIcon: e$inputIcon,
        customizeIconProps: {
          loading: e$loading,
          searchValue: Gt,
          open: sn,
          focused: at,
          showSearch: _t
        }
      })
    }
    var Dn = _()(j, e$className, (I = {}, $$_29.a(I, "".concat(j, "-focused"), at), $$_29.a(I, "".concat(j, "-multiple"), gt), $$_29.a(I, "".concat(j, "-single"), !gt), $$_29.a(I, "".concat(j, "-allow-clear"), e$allowClear), $$_29.a(I, "".concat(j, "-show-arrow"), xn), $$_29.a(I, "".concat(j, "-disabled"), e$disabled), $$_29.a(I, "".concat(j, "-loading"), e$loading), $$_29.a(I, "".concat(j, "-open"), sn), $$_29.a(I, "".concat(j, "-customize-input"), en), $$_29.a(I, "".concat(j, "-show-search"), _t), I))
    var Mn = React.createElement(Ke, {
      ref: et,
      disabled: e$disabled,
      prefixCls: j,
      visible: un,
      popupElement: Rn,
      containerWidth: Sn,
      animation: e$animation,
      transitionName: e$transitionName,
      dropdownStyle: e$dropdownStyle,
      dropdownClassName: e$dropdownClassName,
      direction: e$direction,
      dropdownMatchSelectWidth: e$dropdownMatchSelectWidth,
      dropdownRender: e$dropdownRender,
      dropdownAlign: e$dropdownAlign,
      placement: e$placement,
      getPopupContainer: e$getPopupContainer,
      empty: !Ut.length,
      getTriggerDOMNode: function () {
        return Ot.current
      },
      onPopupVisibleChange: ln
    }, tn ? React.cloneElement(tn, {
      ref: m(Ot, tn.props.ref)
    }) : React.createElement(x, $$_19.a({}, e, {
      domRef: Ot,
      prefixCls: j,
      inputElement: en,
      ref: tt,
      id: ft,
      showSearch: _t,
      mode: e$mode,
      accessibilityIndex: En,
      multiple: gt,
      tagRender: e$tagRender,
      values: Yt,
      open: sn,
      onToggleOpen: dn,
      searchValue: Gt,
      activeValue: Dt,
      onSearch: pn,
      onSearchSubmit: function (e) {
        if (e && e.trim()) {
          var t = Array.from(new Set([].concat($$_80_index.a(jt), [e])))
          Jt(t)
          t.forEach(function (e) {
            Kt(e, true, "input")
          })
          Ft("")
        }
      },
      onSelect: function (e, t) {
        $t(e, $$_20.a($$_20.a({}, t), {}, {
          source: "selection"
        }))
      },
      tokenWithEnter: rt
    })))
    return tn ? Mn : React.createElement("div", $$_19.a({
      className: Dn
    }, Je, {
      ref: $e,
      onMouseDown: function (e) {
        var /* [auto-meaningful-name] */et$current
        var /* [auto-meaningful-name] */e$target = e.target
        var r = null === (et$current = et.current) || undefined === et$current ? undefined : et$current.getPopupElement()
        if (r && r.contains(e$target)) {
          var o = setTimeout(function () {
            var /* [auto-meaningful-name] */tt$current
            var t = vn.indexOf(o)
            if (!(-1 !== t && vn.splice(t, 1), ct(), yt || r.contains(document.activeElement))) {
              if (!(null === (tt$current = tt.current) || undefined === tt$current)) {
                tt$current.focus()
              }
            }
          })
          vn.push(o)
        }
        if (e$onMouseDown) {
          for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length > 1 ? arguments$length - 1 : 0), s = 1; s < arguments$length; s++) {
            a[s - 1] = arguments[s]
          }
          e$onMouseDown.apply(undefined, [e].concat(a))
        }
      },
      onKeyDown: function (e) {
        var /* [auto-meaningful-name] */nt$current
        var n = mn()
        var /* [auto-meaningful-name] */e$which = e.which
        if (e$which === $$_330.a.ENTER) {
          if ("combobox" !== e$mode) {
            e.preventDefault()
          }
          if (!sn) {
            dn(true)
          }
        }
        gn(!!Gt)
        if (e$which === $$_330.a.BACKSPACE && !n && gt && !Gt && jt.length) {
          var o = $$_487.c(Yt, jt)
          if (null !== o.removedValue) {
            Jt(o.values)
            Kt(o.removedValue, false, "input")
          }
        }
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length > 1 ? arguments$length - 1 : 0), s = 1; s < arguments$length; s++) {
          a[s - 1] = arguments[s]
        }
        if (sn && nt.current) {
          (nt$current = nt.current).onKeyDown.apply(nt$current, [e].concat(a))
        }
        if (e$onKeyDown) {
          e$onKeyDown.apply(undefined, [e].concat(a))
        }
      },
      onKeyUp: function (e) {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
          n[r - 1] = arguments[r]
        }
        var /* [auto-meaningful-name] */nt$current
        if (sn && nt.current) {
          (nt$current = nt.current).onKeyUp.apply(nt$current, [e].concat(n))
        }
        if (e$onKeyUp) {
          e$onKeyUp.apply(undefined, [e].concat(n))
        }
      },
      onFocus: function () {
        st(true)
        if (!e$disabled) {
          if (e$onFocus && !_n.current) {
            e$onFocus.apply(undefined, arguments)
          }
          if (Ae.includes("focus")) {
            dn(true)
          }
        }
        _n.current = true
      },
      onBlur: function () {
        st(false, function () {
          _n.current = false
          dn(false)
        })
        if (!e$disabled) {
          if (Gt) {
            if ("tags" === e$mode) {
              pn("", false, false)
              Jt(Array.from(new Set([].concat($$_80_index.a(jt), [Gt]))))
            } else {
              if ("multiple" === e$mode) {
                Ft("")
              }
            }
          }
          if (e$onBlur) {
            e$onBlur.apply(undefined, arguments)
          }
        }
      }
    }), at && !sn && React.createElement("span", {
      style: {
        width: 0,
        height: 0,
        display: "flex",
        overflow: "hidden",
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(jt.join(", "))), Mn, kn, Nn)
  }
  return React.forwardRef(C)
}
export default Je
