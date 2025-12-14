/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-90
 */

"use strict"

import { Fv } from "./index__part-89"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_329 from "./329"
import /* [auto-meaningful-name] */_$_ from "./329"
var Uv = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$bgColor = e.bgColor
  var a = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var l = $_16_index.e(function (e) {
    return e.block.flyoutVisible
  })
  var u = _React.useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = _React.useState("")
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  _React.useEffect(function () {
    y(c === t && l ? e$color : p || c === t && !l ? e$bgColor : "")
  }, [c, t, l, p, e$color, e$bgColor])
  return React.createElement("div", {
    key: t,
    className: N(_$_.itemBlock, c === t && l && _$_.itemSelected),
    style: {
      backgroundColor: b
    },
    onClick: function () {
      var e
      var n
      a($$_$$_$$_$$_src_shared_events_messagesWrapper.ug(t))
      a($$_$$_$$_$$_src_shared_events_messagesWrapper.fj(false))
      if (c === t && l) {
        $_26_index.g.setSelectedItem()
        if (!(null === (e = $_26_index.g.getToolbox()) || undefined === e)) {
          e.flyout.hide()
        }
      } else {
        $_26_index.g.setSelectedItem(null === (n = $_26_index.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(t))
      }
    },
    onMouseEnter: function () {
      m(true)
    },
    onMouseLeave: function () {
      m(false)
    }
  }, React.createElement("div", {
    className: _$_.itemBlockIcon,
    style: {
      color: e$color
    }
  }, React.createElement($_13_index.j, {
    type: e$icon
  })), React.createElement("span", null, $_710_index$a$formatMessage({
    id: e$label
  })))
})
var Hv = [
  {
    id: "toolbox-event",
    icon: "icon-toolbox-event",
    label: "event",
    color: "rgb(84, 115, 248)",
    bgColor: "rgba(84, 115, 248,0.2)"
  }, {
    id: "toolbox-control",
    icon: "icon-toolbox-control",
    label: "control",
    color: "#01ADFF",
    bgColor: "rgba(1,173,255,0.2)"
  }, {
    id: "toolbox-feature",
    icon: "icon-toolbox-feature",
    label: "feature",
    color: "rgb(0, 175, 195)",
    bgColor: "rgb(0, 175, 195, 0.2)"
  }, {
    id: "toolbox-operator",
    icon: "icon-toolbox-operation",
    label: "operators",
    color: "#FF844E",
    bgColor: "rgba(255,132,78,0.2)"
  }, {
    id: "toolbox-primitive",
    icon: "icon-toolbox-variable",
    label: "variable",
    color: "#FFBB55",
    bgColor: "rgba(255,187,85,0.2)"
  }, {
    id: "toolbox-array",
    icon: "icon-toolbox-list",
    label: "list",
    color: "#FFC915",
    bgColor: "rgba(255,201,21,0.2)"
  }, {
    id: "toolbox-object",
    icon: "icon-toolbox-object",
    label: "object",
    color: "rgb(160, 115, 255)",
    bgColor: "rgb(160, 115, 255, 0.2)"
  }, {
    id: "toolbox-function",
    icon: "icon-toolbox-function",
    label: "procedures",
    color: "#F78767",
    bgColor: "rgba(247,135,103,0.2)"
  }
]
var Vv = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("div", {
    className: _$_.basicBlockBox
  }, React.createElement("div", {
    className: _$_.categoryTitle
  }, $_710_index$a$formatMessage({
    id: "basicBlock"
  })), React.createElement("div", {
    className: _$_.blockList
  }, Hv.map(function (e) {
    return React.createElement(Uv, Object.assign({
      key: e.id
    }, e))
  })), React.createElement("div", {
    className: _$_.spaceLine
  }))
})
var zv = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.e(function (e) {
    return e.block.isBlockDragDeleteArea
  })
  return React.createElement("div", {
    className: _$_.deleteBlockBox
  }, React.createElement("div", {
    className: N(_$_.deleteTopIconBox, t && _$_.deleteTopIconBoxOff)
  }, React.createElement($_13_index.j, {
    type: "icon-delete-top",
    className: _$_.deleteBlockTopIcon
  })), React.createElement("div", {
    className: _$_.deleteBottomIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-delete-bottom",
    className: _$_.deleteBlockBottomIcon
  })), React.createElement("div", null, $_710_index$a$formatMessage({
    id: "Workspace.blockDragDeleteAreaTips"
  })))
})
var Yv = _React.memo(function () {
  var e = $_16_index.d()
  var t = _React.useRef(null)
  var n = $_16_index.e(function (e) {
    return e.block.isBlockDragDeleteArea
  })
  return React.createElement("div", {
    className: _$_.wrapper,
    onMouseEnter: function () {
      return e($$_$$_$$_$$_src_shared_events_messagesWrapper.ui(true))
    },
    onMouseLeave: function () {
      return e($$_$$_$$_$$_src_shared_events_messagesWrapper.ui(false))
    }
  }, React.createElement("div", {
    className: _$_.basicBlock
  }, React.createElement(Vv, null)), React.createElement("div", {
    className: _$_.widgetTree,
    ref: t
  }, React.createElement(Fv, null)), React.createElement("div", {
    className: N(_$_.deleteBlockPanel, n && _$_.deleteBlockPanelShow)
  }, React.createElement(zv, null)))
})
export { Yv }
