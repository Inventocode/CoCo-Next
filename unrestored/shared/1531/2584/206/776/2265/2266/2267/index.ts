/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2267
 */

"use strict";

var r = require("../../../../../36/2668/220");
var i = require("../../../../../36/2668/230");
var o = require("../../1120");
var a = require("./2268");
function s(e, t, n, r) {
  for (var i = 0; i < r.length; ++i) {
    var o = r[i];
    e.push(o);
    if (-1 === t.indexOf(o)) {
      n.push(o);
    }
  }
}
function c(e) {
  for (var t = e.tryContext; t;) {
    if (t.hasFinalizer && "finally" !== t.position) {
      return t;
    }
    t = t.upper;
  }
  return e;
}
function u(e) {
  for (var t = e.tryContext; t;) {
    if ("try" === t.position || t.hasFinalizer && "catch" === t.position) {
      return t;
    }
    t = t.upper;
  }
  return e;
}
function l(e, t) {
  e.splice(e.indexOf(t), 1);
}
function f(e, t, n) {
  for (var r = o.flattenUnusedSegments(t), i = o.flattenUnusedSegments(n), a = Math.min(r.length, i.length), s = 0; s < a; ++s) {
    var c = r[s];
    var u = i[s];
    if (u.reachable) {
      c.nextSegments.push(u);
    }
    if (c.reachable) {
      u.prevSegments.push(c);
    }
    c.allNextSegments.push(u);
    u.allPrevSegments.push(c);
    if (u.allPrevSegments.length >= 2) {
      o.markPrevSegmentAsLooped(u, c);
    }
    e.notifyLooped(c, u);
  }
}
function d(e, t, n) {
  if (!t.processed) {
    t.trueForkContext.add(n);
    t.falseForkContext.add(n);
  }
  if (true !== e.test) {
    e.brokenForkContext.addAll(t.falseForkContext);
  }
  e.endOfTestSegments = t.trueForkContext.makeNext(0, -1);
}
var h = function () {
  function e(t, n) {
    r(this, e);
    this.idGenerator = t;
    this.notifyLooped = n;
    this.forkContext = a.newRoot(t);
    this.choiceContext = null;
    this.switchContext = null;
    this.tryContext = null;
    this.loopContext = null;
    this.breakContext = null;
    this.currentSegments = [];
    this.initialSegment = this.forkContext.head[0];
    var i = this.finalSegments = [];
    var o = this.returnedForkContext = [];
    var c = this.thrownForkContext = [];
    o.add = s.bind(null, o, c, i);
    c.add = s.bind(null, c, o, i);
  }
  i(e, [{
    key: "headSegments",
    get: function () {
      return this.forkContext.head;
    }
  }, {
    key: "parentForkContext",
    get: function () {
      var e = this.forkContext;
      return e && e.upper;
    }
  }, {
    key: "pushForkContext",
    value: function (e) {
      this.forkContext = a.newEmpty(this.forkContext, e);
      return this.forkContext;
    }
  }, {
    key: "popForkContext",
    value: function () {
      var e = this.forkContext;
      this.forkContext = e.upper;
      this.forkContext.replaceHead(e.makeNext(0, -1));
      return e;
    }
  }, {
    key: "forkPath",
    value: function () {
      this.forkContext.add(this.parentForkContext.makeNext(-1, -1));
    }
  }, {
    key: "forkBypassPath",
    value: function () {
      this.forkContext.add(this.parentForkContext.head);
    }
  }, {
    key: "pushChoiceContext",
    value: function (e, t) {
      this.choiceContext = {
        upper: this.choiceContext,
        kind: e,
        isForkingAsResult: t,
        trueForkContext: a.newEmpty(this.forkContext),
        falseForkContext: a.newEmpty(this.forkContext),
        processed: false
      };
    }
  }, {
    key: "popChoiceContext",
    value: function () {
      var e = this.choiceContext;
      this.choiceContext = e.upper;
      var t = this.forkContext;
      var n = t.head;
      switch (e.kind) {
        case "&&":
        case "||":
          if (e.processed || (e.trueForkContext.add(n), e.falseForkContext.add(n)), e.isForkingAsResult) {
            var r = this.choiceContext;
            r.trueForkContext.addAll(e.trueForkContext);
            r.falseForkContext.addAll(e.falseForkContext);
            r.processed = true;
            return e;
          }
          break;
        case "test":
          if (e.processed) {
            e.falseForkContext.clear();
            e.falseForkContext.add(n);
          } else {
            e.trueForkContext.clear();
            e.trueForkContext.add(n);
          }
          break;
        case "loop":
          return e;
        default:
          throw new Error("unreachable");
      }
      var i = e.trueForkContext;
      i.addAll(e.falseForkContext);
      t.replaceHead(i.makeNext(0, -1));
      return e;
    }
  }, {
    key: "makeLogicalRight",
    value: function () {
      var e = this.choiceContext;
      var t = this.forkContext;
      if (e.processed) {
        var n = "&&" === e.kind ? e.trueForkContext : e.falseForkContext;
        t.replaceHead(n.makeNext(0, -1));
        n.clear();
        e.processed = false;
      } else {
        if ("&&" === e.kind) {
          e.falseForkContext.add(t.head);
        } else {
          e.trueForkContext.add(t.head);
        }
        t.replaceHead(t.makeNext(-1, -1));
      }
    }
  }, {
    key: "makeIfConsequent",
    value: function () {
      var e = this.choiceContext;
      var t = this.forkContext;
      if (!e.processed) {
        e.trueForkContext.add(t.head);
        e.falseForkContext.add(t.head);
      }
      e.processed = false;
      t.replaceHead(e.trueForkContext.makeNext(0, -1));
    }
  }, {
    key: "makeIfAlternate",
    value: function () {
      var e = this.choiceContext;
      var t = this.forkContext;
      e.trueForkContext.clear();
      e.trueForkContext.add(t.head);
      e.processed = true;
      t.replaceHead(e.falseForkContext.makeNext(0, -1));
    }
  }, {
    key: "pushSwitchContext",
    value: function (e, t) {
      this.switchContext = {
        upper: this.switchContext,
        hasCase: e,
        defaultSegments: null,
        defaultBodySegments: null,
        foundDefault: false,
        lastIsDefault: false,
        countForks: 0
      };
      this.pushBreakContext(true, t);
    }
  }, {
    key: "popSwitchContext",
    value: function () {
      var e = this.switchContext;
      this.switchContext = e.upper;
      var t = this.forkContext;
      var n = this.popBreakContext().brokenForkContext;
      if (0 !== e.countForks) {
        var r = t.head;
        this.forkBypassPath();
        var i = t.head;
        n.add(r);
        if (!e.lastIsDefault) {
          if (e.defaultBodySegments) {
            !function (e, t) {
              for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                var i = t[n];
                l(r.nextSegments, i);
                l(r.allNextSegments, i);
                l(i.prevSegments, r);
                l(i.allPrevSegments, r);
              }
            }(e.defaultSegments, e.defaultBodySegments);
            f(this, i, e.defaultBodySegments);
          } else {
            n.add(i);
          }
        }
        for (var o = 0; o < e.countForks; ++o) {
          this.forkContext = this.forkContext.upper;
        }
        this.forkContext.replaceHead(n.makeNext(0, -1));
      } else if (!n.empty) {
        n.add(t.makeNext(-1, -1));
        t.replaceHead(n.makeNext(0, -1));
      }
    }
  }, {
    key: "makeSwitchCaseBody",
    value: function (e, t) {
      var n = this.switchContext;
      if (n.hasCase) {
        var r = this.forkContext;
        var i = this.pushForkContext();
        i.add(r.makeNext(0, -1));
        if (t) {
          n.defaultSegments = r.head;
          if (e) {
            n.foundDefault = true;
          } else {
            n.defaultBodySegments = i.head;
          }
        } else {
          if (!e && n.foundDefault) {
            n.foundDefault = false;
            n.defaultBodySegments = i.head;
          }
        }
        n.lastIsDefault = t;
        n.countForks += 1;
      }
    }
  }, {
    key: "pushTryContext",
    value: function (e) {
      this.tryContext = {
        upper: this.tryContext,
        position: "try",
        hasFinalizer: e,
        returnedForkContext: e ? a.newEmpty(this.forkContext) : null,
        thrownForkContext: a.newEmpty(this.forkContext),
        lastOfTryIsReachable: false,
        lastOfCatchIsReachable: false
      };
    }
  }, {
    key: "popTryContext",
    value: function () {
      var e = this.tryContext;
      this.tryContext = e.upper;
      if ("catch" !== e.position) {
        var t = e.returnedForkContext;
        var n = e.thrownForkContext;
        if (!t.empty || !n.empty) {
          var r = this.forkContext.head;
          this.forkContext = this.forkContext.upper;
          var i = r.slice(0, r.length / 2 | 0);
          var o = r.slice(r.length / 2 | 0);
          if (!t.empty) {
            c(this).returnedForkContext.add(o);
          }
          if (!n.empty) {
            u(this).thrownForkContext.add(o);
          }
          this.forkContext.replaceHead(i);
          if (!(e.lastOfTryIsReachable || e.lastOfCatchIsReachable)) {
            this.forkContext.makeUnreachable();
          }
        }
      } else {
        this.popForkContext();
      }
    }
  }, {
    key: "makeCatchBlock",
    value: function () {
      var e = this.tryContext;
      var t = this.forkContext;
      var n = e.thrownForkContext;
      e.position = "catch";
      e.thrownForkContext = a.newEmpty(t);
      e.lastOfTryIsReachable = t.reachable;
      n.add(t.head);
      var r = n.makeNext(0, -1);
      this.pushForkContext();
      this.forkBypassPath();
      this.forkContext.add(r);
    }
  }, {
    key: "makeFinallyBlock",
    value: function () {
      var e = this.tryContext;
      var t = this.forkContext;
      var n = e.returnedForkContext;
      var r = e.thrownForkContext;
      var i = t.head;
      if ("catch" === e.position) {
        this.popForkContext();
        t = this.forkContext;
        e.lastOfCatchIsReachable = t.reachable;
      } else {
        e.lastOfTryIsReachable = t.reachable;
      }
      e.position = "finally";
      if (!n.empty || !r.empty) {
        for (var a = t.makeNext(-1, -1), s = 0; s < t.count; ++s) {
          for (var c = [i[s]], u = 0; u < n.segmentsList.length; ++u) {
            c.push(n.segmentsList[u][s]);
          }
          for (var l = 0; l < r.segmentsList.length; ++l) {
            c.push(r.segmentsList[l][s]);
          }
          a.push(o.newNext(this.idGenerator.next(), c));
        }
        this.pushForkContext(true);
        this.forkContext.add(a);
      }
    }
  }, {
    key: "makeFirstThrowablePathInTryBlock",
    value: function () {
      var e = this.forkContext;
      if (e.reachable) {
        var t = u(this);
        if (t !== this && "try" === t.position && t.thrownForkContext.empty) {
          t.thrownForkContext.add(e.head);
          e.replaceHead(e.makeNext(-1, -1));
        }
      }
    }
  }, {
    key: "pushLoopContext",
    value: function (e, t) {
      var n = this.forkContext;
      var r = this.pushBreakContext(true, t);
      switch (e) {
        case "WhileStatement":
          this.pushChoiceContext("loop", false);
          this.loopContext = {
            upper: this.loopContext,
            type: e,
            label: t,
            test: undefined,
            continueDestSegments: null,
            brokenForkContext: r.brokenForkContext
          };
          break;
        case "DoWhileStatement":
          this.pushChoiceContext("loop", false);
          this.loopContext = {
            upper: this.loopContext,
            type: e,
            label: t,
            test: undefined,
            entrySegments: null,
            continueForkContext: a.newEmpty(n),
            brokenForkContext: r.brokenForkContext
          };
          break;
        case "ForStatement":
          this.pushChoiceContext("loop", false);
          this.loopContext = {
            upper: this.loopContext,
            type: e,
            label: t,
            test: undefined,
            endOfInitSegments: null,
            testSegments: null,
            endOfTestSegments: null,
            updateSegments: null,
            endOfUpdateSegments: null,
            continueDestSegments: null,
            brokenForkContext: r.brokenForkContext
          };
          break;
        case "ForInStatement":
        case "ForOfStatement":
          this.loopContext = {
            upper: this.loopContext,
            type: e,
            label: t,
            prevSegments: null,
            leftSegments: null,
            endOfLeftSegments: null,
            continueDestSegments: null,
            brokenForkContext: r.brokenForkContext
          };
          break;
        default:
          throw new Error("unknown type: \"".concat(e, "\""));
      }
    }
  }, {
    key: "popLoopContext",
    value: function () {
      var e = this.loopContext;
      this.loopContext = e.upper;
      var t = this.forkContext;
      var n = this.popBreakContext().brokenForkContext;
      switch (e.type) {
        case "WhileStatement":
        case "ForStatement":
          this.popChoiceContext();
          f(this, t.head, e.continueDestSegments);
          break;
        case "DoWhileStatement":
          var r = this.popChoiceContext();
          if (!r.processed) {
            r.trueForkContext.add(t.head);
            r.falseForkContext.add(t.head);
          }
          if (true !== e.test) {
            n.addAll(r.falseForkContext);
          }
          for (var i = r.trueForkContext.segmentsList, o = 0; o < i.length; ++o) {
            f(this, i[o], e.entrySegments);
          }
          break;
        case "ForInStatement":
        case "ForOfStatement":
          n.add(t.head);
          f(this, t.head, e.leftSegments);
          break;
        default:
          throw new Error("unreachable");
      }
      if (n.empty) {
        t.replaceHead(t.makeUnreachable(-1, -1));
      } else {
        t.replaceHead(n.makeNext(0, -1));
      }
    }
  }, {
    key: "makeWhileTest",
    value: function (e) {
      var t = this.loopContext;
      var n = this.forkContext;
      var r = n.makeNext(0, -1);
      t.test = e;
      t.continueDestSegments = r;
      n.replaceHead(r);
    }
  }, {
    key: "makeWhileBody",
    value: function () {
      var e = this.loopContext;
      var t = this.choiceContext;
      var n = this.forkContext;
      if (!t.processed) {
        t.trueForkContext.add(n.head);
        t.falseForkContext.add(n.head);
      }
      if (true !== e.test) {
        e.brokenForkContext.addAll(t.falseForkContext);
      }
      n.replaceHead(t.trueForkContext.makeNext(0, -1));
    }
  }, {
    key: "makeDoWhileBody",
    value: function () {
      var e = this.loopContext;
      var t = this.forkContext;
      var n = t.makeNext(-1, -1);
      e.entrySegments = n;
      t.replaceHead(n);
    }
  }, {
    key: "makeDoWhileTest",
    value: function (e) {
      var t = this.loopContext;
      var n = this.forkContext;
      t.test = e;
      if (!t.continueForkContext.empty) {
        t.continueForkContext.add(n.head);
        var r = t.continueForkContext.makeNext(0, -1);
        n.replaceHead(r);
      }
    }
  }, {
    key: "makeForTest",
    value: function (e) {
      var t = this.loopContext;
      var n = this.forkContext;
      var r = n.head;
      var i = n.makeNext(-1, -1);
      t.test = e;
      t.endOfInitSegments = r;
      t.continueDestSegments = t.testSegments = i;
      n.replaceHead(i);
    }
  }, {
    key: "makeForUpdate",
    value: function () {
      var e = this.loopContext;
      var t = this.choiceContext;
      var n = this.forkContext;
      if (e.testSegments) {
        d(e, t, n.head);
      } else {
        e.endOfInitSegments = n.head;
      }
      var r = n.makeDisconnected(-1, -1);
      e.continueDestSegments = e.updateSegments = r;
      n.replaceHead(r);
    }
  }, {
    key: "makeForBody",
    value: function () {
      var e = this.loopContext;
      var t = this.choiceContext;
      var n = this.forkContext;
      if (e.updateSegments) {
        e.endOfUpdateSegments = n.head;
        if (e.testSegments) {
          f(this, e.endOfUpdateSegments, e.testSegments);
        }
      } else {
        if (e.testSegments) {
          d(e, t, n.head);
        } else {
          e.endOfInitSegments = n.head;
        }
      }
      var r = e.endOfTestSegments;
      if (!r) {
        var i = a.newEmpty(n);
        i.add(e.endOfInitSegments);
        if (e.endOfUpdateSegments) {
          i.add(e.endOfUpdateSegments);
        }
        r = i.makeNext(0, -1);
      }
      e.continueDestSegments = e.continueDestSegments || r;
      n.replaceHead(r);
    }
  }, {
    key: "makeForInOfLeft",
    value: function () {
      var e = this.loopContext;
      var t = this.forkContext;
      var n = t.makeDisconnected(-1, -1);
      e.prevSegments = t.head;
      e.leftSegments = e.continueDestSegments = n;
      t.replaceHead(n);
    }
  }, {
    key: "makeForInOfRight",
    value: function () {
      var e = this.loopContext;
      var t = this.forkContext;
      var n = a.newEmpty(t);
      n.add(e.prevSegments);
      var r = n.makeNext(-1, -1);
      e.endOfLeftSegments = t.head;
      t.replaceHead(r);
    }
  }, {
    key: "makeForInOfBody",
    value: function () {
      var e = this.loopContext;
      var t = this.forkContext;
      var n = a.newEmpty(t);
      n.add(e.endOfLeftSegments);
      var r = n.makeNext(-1, -1);
      f(this, t.head, e.leftSegments);
      e.brokenForkContext.add(t.head);
      t.replaceHead(r);
    }
  }, {
    key: "pushBreakContext",
    value: function (e, t) {
      this.breakContext = {
        upper: this.breakContext,
        breakable: e,
        label: t,
        brokenForkContext: a.newEmpty(this.forkContext)
      };
      return this.breakContext;
    }
  }, {
    key: "popBreakContext",
    value: function () {
      var e = this.breakContext;
      var t = this.forkContext;
      this.breakContext = e.upper;
      if (!e.breakable) {
        var n = e.brokenForkContext;
        if (!n.empty) {
          n.add(t.head);
          t.replaceHead(n.makeNext(0, -1));
        }
      }
      return e;
    }
  }, {
    key: "makeBreak",
    value: function (e) {
      var t = this.forkContext;
      if (t.reachable) {
        var n = function (e, t) {
          for (var n = e.breakContext; n;) {
            if (t ? n.label === t : n.breakable) {
              return n;
            }
            n = n.upper;
          }
          return null;
        }(this, e);
        if (n) {
          n.brokenForkContext.add(t.head);
        }
        t.replaceHead(t.makeUnreachable(-1, -1));
      }
    }
  }, {
    key: "makeContinue",
    value: function (e) {
      var t = this.forkContext;
      if (t.reachable) {
        var n = function (e, t) {
          if (!t) {
            return e.loopContext;
          }
          for (var n = e.loopContext; n;) {
            if (n.label === t) {
              return n;
            }
            n = n.upper;
          }
          return null;
        }(this, e);
        if (n) {
          if (n.continueDestSegments) {
            f(this, t.head, n.continueDestSegments);
            if (!("ForInStatement" !== n.type && "ForOfStatement" !== n.type)) {
              n.brokenForkContext.add(t.head);
            }
          } else {
            n.continueForkContext.add(t.head);
          }
        }
        t.replaceHead(t.makeUnreachable(-1, -1));
      }
    }
  }, {
    key: "makeReturn",
    value: function () {
      var e = this.forkContext;
      if (e.reachable) {
        c(this).returnedForkContext.add(e.head);
        e.replaceHead(e.makeUnreachable(-1, -1));
      }
    }
  }, {
    key: "makeThrow",
    value: function () {
      var e = this.forkContext;
      if (e.reachable) {
        u(this).thrownForkContext.add(e.head);
        e.replaceHead(e.makeUnreachable(-1, -1));
      }
    }
  }, {
    key: "makeFinal",
    value: function () {
      var e = this.currentSegments;
      if (e.length > 0 && e[0].reachable) {
        this.returnedForkContext.add(e);
      }
    }
  }]);
  return e;
}();
module.exports = h;