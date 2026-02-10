/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_25_index from "../../../../shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_295 from "../../../../shared/1571/2636/295"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_10_index from "../../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_6 from "../../../../shared/1571/2636/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_7 from "../../../../shared/1571/2636/7"
import "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "react-redux"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_37_1412_index from "../../../../shared/1571/2636/37/1412/index"
import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */Axios1 from "axios"
import "../../../../shared/1571/2636/719"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../../src/shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_15 from "../../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_683 from "../../../../shared/1571/2636/683"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_28_index from "../../../../shared/1571/2636/28/index"
var C = []
var j = function () {}
var M = {
  callNumber: function (t) {
    if ($$_$$_$$_$$_shared_1571_2636_28_index.d()) {
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
    if ($$_$$_$$_$$_shared_1571_2636_28_index.d()) {
      window.cordova.plugins.phonedialer.dial(t, j, function (t) {
        return console.error(t)
      }, false)
    } else {
      window.location.href = "tel:".concat(t)
    }
  },
  onCall: function (t) {
    var /* [auto-meaningful-name] */window$CallTrap
    if ($$_$$_$$_$$_shared_1571_2636_28_index.d()) {
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
