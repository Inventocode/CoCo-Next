/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：315__part-3
 */

"use strict"

import { "315__part-0__d" as d, "315__part-0__p" as p } from "./index__part-0"
import { "315__part-2__I" as I } from "./index__part-2"
import * as /* [auto-meaningful-name] */$_2625 from "./2625"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_691_153 from "../../../548/1183/691/153"
import * as /* [auto-meaningful-name] */$$_365_1509 from "../365/1509"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_701_index from "../../../548/1183/701/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_100 from "../../../548/1183/100"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_2632 from "./2632"
function R(e, t) {
  return Array.isArray(t) ? t.every(function (t) {
    return -1 !== e.indexOf(t)
  }) : -1 !== e.indexOf(t)
}
var P = 310
var N = 325
var M = 305
var j = $$_$$_$$_548_1183_701_index.a(function (e) {
  return {
    staticWrapperRoot: {
      overflow: "hidden",
      minWidth: P,
      display: "flex",
      flexDirection: "column",
      backgroundColor: e.palette.background.paper
    }
  }
}, {
  name: "MuiPickersStaticWrapper"
})
var L = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var n = j()
  return React.createElement("div", {
    className: n.staticWrapperRoot,
    children: e$children
  })
}
var U = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$onAccept = e.onAccept
  var /* [auto-meaningful-name] */e$onDismiss = e.onDismiss
  var /* [auto-meaningful-name] */e$onClear = e.onClear
  var /* [auto-meaningful-name] */e$onSetToday = e.onSetToday
  var /* [auto-meaningful-name] */e$okLabel = e.okLabel
  var /* [auto-meaningful-name] */e$cancelLabel = e.cancelLabel
  var /* [auto-meaningful-name] */e$clearLabel = e.clearLabel
  var /* [auto-meaningful-name] */e$todayLabel = e.todayLabel
  var /* [auto-meaningful-name] */e$clearable = e.clearable
  var /* [auto-meaningful-name] */e$showTodayButton = e.showTodayButton
  e.showTabs
  var /* [auto-meaningful-name] */e$wider = e.wider
  var b = $$_$$_$$_54.a(e, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"])
  return React.createElement(I, $$_$$_$$_19.a({
    role: "dialog",
    onClose: e$onDismiss,
    classes: {
      paper: $$_$$_$$_548_1183_100.a(e$classes.dialogRoot, e$wider && e$classes.dialogRootWider)
    }
  }, b), React.createElement(p, {
    children: e$children,
    className: e$classes.dialog
  }), React.createElement(d, {
    classes: {
      root: $$_$$_$$_548_1183_100.a((e$clearable || e$showTodayButton) && e$classes.withAdditionalAction)
    }
  }, e$clearable && React.createElement($_2625.a, {
    color: "primary",
    onClick: e$onClear
  }, e$clearLabel), e$showTodayButton && React.createElement($_2625.a, {
    color: "primary",
    onClick: e$onSetToday
  }, e$todayLabel), e$cancelLabel && React.createElement($_2625.a, {
    color: "primary",
    onClick: e$onDismiss
  }, e$cancelLabel), e$okLabel && React.createElement($_2625.a, {
    color: "primary",
    onClick: e$onAccept
  }, e$okLabel)))
}
U.displayName = "ModalDialog"
var H = $$_365_1509.a({
  dialogRoot: {
    minWidth: P
  },
  dialogRootWider: {
    minWidth: N
  },
  dialog: {
    "&:first-child": {
      padding: 0
    }
  },
  withAdditionalAction: {
    justifyContent: "flex-start",
    "& > *:first-child": {
      marginRight: "auto"
    }
  }
})
var V = $$_$$_$$_548_1183_691_153.a(H, {
  name: "MuiPickersModal"
})(U)
var G = "undefined" === typeof window ? React.useEffect : React.useLayoutEffect
function z(e, t) {
  var n = t[e.key]
  if (n) {
    n()
    e.preventDefault()
  }
}
function Q(e, t) {
  var n = React.useRef(t)
  n.current = t
  G(function () {
    if (e) {
      var t = function (e) {
        z(e, n.current)
      }
      window.addEventListener("keydown", t)
      return function () {
        window.removeEventListener("keydown", t)
      }
    }
  }, [e])
}
var W = function (e) {
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$okLabel = e.okLabel
  var /* [auto-meaningful-name] */e$cancelLabel = e.cancelLabel
  var /* [auto-meaningful-name] */e$clearLabel = e.clearLabel
  var /* [auto-meaningful-name] */e$todayLabel = e.todayLabel
  var /* [auto-meaningful-name] */e$showTodayButton = e.showTodayButton
  var /* [auto-meaningful-name] */e$clearable = e.clearable
  var /* [auto-meaningful-name] */e$DialogProps = e.DialogProps
  var /* [auto-meaningful-name] */e$showTabs = e.showTabs
  var /* [auto-meaningful-name] */e$wider = e.wider
  var /* [auto-meaningful-name] */e$InputComponent = e.InputComponent
  var /* [auto-meaningful-name] */e$DateInputProps = e.DateInputProps
  var /* [auto-meaningful-name] */e$onClear = e.onClear
  var /* [auto-meaningful-name] */e$onAccept = e.onAccept
  var /* [auto-meaningful-name] */e$onDismiss = e.onDismiss
  var /* [auto-meaningful-name] */e$onSetToday = e.onSetToday
  var b = $$_$$_$$_54.a(e, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"])
  Q(e$open, {
    Enter: e$onAccept
  })
  return React.createElement(React.Fragment, null, React.createElement(e$InputComponent, $$_$$_$$_19.a({}, b, e$DateInputProps)), React.createElement(V, $$_$$_$$_19.a({
    wider: e$wider,
    showTabs: e$showTabs,
    open: e$open,
    onClear: e$onClear,
    onAccept: e$onAccept,
    onDismiss: e$onDismiss,
    onSetToday: e$onSetToday,
    clearLabel: e$clearLabel,
    todayLabel: e$todayLabel,
    okLabel: e$okLabel,
    cancelLabel: e$cancelLabel,
    clearable: e$clearable,
    showTodayButton: e$showTodayButton,
    children: e$children
  }, e$DialogProps)))
}
W.defaultProps = {
  okLabel: "OK",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  todayLabel: "Today",
  clearable: false,
  showTodayButton: false
}
var K = function (e) {
  var /* [auto-meaningful-name] */e$open = e.open
  e.wider
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$PopoverProps = e.PopoverProps
  e.onClear
  var /* [auto-meaningful-name] */e$onDismiss = e.onDismiss
  e.onSetToday
  var /* [auto-meaningful-name] */e$onAccept = e.onAccept
  e.showTabs
  var /* [auto-meaningful-name] */e$DateInputProps = e.DateInputProps
  var /* [auto-meaningful-name] */e$InputComponent = e.InputComponent
  var f = $$_$$_$$_54.a(e, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"])
  var d = React.useRef()
  Q(e$open, {
    Enter: e$onAccept
  })
  return React.createElement(React.Fragment, null, React.createElement(e$InputComponent, $$_$$_$$_19.a({}, f, e$DateInputProps, {
    inputRef: d
  })), React.createElement($_2632.a, $$_$$_$$_19.a({
    open: e$open,
    onClose: e$onDismiss,
    anchorEl: d.current,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    children: e$children
  }, e$PopoverProps)))
}
var X = React.createContext(null)
var Y = function (e) {
  var /* [auto-meaningful-name] */e$variant = e.variant
  var n = $$_$$_$$_54.a(e, ["variant"])
  var i = function (e) {
    switch (e) {
      case "inline":
        return K
      case "static":
        return L
      default:
        return W
    }
  }(e$variant)
  return React.createElement(X.Provider, {
    value: e$variant || "dialog"
  }, React.createElement(i, n))
}
export { R as "315__part-3__R" }
export { P as "315__part-3__P" }
export { N as "315__part-3__N" }
export { M as "315__part-3__M" }
export { G as "315__part-3__G" }
export { z as "315__part-3__z" }
export { X as "315__part-3__X" }
export { Y as "315__part-3__Y" }
