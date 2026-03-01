/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../../../shared/1571/2636/48/72"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_684 from /* 684 */"../../../../shared/1571/2636/684/index"
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
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t) {
    var r
    Module_27.a(this, n);
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
  Module_39.a(n, [
    {
      key: "pickContact",
      value: function () {
        var t = this
        if (Module_28.d()) {
          B.pickContact(function (e, n, r, i) {
            t.contactName = e
            t.phoneNumber = n
            t.contactAvatar = i
            t.phoneNumberList = r
            t.emit("onContactPickerSelected", e, n, r)
          })
        } else {
          Module_48.a().dispatch(Module_72.s({
            contactWidgetId: this.__widgetId,
            contactPageVisible: true
          }))
        }
      }
    }
  ])
  return n
}(Src_shared_widget_custom_load.c)
export { P }
