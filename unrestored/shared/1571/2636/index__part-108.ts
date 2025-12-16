/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-108
 */

"use strict"

import { rb } from "./index__part-92"
import { lb } from "./index__part-93"
import { mb } from "./index__part-94"
import { _y } from "./index__part-103"
import * as Fp from "./76"
import * as Pp from "./95"
import * as Jd from "./33"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_202 from "./202"
import /* [auto-meaningful-name] */_$_ from "./202"
var yE = [
  {
    value: Fp.c.OUTLINED_NORMAL,
    renderContent: function (e) {
      return React.createElement("div", {
        className: N(_$_.outlineNormal, _$_.modeItem),
        style: {
          borderColor: e
        }
      })
    }
  }, {
    value: Fp.c.CONTAINED_NORMAL,
    renderContent: function (e, t) {
      return React.createElement("div", {
        className: N(_$_.containedNormal, _$_.modeItem),
        style: {
          backgroundColor: t ? e : te.hb(e, .1)
        }
      })
    }
  }, {
    value: Fp.c.CONTAINED_ROUND,
    renderContent: function (e, t) {
      return React.createElement("div", {
        className: N(_$_.containedRound, _$_.modeItem),
        style: {
          background: t ? e : te.hb(e, .1)
        }
      })
    }
  }, {
    value: Fp.c.OUTLINED_FLAT,
    renderContent: function (e, t) {
      return React.createElement("div", {
        className: N(_$_.outlineFlat, _$_.modeItem),
        style: {
          borderColor: e
        }
      })
    }
  }
]
var EE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = e$getValue(n)
  var s = e$getValue("color")
  var c = te.Z(s)
  var l = c ? "coco-option-white" : ""
  return React.createElement($_13_index.i, {
    className: N(_$_.formItemWrapper, _$_.typeSelector, _$_.inputModeSelector, {
      "coco-input-option-white": c
    }, "changeInputMode"),
    label: $_710_index$a$formatMessage({
      id: "style"
    })
  }, React.createElement(lb, {
    value: a,
    params: [s, c],
    modeList: yE,
    onChange: function (e) {
      e$onChange(n, e)
    }
  }, yE.map(function (e) {
    return React.createElement($_13_index.p, {
      key: e.value,
      value: e.value,
      className: l
    }, e.renderContent(s, c))
  })))
})
var OE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n)
  var a = e$getValue("size")
  var s = Object.values(An.s)
  var c = Jd.ob(i)
  var /* [auto-meaningful-name] */c$height = c.height
  var /* [auto-meaningful-name] */c$minWidth = c.minWidth
  var /* [auto-meaningful-name] */c$maxWidth = c.maxWidth
  return React.createElement(rb, {
    sizeType: i,
    sizeTypeList: s,
    width: null === a || undefined === a ? undefined : a.width,
    height: c$height,
    minWidth: c$minWidth,
    maxWidth: c$maxWidth,
    onWidthChange: function (e) {
      !function (e) {
        e$onChange("size", {
          width: e
        })
      }(Math.max(c$minWidth, Math.min(c$maxWidth, Number(e))))
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
      var t = Jd.ob(i)
      e$onChange("size", {
        height: t.height,
        width: Math.max(a.width, t.minWidth)
      })
    }
  })
})
var wE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: _$_.tipsWrapper
  }, React.createElement("div", {
    className: _$_.labelWrapper
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "ListViewerWidget.tips"
  }))), React.createElement("div", {
    className: _$_.content
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(_y, Object.assign({}, e, {
    formConfig: D.a(D.a({}, e.formConfig), {}, {
      emitOnChange: true
    }),
    keyName: "placeholder"
  }))), React.createElement(mb, {
    width: 43,
    keyName: "placeholderColor",
    onChange: e$onChange,
    color: e$getValue("placeholderColor") || Pp.n
  }))), React.createElement("div", {
    className: _$_.valueWrapper
  }, React.createElement("div", {
    className: _$_.labelWrapper
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "ListViewerWidget.input"
  }))), React.createElement("div", {
    className: _$_.content
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement(_y, Object.assign({}, e, {
    keyName: "value",
    formConfig: D.a(D.a({}, e.formConfig), {}, {
      emitOnChange: true
    })
  }))), React.createElement(mb, {
    width: 43,
    keyName: "valueColor",
    onChange: e$onChange,
    color: e$getValue("valueColor") || Pp.o
  }))))
})
export { EE }
export { OE }
export { wE }
