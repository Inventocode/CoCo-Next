/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-57
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"./127"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_42 from /* 42 */"./42/index"
import * as /* [auto-meaningful-name] */Module_29 from /* 29 */"./29"
import /* [auto-meaningful-name] */Module_291 from /* 29 */"./29"
var Kf = [1, 2, 3]
var qf = {}
var Xf = React1.memo(function (e) {
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
  for (var g in e$attributes$templateSlotMap) {
    var v = Module_9.Bb(e$attributes$templateSlotMap[g].widgetId)
    qf[g] = false !== (null === v || undefined === v ? undefined : v.visible)
  }
  return React.createElement("div", {
    id: t,
    onMouseDown: function (e) {
      var n
      var r
      var o
      var i = e.target.closest("." + Module_90.b)
      if (i) {
        if ((null === (n = Module_9.Bb(i.id)) || undefined === n ? undefined : n.parentId) && i.id === m) {
          e.stopPropagation()
        } else if ((null === (r = Module_9.Bb(m || "")) || undefined === r ? undefined : r.parentId) !== (null === (o = Module_9.Bb(i.id)) || undefined === o ? undefined : o.parentId)) {
          return i.id !== t && m !== t ? (e.stopPropagation(), void f(Src_editor_redux_common_actions.ug(t))) : undefined
        }
      }
    },
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.x,
    "data-min-width": Module_127.m,
    "data-max-width": Module_127.k,
    "data-min-height": Module_127.l,
    "data-max-height": Module_127.j,
    className: Classnames(Module_90.b, Module_11.a({}, Module_291.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      background: e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined
    }
  }, React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }
  }, e$attributes$templateType === Src_editor_widget_builtIn_types.o.ONLY_TITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: Classnames(Module_291.flexSC, Module_291.template1, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
    }, qf.titleSlot ? React.createElement("div", {
      className: Module_291.title
    }, Module_42.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)) : React.createElement("div", null), React.createElement("div", {
      className: Module_291.iconBox
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-fold-left",
      className: Module_291.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: Classnames(Module_291.flexSC, Module_291.template1, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard, Module_291.templateSlot)
      }, qf.titleSlot ? React.createElement("div", {
        className: Module_291.titleSlot
      }) : React.createElement("div", null), React.createElement("div", {
        className: Module_291.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    })))
  }(), e$attributes$templateType === Src_editor_widget_builtIn_types.o.TITLE_AND_SUBTITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: Classnames(Module_291.flexSC, Module_291.template2, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
    }, qf.titleSlot ? React.createElement("div", {
      className: Module_291.title
    }, Module_42.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)) : React.createElement("div", null), React.createElement("div", {
      className: Classnames(Module_291.flexSC, Module_291.subTitleBox)
    }, qf.subTitleSlot && React.createElement("div", {
      className: Module_291.subTitle
    }, Module_42.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)), React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-fold-left",
      className: Module_291.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: Classnames(Module_291.flexSC, Module_291.template2, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard, Module_291.templateSlot)
      }, qf.titleSlot ? React.createElement("div", {
        className: Module_291.titleSlot
      }) : React.createElement("div", null), React.createElement("div", {
        className: Classnames(Module_291.flexSC, Module_291.subTitleBox)
      }, qf.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitleSlot
      }), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    })))
  }(), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_TITLE_AND_SUBTITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: Classnames(Module_291.flexSC, Module_291.template3, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
    }, React.createElement("div", {
      className: Module_291.title
    }, qf.imageSlot && React.createElement("div", {
      className: Module_291.smallImgBox
    }, Module_42.d(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId)), qf.titleSlot && React.createElement("div", null, Module_42.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId))), React.createElement("div", {
      className: Classnames(Module_291.flexSC, Module_291.subTitleBox)
    }, qf.subTitleSlot && React.createElement("div", {
      className: Module_291.subTitle
    }, Module_42.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)), React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-fold-left",
      className: Module_291.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: Classnames(Module_291.flexSC, Module_291.template3, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard, Module_291.templateSlot)
      }, React.createElement("div", {
        className: Module_291.title
      }, qf.imageSlot && React.createElement("div", {
        className: Module_291.smallImgBox
      }, React.createElement("img", {
        className: Module_291.smallImgSlot,
        src: Module_127.f,
        alt: "",
        draggable: false
      })), qf.titleSlot && React.createElement("div", {
        className: Module_291.titleSlot
      })), React.createElement("div", {
        className: Classnames(Module_291.flexSC, Module_291.subTitleBox)
      }, qf.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitleSlot
      }), React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    })))
  }(), e$attributes$templateType === Src_editor_widget_builtIn_types.o.AVATAR_AND_TITLE_SUBTITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: Classnames(Module_291.flexSC, Module_291.template4, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
    }, React.createElement("div", {
      className: Module_291.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Module_291.avatarImgBox
    }, Module_42.d(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId)), React.createElement("div", {
      className: Module_291.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Module_291.title
    }, Module_42.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.subTitleSlot && React.createElement("div", {
      className: Module_291.subTitle
    }, Module_42.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)))), React.createElement("div", {
      className: Module_291.iconBox
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-fold-left",
      className: Module_291.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: Classnames(Module_291.flexSC, Module_291.template4, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard, Module_291.templateSlot)
      }, React.createElement("div", {
        className: Module_291.avatarAndTitle
      }, qf.avatarSlot && React.createElement("div", {
        className: Module_291.avatarImgBox
      }, React.createElement("img", {
        className: Module_291.avatarImgSlot,
        src: Module_127.a,
        alt: "",
        draggable: false
      })), React.createElement("div", {
        className: Module_291.titleBox
      }, qf.titleSlot && React.createElement("div", {
        className: Module_291.titleSlot
      }), qf.subTitleSlot && React.createElement("div", {
        className: Module_291.subTitleSlot
      }))), React.createElement("div", {
        className: Module_291.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    })))
  }(), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_AND_TITLE_DESC && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: Classnames(Module_291.flexSC, Module_291.template5, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
    }, React.createElement("div", {
      className: Module_291.imgAndTitleBox
    }, qf.imageSlot && React.createElement("div", {
      className: Module_291.smallImgBox
    }, Module_42.d(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId)), React.createElement("div", null, qf.titleSlot && React.createElement("div", {
      className: Module_291.title
    }, Module_42.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.descSlot && React.createElement("div", {
      className: Module_291.desc
    }, Module_42.d(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId)))), React.createElement("div", {
      className: Module_291.iconBox
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-fold-left",
      className: Module_291.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: Classnames(Module_291.flexSC, Module_291.template5, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard, Module_291.templateSlot)
      }, React.createElement("div", {
        className: Module_291.imgAndTitleBox
      }, qf.imageSlot && React.createElement("div", {
        className: Module_291.smallImgBox
      }, React.createElement("img", {
        className: Module_291.smallImgSlot,
        src: Module_127.f,
        alt: "",
        draggable: false
      })), React.createElement("div", {
        className: Module_291.titleBox
      }, qf.titleSlot && React.createElement(React.Fragment, null, React.createElement("div", {
        className: Module_291.titleSlot1
      }), React.createElement("div", {
        className: Module_291.titleSlot2
      })), qf.descSlot && React.createElement("div", {
        className: Module_291.descSlot
      }))), React.createElement("div", {
        className: Module_291.iconBox
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-fold-left",
        className: Module_291.icon
      })))
    })))
  }(), e$attributes$templateType === Src_editor_widget_builtIn_types.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: Classnames(Module_291.template6, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
    }, React.createElement("div", {
      className: Module_291.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Module_291.avatarImgBox
    }, Module_42.d(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId)), React.createElement("div", {
      className: Module_291.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Module_291.title
    }, Module_42.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.subTitleSlot && React.createElement("div", {
      className: Module_291.subTitle
    }, Module_42.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)))), qf.bannerSlot && React.createElement("div", {
      className: Module_291.bannerImgBox
    }, Module_42.d(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId)), qf.descSlot && React.createElement("div", {
      className: Module_291.desc
    }, Module_42.d(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId))), e$attributes$dataSource && React.createElement("div", {
      className: Classnames(Module_291.template6, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard, Module_291.templateSlot)
    }, React.createElement("div", {
      className: Module_291.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Module_291.avatarImgBox
    }, React.createElement("img", {
      className: Module_291.avatarImgSlot,
      src: Module_127.a,
      alt: "",
      draggable: false
    })), React.createElement("div", {
      className: Module_291.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Module_291.titleSlot
    }), qf.subTitleSlot && React.createElement("div", {
      className: Module_291.subTitleSlot
    }))), qf.bannerSlot && React.createElement("div", {
      className: Module_291.bannerImgBox
    }, React.createElement("img", {
      className: Module_291.bannerImgSlot,
      src: Module_127.b,
      alt: "",
      draggable: false
    })), qf.descSlot && React.createElement(React.Fragment, null, React.createElement("div", {
      className: Module_291.descSlot1
    }), React.createElement("div", {
      className: Module_291.descSlot2
    }), " ")))
  }(), e$attributes$templateType === Src_editor_widget_builtIn_types.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: Classnames(Module_291.template6, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard)
    }, qf.bannerSlot && React.createElement("div", {
      className: Module_291.bannerImgBox
    }, Module_42.d(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId)), React.createElement("div", {
      className: Module_291.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Module_291.avatarImgBox
    }, Module_42.d(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId)), React.createElement("div", {
      className: Module_291.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Module_291.title
    }, Module_42.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.subTitleSlot && React.createElement("div", {
      className: Module_291.subTitle
    }, Module_42.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)))), qf.descSlot && React.createElement("div", {
      className: Module_291.desc
    }, Module_42.d(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId))), e$attributes$dataSource && React.createElement("div", {
      className: Classnames(Module_291.template6, "tiled" === e$attributes$templateRenderType ? Module_291.itemTiled : Module_291.itemCard, Module_291.templateSlot)
    }, qf.bannerSlot && React.createElement("div", {
      className: Module_291.bannerImgBox
    }, React.createElement("img", {
      className: Module_291.bannerImgSlot,
      src: Module_127.b,
      alt: "",
      draggable: false
    })), React.createElement("div", {
      className: Module_291.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Module_291.avatarImgBox
    }, React.createElement("img", {
      className: Module_291.avatarImgSlot,
      src: Module_127.a,
      alt: "",
      draggable: false
    })), React.createElement("div", {
      className: Module_291.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Module_291.titleSlot
    }), qf.subTitleSlot && React.createElement("div", {
      className: Module_291.subTitleSlot
    }))), qf.descSlot && React.createElement(React.Fragment, null, React.createElement("div", {
      className: Module_291.descSlot1
    }), React.createElement("div", {
      className: Module_291.descSlot2
    }))))
  }()))
})
export { Xf }
