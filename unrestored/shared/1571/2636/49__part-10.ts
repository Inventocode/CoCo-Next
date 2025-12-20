/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-10
 */

"use strict"

import { i, c, d, h, _, y, w, S, j, k, D, P, G, H, V } from "./49__part-0"
import * as /* [auto-meaningful-name] */$_24_377_index from "./24/377/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../src/shared/widget/custom/type"
import * as Oe from "./43"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as Q from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as Y from "./39"
import * as z from "./27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../src/shared/widget/custom/storage"
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
  return (bn = Q.a(RegeneratorRuntime.mark(function e(t) {
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
            $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
              title: $$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_src_shared_ui_language.b, "ExtensionWidget.loading").toString(),
              cancelBtnVisible: false,
              confirmBtnVisible: false
            }))
            e.next = 6
            return $$_$$_$$_$$_src_shared_widget_custom_load.r(n$i$code, false)
          case 6:
            e$sent = e.sent
            e$sent$types = e$sent.types
            e$sent$widget = e$sent.widget
            $$_$$_$$_$$_src_shared_widget_custom_load.v({
              types: e$sent$types,
              widget: e$sent$widget
            })
            e$sent$types$title = e$sent$types.title
            e$sent$types$type = e$sent$types.type
            l = $$_$$_$$_$$_src_shared_widget_custom_type.f(e$sent$types$type, false)
            $$_$$_$$_$$_src_shared_widget_custom_storage.a({
              type: e$sent$types$type,
              types: e$sent$types,
              code: n$i$code
            })
            $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Rj())
            $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Vg())
            $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
              title: $$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_src_shared_ui_language.b, "ExtensionWidget.finishRegistration", {
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
  var o = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.cloudDictKeysList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudDictKeysList", e.toString()], true, t) : OtJson1.insertOp(["cloudDictKeysList", e.toString()], t)
  $_24_index.a.applyClient(r)
}
function En(e, t) {
  var n
  var r
  var o = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.cloudTableColumnList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudTableColumnList", e.toString()], true, t) : OtJson1.insertOp(["cloudTableColumnList", e.toString()], t)
  $_24_index.a.applyClient(r)
}
function On(e, t) {
  var n
  var r
  var o = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.cloudTableDataList
  r = (null === o || undefined === o ? undefined : o[e]) ? OtJson1.replaceOp(["cloudTableDataList", e.toString()], true, t) : OtJson1.insertOp(["cloudTableDataList", e.toString()], t)
  $_24_index.a.applyClient(r)
}
function wn(e) {
  var t
  var n
  n = (null === (t = $_24_index.a.getDoc()) || undefined === t ? undefined : t.cloudDictList) ? OtJson1.replaceOp(["cloudDictList"], true, e) : OtJson1.insertOp(["cloudDictList"], e)
  $_24_index.a.applyClient(n)
}
function Cn(e) {
  var t
  var n
  n = (null === (t = $_24_index.a.getDoc()) || undefined === t ? undefined : t.cloudTableList) ? OtJson1.replaceOp(["cloudTableList"], true, e) : OtJson1.insertOp(["cloudTableList"], e)
  $_24_index.a.applyClient(n)
}
function Tn(e) {}
function Sn(e, t) {
  var /* [auto-meaningful-name] */e$path
  if (2 === (e$path = e.path).length && "cloudDictKeysList" === e$path[0]) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path = e.path
      var n = e.op
      var r = _e$path[1]
      var o = n.i
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Ag(Number(r), o, false))
    })(e)
  }
  if (function (e) {
    return 2 === e.length && "cloudTableColumnList" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path2 = e.path
      var n = e.op
      var r = _e$path2[1]
      var o = n.i
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Dg(Number(r), o, false))
    })(e)
  }
  if (function (e) {
    return 2 === e.length && "cloudTableDataList" === e[0]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path3 = e.path
      var n = e.op
      var r = _e$path3[1]
      var o = n.i
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Nj(Number(r), o))
    })(e)
  }
  if (function (e) {
    return 1 === e.length && "cloudDictList" === e[0]
  }(e.path)) {
    (function (e) {
      e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Bg(e$op$i, false))
    })(e)
  }
  if (function (e) {
    return 1 === e.length && "cloudTableList" === e[0]
  }(e.path)) {
    (function (e) {
      e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Eg(e$op$i, false))
    })(e)
  }
}
var An = new (function () {
  function e() {
    z.a(this, e)
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
  Y.a(e, [
    {
      key: "init",
      value: function () {
        this.blink = $_24_377_index
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
