/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-6
 */

"use strict"

import * as Oe from "./43"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as Q from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as ht from "./18"
function mt(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  return ["screens", e, "primitiveVariables", t].concat(r)
}
function gt(e) {
  return 4 === e.length && "primitiveVariables" === e[2] || 2 === e.length && "globalVariableList" === e[0]
}
function _t(e, t, n, r, o, i) {
  return vt.apply(this, arguments)
}
function vt() {
  return (vt = Q.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
    var s
    var c
    var l
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = {
              id: r,
              name: o,
              defaultValue: i,
              value: i
            }
            if (t === ht.i.GLOBAL) {
              c = OtJson1.insertOp(["globalVariableList", a], s)
              $_24_index.a.applyClient(c)
            } else {
              l = OtJson1.insertOp(mt(n, a), s)
              $_24_index.a.applyClient(l)
            }
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function bt(e, t, n) {
  if (e === ht.i.GLOBAL) {
    var r
    var o = null === (r = $_24_index.a.getDoc()) || undefined === r ? undefined : r.globalVariableList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== o) {
      var i = OtJson1.removeOp(["globalVariableList", o])
      $_24_index.a.applyClient(i)
    } else {
      console.error("can't find index of globalVariableList")
    }
  } else {
    var a
    var s = null === (a = $_24_index.a.getDoc()) || undefined === a ? undefined : a.screens[t].primitiveVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== s) {
      var c = OtJson1.removeOp(mt(t, s))
      $_24_index.a.applyClient(c)
    } else {
      console.error("can't find index of primitiveVariable")
    }
  }
}
function yt(e, t, n, r, o) {
  if (e === ht.i.GLOBAL) {
    var i
    var a = null === (i = $_24_index.a.getDoc()) || undefined === i ? undefined : i.globalVariableList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== a) {
      var s = OtJson1.replaceOp(["globalVariableList", a, r], true, o)
      $_24_index.a.applyClient(s)
    }
  } else {
    var c
    var l = null === (c = $_24_index.a.getDoc()) || undefined === c ? undefined : c.screens[t].primitiveVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== l) {
      var u = OtJson1.replaceOp(mt(t, l, r), true, o)
      $_24_index.a.applyClient(u)
    }
  }
}
function Et(e) {
  if (gt(e.path)) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$path = e.path
      if ("globalVariableList" === e$path[0]) {
        var r
        var o = e$path[1]
        var i = null === (r = $_24_index.a.getPreviousDoc()) || undefined === r ? undefined : r.globalVariableList[o]
        var a = null === i || undefined === i ? undefined : i.id
        return void (a && Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Lf(ht.i.GLOBAL, a, "", false)))
      }
      var s = e$path[1]
      var c = e$path[3]
      var l = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[s].primitiveVariables[c]
      var u = null === l || undefined === l ? undefined : l.id
      if (u) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Lf(ht.i.SCREEN, u, s, false))
      }
    })(e)
  }
}
function Ot(e) {
  var /* [auto-meaningful-name] */e$path
  if (gt(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var /* [auto-meaningful-name] */e$op$i$id = e$op$i.id
      var /* [auto-meaningful-name] */e$op$i$name = e$op$i.name
      var /* [auto-meaningful-name] */e$op$i$defaultValue = e$op$i.defaultValue
      if ("globalVariableList" === _e$path[0]) {
        var a = _e$path[1]
        return void Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.uf(ht.i.GLOBAL, e$op$i$id, e$op$i$name, e$op$i$defaultValue, "", a, undefined, false))
      }
      var s = _e$path[3]
      var c = _e$path[1]
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.uf(ht.i.SCREEN, e$op$i$id, e$op$i$name, e$op$i$defaultValue, c, s, undefined, false))
    })(e)
  }
  if (5 === (e$path = e.path).length && "primitiveVariables" === e$path[2] || 3 === e$path.length && "globalVariableList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */_e$path2 = e.path
      var r = e.op
      if ("globalVariableList" === _e$path2[0]) {
        var o
        var i = _e$path2[1]
        var a = r.i
        var s = _e$path2[2]
        var c = null === (o = $_24_index.a.getPreviousDoc()) || undefined === o ? undefined : o.globalVariableList[i]
        var l = null === c || undefined === c ? undefined : c.id
        return void (l && Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Hg(ht.i.GLOBAL, l, s, a, "", false)))
      }
      var u = _e$path2[1]
      var d = _e$path2[3]
      var p = r.i
      var f = _e$path2[4]
      var h = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[u].primitiveVariables[d]
      var m = null === h || undefined === h ? undefined : h.id
      if (m) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.Hg(ht.i.SCREEN, m, f, p, u, false))
      }
    })(e)
  }
}
function wt(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  return ["screens", e, "arrayVariables", t].concat(r)
}
function Ct(e) {
  return 4 === e.length && "arrayVariables" === e[2] || 2 === e.length && "globalArrayList" === e[0]
}
function Tt(e, t, n, r, o, i) {
  return St.apply(this, arguments)
}
function St() {
  return (St = Q.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
    var s
    var c
    var l
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = {
              id: r,
              name: o,
              defaultValue: i,
              value: i
            }
            if (t === ht.i.GLOBAL) {
              c = OtJson1.insertOp(["globalArrayList", a], s)
              $_24_index.a.applyClient(c)
            } else {
              l = OtJson1.insertOp(wt(n, a), s)
              $_24_index.a.applyClient(l)
            }
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function At(e, t, n) {
  if (e === ht.i.GLOBAL) {
    var r
    var o = null === (r = $_24_index.a.getDoc()) || undefined === r ? undefined : r.globalArrayList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== o) {
      var i = OtJson1.removeOp(["globalArrayList", o])
      $_24_index.a.applyClient(i)
    } else {
      console.error("can't find index of arrayVariable")
    }
  } else {
    var a
    var s = null === (a = $_24_index.a.getDoc()) || undefined === a ? undefined : a.screens[t].arrayVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== s) {
      var c = OtJson1.removeOp(wt(t, s))
      $_24_index.a.applyClient(c)
    } else {
      console.error("can't find index of arrayVariable")
    }
  }
}
function It(e, t, n, r, o) {
  if (e === ht.i.GLOBAL) {
    var i
    var a = null === (i = $_24_index.a.getDoc()) || undefined === i ? undefined : i.globalArrayList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== a) {
      var s = OtJson1.replaceOp(["globalArrayList", a, r], true, o)
      $_24_index.a.applyClient(s)
    }
  } else {
    var c
    var l = null === (c = $_24_index.a.getDoc()) || undefined === c ? undefined : c.screens[t].arrayVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== l) {
      var u = OtJson1.replaceOp(wt(t, l, r), true, o)
      $_24_index.a.applyClient(u)
    }
  }
}
function jt(e) {
  if (Ct(e.path)) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$path = e.path
      if ("globalArrayList" === e$path[0]) {
        var r
        var o = e$path[1]
        var i = null === (r = $_24_index.a.getPreviousDoc()) || undefined === r ? undefined : r.globalArrayList[o]
        var a = null === i || undefined === i ? undefined : i.id
        return void (a && Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.If(ht.i.GLOBAL, a, "", false)))
      }
      var s = e$path[1]
      var c = e$path[3]
      var l = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[s].arrayVariables[c]
      var u = null === l || undefined === l ? undefined : l.id
      if (u) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.If(ht.i.SCREEN, u, s, false))
      }
    })(e)
  }
}
function Nt(e) {
  var /* [auto-meaningful-name] */e$path
  if (Ct(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path3 = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var /* [auto-meaningful-name] */e$op$i$id = e$op$i.id
      var /* [auto-meaningful-name] */e$op$i$name = e$op$i.name
      var /* [auto-meaningful-name] */e$op$i$defaultValue = e$op$i.defaultValue
      if ("globalArrayList" === _e$path3[0]) {
        var a = _e$path3[1]
        return void Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.of(ht.i.GLOBAL, e$op$i$id, e$op$i$name, e$op$i$defaultValue, "", a, undefined, false))
      }
      var s = _e$path3[3]
      var c = _e$path3[1]
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.of(ht.i.SCREEN, e$op$i$id, e$op$i$name, e$op$i$defaultValue, c, s, undefined, false))
    })(e)
  }
  if (5 === (e$path = e.path).length && "arrayVariables" === e$path[2] || 3 === e$path.length && "globalArrayList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */_e$path4 = e.path
      var r = e.op
      if ("globalArrayList" === _e$path4[0]) {
        var o
        var i = _e$path4[1]
        var a = r.i
        var s = _e$path4[2]
        var c = null === (o = $_24_index.a.getPreviousDoc()) || undefined === o ? undefined : o.globalArrayList[i]
        var l = null === c || undefined === c ? undefined : c.id
        return void (l && Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.yg(ht.i.GLOBAL, l, s, a, "", false)))
      }
      var u = _e$path4[1]
      var d = _e$path4[3]
      var p = r.i
      var f = _e$path4[4]
      var h = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[u].arrayVariables[d]
      var m = null === h || undefined === h ? undefined : h.id
      if (m) {
        Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.yg(ht.i.SCREEN, m, f, p, u, false))
      }
    })(e)
  }
}
function Rt(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  return ["screens", e, "objectVariables", t].concat(r)
}
function kt(e) {
  return 4 === e.length && "objectVariables" === e[2] || 2 === e.length && "globalObjectList" === e[0]
}
function xt(e, t, n, r, o, i) {
  return Dt.apply(this, arguments)
}
function Dt() {
  return (Dt = Q.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
    var s
    var c
    var l
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = {
              id: r,
              name: o,
              defaultValue: i,
              value: i
            }
            if (t === ht.i.GLOBAL) {
              c = OtJson1.insertOp(["globalObjectList", a], s)
              $_24_index.a.applyClient(c)
            } else {
              l = OtJson1.insertOp(Rt(n, a), s)
              $_24_index.a.applyClient(l)
            }
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Mt(e, t, n) {
  if (e === ht.i.GLOBAL) {
    var r
    var o = null === (r = $_24_index.a.getDoc()) || undefined === r ? undefined : r.globalObjectList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== o) {
      var i = OtJson1.removeOp(["globalObjectList", o])
      $_24_index.a.applyClient(i)
    } else {
      console.error("can't find index of objectVariable")
    }
  } else {
    var a
    var s = null === (a = $_24_index.a.getDoc()) || undefined === a ? undefined : a.screens[t].objectVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== s) {
      var c = OtJson1.removeOp(Rt(t, s))
      $_24_index.a.applyClient(c)
    } else {
      console.error("can't find index of objectVariable")
    }
  }
}
function Lt(e, t, n, r, o) {
  if (e === ht.i.GLOBAL) {
    var i
    var a = null === (i = $_24_index.a.getDoc()) || undefined === i ? undefined : i.globalObjectList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== a) {
      var s = OtJson1.replaceOp(["globalObjectList", a, r], true, o)
      $_24_index.a.applyClient(s)
    }
  } else {
    var c
    var l = null === (c = $_24_index.a.getDoc()) || undefined === c ? undefined : c.screens[t].objectVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== l) {
      var u = OtJson1.replaceOp(Rt(t, l, r), true, o)
      $_24_index.a.applyClient(u)
    }
  }
}
function Pt(e) {
  if (kt(e.path)) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$path = e.path
      if ("globalObjectList" === e$path[0]) {
        var r
        var o = e$path[1]
        var i = null === (r = $_24_index.a.getPreviousDoc()) || undefined === r ? undefined : r.globalObjectList[o]
        var a = null === i || undefined === i ? undefined : i.id
        return void (a && $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Kf(ht.i.GLOBAL, a, "", false)))
      }
      var s = e$path[1]
      var c = e$path[3]
      var l = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[s].objectVariables[c]
      var u = null === l || undefined === l ? undefined : l.id
      if (u) {
        $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Kf(ht.i.SCREEN, u, s, false))
      }
    })(e)
  }
}
function Bt(e) {
  var /* [auto-meaningful-name] */e$path
  if (kt(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path5 = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var /* [auto-meaningful-name] */e$op$i$id = e$op$i.id
      var /* [auto-meaningful-name] */e$op$i$name = e$op$i.name
      var /* [auto-meaningful-name] */e$op$i$defaultValue = e$op$i.defaultValue
      if ("globalObjectList" === _e$path5[0]) {
        var a = _e$path5[1]
        return void $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.tf({
          scopeType: ht.i.GLOBAL,
          id: e$op$i$id,
          name: e$op$i$name,
          defaultValue: e$op$i$defaultValue,
          screenId: "",
          index: a,
          isEmitOT: false
        }))
      }
      var s = _e$path5[3]
      var c = _e$path5[1]
      $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.tf({
        scopeType: ht.i.SCREEN,
        id: e$op$i$id,
        name: e$op$i$name,
        defaultValue: e$op$i$defaultValue,
        screenId: c,
        index: s,
        isEmitOT: false
      }))
    })(e)
  }
  if (5 === (e$path = e.path).length && "objectVariables" === e$path[2] || 3 === e$path.length && "globalObjectList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */_e$path6 = e.path
      var r = e.op
      if ("globalObjectList" === _e$path6[0]) {
        var o
        var i = _e$path6[1]
        var a = r.i
        var s = _e$path6[2]
        var c = null === (o = $_24_index.a.getPreviousDoc()) || undefined === o ? undefined : o.globalObjectList[i]
        var l = null === c || undefined === c ? undefined : c.id
        return void (l && $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Gg({
          scopeType: ht.i.GLOBAL,
          id: l,
          key: s,
          value: a,
          screenId: "",
          isEmitOT: false
        })))
      }
      var u = _e$path6[1]
      var d = _e$path6[3]
      var p = r.i
      var f = _e$path6[4]
      var h = null === (t = $_24_index.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[u].objectVariables[d]
      var m = null === h || undefined === h ? undefined : h.id
      if (m) {
        $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Gg({
          scopeType: ht.i.SCREEN,
          id: m,
          key: f,
          value: p,
          screenId: u,
          isEmitOT: false
        }))
      }
    })(e)
  }
}
function Ft(e, t) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 2 ? arguments$length - 2 : 0), o = 2; o < arguments$length; o++) {
    r[o - 2] = arguments[o]
  }
  return ["screens", e, "broadcasts", t].concat(r)
}
function Gt(e, t, n) {
  return Wt.apply(this, arguments)
}
function Wt() {
  return (Wt = Q.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = OtJson1.insertOp(Ft(t, r), n)
            $_24_index.a.applyClient(o)
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ut(e) {}
function Ht(e) {
  var /* [auto-meaningful-name] */e$path
  if (4 === (e$path = e.path).length && "broadcasts" === e$path[2]) {
    (function (e) {
      var /* [auto-meaningful-name] */_e$path7 = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var r = _e$path7[3]
      var o = _e$path7[1]
      Oe.h($$_$$_$$_$$_src_shared_events_messagesWrapper.pf(e$op$i, o, r, undefined, false))
    })(e)
  }
}
export { _t }
export { bt }
export { yt }
export { Et }
export { Ot }
export { Tt }
export { At }
export { It }
export { jt }
export { Nt }
export { xt }
export { Mt }
export { Lt }
export { Pt }
export { Bt }
export { Gt }
export { Ut }
export { Ht }
