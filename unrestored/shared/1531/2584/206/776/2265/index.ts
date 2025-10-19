/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2265
 */

"use strict";

var r = require("../../../36/2668/220");
var i = require("../../../36/2668/230");
var o = require("../../../1036/1363/569");
var a = require("../965").breakableTypePattern;
var s = require("./2266/index");
var c = require("./1120");
var u = require("./1346");
var l = require("./1345");
function f(e) {
  return Boolean(e.test);
}
function d(e) {
  return "&&" === e || "||" === e;
}
function h(e) {
  return "LabeledStatement" === e.parent.type ? e.parent.label.name : null;
}
function p(e) {
  if ("Literal" === e.type) {
    return Boolean(e.value);
  }
}
function _(e, t) {
  var n;
  var r;
  var i;
  var o = e.codePath;
  var a = s.getState(o);
  var u = a.currentSegments;
  var f = a.headSegments;
  var d = Math.max(u.length, f.length);
  for (n = 0; n < d; ++n) {
    if ((r = u[n]) !== (i = f[n]) && r) {
      l.dump("onCodePathSegmentEnd ".concat(r.id));
      if (r.reachable) {
        e.emitter.emit("onCodePathSegmentEnd", r, t);
      }
    }
  }
  for (a.currentSegments = f, n = 0; n < d; ++n) {
    if ((r = u[n]) !== (i = f[n]) && i) {
      l.dump("onCodePathSegmentStart ".concat(i.id));
      c.markUsed(i);
      if (i.reachable) {
        e.emitter.emit("onCodePathSegmentStart", i, t);
      }
    }
  }
}
function A(e, t) {
  var n = e.codePath;
  var r = n && s.getState(n);
  var i = t.parent;
  switch (t.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      if (n) {
        _(e, t);
        l.dumpState(t, r, false);
      }
      n = e.codePath = new s(e.idGenerator.next(), n, e.onLooped);
      r = s.getState(n);
      l.dump("onCodePathStart ".concat(n.id));
      e.emitter.emit("onCodePathStart", n, t);
      break;
    case "LogicalExpression":
      if (d(t.operator)) {
        r.pushChoiceContext(t.operator, function (e) {
          var t = e.parent;
          switch (t.type) {
            case "ConditionalExpression":
            case "IfStatement":
            case "WhileStatement":
            case "DoWhileStatement":
            case "ForStatement":
              return t.test === e;
            case "LogicalExpression":
              return d(t.operator);
            default:
              return false;
          }
        }(t));
      }
      break;
    case "ConditionalExpression":
    case "IfStatement":
      r.pushChoiceContext("test", false);
      break;
    case "SwitchStatement":
      r.pushSwitchContext(t.cases.some(f), h(t));
      break;
    case "TryStatement":
      r.pushTryContext(Boolean(t.finalizer));
      break;
    case "SwitchCase":
      if (i.discriminant !== t && i.cases[0] !== t) {
        r.forkPath();
      }
      break;
    case "WhileStatement":
    case "DoWhileStatement":
    case "ForStatement":
    case "ForInStatement":
    case "ForOfStatement":
      r.pushLoopContext(t.type, h(t));
      break;
    case "LabeledStatement":
      if (!a.test(t.body.type)) {
        r.pushBreakContext(false, t.label.name);
      }
  }
  _(e, t);
  l.dumpState(t, r, false);
}
function g(e, t) {
  switch (t.type) {
    case "Program":
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      var n = e.codePath;
      s.getState(n).makeFinal();
      (function (e, t) {
        for (var n = s.getState(e.codePath), r = n.currentSegments, i = 0; i < r.length; ++i) {
          var o = r[i];
          l.dump("onCodePathSegmentEnd ".concat(o.id));
          if (o.reachable) {
            e.emitter.emit("onCodePathSegmentEnd", o, t);
          }
        }
        n.currentSegments = [];
      })(e, t);
      l.dump("onCodePathEnd ".concat(n.id));
      e.emitter.emit("onCodePathEnd", n, t);
      l.dumpDot(n);
      if (n = e.codePath = e.codePath.upper) {
        l.dumpState(t, s.getState(n), true);
      }
  }
}
var v = function () {
  function e(t) {
    r(this, e);
    this.original = t;
    this.emitter = t.emitter;
    this.codePath = null;
    this.idGenerator = new u("s");
    this.currentNode = null;
    this.onLooped = this.onLooped.bind(this);
  }
  i(e, [{
    key: "enterNode",
    value: function (e) {
      this.currentNode = e;
      if (e.parent) {
        (function (e, t) {
          var n = e.codePath;
          var r = s.getState(n);
          var i = t.parent;
          switch (i.type) {
            case "LogicalExpression":
              if (i.right === t && d(i.operator)) {
                r.makeLogicalRight();
              }
              break;
            case "ConditionalExpression":
            case "IfStatement":
              if (i.consequent === t) {
                r.makeIfConsequent();
              } else {
                if (i.alternate === t) {
                  r.makeIfAlternate();
                }
              }
              break;
            case "SwitchCase":
              if (i.consequent[0] === t) {
                r.makeSwitchCaseBody(false, !i.test);
              }
              break;
            case "TryStatement":
              if (i.handler === t) {
                r.makeCatchBlock();
              } else {
                if (i.finalizer === t) {
                  r.makeFinallyBlock();
                }
              }
              break;
            case "WhileStatement":
              if (i.test === t) {
                r.makeWhileTest(p(t));
              } else {
                o(i.body === t);
                r.makeWhileBody();
              }
              break;
            case "DoWhileStatement":
              if (i.body === t) {
                r.makeDoWhileBody();
              } else {
                o(i.test === t);
                r.makeDoWhileTest(p(t));
              }
              break;
            case "ForStatement":
              if (i.test === t) {
                r.makeForTest(p(t));
              } else {
                if (i.update === t) {
                  r.makeForUpdate();
                } else {
                  if (i.body === t) {
                    r.makeForBody();
                  }
                }
              }
              break;
            case "ForInStatement":
            case "ForOfStatement":
              if (i.left === t) {
                r.makeForInOfLeft();
              } else {
                if (i.right === t) {
                  r.makeForInOfRight();
                } else {
                  o(i.body === t);
                  r.makeForInOfBody();
                }
              }
              break;
            case "AssignmentPattern":
              if (i.right === t) {
                r.pushForkContext();
                r.forkBypassPath();
                r.forkPath();
              }
          }
        })(this, e);
      }
      A(this, e);
      this.original.enterNode(e);
      this.currentNode = null;
    }
  }, {
    key: "leaveNode",
    value: function (e) {
      this.currentNode = e;
      (function (e, t) {
        var n = e.codePath;
        var r = s.getState(n);
        var i = false;
        switch (t.type) {
          case "IfStatement":
          case "ConditionalExpression":
            r.popChoiceContext();
            break;
          case "LogicalExpression":
            if (d(t.operator)) {
              r.popChoiceContext();
            }
            break;
          case "SwitchStatement":
            r.popSwitchContext();
            break;
          case "SwitchCase":
            if (0 === t.consequent.length) {
              r.makeSwitchCaseBody(true, !t.test);
            }
            if (r.forkContext.reachable) {
              i = true;
            }
            break;
          case "TryStatement":
            r.popTryContext();
            break;
          case "BreakStatement":
            _(e, t);
            r.makeBreak(t.label && t.label.name);
            i = true;
            break;
          case "ContinueStatement":
            _(e, t);
            r.makeContinue(t.label && t.label.name);
            i = true;
            break;
          case "ReturnStatement":
            _(e, t);
            r.makeReturn();
            i = true;
            break;
          case "ThrowStatement":
            _(e, t);
            r.makeThrow();
            i = true;
            break;
          case "Identifier":
            if (function (e) {
              var t = e.parent;
              switch (t.type) {
                case "LabeledStatement":
                case "BreakStatement":
                case "ContinueStatement":
                case "ArrayPattern":
                case "RestElement":
                case "ImportSpecifier":
                case "ImportDefaultSpecifier":
                case "ImportNamespaceSpecifier":
                case "CatchClause":
                  return false;
                case "FunctionDeclaration":
                case "FunctionExpression":
                case "ArrowFunctionExpression":
                case "ClassDeclaration":
                case "ClassExpression":
                case "VariableDeclarator":
                  return t.id !== e;
                case "Property":
                case "MethodDefinition":
                  return t.key !== e || t.computed || t.shorthand;
                case "AssignmentPattern":
                  return t.key !== e;
                default:
                  return true;
              }
            }(t)) {
              r.makeFirstThrowablePathInTryBlock();
              i = true;
            }
            break;
          case "CallExpression":
          case "ImportExpression":
          case "MemberExpression":
          case "NewExpression":
            r.makeFirstThrowablePathInTryBlock();
            break;
          case "WhileStatement":
          case "DoWhileStatement":
          case "ForStatement":
          case "ForInStatement":
          case "ForOfStatement":
            r.popLoopContext();
            break;
          case "AssignmentPattern":
            r.popForkContext();
            break;
          case "LabeledStatement":
            if (!a.test(t.body.type)) {
              r.popBreakContext();
            }
        }
        if (!i) {
          _(e, t);
        }
        l.dumpState(t, r, true);
      })(this, e);
      this.original.leaveNode(e);
      g(this, e);
      this.currentNode = null;
    }
  }, {
    key: "onLooped",
    value: function (e, t) {
      if (e.reachable && t.reachable) {
        l.dump("onCodePathSegmentLoop ".concat(e.id, " -> ").concat(t.id));
        this.emitter.emit("onCodePathSegmentLoop", e, t, this.currentNode);
      }
    }
  }]);
  return e;
}();
module.exports = v;