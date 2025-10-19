/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：777
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OTAdapter = undefined;
var r = require("./2312/index");
var i = require("./2316");
var o = function () {
  function e(e, t) {
    this.transform_to_op = new i.TransformToOp(e, t);
    this.transform_to_ide = new r.TransformToIde();
    this.op_generator = this.transform_to_op;
  }
  e.prototype.register_plugins = function (e) {
    this.transform_to_op.register_plugins(e);
    this.transform_to_ide.register_plugins(e);
  };
  e.prototype.start = function () {
    this.transform_to_op.start();
  };
  e.prototype.stop = function () {
    this.transform_to_op.stop();
  };
  e.prototype.reset = function () {
    this.transform_to_op.reset();
  };
  e.prototype.decompose_and_transform_op = function (e) {
    this.transform_to_ide.decompose_and_transform_op(e);
  };
  e.prototype.transform_drop_operation = function (e) {
    this.transform_drop_operation(e);
  };
  e.prototype.transform_pick_operation = function (e) {
    this.transform_pick_operation(e);
  };
  return e;
}();
exports.OTAdapter = o;