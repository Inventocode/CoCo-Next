import * as /* [auto-meaningful-name] */Shared_widget_custom_load from "../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Shared_ui_language from "../../../../shared/ui/language"
import * as /* [auto-meaningful-name] */Shared_widget_custom_type from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */Redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */Shared_widget_custom_storage from "../../../../shared/widget/custom/storage"

export function drop(e) {
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
