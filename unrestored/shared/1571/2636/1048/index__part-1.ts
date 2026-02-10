/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1048__part-1
 */

"use strict"

import { p } from "./index__part-0"
var _
import * as /* [auto-meaningful-name] */$_698 from "./698"
import * as /* [auto-meaningful-name] */$_1033 from "./1033"
import { createRef, isValidElement, createElement, Component } from "react"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_142 from "../142"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_801_index from "../801/index"
import * as /* [auto-meaningful-name] */$$_315 from "../315"
function v(e) {
  return !e || null === e.offsetParent || e.hidden
}
function m(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/)
  return !(t && t[1] && t[2] && t[3]) || !(t[1] === t[2] && t[2] === t[3])
}
var y = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    var e
    $$_103.a(this, n);
    (e = t.apply(this, arguments)).containerRef = createRef()
    e.animationStart = false
    e.destroyed = false
    e.onClick = function (t, n) {
      var /* [auto-meaningful-name] */t$getRootNode
      var /* [auto-meaningful-name] */d$firstChild
      var /* [auto-meaningful-name] */e$props = e.props
      var /* [auto-meaningful-name] */e$props$insertExtraNode = e$props.insertExtraNode
      if (!(e$props.disabled || !t || v(t) || t.className.indexOf("-leave") >= 0)) {
        e.extraNode = document.createElement("div")
        var /* [auto-meaningful-name] */$$_142$aE$extraNode = $$_142.a(e).extraNode
        var /* [auto-meaningful-name] */e$context$getPrefixCls = e.context.getPrefixCls
        $$_142$aE$extraNode.className = "".concat(e$context$getPrefixCls(""), "-click-animating-node")
        var f = e.getAttributeName()
        t.setAttribute(f, "true")
        if (n && "#ffffff" !== n && "rgb(255, 255, 255)" !== n && m(n) && !/rgba\((?:\d*, ){3}0\)/.test(n) && "transparent" !== n) {
          $$_142$aE$extraNode.style.borderColor = n
          var d = (null === (t$getRootNode = t.getRootNode) || undefined === t$getRootNode ? undefined : t$getRootNode.call(t)) || t.ownerDocument
          var h = d instanceof Document ? d.body : null !== (d$firstChild = d.firstChild) && undefined !== d$firstChild ? d$firstChild : d
          _ = $_1033.a("\n      [".concat(e$context$getPrefixCls(""), "-click-animating-without-extra-node='true']::after, .").concat(e$context$getPrefixCls(""), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n, ";\n      }"), "antd-wave", {
            csp: e.csp,
            attachTo: h
          })
        }
        if (e$props$insertExtraNode) {
          t.appendChild($$_142$aE$extraNode)
        }
        ["transition", "animation"].forEach(function (n) {
          t.addEventListener("".concat(n, "start"), e.onTransitionStart)
          t.addEventListener("".concat(n, "end"), e.onTransitionEnd)
        })
      }
    }
    e.onTransitionStart = function (t) {
      if (!e.destroyed) {
        var /* [auto-meaningful-name] */e$containerRef$current = e.containerRef.current
        if (t && t.target === e$containerRef$current && !e.animationStart) {
          e.resetEffect(e$containerRef$current)
        }
      }
    }
    e.onTransitionEnd = function (t) {
      if (t && "fadeEffect" === t.animationName) {
        e.resetEffect(t.target)
      }
    }
    e.bindAnimationEvent = function (t) {
      if (t && t.getAttribute && !t.getAttribute("disabled") && !(t.className.indexOf("disabled") >= 0)) {
        var n = function (n) {
          if ("INPUT" !== n.target.tagName && !v(n.target)) {
            e.resetEffect(t)
            var r = getComputedStyle(t).getPropertyValue("border-top-color") || getComputedStyle(t).getPropertyValue("border-color") || getComputedStyle(t).getPropertyValue("background-color")
            e.clickWaveTimeoutId = window.setTimeout(function () {
              return e.onClick(t, r)
            }, 0)
            p.cancel(e.animationStartId)
            e.animationStart = true
            e.animationStartId = p(function () {
              e.animationStart = false
            }, 10)
          }
        }
        t.addEventListener("click", n, true)
        return {
          cancel: function () {
            t.removeEventListener("click", n, true)
          }
        }
      }
    }
    e.renderWave = function (t) {
      var /* [auto-meaningful-name] */t$csp = t.csp
      var /* [auto-meaningful-name] */e$props$children = e.props.children
      e.csp = t$csp
      if (!isValidElement(e$props$children)) {
        return e$props$children
      }
      var /* [auto-meaningful-name] */e$containerRef = e.containerRef
      if ($_698.c(e$props$children)) {
        e$containerRef = $_698.a(e$props$children.ref, e.containerRef)
      }
      return $$_315.a(e$props$children, {
        ref: e$containerRef
      })
    }
    return e
  }
  $$_106.a(n, [
    {
      key: "componentDidMount",
      value: function () {
        var /* [auto-meaningful-name] */this$containerRef$current = this.containerRef.current
        if (this$containerRef$current && 1 === this$containerRef$current.nodeType) {
          this.instance = this.bindAnimationEvent(this$containerRef$current)
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        if (this.instance) {
          this.instance.cancel()
        }
        if (this.clickWaveTimeoutId) {
          clearTimeout(this.clickWaveTimeoutId)
        }
        this.destroyed = true
      }
    }, {
      key: "getAttributeName",
      value: function () {
        var /* [auto-meaningful-name] */this$context$getPrefixCls = this.context.getPrefixCls
        var /* [auto-meaningful-name] */this$props$insertExtraNode = this.props.insertExtraNode
        return "".concat(this$context$getPrefixCls(""), this$props$insertExtraNode ? "-click-animating" : "-click-animating-without-extra-node")
      }
    }, {
      key: "resetEffect",
      value: function (e) {
        var t = this
        if (e && e !== this.extraNode && e instanceof Element) {
          var /* [auto-meaningful-name] */this$props$insertExtraNode = this.props.insertExtraNode
          var r = this.getAttributeName()
          e.setAttribute(r, "false")
          if (_) {
            _.innerHTML = ""
          }
          if (this$props$insertExtraNode && this.extraNode && e.contains(this.extraNode)) {
            e.removeChild(this.extraNode)
          }
          ["transition", "animation"].forEach(function (n) {
            e.removeEventListener("".concat(n, "start"), t.onTransitionStart)
            e.removeEventListener("".concat(n, "end"), t.onTransitionEnd)
          })
        }
      }
    }, {
      key: "render",
      value: function () {
        return createElement($$_801_index.a, null, this.renderWave)
      }
    }
  ])
  return n
}(Component)
y.contextType = $$_801_index.b
export { y }
