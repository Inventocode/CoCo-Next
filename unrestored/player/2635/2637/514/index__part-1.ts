/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */Module_295 from /* 295 */"../../../../shared/1571/2636/295"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../shared/1571/2636/7"
import /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Module_1412 from /* 1412 */"../../../../shared/1571/2636/37/1412/index"
import * as /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import /* [auto-meaningful-name] */Axios1 from /* 129 */"axios"
import /* 719 */"../../../../shared/1571/2636/719"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_type from /* 78 */"../../../../../src/shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_storage from /* 96 */"../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_683 from /* 683 */"../../../../shared/1571/2636/683"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../../shared/1571/2636/28/index"
var C = []
var j = function () {}
var M = {
  callNumber: function (t) {
    if (Module_28.d()) {
      window.cordova.plugins.phonedialer.call(t, j, function (t) {
        console.error("应用需要开启电话权限")
        var /* [auto-meaningful-name] */window$cordova$plugins$permissions = window.cordova.plugins.permissions
        window$cordova$plugins$permissions.hasPermission(window$cordova$plugins$permissions.CALL_PHONE, function (t) {
          var /* [auto-meaningful-name] */window$plugins$toast
          if (!t.hasPermission) {
            if (!(null === (window$plugins$toast = window.plugins.toast) || undefined === window$plugins$toast)) {
              window$plugins$toast.showLongCenter("应用需要开启电话权限")
            }
          }
        })
      }, false, false)
    } else {
      window.location.href = "tel:".concat(t)
    }
  },
  dialNumber: function (t) {
    if (Module_28.d()) {
      window.cordova.plugins.phonedialer.dial(t, j, function (t) {
        return console.error(t)
      }, false)
    } else {
      window.location.href = "tel:".concat(t)
    }
  },
  onCall: function (t) {
    var /* [auto-meaningful-name] */window$CallTrap
    if (Module_28.d()) {
      C.push(t)
      if (!(null === (window$CallTrap = window.CallTrap) || undefined === window$CallTrap)) {
        window$CallTrap.onCall(function (t) {
          var /* [auto-meaningful-name] */t$state = t.state
          C.forEach(function (t) {
            return t(t$state)
          })
        })
      }
    }
  }
}
export { M }
