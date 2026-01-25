import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_widget_custom_load from "../../../../shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_ui_language from "../../../../shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_widget_custom_type from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index from "../../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_widget_custom_storage from "../../../../shared/widget/custom/storage"

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
  return (bn = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
            $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.zh({
              title: $$_$$_$$_$$_shared_ui_language.c($$_$$_$$_$$_shared_ui_language.b, "ExtensionWidget.loading").toString(),
              cancelBtnVisible: false,
              confirmBtnVisible: false
            }))
            e.next = 6
            return $$_$$_$$_$$_shared_widget_custom_load.r(n$i$code, false)
          case 6:
            e$sent = e.sent
            e$sent$types = e$sent.types
            e$sent$widget = e$sent.widget
            $$_$$_$$_$$_shared_widget_custom_load.v({
              types: e$sent$types,
              widget: e$sent$widget
            })
            e$sent$types$title = e$sent$types.title
            e$sent$types$type = e$sent$types.type
            l = $$_$$_$$_$$_shared_widget_custom_type.f(e$sent$types$type, false)
            $$_$$_$$_$$_shared_widget_custom_storage.a({
              type: e$sent$types$type,
              types: e$sent$types,
              code: n$i$code
            })
            $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.Rj())
            $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.Vg())
            $$_$$_$$_$$_$$_unrestored_shared_1571_2636_37_index.a($$_$$_$$_redux_common_actions.zh({
              title: $$_$$_$$_$$_shared_ui_language.c($$_$$_$$_$$_shared_ui_language.b, "ExtensionWidget.finishRegistration", {
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
