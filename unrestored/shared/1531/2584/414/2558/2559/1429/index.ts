/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1429
 */

"use strict"

var r = this && this.__extends || function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n]
      }
    })(t, n)
  }
  return function (t, n) {
    function r() {
      this.constructor = t
    }
    e(t, n)
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
Object.defineProperty(exports, "__esModule", {
  value: true
})
var o = require("../../../1427/872")
var i = require("./2560")
var a = function (e) {
  function t(t, n, r) {
    var o = e.call(this) || this
    o.portal = null
    o.reactComponent = t
    o.parentComponent = n
    o.componentType = r
    o.statelessComponent = o.isStateless(o.reactComponent)
    return o
  }
  r(t, e)
  t.prototype.getGui = function () {
    return this.eParentElement
  }
  t.prototype.destroy = function () {
    return this.parentComponent.destroyPortal(this.portal)
  }
  t.prototype.createParentElement = function (e) {
    var t = document.createElement(this.parentComponent.props.componentWrappingElement || "div")
    o._.addCssClass(t, "ag-react-container")
    e.reactContainer = t
    return t
  }
  t.prototype.addParentContainerStyleAndClasses = function () {
    var e = this
    if (this.componentInstance) {
      if (this.componentInstance.getReactContainerStyle && this.componentInstance.getReactContainerStyle()) {
        i.assignProperties(this.eParentElement.style, this.componentInstance.getReactContainerStyle())
      }
      if (this.componentInstance.getReactContainerClasses && this.componentInstance.getReactContainerClasses()) {
        this.componentInstance.getReactContainerClasses().forEach(function (t) {
          return o._.addCssClass(e.eParentElement, t)
        })
      }
    }
  }
  t.prototype.statelessComponentRendered = function () {
    return this.eParentElement.childElementCount > 0 || this.eParentElement.childNodes.length > 0
  }
  t.prototype.getFrameworkComponentInstance = function () {
    return this.componentInstance
  }
  t.prototype.isStatelessComponent = function () {
    return this.statelessComponent
  }
  t.prototype.getReactComponentName = function () {
    return this.reactComponent.name
  }
  t.prototype.getMemoType = function () {
    return this.hasSymbol() ? Symbol.for("react.memo") : 60115
  }
  t.prototype.hasSymbol = function () {
    return "function" === typeof Symbol && Symbol.for
  }
  t.prototype.isStateless = function (e) {
    return "function" === typeof e && !(e.prototype && e.prototype.isReactComponent) || "object" === typeof e && e.$$typeof === this.getMemoType()
  }
  t.prototype.hasMethod = function (e) {
    var t = this.getFrameworkComponentInstance()
    return !!t && null !== t[e] || this.fallbackMethodAvailable(e)
  }
  t.prototype.callMethod = function (e, t) {
    var n = this
    var r = this.getFrameworkComponentInstance()
    if (this.isStatelessComponent()) {
      return this.fallbackMethod(e, t && t[0] ? t[0] : {})
    }
    if (r) {
      var o = r[e]
      return o ? o.apply(r, t) : this.fallbackMethodAvailable(e) ? this.fallbackMethod(e, t && t[0] ? t[0] : {}) : undefined
    }
    setTimeout(function () {
      return n.callMethod(e, t)
    })
  }
  t.prototype.addMethod = function (e, t) {
    this[e] = t
  }
  return t
}(function () {})
exports.ReactComponent = a
