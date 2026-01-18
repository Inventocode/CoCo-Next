/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-88
 */

"use strict"

import * as /* [auto-meaningful-name] */$_59_index from "./59/index"
import * as /* [auto-meaningful-name] */$_58_index from "./58/index"
import * as ro from "./39"
import * as X from "./27"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_291 from "./291"
if ("undefined" !== typeof Element && !Element.prototype.matches) {
  var /* [auto-meaningful-name] */Element$prototype = Element.prototype
  Element$prototype.matches = Element$prototype.matchesSelector || Element$prototype.mozMatchesSelector || Element$prototype.msMatchesSelector || Element$prototype.oMatchesSelector || Element$prototype.webkitMatchesSelector
}
var jv = function (e, t, n) {
  for (var r = e; r;) {
    var o = r === n || r === document.body
    if (o || 1 === r.nodeType && r.matches(t)) {
      if (o) {
        r = null
      }
      break
    }
    r = r.parentNode
  }
  return r
}
var Nv = function (e, t) {
  return Array.from(e.parentNode.children).filter(function (e) {
    return "" === t || !e.matches(t)
  }).indexOf(e)
}
var Rv = function () {
  return window.navigator.maxTouchPoints > 0
}
var kv = 1
var xv = 3
var Dv = function (e) {
  $_58_index.a(n, e)
  var t = $_59_index.a(n)
  function n(e) {
    var r
    X.a(this, n);
    (r = t.call(this, e)).onTouchStart = r.onTouchStart.bind($_291.a(r))
    r.onMouseDown = r.onMouseDown.bind($_291.a(r))
    r.onDragStart = r.onDragStart.bind($_291.a(r))
    r.onDragEnter = r.onDragEnter.bind($_291.a(r))
    r.onDragEnd = r.onDragEnd.bind($_291.a(r))
    r.autoScroll = r.autoScroll.bind($_291.a(r))
    r.state = {
      fromIndex: -1,
      toIndex: -1
    }
    r.scrollElement = null
    r.scrollTimerId = -1
    r.direction = xv
    return r
  }
  ro.a(n, [
    {
      key: "componentWillUnmount",
      value: function () {
        if (this.dragLine && this.dragLine.parentNode) {
          this.dragLine.parentNode.removeChild(this.dragLine)
          this.dragLine = null
          this.cacheDragTarget = null
        }
      }
    }, {
      key: "onTouchStart",
      value: function (e) {
        if (Rv()) {
          this.startDrag(e)
        }
      }
    }, {
      key: "onMouseDown",
      value: function (e) {
        if (!Rv()) {
          this.startDrag(e)
        }
      }
    }, {
      key: "onDragStart",
      value: function (e) {
        e.stopPropagation()
        var t = this.getDragNode(e.target)
        var n = e
        if (t) {
          var /* [auto-meaningful-name] */t$parentNode = t.parentNode
          n.dataTransfer.setData("Text", "")
          n.dataTransfer.effectAllowed = "move"
          t$parentNode.ondragenter = this.onDragEnter
          t$parentNode.ondragover = function (e) {
            e.preventDefault()
            return true
          }
          var o = Nv(t, this.props.ignoreSelector)
          this.setState({
            fromIndex: o,
            toIndex: o
          })
          this.scrollElement = function (e) {
            var t = e
            do {
              var /* [auto-meaningful-name] */window$getComputedStyleT$overflow = window.getComputedStyle(t).overflow
              if (("auto" === window$getComputedStyleT$overflow || "scroll" === window$getComputedStyleT$overflow) && t && t.nodeType && (t.offsetWidth < t.scrollWidth || t.offsetHeight < t.scrollHeight)) {
                break
              }
              if (!t || !t.nodeType || t === document.body) {
                t = null
                break
              }
              t = t.parentNode
            } while (t)
            return t
          }(t$parentNode)
        }
      }
    }, {
      key: "onDragEnter",
      value: function (e) {
        var t
        var n = this.getDragNode(e.target)
        var r = e
        if (n) {
          t = Nv(n, this.props.ignoreSelector)
          if (this.props.enableScroll) {
            this.resolveAutoScroll(r, n)
          }
        } else {
          t = -1
          this.stopAutoScroll()
        }
        this.cacheDragTarget = n
        this.setState({
          toIndex: t
        })
        this.fixDragLine(n)
      }
    }, {
      key: "onDragEnd",
      value: function (e) {
        var t = this.getDragNode(e.target)
        this.stopAutoScroll()
        if (t) {
          t.removeAttribute("draggable")
          t.ondragstart = null
          t.ondragend = null
          t.parentNode.ondragenter = null
          t.parentNode.ondragover = null
          if (this.state.fromIndex >= 0 && this.state.fromIndex !== this.state.toIndex) {
            this.props.onDragEnd(this.state.fromIndex, this.state.toIndex)
          }
        }
        this.hideDragLine()
        this.setState({
          fromIndex: -1,
          toIndex: -1
        })
      }
    }, {
      key: "getDragNode",
      value: function (e) {
        return jv(e, this.props.nodeSelector, this.dragList)
      }
    }, {
      key: "getHandleNode",
      value: function (e) {
        return jv(e, this.props.handleSelector || this.props.nodeSelector, this.dragList)
      }
    }, {
      key: "getDragLine",
      value: function () {
        if (!this.dragLine) {
          this.dragLine = window.document.createElement("div")
          this.dragLine.setAttribute("style", "position:fixed;z-index:9999;height:0;margin-top:-1px;border-bottom:dashed 2px red;display:none;")
          window.document.body.appendChild(this.dragLine)
        }
        this.dragLine.className = this.props.lineClassName || ""
        return this.dragLine
      }
    }, {
      key: "startDrag",
      value: function (e) {
        var t = this.getHandleNode(e.target)
        if (t) {
          var n = this.props.handleSelector && this.props.handleSelector !== this.props.nodeSelector ? this.getDragNode(t) : t
          if (n) {
            t.setAttribute("draggable", false)
            n.setAttribute("draggable", true)
            n.ondragstart = this.onDragStart
            n.ondragend = this.onDragEnd
          }
        }
      }
    }, {
      key: "resolveAutoScroll",
      value: function (e, t) {
        if (this.scrollElement) {
          var n = this.scrollElement.getBoundingClientRect()
          var /* [auto-meaningful-name] */n$top = n.top
          var /* [auto-meaningful-name] */n$height = n.height
          var /* [auto-meaningful-name] */t$offsetHeight = t.offsetHeight
          var /* [auto-meaningful-name] */e$pageY = e.pageY
          var s = t$offsetHeight * (2 / 3)
          this.direction = 0
          if (e$pageY > n$top + n$height - s) {
            this.direction = xv
          } else {
            if (e$pageY < n$top + s) {
              this.direction = kv
            }
          }
          if (this.direction) {
            if (this.scrollTimerId < 0) {
              this.scrollTimerId = setInterval(this.autoScroll, 20)
            }
          } else {
            this.stopAutoScroll()
          }
        }
      }
    }, {
      key: "stopAutoScroll",
      value: function () {
        clearInterval(this.scrollTimerId)
        this.scrollTimerId = -1
        this.fixDragLine(this.cacheDragTarget)
      }
    }, {
      key: "autoScroll",
      value: function () {
        var /* [auto-meaningful-name] */this$scrollElement$scrollTop = this.scrollElement.scrollTop
        if (this.direction === xv) {
          this.scrollElement.scrollTop = this$scrollElement$scrollTop + this.props.scrollSpeed
          if (this$scrollElement$scrollTop === this.scrollElement.scrollTop) {
            this.stopAutoScroll()
          }
        } else {
          if (this.direction === kv) {
            this.scrollElement.scrollTop = this$scrollElement$scrollTop - this.props.scrollSpeed
            if (this.scrollElement.scrollTop <= 0) {
              this.stopAutoScroll()
            }
          } else {
            this.stopAutoScroll()
          }
        }
      }
    }, {
      key: "hideDragLine",
      value: function () {
        if (this.dragLine) {
          this.dragLine.style.display = "none"
        }
      }
    }, {
      key: "fixDragLine",
      value: function (e) {
        var t = this.getDragLine()
        if (!e || this.state.fromIndex < 0 || this.state.fromIndex === this.state.toIndex) {
          this.hideDragLine()
        } else {
          var n = e.getBoundingClientRect()
          var /* [auto-meaningful-name] */n$left = n.left
          var /* [auto-meaningful-name] */n$top = n.top
          var /* [auto-meaningful-name] */n$width = n.width
          var /* [auto-meaningful-name] */n$height = n.height
          var s = this.state.toIndex < this.state.fromIndex ? n$top : n$top + n$height
          if (this.props.enableScroll && this.scrollElement) {
            var c = this.scrollElement.getBoundingClientRect()
            var /* [auto-meaningful-name] */c$height = c.height
            var /* [auto-meaningful-name] */c$top = c.top
            if (s < c$top - 2 || s > c$top + c$height + 2) {
              return void this.hideDragLine()
            }
          }
          t.style.left = n$left + "px"
          t.style.width = n$width + "px"
          t.style.top = s + "px"
          t.style.display = "block"
        }
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        return React.createElement("div", {
          role: "presentation",
          onTouchStart: this.onTouchStart,
          onMouseDown: this.onMouseDown,
          ref: function (t) {
            e.dragList = t
          }
        }, this.props.children)
      }
    }
  ])
  return n
}(React1.Component)
Dv.defaultProps = {
  nodeSelector: "tr",
  ignoreSelector: "",
  enableScroll: true,
  scrollSpeed: 10,
  handleSelector: "",
  lineClassName: "",
  children: null
}
var Mv = Dv
export { Mv }
