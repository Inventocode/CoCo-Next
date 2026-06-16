/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-16
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../../../shared/1571/2636/14"
import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../../shared/1571/2636/34/347/112"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"../../../../shared/1571/2636/76"
var Zt = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t) {
    var r
    Module_27.a(this, n);
    (r = e.call(this, t)).templateMode = undefined
    r.templateMode = t.templateMode
    return r
  }
  Module_39.a(n, [
    {
      key: "setTemplateMode",
      value: function (t, e) {
        this.setProps({
          backgroundMode: Module_76.a.TEMPLATE,
          templateMode: t,
          backgroundColor: e
        })
      }
    }, {
      key: "setBackgroundImage",
      value: function (t) {
        var e = Module_112.b(t)
        if (e) {
          this.setProps({
            backgroundMode: Module_76.a.IMAGE,
            backgroundImage: e
          })
        } else {
          Module_14.a.log({
            messageId: "imageNotExists",
            type: "error",
            widgetId: this.__widgetId
          })
        }
      }
    }
  ])
  return n
}(Src_shared_widget_custom_load.d)
export { Zt }
