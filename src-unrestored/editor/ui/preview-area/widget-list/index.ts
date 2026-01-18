/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-87
 */

"use strict"

import { we } from "../../../../../unrestored/shared/1571/2636/index__part-6"
import { Rn } from "../../../../../unrestored/shared/1571/2636/index__part-23"
import { to } from "../screen-list/index"
import { lo } from "../../../../../unrestored/shared/1571/2636/index__part-27"
import { zd } from "../../../../../unrestored/shared/1571/2636/index__part-33"
import { sv, gv } from "./item"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_94_index from "../../../../../unrestored/shared/1571/2636/94/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196 from "../../../../../unrestored/shared/1571/2636/196"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_279 from "../../../../../unrestored/shared/1571/2636/279"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1512 from "../../../../../unrestored/shared/1571/2636/1512"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_238 from "../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_75 from "../../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_90 from "../../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_widget_custom_type from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8 from "../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index from "../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1514 from "../../../../../unrestored/shared/1571/2636/1514"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15141 from "../../../../../unrestored/shared/1571/2636/1514"
var bv = React1.memo(function (e) {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  var r = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  return React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.d, {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.widgetMallBtn,
    onClick: function () {
      var e = function () {
        r($$_$$_$$_redux_common_actions.gj(true))
      }
      if (n) {
        e()
      } else {
        r($$_$$_$$_redux_common_actions.Ch(e))
      }
    }
  }, React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_94_index.a, {
    type: "icon-shop",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.shopIcon
  }), !e.singleColumn && React.createElement("span", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "Widget.widgetMall"
  })))
})
var yv
var Ev = React.memo(function (e) {
  var t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.myExtensionWidgets
  })
  var n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  var r = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var o = []
  var i = []
  var a = function (e) {
    return {
      icon: e.icon,
      title: e.widgetName,
      previewAreaWidgetTitle: "",
      type: $$_$$_$$_$$_shared_widget_custom_type.c(e.type, true),
      isInvisibleWidget: e.isInvisibleWidget,
      widgetServerId: e.id
    }
  }
  t.forEach(function (e) {
    if (e.isInvisibleWidget) {
      i.push(a(e))
    } else {
      o.push(a(e))
    }
  })
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var c = React1.useState(false)
  var l = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React1.useState(true)
  var m = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_238.c()
  var y = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Eb($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.j.EXTENSION).filter(function (e) {
    return !$$_$$_$$_$$_shared_widget_custom_type.e(e.type)
  })
  React1.useEffect(function () {
    var e = function () {
      var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return $$_$$_$$_redux_common_actions.Nf(r, $$_$$_$$_redux_common_actions.eg())
              case 2:
                d(false)
              case 3:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function () {
        return e.apply(this, arguments)
      }
    }()
    if (n) {
      d(true)
      e()
    } else {
      r($$_$$_$$_redux_common_actions.Sh([]))
    }
  }, [r, n])
  React1.useEffect(function () {
    if (0 === y.length && 0 === o.length && 0 === i.length) {
      v(true)
    } else {
      v(false)
    }
  }, [y, o, i])
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.scrollExtension
  }, !u && g && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.noExtensionWidgets
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.noExtensionWidgetsWrapper
  }, !e.singleColumn && React.createElement(we, {
    type: "image-text",
    text: React.createElement(React.Fragment, null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "Widget.emptyTip1"
    }), React.createElement("br", null), $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "Widget.emptyTip2"
    }))
  }), React.createElement(bv, {
    singleColumn: e.singleColumn
  }))), !u && React.createElement(React.Fragment, null, React.createElement(sv, {
    configList: i,
    title: "ExtensionWidget.category.function"
  }), React.createElement(sv, {
    configList: o,
    title: "ExtensionWidget.category.ui"
  }), React.createElement(sv, {
    key: b,
    configList: y,
    title: "ExtensionWidget.category.extension"
  })), u && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.loading,
    style: {
      height: "100%"
    }
  }, React.createElement("img", {
    src: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_15141,
    alt: "loading"
  }))), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.widgetMallBtnContainer
  }, !g && React.createElement(bv, {
    singleColumn: e.singleColumn
  })))
})
!function (e) {
  e.BASIC = "BASIC"
  e.EXTENSION = "EXTENSION"
}(yv || (yv = {}))
var Ov = React.memo(function (e) {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.uiConfig.widgetEditor
  }) === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly
  var r = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return !!e.oTState.collWorkId
  })
  var o = React1.useState(yv.BASIC)
  var i = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  return React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContainer, e.singleColumn ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.singleColumn : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.doubleColumn, n && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.readonly)
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabNav
  }, React.createElement("div", {
    onClick: function () {
      s(yv.BASIC)
    },
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tab, a === yv.BASIC && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.activeTab)
  }, React.createElement("div", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "Widget.basic"
  }))), React.createElement("div", {
    onClick: function () {
      s(yv.EXTENSION)
    },
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tab, a === yv.EXTENSION && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.activeTab)
  }, React.createElement("div", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "Widget.extension"
  })))), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContent
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContentBox, a !== yv.BASIC && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.hide)
  }, React.createElement(gv, {
    isOT: r
  })), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContentBox, a !== yv.EXTENSION && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.hide)
  }, React.createElement(Ev, {
    singleColumn: e.singleColumn
  }))))
})
var wv = React.memo(function () {
  var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.stageToast
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var a = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var s = React1.useRef(null)
  React1.useEffect(function () {
    if (s.current) {
      clearTimeout(s.current)
    }
    if (e$visible) {
      s.current = window.setTimeout(function () {
        a($$_$$_$$_redux_common_actions.th())
      }, 3e3)
    }
  }, [a, e$visible, r])
  return e$visible ? React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.toastWrapper
  }, React.createElement("span", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.toast
  }, i && React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-alert-success",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.icon
  }), r)) : null
})
var Cv = window.innerWidth > 1300 ? 144 : 92
var Tv = 92 === Cv
var Sv = React.memo(function () {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var n = React1.useRef(null)
  var r = React1.useRef(null)
  var o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.playing
  })
  var i = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.stageVisible
  })
  var a = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.isHoverBlockArea
  })
  var s = React1.useState(0)
  var c = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = React1.useState(false)
  var p = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  React1.useEffect(function () {
    var /* [auto-meaningful-name] */n$current = n.current
    var r = function (e) {
      var n
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      var a = e$target.closest("." + $$_$$_$$_$$_$$_unrestored_shared_1571_2636_90.b)
      var s = (null === a || undefined === a ? undefined : a.id) || ""
      var c = null === a || undefined === a ? undefined : a.classList.contains($$_$$_$$_$$_$$_unrestored_shared_1571_2636_90.a)
      if (!c) {
        e.preventDefault()
      }
      if (!a || c || (null === (n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(s)) || undefined === n ? undefined : n.parentId)) {
        t($$_$$_$$_redux_common_actions.Wg())
      } else {
        t($$_$$_$$_redux_common_actions.Og({
          position: {
            x: e$clientX,
            y: e$clientY
          },
          visible: true,
          widgetId: a.id
        }))
      }
    }
    if (n$current) {
      n$current.addEventListener("contextmenu", r)
    }
    return function () {
      if (n$current) {
        n$current.removeEventListener("contextmenu", r)
      }
    }
  }, [t, n])
  React1.useLayoutEffect(function () {
    if (r.current) {
      var e = Math.max(window.innerWidth / 3, 514)
      r.current.style.width = "".concat(e, "px")
      u(e + 1)
      t($$_$$_$$_redux_common_actions.Zi(e - Cv))
      if (n.current) {
        var /* [auto-meaningful-name] */n$current$offsetWidth = n.current.offsetWidth
        var /* [auto-meaningful-name] */n$current$offsetHeight = n.current.offsetHeight
        var a = .8 * n$current$offsetWidth / $$_$$_$$_$$_$$_unrestored_shared_1571_2636_75.e
        var s = (n$current$offsetHeight - 80) / $$_$$_$$_$$_$$_unrestored_shared_1571_2636_75.d
        var c = Math.min(a, s, 1)
        c = Math.max(c, .7)
        t($$_$$_$$_redux_common_actions.Xi(c))
      }
    }
  }, [t])
  React1.useLayoutEffect(function () {
    if (r.current && n.current) {
      var e = n.current.offsetWidth + Cv
      e = Math.max(e, 514)
      Animejs.default({
        targets: "#previewAreaWrapper",
        width: e,
        easing: "easeInOutSine",
        duration: 300
      })
    }
  }, [])
  return React.createElement("div", {
    id: "previewAreaWrapper",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.wrapper,
    ref: r,
    style: {
      marginLeft: i || o ? 0 : -l
    }
  }, React.createElement("section", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.body
  }, React.createElement(React.Fragment, null, React.createElement("aside", {
    style: {
      width: "".concat(Cv, "px")
    },
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.side
  }, React.createElement(Ov, {
    singleColumn: Tv
  })), React.createElement(to, null), React.createElement("main", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.main,
    ref: n
  }, React.createElement(zd, null), React.createElement(wv, null), React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_1512.a, null)), !o && React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    placement: "bottom",
    title: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: i ? "HeaderDropdown.hideWidgetAndStage" : "HeaderDropdown.showWidgetAndStage"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_8($$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.foldBtn, i ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.hide : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.show, (m || a) && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_279.visible),
    onClick: function () {
      t($$_$$_$$_redux_common_actions.Yi(!i))
    },
    onMouseEnter: function () {
      return g(true)
    },
    onMouseLeave: function () {
      return g(false)
    }
  }, React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-double-arrow"
  })))), React.createElement(Rn, null)), !o && React.createElement(lo, {
    onDrag: function (e) {
      t($$_$$_$$_redux_common_actions.Zi(e - Cv))
    },
    onDragEnd: function (e) {
      u(e + 1)
      t($$_$$_$$_redux_common_actions.Zi(e - Cv))
    },
    onEnter: function () {
      return t($$_$$_$$_redux_common_actions.ui(true))
    },
    onLeave: function () {
      return t($$_$$_$$_redux_common_actions.ui(false))
    },
    previewAreaRef: r
  }))
})
export { Cv }
export { Sv }
