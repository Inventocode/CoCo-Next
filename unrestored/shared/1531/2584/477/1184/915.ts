"use strict";

export { o as a };
var r;
import i = require("./306");
!function (e) {
  e.PENDING = "PENDING";
  e.RESOLVED = "RESOLVED";
  e.REJECTED = "REJECTED";
}(r || (r = {}));
var o = function () {
  function e(e) {
    var t = this;
    this._state = r.PENDING;
    this._handlers = [];
    this._resolve = function (e) {
      t._setResult(r.RESOLVED, e);
    };
    this._reject = function (e) {
      t._setResult(r.REJECTED, e);
    };
    this._setResult = function (e, n) {
      if (t._state === r.PENDING) {
        if (i.m(n)) {
          n.then(t._resolve, t._reject);
        } else {
          t._state = e;
          t._value = n;
          t._executeHandlers();
        }
      }
    };
    this._attachHandler = function (e) {
      t._handlers = t._handlers.concat(e);
      t._executeHandlers();
    };
    this._executeHandlers = function () {
      if (t._state !== r.PENDING) {
        var e = t._handlers.slice();
        t._handlers = [];
        e.forEach(function (e) {
          if (!e.done) {
            if (t._state === r.RESOLVED && e.onfulfilled) {
              e.onfulfilled(t._value);
            }
            if (t._state === r.REJECTED && e.onrejected) {
              e.onrejected(t._value);
            }
            e.done = true;
          }
        });
      }
    };
    try {
      e(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  e.resolve = function (t) {
    return new e(function (e) {
      e(t);
    });
  };
  e.reject = function (t) {
    return new e(function (e, n) {
      n(t);
    });
  };
  e.all = function (t) {
    return new e(function (n, r) {
      if (Array.isArray(t)) {
        if (0 !== t.length) {
          var i = t.length;
          var o = [];
          t.forEach(function (t, a) {
            e.resolve(t).then(function (e) {
              o[a] = e;
              if (0 === (i -= 1)) {
                n(o);
              }
            }).then(null, r);
          });
        } else {
          n([]);
        }
      } else {
        r(new TypeError("Promise.all requires an array as input."));
      }
    });
  };
  e.prototype.then = function (t, n) {
    var r = this;
    return new e(function (e, i) {
      r._attachHandler({
        done: false,
        onfulfilled: function (n) {
          if (t) {
            try {
              return void e(t(n));
            } catch (r) {
              return void i(r);
            }
          } else {
            e(n);
          }
        },
        onrejected: function (t) {
          if (n) {
            try {
              return void e(n(t));
            } catch (r) {
              return void i(r);
            }
          } else {
            i(t);
          }
        }
      });
    });
  };
  e.prototype.catch = function (e) {
    return this.then(function (e) {
      return e;
    }, e);
  };
  e.prototype.finally = function (t) {
    var n = this;
    return new e(function (e, r) {
      var i;
      var o;
      return n.then(function (e) {
        o = false;
        i = e;
        if (t) {
          t();
        }
      }, function (e) {
        o = true;
        i = e;
        if (t) {
          t();
        }
      }).then(function () {
        if (o) {
          r(i);
        } else {
          e(i);
        }
      });
    });
  };
  e.prototype.toString = function () {
    return "[object SyncPromise]";
  };
  return e;
}();
export default o;