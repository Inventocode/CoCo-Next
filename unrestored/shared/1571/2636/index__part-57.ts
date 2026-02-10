/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-57
 */

"use strict"

import * as /* [auto-meaningful-name] */$_127 from "./127"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as wn from "./90"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import * as k from "./11"
import N from "./8"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_42_index from "./42/index"
import * as zf from "./29"
import Yf from "./29"
var Kf = [1, 2, 3]
var qf = {}
var Xf = memo(function (e) {
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
    var v = Et.Bb(e$attributes$templateSlotMap[g].widgetId)
    qf[g] = false !== (null === v || undefined === v ? undefined : v.visible)
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
        } else if ((null === (r = Et.Bb(m || "")) || undefined === r ? undefined : r.parentId) !== (null === (o = Et.Bb(i.id)) || undefined === o ? undefined : o.parentId)) {
          return i.id !== t && m !== t ? (e.stopPropagation(), void f($$_$$_$$_$$_src_editor_redux_common_actions.ug(t))) : undefined
        }
      }
    },
    "data-role": $$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_src_editor_widget_builtIn_types.x,
    "data-min-width": $_127.m,
    "data-max-width": $_127.k,
    "data-min-height": $_127.l,
    "data-max-height": $_127.j,
    className: N(wn.b, k.a({}, Yf.hide, !e$visible)),
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
  }, e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.ONLY_TITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: N(Yf.flexSC, Yf.template1, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard)
    }, qf.titleSlot ? React.createElement("div", {
      className: Yf.title
    }, $_42_index.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)) : React.createElement("div", null), React.createElement("div", {
      className: Yf.iconBox
    }, React.createElement($_13_index.j, {
      type: "icon-fold-left",
      className: Yf.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: N(Yf.flexSC, Yf.template1, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard, Yf.templateSlot)
      }, qf.titleSlot ? React.createElement("div", {
        className: Yf.titleSlot
      }) : React.createElement("div", null), React.createElement("div", {
        className: Yf.iconBox
      }, React.createElement($_13_index.j, {
        type: "icon-fold-left",
        className: Yf.icon
      })))
    })))
  }(), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.TITLE_AND_SUBTITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: N(Yf.flexSC, Yf.template2, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard)
    }, qf.titleSlot ? React.createElement("div", {
      className: Yf.title
    }, $_42_index.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)) : React.createElement("div", null), React.createElement("div", {
      className: N(Yf.flexSC, Yf.subTitleBox)
    }, qf.subTitleSlot && React.createElement("div", {
      className: Yf.subTitle
    }, $_42_index.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)), React.createElement($_13_index.j, {
      type: "icon-fold-left",
      className: Yf.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: N(Yf.flexSC, Yf.template2, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard, Yf.templateSlot)
      }, qf.titleSlot ? React.createElement("div", {
        className: Yf.titleSlot
      }) : React.createElement("div", null), React.createElement("div", {
        className: N(Yf.flexSC, Yf.subTitleBox)
      }, qf.subTitleSlot && React.createElement("div", {
        className: Yf.subTitleSlot
      }), React.createElement($_13_index.j, {
        type: "icon-fold-left",
        className: Yf.icon
      })))
    })))
  }(), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_TITLE_AND_SUBTITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: N(Yf.flexSC, Yf.template3, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard)
    }, React.createElement("div", {
      className: Yf.title
    }, qf.imageSlot && React.createElement("div", {
      className: Yf.smallImgBox
    }, $_42_index.d(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId)), qf.titleSlot && React.createElement("div", null, $_42_index.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId))), React.createElement("div", {
      className: N(Yf.flexSC, Yf.subTitleBox)
    }, qf.subTitleSlot && React.createElement("div", {
      className: Yf.subTitle
    }, $_42_index.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)), React.createElement($_13_index.j, {
      type: "icon-fold-left",
      className: Yf.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: N(Yf.flexSC, Yf.template3, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard, Yf.templateSlot)
      }, React.createElement("div", {
        className: Yf.title
      }, qf.imageSlot && React.createElement("div", {
        className: Yf.smallImgBox
      }, React.createElement("img", {
        className: Yf.smallImgSlot,
        src: $_127.f,
        alt: "",
        draggable: false
      })), qf.titleSlot && React.createElement("div", {
        className: Yf.titleSlot
      })), React.createElement("div", {
        className: N(Yf.flexSC, Yf.subTitleBox)
      }, qf.subTitleSlot && React.createElement("div", {
        className: Yf.subTitleSlot
      }), React.createElement($_13_index.j, {
        type: "icon-fold-left",
        className: Yf.icon
      })))
    })))
  }(), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.AVATAR_AND_TITLE_SUBTITLE && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: N(Yf.flexSC, Yf.template4, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard)
    }, React.createElement("div", {
      className: Yf.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Yf.avatarImgBox
    }, $_42_index.d(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId)), React.createElement("div", {
      className: Yf.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Yf.title
    }, $_42_index.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.subTitleSlot && React.createElement("div", {
      className: Yf.subTitle
    }, $_42_index.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)))), React.createElement("div", {
      className: Yf.iconBox
    }, React.createElement($_13_index.j, {
      type: "icon-fold-left",
      className: Yf.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: N(Yf.flexSC, Yf.template4, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard, Yf.templateSlot)
      }, React.createElement("div", {
        className: Yf.avatarAndTitle
      }, qf.avatarSlot && React.createElement("div", {
        className: Yf.avatarImgBox
      }, React.createElement("img", {
        className: Yf.avatarImgSlot,
        src: $_127.a,
        alt: "",
        draggable: false
      })), React.createElement("div", {
        className: Yf.titleBox
      }, qf.titleSlot && React.createElement("div", {
        className: Yf.titleSlot
      }), qf.subTitleSlot && React.createElement("div", {
        className: Yf.subTitleSlot
      }))), React.createElement("div", {
        className: Yf.iconBox
      }, React.createElement($_13_index.j, {
        type: "icon-fold-left",
        className: Yf.icon
      })))
    })))
  }(), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_AND_TITLE_DESC && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: N(Yf.flexSC, Yf.template5, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard)
    }, React.createElement("div", {
      className: Yf.imgAndTitleBox
    }, qf.imageSlot && React.createElement("div", {
      className: Yf.smallImgBox
    }, $_42_index.d(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId)), React.createElement("div", null, qf.titleSlot && React.createElement("div", {
      className: Yf.title
    }, $_42_index.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.descSlot && React.createElement("div", {
      className: Yf.desc
    }, $_42_index.d(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId)))), React.createElement("div", {
      className: Yf.iconBox
    }, React.createElement($_13_index.j, {
      type: "icon-fold-left",
      className: Yf.icon
    }))), e$attributes$dataSource && React.createElement(React.Fragment, null, Kf.map(function (e) {
      return React.createElement("div", {
        key: e,
        className: N(Yf.flexSC, Yf.template5, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard, Yf.templateSlot)
      }, React.createElement("div", {
        className: Yf.imgAndTitleBox
      }, qf.imageSlot && React.createElement("div", {
        className: Yf.smallImgBox
      }, React.createElement("img", {
        className: Yf.smallImgSlot,
        src: $_127.f,
        alt: "",
        draggable: false
      })), React.createElement("div", {
        className: Yf.titleBox
      }, qf.titleSlot && React.createElement(React.Fragment, null, React.createElement("div", {
        className: Yf.titleSlot1
      }), React.createElement("div", {
        className: Yf.titleSlot2
      })), qf.descSlot && React.createElement("div", {
        className: Yf.descSlot
      }))), React.createElement("div", {
        className: Yf.iconBox
      }, React.createElement($_13_index.j, {
        type: "icon-fold-left",
        className: Yf.icon
      })))
    })))
  }(), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: N(Yf.template6, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard)
    }, React.createElement("div", {
      className: Yf.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Yf.avatarImgBox
    }, $_42_index.d(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId)), React.createElement("div", {
      className: Yf.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Yf.title
    }, $_42_index.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.subTitleSlot && React.createElement("div", {
      className: Yf.subTitle
    }, $_42_index.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)))), qf.bannerSlot && React.createElement("div", {
      className: Yf.bannerImgBox
    }, $_42_index.d(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId)), qf.descSlot && React.createElement("div", {
      className: Yf.desc
    }, $_42_index.d(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId))), e$attributes$dataSource && React.createElement("div", {
      className: N(Yf.template6, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard, Yf.templateSlot)
    }, React.createElement("div", {
      className: Yf.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Yf.avatarImgBox
    }, React.createElement("img", {
      className: Yf.avatarImgSlot,
      src: $_127.a,
      alt: "",
      draggable: false
    })), React.createElement("div", {
      className: Yf.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Yf.titleSlot
    }), qf.subTitleSlot && React.createElement("div", {
      className: Yf.subTitleSlot
    }))), qf.bannerSlot && React.createElement("div", {
      className: Yf.bannerImgBox
    }, React.createElement("img", {
      className: Yf.bannerImgSlot,
      src: $_127.b,
      alt: "",
      draggable: false
    })), qf.descSlot && React.createElement(React.Fragment, null, React.createElement("div", {
      className: Yf.descSlot1
    }), React.createElement("div", {
      className: Yf.descSlot2
    }), " ")))
  }(), e$attributes$templateType === $$_$$_$$_$$_src_editor_widget_builtIn_types.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function () {
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
    var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: N(Yf.template6, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard)
    }, qf.bannerSlot && React.createElement("div", {
      className: Yf.bannerImgBox
    }, $_42_index.d(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId)), React.createElement("div", {
      className: Yf.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Yf.avatarImgBox
    }, $_42_index.d(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId)), React.createElement("div", {
      className: Yf.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Yf.title
    }, $_42_index.d(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId)), qf.subTitleSlot && React.createElement("div", {
      className: Yf.subTitle
    }, $_42_index.d(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId)))), qf.descSlot && React.createElement("div", {
      className: Yf.desc
    }, $_42_index.d(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId))), e$attributes$dataSource && React.createElement("div", {
      className: N(Yf.template6, "tiled" === e$attributes$templateRenderType ? Yf.itemTiled : Yf.itemCard, Yf.templateSlot)
    }, qf.bannerSlot && React.createElement("div", {
      className: Yf.bannerImgBox
    }, React.createElement("img", {
      className: Yf.bannerImgSlot,
      src: $_127.b,
      alt: "",
      draggable: false
    })), React.createElement("div", {
      className: Yf.avatarAndTitle
    }, qf.avatarSlot && React.createElement("div", {
      className: Yf.avatarImgBox
    }, React.createElement("img", {
      className: Yf.avatarImgSlot,
      src: $_127.a,
      alt: "",
      draggable: false
    })), React.createElement("div", {
      className: Yf.titleBox
    }, qf.titleSlot && React.createElement("div", {
      className: Yf.titleSlot
    }), qf.subTitleSlot && React.createElement("div", {
      className: Yf.subTitleSlot
    }))), qf.descSlot && React.createElement(React.Fragment, null, React.createElement("div", {
      className: Yf.descSlot1
    }), React.createElement("div", {
      className: Yf.descSlot2
    }))))
  }()))
})
export { Xf }
