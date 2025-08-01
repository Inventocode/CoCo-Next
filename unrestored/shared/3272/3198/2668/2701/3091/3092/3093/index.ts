"use strict";

var r = require("../../../../220");
var i = require("../../../../230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var a = require("../../../../../../../1531/2584/1036/1363/569");
var s = require("../../../../2633/index");
var o = require("./3094");
var l = require("../2799");
var u = s.numericLiteral;
var c = s.sequenceExpression;
var p = function () {
  function e(t, n, i) {
    r(this, e);
    this._defaultOpts = {
      importedSource: null,
      importedType: "commonjs",
      importedInterop: "babel",
      importingInterop: "babel",
      ensureLiveReference: !1,
      ensureNoContext: !1,
      importPosition: "before"
    };
    var a = t.find(function (e) {
      return e.isProgram();
    });
    this._programPath = a;
    this._programScope = a.scope;
    this._hub = a.hub;
    this._defaultOpts = this._applyDefaults(n, i, !0);
  }
  i(e, [{
    key: "addDefault",
    value: function (e, t) {
      return this.addNamed("default", e, t);
    }
  }, {
    key: "addNamed",
    value: function (e, t, n) {
      a("string" === typeof e);
      return this._generateImport(this._applyDefaults(t, n), e);
    }
  }, {
    key: "addNamespace",
    value: function (e, t) {
      return this._generateImport(this._applyDefaults(e, t), null);
    }
  }, {
    key: "addSideEffect",
    value: function (e, t) {
      return this._generateImport(this._applyDefaults(e, t), !1);
    }
  }, {
    key: "_applyDefaults",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      var r = [];
      if ("string" === typeof e) {
        r.push({
          importedSource: e
        });
        r.push(t);
      } else {
        a(!t, "Unexpected secondary arguments.");
        r.push(e);
      }
      for (var i = Object.assign({}, this._defaultOpts), s = function () {
          var e = l[o];
          if (!e) {
            return "continue";
          }
          Object.keys(i).forEach(function (t) {
            if (void 0 !== e[t]) {
              i[t] = e[t];
            }
          });
          if (!n) {
            if (void 0 !== e.nameHint) {
              i.nameHint = e.nameHint;
            }
            if (void 0 !== e.blockHoist) {
              i.blockHoist = e.blockHoist;
            }
          }
        }, o = 0, l = r; o < l.length; o++) {
        s();
      }
      return i;
    }
  }, {
    key: "_generateImport",
    value: function (e, t) {
      var n = "default" === t;
      var r = !!t && !n;
      var i = null === t;
      var a = e.importedSource;
      var s = e.importedType;
      var p = e.importedInterop;
      var f = e.importingInterop;
      var d = e.ensureLiveReference;
      var h = e.ensureNoContext;
      var y = e.nameHint;
      var m = e.importPosition;
      var v = e.blockHoist;
      var g = y || t;
      var T = (0, l.default)(this._programPath);
      var b = T && "node" === f;
      var S = T && "babel" === f;
      if ("after" === m && !T) {
        throw new Error('"importPosition": "after" is only supported in modules');
      }
      var E = new o.default(a, this._programScope, this._hub);
      if ("es6" === s) {
        if (!b && !S) {
          throw new Error("Cannot import an ES6 module from CommonJS");
        }
        E.import();
        if (i) {
          E.namespace(y || a);
        } else {
          if (n || r) {
            E.named(g, t);
          }
        }
      } else {
        if ("commonjs" !== s) {
          throw new Error('Unexpected interopType "'.concat(s, '"'));
        }
        if ("babel" === p) {
          if (b) {
            g = "default" !== g ? g : a;
            var x = "".concat(a, "$es6Default");
            E.import();
            if (i) {
              E.default(x).var(g || a).wildcardInterop();
            } else {
              if (n) {
                if (d) {
                  E.default(x).var(g || a).defaultInterop().read("default");
                } else {
                  E.default(x).var(g).defaultInterop().prop(t);
                }
              } else {
                if (r) {
                  E.default(x).read(t);
                }
              }
            }
          } else if (S) {
            E.import();
            if (i) {
              E.namespace(g || a);
            } else {
              if (n || r) {
                E.named(g, t);
              }
            }
          } else {
            E.require();
            if (i) {
              E.var(g || a).wildcardInterop();
            } else {
              if ((n || r) && d) {
                if (n) {
                  g = "default" !== g ? g : a;
                  E.var(g).read(t);
                  E.defaultInterop();
                } else {
                  E.var(a).read(t);
                }
              } else {
                if (n) {
                  E.var(g).defaultInterop().prop(t);
                } else {
                  if (r) {
                    E.var(g).prop(t);
                  }
                }
              }
            }
          }
        } else if ("compiled" === p) {
          if (b) {
            E.import();
            if (i) {
              E.default(g || a);
            } else {
              if (n || r) {
                E.default(a).read(g);
              }
            }
          } else {
            if (S) {
              E.import();
              if (i) {
                E.namespace(g || a);
              } else {
                if (n || r) {
                  E.named(g, t);
                }
              }
            } else {
              E.require();
              if (i) {
                E.var(g || a);
              } else {
                if (n || r) {
                  if (d) {
                    E.var(a).read(g);
                  } else {
                    E.prop(t).var(g);
                  }
                }
              }
            }
          }
        } else {
          if ("uncompiled" !== p) {
            throw new Error('Unknown importedInterop "'.concat(p, '".'));
          }
          if (n && d) {
            throw new Error("No live reference for commonjs default");
          }
          if (b) {
            E.import();
            if (i) {
              E.default(g || a);
            } else {
              if (n) {
                E.default(g);
              } else {
                if (r) {
                  E.default(a).read(g);
                }
              }
            }
          } else {
            if (S) {
              E.import();
              if (i) {
                E.default(g || a);
              } else {
                if (n) {
                  E.default(g);
                } else {
                  if (r) {
                    E.named(g, t);
                  }
                }
              }
            } else {
              E.require();
              if (i) {
                E.var(g || a);
              } else {
                if (n) {
                  E.var(g);
                } else {
                  if (r) {
                    if (d) {
                      E.var(a).read(g);
                    } else {
                      E.var(g).prop(t);
                    }
                  }
                }
              }
            }
          }
        }
      }
      var P = E.done();
      var A = P.statements;
      var k = P.resultName;
      this._insertStatements(A, m, v);
      return (n || r) && h && "Identifier" !== k.type ? c([u(0), k]) : k;
    }
  }, {
    key: "_insertStatements",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "before";
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
      var r = this._programPath.get("body");
      if ("after" === t) {
        for (var i = r.length - 1; i >= 0; i--) {
          if (r[i].isImportDeclaration()) {
            return void r[i].insertAfter(e);
          }
        }
      } else {
        e.forEach(function (e) {
          e._blockHoist = n;
        });
        var a = r.find(function (e) {
          var t = e.node._blockHoist;
          return Number.isFinite(t) && t < 4;
        });
        if (a) {
          return void a.insertBefore(e);
        }
      }
      this._programPath.unshiftContainer("body", e);
    }
  }]);
  return e;
}();
exports.default = p;