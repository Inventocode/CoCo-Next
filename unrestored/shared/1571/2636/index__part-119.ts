/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-119
 */

"use strict"

import { Zv } from "./index__part-91"
import qv from "./88"
import * as /* [auto-meaningful-name] */$_144 from "./144"
import * as /* [auto-meaningful-name] */$_215 from "./215"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Yr from "./53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import * as D from "./6"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useCallback, useMemo, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_397 from "./397"
import /* [auto-meaningful-name] */$_3971 from "./397"
var MO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "rotation" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$label = e.formConfig.label
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var s = e$getValue(n)
  var c = 180 * s / Math.PI % 360
  if (c > 180) {
    c -= 360
  }
  if (c <= -180) {
    c += 360
  }
  c = Math.round(c)
  var l = useState(true)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper),
    label: $_710$a$formatMessage({
      id: e$formConfig$label
    })
  }, React.createElement($_13_index.k, {
    className: $_3971.inputRow,
    type: "number",
    defaultValue: c,
    style: {
      width: 60
    },
    after: d && React.createElement("span", {
      className: $_3971.mask
    }, React.createElement("span", {
      className: $_3971.text
    }, c), React.createElement("span", {
      className: $_3971.symbol
    }, "°")),
    onBlur: function (e, t) {
      var r = Number(e)
      var i = (r %= 360) / 180 * Math.PI
      e$onChange(n, i)
      p(true)
    },
    onFocus: function () {
      p(false)
    },
    dependency: s
  }))
})
var LO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "flipped" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$label = e.formConfig.label
  var a = undefined === e$formConfig$label ? "flip" : e$formConfig$label
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var c = e$getValue(n) || {}
  var l = function (e) {
    e$onChange(n, D.a(D.a({}, c), {}, k.a({}, e, !c[e])))
    var t = e$getValue("id")
    var i = e$getValue("parentId")
    var a = e$getValue("type")
    if (t && i && a === $$_$$_$$_$$_src_editor_widget_builtIn_types.a) {
      setTimeout(function () {
        var e = $_215.b(i)
        var n = (null === e || undefined === e ? undefined : e.actors.get_actor(t)) || {}
        var /* [auto-meaningful-name] */n$is_error = n.is_error
        var /* [auto-meaningful-name] */n$value = n.value
        if (n$is_error && n$value && !n$is_error(n$value)) {
          var s = n$value.get_position()
          var c = n$value.get_center_position()
          var l = {
            x: Math.round(c.x - s.x),
            y: Math.round(c.y - s.y)
          }
          e$onChange("pivotToCenter", D.a({}, l))
        }
      }, 60)
    }
  }
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: "".concat(qv.formItemWrapper, " ").concat(qv.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, $_710$a$formatMessage({
    id: a
  })), React.createElement("div", {
    className: qv.formInputNumberRow
  }, React.createElement($_13_index.i, null, React.createElement(Zv, {
    hasIcon: true,
    className: c.horizontal ? qv.selected : "",
    onClick: l.bind(undefined, "horizontal")
  }, React.createElement("span", {
    className: qv.btnIcon
  }, React.createElement($_13_index.j, {
    type: "icon-actor-horizontal"
  })), $_710$a$formatMessage({
    id: "horizontal"
  }))), React.createElement($_13_index.i, null, React.createElement(Zv, {
    hasIcon: true,
    className: c.vertical ? qv.selected : "",
    onClick: l.bind(undefined, "vertical")
  }, React.createElement("span", {
    className: qv.btnIcon
  }, React.createElement($_13_index.j, {
    type: "icon-actor-vertical"
  })), $_710$a$formatMessage({
    id: "vertical"
  })))))
})
var PO = [[$_144.e, $_144.c], [$_144.e, $_144.c]]
var BO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "scaleAndLock" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$scaleRange = e$formConfig.scaleRange
  var s = undefined === e$formConfig$scaleRange ? PO : e$formConfig$scaleRange
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var l = undefined === e$formConfig$label ? "actorScale" : e$formConfig$label
  var /* [auto-meaningful-name] */e$formConfig$multiple = e$formConfig.multiple
  var d = undefined === e$formConfig$multiple ? 100 : e$formConfig$multiple
  var p = {
    x: 1,
    y: 1,
    ratio: 1
  }
  var m = e$getValue("scale")
  var g = e$getValue(n) || (undefined !== m ? {
    x: m,
    y: m,
    ratio: false
  } : p)
  var _ = g.x
  var v = g.y
  var b = g.ratio || false
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var E = useRef({})
  var O = useCallback(function () {
    var /* [auto-meaningful-name] */E$current = E.current
    if (E$current && (undefined !== E$current.x || undefined !== E$current.y)) {
      e$onChange(n, E$current)
      E.current = {}
      var t = e$getValue("id")
      var i = e$getValue("parentId")
      var a = e$getValue("type")
      if (t && i && "scaleAndLock" === n && a === $$_$$_$$_$$_src_editor_widget_builtIn_types.a) {
        setTimeout(function () {
          var e = $_215.b(i)
          var n = (null === e || undefined === e ? undefined : e.actors.get_actor(t)) || {}
          var /* [auto-meaningful-name] */n$is_error = n.is_error
          var /* [auto-meaningful-name] */n$value = n.value
          if (n$is_error && n$value && !n$is_error(n$value)) {
            var s = n$value.get_position()
            var c = n$value.get_center_position()
            var l = {
              x: c.x - s.x,
              y: c.y - s.y
            }
            e$onChange("pivotToCenter", D.a({}, l))
          }
        }, 60)
      }
    }
  }, [e$getValue, e$onChange, n])
  var w = useMemo(function () {
    return Lodash.debounce(O, 50)
  }, [O])
  var C = useCallback(function (e, t, n) {
    var r = k.a({}, t, parseInt(n || "1") / d)
    if (b) {
      if ("x" === t) {
        r.y = r.x / b
        if (r.y > $_144.c) {
          r.y = $_144.c
          r.x = r.y * b
        }
        if (r.y < $_144.e) {
          r.y = $_144.e
          r.x = r.y * b
        }
      }
      if ("y" === t) {
        r.x = r.y * b
        if (r.x > $_144.c) {
          r.x = $_144.c
          r.y = r.x / b
        }
        if (r.x < $_144.e) {
          r.x = $_144.e
          r.y = r.x / b
        }
      }
    }
    var /* [auto-meaningful-name] */E$current = E.current
    E.current = D.a(D.a(D.a({}, g), E$current), r)
    e()
  }, [d, b, g])
  var T = useMemo(function () {
    return C.bind(undefined, w, "x")
  }, [C, w])
  var S = useMemo(function () {
    return C.bind(undefined, w, "y")
  }, [C, w])
  useEffect(function () {
    if (undefined === e$getValue(n)) {
      e$onChange(n, p)
    }
  }, [])
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: "".concat(qv.formItemWrapper, " ").concat(qv.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, $_710$a$formatMessage({
    id: l
  })), React.createElement("div", {
    className: qv.formInputNumberRow
  }, React.createElement($_13_index.i, {
    className: N("changeWidth", $_3971.formItem)
  }, React.createElement($_13_index.o, {
    label: $_710$a$formatMessage({
      id: "width"
    }),
    defaultValue: Math.round(_ * d),
    type: "number",
    min: s[0][0] * d,
    max: s[0][1] * d,
    rules: [
      {
        rule: Yr.w(9)
      }, {
        rule: Yr.v
      }
    ],
    className: "".concat(qv.justifyInputContent, " coco-number-inputRow"),
    onChange: T,
    onStep: C.bind(undefined, O, "x")
  }), React.createElement("span", {
    className: $_3971.placeholder
  }, Math.round(_ * d), "%")), React.createElement("div", {
    className: $_3971.lockWrapper,
    onClick: function () {
      e$onChange(n, D.a(D.a({}, g), {}, {
        ratio: !b && g.x / g.y
      }))
    }
  }, React.createElement($_13_index.j, {
    type: false === b ? "icon-unlocked" : "icon-locked"
  })), React.createElement($_13_index.i, {
    className: N("changeHeight", $_3971.formItem)
  }, React.createElement($_13_index.o, {
    label: $_710$a$formatMessage({
      id: "height"
    }),
    defaultValue: Math.round(v * d),
    type: "number",
    min: s[1][0] * d,
    max: s[1][1] * d,
    rules: [
      {
        rule: Yr.w(9)
      }, {
        rule: Yr.v
      }
    ],
    className: "".concat(qv.justifyInputContent, " coco-number-inputRow"),
    onChange: S,
    onStep: C.bind(undefined, O, "y")
  }), React.createElement("span", {
    className: $_3971.placeholder
  }, Math.round(v * d), "%"))))
})
export { MO }
export { LO }
export { BO }
