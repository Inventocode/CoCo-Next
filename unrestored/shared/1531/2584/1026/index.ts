/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1026
 */

"use strict"

export { y as a }
import r = require("../95");
import i = require("../96");
import o = require("../103");
import a = require("../120");
import s = require("../140");
import React = require("react");
import u = require("./1011");
import l = require("./690");
import f = require("./413");
var d = 0
var h = {}
function p(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = d++
  var r = t
  function i() {
    if ((r -= 1) <= 0) {
      e()
      delete h[n]
    } else {
      h[n] = f.a(i)
    }
  }
  h[n] = f.a(i)
  return n
}
p.cancel = function (e) {
  if (undefined !== e) {
    f.a.cancel(h[e])
    delete h[e]
  }
}
p.ids = h
var _
import A = require("../789");
import g = require("../314");
function v(e) {
  return !e || null === e.offsetParent || e.hidden
}
function m(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/)
  return !(t && t[1] && t[2] && t[3]) || !(t[1] === t[2] && t[2] === t[3])
}
var y = function (e) {
  a.a(n, e)
  var t = s.a(n)
  function n() {
    var e
    r.a(this, n);
    (e = t.apply(this, arguments)).containerRef = React.createRef()
    e.animationStart = false
    e.destroyed = false
    e.onClick = function (t, n) {
      var /* [auto-meaningful-name] */t$getRootNode
      var /* [auto-meaningful-name] */d$firstChild
      var e$props = e.props
      var e$props$insertExtraNode = e$props.insertExtraNode
      if (!(e$props.disabled || !t || v(t) || t.className.indexOf("-leave") >= 0)) {
        e.extraNode = document.createElement("div")
        var o$aE$extraNode = o.a(e).extraNode
        var e$context$getPrefixCls = e.context.getPrefixCls
        o$aE$extraNode.className = "".concat(e$context$getPrefixCls(""), "-click-animating-node")
        var f = e.getAttributeName()
        t.setAttribute(f, "true")
        if (n && "#ffffff" !== n && "rgb(255, 255, 255)" !== n && m(n) && !/rgba\((?:\d*, ){3}0\)/.test(n) && "transparent" !== n) {
          o$aE$extraNode.style.borderColor = n
          var d = (null === (t$getRootNode = t.getRootNode) || undefined === t$getRootNode ? undefined : t$getRootNode.call(t)) || t.ownerDocument
          var h = d instanceof Document ? d.body : null !== (d$firstChild = d.firstChild) && undefined !== d$firstChild ? d$firstChild : d
          _ = u.a("\n      [".concat(e$context$getPrefixCls(""), "-click-animating-without-extra-node='true']::after, .").concat(e$context$getPrefixCls(""), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n, ";\n      }"), "antd-wave", {
            csp: e.csp,
            attachTo: h
          })
        }
        if (e$props$insertExtraNode) {
          t.appendChild(o$aE$extraNode)
        }
        ["transition", "animation"].forEach(function (n) {
          t.addEventListener("".concat(n, "start"), e.onTransitionStart)
          t.addEventListener("".concat(n, "end"), e.onTransitionEnd)
        })
      }
    }
    e.onTransitionStart = function (t) {
      if (!e.destroyed) {
        var e$containerRef$current = e.containerRef.current
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
      var t$csp = t.csp
      var e$props$children = e.props.children
      e.csp = t$csp
      if (!React.isValidElement(e$props$children)) {
        return e$props$children
      }
      var e$containerRef = e.containerRef
      if (l.c(e$props$children)) {
        e$containerRef = l.a(e$props$children.ref, e.containerRef)
      }
      return g.a(e$props$children, {
        ref: e$containerRef
      })
    }
    return e
  }
  i.a(n, [{
    key: "componentDidMount",
    value: function () {
      var this$containerRef$current = this.containerRef.current
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
      var this$context$getPrefixCls = this.context.getPrefixCls
      var this$props$insertExtraNode = this.props.insertExtraNode
      return "".concat(this$context$getPrefixCls(""), this$props$insertExtraNode ? "-click-animating" : "-click-animating-without-extra-node")
    }
  }, {
    key: "resetEffect",
    value: function (e) {
      var t = this
      if (e && e !== this.extraNode && e instanceof Element) {
        var this$props$insertExtraNode = this.props.insertExtraNode
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
      return React.createElement(A.a, null, this.renderWave)
    }
  }])
  return n
}(React.Component)
y.contextType = A.b
export default y
