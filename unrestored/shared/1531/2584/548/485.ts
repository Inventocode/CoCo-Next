"use strict";

var r = {
  lessThanXSeconds: {
    one: "\u4e0d\u5230 1 \u79d2",
    other: "\u4e0d\u5230 {{count}} \u79d2"
  },
  xSeconds: {
    one: "1 \u79d2",
    other: "{{count}} \u79d2"
  },
  halfAMinute: "\u534a\u5206\u949f",
  lessThanXMinutes: {
    one: "\u4e0d\u5230 1 \u5206\u949f",
    other: "\u4e0d\u5230 {{count}} \u5206\u949f"
  },
  xMinutes: {
    one: "1 \u5206\u949f",
    other: "{{count}} \u5206\u949f"
  },
  xHours: {
    one: "1 \u5c0f\u65f6",
    other: "{{count}} \u5c0f\u65f6"
  },
  aboutXHours: {
    one: "\u5927\u7ea6 1 \u5c0f\u65f6",
    other: "\u5927\u7ea6 {{count}} \u5c0f\u65f6"
  },
  xDays: {
    one: "1 \u5929",
    other: "{{count}} \u5929"
  },
  aboutXWeeks: {
    one: "\u5927\u7ea6 1 \u4e2a\u661f\u671f",
    other: "\u5927\u7ea6 {{count}} \u4e2a\u661f\u671f"
  },
  xWeeks: {
    one: "1 \u4e2a\u661f\u671f",
    other: "{{count}} \u4e2a\u661f\u671f"
  },
  aboutXMonths: {
    one: "\u5927\u7ea6 1 \u4e2a\u6708",
    other: "\u5927\u7ea6 {{count}} \u4e2a\u6708"
  },
  xMonths: {
    one: "1 \u4e2a\u6708",
    other: "{{count}} \u4e2a\u6708"
  },
  aboutXYears: {
    one: "\u5927\u7ea6 1 \u5e74",
    other: "\u5927\u7ea6 {{count}} \u5e74"
  },
  xYears: {
    one: "1 \u5e74",
    other: "{{count}} \u5e74"
  },
  overXYears: {
    one: "\u8d85\u8fc7 1 \u5e74",
    other: "\u8d85\u8fc7 {{count}} \u5e74"
  },
  almostXYears: {
    one: "\u5c06\u8fd1 1 \u5e74",
    other: "\u5c06\u8fd1 {{count}} \u5e74"
  }
};
var i = require("./484/692");
var o = {
  date: Object(i.a)({
    formats: {
      full: "y'\u5e74'M'\u6708'd'\u65e5' EEEE",
      long: "y'\u5e74'M'\u6708'd'\u65e5'",
      medium: "yyyy-MM-dd",
      short: "yy-MM-dd"
    },
    defaultWidth: "full"
  }),
  time: Object(i.a)({
    formats: {
      full: "zzzz a h:mm:ss",
      long: "z a h:mm:ss",
      medium: "a h:mm:ss",
      short: "a h:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: Object(i.a)({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
};
var a = require("./484/432");
var s = require("./484/106");
function c(e, t, n, r) {
  return function (e, t, n) {
    Object(s.a)(2, arguments);
    var r = Object(a.a)(e, n);
    var i = Object(a.a)(t, n);
    return r.getTime() === i.getTime();
  }(e, t, n) ? r : e.getTime() > t.getTime() ? "'\u4e0b\u4e2a'" + r : "'\u4e0a\u4e2a'" + r;
}
var u = {
  lastWeek: c,
  yesterday: "'\u6628\u5929' p",
  today: "'\u4eca\u5929' p",
  tomorrow: "'\u660e\u5929' p",
  nextWeek: c,
  other: "PP p"
};
var l = require("./484/489");
var f = {
  ordinalNumber: function (e, t) {
    var n = Number(e);
    switch (String((t || {}).unit)) {
      case "date":
        return n.toString() + "\u65e5";
      case "hour":
        return n.toString() + "\u65f6";
      case "minute":
        return n.toString() + "\u5206";
      case "second":
        return n.toString() + "\u79d2";
      default:
        return "\u7b2c " + n.toString();
    }
  },
  era: Object(l.a)({
    values: {
      narrow: ["\u524d", "\u516c\u5143"],
      abbreviated: ["\u524d", "\u516c\u5143"],
      wide: ["\u516c\u5143\u524d", "\u516c\u5143"]
    },
    defaultWidth: "wide"
  }),
  quarter: Object(l.a)({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["\u7b2c\u4e00\u523b", "\u7b2c\u4e8c\u523b", "\u7b2c\u4e09\u523b", "\u7b2c\u56db\u523b"],
      wide: ["\u7b2c\u4e00\u523b\u949f", "\u7b2c\u4e8c\u523b\u949f", "\u7b2c\u4e09\u523b\u949f", "\u7b2c\u56db\u523b\u949f"]
    },
    defaultWidth: "wide",
    argumentCallback: function (e) {
      return Number(e) - 1;
    }
  }),
  month: Object(l.a)({
    values: {
      narrow: ["\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u5341\u4e00", "\u5341\u4e8c"],
      abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
      wide: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"]
    },
    defaultWidth: "wide"
  }),
  day: Object(l.a)({
    values: {
      narrow: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
      short: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
      abbreviated: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"],
      wide: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"]
    },
    defaultWidth: "wide"
  }),
  dayPeriod: Object(l.a)({
    values: {
      narrow: {
        am: "\u4e0a",
        pm: "\u4e0b",
        midnight: "\u51cc\u6668",
        noon: "\u5348",
        morning: "\u65e9",
        afternoon: "\u4e0b\u5348",
        evening: "\u665a",
        night: "\u591c"
      },
      abbreviated: {
        am: "\u4e0a\u5348",
        pm: "\u4e0b\u5348",
        midnight: "\u51cc\u6668",
        noon: "\u4e2d\u5348",
        morning: "\u65e9\u6668",
        afternoon: "\u4e2d\u5348",
        evening: "\u665a\u4e0a",
        night: "\u591c\u95f4"
      },
      wide: {
        am: "\u4e0a\u5348",
        pm: "\u4e0b\u5348",
        midnight: "\u51cc\u6668",
        noon: "\u4e2d\u5348",
        morning: "\u65e9\u6668",
        afternoon: "\u4e2d\u5348",
        evening: "\u665a\u4e0a",
        night: "\u591c\u95f4"
      }
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "\u4e0a",
        pm: "\u4e0b",
        midnight: "\u51cc\u6668",
        noon: "\u5348",
        morning: "\u65e9",
        afternoon: "\u4e0b\u5348",
        evening: "\u665a",
        night: "\u591c"
      },
      abbreviated: {
        am: "\u4e0a\u5348",
        pm: "\u4e0b\u5348",
        midnight: "\u51cc\u6668",
        noon: "\u4e2d\u5348",
        morning: "\u65e9\u6668",
        afternoon: "\u4e2d\u5348",
        evening: "\u665a\u4e0a",
        night: "\u591c\u95f4"
      },
      wide: {
        am: "\u4e0a\u5348",
        pm: "\u4e0b\u5348",
        midnight: "\u51cc\u6668",
        noon: "\u4e2d\u5348",
        morning: "\u65e9\u6668",
        afternoon: "\u4e2d\u5348",
        evening: "\u665a\u4e0a",
        night: "\u591c\u95f4"
      }
    },
    defaultFormattingWidth: "wide"
  })
};
var d = require("./484/1004");
var h = require("./484/490");
var p = {
  code: "zh-CN",
  formatDistance: function (e, t, n) {
    var i;
    n = n || {};
    i = "string" === typeof r[e] ? r[e] : 1 === t ? r[e].one : r[e].other.replace("{{count}}", t);
    return n.addSuffix ? n.comparison > 0 ? i + "\u5185" : i + "\u524d" : i;
  },
  formatLong: o,
  formatRelative: function (e, t, n, r) {
    var i = u[e];
    return "function" === typeof i ? i(t, n, r, "eeee p") : i;
  },
  localize: f,
  match: {
    ordinalNumber: Object(d.a)({
      matchPattern: /^(\u7b2c\s*)?\d+(\u65e5|\u65f6|\u5206|\u79d2)?/i,
      parsePattern: /\d+/i,
      valueCallback: function (e) {
        return parseInt(e, 10);
      }
    }),
    era: Object(h.a)({
      matchPatterns: {
        narrow: /^(\u524d)/i,
        abbreviated: /^(\u524d)/i,
        wide: /^(\u516c\u5143\u524d|\u516c\u5143)/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/^(\u524d)/i, /^(\u516c\u5143)/i]
      },
      defaultParseWidth: "any"
    }),
    quarter: Object(h.a)({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b/i,
        wide: /^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b\u949f/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/(1|\u4e00)/i, /(2|\u4e8c)/i, /(3|\u4e09)/i, /(4|\u56db)/i]
      },
      defaultParseWidth: "any",
      valueCallback: function (e) {
        return e + 1;
      }
    }),
    month: Object(h.a)({
      matchPatterns: {
        narrow: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,
        abbreviated: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,
        wide: /^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^\u4e00/i, /^\u4e8c/i, /^\u4e09/i, /^\u56db/i, /^\u4e94/i, /^\u516d/i, /^\u4e03/i, /^\u516b/i, /^\u4e5d/i, /^\u5341(?!(\u4e00|\u4e8c))/i, /^\u5341\u4e00/i, /^\u5341\u4e8c/i],
        any: [/^\u4e00|1/i, /^\u4e8c|2/i, /^\u4e09|3/i, /^\u56db|4/i, /^\u4e94|5/i, /^\u516d|6/i, /^\u4e03|7/i, /^\u516b|8/i, /^\u4e5d|9/i, /^\u5341(?!(\u4e00|\u4e8c))|10/i, /^\u5341\u4e00|11/i, /^\u5341\u4e8c|12/i]
      },
      defaultParseWidth: "any"
    }),
    day: Object(h.a)({
      matchPatterns: {
        narrow: /^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
        short: /^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
        abbreviated: /^\u5468[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,
        wide: /^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        any: [/\u65e5/i, /\u4e00/i, /\u4e8c/i, /\u4e09/i, /\u56db/i, /\u4e94/i, /\u516d/i]
      },
      defaultParseWidth: "any"
    }),
    dayPeriod: Object(h.a)({
      matchPatterns: {
        any: /^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668|)/i
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^\u4e0a\u5348?/i,
          pm: /^\u4e0b\u5348?/i,
          midnight: /^\u5348\u591c/i,
          noon: /^[\u4e2d\u6b63]\u5348/i,
          morning: /^\u65e9\u4e0a/i,
          afternoon: /^\u4e0b\u5348/i,
          evening: /^\u665a\u4e0a?/i,
          night: /^\u51cc\u6668/i
        }
      },
      defaultParseWidth: "any"
    })
  },
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
exports.a = p;