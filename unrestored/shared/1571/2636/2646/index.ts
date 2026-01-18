/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2646
 */

"use strict"

export { g as a }
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_142 from "../142"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_388 from "../388"
import * as /* [auto-meaningful-name] */$$_362 from "../362"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$_1219_index from "./1219/index"
import /* [auto-meaningful-name] */$_1219_index1 from "./1219/index"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "./1554"
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
    var r = $$_362.a(e)
    if (t) {
      var /* [auto-meaningful-name] */$$_362$aThis$constructor = $$_362.a(this).constructor
      n = Reflect.construct(r, arguments, $$_362$aThis$constructor)
    } else {
      n = r.apply(this, arguments)
    }
    return $$_388.a(this, n)
  }
}
var g = function (e) {
  $$_120.a(n, e)
  var t = m(n)
  function n() {
    var e
    $$_103.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length), s = 0; s < arguments$length; s++) {
      a[s] = arguments[s]
    }
    e = t.call.apply(t, [this].concat(a))
    $$_35.a($$_142.a(e), "setClass", function () {
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$type = e$props.type
      var r = undefined === e$props$type ? "transparent" : e$props$type
      var /* [auto-meaningful-name] */e$props$size = e$props.size
      var i = undefined === e$props$size ? "md" : e$props$size
      return "".concat(r, " size-").concat(i)
    })
    $$_35.a($$_142.a(e), "preventMouseEventWhenDisable", function (t) {
      return function (n) {
        if (!e.props.disable) {
          var /* [auto-meaningful-name] */e$props = e.props
          var /* [auto-meaningful-name] */e$props$onClick = e$props.onClick
          var /* [auto-meaningful-name] */e$props$onContextMenu = e$props.onContextMenu
          var /* [auto-meaningful-name] */e$props$onMouseEnter = e$props.onMouseEnter
          var /* [auto-meaningful-name] */e$props$onMouseLeave = e$props.onMouseLeave
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
    $$_35.a($$_142.a(e), "inserSpaceIfTwoText", function () {
      var /* [auto-meaningful-name] */e$props$children = e.props.children
      return "string" === typeof e$props$children && 2 === e$props$children.length && /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(e$props$children) ? e$props$children.split("").join(" ") : e$props$children
    })
    return e
  }
  $$_106.a(n, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$bgColor = this$props.bgColor
        var /* [auto-meaningful-name] */this$props$tooltip = this$props.tooltip
        var /* [auto-meaningful-name] */this$props$width = this$props.width
        var /* [auto-meaningful-name] */this$props$height = this$props.height
        var /* [auto-meaningful-name] */this$props$dataReport = this$props.dataReport
        var /* [auto-meaningful-name] */this$props$margin = this$props.margin
        var /* [auto-meaningful-name] */this$props$isSelected = this$props.isSelected
        var /* [auto-meaningful-name] */this$props$borderRadius = this$props.borderRadius
        var /* [auto-meaningful-name] */this$props$disable = this$props.disable
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var /* [auto-meaningful-name] */this$props$padding = this$props.padding
        var /* [auto-meaningful-name] */this$props$wrapClassName = this$props.wrapClassName
        return React1.createElement("div", {
          className: (this$props$wrapClassName ? this$props$wrapClassName + " " : "") + "CUI-button-btn-wrap",
          style: {
            width: this$props$width,
            height: this$props$height,
            margin: this$props$margin,
            borderRadius: this$props$borderRadius
          }
        }, React1.createElement("div", {
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
          className: ("".concat(this$props$isSelected ? "selected" : "", " ").concat(null !== this$props$className && undefined !== this$props$className ? this$props$className : "") ? "".concat(this$props$isSelected ? "selected" : "", " ").concat(null !== this$props$className && undefined !== this$props$className ? this$props$className : "") + " " : "") + $_1219_index1("btn ".concat(this$props$disable ? "disabled" : "", " ").concat(this.setClass()), h, {
            autoResolveMultipleImports: true,
            handleMissingStyleName: "throw"
          })
        }, this.inserSpaceIfTwoText()), null != this$props$tooltip && React1.createElement("span", {
          className: "CUI-button-btn-tooltip"
        }, this$props$tooltip))
      }
    }
  ])
  return n
}(React1.Component)
$$_35.a(g, "defaultProps", {
  type: "transparent",
  size: "md"
})
export default g
