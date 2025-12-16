/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-145
 */

"use strict"

import { tT } from "./index__part-144"
import /* [auto-meaningful-name] */$_1040 from "./1040"
import qC from "./99"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_440 from "./440"
import /* [auto-meaningful-name] */_$_ from "./440"
var iT = _React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.block.get("editObjectDialog")
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$variable = e.variable
  var /* [auto-meaningful-name] */e$scopeType = e.scopeType
  var o = null === e$variable || undefined === e$variable ? undefined : e$variable.id
  var i = $_16_index.e(function (e) {
    return e.project.globalObjectList
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var s = _React.useRef(null)
  var c = $_238.d()
  var l = _React.useState(false)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = _React.useState(0)
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = _React.useState(0)
  var E = $_10_index.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = _React.useState([])
  var T = $_10_index.a(C, 2)
  var A = T[0]
  var j = T[1]
  var R = _React.useRef(false)
  var D = _React.useRef(0)
  var M = _React.useRef(null)
  _React.useEffect(function () {
    if (c && e$visible) {
      var e = c.objectVariables.concat(i).find(function (e) {
        return e.id === o
      })
      if (e && Lodash.isPlainObject(e.defaultValue)) {
        var n = Lodash.cloneDeep(e.defaultValue)
        var r = Object.entries(n)
        j(r)
      }
    }
  }, [c, i, o, e$visible])
  var L = function (e) {
    var t = 2 * e + O
    setTimeout(function () {
      var /* [auto-meaningful-name] */s$current
      var n = null === (s$current = s.current) || undefined === s$current ? undefined : s$current.querySelectorAll("input")[t]
      if (n) {
        if (R.current) {
          n.select()
        } else {
          n.focus()
        }
        R.current = false
      }
    })
  }
  _React.useEffect(function () {
    if (e$visible) {
      p(false)
      b(0)
      w(0)
      D.current = 0
    }
  }, [e$visible])
  _React.useEffect(function () {
    if (M.current) {
      return tT(M.current.button, function (e, t) {
        var /* [auto-meaningful-name] */M$current
        var /* [auto-meaningful-name] */M$current$button
        var /* [auto-meaningful-name] */t$target
        if (!((null === (M$current = M.current) || undefined === M$current || null === (M$current$button = M$current.button) || undefined === M$current$button ? undefined : M$current$button.contains(t.target)) || "INPUT" === (null === (t$target = t.target) || undefined === t$target ? undefined : t$target.tagName))) {
          D.current = 0
        }
      }, true)
    }
  }, [M.current])
  var P = $_16_index.d()
  _React.useEffect(function () {
    if (e$visible) {
      $_26_index.z.unselectCurrentBlock()
    }
  }, [e$visible])
  var B = function () {
    for (var e = A.map(function (e) {
        return e[0]
      }), t = 1; e.includes("key".concat(t));) {
      t++
    }
    var n = "key".concat(t)
    if (!D.current) {
      A.push([n, ""])
      j($_25_index.a(A))
      b(A.length)
      D.current = 1
      L(A.length)
      return void setTimeout(function () {
        if (s.current) {
          s.current.scrollTop = s.current.scrollHeight
        }
      }, 0)
    }
    A.splice(v + 1, 0, [n, ""])
    j($_25_index.a(A))
    b(v + 1)
    L(v + 1)
    if (v === A.length - 1) {
      setTimeout(function () {
        if (s.current) {
          s.current.scrollTop = s.current.scrollHeight
        }
      }, 0)
    }
  }
  var F = _React.useCallback(function () {
    P($$_$$_$$_$$_src_shared_events_messagesWrapper.ph())
  }, [P])
  var G = _React.useCallback(function () {
    if (e$scopeType && o && c) {
      var e = {}
      A.forEach(function (t) {
        var n = $_10_index.a(t, 2)
        var r = n[0]
        var o = n[1]
        e[r] = o
      })
      P($$_$$_$$_$$_src_shared_events_messagesWrapper.Gg({
        scopeType: e$scopeType,
        id: o,
        key: "defaultValue",
        value: e,
        screenId: c.id
      }))
      F()
    }
  }, [c, P, A, F, o, e$scopeType])
  var W = function (e, t) {
    if ("Enter" === e.key) {
      if (t === A.length - 1) {
        B()
        if (0 === O) {
          R.current = true
        }
      } else {
        b(t + 1)
        L(t + 1)
      }
    }
  }
  return e$variable ? React.createElement($_13_index.f, {
    className: N(qC.editDialog, _$_.container),
    visible: e$visible,
    withPortal: true,
    onClose: F
  }, React.createElement("p", {
    className: qC.dialogTitle
  }, $_710_index$a$formatMessage({
    id: "object.editObjectList"
  })), React.createElement("div", {
    className: qC.summary
  }, React.createElement("span", null, e$variable.name), React.createElement("div", {
    className: qC.count
  }, React.createElement($_13_index.d, {
    onClick: B,
    type: "primary",
    ref: M
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  })))), React.createElement("div", {
    className: N(qC.list, _$_.list),
    ref: s
  }, A.length > 0 ? React.createElement("ul", null, A.map(function (e, t) {
    var n = $_10_index.a(e, 2)
    var r = n[0]
    var o = n[1]
    return React.createElement("li", {
      className: N(_$_.row, k.a({}, _$_.focus, t === v)),
      key: r
    }, React.createElement("div", {
      className: _$_.keyItem
    }, React.createElement("input", {
      type: "text",
      defaultValue: r,
      className: N(_$_.input, k.a({}, _$_.error, d && v === t)),
      onClick: function () {
        D.current = 1
        b(t)
        w(0)
      },
      onBlur: function (e) {
        !function (e, t) {
          var n = [e.target.value, A[t][1]]
          if (d) {
            var r = A[t][0]
            e.target.value = r
          } else {
            A.splice(t, 1, n)
            j($_25_index.a(A))
          }
          p(false)
        }(e, t)
      },
      onChange: function (e) {
        !function (e, t) {
          var /* [auto-meaningful-name] */e$target$value = e.target.value
          var r = A.some(function (e, r) {
            return t !== r && e[0] === e$target$value
          })
          if (r !== d) {
            p(r)
          }
        }(e, t)
      },
      onKeyPress: function (e) {
        W(e, t)
      }
    })), React.createElement("div", {
      className: _$_.valueItem
    }, React.createElement("input", {
      type: "text",
      value: o,
      className: N(_$_.input),
      onBlur: function (e) {
        !function (e, t) {
          var /* [auto-meaningful-name] */e$target$value = e.target.value
          if ("" !== e$target$value) {
            var r = Number(e$target$value)
            if (!isNaN(r)) {
              e$target$value = r
            }
          }
          var o = [A[t][0], e$target$value]
          A.splice(t, 1, o)
          j($_25_index.a(A))
        }(e, t)
      },
      onClick: function () {
        D.current = 1
        b(t)
        w(1)
      },
      onKeyPress: function (e) {
        W(e, t)
      },
      onChange: function (e) {
        A[t][1] = e.target.value
        j($_25_index.a(A))
      }
    })), React.createElement("span", {
      className: _$_.close,
      onClick: function () {
        !function (e) {
          A.splice(e, 1)
          j($_25_index.a(A))
        }(t)
      }
    }, React.createElement($_13_index.j, {
      type: "icon-close"
    })))
  })) : React.createElement("div", {
    className: qC.emptyContent
  }, React.createElement("img", {
    className: qC.image,
    src: $_1040,
    alt: ""
  }), React.createElement("div", {
    className: qC.label
  }, $_710_index$a$formatMessage({
    id: "variableListEmptyContentLabel"
  })))), React.createElement("div", {
    className: _$_.footer
  }, React.createElement("p", {
    className: _$_.tips
  }, d ? $_710_index$a$formatMessage({
    id: "object.keyRepeat"
  }) : ""), React.createElement($_13_index.d, {
    className: _$_.save,
    type: "primary",
    onClick: G,
    disabled: d
  }, $_710_index$a$formatMessage({
    id: "save"
  })))) : null
})
export { iT }
