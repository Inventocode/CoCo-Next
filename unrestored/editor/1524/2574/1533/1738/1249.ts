import * as r from "../1626/167";
import * as o from "../1735/247/index";
import * as i from "../1534/530";
var a = o("iterator");
module.exports = !r(function () {
  var e = new URL("b?a=1&b=2&c=3", "http://a");
  var t = e.searchParams;
  var n = "";
  e.pathname = "c%20d";
  t.forEach(function (e, r) {
    t.delete("b");
    n += r + e;
  });
  return i && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://\u0442\u0435\u0441\u0442").host || "#%D0%B1" !== new URL("http://a#\u0431").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host;
});