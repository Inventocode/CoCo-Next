/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：316__part-2
 */

"use strict"

import { O, S } from "./index__part-1"
import * as /* [auto-meaningful-name] */Module_696 from /* 696 */"./696"
import * as /* [auto-meaningful-name] */Module_2682 from /* 2682 */"./2682/index"
import * as /* [auto-meaningful-name] */Module_233 from /* 233 */"../../../551/1211/699/233"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../../35"
import * as /* [auto-meaningful-name] */Module_154 from /* 154 */"../../../551/1211/699/154/index"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../../../54"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../19"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"../../../551/1211/98"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_2676 from /* 2676 */"./2676"
var B = {
  enter: Module_696.b.enteringScreen,
  exit: Module_696.b.leavingScreen
}
var D = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$BackdropProps = e.BackdropProps
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$disableBackdropClick = e.disableBackdropClick
  var f = undefined !== e$disableBackdropClick && e$disableBackdropClick
  var /* [auto-meaningful-name] */e$disableEscapeKeyDown = e.disableEscapeKeyDown
  var h = undefined !== e$disableEscapeKeyDown && e$disableEscapeKeyDown
  var /* [auto-meaningful-name] */e$fullScreen = e.fullScreen
  var _ = undefined !== e$fullScreen && e$fullScreen
  var /* [auto-meaningful-name] */e$fullWidth = e.fullWidth
  var m = undefined !== e$fullWidth && e$fullWidth
  var /* [auto-meaningful-name] */e$maxWidth = e.maxWidth
  var b = undefined === e$maxWidth ? "sm" : e$maxWidth
  var /* [auto-meaningful-name] */e$onBackdropClick = e.onBackdropClick
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onEnter = e.onEnter
  var /* [auto-meaningful-name] */e$onEntered = e.onEntered
  var /* [auto-meaningful-name] */e$onEntering = e.onEntering
  var /* [auto-meaningful-name] */e$onEscapeKeyDown = e.onEscapeKeyDown
  var /* [auto-meaningful-name] */e$onExit = e.onExit
  var /* [auto-meaningful-name] */e$onExited = e.onExited
  var /* [auto-meaningful-name] */e$onExiting = e.onExiting
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$PaperComponent = e.PaperComponent
  var M = undefined === e$PaperComponent ? Module_2676.a : e$PaperComponent
  var /* [auto-meaningful-name] */e$PaperProps = e.PaperProps
  var j = undefined === e$PaperProps ? {} : e$PaperProps
  var /* [auto-meaningful-name] */e$scroll = e.scroll
  var H = undefined === e$scroll ? "paper" : e$scroll
  var /* [auto-meaningful-name] */e$TransitionComponent = e.TransitionComponent
  var G = undefined === e$TransitionComponent ? O : e$TransitionComponent
  var /* [auto-meaningful-name] */e$transitionDuration = e.transitionDuration
  var Q = undefined === e$transitionDuration ? B : e$transitionDuration
  var /* [auto-meaningful-name] */e$TransitionProps = e.TransitionProps
  var K = e["aria-describedby"]
  var X = e["aria-labelledby"]
  var Y = Module_54.a(e, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"])
  var q = React.useRef()
  return React.createElement(Module_2682.a, Module_19.a({
    className: Module_98.a(e$classes.root, e$className),
    BackdropComponent: S,
    BackdropProps: Module_19.a({
      transitionDuration: Q
    }, e$BackdropProps),
    closeAfterTransition: true
  }, f ? {
    disableBackdropClick: f
  } : {}, {
    disableEscapeKeyDown: h,
    onEscapeKeyDown: e$onEscapeKeyDown,
    onClose: e$onClose,
    open: e$open,
    ref: t
  }, Y), React.createElement(G, Module_19.a({
    appear: true,
    in: e$open,
    timeout: Q,
    onEnter: e$onEnter,
    onEntering: e$onEntering,
    onEntered: e$onEntered,
    onExit: e$onExit,
    onExiting: e$onExiting,
    onExited: e$onExited,
    role: "none presentation"
  }, e$TransitionProps), React.createElement("div", {
    className: Module_98.a(e$classes.container, e$classes["scroll".concat(Module_233.a(H))]),
    onMouseUp: function (e) {
      if (e.target === e.currentTarget && e.target === q.current) {
        q.current = null
        if (e$onBackdropClick) {
          e$onBackdropClick(e)
        }
        if (!f && e$onClose) {
          e$onClose(e, "backdropClick")
        }
      }
    },
    onMouseDown: function (e) {
      q.current = e.target
    }
  }, React.createElement(M, Module_19.a({
    elevation: 24,
    role: "dialog",
    "aria-describedby": K,
    "aria-labelledby": X
  }, j, {
    className: Module_98.a(e$classes.paper, e$classes["paperScroll".concat(Module_233.a(H))], e$classes["paperWidth".concat(Module_233.a(String(b)))], j.className, _ && e$classes.paperFullScreen, m && e$classes.paperFullWidth)
  }), e$children))))
})
var I = Module_154.a(function (e) {
  return {
    root: {
      "@media print": {
        position: "absolute !important"
      }
    },
    scrollPaper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    scrollBody: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&:after": {
        content: "\"\"",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    },
    container: {
      height: "100%",
      "@media print": {
        height: "auto"
      },
      outline: 0
    },
    paper: {
      margin: 32,
      position: "relative",
      overflowY: "auto",
      "@media print": {
        overflowY: "visible",
        boxShadow: "none"
      }
    },
    paperScrollPaper: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    },
    paperScrollBody: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "left"
    },
    paperWidthFalse: {
      maxWidth: "calc(100% - 64px)"
    },
    paperWidthXs: {
      maxWidth: Math.max(e.breakpoints.values.xs, 444),
      "&$paperScrollBody": Module_35.a({}, e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthSm: {
      maxWidth: e.breakpoints.values.sm,
      "&$paperScrollBody": Module_35.a({}, e.breakpoints.down(e.breakpoints.values.sm + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthMd: {
      maxWidth: e.breakpoints.values.md,
      "&$paperScrollBody": Module_35.a({}, e.breakpoints.down(e.breakpoints.values.md + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthLg: {
      maxWidth: e.breakpoints.values.lg,
      "&$paperScrollBody": Module_35.a({}, e.breakpoints.down(e.breakpoints.values.lg + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthXl: {
      maxWidth: e.breakpoints.values.xl,
      "&$paperScrollBody": Module_35.a({}, e.breakpoints.down(e.breakpoints.values.xl + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperFullWidth: {
      width: "calc(100% - 64px)"
    },
    paperFullScreen: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      "&$paperScrollBody": {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }
}, {
  name: "MuiDialog"
})(D)
export { I }
