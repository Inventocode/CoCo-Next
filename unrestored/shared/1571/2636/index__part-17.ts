/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-17
 */

"use strict"

import { Ge } from "./index__part-9"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as /* [auto-meaningful-name] */$_197_index from "./197/index"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as te from "./15"
import * as Z from "./97"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1509 from "./1509"
import /* [auto-meaningful-name] */$_15091 from "./1509"
import * as /* [auto-meaningful-name] */$_1510 from "./1510"
import /* [auto-meaningful-name] */$_15101 from "./1510"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_restrict from "../../../../src/shared/widget/custom/restrict"
import * as /* [auto-meaningful-name] */$_177 from "./177"
import * as /* [auto-meaningful-name] */$_328 from "./328"
import * as /* [auto-meaningful-name] */$_930 from "./930"
import /* [auto-meaningful-name] */$_9301 from "./930"
var Zt
var Jt = memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onConfirm = e.onConfirm
  var o = useSelector(function (e) {
    return e.project.id
  })
  var i = useSelector(function (e) {
    return e.project.title
  })
  var a = useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useRef(null)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var p = useDispatch()
  var m = useState({
    name: i,
    description: "",
    operation: ""
  })
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useSelector(function (e) {
    var t
    return null === (t = e.project.screens.get(0)) || undefined === t ? undefined : t.snapshot
  })
  var w = useSelector(function (e) {
    return e.project.projectSource
  })
  useEffect(function () {
    var /* [auto-meaningful-name] */u$current
    if (e$visible) {
      if (!(null === (u$current = u.current) || undefined === u$current)) {
        u$current.setScale(1)
      }
    }
  }, [e$visible])
  useEffect(function () {
    b({
      description: "",
      operation: "",
      name: i
    })
  }, [i])
  var C = useState("")
  var T = $_10_index.a(C, 2)
  var A = T[0]
  var j = T[1]
  var N = useState(y || "")
  var R = $_10_index.a(N, 2)
  var k = R[0]
  var x = R[1]
  function M() {
    return (M = O.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (t && t[0]) {
                j(t[0])
              }
            case 1:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))).apply(this, arguments)
  }
  function L() {
    return (L = O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */u$current
      var /* [auto-meaningful-name] */u$current$target
      var i
      var a
      var s
      var f
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent1
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!c) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              l(true)
              e.next = 5
              return e$onConfirm()
            case 5:
              if (e.sent) {
                e.next = 9
                break
              }
              l(false)
              return e.abrupt("return")
            case 9:
              if (i = null === (u$current = u.current) || undefined === u$current || null === (u$current$target = u$current.target) || undefined === u$current$target ? undefined : u$current$target.getImageScaledToCanvas(), a = "", !i) {
                e.next = 19
                break
              }
              if (s = i.toDataURL("image/png"), !(f = te.m(s))) {
                e.next = 19
                break
              }
              e.next = 17
              return $_197_index.e(f)
            case 17:
              e$sent = e.sent
              a = e$sent.url
            case 19:
              e.prev = 19
              e.next = 22
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(p, $$_$$_$$_$$_src_editor_redux_common_actions.Eh(v.name, v.description, v.operation, a))
            case 22:
              e$sent1 = e.sent
              p($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                type: "success",
                message: $_710$a$formatMessage({
                  id: "Publish.publishSuccess"
                }),
                showCloseIcon: false
              }))
              window.open(te.F(e$sent1))
              e$onClose()
              P(v, true, "")
              e.next = 38
              break
            case 29:
              if (e.prev = 29, e.t0 = e.catch(19), "40500104" !== e.t0.message) {
                e.next = 36
                break
              }
              p($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: "分享失败，作品使用了未审核的自定义控件",
                type: "error"
              }))
              l(false)
              e$onClose()
              return e.abrupt("return")
            case 36:
              p($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                type: "error",
                message: $_710$a$formatMessage({
                  id: "Publish.publishFail"
                }),
                showCloseIcon: false
              }))
              P(v, false, e.t0.message)
            case 38:
              l(false)
            case 39:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[19, 29]])
    }))).apply(this, arguments)
  }
  function P(e, t, n) {
    $_141_index.a("WorkPublish", {
      workId: o,
      workName: e.name,
      workType: "APP工匠",
      workDescription: e.description,
      sourceTag: w.tag,
      sourceId: w.id,
      isSuccess: t,
      failReason: n
    })
  }
  useEffect(function () {
    if (e$visible) {
      if (Z.a(o)) {
        $_177.j(o).then(function (e) {
          var /* [auto-meaningful-name] */e$data = e.data
          b({
            name: e$data.name,
            description: e$data.description === $_328.a ? "" : e$data.description || "",
            operation: e$data.operation === $_328.b ? "" : e$data.operation || ""
          })
          if (e$data.cover_url) {
            j(e$data.cover_url)
          } else {
            x(y || "")
          }
        })
      } else {
        x(y || "")
      }
    } else {
      j("")
    }
  }, [e$visible])
  return React.createElement($_13_index.f, {
    onClose: e$onClose,
    className: $_9301.publishDialog,
    visible: e$visible,
    withPortal: true,
    title: $_710$a$formatMessage({
      id: "Publish.publish"
    })
  }, React.createElement("main", null, React.createElement("div", null, React.createElement($_13_index.c, {
    ref: u,
    width: 340,
    height: 340,
    sourceImage: A || k
  }), React.createElement("div", {
    className: $_9301.changePoster
  }, React.createElement($_13_index.B, {
    onChange: function (e) {
      return M.apply(this, arguments)
    },
    accept: $_133.f
  }, React.createElement($_13_index.j, {
    type: "icon-player-upload-file"
  }), $_710$a$formatMessage({
    id: "Publish.changeWorkCover"
  })))), React.createElement("div", {
    className: $_9301.right
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("p", null, $_710$a$formatMessage({
    id: "Publish.publishName"
  }), React.createElement("span", {
    className: $_9301.required
  }, "*")), React.createElement($_13_index.k, {
    defaultValue: v.name,
    maxLength: 20,
    placeholder: $_710$a$formatMessage({
      id: "Publish.inputPublishName"
    }),
    onChange: function (e, t) {
      b(D.a(D.a({}, v), {}, {
        name: e
      }))
    },
    isTrimmed: true
  })), React.createElement("li", null, React.createElement("p", null, $_710$a$formatMessage({
    id: "Publish.publishDescription"
  })), React.createElement($_13_index.A, {
    defaultValue: v.description,
    maxLength: 200,
    placeholder: $_710$a$formatMessage({
      id: "Publish.inputPublishDescription"
    }),
    rows: 5,
    onChange: function (e) {
      b(D.a(D.a({}, v), {}, {
        description: e.target.value
      }))
    }
  })), React.createElement("li", null, React.createElement("p", null, $_710$a$formatMessage({
    id: "Publish.publishOperation"
  })), React.createElement($_13_index.A, {
    defaultValue: v.operation,
    maxLength: 200,
    placeholder: $_710$a$formatMessage({
      id: "Publish.inputPublishOperation"
    }),
    rows: 5,
    onChange: function (e) {
      b(D.a(D.a({}, v), {}, {
        operation: e.target.value
      }))
    }
  }))))), React.createElement("footer", null, React.createElement($_13_index.d, {
    type: "primary",
    onClick: function () {
      return L.apply(this, arguments)
    },
    disabled: !v.name
  }, c ? React.createElement(Ge, null) : $_710$a$formatMessage({
    id: "Publish.publish"
  }))))
})
!function (e) {
  e.NONE = "NONE"
  e.SHARE_COMMUNITY_DIALOG = "SHARE_COMMUNITY_DIALOG"
  e.SHARE_QR_DIALOG = "SHARE_QR_DIALOG"
}(Zt || (Zt = {}))
export { Zt }
export { Jt }
