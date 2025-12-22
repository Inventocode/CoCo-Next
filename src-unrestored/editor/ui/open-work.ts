/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-195
 */

"use strict"

import { me } from "../../../unrestored/shared/1571/2636/index__part-5"
import { AC, IC } from "../../../unrestored/shared/1571/2636/index__part-140"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_37_index from "../../../unrestored/shared/1571/2636/37/index"
import /* [auto-meaningful-name] */Axios from "axios"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_288 from "../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_297 from "../../../unrestored/shared/1571/2636/297"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_shared_events_messagesWrapper from "../../shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_627 from "../../../unrestored/shared/1571/2636/627"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../unrestored/shared/1571/2636/710/index"
import * as O from "../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_2646_index from "../../../unrestored/shared/1571/2636/2646/index"
import * as /* [auto-meaningful-name] */$_1529 from "../../../unrestored/shared/1571/2636/1529"
import * as /* [auto-meaningful-name] */$_392_index from "../../../unrestored/shared/1571/2636/392/index"
var LM = function () {
  var e = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.common.courseList
  })
  var r = $_16_index.e(function (e) {
    return e.common.templateList
  })
  var o = _React.useRef(false)
  $$_$$_$$_unrestored_shared_1571_2636_288.b()
  _React.useEffect(function () {
    function e() {
      return (e = O.a(RegeneratorRuntime.mark(function e() {
        var t
        var /* [auto-meaningful-name] */t$code
        var /* [auto-meaningful-name] */e$sent
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (t = $$_$$_$$_unrestored_shared_1571_2636_15.N(window.location.href), !(t$code = t.code)) {
                  e.next = 6
                  break
                }
                e.next = 4
                return Axios.post("https://open-cn.aqara.com/v3.0/open/access_token?code=".concat(t$code, "&client_id=").concat(AC, "&client_secret=").concat(IC, "&grant_type=authorization_code&redirect_uri=").concat(new URL("/editor", window.location.origin).toString()), {}, {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                })
              case 4:
                if ((e$sent = e.sent).data.access_token) {
                  localStorage.setItem("lvmi_access_token", e$sent.data.access_token)
                  localStorage.setItem("lvmi_refresh_token", e$sent.data.refresh_token)
                  window.close()
                }
              case 6:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))).apply(this, arguments)
    }
    !function () {
      e.apply(this, arguments)
    }()
  }, [])
  var i = _React.useCallback(function () {
    var n = O.a(RegeneratorRuntime.mark(function n(r) {
      var /* [auto-meaningful-name] */n$sent
      var /* [auto-meaningful-name] */n$sent$data
      return RegeneratorRuntime.wrap(function (n) {
        for (;;) {
          switch (n.prev = n.next) {
            case 0:
              n.prev = 0
              o.current = true
              n.next = 4
              return $$_$$_$$_unrestored_shared_1571_2636_297.d(r)
            case 4:
              if (n$sent = n.sent, o.current = false, !n$sent.data) {
                n.next = 17
                break
              }
              n$sent$data = n$sent.data
              n.next = 10
              return $$_$$_$$_unrestored_shared_1571_2636_288.b()
            case 10:
              if (!(!n.sent.includes(Number(r)) && !n$sent$data.is_author && n$sent$data.is_coll_work && n$sent$data.content && n$sent$data.content.unsafeExtensionWidgetList && n$sent$data.content.unsafeExtensionWidgetList.length > 0)) {
                n.next = 14
                break
              }
              e($$_$$_shared_events_messagesWrapper.zh({
                onConfirm: function () {
                  e($$_$$_shared_events_messagesWrapper.Gf())
                },
                allowText: $_710_index$a$formatMessage({
                  id: "know"
                }),
                title: "",
                content: React.createElement("div", null, "作品使用了未审核的自定义控件，需将控件提交至", React.createElement("a", {
                  href: $$_$$_$$_unrestored_shared_1571_2636_15.b,
                  target: "__blank",
                  rel: "noopener noreferrer"
                }, "Coco控件商城-投稿"), "，并等待审核通过后才能进行协作。"),
                cancelBtnVisible: false
              }))
              return n.abrupt("return")
            case 14:
              e($$_$$_shared_events_messagesWrapper.Gf({
                json: n$sent$data.content,
                lastSavedTime: 1e3 * n$sent$data.updated_at,
                isCollWork: n$sent$data.is_coll_work,
                isAuthor: n$sent$data.is_author,
                projectId: r,
                editPermission: n$sent$data.edit_permission,
                jsonFrom: n$sent$data.is_coll_work ? $$_$$_$$_unrestored_shared_1571_2636_18.d.OTHER : $$_$$_$$_unrestored_shared_1571_2636_18.d.MY_WORK
              }))
              n.next = 18
              break
            case 17:
              e($$_$$_shared_events_messagesWrapper.Uf({
                code: n$sent.code
              }))
            case 18:
              n.next = 23
              break
            case 20:
              n.prev = 20
              n.t0 = n.catch(0)
              o.current = false
            case 23:
            case "end":
              return n.stop()
          }
        }
      }, n, null, [[0, 20]])
    }))
    return function (e) {
      return n.apply(this, arguments)
    }
  }(), [e, $_710_index$a$formatMessage])
  var a = _React.useCallback(function (n, r) {
    (function (e, t) {
      return me.apply(this, arguments)
    })(n, r).then(O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */$_37_index$d$getState$common$userInfo
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return i(n)
            case 2:
              $_37_index$d$getState$common$userInfo = $$_$$_$$_unrestored_shared_1571_2636_37_index.d.getState().common.userInfo
              $$_$$_$$_unrestored_shared_1571_2636_141_index.a("EnterCollaboration", {
                collaborationId: (null === $_37_index$d$getState$common$userInfo || undefined === $_37_index$d$getState$common$userInfo ? undefined : $_37_index$d$getState$common$userInfo.id) || "",
                collaborationName: (null === $_37_index$d$getState$common$userInfo || undefined === $_37_index$d$getState$common$userInfo ? undefined : $_37_index$d$getState$common$userInfo.nickname) || ""
              })
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).catch(function (n) {
      var /* [auto-meaningful-name] */n$response
      switch (console.error("加入协作失败,", n), null === (n$response = n.response) || undefined === n$response ? undefined : n$response.data.code) {
        case 80000001:
          e($$_$$_shared_events_messagesWrapper.Ch(function () {
            window.location.reload()
          }))
          break
        case 10000008:
          e($$_$$_shared_events_messagesWrapper.zh({
            onConfirm: function () {
              e($$_$$_shared_events_messagesWrapper.Gf())
            },
            allowText: $_710_index$a$formatMessage({
              id: "confirm"
            }),
            title: $_710_index$a$formatMessage({
              id: "OT.canNotFindProjectTitle"
            }),
            content: $_710_index$a$formatMessage({
              id: "OT.inviteLinkOverdueDescription"
            }),
            cancelBtnVisible: false
          }))
          break
        default:
          e($$_$$_shared_events_messagesWrapper.zh({
            onConfirm: function () {
              e($$_$$_shared_events_messagesWrapper.Gf())
            },
            allowText: $_710_index$a$formatMessage({
              id: "confirm"
            }),
            title: $_710_index$a$formatMessage({
              id: "OT.canNotFindProjectTitle"
            }),
            content: $_710_index$a$formatMessage({
              id: "OT.canNotFindProjectDescription"
            }),
            cancelBtnVisible: false
          }))
      }
    })
  }, [e, $_710_index$a$formatMessage, i])
  var s = _React.useCallback(function () {
    e($$_$$_shared_events_messagesWrapper.Gf("localhost" === window.location.hostname ? undefined : {
      json: $_1529
    }))
  }, [e])
  var c = _React.useCallback(function (t) {
    o.current = true
    fetch(t).then(function (t) {
      t.json().then(function (t) {
        e($$_$$_shared_events_messagesWrapper.Gf({
          json: t
        }))
      })
      o.current = false
    }).catch(function () {
      s()
      o.current = false
    })
  }, [e, s])
  var l = _React.useCallback(function (t) {
    o.current = true
    fetch(t).then(function (t) {
      t.json().then(function (t) {
        e($$_$$_shared_events_messagesWrapper.Ff(t))
      })
      o.current = false
    })
  }, [e])
  var u = _React.useCallback(function () {
    var t = O.a(RegeneratorRuntime.mark(function t(n) {
      var /* [auto-meaningful-name] */t$sent
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.prev = 0
              o.current = true
              t.next = 4
              return $$_$$_$$_unrestored_shared_1571_2636_297.e(n)
            case 4:
              t$sent = t.sent
              o.current = false
              if (t$sent) {
                e($$_$$_shared_events_messagesWrapper.Gf({
                  json: t$sent.content,
                  editPermission: $$_$$_$$_unrestored_shared_1571_2636_18.c.Preview
                }))
              } else {
                console.error("归档内容不存在，加载空作品")
                s()
              }
              t.next = 13
              break
            case 9:
              t.prev = 9
              t.t0 = t.catch(0)
              s()
              o.current = false
            case 13:
            case "end":
              return t.stop()
          }
        }
      }, t, null, [[0, 9]])
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }(), [e, s])
  var d = _React.useCallback(function () {
    var t = O.a(RegeneratorRuntime.mark(function t(r) {
      var i
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (i = n.find(function (e) {
                return e.id.toString() === r
              })) {
                o.current = true
                fetch(i.bcmUrl).then(function (t) {
                  t.json().then(function (t) {
                    e($$_$$_shared_events_messagesWrapper.Gf({
                      json: t,
                      jsonFrom: $$_$$_$$_unrestored_shared_1571_2636_18.d.HOME_COURSE,
                      sourceTag: $$_$$_$$_unrestored_shared_1571_2636_18.g.COURSE,
                      sourceId: r
                    }))
                    o.current = false
                  })
                }).catch(function () {
                  o.current = false
                })
                $$_$$_$$_unrestored_shared_1571_2636_627.a.load({
                  onPlayerInit: function () {},
                  title: React.createElement("div", null, React.createElement("span", {
                    style: {
                      position: "relative",
                      right: 5
                    }
                  }, React.createElement($_2646_index.a, {
                    size: "esm",
                    type: "transparent-fb",
                    width: 26,
                    height: 14,
                    onClick: O.a(RegeneratorRuntime.mark(function t() {
                      return RegeneratorRuntime.wrap(function (t) {
                        for (;;) {
                          switch (t.prev = t.next) {
                            case 0:
                              $$_$$_$$_unrestored_shared_1571_2636_627.a.close({
                                closeAnimationPos: {
                                  x: 150,
                                  y: 30
                                }
                              })
                              e($$_$$_shared_events_messagesWrapper.fi(true))
                            case 2:
                            case "end":
                              return t.stop()
                          }
                        }
                      }, t)
                    }))
                  }, React.createElement($$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
                    type: "icon-btn-fallback",
                    className: "coco-video-back"
                  }))), i.title),
                  videoSrc: i.videoUrl,
                  autoPlay: true,
                  zIndex: 3,
                  useConfirmMask: true,
                  confirmPercent: .9,
                  onMinimizeBtnClick: function () {
                    $$_$$_$$_unrestored_shared_1571_2636_627.a.hide()
                    e($$_$$_shared_events_messagesWrapper.Qh($_392_index.a, {
                      name: $_392_index.a,
                      content: React.createElement($_392_index.b, null)
                    }))
                  },
                  onClose: function () {
                    $$_$$_$$_unrestored_shared_1571_2636_627.a.close({
                      closeAnimationPos: {
                        x: 150,
                        y: 30
                      }
                    })
                  }
                })
              }
            case 2:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }(), [n, e])
  var p = _React.useCallback(function () {
    var t = O.a(RegeneratorRuntime.mark(function t(n) {
      var i
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (i = r.find(function (e) {
                return e.id === n
              })) {
                o.current = true
                fetch(i.bcmUrl).then(function (t) {
                  t.json().then(function (t) {
                    e($$_$$_shared_events_messagesWrapper.Gf({
                      json: t,
                      jsonFrom: $$_$$_$$_unrestored_shared_1571_2636_18.d.HOME_TEMPLATE,
                      sourceTag: $$_$$_$$_unrestored_shared_1571_2636_18.g.TEMPLATE,
                      sourceId: i.name
                    }))
                    o.current = false
                  })
                }).catch(function () {
                  o.current = false
                })
              }
            case 2:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }(), [e, r])
  _React.useEffect(function () {
    var e = $$_$$_$$_unrestored_shared_1571_2636_15.N(window.location.href)
    var /* [auto-meaningful-name] */e$workId = e.workId
    var /* [auto-meaningful-name] */e$inviteCode = e.inviteCode
    var /* [auto-meaningful-name] */e$jsonUrl = e.jsonUrl
    var /* [auto-meaningful-name] */e$archiveId = e.archiveId
    var /* [auto-meaningful-name] */e$courseId = e.courseId
    var /* [auto-meaningful-name] */e$templateId = e.templateId
    var /* [auto-meaningful-name] */e$playerBcmUrl = e.playerBcmUrl
    if (!o.current) {
      if (e$archiveId) {
        u(e$archiveId)
      } else {
        if (e$inviteCode && e$workId) {
          a(e$workId, e$inviteCode)
        } else {
          if (e$workId) {
            i(e$workId)
          } else {
            if (e$jsonUrl) {
              c(e$jsonUrl)
            } else {
              if (e$courseId) {
                d(e$courseId)
              } else {
                if (e$templateId) {
                  p(e$templateId)
                } else {
                  if (e$playerBcmUrl) {
                    l(e$playerBcmUrl)
                  } else {
                    s()
                  }
                }
              }
            }
          }
        }
      }
    }
  }, [d, s, a, c, p, u, i, l])
  return React.createElement(React.Fragment, null)
}
export { LM }
