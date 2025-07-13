"use strict";

var r;
var i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
var o = {};
var a = 0;
var s = 0;
function c(e) {
  var t = "";
  do {
    t = i[e % 64] + t;
    e = Math.floor(e / 64);
  } while (e > 0);
  return t;
}
function u() {
  var e = c(+new Date());
  return e !== r ? (a = 0, r = e) : e + "." + c(a++);
}
for (; s < 64; s++) {
  o[i[s]] = s;
}
u.encode = c;
u.decode = function (e) {
  var t = 0;
  for (s = 0; s < e.length; s++) {
    t = 64 * t + o[e.charAt(s)];
  }
  return t;
};
module.exports = u;