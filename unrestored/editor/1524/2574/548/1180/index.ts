"use strict";

export { A as a };
import * as r from "../../28";
import * as i from "../../0/index";
var o = (require("../../50/index"), require("../280"));
import * as a from "./100";
var s = (require("../../19"), require("../../54"), require("./701/index"));
import * as c from "./270/index";
import * as u from "./691/index";
var l = (require("./982"), require("../../33/index"), require("./777/index"));
var f = (require("../../95"), require("../../96"), require("../../322"), require("../../273"), require("../../120"), Object(s.a)({
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
}));
var h = function (e) {
  var t = e.date;
  var n = e.views;
  var r = e.setOpenView;
  var s = e.isLandscape;
  var l = e.openView;
  var h = Object(o.b)();
  var d = f();
  var p = Object(i.useMemo)(function () {
    return Object(u.d)(n);
  }, [n]);
  var _ = Object(i.useMemo)(function () {
    return Object(u.b)(n);
  }, [n]);
  return Object(i.createElement)(c.b, {
    isLandscape: s,
    className: Object(a.a)(!p && d.toolbar, s && d.toolbarLandscape)
  }, Object(i.createElement)(c.c, {
    variant: p ? "h3" : "subtitle1",
    onClick: function () {
      return r("year");
    },
    selected: "year" === l,
    label: h.getYearText(t)
  }), !p && !_ && Object(i.createElement)(c.c, {
    variant: "h4",
    selected: "date" === l,
    onClick: function () {
      return r("date");
    },
    align: s ? "left" : "center",
    label: h.getDatePickerHeaderText(t),
    className: Object(a.a)(s && d.dateLandscape)
  }), _ && Object(i.createElement)(c.c, {
    variant: "h4",
    onClick: function () {
      return r("month");
    },
    selected: "month" === l,
    label: h.getMonthText(t)
  }));
};
function d(e, t) {
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
      d(n, !0).forEach(function (t) {
        Object(r.a)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        d(n).forEach(function (t) {
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
  DefaultToolbarComponent: h
});
var g = Object(c.g)({
  useOptions: _,
  Input: c.a,
  useState: c.e,
  DefaultToolbarComponent: h
});
A.defaultProps = p;
g.defaultProps = p;