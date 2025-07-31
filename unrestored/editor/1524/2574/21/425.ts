"use strict";

export { m as a };
var r;
var o = require("../1/index");
var i = (module => {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
})(o);
var a = require("../7");
var s = require("../27");
var c = require("../40");
var l = require("../57/index");
var u = require("../58/index");
var d = require("../197/276");
!function (e) {
  e.BREAK = "BREAK";
  e.CONTINUE = "CONTINUE";
  e.TERMINATE = "TERMINATE";
}(r || (r = {}));
var p = function (e) {
  Object(l.a)(n, e);
  var t = Object(u.a)(n);
  function n() {
    var e;
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Scheduler terminated!";
    Object(s.a)(this, n);
    (e = t.call(this, o)).name = r.TERMINATE;
    return e;
  }
  return n;
}(Object(d.a)(Error));
var f = function (e) {
  Object(l.a)(n, e);
  var t = Object(u.a)(n);
  function n() {
    var e;
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Repetition continued!";
    Object(s.a)(this, n);
    (e = t.call(this, o)).name = r.CONTINUE;
    return e;
  }
  return n;
}(Object(d.a)(Error));
var h = function (e) {
  Object(l.a)(n, e);
  var t = Object(u.a)(n);
  function n() {
    var e;
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Repetition broken!";
    Object(s.a)(this, n);
    (e = t.call(this, o)).name = r.BREAK;
    return e;
  }
  return n;
}(Object(d.a)(Error));
var m = function () {
  function e() {
    Object(s.a)(this, e);
    this._continuous = void 0;
    this._terminated = void 0;
    this._continuous = {
      promise: Promise.resolve()
    };
    this._terminated = !1;
  }
  Object(c.a)(e, [{
    key: "checkContinuity",
    value: function () {
      return this._continuous.promise;
    }
  }, {
    key: "hangUp",
    value: function () {
      var e = this;
      this._continuous.promise = new Promise(function (t, n) {
        e._continuous.resolve = t;
        e._continuous.reject = n;
      });
    }
  }, {
    key: "goOn",
    value: function () {
      if (!this._terminated) {
        if (this._continuous.resolve) {
          this._continuous.resolve();
        }
        this._continuous = {
          promise: Promise.resolve()
        };
      }
    }
  }, {
    key: "giveUp",
    value: function () {
      this._terminated = !0;
      if (this._continuous.reject) {
        this._continuous.reject(new p());
      }
      this._continuous = {
        promise: Promise.reject(new p())
      };
    }
  }, {
    key: "run",
    value: function () {
      var e = Object(a.a)(i.a.mark(function e(t) {
        var n;
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.prev = 0;
                e.next = 3;
                return this.checkContinuity();
              case 3:
                e.next = 5;
                return t();
              case 5:
                n = e.sent;
                return e.abrupt("return", n);
              case 9:
                if (e.prev = 9, e.t0 = e.catch(0), e.t0.name !== r.TERMINATE) {
                  e.next = 14;
                  break;
                }
                e.next = 15;
                break;
              case 14:
                throw e.t0;
              case 15:
              case "end":
                return e.stop();
            }
          }
        }, e, this, [[0, 9]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "plan",
    value: function (e) {
      var t = this;
      return function () {
        return t.run(e);
      };
    }
  }, {
    key: "breakLoop",
    value: function () {
      throw new h();
    }
  }, {
    key: "continueLoop",
    value: function () {
      throw new f();
    }
  }, {
    key: "loop",
    value: function () {
      var t = Object(a.a)(i.a.mark(function t(n, o) {
        var s;
        var c;
        return i.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                s = -1;
                c = function () {
                  var e = Object(a.a)(i.a.mark(function e() {
                    return i.a.wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", !0);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  }));
                  return function () {
                    return e.apply(this, arguments);
                  };
                }();
                if ("number" === typeof o) {
                  s = Math.round(o);
                } else {
                  c = o;
                }
              case 3:
                if (t.t0 = s--, !t.t0) {
                  t.next = 8;
                  break;
                }
                t.next = 7;
                return c();
              case 7:
                t.t0 = t.sent;
              case 8:
                if (!t.t0) {
                  t.next = 29;
                  break;
                }
                t.prev = 9;
                t.next = 12;
                return this.checkContinuity();
              case 12:
                t.next = 14;
                return n();
              case 14:
                t.next = 25;
                break;
              case 16:
                if (t.prev = 16, t.t1 = t.catch(9), t.t1.name !== r.BREAK) {
                  t.next = 20;
                  break;
                }
                return t.abrupt("break", 29);
              case 20:
                if (t.t1.name !== r.CONTINUE) {
                  t.next = 24;
                  break;
                }
                t.next = 23;
                return e.sleep();
              case 23:
                return t.abrupt("continue", 3);
              case 24:
                throw t.t1;
              case 25:
                t.next = 27;
                return e.sleep();
              case 27:
                t.next = 3;
                break;
              case 29:
              case "end":
                return t.stop();
            }
          }
        }, t, this, [[9, 16]]);
      }));
      return function (e, n) {
        return t.apply(this, arguments);
      };
    }()
  }, {
    key: "loopConditionally",
    value: function () {
      var e = Object(a.a)(i.a.mark(function e(t, n) {
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return this.loop(t, n);
              case 2:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "loopStep",
    value: function () {
      var t = Object(a.a)(i.a.mark(function t(n, o, a, s) {
        var c;
        var l;
        return i.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                c = o > a;
                s = Math.abs(s);
                if (c) {
                  s *= -1;
                }
                l = o;
              case 4:
                if (!(c ? l > a : l < a)) {
                  t.next = 22;
                  break;
                }
                t.next = 7;
                return e.sleep();
              case 7:
                t.prev = 7;
                t.next = 10;
                return n(l);
              case 10:
                t.next = 19;
                break;
              case 12:
                if (t.prev = 12, t.t0 = t.catch(7), t.t0.name !== r.BREAK) {
                  t.next = 16;
                  break;
                }
                return t.abrupt("break", 22);
              case 16:
                if (t.t0.name !== r.CONTINUE) {
                  t.next = 18;
                  break;
                }
                return t.abrupt("continue", 19);
              case 18:
                throw t.t0;
              case 19:
                l += s;
                t.next = 4;
                break;
              case 22:
              case "end":
                return t.stop();
            }
          }
        }, t, null, [[7, 12]]);
      }));
      return function (e, n, r, o) {
        return t.apply(this, arguments);
      };
    }()
  }, {
    key: "loopStepClosedRange",
    value: function () {
      var t = Object(a.a)(i.a.mark(function t(n, o, a, s) {
        var c;
        var l;
        return i.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                c = o > a;
                s = Math.abs(s);
                if (c) {
                  s *= -1;
                }
                l = o;
              case 4:
                if (!(c ? l >= a : l <= a)) {
                  t.next = 22;
                  break;
                }
                t.next = 7;
                return e.sleep();
              case 7:
                t.prev = 7;
                t.next = 10;
                return n(l);
              case 10:
                t.next = 19;
                break;
              case 12:
                if (t.prev = 12, t.t0 = t.catch(7), t.t0.name !== r.BREAK) {
                  t.next = 16;
                  break;
                }
                return t.abrupt("break", 22);
              case 16:
                if (t.t0.name !== r.CONTINUE) {
                  t.next = 18;
                  break;
                }
                return t.abrupt("continue", 19);
              case 18:
                throw t.t0;
              case 19:
                l += s;
                t.next = 4;
                break;
              case 22:
              case "end":
                return t.stop();
            }
          }
        }, t, null, [[7, 12]]);
      }));
      return function (e, n, r, o) {
        return t.apply(this, arguments);
      };
    }()
  }, {
    key: "listForEach",
    value: function () {
      var t = Object(a.a)(i.a.mark(function t(n, o) {
        var a;
        return i.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                a = 0;
              case 1:
                if (!(a < o.length)) {
                  t.next = 19;
                  break;
                }
                t.next = 4;
                return e.sleep();
              case 4:
                t.prev = 4;
                t.next = 7;
                return n(o[a]);
              case 7:
                t.next = 16;
                break;
              case 9:
                if (t.prev = 9, t.t0 = t.catch(4), t.t0.name !== r.BREAK) {
                  t.next = 13;
                  break;
                }
                return t.abrupt("break", 19);
              case 13:
                if (t.t0.name !== r.CONTINUE) {
                  t.next = 15;
                  break;
                }
                return t.abrupt("continue", 16);
              case 15:
                throw t.t0;
              case 16:
                a++;
                t.next = 1;
                break;
              case 19:
              case "end":
                return t.stop();
            }
          }
        }, t, null, [[4, 9]]);
      }));
      return function (e, n) {
        return t.apply(this, arguments);
      };
    }()
  }, {
    key: "loopFinitely",
    value: function () {
      var e = Object(a.a)(i.a.mark(function e(t, n) {
        var r;
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (!((r = Number(n)) > 0)) {
                  e.next = 4;
                  break;
                }
                e.next = 4;
                return this.loop(t, r);
              case 4:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "loopInfinitely",
    value: function () {
      var e = Object(a.a)(i.a.mark(function e(t) {
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return this.loop(t, -1);
              case 2:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }()
  }, {
    key: "waitUntil",
    value: function () {
      var e = Object(a.a)(i.a.mark(function e(t) {
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2;
                return this.loopConditionally(function () {}, Object(a.a)(i.a.mark(function e() {
                  var n;
                  return i.a.wrap(function (e) {
                    for (;;) {
                      switch (e.prev = e.next) {
                        case 0:
                          e.next = 2;
                          return t();
                        case 2:
                          n = e.sent;
                          return e.abrupt("return", !n);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                    }
                  }, e);
                })));
              case 2:
              case "end":
                return e.stop();
            }
          }
        }, e, this);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }()
  }], [{
    key: "sleep",
    value: function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.DEFAULT_SLEEP_DURATION;
      return new Promise(function (n) {
        setTimeout(n, Math.min(t, e.MAX_TIMEOUT));
      });
    }
  }]);
  return e;
}();
m.DEFAULT_SLEEP_DURATION = 10;
m.MAX_TIMEOUT = Math.pow(2, 31) - 1;
export default m;