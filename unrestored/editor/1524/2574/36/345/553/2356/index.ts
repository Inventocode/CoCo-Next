import * as r from "./1368";
function i(e, t) {
  var n = e.a / 255;
  var r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function o(e, t, n) {
  var r = e + t;
  if ("undefined" !== typeof n) {
    r += " " + n;
  }
  return r;
}
exports.render = function (e, t, n) {
  var a = r.getOptions(t);
  var s = e.modules.size;
  var c = e.modules.data;
  var u = s + 2 * a.margin;
  var l = a.color.light.a ? "<path " + i(a.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "";
  var f = "<path " + i(a.color.dark, "stroke") + ' d="' + function (e, t, n) {
    for (var r = "", i = 0, a = !1, s = 0, c = 0; c < e.length; c++) {
      var u = Math.floor(c % t);
      var l = Math.floor(c / t);
      if (!(u || a)) {
        a = !0;
      }
      if (e[c]) {
        s++;
        if (!(c > 0 && u > 0 && e[c - 1])) {
          r += a ? o("M", u + n, .5 + l + n) : o("m", i, 0);
          i = 0;
          a = !1;
        }
        if (!(u + 1 < t && e[c + 1])) {
          r += o("h", s);
          s = 0;
        }
      } else {
        i++;
      }
    }
    return r;
  }(c, s, a.margin) + '"/>';
  var h = 'viewBox="0 0 ' + u + " " + u + '"';
  var d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + h + ' shape-rendering="crispEdges">' + l + f + "</svg>\n";
  if ("function" === typeof n) {
    n(null, d);
  }
  return d;
};