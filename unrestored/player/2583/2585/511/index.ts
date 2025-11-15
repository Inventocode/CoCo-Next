/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511
 */

"use strict"

var r
var i
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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_72 from "../../../../shared/1531/2584/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_index from "../../../../shared/1531/2584/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_38_217_index from "../../../../shared/1531/2584/38/217/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_70 from "../../../../shared/1531/2584/48/70"
var D = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var o
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (o = e.call(this, t)).phoneNumber = undefined
    o.oldState = ""
    o.isIncomingCall = false
    o.phoneNumber = t.phoneNumber
    M.onCall(function (t) {
      switch (t) {
        case $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING:
          o.emit("onReceivePhoneCall")
          break
        case $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK:
          if (o.oldState === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING) {
            o.emit("onConnectReceivePhoneCall")
            o.isIncomingCall = true
          } else {
            if (o.__widgetId === r) {
              o.emit("onPhoneCallStart")
              o.isIncomingCall = false
            }
          }
          break
        case "IDLE":
          if (o.oldState === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING) {
            o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1531_2584_48_70.a.INCOMING_CALL_REFUSE_END)
          } else {
            if (o.isIncomingCall && o.oldState === $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK) {
              o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1531_2584_48_70.a.INCOMING_CALL_CONNECT_END)
            } else {
              if (!(o.isIncomingCall || o.oldState !== $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK)) {
                o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1531_2584_48_70.a.DIAL_OUT_CALL_END)
                i = false
              }
            }
          }
      }
      o.oldState = t
    })
    return o
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "callNumber",
    value: function () {
      if (this.phoneNumber) {
        if ($$_$$_$$_$$_shared_1531_2584_28_index.g()) {
          if ($$_$$_$$_$$_shared_1531_2584_48_index.a().getState().emulatorPhoneInfo.callingPageVisible) {
            this.widgetWarn("callNumberRepeat")
          } else {
            $$_$$_$$_$$_shared_1531_2584_48_index.a().dispatch($$_$$_$$_$$_shared_1531_2584_48_72.s({
              phoneDialWidgetId: this.__widgetId,
              callingPageVisible: true,
              phoneNumber: this.phoneNumber,
              callType: "dialOutCall",
              callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
            }))
            this.emit("onPhoneCallStart")
            $$_$$_$$_$$_shared_1531_2584_38_217_index.b({
              phoneCallInfo: {
                callType: "dialOutCall",
                dialOutPhoneNumber: this.phoneNumber,
                callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
              }
            })
          }
        } else {
          if (!$$_$$_$$_$$_shared_1531_2584_28_index.d()) {
            r = this.__widgetId
            M.callNumber(this.phoneNumber)
          }
          if (!i) {
            r = this.__widgetId
            M.callNumber(this.phoneNumber)
            i = true
          }
        }
      } else {
        this.widgetWarn("phoneNumberNotEmpty")
      }
    }
  }, {
    key: "dialNumber",
    value: function () {
      if ($$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        if ($$_$$_$$_$$_shared_1531_2584_48_index.a().getState().emulatorPhoneInfo.dialPageVisible) {
          this.widgetWarn("dialNumberRepeat")
        }
        return void $$_$$_$$_$$_shared_1531_2584_48_index.a().dispatch($$_$$_$$_$$_shared_1531_2584_48_72.s({
          phoneDialWidgetId: this.__widgetId,
          dialPageVisible: true,
          phoneNumber: this.phoneNumber
        }))
      }
      r = this.__widgetId
      M.dialNumber(this.phoneNumber)
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_679 from "../../../../shared/1531/2584/679"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_75_index from "../../../../shared/1531/2584/75/index"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_shared_1531_2584_75_index from "../../../../shared/1531/2584/75/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_8 from "../../../../shared/1531/2584/8"
import /* [auto-meaningful-name] */_$$_$$_$$_$$_shared_1531_2584_ from "../../../../shared/1531/2584/8"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_189 from "../../../../shared/1531/2584/189"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
function tt(t, e) {
  return [Animejs.default({
    targets: "#".concat(t),
    keyframes: [{
      scale: 1
    }, {
      scale: 0
    }],
    duration: 300,
    easing: "easeInSine",
    complete: function () {
      if (e) {
        e()
      }
    }
  })]
}
var et
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_233_324 from "../../../../shared/1531/2584/233/324"
import * as /* [auto-meaningful-name] */$_138 from "./138"
import /* [auto-meaningful-name] */_$_ from "./138"
var /* [auto-meaningful-name] */COCO_PLAYER_DIALOG = "COCO_PLAYER_DIALOG"
!function (t) {
  t.MESSAGE = "MESSAGE"
  t.SELECT = "SELECT"
  t.PROMPT = "PROMPT"
}(et || (et = {}))
var at = {
  style: $$_$$_$$_$$_shared_1531_2584_189.b.styleA,
  currentDialogId: "",
  dialogArr: [],
  dialogPropMap: new Map(),
  addDialog: function (t) {
    var e = $$_$$_$$_$$_shared_1531_2584_38_2629.a()
    this.dialogArr.push(e)
    this.dialogPropMap.set(e, t)
    if (1 === this.dialogArr.length) {
      var n = this.dialogArr[0]
      this.showDialog(n)
    } else {
      var r = this.dialogArr[this.dialogArr.length - 1]
      this.showDialog(r)
    }
    return e
  },
  showDialog: function (t) {
    var e = this.dialogPropMap.get(t)
    if (e) {
      switch (e.type) {
        case et.MESSAGE:
          this._message(e)
          break
        case et.SELECT:
          this._select(e)
          break
        case et.PROMPT:
          this._prompt(e)
      }
    }
  },
  setStyle: function (t) {
    at.style = t
  },
  setThemeColor: function (t) {
    var e = $$_$$_$$_$$_shared_1531_2584_15.hb(t, .4)
    var n = $$_$$_$$_$$_shared_1531_2584_15.hb(t, .04)
    var r = $$_$$_$$_$$_shared_1531_2584_15.ib(t, .3)
    var i = _Color(t).toString()
    document.documentElement.style.setProperty("--dialog-theme-color", i)
    document.documentElement.style.setProperty("--dialog-theme-color-medium", e)
    document.documentElement.style.setProperty("--dialog-theme-color-light", n)
    document.documentElement.style.setProperty("--dialog-theme-color-dark", r)
  },
  getContainer: function () {
    var t = document.getElementById("COCO_PLAYER_DIALOG_CONTAINER")
    if (!t) {
      (t = document.createElement("div")).id = "COCO_PLAYER_DIALOG_CONTAINER"
      var e = document.getElementById($$_$$_$$_$$_shared_1531_2584_233_324.a)
      if (e) {
        e.appendChild(t)
      }
    }
    t.style.opacity = "1"
    t.className = _$_.container
    return t
  },
  cancel: function (t) {
    var e = at.dialogArr[0]
    var n = at.dialogPropMap.get(e)
    if (!(null === n || undefined === n)) {
      n.onCancel(t)
    }
    at.close()
  },
  confirm: function (t) {
    var e = at.dialogArr[0]
    var n = at.dialogPropMap.get(e)
    if (!(null === n || undefined === n)) {
      n.onConfirm(t)
    }
    at.close()
  },
  submit: function () {
    var t = document.getElementById("COCO_PLAYER_DIALOG_INPUT")
    var e = null === t || undefined === t ? undefined : t.value
    var n = at.dialogArr[0]
    var r = at.dialogPropMap.get(n)
    if (!(null === r || undefined === r)) {
      r.onConfirm(e)
    }
    at.close()
  },
  close: function () {
    var t = this
    var e = this.dialogArr.shift()
    if (e) {
      this.dialogPropMap.delete(e)
    }
    var n = at.getContainer()
    if (this.dialogArr.length) {
      tt(COCO_PLAYER_DIALOG, function () {
        _$$_$$_$$_$$_shared_1531_2584_75_index.unmountComponentAtNode(n)
        var e = t.dialogArr[0]
        t.showDialog(e)
      })
    } else {
      tt(COCO_PLAYER_DIALOG, function () {
        var /* [auto-meaningful-name] */COCO_PLAYER_DIALOG_CONTAINER
        var e
        COCO_PLAYER_DIALOG_CONTAINER = "COCO_PLAYER_DIALOG_CONTAINER"
        e = function () {
          n.classList.remove(_$_.container)
        }
        Animejs.default({
          targets: "#".concat(COCO_PLAYER_DIALOG_CONTAINER),
          opacity: 0,
          duration: 300,
          easing: "linear",
          complete: function () {
            if (e) {
              e()
            }
          }
        })
        _$$_$$_$$_$$_shared_1531_2584_75_index.unmountComponentAtNode(n)
      })
    }
  },
  getContentBox: function (t, e, n, r, i, o) {
    var a
    if (t === et.PROMPT) {
      a = !n && !r && !e
    } else {
      var s = Number(!!e) + Number(!!n) + Number(!!r)
      a = 0 === s || 1 === s
    }
    var u = ""
    u = this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? t === et.SELECT ? i ? "346px" : "400px" : "454px" : "472px"
    var c = ""
    c = a ? this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? "39px 0" : "42px 0" : e ? "16px 0" : "24px 0 16px 0"
    return _React.createElement("div", {
      style: {
        maxHeight: u,
        padding: c
      },
      className: _$$_$$_$$_$$_shared_1531_2584_(a && _$_.singleElementContentBox, !a && _$_.contentBox)
    }, e && _React.createElement("div", {
      style: {
        background: "url(".concat(e, ") no-repeat"),
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: _$_.imageBox
    }), n && _React.createElement("p", {
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.title)
    }, n), r && _React.createElement("p", {
      className: _$_.textBox
    }, _React.createElement("span", {
      className: _$_.text
    }, r)), t === et.PROMPT && _React.createElement("div", {
      className: _$_.inputBox
    }, _React.createElement("input", {
      id: "COCO_PLAYER_DIALOG_INPUT",
      className: _$_.dialogInput,
      placeholder: o
    })))
  },
  getButtonBox: function (t, e, n) {
    var r = t === et.MESSAGE ? n || "" : "确定"
    return _React.createElement("div", {
      className: _$_.buttonBox
    }, e && _React.createElement("button", {
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.button, _$_.cancelButton),
      onClick: this.cancel.bind(null, "取消")
    }, _React.createElement("span", null, "取消")), _React.createElement("button", {
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.button, _$_.mainButton),
      style: {
        width: this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? e ? "133px" : "100%" : "fit-content"
      },
      onClick: t === et.PROMPT ? this.submit : this.confirm.bind(null, r)
    }, _React.createElement("span", null, r)))
  },
  message: function (t, e, n) {
    at.addDialog({
      type: et.MESSAGE,
      params: t,
      onConfirm: e,
      onCancel: n
    })
  },
  _message: function (t) {
    var /* [auto-meaningful-name] */t$params = t.params
    var /* [auto-meaningful-name] */t$params$title = t$params.title
    var /* [auto-meaningful-name] */t$params$text = t$params.text
    var /* [auto-meaningful-name] */t$params$confirmButtonText = t$params.confirmButtonText
    var /* [auto-meaningful-name] */t$params$image = t$params.image
    var /* [auto-meaningful-name] */t$params$showCancelButton = t$params.showCancelButton
    var s = this.getContainer()
    var u = this.getContentBox(et.MESSAGE, t$params$image, t$params$title, t$params$text, t$params$showCancelButton)
    var c = this.getButtonBox(et.MESSAGE, t$params$showCancelButton, t$params$confirmButtonText)
    var l = _React.createElement("div", {
      id: COCO_PLAYER_DIALOG,
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.dialog, this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? _$_.styleA : _$_.styleB)
    }, u, c)
    _$$_$$_$$_$$_shared_1531_2584_75_index.render(l, s)
  },
  select: function (t, e, n) {
    at.addDialog({
      type: et.SELECT,
      params: t,
      onConfirm: e,
      onCancel: n
    })
  },
  _select: function (t) {
    var /* [auto-meaningful-name] */t$params = t.params
    var /* [auto-meaningful-name] */t$params$title = t$params.title
    var /* [auto-meaningful-name] */t$params$text = t$params.text
    var /* [auto-meaningful-name] */t$params$option1 = t$params.option1
    var /* [auto-meaningful-name] */t$params$option2 = t$params.option2
    var /* [auto-meaningful-name] */t$params$showCancelButton = t$params.showCancelButton
    var s = this.getContainer()
    var u = this.getContentBox(et.SELECT, "", t$params$title, t$params$text, t$params$showCancelButton)
    var c = _React.createElement("div", {
      id: COCO_PLAYER_DIALOG,
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.dialog, this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? _$_.styleA : _$_.styleB)
    }, u, _React.createElement("div", {
      className: _$_.optionButtonBox,
      style: {
        height: this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? t$params$showCancelButton ? "174px" : "120px" : "48px",
        justifyContent: this.style !== $$_$$_$$_$$_shared_1531_2584_189.b.styleB || t$params$showCancelButton ? undefined : "flex-end"
      }
    }, t$params$showCancelButton && this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleB && _React.createElement("button", {
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.button, _$_.cancelButton),
      onClick: this.cancel.bind(null, "")
    }, _React.createElement("span", null, "取消")), _React.createElement("div", null, _React.createElement("button", {
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.button, _$_.mainButton),
      onClick: this.confirm.bind(null, t$params$option1)
    }, _React.createElement("span", null, t$params$option1)), _React.createElement("button", {
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.button, _$_.mainButton),
      onClick: this.confirm.bind(null, t$params$option2)
    }, _React.createElement("span", null, t$params$option2))), t$params$showCancelButton && this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA && _React.createElement("button", {
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.button, _$_.cancelButton),
      onClick: this.cancel.bind(null, "")
    }, _React.createElement("span", null, "取消"))))
    _$$_$$_$$_$$_shared_1531_2584_75_index.render(c, s)
  },
  prompt: function (t, e, n) {
    this.addDialog({
      type: et.PROMPT,
      params: t,
      onConfirm: e,
      onCancel: n
    })
  },
  _prompt: function (t) {
    var /* [auto-meaningful-name] */t$params = t.params
    var /* [auto-meaningful-name] */t$params$title = t$params.title
    var /* [auto-meaningful-name] */t$params$text = t$params.text
    var /* [auto-meaningful-name] */t$params$placeholder = t$params.placeholder
    var /* [auto-meaningful-name] */t$params$showCancelButton = t$params.showCancelButton
    var a = this.getContainer()
    var s = this.getContentBox(et.PROMPT, "", t$params$title, t$params$text, t$params$showCancelButton, t$params$placeholder)
    var u = this.getButtonBox(et.PROMPT, t$params$showCancelButton)
    var c = _React.createElement("div", {
      id: COCO_PLAYER_DIALOG,
      className: _$$_$$_$$_$$_shared_1531_2584_(_$_.dialog, this.style === $$_$$_$$_$$_shared_1531_2584_189.b.styleA ? _$_.styleA : _$_.styleB)
    }, s, u)
    _$$_$$_$$_$$_shared_1531_2584_75_index.render(c, a)
  }
}
var st = at
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_index from "../../../../shared/1531/2584/21/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_9 from "../../../../shared/1531/2584/9"
var lt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this, t)).style = undefined
    r.themeColor = undefined
    r.title = undefined
    r.text = undefined
    r.image = undefined
    r.selectedOption = undefined
    r.inputText = undefined
    r.style = t.style
    r.themeColor = t.themeColor
    r.title = t.title
    r.text = t.text
    r.image = t.image
    r.selectedOption = t.selectedOption
    r.inputText = t.inputText
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "message",
    value: function (t, e, n, r, i) {
      var o = this
      this.title = t
      this.text = e
      this.image = r
      st.setStyle(this.style)
      st.setThemeColor(this.themeColor)
      var a = $$_$$_$$_$$_shared_1531_2584_48_index.a().getState().imageFileMap.get(r)
      var s = $$_$$_$$_$$_shared_1531_2584_15.U(r) ? r : a ? $$_$$_$$_$$_shared_1531_2584_9.lb(a) : ""
      var u = function (t) {
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onClickButton", o.__widgetId, t)
      }
      st.message({
        title: t,
        text: e,
        confirmButtonText: String(n),
        image: s || "",
        showCancelButton: i
      }, u, u)
    }
  }, {
    key: "select",
    value: function (t, e, n, r, i) {
      var o = this
      this.title = t
      this.text = e
      st.setStyle(this.style)
      st.setThemeColor(this.themeColor)
      st.select({
        title: t,
        text: e,
        option1: String(n),
        option2: String(r),
        showCancelButton: i
      }, function (t) {
        o.selectedOption = t
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onSelectOption", o.__widgetId, t)
      }, function () {
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onCancelSelection", o.__widgetId)
      })
    }
  }, {
    key: "prompt",
    value: function (t, e, n, r) {
      var i = this
      this.title = t
      this.text = e
      st.setStyle(this.style)
      st.setThemeColor(this.themeColor)
      st.prompt({
        title: t,
        text: e,
        placeholder: String(n),
        showCancelButton: r
      }, function (t) {
        i.inputText = t
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onFinishInput", i.__widgetId, t)
      }, function () {
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onCancelInput", i.__widgetId)
      })
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_671 from "../../../../shared/1531/2584/671"
import * as /* [auto-meaningful-name] */Qrcode from "qrcode"
import /* [auto-meaningful-name] */_Qrcode from "qrcode"
var pt = {
  "7%": "L",
  "15%": "M",
  "25%": "Q",
  "30%": "H"
}
var mt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this, t)).image = ""
    r.width = 300
    r.dark = undefined
    r.light = undefined
    r.errorCorrectionLevel = undefined
    r.margin = undefined
    r.dark = t.dark
    r.light = t.light
    r.errorCorrectionLevel = t.errorCorrectionLevel
    r.margin = t.margin
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "textToDataUrl",
    value: function (t) {
      var /* [auto-meaningful-name] */this$errorCorrectionLevel
      var n = this
      if (t) {
        _Qrcode.toDataURL(t, {
          width: this.width,
          color: {
            dark: this.dark,
            light: this.light
          },
          margin: this.margin,
          errorCorrectionLevel: (this$errorCorrectionLevel = this.errorCorrectionLevel, pt[this$errorCorrectionLevel] || "M")
        }).then(function (t) {
          n.image = t
          n.emit("onDataUrlSuccess", t)
        }).catch(function (t) {
          n.image = ""
          if ("The amount of data is too big to be stored in a QR Code" === t.message) {
            n.widgetError("tooLongText")
          }
          console.error("QRCode.toDataURL error", t)
        })
      } else {
        this.widgetError("textIsEmpty")
      }
    }
  }, {
    key: "urlToDataUrl",
    value: function (t) {
      this.textToDataUrl(t)
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_680 from "../../../../shared/1531/2584/680"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_36_345_392 from "../../../../shared/1531/2584/36/345/392"
var vt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this, t)).stride = undefined
    r.stepCount = undefined
    r.isStopStep = undefined
    r.stepInStopTime = 0
    r.stride = t.stride
    r.stepCount = t.stepCount
    r.resetStepCount()
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "startStepUpdate",
    value: function () {
      var t = this
      if (!$$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        var e = 0
        $$_$$_$$_$$_shared_1531_2584_36_345_392.default.start(function (n) {
          if (t.isStopStep && ++e % 2 === 0) {
            t.isStopStep = false
            t.stepInStopTime = n - t.stepCount
            e = 0
          }
          if (t.stepCount !== n - t.stepInStopTime) {
            t.emit("onStepCountChange", n - t.stepInStopTime)
            t.stepCount = n - t.stepInStopTime
          }
          if (undefined === t.isStopStep) {
            t.isStopStep = false
          }
        }, function () {
          return t.emit("onPedometerNotAvailable")
        }, function () {
          return t.emit("onPedometerPermissionFail")
        })
      }
    }
  }, {
    key: "stopStepUpdate",
    value: function () {
      if (!$$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        $$_$$_$$_$$_shared_1531_2584_36_345_392.default.stop()
        this.isStopStep = true
      }
    }
  }, {
    key: "resetStepCount",
    value: function () {
      var t = this
      if (!$$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        this.stepCount = 0
        this.stepInStopTime = 0
        this.emit("onStepCountChange", 0)
        $$_$$_$$_$$_shared_1531_2584_36_345_392.default.reset(function () {
          if (false === t.isStopStep) {
            t.startStepUpdate()
          }
        })
      }
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_681 from "../../../../shared/1531/2584/681"
import * as /* [auto-meaningful-name] */$_721_index from "./721/index"
import * as /* [auto-meaningful-name] */$_81_index from "./81/index"
function Et() {
  var t = new Map()
  var e = [$_81_index.BarcodeFormat.QR_CODE]
  t.set($_81_index.DecodeHintType.POSSIBLE_FORMATS, e)
  return new $_721_index.BrowserQRCodeReader(t)
}
function Ot() {
  return window.QRScanner
}
var Tt
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$_249 from "./249"
import /* [auto-meaningful-name] */_$_2 from "./249"
function Ct(t) {
  switch (t) {
    case Tt.UNEXPECTED_ERROR:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.UnexpectedError")
    case Tt.CAMERA_ACCESS_DENIED:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.CameraAccessDenied")
    case Tt.CAMERA_ACCESS_RESTRICTED:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.CameraAccessRestricted")
    case Tt.BACK_CAMERA_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.BackCameraUnavailable")
    case Tt.FRONT_CAMERA_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.FrontCameraUnavailable")
    case Tt.CAMERA_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.CameraUnavailable")
    case Tt.SCAN_CANCELED:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.ScanCanceled")
    case Tt.LIGHT_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.LightUnavailable")
    case Tt.OPEN_SETTINGS_UNAVAILABLE:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.SettingsUnavailable")
    case Tt.NOT_FOUND:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.NotFound")
    default:
      return $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.Error.UnexpectedError")
  }
}
!function (t) {
  t[t.UNEXPECTED_ERROR = 0] = "UNEXPECTED_ERROR"
  t[t.CAMERA_ACCESS_DENIED = 1] = "CAMERA_ACCESS_DENIED"
  t[t.CAMERA_ACCESS_RESTRICTED = 2] = "CAMERA_ACCESS_RESTRICTED"
  t[t.BACK_CAMERA_UNAVAILABLE = 3] = "BACK_CAMERA_UNAVAILABLE"
  t[t.FRONT_CAMERA_UNAVAILABLE = 4] = "FRONT_CAMERA_UNAVAILABLE"
  t[t.CAMERA_UNAVAILABLE = 5] = "CAMERA_UNAVAILABLE"
  t[t.SCAN_CANCELED = 6] = "SCAN_CANCELED"
  t[t.LIGHT_UNAVAILABLE = 7] = "LIGHT_UNAVAILABLE"
  t[t.OPEN_SETTINGS_UNAVAILABLE = 8] = "OPEN_SETTINGS_UNAVAILABLE"
  t[t.NOT_FOUND = 9] = "NOT_FOUND"
}(Tt || (Tt = {}))
import * as /* [auto-meaningful-name] */$_898 from "./898"
import /* [auto-meaningful-name] */_$_3 from "./898"
import * as /* [auto-meaningful-name] */$_899 from "./899"
import /* [auto-meaningful-name] */_$_4 from "./899"
import * as /* [auto-meaningful-name] */$_900 from "./900"
import /* [auto-meaningful-name] */_$_5 from "./900"
import * as /* [auto-meaningful-name] */$_613 from "./613"
import /* [auto-meaningful-name] */_$_6 from "./613"
import * as /* [auto-meaningful-name] */$_901 from "./901"
import /* [auto-meaningful-name] */_$_7 from "./901"
import * as /* [auto-meaningful-name] */$_902 from "./902"
import /* [auto-meaningful-name] */_$_8 from "./902"
var Wt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n() {
    var t
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (t = e.call.apply(e, [this].concat(i))).previewPage = undefined
    t.QRCodeReader = Et()
    t.QRCodeScanner = Ot()
    return t
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "showCameraPreview",
    value: function () {
      document.body.style.backgroundColor = "rgba(255, 255, 255, 0)"
      var t = document.getElementById("root")
      if (t) {
        t.style.opacity = "0"
      }
      var e = this.getPreviewPage()
      document.body.appendChild(e)
    }
  }, {
    key: "hideCameraPreview",
    value: function () {
      document.body.style.backgroundColor = ""
      var t = document.getElementById("root")
      if (t) {
        t.style.opacity = "1"
      }
      var e = document.getElementById("SCANNER_PREVIEW_CONTAINER_ID")
      if (e) {
        this.hideErrorMessage()
        document.body.removeChild(e)
      }
    }
  }, {
    key: "showErrorMessage",
    value: function () {
      if (this.previewPage) {
        var t = this.previewPage.children[0]
        t.classList.remove(_$_2.scanning)
        t.style.display = "none"
        this.previewPage.children[1].style.display = "none"
        this.previewPage.children[2].style.display = "block"
      }
    }
  }, {
    key: "hideErrorMessage",
    value: function () {
      if (this.previewPage) {
        var t = this.previewPage.children[0]
        t.className = _$_2.scanning
        t.style.display = "block"
        this.previewPage.children[1].style.display = "block"
        this.previewPage.children[2].style.display = "none"
        this.previewPage.children[5].src = _$_6
      }
    }
  }, {
    key: "getPreviewPage",
    value: function () {
      var t = this
      if (!this.previewPage) {
        var e = function () {
          var e = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function e() {
            return _RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return $$_$$_$$_$$_shared_1531_2584_21_index.getCameraChoosePhoto(function () {
                      var e = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function e(n) {
                        return _RegeneratorRuntime.wrap(function (e) {
                          for (;;) {
                            switch (e.prev = e.next) {
                              case 0:
                                t.QRCodeScanner.disableLight()
                                t.QRCodeScanner.destroy()
                                t.hideCameraPreview()
                                e.next = 5
                                return t.decodeImage(n)
                              case 5:
                              case "end":
                                return e.stop()
                            }
                          }
                        }, e)
                      }))
                      return function (t) {
                        return e.apply(this, arguments)
                      }
                    }(), "")
                  case 2:
                  case "end":
                    return e.stop()
                }
              }
            }, e)
          }))
          return function () {
            return e.apply(this, arguments)
          }
        }()
        var n = "\n        <img class=".concat(_$_2.scanning, " src=").concat(_$_3, " />\n        <p class=").concat(_$_2.text, ">\n          ").concat($$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.tip"), "\n        </p>\n        <div class=").concat(_$_2.error, " style=\"display:none;\">\n          <div>\n            <img src=").concat(_$_5, " />\n            <p>网络不佳，二维码识别失败</p>\n          </div>\n        </div>\n        <div class=\"").concat(_$_2.largeBtn, " ").concat(_$_2.photoBtn, "\">\n          <img src=").concat(_$_8, " />\n        </div>\n        <div class=\"").concat(_$_2.smallBtn, " ").concat(_$_2.returnBtn, "\">\n          <img src=").concat(_$_4, " />\n        </div>\n        <div class=\"").concat(_$_2.largeBtn, " ").concat(_$_2.lightBtn, "\">\n          <img src=").concat(_$_6, " />\n        </div>\n      ")
        var r = document.createElement("div")
        r.id = "SCANNER_PREVIEW_CONTAINER_ID"
        r.className = _$_2.container
        r.innerHTML = n
        this.previewPage = r
        this.previewPage.children[3].onclick = e
        this.previewPage.children[4].onclick = function () {
          t.QRCodeScanner.disableLight()
          t.QRCodeScanner.destroy()
          t.hideCameraPreview()
        }
        this.previewPage.children[5].onclick = function () {
          t.QRCodeScanner.getStatus(function (e) {
            if (e.lightEnabled) {
              t.QRCodeScanner.disableLight(function (e) {
                if (e) {
                  t.emit("onScanError", Ct(e.code))
                } else {
                  var n = document.getElementsByClassName(_$_2.lightBtn)[0]
                  if (n) {
                    n.innerHTML = "<img src=".concat(_$_6, " />")
                  }
                }
              })
            } else {
              t.QRCodeScanner.enableLight(function (e) {
                if (e) {
                  t.emit("onScanError", Ct(e.code))
                } else {
                  var n = document.getElementsByClassName(_$_2.lightBtn)[0]
                  if (n) {
                    n.innerHTML = "<img src=".concat(_$_7, " />")
                  }
                }
              })
            }
          })
        }
      }
      return this.previewPage
    }
  }, {
    key: "scan",
    value: function () {
      var t = this
      if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
        this.QRCodeScanner.prepare(function (e, n) {
          if (e) {
            t.showErrorMessage()
            return void t.emit("onScanError", Ct(e.code))
          }
          t.QRCodeScanner.scan(function (e, n) {
            if (e) {
              t.showErrorMessage()
              return void t.emit("onScanError", Ct(e.code))
            }
            t.hideCameraPreview()
            t.emit("onScanSuccess", n)
          })
          t.QRCodeScanner.show()
          t.showCameraPreview()
        })
      } else {
        this.widgetError("PlatformNotSupport")
      }
    }
  }, {
    key: "decodeImage",
    value: function () {
      var t = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e) {
        var n
        var /* [auto-meaningful-name] */t$sent
        return _RegeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                (n = document.createElement("img")).src = e
                n.crossOrigin = "Anonymous"
                t.prev = 3
                t.next = 6
                return this.QRCodeReader.decodeFromImageElement(n)
              case 6:
                t$sent = t.sent
                this.emit("onScanSuccess", t$sent.getText())
                t.next = 13
                break
              case 10:
                t.prev = 10
                t.t0 = t.catch(3)
                if (t.t0 instanceof $_81_index.NotFoundException) {
                  this.emit("onScanError", Ct(Tt.NOT_FOUND))
                } else {
                  this.emit("onScanError", Ct(Tt.UNEXPECTED_ERROR))
                }
              case 13:
              case "end":
                return t.stop()
            }
          }
        }, t, this, [[3, 10]])
      }))
      return function (e) {
        return t.apply(this, arguments)
      }
    }()
  }, {
    key: "scanImage",
    value: function () {
      var t = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e) {
        var n
        var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_index$a$getState$imageFileMap
        var i
        return _RegeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                n = ""
                if ($$_$$_$$_$$_shared_1531_2584_15.U(e)) {
                  n = e
                } else {
                  $$_$$_$$_$$_shared_1531_2584_48_index$a$getState$imageFileMap = $$_$$_$$_$$_shared_1531_2584_48_index.a().getState().imageFileMap
                  i = $$_$$_$$_$$_shared_1531_2584_48_index$a$getState$imageFileMap.get(e)
                  n = (null === i || undefined === i ? undefined : i.cdnUrl) || ""
                }
                this.decodeImage(n)
              case 3:
              case "end":
                return t.stop()
            }
          }
        }, t, this)
      }))
      return function (e) {
        return t.apply(this, arguments)
      }
    }()
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_673 from "../../../../shared/1531/2584/673"
var Vt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n() {
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n)
    return e.apply(this, arguments)
  }
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.d)
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_675 from "../../../../shared/1531/2584/675"
var zt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n() {
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n)
    return e.apply(this, arguments)
  }
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.d)
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_424_114 from "../../../../shared/1531/2584/21/424/114"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_14 from "../../../../shared/1531/2584/14"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_116 from "../../../../shared/1531/2584/116"
var qt = function (t) {
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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_77 from "../../../../shared/1531/2584/77"
var Jt = function (t) {
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
        backgroundMode: $$_$$_$$_$$_shared_1531_2584_77.a.TEMPLATE,
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
          backgroundMode: $$_$$_$$_$$_shared_1531_2584_77.a.IMAGE,
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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_672 from "../../../../shared/1531/2584/672"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_674 from "../../../../shared/1531/2584/674"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_685 from "../../../../shared/1531/2584/58/685"
var /* [auto-meaningful-name] */window$WebSocket = window.WebSocket
var /* [auto-meaningful-name] */window$XMLHttpRequest = window.XMLHttpRequest
var /* [auto-meaningful-name] */window$XMLHttpRequest$prototype$open = window$XMLHttpRequest.prototype.open
var /* [auto-meaningful-name] */window$fetch = window.fetch
var oe = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t, r) {
    var i
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n)
    return new URL(t).hostname.includes("codemao") ? (i = e.call(this, "wss://websocket.com", r), $$_$$_$$_$$_shared_1531_2584_58_685.a(i)) : e.call(this, t, r)
  }
  return n
}(window$WebSocket)
var ae = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n() {
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n)
    return e.apply(this, arguments)
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "open",
    value: function (t, e, n, r, i) {
      return window$XMLHttpRequest$prototype$open.apply(this, [t, e, null === n || undefined === n || n, r, i])
    }
  }])
  return n
}(window$XMLHttpRequest)
var se = function (t, e) {
  return window$fetch.call(window, t, e)
}
function ue() {
  try {
    Object.defineProperty(window, "WebSocket", {
      value: oe,
      writable: false,
      configurable: false
    })
    Object.defineProperty(window, "XMLHttpRequest", {
      value: ae,
      writable: false,
      configurable: false
    })
    Object.defineProperty(window, "fetch", {
      value: se,
      writable: false,
      configurable: false
    })
    Object.freeze(oe.prototype)
    Object.freeze(oe)
    Object.freeze(ae.prototype)
    Object.freeze(ae)
    Object.freeze(se.prototype)
    Object.freeze(se)
  } catch (t) {
    console.error("defineProperty error:", t)
  }
}
var ce
var le
var de
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_externalModule from "../../../../../src/shared/widget/custom/external-module"
import "./1161"
import "./1162"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_2628_index from "../../../../shared/1531/2584/2628/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_13_index from "../../../../shared/1531/2584/13/index"
import * as me from "./71"
import be from "./71"
var ge = [{
  number: 1,
  letter: ""
}, {
  number: 2,
  letter: "ABC"
}, {
  number: 3,
  letter: "DEF"
}, {
  number: 4,
  letter: "GHI"
}, {
  number: 5,
  letter: "JKL"
}, {
  number: 6,
  letter: "MNO"
}, {
  number: 7,
  letter: "PQRS"
}, {
  number: 8,
  letter: "TUV"
}, {
  number: 9,
  letter: "XYZ"
}, {
  number: "*",
  letter: ""
}, {
  number: 0,
  letter: "+"
}, {
  number: "#",
  letter: ""
}]
var ve = React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var e = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var n = React.useState("")
  var r = $$_$$_$$_$$_shared_1531_2584_10_index.a(n, 2)
  var i = r[0]
  var o = r[1]
  React.useEffect(function () {
    o(e.phoneNumber)
  }, [e.phoneNumber])
  var a = function (t) {
    o(i + "" + t)
  }
  return _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.dialerBox, !e.dialPageVisible && be.dialerBoxHide)
  }, _React.createElement("div", {
    className: be.backBox,
    onClick: function () {
      t($$_$$_$$_$$_shared_1531_2584_48_72.s({
        dialPageVisible: false
      }))
    }
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-nav-back"
  })), _React.createElement("div", {
    className: be.dialNumber
  }, i), _React.createElement("div", {
    className: be.numberBox
  }, ge.map(function (t) {
    return _React.createElement("div", {
      key: t.number,
      className: _$$_$$_$$_$$_shared_1531_2584_(be.keyItem, be.numberKey),
      onClick: a.bind(null, t.number)
    }, _React.createElement("div", {
      className: be.number
    }, t.number), _React.createElement("div", {
      className: be.letter
    }, t.letter))
  }), _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.keyItem, be.white)
  }), _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.keyItem, be.callBtn),
    onClick: function () {
      if (i) {
        t($$_$$_$$_$$_shared_1531_2584_48_72.s({
          dialPageVisible: false,
          callingPageVisible: true,
          callType: "dialOutCall",
          phoneNumber: i,
          callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
        }))
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_48_70.c, "onPhoneCallStart", e.phoneDialWidgetId)
        $$_$$_$$_$$_shared_1531_2584_38_217_index.b({
          phoneCallInfo: {
            callType: "dialOutCall",
            dialOutPhoneNumber: i,
            callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
          }
        })
      }
    }
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-call-dial"
  })), _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.keyItem, be.white)
  }, _React.createElement("div", {
    className: be.deleteBtn,
    onClick: function () {
      if (i) {
        o(i.substr(0, i.length - 1))
      }
    }
  }, "x"))))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_702 from "../../../../shared/1531/2584/702"
