import * as r from "./2662";
var i = Object.prototype.hasOwnProperty;
var a = "undefined" !== typeof Map;
function s() {
  this._array = [];
  this._set = a ? new Map() : Object.create(null);
}
s.fromArray = function (e, t) {
  for (var n = new s(), r = 0, i = e.length; r < i; r++) {
    n.add(e[r], t);
  }
  return n;
};
s.prototype.size = function () {
  return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
s.prototype.add = function (e, t) {
  var n = a ? e : r.toSetString(e);
  var s = a ? this.has(e) : i.call(this._set, n);
  var o = this._array.length;
  if (!(s && !t)) {
    this._array.push(e);
  }
  if (!s) {
    if (a) {
      this._set.set(e, o);
    } else {
      this._set[n] = o;
    }
  }
};
s.prototype.has = function (e) {
  if (a) {
    return this._set.has(e);
  }
  var t = r.toSetString(e);
  return i.call(this._set, t);
};
s.prototype.indexOf = function (e) {
  if (a) {
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
  throw new Error('"' + e + '" is not in the set.');
};
s.prototype.at = function (e) {
  if (e >= 0 && e < this._array.length) {
    return this._array[e];
  }
  throw new Error("No element indexed by " + e);
};
s.prototype.toArray = function () {
  return this._array.slice();
};
export { s as ArraySet };