/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-115
 */

"use strict"

import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_703 from "./703"
import /* [auto-meaningful-name] */$_7031 from "./703"
var uO = te.p(function () {
  var e = document.querySelector(".".concat($_7031.optionsFormItem, " ul li:last-child input"))
  if (e && e instanceof HTMLInputElement) {
    e.focus()
  }
}, 60)
var dO = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "options" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var i = e$getValue(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var s = React1.useRef({})
  var c = $_16_index.e(function (e) {
    return e.common.widgetAttributeVisible
  })
  React1.useEffect(function () {
    var /* [auto-meaningful-name] */s$current = s.current
    if (s$current && c) {
      Object.entries(s$current).forEach(function (e) {
        var t = $_10_index.a(e, 2)[1]
        t.setRows(Math.min(t.getRowCount(), 3))
      })
    }
  }, [c])
  var l = te.p(function (e) {
    e$onChange("options", $_25_index.a(e))
  }, 100)
  function u(e, t) {
    i[e].content = t.target.value
    l($_25_index.a(i))
  }
  function d(e, t) {
    e.target.rows = Math.min(t, 3)
  }
  function p(e, t) {
    t.target.rows = 3
  }
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: N("changeOptions", $_7031.optionsFormItem, $_7031.formItemWrapper)
  }, React.createElement("div", {
    className: $_7031.formTitle
  }, React.createElement("p", null, $_710_index$a$formatMessage({
    id: "radioOptionsContent"
  })), React.createElement("div", {
    className: $_7031.count
  }, React.createElement("span", {
    onClick: function () {
      if (i.length > 1) {
        e$onChange("options", i.slice(0, -1))
      }
    },
    className: N(k.a({}, $_7031.disabled, 1 === i.length))
  }, React.createElement($_13_index.j, {
    type: "icon-minus"
  })), React.createElement("p", null, i.length, $_710_index$a$formatMessage({
    id: "option"
  })), React.createElement("span", {
    onClick: function () {
      if (i.length < 8) {
        e$onChange("options", i.concat({
          content: "",
          state: "none"
        }))
        uO()
      }
    },
    className: N(k.a({}, $_7031.disabled, 8 === i.length))
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  })))), React.createElement("ul", null, i.map(function (e, t) {
    return React.createElement("li", {
      key: t
    }, React.createElement("span", null, t + 1, "."), React.createElement($_13_index.A, {
      ref: function (e) {
        return e && (s.current[t] = e)
      },
      defaultValue: e.content,
      maxLength: 200,
      onFocus: p.bind(null, t),
      onChange: u.bind(null, t),
      onBlur: d
    }))
  })))
})
export { dO }
