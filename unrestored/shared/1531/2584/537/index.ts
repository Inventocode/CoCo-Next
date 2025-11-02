/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：537
 */

"use strict"

import r = require("../6");
import o = require("../10/index");
import i = require("../8");
var a = function __importDefault(module) {
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
}(i)
import React = require("react");
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
}(React)
import l = require("../75/index");
var u = function __importDefault(module) {
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
}(l)
require("./856")
import d = require("../94/index");
var _a
_a = React.memo(function (e) {
  var e$className = e.className
  var e$style = e.style
  var e$visible = e.visible
  var e$maskClosable = e.maskClosable
  var p = undefined !== e$maskClosable && e$maskClosable
  var e$mask = e.mask
  var h = undefined === e$mask || e$mask
  var e$onClose = e.onClose
  var e$children = e.children
  var e$showCloseButton = e.showCloseButton
  var v = undefined === e$showCloseButton || e$showCloseButton
  var e$withPortal = e.withPortal
  var y = undefined !== e$withPortal && e$withPortal
  var e$title = e.title
  var e$footer = e.footer
  var w = React.useRef(null)
  var C = React.useRef(null)
  var T = React.useState(false)
  var S = o.a(T, 2)
  S[0]
  var I = S[1]
  var A = document.getElementById("_cocoDialogContainer")
  if (!A) {
    (A = document.createElement("div")).id = "_cocoDialogContainer"
    document.body.appendChild(A)
  }
  var j = React.useCallback(function () {
    if (e$onClose) {
      e$onClose()
    }
  }, [e$onClose])
  var N = React.useCallback(function () {
    if (p) {
      j()
    }
  }, [j, p])
  React.useEffect(function () {
    var w$current = w.current
    var t = function (e) {
      var /* [auto-meaningful-name] */c$current
      if (!(null === (c$current = C.current) || undefined === c$current ? undefined : c$current.contains(e.target))) {
        e.stopPropagation()
      }
    }
    if (w$current) {
      w$current.addEventListener("keydown", t)
    }
    return function () {
      if (!(null === w$current || undefined === w$current)) {
        w$current.removeEventListener("keydown", t)
      }
    }
  }, [])
  React.useEffect(function () {
    if (e$visible) {
      I(true)
    }
  }, [e$visible])
  var R = c.a.createElement("div", {
    "data-html2canvas-ignore": "true",
    ref: w,
    tabIndex: -1,
    className: a()("coco-dialog", e$className),
    style: r.a({
      display: e$visible ? "block" : "none"
    }, e$style)
  }, h && c.a.createElement("div", {
    className: e$visible ? "coco-dialog-mask" : a()("coco-dialog-mask", "hidden"),
    onClick: N
  }), c.a.createElement("div", {
    className: "coco-dialog-scroll"
  }, c.a.createElement("div", {
    className: e$visible ? a()("coco-dialog-wrapper", "show") : a()("coco-dialog-wrapper", "hidden"),
    onAnimationEnd: function () {
      if (!e$visible) {
        I(false)
      }
    }
  }, c.a.createElement("div", {
    className: e$title && v ? "coco-dialog-title" : ""
  }, e$title && c.a.createElement("div", null, e$title), v && c.a.createElement("span", {
    className: "coco-dialog-close",
    onClick: j
  }, c.a.createElement(d.a, {
    type: "icon-close"
  }))), c.a.createElement("div", {
    className: "coco-dialog-content",
    ref: C
  }, e$children), e$footer && c.a.createElement("div", {
    className: "coco-dialog-footer"
  }, e$footer))))
  return y ? u.a.createPortal(R, A) : R
})
export { _a as a }
export default _a