var ye = React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_702$a$formatMessage = $$_$$_$$_$$_shared_1531_2584_702.a().formatMessage
  var n = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var r = React.useState(0)
  var i = $$_$$_$$_$$_shared_1531_2584_10_index.a(r, 2)
  var o = i[0]
  var a = i[1]
  React.useEffect(function () {
    if (ce) {
      clearInterval(ce)
    }
    if (n.callingPageVisible && n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK) {
      var t = 0
      ce = setInterval(function () {
        t++
        a(t)
      }, 1e3)
    }
    return function () {
      if (ce) {
        clearInterval(ce)
      }
      a(0)
    }
  }, [n.callingPageVisible, n.callStatus])
  var s = function (t) {
    var e = Math.floor(t % 86400 % 3600 / 60)
    var n = Math.floor(t % 86400 % 3600 % 60)
    return "".concat(e < 10 ? "0" : "").concat(e, " : ").concat(n < 10 ? "0" : "").concat(n)
  }
  var u = function () {
    t($$_$$_$$_$$_shared_1531_2584_48_72.s({
      callingPageVisible: false,
      callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.IDEL
    }))
    $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_48_70.c, "onPhoneCallEnd", n.phoneDialWidgetId, $$_$$_$$_$$_shared_1531_2584_48_70.a.DIAL_OUT_CALL_END)
    $$_$$_$$_$$_shared_1531_2584_38_217_index.b({
      phoneCallInfo: {
        callType: "dialOutCall",
        callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.IDEL
      }
    })
  }
  var l = function () {
    $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEventType($$_$$_$$_$$_shared_1531_2584_48_70.c, "onPhoneCallEnd", n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING ? $$_$$_$$_$$_shared_1531_2584_48_70.a.INCOMING_CALL_REFUSE_END : $$_$$_$$_$$_shared_1531_2584_48_70.a.INCOMING_CALL_CONNECT_END)
    t($$_$$_$$_$$_shared_1531_2584_48_72.s({
      callingPageVisible: false,
      callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.IDEL
    }))
    $$_$$_$$_$$_shared_1531_2584_38_217_index.b({
      phoneCallInfo: {
        callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.IDEL
      }
    })
  }
  var d = function () {
    t($$_$$_$$_$$_shared_1531_2584_48_72.s({
      callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK
    }))
    $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEventType($$_$$_$$_$$_shared_1531_2584_48_70.c, "onConnectReceivePhoneCall")
    $$_$$_$$_$$_shared_1531_2584_38_217_index.b({
      phoneCallInfo: {
        callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK
      }
    })
  }
  return _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.callingBox, !n.callingPageVisible && be.callingBoxHide)
  }, "dialOutCall" === n.callType && _React.createElement(_React.Fragment, null, _React.createElement("div", {
    className: be.phoneNumber
  }, n.phoneNumber), n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING && _React.createElement("div", {
    className: be.phoneStatus
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.onRinging"
  })), n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK && _React.createElement("div", {
    className: be.phoneStatus
  }, s(o)), _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.callBtnBox, be.flexCC)
  }, _React.createElement("div", {
    className: be.callBtnItemBox,
    onClick: u
  }, _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.callBtnItem, be.callEnd)
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-call-disconnect"
  })), _React.createElement("span", {
    className: be.callBtnText
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.callEnd"
  }))))), "incomingCall" === n.callType && _React.createElement(_React.Fragment, null, _React.createElement("div", {
    className: be.phoneNumber
  }, n.phoneNumber), n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING && _React.createElement("div", {
    className: be.phoneStatus
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.phoneNumber"
  })), n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK && _React.createElement("div", {
    className: be.phoneStatus
  }, s(o)), _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.callBtnBox, n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING ? be.flexSC : be.flexCC)
  }, _React.createElement("div", {
    className: be.callBtnItemBox,
    onClick: l
  }, _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.callBtnItem, be.callEnd)
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-call-disconnect"
  })), _React.createElement("span", {
    className: be.callBtnText
  }, n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING ? $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.callRefuse"
  }) : $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.callEnd"
  }))), n.callStatus === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING && _React.createElement("div", {
    className: be.callBtnItemBox,
    onClick: d
  }, _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.callBtnItem, be.callConnect)
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-call-dial"
  })), _React.createElement("span", {
    className: be.callBtnText
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.callConnect"
  }))))))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_677_476 from "../../../../shared/1531/2584/677/476"
