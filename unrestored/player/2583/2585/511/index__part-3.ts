/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_index from "../../../../shared/1531/2584/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_72 from "../../../../shared/1531/2584/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_28_index from "../../../../shared/1531/2584/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_index from "../../../../shared/1531/2584/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_57_index from "../../../../shared/1531/2584/57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_40 from "../../../../shared/1531/2584/40"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_27 from "../../../../shared/1531/2584/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_677_index from "../../../../shared/1531/2584/677/index"
var B = {
  pickContact: function (t) {
    navigator.contacts.pickContact(function (e) {
      var /* [auto-meaningful-name] */e$displayName = e.displayName
      var r = ""
      var i = []
      if (e.phoneNumbers) {
        r = e.phoneNumbers[0].value
        e.phoneNumbers.forEach(function (t) {
          return i.push(t.value)
        })
      }
      var o = ""
      if (e.photos) {
        o = e.photos[0].value
      }
      t(e$displayName, r, i, o)
    }, function (t) {
      console.error("应用需要开启通讯录权限")
      var /* [auto-meaningful-name] */window$cordova$plugins$permissions = window.cordova.plugins.permissions
      window$cordova$plugins$permissions.hasPermission(window$cordova$plugins$permissions.READ_CONTACTS, function (t) {
        var /* [auto-meaningful-name] */window$plugins$toast
        if (!t.hasPermission) {
          if (!(null === (window$plugins$toast = window.plugins.toast) || undefined === window$plugins$toast)) {
            window$plugins$toast.showLongCenter("应用需要开启通讯录权限")
          }
        }
      })
    })
  }
}
var P = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this, t)).contactName = undefined
    r.phoneNumber = undefined
    r.contactAvatar = undefined
    r.phoneNumberList = undefined
    r.contactName = t.contactName
    r.phoneNumber = t.phoneNumber
    r.contactAvatar = t.phoneNumber
    r.phoneNumberList = t.phoneNumberList
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "pickContact",
    value: function () {
      var t = this
      if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
        B.pickContact(function (e, n, r, i) {
          t.contactName = e
          t.phoneNumber = n
          t.contactAvatar = i
          t.phoneNumberList = r
          t.emit("onContactPickerSelected", e, n, r)
        })
      } else {
        $$_$$_$$_$$_shared_1531_2584_48_index.a().dispatch($$_$$_$$_$$_shared_1531_2584_48_72.s({
          contactWidgetId: this.__widgetId,
          contactPageVisible: true
        }))
      }
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { P as "511__part-3__P" }
