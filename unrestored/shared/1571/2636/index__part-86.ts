/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-86
 */

"use strict"

import { r, o, i, a, s, c, l, u, d, p } from "./index__part-0"
import { Cp } from "./index__part-38"
import { Lp } from "./index__part-40"
import { Kp } from "./index__part-43"
import { tf } from "./index__part-44"
import { uf } from "./index__part-46"
import { _f } from "./index__part-48"
import { Tf } from "./index__part-50"
import { xf } from "./index__part-53"
import { Wf } from "./index__part-55"
import { Jf } from "./index__part-58"
import { ah } from "./index__part-60"
import { wh } from "./index__part-64"
import { xh } from "./index__part-66"
import { zh, Xh } from "./index__part-68"
import { nm, im, cm } from "./index__part-70"
import { hm } from "./index__part-72"
import { ym, wm, Sm } from "../../../../src/editor/widget/built-in/http-client-and-timer"
import { Pm, zm, qm, eg } from "./index__part-75"
import { cg } from "./index__part-76"
import { gg } from "./index__part-77"
import { Og } from "./index__part-78"
import { c_ } from "./index__part-80"
import { __ } from "./index__part-81"
import { tv } from "./index__part-85"
var ev
import * as /* [auto-meaningful-name] */$_682 from "./682"
import * as /* [auto-meaningful-name] */$_681 from "./681"
import * as /* [auto-meaningful-name] */$_680 from "./680"
import * as /* [auto-meaningful-name] */$_679 from "./679"
import * as /* [auto-meaningful-name] */$_688 from "./688"
import * as /* [auto-meaningful-name] */$_687 from "./687"
import * as /* [auto-meaningful-name] */$_678 from "./678"
import * as /* [auto-meaningful-name] */$_686 from "./686"
import * as /* [auto-meaningful-name] */$_685_index from "./685/index"
import * as /* [auto-meaningful-name] */$_684_index from "./684/index"
import * as /* [auto-meaningful-name] */$_683 from "./683"
import /* [auto-meaningful-name] */$_196 from "./196"
import * as Yr from "./53"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../src/shared/widget/custom/type"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../src/shared/ui/language"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_94_index from "./94/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_shop from "../../../../src/shared/widget/custom/shop"
import * as /* [auto-meaningful-name] */$_542 from "./542"
var iv = [require("./543").a, $_542.a, "UNSAFE_EXTENSION_KANO_WAND_WIDGET"]
var av = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$isMallExtensionWidget = e.isMallExtensionWidget
  var /* [auto-meaningful-name] */e$isInvisibleWidget = e.isInvisibleWidget
  var /* [auto-meaningful-name] */e$widgetServerId = e.widgetServerId
  var s = $_238.d()
  var c = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var u = _React.useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = _React.useState(false)
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = _React.useState(false)
  var C = $_10_index.a(w, 2)
  var A = C[0]
  var j = C[1]
  var R = _React.useState(true)
  var x = $_10_index.a(R, 2)
  var D = x[0]
  var M = x[1]
  var L = $_16_index.e(function (e) {
    return e.project.globalWidgetIds
  })
  var P = $_16_index.e(function (e) {
    return e.common.language
  })
  _React.useEffect(function () {
    var e = function e() {
      m(false)
      y(false)
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
      document.removeEventListener("dragstart", e, true)
    }
    if (p || b) {
      document.addEventListener("click", e, true)
      document.addEventListener("contextmenu", e, true)
      document.addEventListener("dragstart", e, true)
    }
  }, [p, b])
  _React.useEffect(function () {
    if (iv.includes(e$type)) {
      var e = L.some(function (e) {
        return e.includes(e$type)
      })
      M(!e)
    }
  }, [e$type, L])
  var B = true
  if (!(e$type !== An.a && e$type !== An.c || !s)) {
    B = s.widgetIds.some(function (e) {
      var t
      return (null === (t = Et.Bb(e)) || undefined === t ? undefined : t.type) === An.f
    })
  }
  var F = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!e$widgetServerId) {
                e.next = 7
                break
              }
              e.next = 3
              return $$_$$_$$_$$_src_shared_widget_custom_shop.g([e$widgetServerId])
            case 3:
              if (e.sent) {
                c($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                  message: $_710_index$a$formatMessage({
                    id: "WidgetMall.removeSuccess"
                  }),
                  type: "success"
                }))
                c($$_$$_$$_$$_src_shared_events_messagesWrapper.Kh([e$type]))
              } else {
                c($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                  message: $_710_index$a$formatMessage({
                    id: "WidgetMall.removeFailure"
                  })
                }))
              }
              e.next = 8
              break
            case 7:
              console.error("removeWidget error: widgetServerId is null")
            case 8:
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
  return React.createElement($_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        m(false)
        y(false)
      }
    },
    visible: p || b,
    content: function () {
      return p ? React.createElement("div", {
        className: $_196.menuWrapper,
        onMouseDown: F
      }, $_710_index$a$formatMessage({
        id: "Widget.removeWidget"
      })) : b && A ? React.createElement("div", {
        className: $_196.imgWrapper
      }, React.createElement("div", {
        className: $_196.widgetImgBig,
        style: {
          backgroundImage: "url(\"".concat(e$icon, "\")")
        }
      })) : undefined
    }
  }, React.createElement("div", {
    className: N($_196.widgetItem, k.a({}, $_196.disabled, !B || !D)),
    draggable: true,
    onMouseEnter: function () {
      if (e$isMallExtensionWidget && !e$isInvisibleWidget) {
        if (!p) {
          j(true)
          ev = window.setTimeout(function () {
            y(true)
          }, 2e3)
        }
      }
    },
    onMouseLeave: function () {
      if (e$isMallExtensionWidget && !e$isInvisibleWidget) {
        if (ev) {
          clearTimeout(ev)
        }
        j(false)
        y(false)
      }
    },
    onContextMenu: function (e) {
      e.preventDefault()
      if (e$isMallExtensionWidget) {
        j(false)
        y(false)
        m(true)
      }
    },
    onDragStart: function (e) {
      if (!B || !D) {
        var t = ""
        if (D) {
          t = $_710_index$a$formatMessage({
            id: "StageToast.addCanvasWidgetTips"
          })
        } else {
          var n
          var o = Et.Db(e$type)
          if (!o) {
            return
          }
          var i = null === (n = $$_$$_$$_$$_src_shared_ui_language.c(P, o.title)) || undefined === n ? undefined : n.toString()
          t = $_710_index$a$formatMessage({
            id: "StageToast.addLimitedWidgetTips"
          }, {
            widgetTitle: i
          })
        }
        c($$_$$_$$_$$_src_shared_events_messagesWrapper.xj(t))
        return void e.preventDefault()
      }
      if (!(e$type !== An.a && e$type !== An.c)) {
        c($$_$$_$$_$$_src_shared_events_messagesWrapper.Yh(true))
      }
      var /* [auto-meaningful-name] */e$target = e.target
      var s = null === e$target || undefined === e$target ? undefined : e$target.getClientRects()[0]
      if (e$target && e$target.dataset.widgetType && s) {
        var u = e.clientX - s.x
        var d = e.clientY - s.y
        e.dataTransfer.setData("widget/dragging-offset-x", u + "")
        e.dataTransfer.setData("widget/dragging-offset-y", d + "")
        e.dataTransfer.dropEffect = "copy"
        e.dataTransfer.setData("widget/type", e$target.dataset.widgetType)
        e.dataTransfer.setData("widget/action", An.r.CREATE)
      }
    },
    onDragEnd: function () {
      if (!(e$type !== An.a && e$type !== An.c)) {
        c($$_$$_$$_$$_src_shared_events_messagesWrapper.Yh(false))
      }
    },
    "data-widget-type": e$type
  }, te.X(e$icon) ? e$isInvisibleWidget ? React.createElement("img", {
    className: $_196.icon,
    src: e$icon,
    alt: e$title,
    draggable: false
  }) : React.createElement("div", {
    className: $_196.widgetImgSmall,
    style: {
      backgroundImage: "url(\"".concat(e$icon, "\")")
    }
  }) : React.createElement("span", {
    className: $_196.icon
  }, React.createElement($_94_index.a, {
    type: e$icon
  })), React.createElement("span", {
    className: $_196.title
  }, e$title)))
})
var sv = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$configList = e.configList
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$defaultExpanded = e.defaultExpanded
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = $_16_index.e(function (e) {
    var /* [auto-meaningful-name] */e$common$userInfo
    return null === (e$common$userInfo = e.common.userInfo) || undefined === e$common$userInfo ? undefined : e$common$userInfo.id
  })
  var a = _React.useState(undefined === e$defaultExpanded || e$defaultExpanded)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = "newWidgetCategory_".concat(Yr.f, "_").concat(i)
  var d = m()
  var p = !i || !d[e$title]
  function m() {
    var e = localStorage.getItem(u)
    return e ? JSON.parse(e) : {}
  }
  return e$configList.length ? React.createElement("div", {
    className: N($_196.categoryItem, k.a({}, $_196.expanded, c))
  }, React.createElement("div", {
    className: N($_196.categoryHeader, window.innerWidth <= 1300 && $_196.categoryMinHeader),
    onClick: function () {
      l(!c)
      if (Yr.k.includes(e$title) && i && !d[e$title]) {
        var e = m()
        e[e$title] = 1
        localStorage.setItem(u, JSON.stringify(e))
      }
    }
  }, React.createElement("div", {
    className: $_196.categoryTitleBox
  }, React.createElement("h3", {
    className: N($_196.categoryTitle)
  }, $_710_index$a$formatMessage({
    id: e$title
  })), Yr.k.includes(e$title) && p && React.createElement("div", {
    className: $_196.newTips
  }, "New")), React.createElement("span", {
    className: $_196.icon
  }, React.createElement($_94_index.a, {
    type: "icon-fold"
  }))), c && React.createElement("div", {
    className: $_196.categoryBody
  }, e$configList.map(function (e) {
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$icon = e.icon
    var /* [auto-meaningful-name] */e$previewAreaWidgetTitle = e.previewAreaWidgetTitle
    var /* [auto-meaningful-name] */_e$title = e.title
    var /* [auto-meaningful-name] */e$isInvisibleWidget = e.isInvisibleWidget
    var /* [auto-meaningful-name] */e$widgetServerId = e.widgetServerId
    return !e.isDiscard && React.createElement(av, {
      key: e$type,
      icon: e$icon,
      title: e$previewAreaWidgetTitle ? $_710_index$a$formatMessage({
        id: e$previewAreaWidgetTitle
      }) : _e$title,
      type: e$type,
      widgetServerId: e$widgetServerId,
      isMallExtensionWidget: $$_$$_$$_$$_src_shared_widget_custom_type.e(e$type),
      isInvisibleWidget: e$isInvisibleWidget
    })
  }))) : null
})
$$_$$_$$_$$_src_shared_widget_custom_load.s(r)
$$_$$_$$_$$_src_shared_widget_custom_load.s(o)
$$_$$_$$_$$_src_shared_widget_custom_load.s($_680)
$$_$$_$$_$$_src_shared_widget_custom_load.s($_682)
$$_$$_$$_$$_src_shared_widget_custom_load.s(a)
$$_$$_$$_$$_src_shared_widget_custom_load.s($_681)
$$_$$_$$_$$_src_shared_widget_custom_load.s(i)
$$_$$_$$_$$_src_shared_widget_custom_load.s(s)
$$_$$_$$_$$_src_shared_widget_custom_load.s(c)
$$_$$_$$_$$_src_shared_widget_custom_load.s(l)
$$_$$_$$_$$_src_shared_widget_custom_load.s(u)
$$_$$_$$_$$_src_shared_widget_custom_load.s(d)
$$_$$_$$_$$_src_shared_widget_custom_load.s(p)
var cv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_679, tv)
var lv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_686)
Et.Nb(Et.j.UI, [Cp, Lp, cv, Kp, tf, uf, _f, Tf, xf, Wf, Jf, ah, lv])
Et.Nb(Et.j.STAGE, [wh, xh, zh])
var uv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_678)
var dv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_688)
Et.Nb(Et.j.MEDIA, [Xh, nm, uv, dv])
var pv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_687)
Et.Nb(Et.j.SENSOR, [im, cm, pv])
Et.Nb(Et.j.DATE, [hm, ym, wm])
var fv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_683)
var hv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_684_index)
var mv = $$_$$_$$_$$_src_shared_widget_custom_load.s($_685_index)
Et.Nb(Et.j.NETWORK, [Sm, Pm, fv, hv, mv])
Et.Nb(Et.j.LOCAL_STORAGE, [qm, eg, gg])
Et.Nb(Et.j.CLOUD_STORAGE, [Og, zm])
Et.Nb(Et.j.CLOUD_SPACE, [c_, __])
Et.Nb(Et.j.DATABASE, [cg])
var gv = React.memo(function (e) {
  var t = Et.Eb(Et.j.UI)
  var n = Et.Eb(Et.j.STAGE)
  var r = Et.Eb(Et.j.MEDIA)
  var o = Et.Eb(Et.j.DATE)
  var i = Et.Eb(Et.j.SENSOR)
  var a = Et.Eb(Et.j.LOCAL_STORAGE)
  var s = Et.Eb(Et.j.CLOUD_SPACE)
  var c = Et.Eb(Et.j.NETWORK)
  var l = Et.Eb(Et.j.SOCIAL)
  return React.createElement("div", {
    className: $_196.scrollBasic
  }, React.createElement(sv, {
    configList: t,
    title: "WidgetList.category.ui",
    defaultExpanded: true
  }), React.createElement(sv, {
    configList: n,
    title: "WidgetList.category.stage",
    defaultExpanded: false
  }), React.createElement(sv, {
    configList: r,
    title: "WidgetList.category.media",
    defaultExpanded: false
  }), React.createElement(sv, {
    configList: o,
    title: "WidgetList.category.dateTime",
    defaultExpanded: false
  }), React.createElement(sv, {
    configList: i,
    title: "WidgetList.category.sensor",
    defaultExpanded: false
  }), React.createElement(sv, {
    configList: a,
    title: "WidgetList.category.localStorage",
    defaultExpanded: false
  }), React.createElement(sv, {
    configList: s,
    title: "WidgetList.category.cloudSpace",
    defaultExpanded: false
  }), React.createElement(sv, {
    configList: c,
    title: "WidgetList.category.network",
    defaultExpanded: false
  }), React.createElement(sv, {
    configList: l,
    title: "WidgetList.category.social",
    defaultExpanded: false
  }))
})
export { sv }
export { gv }
