/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-2
 */

"use strict"

import { ne, se, ce } from "./49__part-1"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37/index"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"./43"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_type from /* 78 */"../../../../src/shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../src/shared/widget/custom/load"
function Se(e) {
  if (ce(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e$path[3]
      var r = e$path[1]
      if (n && r) {
        Module_43.h(Src_editor_redux_common_actions.Mf(n, r, false))
      }
    })(e)
  }
}
function Ae(e) {
  var /* [auto-meaningful-name] */e$path
  if (ce(e.path)) {
    (function (e) {
      Ie.apply(this, arguments)
    })(e)
  }
  if ("screens" === (e$path = e.path)[0] && "widgetIds" === e$path[2]) {
    (function (e) {
      var t
      var n = e.path[1]
      var r = null === (t = Module_24.a.getDoc()) || undefined === t ? undefined : t.screens[n].widgetIds
      if (r) {
        Module_43.h(Src_editor_redux_common_actions.Bj(n, r))
      }
    })(e)
  }
  if (function (e) {
    return "screens" === e[0] && "invisibleWidgetIds" === e[2]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path1 = e.path
      var n = e.op
      var r = e$path1[1]
      var o = n.i
      Module_43.h(Src_editor_redux_common_actions.jf(r, o, true))
    })(e)
  }
  if (function (e) {
    return 6 === e.length && se(e) && "attributes" === e[4]
  }(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = t.i
      var o = e$path1[3]
      var i = e$path1[5]
      var a = ne(o)
      Module_43.h(Src_editor_redux_common_actions.Lg(o, i, r, Module_43.g(a), Module_43.g(a), false))
    })(e)
  }
  if (function (e) {
    return 5 === e.length && se(e)
  }(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = t.i
      var o = e$path1[3]
      var i = e$path1[4]
      var a = ne(o)
      if ("title" === i) {
        Module_43.h(Src_editor_redux_common_actions.Ng(o, r, false, true, false))
      } else {
        if ("widgetIds" === i) {
          Module_43.h(Src_editor_redux_common_actions.Mg(a, o, r, true, true, false))
        } else {
          Module_43.h(Src_editor_redux_common_actions.Lg(o, i, r, Module_43.g(a), Module_43.g(a), false))
        }
      }
    })(e)
  }
}
function Ie() {
  return (Ie = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */t$path
    var o
    var i
    var a
    var /* [auto-meaningful-name] */a$extensionWidgetList
    var c
    var /* [auto-meaningful-name] */c$cdnUrl
    var u
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$title
    var /* [auto-meaningful-name] */e$sent$type
    var h
    var m
    var g
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t$path = t.path, o = t.op, i = o.i, !Src_shared_widget_custom_type.e(i.type) || Module_9.Db(i.type)) {
              e.next = 11
              break
            }
            if (!(c = null === (a = Module_24.a.getDoc()) || undefined === a || null === (a$extensionWidgetList = a.extensionWidgetList) || undefined === a$extensionWidgetList ? undefined : a$extensionWidgetList.find(function (e) {
              return e.type === i.type
            }))) {
              e.next = 11
              break
            }
            c$cdnUrl = c.cdnUrl
            u = c.id
            Module_37.a(Src_editor_redux_common_actions.zh({
              title: Src_shared_ui_language.c(Src_shared_ui_language.b, "ExtensionWidget.loading").toString(),
              cancelBtnVisible: false,
              confirmBtnVisible: false
            }))
            e.next = 9
            return Src_shared_widget_custom_load.u(c$cdnUrl, u)
          case 9:
            if (e$sent = e.sent) {
              e$sent$title = e$sent.title
              e$sent$type = e$sent.type
              h = Src_shared_widget_custom_type.f(e$sent$type, true)
              Module_37.a(Src_editor_redux_common_actions.Vg())
              Module_37.a(Src_editor_redux_common_actions.zh({
                title: Src_shared_ui_language.c(Src_shared_ui_language.b, "ExtensionWidget.finishRegistration", {
                  title: e$sent$title,
                  type: h
                }).toString(),
                cancelBtnVisible: false
              }))
            }
          case 11:
            m = t$path[1]
            Module_9.Ub(i.id, i)
            if (g = null === (n = Module_24.a.getDoc()) || undefined === n ? undefined : n.screens[m].widgetIds) {
              Module_43.h(Src_editor_redux_common_actions.Bj(m, g))
            }
          case 15:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function je(e, t) {
  var n = OtJson1.replaceOp([e], true, t)
  Module_24.a.applyClient(n)
}
function Ne(e) {}
function Re(e, t) {
  var /* [auto-meaningful-name] */e$path
  if (1 === (e$path = e.path).length && "title" === e$path[0]) {
    (function (e) {
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      Module_43.h(Src_editor_redux_common_actions.Bf(e$op$i, false))
    })(e)
  }
}
export { Se }
export { Ae }
export { je }
export { Ne }
export { Re }
