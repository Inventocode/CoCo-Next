/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-4
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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_678_index from "../../../../shared/1531/2584/678/index"
var F = []
var W = function () {}
var H = {
  openMessage: function (t, e) {
    if (t) {
      if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
        window.sms.send(t, e, {
          replaceLineBreaks: false,
          android: {
            intent: "INTENT"
          }
        }, W, W)
      } else {
        if ($$_$$_$$_$$_shared_1531_2584_28_index.b()) {
          window.location.href = "sms:".concat(t, "?body=").concat(e)
        } else {
          window.location.href = "sms:".concat(t, "&body=").concat(e)
        }
      }
    }
  },
  sendMessage: function (t, e, n, r) {
    if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
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
      if ($$_$$_$$_$$_shared_1531_2584_28_index.b()) {
        window.location.href = "sms:".concat(t, "?body=").concat(e)
      } else {
        window.location.href = "sms:".concat(t, "&body=").concat(e)
      }
    }
  },
  startWatchReceiveSms: function () {
    var /* [auto-meaningful-name] */window$SMSReceive
    if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
      if (!(null === (window$SMSReceive = window.SMSReceive) || undefined === window$SMSReceive)) {
        window$SMSReceive.startWatch(W, function () {
          return console.warn("sms receive: failed to start watching")
        })
      }
    }
  },
  onCall: function (t) {
    if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
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
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
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
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "sendSms",
    value: function () {
      var t = this
      if (this.phoneNumber) {
        if (this.smsContent) {
          return $$_$$_$$_$$_shared_1531_2584_28_index.g() ? (this.emit("onSendSmsSuccess", this.smsContent, this.phoneNumber), void this.widgetLog("sendSmsLog", {
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
      if ($$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        $$_$$_$$_$$_shared_1531_2584_48_index.a().dispatch($$_$$_$$_$$_shared_1531_2584_48_72.s({
          smsWidgetId: this.__widgetId,
          sendSmsPageVisible: true,
          sendSmsNumber: this.phoneNumber,
          sendSmsContent: this.smsContent
        }))
      } else {
        H.openMessage(this.phoneNumber, this.smsContent)
      }
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { G as "511__part-4__G" }
