/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：730
 */

"use strict"

export { _ as a }
import * as /* [auto-meaningful-name] */React from "react"
import "../../../50/index"
import * as /* [auto-meaningful-name] */$$_$$_280 from "../../280"
import * as /* [auto-meaningful-name] */$$_100 from "../100"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_691_1043 from "../691/1043"
import * as /* [auto-meaningful-name] */$$_701_index from "../701/index"
import "../../../95"
import "../../../96"
import "../../../322"
import "../../../273"
import "../../../120"
import * as /* [auto-meaningful-name] */$$_$$_$$_549_1186_365_index from "../../../549/1186/365/index"
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
}
var f = $$_701_index.a(function (e) {
  var t = e.spacing(4)
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
  }
}, {
  name: "MuiPickersClockNumber"
})
var d = function (e) {
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$isInner = e.isInner
  var c = f()
  var u = $$_100.a(c.clockNumber, e$selected && c.clockNumberSelected)
  var d = React.useMemo(function () {
    var e = l[e$index]
    return {
      transform: "translate(".concat(e[0], "px, ").concat(e[1], "px")
    }
  }, [e$index])
  return React.createElement($$_691_1043.a, {
    component: "span",
    className: u,
    variant: e$isInner ? "body2" : "body1",
    style: d,
    children: e$label
  })
}
var h = function (e) {
  for (var /* [auto-meaningful-name] */e$ampm = e.ampm, /* [auto-meaningful-name] */e$utils = e.utils, /* [auto-meaningful-name] */e$date = e.date, o = e$utils.getHours(e$date), s = [], c = e$ampm ? 12 : 23, u = function (e) {
      return e$ampm ? 12 === e ? 12 === o || 0 === o : o === e || o - 12 === e : o === e
    }, l = e$ampm ? 1 : 0; l <= c; l += 1) {
    var f = l.toString()
    if (0 === l) {
      f = "00"
    }
    var h = {
      index: l,
      label: e$utils.formatNumber(f),
      selected: u(l),
      isInner: !e$ampm && (0 === l || l > 12)
    }
    s.push(React.createElement(d, $$_$$_$$_19.a({
      key: l
    }, h)))
  }
  return s
}
var p = function (e) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$utils$formatNumber = e.utils.formatNumber
  return [React.createElement(d, {
    label: e$utils$formatNumber("00"),
    selected: 0 === e$value,
    index: 12,
    key: 12
  }), React.createElement(d, {
    label: e$utils$formatNumber("05"),
    selected: 5 === e$value,
    index: 1,
    key: 1
  }), React.createElement(d, {
    label: e$utils$formatNumber("10"),
    selected: 10 === e$value,
    index: 2,
    key: 2
  }), React.createElement(d, {
    label: e$utils$formatNumber("15"),
    selected: 15 === e$value,
    index: 3,
    key: 3
  }), React.createElement(d, {
    label: e$utils$formatNumber("20"),
    selected: 20 === e$value,
    index: 4,
    key: 4
  }), React.createElement(d, {
    label: e$utils$formatNumber("25"),
    selected: 25 === e$value,
    index: 5,
    key: 5
  }), React.createElement(d, {
    label: e$utils$formatNumber("30"),
    selected: 30 === e$value,
    index: 6,
    key: 6
  }), React.createElement(d, {
    label: e$utils$formatNumber("35"),
    selected: 35 === e$value,
    index: 7,
    key: 7
  }), React.createElement(d, {
    label: e$utils$formatNumber("40"),
    selected: 40 === e$value,
    index: 8,
    key: 8
  }), React.createElement(d, {
    label: e$utils$formatNumber("45"),
    selected: 45 === e$value,
    index: 9,
    key: 9
  }), React.createElement(d, {
    label: e$utils$formatNumber("50"),
    selected: 50 === e$value,
    index: 10,
    key: 10
  }), React.createElement(d, {
    label: e$utils$formatNumber("55"),
    selected: 55 === e$value,
    index: 11,
    key: 11
  })]
}
var _ = function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$onHourChange = e.onHourChange
  var /* [auto-meaningful-name] */e$onMinutesChange = e.onMinutesChange
  var /* [auto-meaningful-name] */e$onSecondsChange = e.onSecondsChange
  var /* [auto-meaningful-name] */e$ampm = e.ampm
  var /* [auto-meaningful-name] */e$date = e.date
  var /* [auto-meaningful-name] */e$minutesStep = e.minutesStep
  var d = $$_$$_280.b()
  var _ = React.useMemo(function () {
    switch (e$type) {
      case $$_$$_$$_549_1186_365_index.b.HOURS:
        return {
          value: d.getHours(e$date),
          children: h({
            date: e$date,
            utils: d,
            ampm: Boolean(e$ampm)
          }),
          onChange: function (e, t) {
            var r = $$_$$_$$_549_1186_365_index.d(e$date, d)
            var i = $$_$$_$$_549_1186_365_index.c(d.setHours(e$date, e), r, Boolean(e$ampm), d)
            e$onHourChange(i, t)
          }
        }
      case $$_$$_$$_549_1186_365_index.b.MINUTES:
        var e = d.getMinutes(e$date)
        return {
          value: e,
          children: p({
            value: e,
            utils: d
          }),
          onChange: function (e, t) {
            var n = d.setMinutes(e$date, e)
            e$onMinutesChange(n, t)
          }
        }
      case $$_$$_$$_549_1186_365_index.b.SECONDS:
        var r = d.getSeconds(e$date)
        return {
          value: r,
          children: p({
            value: r,
            utils: d
          }),
          onChange: function (e, t) {
            var n = d.setSeconds(e$date, e)
            e$onSecondsChange(n, t)
          }
        }
      default:
        throw new Error("You must provide the type for TimePickerView")
    }
  }, [e$ampm, e$date, e$onHourChange, e$onMinutesChange, e$onSecondsChange, e$type, d])
  return React.createElement($$_$$_$$_549_1186_365_index.a, $$_$$_$$_19.a({
    type: e$type,
    ampm: e$ampm,
    minutesStep: e$minutesStep
  }, _))
}
_.displayName = "TimePickerView"
_.defaultProps = {
  ampm: true,
  minutesStep: 1
}
React.memo(_)
export default _
