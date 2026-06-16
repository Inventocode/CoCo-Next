/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-6
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"./43"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24/index"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
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
  return (vt = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
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
            if (t === Module_18.i.GLOBAL) {
              c = OtJson1.insertOp(["globalVariableList", a], s)
              Module_24.a.applyClient(c)
            } else {
              l = OtJson1.insertOp(mt(n, a), s)
              Module_24.a.applyClient(l)
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
  if (e === Module_18.i.GLOBAL) {
    var r
    var o = null === (r = Module_24.a.getDoc()) || undefined === r ? undefined : r.globalVariableList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== o) {
      var i = OtJson1.removeOp(["globalVariableList", o])
      Module_24.a.applyClient(i)
    } else {
      console.error("can't find index of globalVariableList")
    }
  } else {
    var a
    var s = null === (a = Module_24.a.getDoc()) || undefined === a ? undefined : a.screens[t].primitiveVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== s) {
      var c = OtJson1.removeOp(mt(t, s))
      Module_24.a.applyClient(c)
    } else {
      console.error("can't find index of primitiveVariable")
    }
  }
}
function yt(e, t, n, r, o) {
  if (e === Module_18.i.GLOBAL) {
    var i
    var a = null === (i = Module_24.a.getDoc()) || undefined === i ? undefined : i.globalVariableList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== a) {
      var s = OtJson1.replaceOp(["globalVariableList", a, r], true, o)
      Module_24.a.applyClient(s)
    }
  } else {
    var c
    var l = null === (c = Module_24.a.getDoc()) || undefined === c ? undefined : c.screens[t].primitiveVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== l) {
      var u = OtJson1.replaceOp(mt(t, l, r), true, o)
      Module_24.a.applyClient(u)
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
        var i = null === (r = Module_24.a.getPreviousDoc()) || undefined === r ? undefined : r.globalVariableList[o]
        var a = null === i || undefined === i ? undefined : i.id
        return void (a && Module_43.h(Src_editor_redux_common_actions.Lf(Module_18.i.GLOBAL, a, "", false)))
      }
      var s = e$path[1]
      var c = e$path[3]
      var l = null === (t = Module_24.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[s].primitiveVariables[c]
      var u = null === l || undefined === l ? undefined : l.id
      if (u) {
        Module_43.h(Src_editor_redux_common_actions.Lf(Module_18.i.SCREEN, u, s, false))
      }
    })(e)
  }
}
function Ot(e) {
  var /* [auto-meaningful-name] */e$path
  if (gt(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path1 = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var /* [auto-meaningful-name] */e$op$i$id = e$op$i.id
      var /* [auto-meaningful-name] */e$op$i$name = e$op$i.name
      var /* [auto-meaningful-name] */e$op$i$defaultValue = e$op$i.defaultValue
      if ("globalVariableList" === e$path1[0]) {
        var a = e$path1[1]
        return void Module_43.h(Src_editor_redux_common_actions.uf(Module_18.i.GLOBAL, e$op$i$id, e$op$i$name, e$op$i$defaultValue, "", a, undefined, false))
      }
      var s = e$path1[3]
      var c = e$path1[1]
      Module_43.h(Src_editor_redux_common_actions.uf(Module_18.i.SCREEN, e$op$i$id, e$op$i$name, e$op$i$defaultValue, c, s, undefined, false))
    })(e)
  }
  if (5 === (e$path = e.path).length && "primitiveVariables" === e$path[2] || 3 === e$path.length && "globalVariableList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = e.op
      if ("globalVariableList" === e$path1[0]) {
        var o
        var i = e$path1[1]
        var a = r.i
        var s = e$path1[2]
        var c = null === (o = Module_24.a.getPreviousDoc()) || undefined === o ? undefined : o.globalVariableList[i]
        var l = null === c || undefined === c ? undefined : c.id
        return void (l && Module_43.h(Src_editor_redux_common_actions.Hg(Module_18.i.GLOBAL, l, s, a, "", false)))
      }
      var u = e$path1[1]
      var d = e$path1[3]
      var p = r.i
      var f = e$path1[4]
      var h = null === (t = Module_24.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[u].primitiveVariables[d]
      var m = null === h || undefined === h ? undefined : h.id
      if (m) {
        Module_43.h(Src_editor_redux_common_actions.Hg(Module_18.i.SCREEN, m, f, p, u, false))
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
  return (St = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
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
            if (t === Module_18.i.GLOBAL) {
              c = OtJson1.insertOp(["globalArrayList", a], s)
              Module_24.a.applyClient(c)
            } else {
              l = OtJson1.insertOp(wt(n, a), s)
              Module_24.a.applyClient(l)
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
  if (e === Module_18.i.GLOBAL) {
    var r
    var o = null === (r = Module_24.a.getDoc()) || undefined === r ? undefined : r.globalArrayList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== o) {
      var i = OtJson1.removeOp(["globalArrayList", o])
      Module_24.a.applyClient(i)
    } else {
      console.error("can't find index of arrayVariable")
    }
  } else {
    var a
    var s = null === (a = Module_24.a.getDoc()) || undefined === a ? undefined : a.screens[t].arrayVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== s) {
      var c = OtJson1.removeOp(wt(t, s))
      Module_24.a.applyClient(c)
    } else {
      console.error("can't find index of arrayVariable")
    }
  }
}
function It(e, t, n, r, o) {
  if (e === Module_18.i.GLOBAL) {
    var i
    var a = null === (i = Module_24.a.getDoc()) || undefined === i ? undefined : i.globalArrayList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== a) {
      var s = OtJson1.replaceOp(["globalArrayList", a, r], true, o)
      Module_24.a.applyClient(s)
    }
  } else {
    var c
    var l = null === (c = Module_24.a.getDoc()) || undefined === c ? undefined : c.screens[t].arrayVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== l) {
      var u = OtJson1.replaceOp(wt(t, l, r), true, o)
      Module_24.a.applyClient(u)
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
        var i = null === (r = Module_24.a.getPreviousDoc()) || undefined === r ? undefined : r.globalArrayList[o]
        var a = null === i || undefined === i ? undefined : i.id
        return void (a && Module_43.h(Src_editor_redux_common_actions.If(Module_18.i.GLOBAL, a, "", false)))
      }
      var s = e$path[1]
      var c = e$path[3]
      var l = null === (t = Module_24.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[s].arrayVariables[c]
      var u = null === l || undefined === l ? undefined : l.id
      if (u) {
        Module_43.h(Src_editor_redux_common_actions.If(Module_18.i.SCREEN, u, s, false))
      }
    })(e)
  }
}
function Nt(e) {
  var /* [auto-meaningful-name] */e$path
  if (Ct(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path1 = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var /* [auto-meaningful-name] */e$op$i$id = e$op$i.id
      var /* [auto-meaningful-name] */e$op$i$name = e$op$i.name
      var /* [auto-meaningful-name] */e$op$i$defaultValue = e$op$i.defaultValue
      if ("globalArrayList" === e$path1[0]) {
        var a = e$path1[1]
        return void Module_43.h(Src_editor_redux_common_actions.of(Module_18.i.GLOBAL, e$op$i$id, e$op$i$name, e$op$i$defaultValue, "", a, undefined, false))
      }
      var s = e$path1[3]
      var c = e$path1[1]
      Module_43.h(Src_editor_redux_common_actions.of(Module_18.i.SCREEN, e$op$i$id, e$op$i$name, e$op$i$defaultValue, c, s, undefined, false))
    })(e)
  }
  if (5 === (e$path = e.path).length && "arrayVariables" === e$path[2] || 3 === e$path.length && "globalArrayList" === e$path[0]) {
    (function (e) {
      var t
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = e.op
      if ("globalArrayList" === e$path1[0]) {
        var o
        var i = e$path1[1]
        var a = r.i
        var s = e$path1[2]
        var c = null === (o = Module_24.a.getPreviousDoc()) || undefined === o ? undefined : o.globalArrayList[i]
        var l = null === c || undefined === c ? undefined : c.id
        return void (l && Module_43.h(Src_editor_redux_common_actions.yg(Module_18.i.GLOBAL, l, s, a, "", false)))
      }
      var u = e$path1[1]
      var d = e$path1[3]
      var p = r.i
      var f = e$path1[4]
      var h = null === (t = Module_24.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[u].arrayVariables[d]
      var m = null === h || undefined === h ? undefined : h.id
      if (m) {
        Module_43.h(Src_editor_redux_common_actions.yg(Module_18.i.SCREEN, m, f, p, u, false))
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
  return (Dt = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
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
            if (t === Module_18.i.GLOBAL) {
              c = OtJson1.insertOp(["globalObjectList", a], s)
              Module_24.a.applyClient(c)
            } else {
              l = OtJson1.insertOp(Rt(n, a), s)
              Module_24.a.applyClient(l)
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
  if (e === Module_18.i.GLOBAL) {
    var r
    var o = null === (r = Module_24.a.getDoc()) || undefined === r ? undefined : r.globalObjectList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== o) {
      var i = OtJson1.removeOp(["globalObjectList", o])
      Module_24.a.applyClient(i)
    } else {
      console.error("can't find index of objectVariable")
    }
  } else {
    var a
    var s = null === (a = Module_24.a.getDoc()) || undefined === a ? undefined : a.screens[t].objectVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== s) {
      var c = OtJson1.removeOp(Rt(t, s))
      Module_24.a.applyClient(c)
    } else {
      console.error("can't find index of objectVariable")
    }
  }
}
function Lt(e, t, n, r, o) {
  if (e === Module_18.i.GLOBAL) {
    var i
    var a = null === (i = Module_24.a.getDoc()) || undefined === i ? undefined : i.globalObjectList.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== a) {
      var s = OtJson1.replaceOp(["globalObjectList", a, r], true, o)
      Module_24.a.applyClient(s)
    }
  } else {
    var c
    var l = null === (c = Module_24.a.getDoc()) || undefined === c ? undefined : c.screens[t].objectVariables.findIndex(function (e) {
      return e.id === n
    })
    if (undefined !== l) {
      var u = OtJson1.replaceOp(Rt(t, l, r), true, o)
      Module_24.a.applyClient(u)
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
        var i = null === (r = Module_24.a.getPreviousDoc()) || undefined === r ? undefined : r.globalObjectList[o]
        var a = null === i || undefined === i ? undefined : i.id
        return void (a && Module_37.a(Src_editor_redux_common_actions.Kf(Module_18.i.GLOBAL, a, "", false)))
      }
      var s = e$path[1]
      var c = e$path[3]
      var l = null === (t = Module_24.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[s].objectVariables[c]
      var u = null === l || undefined === l ? undefined : l.id
      if (u) {
        Module_37.a(Src_editor_redux_common_actions.Kf(Module_18.i.SCREEN, u, s, false))
      }
    })(e)
  }
}
function Bt(e) {
  var /* [auto-meaningful-name] */e$path
  if (kt(e.path)) {
    (function (e) {
      var /* [auto-meaningful-name] */e$path1 = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var /* [auto-meaningful-name] */e$op$i$id = e$op$i.id
      var /* [auto-meaningful-name] */e$op$i$name = e$op$i.name
      var /* [auto-meaningful-name] */e$op$i$defaultValue = e$op$i.defaultValue
      if ("globalObjectList" === e$path1[0]) {
        var a = e$path1[1]
        return void Module_37.a(Src_editor_redux_common_actions.tf({
          scopeType: Module_18.i.GLOBAL,
          id: e$op$i$id,
          name: e$op$i$name,
          defaultValue: e$op$i$defaultValue,
          screenId: "",
          index: a,
          isEmitOT: false
        }))
      }
      var s = e$path1[3]
      var c = e$path1[1]
      Module_37.a(Src_editor_redux_common_actions.tf({
        scopeType: Module_18.i.SCREEN,
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
      var /* [auto-meaningful-name] */e$path1 = e.path
      var r = e.op
      if ("globalObjectList" === e$path1[0]) {
        var o
        var i = e$path1[1]
        var a = r.i
        var s = e$path1[2]
        var c = null === (o = Module_24.a.getPreviousDoc()) || undefined === o ? undefined : o.globalObjectList[i]
        var l = null === c || undefined === c ? undefined : c.id
        return void (l && Module_37.a(Src_editor_redux_common_actions.Gg({
          scopeType: Module_18.i.GLOBAL,
          id: l,
          key: s,
          value: a,
          screenId: "",
          isEmitOT: false
        })))
      }
      var u = e$path1[1]
      var d = e$path1[3]
      var p = r.i
      var f = e$path1[4]
      var h = null === (t = Module_24.a.getPreviousDoc()) || undefined === t ? undefined : t.screens[u].objectVariables[d]
      var m = null === h || undefined === h ? undefined : h.id
      if (m) {
        Module_37.a(Src_editor_redux_common_actions.Gg({
          scopeType: Module_18.i.SCREEN,
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
  return (Wt = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = OtJson1.insertOp(Ft(t, r), n)
            Module_24.a.applyClient(o)
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
      var /* [auto-meaningful-name] */e$path1 = e.path
      var /* [auto-meaningful-name] */e$op$i = e.op.i
      var r = e$path1[3]
      var o = e$path1[1]
      Module_43.h(Src_editor_redux_common_actions.pf(e$op$i, o, r, undefined, false))
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
