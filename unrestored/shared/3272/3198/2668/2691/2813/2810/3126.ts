"use strict";

var r = require("../../../220");
var i = require("../../../230");
var a = require("../../../../../../1531/2584/1/index");
var s = require("../../../../../2883/2731/806/index");
function o() {
  var e = require("../../../3141/2648");
  o = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ConfigPrinter = exports.ChainFormatter = void 0;
var l = {
  Programmatic: 0,
  Config: 1
};
exports.ChainFormatter = l;
var u = {
  title: function (e, t, n) {
    var r = "";
    if (e === l.Programmatic) {
      r = "programmatic options";
      if (t) {
        r += " from " + t;
      }
    } else {
      r = "config " + n;
    }
    return r;
  },
  loc: function (e, t) {
    var n = "";
    if (null != e) {
      n += ".overrides[".concat(e, "]");
    }
    if (null != t) {
      n += '.env["'.concat(t, '"]');
    }
    return n;
  },
  optionsAndDescriptors: a.mark(function e(t) {
    var n;
    var r;
    var i;
    return a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            delete (n = Object.assign({}, t.options)).overrides;
            delete n.env;
            e.t0 = s;
            return e.delegateYield(t.plugins(), "t1", 5);
          case 5:
            e.t2 = e.t1;
            if ((r = (0, e.t0)(e.t2)).length) {
              n.plugins = r.map(function (e) {
                return c(e);
              });
            }
            e.t3 = s;
            return e.delegateYield(t.presets(), "t4", 10);
          case 10:
            e.t5 = e.t4;
            if ((i = (0, e.t3)(e.t5)).length) {
              n.presets = s(i).map(function (e) {
                return c(e);
              });
            }
            return e.abrupt("return", JSON.stringify(n, void 0, 2));
          case 14:
          case "end":
            return e.stop();
        }
      }
    }, e);
  })
};
function c(e) {
  var t;
  var n = null == (t = e.file) ? void 0 : t.request;
  if (null == n) {
    if ("object" === typeof e.value) {
      n = e.value;
    } else {
      if ("function" === typeof e.value) {
        n = "[Function: ".concat(e.value.toString().substr(0, 50), " ... ]");
      }
    }
  }
  if (null == n) {
    n = "[Unknown]";
  }
  return void 0 === e.options ? n : null == e.name ? [n, e.options] : [n, e.options, e.name];
}
var p = function () {
  function e() {
    r(this, e);
    this._stack = [];
  }
  i(e, [{
    key: "configure",
    value: function (e, t, n) {
      var r = this;
      var i = n.callerName;
      var a = n.filepath;
      return e ? function (e, n, s) {
        r._stack.push({
          type: t,
          callerName: i,
          filepath: a,
          content: e,
          index: n,
          envName: s
        });
      } : function () {};
    }
  }, {
    key: "output",
    value: a.mark(function t() {
      var n;
      return a.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (0 !== this._stack.length) {
                t.next = 2;
                break;
              }
              return t.abrupt("return", "");
            case 2:
              return t.delegateYield(o().all(this._stack.map(function (t) {
                return e.format(t);
              })), "t0", 3);
            case 3:
              n = t.t0;
              return t.abrupt("return", n.join("\n\n"));
            case 5:
            case "end":
              return t.stop();
          }
        }
      }, t, this);
    })
  }], [{
    key: "format",
    value: a.mark(function e(t) {
      var n;
      var r;
      var i;
      return a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              n = u.title(t.type, t.callerName, t.filepath);
              if (r = u.loc(t.index, t.envName)) {
                n += " ".concat(r);
              }
              return e.delegateYield(u.optionsAndDescriptors(t.content), "t0", 4);
            case 4:
              i = e.t0;
              return e.abrupt("return", "".concat(n, "\n").concat(i));
            case 6:
            case "end":
              return e.stop();
          }
        }
      }, e);
    })
  }]);
  return e;
}();
exports.ConfigPrinter = p;