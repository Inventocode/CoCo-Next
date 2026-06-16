/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：173
 */

"use strict"

var r = require(/* 6 */"../../6")
var i = require(/* 40 */"../../../209/143/40")
var o = require(/* 53 */"../../../208/106/53")
var a = function (e) {
  return i.slice(0, e.length) === e
}
module.exports = a("Bun/") ? "BUN" : a("Cloudflare-Workers") ? "CLOUDFLARE" : a("Deno/") ? "DENO" : a("Node.js/") ? "NODE" : r.Bun && "string" == typeof Bun.version ? "BUN" : r.Deno && "object" == typeof Deno.version ? "DENO" : "process" === o(r.process) ? "NODE" : r.window && r.document ? "BROWSER" : "REST"
