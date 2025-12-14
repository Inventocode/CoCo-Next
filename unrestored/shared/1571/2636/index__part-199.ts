/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-199
 */

"use strict"

import { ES } from "./index__part-154"
import { GM } from "./index__part-196"
import * as /* [auto-meaningful-name] */$_364_index from "./364/index"
import * as /* [auto-meaningful-name] */$_315 from "./315"
import * as /* [auto-meaningful-name] */$_435 from "./435"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import * as /* [auto-meaningful-name] */$_241_index from "./241/index"
import * as /* [auto-meaningful-name] */$_140 from "./140"
import * as /* [auto-meaningful-name] */$_486 from "./486"
import * as /* [auto-meaningful-name] */$_120 from "./120"
import * as /* [auto-meaningful-name] */$_106 from "./106"
import * as /* [auto-meaningful-name] */$_103 from "./103"
import * as Ln from "./35"
import * as Dn from "./19"
import N from "./8"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_559_index from "./559/index"
import * as /* [auto-meaningful-name] */$_1034 from "./1034"
var JM = _React.createContext({
  prefixCls: "",
  firstLevel: true,
  inlineCollapsed: false
})
var $M = function (e) {
  var /* [auto-meaningful-name] */o$props
  var n
  var /* [auto-meaningful-name] */e$popupClassName = e.popupClassName
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$title = e.title
  var a = _React.useContext(JM)
  var /* [auto-meaningful-name] */a$prefixCls = a.prefixCls
  var /* [auto-meaningful-name] */a$inlineCollapsed = a.inlineCollapsed
  var /* [auto-meaningful-name] */a$antdMenuTheme = a.antdMenuTheme
  var u = $_559_index.f()
  if (e$icon) {
    var d = $_315.b(e$title) && "span" === e$title.type
    n = _React.createElement(_React.Fragment, null, $_315.a(e$icon, {
      className: N($_315.b(e$icon) ? null === (o$props = e$icon.props) || undefined === o$props ? undefined : o$props.className : "", "".concat(a$prefixCls, "-item-icon"))
    }), d ? e$title : _React.createElement("span", {
      className: "".concat(a$prefixCls, "-title-content")
    }, e$title))
  } else {
    n = a$inlineCollapsed && !u.length && e$title && "string" === typeof e$title ? _React.createElement("div", {
      className: "".concat(a$prefixCls, "-inline-collapsed-noicon")
    }, e$title.charAt(0)) : _React.createElement("span", {
      className: "".concat(a$prefixCls, "-title-content")
    }, e$title)
  }
  var p = _React.useMemo(function () {
    return Dn.a(Dn.a({}, a), {
      firstLevel: false
    })
  }, [a])
  return _React.createElement(JM.Provider, {
    value: p
  }, _React.createElement($_559_index.d, Dn.a({}, $_486.a(e, ["icon"]), {
    title: n,
    popupClassName: N(a$prefixCls, "".concat(a$prefixCls, "-").concat(a$antdMenuTheme), e$popupClassName)
  })))
}
function eL(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  var n = []
  React.Children.forEach(e, function (e) {
    if (undefined !== e && null !== e || t.keepEmpty) {
      if (Array.isArray(e)) {
        n = n.concat(eL(e))
      } else {
        if ($_241_index.isFragment(e) && e.props) {
          n = n.concat(eL(e.props.children, t))
        } else {
          n.push(e)
        }
      }
    }
  })
  return n
}
var tL = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var nL = function (e) {
  $_120.a(n, e)
  var t = $_140.a(n)
  function n() {
    var e
    $_103.a(this, n);
    (e = t.apply(this, arguments)).renderItem = function (t) {
      var n
      var /* [auto-meaningful-name] */g$props
      var /* [auto-meaningful-name] */t$siderCollapsed = t.siderCollapsed
      var /* [auto-meaningful-name] */e$context = e.context
      var /* [auto-meaningful-name] */e$context$prefixCls = e$context.prefixCls
      var /* [auto-meaningful-name] */e$context$firstLevel = e$context.firstLevel
      var /* [auto-meaningful-name] */e$context$inlineCollapsed = e$context.inlineCollapsed
      var /* [auto-meaningful-name] */e$context$direction = e$context.direction
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$className = e$props.className
      var /* [auto-meaningful-name] */e$props$children = e$props.children
      var /* [auto-meaningful-name] */_e$props = e.props
      var /* [auto-meaningful-name] */_e$props$title = _e$props.title
      var /* [auto-meaningful-name] */_e$props$icon = _e$props.icon
      var /* [auto-meaningful-name] */_e$props$danger = _e$props.danger
      var v = tL(_e$props, ["title", "icon", "danger"])
      var b = _e$props$title
      if ("undefined" === typeof _e$props$title) {
        b = e$context$firstLevel ? e$props$children : ""
      } else {
        if (false === _e$props$title) {
          b = ""
        }
      }
      var y = {
        title: b
      }
      if (!(t$siderCollapsed || e$context$inlineCollapsed)) {
        y.title = null
        y.visible = false
      }
      var /* [auto-meaningful-name] */eLE$props$children$length = eL(e$props$children).length
      return _React.createElement($_748_index.a, Dn.a({}, y, {
        placement: "rtl" === e$context$direction ? "left" : "right",
        overlayClassName: "".concat(e$context$prefixCls, "-inline-collapsed-tooltip")
      }), _React.createElement($_559_index.b, Dn.a({}, v, {
        className: N((n = {}, Ln.a(n, "".concat(e$context$prefixCls, "-item-danger"), _e$props$danger), Ln.a(n, "".concat(e$context$prefixCls, "-item-only-child"), 1 === (_e$props$icon ? eLE$props$children$length + 1 : eLE$props$children$length)), n), e$props$className),
        title: "string" === typeof _e$props$title ? _e$props$title : undefined
      }), $_315.a(_e$props$icon, {
        className: N($_315.b(_e$props$icon) ? null === (g$props = _e$props$icon.props) || undefined === g$props ? undefined : g$props.className : "", "".concat(e$context$prefixCls, "-item-icon"))
      }), e.renderItemChildren(e$context$inlineCollapsed)))
    }
    return e
  }
  $_106.a(n, [
    {
      key: "renderItemChildren",
      value: function (e) {
        var /* [auto-meaningful-name] */this$context = this.context
        var /* [auto-meaningful-name] */this$context$prefixCls = this$context.prefixCls
        var /* [auto-meaningful-name] */this$context$firstLevel = this$context.firstLevel
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$icon = this$props.icon
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var s = _React.createElement("span", {
          className: "".concat(this$context$prefixCls, "-title-content")
        }, this$props$children)
        return (!this$props$icon || $_315.b(this$props$children) && "span" === this$props$children.type) && this$props$children && e && this$context$firstLevel && "string" === typeof this$props$children ? _React.createElement("div", {
          className: "".concat(this$context$prefixCls, "-inline-collapsed-noicon")
        }, this$props$children.charAt(0)) : s
      }
    }, {
      key: "render",
      value: function () {
        return _React.createElement(ES.Consumer, null, this.renderItem)
      }
    }
  ])
  return n
}(_React.Component)
nL.contextType = JM
var rL = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var oL = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$dashed = e.dashed
  var o = rL(e, ["prefixCls", "className", "dashed"])
  var i = (0, _React.useContext($_801_index.b).getPrefixCls)("menu", e$prefixCls)
  var a = N(Ln.a({}, "".concat(i, "-item-divider-dashed"), !!e$dashed), e$className)
  return _React.createElement($_559_index.a, Dn.a({
    className: a
  }, o))
}
var iL = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var aL = function (e) {
  $_120.a(n, e)
  var t = $_140.a(n)
  function n(e) {
    var r
    $_103.a(this, n);
    (r = t.call(this, e)).renderMenu = function (e) {
      var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
      var /* [auto-meaningful-name] */e$getPrefixCls = e.getPrefixCls
      var /* [auto-meaningful-name] */e$direction = e.direction
      var i = e$getPrefixCls()
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$prefixCls = r$props.prefixCls
      var /* [auto-meaningful-name] */r$props$className = r$props.className
      var /* [auto-meaningful-name] */r$props$theme = r$props.theme
      var /* [auto-meaningful-name] */r$props$expandIcon = r$props.expandIcon
      var d = iL(r$props, ["prefixCls", "className", "theme", "expandIcon"])
      var p = $_486.a(d, ["siderCollapsed", "collapsedWidth"])
      var h = r.getInlineCollapsed()
      var m = {
        horizontal: {
          motionName: "".concat(i, "-slide-up")
        },
        inline: $_435.a,
        other: {
          motionName: "".concat(i, "-zoom-big")
        }
      }
      var g = e$getPrefixCls("menu", r$props$prefixCls)
      var _ = N("".concat(g, "-").concat(r$props$theme), r$props$className)
      var v = $_1034.a(function (e, t, n, r) {
        return {
          prefixCls: e,
          inlineCollapsed: t || false,
          antdMenuTheme: n,
          direction: r,
          firstLevel: true
        }
      })(g, h, r$props$theme, e$direction)
      return _React.createElement(JM.Provider, {
        value: v
      }, _React.createElement($_559_index.e, Dn.a({
        getPopupContainer: e$getPopupContainer,
        overflowedIndicator: _React.createElement(GM, null),
        overflowedIndicatorPopupClassName: "".concat(g, "-").concat(r$props$theme)
      }, p, {
        inlineCollapsed: h,
        className: _,
        prefixCls: g,
        direction: e$direction,
        defaultMotions: m,
        expandIcon: $_315.a(r$props$expandIcon, {
          className: "".concat(g, "-submenu-expand-icon")
        })
      })))
    }
    $_364_index.a(!("inlineCollapsed" in e && "inline" !== e.mode), "Menu", "`inlineCollapsed` should only be used when `mode` is inline.")
    $_364_index.a(!(undefined !== e.siderCollapsed && "inlineCollapsed" in e), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.")
    return r
  }
  $_106.a(n, [
    {
      key: "getInlineCollapsed",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$inlineCollapsed = this$props.inlineCollapsed
        var /* [auto-meaningful-name] */this$props$siderCollapsed = this$props.siderCollapsed
        return undefined !== this$props$siderCollapsed ? this$props$siderCollapsed : this$props$inlineCollapsed
      }
    }, {
      key: "render",
      value: function () {
        return _React.createElement($_801_index.a, null, this.renderMenu)
      }
    }
  ])
  return n
}(_React.Component)
aL.defaultProps = {
  theme: "light"
}
var sL = function (e) {
  $_120.a(n, e)
  var t = $_140.a(n)
  function n() {
    $_103.a(this, n)
    return t.apply(this, arguments)
  }
  $_106.a(n, [
    {
      key: "render",
      value: function () {
        var e = this
        return _React.createElement(ES.Consumer, null, function (t) {
          return _React.createElement(aL, Dn.a({}, e.props, t))
        })
      }
    }
  ])
  return n
}(_React.Component)
sL.Divider = oL
sL.Item = nL
sL.SubMenu = $M
sL.ItemGroup = $_559_index.c
var cL = sL
export { cL }
