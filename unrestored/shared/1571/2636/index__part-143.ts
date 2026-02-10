/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-143
 */

"use strict"

import * as /* [auto-meaningful-name] */$_47_index from "./47/index"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect, useCallback } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1205_index from "./1205/index"
import * as /* [auto-meaningful-name] */$_1058_index from "./1058/index"
import * as /* [auto-meaningful-name] */$_1022_index from "./1022/index"
import * as KC from "./99"
import qC from "./99"
import * as /* [auto-meaningful-name] */$_301_index from "./301/index"
var QC = ["addPrimitiveVariableName", "addArrayVariableName", "object.createNewObject", "addDocKey"]
var ZC = memo(function () {
  var e = useSelector(function (e) {
    return e.block.get("createVariableDialog")
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$validators = e.validators
  var /* [auto-meaningful-name] */e$onConfirm = e.onConfirm
  var /* [auto-meaningful-name] */e$tips = e.tips
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var c = useState("")
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState("")
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = useState(false)
  var y = $_10_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useState(K.i.GLOBAL)
  var T = $_10_index.a(w, 2)
  var A = T[0]
  var j = T[1]
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var k = useRef(null)
  var x = useRef(true)
  var D = useSelector(function (e) {
    return e.project.currentScreenIndex
  })
  var M = useDispatch()
  useEffect(function () {
    if (e$visible) {
      setTimeout(function () {
        var /* [auto-meaningful-name] */k$current
        if (!(null === (k$current = k.current) || undefined === k$current)) {
          k$current.focus()
        }
      }, 0)
    }
  }, [e$visible])
  var L = useCallback(function (e) {
    var t = ""
    if (e) {
      if (e$validators && x.current) {
        var n
        var r = $_47_index.a(e$validators)
        try {
          for (r.s(); !(n = r.n()).done;) {
            var /* [auto-meaningful-name] */n$value = n.value
            if (!n$value.validator(e, A)) {
              t = n$value.message
              break
            }
          }
        } catch (a) {
          r.e(a)
        } finally {
          r.f()
        }
        d(t)
      }
    } else {
      d("")
    }
    v(e)
  }, [e$validators, A])
  var P = useCallback(function () {
    v("")
    d("")
    j(K.i.GLOBAL)
    M($$_$$_$$_$$_src_editor_redux_common_actions.lh())
    if (e$onClose) {
      e$onClose()
    }
  }, [M, e$onClose])
  var B = useCallback(function (e) {
    if (E && !e) {
      d($_710$a$formatMessage({
        id: "invalidVariableName"
      }))
    }
  }, [$_710$a$formatMessage, E])
  var F = useCallback(function () {
    if (!u && g) {
      if (e$onConfirm) {
        e$onConfirm(g, A)
      }
      P()
    }
  }, [P, g, e$onConfirm, A, u])
  var G = function () {
    O(true)
  }
  var W = function () {
    O(false)
  }
  var U = useCallback(function () {
    x.current = false
  }, [])
  var H = useCallback(function (e) {
    x.current = true
    var /* [auto-meaningful-name] */e$target$value = e.target.value
    L(e$target$value)
  }, [L])
  var V = function (e) {
    j(e)
    var t = ""
    if (g && e$validators) {
      var n
      var r = $_47_index.a(e$validators)
      try {
        for (r.s(); !(n = r.n()).done;) {
          var /* [auto-meaningful-name] */n$value = n.value
          if (!n$value.validator(g, e)) {
            t = n$value.message
            break
          }
        }
      } catch (a) {
        r.e(a)
      } finally {
        r.f()
      }
    }
    d(t)
  }
  var q = ""
  var X = ""
  switch (e$title) {
    case "addPrimitiveVariableName":
      q = $_710$a$formatMessage({
        id: "screenVariable"
      })
      X = $_710$a$formatMessage({
        id: "globalVariable"
      })
      break
    case "addArrayVariableName":
      q = $_710$a$formatMessage({
        id: "screenArray"
      })
      X = $_710$a$formatMessage({
        id: "globalArray"
      })
      break
    case "object.createNewObject":
      q = $_710$a$formatMessage({
        id: "object.screenObject"
      })
      X = $_710$a$formatMessage({
        id: "object.globalObject"
      })
  }
  return React.createElement($_13_index.f, {
    visible: e$visible,
    className: N(qC.nameDialog),
    withPortal: true,
    onClose: P
  }, React.createElement($_188.a, {
    useCapture: true
  }, React.createElement($_188.b, {
    keys: "enter",
    callback: F
  })), React.createElement("p", {
    className: qC.dialogTitle
  }, QC.includes(e$title) ? $_710$a$formatMessage({
    id: e$title
  }) : $_710$a$formatMessage({
    id: "addCurrentScreenIndexTitle"
  }, {
    currentScreenIndex: D + 1
  })), React.createElement("div", {
    className: N(qC.inputWrapper, u && qC.inputWaringWrapper)
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "name"
  })), React.createElement($_13_index.k, {
    ref: k,
    warning: !!u,
    onChange: L,
    onBlur: B,
    onCompositionStart: U,
    onCompositionEnd: H,
    value: g,
    isTrimmed: true,
    placeholder: e$placeholder
  }), u && React.createElement("div", {
    className: qC.warningTips
  }, " ", u)), ("addPrimitiveVariableName" === e$title || "addArrayVariableName" === e$title || "object.createNewObject" === e$title) && React.createElement("div", {
    className: qC.inputWrapper
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "property"
  })), React.createElement("div", {
    className: qC.propertyBox,
    onMouseUp: G,
    onMouseDown: W
  }, React.createElement($_13_index.d, {
    shape: "square",
    icon: "icon-style-selected",
    className: A === K.i.GLOBAL ? qC.active : "",
    onClick: V.bind(null, K.i.GLOBAL)
  }, X), React.createElement($_13_index.d, {
    shape: "square",
    icon: "icon-style-selected",
    className: A === K.i.SCREEN ? qC.active : "",
    onClick: V.bind(null, K.i.SCREEN)
  }, React.createElement("div", {
    style: {
      display: " inline-block",
      position: "relative",
      marginRight: "4px"
    }
  }, React.createElement($_13_index.j, {
    className: "coco-iconfont-screen-bg",
    type: D > 8 ? "icon-screen-variable-plus" : "icon-screen-variable"
  }), React.createElement("span", {
    style: {
      position: "absolute",
      transform: "scale(0.5)",
      fontFamily: "sans-serif",
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      top: D > 8 ? "-3px" : "-2px",
      fontSize: 16,
      color: "#fff"
    }
  }, D + 1)), React.createElement("span", null, q)))), React.createElement("div", {
    className: qC.confirmBox,
    onMouseUp: G,
    onMouseDown: W
  }, React.createElement($_13_index.d, {
    onClick: P
  }, $_710$a$formatMessage({
    id: "cancel"
  })), React.createElement($_13_index.d, {
    onClick: F,
    type: "primary",
    disabled: !!u || !g
  }, $_710$a$formatMessage({
    id: "confirm"
  }))), e$tips && React.createElement("span", {
    className: qC.bottomTips
  }, e$tips))
})
export { ZC }
