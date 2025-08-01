"use strict";

var r = "Function.prototype.bind called on incompatible ";
var i = Array.prototype.slice;
var o = Object.prototype.toString;
module.exports = function (e) {
  var t = this;
  if ("function" !== typeof t || "[object Function]" !== o.call(t)) {
    throw new TypeError(r + t);
  }
  for (var n, a = i.call(arguments, 1), s = function () {
      if (this instanceof n) {
        var r = t.apply(this, a.concat(i.call(arguments)));
        return Object(r) === r ? r : this;
      }
      return t.apply(e, a.concat(i.call(arguments)));
    }, c = Math.max(0, t.length - a.length), u = [], l = 0; l < c; l++) {
    u.push("$" + l);
  }
  if (n = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(s), t.prototype) {
    var f = function () {};
    f.prototype = t.prototype;
    n.prototype = new f();
    f.prototype = null;
  }
  return n;
};