/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：609
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonPythonGenerator = exports.load_json_js_generators_data = exports.load_json_js_generator_tell = exports.load_basic_blocks_json_js_generators = exports.JsonJavaScriptGenerator = undefined;
var r = require("./2180");
Object.defineProperty(exports, "JsonJavaScriptGenerator", {
  enumerable: true,
  get: function () {
    return r.JsonJavaScriptGenerator;
  }
});
var i = require("./2181");
var o = require("./2182");
var a = require("./2183");
var s = require("./2184");
var c = require("./2185");
var u = require("./1327");
var l = require("./2186");
exports.load_basic_blocks_json_js_generators = function (e) {
  (0, s.load_json_js_generator_shadow)(e);
  (0, c.load_json_js_generator_events)(e);
  (0, u.load_json_js_generators_control)(e);
  (0, l.load_json_js_generator_sensing)(e);
  (0, o.load_json_js_generator_math)(e);
  (0, i.load_json_js_generator_logic)(e);
  (0, a.load_json_js_generator_text)(e);
};
var f = require("./1327");
Object.defineProperty(exports, "load_json_js_generator_tell", {
  enumerable: true,
  get: function () {
    return f.load_json_js_generator_tell;
  }
});
var d = require("./2187");
Object.defineProperty(exports, "load_json_js_generators_data", {
  enumerable: true,
  get: function () {
    return d.load_json_js_generators_data;
  }
});
var h = require("./2188/index");
Object.defineProperty(exports, "JsonPythonGenerator", {
  enumerable: true,
  get: function () {
    return h.JsonPythonGenerator;
  }
});