/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1539
 */

"use strict"

var r = function (e) {
  return e && e.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat("[a-fA-F\\d:]", ")|(?<=").concat("[a-fA-F\\d:]", ")(?=\\s|$))") : ""
}
var /* [auto-meaningful-name] */_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}"
var /* [auto-meaningful-name] */AFAF__d14 = "[a-fA-F\\d]{1,4}"
var a = "\n(?:\n(?:".concat(AFAF__d14, ":){7}(?:").concat(AFAF__d14, "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:").concat(AFAF__d14, ":){6}(?:").concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "|:").concat(AFAF__d14, "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:").concat(AFAF__d14, ":){5}(?::").concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "|(?::").concat(AFAF__d14, "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:").concat(AFAF__d14, ":){4}(?:(?::").concat(AFAF__d14, "){0,1}:").concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "|(?::").concat(AFAF__d14, "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:").concat(AFAF__d14, ":){3}(?:(?::").concat(AFAF__d14, "){0,2}:").concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "|(?::").concat(AFAF__d14, "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:").concat(AFAF__d14, ":){2}(?:(?::").concat(AFAF__d14, "){0,3}:").concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "|(?::").concat(AFAF__d14, "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:").concat(AFAF__d14, ":){1}(?:(?::").concat(AFAF__d14, "){0,4}:").concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "|(?::").concat(AFAF__d14, "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::").concat(AFAF__d14, "){0,5}:").concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "|(?::").concat(AFAF__d14, "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim()
var s = new RegExp("(?:^".concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "$)|(?:^").concat(a, "$)"))
var c = new RegExp("^".concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3, "$"))
var u = new RegExp("^".concat(a, "$"))
var l = function (e) {
  return e && e.exact ? s : new RegExp("(?:".concat(r(e)).concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3).concat(r(e), ")|(?:").concat(r(e)).concat(a).concat(r(e), ")"), "g")
}
l.v4 = function (e) {
  return e && e.exact ? c : new RegExp("".concat(r(e)).concat(_2505204__d1__d__d19__d__d__$2505204__d1__d__d19__d__d3).concat(r(e)), "g")
}
l.v6 = function (e) {
  return e && e.exact ? u : new RegExp("".concat(r(e)).concat(a).concat(r(e)), "g")
}
module.exports = l
