/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-18
 */

"use strict"

import { Ge } from "./index__part-9"
import { Zt, Jt } from "./index__part-17"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_restrict from "../../../../src/shared/widget/custom/restrict"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../src/shared/widget/custom/storage"
import /* [auto-meaningful-name] */$_1510 from "./1510"
import /* [auto-meaningful-name] */$_1509 from "./1509"
import /* [auto-meaningful-name] */$_1036_index from "./1036/index"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as /* [auto-meaningful-name] */$_197_index from "./197/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../src/shared/widget/custom/type"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_288 from "./288"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as te from "./15"
import * as Z from "./97"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1052 from "./1052"
import /* [auto-meaningful-name] */_$_ from "./1052"
import * as /* [auto-meaningful-name] */$_281 from "./281"
import /* [auto-meaningful-name] */_$_2 from "./281"
var rn = function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var r = $_16_index.e(function (e) {
    return e.project.projectShareInfo
  })
  var o = $_16_index.e(function (e) {
    return e.project.id
  })
  var i = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var a = $_16_index.e(function (e) {
    return e.project.projectSource
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = $_16_index.d()
  var l = _React.useState(false)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = _React.useState(false)
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = _React.useState("")
  var w = $_10_index.a(y, 2)
  var C = w[0]
  var T = w[1]
  var A = _React.useState(false)
  var j = $_10_index.a(A, 2)
  var R = j[0]
  var k = j[1]
  var x = _React.useState(false)
  var D = $_10_index.a(x, 2)
  var M = D[0]
  var L = D[1]
  var P = _React.useState(false)
  var B = $_10_index.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = _React.useRef(false)
  var U = _React.useCallback(function (e, t) {
    $_141_index.a("WorkShare", {
      workId: o,
      workName: r.title,
      workTag: "",
      sourceTag: a.tag,
      sourceId: a.id,
      authorId: (null === i || undefined === i ? undefined : i.id) || "",
      nickName: (null === i || undefined === i ? undefined : i.nickname) || "",
      isSuccess: e,
      failReason: t
    })
  }, [o, a, r.title, i])
  var H = _React.useCallback(O.a(RegeneratorRuntime.mark(function e() {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!F && !R) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            e.prev = 2
            e.next = 5
            return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(c, $$_$$_$$_$$_src_editor_redux_common_actions.Fh(r))
          case 5:
            if (Z.a(o)) {
              T(te.J(o))
            }
            k(false)
            L(false)
            U(true, "")
            e.next = 21
            break
          case 11:
            if (e.prev = 11, e.t0 = e.catch(2), "40500104" !== e.t0.message) {
              e.next = 18
              break
            }
            c($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: "分享失败，作品使用了未审核的自定义控件",
              type: "error"
            }))
            k(false)
            e$onClose()
            return e.abrupt("return")
          case 18:
            c($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: $_710_index$a$formatMessage({
                id: "Publish.shareQRError"
              }).toString(),
              type: "error"
            }))
            k(false)
            U(false, e.t0.message)
          case 21:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 11]])
  })), [c, $_710_index$a$formatMessage, R, e$onClose, o, r, U, F])
  function V() {
    return (V = O.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */_e$sent
      var /* [auto-meaningful-name] */_e$sent$url
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!t || !t[0]) {
                e.next = 22
                break
              }
              e.prev = 1
              n = t[0]
              L(true)
              G(true)
              e.next = 7
              return te.u(n)
            case 7:
              if (!(e$sent = e.sent)) {
                e.next = 14
                break
              }
              e.next = 11
              return $_197_index.e(e$sent)
            case 11:
              _e$sent = e.sent
              _e$sent$url = _e$sent.url
              c($$_$$_$$_$$_src_editor_redux_common_actions.Ti({
                img: _e$sent$url
              }))
            case 14:
              e.next = 19
              break
            case 16:
              e.prev = 16
              e.t0 = e.catch(1)
              c($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710_index$a$formatMessage({
                  id: "Publish.coverImageUploadFail"
                }).toString(),
                type: "error"
              }))
            case 19:
              e.prev = 19
              G(false)
              return e.finish(19)
            case 22:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[1, 16, 19, 22]])
    }))).apply(this, arguments)
  }
  function K() {
    return (K = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if ($_190.a(C)) {
                b(true)
                c($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                  message: $_710_index$a$formatMessage({
                    id: "Publish.copyLinkSuccess"
                  }).toString(),
                  duration: 1e3,
                  type: "success"
                }))
              } else {
                c($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                  message: $_710_index$a$formatMessage({
                    id: "Publish.copyLinkFailure"
                  }).toString(),
                  duration: 1e3,
                  type: "error"
                }))
              }
            case 2:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  _React.useEffect(function () {
    if (e$visible) {
      if (!W.current) {
        k(true)
        H()
      }
      W.current = true
    } else {
      W.current = false
      L(false)
      p(false)
      b(false)
    }
  }, [H, e$visible])
  return React.createElement($_13_index.f, {
    onClose: e$onClose,
    className: _$_2.shareToOthers,
    title: $_710_index$a$formatMessage({
      id: "Publish.shareToOthers"
    }),
    withPortal: true,
    visible: e$visible
  }, React.createElement("div", {
    className: _$_2.qrWrapper
  }, (R || M || F) && React.createElement("div", {
    className: _$_2.blocking
  }, React.createElement("div", {
    className: _$_2.iconWrapper
  }, M ? React.createElement("div", {
    onClick: function () {
      W.current = false
      k(true)
      L(false)
      b(false)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-refresh",
    className: _$_2.refreshIcon
  })) : React.createElement(Ge, null)), React.createElement("span", null, $_710_index$a$formatMessage(M ? {
    id: "Publish.refreshQrCode"
  } : {
    id: "Publish.creatingQrCode"
  }))), React.createElement("div", {
    className: _$_2.qrCode
  }, React.createElement($_1036_index, {
    value: C,
    size: 168,
    level: "M",
    imageSettings: {
      width: 54,
      height: 54,
      src: "https://static.bcmcdn.com/coco/image/share-dialog/qrlogo.png"
    }
  })), React.createElement("div", {
    className: _$_2.message
  }, R || M ? "" : $_710_index$a$formatMessage({
    id: "Publish.shareQrCode"
  })), React.createElement("div", {
    className: _$_2.shareLinkWrapper
  }, React.createElement("div", {
    className: _$_2.link
  }, C), React.createElement("div", {
    className: N(_$_2.copyBtn, v && _$_2.copied, (R || M || F) && _$_2.disabled),
    onClick: function () {
      return K.apply(this, arguments)
    }
  }, $_710_index$a$formatMessage(v ? {
    id: "Publish.shareLinkCopied"
  } : {
    id: "Publish.copyShareLink"
  })))), React.createElement("div", {
    className: _$_2.lineWrapper
  }, React.createElement("div", {
    className: _$_2.line
  }), React.createElement("div", {
    className: _$_2.settings,
    onClick: function () {
      return p(!d)
    }
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "Publish.moreSettings"
  })), React.createElement($_13_index.j, {
    type: "icon-dropdown-down",
    className: N(_$_2.settingsIcon, d && _$_2.rotateSettingsIcon)
  })), React.createElement("div", {
    className: _$_2.line
  })), React.createElement("div", {
    className: N(_$_2.settingWrapper, !d && _$_2.invisible)
  }, React.createElement("div", {
    className: _$_2.workInfo
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("p", {
    className: _$_2.title
  }, $_710_index$a$formatMessage({
    id: "Publish.shareTitle"
  }), React.createElement("span", {
    className: _$_2.required
  }, "*")), React.createElement($_13_index.k, {
    defaultValue: r.title,
    maxLength: 20,
    placeholder: $_710_index$a$formatMessage({
      id: "Publish.inputPublishName"
    }),
    onBlur: function (e, t) {
      if (e !== r.title) {
        if ("" !== e) {
          L(true)
          c($$_$$_$$_$$_src_editor_redux_common_actions.Ti({
            title: e
          }))
        } else {
          t.target.value = r.title
        }
      }
    },
    isTrimmed: true
  })), React.createElement("li", null, React.createElement("p", {
    className: _$_2.title
  }, $_710_index$a$formatMessage({
    id: "Publish.shareDescription"
  })), React.createElement($_13_index.A, {
    defaultValue: r.desc,
    maxLength: 25,
    placeholder: $_710_index$a$formatMessage({
      id: "Publish.inputShareDescription"
    }),
    rows: 3,
    onBlur: function (e) {
      if (e.target.value !== r.desc) {
        L(true)
        c($$_$$_$$_$$_src_editor_redux_common_actions.Ti({
          desc: e.target.value
        }))
      }
    }
  })))), React.createElement("div", null, React.createElement("p", {
    className: _$_2.title
  }, $_710_index$a$formatMessage({
    id: "Publish.workCover"
  })), React.createElement($_13_index.c, {
    width: 140,
    height: 138,
    sourceImage: r.img
  }), React.createElement("div", {
    className: _$_2.changePoster
  }, React.createElement($_13_index.B, {
    onChange: function (e) {
      return V.apply(this, arguments)
    },
    accept: $_133.f
  }, $_710_index$a$formatMessage({
    id: "Publish.changeWorkCover"
  }))))))
}
var on = function (e) {
  var /* [auto-meaningful-name] */e$target = e.target
  var n = {
    icon: "community" === e$target ? $_1509 : $_1510,
    message: "community" === e$target ? "Publish.shareToCommunity" : "Publish.shareToOthers",
    dialogType: "community" === e$target ? Zt.SHARE_COMMUNITY_DIALOG : Zt.SHARE_QR_DIALOG
  }
  var r = _React.useState(Zt.NONE)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = $_16_index.e(function (e) {
    return e.project.id
  })
  var u = $_16_index.e(function (e) {
    return e.project.globalWidgetIds
  })
  var d = $_16_index.d()
  function p() {
    return (p = O.a(RegeneratorRuntime.mark(function e() {
      var t
      var r
      var o
      var i
      var p
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (s) {
                e.next = 3
                break
              }
              d($$_$$_$$_$$_src_editor_redux_common_actions.Ch())
              return e.abrupt("return")
            case 3:
              if (t = {}, u.forEach(function (e) {
                var n = Et.Bb(e)
                if (n) {
                  t[e] = n
                }
              }), r = new Set(), o = new Set(), Object.values(t).forEach(function (e) {
                var /* [auto-meaningful-name] */e$type = e.type
                var n = $$_$$_$$_$$_src_shared_widget_custom_storage.f(e$type)
                if (e$type.includes($$_$$_$$_$$_src_shared_widget_custom_type.b) && n) {
                  var i = n
                  $$_$$_$$_$$_src_shared_widget_custom_restrict.a.forEach(function (e) {
                    var /* [auto-meaningful-name] */i$code
                    if (null === (i$code = i.code) || undefined === i$code ? undefined : i$code.includes(e)) {
                      o.add(e)
                      r.add(n.types.title)
                    }
                  })
                }
              }), !o.size) {
                e.next = 11
                break
              }
              d($$_$$_$$_$$_src_editor_redux_common_actions.zh({
                allowText: $_710_index$a$formatMessage({
                  id: "cloudDb.know"
                }),
                title: "error",
                content: $_710_index$a$formatMessage({
                  id: "Play.widgetNotSupportsForbiddenKeywords"
                }, {
                  widgetTypeNames: Array.from(r).join("、"),
                  keywords: Array.from(o).join("、")
                }),
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 11:
              i = Et.Eb(Et.j.EXTENSION).filter(function (e) {
                return !$$_$$_$$_$$_src_shared_widget_custom_type.e(e.type)
              })
              e.next = 14
              return $_288.b()
            case 14:
              if (e.sent.includes(Number(l)) || !(i.length > 0)) {
                e.next = 18
                break
              }
              d($$_$$_$$_$$_src_editor_redux_common_actions.zh({
                allowText: $_710_index$a$formatMessage({
                  id: "know"
                }),
                title: "",
                content: React.createElement("div", null, "作品使用了未审核的自定义控件，需将控件提交至", React.createElement("a", {
                  href: te.b,
                  target: "__blank",
                  rel: "noopener noreferrer"
                }, "Coco控件商城-投稿"), "，并等待审核通过后才能进行分享。"),
                cancelBtnVisible: false
              }))
              return e.abrupt("return")
            case 18:
              p = function () {
                a(n.dialogType)
              }
              if (n.dialogType === Zt.SHARE_QR_DIALOG) {
                $$_$$_$$_$$_src_editor_redux_common_actions.Nf(d, $$_$$_$$_$$_src_editor_redux_common_actions.Wf(p))
              } else {
                if (Et.Y().length > 0 && "true" !== localStorage.getItem("cloudDBPublishGuide")) {
                  d($$_$$_$$_$$_src_editor_redux_common_actions.kj(true, "share", p))
                } else {
                  p()
                }
              }
            case 20:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function m() {
    return g.apply(this, arguments)
  }
  function g() {
    return (g = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.prev = 0
              e.next = 3
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(d, $$_$$_$$_$$_src_editor_redux_common_actions.tg({
                isUpdate: Z.a(l),
                isAutoSave: true
              }))
            case 3:
              e.next = 5
              return d($$_$$_$$_$$_src_editor_redux_common_actions.kh())
            case 5:
              return e.abrupt("return", true)
            case 8:
              e.prev = 8
              e.t0 = e.catch(0)
              e.next = 12
              return d($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710_index$a$formatMessage({
                  id: "Publish.projectSaveFail"
                }),
                type: "error"
              }))
            case 12:
              return e.abrupt("return", false)
            case 13:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 8]])
    }))).apply(this, arguments)
  }
  function v() {
    a(Zt.NONE)
  }
  return React.createElement("div", null, React.createElement("div", {
    onClick: function () {
      return p.apply(this, arguments)
    },
    className: _$_.shareBtn
  }, React.createElement("img", {
    src: n.icon,
    alt: e$target,
    className: _$_.shareIcon
  }), React.createElement("span", {
    className: _$_.shareMessage
  }, $_710_index$a$formatMessage({
    id: n.message
  }))), React.createElement(Jt, {
    onClose: v,
    onConfirm: m,
    visible: i === Zt.SHARE_COMMUNITY_DIALOG
  }), React.createElement(rn, {
    onClose: v,
    onConfirm: m,
    visible: i === Zt.SHARE_QR_DIALOG
  }))
}
export { on }
