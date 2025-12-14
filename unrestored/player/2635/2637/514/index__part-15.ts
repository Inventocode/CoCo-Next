/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-15
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_34_347_112 from "../../../../shared/1571/2636/34/347/112"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_14 from "../../../../shared/1571/2636/14"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_114 from "../../../../shared/1571/2636/114"
var qt = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n);
    (r = e.call(this, t)).templateMode = undefined
    r.templateMode = t.templateMode
    return r
  }
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
    {
      key: "setTemplateMode",
      value: function (t, e) {
        this.setProps({
          backgroundMode: $$_$$_$$_$$_shared_1571_2636_114.a.TEMPLATE,
          templateMode: t,
          backgroundColor: e
        })
      }
    }, {
      key: "setBackgroundImage",
      value: function (t) {
        var e = $$_$$_$$_$$_shared_1571_2636_34_347_112.b(t)
        if (e) {
          this.setProps({
            backgroundMode: $$_$$_$$_$$_shared_1571_2636_114.a.IMAGE,
            backgroundImage: e
          })
        } else {
          $$_$$_$$_$$_shared_1571_2636_14.a.log({
            messageId: "imageNotExists",
            type: "error",
            widgetId: this.__widgetId
          })
        }
      }
    }
  ])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.d)
export { qt }
