/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-12
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_90 from "../../../90"
import /* [auto-meaningful-name] */$$_$$_$$_8 from "../../../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_11 from "../../../11"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_127 from "../../../127"
import * as /* [auto-meaningful-name] */$$_$$_$$_29 from "../../../29"
import /* [auto-meaningful-name] */$$_$$_$$_291 from "../../../29"
import * as /* [auto-meaningful-name] */$$_$$_$$_13_index from "../../../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_89 from "../89"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as /* [auto-meaningful-name] */$_index from "./index"
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
    var y = $$_12.b(e$attributes$templateSlotMap[b].widgetId)
    _e[b] = false !== (null === y || undefined === y ? undefined : y.visible)
  }
  function E(e, t) {
    return React.createElement(React.Fragment, null, e$attributes$templateType === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.o.ONLY_TITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: $$_$$_$$_8($$_$$_$$_291.flexSC, $$_$$_$$_291.template1, "tiled" === e$attributes$templateRenderType ? $$_$$_$$_291.itemTiled : $$_$$_$$_291.itemCard)
      }, _e.titleSlot ? React.createElement("div", {
        className: $$_$$_$$_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: $$_$$_$$_291.iconBox
      }, React.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: $$_$$_$$_291.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.o.TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: $$_$$_$$_8($$_$$_$$_291.flexSC, $$_$$_$$_291.template2, "tiled" === e$attributes$templateRenderType ? $$_$$_$$_291.itemTiled : $$_$$_$$_291.itemCard)
      }, _e.titleSlot ? React.createElement("div", {
        className: $$_$$_$$_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : React.createElement("div", null), React.createElement("div", {
        className: $$_$$_$$_8($$_$$_$$_291.flexSC, $$_$$_$$_291.subTitleBox)
      }, _e.subTitleSlot && React.createElement("div", {
        className: $$_$$_$$_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: $$_$$_$$_291.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: $$_$$_$$_8($$_$$_$$_291.flexSC, $$_$$_$$_291.template3, "tiled" === e$attributes$templateRenderType ? $$_$$_$$_291.itemTiled : $$_$$_$$_291.itemCard)
      }, React.createElement("div", {
        className: $$_$$_$$_291.title
      }, _e.imageSlot && React.createElement("div", {
        className: $$_$$_$$_291.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), _e.titleSlot && React.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), React.createElement("div", {
        className: $$_$$_$$_8($$_$$_$$_291.flexSC, $$_$$_$$_291.subTitleBox)
      }, _e.subTitleSlot && React.createElement("div", {
        className: $$_$$_$$_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), React.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: $$_$$_$$_291.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: $$_$$_$$_8($$_$$_$$_291.flexSC, $$_$$_$$_291.template4, "tiled" === e$attributes$templateRenderType ? $$_$$_$$_291.itemTiled : $$_$$_$$_291.itemCard)
      }, React.createElement("div", {
        className: $$_$$_$$_291.avatarAndTitle
      }, _e.avatarSlot && React.createElement("div", {
        className: $$_$$_$$_291.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: $$_$$_$$_291.titleBox
      }, _e.titleSlot && React.createElement("div", {
        className: $$_$$_$$_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && React.createElement("div", {
        className: $$_$$_$$_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), React.createElement("div", {
        className: $$_$$_$$_291.iconBox
      }, React.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: $$_$$_$$_291.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return React.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: $$_$$_$$_8($$_$$_$$_291.flexSC, $$_$$_$$_291.template5, "tiled" === e$attributes$templateRenderType ? $$_$$_$$_291.itemTiled : $$_$$_$$_291.itemCard)
      }, React.createElement("div", {
        className: $$_$$_$$_291.imgAndTitleBox
      }, _e.imageSlot && React.createElement("div", {
        className: $$_$$_$$_291.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), React.createElement("div", null, _e.titleSlot && React.createElement("div", {
        className: $$_$$_$$_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.descSlot && React.createElement("div", {
        className: $$_$$_$$_291.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), React.createElement("div", {
        className: $$_$$_$$_291.iconBox
      }, React.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: $$_$$_$$_291.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
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
        className: $$_$$_$$_8($$_$$_$$_291.template6, "tiled" === e$attributes$templateRenderType ? $$_$$_$$_291.itemTiled : $$_$$_$$_291.itemCard)
      }, React.createElement("div", {
        className: $$_$$_$$_291.avatarAndTitle
      }, _e.avatarSlot && React.createElement("div", {
        className: $$_$$_$$_291.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: $$_$$_$$_291.titleBox
      }, _e.titleSlot && React.createElement("div", {
        className: $$_$$_$$_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && React.createElement("div", {
        className: $$_$$_$$_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.bannerSlot && React.createElement("div", {
        className: $$_$$_$$_291.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), _e.descSlot && React.createElement("div", {
        className: $$_$$_$$_291.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t), e$attributes$templateType === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
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
        className: $$_$$_$$_8($$_$$_$$_291.template6, "tiled" === e$attributes$templateRenderType ? $$_$$_$$_291.itemTiled : $$_$$_$$_291.itemCard)
      }, _e.bannerSlot && React.createElement("div", {
        className: $$_$$_$$_291.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), React.createElement("div", {
        className: $$_$$_$$_291.avatarAndTitle
      }, _e.avatarSlot && React.createElement("div", {
        className: $$_$$_$$_291.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), React.createElement("div", {
        className: $$_$$_$$_291.titleBox
      }, _e.titleSlot && React.createElement("div", {
        className: $$_$$_$$_291.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && React.createElement("div", {
        className: $$_$$_$$_291.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.descSlot && React.createElement("div", {
        className: $$_$$_$$_291.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t))
  }
  function O(e, n) {
    if (!e$attributes$disabled) {
      $$_$$_index.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1)
    }
  }
  function T(e) {
    if (!e$attributes$disabled) {
      $$_$$_index.emitListViewerPress(t, e)
      $$_$$_$$_55.b.playerWidgetLog({
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
    "data-role": $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.x,
    "data-min-width": $$_$$_$$_127.m,
    "data-max-width": $$_$$_$$_127.k,
    "data-min-height": $$_$$_$$_127.l,
    "data-max-height": $$_$$_$$_127.j,
    className: $$_$$_$$_8($$_$$_$$_90.b, $$_$$_$$_291.listViewerBox, $$_$$_$$_11.a({}, $$_$$_$$_291.hide, !e$visible)),
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
      var e = $$_89.b.get(e$attributes$dataSource)
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
