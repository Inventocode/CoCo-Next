/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-144
 */

"use strict"

import qC from "./99"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as te from "./15"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1040 from "./1040"
import /* [auto-meaningful-name] */$_10401 from "./1040"
var eT = new Map()
function tT(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2]
  if (e) {
    eT.set(e.nodeName, t)
    if ("undefined" !== typeof document) {
      document.addEventListener("click", function (r) {
        if (n) {
          t(e, r)
        } else {
          if (!e.contains(r.target)) {
            t(e, r)
          }
        }
      })
    }
    return function () {
      eT.delete(e)
    }
  }
}
var nT = React1.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.block.get("editArrayDialog")
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$array = e.array
  var /* [auto-meaningful-name] */e$arrayType = e.arrayType
  var o = React1.useState([])
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = React1.useState(0)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React1.useRef(1)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var g = React1.useRef(null)
  var v = React1.useRef(null)
  var b = $_16_index.d()
  var y = $_238.d()
  React1.useEffect(function () {
    if (e$array) {
      s($_25_index.a(e$array.defaultValue))
      d(e$array.defaultValue.length)
    }
  }, [e$array])
  React1.useEffect(function () {
    var e
    if (v.current) {
      e = tT(v.current.button, function (e, t) {
        var /* [auto-meaningful-name] */t$target
        if ("INPUT" !== (null === (t$target = t.target) || undefined === t$target ? undefined : t$target.tagName)) {
          p.current = 0
        }
      })
    }
    return e && e()
  }, [])
  React1.useEffect(function () {
    var /* [auto-meaningful-name] */g$current
    if (e$visible) {
      if (!(null === (g$current = g.current) || undefined === g$current)) {
        g$current.focus()
      }
      $_26_index.z.unselectCurrentBlock()
    }
  }, [e$visible])
  var E = function (e) {
    d(e)
  }
  var O = React1.useCallback(function (e) {
    var t = Number(e) - a.length
    if (t > 0) {
      for (var n = 0; n < t; n++) {
        a.push("")
      }
    } else {
      a.splice(Number(e), a.length)
    }
    s($_25_index.a(a))
    d(a.length)
    p.current = 0
  }, [a])
  var w = function (e, t) {
    if (13 === t.keyCode) {
      var n = e + 1
      a.splice(n, 0, "")
      s($_25_index.a(a))
      E(n + 1)
      setTimeout(function () {
        var e = document.querySelectorAll(".".concat(qC.list, " input"))[n]
        if (!(null === e || undefined === e)) {
          e.focus()
        }
      }, 0)
    }
  }
  React1.useLayoutEffect(function () {
    if (p.current) {
      var e = document.querySelectorAll(".".concat(qC.list, " input"))[u - 1]
      if (!(null === e || undefined === e)) {
        e.focus()
      }
    }
  }, [u])
  var C = React1.useCallback(function (e) {
    a.splice(e, 1)
    s($_25_index.a(a))
    d(a.length)
    p.current = 0
  }, [a])
  var T = React1.useCallback(function (e, t) {
    a.splice(e, 1, t)
    s($_25_index.a(a))
  }, [a])
  var A = React1.useCallback(function () {
    b($$_$$_$$_$$_src_editor_redux_common_actions.oh())
  }, [b])
  var j = React1.useCallback(function () {
    p.current = 0
    if (e$array && y) {
      var e = []
      a.forEach(function (t) {
        if ("string" === typeof t) {
          e.push(te.mb(t))
        } else {
          e.push(t)
        }
      })
      var /* [auto-meaningful-name] */e$array$id = e$array.id
      b($$_$$_$$_$$_src_editor_redux_common_actions.yg(e$arrayType || K.i.SCREEN, e$array$id, "defaultValue", e, y.id))
    }
    A()
  }, [e$array, y, A, a, b, e$arrayType])
  React1.useEffect(function () {
    function e(e) {
      var /* [auto-meaningful-name] */e$clipboardData
      var n = null === (e$clipboardData = e.clipboardData) || undefined === e$clipboardData ? undefined : e$clipboardData.getData("text")
      if (n) {
        n.split("\n").forEach(function (e, t) {
          T(t, e)
        })
      }
    }
    if (e$visible && 0 === a.length) {
      document.body.addEventListener("paste", e)
    }
    return function () {
      document.body.removeEventListener("paste", e)
    }
  }, [e$visible, T, a])
  return React.createElement($_13_index.f, {
    className: N(qC.editListDialog, qC.editDialog),
    visible: e$visible,
    withPortal: true,
    onClose: A
  }, React.createElement("p", {
    className: qC.dialogTitle
  }, $_710_index$a$formatMessage({
    id: "editVariableList"
  })), React.createElement("div", {
    className: qC.summary
  }, React.createElement("span", null, null === e$array || undefined === e$array ? undefined : e$array.name), React.createElement("div", {
    className: qC.count
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "itemCount"
  })), React.createElement($_13_index.k, {
    type: "number",
    min: 0,
    max: 1e3,
    onBlur: O,
    ref: g,
    className: qC.input,
    defaultValue: a.length || "0",
    dependency: a.length.toString()
  }), React.createElement($_13_index.d, {
    onClick: function () {
      if (!p.current) {
        a.push("")
        s($_25_index.a(a))
        E(a.length)
        return void (p.current = 1)
      }
      p.current = 1
      if (a.length < 1e3) {
        var e = u + 1
        a.splice(u, 0, "")
        s($_25_index.a(a))
        E(e)
      }
    },
    type: "primary",
    ref: v
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  })))), React.createElement("div", {
    className: qC.list
  }, a.length > 0 ? React.createElement("ul", null, a.map(function (e, t) {
    return React.createElement("li", {
      className: qC.listItem,
      key: t
    }, React.createElement($_13_index.k, {
      type: "text",
      before: React.createElement("div", {
        className: qC.inputLabel
      }, t + 1),
      after: React.createElement("div", {
        className: qC.inputClose,
        onClick: C.bind(null, t)
      }, "x"),
      onClick: function (e) {
        e.currentTarget.select()
        p.current = 1
        E(t + 1)
      },
      className: qC.listInput,
      defaultValue: e,
      onBlur: T.bind(null, t),
      dependency: a.length.toString(),
      onKeyDown: w.bind(null, t)
    }))
  })) : React.createElement("div", {
    className: qC.emptyContent
  }, React.createElement("img", {
    className: qC.image,
    src: $_10401,
    alt: ""
  }), React.createElement("div", {
    className: qC.label
  }, $_710_index$a$formatMessage({
    id: "variableListEmptyContentLabel"
  })))), React.createElement($_13_index.d, {
    className: qC.save,
    type: "primary",
    onClick: j
  }, $_710_index$a$formatMessage({
    id: "save"
  })))
})
export { tT }
export { nT }
