"use strict";

var r = require("../../../3200/494");
var i = require("../220");
var a = require("../230");
function s() {
  var e = require("./2732/index");
  s = function () {
    return e;
  };
  return e;
}
function o() {
  var e = require("../2647/index");
  o = function () {
    return e;
  };
  return e;
}
function l() {
  var e = require("./2688/index");
  l = function () {
    return e;
  };
  return e;
}
function u() {
  var e = require("../2633/index");
  u = function () {
    return e;
  };
  return e;
}
function c() {
  var e = require("./3091/index");
  c = function () {
    return e;
  };
  return e;
}
function p() {
  var e = require("./2667");
  p = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var f = u();
var d = f.cloneNode;
var h = f.interpreterDirective;
var y = {
  enter: function (e, t) {
    var n = e.node.loc;
    if (n) {
      t.loc = n;
      e.stop();
    }
  }
};
var m = function () {
  function e(t, n) {
    var r = this;
    var a = n.code;
    var s = n.ast;
    var l = n.inputMap;
    i(this, e);
    this._map = new Map();
    this.opts = void 0;
    this.declarations = {};
    this.path = null;
    this.ast = {};
    this.scope = void 0;
    this.metadata = {};
    this.code = "";
    this.inputMap = null;
    this.hub = {
      file: this,
      getCode: function () {
        return r.code;
      },
      getScope: function () {
        return r.scope;
      },
      addHelper: this.addHelper.bind(this),
      buildError: this.buildCodeFrameError.bind(this)
    };
    this.opts = t;
    this.code = a;
    this.ast = s;
    this.inputMap = l;
    this.path = o().NodePath.get({
      hub: this.hub,
      parentPath: null,
      parent: this.ast,
      container: this.ast,
      key: "program"
    }).setContext();
    this.scope = this.path.scope;
  }
  a(e, [{
    key: "shebang",
    get: function () {
      var e = this.path.node.interpreter;
      return e ? e.value : "";
    },
    set: function (e) {
      if (e) {
        this.path.get("interpreter").replaceWith(h(e));
      } else {
        this.path.get("interpreter").remove();
      }
    }
  }, {
    key: "set",
    value: function (e, t) {
      if ("helpersNamespace" === e) {
        throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");
      }
      this._map.set(e, t);
    }
  }, {
    key: "get",
    value: function (e) {
      return this._map.get(e);
    }
  }, {
    key: "has",
    value: function (e) {
      return this._map.has(e);
    }
  }, {
    key: "getModuleName",
    value: function () {
      return (0, c().getModuleName)(this.opts, this.opts);
    }
  }, {
    key: "addImport",
    value: function () {
      throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.");
    }
  }, {
    key: "availableHelper",
    value: function (e, t) {
      var n;
      try {
        n = s().minVersion(e);
      } catch (r) {
        if ("BABEL_HELPER_UNKNOWN" !== r.code) {
          throw r;
        }
        return !1;
      }
      return "string" !== typeof t || (p().valid(t) && (t = "^".concat(t)), !p().intersects("<".concat(n), t) && !p().intersects(">=8.0.0", t));
    }
  }, {
    key: "addHelper",
    value: function (t) {
      var n = this;
      var i = this.declarations[t];
      if (i) {
        return d(i);
      }
      var a = this.get("helperGenerator");
      if (a) {
        var o = a(t);
        if (o) {
          return o;
        }
      }
      s().ensure(t, e);
      var l;
      var u = this.declarations[t] = this.scope.generateUidIdentifier(t);
      var c = {};
      var p = r(s().getDependencies(t));
      try {
        for (p.s(); !(l = p.n()).done;) {
          var f = l.value;
          c[f] = this.addHelper(f);
        }
      } catch (m) {
        p.e(m);
      } finally {
        p.f();
      }
      var h = s().get(t, function (e) {
        return c[e];
      }, u, Object.keys(this.scope.getAllBindings()));
      var y = h.nodes;
      h.globals.forEach(function (e) {
        if (n.path.scope.hasBinding(e, !0)) {
          n.path.scope.rename(e);
        }
      });
      y.forEach(function (e) {
        e._compact = !0;
      });
      this.path.unshiftContainer("body", y);
      this.path.get("body").forEach(function (e) {
        if (-1 !== y.indexOf(e.node) && e.isVariableDeclaration()) {
          n.scope.registerDeclaration(e);
        }
      });
      return u;
    }
  }, {
    key: "addTemplateObject",
    value: function () {
      throw new Error("This function has been moved into the template literal transform itself.");
    }
  }, {
    key: "buildCodeFrameError",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SyntaxError;
      var r = e && (e.loc || e._loc);
      if (!r && e) {
        var i = {
          loc: null
        };
        (0, o().default)(e, y, this.scope, i);
        var a = "This is an error on an internal node. Probably an internal error.";
        if (r = i.loc) {
          a += " Location has been estimated.";
        }
        t += " (".concat(a, ")");
      }
      if (r) {
        var s = this.opts.highlightCode;
        var u = void 0 === s || s;
        t += "\n" + (0, l().codeFrameColumns)(this.code, {
          start: {
            line: r.start.line,
            column: r.start.column + 1
          },
          end: r.end && r.start.line === r.end.line ? {
            line: r.end.line,
            column: r.end.column + 1
          } : void 0
        }, {
          highlightCode: u
        });
      }
      return new n(t);
    }
  }]);
  return e;
}();
exports.default = m;