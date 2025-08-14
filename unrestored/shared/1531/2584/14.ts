"use strict";

export { d as a };
import r = require("./6");
import o = require("../../../../src/shared/ui/language");
import i = require("./21/index");
import a = require("./28/index");
import s = require("./55");
var c = {};
function l(e, t) {
  c[e] = t;
}
function u(e) {
  var t = e.type;
  var n = e.messageId;
  var r = e.message;
  var o = e.values;
  var c = e.widgetId;
  var l = undefined === c ? "" : c;
  var u = i.currentContext();
  var d = r;
  if (n) {
    d = a.o(n);
  }
  if (!d) {
    throw new Error("message not set");
  }
  s.b.push({
    type: t || "warning",
    message: d,
    values: o,
    widgetId: l,
    screenId: (null === u || undefined === u ? undefined : u.screenId) || "",
    blockId: (null === u || undefined === u ? undefined : u.blockId) || ""
  });
}
l("string.notEmpty", function (e, t) {
  t = String(t);
  var n = "object" === typeof e ? e.value : e;
  if ("object" === typeof e && e.trim) {
    t = t.trim();
  }
  return 0 === t.length !== n;
});
l("string.maxLength", function (e, t) {
  t = String(t);
  var n = "object" === typeof e ? e.value : e;
  if ("object" === typeof e && e.trim) {
    t = t.trim();
  }
  return t.length <= n;
});
l("string.minLength", function (e, t) {
  t = String(t);
  var n = "object" === typeof e ? e.value : e;
  if ("object" === typeof e && e.trim) {
    t = t.trim();
  }
  return t.length >= n;
});
l("number.greaterThan", function (e, t) {
  return (t = Number(t)) >= ("object" === typeof e ? e.value : e);
});
l("number.lessThan", function (e, t) {
  return (t = Number(t)) <= ("object" === typeof e ? e.value : e);
});
l("number.isInteger", function (e, t) {
  return (t = Number(t)) % 1 === 0;
});
var d = {
  range: function (e, t, n) {
    var r = t.min;
    var o = t.max;
    return this.condition((undefined === r || e >= r) && (undefined === o || e <= o), n);
  },
  condition: function (e, t) {
    if (!e) {
      u(t);
    }
    return e;
  },
  emptyContent: function (e, t) {
    return this.condition(Boolean(e), t);
  },
  isNumber: function (e, t) {
    return this.condition("number" === typeof e, t);
  },
  validate: function (e) {
    var t = e.ruleKey;
    var n = e.ruleOptions;
    var i = e.inputValue;
    var a = e.values;
    var s = undefined === a ? {} : a;
    var l = e.widgetId;
    var d = true;
    var p = c[t];
    if (!p) {
      console.error("validator is not found", t);
      return true;
    }
    var f = function (e) {
      return "WidgetValidators.".concat(e);
    }(t);
    var h = "";
    if ("object" === typeof n) {
      h = n.value;
      if (n.message) {
        f = n.message;
      }
    } else {
      h = n;
    }
    var m = r.a(r.a({}, s), {}, {
      ruleValue: h,
      inputValue: i
    });
    try {
      if (!(d = p(n, i))) {
        u({
          widgetId: l,
          type: "error",
          message: o.d(f, m)
        });
      }
    } catch (g) {
      console.error("validate error", g);
    }
    return d;
  },
  log: u
};
export default d;