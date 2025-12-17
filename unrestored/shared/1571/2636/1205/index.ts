/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1205
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.init_data_blocks = exports.init_tell_blocks = exports.init_basic_blocks = exports.init_extensions = undefined
var r = require("./1349")
var o = require("./2603")
var i = require("./1467")
var a = require("./2604")
var s = require("./2605")
var c = require("./2606")
var l = require("./2607")
var u = require("./2608/index")
var d = require("./2609/index")
Object.defineProperty(exports, "init_extensions", {
  enumerable: true,
  get: function () {
    return d.init_extensions
  }
})
exports.init_basic_blocks = function (e) {
  (0, r.init_shadows)(e);
  (0, o.init_events_blocks)(e);
  (0, i.init_control_blocks)(e);
  (0, a.init_sensing_blocks)(e);
  (0, s.init_math_blocks)(e);
  (0, c.init_logic_blocks)(e);
  (0, l.init_text_blocks)(e);
  (0, u.init_color_blocks)(e)
}
var p = require("./1467")
Object.defineProperty(exports, "init_tell_blocks", {
  enumerable: true,
  get: function () {
    return p.init_tell_blocks
  }
})
var f = require("./2610/index")
Object.defineProperty(exports, "init_data_blocks", {
  enumerable: true,
  get: function () {
    return f.init_data_blocks
  }
})
