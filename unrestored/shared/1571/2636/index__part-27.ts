/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-27
 */

"use strict"

import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as X from "./27"
import * as k from "./11"
import N from "./8"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1512 from "./1512"
import * as ro from "./39"
import * as /* [auto-meaningful-name] */$_58_index from "./58/index"
import * as /* [auto-meaningful-name] */$_59_index from "./59/index"
import * as /* [auto-meaningful-name] */$_279 from "../../../../src/editor/ui/preview-area/stage/style.css"
import /* [auto-meaningful-name] */$_2791 from "../../../../src/editor/ui/preview-area/stage/style.css"
var co = function (e) {
  $_58_index.a(n, e)
  var t = $_59_index.a(n)
  function n(e) {
    var r
    X.a(this, n);
    (r = t.call(this, e)).handleMouseDown = function (e) {
      if (0 === e.button) {
        r.setState({
          isDragging: true
        })
        document.addEventListener("mousemove", r.handleMouseMove)
        document.addEventListener("mouseup", r.handleMouseUp)
      }
    }
    r.handleMouseMove = function (e) {
      var /* [auto-meaningful-name] */r$props$previewAreaRef$current = r.props.previewAreaRef.current
      if (r$props$previewAreaRef$current) {
        var /* [auto-meaningful-name] */r$props$previewAreaRef$current$getClientRects0$width = r$props$previewAreaRef$current.getClientRects()[0].width
        var o = Math.max(Math.min(window.innerWidth / 2, r$props$previewAreaRef$current$getClientRects0$width + e.movementX), 514)
        r$props$previewAreaRef$current.style.width = o + "px"
        r.props.onDrag(o)
      }
    }
    r.handleMouseUp = function () {
      r.setState({
        isDragging: false
      })
      document.removeEventListener("mousemove", r.handleMouseMove)
      document.removeEventListener("mouseup", r.handleMouseUp)
      $_26_index.z.resizeWorkspace()
      var /* [auto-meaningful-name] */r$props$previewAreaRef$current = r.props.previewAreaRef.current
      if (null === r$props$previewAreaRef$current || undefined === r$props$previewAreaRef$current ? undefined : r$props$previewAreaRef$current.getClientRects()[0].width) {
        r.props.onDragEnd(r$props$previewAreaRef$current.getClientRects()[0].width)
      }
    }
    r.state = {
      isDragging: false
    }
    return r
  }
  ro.a(n, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$state$isDragging = this.state.isDragging
        return React.createElement("div", {
          className: N($_2791.dragBar, k.a({}, $_2791.active, this$state$isDragging)),
          onMouseEnter: this.props.onEnter,
          onMouseLeave: this.props.onLeave,
          onMouseDown: this.handleMouseDown
        })
      }
    }
  ])
  return n
}(React.PureComponent)
var lo = memo(co)
export { lo }
