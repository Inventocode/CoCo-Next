/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-204
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_shop from "../../../../src/shared/widget/custom/shop"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useCallback, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1191 from "./1191"
import /* [auto-meaningful-name] */$_11911 from "./1191"
import * as /* [auto-meaningful-name] */$_270 from "./270"
import /* [auto-meaningful-name] */$_2701 from "./270"
var kL = memo(function () {
  var e = useSelector(function (e) {
    return e.common.widgetMallVisible
  })
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var n = useDispatch()
  var r = useState(false)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = useState([])
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState(undefined)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState([])
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var w = b[1]
  var C = useState([])
  var T = $_10_index.a(C, 2)
  var j = T[0]
  var R = T[1]
  var k = useRef(1)
  var D = useRef(1)
  var M = useRef(false)
  var L = useCallback(O.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$items
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_src_shared_widget_custom_shop.d()
          case 3:
            e$sent = e.sent
            e.next = 6
            return $$_$$_$$_$$_src_shared_widget_custom_shop.e(k.current, 100)
          case 6:
            e$sent1 = e.sent
            e$sent1$items = e$sent1.items
            D.current = e$sent1.total
            if (e$sent && e$sent1$items) {
              e$sent.sort(function (e, t) {
                return t.sort - e.sort
              })
              e$sent.unshift({
                id: -1,
                name: "全部",
                sort: 0
              })
              u(e$sent)
              g(-1)
              e$sent1$items.sort(function (e, t) {
                return t.sort - e.sort
              })
              w(e$sent1$items)
              a(false)
              o = e$sent1$items.map(function (e) {
                return e.widget_code
              })
              $$_$$_$$_$$_src_shared_widget_custom_shop.f(o.concat(Et.Q()))
            }
            e.next = 15
            break
          case 12:
            e.prev = 12
            e.t0 = e.catch(0)
            a(true)
          case 15:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 12]])
  })), [])
  useEffect(function () {
    if (e) {
      k.current = 1
      L()
    } else {
      R([])
      a(false)
    }
  }, [L, e])
  var P = function () {
    n($$_$$_$$_$$_src_editor_redux_common_actions.gj(false))
  }
  var B = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$items
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              g(t)
              k.current = 1
              e.prev = 2
              e.next = 5
              return $$_$$_$$_$$_src_shared_widget_custom_shop.e(k.current, 100, -1 === t ? undefined : t)
            case 5:
              e$sent = e.sent
              e$sent$items = e$sent.items
              D.current = e$sent.total
              if (e$sent$items) {
                e$sent$items.sort(function (e, t) {
                  return e.sort - t.sort
                })
                w(e$sent$items)
              }
              e.next = 14
              break
            case 11:
              e.prev = 11
              e.t0 = e.catch(2)
              a(true)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[2, 11]])
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var F = function (e) {
    var t = j.indexOf(e)
    if (t < 0) {
      R([].concat($_25_index.a(j), [e]))
    } else {
      var n = $_25_index.a(j)
      n.splice(t, 1)
      R(n)
    }
  }
  var G = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      var r
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.prev = 0
              e.next = 3
              return $$_$$_$$_$$_src_shared_widget_custom_shop.b(j)
            case 3:
              if (e.sent) {
                n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                  message: $_710$a$formatMessage({
                    id: "WidgetMall.addSuccess"
                  }),
                  type: "success"
                }))
                r = []
                j.forEach(function (e) {
                  var t = y.find(function (t) {
                    return t.id === e
                  })
                  if (t) {
                    r.push({
                      id: t.id,
                      type: t.widget_code,
                      widgetName: t.widget_name,
                      icon: t.icon,
                      cdnUrl: t.resource_url,
                      isInvisibleWidget: 2 === t.widget_type
                    })
                  }
                })
                n($$_$$_$$_$$_src_editor_redux_common_actions.ef(r.reverse()))
                P()
              }
              e.next = 10
              break
            case 7:
              e.prev = 7
              e.t0 = e.catch(0)
              n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "WidgetMall.addFailure"
                }),
                type: "error"
              }))
            case 10:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 7]])
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  var W = React.createElement("div", null, React.createElement($_13_index.d, {
    type: "default",
    onClick: function () {
      R([])
    }
  }, $_710$a$formatMessage({
    id: "WidgetMall.clear"
  })), React.createElement($_13_index.d, {
    type: "primary",
    onClick: G
  }, $_710$a$formatMessage({
    id: "WidgetMall.add"
  }), "(", j.length, ")"))
  var U = useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!M.current) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (!(t.length >= D.current)) {
                e.next = 4
                break
              }
              return e.abrupt("return", t)
            case 4:
              M.current = true
              k.current = k.current + 1
              e.prev = 6
              e.next = 9
              return $$_$$_$$_$$_src_shared_widget_custom_shop.e(k.current, 100, -1 === m ? undefined : m)
            case 9:
              e$sent = e.sent
              D.current = e$sent.total
              M.current = false
              w([].concat($_25_index.a(t), $_25_index.a(e$sent.items)))
              e.next = 19
              break
            case 15:
              e.prev = 15
              e.t0 = e.catch(6)
              M.current = false
              a(true)
            case 19:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[6, 15]])
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [m])
  return React.createElement($_13_index.f, {
    withPortal: true,
    visible: e,
    title: $_710$a$formatMessage({
      id: "Widget.widgetMall"
    }),
    footer: W,
    onClose: P,
    className: N($_2701.widgetMallDialog, 0 !== j.length && $_2701.DialogFooter)
  }, i && React.createElement("div", {
    className: $_2701.networkError
  }, React.createElement("img", {
    src: $_11911,
    alt: "networkError"
  }), React.createElement("h3", null, $_710$a$formatMessage({
    id: "WidgetMall.networkError"
  })), React.createElement($_13_index.d, {
    onClick: function () {
      L()
    },
    type: "primary"
  }, $_710$a$formatMessage({
    id: "WidgetMall.retry"
  }))), !i && l.map(function (e) {
    return React.createElement("div", {
      key: e.id,
      className: N($_2701.widgetLabel, m === e.id && $_2701.active),
      onClick: B.bind(null, e.id)
    }, e.name)
  }), !i && React.createElement("div", {
    className: $_2701.cardContainer,
    onScroll: function (e) {
      var /* [auto-meaningful-name] */e$currentTarget = e.currentTarget
      if (e$currentTarget.scrollTop + e$currentTarget.clientHeight > e$currentTarget.scrollHeight - 220) {
        U(y)
      }
    }
  }, y.map(function (e) {
    return React.createElement("div", {
      key: e.id,
      className: N($_2701.widgetCard, j.indexOf(e.id) >= 0 && $_2701.selectedWidgetCard)
    }, 2 === e.widget_type ? React.createElement("div", {
      className: $_2701.invisibleWidget
    }, React.createElement("div", {
      className: $_2701.invisibleWidgetHeader
    }, React.createElement("img", {
      src: e.icon,
      alt: "icon",
      className: $_2701.widgetIcon
    }), React.createElement("div", {
      className: $_2701.widgetInfo
    }, React.createElement("p", {
      className: $_2701.widgetName
    }, e.widget_name), React.createElement("p", {
      className: $_2701.authorName
    }, e.author_name))), React.createElement("div", {
      className: $_2701.widgetIntroContainer
    }, React.createElement("p", {
      className: $_2701.widgetIntro
    }, e.intro))) : React.createElement("div", {
      className: $_2701.visibleWidget
    }, React.createElement("div", {
      className: $_2701.widgetImgContainer,
      style: {
        backgroundImage: "url(\"".concat(e.icon, "\")")
      }
    })), React.createElement("div", {
      className: $_2701.widgetCardFooter
    }, 1 === e.widget_type ? React.createElement("div", {
      className: $_2701.widgetInfo
    }, React.createElement("p", {
      className: $_2701.widgetName
    }, e.widget_name), React.createElement("p", {
      className: $_2701.authorName
    }, e.author_name)) : React.createElement("div", null), 1 === e.if_have ? React.createElement("div", {
      className: $_2701.added
    }, React.createElement("span", null, $_710$a$formatMessage({
      id: "WidgetMall.added"
    }))) : j.includes(e.id) ? React.createElement("div", {
      onClick: F.bind(null, e.id),
      className: N($_2701.icon, $_2701.selectedIcon)
    }, React.createElement($_13_index.j, {
      type: "icon-selected"
    })) : React.createElement($_748_index.a, {
      placement: "bottom",
      trigger: ["hover", "click"],
      title: $_710$a$formatMessage({
        id: "WidgetMall.add"
      })
    }, React.createElement("div", {
      onClick: F.bind(null, e.id),
      className: N($_2701.icon, $_2701.addIcon)
    }, React.createElement($_13_index.j, {
      type: "icon-add"
    })))))
  })))
})
export { kL }
