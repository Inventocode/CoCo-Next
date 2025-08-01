"use strict";

var r = require("../../../../3198/2668/220");
var a = require("../../../../3198/2668/230");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var i = require("../../../../../1531/2584/1036/1363/569");
var o = require("../../3195/2717/index");
var s = require("./3194");
var u = require("../2837");
var l = o.numericLiteral;
var p = o.sequenceExpression;
var f = function () {
  function e(t, n, a) {
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
    var i = t.find(function (e) {
      return e.isProgram();
    });
    this._programPath = i;
    this._programScope = i.scope;
    this._hub = i.hub;
    this._defaultOpts = this._applyDefaults(n, a, !0);
  }
  a(e, [{
    key: "addDefault",
    value: function (e, t) {
      return this.addNamed("default", e, t);
    }
  }, {
    key: "addNamed",
    value: function (e, t, n) {
      i("string" === typeof e);
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
        i(!t, "Unexpected secondary arguments.");
        r.push(e);
      }
      for (var a = Object.assign({}, this._defaultOpts), o = function () {
          var e = u[s];
          if (!e) {
            return "continue";
          }
          Object.keys(a).forEach(function (t) {
            if (void 0 !== e[t]) {
              a[t] = e[t];
            }
          });
          if (!n) {
            if (void 0 !== e.nameHint) {
              a.nameHint = e.nameHint;
            }
            if (void 0 !== e.blockHoist) {
              a.blockHoist = e.blockHoist;
            }
          }
        }, s = 0, u = r; s < u.length; s++) {
        o();
      }
      return a;
    }
  }, {
    key: "_generateImport",
    value: function (e, t) {
      var n = "default" === t;
      var r = !!t && !n;
      var a = null === t;
      var i = e.importedSource;
      var o = e.importedType;
      var f = e.importedInterop;
      var d = e.importingInterop;
      var c = e.ensureLiveReference;
      var y = e.ensureNoContext;
      var T = e.nameHint;
      var m = e.importPosition;
      var S = e.blockHoist;
      var E = T || t;
      var b = (0, u.default)(this._programPath);
      var v = b && "node" === d;
      var P = b && "babel" === d;
      if ("after" === m && !b) {
        throw new Error('"importPosition": "after" is only supported in modules');
      }
      var O = new s.default(i, this._programScope, this._hub);
      if ("es6" === o) {
        if (!v && !P) {
          throw new Error("Cannot import an ES6 module from CommonJS");
        }
        O.import();
        if (a) {
          O.namespace(T || i);
        } else {
          if (n || r) {
            O.named(E, t);
          }
        }
      } else {
        if ("commonjs" !== o) {
          throw new Error('Unexpected interopType "'.concat(o, '"'));
        }
        if ("babel" === f) {
          if (v) {
            E = "default" !== E ? E : i;
            var A = "".concat(i, "$es6Default");
            O.import();
            if (a) {
              O.default(A).var(E || i).wildcardInterop();
            } else {
              if (n) {
                if (c) {
                  O.default(A).var(E || i).defaultInterop().read("default");
                } else {
                  O.default(A).var(E).defaultInterop().prop(t);
                }
              } else {
                if (r) {
                  O.default(A).read(t);
                }
              }
            }
          } else if (P) {
            O.import();
            if (a) {
              O.namespace(E || i);
            } else {
              if (n || r) {
                O.named(E, t);
              }
            }
          } else {
            O.require();
            if (a) {
              O.var(E || i).wildcardInterop();
            } else {
              if ((n || r) && c) {
                if (n) {
                  E = "default" !== E ? E : i;
                  O.var(E).read(t);
                  O.defaultInterop();
                } else {
                  O.var(i).read(t);
                }
              } else {
                if (n) {
                  O.var(E).defaultInterop().prop(t);
                } else {
                  if (r) {
                    O.var(E).prop(t);
                  }
                }
              }
            }
          }
        } else if ("compiled" === f) {
          if (v) {
            O.import();
            if (a) {
              O.default(E || i);
            } else {
              if (n || r) {
                O.default(i).read(E);
              }
            }
          } else {
            if (P) {
              O.import();
              if (a) {
                O.namespace(E || i);
              } else {
                if (n || r) {
                  O.named(E, t);
                }
              }
            } else {
              O.require();
              if (a) {
                O.var(E || i);
              } else {
                if (n || r) {
                  if (c) {
                    O.var(i).read(E);
                  } else {
                    O.prop(t).var(E);
                  }
                }
              }
            }
          }
        } else {
          if ("uncompiled" !== f) {
            throw new Error('Unknown importedInterop "'.concat(f, '".'));
          }
          if (n && c) {
            throw new Error("No live reference for commonjs default");
          }
          if (v) {
            O.import();
            if (a) {
              O.default(E || i);
            } else {
              if (n) {
                O.default(E);
              } else {
                if (r) {
                  O.default(i).read(E);
                }
              }
            }
          } else {
            if (P) {
              O.import();
              if (a) {
                O.default(E || i);
              } else {
                if (n) {
                  O.default(E);
                } else {
                  if (r) {
                    O.named(E, t);
                  }
                }
              }
            } else {
              O.require();
              if (a) {
                O.var(E || i);
              } else {
                if (n) {
                  O.var(E);
                } else {
                  if (r) {
                    if (c) {
                      O.var(i).read(E);
                    } else {
                      O.var(E).prop(t);
                    }
                  }
                }
              }
            }
          }
        }
      }
      var g = O.done();
      var x = g.statements;
      var D = g.resultName;
      this._insertStatements(x, m, S);
      return (n || r) && y && "Identifier" !== D.type ? p([l(0), D]) : D;
    }
  }, {
    key: "_insertStatements",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "before";
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
      var r = this._programPath.get("body");
      if ("after" === t) {
        for (var a = r.length - 1; a >= 0; a--) {
          if (r[a].isImportDeclaration()) {
            return void r[a].insertAfter(e);
          }
        }
      } else {
        e.forEach(function (e) {
          e._blockHoist = n;
        });
        var i = r.find(function (e) {
          var t = e.node._blockHoist;
          return Number.isFinite(t) && t < 4;
        });
        if (i) {
          return void i.insertBefore(e);
        }
      }
      this._programPath.unshiftContainer("body", e);
    }
  }]);
  return e;
}();
exports.default = f;