/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：286
 */

"use strict"

export { g as a }
import r = require("../95");
import o = require("../96");
import i = require("../103");
import a = require("../120");
import s = require("../322");
import c = require("../273");
import l = require("../29");
import u = require("../232/index");
var d = function __importDefault(module) {
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
}(u)
import React = require("react");
var f = function __importDefault(module) {
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
require("./1513")
var h = {
  "./style_module.css": {
    "btn-wrap": "CUI-button-btn-wrap",
    "btn-tooltip": "CUI-button-btn-tooltip",
    btn: "CUI-button-btn",
    "size-lg": "CUI-button-size-lg",
    "size-md": "CUI-button-size-md",
    "size-sm": "CUI-button-size-sm",
    "size-esm": "CUI-button-size-esm",
    "size-custom": "CUI-button-size-custom",
    primary: "CUI-button-primary",
    disabled: "CUI-button-disabled",
    secondary: "CUI-button-secondary",
    danger: "CUI-button-danger",
    transparent: "CUI-button-transparent",
    "transparent-fb": "CUI-button-transparent-fb"
  }
}
function m(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return false
    }
    if (Reflect.construct.sham) {
      return false
    }
    if ("function" === typeof Proxy) {
      return true
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
      return true
    } catch (e) {
      return false
    }
  }()
  return function () {
    var n
    var r = c.a(e)
    if (t) {
      var c$aThis$constructor = c.a(this).constructor
      n = Reflect.construct(r, arguments, c$aThis$constructor)
    } else {
      n = r.apply(this, arguments)
    }
    return s.a(this, n)
  }
}
var g = function (e) {
  a.a(n, e)
  var t = m(n)
  function n() {
    var e
    r.a(this, n)
    for (var arguments$length = arguments.length, a = new Array(arguments$length), s = 0; s < arguments$length; s++) {
      a[s] = arguments[s]
    }
    e = t.call.apply(t, [this].concat(a))
    l.a(i.a(e), "setClass", function () {
      var e$props = e.props
      var e$props$type = e$props.type
      var r = undefined === e$props$type ? "transparent" : e$props$type
      var e$props$size = e$props.size
      var i = undefined === e$props$size ? "md" : e$props$size
      return "".concat(r, " size-").concat(i)
    })
    l.a(i.a(e), "preventMouseEventWhenDisable", function (t) {
      return function (n) {
        if (!e.props.disable) {
          var e$props = e.props
          var e$props$onClick = e$props.onClick
          var e$props$onContextMenu = e$props.onContextMenu
          var e$props$onMouseEnter = e$props.onMouseEnter
          var e$props$onMouseLeave = e$props.onMouseLeave
          if ("click" === t && e$props$onClick) {
            e$props$onClick(n)
          } else {
            if ("context" === t && e$props$onContextMenu) {
              e$props$onContextMenu(n)
            } else {
              if ("enter" === t && e$props$onMouseEnter) {
                e$props$onMouseEnter(n)
              } else {
                if ("leave" === t && e$props$onMouseLeave) {
                  e$props$onMouseLeave(n)
                }
              }
            }
          }
        }
      }
    })
    l.a(i.a(e), "inserSpaceIfTwoText", function () {
      var e$props$children = e.props.children
      return "string" === typeof e$props$children && 2 === e$props$children.length && /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(e$props$children) ? e$props$children.split("").join(" ") : e$props$children
    })
    return e
  }
  o.a(n, [{
    key: "render",
    value: function () {
      var this$props = this.props
      var this$props$bgColor = this$props.bgColor
      var this$props$tooltip = this$props.tooltip
      var this$props$width = this$props.width
      var this$props$height = this$props.height
      var this$props$dataReport = this$props.dataReport
      var this$props$margin = this$props.margin
      var this$props$isSelected = this$props.isSelected
      var this$props$borderRadius = this$props.borderRadius
      var this$props$disable = this$props.disable
      var this$props$className = this$props.className
      var this$props$padding = this$props.padding
      var this$props$wrapClassName = this$props.wrapClassName
      return f.a.createElement("div", {
        className: (this$props$wrapClassName ? this$props$wrapClassName + " " : "") + "CUI-button-btn-wrap",
        style: {
          width: this$props$width,
          height: this$props$height,
          margin: this$props$margin,
          borderRadius: this$props$borderRadius
        }
      }, f.a.createElement("div", {
        id: this.props.id,
        style: {
          borderRadius: this$props$borderRadius || "",
          backgroundColor: this$props$bgColor || undefined,
          padding: this$props$padding
        },
        onClick: this.preventMouseEventWhenDisable("click"),
        onMouseEnter: this.preventMouseEventWhenDisable("enter"),
        onMouseLeave: this.preventMouseEventWhenDisable("leave"),
        onContextMenu: this.preventMouseEventWhenDisable("context"),
        "data-report-click": this$props$dataReport,
        className: ("".concat(this$props$isSelected ? "selected" : "", " ").concat(null !== this$props$className && undefined !== this$props$className ? this$props$className : "") ? "".concat(this$props$isSelected ? "selected" : "", " ").concat(null !== this$props$className && undefined !== this$props$className ? this$props$className : "") + " " : "") + d()("btn ".concat(this$props$disable ? "disabled" : "", " ").concat(this.setClass()), h, {
          autoResolveMultipleImports: true,
          handleMissingStyleName: "throw"
        })
      }, this.inserSpaceIfTwoText()), null != this$props$tooltip && f.a.createElement("span", {
        className: "CUI-button-btn-tooltip"
      }, this$props$tooltip))
    }
  }])
  return n
}(f.a.Component)
l.a(g, "defaultProps", {
  type: "transparent",
  size: "md"
})
export default g
