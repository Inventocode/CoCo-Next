/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-14
 */

"use strict"

import { se, le, de, fe, ge } from "../../../../../unrestored/shared/1571/2636/index__part-5"
import { _t, vt, bt, yt } from "../../../../../unrestored/shared/1571/2636/index__part-13"
import /* [auto-meaningful-name] */$_136 from "../../../../../unrestored/shared/1571/2636/136"
import * as /* [auto-meaningful-name] */$_100 from "../../../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */$_24_index from "../../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */$_288 from "../../../../../unrestored/shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$_141_index from "../../../../../unrestored/shared/1571/2636/141/index"
import * as te from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$_1213 from "../../../../../unrestored/shared/1571/2636/1213"
import * as Z from "../../../../../unrestored/shared/1571/2636/97"
import * as K from "../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import N from "../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$_710_index from "../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$_748_index from "../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as O from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as Et from "../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../shared/widget/custom/type"
var wt = function (e) {
  var t
  var /* [auto-meaningful-name] */e$permission
  var r = _React.useState(false)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = function () {
    a(false)
  }
  _React.useEffect(function () {
    if (!e.parentVisible) {
      a(false)
    }
  }, [e.parentVisible])
  return e.isAuthor ? React.createElement($_1213.a, {
    placement: "bottom",
    content: (t = e.id, e$permission = e.permission, React.createElement("div", {
      className: $_136.permissionDialog
    }, React.createElement("div", {
      onClick: function () {
        return e.handleChangePermission(K.c.Edit, t, c)
      },
      className: $_136.item
    }, React.createElement($_13_index.j, {
      type: "icon-selected",
      className: N($_136.icon, e$permission === K.c.Edit && $_136.selected)
    }), React.createElement("span", null, $_710_index$a$formatMessage({
      id: "OT.dialogCanEdit"
    }))), React.createElement("div", {
      onClick: function () {
        return e.handleChangePermission(K.c.ReadOnly, t, c)
      },
      className: $_136.item
    }, React.createElement($_13_index.j, {
      type: "icon-selected",
      className: N($_136.icon, e$permission === K.c.ReadOnly && $_136.selected)
    }), React.createElement("span", null, $_710_index$a$formatMessage({
      id: "OT.dialogReadOnly"
    }))), React.createElement("div", {
      onClick: function () {
        return e.handleRemovePermission(t, c)
      },
      className: N($_136.item, $_136.remove)
    }, React.createElement("span", null, $_710_index$a$formatMessage({
      id: "OT.dialogRemove"
    }))))),
    trigger: "click",
    visible: i,
    onVisibleChange: function (e) {
      a(e)
    }
  }, React.createElement("div", {
    className: $_136.edit_role
  }, React.createElement("span", null, e.permission === K.c.Edit ? $_710_index$a$formatMessage({
    id: "OT.edit"
  }) : $_710_index$a$formatMessage({
    id: "OT.readonly"
  })), React.createElement("div", {
    className: $_136.icon
  }, React.createElement($_13_index.j, {
    type: "icon-dropdown-down",
    className: $_136.icon
  })))) : React.createElement("div", {
    className: N($_136.edit_role, $_136.disabled)
  }, React.createElement("span", null, e.permission === K.c.Edit ? $_710_index$a$formatMessage({
    id: "OT.edit"
  }) : $_710_index$a$formatMessage({
    id: "OT.readonly"
  })), React.createElement("div", {
    className: $_136.icon
  }, React.createElement($_13_index.j, {
    type: "icon-dropdown-down",
    className: $_136.icon
  })))
}
var Ct = React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.project
  })
  var t = e.id
  var /* [auto-meaningful-name] */e$title = e.title
  var r = $_16_index.e(function (e) {
    return e.oTState.cooperationUserList
  })
  var o = $_16_index.e(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var i = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var a = $_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var s = $_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = $_16_index.e(function (e) {
    return e.common.isProjectModified
  })
  if (0 === r.size && i) {
    r = r.push({
      id: i.id,
      avatar_url: i.avatar_url,
      nickname: i.nickname,
      is_author: true,
      edit_permission: 1
    })
  }
  var u = Z.a(t)
  var d = $_16_index.e(function (e) {
    return e.oTState.editorInviteUrl
  })
  var p = $_16_index.e(function (e) {
    return e.oTState.readOnlyInviteUrl
  })
  var m = $_16_index.d()
  var g = _React.useState(false)
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = _React.useState(K.c.Edit)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = _React.useRef(null)
  var k = _React.useState(false)
  var x = $_10_index.a(k, 2)
  var D = x[0]
  var M = x[1]
  function L() {
    return (L = O.a(RegeneratorRuntime.mark(function e() {
      var n
      var r
      var /* [auto-meaningful-name] */e$sent
      var a
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              n = Et.Eb(Et.j.EXTENSION).filter(function (e) {
                return !$$_$$_$$_$$_src_shared_widget_custom_type.e(e.type)
              })
              e.next = 3
              return $_288.b()
            case 3:
              if (e.sent.includes(Number(t)) || !(n.length > 0)) {
                e.next = 8
                break
              }
              y(false)
              m($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
                allowText: $_710_index$a$formatMessage({
                  id: "know"
                }),
                title: "",
                content: React.createElement("div", null, "作品使用了未审核的自定义控件，需将控件提交至", React.createElement("a", {
                  href: te.b,
                  target: "__blank",
                  rel: "noopener noreferrer"
                }, "Coco控件商城-投稿"), "，并等待审核通过后才能进行协作。"),
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 8:
              if (r = t, y(true), !u || l) {
                e.next = 14
                break
              }
              r = t
              e.next = 17
              break
            case 14:
              e.next = 16
              return $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(m, $$_$$_$$_$$_src_shared_events_messagesWrapper.tg({
                isUpdate: u,
                isAutoSave: true
              }))
            case 16:
              r = e.sent
            case 17:
              if (!(Et.Y().length > 0)) {
                e.next = 22
                break
              }
              y(false)
              m($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
                allowText: "确定",
                title: "提示",
                content: "作品中含有云数据库控件，暂时无法协作",
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 22:
              if (d) {
                e.next = 33
                break
              }
              if (e.t0 = r !== s, !e.t0) {
                e.next = 27
                break
              }
              e.next = 27
              return se(r)
            case 27:
              m($_100.o(r))
              e.next = 30
              return fe(r, K.c.Edit)
            case 30:
              e$sent = e.sent
              a = te.x(r, e$sent)
              m($_100.p(a))
            case 33:
              $_141_index.a("InviteCollaborationClick", {
                authorId: (null === i || undefined === i ? undefined : i.id) || "",
                nickName: (null === i || undefined === i ? undefined : i.nickname) || ""
              })
            case 34:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  var P = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(n, r, o) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ge(r, t, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                le(t).then(function () {
                  var e = O.a(RegeneratorRuntime.mark(function e(t) {
                    return RegeneratorRuntime.wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            m($_100.s(t))
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
                }())
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                o()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n, r) {
      return e.apply(this, arguments)
    }
  }()
  var B = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(n, r) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              de(t, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                if (!(null === (R$current = R.current) || undefined === R$current)) {
                  R$current.hideContent()
                }
                r()
              })
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  var F = React.createElement("div", {
    className: $_136.content
  }, a && React.createElement("div", {
    className: $_136.header
  }, React.createElement($_13_index.d, {
    className: $_136.shareButton,
    onClick: function () {
      return L.apply(this, arguments)
    }
  }, React.createElement($_13_index.j, {
    className: $_136.invitationIcon,
    type: "icon-ot-invitation"
  }), $_710_index$a$formatMessage({
    id: "OT.inviteFriend"
  }))), React.createElement("ul", {
    className: $_136.list
  }, r.map(function (e, t) {
    return React.createElement("li", {
      key: t
    }, React.createElement("div", {
      className: N($_136.headerPhotoBorder),
      key: e.id,
      style: {
        marginRight: "8px",
        borderColor: o.get(e.id)
      }
    }, React.createElement("div", {
      className: $_136.headPhoto,
      style: {
        backgroundImage: "url(".concat(e.avatar_url, ")")
      }
    })), React.createElement("div", {
      className: $_136.name
    }, React.createElement("p", null, e.nickname), React.createElement("span", null, e.id)), (n = e.id, e$is_author = e.is_author, e$edit_permission = e.edit_permission, e$is_author ? React.createElement("div", {
      className: $_136.role
    }, React.createElement("div", null, $_710_index$a$formatMessage({
      id: "OT.creator"
    }))) : React.createElement(wt, {
      isAuthor: a,
      permission: e$edit_permission,
      id: n,
      handleChangePermission: P,
      handleRemovePermission: B,
      parentVisible: D
    })))
    var n
    var /* [auto-meaningful-name] */e$is_author
    var /* [auto-meaningful-name] */e$edit_permission
  })))
  var G = _React.useCallback(function () {
    return T === K.c.Edit ? d : T === K.c.ReadOnly ? p : ""
  }, [d, p, T])
  var W = _React.useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(n) {
      var /* [auto-meaningful-name] */e$sent
      var o
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n !== K.c.Edit) {
                e.next = 3
                break
              }
              j(n)
              return e.abrupt("return")
            case 3:
              if (n !== K.c.ReadOnly) {
                e.next = 14
                break
              }
              if (p) {
                e.next = 13
                break
              }
              e.next = 7
              return fe(t, K.c.ReadOnly)
            case 7:
              e$sent = e.sent
              o = te.x(t, e$sent)
              m($_100.r(o))
              j(n)
              e.next = 14
              break
            case 13:
              j(n)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [m, t, p])
  return React.createElement("div", {
    style: {
      height: "100%"
    }
  }, React.createElement($_13_index.r, {
    content: F,
    className: $_136.oTButton,
    onOpen: function () {
      return M(true)
    },
    onClose: function () {
      return M(false)
    },
    ref: R
  }, React.createElement($_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "OT.coll"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -4
    }
  }, React.createElement("div", {
    className: N($_136.collIconWrapper, D && $_136.activeCollIconWrapper)
  }, React.createElement($_13_index.j, {
    type: "icon-collaborate-active",
    className: $_136.collIcon
  })))), React.createElement($_13_index.f, {
    className: $_136.shareOtDialog,
    visible: b,
    title: $_710_index$a$formatMessage({
      id: "OT.copyCollInvitationUrl"
    }),
    onClose: function () {
      y(false)
    }
  }, React.createElement("div", {
    className: $_136.dialogMain
  }, React.createElement("div", {
    className: $_136.text
  }, $_710_index$a$formatMessage({
    id: "OT.expiration"
  })), React.createElement("div", {
    onClick: function () {
      return W(K.c.Edit)
    },
    className: N($_136.tab, T === K.c.Edit && $_136.selected)
  }, $_710_index$a$formatMessage({
    id: "OT.editor"
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "OT.editorRules"
  })), T === K.c.Edit && React.createElement("div", {
    className: $_136.icon
  }, React.createElement($_13_index.j, {
    type: "icon-selected"
  }))), React.createElement("div", {
    onClick: function () {
      return W(K.c.ReadOnly)
    },
    className: N($_136.tab, T === K.c.ReadOnly && $_136.selected)
  }, $_710_index$a$formatMessage({
    id: "OT.reader"
  }), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "OT.readerRules"
  })), T === K.c.ReadOnly && React.createElement("div", {
    className: $_136.icon
  }, React.createElement($_13_index.j, {
    type: "icon-selected"
  })))), G() ? React.createElement($_13_index.d, {
    className: $_136.copy,
    type: "primary",
    onClick: function () {
      var e = document.createElement("input")
      var t = T === K.c.Edit ? "".concat(G(), " 点击链接，一起进入《").concat(e$title, "》的协同创作吧~") : "".concat(G(), " 点击链接，查看《").concat(e$title, "》的作品内容吧~")
      e.setAttribute("value", t)
      document.body.append(e)
      e.select()
      document.execCommand("Copy")
      document.body.removeChild(e)
      m($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        type: "success",
        message: $_710_index$a$formatMessage({
          id: "OT.copySuccess"
        }),
        showCloseIcon: false
      }))
      y(false)
    }
  }, $_710_index$a$formatMessage({
    id: "OT.copyLink"
  })) : React.createElement($_13_index.d, {
    className: $_136.loadingBtn,
    type: "primary"
  }, React.createElement($_13_index.j, {
    type: "icon-loading2"
  }))))
})
var St = React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.project.id
  })
  var t = _React.useState(false)
  var n = $_10_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  var i = _React.useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = $_16_index.d()
  var u = $_16_index.e(function (e) {
    return e.oTState.collWorkId
  })
  _React.useEffect(function () {
    if (u) {
      c(true)
      le(u).then(function () {
        var e = O.a(RegeneratorRuntime.mark(function e(t) {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  l($_100.s(t))
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
      }())
      $_24_index.a.init(u).then(function () {
        c(false)
      })
    } else {
      c(false)
      $_24_index.a.disconnect()
    }
  }, [l, u])
  return React.createElement(React.Fragment, null, React.createElement(yt, null), React.createElement(Ct, null), React.createElement(vt, {
    visible: r,
    onClose: function () {
      o(false)
    }
  }), React.createElement(bt, {
    visible: s
  }), Z.a(e) && React.createElement(_t, null))
})
export { St }
