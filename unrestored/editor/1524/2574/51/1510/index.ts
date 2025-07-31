var r = require("./1252");
var i = require("./1744");
var o = {};
Object.keys(r).forEach(function (e) {
  o[e] = {};
  Object.defineProperty(o[e], "channels", {
    value: r[e].channels
  });
  Object.defineProperty(o[e], "labels", {
    value: r[e].labels
  });
  var t = i(e);
  Object.keys(t).forEach(function (n) {
    var r = t[n];
    o[e][n] = function (e) {
      var t = function (t) {
        if (void 0 === t || null === t) {
          return t;
        }
        if (arguments.length > 1) {
          t = Array.prototype.slice.call(arguments);
        }
        var n = e(t);
        if ("object" === typeof n) {
          for (var r = n.length, i = 0; i < r; i++) {
            n[i] = Math.round(n[i]);
          }
        }
        return n;
      };
      if ("conversion" in e) {
        t.conversion = e.conversion;
      }
      return t;
    }(r);
    o[e][n].raw = function (e) {
      var t = function (t) {
        return void 0 === t || null === t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t));
      };
      if ("conversion" in e) {
        t.conversion = e.conversion;
      }
      return t;
    }(r);
  });
});
module.exports = o;