var Ee = [{
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/bbc05b5084214ba6a0c164be0e557364.jpeg",
  name: "编程猫",
  number: "123 4567 8901"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/35488fb77f963585880c80b956250b5f.jpeg",
  name: "大黄鸡",
  number: "123 4567 8902"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/ecee961d68c6b11db9a2275cf92ac602.jpeg",
  name: "活动喵",
  number: "123 4567 8903"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/5bcc344dfd6d8833cd78fec568b95471.jpeg",
  name: "迷你雀",
  number: "123 4567 8904"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/c36d182c24a52f1b94120c6abf1becaa.jpeg",
  name: "星能兔",
  number: "123 4567 8905"
}]
var Oe = React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var e = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var n = function (n, r, i) {
    t($$_$$_$$_$$_shared_1531_2584_48_72.s({
      contactPageVisible: false
    }))
    $$_$$_$$_$$_shared_1531_2584_21_index.setProperties(e.contactWidgetId, {
      contactName: n,
      phoneNumber: r,
      phoneNumberList: [r],
      contactAvatar: i
    })
    $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_677_476.a, "onContactPickerSelected", e.contactWidgetId, n, r)
  }
  return _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.contactBox, !e.contactPageVisible && be.contactBoxHide)
  }, _React.createElement("div", {
    className: be.backBox,
    onClick: function () {
      t($$_$$_$$_$$_shared_1531_2584_48_72.s({
        contactPageVisible: false
      }))
    }
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-nav-back"
  })), _React.createElement("div", {
    className: be.contactList
  }, Ee.map(function (t) {
    return _React.createElement("div", {
      onClick: n.bind(null, t.name, t.number, t.avatar),
      key: t.name,
      className: _$$_$$_$$_$$_shared_1531_2584_(be.contactItem, be.flexSC)
    }, _React.createElement("div", {
      className: be.flexCC
    }, _React.createElement("img", {
      src: t.avatar,
      className: be.itemAvatar,
      alt: ""
    }), _React.createElement("div", null, _React.createElement("div", {
      className: be.itemName
    }, t.name), _React.createElement("div", {
      className: be.itemNumber
    }, t.number))), _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
      type: "icon-fold-left"
    }))
  })))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_678_360 from "../../../../shared/1531/2584/678/360"
