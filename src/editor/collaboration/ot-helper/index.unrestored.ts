/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-10
 */

"use strict"

import { i, c, d, h, _, y, w, S, j, k, D, P, G, H, V } from "./helpers"
import * as /* [auto-meaningful-name] */Module_377 from /* 377 */"../../../../unrestored/shared/1571/2636/24/377/index"
import * as /* [auto-meaningful-name] */Shared_widget_custom_load from /* 34 */"../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Shared_ui_language from /* 23 */"../../../shared/ui/language"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from /* 78 */"../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"../../../../unrestored/shared/1571/2636/43"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from /* 2 */"../../redux/common/actions"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../unrestored/shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../unrestored/shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Shared_widget_custom_storage from /* 96 */"../../../shared/widget/custom/storage"
function vn(e) {
  var /* [auto-meaningful-name] */e$path
  if (2 === (e$path = e.path).length && "unsafeExtensionWidgetList" === e$path[0]) {
    (function (e) {
      bn.apply(this, arguments)
    })(e)
  }
  (function (e) {
    if (2 === e.length) {
      e[0]
    }
  })(e.path)
}
function bn() {
  return (bn = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */n$i$code
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$types
    var /* [auto-meaningful-name] */e$sent$widget
    var /* [auto-meaningful-name] */e$sent$types$title
    var /* [auto-meaningful-name] */e$sent$types$type
    var l
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t.path, n = t.op, !(n$i$code = n.i.code)) {
              e.next = 16
              break
            }
            Module_37.a(Redux_common_actions.zh({
              title: Shared_ui_language.c(Shared_ui_language.b, "ExtensionWidget.loading").toString(),
              cancelBtnVisible: false,
              confirmBtnVisible: false
            }))
            e.next = 6
            return Shared_widget_custom_load.r(n$i$code, false)
          case 6:
            e$sent = e.sent
            e$sent$types = e$sent.types
            e$sent$widget = e$sent.widget
            Shared_widget_custom_load.v({
              types: e$sent$types,
              widget: e$sent$widget
            })
            e$sent$types$title = e$sent$types.title
            e$sent$types$type = e$sent$types.type
            l = Shared_widget_custom_type.f(e$sent$types$type, false)
            Shared_widget_custom_storage.a({
              type: e$sent$types$type,
              types: e$sent$types,
              code: n$i$code
            })
            Module_37.a(Redux_common_actions.Rj())
            Module_37.a(Redux_common_actions.Vg())
            Module_37.a(Redux_common_actions.zh({
              title: Shared_ui_language.c(Shared_ui_language.b, "ExtensionWidget.finishRegistration", {
                title: e$sent$types$title,
                type: l
              }).toString(),
              cancelBtnVisible: false
            }))
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function yn(e, t) {
  var n
  var r
  var o = null === (n = Module_24.a.getDoc()) || undefined === n ? undefined : n.cloudDictKeysList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudDictKeysList", e.toString()], true, t) : OtJson1.insertOp(["cloudDictKeysList", e.toString()], t)
  Module_24.a.applyClient(r)
}
function En(e, t) {
  var n
  var r
  var o = null === (n = Module_24.a.getDoc()) || undefined === n ? undefined : n.cloudTableColumnList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudTableColumnList", e.toString()], true, t) : OtJson1.insertOp(["cloudTableColumnList", e.toString()], t)
  Module_24.a.applyClient(r)
}
function On(e, t) {
  var n
  var r
  var o = null === (n = Module_24.a.getDoc()) || undefined === n ? undefined : n.cloudTableDataList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudTableDataList", e.toString()], true, t) : OtJson1.insertOp(["cloudTableDataList", e.toString()], t)
  Module_24.a.applyClient(r)
}
function wn(e) {
  var t
  var n
  n = (null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.cloudDictList) ? OtJson1.replaceOp(["cloudDictList"], true, e) : OtJson1.insertOp(["cloudDictList"], e)
  Module_24.a.applyClient(n)
}
function Cn(e) {
  var t
  var n
  n = (null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.cloudTableList) ? OtJson1.replaceOp(["cloudTableList"], true, e) : OtJson1.insertOp(["cloudTableList"], e)
  Module_24.a.applyClient(n)
}
function Tn(e) {}
function Sn(e, t) {
  var /* [auto-meaningful-name] */e$path
  if (2 === (e$path = e.path).length && "cloudDictKeysList" === e$path[0]) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e.op
      var r = e$path[1]
      var o = n.i
      Module_43.h(Redux_common_actions.Ag(Number(r), o, false))
    })(e)
  }
  if (function (e) {
    return 2 === e.length && "cloudTableColumnList" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e.op
      var r = e$path[1]
      var o = n.i
      Module_43.h(Redux_common_actions.Dg(Number(r), o, false))
    })(e)
  }
  if (function (e) {
    return 2 === e.length && "cloudTableDataList" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e.op
      var r = e$path[1]
      var o = n.i
      Module_43.h(Redux_common_actions.Nj(Number(r), o))
    })(e)
  }
  if (function (e) {
    return 1 === e.length && "cloudDictList" === e[0]
  }(e.path)) {
    (function (e) {
      e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      Module_43.h(Redux_common_actions.Bg(e$op$i, false))
    })(e)
  }
  if (function (e) {
    return 1 === e.length && "cloudTableList" === e[0]
  }(e.path)) {
    (function (e) {
      e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      Module_43.h(Redux_common_actions.Eg(e$op$i, false))
    })(e)
  }
}
var An = new (function () {
  function e() {
    Module_27.a(this, e)
    this.projectOt = undefined
    this.blink = undefined
    this.widget = undefined
    this.screen = undefined
    this.imageFileList = undefined
    this.soundFileList = undefined
    this.iconFileList = undefined
    this.primitiveVariables = undefined
    this.arrayVariables = undefined
    this.objectVariables = undefined
    this.localStorage = undefined
    this.focus = undefined
    this.broadcasts = undefined
    this.customEvent = undefined
    this.globalWidget = undefined
    this.extensionWidget = undefined
    this.cloudSpace = undefined
  }
  Module_39.a(e, [
    {
      key: "init",
      value: function () {
        this.blink = Module_377
        this.widget = i
        this.screen = d
        this.imageFileList = h
        this.soundFileList = _
        this.iconFileList = y
        this.primitiveVariables = w
        this.arrayVariables = S
        this.objectVariables = j
        this.localStorage = localStorage
        this.focus = V
        this.broadcasts = k
        this.projectOt = c
        this.customEvent = D
        this.globalWidget = P
        this.extensionWidget = G
        this.cloudSpace = H
      }
    }, {
      key: "dispose",
      value: function () {
        var e = this
        Object.keys(this).forEach(function (t) {
          return e[t] = undefined
        })
      }
    }
  ])
  return e
}())()
export { vn }
export { yn }
export { En }
export { On }
export { wn }
export { Cn }
export { Tn }
export { Sn }
export { An }
