/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-109
 */

"use strict"

import { $v } from "./index__part-91"
import { nb } from "./index__part-92"
import { hb, mb } from "./index__part-94"
import { fy } from "./index__part-102"
import { gy } from "./index__part-103"
import /* [auto-meaningful-name] */$_202 from "./202"
import /* [auto-meaningful-name] */$_747 from "./747"
import qv from "./88"
import * as Fp from "./76"
import * as Pp from "./95"
import * as Qu from "./60"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Yr from "./53"
import * as Tn from "./68"
import * as Et from "./9"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import /* [auto-meaningful-name] */Color from "color"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_539 from "./539"
var TE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fontSize" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$width = e.width
  var s = undefined === e$width ? 74 : e$width
  var /* [auto-meaningful-name] */e$rules = e.rules
  var /* [auto-meaningful-name] */e$formConfig$multiple = e$formConfig.multiple
  var u = undefined === e$formConfig$multiple ? 1 : e$formConfig$multiple
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var /* [auto-meaningful-name] */e$formConfig$min = e$formConfig.min
  var /* [auto-meaningful-name] */e$formConfig$max = e$formConfig.max
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var g = Math.ceil(e$value * u)
  var _ = function (e) {
    return te.p(function (e) {
      var t = parseInt(e)
      e$onChange(n, t /= u)
    }, e)
  }
  return React.createElement($_539.a, {
    label: $_710_index$a$formatMessage({
      id: e$formConfig$label
    }),
    className: "coco-number-inputRow",
    style: {
      width: s
    },
    type: "number",
    min: e$formConfig$min,
    max: e$formConfig$max,
    rules: e$rules,
    defaultValue: g,
    onChange: _(200),
    onStep: _(0)
  })
})
var SE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("div", {
    className: N($_202.formItemWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_202.labelWrapper
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "text"
  }) + $_710_index$a$formatMessage({
    id: "setting"
  }))), React.createElement("div", {
    className: $_202.fontWrapper
  }, React.createElement("div", {
    className: $_202.fontFamily
  }, React.createElement(fy, {
    keyName: "fontFamily",
    onChange: e$onChange,
    fontFamily: e$getValue("fontFamily") || Pp.f
  })), React.createElement("div", {
    className: $_202.fontSize
  }, React.createElement(TE, {
    keyName: "fontSize",
    onChange: e$onChange,
    formConfig: D.a(D.a({}, e.formConfig), {}, {
      label: "fontSize",
      max: Yr.l,
      min: Yr.p
    }),
    value: e$getValue("fontSize") || Pp.g,
    rules: [
      {
        rule: Yr.w(4)
      }, {
        rule: Yr.v
      }
    ],
    width: 86
  }))), React.createElement("div", {
    className: $_202.alignWrapper
  }, React.createElement(gy, {
    keyName: "textAlign",
    onChange: e$onChange,
    textAlign: e$getValue("textAlign") || "left"
  })))
})
var AE = function (e) {
  return React.createElement("div", {
    className: $_202.backgroundTypeWrapper
  }, React.createElement("div", {
    className: $_202.backgroundTypeItem,
    style: e
  }, React.createElement("div", null)))
}
var IE = [
  {
    value: Fp.c.OUTLINED_NORMAL,
    renderContent: function (e) {
      return AE({
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "4px",
        border: "2px solid ".concat(Color(e).alpha(.5).toString())
      })
    }
  }, {
    value: Fp.c.CONTAINED_NORMAL,
    renderContent: function (e) {
      return AE({
        background: Color(e).alpha(.14).toString(),
        borderRadius: "4px"
      })
    }
  }, {
    value: Fp.c.CONTAINED_ROUND,
    renderContent: function (e) {
      return AE({
        background: Color(e).alpha(.14).toString(),
        borderRadius: "14px"
      })
    }
  }, {
    value: Fp.c.OUTLINED_FLAT,
    renderContent: function (e) {
      return AE({
        borderBottom: "2px solid ".concat(Color(e).alpha(.5).toString())
      })
    }
  }
]
var jE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = e$getValue("backgroundColor") || Pp.c
  var i = e$getValue("backgroundMode") || Fp.a.TEMPLATE
  var a = e$getValue("templateMode") || Fp.c.OUTLINED_NORMAL
  var s = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var c = $_16_index.d()
  var l = e$getValue("backgroundImage") || Pp.a
  return React.createElement("div", {
    className: N($_202.formItemWrapper, $_202.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_202.backgroundLabel
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "background"
  })), React.createElement("div", {
    className: $_202.modeActionWrapper
  }, React.createElement("div", {
    className: N($_202.modeTemplate, i === Fp.a.TEMPLATE && $_202.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Fp.a.TEMPLATE)
    }
  }, $_710_index$a$formatMessage({
    id: "template"
  })), React.createElement("div", {
    className: N($_202.modeImage, i === Fp.a.IMAGE && $_202.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", Fp.a.IMAGE)
    }
  }, $_710_index$a$formatMessage({
    id: "image"
  })))), i === Fp.a.TEMPLATE && React.createElement("div", {
    className: $_202.backgroundWrapper
  }, React.createElement("div", {
    className: $_202.templateMode
  }, React.createElement(hb, {
    modeList: IE,
    value: a,
    onChange: function (e) {
      e$onChange("templateMode", e)
    },
    params: [o]
  }, IE.map(function (e) {
    return React.createElement($_13_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(o))
  }))), React.createElement("div", {
    className: $_202.templateColor
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: "backgroundColor",
    onChange: e$onChange,
    color: o
  }))), i === Fp.a.IMAGE && React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_202.backgroundWrapper
  }, React.createElement(nb, {
    onUploadFileChange: function (e) {
      if (e && s) {
        c($$_$$_$$_$$_src_editor_redux_common_actions.Zf(e, function (e) {
          c($$_$$_$$_$$_src_editor_redux_common_actions.Yf(e[0], s))
        }))
      }
    },
    onResourceLibraryClick: function () {
      c($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (e) {
        var t = e[0]
        if (s) {
          c($$_$$_$$_$$_src_editor_redux_common_actions.Yf(t, s))
        }
        c($$_$$_$$_$$_src_editor_redux_common_actions.sh())
      }))
    },
    fileId: Et.hb(l) ? l : Pp.a,
    style: {
      height: 90,
      padding: "12px"
    }
  })), React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, React.createElement($_13_index.s, {
    className: N($_202.radioWrapper, $_202.sizeRadioBox),
    value: e$getValue("imageResizeMode") || Fp.b.CONTAIN,
    onChange: function (e) {
      e$onChange("imageResizeMode", e)
    }
  }, React.createElement($_13_index.t, {
    value: Fp.b.CONTAIN
  }, React.createElement($_13_index.j, {
    type: "icon-contain"
  }), $_710_index$a$formatMessage({
    id: "".concat(Fp.b.CONTAIN)
  })), React.createElement($_13_index.t, {
    value: Fp.b.STRETCH
  }, React.createElement($_13_index.j, {
    type: "icon-stretch"
  }), $_710_index$a$formatMessage({
    id: "".concat(Fp.b.STRETCH)
  }))))))
})
var NE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fileId" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var /* [auto-meaningful-name] */e$formConfig$stillImageShowResizeMode = e$formConfig.stillImageShowResizeMode
  var /* [auto-meaningful-name] */e$formConfig$label = e$formConfig.label
  var l = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var u = $_16_index.d()
  var d = e$getValue(n)
  var p = Et.hb(d)
  var f = (null === p || undefined === p ? undefined : p.source) || (null === p || undefined === p ? undefined : p.cdnUrl)
  var m = e$getValue("resizeMode")
  var g = e$formConfig$stillImageShowResizeMode || f
  return React.createElement(React.Fragment, null, React.createElement($_13_index.i, {
    className: N($_747.formItemWrapper, $_747.changeImageWrapper),
    align: "vertical",
    label: $_710_index$a$formatMessage({
      id: e$formConfig$label || "image"
    })
  }, React.createElement(nb, {
    onUploadFileChange: function (e) {
      if (e && l) {
        u($$_$$_$$_$$_src_editor_redux_common_actions.Zf(e, function (e) {
          u($$_$$_$$_$$_src_editor_redux_common_actions.Yf(e[0], l))
        }))
      }
    },
    onResourceLibraryClick: function () {
      u($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (e) {
        var t = e[0]
        if (l) {
          u($$_$$_$$_$$_src_editor_redux_common_actions.Yf(t, l))
        }
        u($$_$$_$$_$$_src_editor_redux_common_actions.sh())
      }))
    },
    onDelete: function () {
      e$onChange(n, "")
    },
    fileId: d
  })), g && React.createElement($_13_index.i, {
    className: N($_747.formItemWrapper, $_747.imageResizeMode, "changeImageResizeMode"),
    label: $_710_index$a$formatMessage({
      id: "adapt"
    }),
    align: "vertical"
  }, React.createElement($_13_index.i, {
    className: "changeSizeFormItemWrapper"
  }, React.createElement($v, {
    mode: m,
    onModeChange: function (e) {
      if (e$onChange) {
        e$onChange("resizeMode", e)
      }
    }
  }))))
})
var RE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "position" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig$label = e.formConfig.label
  var a = undefined === e$formConfig$label ? "coordinate" : e$formConfig$label
  var s = e$getValue(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = D.a({}, s)
  var u = function (e) {
    return function (t, r) {
      l[t] = parseInt(r);
      (function (e) {
        return Lodash.debounce(function (e) {
          e$onChange(n, e)
        }, e)
      })(e)(l)
    }
  }
  return React.createElement($_13_index.i, {
    align: "vertical",
    className: "".concat(qv.formItemWrapper, " ").concat(qv.formInputNumberRow)
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, $_710_index$a$formatMessage({
    id: a || "coordinate"
  })), React.createElement("div", {
    className: qv.formInputNumberRow
  }, React.createElement($_13_index.i, {
    className: "changeLeft"
  }, React.createElement($_13_index.o, {
    label: "x",
    type: "number",
    defaultValue: Math.round(s.x),
    className: "".concat(qv.justifyInputContent, " coco-number-inputRow"),
    rules: [
      {
        rule: Yr.w(9)
      }
    ],
    onChange: function (e) {
      u(50)("x", e)
    },
    min: Qu.s,
    max: Qu.k,
    onStep: function (e) {
      u(0)("x", e)
    }
  })), React.createElement($_13_index.i, {
    className: "changeTop"
  }, React.createElement($_13_index.o, {
    label: "y",
    type: "number",
    defaultValue: Math.round(s.y),
    className: "".concat(qv.justifyInputContent, " coco-number-inputRow"),
    min: Qu.s,
    max: Qu.k,
    rules: [
      {
        rule: Yr.w(9)
      }
    ],
    onChange: function (e, t) {
      u(50)("y", e)
    },
    onStep: function (e, t) {
      u(0)("y", e)
    }
  }))))
})
var kE = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "content" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$formConfig = e.formConfig
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var s = _React.useRef(null)
  var c = e$getValue(n)
  var l = $_710_index$a$formatMessage({
    id: e$formConfig.label || "content"
  })
  var u = te.p(function (e) {
    e$onChange(n, e)
  }, 60)
  return React.createElement($_13_index.i, {
    className: N(qv.formItemWrapper, "changeContent"),
    label: l,
    align: "vertical"
  }, React.createElement($_13_index.A, {
    ref: s,
    defaultValue: c,
    rows: 3,
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      u(e$target$value)
    }
  }))
})
export { TE }
export { SE }
export { jE }
export { NE }
export { RE }
export { kE }