var Ae = React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_702$a$formatMessage = $$_$$_$$_$$_shared_1531_2584_702.a().formatMessage
  var n = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var r = React.useState(n.sendSmsNumber)
  var i = $$_$$_$$_$$_shared_1531_2584_10_index.a(r, 2)
  var o = i[0]
  var a = i[1]
  var s = React.useState(n.sendSmsContent)
  var u = $$_$$_$$_$$_shared_1531_2584_10_index.a(s, 2)
  var l = u[0]
  var d = u[1]
  var m = React.useState([])
  var b = $$_$$_$$_$$_shared_1531_2584_10_index.a(m, 2)
  var g = b[0]
  var v = b[1]
  var _ = React.useState(1)
  var y = $$_$$_$$_$$_shared_1531_2584_10_index.a(_, 2)
  var w = y[0]
  var E = y[1]
  var O = React.useRef(null)
  var T = React.useRef(null)
  React.useEffect(function () {
    if (n.sendSmsPageVisible) {
      a(n.sendSmsNumber)
      d(n.sendSmsContent)
      v([])
    }
  }, [n.sendSmsPageVisible, n.sendSmsNumber, n.sendSmsContent])
  return _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.sendSmsBox, !n.sendSmsPageVisible && be.sendSmsBoxHide)
  }, _React.createElement("div", {
    className: be.backBox
  }, _React.createElement("div", {
    onClick: function () {
      t($$_$$_$$_$$_shared_1531_2584_48_72.s({
        sendSmsPageVisible: false
      }))
    }
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-nav-back"
  })), _React.createElement("span", {
    className: be.receiveUser
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.smsReceiver"
  }))), _React.createElement("div", {
    className: be.numberBox
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.k, {
    className: be.inputNumber,
    defaultValue: o,
    placeholder: $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
      id: "emulator.smsSendNumberPlaceHolder"
    }),
    onChange: function (t) {
      a(t)
    },
    maxLength: 20
  })), _React.createElement("div", {
    className: be.smsBox
  }, g.map(function (t, e) {
    return _React.createElement("div", {
      key: e,
      className: be.smsItem
    }, t)
  }), _React.createElement("div", {
    className: be.scrollToView,
    ref: T
  })), _React.createElement("div", {
    className: be.contentBox
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.A, {
    ref: O,
    rows: w,
    maxLength: 200,
    className: be.contentTextArea,
    defaultValue: l,
    placeholder: $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
      id: "emulator.smsContentPlaceHolder"
    }),
    onChange: function (t) {
      d(t.target.value)
      if (O.current) {
        E(Math.min(O.current.getRowCount(), 7))
      }
    }
  }), _React.createElement("div", {
    onClick: function () {
      if (o && l) {
        v(g.concat(l))
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_678_360.a, "onSendSmsSuccess", n.smsWidgetId, l, o)
        d("")
        E(1)
        var t = $$_$$_$$_$$_shared_1531_2584_21_index.getWidgetInstance(n.smsWidgetId)
        if (t) {
          t.widgetLog("sendSmsLog", {
            phoneNumber: o
          })
        }
        if (le) {
          clearTimeout(le)
        }
        le = setTimeout(function () {
          var /* [auto-meaningful-name] */T$current
          if (!(null === (T$current = T.current) || undefined === T$current)) {
            T$current.scrollIntoView({
              behavior: "smooth",
              block: "end"
            })
          }
        }, 10)
      }
    },
    className: _$$_$$_$$_$$_shared_1531_2584_(be.sendSmsBtn, (!o || !l) && be.disable)
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-send-sms"
  }))))
})
var Se = React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_702$a$formatMessage = $$_$$_$$_$$_shared_1531_2584_702.a().formatMessage
  var n = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  React.useEffect(function () {
    if (de) {
      clearTimeout(de)
    }
    if (n.receiveSmsPageVisible) {
      de = setTimeout(function () {
        t($$_$$_$$_$$_shared_1531_2584_48_72.s({
          receiveSmsPageVisible: false
        }))
      }, 2e3)
    }
    return function () {
      return de && clearTimeout(de)
    }
  }, [n.receiveSmsPageVisible, n.receiveSmsNumber, n.receiveSmsContent, t])
  return _React.createElement("div", {
    className: _$$_$$_$$_$$_shared_1531_2584_(be.receiveSms, !n.receiveSmsPageVisible && be.receiveSmsHide)
  }, _React.createElement("div", {
    className: be.flexSC
  }, _React.createElement("div", {
    className: be.smsIconBox
  }, _React.createElement("div", {
    className: be.smsIcon
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-widget-sms-service"
  })), _React.createElement("span", null, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.sms"
  }))), _React.createElement("div", {
    className: be.smsTime
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.now"
  }))), _React.createElement("div", {
    className: be.smsNumber
  }, n.receiveSmsNumber), _React.createElement("div", {
    className: be.smsContent
  }, n.receiveSmsContent))
})
var Ie = React.memo(function () {
  return _React.createElement("div", {
    className: be.screenMask,
    id: "cocoScreenMask"
  })
})
var Ce = React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.language
  })
  return _React.createElement($$_$$_$$_$$_shared_1531_2584_2628_index.b, {
    locale: t,
    messages: $$_$$_$$_$$_$$_src_shared_ui_language.e[t] || $$_$$_$$_$$_$$_src_shared_ui_language.e[$$_$$_$$_$$_$$_src_shared_ui_language.b]
  }, _React.createElement(ve, null), _React.createElement(Oe, null), _React.createElement(Ae, null), _React.createElement(Se, null), _React.createElement(ye, null), _React.createElement(Ie, null))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_424_67_410 from "../../../../shared/1531/2584/21/424/67/410"
