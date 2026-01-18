/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-9
 */

import { tn, nn } from "../../../../../unrestored/shared/1571/2636/49__part-8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_widget_custom_load from "../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_ui_language from "../../../../shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_widget_custom_type from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_43 from "../../../../../unrestored/shared/1571/2636/43"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index from "../../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index from "../../../../../unrestored/shared/1571/2636/24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_widget_builtIn_types from "../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_110 from "../../../../../unrestored/shared/1571/2636/110"
function un(e) {
  if (nn(e.path)) {
    (function (e) {
      var t = e.path[1]
      if (t) {
        $$_$$_$$_$$_$$_unrestored_shared_1571_2636_43.h($$_$$_$$_redux_common_actions.Mf(t, undefined, false))
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
      var /* [auto-meaningful-name] */e$path = e.path
      var r = t.i
      var o = e$path[1]
      var i = e$path[3]
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_43.h($$_$$_$$_redux_common_actions.Lg(o, i, r, false, true, false))
    })(e)
  }
  if (function (e) {
    return 3 === e.length && tn(e)
  }(e.path)) {
    (function (e) {
      var t = e.op
      var /* [auto-meaningful-name] */e$path = e.path
      var r = t.i
      var o = e$path[1]
      var i = e$path[2]
      if ("title" === i) {
        $$_$$_$$_$$_$$_unrestored_shared_1571_2636_43.h($$_$$_$$_redux_common_actions.Ng(o, r, false, true, false))
      } else {
        $$_$$_$$_$$_$$_unrestored_shared_1571_2636_43.h($$_$$_$$_redux_common_actions.Lg(o, i, r, false, true, false))
      }
    })(e)
  }
}
function pn() {
  return (pn = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
            if (n = t.op, r = n.i, !$$_$$_$$_$$_shared_widget_custom_type.e(r.type) || $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Db(r.type)) {
              e.next = 11
              break
            }
            if (!(a = null === (o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === o || null === (o$extensionWidgetList = o.extensionWidgetList) || undefined === o$extensionWidgetList ? undefined : o$extensionWidgetList.find(function (e) {
              return e.type === r.type
            }))) {
              e.next = 11
              break
            }
            a$cdnUrl = a.cdnUrl
            c = a.id
            $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.zh({
              title: $$_$$_$$_$$_shared_ui_language.c($$_$$_$$_$$_shared_ui_language.b, "ExtensionWidget.loading").toString(),
              cancelBtnVisible: false,
              confirmBtnVisible: false
            }))
            e.next = 9
            return $$_$$_$$_$$_shared_widget_custom_load.u(a$cdnUrl, c)
          case 9:
            if (e$sent = e.sent) {
              e$sent$title = e$sent.title
              e$sent$type = e$sent.type
              p = $$_$$_$$_$$_shared_widget_custom_type.f(e$sent$type, true)
              $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.Vg())
              $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.zh({
                title: $$_$$_$$_$$_shared_ui_language.c($$_$$_$$_$$_shared_ui_language.b, "ExtensionWidget.finishRegistration", {
                  title: e$sent$title,
                  type: p
                }).toString(),
                cancelBtnVisible: false
              }))
            }
          case 11:
            $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Ub(r.id, r)
            $$_$$_$$_$$_$$_unrestored_shared_1571_2636_43.h($$_$$_$$_redux_common_actions.hf(r.id))
            if (r.type === $$_$$_$$_widget_builtIn_types.B || r.type === $$_$$_$$_widget_builtIn_types.y) {
              r$attributes$fields = r.attributes.fields
              $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.bf($$_$$_$$_$$_$$_unrestored_shared_1571_2636_110.a(r.type, {
                id: r.id,
                name: r.title,
                value: r$attributes$fields,
                defaultValue: "no-use"
              }, {
                isWatching: false
              })))
            } else {
              if (r.type === $$_$$_$$_widget_builtIn_types.G) {
                $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.bf($$_$$_$$_$$_$$_unrestored_shared_1571_2636_110.a($$_$$_$$_widget_builtIn_types.G, {
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
  return (hn = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (undefined !== (r = null === (n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === n ? undefined : n.unsafeExtensionWidgetList)) {
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
              $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(i)
            } else {
              a = OtJson1.insertOp(["unsafeExtensionWidgetList", r.length], t)
              $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(a)
            }
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}

export async function removeUnsafeExtensionWidget(type: string) {
  const unsafeExtensionWidgetList: any[] = $_24_index.a.getDoc()?.unsafeExtensionWidgetList
  if (unsafeExtensionWidgetList === undefined) {
    return
  }
  const index = unsafeExtensionWidgetList.findIndex((widget) => widget.type == type)
  if (index === -1) {
    return -1
  }
  const op = OtJson1.removeOp(["unsafeExtensionWidgetList", index], true)
  $_24_index.a.applyClient(op)
}

function mn(e) {
  return gn.apply(this, arguments)
}
function gn() {
  return (gn = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (undefined !== (r = null === (n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.getDoc()) || undefined === n ? undefined : n.extensionWidgetList)) {
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
              $$_$$_$$_$$_$$_unrestored_shared_1571_2636_24_index.a.applyClient(a)
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
