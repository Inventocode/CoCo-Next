"use strict";

import * as r from "./2170/index";
export { JsonJavaScriptGenerator } from "./2170/index";
import * as i from "./2171";
import * as o from "./2172";
import * as a from "./2173";
import * as s from "./2174";
import * as c from "./2175";
import * as u from "./1320";
import * as l from "./2176";
exports.load_basic_blocks_json_js_generators = function (e) {
  (0, s.load_json_js_generator_shadow)(e);
  (0, c.load_json_js_generator_events)(e);
  (0, u.load_json_js_generators_control)(e);
  (0, l.load_json_js_generator_sensing)(e);
  (0, o.load_json_js_generator_math)(e);
  (0, i.load_json_js_generator_logic)(e);
  (0, a.load_json_js_generator_text)(e);
};
import * as f from "./1320";
export { load_json_js_generator_tell } from "./1320";
import * as h from "./2177";
export { load_json_js_generators_data } from "./2177";
import * as d from "./2178";
export { JsonPythonGenerator } from "./2178";