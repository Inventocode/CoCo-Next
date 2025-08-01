"use strict";

var r;
var i;
var o = require("../../../../shared/1531/2584/25/index");
var a = require("../../../../shared/1531/2584/296");
var s = require("../../../../shared/1531/2584/1/index");
var u = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(s);
var c = require("../../../../shared/1531/2584/10/index");
var l = require("../../../../shared/1531/2584/6");
var d = require("../../../../shared/1531/2584/7");
var f = require("../../../../shared/1531/2584/0/index");
var h = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(f);
var p = require("../../../../shared/1531/2584/16/index");
var m = require("../../../../shared/1531/2584/38/2629");
var b = require("../../../../shared/1531/2584/186/index");
var g = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(b);
require("../../../../shared/1531/2584/710");
var v = require("../../../../shared/1531/2584/36/index");
var _ = require("../../../../shared/1531/2584/79");
var y = require("../../../../shared/1531/2584/98");
var O = require("../../../../shared/1531/2584/15/index");
var w = require("../../../../shared/1531/2584/676/index");
var E = require("../../../../shared/1531/2584/27");
var T = require("../../../../shared/1531/2584/40");
var j = require("../../../../shared/1531/2584/57/index");
var S = require("../../../../shared/1531/2584/58/index");
var A = require("../../../../shared/1531/2584/28/index");
var k = [];
var I = function () {};
var M = {
  callNumber: function (t) {
    if (Object(A.d)()) {
      window.cordova.plugins.phonedialer.call(t, I, function (t) {
        console.error("\u5e94\u7528\u9700\u8981\u5f00\u542f\u7535\u8bdd\u6743\u9650");
        var e = window.cordova.plugins.permissions;
        e.hasPermission(e.CALL_PHONE, function (t) {
          var e;
          if (!t.hasPermission) {
            if (!(null === (e = window.plugins.toast) || void 0 === e)) {
              e.showLongCenter("\u5e94\u7528\u9700\u8981\u5f00\u542f\u7535\u8bdd\u6743\u9650");
            }
          }
        });
      }, !1, !1);
    } else {
      window.location.href = "tel:".concat(t);
    }
  },
  dialNumber: function (t) {
    if (Object(A.d)()) {
      window.cordova.plugins.phonedialer.dial(t, I, function (t) {
        return console.error(t);
      }, !1);
    } else {
      window.location.href = "tel:".concat(t);
    }
  },
  onCall: function (t) {
    var e;
    if (Object(A.d)()) {
      k.push(t);
      if (!(null === (e = window.CallTrap) || void 0 === e)) {
        e.onCall(function (t) {
          var e = t.state;
          k.forEach(function (t) {
            return t(e);
          });
        });
      }
    }
  }
};
var C = require("../../../../shared/1531/2584/48/72");
var x = require("../../../../shared/1531/2584/48/index");
var R = require("../../../../shared/1531/2584/38/217/index");
var N = require("../../../../shared/1531/2584/676/70");
var L = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var o;
    Object(E.a)(this, n);
    (o = e.call(this, t)).phoneNumber = void 0;
    o.oldState = "";
    o.isIncomingCall = !1;
    o.phoneNumber = t.phoneNumber;
    M.onCall(function (t) {
      switch (t) {
        case N.b.RINGING:
          o.emit("onReceivePhoneCall");
          break;
        case N.b.OFFHOOK:
          if (o.oldState === N.b.RINGING) {
            o.emit("onConnectReceivePhoneCall");
            o.isIncomingCall = !0;
          } else {
            if (o.__widgetId === r) {
              o.emit("onPhoneCallStart");
              o.isIncomingCall = !1;
            }
          }
          break;
        case "IDLE":
          if (o.oldState === N.b.RINGING) {
            o.emit("onPhoneCallEnd", N.a.INCOMING_CALL_REFUSE_END);
          } else {
            if (o.isIncomingCall && o.oldState === N.b.OFFHOOK) {
              o.emit("onPhoneCallEnd", N.a.INCOMING_CALL_CONNECT_END);
            } else {
              if (!(o.isIncomingCall || o.oldState !== N.b.OFFHOOK)) {
                o.emit("onPhoneCallEnd", N.a.DIAL_OUT_CALL_END);
                i = !1;
              }
            }
          }
      }
      o.oldState = t;
    });
    return o;
  }
  Object(T.a)(n, [{
    key: "callNumber",
    value: function () {
      if (this.phoneNumber) {
        if (Object(A.g)()) {
          if (Object(x.a)().getState().emulatorPhoneInfo.callingPageVisible) {
            this.widgetWarn("callNumberRepeat");
          } else {
            Object(x.a)().dispatch(Object(C.s)({
              phoneDialWidgetId: this.__widgetId,
              callingPageVisible: !0,
              phoneNumber: this.phoneNumber,
              callType: "dialOutCall",
              callStatus: N.b.RINGING
            }));
            this.emit("onPhoneCallStart");
            Object(R.b)({
              phoneCallInfo: {
                callType: "dialOutCall",
                dialOutPhoneNumber: this.phoneNumber,
                callStatus: N.b.RINGING
              }
            });
          }
        } else {
          if (!Object(A.d)()) {
            r = this.__widgetId;
            M.callNumber(this.phoneNumber);
          }
          if (!i) {
            r = this.__widgetId;
            M.callNumber(this.phoneNumber);
            i = !0;
          }
        }
      } else {
        this.widgetWarn("phoneNumberNotEmpty");
      }
    }
  }, {
    key: "dialNumber",
    value: function () {
      if (Object(A.g)()) {
        if (Object(x.a)().getState().emulatorPhoneInfo.dialPageVisible) {
          this.widgetWarn("dialNumberRepeat");
        }
        return void Object(x.a)().dispatch(Object(C.s)({
          phoneDialWidgetId: this.__widgetId,
          dialPageVisible: !0,
          phoneNumber: this.phoneNumber
        }));
      }
      r = this.__widgetId;
      M.dialNumber(this.phoneNumber);
    }
  }]);
  return n;
}(v.c);
var D = require("../../../../shared/1531/2584/677/index");
var B = {
  pickContact: function (t) {
    navigator.contacts.pickContact(function (e) {
      var n = e.displayName;
      var r = "";
      var i = [];
      if (e.phoneNumbers) {
        r = e.phoneNumbers[0].value;
        e.phoneNumbers.forEach(function (t) {
          return i.push(t.value);
        });
      }
      var o = "";
      if (e.photos) {
        o = e.photos[0].value;
      }
      t(n, r, i, o);
    }, function (t) {
      console.error("\u5e94\u7528\u9700\u8981\u5f00\u542f\u901a\u8baf\u5f55\u6743\u9650");
      var e = window.cordova.plugins.permissions;
      e.hasPermission(e.READ_CONTACTS, function (t) {
        var e;
        if (!t.hasPermission) {
          if (!(null === (e = window.plugins.toast) || void 0 === e)) {
            e.showLongCenter("\u5e94\u7528\u9700\u8981\u5f00\u542f\u901a\u8baf\u5f55\u6743\u9650");
          }
        }
      });
    });
  }
};
var P = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this, t)).contactName = void 0;
    r.phoneNumber = void 0;
    r.contactAvatar = void 0;
    r.phoneNumberList = void 0;
    r.contactName = t.contactName;
    r.phoneNumber = t.phoneNumber;
    r.contactAvatar = t.phoneNumber;
    r.phoneNumberList = t.phoneNumberList;
    return r;
  }
  Object(T.a)(n, [{
    key: "pickContact",
    value: function () {
      var t = this;
      if (Object(A.d)()) {
        B.pickContact(function (e, n, r, i) {
          t.contactName = e;
          t.phoneNumber = n;
          t.contactAvatar = i;
          t.phoneNumberList = r;
          t.emit("onContactPickerSelected", e, n, r);
        });
      } else {
        Object(x.a)().dispatch(Object(C.s)({
          contactWidgetId: this.__widgetId,
          contactPageVisible: !0
        }));
      }
    }
  }]);
  return n;
}(v.c);
var U = require("../../../../shared/1531/2584/678/index");
var W = [];
var H = function () {};
var F = {
  openMessage: function (t, e) {
    if (t) {
      if (Object(A.d)()) {
        window.sms.send(t, e, {
          replaceLineBreaks: !1,
          android: {
            intent: "INTENT"
          }
        }, H, H);
      } else {
        if (Object(A.b)()) {
          window.location.href = "sms:".concat(t, "?body=").concat(e);
        } else {
          window.location.href = "sms:".concat(t, "&body=").concat(e);
        }
      }
    }
  },
  sendMessage: function (t, e, n, r) {
    if (Object(A.d)()) {
      window.sms.send(t, e, {
        replaceLineBreaks: !1,
        android: {
          intent: ""
        }
      }, function () {
        return n(e, t);
      }, function () {
        r(e, t);
        console.error("\u5e94\u7528\u9700\u8981\u5f00\u542f\u77ed\u4fe1\u6743\u9650");
        var n = window.cordova.plugins.permissions;
        n.hasPermission(n.SEND_SMS, function (t) {
          var e;
          if (!t.hasPermission) {
            if (!(null === (e = window.plugins.toast) || void 0 === e)) {
              e.showLongCenter("\u5e94\u7528\u9700\u8981\u5f00\u542f\u77ed\u4fe1\u6743\u9650");
            }
          }
        });
      });
    } else {
      if (Object(A.b)()) {
        window.location.href = "sms:".concat(t, "?body=").concat(e);
      } else {
        window.location.href = "sms:".concat(t, "&body=").concat(e);
      }
    }
  },
  startWatchReceiveSms: function () {
    var t;
    if (Object(A.d)()) {
      if (!(null === (t = window.SMSReceive) || void 0 === t)) {
        t.startWatch(H, function () {
          return console.warn("sms receive: failed to start watching");
        });
      }
    }
  },
  onCall: function (t) {
    if (Object(A.d)()) {
      W.push(t);
      document.addEventListener("onSMSArrive", function (t) {
        var e = t.data;
        W.forEach(function (t) {
          return t(e.body, e.address);
        });
      });
    }
  }
};
var V = !1;
var G = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this, t)).phoneNumber = void 0;
    r.smsContent = void 0;
    r.phoneNumber = t.phoneNumber;
    r.smsContent = t.smsContent;
    if (!V) {
      F.startWatchReceiveSms();
      V = !0;
    }
    F.onCall(function (t, e) {
      r.emit("onReceiveSms", t, e);
    });
    return r;
  }
  Object(T.a)(n, [{
    key: "sendSms",
    value: function () {
      var t = this;
      if (this.phoneNumber) {
        if (this.smsContent) {
          return Object(A.g)() ? (this.emit("onSendSmsSuccess", this.smsContent, this.phoneNumber), void this.widgetLog("sendSmsLog", {
            phoneNumber: this.phoneNumber
          })) : void F.sendMessage(this.phoneNumber, this.smsContent, function (e, n) {
            return t.emit("onSendSmsSuccess", e, n);
          }, function (e, n) {
            return t.emit("onSendSmsFailed", e, n);
          });
        }
        this.widgetWarn("smsContentNotEmpty");
      } else {
        this.widgetWarn("smsNumberNotEmpty");
      }
    }
  }, {
    key: "openSms",
    value: function () {
      if (Object(A.g)()) {
        Object(x.a)().dispatch(Object(C.s)({
          smsWidgetId: this.__widgetId,
          sendSmsPageVisible: !0,
          sendSmsNumber: this.phoneNumber,
          sendSmsContent: this.smsContent
        }));
      } else {
        F.openMessage(this.phoneNumber, this.smsContent);
      }
    }
  }]);
  return n;
}(v.c);
var Y = require("../../../../shared/1531/2584/679");
var z = require("../../../../shared/1531/2584/75/index");
var K = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(z);
var q = require("../../../../shared/1531/2584/8");
var X = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(q);
var J = require("../../../../shared/1531/2584/51/index");
var Z = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(J);
var Q = require("../../../../shared/1531/2584/189");
var $ = require("../../../../shared/1531/2584/204");
function tt(t, e) {
  return [Object($.default)({
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
        e();
      }
    }
  })];
}
var et;
var nt = require("../../../../shared/1531/2584/233/324");
var rt = require("./138");
var it = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(rt);
var ot = "COCO_PLAYER_DIALOG";
!function (t) {
  t.MESSAGE = "MESSAGE";
  t.SELECT = "SELECT";
  t.PROMPT = "PROMPT";
}(et || (et = {}));
var at = {
  style: Q.b.styleA,
  currentDialogId: "",
  dialogArr: [],
  dialogPropMap: new Map(),
  addDialog: function (t) {
    var e = m.a();
    if (this.dialogArr.push(e), this.dialogPropMap.set(e, t), 1 === this.dialogArr.length) {
      var n = this.dialogArr[0];
      this.showDialog(n);
    } else {
      var r = this.dialogArr[this.dialogArr.length - 1];
      this.showDialog(r);
    }
    return e;
  },
  showDialog: function (t) {
    var e = this.dialogPropMap.get(t);
    if (e) {
      switch (e.type) {
        case et.MESSAGE:
          this._message(e);
          break;
        case et.SELECT:
          this._select(e);
          break;
        case et.PROMPT:
          this._prompt(e);
      }
    }
  },
  setStyle: function (t) {
    at.style = t;
  },
  setThemeColor: function (t) {
    var e = Object(O.hb)(t, .4);
    var n = Object(O.hb)(t, .04);
    var r = Object(O.ib)(t, .3);
    var i = Z()(t).toString();
    document.documentElement.style.setProperty("--dialog-theme-color", i);
    document.documentElement.style.setProperty("--dialog-theme-color-medium", e);
    document.documentElement.style.setProperty("--dialog-theme-color-light", n);
    document.documentElement.style.setProperty("--dialog-theme-color-dark", r);
  },
  getContainer: function () {
    var t = document.getElementById("COCO_PLAYER_DIALOG_CONTAINER");
    if (!t) {
      (t = document.createElement("div")).id = "COCO_PLAYER_DIALOG_CONTAINER";
      var e = document.getElementById(nt.a);
      if (e) {
        e.appendChild(t);
      }
    }
    t.style.opacity = "1";
    t.className = it.a.container;
    return t;
  },
  cancel: function (t) {
    var e = at.dialogArr[0];
    var n = at.dialogPropMap.get(e);
    if (!(null === n || void 0 === n)) {
      n.onCancel(t);
    }
    at.close();
  },
  confirm: function (t) {
    var e = at.dialogArr[0];
    var n = at.dialogPropMap.get(e);
    if (!(null === n || void 0 === n)) {
      n.onConfirm(t);
    }
    at.close();
  },
  submit: function () {
    var t = document.getElementById("COCO_PLAYER_DIALOG_INPUT");
    var e = null === t || void 0 === t ? void 0 : t.value;
    var n = at.dialogArr[0];
    var r = at.dialogPropMap.get(n);
    if (!(null === r || void 0 === r)) {
      r.onConfirm(e);
    }
    at.close();
  },
  close: function () {
    var t = this;
    var e = this.dialogArr.shift();
    if (e) {
      this.dialogPropMap.delete(e);
    }
    var n = at.getContainer();
    if (this.dialogArr.length) {
      tt(ot, function () {
        K.a.unmountComponentAtNode(n);
        var e = t.dialogArr[0];
        t.showDialog(e);
      });
    } else {
      tt(ot, function () {
        var t;
        var e;
        t = "COCO_PLAYER_DIALOG_CONTAINER";
        e = function () {
          n.classList.remove(it.a.container);
        };
        Object($.default)({
          targets: "#".concat(t),
          opacity: 0,
          duration: 300,
          easing: "linear",
          complete: function () {
            if (e) {
              e();
            }
          }
        });
        K.a.unmountComponentAtNode(n);
      });
    }
  },
  getContentBox: function (t, e, n, r, i, o) {
    var a;
    if (t === et.PROMPT) {
      a = !n && !r && !e;
    } else {
      var s = Number(!!e) + Number(!!n) + Number(!!r);
      a = 0 === s || 1 === s;
    }
    var u = "";
    u = this.style === Q.b.styleA ? t === et.SELECT ? i ? "346px" : "400px" : "454px" : "472px";
    var c = "";
    c = a ? this.style === Q.b.styleA ? "39px 0" : "42px 0" : e ? "16px 0" : "24px 0 16px 0";
    return h.a.createElement("div", {
      style: {
        maxHeight: u,
        padding: c
      },
      className: X()(a && it.a.singleElementContentBox, !a && it.a.contentBox)
    }, e && h.a.createElement("div", {
      style: {
        background: "url(".concat(e, ") no-repeat"),
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      className: it.a.imageBox
    }), n && h.a.createElement("p", {
      className: X()(it.a.title)
    }, n), r && h.a.createElement("p", {
      className: it.a.textBox
    }, h.a.createElement("span", {
      className: it.a.text
    }, r)), t === et.PROMPT && h.a.createElement("div", {
      className: it.a.inputBox
    }, h.a.createElement("input", {
      id: "COCO_PLAYER_DIALOG_INPUT",
      className: it.a.dialogInput,
      placeholder: o
    })));
  },
  getButtonBox: function (t, e, n) {
    var r = t === et.MESSAGE ? n || "" : "\u786e\u5b9a";
    return h.a.createElement("div", {
      className: it.a.buttonBox
    }, e && h.a.createElement("button", {
      className: X()(it.a.button, it.a.cancelButton),
      onClick: this.cancel.bind(null, "\u53d6\u6d88")
    }, h.a.createElement("span", null, "\u53d6\u6d88")), h.a.createElement("button", {
      className: X()(it.a.button, it.a.mainButton),
      style: {
        width: this.style === Q.b.styleA ? e ? "133px" : "100%" : "fit-content"
      },
      onClick: t === et.PROMPT ? this.submit : this.confirm.bind(null, r)
    }, h.a.createElement("span", null, r)));
  },
  message: function (t, e, n) {
    at.addDialog({
      type: et.MESSAGE,
      params: t,
      onConfirm: e,
      onCancel: n
    });
  },
  _message: function (t) {
    var e = t.params;
    var n = e.title;
    var r = e.text;
    var i = e.confirmButtonText;
    var o = e.image;
    var a = e.showCancelButton;
    var s = this.getContainer();
    var u = this.getContentBox(et.MESSAGE, o, n, r, a);
    var c = this.getButtonBox(et.MESSAGE, a, i);
    var l = h.a.createElement("div", {
      id: ot,
      className: X()(it.a.dialog, this.style === Q.b.styleA ? it.a.styleA : it.a.styleB)
    }, u, c);
    K.a.render(l, s);
  },
  select: function (t, e, n) {
    at.addDialog({
      type: et.SELECT,
      params: t,
      onConfirm: e,
      onCancel: n
    });
  },
  _select: function (t) {
    var e = t.params;
    var n = e.title;
    var r = e.text;
    var i = e.option1;
    var o = e.option2;
    var a = e.showCancelButton;
    var s = this.getContainer();
    var u = this.getContentBox(et.SELECT, "", n, r, a);
    var c = h.a.createElement("div", {
      id: ot,
      className: X()(it.a.dialog, this.style === Q.b.styleA ? it.a.styleA : it.a.styleB)
    }, u, h.a.createElement("div", {
      className: it.a.optionButtonBox,
      style: {
        height: this.style === Q.b.styleA ? a ? "174px" : "120px" : "48px",
        justifyContent: this.style !== Q.b.styleB || a ? void 0 : "flex-end"
      }
    }, a && this.style === Q.b.styleB && h.a.createElement("button", {
      className: X()(it.a.button, it.a.cancelButton),
      onClick: this.cancel.bind(null, "")
    }, h.a.createElement("span", null, "\u53d6\u6d88")), h.a.createElement("div", null, h.a.createElement("button", {
      className: X()(it.a.button, it.a.mainButton),
      onClick: this.confirm.bind(null, i)
    }, h.a.createElement("span", null, i)), h.a.createElement("button", {
      className: X()(it.a.button, it.a.mainButton),
      onClick: this.confirm.bind(null, o)
    }, h.a.createElement("span", null, o))), a && this.style === Q.b.styleA && h.a.createElement("button", {
      className: X()(it.a.button, it.a.cancelButton),
      onClick: this.cancel.bind(null, "")
    }, h.a.createElement("span", null, "\u53d6\u6d88"))));
    K.a.render(c, s);
  },
  prompt: function (t, e, n) {
    this.addDialog({
      type: et.PROMPT,
      params: t,
      onConfirm: e,
      onCancel: n
    });
  },
  _prompt: function (t) {
    var e = t.params;
    var n = e.title;
    var r = e.text;
    var i = e.placeholder;
    var o = e.showCancelButton;
    var a = this.getContainer();
    var s = this.getContentBox(et.PROMPT, "", n, r, o, i);
    var u = this.getButtonBox(et.PROMPT, o);
    var c = h.a.createElement("div", {
      id: ot,
      className: X()(it.a.dialog, this.style === Q.b.styleA ? it.a.styleA : it.a.styleB)
    }, s, u);
    K.a.render(c, a);
  }
};
var st = at;
var ut = require("../../../../shared/1531/2584/21/index");
var ct = require("../../../../shared/1531/2584/9");
var lt = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this, t)).style = void 0;
    r.themeColor = void 0;
    r.title = void 0;
    r.text = void 0;
    r.image = void 0;
    r.selectedOption = void 0;
    r.inputText = void 0;
    r.style = t.style;
    r.themeColor = t.themeColor;
    r.title = t.title;
    r.text = t.text;
    r.image = t.image;
    r.selectedOption = t.selectedOption;
    r.inputText = t.inputText;
    return r;
  }
  Object(T.a)(n, [{
    key: "message",
    value: function (t, e, n, r, i) {
      var o = this;
      this.title = t;
      this.text = e;
      this.image = r;
      st.setStyle(this.style);
      st.setThemeColor(this.themeColor);
      var a = Object(x.a)().getState().imageFileMap.get(r);
      var s = Object(O.U)(r) ? r : a ? Object(ct.lb)(a) : "";
      var u = function (t) {
        Object(ut.emitWidgetEvent)(Q.a, "onClickButton", o.__widgetId, t);
      };
      st.message({
        title: t,
        text: e,
        confirmButtonText: String(n),
        image: s || "",
        showCancelButton: i
      }, u, u);
    }
  }, {
    key: "select",
    value: function (t, e, n, r, i) {
      var o = this;
      this.title = t;
      this.text = e;
      st.setStyle(this.style);
      st.setThemeColor(this.themeColor);
      st.select({
        title: t,
        text: e,
        option1: String(n),
        option2: String(r),
        showCancelButton: i
      }, function (t) {
        o.selectedOption = t;
        Object(ut.emitWidgetEvent)(Q.a, "onSelectOption", o.__widgetId, t);
      }, function () {
        Object(ut.emitWidgetEvent)(Q.a, "onCancelSelection", o.__widgetId);
      });
    }
  }, {
    key: "prompt",
    value: function (t, e, n, r) {
      var i = this;
      this.title = t;
      this.text = e;
      st.setStyle(this.style);
      st.setThemeColor(this.themeColor);
      st.prompt({
        title: t,
        text: e,
        placeholder: String(n),
        showCancelButton: r
      }, function (t) {
        i.inputText = t;
        Object(ut.emitWidgetEvent)(Q.a, "onFinishInput", i.__widgetId, t);
      }, function () {
        Object(ut.emitWidgetEvent)(Q.a, "onCancelInput", i.__widgetId);
      });
    }
  }]);
  return n;
}(v.c);
var dt = require("../../../../shared/1531/2584/671");
var ft = require("../../../../shared/1531/2584/36/345/553/index");
var ht = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(ft);
var pt = {
  "7%": "L",
  "15%": "M",
  "25%": "Q",
  "30%": "H"
};
var mt = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this, t)).image = "";
    r.width = 300;
    r.dark = void 0;
    r.light = void 0;
    r.errorCorrectionLevel = void 0;
    r.margin = void 0;
    r.dark = t.dark;
    r.light = t.light;
    r.errorCorrectionLevel = t.errorCorrectionLevel;
    r.margin = t.margin;
    return r;
  }
  Object(T.a)(n, [{
    key: "textToDataUrl",
    value: function (t) {
      var e;
      var n = this;
      if (t) {
        ht.a.toDataURL(t, {
          width: this.width,
          color: {
            dark: this.dark,
            light: this.light
          },
          margin: this.margin,
          errorCorrectionLevel: (e = this.errorCorrectionLevel, pt[e] || "M")
        }).then(function (t) {
          n.image = t;
          n.emit("onDataUrlSuccess", t);
        }).catch(function (t) {
          n.image = "";
          if ("The amount of data is too big to be stored in a QR Code" === t.message) {
            n.widgetError("tooLongText");
          }
          console.error("QRCode.toDataURL error", t);
        });
      } else {
        this.widgetError("textIsEmpty");
      }
    }
  }, {
    key: "urlToDataUrl",
    value: function (t) {
      this.textToDataUrl(t);
    }
  }]);
  return n;
}(v.c);
var bt = require("../../../../shared/1531/2584/680");
var gt = require("../../../../shared/1531/2584/36/345/392");
var vt = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this, t)).stride = void 0;
    r.stepCount = void 0;
    r.isStopStep = void 0;
    r.stepInStopTime = 0;
    r.stride = t.stride;
    r.stepCount = t.stepCount;
    r.resetStepCount();
    return r;
  }
  Object(T.a)(n, [{
    key: "startStepUpdate",
    value: function () {
      var t = this;
      if (!Object(A.g)()) {
        var e = 0;
        gt.default.start(function (n) {
          if (t.isStopStep && ++e % 2 === 0) {
            t.isStopStep = !1;
            t.stepInStopTime = n - t.stepCount;
            e = 0;
          }
          if (t.stepCount !== n - t.stepInStopTime) {
            t.emit("onStepCountChange", n - t.stepInStopTime);
            t.stepCount = n - t.stepInStopTime;
          }
          if (void 0 === t.isStopStep) {
            t.isStopStep = !1;
          }
        }, function () {
          return t.emit("onPedometerNotAvailable");
        }, function () {
          return t.emit("onPedometerPermissionFail");
        });
      }
    }
  }, {
    key: "stopStepUpdate",
    value: function () {
      if (!Object(A.g)()) {
        gt.default.stop();
        this.isStopStep = !0;
      }
    }
  }, {
    key: "resetStepCount",
    value: function () {
      var t = this;
      if (!Object(A.g)()) {
        this.stepCount = 0;
        this.stepInStopTime = 0;
        this.emit("onStepCountChange", 0);
        gt.default.reset(function () {
          if (!1 === t.isStopStep) {
            t.startStepUpdate();
          }
        });
      }
    }
  }]);
  return n;
}(v.c);
var _t = require("../../../../shared/1531/2584/681");
var yt = require("./721/index");
var Ot = require("./81/index");
function wt() {
  var t = new Map();
  var e = [Ot.BarcodeFormat.QR_CODE];
  t.set(Ot.DecodeHintType.POSSIBLE_FORMATS, e);
  return new yt.BrowserQRCodeReader(t);
}
function Et() {
  return window.QRScanner;
}
var Tt;
var jt = require("../../../../shared/1531/2584/23");
var St = require("./249");
var At = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(St);
function kt(t) {
  switch (t) {
    case Tt.UNEXPECTED_ERROR:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.UnexpectedError");
    case Tt.CAMERA_ACCESS_DENIED:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.CameraAccessDenied");
    case Tt.CAMERA_ACCESS_RESTRICTED:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.CameraAccessRestricted");
    case Tt.BACK_CAMERA_UNAVAILABLE:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.BackCameraUnavailable");
    case Tt.FRONT_CAMERA_UNAVAILABLE:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.FrontCameraUnavailable");
    case Tt.CAMERA_UNAVAILABLE:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.CameraUnavailable");
    case Tt.SCAN_CANCELED:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.ScanCanceled");
    case Tt.LIGHT_UNAVAILABLE:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.LightUnavailable");
    case Tt.OPEN_SETTINGS_UNAVAILABLE:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.SettingsUnavailable");
    case Tt.NOT_FOUND:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.NotFound");
    default:
      return Object(jt.c)(jt.b, "ScanQrCode.Error.UnexpectedError");
  }
}
!function (t) {
  t[t.UNEXPECTED_ERROR = 0] = "UNEXPECTED_ERROR";
  t[t.CAMERA_ACCESS_DENIED = 1] = "CAMERA_ACCESS_DENIED";
  t[t.CAMERA_ACCESS_RESTRICTED = 2] = "CAMERA_ACCESS_RESTRICTED";
  t[t.BACK_CAMERA_UNAVAILABLE = 3] = "BACK_CAMERA_UNAVAILABLE";
  t[t.FRONT_CAMERA_UNAVAILABLE = 4] = "FRONT_CAMERA_UNAVAILABLE";
  t[t.CAMERA_UNAVAILABLE = 5] = "CAMERA_UNAVAILABLE";
  t[t.SCAN_CANCELED = 6] = "SCAN_CANCELED";
  t[t.LIGHT_UNAVAILABLE = 7] = "LIGHT_UNAVAILABLE";
  t[t.OPEN_SETTINGS_UNAVAILABLE = 8] = "OPEN_SETTINGS_UNAVAILABLE";
  t[t.NOT_FOUND = 9] = "NOT_FOUND";
}(Tt || (Tt = {}));
var It = require("./898");
var Mt = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(It);
var Ct = require("./899");
var xt = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(Ct);
var Rt = require("./900");
var Nt = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(Rt);
var Lt = require("./613");
var Dt = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(Lt);
var Bt = require("./901");
var Pt = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(Bt);
var Ut = require("./902");
var Wt = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(Ut);
var Ht = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n() {
    var t;
    Object(E.a)(this, n);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (t = e.call.apply(e, [this].concat(i))).previewPage = void 0;
    t.QRCodeReader = wt();
    t.QRCodeScanner = Et();
    return t;
  }
  Object(T.a)(n, [{
    key: "showCameraPreview",
    value: function () {
      document.body.style.backgroundColor = "rgba(255, 255, 255, 0)";
      var t = document.getElementById("root");
      if (t) {
        t.style.opacity = "0";
      }
      var e = this.getPreviewPage();
      document.body.appendChild(e);
    }
  }, {
    key: "hideCameraPreview",
    value: function () {
      document.body.style.backgroundColor = "";
      var t = document.getElementById("root");
      if (t) {
        t.style.opacity = "1";
      }
      var e = document.getElementById("SCANNER_PREVIEW_CONTAINER_ID");
      if (e) {
        this.hideErrorMessage();
        document.body.removeChild(e);
      }
    }
  }, {
    key: "showErrorMessage",
    value: function () {
      if (this.previewPage) {
        var t = this.previewPage.children[0];
        t.classList.remove(At.a.scanning);
        t.style.display = "none";
        this.previewPage.children[1].style.display = "none";
        this.previewPage.children[2].style.display = "block";
      }
    }
  }, {
    key: "hideErrorMessage",
    value: function () {
      if (this.previewPage) {
        var t = this.previewPage.children[0];
        t.className = At.a.scanning;
        t.style.display = "block";
        this.previewPage.children[1].style.display = "block";
        this.previewPage.children[2].style.display = "none";
        this.previewPage.children[5].src = Dt.a;
      }
    }
  }, {
    key: "getPreviewPage",
    value: function () {
      var t = this;
      if (!this.previewPage) {
        var e = function () {
          var e = Object(d.a)(u.a.mark(function e() {
            return u.a.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    return Object(ut.getCameraChoosePhoto)(function () {
                      var e = Object(d.a)(u.a.mark(function e(n) {
                        return u.a.wrap(function (e) {
                          for (;;) {
                            switch (e.prev = e.next) {
                              case 0:
                                t.QRCodeScanner.disableLight();
                                t.QRCodeScanner.destroy();
                                t.hideCameraPreview();
                                e.next = 5;
                                return t.decodeImage(n);
                              case 5:
                              case "end":
                                return e.stop();
                            }
                          }
                        }, e);
                      }));
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }(), "");
                  case 2:
                  case "end":
                    return e.stop();
                }
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }();
        var n = "\n        <img class=".concat(At.a.scanning, " src=").concat(Mt.a, " />\n        <p class=").concat(At.a.text, ">\n          ").concat(Object(jt.c)(jt.b, "ScanQrCode.tip"), "\n        </p>\n        <div class=").concat(At.a.error, ' style="display:none;">\n          <div>\n            <img src=').concat(Nt.a, ' />\n            <p>\u7f51\u7edc\u4e0d\u4f73\uff0c\u4e8c\u7ef4\u7801\u8bc6\u522b\u5931\u8d25</p>\n          </div>\n        </div>\n        <div class="').concat(At.a.largeBtn, " ").concat(At.a.photoBtn, '">\n          <img src=').concat(Wt.a, ' />\n        </div>\n        <div class="').concat(At.a.smallBtn, " ").concat(At.a.returnBtn, '">\n          <img src=').concat(xt.a, ' />\n        </div>\n        <div class="').concat(At.a.largeBtn, " ").concat(At.a.lightBtn, '">\n          <img src=').concat(Dt.a, " />\n        </div>\n      ");
        var r = document.createElement("div");
        r.id = "SCANNER_PREVIEW_CONTAINER_ID";
        r.className = At.a.container;
        r.innerHTML = n;
        this.previewPage = r;
        this.previewPage.children[3].onclick = e;
        this.previewPage.children[4].onclick = function () {
          t.QRCodeScanner.disableLight();
          t.QRCodeScanner.destroy();
          t.hideCameraPreview();
        };
        this.previewPage.children[5].onclick = function () {
          t.QRCodeScanner.getStatus(function (e) {
            if (e.lightEnabled) {
              t.QRCodeScanner.disableLight(function (e) {
                if (e) {
                  t.emit("onScanError", kt(e.code));
                } else {
                  var n = document.getElementsByClassName(At.a.lightBtn)[0];
                  if (n) {
                    n.innerHTML = "<img src=".concat(Dt.a, " />");
                  }
                }
              });
            } else {
              t.QRCodeScanner.enableLight(function (e) {
                if (e) {
                  t.emit("onScanError", kt(e.code));
                } else {
                  var n = document.getElementsByClassName(At.a.lightBtn)[0];
                  if (n) {
                    n.innerHTML = "<img src=".concat(Pt.a, " />");
                  }
                }
              });
            }
          });
        };
      }
      return this.previewPage;
    }
  }, {
    key: "scan",
    value: function () {
      var t = this;
      if (Object(A.d)()) {
        this.QRCodeScanner.prepare(function (e, n) {
          if (e) {
            t.showErrorMessage();
            return void t.emit("onScanError", kt(e.code));
          }
          t.QRCodeScanner.scan(function (e, n) {
            if (e) {
              t.showErrorMessage();
              return void t.emit("onScanError", kt(e.code));
            }
            t.hideCameraPreview();
            t.emit("onScanSuccess", n);
          });
          t.QRCodeScanner.show();
          t.showCameraPreview();
        });
      } else {
        this.widgetError("PlatformNotSupport");
      }
    }
  }, {
    key: "decodeImage",
    value: function () {
      var t = Object(d.a)(u.a.mark(function t(e) {
        var n;
        var r;
        return u.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                (n = document.createElement("img")).src = e;
                n.crossOrigin = "Anonymous";
                t.prev = 3;
                t.next = 6;
                return this.QRCodeReader.decodeFromImageElement(n);
              case 6:
                r = t.sent;
                this.emit("onScanSuccess", r.getText());
                t.next = 13;
                break;
              case 10:
                t.prev = 10;
                t.t0 = t.catch(3);
                if (t.t0 instanceof Ot.NotFoundException) {
                  this.emit("onScanError", kt(Tt.NOT_FOUND));
                } else {
                  this.emit("onScanError", kt(Tt.UNEXPECTED_ERROR));
                }
              case 13:
              case "end":
                return t.stop();
            }
          }
        }, t, this, [[3, 10]]);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }()
  }, {
    key: "scanImage",
    value: function () {
      var t = Object(d.a)(u.a.mark(function t(e) {
        var n;
        var r;
        var i;
        return u.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                n = "";
                if (Object(O.U)(e)) {
                  n = e;
                } else {
                  r = Object(x.a)().getState().imageFileMap;
                  i = r.get(e);
                  n = (null === i || void 0 === i ? void 0 : i.cdnUrl) || "";
                }
                this.decodeImage(n);
              case 3:
              case "end":
                return t.stop();
            }
          }
        }, t, this);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }()
  }]);
  return n;
}(v.c);
var Ft = require("../../../../shared/1531/2584/673");
var Vt = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n() {
    Object(E.a)(this, n);
    return e.apply(this, arguments);
  }
  return n;
}(v.d);
var Gt = require("../../../../shared/1531/2584/675");
var Yt = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n() {
    Object(E.a)(this, n);
    return e.apply(this, arguments);
  }
  return n;
}(v.d);
var zt = require("../../../../shared/1531/2584/36/345/114");
var Kt = require("../../../../shared/1531/2584/14");
var qt = require("../../../../shared/1531/2584/116");
var Xt = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this, t)).templateMode = void 0;
    r.templateMode = t.templateMode;
    return r;
  }
  Object(T.a)(n, [{
    key: "setTemplateMode",
    value: function (t, e) {
      this.setProps({
        backgroundMode: qt.a.TEMPLATE,
        templateMode: t,
        backgroundColor: e
      });
    }
  }, {
    key: "setBackgroundImage",
    value: function (t) {
      var e = Object(zt.b)(t);
      if (e) {
        this.setProps({
          backgroundMode: qt.a.IMAGE,
          backgroundImage: e
        });
      } else {
        Kt.a.log({
          messageId: "imageNotExists",
          type: "error",
          widgetId: this.__widgetId
        });
      }
    }
  }]);
  return n;
}(v.d);
var Jt = require("../../../../shared/1531/2584/77");
var Zt = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this, t)).templateMode = void 0;
    r.templateMode = t.templateMode;
    return r;
  }
  Object(T.a)(n, [{
    key: "setTemplateMode",
    value: function (t, e) {
      this.setProps({
        backgroundMode: Jt.a.TEMPLATE,
        templateMode: t,
        backgroundColor: e
      });
    }
  }, {
    key: "setBackgroundImage",
    value: function (t) {
      var e = Object(zt.b)(t);
      if (e) {
        this.setProps({
          backgroundMode: Jt.a.IMAGE,
          backgroundImage: e
        });
      } else {
        Kt.a.log({
          messageId: "imageNotExists",
          type: "error",
          widgetId: this.__widgetId
        });
      }
    }
  }]);
  return n;
}(v.d);
var Qt = require("../../../../shared/1531/2584/672");
var $t = require("../../../../shared/1531/2584/674");
var te = require("../../../../shared/1531/2584/58/685");
var ee = window.WebSocket;
var ne = window.XMLHttpRequest;
var re = ne.prototype.open;
var ie = window.fetch;
var oe = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t, r) {
    var i;
    Object(E.a)(this, n);
    return new URL(t).hostname.includes("codemao") ? (i = e.call(this, "wss://websocket.com", r), Object(te.a)(i)) : e.call(this, t, r);
  }
  return n;
}(ee);
var ae = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n() {
    Object(E.a)(this, n);
    return e.apply(this, arguments);
  }
  Object(T.a)(n, [{
    key: "open",
    value: function (t, e, n, r, i) {
      return re.apply(this, [t, e, null === n || void 0 === n || n, r, i]);
    }
  }]);
  return n;
}(ne);
var se = function (t, e) {
  return ie.call(window, t, e);
};
function ue() {
  try {
    Object.defineProperty(window, "WebSocket", {
      value: oe,
      writable: !1,
      configurable: !1
    });
    Object.defineProperty(window, "XMLHttpRequest", {
      value: ae,
      writable: !1,
      configurable: !1
    });
    Object.defineProperty(window, "fetch", {
      value: se,
      writable: !1,
      configurable: !1
    });
    Object.freeze(oe.prototype);
    Object.freeze(oe);
    Object.freeze(ae.prototype);
    Object.freeze(ae);
    Object.freeze(se.prototype);
    Object.freeze(se);
  } catch (t) {
    console.error("defineProperty error:", t);
  }
}
var ce;
var le;
var de;
var fe = require("../../../../shared/1531/2584/36/345/index");
require("./1161");
require("./1162");
var he = require("../../../../shared/1531/2584/2628/index");
var pe = require("../../../../shared/1531/2584/13/index");
var me = require("./71");
var be = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(me);
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
}];
var ve = Object(f.memo)(function () {
  var t = Object(p.d)();
  var e = Object(p.e)(function (t) {
    return t.emulatorPhoneInfo;
  });
  var n = Object(f.useState)("");
  var r = Object(c.a)(n, 2);
  var i = r[0];
  var o = r[1];
  Object(f.useEffect)(function () {
    o(e.phoneNumber);
  }, [e.phoneNumber]);
  var a = function (t) {
    o(i + "" + t);
  };
  return h.a.createElement("div", {
    className: X()(be.a.dialerBox, !e.dialPageVisible && be.a.dialerBoxHide)
  }, h.a.createElement("div", {
    className: be.a.backBox,
    onClick: function () {
      t(Object(C.s)({
        dialPageVisible: !1
      }));
    }
  }, h.a.createElement(pe.j, {
    type: "icon-phone-nav-back"
  })), h.a.createElement("div", {
    className: be.a.dialNumber
  }, i), h.a.createElement("div", {
    className: be.a.numberBox
  }, ge.map(function (t) {
    return h.a.createElement("div", {
      key: t.number,
      className: X()(be.a.keyItem, be.a.numberKey),
      onClick: a.bind(null, t.number)
    }, h.a.createElement("div", {
      className: be.a.number
    }, t.number), h.a.createElement("div", {
      className: be.a.letter
    }, t.letter));
  }), h.a.createElement("div", {
    className: X()(be.a.keyItem, be.a.white)
  }), h.a.createElement("div", {
    className: X()(be.a.keyItem, be.a.callBtn),
    onClick: function () {
      if (i) {
        t(Object(C.s)({
          dialPageVisible: !1,
          callingPageVisible: !0,
          callType: "dialOutCall",
          phoneNumber: i,
          callStatus: N.b.RINGING
        }));
        Object(ut.emitWidgetEvent)(N.c, "onPhoneCallStart", e.phoneDialWidgetId);
        Object(R.b)({
          phoneCallInfo: {
            callType: "dialOutCall",
            dialOutPhoneNumber: i,
            callStatus: N.b.RINGING
          }
        });
      }
    }
  }, h.a.createElement(pe.j, {
    type: "icon-phone-call-dial"
  })), h.a.createElement("div", {
    className: X()(be.a.keyItem, be.a.white)
  }, h.a.createElement("div", {
    className: be.a.deleteBtn,
    onClick: function () {
      if (i) {
        o(i.substr(0, i.length - 1));
      }
    }
  }, "x"))));
});
var _e = require("../../../../shared/1531/2584/702");
var ye = Object(f.memo)(function () {
  var t = Object(p.d)();
  var e = Object(_e.a)().formatMessage;
  var n = Object(p.e)(function (t) {
    return t.emulatorPhoneInfo;
  });
  var r = Object(f.useState)(0);
  var i = Object(c.a)(r, 2);
  var o = i[0];
  var a = i[1];
  Object(f.useEffect)(function () {
    if (ce && clearInterval(ce), n.callingPageVisible && n.callStatus === N.b.OFFHOOK) {
      var t = 0;
      ce = setInterval(function () {
        t++;
        a(t);
      }, 1e3);
    }
    return function () {
      if (ce) {
        clearInterval(ce);
      }
      a(0);
    };
  }, [n.callingPageVisible, n.callStatus]);
  var s = function (t) {
    var e = Math.floor(t % 86400 % 3600 / 60);
    var n = Math.floor(t % 86400 % 3600 % 60);
    return "".concat(e < 10 ? "0" : "").concat(e, " : ").concat(n < 10 ? "0" : "").concat(n);
  };
  var u = function () {
    t(Object(C.s)({
      callingPageVisible: !1,
      callStatus: N.b.IDEL
    }));
    Object(ut.emitWidgetEvent)(N.c, "onPhoneCallEnd", n.phoneDialWidgetId, N.a.DIAL_OUT_CALL_END);
    Object(R.b)({
      phoneCallInfo: {
        callType: "dialOutCall",
        callStatus: N.b.IDEL
      }
    });
  };
  var l = function () {
    Object(ut.emitWidgetEventType)(N.c, "onPhoneCallEnd", n.callStatus === N.b.RINGING ? N.a.INCOMING_CALL_REFUSE_END : N.a.INCOMING_CALL_CONNECT_END);
    t(Object(C.s)({
      callingPageVisible: !1,
      callStatus: N.b.IDEL
    }));
    Object(R.b)({
      phoneCallInfo: {
        callStatus: N.b.IDEL
      }
    });
  };
  var d = function () {
    t(Object(C.s)({
      callStatus: N.b.OFFHOOK
    }));
    Object(ut.emitWidgetEventType)(N.c, "onConnectReceivePhoneCall");
    Object(R.b)({
      phoneCallInfo: {
        callStatus: N.b.OFFHOOK
      }
    });
  };
  return h.a.createElement("div", {
    className: X()(be.a.callingBox, !n.callingPageVisible && be.a.callingBoxHide)
  }, "dialOutCall" === n.callType && h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
    className: be.a.phoneNumber
  }, n.phoneNumber), n.callStatus === N.b.RINGING && h.a.createElement("div", {
    className: be.a.phoneStatus
  }, e({
    id: "emulator.onRinging"
  })), n.callStatus === N.b.OFFHOOK && h.a.createElement("div", {
    className: be.a.phoneStatus
  }, s(o)), h.a.createElement("div", {
    className: X()(be.a.callBtnBox, be.a.flexCC)
  }, h.a.createElement("div", {
    className: be.a.callBtnItemBox,
    onClick: u
  }, h.a.createElement("div", {
    className: X()(be.a.callBtnItem, be.a.callEnd)
  }, h.a.createElement(pe.j, {
    type: "icon-phone-call-disconnect"
  })), h.a.createElement("span", {
    className: be.a.callBtnText
  }, e({
    id: "emulator.callEnd"
  }))))), "incomingCall" === n.callType && h.a.createElement(h.a.Fragment, null, h.a.createElement("div", {
    className: be.a.phoneNumber
  }, n.phoneNumber), n.callStatus === N.b.RINGING && h.a.createElement("div", {
    className: be.a.phoneStatus
  }, e({
    id: "emulator.phoneNumber"
  })), n.callStatus === N.b.OFFHOOK && h.a.createElement("div", {
    className: be.a.phoneStatus
  }, s(o)), h.a.createElement("div", {
    className: X()(be.a.callBtnBox, n.callStatus === N.b.RINGING ? be.a.flexSC : be.a.flexCC)
  }, h.a.createElement("div", {
    className: be.a.callBtnItemBox,
    onClick: l
  }, h.a.createElement("div", {
    className: X()(be.a.callBtnItem, be.a.callEnd)
  }, h.a.createElement(pe.j, {
    type: "icon-phone-call-disconnect"
  })), h.a.createElement("span", {
    className: be.a.callBtnText
  }, n.callStatus === N.b.RINGING ? e({
    id: "emulator.callRefuse"
  }) : e({
    id: "emulator.callEnd"
  }))), n.callStatus === N.b.RINGING && h.a.createElement("div", {
    className: be.a.callBtnItemBox,
    onClick: d
  }, h.a.createElement("div", {
    className: X()(be.a.callBtnItem, be.a.callConnect)
  }, h.a.createElement(pe.j, {
    type: "icon-phone-call-dial"
  })), h.a.createElement("span", {
    className: be.a.callBtnText
  }, e({
    id: "emulator.callConnect"
  }))))));
});
var Oe = require("../../../../shared/1531/2584/677/476");
var we = [{
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/bbc05b5084214ba6a0c164be0e557364.jpeg",
  name: "\u7f16\u7a0b\u732b",
  number: "123 4567 8901"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/35488fb77f963585880c80b956250b5f.jpeg",
  name: "\u5927\u9ec4\u9e21",
  number: "123 4567 8902"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/ecee961d68c6b11db9a2275cf92ac602.jpeg",
  name: "\u6d3b\u52a8\u55b5",
  number: "123 4567 8903"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/5bcc344dfd6d8833cd78fec568b95471.jpeg",
  name: "\u8ff7\u4f60\u96c0",
  number: "123 4567 8904"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/c36d182c24a52f1b94120c6abf1becaa.jpeg",
  name: "\u661f\u80fd\u5154",
  number: "123 4567 8905"
}];
var Ee = Object(f.memo)(function () {
  var t = Object(p.d)();
  var e = Object(p.e)(function (t) {
    return t.emulatorPhoneInfo;
  });
  var n = function (n, r, i) {
    t(Object(C.s)({
      contactPageVisible: !1
    }));
    Object(ut.setProperties)(e.contactWidgetId, {
      contactName: n,
      phoneNumber: r,
      phoneNumberList: [r],
      contactAvatar: i
    });
    Object(ut.emitWidgetEvent)(Oe.a, "onContactPickerSelected", e.contactWidgetId, n, r);
  };
  return h.a.createElement("div", {
    className: X()(be.a.contactBox, !e.contactPageVisible && be.a.contactBoxHide)
  }, h.a.createElement("div", {
    className: be.a.backBox,
    onClick: function () {
      t(Object(C.s)({
        contactPageVisible: !1
      }));
    }
  }, h.a.createElement(pe.j, {
    type: "icon-phone-nav-back"
  })), h.a.createElement("div", {
    className: be.a.contactList
  }, we.map(function (t) {
    return h.a.createElement("div", {
      onClick: n.bind(null, t.name, t.number, t.avatar),
      key: t.name,
      className: X()(be.a.contactItem, be.a.flexSC)
    }, h.a.createElement("div", {
      className: be.a.flexCC
    }, h.a.createElement("img", {
      src: t.avatar,
      className: be.a.itemAvatar,
      alt: ""
    }), h.a.createElement("div", null, h.a.createElement("div", {
      className: be.a.itemName
    }, t.name), h.a.createElement("div", {
      className: be.a.itemNumber
    }, t.number))), h.a.createElement(pe.j, {
      type: "icon-fold-left"
    }));
  })));
});
var Te = require("../../../../shared/1531/2584/678/360");
var je = Object(f.memo)(function () {
  var t = Object(p.d)();
  var e = Object(_e.a)().formatMessage;
  var n = Object(p.e)(function (t) {
    return t.emulatorPhoneInfo;
  });
  var r = Object(f.useState)(n.sendSmsNumber);
  var i = Object(c.a)(r, 2);
  var o = i[0];
  var a = i[1];
  var s = Object(f.useState)(n.sendSmsContent);
  var u = Object(c.a)(s, 2);
  var l = u[0];
  var d = u[1];
  var m = Object(f.useState)([]);
  var b = Object(c.a)(m, 2);
  var g = b[0];
  var v = b[1];
  var _ = Object(f.useState)(1);
  var y = Object(c.a)(_, 2);
  var O = y[0];
  var w = y[1];
  var E = Object(f.useRef)(null);
  var T = Object(f.useRef)(null);
  Object(f.useEffect)(function () {
    if (n.sendSmsPageVisible) {
      a(n.sendSmsNumber);
      d(n.sendSmsContent);
      v([]);
    }
  }, [n.sendSmsPageVisible, n.sendSmsNumber, n.sendSmsContent]);
  return h.a.createElement("div", {
    className: X()(be.a.sendSmsBox, !n.sendSmsPageVisible && be.a.sendSmsBoxHide)
  }, h.a.createElement("div", {
    className: be.a.backBox
  }, h.a.createElement("div", {
    onClick: function () {
      t(Object(C.s)({
        sendSmsPageVisible: !1
      }));
    }
  }, h.a.createElement(pe.j, {
    type: "icon-phone-nav-back"
  })), h.a.createElement("span", {
    className: be.a.receiveUser
  }, e({
    id: "emulator.smsReceiver"
  }))), h.a.createElement("div", {
    className: be.a.numberBox
  }, h.a.createElement(pe.k, {
    className: be.a.inputNumber,
    defaultValue: o,
    placeholder: e({
      id: "emulator.smsSendNumberPlaceHolder"
    }),
    onChange: function (t) {
      a(t);
    },
    maxLength: 20
  })), h.a.createElement("div", {
    className: be.a.smsBox
  }, g.map(function (t, e) {
    return h.a.createElement("div", {
      key: e,
      className: be.a.smsItem
    }, t);
  }), h.a.createElement("div", {
    className: be.a.scrollToView,
    ref: T
  })), h.a.createElement("div", {
    className: be.a.contentBox
  }, h.a.createElement(pe.A, {
    ref: E,
    rows: O,
    maxLength: 200,
    className: be.a.contentTextArea,
    defaultValue: l,
    placeholder: e({
      id: "emulator.smsContentPlaceHolder"
    }),
    onChange: function (t) {
      d(t.target.value);
      if (E.current) {
        w(Math.min(E.current.getRowCount(), 7));
      }
    }
  }), h.a.createElement("div", {
    onClick: function () {
      if (o && l) {
        v(g.concat(l));
        Object(ut.emitWidgetEvent)(Te.a, "onSendSmsSuccess", n.smsWidgetId, l, o);
        d("");
        w(1);
        var t = Object(ut.getWidgetInstance)(n.smsWidgetId);
        if (t) {
          t.widgetLog("sendSmsLog", {
            phoneNumber: o
          });
        }
        if (le) {
          clearTimeout(le);
        }
        le = setTimeout(function () {
          var t;
          if (!(null === (t = T.current) || void 0 === t)) {
            t.scrollIntoView({
              behavior: "smooth",
              block: "end"
            });
          }
        }, 10);
      }
    },
    className: X()(be.a.sendSmsBtn, (!o || !l) && be.a.disable)
  }, h.a.createElement(pe.j, {
    type: "icon-phone-send-sms"
  }))));
});
var Se = Object(f.memo)(function () {
  var t = Object(p.d)();
  var e = Object(_e.a)().formatMessage;
  var n = Object(p.e)(function (t) {
    return t.emulatorPhoneInfo;
  });
  Object(f.useEffect)(function () {
    if (de) {
      clearTimeout(de);
    }
    if (n.receiveSmsPageVisible) {
      de = setTimeout(function () {
        t(Object(C.s)({
          receiveSmsPageVisible: !1
        }));
      }, 2e3);
    }
    return function () {
      return de && clearTimeout(de);
    };
  }, [n.receiveSmsPageVisible, n.receiveSmsNumber, n.receiveSmsContent, t]);
  return h.a.createElement("div", {
    className: X()(be.a.receiveSms, !n.receiveSmsPageVisible && be.a.receiveSmsHide)
  }, h.a.createElement("div", {
    className: be.a.flexSC
  }, h.a.createElement("div", {
    className: be.a.smsIconBox
  }, h.a.createElement("div", {
    className: be.a.smsIcon
  }, h.a.createElement(pe.j, {
    type: "icon-widget-sms-service"
  })), h.a.createElement("span", null, e({
    id: "emulator.sms"
  }))), h.a.createElement("div", {
    className: be.a.smsTime
  }, e({
    id: "emulator.now"
  }))), h.a.createElement("div", {
    className: be.a.smsNumber
  }, n.receiveSmsNumber), h.a.createElement("div", {
    className: be.a.smsContent
  }, n.receiveSmsContent));
});
var Ae = Object(f.memo)(function () {
  return h.a.createElement("div", {
    className: be.a.screenMask,
    id: "cocoScreenMask"
  });
});
var ke = Object(f.memo)(function () {
  var t = Object(p.e)(function (t) {
    return t.language;
  });
  return h.a.createElement(he.b, {
    locale: t,
    messages: jt.e[t] || jt.e[jt.b]
  }, h.a.createElement(ve, null), h.a.createElement(Ee, null), h.a.createElement(je, null), h.a.createElement(Se, null), h.a.createElement(ye, null), h.a.createElement(Ae, null));
});
var Ie = require("../../../../shared/1531/2584/21/424/67/410");
var Me = function () {
  return h.a.createElement("svg", {
    "aria-hidden": "true",
    width: "0",
    height: "0",
    style: {
      position: "absolute"
    }
  }, h.a.createElement("symbol", {
    id: "icon-radio-correct",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M935.594667 287.573333s-369.322667 393.984-452.096 487.594667c-82.773333 93.610667-147.328 0-147.328 0L96 535.253333s-38.314667-56.533333 30.293333-109.226666a87.552 87.552 0 0 1 117.034667 0l169.557333 171.648 421.802667-380.330667s40.362667-27.306667 82.773333 7.808c32.256 29.269333 18.133333 62.421333 18.133334 62.421333z"
  })), h.a.createElement("symbol", {
    id: "icon-radio-incorrect",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M741.290667 204.074667a63.445333 63.445333 0 0 1 88.618666 1.365333 55.04 55.04 0 0 1-0.896 77.866667l-231.210666 226.005333 225.28 213.205333a59.989333 59.989333 0 0 1-1.706667 88.661334 71.125333 71.125333 0 0 1-96.597333-2.645334l-216.533334-211.669333-216.490666 211.669333c-24.917333 24.32-63.488 26.88-91.221334 6.912l-5.418666-4.266666a59.989333 59.989333 0 0 1-1.706667-88.661334l225.28-213.205333L187.52 283.306667a55.04 55.04 0 0 1 1.621333-80.256 63.445333 63.445333 0 0 1 86.101334 1.024l233.002666 220.501333z"
  })), h.a.createElement("symbol", {
    id: "icon-fold-left",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M361.344 265.344a32 32 0 0 1 45.312 0l224 224a32 32 0 0 1 3.648 40.832l-3.648 4.48-224 224a32 32 0 0 1-48.96-40.832l3.648-4.48L562.752 512 361.344 310.656a32 32 0 0 1 0-45.312z"
  })), h.a.createElement("symbol", {
    id: "icon-phone-nav-back",
    viewBox: "0 0 1350 1024"
  }, h.a.createElement("path", {
    d: "M572.330667 25.002667a85.333333 85.333333 0 0 1 7.082666 112.64l-7.082666 8.021333L291.328 426.666667H2048a85.333333 85.333333 0 0 1 9.984 170.069333L2048 597.333333H291.328l281.002667 281.002667a85.333333 85.333333 0 0 1 7.082666 112.64l-7.082666 8.021333a85.333333 85.333333 0 0 1-112.64 7.082667l-8.021334-7.082667-426.666666-426.666666a85.333333 85.333333 0 0 1-7.082667-112.64l7.082667-8.021334 426.666666-426.666666a85.333333 85.333333 0 0 1 120.661334 0z"
  })), h.a.createElement("symbol", {
    id: "icon-phone-call-disconnect",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M524.693333 388.416c-127.402667 0.298667-249.024 27.669333-310.741333 89.386667-27.989333 27.989333-42.282667 61.738667-41.066667 102.485333 0.917333 22.784 7.296 45.909333 21.909334 60.501333 10.026667 10.325333 24.32 16.106667 41.941333 13.077334l112.213333-19.157334c14.890667-2.752 26.133333-7.616 34.048-15.210666 9.728-9.130667 13.376-23.722667 13.376-43.477334l0.618667-30.72c0-4.864 1.813333-8.512 4.864-11.541333 2.730667-3.349333 6.976-4.864 10.325333-5.781333 19.456-5.162667 61.12-10.645333 112.512-10.645334 51.370667 0 92.736 4.266667 112.490667 10.944 3.349333 0.917333 6.997333 2.752 9.728 5.482667a13.376 13.376 0 0 1 4.565333 10.645333L652.373333 576c0.597333 19.754667 4.544 34.048 13.973334 43.477333 7.893333 7.893333 19.157333 12.458667 34.346666 15.210667l108.864 18.56c18.56 3.328 33.749333-3.050667 45.312-14.293333 13.376-13.696 21.290667-34.986667 21.589334-59.904 0.597333-40.746667-14.912-74.197333-42.261334-101.269334-61.738667-61.717333-182.144-89.685333-309.546666-89.386666z"
  })), h.a.createElement("symbol", {
    id: "icon-phone-call-dial",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M375.658667 651.733333c84.522667 84.522667 190.016 151.104 276.992 151.104 39.829333 0 73.877333-13.674667 101.845333-43.776 15.509333-16.426667 27.072-37.696 27.072-58.069333 0-14.592-5.482667-28.586667-20.373333-38.933333l-92.736-65.365334c-12.778667-8.810667-24.021333-13.674667-34.666667-13.674666-13.674667 0-26.453333 7.296-40.448 20.970666l-22.186667 21.589334a15.573333 15.573333 0 0 1-11.562666 4.565333c-4.266667 0-8.213333-1.514667-11.541334-3.050667-17.941333-9.408-50.773333-35.264-81.493333-66.282666-31.018667-30.997333-57.472-63.232-66.282667-81.792-1.514667-3.328-3.050667-7.296-3.050666-10.944a14.72 14.72 0 0 1 4.565333-10.944l21.589333-22.805334c13.376-14.592 20.693333-27.349333 20.693334-40.746666 0-10.944-4.565333-22.186667-13.696-34.965334l-63.850667-90.304c-10.645333-14.890667-25.536-21.589333-41.962667-21.589333-19.157333 0-39.829333 9.429333-57.472 26.773333-29.184 28.266667-41.941333 63.232-41.941333 101.845334 0 86.976 65.664 191.573333 150.506667 276.394666z"
  })), h.a.createElement("symbol", {
    id: "icon-phone-call-idle",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M341.317818 226.513455c23.156364 0 43.589818 10.146909 57.483637 29.626181l61.416727 86.830546c11.240727 15.755636 17.058909 30.510545 17.058909 45.847273 0 18.548364-8.610909 35.048727-25.623273 53.620363l-18.571636 19.549091c2.490182 5.236364 7.074909 12.288 13.218909 20.48l6.656 8.517818 7.586909 9.169455c2.676364 3.141818 5.492364 6.353455 8.424727 9.634909l9.122909 9.960727c3.141818 3.374545 6.4 6.749091 9.728 10.170182l9.797819 9.844364c4.794182 4.701091 9.658182 9.309091 14.498909 13.730909l9.611636 8.587636c1.582545 1.396364 3.165091 2.722909 4.724364 4.049455l9.169454 7.610181c11.892364 9.611636 22.388364 17.035636 29.463273 20.759273l1.117091 0.488727 19.176727-18.618181c16.221091-15.872 31.883636-24.738909 49.198546-26.018909l4.375272-0.16291c14.848 0 29.253818 5.818182 45.428364 16.989091l89.134545 62.836364c19.176727 13.312 28.625455 32.628364 28.625455 54.690909 0 24.413091-12.288 49.617455-31.650909 70.144-30.417455 32.721455-68.491636 48.826182-113.384727 48.826182-84.898909 0-189.207273-59.368727-281.437091-151.598546C283.438545 559.848727 224.674909 456.285091 224.674909 371.269818c0-44.148364 15.429818-82.734545 46.661818-112.965818C291.863273 238.08 316.834909 226.513455 341.317818 226.513455z m0 41.890909c-12.730182 0-27.485091 6.842182-40.727273 19.851636C277.620364 310.481455 266.565818 338.152727 266.565818 371.246545c0 71.633455 53.597091 166.074182 138.728727 251.229091C490.402909 707.560727 585.658182 761.786182 657.105455 761.786182c33.396364 0 60.322909-11.380364 82.804363-35.584 12.730182-13.498182 20.340364-29.090909 20.340364-41.518546 0-8.727273-3.095273-15.034182-10.752-20.340363l-89.088-62.789818c-9.634909-6.679273-16.570182-9.472-21.457455-9.472-6.306909 0-13.824 3.979636-24.32 14.266181l-21.154909 20.573091a35.746909 35.746909 0 0 1-25.925818 10.519273c-7.168 0-13.032727-1.722182-20.875636-5.329455-20.526545-10.775273-54.085818-37.818182-83.502546-67.514181l-5.585454-5.655273c-29.486545-30.161455-53.271273-59.880727-62.464-79.220364-3.072-6.749091-4.794182-12.427636-4.794182-19.2 0-9.541818 3.467636-18.292364 10.123636-24.948363l20.549818-21.690182c10.356364-11.310545 14.382545-19.013818 14.382546-25.064727 0-5.469091-2.676364-12.264727-9.309091-21.573819L364.637091 280.413091A26.903273 26.903273 0 0 0 341.317818 268.404364z m403.828364-18.338909c7.610182 0 14.475636 5.12 17.384727 12.916363a22.341818 22.341818 0 0 1-4.235636 22.714182l-99.956364 108.869818h111.336727c10.356364 0 18.804364 9.378909 18.804364 20.852364 0 11.450182-8.448 20.829091-18.804364 20.829091h-157.323636c-7.610182 0-14.475636-5.12-17.384727-12.916364a22.341818 22.341818 0 0 1 4.235636-22.714182l99.956364-108.869818h-88.482909c-10.356364 0-18.804364-9.378909-18.804364-20.852364 0-11.450182 8.448-20.829091 18.804364-20.82909h134.469818z"
  })), h.a.createElement("symbol", {
    id: "icon-phone-send-sms",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M186.453333 825.813333l54.101334-240.938666a34.133333 34.133333 0 0 1 30.805333-26.538667l332.373333-24.277333-332.544-26.325334a34.133333 34.133333 0 0 1-30.634666-26.496L186.453333 240.896a34.133333 34.133333 0 0 1 48.597334-38.058667l599.893333 299.946667a34.133333 34.133333 0 0 1 0 61.098667l-599.936 299.946666a34.133333 34.133333 0 0 1-48.597333-37.973333z"
  })), h.a.createElement("symbol", {
    id: "icon-widget-sms-service",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M828.970667 140.8A139.562667 139.562667 0 0 1 968.533333 280.362667V743.68a139.562667 139.562667 0 0 1-139.562666 139.562667H194.986667A139.562667 139.562667 0 0 1 55.466667 743.637333V280.32A139.562667 139.562667 0 0 1 195.029333 140.8zM115.2 391.978667v351.658666c0 44.074667 35.754667 79.829333 79.829333 79.829334H829.013333a79.829333 79.829333 0 0 0 79.829334-79.829334V392.021333l-334.464 185.728c-36.181333 19.242667-78.549333 20.522667-115.925334 3.669334l-7.936-3.882667L115.2 391.978667zM828.970667 200.533333H194.986667A79.829333 79.829333 0 0 0 115.2 280.362667v43.349333l363.733333 201.301333c19.157333 10.154667 41.173333 11.178667 60.586667 3.242667l6.314667-2.986667L908.8 323.754667V280.362667c0-41.984-32.426667-76.373333-73.6-79.573334l-6.229333-0.256z"
  })), h.a.createElement("symbol", {
    id: "icon-close",
    viewBox: "0 0 1024 1024"
  }, h.a.createElement("path", {
    d: "M980.906667 43.093333a59.733333 59.733333 0 0 1 6.314666 77.056l-6.314666 7.424L596.394667 512l384.512 384.426667a59.733333 59.733333 0 0 1-77.056 90.794666l-7.424-6.314666L512 596.394667l-384.426667 384.512a59.733333 59.733333 0 0 1-90.794666-77.056l6.314666-7.424L427.605333 512 43.093333 127.573333A59.733333 59.733333 0 0 1 120.149333 36.778667l7.424 6.314666L512 427.605333 896.426667 43.093333a59.733333 59.733333 0 0 1 84.48 0z"
  }), " "));
};
var Ce = h.a.memo(function () {
  var t = Object(p.e)(function (t) {
    return t.currentScreenId;
  });
  if (!t) {
    console.error("The currentScreen id is undefined");
  }
  return h.a.createElement("div", {
    id: nt.a,
    style: {
      width: "100%",
      height: "100%"
    },
    onClick: function (t) {
      return t.stopPropagation();
    }
  }, h.a.createElement(Ie.a, {
    id: t || ""
  }), h.a.createElement(Me, null), h.a.createElement(ke, null));
});
var xe = require("../../../../shared/1531/2584/38/217/388");
var Re = {
  x: 0,
  y: 0,
  z: 0
};
R.a.instance.addEventListener("accelerometerUpdate", function (t) {
  Re = t;
});
var Ne = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this)).options = t;
    r.emitTimer = void 0;
    r.emitReading = function () {
      r.emit("reading");
    };
    return r;
  }
  Object(T.a)(n, [{
    key: "x",
    get: function () {
      return Re.x;
    }
  }, {
    key: "y",
    get: function () {
      return Re.y;
    }
  }, {
    key: "z",
    get: function () {
      return Re.z;
    }
  }, {
    key: "start",
    value: function () {
      var t;
      if (this.emitTimer) {
        throw new Error("Already started");
      }
      this.emitTimer = setInterval(this.emitReading, (null === (t = this.options) || void 0 === t ? void 0 : t.frequency) || 60);
    }
  }, {
    key: "stop",
    value: function () {
      clearInterval(this.emitTimer);
      this.emitTimer = null;
    }
  }]);
  return n;
}(xe.a);
var Le = {
  x: 0,
  y: -50,
  z: 0
};
R.a.instance.addEventListener("magnetometerUpdate", function (t) {
  Le = t;
});
var De = function (t) {
  Object(j.a)(n, t);
  var e = Object(S.a)(n);
  function n(t) {
    var r;
    Object(E.a)(this, n);
    (r = e.call(this)).options = t;
    r.emitTimer = void 0;
    r.emitReading = function () {
      r.emit("reading");
    };
    return r;
  }
  Object(T.a)(n, [{
    key: "x",
    get: function () {
      return Le.x;
    }
  }, {
    key: "y",
    get: function () {
      return Le.y;
    }
  }, {
    key: "z",
    get: function () {
      return Le.z;
    }
  }, {
    key: "start",
    value: function () {
      var t;
      if (this.emitTimer) {
        throw new Error("Already started");
      }
      this.emitTimer = setInterval(this.emitReading, (null === (t = this.options) || void 0 === t ? void 0 : t.frequency) || 60);
    }
  }, {
    key: "stop",
    value: function () {
      clearInterval(this.emitTimer);
      this.emitTimer = null;
    }
  }]);
  return n;
}(xe.a);
function Be() {
  window.Accelerometer = Ne;
  window.Magnetometer = De;
  R.a.instance.emitToParent("ready");
  R.a.instance.addEventListener("shake", function () {
    Object(ut.emitDeviceShake)();
  });
}
var Pe = {
  PHONE_DIALER_WIDGET: L,
  CONTACT_PICKER_WIDGET: P,
  SMS_SERVICE_WIDGET: G,
  DIALOG_WIDGET: lt,
  QRCODE_WIDGET: mt,
  PEDOMETER_WIDGET: vt,
  QR_SCANNER_WIDGET: Ht,
  IMAGE_WIDGET: Vt,
  CANVAS_WIDGET: Yt,
  NEW_BUTTON_WIDGET: Xt,
  INPUT_WIDGET: Zt
};
function Ue() {
  var t = "__device_id";
  var e = localStorage.getItem(t);
  if (!e) {
    e = m.a();
    localStorage.setItem(t, e);
  }
  return e;
}
function We(t) {
  return He.apply(this, arguments);
}
function He() {
  return (He = Object(d.a)(u.a.mark(function t(e) {
    var n;
    return u.a.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2;
            return Promise.all(e.map(function () {
              var t = Object(d.a)(u.a.mark(function t(e) {
                var n;
                return u.a.wrap(function (t) {
                  for (;;) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2;
                        return g.a.get("".concat(e.cdnUrl, "?t=").concat(Math.random()));
                      case 2:
                        n = t.sent;
                        return t.abrupt("return", Object(l.a)(Object(l.a)({}, e), {}, {
                          code: n.data
                        }));
                      case 4:
                      case "end":
                        return t.stop();
                    }
                  }
                }, t);
              }));
              return function (e) {
                return t.apply(this, arguments);
              };
            }()));
          case 2:
            n = t.sent;
            return t.abrupt("return", n);
          case 4:
          case "end":
            return t.stop();
        }
      }
    }, t);
  }))).apply(this, arguments);
}
function Fe(t, e) {
  return Ve.apply(this, arguments);
}
function Ve() {
  return (Ve = Object(d.a)(u.a.mark(function t(e, n) {
    var r;
    var i;
    var o;
    var a;
    var s;
    var c;
    var f;
    var h;
    var p;
    return u.a.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            o = function () {
              return (o = Object(d.a)(u.a.mark(function t(e, n) {
                var i;
                var o;
                var a;
                return u.a.wrap(function (t) {
                  for (;;) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2;
                        return Object(v.r)(n, e.startsWith(_.a), fe.require);
                      case 2:
                        i = t.sent;
                        o = i.types;
                        a = i.widget;
                        r[e] = a;
                        y.a({
                          type: e,
                          types: o,
                          code: n
                        });
                      case 7:
                      case "end":
                        return t.stop();
                    }
                  }
                }, t);
              }))).apply(this, arguments);
            };
            i = function (t, e) {
              return o.apply(this, arguments);
            };
            r = {};
            t.next = 5;
            return Promise.all(e.map(function (t) {
              var e = t.type;
              var n = t.code;
              return i(e, n);
            }));
          case 5:
            for (a in n) {
              s = n[a];
              c = s.type;
              if (Object(v.q)(c)) {
                f = Object(l.a)(Object(l.a)({}, s.attributes), {}, {
                  __widgetId: s.id,
                  __widgetType: s.type,
                  __width: s.size.width,
                  __height: s.size.height
                });
                h = r[c];
                p = new h(f);
                ut.addWidgetInstance(s.id, p);
              }
            }
          case 6:
          case "end":
            return t.stop();
        }
      }
    }, t);
  }))).apply(this, arguments);
}
function Ge(t) {
  for (var e in t) {
    var n = t[e];
    var r = n.type;
    if (Pe[r]) {
      var i = Object(l.a)(Object(l.a)({}, n.attributes), {}, {
        __widgetId: n.id,
        __widgetType: n.type,
        __width: n.size.width,
        __height: n.size.height
      });
      var o = new (0, Pe[r])(i);
      ut.addWidgetInstance(n.id, o);
    }
  }
}
function Ye(t) {
  return ze.apply(this, arguments);
}
function ze() {
  return (ze = Object(d.a)(u.a.mark(function t(e) {
    var n;
    var r;
    var i;
    var s;
    var c;
    var l;
    var d;
    var f;
    var h;
    var p;
    var m;
    var b;
    var g;
    return u.a.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            if (n = e.id, r = e.blockCode, i = e.shouldOpenEmulator, s = e.extensionWidgetList, c = e.unsafeExtensionWidgetList, l = e.fontFileMap, d = Object(a.a)(e, ["id", "blockCode", "shouldOpenEmulator", "extensionWidgetList", "unsafeExtensionWidgetList", "fontFileMap"]), (f = e.apiToken || e["x-coconut-authorization"] || "") || console.warn("api token not set. some api call may fail."), Ge(h = d.widgetMap), p = [], !(null === s || void 0 === s ? void 0 : s.length)) {
              t.next = 11;
              break;
            }
            t.next = 9;
            return We(s);
          case 9:
            m = t.sent;
            p.push.apply(p, Object(o.a)(m));
          case 11:
            if ((null === c || void 0 === c ? void 0 : c.length) && p.push.apply(p, Object(o.a)(c)), !p.length) {
              t.next = 15;
              break;
            }
            t.next = 15;
            return Fe(p, h);
          case 15:
            Object(x.b)(d);
            if (i) {
              Be();
            }
            ut.initializeRoom({
              workId: n,
              context: {
                authorization: f,
                device: {
                  groupId: Ue(),
                  platform: Object(A.l)(),
                  origin: "coconut"
                }
              }
            });
            ut.initializeFontFamily(l);
            ut.initializeLocalStorage(n, d.widgetMap);
            ut.initializeHttpClient(d.widgetMap);
            ut.initializeCloudDBWidget(d.widgetMap);
            ut.initializeCloudTableDataMap(d.widgetMap);
            t.next = 25;
            return ut.initializeGridMap(d.widgetMap);
          case 25:
            if (b = Object.values(d.widgetMap), !b.some(function (t) {
              return "EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type || "UNSAFE_EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type;
            })) {
              t.next = 30;
              break;
            }
            t.next = 30;
            return Object(O.ab)("https://static.codemao.cn/appcraft/modules/quilljs/1.3.7/quill.snow.css");
          case 30:
            window.eval = function () {};
            g = ut.generateAsyncScheduler();
            new Function("Coco", "CocoExtension", "asyncScheduler", "AsyncScheduler", r)(ut, fe, g, ut.AsyncScheduler);
            ut.subscribeSensor();
            window.addEventListener("message", function (t) {
              var e = t.data;
              if ("deviceEvent" === e.type) {
                ut.emitEvent.apply(ut, Object(o.a)(e.args));
              }
            });
          case 35:
          case "end":
            return t.stop();
        }
      }
    }, t);
  }))).apply(this, arguments);
}
Object(v.s)(w);
Object(v.s)(D);
Object(v.s)(U);
Object(v.s)(Y);
Object(v.s)(dt);
Object(v.s)(bt);
Object(v.s)(_t);
Object(v.s)(Qt);
Object(v.s)(Ft);
Object(v.s)($t);
Object(v.s)(Gt);
var _a;
_a = h.a.memo(function (t) {
  var e = Object(f.useState)(!1);
  var n = Object(c.a)(e, 2);
  var r = n[0];
  var i = n[1];
  var o = function () {
    var e = Object(d.a)(u.a.mark(function e() {
      return u.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ue();
              e.next = 3;
              return Ye(t);
            case 3:
              i(!0);
            case 4:
            case "end":
              return e.stop();
          }
        }
      }, e);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }();
  Object(f.useEffect)(function () {
    o();
  }, []);
  return r ? h.a.createElement(p.a, {
    store: Object(x.a)()
  }, h.a.createElement(Ce, null)) : null;
});
export { _a as a };
export default _a;