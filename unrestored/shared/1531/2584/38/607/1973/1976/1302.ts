var r = require("../1979/838");
var i = Object.prototype.hasOwnProperty;
var o = "undefined" !== typeof Map;
function a() {
  this._array = [];
  this._set = o ? new Map() : Object.create(null);
}
a.fromArray = function (e, t) {
  for (var n = new a(), r = 0, i = e.length; r < i; r++) {
    n.add(e[r], t);
  }
  return n;
};
a.prototype.size = function () {
  return o ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
a.prototype.add = function (e, t) {
  var n = o ? e : r.toSetString(e);
  var a = o ? this.has(e) : i.call(this._set, n);
  var s = this._array.length;
  if (!(a && !t)) {
    this._array.push(e);
  }
  if (!a) {
    if (o) {
      this._set.set(e, s);
    } else {
      this._set[n] = s;
    }
  }
};
a.prototype.has = function (e) {
  if (o) {
    return this._set.has(e);
  }
  var t = r.toSetString(e);
  return i.call(this._set, t);
};
a.prototype.indexOf = function (e) {
  if (o) {
    var t = this._set.get(e);
    if (t >= 0) {
      return t;
    }
  } else {
    var n = r.toSetString(e);
    if (i.call(this._set, n)) {
      return this._set[n];
    }
  }
  throw new Error("\"" + e + "\" is not in the set.");
};
a.prototype.at = function (e) {
  if (e >= 0 && e < this._array.length) {
    return this._array[e];
  }
  throw new Error("No element indexed by " + e);
};
a.prototype.toArray = function () {
  return this._array.slice();
};
exports.ArraySet = a;