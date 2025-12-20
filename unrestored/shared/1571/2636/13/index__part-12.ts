/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-12
 */

"use strict"

import { fe, he } from "./index__part-11"
import * as /* [auto-meaningful-name] */$$_59_index from "../59/index"
import * as /* [auto-meaningful-name] */$$_58_index from "../58/index"
import * as /* [auto-meaningful-name] */$$_39 from "../39"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import i from "../8"
import "./872"
function me(e) {
  return e.target.closest("[data-coco-draggable-index]")
}
function ge(e, t, n) {
  var /* [auto-meaningful-name] */n$offsetTop = n.offsetTop
  var o = n.getBoundingClientRect()
  var /* [auto-meaningful-name] */o$height = o.height
  var /* [auto-meaningful-name] */o$top = o.top
  var s = e.y < o$top + o$height / 2 ? 0 : 1
  t.style.top = n$offsetTop + s * o$height + "px"
  return s
}
var _e = function (e) {
  $$_58_index.a(n, e)
  var t = $$_59_index.a(n)
  function n(e) {
    var r
    $$_27.a(this, n);
    (r = t.call(this, e)).separationLineRef = _React.createRef()
    r.dragContentRef = _React.createRef()
    r.dragWrapperRef = _React.createRef()
    r._dragResult = undefined
    r._mousedownTimeId = undefined
    r._mousemoveTimeId = undefined
    r.handleMouseDown = function (e) {
      if (0 === e.button) {
        var /* [auto-meaningful-name] */r$props = r.props
        var /* [auto-meaningful-name] */r$props$onDragStart = r$props.onDragStart
        var /* [auto-meaningful-name] */r$props$children = r$props.children
        if (r$props$children && React.Children.count(r$props$children) > 1) {
          var a = me(e)
          var /* [auto-meaningful-name] */r$separationLineRef$current = r.separationLineRef.current
          var l = {
            x: e.clientX,
            y: e.clientY
          }
          if (r._mousedownTimeId) {
            clearTimeout(r._mousedownTimeId)
          }
          r._mousedownTimeId = setTimeout(function () {
            if (a && r$separationLineRef$current) {
              var e = Number(a.dataset.cocoDraggableIndex)
              ge(l, r$separationLineRef$current, a)
              r._dragResult.sourceIndex = e
              r._dragResult.destinationIndex = e
              r._setMouseCursor("grab")
              r.setState({
                draggedItemIndex: e
              })
              if (r$props$onDragStart) {
                r$props$onDragStart()
              }
            }
            document.addEventListener("mousemove", r.handleMouseMove)
          }, n.DELAY)
          document.addEventListener("mouseup", r.handleMouseUp)
        }
      }
    }
    r.handleMouseUp = function () {
      var /* [auto-meaningful-name] */r$props$onDragEnd = r.props.onDragEnd
      if (r._mousedownTimeId) {
        clearTimeout(r._mousedownTimeId)
      }
      if (r.state.isDragging && r$props$onDragEnd) {
        r$props$onDragEnd(r._dragResult)
      }
      r._initializeState()
      document.removeEventListener("mouseup", r.handleMouseUp)
      document.removeEventListener("mousemove", r.handleMouseMove)
    }
    r._initializeState = function () {
      r._dragResult.destinationIndex = -1
      r._dragResult.sourceIndex = -1
      r.setState({
        isDragging: false,
        draggedItemIndex: -1
      })
      r._setMouseCursor("initial")
    }
    r.handleMouseMove = function (e) {
      r._setScrollOffset()
      if (!r._mousemoveTimeId) {
        r._mousemoveTimeId = setTimeout(function () {
          r._mousemoveTimeId = null
        }, 60)
        r.setState({
          isDragging: true
        })
        var t = me(e)
        var /* [auto-meaningful-name] */r$separationLineRef$current = r.separationLineRef.current
        if (t && r$separationLineRef$current) {
          var o = ge({
            x: e.clientX,
            y: e.clientY
          }, r$separationLineRef$current, t)
          var i = Number(t.dataset.cocoDraggableIndex) + o
          if (r._dragResult.sourceIndex !== i && r._dragResult.sourceIndex + 1 !== i) {
            r._dragResult.destinationIndex = r._dragResult.sourceIndex < i ? i - 1 : i
          } else {
            r._dragResult.destinationIndex = r._dragResult.sourceIndex
          }
        }
      }
    }
    r._setScrollOffset = function () {
      var e = React.Children.count(r.props.children)
      var /* [auto-meaningful-name] */r$dragWrapperRef$current = r.dragWrapperRef.current
      var /* [auto-meaningful-name] */r$separationLineRef$current = r.separationLineRef.current
      var /* [auto-meaningful-name] */r$dragContentRef$current = r.dragContentRef.current
      if (r$dragWrapperRef$current && r$separationLineRef$current && r$dragContentRef$current) {
        var i = r$dragContentRef$current.getBoundingClientRect().height / e
        var /* [auto-meaningful-name] */r$dragWrapperRef$current$getBoundingClientRect$height = r$dragWrapperRef$current.getBoundingClientRect().height
        var /* [auto-meaningful-name] */r$separationLineRef$current$offsetTop = r$separationLineRef$current.offsetTop
        var /* [auto-meaningful-name] */r$dragWrapperRef$current$scrollTop = r$dragWrapperRef$current.scrollTop
        if (0 !== r$separationLineRef$current$offsetTop) {
          if (r$dragWrapperRef$current$getBoundingClientRect$height + r$dragWrapperRef$current$scrollTop - i < r$separationLineRef$current$offsetTop) {
            r$dragWrapperRef$current.scrollTop += 10
          } else {
            if (r$separationLineRef$current$offsetTop - i < r$dragWrapperRef$current$scrollTop) {
              r$dragWrapperRef$current.scrollTop -= 10
            }
          }
        }
      }
    }
    r._setMouseCursor = function (e) {
      document.body.style.cursor = e
    }
    r.separationLineRef = React.createRef()
    r._dragResult = {
      sourceIndex: -1,
      destinationIndex: -1
    }
    r.state = {
      isDragging: false,
      draggedItemIndex: -1
    }
    return r
  }
  $$_39.a(n, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$state = this.state
        var /* [auto-meaningful-name] */this$state$isDragging = this$state.isDragging
        var /* [auto-meaningful-name] */this$state$draggedItemIndex = this$state.draggedItemIndex
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        return React.createElement(he, {
          value: {
            draggedItemIndex: this$state$draggedItemIndex
          }
        }, React.createElement("div", {
          className: i("coco-drag-context", this$props$className),
          ref: this.dragWrapperRef
        }, React.createElement("div", {
          onMouseDown: this.handleMouseDown,
          ref: this.dragContentRef
        }, this$props$children, React.createElement("div", {
          className: "coco-drag-context-line",
          ref: this.separationLineRef,
          style: {
            display: this$state$isDragging ? "block" : "none"
          }
        }))))
      }
    }
  ])
  return n
}(React.PureComponent)
_e.DELAY = 200
_React.memo(_e)
_React.memo(function (e) {
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$children = e.children
  return React.createElement(fe, null, function (e) {
    var /* [auto-meaningful-name] */e$draggedItemIndex = e.draggedItemIndex
    return React.createElement("div", {
      className: i("coco-draggable", {
        dragged: e$draggedItemIndex === e$index
      }),
      "data-coco-draggable-index": e$index
    }, e$children)
  })
})
