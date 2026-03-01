/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-10
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_112 from /* 112 */"../../../34/347/112"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../6"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_548 from /* 548 */"../../../548/index"
import * as /* [auto-meaningful-name] */Module_131 from /* 131 */"../../../131"
var ae = function (e) {
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var r = undefined === e$attributes$backgroundOpenImage ? Module_131.b : e$attributes$backgroundOpenImage
  var /* [auto-meaningful-name] */e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var i = undefined === e$attributes$backgroundCloseImage ? Module_131.a : e$attributes$backgroundCloseImage
  var a = Module_112.b(r) || Module_131.b
  var c = Module_112.b(i) || Module_131.a
  return React.createElement(Module_548.a, Object.assign({}, e, {
    attributes: Module_6.a(Module_6.a({}, e.attributes), {}, {
      backgroundCloseImage: c,
      backgroundOpenImage: a
    }),
    onSwitch: function (t) {
      var n = e.id
      var /* [auto-meaningful-name] */e$type = e.type
      Module_20.setSwitchWidgetState(n, t)
      Module_55.b.playerWidgetLog({
        widgetId: n,
        widgetType: e$type,
        message: t ? "onSwitchChangeTrue" : "onSwitchChangeFalse"
      })
    }
  }))
}
export { ae }
