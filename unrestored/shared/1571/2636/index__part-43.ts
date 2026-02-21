/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-43
 */

"use strict"

import { Bp } from "./index__part-41"
import { Wp } from "./index__part-42"
var Gp
import * as Fp from "./76"
import * as Pp from "./95"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as Yr from "./53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as wn from "./90"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import /* [auto-meaningful-name] */Color from "color"
import * as D from "./6"
import * as k from "./11"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import { useRef, useState, useEffect, useMemo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_290 from "./290"
import /* [auto-meaningful-name] */$_2901 from "./290"
function Vp(e, t) {
  return Color(e).alpha(t).toString()
}
var /* [auto-meaningful-name] */Fp$c$OUTLINED_NORMAL = Fp.c.OUTLINED_NORMAL
var /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types$s$MEDIUM = $$_$$_$$_$$_src_editor_widget_builtIn_types.s.MEDIUM
var Kp = {
  icon: Pp.b,
  previewAreaWidgetTitle: "InputWidget.widgetName",
  title: "",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.w,
  component: function (e) {
    var t = e.id
    var /* [auto-meaningful-name] */e$position = e.position
    var /* [auto-meaningful-name] */e$visible = e.visible
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$selected = e.selected
    var /* [auto-meaningful-name] */e$opacity = e.opacity
    var /* [auto-meaningful-name] */e$onChange = e.onChange
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
    var /* [auto-meaningful-name] */e$attributes$placeholder = e$attributes.placeholder
    var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
    var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
    var m = undefined === e$attributes$textAlign ? "left" : e$attributes$textAlign
    var /* [auto-meaningful-name] */e$attributes$placeholderColor = e$attributes.placeholderColor
    var /* [auto-meaningful-name] */e$attributes$valueColor = e$attributes.valueColor
    var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
    var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
    var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
    var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
    var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
    var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
    var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
    var /* [auto-meaningful-name] */e$size$width = e$size.width
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    var I = useRef(null)
    var j = useState(false)
    var R = $_10_index.a(j, 2)
    var x = R[0]
    var M = R[1]
    var L = useState(e$attributes$placeholder)
    var P = $_10_index.a(L, 2)
    var B = P[0]
    var F = P[1]
    var G = useRef(null)
    useEffect(function () {
      var /* [auto-meaningful-name] */G$current = G.current
      if (G$current) {
        G$current.value = e$attributes$value
      }
    })
    useEffect(function () {
      var /* [auto-meaningful-name] */G$current = G.current
      if (x && G$current) {
        G$current.focus()
        G$current.selectionStart = G$current.selectionEnd = G$current.value.length
      }
    }, [x])
    useEffect(function () {
      F(e$attributes$placeholder)
    }, [e$attributes$placeholder])
    var W = Et.hb(e$attributes$backgroundImage)
    var U = $$_$$_$$_$$_src_shared_tools_index.U(e$attributes$backgroundImage) ? e$attributes$backgroundImage : W ? (null === W || undefined === W ? undefined : W.source) || (null === W || undefined === W ? undefined : W.cdnUrl) : Pp.a
    var H = undefined
    var V = useMemo(function () {
      return function (e, t, n) {
        var r
        return (r = {}, k.a(r, Fp.c.OUTLINED_NORMAL, {
          background: "rgba(255, 255, 255)",
          borderRadius: "4px",
          border: "2px solid ".concat(Vp(t, .5)),
          borderColor: Vp(t, .5)
        }), k.a(r, Fp.c.CONTAINED_NORMAL, {
          background: Vp(t, .14),
          borderRadius: "4px"
        }), k.a(r, Fp.c.CONTAINED_ROUND, {
          background: Vp(t, .14),
          borderRadius: "".concat(n / 2, "px")
        }), k.a(r, Fp.c.OUTLINED_FLAT, {
          borderBottom: "2px solid ".concat(Vp(t, .5)),
          borderBottomColor: Vp(t, .5)
        }), r)[e]
      }(e$attributes$templateMode, e$attributes$backgroundColor, e$size$height)
    }, [e$attributes$backgroundColor, e$size$height, e$attributes$templateMode])
    if (e$attributes$backgroundMode === Fp.a.IMAGE) {
      H = {
        backgroundImage: "url(".concat(U, ")"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
        padding: "6px ".concat(20, "px")
      }
    } else {
      H = D.a(D.a({}, V), {}, {
        padding: "6px ".concat(14, "px")
      })
    }
    var z = useMemo(function () {
      if (e$attributes$disabled) {
        return function (e) {
          var t
          return (t = {}, k.a(t, Fp.c.OUTLINED_NORMAL, {
            color: "#CCCCCC",
            borderColor: "#E9E9E9"
          }), k.a(t, Fp.c.CONTAINED_NORMAL, {
            background: "#E7E7E7",
            color: "#FFFFFF"
          }), k.a(t, Fp.c.CONTAINED_ROUND, {
            background: "#E7E7E7",
            color: "#FFFFFF"
          }), k.a(t, Fp.c.OUTLINED_FLAT, {
            color: "#CCCCCC",
            borderBottomColor: "#E9E9E9"
          }), t)[e]
        }(e$attributes$templateMode)
      }
    }, [e$attributes$templateMode, e$attributes$disabled])
    useEffect(function () {
      var e
      var n = z ? z.color : e$attributes$placeholderColor
      if (!(null === (e = document.getElementById(t)) || undefined === e)) {
        e.style.setProperty("--input-placeholder-color", n)
      }
    }, [t, e$attributes$placeholderColor, z])
    return React.createElement("div", {
      id: t,
      className: Classnames($_2901.inputWidget, e$attributes$backgroundMode === Fp.a.TEMPLATE && e$attributes$templateMode !== Fp.c.OUTLINED_FLAT && $_2901.inputWidgetUnderpainting, wn.b, k.a({}, $_2901.hide, !e$visible)),
      "data-role": $$_$$_$$_$$_src_editor_widget_builtIn_types.M,
      "data-widget-type": $$_$$_$$_$$_src_editor_widget_builtIn_types.w,
      "data-min-width": Pp.m,
      "data-min-height": Pp.l,
      ref: I,
      style: D.a(D.a({
        top: e$position.y,
        left: e$position.x,
        height: e$size$height,
        width: e$size$width,
        minWidth: "".concat(Pp.m, "px"),
        minHeight: "".concat(Pp.l, "px"),
        fontSize: e$attributes$fontSize,
        fontFamily: e$attributes$fontFamily,
        color: e$attributes$valueColor,
        opacity: undefined === e$opacity ? undefined : e$opacity / 100,
        filter: e$attributes$disabled && e$attributes$backgroundMode === Fp.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined
      }, H), z)
    }, React.createElement("div", {
      className: Classnames($_2901.inputWidgetInputWrapper, {}),
      onDoubleClick: function () {
        var /* [auto-meaningful-name] */G$current = G.current
        if (G$current) {
          G$current.focus()
          G$current.selectionStart = 0
          G$current.selectionEnd = G$current.value.length
        }
      },
      onClick: function () {
        var /* [auto-meaningful-name] */I$current
        var /* [auto-meaningful-name] */I$current1 = I.current
        var /* [auto-meaningful-name] */G$current = G.current
        if (I$current1 && G$current && e$selected && (null === (I$current = I.current) || undefined === I$current ? undefined : I$current.dataset.clickType) === Yr.h.CLICK) {
          M(true)
        }
      }
    }, React.createElement("input", {
      ref: G,
      onFocus: function (e) {
        var /* [auto-meaningful-name] */I$current = I.current
        F("")
        if (I$current && !e$attributes$disabled) {
          I$current.classList.add(wn.a, wn.c)
        }
      },
      onKeyDown: function (e) {
        var /* [auto-meaningful-name] */G$current
        if (13 === e.keyCode) {
          if (!(null === (G$current = G.current) || undefined === G$current)) {
            G$current.blur()
          }
        }
      },
      onBlur: function (e) {
        var /* [auto-meaningful-name] */I$current = I.current
        if (I$current) {
          I$current.classList.remove(wn.a, wn.c)
        }
        if (e$onChange) {
          e$onChange("value", e.target.value)
        }
        M(false)
        F(e$attributes$placeholder)
      },
      placeholder: B,
      style: {
        textAlign: m,
        color: e$attributes$disabled ? Pp.o : e$attributes$valueColor
      }
    }), !x && React.createElement("div", {
      className: Classnames($_2901.mask)
    })))
  },
  editConfig: Bp,
  contentTextField: "placeholder",
  blockConfig: Wp,
  isInvisibleWidget: Pp.j,
  widget: {
    isGlobalWidget: Pp.i,
    animationRecord: (Gp = {}, k.a(Gp, Fp.c.OUTLINED_NORMAL, {
      focus: "borderColorEnhance",
      error: "defaultOutlineError"
    }), k.a(Gp, Fp.c.OUTLINED_FLAT, {
      focus: "borderColorEnhance",
      error: "defaultOutlineError"
    }), k.a(Gp, Fp.c.CONTAINED_NORMAL, {
      focus: "backgroundColorEnhance",
      error: "defaultContainedError"
    }), k.a(Gp, Fp.c.CONTAINED_ROUND, {
      focus: "backgroundColorEnhance",
      error: "defaultContainedError"
    }), Gp),
    size: {
      width: Pp.k,
      height: Pp.h
    },
    attributes: {
      disabled: false,
      value: "",
      placeholder: "%{COCO_defaultInputWidgetContent}",
      color: Pp.e,
      sizeType: $$_$$_$$_$$_src_editor_widget_builtIn_types$s$MEDIUM,
      mode: Fp$c$OUTLINED_NORMAL,
      textAlign: "left",
      placeholderColor: Pp.n,
      valueColor: Pp.o,
      fontFamily: Pp.f,
      fontSize: Pp.g,
      backgroundMode: Fp.a.TEMPLATE,
      templateMode: Fp$c$OUTLINED_NORMAL,
      backgroundColor: Pp.c,
      backgroundImage: Pp.a,
      imageResizeMode: Fp.b.CONTAIN
    }
  }
}
var qp = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "ChangeImage",
    stillImageShowResizeMode: true
  }, {
    type: "BackgroundColor"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "Size"
  }, {
    type: "Coordinate"
  }
]
var Xp = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "ChangeImage",
    stillImageShowResizeMode: true
  }, {
    type: "BackgroundColor"
  }
]
var Qp = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.v,
  category: {
    iconId: $_133.a,
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.v
  },
  categoryClass: {
    text: "",
    iconId: $_133.a,
    blocks: []
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"image_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"image_set_file_id\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"IMAGE_FILE_ID_SHADOW\">\n        <shadow type=\"image_file_list_dropdown\"> <field name=\"IMAGE_FILE_ID\">").concat(rp.c, "</field></shadow>\n      </value>\n    </block>"), Jd.sb({
        property: "backgroundColor",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.v,
        widgetId: e,
        isSetProperty: true
      }), rp.d, Jd.sb({
        property: "__opacity",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.v,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"image_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='0,,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"image_set_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints=',,1'>100</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"image_set_visible\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"VISIBLE\">show</field>\n    </block>"), rp.d, "<block type=\"image_get_file_id\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), Jd.sb({
        property: "backgroundColor",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.v,
        widgetId: e
      }), Jd.sb({
        property: "__opacity",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.v,
        widgetId: e
      }), "<block type=\"image_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), "<block type=\"image_get_position\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"POSITION_TYPE\">positionX</field>\n    </block>"), rp.d, Jd.sb({
        property: "__visible",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.v,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      function t(t, n) {
        var r = t.blocks[n]
        return {
          block: r,
          widgetId: e.getFieldValue(r, "WIDGET_ID") || ""
        }
      }
      e.insertBlockSnippetGenerator("image_on_press", function (n, r) {
        var /* [auto-meaningful-name] */tNR$widgetId = t(n, r).widgetId
        var i = e.statementToCode(n, r, "DO")
        return i ? ep.n("onImagePress", [ep.o(tNR$widgetId)], i) : ""
      })
      e.insertBlockSnippetGenerator("image_file_list_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "IMAGE_FILE_ID")
        return undefined === o || o === rp.a || o === rp.c ? e.quote("") : ep.o(o)
      })
      e.insertBlockSnippetGenerator("icon_file_list_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "ICON_FILE_ID")
        return undefined === o || o === rp.a || o === rp.c ? e.quote("") : ep.o(o)
      })
      e.insertBlockSnippetGenerator("image_set_file_id", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "IMAGE_FILE_ID_SHADOW", e.ORDER_FUNCTION_CALL)
        return s ? ep.l(ep.n("setImageWidgetImageId", [ep.o(o$widgetId), s]), o$block, e) : ""
      })
      e.insertBlockSnippetGenerator("image_set_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "width" === e.getFieldValue(o$block, "SIZE_TYPE") ? "setImageWidgetWidth" : "setImageWidgetHeight"
        return ep.l(ep.n(c, [ep.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("image_set_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = e.valueToCode(n, r, "NUM", e.ORDER_FUNCTION_CALL)
        var c = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "setImageWidgetPositionX" : "setImageWidgetPositionY"
        return ep.l(ep.n(c, [ep.o(o$widgetId), s]), o$block, e)
      })
      e.insertBlockSnippetGenerator("image_set_visible", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "show" === e.getFieldValue(o$block, "VISIBLE")
        return ep.n("setImageWidgetVisible", [ep.o(o$widgetId), s])
      })
      e.insertBlockSnippetGenerator("image_get_size", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "width" === e.getFieldValue(o$block, "SIZE_TYPE") ? "getImageWidgetWidth" : "getImageWidgetHeight"
        return ep.s(s, [ep.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("image_get_position", function (n, r) {
        var o = t(n, r)
        var /* [auto-meaningful-name] */o$block = o.block
        var /* [auto-meaningful-name] */o$widgetId = o.widgetId
        var s = "positionX" === e.getFieldValue(o$block, "POSITION_TYPE") ? "getImageWidgetPositionX" : "getImageWidgetPositionY"
        return ep.s(s, [ep.o(o$widgetId)])
      })
      e.insertBlockSnippetGenerator("image_get_file_id", function (e, n) {
        var /* [auto-meaningful-name] */tEN$widgetId = t(e, n).widgetId
        return ep.s("getImageWidgetImageId", [ep.o(tEN$widgetId)])
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType("IMAGE_WIDGET")
        }
      }
      e.insertBlockProfile("image_on_press", {
        type: "image_on_press",
        message0: "%{BKY_IMAGE_ON_PRESS}",
        args0: [
          ep.e("%{BKY_BLOCK_TAB_ICON}", true), D.a({}, n), {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_set_file_id", {
        type: "image_set_file_id",
        message0: "%{BKY_IMAGE_SET_FIELD_ID}",
        args0: [
          D.a({}, n), {
            type: "input_value",
            name: "IMAGE_FILE_ID_SHADOW",
            check: ["String"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_IMAGE_SET_FIELD_ID_TOOLTIP}"
      })
      e.insertBlockProfile("image_file_list_dropdown", {
        type: "image_file_list_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "IMAGE_FILE_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getImageFiles()
            }
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        output: ["String"]
      })
      e.insertBlockProfile("icon_file_list_dropdown", {
        type: "icon_file_list_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "ICON_FILE_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getIconFiles()
            }
          }
        ],
        colour: "%{BKY_APPEARANCE_HUE}",
        output: ["String"]
      })
      e.insertBlockProfile("image_set_size", {
        type: "image_set_size",
        message0: "%{BKY_IMAGE_SET_PROPERTY}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
            optOnchange: function (e) {
              var /* [auto-meaningful-name] */this$source_block = this.source_block
              var n = null === this$source_block || undefined === this$source_block ? undefined : this$source_block.get_shadow_field("NUM")
              if (n && "FieldNumber" === n.field_type) {
                n.set_value("100")
              }
            }
          }, {
            type: "input_value",
            name: "NUM",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_set_position", {
        type: "image_set_position",
        message0: "%{BKY_IMAGE_SET_PROPERTY}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }, {
            type: "input_value",
            name: "NUM",
            check: ["Number"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_set_visible", {
        type: "image_set_visible",
        message0: "%1 %2",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "VISIBLE",
            custom: true,
            options: [[t.Msg.SHOW, "show"], [t.Msg.HIDE, "hide"]]
          }, D.a({}, n)
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_get_size", {
        type: "image_get_size",
        message0: "%{BKY_IMAGE_GET_PROPERTY}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_get_position", {
        type: "image_get_position",
        message0: "%{BKY_IMAGE_GET_PROPERTY}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "POSITION_TYPE",
            custom: true,
            options: [[t.Msg.POSITION_X, "positionX"], [t.Msg.POSITION_Y, "positionY"]]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("image_get_file_id", {
        type: "image_get_file_id",
        message0: "%{BKY_IMAGE_GET_FILE_ID}",
        args0: [D.a({}, n)],
        output: ["String"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_IMAGE_GET_FILE_ID_TOOLTIP}"
      })
    }
  },
  renameBlocksInfo: {
    blocksList: ["image_on_press", "image_set_file_id", "image_set_size", "image_set_position", "image_set_visible", "image_get_size", "image_get_position", "image_get_file_id"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["image_on_press"]
}
export { Kp }
export { qp }
export { Xp }
export { Qp }
