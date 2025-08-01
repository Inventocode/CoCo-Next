"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.addComment = function (e, t, n) {
  i(this.node, e, t, n);
};
exports.addComments = function (e, t) {
  a(this.node, e, t);
};
exports.shareCommentsWithSiblings = function () {
  if ("string" === typeof this.key) {
    return;
  }
  var e = this.node;
  if (!e) {
    return;
  }
  var t = e.trailingComments;
  var n = e.leadingComments;
  if (!t && !n) {
    return;
  }
  var r = this.getSibling(this.key - 1);
  var i = this.getSibling(this.key + 1);
  var a = Boolean(r.node);
  var s = Boolean(i.node);
  if (a && !s) {
    r.addComments("trailing", t);
  } else {
    if (s && !a) {
      i.addComments("leading", n);
    }
  }
};
var r = require("../../2633/index");
var i = r.addComment;
var a = r.addComments;