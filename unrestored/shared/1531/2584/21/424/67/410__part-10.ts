/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410__part-10
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_114 from "../114"
import * as /* [auto-meaningful-name] */$$_$$_$$_6 from "../../../6"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_545_index from "../../../545/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_131 from "../../../131"
var ae = function (e) {
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var r = undefined === e$attributes$backgroundOpenImage ? $$_$$_$$_131.b : e$attributes$backgroundOpenImage
  var /* [auto-meaningful-name] */e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var i = undefined === e$attributes$backgroundCloseImage ? $$_$$_$$_131.a : e$attributes$backgroundCloseImage
  var a = $$_114.b(r) || $$_$$_$$_131.b
  var c = $$_114.b(i) || $$_$$_$$_131.a
  return React.createElement($$_$$_$$_545_index.a, Object.assign({}, e, {
    attributes: $$_$$_$$_6.a($$_$$_$$_6.a({}, e.attributes), {}, {
      backgroundCloseImage: c,
      backgroundOpenImage: a
    }),
    onSwitch: function (t) {
      var n = e.id
      var /* [auto-meaningful-name] */e$type = e.type
      $$_$$_index.setSwitchWidgetState(n, t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: n,
        widgetType: e$type,
        message: t ? "onSwitchChangeTrue" : "onSwitchChangeFalse"
      })
    }
  }))
}
export { ae as "410__part-10__ae" }
