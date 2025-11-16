/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1501__part-2
 */

"use strict"

import { "1501__part-0__A" as A } from "./1501__part-0"
import { "1501__part-1__m" as m, "1501__part-1__b" as b, "1501__part-1__w" as w, "1501__part-1__E" as E, "1501__part-1__C" as C } from "./1501__part-1"
import * as /* [auto-meaningful-name] */$$_108 from "../108"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_96 from "../96"
import * as /* [auto-meaningful-name] */$$_95 from "../95"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
var k = []
var S = new RegExp("".concat("ant-scrolling-effect"), "g")
var T = 0
var B = new Map()
var D = function e(t) {
  var n = this
  $$_95.a(this, e)
  this.lockTarget = undefined
  this.options = undefined
  this.getContainer = function () {
    var /* [auto-meaningful-name] */n$options
    return null === (n$options = n.options) || undefined === n$options ? undefined : n$options.container
  }
  this.reLock = function (e) {
    var t = k.find(function (e) {
      return e.target === n.lockTarget
    })
    if (t) {
      n.unLock()
    }
    n.options = e
    if (t) {
      t.options = e
      n.lock()
    }
  }
  this.lock = function () {
    var /* [auto-meaningful-name] */n$options
    if (!k.some(function (e) {
      return e.target === n.lockTarget
    })) {
      if (k.some(function (e) {
        var /* [auto-meaningful-name] */_n$options
        var /* [auto-meaningful-name] */e$options = e.options
        return (null === e$options || undefined === e$options ? undefined : e$options.container) === (null === (_n$options = n.options) || undefined === _n$options ? undefined : _n$options.container)
      })) {
        k = [].concat($$_80_index.a(k), [{
          target: n.lockTarget,
          options: n.options
        }])
      } else {
        var t = 0
        var r = (null === (n$options = n.options) || undefined === n$options ? undefined : n$options.container) || document.body
        if (r === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || r.scrollHeight > r.clientHeight) {
          t = w()
        }
        var /* [auto-meaningful-name] */r$className = r.className
        if (0 === k.filter(function (e) {
          var /* [auto-meaningful-name] */_n$options2
          var /* [auto-meaningful-name] */e$options = e.options
          return (null === e$options || undefined === e$options ? undefined : e$options.container) === (null === (_n$options2 = n.options) || undefined === _n$options2 ? undefined : _n$options2.container)
        }).length) {
          B.set(r, E({
            width: 0 !== t ? "calc(100% - ".concat(t, "px)") : undefined,
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden"
          }, {
            element: r
          }))
        }
        if (!S.test(r$className)) {
          var o = "".concat(r$className, " ").concat("ant-scrolling-effect")
          r.className = o.trim()
        }
        k = [].concat($$_80_index.a(k), [{
          target: n.lockTarget,
          options: n.options
        }])
      }
    }
  }
  this.unLock = function () {
    var /* [auto-meaningful-name] */n$options
    var t = k.find(function (e) {
      return e.target === n.lockTarget
    })
    k = k.filter(function (e) {
      return e.target !== n.lockTarget
    })
    if (t && !k.some(function (e) {
      var /* [auto-meaningful-name] */t$options
      var /* [auto-meaningful-name] */e$options = e.options
      return (null === e$options || undefined === e$options ? undefined : e$options.container) === (null === (t$options = t.options) || undefined === t$options ? undefined : t$options.container)
    })) {
      var r = (null === (n$options = n.options) || undefined === n$options ? undefined : n$options.container) || document.body
      var /* [auto-meaningful-name] */r$className = r.className
      if (S.test(r$className)) {
        E(B.get(r), {
          element: r
        })
        B.delete(r)
        r.className = r.className.replace(S, "").trim()
      }
    }
  }
  this.lockTarget = T++
  this.options = t
}
var I = 0
var F = m()
var R = {}
var P = function (e) {
  if (!F) {
    return null
  }
  if (e) {
    if ("string" === typeof e) {
      return document.querySelectorAll(e)[0]
    }
    if ("function" === typeof e) {
      return e()
    }
    if ("object" === $$_108.a(e) && e instanceof window.HTMLElement) {
      return e
    }
  }
  return document.body
}
var N = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n(e) {
    var r
    $$_95.a(this, n);
    (r = t.call(this, e)).container = undefined
    r.componentRef = React.createRef()
    r.rafId = undefined
    r.scrollLocker = undefined
    r.renderComponent = undefined
    r.updateScrollLocker = function (e) {
      var /* [auto-meaningful-name] */E$visible = (e || {}).visible
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$getContainer = r$props.getContainer
      var /* [auto-meaningful-name] */r$props$visible = r$props.visible
      if (r$props$visible && r$props$visible !== E$visible && F && P(r$props$getContainer) !== r.scrollLocker.getContainer()) {
        r.scrollLocker.reLock({
          container: P(r$props$getContainer)
        })
      }
    }
    r.updateOpenCount = function (e) {
      var t = e || {}
      var /* [auto-meaningful-name] */t$visible = t.visible
      var /* [auto-meaningful-name] */t$getContainer = t.getContainer
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$visible = r$props.visible
      var /* [auto-meaningful-name] */r$props$getContainer = r$props.getContainer
      if (r$props$visible !== t$visible && F && P(r$props$getContainer) === document.body) {
        if (r$props$visible && !t$visible) {
          I += 1
        } else {
          if (e) {
            I -= 1
          }
        }
      }
      if ("function" === typeof r$props$getContainer && "function" === typeof t$getContainer ? r$props$getContainer.toString() !== t$getContainer.toString() : r$props$getContainer !== t$getContainer) {
        r.removeCurrentContainer()
      }
    }
    r.attachToParent = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0]
      if (e || r.container && !r.container.parentNode) {
        var t = P(r.props.getContainer)
        return !!t && (t.appendChild(r.container), true)
      }
      return true
    }
    r.getContainer = function () {
      return F ? (r.container || (r.container = document.createElement("div"), r.attachToParent(true)), r.setWrapperClassName(), r.container) : null
    }
    r.setWrapperClassName = function () {
      var /* [auto-meaningful-name] */r$props$wrapperClassName = r.props.wrapperClassName
      if (r.container && r$props$wrapperClassName && r$props$wrapperClassName !== r.container.className) {
        r.container.className = r$props$wrapperClassName
      }
    }
    r.removeCurrentContainer = function () {
      var /* [auto-meaningful-name] */r$container
      var /* [auto-meaningful-name] */r$container$parentNode
      if (!(null === (r$container = r.container) || undefined === r$container || null === (r$container$parentNode = r$container.parentNode) || undefined === r$container$parentNode)) {
        r$container$parentNode.removeChild(r.container)
      }
    }
    r.switchScrollingEffect = function () {
      if (1 !== I || Object.keys(R).length) {
        if (!I) {
          E(R)
          R = {}
          C(true)
        }
      } else {
        C()
        R = E({
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden"
        })
      }
    }
    r.scrollLocker = new D({
      container: P(e.getContainer)
    })
    return r
  }
  $$_96.a(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this
      this.updateOpenCount()
      if (!this.attachToParent()) {
        this.rafId = A(function () {
          e.forceUpdate()
        })
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      this.updateOpenCount(e)
      this.updateScrollLocker(e)
      this.setWrapperClassName()
      this.attachToParent()
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$visible = this$props.visible
      var /* [auto-meaningful-name] */this$props$getContainer = this$props.getContainer
      if (F && P(this$props$getContainer) === document.body) {
        I = this$props$visible && I ? I - 1 : I
      }
      this.removeCurrentContainer()
      A.cancel(this.rafId)
    }
  }, {
    key: "render",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$children = this$props.children
      var /* [auto-meaningful-name] */this$props$forceRender = this$props.forceRender
      var /* [auto-meaningful-name] */this$props$visible = this$props.visible
      var i = null
      var a = {
        getOpenCount: function () {
          return I
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      }
      if (this$props$forceRender || this$props$visible || this.componentRef.current) {
        i = React.createElement(b, {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, this$props$children(a))
      }
      return i
    }
  }])
  return n
}(React.Component)
export { N as "1501__part-2__N" }
