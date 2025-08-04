"use strict";

var r = require("react");
var o = function __importDefault(module) {
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
}(r);
var i = require("../16/index");
require("../710/index");
var a = require("../155/index");
var s = require("../6");
var c = require("../38/66");
var l = require("./62");
var u = require("../676/70");
var d = function (e) {
  return {
    type: "SET_ROTATION",
    payload: e
  };
};
var p = function (e) {
  return {
    type: "SET_POSITION",
    payload: e
  };
};
var f = function (e) {
  return {
    type: "SET_ADDITIONAL_ACCELERATION",
    payload: e
  };
};
var h = function (e) {
  return {
    type: "PUSH_EVENT",
    payload: e
  };
};
var m = function (e) {
  return {
    type: "SET_ANGULAR_VELOCITY",
    payload: e
  };
};
var g = function (e) {
  return {
    type: "SET_VISIBLE_PANEL",
    payload: e
  };
};
var _ = function (e) {
  return {
    type: "SET_PHONE_CALL_INFO",
    payload: e
  };
};
var v = {
  x: 0,
  y: 0,
  z: 0
};
var b = new l.O(0, 0, 9.81);
var y = new l.O(0, 50, 0);
var E = 2 * Math.PI / 360;
var O = window.localStorage.getItem("LANGUAGE") || navigator.language;
var w = function (e) {
  return function (t) {
    if (e) {
      e.postMessage({
        type: "EMULATOR",
        data: t
      }, "*");
    }
  };
};
var C = c.a.Record({
  language: O,
  acceleration: {
    x: b.x,
    y: b.y,
    z: b.z
  },
  rotation: v,
  additionalAcceleration: v,
  position: v,
  angularVelocity: v,
  magneticField: {
    x: y.x,
    y: y.y,
    z: y.z
  },
  emitEvent: w(null),
  visiblePanel: null,
  phoneCallInfo: {
    dialOutPhoneNumber: "123 4567 8901",
    incomingPhoneNumber: "123 4567 8901",
    callType: "",
    callStatus: u.b.IDEL
  }
})();
var T = function (e) {
  var t = e.rotation;
  var n = t.x;
  var r = t.y;
  var o = t.z;
  var i = e.additionalAcceleration;
  var a = i.x;
  var s = i.y;
  var c = i.z;
  var u = new l.k(-n * E, -r * E, -o * E, "ZYX");
  var d = new l.O(a, s, c).add(b);
  var p = new l.O().copy(y);
  var f = function (e) {
    var t = e.applyEuler(u);
    return {
      x: t.x,
      y: t.y,
      z: t.z
    };
  };
  var h = f(d);
  var m = f(p);
  e.emitEvent({
    accelerometerUpdate: h,
    magnetometerUpdate: m
  });
  return e.set("acceleration", h).set("magneticField", m);
};
var S = function (e) {
  e.emitEvent({
    accelerometerUpdate: e.acceleration,
    magnetometerUpdate: e.magneticField
  });
  return e;
};
var I = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C;
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case "SET_EMIT_EVENT":
      return e.set("emitEvent", w(t.payload));
    case "PUSH_EVENT":
      e.emitEvent(t.payload);
      return e;
    case "PUSH_ALL_DATA":
      return S(e);
    case "SET_ROTATION":
      return T(e.set("rotation", t.payload));
    case "SET_POSITION":
      return e.set("position", t.payload);
    case "SET_ADDITIONAL_ACCELERATION":
      return T(e.set("additionalAcceleration", t.payload));
    case "SET_MAGNETIC_FIELD":
      return T(e.set("magneticField", t.payload));
    case "SET_ANGULAR_VELOCITY":
      return e.set("angularVelocity", t.payload);
    case "SET_VISIBLE_PANEL":
      return e.set("visiblePanel", t.payload);
    case "SET_PHONE_CALL_INFO":
      return e.set("phoneCallInfo", Object(s.a)(Object(s.a)({}, e.phoneCallInfo), t.payload));
    default:
      return e;
  }
};
var A = Object(a.createStore)(I);
var j = require("../8");
var N = function __importDefault(module) {
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
}(j);
var R = require("../2628/index");
var k = require("../23");
var x = require("../10/index");
var D = require("./1021");
var M = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .001;
  return Math.abs(e.x) <= t && Math.abs(e.y) <= t && Math.abs(e.z) <= t;
};
var L = new l.g("#f6f4fd");
function P() {
  var e = Object(r.useRef)();
  var t = Object(r.useRef)(0);
  var n = Object(r.useRef)();
  var a = Object(r.useState)(!1);
  var s = Object(x.a)(a, 2);
  var c = s[0];
  var u = s[1];
  var d = Object(i.d)();
  var p = Object(i.e)(function (e) {
    return e;
  });
  n.current = p;
  Object(r.useEffect)(function () {
    var t;
    var n = {
      width: (null === (t = document.getElementById("emulatorCanvasWrapper")) || void 0 === t ? void 0 : t.clientWidth) || 340,
      height: 300
    };
    var r = new l.H();
    var o = new l.B(75, n.width / n.height, .1, 1e3);
    var i = new l.R({
      antialias: !0,
      alpha: !1
    });
    var a = new l.C();
    a.position.set(10, 10, 50);
    a.intensity = .2;
    r.add(new l.a());
    r.add(a);
    r.background = null;
    o.position.z = 6;
    i.setSize(n.width, n.height);
    i.setClearColor(L);
    i.autoClear = !1;
    var s = new D.a();
    var c = new l.M().load("/editor/model/background.png");
    r.background = c;
    s.loadAsync("/editor/model/phone.fbx").then(function (t) {
      r.add(t);
      e.current = {
        scene: r,
        renderer: i,
        camera: o,
        phone: t
      };
      u(!0);
    });
    return function () {
      i.dispose();
      e.current = void 0;
    };
  }, []);
  var h = new l.O();
  var g = new l.O();
  !function (e, t) {
    var n = o.a.useRef();
    var i = o.a.useRef();
    var a = Object(r.useCallback)(function (t) {
      if (void 0 !== i.current) {
        var r = t - i.current;
        e(r / 1e3);
      }
      i.current = t;
      n.current = requestAnimationFrame(a);
    }, [e]);
    o.a.useEffect(function () {
      n.current = requestAnimationFrame(a);
      return function () {
        if (n.current) {
          cancelAnimationFrame(n.current);
        }
      };
    }, [a]);
  }(function (r) {
    var o = e.current;
    var i = n.current;
    if (o && i) {
      var a = o.renderer;
      var s = o.scene;
      var c = o.camera;
      var u = o.phone;
      var p = 8 * r;
      u.rotation.toVector3(h);
      g.copy(u.position);
      var _ = u.rotation;
      var v = _.x;
      var b = _.y;
      var y = _.z;
      var E = i.rotation;
      var O = E.x;
      var w = E.y;
      var C = E.z;
      u.rotation.set(l.s.lerp(v, O * l.s.DEG2RAD, p), l.s.lerp(b, w * l.s.DEG2RAD, p), l.s.lerp(y, C * l.s.DEG2RAD, p));
      var T = u.position;
      var S = T.x;
      var I = T.y;
      var A = T.z;
      var j = i.position;
      var N = j.x;
      var R = j.y;
      var k = j.z;
      u.position.set(l.s.lerp(S, N, p), l.s.lerp(I, R, p), l.s.lerp(A, k, p));
      a.clear(!0, !0, !0);
      a.render(s, c);
      t.current -= r;
      if (t.current < 0) {
        var x = g.subVectors(u.position, g).divideScalar(r * r);
        if (M(x)) {
          if (!M(i.additionalAcceleration, 0)) {
            d(f({
              x: 0,
              y: 0,
              z: 0
            }));
          }
        } else {
          var D = x.x;
          var L = x.y;
          var P = x.z;
          d(f({
            x: D,
            y: L,
            z: P
          }));
        }
        var B = h.subVectors(u.rotation.toVector3(), h).divideScalar(r);
        if (M(B)) {
          if (!M(i.angularVelocity, 0)) {
            d(m({
              x: 0,
              y: 0,
              z: 0
            }));
          }
        } else {
          var F = B.x;
          var G = B.y;
          var U = B.z;
          d(m({
            x: F,
            y: G,
            z: U
          }));
        }
        t.current = .33;
      }
    }
  });
  var _ = Object(r.useCallback)(function (t) {
    if (t && e.current) {
      t.appendChild(e.current.renderer.domElement);
    }
  }, [c]);
  return o.a.createElement("div", {
    ref: _,
    id: "emulatorCanvasWrapper"
  });
}
var B = require("../11");
var F = require("../13/index");
var G = require("../94/index");
var U = {
  rotation: [{
    title: "X 旋转",
    prop: "x",
    icon: "icon-phone-rotation-x",
    min: -180,
    max: 180,
    unit: "°"
  }, {
    title: "Y 旋转",
    prop: "y",
    icon: "icon-phone-rotation-y",
    min: -180,
    max: 180,
    unit: "°"
  }, {
    title: "Z 旋转",
    prop: "z",
    icon: "icon-phone-rotation-z",
    min: -180,
    max: 180,
    unit: "°"
  }],
  position: [{
    title: "X 移动",
    prop: "x",
    icon: "icon-phone-move-x",
    min: -6,
    max: 6,
    unit: o.a.createElement("span", {
      className: "emulator-meterUnit"
    }, "m")
  }, {
    title: "Y 移动",
    prop: "y",
    icon: "icon-phone-move-y",
    min: -6,
    max: 6,
    unit: o.a.createElement("span", {
      className: "emulator-meterUnit"
    }, "m")
  }, {
    title: "Z 移动",
    prop: "z",
    icon: "icon-phone-move-z",
    min: -6,
    max: 6,
    unit: o.a.createElement("span", {
      className: "emulator-meterUnit"
    }, "m")
  }]
};
var W = function (e) {
  var t = e.type;
  var n = e.style;
  var r = Object(i.d)();
  var a = Object(i.e)(function (e) {
    return e[t];
  });
  var c = function (e) {
    switch (t) {
      case "rotation":
        return function (t) {
          r(d(Object(s.a)(Object(s.a)({}, a), {}, Object(B.a)({}, e, t))));
        };
      case "position":
        return function (t) {
          r(p(Object(s.a)(Object(s.a)({}, a), {}, Object(B.a)({}, e, t))));
        };
    }
  };
  var l = U[t];
  return o.a.createElement("div", {
    className: "emulator-sensors",
    style: n
  }, o.a.createElement(F.h, {
    className: "emulator-sensor-form"
  }, l.map(function (e) {
    var t = e.title;
    var n = e.prop;
    var r = e.icon;
    var i = e.max;
    var s = e.min;
    var l = e.unit;
    return o.a.createElement("div", {
      key: n
    }, o.a.createElement("div", {
      className: "emulator-sensor-item-title"
    }, o.a.createElement(G.a, {
      className: "emulator-icon",
      type: r
    }), o.a.createElement("span", {
      className: "emulator-sensor-direction"
    }, t)), o.a.createElement("div", {
      className: "emulator-form-slider-wrapper"
    }, o.a.createElement(F.x, {
      className: "emulator-formControl",
      min: s,
      max: i,
      value: a[n],
      onChange: c(n),
      isShowRightInput: !0,
      inputAfter: l
    })));
  })));
};
var H = function (e) {
  var t = e.style;
  var n = Object(i.d)();
  return o.a.createElement("div", {
    className: "emulator-sensors",
    style: t
  }, o.a.createElement("div", {
    className: "emulator-shakeBtnWrapper",
    onClick: function () {
      var e;
      var t = 33;
      n(h({
        shake: null
      }));
      window.requestAnimationFrame(function r(o) {
        if (void 0 === e) {
          e = o;
        }
        var i = o - e;
        if (t <= 33 && t >= -33) {
          t -= 3;
        } else {
          t = 33;
        }
        n(d({
          x: 0,
          y: 0,
          z: t
        }));
        if (i < 1e3) {
          window.requestAnimationFrame(r);
        } else {
          n(d({
            x: 0,
            y: 0,
            z: 0
          }));
        }
      });
    }
  }, o.a.createElement("div", {
    className: "emulator-shakeBtn"
  }, o.a.createElement(G.a, {
    type: "icon-phone-shake-selected"
  }), o.a.createElement("p", {
    className: "emulator-shakeBtnName"
  }, "摇一摇"))));
};
var V = function () {
  var e = Object(i.e)(function (e) {
    return e.visiblePanel;
  });
  var t = function (t) {
    return e === t ? {
      display: "block"
    } : {
      display: "none"
    };
  };
  return o.a.createElement(o.a.Fragment, null, o.a.createElement(W, {
    type: "rotation",
    style: t("ROTATION")
  }), o.a.createElement(W, {
    type: "position",
    style: t("POSITION")
  }), o.a.createElement(H, {
    style: t("SHAKE")
  }));
};
var z = require("../702");
var Y = [{
  type: "SHAKE",
  icon: "icon-phone-shake",
  iconSelected: "icon-phone-shake-selected",
  name: "emulator.shake"
}, {
  type: "ROTATION",
  icon: "icon-phone-rotation",
  iconSelected: "icon-phone-rotation-selected",
  name: "emulator.rotation"
}, {
  type: "POSITION",
  icon: "icon-phone-move",
  iconSelected: "icon-phone-move-selected",
  name: "emulator.position",
  spaceLine: !0
}, {
  type: "DIAL_CALL",
  icon: "icon-phone-dial-call",
  iconSelected: "icon-phone-dial-call-selected",
  name: "emulator.dialCall"
}, {
  type: "RECEIVE_CALL",
  icon: "icon-phone-receive-call",
  iconSelected: "icon-phone-receive-call-selected",
  name: "emulator.receiveCall",
  spaceLine: !0
}, {
  type: "RECEIVE_SMS",
  icon: "icon-phone-receive-sms",
  iconSelected: "icon-phone-receive-sms-selected",
  name: "emulator.receiveSms"
}];
var K = o.a.memo(function (e) {
  var t = e.icon;
  var n = e.selected;
  var r = e.name;
  var i = Object(z.a)().formatMessage;
  return o.a.createElement("div", {
    className: N()("emulator-channel-item", n && "selected")
  }, o.a.createElement("div", {
    className: "emulator-icon"
  }, t && o.a.createElement(G.a, {
    type: t
  })), o.a.createElement("div", {
    className: "emulator-text"
  }, i({
    id: r
  })));
});
var q = o.a.memo(function () {
  var e = Object(i.d)();
  var t = Object(i.e)(function (e) {
    return e;
  });
  return o.a.createElement("div", {
    className: "emulator-channel-list-wrapper"
  }, o.a.createElement("ul", {
    className: "emulator-channel-list"
  }, Y.map(function (n) {
    var r = n.type;
    var i = n.icon;
    var a = n.name;
    var s = n.iconSelected;
    var c = n.spaceLine;
    return o.a.createElement("li", {
      key: r,
      onClick: function () {
        return function (n) {
          if (t.visiblePanel === n) {
            e(g(""));
            e(h({
              visiblePanel: ""
            }));
          } else {
            if ("SHAKE" === n) {
              e(d({
                x: 0,
                y: 0,
                z: 0
              }));
              e(p({
                x: 0,
                y: 0,
                z: 0
              }));
            }
            e(g(n));
            e(h({
              visiblePanel: n
            }));
          }
        }(r);
      },
      className: N()("emulator-channel-item-wrapper", r === t.visiblePanel && "selected")
    }, o.a.createElement(K, {
      key: r,
      icon: r === t.visiblePanel ? s : i,
      name: a,
      type: r,
      selected: r === t.visiblePanel
    }), c && o.a.createElement("div", {
      className: "space-line"
    }));
  })));
});
var X = require("./302");
var Q = require("./115");
var Z = function __importDefault(module) {
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
}(Q);
var J = function () {
  var e = Object(i.d)();
  var t = Object(z.a)().formatMessage;
  var n = Object(i.e)(function (e) {
    return e.phoneCallInfo;
  });
  return o.a.createElement("div", {
    className: Z.a.dialCall
  }, o.a.createElement("div", {
    className: Z.a.deviceBox
  }, n.callStatus === u.b.IDEL && o.a.createElement("div", {
    className: Z.a.callStatus
  }, o.a.createElement(F.j, {
    type: "icon-phone-call-idle",
    className: Z.a.noCallIcon
  }), o.a.createElement("div", null, t({
    id: "emulator.noCall"
  }))), n.callStatus !== u.b.IDEL && o.a.createElement("div", {
    className: Z.a.callStatus
  }, o.a.createElement("div", {
    className: Z.a.phoneNumber
  }, n.dialOutPhoneNumber), n.callStatus === u.b.RINGING && o.a.createElement("div", null, t({
    id: "emulator.incomingNumber"
  })), n.callStatus === u.b.OFFHOOK && o.a.createElement("div", null, t({
    id: "emulator.onCalling"
  })))), o.a.createElement("div", {
    className: N()(Z.a.callBtnBox, Z.a.flexSC)
  }, o.a.createElement("div", {
    className: "dialOutCall" === n.callType && n.callStatus !== u.b.IDEL ? Z.a.active : ""
  }, o.a.createElement("div", {
    id: "emulatorDialCallEnd",
    className: N()(Z.a.callBtnItem, Z.a.callEnd),
    onClick: function () {
      if ("dialOutCall" === n.callType && n.callStatus !== u.b.IDEL) {
        Object(X.press)("emulatorDialCallEnd");
        e(h({
          onPhoneCallEnd: {
            callingPageVisible: !1,
            callType: "dialOutCall",
            callStatus: u.b.IDEL
          }
        }));
        e(_({
          callStatus: u.b.IDEL
        }));
      }
    }
  }, o.a.createElement(F.j, {
    type: "icon-phone-call-disconnect"
  })), o.a.createElement("span", {
    className: Z.a.callBtnText
  }, t({
    id: "emulator.callEndByOtherSide"
  }))), o.a.createElement("div", {
    className: "dialOutCall" === n.callType && n.callStatus === u.b.RINGING ? Z.a.active : ""
  }, o.a.createElement("div", {
    id: "emulatorDialCallConnect",
    className: N()(Z.a.callBtnItem, Z.a.callConnect),
    onClick: function () {
      if ("dialOutCall" === n.callType && n.callStatus === u.b.RINGING) {
        Object(X.press)("emulatorDialCallConnect");
        e(h({
          onPhoneCallConnect: {
            callType: "dialOutCall",
            callStatus: u.b.OFFHOOK
          }
        }));
        e(_({
          callStatus: u.b.OFFHOOK
        }));
      }
    }
  }, o.a.createElement(F.j, {
    type: "icon-phone-call-dial"
  })), o.a.createElement("span", {
    className: Z.a.callBtnText
  }, t({
    id: "emulator.callConnectByOtherSide"
  })))));
};
var $ = function () {
  var e = Object(i.d)();
  var t = Object(z.a)().formatMessage;
  var n = Object(i.e)(function (e) {
    return e.phoneCallInfo;
  });
  var a = Object(r.useState)(n.incomingPhoneNumber);
  var s = Object(x.a)(a, 2);
  var c = s[0];
  var l = s[1];
  return o.a.createElement("div", {
    className: Z.a.receiveCall
  }, o.a.createElement("div", {
    className: Z.a.deviceBox
  }, o.a.createElement("div", {
    className: Z.a.callStatus
  }, o.a.createElement("div", {
    className: Z.a.phoneNumber
  }, c), n.callStatus === u.b.IDEL && o.a.createElement("div", null, t({
    id: "emulator.callNumber"
  })), n.callStatus === u.b.RINGING && o.a.createElement("div", null, t({
    id: "emulator.onRinging"
  })), n.callStatus === u.b.OFFHOOK && o.a.createElement("div", null, t({
    id: "emulator.onCalling"
  })))), o.a.createElement("div", {
    className: Z.a.phoneNumberBox
  }, o.a.createElement("div", {
    className: Z.a.phoneNumber
  }, t({
    id: "emulator.incomingNumber"
  })), o.a.createElement(F.k, {
    warning: !c,
    defaultValue: c,
    placeholder: t({
      id: "emulator.incomingNumberPlaceHolder"
    }),
    onChange: function (e) {
      l(e);
    }
  }), o.a.createElement("div", {
    className: Z.a.warning
  }, !c && o.a.createElement("span", null, t({
    id: "emulator.incomingNumberPlaceHolder"
  })))), o.a.createElement("div", {
    className: N()(Z.a.callBtnBox, Z.a.flexSC)
  }, o.a.createElement("div", {
    className: "incomingCall" === n.callType && n.callStatus !== u.b.IDEL ? Z.a.active : ""
  }, o.a.createElement("div", {
    id: "emulatorReceiveCallEnd",
    className: N()(Z.a.callBtnItem, Z.a.callEnd),
    onClick: function () {
      if ("incomingCall" === n.callType && n.callStatus !== u.b.IDEL) {
        Object(X.press)("emulatorReceiveCallEnd");
        e(h({
          onPhoneCallEnd: {
            callingPageVisible: !1,
            callType: "incomingCall",
            callStatus: u.b.IDEL
          }
        }));
        e(_({
          callStatus: u.b.IDEL
        }));
      }
    }
  }, o.a.createElement(F.j, {
    type: "icon-phone-call-disconnect"
  })), o.a.createElement("span", {
    className: Z.a.callBtnText
  }, t({
    id: "emulator.callEndByOtherSide"
  }))), o.a.createElement("div", {
    className: n.callStatus === u.b.IDEL && c ? Z.a.active : ""
  }, o.a.createElement("div", {
    id: "emulatorReceiveCallConnect",
    className: N()(Z.a.callBtnItem, Z.a.callConnect),
    onClick: function () {
      if (n.callStatus === u.b.IDEL && c) {
        Object(X.press)("emulatorReceiveCallConnect");
        e(h({
          onReceivePhoneCall: {
            callingPageVisible: !0,
            phoneNumber: c,
            callType: "incomingCall",
            callStatus: u.b.RINGING
          }
        }));
        e(_({
          incomingPhoneNumber: c,
          callType: "incomingCall",
          callStatus: u.b.RINGING
        }));
      }
    }
  }, o.a.createElement(F.j, {
    type: "icon-phone-call-dial"
  })), o.a.createElement("span", {
    className: Z.a.callBtnText
  }, t({
    id: "emulator.callByOtherSide"
  })))));
};
var ee = function () {
  var e = Object(i.d)();
  var t = Object(z.a)().formatMessage;
  var n = Object(r.useState)("123 4567 8901");
  var a = Object(x.a)(n, 2);
  var s = a[0];
  var c = a[1];
  var l = Object(r.useState)(t({
    id: "emulator.smsContentDefault"
  }));
  var u = Object(x.a)(l, 2);
  var d = u[0];
  var p = u[1];
  return o.a.createElement("div", {
    className: Z.a.ReceiveSms
  }, o.a.createElement("div", {
    className: Z.a.phoneNumberBox
  }, o.a.createElement("div", {
    className: Z.a.phoneNumber
  }, t({
    id: "emulator.smsNumber"
  })), o.a.createElement(F.k, {
    defaultValue: s,
    warning: !s,
    placeholder: t({
      id: "emulator.smsNumberPlaceHolder"
    }),
    onChange: function (e) {
      c(e);
    },
    maxLength: 20
  }), o.a.createElement("div", {
    className: Z.a.warning
  }, !s && o.a.createElement("span", null, t({
    id: "emulator.smsNumberPlaceHolder"
  })))), o.a.createElement("div", {
    className: Z.a.phoneNumberBox
  }, o.a.createElement("div", {
    className: Z.a.phoneNumber
  }, t({
    id: "emulator.smsContent"
  })), o.a.createElement(F.A, {
    defaultValue: d,
    rows: 10,
    maxLength: 200,
    placeholder: t({
      id: "emulator.smsContentPlaceHolder"
    }),
    onChange: function (e) {
      p(e.target.value);
    }
  }), o.a.createElement("div", {
    className: Z.a.textAreaWarning
  }, !d && o.a.createElement("span", null, t({
    id: "emulator.smsContentPlaceHolder"
  })))), o.a.createElement("div", {
    id: "emulatorReceiveSms",
    onClick: function () {
      if (s && d) {
        Object(X.press)("emulatorReceiveSms");
        e(h({
          onReceiveSms: {
            receiveSmsPageVisible: !0,
            receiveSmsNumber: s,
            receiveSmsContent: d
          }
        }));
      }
    },
    className: N()(Z.a.receiveSmsBtn, (!s || !d) && Z.a.disabled)
  }, t({
    id: "emulator.receiveSms"
  })));
};
var te = ["SHAKE", "ROTATION", "POSITION"];
var ne = function (e) {
  var t = e.messageWindow;
  var n = Object(i.d)();
  var a = Object(i.e)(function (e) {
    return e.visiblePanel;
  });
  var s = Object(i.e)(function (e) {
    return e.language;
  });
  var c = Object(r.useRef)(null);
  Object(r.useEffect)(function () {
    if (t) {
      n(function (e) {
        return {
          type: "SET_EMIT_EVENT",
          payload: e
        };
      }(t));
    }
  }, [n, t]);
  Object(r.useEffect)(function () {
    var e = function (e) {
      var t = e.data;
      var r = t.type;
      var o = t.data;
      if ("EMULATOR" === r) {
        Object.keys(o).forEach(function (e) {
          !function (e, t) {
            switch (e) {
              case "ready":
                n({
                  type: "PUSH_ALL_DATA",
                  payload: void 0
                });
            }
          }(e, o[e]);
        });
      }
      if ("TO_EMULATOR" === r) {
        Object.keys(o).forEach(function (e) {
          if ("playing" === e) {
            n(_({
              callStatus: u.b.IDEL
            }));
          }
          if ("phoneCallInfo" === e) {
            n(_(o[e]));
          }
        });
      }
    };
    var t = function (e) {
      n(g(""));
      n(h({
        visiblePanel: ""
      }));
    };
    window.addEventListener("click", t);
    window.addEventListener("message", e);
    return function () {
      window.removeEventListener("message", e);
      window.removeEventListener("click", t);
    };
  }, [n]);
  return o.a.createElement(R.b, {
    locale: s,
    messages: k.e[s] || k.e[k.b]
  }, o.a.createElement("div", {
    className: "emulator-wrapper",
    ref: c,
    onClick: function (e) {
      if (e.target !== c.current) {
        e.stopPropagation();
      }
    }
  }, o.a.createElement(q, null), o.a.createElement("div", {
    className: N()("emulator-panel-wrapper", a && "visible")
  }, o.a.createElement("div", {
    className: "emulator-contentWrapper"
  }, a && te.includes(a) && o.a.createElement(P, null), o.a.createElement(V, null), "DIAL_CALL" === a && o.a.createElement(J, null), "RECEIVE_CALL" === a && o.a.createElement($, null), "RECEIVE_SMS" === a && o.a.createElement(ee, null)))));
};
require("./1159");
var re = function () {
  return o.a.createElement("svg", {
    "aria-hidden": "true",
    width: "0",
    height: "0"
  }, o.a.createElement("symbol", {
    id: "icon-phone-rotation",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M733.786353 469.564235a60.235294 60.235294 0 0 1 60.235294 60.235294v180.224a60.235294 60.235294 0 0 1-60.235294 60.235295h-179.109647a59.934118 59.934118 0 0 0 11.143529-34.876236V469.534118h167.966118z",
    fill: "#847DA4",
    opacity: ".5"
  }), o.a.createElement("path", {
    d: "M677.376 268.468706c12.498824 6.083765 24.124235 13.974588 34.635294 23.792941 21.082353 19.877647 35.448471 41.863529 42.706824 65.626353h34.334117a12.047059 12.047059 0 0 1 9.637647 19.275294l-51.2 68.096a12.047059 12.047059 0 0 1-19.245176 0l-51.169882-68.096a12.047059 12.047059 0 0 1 9.637647-19.275294l22.859294-0.030118c-5.782588-12.107294-14.576941-23.672471-26.443294-34.846117a96.587294 96.587294 0 0 0-24.154353-16.564706 115.952941 115.952941 0 0 0-62.885647-10.360471l-3.824942 0.542118a21.082353 21.082353 0 1 1-8.131764-41.381647l4.306823-0.692706a156.732235 156.732235 0 0 1 88.937412 13.944471z",
    fill: "#69C0FF"
  }), o.a.createElement("path", {
    d: "M462.576941 240.941176a60.235294 60.235294 0 0 1 60.235294 60.235295v421.647058a60.235294 60.235294 0 0 1-60.235294 60.235295H240.941176a60.235294 60.235294 0 0 1-60.235294-60.235295V301.176471a60.235294 60.235294 0 0 1 60.235294-60.235295h221.635765z m-43.188706 108.42353h-135.228235a30.117647 30.117647 0 0 0-30.117647 30.117647v237.929412a30.117647 30.117647 0 0 0 30.117647 30.117647h135.228235a30.117647 30.117647 0 0 0 30.117647-30.117647v-237.929412a30.117647 30.117647 0 0 0-30.117647-30.117647z",
    fill: "#847DA4"
  })), o.a.createElement("symbol", {
    id: "icon-phone-shake",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M447.397647 216.726588l252.596706 72.432941a60.235294 60.235294 0 0 1 41.291294 74.511059l-117.699765 410.50353a60.235294 60.235294 0 0 1-74.511058 41.261176l-252.596706-72.402823a60.235294 60.235294 0 0 1-41.291294-74.511059l117.699764-410.50353a60.235294 60.235294 0 0 1 74.511059-41.261176z m19.817412 119.597177a30.117647 30.117647 0 0 0-37.25553 20.660706l-66.409411 231.574588a30.117647 30.117647 0 0 0 20.660706 37.225412l152.606117 43.791058a30.117647 30.117647 0 0 0 37.25553-20.660705l66.409411-231.574589a30.117647 30.117647 0 0 0-20.660706-37.255529z",
    fill: "#847DA4"
  }), o.a.createElement("path", {
    d: "M747.309176 208.715294a136.673882 136.673882 0 0 1 53.157648 30.59953c9.035294 8.312471 16.715294 17.769412 22.64847 28.461176 16.323765 29.455059 19.576471 61.741176 9.908706 95.563294a21.082353 21.082353 0 1 1-40.538353-11.625412c6.656-23.250824 4.547765-43.971765-6.264471-63.488a71.077647 71.077647 0 0 0-14.275764-17.859764 101.074824 101.074824 0 0 0-24.877177-16.504471l-3.041882-1.385412-5.029647-2.078117-3.312941-1.114353a21.082353 21.082353 0 0 1 11.625411-40.538353zM245.157647 829.229176a136.673882 136.673882 0 0 1-53.187765-30.599529c-9.035294-8.312471-16.685176-17.769412-22.618353-28.431059-16.323765-29.455059-19.606588-61.741176-9.908705-95.563294a21.082353 21.082353 0 1 1 40.538352 11.625412c-6.686118 23.250824-4.577882 43.971765 6.234353 63.488 3.614118 6.535529 8.432941 12.468706 14.275765 17.829647 7.348706 6.746353 15.962353 12.257882 24.907294 16.534588l5.722353 2.529883 4.216471 1.596235 1.415529 0.451765a21.082353 21.082353 0 0 1-11.625412 40.538352z",
    fill: "#69C0FF"
  })), o.a.createElement("symbol", {
    id: "icon-phone-shake-selected",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M447.397647 216.726588l252.596706 72.432941a60.235294 60.235294 0 0 1 41.291294 74.511059l-117.699765 410.50353a60.235294 60.235294 0 0 1-74.511058 41.261176l-252.596706-72.402823a60.235294 60.235294 0 0 1-41.291294-74.511059l117.699764-410.50353a60.235294 60.235294 0 0 1 74.511059-41.261176z m19.817412 119.597177a30.117647 30.117647 0 0 0-37.25553 20.660706l-66.409411 231.574588a30.117647 30.117647 0 0 0 20.660706 37.225412l152.606117 43.791058a30.117647 30.117647 0 0 0 37.25553-20.660705l66.409411-231.574589a30.117647 30.117647 0 0 0-20.660706-37.255529z",
    fill: "#FFFFFF"
  }), o.a.createElement("path", {
    d: "M747.309176 208.715294a136.673882 136.673882 0 0 1 53.157648 30.59953c9.035294 8.312471 16.715294 17.769412 22.64847 28.461176 16.323765 29.455059 19.576471 61.741176 9.908706 95.563294a21.082353 21.082353 0 1 1-40.538353-11.625412c6.656-23.250824 4.547765-43.971765-6.264471-63.488a71.077647 71.077647 0 0 0-14.275764-17.859764 101.074824 101.074824 0 0 0-24.877177-16.504471l-3.041882-1.385412-5.029647-2.078117-3.312941-1.114353a21.082353 21.082353 0 0 1 11.625411-40.538353zM245.157647 829.229176a136.673882 136.673882 0 0 1-53.187765-30.599529c-9.035294-8.312471-16.685176-17.769412-22.618353-28.431059-16.323765-29.455059-19.606588-61.741176-9.908705-95.563294a21.082353 21.082353 0 1 1 40.538352 11.625412c-6.686118 23.250824-4.577882 43.971765 6.234353 63.488 3.614118 6.535529 8.432941 12.468706 14.275765 17.829647 7.348706 6.746353 15.962353 12.257882 24.907294 16.534588l5.722353 2.529883 4.216471 1.596235 1.415529 0.451765a21.082353 21.082353 0 0 1-11.625412 40.538352z",
    fill: "#69C0FF"
  })), o.a.createElement("symbol", {
    id: "icon-phone-rotation-selected",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M733.786353 469.564235a60.235294 60.235294 0 0 1 60.235294 60.235294v180.224a60.235294 60.235294 0 0 1-60.235294 60.235295h-179.109647a59.934118 59.934118 0 0 0 11.143529-34.876236V469.534118h167.966118z",
    fill: "#FFFFFF",
    opacity: ".5"
  }), o.a.createElement("path", {
    d: "M677.376 268.468706c12.498824 6.083765 24.124235 13.974588 34.635294 23.792941 21.082353 19.877647 35.448471 41.863529 42.706824 65.626353h34.334117a12.047059 12.047059 0 0 1 9.637647 19.275294l-51.2 68.096a12.047059 12.047059 0 0 1-19.245176 0l-51.169882-68.096a12.047059 12.047059 0 0 1 9.637647-19.275294l22.859294-0.030118c-5.782588-12.107294-14.576941-23.672471-26.443294-34.846117a96.587294 96.587294 0 0 0-24.154353-16.564706 115.952941 115.952941 0 0 0-62.885647-10.360471l-3.824942 0.542118a21.082353 21.082353 0 1 1-8.131764-41.381647l4.306823-0.692706a156.732235 156.732235 0 0 1 88.937412 13.944471z",
    fill: "#69C0FF"
  }), o.a.createElement("path", {
    d: "M462.576941 240.941176a60.235294 60.235294 0 0 1 60.235294 60.235295v421.647058a60.235294 60.235294 0 0 1-60.235294 60.235295H240.941176a60.235294 60.235294 0 0 1-60.235294-60.235295V301.176471a60.235294 60.235294 0 0 1 60.235294-60.235295h221.635765z m-43.188706 108.42353h-135.228235a30.117647 30.117647 0 0 0-30.117647 30.117647v237.929412a30.117647 30.117647 0 0 0 30.117647 30.117647h135.228235a30.117647 30.117647 0 0 0 30.117647-30.117647v-237.929412a30.117647 30.117647 0 0 0-30.117647-30.117647z",
    fill: "#FFFFFF"
  })), o.a.createElement("symbol", {
    id: "icon-phone-move",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M492.694588 252.837647a60.235294 60.235294 0 0 1 60.235294 60.235294v421.647059a60.235294 60.235294 0 0 1-60.235294 60.235294H271.058824a60.235294 60.235294 0 0 1-60.235295-60.235294v-421.647059a60.235294 60.235294 0 0 1 60.235295-60.235294h221.635764z m-43.188706 108.423529h-135.228235a30.117647 30.117647 0 0 0-30.117647 30.117648v237.929411a30.117647 30.117647 0 0 0 30.117647 30.117647h135.228235a30.117647 30.117647 0 0 0 30.117647-30.117647v-237.929411a30.117647 30.117647 0 0 0-30.117647-30.117648z",
    fill: "#847DA4"
  }), o.a.createElement("path", {
    d: "M734.870588 435.501176a12.047059 12.047059 0 0 1 8.222118 3.252706l80.353882 74.872471a12.047059 12.047059 0 0 1 0.602353 17.016471l-0.602353 0.602352-80.353882 74.872471a12.047059 12.047059 0 0 1-20.269177-8.794353v-43.821176h-120.470588a30.117647 30.117647 0 0 1-30.117647-30.117647v-6.565647a30.117647 30.117647 0 0 1 30.117647-30.117648h120.470588v-39.152941c0-6.625882 5.421176-12.047059 12.047059-12.047059z",
    fill: "#69C0FF"
  })), o.a.createElement("symbol", {
    id: "icon-phone-move-selected",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M492.694588 252.837647a60.235294 60.235294 0 0 1 60.235294 60.235294v421.647059a60.235294 60.235294 0 0 1-60.235294 60.235294H271.058824a60.235294 60.235294 0 0 1-60.235295-60.235294v-421.647059a60.235294 60.235294 0 0 1 60.235295-60.235294h221.635764z m-43.188706 108.423529h-135.228235a30.117647 30.117647 0 0 0-30.117647 30.117648v237.929411a30.117647 30.117647 0 0 0 30.117647 30.117647h135.228235a30.117647 30.117647 0 0 0 30.117647-30.117647v-237.929411a30.117647 30.117647 0 0 0-30.117647-30.117648z",
    fill: "#FFFFFF"
  }), o.a.createElement("path", {
    d: "M734.870588 435.501176a12.047059 12.047059 0 0 1 8.222118 3.252706l80.353882 74.872471a12.047059 12.047059 0 0 1 0.602353 17.016471l-0.602353 0.602352-80.353882 74.872471a12.047059 12.047059 0 0 1-20.269177-8.794353v-43.821176h-120.470588a30.117647 30.117647 0 0 1-30.117647-30.117647v-6.565647a30.117647 30.117647 0 0 1 30.117647-30.117648h120.470588v-39.152941c0-6.625882 5.421176-12.047059 12.047059-12.047059z",
    fill: "#69C0FF"
  })), o.a.createElement("symbol", {
    id: "icon-phone-move-x",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M456.3968 51.2v490.8032l21.1968 21.1968-21.1968 21.1968V614.4h-30.0032l-353.9968 353.9968L0 896l353.9968-354.048V51.2h102.4z",
    fill: "#DDD8F3"
  }), o.a.createElement("path", {
    d: "M844.6464 417.792a20.48 20.48 0 0 1 28.928 0l131.584 131.584a20.48 20.48 0 0 1 0 28.9792l-131.584 131.584a20.48 20.48 0 0 1-34.9184-14.4896V614.4H353.9456v-102.4h484.608V432.2816a20.48 20.48 0 0 1 3.4816-11.3152z",
    fill: "#6E4FF4"
  })), o.a.createElement("symbol", {
    id: "icon-phone-move-y",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M456.3968 542.0032l21.1968 21.1968h490.8032v102.4H477.5936l-353.9968 353.9968L51.2 947.2l353.9968-353.9968V563.2H435.2l21.1968-21.1968z",
    fill: "#DDD8F3"
  }), o.a.createElement("path", {
    d: "M443.7504 14.4896a20.48 20.48 0 0 1 28.9792 0l131.584 131.584a20.48 20.48 0 0 1-14.4896 34.9696l-82.2272-0.0512V665.6h-102.4V180.992H326.656a20.48 20.48 0 0 1-11.3664-3.4304l-3.072-2.56a20.48 20.48 0 0 1 0-28.928z",
    fill: "#6E4FF4"
  })), o.a.createElement("symbol", {
    id: "icon-phone-move-z",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M460.8 102.4v460.8h460.8v102.4H358.4V102.4h102.4z",
    fill: "#DDD8F3"
  }), o.a.createElement("path", {
    d: "M409.6 542.0032L460.8 563.2l21.1968 51.2-215.3984 215.3984 56.832 56.832a20.48 20.48 0 0 1 5.632 10.496l0.3584 3.9936a20.48 20.48 0 0 1-20.48 20.48H122.88a20.48 20.48 0 0 1-20.48-20.48v-186.0608a20.48 20.48 0 0 1 34.9696-14.4896l56.7808 56.832L409.6 542.0032z",
    fill: "#6E4FF4"
  })), o.a.createElement("symbol", {
    id: "icon-phone-rotation-x",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M512 153.6c176.0256 0 307.2 163.2256 307.2 358.4s-131.1744 358.4-307.2 358.4c-138.3936 0-249.088-100.9152-290.048-238.9504l105.5744 0.0512c34.2016 95.0784 107.008 159.232 184.4736 159.232 106.752 0 204.8-122.0096 204.8-278.7328s-98.048-278.784-204.8-278.784c-63.744 0-124.416 43.52-162.8672 111.9232l24.32 23.6032a20.48 20.48 0 0 1-14.336 35.1744H225.28a20.48 20.48 0 0 1-20.48-20.48V253.2864a20.48 20.48 0 0 1 34.7648-14.6944l39.2704 38.2464C334.1312 201.6768 416.4608 153.6 512 153.6z m113.8176 318.5664c23.6032 0 25.4464 16.9984 25.6 35.2256V512c0 19.9168 0 39.8336-25.6 39.8336H39.8336a39.8336 39.8336 0 1 1 0-79.6672h585.984z m358.4 0a39.8336 39.8336 0 1 1 0 79.6672H884.736c3.6864-13.312 5.5296-26.5728 5.5296-39.8336 0-13.312-1.8432-26.5216-5.5296-39.8336h99.3792z"
  })), o.a.createElement("symbol", {
    id: "icon-phone-rotation-y",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M563.2 884.7872V972.8a51.2 51.2 0 0 1-102.4 0v-88.0128a242.8928 242.8928 0 0 0 102.4 0zM872.1408 204.8a20.48 20.48 0 0 1 14.4896 34.9696L835.072 291.4304C919.7056 346.2656 972.8 423.424 972.8 512c0 176.0256-209.92 307.2-460.8 307.2s-460.8-131.1744-460.8-307.2c0-138.3936 129.792-249.088 307.2-290.0992v105.6256C236.1344 361.728 153.6 434.5344 153.6 512c0 106.752 156.8768 204.8 358.4 204.8s358.4-98.048 358.4-204.8c0-55.0912-41.7792-107.8784-109.9264-146.0736l-59.904 59.904A20.48 20.48 0 0 1 665.6 411.3408V225.28c0-11.264 9.216-20.48 20.48-20.48zM512 0a51.2 51.2 0 0 1 51.2 51.2v574.6176c0 23.7568-22.0672 25.4464-45.7216 25.6H512c-25.6 0-51.2 0-51.2-25.6V51.2a51.2 51.2 0 0 1 51.2-51.2z"
  })), o.a.createElement("symbol", {
    id: "icon-phone-rotation-z",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M425.3184 51.2l18.1248 91.2896a372.224 372.224 0 1 0 387.9424 166.5024l-47.3088 47.2576a20.48 20.48 0 0 1-34.9696-14.4896V179.0976c0-11.3152 9.1648-20.48 20.48-20.48h162.7136a20.48 20.48 0 0 1 14.4896 34.9184l-48.2816 48.3328A465.2544 465.2544 0 1 1 412.672 53.9136L425.3184 51.2z m91.136 363.264a93.0304 93.0304 0 1 1 0 186.112 93.0304 93.0304 0 0 1 0-186.112z"
  })), o.a.createElement("symbol", {
    id: "icon-phone-dial-call",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M554.616471 623.616a169.803294 169.803294 0 0 0 1.927529-2.048 1770.616471 1770.616471 0 0 0 37.285647-40.598588c12.498824-13.914353 30.870588-10.962824 40.658824-5.632 19.275294 10.541176 59.090824 32.376471 72.282353 40.207059 9.035294 5.210353 16.052706 16.926118 16.052705 24.967529v32.105412c0 8.643765-2.951529 20.329412-10.87247 31.232-15.149176 20.389647-46.019765 49.091765-92.129883 49.091764-72.523294 0-154.142118-34.936471-244.163764-120.32-70.656-66.981647-113.362824-157.936941-128.481883-201.125647C242.748235 419.508706 240.941176 403.034353 240.941176 391.529412v-27.045647c0-37.285647 28.702118-68.186353 47.164236-83.33553 7.589647-6.565647 17.167059-10.089412 25.118117-10.089411h24.45553c12.890353 0.240941 21.082353 8.764235 24.244706 16.052705 7.800471 18.130824 24.636235 60.536471 33.641411 85.142589 3.343059 9.125647 6.023529 21.383529 6.02353 35.237647 0 12.769882-24.606118 38.972235-33.039059 47.043764s-5.842824 37.647059 71.228235 115.59153c51.109647 51.712 82.823529 60.536471 98.424471 60.626823 8.794353 0 13.040941-3.614118 16.414118-7.137882z",
    fill: "#847DA4"
  }), o.a.createElement("path", {
    d: "M644.517647 315.030588a12.047059 12.047059 0 0 1 8.222118 3.252706l80.353882 74.872471a12.047059 12.047059 0 0 1 0.602353 17.01647l-0.602353 0.602353-80.353882 74.872471a12.047059 12.047059 0 0 1-20.269177-8.794353v-43.821177h-120.470588a30.117647 30.117647 0 0 1-30.117647-30.117647v-6.565647a30.117647 30.117647 0 0 1 30.117647-30.117647h120.470588v-39.152941c0-6.625882 5.421176-12.047059 12.047059-12.047059z",
    fill: "#95DE64"
  })), o.a.createElement("symbol", {
    id: "icon-phone-dial-call-selected",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M554.616471 623.616l1.837176-1.957647a1759.774118 1759.774118 0 0 0 37.376-40.658824c12.498824-13.944471 30.870588-10.992941 40.658824-5.662117 19.275294 10.541176 59.090824 32.376471 72.282353 40.207059 9.035294 5.210353 16.052706 16.926118 16.052705 24.967529v32.105412c0 8.643765-2.951529 20.329412-10.87247 31.232-15.149176 20.389647-46.019765 49.091765-92.129883 49.091764-72.523294 0-154.142118-34.936471-244.163764-120.32-70.656-66.981647-113.362824-157.936941-128.481883-201.125647C242.748235 419.508706 240.941176 403.034353 240.941176 391.529412v-27.045647c0-37.285647 28.702118-68.186353 47.164236-83.33553 7.589647-6.565647 17.167059-10.089412 25.118117-10.089411h24.45553c12.890353 0.240941 21.082353 8.764235 24.244706 16.052705 7.800471 18.130824 24.636235 60.536471 33.641411 85.142589 3.343059 9.125647 6.023529 21.383529 6.02353 35.237647 0 12.769882-24.606118 38.972235-33.039059 47.043764s-5.842824 37.647059 71.228235 115.59153c51.109647 51.712 82.823529 60.536471 98.424471 60.626823 8.794353 0 13.040941-3.614118 16.414118-7.137882z",
    fill: "#FFFFFF"
  }), o.a.createElement("path", {
    d: "M644.517647 315.030588a12.047059 12.047059 0 0 1 8.222118 3.252706l80.353882 74.872471a12.047059 12.047059 0 0 1 0.602353 17.01647l-0.602353 0.602353-80.353882 74.872471a12.047059 12.047059 0 0 1-20.269177-8.794353v-43.821177h-120.470588a30.117647 30.117647 0 0 1-30.117647-30.117647v-6.565647a30.117647 30.117647 0 0 1 30.117647-30.117647h120.470588v-39.152941c0-6.625882 5.421176-12.047059 12.047059-12.047059z",
    fill: "#95DE64"
  })), o.a.createElement("symbol", {
    id: "icon-phone-receive-call",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M554.616471 642.048a169.803294 169.803294 0 0 0 1.927529-2.048 1770.616471 1770.616471 0 0 0 37.285647-40.598588c12.498824-13.944471 30.870588-10.962824 40.658824-5.632 19.275294 10.541176 59.090824 32.346353 72.282353 40.176941 9.035294 5.240471 16.052706 16.956235 16.052705 24.997647v32.105412c0 8.643765-2.951529 20.299294-10.87247 31.232-15.149176 20.389647-46.019765 49.091765-92.129883 49.091764-72.523294 0-154.142118-34.936471-244.163764-120.32-70.656-66.981647-113.362824-157.936941-128.481883-201.155764C242.748235 437.910588 240.941176 421.466353 240.941176 409.961412v-27.045647c0-37.285647 28.702118-68.216471 47.164236-83.365647 7.589647-6.565647 17.167059-10.059294 25.118117-10.059294h24.45553c12.890353 0.210824 21.082353 8.764235 24.244706 16.022588 7.800471 18.160941 24.636235 60.536471 33.641411 85.172706 3.343059 9.095529 6.023529 21.383529 6.02353 35.237647 0 12.769882-24.606118 38.972235-33.039059 47.043764s-5.842824 37.647059 71.228235 115.59153c51.109647 51.712 82.823529 60.536471 98.424471 60.626823 8.794353 0 13.040941-3.614118 16.414118-7.137882z",
    fill: "#847DA4"
  }), o.a.createElement("path", {
    d: "M502.272 386.078118a12.047059 12.047059 0 0 0-3.523765 8.101647l-3.885176 109.748706a12.047059 12.047059 0 0 0 11.625412 12.468705h0.843294l109.778823-3.885176a12.047059 12.047059 0 0 0 8.07153-20.540235l-30.960942-30.991059 85.172706-85.172706a30.117647 30.117647 0 0 0 0-42.586353l-4.638117-4.668235a30.117647 30.117647 0 0 0-42.586353 0l-85.202824 85.202823-27.648-27.708235a12.047059 12.047059 0 0 0-17.046588 0z",
    fill: "#95DE64"
  })), o.a.createElement("symbol", {
    id: "icon-phone-receive-call-selected",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M554.616471 642.048a169.803294 169.803294 0 0 0 1.927529-2.048 1770.616471 1770.616471 0 0 0 37.285647-40.598588c12.498824-13.944471 30.870588-10.962824 40.658824-5.632 19.275294 10.541176 59.090824 32.346353 72.282353 40.176941 9.035294 5.240471 16.052706 16.956235 16.052705 24.997647v32.105412c0 8.643765-2.951529 20.299294-10.87247 31.232-15.149176 20.389647-46.019765 49.091765-92.129883 49.091764-72.523294 0-154.142118-34.936471-244.163764-120.32-70.656-66.981647-113.362824-157.936941-128.481883-201.155764C242.748235 437.910588 240.941176 421.466353 240.941176 409.961412v-27.045647c0-37.285647 28.702118-68.216471 47.164236-83.365647 7.589647-6.565647 17.167059-10.059294 25.118117-10.059294h24.45553c12.890353 0.210824 21.082353 8.764235 24.244706 16.022588 7.800471 18.160941 24.636235 60.536471 33.641411 85.172706 3.343059 9.095529 6.023529 21.383529 6.02353 35.237647 0 12.769882-24.606118 38.972235-33.039059 47.043764s-5.842824 37.647059 71.228235 115.59153c51.109647 51.712 82.823529 60.536471 98.424471 60.626823 8.794353 0 13.040941-3.614118 16.414118-7.137882z",
    fill: "#FFFFFF"
  }), o.a.createElement("path", {
    d: "M502.272 386.078118a12.047059 12.047059 0 0 0-3.523765 8.101647l-3.885176 109.748706a12.047059 12.047059 0 0 0 11.625412 12.468705h0.843294l109.778823-3.885176a12.047059 12.047059 0 0 0 8.07153-20.540235l-30.960942-30.991059 85.172706-85.172706a30.117647 30.117647 0 0 0 0-42.586353l-4.638117-4.668235a30.117647 30.117647 0 0 0-42.586353 0l-85.202824 85.202823-27.648-27.708235a12.047059 12.047059 0 0 0-17.046588 0z",
    fill: "#95DE64"
  })), o.a.createElement("symbol", {
    id: "icon-phone-receive-sms",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M353.882353 229.135059a28.611765 28.611765 0 0 0-28.611765 28.551529v82.883765l-86.046117 50.085647A57.283765 57.283765 0 0 0 210.823529 439.958588v286.057412A57.223529 57.223529 0 0 0 268.047059 783.058824h457.788235a57.223529 57.223529 0 0 0 57.22353-57.042824v-286.057412a57.223529 57.223529 0 0 0-28.400942-49.302588L668.611765 340.540235V257.686588a28.611765 28.611765 0 0 0-28.611765-28.551529h-286.117647z m5.993412 37.857882h272.474353v235.098353l-136.222118 75.535059-136.252235-75.595294V266.992941zM325.270588 406.618353v65.084235l-54.151529-33.581176L325.270588 406.588235z m343.341177 0.090353l54.151529 31.442823-54.151529 33.641412v-65.084235z",
    fill: "#847DA4"
  }), o.a.createElement("path", {
    d: "M411.286588 427.700706a12.047059 12.047059 0 0 0 3.222588 8.222118l74.872471 80.353882a12.047059 12.047059 0 0 0 17.046588 0.602353l0.602353-0.602353 74.872471-80.353882a12.047059 12.047059 0 0 0-8.824471-20.269177h-43.791059v-90.352941a30.117647 30.117647 0 0 0-30.117647-30.117647h-6.595764a30.117647 30.117647 0 0 0-30.117647 30.117647v90.352941h-39.122824a12.047059 12.047059 0 0 0-12.047059 12.047059z",
    fill: "#FFC069"
  })), o.a.createElement("symbol", {
    id: "icon-phone-receive-sms-selected",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M353.882353 229.135059a28.611765 28.611765 0 0 0-28.611765 28.551529v82.883765l-86.046117 50.085647A57.283765 57.283765 0 0 0 210.823529 439.958588v286.057412A57.223529 57.223529 0 0 0 268.047059 783.058824h457.788235a57.223529 57.223529 0 0 0 57.22353-57.042824v-286.057412a57.223529 57.223529 0 0 0-28.400942-49.302588L668.611765 340.540235V257.686588a28.611765 28.611765 0 0 0-28.611765-28.551529h-286.117647z m5.993412 37.857882h272.474353v235.098353l-136.222118 75.535059-136.252235-75.595294V266.992941zM325.270588 406.618353v65.084235l-54.151529-33.581176L325.270588 406.588235z m343.341177 0.090353l54.151529 31.442823-54.151529 33.641412v-65.084235z",
    fill: "#FFFFFF"
  }), o.a.createElement("path", {
    d: "M411.286588 427.700706a12.047059 12.047059 0 0 0 3.222588 8.222118l74.872471 80.353882a12.047059 12.047059 0 0 0 17.046588 0.602353l0.602353-0.602353 74.872471-80.353882a12.047059 12.047059 0 0 0-8.824471-20.269177h-43.791059v-90.352941a30.117647 30.117647 0 0 0-30.117647-30.117647h-6.595764a30.117647 30.117647 0 0 0-30.117647 30.117647v90.352941h-39.122824a12.047059 12.047059 0 0 0-12.047059 12.047059z",
    fill: "#FFC069"
  })), o.a.createElement("symbol", {
    id: "icon-actor-horizontal",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M418.752 210.176l-257.728 581.76a32 32 0 0 0 29.248 44.992H448a32 32 0 0 0 32-32V223.104c0-34.56-47.232-44.608-61.248-12.928zM415.936 374.4v398.464H239.424l176.512-398.464z"
  }), o.a.createElement("path", {
    d: "M592.512 309.312v463.616h210.432z",
    fill: "#BABDD2"
  }), o.a.createElement("path", {
    d: "M605.248 210.176l257.728 581.76a32 32 0 0 1-29.312 44.992H576a32 32 0 0 1-32-32V223.104c0-34.56 47.296-44.608 61.312-12.928zM608 374.4v398.464h176.512L608 374.464z"
  })), o.a.createElement("symbol", {
    id: "icon-actor-vertical",
    viewBox: "0 0 1024 1024"
  }, o.a.createElement("path", {
    d: "M815.808 420.736l-581.76-257.728a32 32 0 0 0-44.992 29.312v257.728a32 32 0 0 0 32 32h581.824c34.56 0 44.608-47.296 12.928-61.312z m-164.288-2.752H253.056V241.472L651.52 417.92z"
  }), o.a.createElement("path", {
    d: "M716.672 594.56H253.056v210.368z",
    fill: "#BABDD2"
  }), o.a.createElement("path", {
    d: "M815.808 607.232l-581.76 257.728a32 32 0 0 1-44.992-29.248V577.984a32 32 0 0 1 32-32h581.824c34.56 0 44.608 47.232 12.928 61.248z m-164.288 2.816H253.056v176.512l398.464-176.512z"
  })));
};
var _a;
_a = o.a.memo(function (e) {
  var t = e.messageWindow;
  return o.a.createElement(i.a, {
    store: A
  }, o.a.createElement(re, null), o.a.createElement(ne, {
    messageWindow: t
  }));
});
export { _a as a };
export default _a;