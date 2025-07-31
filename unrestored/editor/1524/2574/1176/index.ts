"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.init_data_blocks = exports.init_tell_blocks = exports.init_basic_blocks = exports.init_extensions = void 0;
var r = require("./1312");
var o = require("./2538");
var i = require("./1419");
var a = require("./2539");
var s = require("./2540/index");
var c = require("./2541");
var l = require("./2542");
var u = require("./2543/index");
var d = require("./2544");
Object.defineProperty(exports, "init_extensions", {
  enumerable: !0,
  get: function () {
    return d.init_extensions;
  }
});
exports.init_basic_blocks = function (e) {
  (0, r.init_shadows)(e);
  (0, o.init_events_blocks)(e);
  (0, i.init_control_blocks)(e);
  (0, a.init_sensing_blocks)(e);
  (0, s.init_math_blocks)(e);
  (0, c.init_logic_blocks)(e);
  (0, l.init_text_blocks)(e);
  (0, u.init_color_blocks)(e);
};
var p = require("./1419");
Object.defineProperty(exports, "init_tell_blocks", {
  enumerable: !0,
  get: function () {
    return p.init_tell_blocks;
  }
});
var f = require("./2545");
Object.defineProperty(exports, "init_data_blocks", {
  enumerable: !0,
  get: function () {
    return f.init_data_blocks;
  }
});