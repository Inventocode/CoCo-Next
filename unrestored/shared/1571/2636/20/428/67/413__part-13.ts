/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-13
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_67 from /* 67 */"./index"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"../12"
import * as /* [auto-meaningful-name] */Module_89 from /* 89 */"../89"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../90"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../11"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_172 from /* 172 */"../../../172"
import * as /* [auto-meaningful-name] */Module_45 from /* 45 */"../../../45"
import /* [auto-meaningful-name] */Module_451 from /* 45 */"../../../45"
var Oe = {}
var we = memo(function (e) {
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
    Oe[b] = false !== (null === y || undefined === y ? undefined : y.visible)
  }
  function E(e, t) {
    return React.createElement(React.Fragment, null, e$attributes$templateType === Src_editor_widget_builtIn_types.o.ONLY_TITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: Classnames(Module_451.flexSC, Module_451.template1, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, Oe.titleSlot ? React.createElement("div", {
        className: Module_451.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: Module_451.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: Classnames(Module_451.flexSC, Module_451.template2, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, Oe.titleSlot ? React.createElement("div", {
        className: Module_451.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.subTitleBox)
      }, Oe.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: Classnames(Module_451.flexSC, Module_451.template3, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.title
      }, Oe.imageSlot && React.createElement("div", {
        className: Module_451.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), Oe.titleSlot && React.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), React.createElement("div", {
        className: Classnames(Module_451.flexSC, Module_451.subTitleBox)
      }, Oe.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: Classnames(Module_451.flexSC, Module_451.template4, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.avatarAndTitle
      }, Oe.avatarSlot && React.createElement("div", {
        className: Module_451.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_451.titleBox
      }, Oe.titleSlot && React.createElement("div", {
        className: Module_451.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), React.createElement("div", {
        className: Module_451.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
      })))
    }(e, t), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: Classnames(Module_451.flexSC, Module_451.template5, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.imgAndTitleBox
      }, Oe.imageSlot && React.createElement("div", {
        className: Module_451.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), React.createElement("div", null, Oe.titleSlot && React.createElement("div", {
        className: Module_451.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.descSlot && React.createElement("div", {
        className: Module_451.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), React.createElement("div", {
        className: Module_451.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_451.icon
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
          T(e)
        },
        className: Classnames(Module_451.template6, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, React.createElement("div", {
        className: Module_451.avatarAndTitle
      }, Oe.avatarSlot && React.createElement("div", {
        className: Module_451.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_451.titleBox
      }, Oe.titleSlot && React.createElement("div", {
        className: Module_451.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), Oe.bannerSlot && React.createElement("div", {
        className: Module_451.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), Oe.descSlot && React.createElement("div", {
        className: Module_451.desc,
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
          T(e)
        },
        className: Classnames(Module_451.template6, "tiled" === e$attributes$templateRenderType ? Module_451.itemTiled : Module_451.itemCard)
      }, Oe.bannerSlot && React.createElement("div", {
        className: Module_451.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), React.createElement("div", {
        className: Module_451.avatarAndTitle
      }, Oe.avatarSlot && React.createElement("div", {
        className: Module_451.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: Module_451.titleBox
      }, Oe.titleSlot && React.createElement("div", {
        className: Module_451.title,
        onClick: O.bind(null, "titleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && React.createElement("div", {
        className: Module_451.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), Oe.descSlot && React.createElement("div", {
        className: Module_451.desc,
        onClick: O.bind(null, "descSlot", e)
      }, Module_67.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t))
  }
  function O(e, n) {
    if (undefined === n) {
      n = 0
    }
    if (!e$attributes$disabled) {
      Module_20.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1)
    }
  }
  function T(e) {
    if (undefined === e) {
      e = 0
    }
    if ("number" === typeof e) {
      e += 1
    }
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
    "data-widget-type": Src_editor_widget_builtIn_types.A,
    "data-min-width": Module_172.k,
    "data-max-width": Module_172.i,
    "data-min-height": Module_172.j,
    "data-max-height": Module_172.h,
    className: Classnames(Module_90.b, Module_451.listViewerBox, Module_11.a({}, Module_451.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      background: e$attributes$disabled ? Module_172.f : e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined,
      overflowY: "auto"
    }
  }, function () {
    if (e$attributes$dataSource) {
      var e
      var t
      if ("string" === typeof e$attributes$dataSource) {
        e = null === (t = Module_89.b.get(e$attributes$dataSource)) || undefined === t ? undefined : t.data
      } else {
        e = Module_89.a.get(e$attributes$dataSource)
      }
      if (e && e.length > 0) {
        return React.createElement(React.Fragment, null, e.map(function (e, t) {
          return React.createElement("div", {
            key: t
          }, E(t, e))
        }))
      }
    }
    return React.createElement("div", null, E())
  }())
})
export { we }
