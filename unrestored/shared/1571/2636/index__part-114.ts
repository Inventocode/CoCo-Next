/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-114
 */

"use strict"

import { nb, rb } from "./index__part-92"
import { lb } from "./index__part-93"
import { hb, mb } from "./index__part-94"
import { fy } from "./index__part-102"
import { gy, _y } from "./index__part-103"
import { yy } from "./index__part-104"
import { TE } from "./index__part-109"
var sE
import * as /* [auto-meaningful-name] */$_114 from "./114"
import * as Q_ from "./82"
import * as Sp from "./83"
import * as Jd from "./33"
import * as Yr from "./53"
import * as Tn from "./68"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as D from "./6"
import * as k from "./11"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_175 from "./175"
import /* [auto-meaningful-name] */$_1751 from "./175"
var $E = [
  {
    value: Sp.b.CONTAINED_TEXT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames($_1751.contentButton, $_1751.typeItem),
        style: {
          backgroundColor: e,
          color: $$_$$_$$_$$_src_shared_tools_index.Z(e) ? $$_$$_$$_$$_src_shared_tools_index.a : "#ffffff"
        }
      }, "Text")
    }
  }, {
    value: Sp.b.OUTLINED_TEXT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames($_1751.outlinedButton, $_1751.typeItem),
        style: {
          color: e,
          background: $$_$$_$$_$$_src_shared_tools_index.Z(e) ? $$_$$_$$_$$_src_shared_tools_index.a : "#ffffff"
        }
      }, "Text")
    }
  }, {
    value: Sp.b.CONTAINED_ICON,
    style: {
      width: "70px"
    },
    renderContent: function (e, t) {
      return React.createElement("div", {
        style: {
          backgroundColor: e,
          color: $$_$$_$$_$$_src_shared_tools_index.Z(e) ? $$_$$_$$_$$_src_shared_tools_index.a : "#ffffff"
        },
        className: Classnames($_1751.IconButton, $_1751.contentButton, $_1751.typeItem)
      }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.z, {
        icon: t
      }))
    }
  }, {
    value: Sp.b.OUTLINED_ICON,
    style: {
      width: "70px"
    },
    renderContent: function (e, t) {
      return React.createElement("div", {
        style: {
          color: e,
          background: $$_$$_$$_$$_src_shared_tools_index.Z(e) ? $$_$$_$$_$$_src_shared_tools_index.a : "#ffffff"
        },
        className: Classnames($_1751.IconButton, $_1751.outlinedButton, $_1751.typeItem)
      }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.z, {
        icon: t
      }))
    }
  }
]
sE = {}
k.a(sE, Sp.a.TEXT, [Sp.c.SMALL, Sp.c.MEDIUM, Sp.c.LARGE])
k.a(sE, Sp.a.ICON, [Sp.c.TINY, Sp.c.SMALL, Sp.c.MEDIUM, Sp.c.LARGE, Sp.c.HUGE])
var eO = sE
var tO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = e$getValue(n)
  var s = e$getValue("sizeType")
  var c = e$getValue("color")
  var l = e$getValue("iconId")
  var u = e$getValue("text")
  var d = Jd.O(a)
  var p = useDispatch()
  var m = useState()
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  useEffect(function () {
    var e = Et.fb(l)
    b(e)
  }, [l])
  var y = function () {
    p($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.IconLibrary, function (e) {
      if (e && e.length > 0) {
        e$onChange("iconId", e[0].id)
      }
    }))
  }
  var E = $$_$$_$$_$$_src_shared_tools_index.p(function (e) {
    e$onChange("text", e)
  }, 200)
  var O = function (e, t) {
    E(e)
  }
  var w = function (e, t) {
    E(e)
  }
  return React.createElement(React.Fragment, null, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames($_1751.formItemWrapper, $_1751.typeSelector, $_1751.buttonModeSelector, "changeButtonMode"),
    label: $_710$a$formatMessage({
      id: "mode"
    })
  }, React.createElement(lb, {
    modeList: $E,
    value: a,
    onChange: function (e) {
      if (Jd.O(e) === Sp.a.TEXT) {
        if (s === Sp.c.TINY) {
          e$onChange("sizeType", Sp.c.SMALL)
        }
        if (s === Sp.c.HUGE) {
          e$onChange("sizeType", Sp.c.LARGE)
        }
      }
      e$onChange("mode", e)
    },
    params: [c, v]
  }, $E.map(function (e) {
    return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(c, v))
  }))), d === Sp.a.TEXT ? React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames($_1751.formItemWrapper, $_1751.cocoInputTitleContent),
    label: $_710$a$formatMessage({
      id: "content"
    })
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.k, {
    className: "coco-input-text",
    onChange: O,
    onBlur: w,
    isTrimmed: true,
    defaultValue: u
  })) : React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames($_1751.formItemWrapper, $_1751.typeSelector, "changeIcon"),
    label: $_710$a$formatMessage({
      id: "icon"
    })
  }, React.createElement("div", {
    onClick: y,
    className: $_1751.buttonTypeIconBox
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.z, {
    icon: v
  }), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-up",
    className: Classnames("coco-select-arrow")
  }))))
})
var nO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = e$getValue(n)
  var a = e$getValue("size")
  var s = e$getValue("mode")
  var c = Jd.O(s)
  var l = Jd.Q(i, s)
  var /* [auto-meaningful-name] */l$height = l.height
  var /* [auto-meaningful-name] */l$minWidth = l.minWidth
  var /* [auto-meaningful-name] */l$maxWidth = l.maxWidth
  return React.createElement(rb, {
    sizeType: i,
    sizeTypeList: eO[c],
    width: null === a || undefined === a ? undefined : a.width,
    height: l$height,
    minWidth: l$minWidth,
    maxWidth: l$maxWidth,
    onWidthChange: function (e) {
      var t = Math.max(l$minWidth, Math.min(l$maxWidth, Number(e)))
      e$onChange("size", {
        width: t
      })
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
      var t = Jd.Q(e, s)
      e$onChange("size", {
        height: t.height,
        width: Math.max(a.width, t.minWidth)
      })
    }
  })
})
var rO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = e$getValue("textVisible")
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: Classnames($_1751.formItemWrapper, $_1751.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_1751.labelWrapper
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "text"
  })), React.createElement("div", {
    className: $_1751.actionWrapper,
    onClick: function () {
      e$onChange("textVisible", !o)
    }
  }, e$getValue("textVisible") ? React.createElement("div", {
    className: $_1751.actionButton
  }) : React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-add"
  }))), o && React.createElement(React.Fragment, null, React.createElement(_y, Object.assign({}, e, {
    keyName: "text",
    formConfig: D.a(D.a({}, e.formConfig), {}, {
      emitOnChange: true
    })
  })), React.createElement("div", {
    className: $_1751.fontWrapper
  }, React.createElement("div", {
    className: $_1751.fontFamily
  }, React.createElement(fy, {
    keyName: "fontFamily",
    onChange: e$onChange,
    fontFamily: e$getValue("fontFamily")
  })), React.createElement("div", {
    className: $_1751.maxFontSize
  }, React.createElement(TE, {
    keyName: "maxFontSize",
    onChange: e$onChange,
    rules: [
      {
        rule: Yr.v
      }
    ],
    formConfig: D.a(D.a({}, e.formConfig), {}, {
      label: "fontSize",
      min: e$getValue("allowMinFontSize"),
      max: e$getValue("allowMaxFontSize")
    }),
    value: e$getValue("maxFontSize")
  })), React.createElement("div", {
    className: $_1751.ColorPicker
  }, React.createElement(mb, {
    width: 43,
    keyName: "textColor",
    onChange: e$onChange,
    color: e$getValue("textColor")
  }))), React.createElement("div", {
    className: $_1751.alignWrapper
  }, React.createElement(gy, {
    keyName: "textAlign",
    onChange: e$onChange,
    textAlign: e$getValue("textAlign")
  })))))
})
var oO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = e$getValue("iconVisible")
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: Classnames($_1751.formItemWrapper, $_1751.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_1751.labelWrapper
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "icon"
  })), React.createElement("div", {
    className: $_1751.actionWrapper,
    onClick: function () {
      e$onChange("iconVisible", !o)
    }
  }, e$getValue("iconVisible") ? React.createElement("div", {
    className: $_1751.actionButton
  }) : React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-add"
  }))), o && React.createElement("div", {
    className: $_1751.iconWrapper
  }, React.createElement(yy, {
    onChange: e$onChange,
    iconId: e$getValue("iconId"),
    color: e$getValue("iconColor")
  }), React.createElement(mb, {
    width: 43,
    keyName: "iconColor",
    onChange: e$onChange,
    color: e$getValue("iconColor")
  }))))
})
var iO = function (e) {
  return React.createElement("div", {
    className: $_1751.backgroundTypeItem,
    style: e
  }, "Text")
}
var aO = [
  {
    value: $_114.b.RECTANGLE_FILL,
    renderContent: function (e) {
      return iO({
        color: "#FFFFFF",
        backgroundColor: e,
        borderRadius: "8px"
      })
    }
  }, {
    value: $_114.b.RECTANGLE_OUTLINE,
    renderContent: function (e) {
      return iO({
        color: "#1D1D1F",
        border: "2px solid ".concat(e),
        borderRadius: "8px"
      })
    }
  }, {
    value: $_114.b.CIRCLE_FILL,
    renderContent: function (e) {
      return iO({
        color: "#FFFFFF",
        backgroundColor: e,
        borderRadius: "16px"
      })
    }
  }, {
    value: $_114.b.CIRCLE_OUTLINE,
    renderContent: function (e) {
      return iO({
        color: "#1D1D1F",
        border: "2px solid ".concat(e),
        borderRadius: "16px"
      })
    }
  }
]
var sO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = e$getValue("backgroundColor")
  var i = e$getValue("backgroundMode")
  var a = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var s = useDispatch()
  var c = e$getValue("backgroundImage")
  return React.createElement("div", {
    className: Classnames($_1751.formItemWrapper, $_1751.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_1751.labelWrapper
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "background"
  })), React.createElement("div", {
    className: $_1751.modeActionWrapper
  }, React.createElement("div", {
    className: Classnames($_1751.modeTemplate, i === $_114.a.TEMPLATE && $_1751.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", $_114.a.TEMPLATE)
    }
  }, $_710$a$formatMessage({
    id: "template"
  })), React.createElement("div", {
    className: Classnames($_1751.modeImage, i === $_114.a.IMAGE && $_1751.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", $_114.a.IMAGE)
    }
  }, $_710$a$formatMessage({
    id: "image"
  })))), i === $_114.a.TEMPLATE && React.createElement("div", {
    className: $_1751.backgroundWrapper
  }, React.createElement("div", {
    className: $_1751.templateMode
  }, React.createElement(hb, {
    modeList: aO,
    value: e$getValue("templateMode"),
    onChange: function (e) {
      e$onChange("templateMode", e)
    },
    params: [o]
  }, aO.map(function (e) {
    return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(o))
  }))), React.createElement("div", {
    className: $_1751.templateColor
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: "backgroundColor",
    onChange: e$onChange,
    color: e$getValue("backgroundColor")
  }))), i === $_114.a.IMAGE && React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_1751.backgroundWrapper
  }, React.createElement(nb, {
    onUploadFileChange: function (e) {
      if (e && a) {
        s($$_$$_$$_$$_src_editor_redux_common_actions.Zf(e, function (e) {
          s($$_$$_$$_$$_src_editor_redux_common_actions.Yf(e[0], a))
        }))
      }
    },
    onResourceLibraryClick: function () {
      s($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (e) {
        var t = e[0]
        if (a) {
          s($$_$$_$$_$$_src_editor_redux_common_actions.Yf(t, a))
        }
        s($$_$$_$$_$$_src_editor_redux_common_actions.sh())
      }))
    },
    fileId: Et.hb(c) ? c : Q_.f,
    style: {
      height: 90,
      padding: "12px"
    }
  })), React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.s, {
    className: Classnames($_1751.radioWrapper, $_1751.sizeRadioBox),
    value: e$getValue("imageResizeMode"),
    onChange: function (e) {
      e$onChange("imageResizeMode", e)
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.t, {
    value: $_114.c.CONTAIN
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-contain"
  }), $_710$a$formatMessage({
    id: "".concat($_114.c.CONTAIN)
  })), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.t, {
    value: $_114.c.STRETCH
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-stretch"
  }), $_710$a$formatMessage({
    id: "".concat($_114.c.STRETCH)
  }))))))
})
export { tO }
export { nO }
export { rO }
export { oO }
export { sO }
