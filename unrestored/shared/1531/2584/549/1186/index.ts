"use strict";

export { v as a };
var r = require("../../29");
var i = require("react");
require("../../50/index");
var o = require("../../548/280");
var a = require("../../548/1183/100");
require("../../19");
require("../../54");
var s = require("../../548/1183/270/index");
require("../../548/1183/983");
require("../../33/index");
var c = require("../../548/1183/778/index");
require("../../95");
require("../../96");
require("../../322");
require("../../273");
require("../../120");
var u = require("../../548/1183/701/index");
var l = require("./682/index");
var f = require("./315/index");
var d = require("./365");
var h = Object(u.a)({
  toolbarLandscape: {
    flexWrap: "wrap"
  },
  toolbarAmpmLeftPadding: {
    paddingLeft: 50
  },
  separator: {
    margin: "0 4px 0 2px",
    cursor: "default"
  },
  hourMinuteLabel: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  hourMinuteLabelAmpmLandscape: {
    marginTop: "auto"
  },
  hourMinuteLabelReverse: {
    flexDirection: "row-reverse"
  },
  ampmSelection: {
    marginLeft: 20,
    marginRight: -20,
    display: "flex",
    flexDirection: "column"
  },
  ampmLandscape: {
    margin: "4px 0 auto",
    flexDirection: "row",
    justifyContent: "space-around",
    flexBasis: "100%"
  },
  ampmSelectionWithSeconds: {
    marginLeft: 15,
    marginRight: 10
  },
  ampmLabel: {
    fontSize: 18
  }
}, {
  name: "MuiPickersTimePickerToolbar"
});
var p = function (e) {
  var t = e.date;
  var n = e.views;
  var r = e.ampm;
  var c = e.openView;
  var u = e.onChange;
  var p = e.isLandscape;
  var _ = e.setOpenView;
  var A = Object(o.b)();
  var g = Object(l.a)();
  var v = h();
  var m = function (e, t, n) {
    var r = Object(o.b)();
    return {
      meridiemMode: Object(d.d)(e, r),
      handleMeridiemChange: Object(i.useCallback)(function (i) {
        var o = Object(d.c)(e, i, Boolean(t), r);
        n(o, !1);
      }, [t, e, n, r])
    };
  }(t, r, u);
  var y = m.meridiemMode;
  var b = m.handleMeridiemChange;
  var w = p ? "h3" : "h2";
  return Object(i.createElement)(s.b, {
    isLandscape: p,
    className: Object(a.a)(p ? v.toolbarLandscape : r && v.toolbarAmpmLeftPadding)
  }, Object(i.createElement)("div", {
    className: Object(a.a)(v.hourMinuteLabel, r && p && v.hourMinuteLabelAmpmLandscape, {
      rtl: v.hourMinuteLabelReverse
    }[g.direction])
  }, Object(f.d)(n, "hours") && Object(i.createElement)(s.c, {
    variant: w,
    onClick: function () {
      return _(d.b.HOURS);
    },
    selected: c === d.b.HOURS,
    label: A.getHourText(t, Boolean(r))
  }), Object(f.d)(n, ["hours", "minutes"]) && Object(i.createElement)(s.f, {
    label: ":",
    variant: w,
    selected: !1,
    className: v.separator
  }), Object(f.d)(n, "minutes") && Object(i.createElement)(s.c, {
    variant: w,
    onClick: function () {
      return _(d.b.MINUTES);
    },
    selected: c === d.b.MINUTES,
    label: A.getMinuteText(t)
  }), Object(f.d)(n, ["minutes", "seconds"]) && Object(i.createElement)(s.f, {
    variant: "h2",
    label: ":",
    selected: !1,
    className: v.separator
  }), Object(f.d)(n, "seconds") && Object(i.createElement)(s.c, {
    variant: "h2",
    onClick: function () {
      return _(d.b.SECONDS);
    },
    selected: c === d.b.SECONDS,
    label: A.getSecondText(t)
  })), r && Object(i.createElement)("div", {
    className: Object(a.a)(v.ampmSelection, p && v.ampmLandscape, Object(f.d)(n, "seconds") && v.ampmSelectionWithSeconds)
  }, Object(i.createElement)(s.c, {
    disableRipple: !0,
    variant: "subtitle1",
    selected: "am" === y,
    typographyClassName: v.ampmLabel,
    label: A.getMeridiemText("am"),
    onClick: function () {
      return b("am");
    }
  }), Object(i.createElement)(s.c, {
    disableRipple: !0,
    variant: "subtitle1",
    selected: "pm" === y,
    typographyClassName: v.ampmLabel,
    label: A.getMeridiemText("pm"),
    onClick: function () {
      return b("pm");
    }
  })));
};
function _(e, t) {
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
var A = function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      _(n, !0).forEach(function (t) {
        Object(r.a)(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        _(n).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}({}, c.c, {
  openTo: "hours",
  views: ["hours", "minutes"]
});
function g(e) {
  var t = Object(o.b)();
  return {
    getDefaultFormat: function () {
      return Object(s.h)(e.format, e.ampm, {
        "12h": t.time12hFormat,
        "24h": t.time24hFormat
      });
    }
  };
}
var v = Object(s.g)({
  useOptions: g,
  Input: s.d,
  useState: s.i,
  DefaultToolbarComponent: p
});
var m = Object(s.g)({
  useOptions: g,
  Input: s.a,
  useState: s.e,
  DefaultToolbarComponent: p,
  getCustomProps: function (e) {
    return {
      refuse: e.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
v.defaultProps = A;
m.defaultProps = A;
export default v;