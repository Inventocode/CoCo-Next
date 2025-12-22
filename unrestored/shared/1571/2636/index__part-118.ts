/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-118
 */

"use strict"

import { hb, mb } from "./index__part-94"
import qv from "./88"
import * as Gf from "./77"
import * as /* [auto-meaningful-name] */$_149 from "./149"
import * as Yr from "./53"
import * as Et from "./9"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_223 from "./223"
import /* [auto-meaningful-name] */_$_ from "./223"
var AO = [
  {
    value: Gf.d.TEMPLATE,
    label: "slider.template"
  }, {
    value: Gf.d.IMAGE,
    label: "slider.image"
  }
]
var IO = [
  {
    value: Gf.c.DEFAULT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: _$_.default,
        style: {
          background: e
        }
      }, React.createElement("div", {
        className: _$_.handle,
        style: {
          borderColor: e
        }
      }))
    }
  }, {
    value: Gf.c.PRIMARY,
    renderContent: function (e) {
      return React.createElement("div", {
        className: _$_.primary,
        style: {
          background: e
        }
      }, React.createElement("div", {
        className: _$_.handle,
        style: {
          color: e,
          borderColor: e
        }
      }))
    }
  }
]
var jO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sliderType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var a = $_16_index.e(function (e) {
    return e.resource.resourceLibraryUpdateAt
  })
  var s = e$getValue(n) || Gf.d.TEMPLATE
  var c = e$getValue("mode")
  var l = e$getValue("color")
  var u = e$getValue("handleImageFileId") || $_149.c
  var d = e$getValue("handleImageRatio") || 1.5
  var p = e$getValue("direction") || Gf.b.HORIZONTAL
  var m = e$getValue("handleImageDirection") || Gf.b.HORIZONTAL
  var g = e$getValue("backgroundImageFileId") || $_149.a
  var v = e$getValue("trackImageFileId") || $_149.g
  var b = e$getValue("backgroundImageDirection") || Gf.b.HORIZONTAL
  var y = e$getValue("trackImageDirection") || Gf.b.HORIZONTAL
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var O = $_16_index.d()
  var w = _React.useState("")
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = _React.useState("")
  var R = $_10_index.a(j, 2)
  var k = R[0]
  var x = R[1]
  var D = _React.useState("")
  var M = $_10_index.a(D, 2)
  var L = M[0]
  var P = M[1]
  var B = _React.useState("")
  var F = $_10_index.a(B, 2)
  var G = F[0]
  var W = F[1]
  var U = _React.useState("")
  var H = $_10_index.a(U, 2)
  var V = H[0]
  var K = H[1]
  function q(e) {
    if (e !== s && e$onChange) {
      e$onChange(n, e)
    }
  }
  _React.useEffect(function () {
    var e
    if (te.U(u)) {
      e = u
    } else {
      var t = Et.hb(u)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    P(e || $_149.c)
  }, [u, a])
  _React.useEffect(function () {
    var e
    if (te.U(g)) {
      e = g
    } else {
      var t = Et.hb(g)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || $_149.a
    }
    W(e)
    if (b === Gf.b.VERTICAL) {
      te.gb(e, 90).then(function (e) {
        return x(e)
      }).catch(function () {
        return x("")
      })
    }
  }, [b, g, a])
  _React.useEffect(function () {
    var e
    if (te.U(v)) {
      e = v
    } else {
      var t = Et.hb(v)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || $_149.g
    }
    K(e)
    if (y === Gf.b.VERTICAL) {
      te.gb(e, 90).then(function (e) {
        return A(e)
      }).catch(function () {
        return A("")
      })
    }
  }, [v, y, a])
  return React.createElement($_13_index.i, {
    className: N(_$_.formItemWrapper, _$_.sliderMode, "changeSliderType")
  }, React.createElement("div", {
    className: "coco-form-item coco-form-item-horizontal"
  }, $_710_index$a$formatMessage({
    id: "slider.background"
  }), React.createElement("div", {
    className: _$_.sliderType
  }, AO.map(function (e) {
    return React.createElement("div", {
      key: e.value,
      onClick: q.bind(null, e.value),
      className: N(_$_.typeItem, s === e.value && _$_.active)
    }, $_710_index$a$formatMessage({
      id: e.label
    }))
  }))), s === Gf.d.TEMPLATE && React.createElement("div", {
    className: _$_.templateBox
  }, React.createElement("div", {
    className: _$_.templateMode
  }, React.createElement(hb, {
    value: c,
    modeList: IO,
    onChange: function (e) {
      if (e !== c && e$onChange) {
        e$onChange("mode", e)
      }
    },
    params: [l]
  }, IO.map(function (e) {
    return React.createElement($_13_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(l))
  }))), React.createElement("div", {
    className: _$_.templateColor
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 42,
    keyName: "color",
    onChange: e$onChange,
    color: l
  }))), s === Gf.d.IMAGE && React.createElement("div", {
    className: _$_.imageBox
  }, React.createElement("div", {
    className: _$_.backgroundImage,
    style: {
      width: 254,
      height: 20,
      backgroundImage: "url(".concat(b === Gf.b.HORIZONTAL ? G : k, ")")
    }
  }, React.createElement("div", {
    className: _$_.trackImageBox,
    style: {
      width: 127
    }
  }, React.createElement("div", {
    className: _$_.trackImage,
    style: {
      width: 254,
      backgroundImage: "url(".concat(y === Gf.b.HORIZONTAL ? V : T, ")")
    }
  }))), React.createElement("div", {
    className: N(_$_.handleImage, m === Gf.b.VERTICAL && _$_.rotate),
    style: {
      width: 20 * d,
      height: 20 * d,
      backgroundImage: "url(".concat(L, ")")
    }
  }), React.createElement("div", {
    className: _$_.cover
  }, React.createElement("div", {
    className: _$_.editBtn,
    onClick: function () {
      O($$_$$_$$_$$_src_shared_events_messagesWrapper.Gj({
        visible: true,
        widgetId: e$widgetId,
        direction: p,
        handleImageFileId: Et.hb(u) ? u : $_149.c,
        handleImageRatio: d,
        handleImageDirection: m,
        backgroundImageFileId: Et.hb(g) ? g : $_149.a,
        backgroundImageDirection: b,
        trackImageFileId: Et.hb(v) ? v : $_149.g,
        trackImageDirection: y
      }))
    }
  }, $_710_index$a$formatMessage({
    id: "edit"
  })))))
})
var NO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var r = e$getValue("maxValue")
  var o = e$getValue("minValue")
  var i = e$getValue("step")
  var a = e$getValue("value")
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  function c(e) {
    e$onChange("minValue", Number(e))
  }
  function l(e) {
    e$onChange("maxValue", Number(e))
  }
  function u(e) {
    e$onChange("step", Number(e))
  }
  function d(e) {
    e$onChange("value", Number(e))
  }
  return React.createElement($_13_index.i, {
    className: N(_$_.formItemWrapper, _$_.sliderRangeFormItem, _$_.typeSelector, "changeSliderMode"),
    align: "vertical",
    label: $_710_index$a$formatMessage({
      id: "numberValue"
    })
  }, React.createElement("div", {
    className: N(_$_.firstRow, _$_.row)
  }, React.createElement($_13_index.o, {
    label: $_710_index$a$formatMessage({
      id: "minValue"
    }),
    type: "number",
    defaultValue: o,
    max: a,
    min: Yr.r,
    onBlur: c,
    onStep: c,
    rules: [
      {
        rule: Yr.w(9)
      }
    ]
  }), React.createElement("div", {
    className: _$_.space
  }), React.createElement($_13_index.o, {
    label: $_710_index$a$formatMessage({
      id: "maxValue"
    }),
    type: "number",
    defaultValue: r,
    min: a,
    max: Yr.n,
    onBlur: l,
    onStep: l,
    rules: a >= 0 ? [
      {
        rule: Yr.v
      }, {
        rule: Yr.w(9)
      }
    ] : [
      {
        rule: Yr.w(9)
      }
    ]
  })), React.createElement("div", {
    className: _$_.row
  }, React.createElement($_13_index.o, {
    label: $_710_index$a$formatMessage({
      id: "gap"
    }),
    type: "number",
    defaultValue: i,
    min: 1,
    max: Math.max(r - o, 1),
    onBlur: u,
    onStep: u,
    rules: [
      {
        rule: Yr.v
      }, {
        rule: Yr.w(9)
      }
    ]
  }), React.createElement("div", {
    className: _$_.space
  }), React.createElement($_13_index.o, {
    label: $_710_index$a$formatMessage({
      id: "initialValue"
    }),
    type: "number",
    defaultValue: a,
    onBlur: d,
    onStep: d,
    min: o,
    max: r,
    rules: o >= 0 ? [
      {
        rule: Yr.v
      }, {
        rule: Yr.w(9)
      }
    ] : [
      {
        rule: Yr.w(9)
      }
    ]
  })))
})
var RO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "direction" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n) || Gf.b.HORIZONTAL
  var a = e$getValue("size")
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: N(_$_.formItemWrapper, _$_.sliderDirection, "changeSliderDirection"),
    label: $_710_index$a$formatMessage({
      id: "direction"
    })
  }, React.createElement($_13_index.s, {
    className: N(_$_.radioWrapper, _$_.sizeRadioBox),
    value: i,
    onChange: function (e) {
      if (e !== i) {
        if (e$onChange) {
          e$onChange(n, e)
        }
        if (e === Gf.b.HORIZONTAL) {
          var t = {
            width: a.height,
            height: a.width
          }
          if (e$onChange) {
            e$onChange("size", t)
          }
        }
        if (e === Gf.b.VERTICAL) {
          var o = {
            width: a.height,
            height: a.width
          }
          if (e$onChange) {
            e$onChange("size", o)
          }
        }
      }
    }
  }, React.createElement($_13_index.t, {
    value: Gf.b.HORIZONTAL,
    key: Gf.b.HORIZONTAL
  }, React.createElement($_13_index.j, {
    type: i === Gf.b.HORIZONTAL ? "icon-horizontal-active" : "icon-horizontal",
    className: _$_.alignIcon
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "horizontal"
  }))), React.createElement($_13_index.t, {
    value: Gf.b.VERTICAL,
    key: Gf.b.VERTICAL
  }, React.createElement($_13_index.j, {
    type: i === Gf.b.VERTICAL ? "icon-vertical-active" : "icon-vertical",
    className: _$_.alignIcon
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "vertical"
  })))))
})
var kO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fontSize" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$formConfig$multiple = e$formConfig.multiple
  var s = undefined === e$formConfig$multiple ? 1 : e$formConfig$multiple
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var /* [auto-meaningful-name] */e$formConfig$min = e$formConfig.min
  var /* [auto-meaningful-name] */e$formConfig$max = e$formConfig.max
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var p = e$getValue(n)
  p = Math.ceil(p * s)
  var f = function (e) {
    return te.p(function (e) {
      var t = parseInt(e)
      e$onChange(n, t /= s)
    }, e)
  }
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, "changeFontSize"),
    label: $_710_index$a$formatMessage({
      id: e$formConfig$label || "fontSize"
    })
  }, React.createElement($_13_index.n, {
    className: "coco-number-inputRow",
    style: {
      width: 80
    },
    type: "number",
    min: e$formConfig$min,
    max: e$formConfig$max,
    defaultValue: p,
    onChange: f(200),
    onStep: f(0)
  }))
})
export { jO }
export { NO }
export { RO }
export { kO }
