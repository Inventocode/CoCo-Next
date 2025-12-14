/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-87
 */

"use strict"

import { we } from "./index__part-6"
import { Rn } from "./index__part-23"
import { to } from "./index__part-26"
import { lo } from "./index__part-27"
import { zd } from "./index__part-33"
import { sv, gv } from "./index__part-86"
import * as /* [auto-meaningful-name] */$_94_index from "./94/index"
import /* [auto-meaningful-name] */$_196 from "./196"
import /* [auto-meaningful-name] */$_279 from "./279"
import * as /* [auto-meaningful-name] */$_1512 from "./1512"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as kn from "./75"
import * as wn from "./90"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../src/shared/widget/custom/type"
import * as Et from "./9"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1514 from "./1514"
import /* [auto-meaningful-name] */_$_ from "./1514"
var bv = _React.memo(function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var r = $_16_index.d()
  return React.createElement($_13_index.d, {
    className: $_196.widgetMallBtn,
    onClick: function () {
      var e = function () {
        r($$_$$_$$_$$_src_shared_events_messagesWrapper.gj(true))
      }
      if (n) {
        e()
      } else {
        r($$_$$_$$_$$_src_shared_events_messagesWrapper.Ch(e))
      }
    }
  }, React.createElement($_94_index.a, {
    type: "icon-shop",
    className: $_196.shopIcon
  }), !e.singleColumn && React.createElement("span", null, $_710_index$a$formatMessage({
    id: "Widget.widgetMall"
  })))
})
var yv
var Ev = React.memo(function (e) {
  var t = $_16_index.e(function (e) {
    return e.common.myExtensionWidgets
  })
  var n = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var r = $_16_index.d()
  var o = []
  var i = []
  var a = function (e) {
    return {
      icon: e.icon,
      title: e.widgetName,
      previewAreaWidgetTitle: "",
      type: $$_$$_$$_$$_src_shared_widget_custom_type.c(e.type, true),
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
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = _React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = _React.useState(true)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = $_238.c()
  var y = Et.Eb(Et.j.EXTENSION).filter(function (e) {
    return !$$_$$_$$_$$_src_shared_widget_custom_type.e(e.type)
  })
  _React.useEffect(function () {
    var e = function () {
      var e = O.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(r, $$_$$_$$_$$_src_shared_events_messagesWrapper.eg())
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
      r($$_$$_$$_$$_src_shared_events_messagesWrapper.Sh([]))
    }
  }, [r, n])
  _React.useEffect(function () {
    if (0 === y.length && 0 === o.length && 0 === i.length) {
      v(true)
    } else {
      v(false)
    }
  }, [y, o, i])
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_196.scrollExtension
  }, !u && g && React.createElement("div", {
    className: $_196.noExtensionWidgets
  }, React.createElement("div", {
    className: $_196.noExtensionWidgetsWrapper
  }, !e.singleColumn && React.createElement(we, {
    type: "image-text",
    text: React.createElement(React.Fragment, null, $_710_index$a$formatMessage({
      id: "Widget.emptyTip1"
    }), React.createElement("br", null), $_710_index$a$formatMessage({
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
    className: $_196.loading,
    style: {
      height: "100%"
    }
  }, React.createElement("img", {
    src: _$_,
    alt: "loading"
  }))), React.createElement("div", {
    className: $_196.widgetMallBtnContainer
  }, !g && React.createElement(bv, {
    singleColumn: e.singleColumn
  })))
})
!function (e) {
  e.BASIC = "BASIC"
  e.EXTENSION = "EXTENSION"
}(yv || (yv = {}))
var Ov = React.memo(function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.uiConfig.widgetEditor
  }) === K.j.ReadOnly
  var r = $_16_index.e(function (e) {
    return !!e.oTState.collWorkId
  })
  var o = _React.useState(yv.BASIC)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  return React.createElement("div", {
    className: N($_196.tabContainer, e.singleColumn ? $_196.singleColumn : $_196.doubleColumn, n && $_196.readonly)
  }, React.createElement("div", {
    className: $_196.tabNav
  }, React.createElement("div", {
    onClick: function () {
      s(yv.BASIC)
    },
    className: N($_196.tab, a === yv.BASIC && $_196.activeTab)
  }, React.createElement("div", null, $_710_index$a$formatMessage({
    id: "Widget.basic"
  }))), React.createElement("div", {
    onClick: function () {
      s(yv.EXTENSION)
    },
    className: N($_196.tab, a === yv.EXTENSION && $_196.activeTab)
  }, React.createElement("div", null, $_710_index$a$formatMessage({
    id: "Widget.extension"
  })))), React.createElement("div", {
    className: $_196.tabContent
  }, React.createElement("div", {
    className: N($_196.tabContentBox, a !== yv.BASIC && $_196.hide)
  }, React.createElement(gv, {
    isOT: r
  })), React.createElement("div", {
    className: N($_196.tabContentBox, a !== yv.EXTENSION && $_196.hide)
  }, React.createElement(Ev, {
    singleColumn: e.singleColumn
  }))))
})
var wv = React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.stageToast
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var a = $_16_index.d()
  var s = _React.useRef(null)
  _React.useEffect(function () {
    if (s.current) {
      clearTimeout(s.current)
    }
    if (e$visible) {
      s.current = window.setTimeout(function () {
        a($$_$$_$$_$$_src_shared_events_messagesWrapper.th())
      }, 3e3)
    }
  }, [a, e$visible, r])
  return e$visible ? React.createElement("div", {
    className: $_279.toastWrapper
  }, React.createElement("span", {
    className: $_279.toast
  }, i && React.createElement($_13_index.j, {
    type: "icon-alert-success",
    className: $_279.icon
  }), r)) : null
})
var Cv = window.innerWidth > 1300 ? 144 : 92
var Tv = 92 === Cv
var Sv = React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = _React.useRef(null)
  var r = _React.useRef(null)
  var o = $_16_index.e(function (e) {
    return e.project.playing
  })
  var i = $_16_index.e(function (e) {
    return e.common.stageVisible
  })
  var a = $_16_index.e(function (e) {
    return e.common.isHoverBlockArea
  })
  var s = _React.useState(0)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = _React.useState(false)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */n$current = n.current
    var r = function (e) {
      var n
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      var a = e$target.closest("." + wn.b)
      var s = (null === a || undefined === a ? undefined : a.id) || ""
      var c = null === a || undefined === a ? undefined : a.classList.contains(wn.a)
      if (!c) {
        e.preventDefault()
      }
      if (!a || c || (null === (n = Et.Bb(s)) || undefined === n ? undefined : n.parentId)) {
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.Wg())
      } else {
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.Og({
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
  _React.useLayoutEffect(function () {
    if (r.current) {
      var e = Math.max(window.innerWidth / 3, 514)
      r.current.style.width = "".concat(e, "px")
      u(e + 1)
      t($$_$$_$$_$$_src_shared_events_messagesWrapper.Zi(e - Cv))
      if (n.current) {
        var /* [auto-meaningful-name] */n$current$offsetWidth = n.current.offsetWidth
        var /* [auto-meaningful-name] */n$current$offsetHeight = n.current.offsetHeight
        var a = .8 * n$current$offsetWidth / kn.e
        var s = (n$current$offsetHeight - 80) / kn.d
        var c = Math.min(a, s, 1)
        c = Math.max(c, .7)
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.Xi(c))
      }
    }
  }, [t])
  _React.useLayoutEffect(function () {
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
    className: $_279.wrapper,
    ref: r,
    style: {
      marginLeft: i || o ? 0 : -l
    }
  }, React.createElement("section", {
    className: $_279.body
  }, React.createElement(React.Fragment, null, React.createElement("aside", {
    style: {
      width: "".concat(Cv, "px")
    },
    className: $_279.side
  }, React.createElement(Ov, {
    singleColumn: Tv
  })), React.createElement(to, null), React.createElement("main", {
    className: $_279.main,
    ref: n
  }, React.createElement(zd, null), React.createElement(wv, null), React.createElement($_1512.a, null)), !o && React.createElement($_748_index.a, {
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: i ? "HeaderDropdown.hideWidgetAndStage" : "HeaderDropdown.showWidgetAndStage"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    className: N($_279.foldBtn, i ? $_279.hide : $_279.show, (m || a) && $_279.visible),
    onClick: function () {
      t($$_$$_$$_$$_src_shared_events_messagesWrapper.Yi(!i))
    },
    onMouseEnter: function () {
      return g(true)
    },
    onMouseLeave: function () {
      return g(false)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-double-arrow"
  })))), React.createElement(Rn, null)), !o && React.createElement(lo, {
    onDrag: function (e) {
      t($$_$$_$$_$$_src_shared_events_messagesWrapper.Zi(e - Cv))
    },
    onDragEnd: function (e) {
      u(e + 1)
      t($$_$$_$$_$$_src_shared_events_messagesWrapper.Zi(e - Cv))
    },
    onEnter: function () {
      return t($$_$$_$$_$$_src_shared_events_messagesWrapper.ui(true))
    },
    onLeave: function () {
      return t($$_$$_$$_$$_src_shared_events_messagesWrapper.ui(false))
    },
    previewAreaRef: r
  }))
})
export { Cv }
export { Sv }
