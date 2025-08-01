"use strict";

var r = require("../19");
var o = require("../0/index");
var i = function __importDefault(module) {
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
}(o);
var a = require("../242/index");
var s = require("../20");
var c = require("../108");
function l(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if ("object" === Object(c.a)(e) && e && "current" in e) {
      e.current = t;
    }
  }
}
var u = require("../75/index");
var d = function __importDefault(module) {
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
}(u);
function p(e) {
  return e instanceof HTMLElement ? e : d.a.findDOMNode(e);
}
var f = require("../458");
var h = new Map();
var m = new f.default(function (e) {
  e.forEach(function (e) {
    var t;
    var n = e.target;
    if (!(null === (t = h.get(n)) || void 0 === t)) {
      t.forEach(function (e) {
        return e(n);
      });
    }
  });
});
var g = require("../95");
var _ = require("../96");
var v = require("../120");
var b = require("../140");
var y = function (e) {
  Object(v.a)(n, e);
  var t = Object(b.a)(n);
  function n() {
    Object(g.a)(this, n);
    return t.apply(this, arguments);
  }
  Object(_.a)(n, [{
    key: "render",
    value: function () {
      return this.props.children;
    }
  }]);
  return n;
}(o.Component);
var E = o.createContext(null);
function O(e) {
  var t = e.children;
  var n = e.disabled;
  var r = o.useRef(null);
  var i = o.useRef(null);
  var c = o.useContext(E);
  var u = o.useRef({
    width: 0,
    height: 0,
    offsetWidth: 0,
    offsetHeight: 0
  });
  var d = o.isValidElement(t) && function (e) {
    var t;
    var n;
    var r = Object(a.isMemo)(e) ? e.type.type : e.type;
    return !("function" === typeof r && !(null === (t = r.prototype) || void 0 === t ? void 0 : t.render)) && !("function" === typeof e && !(null === (n = e.prototype) || void 0 === n ? void 0 : n.render));
  }(t);
  var f = d ? t.ref : null;
  var g = o.useMemo(function () {
    return function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
        t[n] = arguments[n];
      }
      return function (e) {
        t.forEach(function (t) {
          l(t, e);
        });
      };
    }(f, r);
  }, [f, r]);
  var _ = o.useRef(e);
  _.current = e;
  var v = o.useCallback(function (e) {
    var t = _.current;
    var n = t.onResize;
    var r = t.data;
    var o = e.getBoundingClientRect();
    var i = o.width;
    var a = o.height;
    var l = e.offsetWidth;
    var d = e.offsetHeight;
    var p = Math.floor(i);
    var f = Math.floor(a);
    if (u.current.width !== p || u.current.height !== f || u.current.offsetWidth !== l || u.current.offsetHeight !== d) {
      var h = {
        width: p,
        height: f,
        offsetWidth: l,
        offsetHeight: d
      };
      u.current = h;
      var m = l === Math.round(i) ? i : l;
      var g = d === Math.round(a) ? a : d;
      var v = Object(s.a)(Object(s.a)({}, h), {}, {
        offsetWidth: m,
        offsetHeight: g
      });
      if (!(null === c || void 0 === c)) {
        c(v, e, r);
      }
      if (n) {
        Promise.resolve().then(function () {
          n(v, e);
        });
      }
    }
  }, []);
  o.useEffect(function () {
    var e;
    var t;
    var o = p(r.current) || p(i.current);
    if (o && !n) {
      e = o;
      t = v;
      if (!h.has(e)) {
        h.set(e, new Set());
        m.observe(e);
      }
      h.get(e).add(t);
    }
    return function () {
      return function (e, t) {
        if (h.has(e)) {
          h.get(e).delete(t);
          if (!h.get(e).size) {
            m.unobserve(e);
            h.delete(e);
          }
        }
      }(o, v);
    };
  }, [r.current, n]);
  return o.createElement(y, {
    ref: i
  }, d ? o.cloneElement(t, {
    ref: g
  }) : t);
}
function w(e) {
  return function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var r = [];
    i.a.Children.forEach(t, function (t) {
      if (void 0 !== t && null !== t || n.keepEmpty) {
        if (Array.isArray(t)) {
          r = r.concat(e(t));
        } else {
          if (Object(a.isFragment)(t) && t.props) {
            r = r.concat(e(t.props.children, n));
          } else {
            r.push(t);
          }
        }
      }
    });
    return r;
  }(e.children).map(function (t, n) {
    var i = (null === t || void 0 === t ? void 0 : t.key) || "".concat("rc-observer-key", "-").concat(n);
    return o.createElement(O, Object(r.a)({}, e, {
      key: i
    }), t);
  });
}
w.Collection = function (e) {
  var t = e.children;
  var n = e.onBatchResize;
  var r = o.useRef(0);
  var i = o.useRef([]);
  var a = o.useContext(E);
  var s = o.useCallback(function (e, t, o) {
    r.current += 1;
    var s = r.current;
    i.current.push({
      size: e,
      element: t,
      data: o
    });
    Promise.resolve().then(function () {
      if (s === r.current) {
        if (!(null === n || void 0 === n)) {
          n(i.current);
        }
        i.current = [];
      }
    });
    if (!(null === a || void 0 === a)) {
      a(e, t, o);
    }
  }, [n, a]);
  return o.createElement(E.Provider, {
    value: s
  }, t);
};
export { w as a };
export default w;