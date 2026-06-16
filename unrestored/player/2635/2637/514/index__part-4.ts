/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-4
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
import * as /* [auto-meaningful-name] */Module_685 from /* 685 */"../../../../shared/1571/2636/685/index"
var F = []
var W = function () {}
var H = {
  openMessage: function (t, e) {
    if (t) {
      if (Module_28.d()) {
        window.sms.send(t, e, {
          replaceLineBreaks: false,
          android: {
            intent: "INTENT"
          }
        }, W, W)
      } else {
        if (Module_28.b()) {
          window.location.href = "sms:".concat(t, "?body=").concat(e)
        } else {
          window.location.href = "sms:".concat(t, "&body=").concat(e)
        }
      }
    }
  },
  sendMessage: function (t, e, n, r) {
    if (Module_28.d()) {
      window.sms.send(t, e, {
        replaceLineBreaks: false,
        android: {
          intent: ""
        }
      }, function () {
        return n(e, t)
      }, function () {
        r(e, t)
        console.error("应用需要开启短信权限")
        var /* [auto-meaningful-name] */window$cordova$plugins$permissions = window.cordova.plugins.permissions
        window$cordova$plugins$permissions.hasPermission(window$cordova$plugins$permissions.SEND_SMS, function (t) {
          var /* [auto-meaningful-name] */window$plugins$toast
          if (!t.hasPermission) {
            if (!(null === (window$plugins$toast = window.plugins.toast) || undefined === window$plugins$toast)) {
              window$plugins$toast.showLongCenter("应用需要开启短信权限")
            }
          }
        })
      })
    } else {
      if (Module_28.b()) {
        window.location.href = "sms:".concat(t, "?body=").concat(e)
      } else {
        window.location.href = "sms:".concat(t, "&body=").concat(e)
      }
    }
  },
  startWatchReceiveSms: function () {
    var /* [auto-meaningful-name] */window$SMSReceive
    if (Module_28.d()) {
      if (!(null === (window$SMSReceive = window.SMSReceive) || undefined === window$SMSReceive)) {
        window$SMSReceive.startWatch(W, function () {
          return console.warn("sms receive: failed to start watching")
        })
      }
    }
  },
  onCall: function (t) {
    if (Module_28.d()) {
      F.push(t)
      document.addEventListener("onSMSArrive", function (t) {
        var /* [auto-meaningful-name] */t$data = t.data
        F.forEach(function (t) {
          return t(t$data.body, t$data.address)
        })
      })
    }
  }
}
var V = false
var G = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t) {
    var r
    Module_27.a(this, n);
    (r = e.call(this, t)).phoneNumber = undefined
    r.smsContent = undefined
    r.phoneNumber = t.phoneNumber
    r.smsContent = t.smsContent
    if (!V) {
      H.startWatchReceiveSms()
      V = true
    }
    H.onCall(function (t, e) {
      r.emit("onReceiveSms", t, e)
    })
    return r
  }
  Module_39.a(n, [
    {
      key: "sendSms",
      value: function () {
        var t = this
        if (this.phoneNumber) {
          if (this.smsContent) {
            return Module_28.g() ? (this.emit("onSendSmsSuccess", this.smsContent, this.phoneNumber), void this.widgetLog("sendSmsLog", {
              phoneNumber: this.phoneNumber
            })) : void H.sendMessage(this.phoneNumber, this.smsContent, function (e, n) {
              return t.emit("onSendSmsSuccess", e, n)
            }, function (e, n) {
              return t.emit("onSendSmsFailed", e, n)
            })
          }
          this.widgetWarn("smsContentNotEmpty")
        } else {
          this.widgetWarn("smsNumberNotEmpty")
        }
      }
    }, {
      key: "openSms",
      value: function () {
        if (Module_28.g()) {
          Module_48.a().dispatch(Module_72.s({
            smsWidgetId: this.__widgetId,
            sendSmsPageVisible: true,
            sendSmsNumber: this.phoneNumber,
            sendSmsContent: this.smsContent
          }))
        } else {
          H.openMessage(this.phoneNumber, this.smsContent)
        }
      }
    }
  ])
  return n
}(Src_shared_widget_custom_load.c)
export { G }
