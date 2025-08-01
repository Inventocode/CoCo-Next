"use strict";

export { u as a };
export { d as b };
var r = require("./6");
var o = require("./27");
var i = require("./40");
var a = require("./68");
var s = require("./28/index");
var c = require("./21/index");
var l = require("./91");
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
        message: Object(s.o)(e),
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
        message: Object(s.o)(e.message),
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
export default u;