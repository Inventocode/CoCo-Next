/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：625
 */

(function (e) {
  var r = "undefined" !== typeof e && e || "undefined" !== typeof self && self || window;
  var i = Function.prototype.apply;
  function o(e, t) {
    this._id = e;
    this._clearFn = t;
  }
  exports.setTimeout = function () {
    return new o(i.call(setTimeout, r, arguments), clearTimeout);
  };
  exports.setInterval = function () {
    return new o(i.call(setInterval, r, arguments), clearInterval);
  };
  exports.clearTimeout = exports.clearInterval = function (e) {
    if (e) {
      e.close();
    }
  };
  o.prototype.unref = o.prototype.ref = function () {};
  o.prototype.close = function () {
    this._clearFn.call(r, this._id);
  };
  exports.enroll = function (e, t) {
    clearTimeout(e._idleTimeoutId);
    e._idleTimeout = t;
  };
  exports.unenroll = function (e) {
    clearTimeout(e._idleTimeoutId);
    e._idleTimeout = -1;
  };
  exports._unrefActive = exports.active = function (e) {
    clearTimeout(e._idleTimeoutId);
    var t = e._idleTimeout;
    if (t >= 0) {
      e._idleTimeoutId = setTimeout(function () {
        if (e._onTimeout) {
          e._onTimeout();
        }
      }, t);
    }
  };
  require("./1988");
  exports.setImmediate = "undefined" !== typeof self && self.setImmediate || "undefined" !== typeof e && e.setImmediate || this && this.setImmediate;
  exports.clearImmediate = "undefined" !== typeof self && self.clearImmediate || "undefined" !== typeof e && e.clearImmediate || this && this.clearImmediate;
}).call(this, require("../../710/251"));