/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-9
 */

"use strict"

import { tn, nn } from "./49__part-8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_language from "../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../src/shared/widget/custom/type"
import * as Oe from "./43"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as ye from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as Q from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as cn from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_110 from "./110"
function un(e) {
  if (nn(e.path)) {
    (function (e) {
      var t = e.path[1]
      if (t) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Mf(t, undefined, false))
      }
    })(e)
  }
}
function dn(e) {
  var /* [auto-meaningful-name] */e$path
  if (nn(e.path)) {
    (function (e) {
      pn.apply(this, arguments)
    })(e)
  }
  if (2 === (e$path = e.path).length && function (e) {
    return "globalWidgetIds" === e[0]
  }(e$path)) {
    e.path
  }
  if (function (e) {
    return 4 === e.length && tn(e) && "attributes" === e[2]
  }(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */_e$path = e.path
      var r = t.i
      var o = _e$path[1]
      var i = _e$path[3]
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(o, i, r, false, true, false))
    })(e)
  }
  if (function (e) {
    return 3 === e.length && tn(e)
  }(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */_e$path2 = e.path
      var r = t.i
      var o = _e$path2[1]
      var i = _e$path2[2]
      if ("title" === i) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Ng(o, r, false, true, false))
      } else {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(o, i, r, false, true, false))
      }
    })(e)
  }
}
function pn() {
  return (pn = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var /* [auto-meaningful-name] */o$extensionWidgetList
    var a
    var /* [auto-meaningful-name] */a$cdnUrl
    var c
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$title
    var /* [auto-meaningful-name] */e$sent$type
    var p
    var /* [auto-meaningful-name] */r$attributes$fields
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = t.op, r = n.i, !$$_$$_$$_$$_src_shared_widget_custom_type.e(r.type) || ye.Db(r.type)) {
              e.next = 11
              break
            }
            if (!(a = null === (o = $_24_index.a.getDoc()) || undefined === o || null === (o$extensionWidgetList = o.extensionWidgetList) || undefined === o$extensionWidgetList ? undefined : o$extensionWidgetList.find(function (e) {
              return e.type === r.type
            }))) {
              e.next = 11
              break
            }
            a$cdnUrl = a.cdnUrl
            c = a.id
            $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
              title: $$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_src_shared_ui_language.b, "ExtensionWidget.loading").toString(),
              cancelBtnVisible: false,
              confirmBtnVisible: false
            }))
            e.next = 9
            return $$_$$_$$_$$_src_shared_widget_custom_load.u(a$cdnUrl, c)
          case 9:
            if (e$sent = e.sent) {
              e$sent$title = e$sent.title
              e$sent$type = e$sent.type
              p = $$_$$_$$_$$_src_shared_widget_custom_type.f(e$sent$type, true)
              $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Vg())
              $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
                title: $$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_src_shared_ui_language.b, "ExtensionWidget.finishRegistration", {
                  title: e$sent$title,
                  type: p
                }).toString(),
                cancelBtnVisible: false
              }))
            }
          case 11:
            ye.Ub(r.id, r)
            Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.hf(r.id))
            if (r.type === cn.B || r.type === cn.y) {
              r$attributes$fields = r.attributes.fields
              $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.bf($_110.a(r.type, {
                id: r.id,
                name: r.title,
                value: r$attributes$fields,
                defaultValue: "no-use"
              }, {
                isWatching: false
              })))
            } else {
              if (r.type === cn.G) {
                $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.bf($_110.a(cn.G, {
                  id: r.id,
                  name: r.title,
                  value: r.attributes.db,
                  defaultValue: "no-use"
                }, {
                  isWatching: false
                })))
              }
            }
          case 14:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function fn(e) {
  return hn.apply(this, arguments)
}
function hn() {
  return (hn = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (undefined !== (r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.unsafeExtensionWidgetList)) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            if (-1 !== (o = function () {
              for (var e = 0; e < r.length; e++) {
                if (r[e].type === t.type) {
                  return e
                }
              }
              return -1
            }())) {
              i = OtJson1.replaceOp(["unsafeExtensionWidgetList", o], true, t)
              $_24_index.a.applyClient(i)
            } else {
              a = OtJson1.insertOp(["unsafeExtensionWidgetList", r.length], t)
              $_24_index.a.applyClient(a)
            }
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function mn(e) {
  return gn.apply(this, arguments)
}
function gn() {
  return (gn = Q.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (undefined !== (r = null === (n = $_24_index.a.getDoc()) || undefined === n ? undefined : n.extensionWidgetList)) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            o = function () {
              for (var e = 0; e < r.length; e++) {
                if (r[e].type === t.type) {
                  return e
                }
              }
              return -1
            }()
            i = {
              id: t.id,
              cdnUrl: t.cdnUrl,
              type: t.type,
              version: t.version || 0
            }
            if (-1 === o) {
              a = OtJson1.insertOp(["extensionWidgetList", r.length], i)
              $_24_index.a.applyClient(a)
            }
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { un }
export { dn }
export { fn }
export { mn }
