"use strict";

(function (t) {
  function n(e, t, n) {
    return new Array(t - e.length + 1).join(n || " ") + e;
  }
  var r = !!Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).TIMING;
  var i = ["Rule", "Time (ms)", "Relative"];
  var o = [function (e, t, n) {
    return e + new Array(t - e.length + 1).join(n || " ");
  }, n, n];
  module.exports = function () {
    var e = Object.create(null);
    if (r) {
      t.on("exit", function () {
        !function (e) {
          var t = 0;
          var n = Object.keys(e).map(function (n) {
            var r = e[n];
            t += r;
            return [n, r];
          }).sort(function (e, t) {
            return t[1] - e[1];
          }).slice(0, 10);
          n.forEach(function (e) {
            e.push("".concat((100 * e[1] / t).toFixed(1), "%"));
            e[1] = e[1].toFixed(3);
          });
          n.unshift(i);
          var r = [];
          n.forEach(function (e) {
            for (var t = e.length, n = 0; n < t; n++) {
              var i = e[n].length;
              if (!r[n] || i > r[n]) {
                r[n] = i;
              }
            }
          });
          var a = n.map(function (e) {
            return e.map(function (e, t) {
              return o[t](e, r[t]);
            }).join(" | ");
          });
          a.splice(1, 0, r.map(function (e, t) {
            var n = 0 !== t && t !== r.length - 1 ? 2 : 1;
            return o[t](":", e + n, "-");
          }).join("|"));
          console.log(a.join("\n"));
        }(e);
      });
    }
    return {
      time: function (n, r) {
        if ("undefined" === typeof e[n]) {
          e[n] = 0;
        }
        return function () {
          var i = t.hrtime();
          r.apply(void 0, arguments);
          i = t.hrtime(i);
          e[n] += 1e3 * i[0] + i[1] / 1e6;
        };
      },
      enabled: r
    };
  }();
}).call(this, require("../../710/368"));