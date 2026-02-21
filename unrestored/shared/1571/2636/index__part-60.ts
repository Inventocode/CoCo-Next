/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-60
 */

"use strict"

import { eh } from "./index__part-59"
import * as /* [auto-meaningful-name] */$_172 from "./172"
import * as /* [auto-meaningful-name] */$_228_index from "./228/index"
import * as /* [auto-meaningful-name] */$_42_index from "./42/index"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as wn from "./90"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as D from "./6"
import * as k from "./11"
import /* [auto-meaningful-name] */Classnames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as th from "./45"
import nh from "./45"
var rh = {}
var oh = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$templateType = e$attributes.templateType
  var /* [auto-meaningful-name] */e$attributes$templateRenderType = e$attributes.templateRenderType
  var /* [auto-meaningful-name] */e$attributes$templateSlotMap = e$attributes.templateSlotMap
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$dataSource = e$attributes.dataSource
  var f = useDispatch()
  var m = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var g = useSelector(function (e) {
    return e.cloudSpace.cloudTableDataList
  })
  for (var v in e$attributes$templateSlotMap) {
    var b = Et.Bb(e$attributes$templateSlotMap[v].widgetId)
    rh[v] = false !== (null === b || undefined === b ? undefined : b.visible)
  }
  function y(e, t) {
    return React.createElement(React.Fragment, null, e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.ONLY_TITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(nh.flexSC, nh.template1, "tiled" === e$attributes$templateRenderType ? nh.itemTiled : nh.itemCard)
      }, React.createElement("div", {
        className: nh.title
      }, $_42_index.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), React.createElement("div", {
        className: nh.iconBox
      }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: nh.icon
      }))))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(nh.flexSC, nh.template2, "tiled" === e$attributes$templateRenderType ? nh.itemTiled : nh.itemCard)
      }, rh.titleSlot ? React.createElement("div", {
        className: nh.title
      }, $_42_index.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: Classnames(nh.flexSC, nh.subTitleBox)
      }, rh.subTitleSlot && React.createElement("div", {
        className: nh.subTitle
      }, $_42_index.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: nh.icon
      }))))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(nh.flexSC, nh.template3, "tiled" === e$attributes$templateRenderType ? nh.itemTiled : nh.itemCard)
      }, React.createElement("div", {
        className: nh.title
      }, rh.imageSlot && React.createElement("div", {
        className: nh.smallImgBox
      }, $_42_index.e(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), rh.titleSlot && React.createElement("div", null, $_42_index.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), React.createElement("div", {
        className: Classnames(nh.flexSC, nh.subTitleBox)
      }, rh.subTitleSlot && React.createElement("div", {
        className: nh.subTitle
      }, $_42_index.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: nh.icon
      }))))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(nh.flexSC, nh.template4, "tiled" === e$attributes$templateRenderType ? nh.itemTiled : nh.itemCard)
      }, React.createElement("div", {
        className: nh.avatarAndTitle
      }, rh.avatarSlot && React.createElement("div", {
        className: nh.avatarImgBox
      }, $_42_index.e(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: nh.titleBox
      }, rh.titleSlot && React.createElement("div", {
        className: nh.title
      }, $_42_index.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.subTitleSlot && React.createElement("div", {
        className: nh.subTitle
      }, $_42_index.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), React.createElement("div", {
        className: nh.iconBox
      }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: nh.icon
      }))))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(nh.flexSC, nh.template5, "tiled" === e$attributes$templateRenderType ? nh.itemTiled : nh.itemCard)
      }, React.createElement("div", {
        className: nh.imgAndTitleBox
      }, rh.imageSlot && React.createElement("div", {
        className: nh.smallImgBox
      }, $_42_index.e(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), React.createElement("div", null, rh.titleSlot && React.createElement("div", {
        className: nh.title
      }, $_42_index.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.descSlot && React.createElement("div", {
        className: nh.desc
      }, $_42_index.e(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), React.createElement("div", {
        className: nh.iconBox
      }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: nh.icon
      }))))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(nh.template6, "tiled" === e$attributes$templateRenderType ? nh.itemTiled : nh.itemCard)
      }, React.createElement("div", {
        className: nh.avatarAndTitle
      }, rh.avatarSlot && React.createElement("div", {
        className: nh.avatarImgBox
      }, $_42_index.e(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: nh.titleBox
      }, rh.titleSlot && React.createElement("div", {
        className: nh.title
      }, $_42_index.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.subTitleSlot && React.createElement("div", {
        className: nh.subTitle
      }, $_42_index.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), rh.bannerSlot && React.createElement("div", {
        className: nh.bannerImgBox
      }, $_42_index.e(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), rh.descSlot && React.createElement("div", {
        className: nh.desc
      }, $_42_index.e(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t))))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: Classnames(nh.template6, "tiled" === e$attributes$templateRenderType ? nh.itemTiled : nh.itemCard)
      }, rh.bannerSlot && React.createElement("div", {
        className: nh.bannerImgBox
      }, $_42_index.e(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), React.createElement("div", {
        className: nh.avatarAndTitle
      }, rh.avatarSlot && React.createElement("div", {
        className: nh.avatarImgBox
      }, $_42_index.e(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: nh.titleBox
      }, rh.titleSlot && React.createElement("div", {
        className: nh.title
      }, $_42_index.e(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), rh.subTitleSlot && React.createElement("div", {
        className: nh.subTitle
      }, $_42_index.e(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), rh.descSlot && React.createElement("div", {
        className: nh.desc
      }, $_42_index.e(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t))))
    }(e, t))
  }
  return React.createElement("div", {
    id: t,
    onMouseDown: function (e) {
      var n
      var r
      var o
      var i = e.target.closest("." + wn.b)
      if (i) {
        if ((null === (n = Et.Bb(i.id)) || undefined === n ? undefined : n.parentId) && i.id === m) {
          e.stopPropagation()
        } else if (!m || (null === (r = Et.Bb(m)) || undefined === r ? undefined : r.parentId) !== (null === (o = Et.Bb(i.id)) || undefined === o ? undefined : o.parentId)) {
          return i.id !== t && m !== t ? (e.stopPropagation(), void f($$_$$_$$_$$_src_editor_redux_common_actions.ug(t))) : undefined
        }
      }
    },
    "data-role": $$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
    "data-min-width": $_172.k,
    "data-max-width": $_172.i,
    "data-min-height": $_172.j,
    "data-max-height": $_172.h,
    className: Classnames(wn.b, k.a({}, nh.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      minWidth: "".concat($_172.k, "px"),
      minHeight: "".concat($_172.j, "px"),
      maxWidth: "".concat($_172.i, "px"),
      maxHeight: "".concat($_172.h, "px"),
      background: e$attributes$disabled ? $_172.f : e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined
    }
  }, React.createElement("div", {
    className: nh.listViewerBox,
    style: {
      width: "100%",
      height: "100%",
      overflowY: "auto"
    }
  }, function () {
    if (e$attributes$dataSource) {
      if ("string" === typeof e$attributes$dataSource) {
        var e = Et.Bb(e$attributes$dataSource)
        if ((null === e || undefined === e ? undefined : e.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.G && e.attributes.db.data.length > 0) {
          return React.createElement(React.Fragment, null, e.attributes.db.data.map(function (e, t) {
            return React.createElement("div", {
              key: t
            }, y(t, e))
          }))
        }
      } else {
        var /* [auto-meaningful-name] */n$data
        var n = g.find(function (e) {
          return e.id === e$attributes$dataSource
        })
        if (n && (null === (n$data = n.data) || undefined === n$data ? undefined : n$data.length) > 0) {
          return React.createElement(React.Fragment, null, n.data.map(function (e, t) {
            return React.createElement("div", {
              key: t
            }, y(t, e))
          }))
        }
      }
    }
    return React.createElement("div", null, y())
  }()))
})
var ih = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
  category: {
    iconId: $_172.g,
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.A
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return [
      "<block type=\"new_list_viewer_on_press\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"new_list_viewer_child_widget_on_press\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n    </block>"), rp.d, "<block type=\"new_list_viewer_child_widget_set_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(rp.c, "</field>\n      <value name=\"VALUE\">\n      <shadow type=\"color_picker\"><field name=\"COLOR_PALETTE\">#000000</field></shadow>\n      </value>\n    </block>"), rp.d, Jd.sb({
        property: "__opacity",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), "<block type=\"new_list_viewer_set_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n      <value name=\"NUM\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='").concat($_172.j, ",").concat($_172.h, ",1'>100</field>\n        </shadow>\n      </value>\n    </block>"), Jd.sb({
        property: "__position",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), Jd.sb({
        property: "__visible",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), Jd.sb({
        property: "__disabled",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e,
        isSetProperty: true
      }), rp.d, "<block type=\"new_list_viewer_child_widget_get_color_attributes\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <field name=\"SLOT_WIDGET\">").concat("titleSlot", "</field>\n      <field name=\"ATTRIBUTES\">").concat(rp.c, "</field>\n    </block>"), Jd.sb({
        property: "__opacity",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e
      }), "<block type=\"new_list_viewer_get_size\" uncache=\"true\">\n      ".concat(t, "\n      <field name=\"SIZE_TYPE\">height</field>\n    </block>"), Jd.sb({
        property: "__position",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e
      }), rp.d, Jd.sb({
        property: "__visible",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e
      }), Jd.sb({
        property: "__disabled",
        widgetType: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
        widgetId: e
      })
    ]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("new_list_viewer_on_press_index", function () {
        return "".concat(ep.a, "index")
      })
      e.insertBlockSnippetGenerator("new_list_viewer_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.statementToCode(t, n, "DO")
        var a = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        return i ? ep.n("onListViewerPress", [ep.o(o)], i, [a]) : ""
      })
      e.insertBlockSnippetGenerator("new_list_viewer_set_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.valueToCode(t, n, "NUM", e.ORDER_FUNCTION_CALL)
        var a = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "setListViewerWidgetWidth" : "setListViewerWidgetHeight"
        return ep.l(ep.n(a, [ep.o(o), i]), r, e)
      })
      e.insertBlockSnippetGenerator("new_list_viewer_get_size", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = "width" === e.getFieldValue(r, "SIZE_TYPE") ? "getListViewerWidgetWidth" : "getListViewerWidgetHeight"
        return ep.s(i, [ep.o(o)])
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_on_press_index", function () {
        return "".concat(ep.a, "index")
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_on_press", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.statementToCode(t, n, "DO")
        var s = e.valueToCode(t, n, "INDEX", e.ORDER_ATOMIC)
        if (!i || i === rp.c) {
          return ""
        }
        if (!a) {
          return ""
        }
        var c = "".concat(o, "_").concat(i)
        return ep.n("onListViewerChildWidgetPress", [ep.o(c)], a, [s])
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_set_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var c = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return i && i !== rp.c && a && a !== rp.c ? ep.l(ep.n("setListViewerChildWidgetAttribute", [ep.o(o), s, ep.o(i), ep.o(a), c]), r, e) : ""
      })
      e.insertBlockSnippetGenerator("new_list_viewer_child_widget_get_color_attributes", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID") || ""
        var i = e.getFieldValue(r, "SLOT_WIDGET") || ""
        var a = e.getFieldValue(r, "ATTRIBUTE") || ""
        var s = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return i && i !== rp.c && a ? ep.l(ep.s("getListViewerChildWidgetAttribute", [ep.o(o), s, ep.o(i), ep.o(a)]), r, e, false, true) : ""
      })
    },
    setBlockGroupProfile: function (e, t) {
      var /* [auto-meaningful-name] */BKY_BLOCK_TAB_ICON = "%{BKY_BLOCK_TAB_ICON}"
      var r = [[t.Msg.TEXT_COLOR, "color"], [t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var o = [[t.Msg.BACKGROUND_COLOR, "backgroundColor"]]
      var i = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType($$_$$_$$_$$_src_editor_widget_builtIn_types.A)
        },
        optOnchange: function (e) {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */this$source_block1
          var r = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("SLOT_WIDGET")
          var o = null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field("ATTRIBUTE")
          if (!(null === r || undefined === r)) {
            r.set_value(rp.c)
          }
          if (!(null === o || undefined === o)) {
            o.set_value(rp.c)
          }
        }
      }
      var a = {
        type: "field_coco_dropdown",
        name: "SLOT_WIDGET",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var t = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || $_228_index.a()
          var n = $_46_index.c().getListViewerChildWidgetList(t)
          return n
        },
        optOnchange: function (e) {
          var /* [auto-meaningful-name] */this$source_block
          var n = null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field("ATTRIBUTE")
          if (!(null === n || undefined === n)) {
            n.set_value(rp.c)
          }
        }
      }
      var s = {
        type: "field_coco_dropdown",
        name: "ATTRIBUTE",
        custom: true,
        options: function () {
          var /* [auto-meaningful-name] */this$source_block
          var /* [auto-meaningful-name] */this$source_block1
          var n = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.get_field_value("WIDGET_ID")) || $_228_index.a()
          var i = null === (this$source_block1 = this.source_block) || undefined === this$source_block1 ? undefined : this$source_block1.get_field_value("SLOT_WIDGET")
          var a = Jd.Cb(n)
          var s = []
          if (a && i) {
            var /* [auto-meaningful-name] */a$attributes
            var l
            var u = Jd.Cb(null === (a$attributes = a.attributes) || undefined === a$attributes || null === (l = a$attributes.templateSlotMap[i]) || undefined === l ? undefined : l.widgetId)
            if ((null === u || undefined === u ? undefined : u.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.H) {
              s = s.concat(r)
            }
            if ((null === u || undefined === u ? undefined : u.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.v) {
              s = s.concat(o)
            }
          }
          return s
        }
      }
      e.insertBlockProfile("new_list_viewer_on_press", {
        type: "new_list_viewer_on_press",
        message0: "%{BKY_LIST_VIEWER_ON_PRESS}",
        args0: [
          ep.e(BKY_BLOCK_TAB_ICON, true), D.a({}, i), {
            type: "input_value",
            name: "INDEX",
            check: "String",
            align: "CENTRE",
            default_shadow: "<shadow type=\"new_list_viewer_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "new_list_viewer_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_list_viewer_on_press_index", {
        type: "new_list_viewer_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: ["Number", "String"],
        required_context: "new_list_viewer_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("new_list_viewer_set_size", {
        type: "new_list_viewer_set_size",
        message0: "%{BKY_LIST_VIEWER_SET_PROPERTY}",
        args0: [
          D.a({}, i), {
            type: "field_coco_dropdown",
            name: "SIZE_TYPE",
            custom: true,
            options: [[t.Msg.HEIGHT, "height"], [t.Msg.WIDTH, "width"]],
            optOnchange: function (e) {
              var t = e || ""
              !function (e, t, n, r) {
                var /* [auto-meaningful-name] */e$source_block = e.source_block
                var i = null === e$source_block || undefined === e$source_block ? undefined : e$source_block.get_shadow_field("NUM")
                if (i && "FieldNumber" === i.field_type) {
                  i.set_value(t)
                  i.set_constraints(r, n, 1)
                }
              }(this, "100", "width" === t ? $_172.i : $_172.h, "width" === t ? $_172.k : $_172.j)
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
      e.insertBlockProfile("new_list_viewer_get_size", {
        type: "new_list_viewer_get_size",
        message0: "%{BKY_LIST_VIEWER_GET_PROPERTY}",
        args0: [
          D.a({}, i), {
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
      e.insertBlockProfile("new_list_viewer_child_widget_on_press", {
        type: "new_list_viewer_child_widget_on_press",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_ON_PRESS}",
        args0: [
          ep.e(BKY_BLOCK_TAB_ICON, true), D.a({}, i), D.a({}, a), {
            type: "input_value",
            name: "INDEX",
            check: "Number",
            align: "CENTRE",
            default_shadow: "<shadow type=\"new_list_viewer_child_widget_on_press_index\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "new_list_viewer_child_widget_on_press_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_list_viewer_child_widget_on_press_index", {
        type: "new_list_viewer_child_widget_on_press_index",
        message0: "%{BKY_LIST_VIEWER_ROW_INDEX}",
        output: "Number",
        required_context: "new_list_viewer_child_widget_on_press_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("new_list_viewer_child_widget_set_color_attributes", {
        type: "new_list_viewer_child_widget_set_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_SET_ATTRIBUTES}",
        args0: [
          D.a({}, i), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, a), D.a({}, s), {
            type: "input_value",
            name: "VALUE",
            check: ["Color"]
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("new_list_viewer_child_widget_get_color_attributes", {
        type: "new_list_viewer_child_widget_get_color_attributes",
        message0: "%{BKY_LIST_VIEWER_CHILD_WIDGET_GET_ATTRIBUTES}",
        args0: [
          D.a({}, i), {
            type: "input_value",
            name: "ROW",
            check: "Number"
          }, D.a({}, a), D.a({}, s)
        ],
        output: ["String", "Color"],
        colour: "%{BKY_APPEARANCE_HUE}",
        inputsInline: true
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: $_172.g,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["new_list_viewer_on_press", "new_list_viewer_child_widget_on_press", "new_list_viewer_child_widget_set_color_attributes", "new_list_viewer_set_size", "new_list_viewer_child_widget_get_color_attributes", "new_list_viewer_get_size"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["new_list_viewer_on_press", "new_list_viewer_child_widget_on_press"]
}
var ah = {
  icon: $_172.g,
  title: "ListViewerWidget.widgetName",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.A,
  previewAreaWidgetTitle: "ListViewerWidget.widgetName",
  component: oh,
  editConfig: eh,
  blockConfig: ih,
  isInvisibleWidget: false,
  widget: {
    isGlobalWidget: false,
    size: {
      width: $_172.e,
      height: $_172.b
    },
    widgetIds: [],
    attributes: {
      disabled: false,
      backgroundColor: $_172.a,
      templateRenderType: $_172.c,
      templateType: $_172.d,
      dataSource: "",
      templateSlotMap: {}
    }
  }
}
export { ah }
