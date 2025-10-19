/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：952
 */

"use strict";

var r;
var i;
var o;
var a = require("./1771");
var s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
function c() {
  o = false;
}
function u(e) {
  if (e) {
    if (e !== r) {
      if (e.length !== s.length) {
        throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. You submitted " + e.length + " characters: " + e);
      }
      var t = e.split("").filter(function (e, t, n) {
        return t !== n.lastIndexOf(e);
      });
      if (t.length) {
        throw new Error("Custom alphabet for shortid must be " + s.length + " unique characters. These characters were not unique: " + t.join(", "));
      }
      r = e;
      c();
    }
  } else if (r !== s) {
    r = s;
    c();
  }
}
function l() {
  return o || (o = function () {
    if (!r) {
      u(s);
    }
    for (var e, t = r.split(""), n = [], i = a.nextValue(); t.length > 0;) {
      i = a.nextValue();
      e = Math.floor(i * t.length);
      n.push(t.splice(e, 1)[0]);
    }
    return n.join("");
  }());
}
module.exports = {
  get: function () {
    return r || s;
  },
  characters: function (e) {
    u(e);
    return r;
  },
  seed: function (e) {
    a.seed(e);
    if (i !== e) {
      c();
      i = e;
    }
  },
  lookup: function (e) {
    return l()[e];
  },
  shuffled: l
};