var Me = function () {
  return _React.createElement("svg", {
    "aria-hidden": "true",
    width: "0",
    height: "0",
    style: {
      position: "absolute"
    }
  }, _React.createElement("symbol", {
    id: "icon-radio-correct",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M935.594667 287.573333s-369.322667 393.984-452.096 487.594667c-82.773333 93.610667-147.328 0-147.328 0L96 535.253333s-38.314667-56.533333 30.293333-109.226666a87.552 87.552 0 0 1 117.034667 0l169.557333 171.648 421.802667-380.330667s40.362667-27.306667 82.773333 7.808c32.256 29.269333 18.133333 62.421333 18.133334 62.421333z"
  })), _React.createElement("symbol", {
    id: "icon-radio-incorrect",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M741.290667 204.074667a63.445333 63.445333 0 0 1 88.618666 1.365333 55.04 55.04 0 0 1-0.896 77.866667l-231.210666 226.005333 225.28 213.205333a59.989333 59.989333 0 0 1-1.706667 88.661334 71.125333 71.125333 0 0 1-96.597333-2.645334l-216.533334-211.669333-216.490666 211.669333c-24.917333 24.32-63.488 26.88-91.221334 6.912l-5.418666-4.266666a59.989333 59.989333 0 0 1-1.706667-88.661334l225.28-213.205333L187.52 283.306667a55.04 55.04 0 0 1 1.621333-80.256 63.445333 63.445333 0 0 1 86.101334 1.024l233.002666 220.501333z"
  })), _React.createElement("symbol", {
    id: "icon-fold-left",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M361.344 265.344a32 32 0 0 1 45.312 0l224 224a32 32 0 0 1 3.648 40.832l-3.648 4.48-224 224a32 32 0 0 1-48.96-40.832l3.648-4.48L562.752 512 361.344 310.656a32 32 0 0 1 0-45.312z"
  })), _React.createElement("symbol", {
    id: "icon-phone-nav-back",
    viewBox: "0 0 1350 1024"
  }, _React.createElement("path", {
    d: "M572.330667 25.002667a85.333333 85.333333 0 0 1 7.082666 112.64l-7.082666 8.021333L291.328 426.666667H2048a85.333333 85.333333 0 0 1 9.984 170.069333L2048 597.333333H291.328l281.002667 281.002667a85.333333 85.333333 0 0 1 7.082666 112.64l-7.082666 8.021333a85.333333 85.333333 0 0 1-112.64 7.082667l-8.021334-7.082667-426.666666-426.666666a85.333333 85.333333 0 0 1-7.082667-112.64l7.082667-8.021334 426.666666-426.666666a85.333333 85.333333 0 0 1 120.661334 0z"
  })), _React.createElement("symbol", {
    id: "icon-phone-call-disconnect",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M524.693333 388.416c-127.402667 0.298667-249.024 27.669333-310.741333 89.386667-27.989333 27.989333-42.282667 61.738667-41.066667 102.485333 0.917333 22.784 7.296 45.909333 21.909334 60.501333 10.026667 10.325333 24.32 16.106667 41.941333 13.077334l112.213333-19.157334c14.890667-2.752 26.133333-7.616 34.048-15.210666 9.728-9.130667 13.376-23.722667 13.376-43.477334l0.618667-30.72c0-4.864 1.813333-8.512 4.864-11.541333 2.730667-3.349333 6.976-4.864 10.325333-5.781333 19.456-5.162667 61.12-10.645333 112.512-10.645334 51.370667 0 92.736 4.266667 112.490667 10.944 3.349333 0.917333 6.997333 2.752 9.728 5.482667a13.376 13.376 0 0 1 4.565333 10.645333L652.373333 576c0.597333 19.754667 4.544 34.048 13.973334 43.477333 7.893333 7.893333 19.157333 12.458667 34.346666 15.210667l108.864 18.56c18.56 3.328 33.749333-3.050667 45.312-14.293333 13.376-13.696 21.290667-34.986667 21.589334-59.904 0.597333-40.746667-14.912-74.197333-42.261334-101.269334-61.738667-61.717333-182.144-89.685333-309.546666-89.386666z"
  })), _React.createElement("symbol", {
    id: "icon-phone-call-dial",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M375.658667 651.733333c84.522667 84.522667 190.016 151.104 276.992 151.104 39.829333 0 73.877333-13.674667 101.845333-43.776 15.509333-16.426667 27.072-37.696 27.072-58.069333 0-14.592-5.482667-28.586667-20.373333-38.933333l-92.736-65.365334c-12.778667-8.810667-24.021333-13.674667-34.666667-13.674666-13.674667 0-26.453333 7.296-40.448 20.970666l-22.186667 21.589334a15.573333 15.573333 0 0 1-11.562666 4.565333c-4.266667 0-8.213333-1.514667-11.541334-3.050667-17.941333-9.408-50.773333-35.264-81.493333-66.282666-31.018667-30.997333-57.472-63.232-66.282667-81.792-1.514667-3.328-3.050667-7.296-3.050666-10.944a14.72 14.72 0 0 1 4.565333-10.944l21.589333-22.805334c13.376-14.592 20.693333-27.349333 20.693334-40.746666 0-10.944-4.565333-22.186667-13.696-34.965334l-63.850667-90.304c-10.645333-14.890667-25.536-21.589333-41.962667-21.589333-19.157333 0-39.829333 9.429333-57.472 26.773333-29.184 28.266667-41.941333 63.232-41.941333 101.845334 0 86.976 65.664 191.573333 150.506667 276.394666z"
  })), _React.createElement("symbol", {
    id: "icon-phone-call-idle",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M341.317818 226.513455c23.156364 0 43.589818 10.146909 57.483637 29.626181l61.416727 86.830546c11.240727 15.755636 17.058909 30.510545 17.058909 45.847273 0 18.548364-8.610909 35.048727-25.623273 53.620363l-18.571636 19.549091c2.490182 5.236364 7.074909 12.288 13.218909 20.48l6.656 8.517818 7.586909 9.169455c2.676364 3.141818 5.492364 6.353455 8.424727 9.634909l9.122909 9.960727c3.141818 3.374545 6.4 6.749091 9.728 10.170182l9.797819 9.844364c4.794182 4.701091 9.658182 9.309091 14.498909 13.730909l9.611636 8.587636c1.582545 1.396364 3.165091 2.722909 4.724364 4.049455l9.169454 7.610181c11.892364 9.611636 22.388364 17.035636 29.463273 20.759273l1.117091 0.488727 19.176727-18.618181c16.221091-15.872 31.883636-24.738909 49.198546-26.018909l4.375272-0.16291c14.848 0 29.253818 5.818182 45.428364 16.989091l89.134545 62.836364c19.176727 13.312 28.625455 32.628364 28.625455 54.690909 0 24.413091-12.288 49.617455-31.650909 70.144-30.417455 32.721455-68.491636 48.826182-113.384727 48.826182-84.898909 0-189.207273-59.368727-281.437091-151.598546C283.438545 559.848727 224.674909 456.285091 224.674909 371.269818c0-44.148364 15.429818-82.734545 46.661818-112.965818C291.863273 238.08 316.834909 226.513455 341.317818 226.513455z m0 41.890909c-12.730182 0-27.485091 6.842182-40.727273 19.851636C277.620364 310.481455 266.565818 338.152727 266.565818 371.246545c0 71.633455 53.597091 166.074182 138.728727 251.229091C490.402909 707.560727 585.658182 761.786182 657.105455 761.786182c33.396364 0 60.322909-11.380364 82.804363-35.584 12.730182-13.498182 20.340364-29.090909 20.340364-41.518546 0-8.727273-3.095273-15.034182-10.752-20.340363l-89.088-62.789818c-9.634909-6.679273-16.570182-9.472-21.457455-9.472-6.306909 0-13.824 3.979636-24.32 14.266181l-21.154909 20.573091a35.746909 35.746909 0 0 1-25.925818 10.519273c-7.168 0-13.032727-1.722182-20.875636-5.329455-20.526545-10.775273-54.085818-37.818182-83.502546-67.514181l-5.585454-5.655273c-29.486545-30.161455-53.271273-59.880727-62.464-79.220364-3.072-6.749091-4.794182-12.427636-4.794182-19.2 0-9.541818 3.467636-18.292364 10.123636-24.948363l20.549818-21.690182c10.356364-11.310545 14.382545-19.013818 14.382546-25.064727 0-5.469091-2.676364-12.264727-9.309091-21.573819L364.637091 280.413091A26.903273 26.903273 0 0 0 341.317818 268.404364z m403.828364-18.338909c7.610182 0 14.475636 5.12 17.384727 12.916363a22.341818 22.341818 0 0 1-4.235636 22.714182l-99.956364 108.869818h111.336727c10.356364 0 18.804364 9.378909 18.804364 20.852364 0 11.450182-8.448 20.829091-18.804364 20.829091h-157.323636c-7.610182 0-14.475636-5.12-17.384727-12.916364a22.341818 22.341818 0 0 1 4.235636-22.714182l99.956364-108.869818h-88.482909c-10.356364 0-18.804364-9.378909-18.804364-20.852364 0-11.450182 8.448-20.829091 18.804364-20.82909h134.469818z"
  })), _React.createElement("symbol", {
    id: "icon-phone-send-sms",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M186.453333 825.813333l54.101334-240.938666a34.133333 34.133333 0 0 1 30.805333-26.538667l332.373333-24.277333-332.544-26.325334a34.133333 34.133333 0 0 1-30.634666-26.496L186.453333 240.896a34.133333 34.133333 0 0 1 48.597334-38.058667l599.893333 299.946667a34.133333 34.133333 0 0 1 0 61.098667l-599.936 299.946666a34.133333 34.133333 0 0 1-48.597333-37.973333z"
  })), _React.createElement("symbol", {
    id: "icon-widget-sms-service",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M828.970667 140.8A139.562667 139.562667 0 0 1 968.533333 280.362667V743.68a139.562667 139.562667 0 0 1-139.562666 139.562667H194.986667A139.562667 139.562667 0 0 1 55.466667 743.637333V280.32A139.562667 139.562667 0 0 1 195.029333 140.8zM115.2 391.978667v351.658666c0 44.074667 35.754667 79.829333 79.829333 79.829334H829.013333a79.829333 79.829333 0 0 0 79.829334-79.829334V392.021333l-334.464 185.728c-36.181333 19.242667-78.549333 20.522667-115.925334 3.669334l-7.936-3.882667L115.2 391.978667zM828.970667 200.533333H194.986667A79.829333 79.829333 0 0 0 115.2 280.362667v43.349333l363.733333 201.301333c19.157333 10.154667 41.173333 11.178667 60.586667 3.242667l6.314667-2.986667L908.8 323.754667V280.362667c0-41.984-32.426667-76.373333-73.6-79.573334l-6.229333-0.256z"
  })), _React.createElement("symbol", {
    id: "icon-close",
    viewBox: "0 0 1024 1024"
  }, _React.createElement("path", {
    d: "M980.906667 43.093333a59.733333 59.733333 0 0 1 6.314666 77.056l-6.314666 7.424L596.394667 512l384.512 384.426667a59.733333 59.733333 0 0 1-77.056 90.794666l-7.424-6.314666L512 596.394667l-384.426667 384.512a59.733333 59.733333 0 0 1-90.794666-77.056l6.314666-7.424L427.605333 512 43.093333 127.573333A59.733333 59.733333 0 0 1 120.149333 36.778667l7.424 6.314666L512 427.605333 896.426667 43.093333a59.733333 59.733333 0 0 1 84.48 0z"
  }), " "))
}
var ke = _React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.currentScreenId
  })
  if (!t) {
    console.error("The currentScreen id is undefined")
  }
  return _React.createElement("div", {
    id: $$_$$_$$_$$_shared_1531_2584_233_324.a,
    style: {
      width: "100%",
      height: "100%"
    },
    onClick: function (t) {
      return t.stopPropagation()
    }
  }, _React.createElement($$_$$_$$_$$_shared_1531_2584_21_424_67_410.a, {
    id: t || ""
  }), _React.createElement(Me, null), _React.createElement(Ce, null))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_38_217_388 from "../../../../shared/1531/2584/38/217/388"
