"use strict";

export { m as a };
export { g as b };
import r = require("../../11");
import o = require("../../6");
import i = require("../../27");
import a = require("../../40");
import s = require("../../57/index");
import c = require("../../58/index");
import l = require("../../28/index");
import u = require("../../48/72");
import d = require("../../48/index");
import p = require("../../676/70");
import f = require("../../678/360");
import h = require("../../21/index");
var m = function (e) {
  s.a(n, e);
  var t = c.a(n);
  function n() {
    var e;
    i.a(this, n);
    e = t.call(this);
    window.addEventListener("message", function (t) {
      var n = t.data;
      var r = n.type;
      var i = n.data;
      if ("EMULATOR" === r) {
        Object.keys(i).forEach(function (t) {
          e.emit(t, i[t]);
          if (!("onPhoneCallConnect" !== t && "onReceivePhoneCall" !== t && "onPhoneCallEnd" !== t && "onReceiveSms" !== t)) {
            d.a().dispatch(u.s(o.a({}, i[t])));
          }
          if ("onReceivePhoneCall" === t) {
            h.emitWidgetEventType(p.c, t);
          }
          if ("onPhoneCallEnd" === t) {
            var n;
            var r = p.a.DIAL_OUT_CALL_END;
            if ("incomingCall" === (null === (n = i[t]) || undefined === n ? undefined : n.callType)) {
              r = p.a.INCOMING_CALL_REFUSE_END;
            }
            h.emitWidgetEventType(p.c, t, r);
          }
          var a;
          var s;
          if ("onReceiveSms" === t) {
            h.emitWidgetEventType(f.a, t, null === (a = i[t]) || undefined === a ? undefined : a.receiveSmsContent, null === (s = i[t]) || undefined === s ? undefined : s.receiveSmsNumber);
          }
        });
      }
    });
    return e;
  }
  a.a(n, [{
    key: "emitToParent",
    value: function (e, t) {
      var n = window;
      if (l.e() && window.parent) {
        n = window.parent;
      }
      n.postMessage({
        type: "EMULATOR",
        data: r.a({}, e, t)
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
  (l.e() ? window.parent : window).postMessage({
    type: "TO_EMULATOR",
    data: e
  }, "*");
}
m._instance = undefined;
export default m;