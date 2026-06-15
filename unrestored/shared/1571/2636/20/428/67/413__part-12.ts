/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-12
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../90"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../11"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"../../../127"
import * as /* [auto-meaningful-name] */Module_29 from /* 29 */"../../../29"
import /* [auto-meaningful-name] */Module_291 from /* 29 */"../../../29"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_89 from /* 89 */"../89"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../12"
import * as /* [auto-meaningful-name] */Module_67 from /* 67 */"./index"
var _e = {}
var ve = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$dataSource = e$attributes.dataSource
  var /* [auto-meaningful-name] */e$attributes$templateType = e$attributes.templateType
  var /* [auto-meaningful-name] */e$attributes$templateRenderType = e$attributes.templateRenderType
  var /* [auto-meaningful-name] */e$attributes$templateSlotMap = e$attributes.templateSlotMap
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  for (var b in e$attributes$templateSlotMap) {
    var y = Module_12.b(e$attributes$templateSlotMap[b].widgetId)
    _e[b] = false !== (null === y || undefined === y ? undefined : y.visible)
  }
  function E(e, t) {
    return React.createElement(React.Fragment, null, e$attributes$templateType === Src_editor_widget_builtIn_types.o.ONLY_TITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: Classnames(Module_291.flexSC, Module_291.template1, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
      }, _e.titleSlot ? React.createElement("div", {
        className: Module_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: Module_291.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: Classnames(Module_291.flexSC, Module_291.template2, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
      }, _e.titleSlot ? React.createElement("div", {
        className: Module_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: Classnames(Module_291.flexSC, Module_291.subTitleBox)
      }, _e.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: Classnames(Module_291.flexSC, Module_291.template3, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
      }, React.createElement("div", {
        className: Module_291.title
      }, _e.imageSlot && React.createElement("div", {
        className: Module_291.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), _e.titleSlot && React.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), React.createElement("div", {
        className: Classnames(Module_291.flexSC, Module_291.subTitleBox)
      }, _e.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: Classnames(Module_291.flexSC, Module_291.template4, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
      }, React.createElement("div", {
        className: Module_291.avatarAndTitle
      }, _e.avatarSlot && React.createElement("div", {
        className: Module_291.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_291.titleBox
      }, _e.titleSlot && React.createElement("div", {
        className: Module_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), React.createElement("div", {
        className: Module_291.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: Classnames(Module_291.flexSC, Module_291.template5, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
      }, React.createElement("div", {
        className: Module_291.imgAndTitleBox
      }, _e.imageSlot && React.createElement("div", {
        className: Module_291.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), React.createElement("div", null, _e.titleSlot && React.createElement("div", {
        className: Module_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.descSlot && React.createElement("div", {
        className: Module_291.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), React.createElement("div", {
        className: Module_291.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: Classnames(Module_291.template6, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
      }, React.createElement("div", {
        className: Module_291.avatarAndTitle
      }, _e.avatarSlot && React.createElement("div", {
        className: Module_291.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_291.titleBox
      }, _e.titleSlot && React.createElement("div", {
        className: Module_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.bannerSlot && React.createElement("div", {
        className: Module_291.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), _e.descSlot && React.createElement("div", {
        className: Module_291.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: Classnames(Module_291.template6, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
      }, _e.bannerSlot && React.createElement("div", {
        className: Module_291.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), React.createElement("div", {
        className: Module_291.avatarAndTitle
      }, _e.avatarSlot && React.createElement("div", {
        className: Module_291.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_291.titleBox
      }, _e.titleSlot && React.createElement("div", {
        className: Module_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.descSlot && React.createElement("div", {
        className: Module_291.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t))
  }
  function O(e, n) {
    if (!e$attributes$disabled) {
      Module_20.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1)
    }
  }
  function T(e) {
    if (!e$attributes$disabled) {
      Module_20.emitListViewerPress(t, e)
      Module_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: e ? "onListViewerIndexPress" : "onWidgetPress",
        values: {
          index: e
        }
      })
    }
  }
  return React.createElement("div", {
    onClick: T.bind(null, ""),
    id: t,
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.x,
    "data-min-width": Module_127.m,
    "data-max-width": Module_127.k,
    "data-min-height": Module_127.l,
    "data-max-height": Module_127.j,
    className: Classnames(Module_90.b, Module_291.listViewerBox, Module_11.a({}, Module_291.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      background: e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined,
      overflowY: "auto"
    }
  }, function () {
    if (e$attributes$dataSource) {
      var e = Module_89.b.get(e$attributes$dataSource)
      if (e) {
        return React.createElement(React.Fragment, null, e.data.map(function (e, t) {
          return React.createElement("div", {
            key: t
          }, E(t, e))
        }))
      }
    }
    return null
  }())
})
export { ve }
