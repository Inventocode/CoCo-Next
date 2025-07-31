"use strict";

export { _ as a };
var r = require("../../../0/index");
require("../../../50/index");
var i = require("../../280");
var o = require("../100");
var a = require("../../../19");
var s = require("../691/1042");
var c = require("../701/index");
require("../../../95");
require("../../../96");
require("../../../322");
require("../../../273");
require("../../../120");
var u = require("../../../549/1183/365/index");
var l = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var f = Object(c.a)(function (e) {
  var t = e.spacing(4);
  return {
    clockNumber: {
      width: t,
      height: 32,
      userSelect: "none",
      position: "absolute",
      left: "calc((100% - ".concat("number" === typeof t ? "".concat(t, "px") : t, ") / 2)"),
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      color: "light" === e.palette.type ? e.palette.text.primary : e.palette.text.hint
    },
    clockNumberSelected: {
      color: e.palette.primary.contrastText
    }
  };
}, {
  name: "MuiPickersClockNumber"
});
var h = function (e) {
  var t = e.selected;
  var n = e.label;
  var i = e.index;
  var a = e.isInner;
  var c = f();
  var u = Object(o.a)(c.clockNumber, t && c.clockNumberSelected);
  var h = Object(r.useMemo)(function () {
    var e = l[i];
    return {
      transform: "translate(".concat(e[0], "px, ").concat(e[1], "px")
    };
  }, [i]);
  return Object(r.createElement)(s.a, {
    component: "span",
    className: u,
    variant: a ? "body2" : "body1",
    style: h,
    children: n
  });
};
var d = function (e) {
  for (var t = e.ampm, n = e.utils, i = e.date, o = n.getHours(i), s = [], c = t ? 12 : 23, u = function (e) {
      return t ? 12 === e ? 12 === o || 0 === o : o === e || o - 12 === e : o === e;
    }, l = t ? 1 : 0; l <= c; l += 1) {
    var f = l.toString();
    if (0 === l) {
      f = "00";
    }
    var d = {
      index: l,
      label: n.formatNumber(f),
      selected: u(l),
      isInner: !t && (0 === l || l > 12)
    };
    s.push(Object(r.createElement)(h, Object(a.a)({
      key: l
    }, d)));
  }
  return s;
};
var p = function (e) {
  var t = e.value;
  var n = e.utils.formatNumber;
  return [Object(r.createElement)(h, {
    label: n("00"),
    selected: 0 === t,
    index: 12,
    key: 12
  }), Object(r.createElement)(h, {
    label: n("05"),
    selected: 5 === t,
    index: 1,
    key: 1
  }), Object(r.createElement)(h, {
    label: n("10"),
    selected: 10 === t,
    index: 2,
    key: 2
  }), Object(r.createElement)(h, {
    label: n("15"),
    selected: 15 === t,
    index: 3,
    key: 3
  }), Object(r.createElement)(h, {
    label: n("20"),
    selected: 20 === t,
    index: 4,
    key: 4
  }), Object(r.createElement)(h, {
    label: n("25"),
    selected: 25 === t,
    index: 5,
    key: 5
  }), Object(r.createElement)(h, {
    label: n("30"),
    selected: 30 === t,
    index: 6,
    key: 6
  }), Object(r.createElement)(h, {
    label: n("35"),
    selected: 35 === t,
    index: 7,
    key: 7
  }), Object(r.createElement)(h, {
    label: n("40"),
    selected: 40 === t,
    index: 8,
    key: 8
  }), Object(r.createElement)(h, {
    label: n("45"),
    selected: 45 === t,
    index: 9,
    key: 9
  }), Object(r.createElement)(h, {
    label: n("50"),
    selected: 50 === t,
    index: 10,
    key: 10
  }), Object(r.createElement)(h, {
    label: n("55"),
    selected: 55 === t,
    index: 11,
    key: 11
  })];
};
var _ = function (e) {
  var t = e.type;
  var n = e.onHourChange;
  var o = e.onMinutesChange;
  var s = e.onSecondsChange;
  var c = e.ampm;
  var l = e.date;
  var f = e.minutesStep;
  var h = Object(i.b)();
  var _ = Object(r.useMemo)(function () {
    switch (t) {
      case u.b.HOURS:
        return {
          value: h.getHours(l),
          children: d({
            date: l,
            utils: h,
            ampm: Boolean(c)
          }),
          onChange: function (e, t) {
            var r = Object(u.d)(l, h);
            var i = Object(u.c)(h.setHours(l, e), r, Boolean(c), h);
            n(i, t);
          }
        };
      case u.b.MINUTES:
        var e = h.getMinutes(l);
        return {
          value: e,
          children: p({
            value: e,
            utils: h
          }),
          onChange: function (e, t) {
            var n = h.setMinutes(l, e);
            o(n, t);
          }
        };
      case u.b.SECONDS:
        var r = h.getSeconds(l);
        return {
          value: r,
          children: p({
            value: r,
            utils: h
          }),
          onChange: function (e, t) {
            var n = h.setSeconds(l, e);
            s(n, t);
          }
        };
      default:
        throw new Error("You must provide the type for TimePickerView");
    }
  }, [c, l, n, o, s, t, h]);
  return Object(r.createElement)(u.a, Object(a.a)({
    type: t,
    ampm: c,
    minutesStep: f
  }, _));
};
_.displayName = "TimePickerView";
_.defaultProps = {
  ampm: !0,
  minutesStep: 1
};
Object(r.memo)(_);
export default _;