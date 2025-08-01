"use strict";

(function (e) {
  var t = require("../../../../../../../1531/2584/51/1517/index");
  var r = function (e, n) {
    return function () {
      var r = e.apply(t, arguments);
      return "\x1b[".concat(r + n, "m");
    };
  };
  var i = function (e, n) {
    return function () {
      var r = e.apply(t, arguments);
      return "\x1b[".concat(38 + n, ";5;").concat(r, "m");
    };
  };
  var a = function (e, n) {
    return function () {
      var r = e.apply(t, arguments);
      return "\x1b[".concat(38 + n, ";2;").concat(r[0], ";").concat(r[1], ";").concat(r[2], "m");
    };
  };
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: function () {
      var e = new Map();
      var n = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      n.color.grey = n.color.gray;
      for (var s = 0, o = Object.keys(n); s < o.length; s++) {
        for (var l = o[s], u = n[l], c = 0, p = Object.keys(u); c < p.length; c++) {
          var f = p[c];
          var d = u[f];
          n[f] = {
            open: "\x1b[".concat(d[0], "m"),
            close: "\x1b[".concat(d[1], "m")
          };
          u[f] = n[f];
          e.set(d[0], d[1]);
        }
        Object.defineProperty(n, l, {
          value: u,
          enumerable: !1
        });
        Object.defineProperty(n, "codes", {
          value: e,
          enumerable: !1
        });
      }
      var h = function (e) {
        return e;
      };
      var y = function (e, t, n) {
        return [e, t, n];
      };
      n.color.close = "\x1b[39m";
      n.bgColor.close = "\x1b[49m";
      n.color.ansi = {
        ansi: r(h, 0)
      };
      n.color.ansi256 = {
        ansi256: i(h, 0)
      };
      n.color.ansi16m = {
        rgb: a(y, 0)
      };
      n.bgColor.ansi = {
        ansi: r(h, 10)
      };
      n.bgColor.ansi256 = {
        ansi256: i(h, 10)
      };
      n.bgColor.ansi16m = {
        rgb: a(y, 10)
      };
      for (var m = 0, v = Object.keys(t); m < v.length; m++) {
        var g = v[m];
        if ("object" === typeof t[g]) {
          var T = t[g];
          if ("ansi16" === g) {
            g = "ansi";
          }
          if ("ansi16" in T) {
            n.color.ansi[g] = r(T.ansi16, 0);
            n.bgColor.ansi[g] = r(T.ansi16, 10);
          }
          if ("ansi256" in T) {
            n.color.ansi256[g] = i(T.ansi256, 0);
            n.bgColor.ansi256[g] = i(T.ansi256, 10);
          }
          if ("rgb" in T) {
            n.color.ansi16m[g] = a(T.rgb, 0);
            n.bgColor.ansi16m[g] = a(T.rgb, 10);
          }
        }
      }
      return n;
    }
  });
}).call(this, require("../../../../../../../1531/2584/31/571")(module));