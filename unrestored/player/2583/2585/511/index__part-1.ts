/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_25_index from "../../../../shared/1531/2584/25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_296 from "../../../../shared/1531/2584/296"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_10_index from "../../../../shared/1531/2584/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_6 from "../../../../shared/1531/2584/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_7 from "../../../../shared/1531/2584/7"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_16_index from "../../../../shared/1531/2584/16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_38_2629 from "../../../../shared/1531/2584/38/2629"
import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */_Axios from "axios"
import "../../../../shared/1531/2584/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../../src/shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_15 from "../../../../shared/1531/2584/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_676 from "../../../../shared/1531/2584/676"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_27 from "../../../../shared/1531/2584/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_40 from "../../../../shared/1531/2584/40"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_57_index from "../../../../shared/1531/2584/57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_index from "../../../../shared/1531/2584/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_28_index from "../../../../shared/1531/2584/28/index"
var C = []
var j = function () {}
var M = {
  callNumber: function (t) {
    if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
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
    if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
      window.cordova.plugins.phonedialer.dial(t, j, function (t) {
        return console.error(t)
      }, false)
    } else {
      window.location.href = "tel:".concat(t)
    }
  },
  onCall: function (t) {
    var /* [auto-meaningful-name] */window$CallTrap
    if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
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
export { M as "511__part-1__M" }