var Ne = {
  x: 0,
  y: 0,
  z: 0
}
$$_$$_$$_$$_shared_1531_2584_38_217_index.a.instance.addEventListener("accelerometerUpdate", function (t) {
  Ne = t
})
var xe = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this)).options = t
    r.emitTimer = undefined
    r.emitReading = function () {
      r.emit("reading")
    }
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "x",
    get: function () {
      return Ne.x
    }
  }, {
    key: "y",
    get: function () {
      return Ne.y
    }
  }, {
    key: "z",
    get: function () {
      return Ne.z
    }
  }, {
    key: "start",
    value: function () {
      var /* [auto-meaningful-name] */this$options
      if (this.emitTimer) {
        throw new Error("Already started")
      }
      this.emitTimer = setInterval(this.emitReading, (null === (this$options = this.options) || undefined === this$options ? undefined : this$options.frequency) || 60)
    }
  }, {
    key: "stop",
    value: function () {
      clearInterval(this.emitTimer)
      this.emitTimer = null
    }
  }])
  return n
}($$_$$_$$_$$_shared_1531_2584_38_217_388.a)
var De = {
  x: 0,
  y: -50,
  z: 0
}
$$_$$_$$_$$_shared_1531_2584_38_217_index.a.instance.addEventListener("magnetometerUpdate", function (t) {
  De = t
})
var Le = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this)).options = t
    r.emitTimer = undefined
    r.emitReading = function () {
      r.emit("reading")
    }
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "x",
    get: function () {
      return De.x
    }
  }, {
    key: "y",
    get: function () {
      return De.y
    }
  }, {
    key: "z",
    get: function () {
      return De.z
    }
  }, {
    key: "start",
    value: function () {
      var /* [auto-meaningful-name] */this$options
      if (this.emitTimer) {
        throw new Error("Already started")
      }
      this.emitTimer = setInterval(this.emitReading, (null === (this$options = this.options) || undefined === this$options ? undefined : this$options.frequency) || 60)
    }
  }, {
    key: "stop",
    value: function () {
      clearInterval(this.emitTimer)
      this.emitTimer = null
    }
  }])
  return n
}($$_$$_$$_$$_shared_1531_2584_38_217_388.a)
function Be() {
  window.Accelerometer = xe
  window.Magnetometer = Le
  $$_$$_$$_$$_shared_1531_2584_38_217_index.a.instance.emitToParent("ready")
  $$_$$_$$_$$_shared_1531_2584_38_217_index.a.instance.addEventListener("shake", function () {
    $$_$$_$$_$$_shared_1531_2584_21_index.emitDeviceShake()
  })
}
var Pe = {
  PHONE_DIALER_WIDGET: D,
  CONTACT_PICKER_WIDGET: P,
  SMS_SERVICE_WIDGET: G,
  DIALOG_WIDGET: lt,
  QRCODE_WIDGET: mt,
  PEDOMETER_WIDGET: vt,
  QR_SCANNER_WIDGET: Wt,
  IMAGE_WIDGET: Vt,
  CANVAS_WIDGET: zt,
  NEW_BUTTON_WIDGET: qt,
  INPUT_WIDGET: Jt
}
function Ue() {
  var /* [auto-meaningful-name] */__device_id = "__device_id"
  var e = localStorage.getItem(__device_id)
  if (!e) {
    e = $$_$$_$$_$$_shared_1531_2584_38_2629.a()
    localStorage.setItem(__device_id, e)
  }
  return e
}
function Fe(t) {
  return We.apply(this, arguments)
}
function We() {
  return (We = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e) {
    var /* [auto-meaningful-name] */t$sent
    return _RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2
            return Promise.all(e.map(function () {
              var t = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e) {
                var /* [auto-meaningful-name] */_t$sent
                return _RegeneratorRuntime.wrap(function (t) {
                  for (;;) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2
                        return _Axios.get("".concat(e.cdnUrl, "?t=").concat(Math.random()))
                      case 2:
                        _t$sent = t.sent
                        return t.abrupt("return", $$_$$_$$_$$_shared_1531_2584_6.a($$_$$_$$_$$_shared_1531_2584_6.a({}, e), {}, {
                          code: _t$sent.data
                        }))
                      case 4:
                      case "end":
                        return t.stop()
                    }
                  }
                }, t)
              }))
              return function (e) {
                return t.apply(this, arguments)
              }
            }()))
          case 2:
            t$sent = t.sent
            return t.abrupt("return", t$sent)
          case 4:
          case "end":
            return t.stop()
        }
      }
    }, t)
  }))).apply(this, arguments)
}
function He(t, e) {
  return Ve.apply(this, arguments)
}
function Ve() {
  return (Ve = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e, n) {
    var r
    var i
    var o
    var a
    var s
    var /* [auto-meaningful-name] */s$type
    var f
    var h
    var p
    return _RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            o = function () {
              return (o = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e, n) {
                var /* [auto-meaningful-name] */t$sent
                var /* [auto-meaningful-name] */t$sent$types
                var /* [auto-meaningful-name] */t$sent$widget
                return _RegeneratorRuntime.wrap(function (t) {
                  for (;;) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2
                        return $$_$$_$$_$$_$$_src_shared_widget_custom_load.r(n, e.startsWith($$_$$_$$_$$_$$_src_shared_widget_custom_type.a), $$_$$_$$_$$_$$_src_shared_widget_custom_externalModule.require)
                      case 2:
                        t$sent = t.sent
                        t$sent$types = t$sent.types
                        t$sent$widget = t$sent.widget
                        r[e] = t$sent$widget
                        $$_$$_$$_$$_$$_src_shared_widget_custom_storage.a({
                          type: e,
                          types: t$sent$types,
                          code: n
                        })
                      case 7:
                      case "end":
                        return t.stop()
                    }
                  }
                }, t)
              }))).apply(this, arguments)
            }
            i = function (t, e) {
              return o.apply(this, arguments)
            }
            r = {}
            t.next = 5
            return Promise.all(e.map(function (t) {
              var /* [auto-meaningful-name] */t$type = t.type
              var /* [auto-meaningful-name] */t$code = t.code
              return i(t$type, t$code)
            }))
          case 5:
            for (a in n) {
              s = n[a]
              s$type = s.type
              if ($$_$$_$$_$$_$$_src_shared_widget_custom_load.q(s$type)) {
                f = $$_$$_$$_$$_shared_1531_2584_6.a($$_$$_$$_$$_shared_1531_2584_6.a({}, s.attributes), {}, {
                  __widgetId: s.id,
                  __widgetType: s.type,
                  __width: s.size.width,
                  __height: s.size.height
                })
                h = r[s$type]
                p = new h(f)
                $$_$$_$$_$$_shared_1531_2584_21_index.addWidgetInstance(s.id, p)
              }
            }
          case 6:
          case "end":
            return t.stop()
        }
      }
    }, t)
  }))).apply(this, arguments)
}
function Ge(t) {
  for (var e in t) {
    var n = t[e]
    var /* [auto-meaningful-name] */n$type = n.type
    if (Pe[n$type]) {
      var i = $$_$$_$$_$$_shared_1531_2584_6.a($$_$$_$$_$$_shared_1531_2584_6.a({}, n.attributes), {}, {
        __widgetId: n.id,
        __widgetType: n.type,
        __width: n.size.width,
        __height: n.size.height
      })
      var o = new (0, Pe[n$type])(i)
      $$_$$_$$_$$_shared_1531_2584_21_index.addWidgetInstance(n.id, o)
    }
  }
}
function ze(t) {
  return Ye.apply(this, arguments)
}
function Ye() {
  return (Ye = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function t(e) {
    var n
    var /* [auto-meaningful-name] */e$blockCode
    var /* [auto-meaningful-name] */e$shouldOpenEmulator
    var /* [auto-meaningful-name] */e$extensionWidgetList
    var /* [auto-meaningful-name] */e$unsafeExtensionWidgetList
    var /* [auto-meaningful-name] */e$fontFileMap
    var d
    var f
    var /* [auto-meaningful-name] */d$widgetMap
    var p
    var /* [auto-meaningful-name] */t$sent
    var b
    var g
    return _RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            if (n = e.id, e$blockCode = e.blockCode, e$shouldOpenEmulator = e.shouldOpenEmulator, e$extensionWidgetList = e.extensionWidgetList, e$unsafeExtensionWidgetList = e.unsafeExtensionWidgetList, e$fontFileMap = e.fontFileMap, d = $$_$$_$$_$$_shared_1531_2584_296.a(e, ["id", "blockCode", "shouldOpenEmulator", "extensionWidgetList", "unsafeExtensionWidgetList", "fontFileMap"]), (f = e.apiToken || e["x-coconut-authorization"] || "") || console.warn("api token not set. some api call may fail."), Ge(d$widgetMap = d.widgetMap), p = [], !(null === e$extensionWidgetList || undefined === e$extensionWidgetList ? undefined : e$extensionWidgetList.length)) {
              t.next = 11
              break
            }
            t.next = 9
            return Fe(e$extensionWidgetList)
          case 9:
            t$sent = t.sent
            p.push.apply(p, $$_$$_$$_$$_shared_1531_2584_25_index.a(t$sent))
          case 11:
            if ((null === e$unsafeExtensionWidgetList || undefined === e$unsafeExtensionWidgetList ? undefined : e$unsafeExtensionWidgetList.length) && p.push.apply(p, $$_$$_$$_$$_shared_1531_2584_25_index.a(e$unsafeExtensionWidgetList)), !p.length) {
              t.next = 15
              break
            }
            t.next = 15
            return He(p, d$widgetMap)
          case 15:
            $$_$$_$$_$$_shared_1531_2584_48_index.b(d)
            if (e$shouldOpenEmulator) {
              Be()
            }
            $$_$$_$$_$$_shared_1531_2584_21_index.initializeRoom({
              workId: n,
              context: {
                authorization: f,
                device: {
                  groupId: Ue(),
                  platform: $$_$$_$$_$$_shared_1531_2584_28_index.l(),
                  origin: "coconut"
                }
              }
            })
            $$_$$_$$_$$_shared_1531_2584_21_index.initializeFontFamily(e$fontFileMap)
            $$_$$_$$_$$_shared_1531_2584_21_index.initializeLocalStorage(n, d.widgetMap)
            $$_$$_$$_$$_shared_1531_2584_21_index.initializeHttpClient(d.widgetMap)
            $$_$$_$$_$$_shared_1531_2584_21_index.initializeCloudDBWidget(d.widgetMap)
            $$_$$_$$_$$_shared_1531_2584_21_index.initializeCloudTableDataMap(d.widgetMap)
            t.next = 25
            return $$_$$_$$_$$_shared_1531_2584_21_index.initializeGridMap(d.widgetMap)
          case 25:
            if (b = Object.values(d.widgetMap), !b.some(function (t) {
              return "EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type || "UNSAFE_EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type
            })) {
              t.next = 30
              break
            }
            t.next = 30
            return $$_$$_$$_$$_shared_1531_2584_15.ab("https://static.codemao.cn/appcraft/modules/quilljs/1.3.7/quill.snow.css")
          case 30:
            window.eval = function () {}
            g = $$_$$_$$_$$_shared_1531_2584_21_index.generateAsyncScheduler()
            new Function("Coco", "CocoExtension", "asyncScheduler", "AsyncScheduler", e$blockCode)($$_$$_$$_$$_shared_1531_2584_21_index, $$_$$_$$_$$_$$_src_shared_widget_custom_externalModule, g, $$_$$_$$_$$_shared_1531_2584_21_index.AsyncScheduler)
            $$_$$_$$_$$_shared_1531_2584_21_index.subscribeSensor()
            window.addEventListener("message", function (t) {
              var /* [auto-meaningful-name] */t$data = t.data
              if ("deviceEvent" === t$data.type) {
                $$_$$_$$_$$_shared_1531_2584_21_index.emitEvent.apply($$_$$_$$_$$_shared_1531_2584_21_index, $$_$$_$$_$$_shared_1531_2584_25_index.a(t$data.args))
              }
            })
          case 35:
          case "end":
            return t.stop()
        }
      }
    }, t)
  }))).apply(this, arguments)
}
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_676)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_677_index)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_678_index)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_679)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_671)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_680)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_681)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_672)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_673)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_674)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1531_2584_675)
var _a
_a = _React.memo(function (t) {
  var e = React.useState(false)
  var n = $$_$$_$$_$$_shared_1531_2584_10_index.a(e, 2)
  var r = n[0]
  var i = n[1]
  var o = function () {
    var e = $$_$$_$$_$$_shared_1531_2584_7.a(_RegeneratorRuntime.mark(function e() {
      return _RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ue()
              e.next = 3
              return ze(t)
            case 3:
              i(true)
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  React.useEffect(function () {
    o()
  }, [])
  return r ? _React.createElement($$_$$_$$_$$_shared_1531_2584_16_index.a, {
    store: $$_$$_$$_$$_shared_1531_2584_48_index.a()
  }, _React.createElement(ke, null)) : null
})
export { _a as a }
export default _a
