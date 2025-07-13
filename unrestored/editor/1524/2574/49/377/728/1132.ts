"use strict";

var r = function () {
  function e() {}
  e.prototype.before_handle_event_group = function (e) {};
  e.prototype.before_handle_single_event = function (e) {};
  e.prototype.before_apply_op_to_doc = function (e) {
    return e;
  };
  e.prototype.after_apply_op_to_doc = function (e) {
    return e;
  };
  e.prototype.before_decompose_and_sort_op = function (e) {
    return e;
  };
  e.prototype.before_analyze_op = function (e) {
    return e;
  };
  e.prototype.after_analyze_op = function (e) {
    return !0;
  };
  e.prototype.before_generate_event = function (e) {
    return e;
  };
  e.prototype.after_transform_op_to_event = function (e) {};
  return e;
}();
export { r as BasePlugin };