/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1539
 */

"use strict"

var r = function (e) {
  return e && e.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat("[a-fA-F\\d:]", ")|(?<=").concat("[a-fA-F\\d:]", ")(?=\\s|$))") : ""
}
var i = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}"
var o = "[a-fA-F\\d]{1,4}"
var a = "\n(?:\n(?:".concat(o, ":){7}(?:").concat(o, "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:").concat(o, ":){6}(?:").concat(i, "|:").concat(o, "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:").concat(o, ":){5}(?::").concat(i, "|(?::").concat(o, "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:").concat(o, ":){4}(?:(?::").concat(o, "){0,1}:").concat(i, "|(?::").concat(o, "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:").concat(o, ":){3}(?:(?::").concat(o, "){0,2}:").concat(i, "|(?::").concat(o, "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:").concat(o, ":){2}(?:(?::").concat(o, "){0,3}:").concat(i, "|(?::").concat(o, "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:").concat(o, ":){1}(?:(?::").concat(o, "){0,4}:").concat(i, "|(?::").concat(o, "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::").concat(o, "){0,5}:").concat(i, "|(?::").concat(o, "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim()
var s = new RegExp("(?:^".concat(i, "$)|(?:^").concat(a, "$)"))
var c = new RegExp("^".concat(i, "$"))
var u = new RegExp("^".concat(a, "$"))
var l = function (e) {
  return e && e.exact ? s : new RegExp("(?:".concat(r(e)).concat(i).concat(r(e), ")|(?:").concat(r(e)).concat(a).concat(r(e), ")"), "g")
}
l.v4 = function (e) {
  return e && e.exact ? c : new RegExp("".concat(r(e)).concat(i).concat(r(e)), "g")
}
l.v6 = function (e) {
  return e && e.exact ? u : new RegExp("".concat(r(e)).concat(a).concat(r(e)), "g")
}
module.exports = l
