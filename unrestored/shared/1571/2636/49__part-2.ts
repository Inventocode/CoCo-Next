/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-2
 */

"use strict"

import { ne, se, ce } from "./49__part-1"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as Q from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as ye from "./9"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as Oe from "./43"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../src/shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
function Se(e) {
  if (ce(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path = e.path
      var n = e$path[3]
      var r = e$path[1]
      if (n && r) {
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Mf(n, r, false))
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
      var r = null === (t = $_24_index.a.getDoc()) || undefined === t ? undefined : t.screens[n].widgetIds
      if (r) {
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Bj(n, r))
      }
    })(e)
  }
  if (function (e) {
    return "screens" === e[0] && "invisibleWidgetIds" === e[2]
  }(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path = e.path
      var n = e.op
      var r = _e$path[1]
      var o = n.i
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.jf(r, o, true))
    })(e)
  }
  if (function (e) {
    return 6 === e.length && se(e) && "attributes" === e[4]
  }(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */_e$path2 = e.path
      var r = t.i
      var o = _e$path2[3]
      var i = _e$path2[5]
      var a = ne(o)
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Lg(o, i, r, Oe.g(a), Oe.g(a), false))
    })(e)
  }
  if (function (e) {
    return 5 === e.length && se(e)
  }(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */_e$path3 = e.path
      var r = t.i
      var o = _e$path3[3]
      var i = _e$path3[4]
      var a = ne(o)
      if ("title" === i) {
        Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Ng(o, r, false, true, false))
      } else {
        if ("widgetIds" === i) {
          Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Mg(a, o, r, true, true, false))
        } else {
          Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Lg(o, i, r, Oe.g(a), Oe.g(a), false))
        }
      }
    })(e)
  }
}
function Ie() {
  return (Ie = Q.a(RegeneratorRuntime.mark(function e(t) {
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
            if (t$path = t.path, o = t.op, i = o.i, !$$_$$_$$_$$_src_shared_widget_custom_type.e(i.type) || ye.Db(i.type)) {
              e.next = 11
              break
            }
            if (!(c = null === (a = $_24_index.a.getDoc()) || undefined === a || null === (a$extensionWidgetList = a.extensionWidgetList) || undefined === a$extensionWidgetList ? undefined : a$extensionWidgetList.find(function (e) {
              return e.type === i.type
            }))) {
              e.next = 11
              break
            }
            c$cdnUrl = c.cdnUrl
            u = c.id
            $_37_index.a($$_$$_$$_$$_src_editor_redux_common_actions.zh({
              title: $$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_src_shared_ui_language.b, "ExtensionWidget.loading").toString(),
              cancelBtnVisible: false,
              confirmBtnVisible: false
            }))
            e.next = 9
            return $$_$$_$$_$$_src_shared_widget_custom_load.u(c$cdnUrl, u)
          case 9:
            if (e$sent = e.sent) {
              e$sent$title = e$sent.title
              e$sent$type = e$sent.type
              h = $$_$$_$$_$$_src_shared_widget_custom_type.f(e$sent$type, true)
              $_37_index.a($$_$$_$$_$$_src_editor_redux_common_actions.Vg())
              $_37_index.a($$_$$_$$_$$_src_editor_redux_common_actions.zh({
                title: $$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_src_shared_ui_language.b, "ExtensionWidget.finishRegistration", {
                  title: e$sent$title,
                  type: h
                }).toString(),
                cancelBtnVisible: false
              }))
            }
          case 11:
            m = t$path[1]
            ye.Ub(i.id, i)
            if (g = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.screens[m].widgetIds) {
              Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Bj(m, g))
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
  $_24_index.a.applyClient(n)
}
function Ne(e) {}
function Re(e, t) {
  var /* [auto-meaningful-name] */e$path
  if (1 === (e$path = e.path).length && "title" === e$path[0]) {
    (function (e) {
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      Oe.h($$_$$_$$_$$_src_editor_redux_common_actions.Bf(e$op$i, false))
    })(e)
  }
}
export { Se }
export { Ae }
export { je }
export { Ne }
export { Re }
