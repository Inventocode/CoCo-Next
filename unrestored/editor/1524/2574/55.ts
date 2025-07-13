"use strict";

export { u as a };
export { d as b };
import * as r from "./6";
import * as o from "./27";
import * as i from "./40";
import * as a from "./68";
import * as s from "./206/29/index";
import * as c from "./21/index";
import * as l from "./91";
var u = "EXTENSION_WIDGET_MESSAGE_TYPE";
var d = new (function () {
  function e() {
    Object(o.a)(this, e);
  }
  Object(i.a)(e, [{
    key: "_pushMessage",
    value: function (e) {
      Object(l.a)({
        type: a.b.RUNTIME_LOG,
        data: Object(r.a)({
          msgType: "WIDGET_MESSAGE_TYPE"
        }, e)
      });
    }
  }, {
    key: "_pushWidgetMessage",
    value: function (e) {
      var t = Object(c.currentContext)();
      Object(l.a)({
        type: a.b.RUNTIME_LOG,
        data: Object(r.a)(Object(r.a)({}, e), {}, {
          msgType: u,
          screenId: "log" === e.type ? "" : (null === t || void 0 === t ? void 0 : t.screenId) || "",
          blockId: "log" === e.type ? "" : (null === t || void 0 === t ? void 0 : t.blockId) || ""
        })
      });
    }
  }, {
    key: "push",
    value: function (e) {
      Object(l.a)({
        type: a.b.RUNTIME_LOG,
        data: e
      });
    }
  }, {
    key: "print",
    value: function (e, t, n, r) {
      this._pushMessage({
        type: "print",
        blockId: t,
        screenId: e,
        message: n,
        values: r
      });
    }
  }, {
    key: "log",
    value: function (e, t) {
      this._pushMessage({
        type: "log",
        blockId: "",
        screenId: "",
        message: Object(s.n)(e),
        values: t
      });
    }
  }, {
    key: "customError",
    value: function (e, t, n, r) {
      this._pushMessage({
        type: "customError",
        blockId: t,
        screenId: e,
        message: n,
        values: r
      });
    }
  }, {
    key: "custom",
    value: function (e, t, n, r, o) {
      this._pushMessage({
        type: e,
        blockId: n,
        screenId: t,
        message: r,
        values: o
      });
    }
  }, {
    key: "playerWidgetLog",
    value: function (e) {
      this._pushMessage({
        type: "log",
        widgetId: e.widgetId,
        widgetType: e.widgetType,
        blockId: "",
        screenId: "",
        message: Object(s.n)(e.message),
        values: e.values
      });
    }
  }, {
    key: "widgetLog",
    value: function (e) {
      this._pushWidgetMessage(Object(r.a)(Object(r.a)({}, e), {}, {
        type: "log"
      }));
    }
  }, {
    key: "widgetWarn",
    value: function (e) {
      this._pushWidgetMessage(Object(r.a)(Object(r.a)({}, e), {}, {
        type: "warning"
      }));
    }
  }, {
    key: "widgetError",
    value: function (e) {
      this._pushWidgetMessage(Object(r.a)(Object(r.a)({}, e), {}, {
        type: "error"
      }));
    }
  }]);
  return e;
}())();