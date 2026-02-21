/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-14
 */

"use strict"

import { se, le, de, fe, ge } from "../../../../../unrestored/shared/1571/2636/index__part-5"
import { _t, vt, bt, yt } from "../../../../../unrestored/shared/1571/2636/index__part-13"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_136 from "../../../../../unrestored/shared/1571/2636/136"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_100 from "../../../../../unrestored/shared/1571/2636/100"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index from "../../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_player_audit from "../../../../shared/player/audit"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_tools_index from "../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213 from "../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_97_index from "../../../../../unrestored/shared/1571/2636/97/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_ui_components_index from "../../../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index from "../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_widget_custom_type from "../../../../shared/widget/custom/type"
var wt = function (e) {
  var t
  var /* [auto-meaningful-name] */e$permission
  var r = useState(false)
  var o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var c = function () {
    a(false)
  }
  useEffect(function () {
    if (!e.parentVisible) {
      a(false)
    }
  }, [e.parentVisible])
  return e.isAuthor ? React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a, {
    placement: "bottom",
    content: (t = e.id, e$permission = e.permission, React.createElement("div", {
      className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.permissionDialog
    }, React.createElement("div", {
      onClick: function () {
        return e.handleChangePermission($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit, t, c)
      },
      className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.item
    }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
      type: "icon-selected",
      className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon, e$permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)
    }), React.createElement("span", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "OT.dialogCanEdit"
    }))), React.createElement("div", {
      onClick: function () {
        return e.handleChangePermission($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly, t, c)
      },
      className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.item
    }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
      type: "icon-selected",
      className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon, e$permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)
    }), React.createElement("span", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "OT.dialogReadOnly"
    }))), React.createElement("div", {
      onClick: function () {
        return e.handleRemovePermission(t, c)
      },
      className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.item, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.remove)
    }, React.createElement("span", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "OT.dialogRemove"
    }))))),
    trigger: "click",
    visible: i,
    onVisibleChange: function (e) {
      a(e)
    }
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.edit_role
  }, React.createElement("span", null, e.permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.edit"
  }) : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.readonly"
  })), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon
  })))) : React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.edit_role, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.disabled)
  }, React.createElement("span", null, e.permission === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.edit"
  }) : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.readonly"
  })), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon
  })))
}
var Ct = React.memo(function () {
  var e = useSelector(function (e) {
    return e.project
  })
  var t = e.id
  var /* [auto-meaningful-name] */e$title = e.title
  var r = useSelector(function (e) {
    return e.oTState.cooperationUserList
  })
  var o = useSelector(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var i = useSelector(function (e) {
    return e.common.userInfo
  })
  var a = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var s = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var l = useSelector(function (e) {
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
  var u = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_97_index.a(t)
  var d = useSelector(function (e) {
    return e.oTState.editorInviteUrl
  })
  var p = useSelector(function (e) {
    return e.oTState.readOnlyInviteUrl
  })
  var m = useDispatch()
  var g = useState(false)
  var v = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = useState($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit)
  var C = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = useRef(null)
  var k = useState(false)
  var x = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(k, 2)
  var D = x[0]
  var M = x[1]
  function L() {
    return (L = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
      var n
      var r
      var /* [auto-meaningful-name] */e$sent
      var a
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Eb($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.j.EXTENSION).filter(function (e) {
                return !$$_$$_$$_$$_shared_widget_custom_type.e(e.type)
              })
              e.next = 3
              return $$_$$_$$_$$_shared_player_audit.b()
            case 3:
              if (e.sent.includes(Number(t)) || !(n.length > 0)) {
                e.next = 8
                break
              }
              y(false)
              m($$_$$_$$_redux_common_actions.zh({
                allowText: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
                  id: "know"
                }),
                title: "",
                content: React.createElement("div", null, "作品使用了未审核的自定义控件，需将控件提交至", React.createElement("a", {
                  href: $$_$$_$$_$$_shared_tools_index.b,
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
              return $$_$$_$$_redux_common_actions.Nf(m, $$_$$_$$_redux_common_actions.tg({
                isUpdate: u,
                isAutoSave: true
              }))
            case 16:
              r = e.sent
            case 17:
              if (!($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Y().length > 0)) {
                e.next = 22
                break
              }
              y(false)
              m($$_$$_$$_redux_common_actions.zh({
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
              m($$_$$_$$_$$_$$_unrestored_shared_1571_2636_100.o(r))
              e.next = 30
              return fe(r, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit)
            case 30:
              e$sent = e.sent
              a = $$_$$_$$_$$_shared_tools_index.x(r, e$sent)
              m($$_$$_$$_$$_$$_unrestored_shared_1571_2636_100.p(a))
            case 33:
              $$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("InviteCollaborationClick", {
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
    var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(n, r, o) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ge(r, t, n).then(function () {
                var /* [auto-meaningful-name] */R$current
                le(t).then(function () {
                  var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
                    return RegeneratorRuntime.wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            m($$_$$_$$_$$_$$_unrestored_shared_1571_2636_100.s(t))
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
    var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(n, r) {
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
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.content
  }, a && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.header
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.d, {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.shareButton,
    onClick: function () {
      return L.apply(this, arguments)
    }
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.invitationIcon,
    type: "icon-ot-invitation"
  }), $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.inviteFriend"
  }))), React.createElement("ul", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.list
  }, r.map(function (e, t) {
    return React.createElement("li", {
      key: t
    }, React.createElement("div", {
      className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.headerPhotoBorder),
      key: e.id,
      style: {
        marginRight: "8px",
        borderColor: o.get(e.id)
      }
    }, React.createElement("div", {
      className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.headPhoto,
      style: {
        backgroundImage: "url(".concat(e.avatar_url, ")")
      }
    })), React.createElement("div", {
      className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.name
    }, React.createElement("p", null, e.nickname), React.createElement("span", null, e.id)), (n = e.id, e$is_author = e.is_author, e$edit_permission = e.edit_permission, e$is_author ? React.createElement("div", {
      className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.role
    }, React.createElement("div", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
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
  var G = useCallback(function () {
    return T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit ? d : T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly ? p : ""
  }, [d, p, T])
  var W = useCallback(function () {
    var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(n) {
      var /* [auto-meaningful-name] */e$sent
      var o
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit) {
                e.next = 3
                break
              }
              j(n)
              return e.abrupt("return")
            case 3:
              if (n !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly) {
                e.next = 14
                break
              }
              if (p) {
                e.next = 13
                break
              }
              e.next = 7
              return fe(t, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly)
            case 7:
              e$sent = e.sent
              o = $$_$$_$$_$$_shared_tools_index.x(t, e$sent)
              m($$_$$_$$_$$_$$_unrestored_shared_1571_2636_100.r(o))
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
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.r, {
    content: F,
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.oTButton,
    onOpen: function () {
      return M(true)
    },
    onClose: function () {
      return M(false)
    },
    ref: R
  }, React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    mouseLeaveDelay: 0,
    placement: "bottom",
    title: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "OT.coll"
    }),
    trigger: ["hover", "click"],
    overlayInnerStyle: {
      position: "relative",
      top: -4
    }
  }, React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.collIconWrapper, D && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.activeCollIconWrapper)
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-collaborate-active",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.collIcon
  })))), React.createElement($$_$$_$$_$$_shared_ui_components_index.f, {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.shareOtDialog,
    visible: b,
    title: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "OT.copyCollInvitationUrl"
    }),
    onClose: function () {
      y(false)
    }
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.dialogMain
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.text
  }, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.expiration"
  })), React.createElement("div", {
    onClick: function () {
      return W($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit)
    },
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.tab, T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)
  }, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.editor"
  }), React.createElement("span", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.editorRules"
  })), T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-selected"
  }))), React.createElement("div", {
    onClick: function () {
      return W($$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly)
    },
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.tab, T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.selected)
  }, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.reader"
  }), React.createElement("span", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.readerRules"
  })), T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.ReadOnly && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.icon
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-selected"
  })))), G() ? React.createElement($$_$$_$$_$$_shared_ui_components_index.d, {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.copy,
    type: "primary",
    onClick: function () {
      var e = document.createElement("input")
      var t = T === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.c.Edit ? "".concat(G(), " 点击链接，一起进入《").concat(e$title, "》的协同创作吧~") : "".concat(G(), " 点击链接，查看《").concat(e$title, "》的作品内容吧~")
      e.setAttribute("value", t)
      document.body.append(e)
      e.select()
      document.execCommand("Copy")
      document.body.removeChild(e)
      m($$_$$_$$_redux_common_actions.mj({
        type: "success",
        message: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
          id: "OT.copySuccess"
        }),
        showCloseIcon: false
      }))
      y(false)
    }
  }, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "OT.copyLink"
  })) : React.createElement($$_$$_$$_$$_shared_ui_components_index.d, {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_136.loadingBtn,
    type: "primary"
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-loading2"
  }))))
})
var St = React.memo(function () {
  var e = useSelector(function (e) {
    return e.project.id
  })
  var t = useState(false)
  var n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  var i = useState(false)
  var a = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useDispatch()
  var u = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  useEffect(function () {
    if (u) {
      c(true)
      le(u).then(function () {
        var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  l($$_$$_$$_$$_$$_unrestored_shared_1571_2636_100.s(t))
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
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.init(u).then(function () {
        c(false)
      })
    } else {
      c(false)
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.disconnect()
    }
  }, [l, u])
  return React.createElement(React.Fragment, null, React.createElement(yt, null), React.createElement(Ct, null), React.createElement(vt, {
    visible: r,
    onClose: function () {
      o(false)
    }
  }), React.createElement(bt, {
    visible: s
  }), $$_$$_$$_$$_$$_unrestored_shared_1571_2636_97_index.a(e) && React.createElement(_t, null))
})
export { St }
