"use strict";

export { P as a };
export { W as b };
var r = require("../1/index");
var o = function __importDefault(module) {
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
}(r);
var i = require("../7");
var a = require("../27");
var s = require("../40");
var c = require("../17/index");
var l = require("../26/208/index");
var u = require("../4/index");
var d = require("../301/index");
var p = require("../26/426");
var f = require("../15");
var h = require("../9");
var m = require("../38/139");
var g = require("../47");
var _ = require("../25/index");
var v = require("../6");
var b = require("../11");
var y = require("./776/index");
var E = ["loopFinitely", "loopConditionally", "loopInfinitely", "loopStep", "loopStepClosedRange", "listForEach"];
var O = ["breakLoop", "continueLoop"];
var w = {
  create: function (e) {
    var t = [];
    var n = !1;
    var r = function () {
      return t.length > 0 ? t[t.length - 1] : null;
    };
    return {
      onCodePathStart: function () {
        var e;
        t.push({
          inLoop: (null === (e = r()) || void 0 === e ? void 0 : e.inLoop) || n
        });
        n = !1;
      },
      onCodePathEnd: function () {
        t.pop();
      },
      CallExpression: function (t) {
        if (function (e) {
          if ("CallExpression" !== e.type) {
            return !1;
          }
          var t = e.callee;
          return "MemberExpression" === t.type && "Identifier" === t.object.type && "Identifier" === t.property.type && !t.computed && 0 !== e.arguments.length && ("FunctionExpression" === e.arguments[0].type || "ArrowFunctionExpression" === e.arguments[0].type) && "asyncScheduler" === t.object.name && E.includes(t.property.name);
        }(t)) {
          n = !0;
        } else if (function (e) {
          if ("CallExpression" !== e.type) {
            return !1;
          }
          var t = e.callee;
          return "MemberExpression" === t.type && "Identifier" === t.object.type && "Identifier" === t.property.type && !t.computed && "asyncScheduler" === t.object.name && O.includes(t.property.name);
        }(t)) {
          var o;
          if (!(null === (o = r()) || void 0 === o ? void 0 : o.inLoop)) {
            e.report({
              message: "Loop control call is not in loop context",
              node: t
            });
          }
        }
      }
    };
  }
};
var C = /([^=]+)=([^;]+);?/g;
var T = {
  create: function (e) {
    var t = e.getSourceCode();
    var n = e.options[0].screen;
    var r = e.options[1];
    var o = new Set(n.widgetIds.concat(n.invisibleWidgetIds, r));
    return {
      Program: function () {
        t.getAllComments().filter(function (e) {
          return "Block" === e.type;
        }).forEach(function (t) {
          var n = function (e) {
            for (var t = {};;) {
              var n = C.exec(e);
              if (!n) {
                break;
              }
              t[n[1].trim()] = n[2].trim();
            }
            return t;
          }(t.value).widgetId;
          if (!(void 0 === n || o.has(n))) {
            e.report({
              message: "Widget ".concat(n, " not exists"),
              loc: t.loc
            });
          }
        });
      }
    };
  }
};
var S = new y.Linter();
S.defineRule("no-loop-control-outside-loop", w);
S.defineRule("widgets-must-exists", T);
var I = Object(b.a)({
  "consistent-return": "warn"
}, "no-loop-control-outside-loop", "error");
function A(e, t, n, r) {
  var o = {
    Coco: !0,
    asyncScheduler: !0
  };
  if (!(null === r || void 0 === r)) {
    r.forEach(function (e) {
      o[e] = !0;
    });
  }
  return S.verify(e, {
    globals: o,
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: "module",
      ecmaFeatures: {}
    },
    rules: Object(v.a)(Object(v.a)({}, I), {}, Object(b.a)({}, "widgets-must-exists", ["error", {
      screen: t
    }, n])),
    env: {
      es2017: !0
    }
  });
}
var j = require("../323");
var N = require("../55");
var R = require("../28/index");
var k = ["Coco", "AsyncScheduler", "asyncScheduler"];
function x(e) {
  var t = /Expected to return a value at the end of async function '(.+)'./.exec(e);
  if (t) {
    return t[1];
  }
}
var D = new RegExp("return \\/\\* blockId=(\\w+);blockType=".concat(l.PROCEDURE_BLOCK_TYPES.RETURN, " \\*\\/"));
function M(e, t) {
  var n = new RegExp("await (?:Coco.tryExecute\\()?".concat(e.map(function (e) {
    return e.replace(/\$/g, "\\$");
  }).join("|"), " \\/\\* blockId=(\\w+);blockType=").concat(l.PROCEDURE_BLOCK_TYPES.CALL_RETURN, " \\*\\/")).exec(t);
  if (n) {
    return n[1];
  }
}
function L(e, t, n, r, o, i) {
  var a = e + "\n\n" + t;
  var s = a.split(/\n{2,}/);
  var c = o.id;
  var l = [].concat(k, Object(_.a)(n));
  var u = function (e) {
    var t = D.exec(e);
    if (t) {
      return t[1];
    }
  }(e);
  if (u) {
    throw new m.b(m.a.RETURN_NOT_IN_FUNCTION, c, u, "returnNotInFunction");
  }
  var d;
  var p = Object(g.a)(s);
  try {
    for (p.s(); !(d = p.n()).done;) {
      var f = d.value;
      if (f.trim().length) {
        var h;
        var v = A(f, o, i, l);
        var b = Object(g.a)(v);
        try {
          for (b.s(); !(h = b.n()).done;) {
            var y = h.value;
            var E = Object(j.a)(f, y);
            if ("no-undef" === y.ruleId) {
              throw new m.b(m.a.NO_UNDEF, c, E.blockId, "noUndef", E);
            }
            if ("consistent-return" === y.ruleId) {
              var O = x(y.message);
              var w = O ? r.get(O) : void 0;
              if (w) {
                w.consistentReturn = !1;
              }
            } else {
              if ("no-loop-control-outside-loop" === y.ruleId) {
                throw new m.b(m.a.LOOP_CONTROL_NOT_IN_LOOP, c, E.blockId, "loopControlOutsideLoop", E);
              }
              if ("widgets-must-exists" === y.ruleId) {
                N.b.push({
                  type: "warning",
                  message: Object(R.o)("widgetNotExists"),
                  screenId: c,
                  blockId: E.blockId
                });
              }
            }
          }
        } catch (S) {
          b.e(S);
        } finally {
          b.f();
        }
      }
    }
  } catch (S) {
    p.e(S);
  } finally {
    p.f();
  }
  var C = [];
  var T = [];
  r.forEach(function (e, t) {
    if (e.hasReturn) {
      if (!e.consistentReturn) {
        C.push(t);
      }
    } else {
      T.push(t);
    }
  });
  if (u = M(T, a)) {
    throw new m.b(m.a.NO_RETURN_FUNCTION, c, u, "noReturnFunction");
  }
  if (u = M(C, a)) {
    throw new m.b(m.a.BRANCH_RETURN_FUNCTION, c, u, "branchReturnFunction");
  }
}
var P;
var B = require("./725");
var F = function () {
  function e(t, n, r, o, i, s) {
    Object(a.a)(this, e);
    this._undoStack = [];
    this._redoStack = [];
    this._screenId = void 0;
    this._workspaceJson = void 0;
    this._workspaceOffset = void 0;
    this._procedureManager = void 0;
    this._screenId = t;
    this._procedureManager = new l.ProcedureManager(o, i, s);
    this._workspaceJson = n ? Object(B.load_from_json)(this._procedureManager, n, !1) : {
      blocks: {},
      connections: {},
      comments: {}
    };
    this._workspaceOffset = r || {
      x: 0,
      y: 0
    };
  }
  Object(s.a)(e, [{
    key: "getScreenId",
    value: function () {
      return this._screenId;
    }
  }, {
    key: "getWorkspaceJson",
    value: function () {
      return this._workspaceJson;
    }
  }, {
    key: "setWorkspaceJson",
    value: function (e) {
      this._workspaceJson = e;
    }
  }, {
    key: "getUndoStack",
    value: function () {
      return this._undoStack;
    }
  }, {
    key: "getRedoStack",
    value: function () {
      return this._redoStack;
    }
  }, {
    key: "setWorkspaceOffset",
    value: function (e) {
      this._workspaceOffset = e;
    }
  }, {
    key: "getWorkspaceOffset",
    value: function () {
      return this._workspaceOffset;
    }
  }, {
    key: "getProcedureManager",
    value: function () {
      return this._procedureManager;
    }
  }]);
  return e;
}();
function G(e, t, n) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  r.innerHTML = "<animate id=".concat("@_ANIMATION_SVG_ID_@", " attributeName=\"fill\" attributeType=\"XML\" values=\"").concat(e, " ; ").concat(t, " ; ").concat(n, "\" dur=\"1s\" repeatCount=\"indefinite\" keyTimes=\"0 ; 0.5; 1\" calcMode=\"spline\" keySplines=\"0.25,0.1,0.25,1;0.25,0.1,0.25,1\"></animate>");
  return r.firstChild;
}
!function (e) {
  e[e.FLYOUT_CHANGE = 0] = "FLYOUT_CHANGE";
  e[e.COMMON_BLOCKS = 1] = "COMMON_BLOCKS";
  e[e.WORKSPACE_SCALE_CHANGE = 2] = "WORKSPACE_SCALE_CHANGE";
  e[e.DELETE_BLOCK = 3] = "DELETE_BLOCK";
  e[e.SELECT_WIDGET_CATEGORY = 4] = "SELECT_WIDGET_CATEGORY";
  e[e.LINT_ERROR = 5] = "LINT_ERROR";
  e[e.STOP_WARNING_ANIMATION = 6] = "STOP_WARNING_ANIMATION";
  e[e.PROCEDURE_UPDATE_DISABLED = 7] = "PROCEDURE_UPDATE_DISABLED";
  e[e.PROCEDURE_UPDATE_PARAM = 8] = "PROCEDURE_UPDATE_PARAM";
  e[e.PROCEDURE_UPDATE_NAME = 9] = "PROCEDURE_UPDATE_NAME";
}(P || (P = {}));
var U = {
  listeners: {},
  addEventListener: function (e, t) {
    if (this.listeners[e]) {
      this.listeners[e].push(t);
    } else {
      this.listeners[e] = [t];
    }
  },
  emit: function (e, t) {
    if (this.listeners[e]) {
      this.listeners[e].forEach(function (e) {
        return e(t);
      });
    }
  },
  removeEventListener: function (e, t) {
    var n = this.listeners[e];
    if (n) {
      if (t) {
        n.splice(n.indexOf(t), 1);
      } else {
        delete this.listeners[e];
      }
    }
  }
};
var W = function () {
  function e() {
    var t = this;
    Object(a.a)(this, e);
    this._currentScreenId = "__NOT_EXIST__";
    this._currentProjectId = "__NOT_EXIST__";
    this.debuggingBlock = void 0;
    this.workspaceDataMap = new Map();
    this.jsGenerator = Object(d.c)();
    this.eventBus = void 0;
    this.getCurrentScreenId = function () {
      return t._currentScreenId;
    };
    this._moveBlockToViewArea = function () {
      var e = Object(i.a)(o.a.mark(function e(n, r) {
        var i;
        var a;
        var s;
        var l;
        var u;
        var d;
        var p;
        var h;
        var m;
        var g;
        var _;
        var v;
        var b;
        var y;
        var E;
        var O;
        var w;
        var C;
        var T;
        var S;
        var I;
        var A;
        var j;
        var N;
        var R;
        var k;
        return o.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (!(i = t.getBlockById(n))) {
                  e.next = 32;
                  break;
                }
                a = i.get_relative_to_surface_xy()[0];
                s = i.get_relative_to_surface_xy()[1];
                l = c.Blink.mainWorkspace.get_metrics();
                u = c.Blink.mainWorkspace.get_scale();
                d = a * u;
                p = s * u;
                h = r.type;
                m = r.offset;
                g = r.origin;
                _ = m.x;
                v = m.y;
                b = "percent" === h ? _ * l.viewWidth : _;
                y = "percent" === h ? v * l.viewHeight : v;
                E = 0;
                O = 0;
                if ("center" === g) {
                  w = i.get_height_width();
                  E = u * w.width / 2;
                  O = u * w.height / 2;
                }
                C = l.viewLeft + E - l.contentLeft;
                T = l.viewTop + O - l.contentTop;
                S = d - b + E - l.contentLeft;
                I = p - y + O - l.contentTop;
                j = (S - C) / (A = 10);
                N = (I - T) / A;
                if (R = c.Blink.mainWorkspace.get_scrollbar()) {
                  R.set(S, I);
                }
                k = 0;
              case 25:
                if (!(k < A)) {
                  e.next = 32;
                  break;
                }
                k++;
                if (R) {
                  R.set(C + k * j, T + k * N);
                }
                e.next = 30;
                return Object(f.lb)(5);
              case 30:
                e.next = 25;
                break;
              case 32:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return function (t, n) {
        return e.apply(this, arguments);
      };
    }();
    this.playWarningAnimation = function () {
      var e = Object(i.a)(o.a.mark(function e(n) {
        var r;
        var i;
        var a;
        var s;
        var c;
        return o.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                t.stopWarningAnimation(!1);
                e.next = 3;
                return t._moveBlockToViewArea(n, {
                  type: "percent",
                  offset: {
                    x: .15,
                    y: .35
                  },
                  origin: "top-left"
                });
              case 3:
                if (r = t.getBlockById(n)) {
                  e.next = 6;
                  break;
                }
                return e.abrupt("return");
              case 6:
                if (i = r.svg_path) {
                  e.next = 9;
                  break;
                }
                return e.abrupt("return");
              case 9:
                if (!document.body.contains(i)) {
                  e.next = 21;
                  break;
                }
                if (a = i.getAttribute("fill")) {
                  e.next = 13;
                  break;
                }
                return e.abrupt("return");
              case 13:
                if (a.indexOf("url(#blocklyDisabledPattern") > -1) {
                  a = "#686d76";
                }
                s = r.get_svg_root();
                i.setAttribute("filter", "url(#".concat(p.b.blocklyFocusedShadowFilterId, ")"));
                i.setAttribute("fill-backups", a);
                if (Object(f.Q)()) {
                  i.removeAttribute("fill");
                }
                i.setAttribute("id", "@_BLOCK_SVG_PATH_ID_@");
                if (c = G(Object(f.ib)(a, 0), Object(f.ib)(a, .2), Object(f.ib)(a, 0))) {
                  s.appendChild(c);
                }
              case 21:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
    this.stopWarningAnimation = function () {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      var n = document.getElementById("@_BLOCK_SVG_PATH_ID_@");
      var r = document.getElementById("@_ANIMATION_SVG_ID_@");
      if (n) {
        var o = n.getAttribute("fill-backups") || "#000000";
        n.setAttribute("fill", o);
        n.removeAttribute("filter");
        n.removeAttribute("fill-backups");
        n.removeAttribute("id");
      }
      if (r) {
        r.remove();
      }
      if (e) {
        t.eventBus.emit(P.STOP_WARNING_ANIMATION);
      }
    };
    this.eventBus = U;
  }
  Object(s.a)(e, [{
    key: "getWorkspaceDataByScreenId",
    value: function (e) {
      return this.workspaceDataMap.get(e);
    }
  }, {
    key: "setCurrentProjectId",
    value: function (e) {
      this._currentProjectId = e;
    }
  }, {
    key: "getCurrentProjectId",
    value: function () {
      return this._currentProjectId;
    }
  }, {
    key: "getDebuggingBlock",
    value: function () {
      return this.debuggingBlock;
    }
  }, {
    key: "setDebuggingBlock",
    value: function (e) {
      this.debuggingBlock = e;
    }
  }, {
    key: "getCurrentScreenWorkspaceData",
    value: function () {
      return this.workspaceDataMap.get(this._currentScreenId);
    }
  }, {
    key: "rerenderCurrentScreenWorkspaceData",
    value: function () {
      var e = this.workspaceDataMap.get(this._currentScreenId);
      if (e) {
        this._renderWorkspaceByData(e);
      }
    }
  }, {
    key: "selectWorkspaceByScreenId",
    value: function (e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      var n = this.workspaceDataMap.get(e);
      if (n) {
        if (t) {
          this.updateCurrentWorkspaceData();
        }
        this._currentScreenId = e;
        this._renderWorkspaceByData(n);
      }
    }
  }, {
    key: "addWorkspaceData",
    value: function (e) {
      var t = this;
      if (!this.workspaceDataMap.get(e.screenId)) {
        var n = new F(e.screenId, e.workspaceJson, e.workspaceOffset, function (e, n, r) {
          t.eventBus.emit(P.PROCEDURE_UPDATE_DISABLED, {
            procName: e,
            callDisabled: n,
            callreturnDisabled: r
          });
        }, function (e, n, r) {
          t.eventBus.emit(P.PROCEDURE_UPDATE_PARAM, {
            type: e,
            procName: n,
            changeValue: r
          });
        }, function (e, n) {
          t.eventBus.emit(P.PROCEDURE_UPDATE_NAME, {
            oldName: e,
            newName: n
          });
        });
        this.workspaceDataMap.set(e.screenId, n);
        return n;
      }
    }
  }, {
    key: "removeWorkspaceByScreenId",
    value: function (e) {
      this.workspaceDataMap.delete(e);
    }
  }, {
    key: "clearAll",
    value: function () {
      this.workspaceDataMap.clear();
      this.jsGenerator.clearAllDynamicValues();
      c.Blink.events.disable();
      c.Blink.mainWorkspace.clear();
      c.Blink.events.enable();
    }
  }, {
    key: "updateCurrentWorkspaceData",
    value: function () {
      var e = this._currentScreenId;
      var t = this.getWorkspaceDataByScreenId(e);
      if (t) {
        var n = c.Blink.json.workspace_to_json(c.Blink.mainWorkspace);
        t.setWorkspaceJson(n);
        var r = {
          x: c.Blink.mainWorkspace.scroll_xy[0],
          y: c.Blink.mainWorkspace.scroll_xy[1]
        };
        t.setWorkspaceOffset(r);
      }
    }
  }, {
    key: "setWorkspaceDataByScreenId",
    value: function (e, t) {
      var n = this.getWorkspaceDataByScreenId(e);
      if (n) {
        if (t.workspaceJson) {
          n.setWorkspaceJson(t.workspaceJson);
        }
        if (t.workspaceOffset) {
          n.setWorkspaceOffset(t.workspaceOffset);
        }
      }
      return n;
    }
  }, {
    key: "copyWorkspaceData",
    value: function (e, t, n, r, o, i) {
      this.updateCurrentWorkspaceData();
      var a = this.workspaceDataMap.get(e);
      if (!a) {
        throw Error("Trying to copy screen from invalid id: ".concat(e, ". "));
      }
      var s = c.Blink.json.reset_element_ids(a.getWorkspaceJson());
      var l = {
        x: c.Blink.mainWorkspace.scroll_xy[0],
        y: c.Blink.mainWorkspace.scroll_xy[1]
      };
      if (s) {
        var u = s.blocks;
        for (var d in u) {
          var p = u[d].fields;
          if (p.WIDGET_ID) {
            var f = n.get(p.WIDGET_ID);
            if (f) {
              p.WIDGET_ID = f;
            }
          } else if (p.VAR) {
            var h = r.get(p.VAR);
            if (h) {
              p.VAR = h;
            }
          } else if (p.ARRAY) {
            var m = o.get(p.ARRAY);
            if (m) {
              p.ARRAY = m;
            }
          } else if (p.OBJECT) {
            var g = i.get(p.OBJECT);
            if (g) {
              p.OBJECT = g;
            }
          }
        }
      }
      var _ = {
        screenId: t,
        workspaceJson: s,
        workspaceOffset: l
      };
      this.addWorkspaceData(_);
      return _;
    }
  }, {
    key: "getWorkspacesRecord",
    value: function () {
      var e = {};
      this.updateCurrentWorkspaceData();
      this.workspaceDataMap.forEach(function (t, n) {
        e[n] = {
          screenId: t.getScreenId(),
          workspaceJson: t.getWorkspaceJson(),
          workspaceOffset: t.getWorkspaceOffset()
        };
      });
      return e;
    }
  }, {
    key: "generateAllWorkspaceCodes",
    value: function (e) {
      var t = this;
      var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var r = [];
      var o = this.getCurrentProjectId();
      this.workspaceDataMap.forEach(function (i, a) {
        var s = e.find(function (e) {
          return e.id === a;
        });
        if (!s) {
          throw new Error("Screen not exists");
        }
        var c = t.generateWorkspaceCode(o, s, n);
        r.push(c);
      });
      return r.join("\n");
    }
  }, {
    key: "checkDisabledBlocks",
    value: function (e, t) {
      var n = this;
      var r = e.blocks;
      var o = [];
      Object.keys(r).forEach(function (e) {
        var t = n.getBlockById(e);
        if (t && t.disabled) {
          var r = t.get_top_parent();
          if (c.BU.base.is_block_svg(r) && r.is_starting_block()) {
            o.push(t);
          }
        }
      });
      o.forEach(function (e) {
        if (e.type === l.PROCEDURE_BLOCK_TYPES.CALL_NORETURN) {
          throw new m.b(m.a.FUNCTION_IS_UNDEF, t, e.id, "functionIsUndefined");
        }
        if (e.type === l.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
          throw new m.b(m.a.NO_RETURN_FUNCTION, t, e.id, "noReturnFunction");
        }
        if ("param" === e.element_type) {
          if (e.type === l.PROCEDURE_BLOCK_TYPES.PARAM) {
            throw new m.b(m.a.PARAMETER_NOT_IN_FUNCTION, t, e.id, "parameterNotInFunction");
          }
          throw new m.b(m.a.PARAM_NOT_IN_CONTEXT, t, e.id, "paramNotInContext");
        }
      });
    }
  }, {
    key: "generateWorkspaceCode",
    value: function (e, t, n) {
      var r = t.id;
      var o = this.getWorkspaceDataByScreenId(r);
      if (!o) {
        return "";
      }
      var i = Object(h.eb)();
      var a = o.getProcedureManager();
      if (n) {
        this.checkDisabledBlocks(o.getWorkspaceJson(), r);
      }
      var s = o.getWorkspaceJson();
      var c = [];
      var d = new Map();
      a.get_all_procedure_names().forEach(function (e) {
        var t = a.get_procedure_by_name(e);
        if (t) {
          var n = Object(u.f)(e, r);
          c.push(n);
          d.set(n, {
            blockId: t.def_id,
            hasReturn: !!t.return_count,
            consistentReturn: !0
          });
        }
      });
      this.jsGenerator.setDynamicValue("__CURRENT_SCREEN_ID__", r);
      this.jsGenerator.setDynamicValue("__CURRENT_PROJECT_ID__", e);
      var p = Object(h.zb)();
      var f = this.jsGenerator.workspaceToCode(s, function (e) {
        return p.has(e);
      });
      var m = this.jsGenerator.workspaceToCode(s, function (e) {
        return e === l.PROCEDURE_BLOCK_TYPES.DEF;
      });
      L(f, m, c, d, t, i);
      return m + "\n" + f;
    }
  }, {
    key: "isEmptyWorkspace",
    value: function (e, t) {
      if (e !== t) {
        var n = this.workspaceDataMap.get(t);
        return 0 === Object.keys((null === n || void 0 === n ? void 0 : n.getWorkspaceJson().blocks) || {}).length;
      }
      return 0 === c.Blink.mainWorkspace.get_all_blocks().length;
    }
  }, {
    key: "replaceWorkspaces",
    value: function (e) {
      var t = this;
      for (var n in this.clearAll(), e) {
        var r = e[n];
        this.workspaceDataMap.set(n, new F(r.screenId, r.workspaceJson, r.workspaceOffset, function (e, n, r) {
          t.eventBus.emit(P.PROCEDURE_UPDATE_DISABLED, {
            procName: e,
            callDisabled: n,
            callreturnDisabled: r
          });
        }, function (e, n, r) {
          t.eventBus.emit(P.PROCEDURE_UPDATE_PARAM, {
            type: e,
            procName: n,
            changeValue: r
          });
        }, function (e, n) {
          t.eventBus.emit(P.PROCEDURE_UPDATE_NAME, {
            oldName: e,
            newName: n
          });
        }));
      }
    }
  }, {
    key: "disabledShortcut",
    value: function () {
      c.Blink.mainWorkspace.set_hotkey_enable(!1);
    }
  }, {
    key: "ableShortcut",
    value: function () {
      c.Blink.mainWorkspace.set_hotkey_enable(!0);
    }
  }, {
    key: "resizeWorkspace",
    value: function () {
      c.Blink.utils.svg_resize(c.Blink.mainWorkspace);
    }
  }, {
    key: "unselectCurrentBlock",
    value: function () {
      var e;
      var t;
      if (!(null === (e = c.Blink.runtime_data) || void 0 === e || null === (t = e.selected) || void 0 === t)) {
        t.unselect();
      }
    }
  }, {
    key: "getBlocklyClientRectById",
    value: function (e) {
      var t = this.getBlockById(e);
      if (t) {
        return t.get_svg_root().getClientRects()[0];
      }
    }
  }, {
    key: "addBlocklySvgRootClassName",
    value: function (e, t) {
      var n = this.getBlockById(e);
      if (n) {
        n.get_svg_root().classList.add(t);
      }
    }
  }, {
    key: "removeBlocklySvgRootClassName",
    value: function (e, t) {
      var n = this.getBlockById(e);
      if (n) {
        n.get_svg_root().classList.remove(t);
      }
    }
  }, {
    key: "getBlockById",
    value: function (e) {
      return c.Blink.mainWorkspace.get_block_by_id(e);
    }
  }, {
    key: "getField",
    value: function (e, t) {
      var n = this.getBlockById(e);
      return n && n.get_field(t);
    }
  }, {
    key: "getFieldValue",
    value: function (e) {
      return e.get_value();
    }
  }, {
    key: "checkFieldValueIsSelected",
    value: function (e, t) {
      return c.Blink.mainWorkspace.get_all_blocks().some(function (n) {
        return n.get_field_value(e) === t;
      });
    }
  }, {
    key: "checkSomeFieldValueIsSelected",
    value: function (e, t) {
      return c.Blink.mainWorkspace.get_all_blocks().some(function (n) {
        var r = n.get_field_value(e);
        return !!r && t.includes(r);
      });
    }
  }, {
    key: "checkOtherScreenFieldValueIsSelected",
    value: function (e, t) {
      var n = {};
      this.workspaceDataMap.forEach(function (r, o) {
        var i = r.getWorkspaceJson().blocks;
        for (var a in i) {
          var s = i[a].fields;
          for (var c in s) if (c === e && s[c] === t) {
            n[o] = !0;
            break;
          }
        }
      });
      return Object.keys(n);
    }
  }, {
    key: "replaceFieldValue",
    value: function (e, t, n, r) {
      c.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
        var i;
        if (o.type === e && o.get_field_value(t) === n) {
          if (!(null === (i = o.get_field(t)) || void 0 === i)) {
            i.set_value(r);
          }
        }
      });
    }
  }, {
    key: "replaceTextValue",
    value: function (e, t, n, r) {
      c.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
        var i;
        var a;
        if (o.type === e && (null === (i = o.get_field(t)) || void 0 === i ? void 0 : i.get_text()) === n) {
          if (!(null === (a = o.get_field(t)) || void 0 === a)) {
            a.set_text(r);
          }
        }
      });
    }
  }, {
    key: "_renderWorkspaceByData",
    value: function (e) {
      c.Blink.events.disable();
      c.Blink.mainWorkspace.clear();
      var t = e.getWorkspaceJson();
      var n = e.getWorkspaceOffset();
      c.Blink.json.json_to_workspace(t, c.Blink.mainWorkspace);
      c.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
        if (!("param" !== e.element_type || e.deletable_)) {
          e.set_deletable(!0);
        }
      });
      this._setWorkspaceOffset(n || {
        x: 0,
        y: 0
      });
      c.Blink.mainWorkspace.set_undo_stack(e.getUndoStack());
      c.Blink.mainWorkspace.set_redo_stack(e.getRedoStack());
      c.Blink.events.enable();
    }
  }, {
    key: "_setWorkspaceOffset",
    value: function (e) {
      var t = c.Blink.mainWorkspace.get_metrics();
      var n = {
        x: e.x,
        y: e.y
      };
      var r = Math.min(n.x, -t.contentLeft);
      var o = Math.min(n.y, -t.contentTop);
      r = Math.max(r, t.viewWidth - t.contentLeft - t.contentWidth);
      o = Math.max(o, t.viewHeight - t.contentTop - t.contentHeight);
      r = -n.x - t.contentLeft;
      o = -n.y - t.contentTop;
      var i = c.Blink.mainWorkspace.get_scrollbar();
      if (i) {
        i.set(r, o);
      }
    }
  }, {
    key: "hasBlockByList",
    value: function (e) {
      var t = !1;
      this.workspaceDataMap.forEach(function (n) {
        if (!t) {
          var r = n.getWorkspaceJson().blocks;
          t = Object.values(r).some(function (t) {
            return e.includes(t.type);
          });
        }
      });
      return t;
    }
  }, {
    key: "hasCloudBlock",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "cloudRoom";
      var t = ["room_create_room", "room_create_nickname", "room_get_room_list", "room_enter_room", "room_send_message"];
      var n = ["cloud_document_set_field_item", "cloud_document_remove_field_item", "cloud_document_clear_all_field_items", "cloud_document_get_field_item", "cloud_document_get_field_key_count", "cloud_document_get_all_field_keys", "cloud_document_check_if_field_key_exists"];
      var r = ["cloudDB_insert", "cloudDB_delete", "cloudDB_update", "cloudDB_query_by_column", "cloudDB_query_by_count", "cloudDB_error"];
      var o = ["cloud_space_dict_on_error", "cloud_space_dict_set_key_value", "cloud_space_dict_delete_key", "cloud_space_dict_get_key_value", "cloud_space_dict_get_key_count", "cloud_space_dict_get_all_keys", "cloud_space_dict_clear_data"];
      var i = ["cloudTable_insert", "cloudTable_delete", "cloudTable_update", "cloudTable_query_by_column", "cloudTable_query_by_count", "cloudTable_clear_all"];
      var a = !1;
      if ("cloudRoom" === e) {
        a = this.hasBlockByList(t);
      }
      if ("cloudStorage" === e) {
        a = this.hasBlockByList(n);
      }
      if ("cloudDB" === e) {
        a = this.hasBlockByList(r);
      }
      if ("cloudDict" === e) {
        a = this.hasBlockByList(o);
      }
      if ("cloudTable" === e) {
        a = this.hasBlockByList(i);
      }
      return a;
    }
  }, {
    key: "refreshProcedureToolbox",
    value: function () {
      var e = c.Blink.mainWorkspace.get_toolbox();
      var t = c.Blink.mainWorkspace.get_flyout();
      if (t && e && !t.is_auto_close()) {
        var n = e.get_selected();
        if (n && "toolbox-function" === n.get_name()) {
          e.refresh_selection();
        }
      }
    }
  }]);
  return e;
}();
export default P;