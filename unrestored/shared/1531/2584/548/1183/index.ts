"use strict";

export { A as a };
var r = require("../../29");
var i = require("react");
require("../../50/index");
var o = require("../280");
var a = require("./100");
require("../../19");
require("../../54");
var s = require("./701/index");
var c = require("./270/index");
var u = require("./691/index");
require("./983");
require("../../33/index");
var l = require("./778/index");
require("../../95");
require("../../96");
require("../../322");
require("../../273");
require("../../120");
var f = Object(s.a)({
  toolbar: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  toolbarLandscape: {
    padding: 16
  },
  dateLandscape: {
    marginRight: 16
  }
}, {
  name: "MuiPickersDatePickerRoot"
});
var d = function (e) {
  var t = e.date;
  var n = e.views;
  var r = e.setOpenView;
  var s = e.isLandscape;
  var l = e.openView;
  var d = Object(o.b)();
  var h = f();
  var p = Object(i.useMemo)(function () {
    return Object(u.d)(n);
  }, [n]);
  var _ = Object(i.useMemo)(function () {
    return Object(u.b)(n);
  }, [n]);
  return Object(i.createElement)(c.b, {
    isLandscape: s,
    className: Object(a.a)(!p && h.toolbar, s && h.toolbarLandscape)
  }, Object(i.createElement)(c.c, {
    variant: p ? "h3" : "subtitle1",
    onClick: function () {
      return r("year");
    },
    selected: "year" === l,
    label: d.getYearText(t)
  }), !p && !_ && Object(i.createElement)(c.c, {
    variant: "h4",
    selected: "date" === l,
    onClick: function () {
      return r("date");
    },
    align: s ? "left" : "center",
    label: d.getDatePickerHeaderText(t),
    className: Object(a.a)(s && h.dateLandscape)
  }), _ && Object(i.createElement)(c.c, {
    variant: "h4",
    onClick: function () {
      return r("month");
    },
    selected: "month" === l,
    label: d.getMonthText(t)
  }));
};
function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
var p = function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      h(n, !0).forEach(function (t) {
        Object(r.a)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        h(n).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}({}, l.b, {
  openTo: "date",
  views: ["year", "date"]
});
function _(e) {
  var t = Object(o.b)();
  return {
    getDefaultFormat: function () {
      return Object(u.c)(e.views, t);
    }
  };
}
var A = Object(c.g)({
  useOptions: _,
  Input: c.d,
  useState: c.i,
  DefaultToolbarComponent: d
});
var g = Object(c.g)({
  useOptions: _,
  Input: c.a,
  useState: c.e,
  DefaultToolbarComponent: d
});
A.defaultProps = p;
g.defaultProps = p;
export default A;