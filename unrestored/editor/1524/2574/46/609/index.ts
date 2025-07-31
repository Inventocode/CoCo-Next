"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.JsonPythonGenerator = exports.load_json_js_generators_data = exports.load_json_js_generator_tell = exports.load_basic_blocks_json_js_generators = exports.JsonJavaScriptGenerator = void 0;
var r = require("./2170/index");
Object.defineProperty(exports, "JsonJavaScriptGenerator", {
  enumerable: !0,
  get: function () {
    return r.JsonJavaScriptGenerator;
  }
});
var i = require("./2171");
var o = require("./2172");
var a = require("./2173");
var s = require("./2174");
var c = require("./2175");
var u = require("./1320");
var l = require("./2176");
exports.load_basic_blocks_json_js_generators = function (e) {
  (0, s.load_json_js_generator_shadow)(e);
  (0, c.load_json_js_generator_events)(e);
  (0, u.load_json_js_generators_control)(e);
  (0, l.load_json_js_generator_sensing)(e);
  (0, o.load_json_js_generator_math)(e);
  (0, i.load_json_js_generator_logic)(e);
  (0, a.load_json_js_generator_text)(e);
};
var f = require("./1320");
Object.defineProperty(exports, "load_json_js_generator_tell", {
  enumerable: !0,
  get: function () {
    return f.load_json_js_generator_tell;
  }
});
var h = require("./2177");
Object.defineProperty(exports, "load_json_js_generators_data", {
  enumerable: !0,
  get: function () {
    return h.load_json_js_generators_data;
  }
});
var d = require("./2178");
Object.defineProperty(exports, "JsonPythonGenerator", {
  enumerable: !0,
  get: function () {
    return d.JsonPythonGenerator;
  }
});