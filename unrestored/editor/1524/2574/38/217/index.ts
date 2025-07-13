"use strict";

export { m as a };
export { g as b };
import * as r from "../../11";
import * as o from "../../6";
import * as i from "../../27";
import * as a from "../../40";
import * as s from "../../57/index";
import * as c from "../../58/index";
import * as l from "../../206/29/index";
import * as u from "../../48/72";
import * as d from "../../48/index";
import * as p from "../../676/70";
import * as f from "../../678/360";
import * as h from "../../21/index";
var m = function (e) {
  Object(s.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(i.a)(this, n);
    e = t.call(this);
    window.addEventListener("message", function (t) {
      var n = t.data;
      var r = n.type;
      var i = n.data;
      if ("EMULATOR" === r) {
        Object.keys(i).forEach(function (t) {
          if (e.emit(t, i[t]), "onPhoneCallConnect" !== t && "onReceivePhoneCall" !== t && "onPhoneCallEnd" !== t && "onReceiveSms" !== t || Object(d.a)().dispatch(Object(u.s)(Object(o.a)({}, i[t]))), "onReceivePhoneCall" === t && Object(h.emitWidgetEventType)(p.c, t), "onPhoneCallEnd" === t) {
            var n;
            var r = p.a.DIAL_OUT_CALL_END;
            if ("incomingCall" === (null === (n = i[t]) || void 0 === n ? void 0 : n.callType)) {
              r = p.a.INCOMING_CALL_REFUSE_END;
            }
            Object(h.emitWidgetEventType)(p.c, t, r);
          }
          var a;
          var s;
          if ("onReceiveSms" === t) {
            Object(h.emitWidgetEventType)(f.a, t, null === (a = i[t]) || void 0 === a ? void 0 : a.receiveSmsContent, null === (s = i[t]) || void 0 === s ? void 0 : s.receiveSmsNumber);
          }
        });
      }
    });
    return e;
  }
  Object(a.a)(n, [{
    key: "emitToParent",
    value: function (e, t) {
      var n = window;
      if (Object(l.e)() && window.parent) {
        n = window.parent;
      }
      n.postMessage({
        type: "EMULATOR",
        data: Object(r.a)({}, e, t)
      }, "*");
    }
  }], [{
    key: "instance",
    get: function () {
      if (!n._instance) {
        n._instance = new n();
      }
      return n._instance;
    }
  }]);
  return n;
}(require("./388").a);
function g(e) {
  (Object(l.e)() ? window.parent : window).postMessage({
    type: "TO_EMULATOR",
    data: e
  }, "*");
}
m._instance = void 0;