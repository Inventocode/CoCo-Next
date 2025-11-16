/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-15
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_index from "../../../../shared/1531/2584/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_57_index from "../../../../shared/1531/2584/57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_40 from "../../../../shared/1531/2584/40"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_27 from "../../../../shared/1531/2584/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_424_114 from "../../../../shared/1531/2584/21/424/114"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_14 from "../../../../shared/1531/2584/14"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_116 from "../../../../shared/1531/2584/116"
var Xt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this, t)).templateMode = undefined
    r.templateMode = t.templateMode
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "setTemplateMode",
    value: function (t, e) {
      this.setProps({
        backgroundMode: $$_$$_$$_$$_shared_1531_2584_116.a.TEMPLATE,
        templateMode: t,
        backgroundColor: e
      })
    }
  }, {
    key: "setBackgroundImage",
    value: function (t) {
      var e = $$_$$_$$_$$_shared_1531_2584_21_424_114.b(t)
      if (e) {
        this.setProps({
          backgroundMode: $$_$$_$$_$$_shared_1531_2584_116.a.IMAGE,
          backgroundImage: e
        })
      } else {
        $$_$$_$$_$$_shared_1531_2584_14.a.log({
          messageId: "imageNotExists",
          type: "error",
          widgetId: this.__widgetId
        })
      }
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.d)
export { Xt as "511__part-15__Xt" }
