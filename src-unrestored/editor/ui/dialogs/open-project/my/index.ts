/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-7
 */

"use strict"

import { ne } from "../../../../../../unrestored/shared/1571/2636/index__part-4"
import { de } from "../../../../../../unrestored/shared/1571/2636/index__part-5"
import { we } from "../../../../../../unrestored/shared/1571/2636/index__part-6"
var Oe
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190 from "../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297 from "../../../../../../unrestored/shared/1571/2636/297"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213 from "../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_redux_common_actions from "../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index from "../../../../../../unrestored/shared/1571/2636/25/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8 from "../../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_ui_language from "../../../../../shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_288 from "../../../../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_418 from "../../../../../../unrestored/shared/1571/2636/418"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_ from "../../../../../../unrestored/shared/1571/2636/418"
!function (e) {
  e.SELF = "self"
  e.COLL = "coll"
  e.PUBLISHED = "published"
  e.UNPUBLISHED = "unpublished"
}(Oe || (Oe = {}))
var Ae = [Oe.SELF, Oe.COLL, Oe.PUBLISHED, Oe.UNPUBLISHED]
var Ie = {
  self: "MyProject.noCreateProjectTips",
  coll: "MyProject.noCollProjectTips",
  published: "MyProject.noPublishProjectTips",
  unpublished: "MyProject.noCreateProjectTips"
}
function je(e) {
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$type = e.type
  return "loaded" === e$type ? React.createElement(React.Fragment, null) : "emptyList" === e$type ? React.createElement("div", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.emptyContainer
  }, React.createElement(we, {
    text: e$title
  })) : React.createElement(React.Fragment, null)
}
function Ne(e) {
  var t
  var /* [auto-meaningful-name] */e$project = e.project
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$filterType = e.filterType
  var /* [auto-meaningful-name] */e$status = e.status
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  function c() {
    var e = []
    if (e$filterType === Oe.COLL) {
      e.push("deleteCollProject")
    } else {
      if (!e$project.publishedTime) {
        e.push("deleteProject")
      }
    }
    return e
  }
  return React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8(_$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.item),
    onClick: function () {
      e$onClick(e$project.id, e$project.name, e$project.updateTime)
    },
    key: e$project.id
  }, React.createElement("div", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.cover
  }, React.createElement("img", {
    src: null === (t = e$project.coverUrl || e$project.previewUrl) || undefined === t ? undefined : t.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/"),
    alt: e$project.name
  })), React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.a, {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.name,
    text: e$project.name
  }), React.createElement("p", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.time
  }, React.createElement(ne, {
    time: e$project.updateTime,
    currentTime: e$project.serverTime
  })), !!c().length && React.createElement("div", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.menuContainer,
    onClick: function (e) {
      e.stopPropagation()
    }
  }, React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a, {
    placement: "rightTop",
    trigger: "click",
    overlayClassName: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.menuPopover,
    zIndex: 100,
    content: React.createElement("div", {
      className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.menuContent
    }, React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l, {
      onClick: function (e) {
        if (!("deleteProject" !== e && "deleteCollProject" !== e)) {
          e$onDelete(e$project.id, e$project.name, e$project.isCollWork || e$filterType === Oe.COLL)
        }
      }
    }, c().map(function (e, t) {
      return React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
        value: e,
        key: t
      }, React.createElement("span", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
        id: "MyProject." + e
      })))
    })))
  }, React.createElement("div", null, React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-more"
  })))), React.createElement("div", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.badgeWrapper
  }, (e$project.isCollWork || e$filterType === Oe.COLL) && "loaded" === e$status && React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-collaborator"
  }), !!e$project.publishedTime && React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    type: "icon-publish"
  })))
}
var Re = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var r = _React.useState([])
  var o = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = _React.useState("loaded")
  var c = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.language
  })
  var p = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  var m = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.project.id
  })
  var g = _React.useState(Oe.SELF)
  var v = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var C = _React.useRef(0)
  var A = _React.useRef(1)
  var j = _React.useRef(false)
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var k = function () {
    var e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t, r, o) {
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$data
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.prev = 0
              e.next = 3
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.d(t)
            case 3:
              if (e$sent = e.sent, !(e$sent$data = e$sent.data)) {
                e.next = 16
                break
              }
              e.next = 8
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_288.b()
            case 8:
              if (!(!e.sent.includes(Number(t)) && !e$sent$data.is_author && e$sent$data.is_coll_work && e$sent$data.content && e$sent$data.content.unsafeExtensionWidgetList && e$sent$data.content.unsafeExtensionWidgetList.length > 0)) {
                e.next = 12
                break
              }
              w($$_$$_$$_$$_redux_common_actions.zh({
                allowText: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
                  id: "know"
                }),
                title: "",
                content: React.createElement("div", null, "作品使用了未审核的自定义控件，需将控件提交至", React.createElement("a", {
                  href: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15.b,
                  target: "__blank",
                  rel: "noopener noreferrer"
                }, "Coco控件商城-投稿"), "，并等待审核通过后才能进行协作。"),
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 12:
              e$importProjectJson({
                json: e$sent$data.content,
                projectId: t,
                lastSavedTime: 1e3 * e$sent$data.updated_at,
                isCollWork: e$sent$data.is_coll_work,
                isAuthor: e$sent$data.is_author,
                editPermission: e$sent$data.edit_permission,
                jsonFrom: e$sent$data.is_coll_work ? $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.d.OTHER : $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.d.MY_WORK
              })
              $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("OpenWork", {
                workId: t,
                workType: b === Oe.COLL ? 2 : 1,
                isSuccess: true,
                failReason: ""
              })
              e.next = 17
              break
            case 16:
              w($$_$$_$$_$$_redux_common_actions.Uf({
                code: e$sent.code
              }))
            case 17:
              e.next = 23
              break
            case 19:
              e.prev = 19
              e.t0 = e.catch(0)
              console.error("getProjectJson error", e.t0)
              $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("OpenWork", {
                workId: t,
                workType: b === Oe.COLL ? 2 : 1,
                isSuccess: false,
                failReason: e.t0.message
              })
            case 23:
              w($$_$$_$$_$$_redux_common_actions.Xg())
            case 24:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 19]])
    }))
    return function (t, n, r) {
      return e.apply(this, arguments)
    }
  }()
  var D = _React.useCallback(function () {
    var e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!j.current) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (j.current = true, u("loading"), b !== Oe.COLL) {
                e.next = 10
                break
              }
              e.next = 7
              return P(t)
            case 7:
              t = e.sent
              e.next = 26
              break
            case 10:
              if (b !== Oe.SELF) {
                e.next = 16
                break
              }
              e.next = 13
              return M(t)
            case 13:
              t = e.sent
              e.next = 26
              break
            case 16:
              if (b !== Oe.PUBLISHED) {
                e.next = 22
                break
              }
              e.next = 19
              return M(t, true)
            case 19:
              t = e.sent
              e.next = 26
              break
            case 22:
              if (b !== Oe.UNPUBLISHED) {
                e.next = 26
                break
              }
              e.next = 25
              return M(t, false)
            case 25:
              t = e.sent
            case 26:
              F(t)
              j.current = false
            case 28:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [b])
  function M(e, t) {
    return L.apply(this, arguments)
  }
  function L() {
    return (L = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t, n) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              e.next = 4
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.c(C.current, 20, n)
            case 4:
              e$sent = e.sent
              C.current += 20
              A.current = e$sent.total
              return e.abrupt("return", [].concat($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(t), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function P(e) {
    return B.apply(this, arguments)
  }
  function B() {
    return (B = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!(A.current < 20 * C.current)) {
                e.next = 2
                break
              }
              return e.abrupt("return", t)
            case 2:
              C.current++
              e.next = 5
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.b(C.current, 20)
            case 5:
              e$sent = e.sent
              A.current = e$sent.total
              return e.abrupt("return", [].concat($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(t), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(e$sent.list)))
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  _React.useEffect(function () {
    if (e$visible) {
      C.current = 0
      j.current = false
      D([])
    }
  }, [D, e$visible])
  if (!e$visible) {
    return null
  }
  function F(e) {
    a(e)
    if (0 === e.length) {
      u("emptyList")
    } else {
      u("loaded")
    }
  }
  var G = function () {
    var e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var r
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!p || b !== Oe.COLL) {
                e.next = 6
                break
              }
              e.next = 3
              return de(t, p.id)
            case 3:
              n = e.sent
              e.next = 10
              break
            case 6:
              e.next = 8
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_297.a(t)
            case 8:
              if (n = e.sent) {
                w($$_$$_$$_$$_redux_common_actions.mj({
                  message: $$_$$_$$_$$_$$_shared_ui_language.c(d, "MyProject.deleteProjectSuccess").toString()
                }))
              }
            case 10:
              if (n) {
                if ((r = i.findIndex(function (e) {
                  return e.id === t
                })) > -1) {
                  i.splice(r, 1)
                  F($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(i))
                  if (m === t) {
                    w($$_$$_$$_$$_redux_common_actions.Gf())
                  }
                }
              } else {
                w($$_$$_$$_$$_redux_common_actions.mj({
                  message: $$_$$_$$_$$_$$_shared_ui_language.c(d, "MyProject.deleteProjectError").toString(),
                  duration: 1e3,
                  type: "error"
                }))
              }
            case 11:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  function W(e, t, n) {
    if (b === Oe.COLL) {
      w($$_$$_$$_$$_redux_common_actions.zh({
        onConfirm: G.bind(null, e),
        allowText: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.quitCollWorkConfirmText"
        }),
        title: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.quitCollWorkTitle"
        }, {
          name: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.f(t)
        }),
        content: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
          id: "MyProject.quitCollWorkDescription"
        }),
        isDangerous: true
      }))
    } else {
      G(e)
    }
  }
  var U = function () {
    var e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              y(t)
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  return React.createElement("div", null, React.createElement("div", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.filter
  }, Ae.map(function (e) {
    return React.createElement("div", {
      key: e,
      onClick: U.bind(null, e),
      className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_8(_$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.filterItem, b === e && _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.active)
    }, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "MyProject.".concat(e)
    }))
  })), React.createElement("div", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.container
  }, React.createElement(je, {
    title: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: Ie[b]
    }),
    type: l
  }), i.length > 0 && React.createElement("div", {
    className: _$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_.main
  }, React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.v, {
    offsetY: 300,
    height: 450,
    onScrollBottom: function () {
      D(i)
    }
  }, i.map(function (e) {
    return React.createElement(Ne, {
      status: l,
      key: e.id,
      project: e,
      onClick: k,
      onDelete: W,
      filterType: b
    })
  })))))
})
export { Re }
