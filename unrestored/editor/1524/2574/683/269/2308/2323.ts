"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("../2325/444");
var i = function () {
  function e() {
    this._map = new Map();
  }
  e.prototype.getMap = function () {
    return this._map;
  };
  e.prototype.add = function (e, t) {
    if (null === e || void 0 === e) {
      throw new Error(r.NULL_ARGUMENT);
    }
    if (null === t || void 0 === t) {
      throw new Error(r.NULL_ARGUMENT);
    }
    var n = this._map.get(e);
    if (void 0 !== n) {
      n.push(t);
      this._map.set(e, n);
    } else {
      this._map.set(e, [t]);
    }
  };
  e.prototype.get = function (e) {
    if (null === e || void 0 === e) {
      throw new Error(r.NULL_ARGUMENT);
    }
    var t = this._map.get(e);
    if (void 0 !== t) {
      return t;
    }
    throw new Error(r.KEY_NOT_FOUND);
  };
  e.prototype.remove = function (e) {
    if (null === e || void 0 === e) {
      throw new Error(r.NULL_ARGUMENT);
    }
    if (!this._map.delete(e)) {
      throw new Error(r.KEY_NOT_FOUND);
    }
  };
  e.prototype.removeByCondition = function (e) {
    var t = this;
    this._map.forEach(function (n, r) {
      var i = n.filter(function (t) {
        return !e(t);
      });
      if (i.length > 0) {
        t._map.set(r, i);
      } else {
        t._map.delete(r);
      }
    });
  };
  e.prototype.hasKey = function (e) {
    if (null === e || void 0 === e) {
      throw new Error(r.NULL_ARGUMENT);
    }
    return this._map.has(e);
  };
  e.prototype.clone = function () {
    var t = new e();
    this._map.forEach(function (e, n) {
      e.forEach(function (e) {
        return t.add(n, e.clone());
      });
    });
    return t;
  };
  e.prototype.traverse = function (e) {
    this._map.forEach(function (t, n) {
      e(n, t);
    });
  };
  return e;
}();
exports.Lookup = i;