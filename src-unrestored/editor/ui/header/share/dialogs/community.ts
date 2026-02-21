/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-17
 */

"use strict"

import { Ge } from "../../../../../../unrestored/shared/1571/2636/index__part-9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_133 from "../../../../../../unrestored/shared/1571/2636/133"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_197_index from "../../../../../../unrestored/shared/1571/2636/197/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_tools_index from "../../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_97_index from "../../../../../../unrestored/shared/1571/2636/97/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_redux_common_actions from "../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_ui_components_index from "../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_6 from "../../../../../../unrestored/shared/1571/2636/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1509 from "../../../../../../unrestored/shared/1571/2636/1509"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15091 from "../../../../../../unrestored/shared/1571/2636/1509"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1510 from "../../../../../../unrestored/shared/1571/2636/1510"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15101 from "../../../../../../unrestored/shared/1571/2636/1510"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_widget_custom_storage from "../../../../../shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_widget_custom_restrict from "../../../../../shared/widget/custom/restrict"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_177 from "../../../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_328 from "../../../../../../unrestored/shared/1571/2636/328"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_930 from "../../../../../../unrestored/shared/1571/2636/930"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9301 from "../../../../../../unrestored/shared/1571/2636/930"
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
  var s = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useRef(null)
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var p = useDispatch()
  var m = useState({
    name: i,
    description: "",
    operation: ""
  })
  var g = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(m, 2)
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
  var T = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(C, 2)
  var A = T[0]
  var j = T[1]
  var N = useState(y || "")
  var R = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(N, 2)
  var k = R[0]
  var x = R[1]
  function M() {
    return (M = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
    return (L = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
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
              if (s = i.toDataURL("image/png"), !(f = $$_$$_$$_$$_$$_shared_tools_index.m(s))) {
                e.next = 19
                break
              }
              e.next = 17
              return $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_197_index.e(f)
            case 17:
              e$sent = e.sent
              a = e$sent.url
            case 19:
              e.prev = 19
              e.next = 22
              return $$_$$_$$_$$_redux_common_actions.Nf(p, $$_$$_$$_$$_redux_common_actions.Eh(v.name, v.description, v.operation, a))
            case 22:
              e$sent1 = e.sent
              p($$_$$_$$_$$_redux_common_actions.mj({
                type: "success",
                message: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
                  id: "Publish.publishSuccess"
                }),
                showCloseIcon: false
              }))
              window.open($$_$$_$$_$$_$$_shared_tools_index.F(e$sent1))
              e$onClose()
              P(v, true, "")
              e.next = 38
              break
            case 29:
              if (e.prev = 29, e.t0 = e.catch(19), "40500104" !== e.t0.message) {
                e.next = 36
                break
              }
              p($$_$$_$$_$$_redux_common_actions.mj({
                message: "分享失败，作品使用了未审核的自定义控件",
                type: "error"
              }))
              l(false)
              e$onClose()
              return e.abrupt("return")
            case 36:
              p($$_$$_$$_$$_redux_common_actions.mj({
                type: "error",
                message: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
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
    $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("WorkPublish", {
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
      if ($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_97_index.a(o)) {
        $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_177.j(o).then(function (e) {
          var /* [auto-meaningful-name] */e$data = e.data
          b({
            name: e$data.name,
            description: e$data.description === $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_328.a ? "" : e$data.description || "",
            operation: e$data.operation === $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_328.b ? "" : e$data.operation || ""
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
  return React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.f, {
    onClose: e$onClose,
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9301.publishDialog,
    visible: e$visible,
    withPortal: true,
    title: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "Publish.publish"
    })
  }, React.createElement("main", null, React.createElement("div", null, React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.c, {
    ref: u,
    width: 340,
    height: 340,
    sourceImage: A || k
  }), React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9301.changePoster
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.B, {
    onChange: function (e) {
      return M.apply(this, arguments)
    },
    accept: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_133.f
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-player-upload-file"
  }), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "Publish.changeWorkCover"
  })))), React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9301.right
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("p", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "Publish.publishName"
  }), React.createElement("span", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9301.required
  }, "*")), React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.k, {
    defaultValue: v.name,
    maxLength: 20,
    placeholder: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "Publish.inputPublishName"
    }),
    onChange: function (e, t) {
      b($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_6.a($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, v), {}, {
        name: e
      }))
    },
    isTrimmed: true
  })), React.createElement("li", null, React.createElement("p", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "Publish.publishDescription"
  })), React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.A, {
    defaultValue: v.description,
    maxLength: 200,
    placeholder: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "Publish.inputPublishDescription"
    }),
    rows: 5,
    onChange: function (e) {
      b($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_6.a($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, v), {}, {
        description: e.target.value
      }))
    }
  })), React.createElement("li", null, React.createElement("p", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "Publish.publishOperation"
  })), React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.A, {
    defaultValue: v.operation,
    maxLength: 200,
    placeholder: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
      id: "Publish.inputPublishOperation"
    }),
    rows: 5,
    onChange: function (e) {
      b($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_6.a($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_6.a({}, v), {}, {
        operation: e.target.value
      }))
    }
  }))))), React.createElement("footer", null, React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.d, {
    type: "primary",
    onClick: function () {
      return L.apply(this, arguments)
    },
    disabled: !v.name
  }, c ? React.createElement(Ge, null) : $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
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
