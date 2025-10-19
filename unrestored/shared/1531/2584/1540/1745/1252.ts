/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1252
 */

var r = require("../1736/167");
var o = require("../1742/247/index");
var i = require("../1684/530");
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
  return i && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", undefined).host;
});