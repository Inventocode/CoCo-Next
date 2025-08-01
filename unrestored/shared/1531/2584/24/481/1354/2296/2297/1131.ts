function r(e) {
  if (e) {
    return function (e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e;
    }(e);
  }
}
module.exports = r;
r.prototype.on = r.prototype.addEventListener = function (e, t) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t);
  return this;
};
r.prototype.once = function (e, t) {
  function n() {
    this.off(e, n);
    t.apply(this, arguments);
  }
  n.fn = t;
  this.on(e, n);
  return this;
};
r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (e, t) {
  if (this._callbacks = this._callbacks || {}, 0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var n;
  var r = this._callbacks["$" + e];
  if (!r) {
    return this;
  }
  if (1 == arguments.length) {
    delete this._callbacks["$" + e];
    return this;
  }
  for (var i = 0; i < r.length; i++) {
    if ((n = r[i]) === t || n.fn === t) {
      r.splice(i, 1);
      break;
    }
  }
  if (0 === r.length) {
    delete this._callbacks["$" + e];
  }
  return this;
};
r.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) {
    t[r - 1] = arguments[r];
  }
  if (n) {
    r = 0;
    for (var i = (n = n.slice(0)).length; r < i; ++r) {
      n[r].apply(this, t);
    }
  }
  return this;
};
r.prototype.listeners = function (e) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + e] || [];
};
r.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};