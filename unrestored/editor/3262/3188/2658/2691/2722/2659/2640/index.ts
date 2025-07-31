"use strict";

var r = require("../../../../../../3190/494");
var i = require("../../../../220");
var a = require("../../../../230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = exports.SHOULD_STOP = exports.SHOULD_SKIP = exports.REMOVED = void 0;
var s = require("../2979/2723");
var o = require("../../../../../../../1524/2574/206/775/806/index");
var l = require("../index");
var u = require("../2742/index");
var c = require("../../2624/index");
var p = c;
var f = require("../2655");
var d = require("./2929/index");
var h = require("./2952");
var y = require("./2953/index");
var m = require("./2956/index");
var v = require("./2963");
var g = require("./2964/index");
var T = require("./2971");
var b = require("./2972");
var S = require("./2973/index");
var E = require("./2975/index");
var x = require("./2977");
var P = require("./2978");
var A = c.validate;
var k = o("babel");
exports.REMOVED = 1;
exports.SHOULD_STOP = 2;
exports.SHOULD_SKIP = 4;
var w = function () {
  function e(t, n) {
    i(this, e);
    this.contexts = [];
    this.state = null;
    this.opts = null;
    this._traverseFlags = 0;
    this.skipKeys = null;
    this.parentPath = null;
    this.container = null;
    this.listKey = null;
    this.key = null;
    this.node = null;
    this.type = null;
    this.parent = n;
    this.hub = t;
    this.data = null;
    this.context = null;
    this.scope = null;
  }
  a(e, [{
    key: "getScope",
    value: function (e) {
      return this.isScope() ? new u.default(this) : e;
    }
  }, {
    key: "setData",
    value: function (e, t) {
      if (null == this.data) {
        this.data = Object.create(null);
      }
      return this.data[e] = t;
    }
  }, {
    key: "getData",
    value: function (e, t) {
      if (null == this.data) {
        this.data = Object.create(null);
      }
      var n = this.data[e];
      if (void 0 === n && void 0 !== t) {
        n = this.data[e] = t;
      }
      return n;
    }
  }, {
    key: "buildCodeFrameError",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SyntaxError;
      return this.hub.buildError(this.node, e, t);
    }
  }, {
    key: "traverse",
    value: function (e, t) {
      (0, l.default)(this.node, e, this.scope, t, this);
    }
  }, {
    key: "set",
    value: function (e, t) {
      A(this.node, e, t);
      this.node[e] = t;
    }
  }, {
    key: "getPathLocation",
    value: function () {
      var e = [];
      var t = this;
      do {
        var n = t.key;
        if (t.inList) {
          n = "".concat(t.listKey, "[").concat(n, "]");
        }
        e.unshift(n);
      } while (t = t.parentPath);
      return e.join(".");
    }
  }, {
    key: "debug",
    value: function (e) {
      if (k.enabled) {
        k("".concat(this.getPathLocation(), " ").concat(this.type, ": ").concat(e));
      }
    }
  }, {
    key: "toString",
    value: function () {
      return (0, d.default)(this.node).code;
    }
  }, {
    key: "inList",
    get: function () {
      return !!this.listKey;
    },
    set: function (e) {
      if (!e) {
        this.listKey = null;
      }
    }
  }, {
    key: "parentKey",
    get: function () {
      return this.listKey || this.key;
    }
  }, {
    key: "shouldSkip",
    get: function () {
      return !!(4 & this._traverseFlags);
    },
    set: function (e) {
      if (e) {
        this._traverseFlags |= 4;
      } else {
        this._traverseFlags &= -5;
      }
    }
  }, {
    key: "shouldStop",
    get: function () {
      return !!(2 & this._traverseFlags);
    },
    set: function (e) {
      if (e) {
        this._traverseFlags |= 2;
      } else {
        this._traverseFlags &= -3;
      }
    }
  }, {
    key: "removed",
    get: function () {
      return !!(1 & this._traverseFlags);
    },
    set: function (e) {
      if (e) {
        this._traverseFlags |= 1;
      } else {
        this._traverseFlags &= -2;
      }
    }
  }], [{
    key: "get",
    value: function (t) {
      var n = t.hub;
      var r = t.parentPath;
      var i = t.parent;
      var a = t.container;
      var s = t.listKey;
      var o = t.key;
      if (!n && r && (n = r.hub), !i) {
        throw new Error("To get a node path the parent needs to exist");
      }
      var l = a[o];
      var u = f.path.get(i);
      if (!u) {
        u = new Map();
        f.path.set(i, u);
      }
      var c = u.get(l);
      if (!c) {
        c = new e(n, i);
        if (l) {
          u.set(l, c);
        }
      }
      c.setup(r, a, s, o);
      return c;
    }
  }]);
  return e;
}();
Object.assign(w.prototype, h, y, m, v, g, T, b, S, E, x, P);
var O;
var C = r(p.TYPES);
try {
  var I = function () {
    var e = O.value;
    var t = "is".concat(e);
    var n = p[t];
    w.prototype[t] = function (e) {
      return n(this.node, e);
    };
    w.prototype["assert".concat(e)] = function (t) {
      if (!n(this.node, t)) {
        throw new TypeError("Expected node path of type ".concat(e));
      }
    };
  };
  for (C.s(); !(O = C.n()).done;) {
    I();
  }
} catch (L) {
  C.e(L);
} finally {
  C.f();
}
for (var N = function () {
    var e = D[_];
    if ("_" === e[0]) {
      return "continue";
    }
    if (p.TYPES.indexOf(e) < 0) {
      p.TYPES.push(e);
    }
    var t = s[e];
    w.prototype["is".concat(e)] = function (e) {
      return t.checkPath(this, e);
    };
  }, _ = 0, D = Object.keys(s); _ < D.length; _++) {
  N();
}
var j = w;
exports.default = j;