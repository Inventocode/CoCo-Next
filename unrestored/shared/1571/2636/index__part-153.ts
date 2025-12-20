/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-153
 */

"use strict"

import * as /* [auto-meaningful-name] */$_207_index from "./207/index"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as te from "./15"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_320 from "./320"
import /* [auto-meaningful-name] */_$_ from "./320"
var QT = React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = _React.useState($_26_index.f)
  var n = $_10_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  var i = $_16_index.e(function (e) {
    return e.uiConfig.workspace
  }) === K.j.ReadOnly
  var a = $_16_index.e(function (e) {
    return e.common.consoleHeight
  })
  var s = _React.useState({
    undo: true,
    redo: true,
    zoomOut: false,
    zoomIn: false,
    cleanUp: false
  })
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  _React.useEffect(function () {
    function e(e) {
      o(e)
      u({
        undo: l.undo,
        redo: l.redo,
        zoomIn: e >= $_26_index.d,
        zoomOut: e <= $_26_index.e,
        cleanUp: i
      })
    }
    function t(e) {
      var /* [auto-meaningful-name] */e$canUndo = e.canUndo
      var /* [auto-meaningful-name] */e$canRedo = e.canRedo
      u({
        zoomIn: l.zoomIn,
        zoomOut: l.zoomOut,
        undo: !e$canUndo,
        redo: !e$canRedo,
        cleanUp: i
      })
      $_26_index.z.stopWarningAnimation()
    }
    $_26_index.z.eventBus.addEventListener($_207_index.a.WORKSPACE_SCALE_CHANGE, e)
    $_26_index.z.eventBus.addEventListener($_207_index.a.COMMON_BLOCKS, t)
    return function () {
      $_26_index.z.eventBus.removeEventListener($_207_index.a.COMMON_BLOCKS, t)
      $_26_index.z.eventBus.removeEventListener($_207_index.a.WORKSPACE_SCALE_CHANGE, e)
    }
  }, [l.redo, l.undo, l.zoomIn, l.zoomOut, i])
  _React.useEffect(function () {
    u({
      undo: i,
      redo: i,
      cleanUp: i,
      zoomIn: l.zoomIn,
      zoomOut: l.zoomOut
    })
    $_17_index.Blink.context_menu.set_disabled(i)
  }, [i, l.zoomIn, l.zoomOut])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */$_17_index$Blink$mainWorkspace$clean_up = $_17_index.Blink.mainWorkspace.clean_up
    $_17_index.Blink.mainWorkspace.clean_up = function () {
      $_17_index$Blink$mainWorkspace$clean_up.call(this, $_17_index.vec2.fromValues(100, 50))
    }
  }, [])
  var d = function (e) {
    if (!("undo" !== e || l.undo)) {
      $_17_index.Blink.mainWorkspace.undo()
    }
    if (!("redo" !== e || l.redo)) {
      $_17_index.Blink.mainWorkspace.undo(true)
    }
  }
  var p = [.5, .75, 1, 1.25, 1.5, 1.75, 2]
  var m = function (e) {
    var t = $_17_index.Blink.mainWorkspace.get_scale()
    var n = Math.round(t / $_26_index.f * 100) / 100
    var r = "inc" === e ? p.filter(function (e) {
      return e > n
    }) : p.filter(function (e) {
      return e < n
    })
    var o = te.z(n, r)
    if (null != o) {
      o *= $_26_index.f
      $_17_index.Blink.mainWorkspace.set_scale(o)
    }
  }
  return React.createElement("div", {
    className: _$_.wrapper,
    style: {
      bottom: a + 18
    }
  }, React.createElement("div", {
    className: _$_.undoRedoWrapper
  }, React.createElement($_748_index.a, {
    placement: "top",
    title: $_710_index$a$formatMessage({
      id: "BlockEditor.undo"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: _$_.iconWrapper,
    onClick: function () {
      d("undo")
    }
  }, React.createElement($_13_index.j, {
    type: "icon-undo",
    className: N(_$_.icon, _$_.undo, l.undo && _$_.disable)
  }))), React.createElement($_748_index.a, {
    placement: "top",
    title: $_710_index$a$formatMessage({
      id: "BlockEditor.redo"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: _$_.iconWrapper,
    onClick: function () {
      if (!l.redo) {
        d("redo")
      }
    }
  }, React.createElement($_13_index.j, {
    type: "icon-undo",
    className: N(_$_.icon, _$_.redo, l.redo && _$_.disable)
  })))), React.createElement("div", {
    className: _$_.zoomWrapper
  }, React.createElement($_748_index.a, {
    placement: "top",
    title: $_710_index$a$formatMessage({
      id: "BlockEditor.dec"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: _$_.iconWrapper,
    onClick: function () {
      if (!l.zoomOut) {
        m("dec")
      }
    }
  }, React.createElement($_13_index.j, {
    type: "icon-zoom-out",
    className: N(_$_.icon, l.zoomOut && _$_.disable)
  }))), React.createElement($_748_index.a, {
    placement: "top",
    title: $_710_index$a$formatMessage({
      id: "BlockEditor.percent"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: _$_.percent,
    onClick: function () {
      if ($_17_index.Blink.mainWorkspace.get_scale() !== $_26_index.f) {
        $_17_index.Blink.mainWorkspace.set_scale($_26_index.f)
      }
    }
  }, "".concat(te.eb(r, $_26_index.f, 0), "%"))), React.createElement($_748_index.a, {
    placement: "top",
    title: $_710_index$a$formatMessage({
      id: "BlockEditor.inc"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: _$_.iconWrapper,
    onClick: function () {
      if (!l.zoomIn) {
        m("inc")
      }
    }
  }, React.createElement($_13_index.j, {
    type: "icon-zoom-in",
    className: N(_$_.icon, l.zoomIn && _$_.disable)
  })))), React.createElement("div", {
    className: _$_.cleanUpWrapper,
    onClick: function () {
      if (!l.cleanUp) {
        $_17_index.Blink.mainWorkspace.clean_up($_17_index.vec2.fromValues(100, 50))
      }
    }
  }, React.createElement($_748_index.a, {
    placement: "top",
    title: $_710_index$a$formatMessage({
      id: "BlockEditor.cleanup"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("span", {
    className: _$_.iconWrapper
  }, React.createElement($_13_index.j, {
    type: "icon-clean-up",
    className: N(_$_.icon, l.cleanUp && _$_.disable)
  })))))
})
export { QT }
