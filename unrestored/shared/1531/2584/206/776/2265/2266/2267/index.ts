/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2267
 */

"use strict"

var r = require("../../../220")
var i = require("../../../230")
var o = require("../../1120")
var a = require("./2268")
function s(e, t, n, r) {
  for (var i = 0; i < r.length; ++i) {
    var o = r[i]
    e.push(o)
    if (-1 === t.indexOf(o)) {
      n.push(o)
    }
  }
}
function c(e) {
  for (var /* [auto-meaningful-name] */e$tryContext = e.tryContext; e$tryContext;) {
    if (e$tryContext.hasFinalizer && "finally" !== e$tryContext.position) {
      return e$tryContext
    }
    e$tryContext = e$tryContext.upper
  }
  return e
}
function u(e) {
  for (var /* [auto-meaningful-name] */e$tryContext = e.tryContext; e$tryContext;) {
    if ("try" === e$tryContext.position || e$tryContext.hasFinalizer && "catch" === e$tryContext.position) {
      return e$tryContext
    }
    e$tryContext = e$tryContext.upper
  }
  return e
}
function l(e, t) {
  e.splice(e.indexOf(t), 1)
}
function f(e, t, n) {
  for (var r = o.flattenUnusedSegments(t), i = o.flattenUnusedSegments(n), a = Math.min(r.length, i.length), s = 0; s < a; ++s) {
    var c = r[s]
    var u = i[s]
    if (u.reachable) {
      c.nextSegments.push(u)
    }
    if (c.reachable) {
      u.prevSegments.push(c)
    }
    c.allNextSegments.push(u)
    u.allPrevSegments.push(c)
    if (u.allPrevSegments.length >= 2) {
      o.markPrevSegmentAsLooped(u, c)
    }
    e.notifyLooped(c, u)
  }
}
function d(e, t, n) {
  if (!t.processed) {
    t.trueForkContext.add(n)
    t.falseForkContext.add(n)
  }
  if (true !== e.test) {
    e.brokenForkContext.addAll(t.falseForkContext)
  }
  e.endOfTestSegments = t.trueForkContext.makeNext(0, -1)
}
var h = function () {
  function e(t, n) {
    r(this, e)
    this.idGenerator = t
    this.notifyLooped = n
    this.forkContext = a.newRoot(t)
    this.choiceContext = null
    this.switchContext = null
    this.tryContext = null
    this.loopContext = null
    this.breakContext = null
    this.currentSegments = []
    this.initialSegment = this.forkContext.head[0]
    var i = this.finalSegments = []
    var o = this.returnedForkContext = []
    var c = this.thrownForkContext = []
    o.add = s.bind(null, o, c, i)
    c.add = s.bind(null, c, o, i)
  }
  i(e, [{
    key: "headSegments",
    get: function () {
      return this.forkContext.head
    }
  }, {
    key: "parentForkContext",
    get: function () {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      return this$forkContext && this$forkContext.upper
    }
  }, {
    key: "pushForkContext",
    value: function (e) {
      this.forkContext = a.newEmpty(this.forkContext, e)
      return this.forkContext
    }
  }, {
    key: "popForkContext",
    value: function () {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      this.forkContext = this$forkContext.upper
      this.forkContext.replaceHead(this$forkContext.makeNext(0, -1))
      return this$forkContext
    }
  }, {
    key: "forkPath",
    value: function () {
      this.forkContext.add(this.parentForkContext.makeNext(-1, -1))
    }
  }, {
    key: "forkBypassPath",
    value: function () {
      this.forkContext.add(this.parentForkContext.head)
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
      }
    }
  }, {
    key: "popChoiceContext",
    value: function () {
      var /* [auto-meaningful-name] */this$choiceContext = this.choiceContext
      this.choiceContext = this$choiceContext.upper
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var /* [auto-meaningful-name] */this$forkContext$head = this$forkContext.head
      switch (this$choiceContext.kind) {
        case "&&":
        case "||":
          if (this$choiceContext.processed || (this$choiceContext.trueForkContext.add(this$forkContext$head), this$choiceContext.falseForkContext.add(this$forkContext$head)), this$choiceContext.isForkingAsResult) {
            var /* [auto-meaningful-name] */_this$choiceContext = this.choiceContext
            _this$choiceContext.trueForkContext.addAll(this$choiceContext.trueForkContext)
            _this$choiceContext.falseForkContext.addAll(this$choiceContext.falseForkContext)
            _this$choiceContext.processed = true
            return this$choiceContext
          }
          break
        case "test":
          if (this$choiceContext.processed) {
            this$choiceContext.falseForkContext.clear()
            this$choiceContext.falseForkContext.add(this$forkContext$head)
          } else {
            this$choiceContext.trueForkContext.clear()
            this$choiceContext.trueForkContext.add(this$forkContext$head)
          }
          break
        case "loop":
          return this$choiceContext
        default:
          throw new Error("unreachable")
      }
      var /* [auto-meaningful-name] */this$choiceContext$trueForkContext = this$choiceContext.trueForkContext
      this$choiceContext$trueForkContext.addAll(this$choiceContext.falseForkContext)
      this$forkContext.replaceHead(this$choiceContext$trueForkContext.makeNext(0, -1))
      return this$choiceContext
    }
  }, {
    key: "makeLogicalRight",
    value: function () {
      var /* [auto-meaningful-name] */this$choiceContext = this.choiceContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$choiceContext.processed) {
        var n = "&&" === this$choiceContext.kind ? this$choiceContext.trueForkContext : this$choiceContext.falseForkContext
        this$forkContext.replaceHead(n.makeNext(0, -1))
        n.clear()
        this$choiceContext.processed = false
      } else {
        if ("&&" === this$choiceContext.kind) {
          this$choiceContext.falseForkContext.add(this$forkContext.head)
        } else {
          this$choiceContext.trueForkContext.add(this$forkContext.head)
        }
        this$forkContext.replaceHead(this$forkContext.makeNext(-1, -1))
      }
    }
  }, {
    key: "makeIfConsequent",
    value: function () {
      var /* [auto-meaningful-name] */this$choiceContext = this.choiceContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (!this$choiceContext.processed) {
        this$choiceContext.trueForkContext.add(this$forkContext.head)
        this$choiceContext.falseForkContext.add(this$forkContext.head)
      }
      this$choiceContext.processed = false
      this$forkContext.replaceHead(this$choiceContext.trueForkContext.makeNext(0, -1))
    }
  }, {
    key: "makeIfAlternate",
    value: function () {
      var /* [auto-meaningful-name] */this$choiceContext = this.choiceContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      this$choiceContext.trueForkContext.clear()
      this$choiceContext.trueForkContext.add(this$forkContext.head)
      this$choiceContext.processed = true
      this$forkContext.replaceHead(this$choiceContext.falseForkContext.makeNext(0, -1))
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
      }
      this.pushBreakContext(true, t)
    }
  }, {
    key: "popSwitchContext",
    value: function () {
      var /* [auto-meaningful-name] */this$switchContext = this.switchContext
      this.switchContext = this$switchContext.upper
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var /* [auto-meaningful-name] */this$popBreakContext$brokenForkContext = this.popBreakContext().brokenForkContext
      if (0 !== this$switchContext.countForks) {
        var /* [auto-meaningful-name] */this$forkContext$head = this$forkContext.head
        this.forkBypassPath()
        var /* [auto-meaningful-name] */_this$forkContext$head = this$forkContext.head
        this$popBreakContext$brokenForkContext.add(this$forkContext$head)
        if (!this$switchContext.lastIsDefault) {
          if (this$switchContext.defaultBodySegments) {
            !function (e, t) {
              for (var n = 0; n < e.length; ++n) {
                var r = e[n]
                var i = t[n]
                l(r.nextSegments, i)
                l(r.allNextSegments, i)
                l(i.prevSegments, r)
                l(i.allPrevSegments, r)
              }
            }(this$switchContext.defaultSegments, this$switchContext.defaultBodySegments)
            f(this, _this$forkContext$head, this$switchContext.defaultBodySegments)
          } else {
            this$popBreakContext$brokenForkContext.add(_this$forkContext$head)
          }
        }
        for (var o = 0; o < this$switchContext.countForks; ++o) {
          this.forkContext = this.forkContext.upper
        }
        this.forkContext.replaceHead(this$popBreakContext$brokenForkContext.makeNext(0, -1))
      } else if (!this$popBreakContext$brokenForkContext.empty) {
        this$popBreakContext$brokenForkContext.add(this$forkContext.makeNext(-1, -1))
        this$forkContext.replaceHead(this$popBreakContext$brokenForkContext.makeNext(0, -1))
      }
    }
  }, {
    key: "makeSwitchCaseBody",
    value: function (e, t) {
      var /* [auto-meaningful-name] */this$switchContext = this.switchContext
      if (this$switchContext.hasCase) {
        var /* [auto-meaningful-name] */this$forkContext = this.forkContext
        var i = this.pushForkContext()
        i.add(this$forkContext.makeNext(0, -1))
        if (t) {
          this$switchContext.defaultSegments = this$forkContext.head
          if (e) {
            this$switchContext.foundDefault = true
          } else {
            this$switchContext.defaultBodySegments = i.head
          }
        } else {
          if (!e && this$switchContext.foundDefault) {
            this$switchContext.foundDefault = false
            this$switchContext.defaultBodySegments = i.head
          }
        }
        this$switchContext.lastIsDefault = t
        this$switchContext.countForks += 1
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
      }
    }
  }, {
    key: "popTryContext",
    value: function () {
      var /* [auto-meaningful-name] */this$tryContext = this.tryContext
      this.tryContext = this$tryContext.upper
      if ("catch" !== this$tryContext.position) {
        var /* [auto-meaningful-name] */this$tryContext$returnedForkContext = this$tryContext.returnedForkContext
        var /* [auto-meaningful-name] */this$tryContext$thrownForkContext = this$tryContext.thrownForkContext
        if (!this$tryContext$returnedForkContext.empty || !this$tryContext$thrownForkContext.empty) {
          var /* [auto-meaningful-name] */this$forkContext$head = this.forkContext.head
          this.forkContext = this.forkContext.upper
          var i = this$forkContext$head.slice(0, this$forkContext$head.length / 2 | 0)
          var o = this$forkContext$head.slice(this$forkContext$head.length / 2 | 0)
          if (!this$tryContext$returnedForkContext.empty) {
            c(this).returnedForkContext.add(o)
          }
          if (!this$tryContext$thrownForkContext.empty) {
            u(this).thrownForkContext.add(o)
          }
          this.forkContext.replaceHead(i)
          if (!(this$tryContext.lastOfTryIsReachable || this$tryContext.lastOfCatchIsReachable)) {
            this.forkContext.makeUnreachable()
          }
        }
      } else {
        this.popForkContext()
      }
    }
  }, {
    key: "makeCatchBlock",
    value: function () {
      var /* [auto-meaningful-name] */this$tryContext = this.tryContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var /* [auto-meaningful-name] */this$tryContext$thrownForkContext = this$tryContext.thrownForkContext
      this$tryContext.position = "catch"
      this$tryContext.thrownForkContext = a.newEmpty(this$forkContext)
      this$tryContext.lastOfTryIsReachable = this$forkContext.reachable
      this$tryContext$thrownForkContext.add(this$forkContext.head)
      var r = this$tryContext$thrownForkContext.makeNext(0, -1)
      this.pushForkContext()
      this.forkBypassPath()
      this.forkContext.add(r)
    }
  }, {
    key: "makeFinallyBlock",
    value: function () {
      var /* [auto-meaningful-name] */this$tryContext = this.tryContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var /* [auto-meaningful-name] */this$tryContext$returnedForkContext = this$tryContext.returnedForkContext
      var /* [auto-meaningful-name] */this$tryContext$thrownForkContext = this$tryContext.thrownForkContext
      var /* [auto-meaningful-name] */this$forkContext$head = this$forkContext.head
      if ("catch" === this$tryContext.position) {
        this.popForkContext()
        this$forkContext = this.forkContext
        this$tryContext.lastOfCatchIsReachable = this$forkContext.reachable
      } else {
        this$tryContext.lastOfTryIsReachable = this$forkContext.reachable
      }
      this$tryContext.position = "finally"
      if (!this$tryContext$returnedForkContext.empty || !this$tryContext$thrownForkContext.empty) {
        for (var a = this$forkContext.makeNext(-1, -1), s = 0; s < this$forkContext.count; ++s) {
          for (var c = [this$forkContext$head[s]], u = 0; u < this$tryContext$returnedForkContext.segmentsList.length; ++u) {
            c.push(this$tryContext$returnedForkContext.segmentsList[u][s])
          }
          for (var l = 0; l < this$tryContext$thrownForkContext.segmentsList.length; ++l) {
            c.push(this$tryContext$thrownForkContext.segmentsList[l][s])
          }
          a.push(o.newNext(this.idGenerator.next(), c))
        }
        this.pushForkContext(true)
        this.forkContext.add(a)
      }
    }
  }, {
    key: "makeFirstThrowablePathInTryBlock",
    value: function () {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$forkContext.reachable) {
        var t = u(this)
        if (t !== this && "try" === t.position && t.thrownForkContext.empty) {
          t.thrownForkContext.add(this$forkContext.head)
          this$forkContext.replaceHead(this$forkContext.makeNext(-1, -1))
        }
      }
    }
  }, {
    key: "pushLoopContext",
    value: function (e, t) {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var r = this.pushBreakContext(true, t)
      switch (e) {
        case "WhileStatement":
          this.pushChoiceContext("loop", false)
          this.loopContext = {
            upper: this.loopContext,
            type: e,
            label: t,
            test: undefined,
            continueDestSegments: null,
            brokenForkContext: r.brokenForkContext
          }
          break
        case "DoWhileStatement":
          this.pushChoiceContext("loop", false)
          this.loopContext = {
            upper: this.loopContext,
            type: e,
            label: t,
            test: undefined,
            entrySegments: null,
            continueForkContext: a.newEmpty(this$forkContext),
            brokenForkContext: r.brokenForkContext
          }
          break
        case "ForStatement":
          this.pushChoiceContext("loop", false)
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
          }
          break
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
          }
          break
        default:
          throw new Error("unknown type: \"".concat(e, "\""))
      }
    }
  }, {
    key: "popLoopContext",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      this.loopContext = this$loopContext.upper
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var /* [auto-meaningful-name] */this$popBreakContext$brokenForkContext = this.popBreakContext().brokenForkContext
      switch (this$loopContext.type) {
        case "WhileStatement":
        case "ForStatement":
          this.popChoiceContext()
          f(this, this$forkContext.head, this$loopContext.continueDestSegments)
          break
        case "DoWhileStatement":
          var r = this.popChoiceContext()
          if (!r.processed) {
            r.trueForkContext.add(this$forkContext.head)
            r.falseForkContext.add(this$forkContext.head)
          }
          if (true !== this$loopContext.test) {
            this$popBreakContext$brokenForkContext.addAll(r.falseForkContext)
          }
          for (var /* [auto-meaningful-name] */r$trueForkContext$segmentsList = r.trueForkContext.segmentsList, o = 0; o < r$trueForkContext$segmentsList.length; ++o) {
            f(this, r$trueForkContext$segmentsList[o], this$loopContext.entrySegments)
          }
          break
        case "ForInStatement":
        case "ForOfStatement":
          this$popBreakContext$brokenForkContext.add(this$forkContext.head)
          f(this, this$forkContext.head, this$loopContext.leftSegments)
          break
        default:
          throw new Error("unreachable")
      }
      if (this$popBreakContext$brokenForkContext.empty) {
        this$forkContext.replaceHead(this$forkContext.makeUnreachable(-1, -1))
      } else {
        this$forkContext.replaceHead(this$popBreakContext$brokenForkContext.makeNext(0, -1))
      }
    }
  }, {
    key: "makeWhileTest",
    value: function (e) {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var r = this$forkContext.makeNext(0, -1)
      this$loopContext.test = e
      this$loopContext.continueDestSegments = r
      this$forkContext.replaceHead(r)
    }
  }, {
    key: "makeWhileBody",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$choiceContext = this.choiceContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (!this$choiceContext.processed) {
        this$choiceContext.trueForkContext.add(this$forkContext.head)
        this$choiceContext.falseForkContext.add(this$forkContext.head)
      }
      if (true !== this$loopContext.test) {
        this$loopContext.brokenForkContext.addAll(this$choiceContext.falseForkContext)
      }
      this$forkContext.replaceHead(this$choiceContext.trueForkContext.makeNext(0, -1))
    }
  }, {
    key: "makeDoWhileBody",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var n = this$forkContext.makeNext(-1, -1)
      this$loopContext.entrySegments = n
      this$forkContext.replaceHead(n)
    }
  }, {
    key: "makeDoWhileTest",
    value: function (e) {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      this$loopContext.test = e
      if (!this$loopContext.continueForkContext.empty) {
        this$loopContext.continueForkContext.add(this$forkContext.head)
        var r = this$loopContext.continueForkContext.makeNext(0, -1)
        this$forkContext.replaceHead(r)
      }
    }
  }, {
    key: "makeForTest",
    value: function (e) {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var /* [auto-meaningful-name] */this$forkContext$head = this$forkContext.head
      var i = this$forkContext.makeNext(-1, -1)
      this$loopContext.test = e
      this$loopContext.endOfInitSegments = this$forkContext$head
      this$loopContext.continueDestSegments = this$loopContext.testSegments = i
      this$forkContext.replaceHead(i)
    }
  }, {
    key: "makeForUpdate",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$choiceContext = this.choiceContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$loopContext.testSegments) {
        d(this$loopContext, this$choiceContext, this$forkContext.head)
      } else {
        this$loopContext.endOfInitSegments = this$forkContext.head
      }
      var r = this$forkContext.makeDisconnected(-1, -1)
      this$loopContext.continueDestSegments = this$loopContext.updateSegments = r
      this$forkContext.replaceHead(r)
    }
  }, {
    key: "makeForBody",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$choiceContext = this.choiceContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$loopContext.updateSegments) {
        this$loopContext.endOfUpdateSegments = this$forkContext.head
        if (this$loopContext.testSegments) {
          f(this, this$loopContext.endOfUpdateSegments, this$loopContext.testSegments)
        }
      } else {
        if (this$loopContext.testSegments) {
          d(this$loopContext, this$choiceContext, this$forkContext.head)
        } else {
          this$loopContext.endOfInitSegments = this$forkContext.head
        }
      }
      var /* [auto-meaningful-name] */this$loopContext$endOfTestSegments = this$loopContext.endOfTestSegments
      if (!this$loopContext$endOfTestSegments) {
        var i = a.newEmpty(this$forkContext)
        i.add(this$loopContext.endOfInitSegments)
        if (this$loopContext.endOfUpdateSegments) {
          i.add(this$loopContext.endOfUpdateSegments)
        }
        this$loopContext$endOfTestSegments = i.makeNext(0, -1)
      }
      this$loopContext.continueDestSegments = this$loopContext.continueDestSegments || this$loopContext$endOfTestSegments
      this$forkContext.replaceHead(this$loopContext$endOfTestSegments)
    }
  }, {
    key: "makeForInOfLeft",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var n = this$forkContext.makeDisconnected(-1, -1)
      this$loopContext.prevSegments = this$forkContext.head
      this$loopContext.leftSegments = this$loopContext.continueDestSegments = n
      this$forkContext.replaceHead(n)
    }
  }, {
    key: "makeForInOfRight",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var n = a.newEmpty(this$forkContext)
      n.add(this$loopContext.prevSegments)
      var r = n.makeNext(-1, -1)
      this$loopContext.endOfLeftSegments = this$forkContext.head
      this$forkContext.replaceHead(r)
    }
  }, {
    key: "makeForInOfBody",
    value: function () {
      var /* [auto-meaningful-name] */this$loopContext = this.loopContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      var n = a.newEmpty(this$forkContext)
      n.add(this$loopContext.endOfLeftSegments)
      var r = n.makeNext(-1, -1)
      f(this, this$forkContext.head, this$loopContext.leftSegments)
      this$loopContext.brokenForkContext.add(this$forkContext.head)
      this$forkContext.replaceHead(r)
    }
  }, {
    key: "pushBreakContext",
    value: function (e, t) {
      this.breakContext = {
        upper: this.breakContext,
        breakable: e,
        label: t,
        brokenForkContext: a.newEmpty(this.forkContext)
      }
      return this.breakContext
    }
  }, {
    key: "popBreakContext",
    value: function () {
      var /* [auto-meaningful-name] */this$breakContext = this.breakContext
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      this.breakContext = this$breakContext.upper
      if (!this$breakContext.breakable) {
        var /* [auto-meaningful-name] */this$breakContext$brokenForkContext = this$breakContext.brokenForkContext
        if (!this$breakContext$brokenForkContext.empty) {
          this$breakContext$brokenForkContext.add(this$forkContext.head)
          this$forkContext.replaceHead(this$breakContext$brokenForkContext.makeNext(0, -1))
        }
      }
      return this$breakContext
    }
  }, {
    key: "makeBreak",
    value: function (e) {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$forkContext.reachable) {
        var n = function (e, t) {
          for (var /* [auto-meaningful-name] */e$breakContext = e.breakContext; e$breakContext;) {
            if (t ? e$breakContext.label === t : e$breakContext.breakable) {
              return e$breakContext
            }
            e$breakContext = e$breakContext.upper
          }
          return null
        }(this, e)
        if (n) {
          n.brokenForkContext.add(this$forkContext.head)
        }
        this$forkContext.replaceHead(this$forkContext.makeUnreachable(-1, -1))
      }
    }
  }, {
    key: "makeContinue",
    value: function (e) {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$forkContext.reachable) {
        var n = function (e, t) {
          if (!t) {
            return e.loopContext
          }
          for (var /* [auto-meaningful-name] */e$loopContext = e.loopContext; e$loopContext;) {
            if (e$loopContext.label === t) {
              return e$loopContext
            }
            e$loopContext = e$loopContext.upper
          }
          return null
        }(this, e)
        if (n) {
          if (n.continueDestSegments) {
            f(this, this$forkContext.head, n.continueDestSegments)
            if (!("ForInStatement" !== n.type && "ForOfStatement" !== n.type)) {
              n.brokenForkContext.add(this$forkContext.head)
            }
          } else {
            n.continueForkContext.add(this$forkContext.head)
          }
        }
        this$forkContext.replaceHead(this$forkContext.makeUnreachable(-1, -1))
      }
    }
  }, {
    key: "makeReturn",
    value: function () {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$forkContext.reachable) {
        c(this).returnedForkContext.add(this$forkContext.head)
        this$forkContext.replaceHead(this$forkContext.makeUnreachable(-1, -1))
      }
    }
  }, {
    key: "makeThrow",
    value: function () {
      var /* [auto-meaningful-name] */this$forkContext = this.forkContext
      if (this$forkContext.reachable) {
        u(this).thrownForkContext.add(this$forkContext.head)
        this$forkContext.replaceHead(this$forkContext.makeUnreachable(-1, -1))
      }
    }
  }, {
    key: "makeFinal",
    value: function () {
      var /* [auto-meaningful-name] */this$currentSegments = this.currentSegments
      if (this$currentSegments.length > 0 && this$currentSegments[0].reachable) {
        this.returnedForkContext.add(this$currentSegments)
      }
    }
  }])
  return e
}()
module.exports = h
