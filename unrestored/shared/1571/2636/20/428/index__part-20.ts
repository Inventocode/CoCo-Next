/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-20
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_6 from "../../6"
import * as /* [auto-meaningful-name] */$$_$$_11 from "../../11"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_15 from "../../../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */$$_$$_127 from "../../127"
import * as /* [auto-meaningful-name] */$$_$$_37_111 from "../../37/111"
import * as ed from "./89"
import * as /* [auto-meaningful-name] */$$_$$_174 from "../../174"
var nd = new Map()
function rd(e) {
  return od.apply(this, arguments)
}
function od() {
  return (od = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var o
    var i
    var s
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_174.a.getAll()
          case 3:
            e.sent.forEach(function (e) {
              nd.set(e.id, e)
            })
            e.next = 10
            break
          case 7:
            e.prev = 7
            e.t0 = e.catch(0)
            console.error("indexed idxDB.getAll catch", e.t0)
          case 10:
            for (n in t) if (!((r = t[n]).type !== $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.m && r.type !== $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.G)) {
              o = $$_$$_6.a({
                id: r.id,
                name: r.title
              }, r.attributes.db)
              ed.b.set(n, ld(o, r.type))
            }
            for (i in t) if (!((s = t[i]).type !== $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.x && s.type !== $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.A)) {
              a.h(i, {
                dataUpdatedAt: Date.now()
              })
            }
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 7]])
  }))).apply(this, arguments)
}
function id(e) {
  return ad.apply(this, arguments)
}
function ad() {
  return (ad = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$t1$value
    var o
    var i
    var /* [auto-meaningful-name] */e$sent
    var c
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = []
            e.t0 = RegeneratorRuntime.keys(t)
          case 2:
            if ((e.t1 = e.t0()).done) {
              e.next = 16
              break
            }
            if (e$t1$value = e.t1.value, (o = t[e$t1$value]).type !== $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.A || "number" !== typeof o.attributes.dataSource) {
              e.next = 14
              break
            }
            if (n.push(o.id), (i = ed.c.get(o.attributes.dataSource)) ? i.push(o.id) : ed.c.set(o.attributes.dataSource, [o.id]), ed.a.get(o.attributes.dataSource)) {
              e.next = 14
              break
            }
            e.next = 12
            return $$_$$_37_111.p(o.attributes.dataSource)
          case 12:
            e$sent = e.sent
            ed.a.set(o.attributes.dataSource, e$sent)
          case 14:
            e.next = 2
            break
          case 16:
            for (c = 0; c < n.length; c++) {
              a.h(n[c], {
                dataUpdatedAt: Date.now()
              })
            }
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function sd(e) {
  return cd.apply(this, arguments)
}
function cd() {
  return (cd = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var o
    var s
    var c
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e.prev = 0, !(n = ed.c.get(t))) {
              e.next = 8
              break
            }
            e.next = 5
            return $$_$$_37_111.p(t)
          case 5:
            for (e$sent = e.sent, ed.a.set(t, e$sent), o = 0; o < n.length; o++) {
              if ((null === (s = a.d(n[o])) || undefined === s ? undefined : s.dataSource) === t) {
                a.h(n[o], {
                  dataUpdatedAt: Date.now()
                })
              }
            }
          case 8:
            e.next = 16
            break
          case 10:
            e.prev = 10
            e.t0 = e.catch(0)
            if ((c = e.t0.message).toLocaleLowerCase().includes("network error")) {
              c = "网络异常"
            }
            $$_$$_14.a.log({
              type: "error",
              messageId: "listViewerDataSourceFetchError",
              widgetId: "",
              values: {
                msg: c
              }
            })
            if ($$_$$_28_index.d()) {
              window.plugins.toast.showShortTop("网络不稳定，部分云数据源获取失败，可能影响作品效果")
            }
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 10]])
  }))).apply(this, arguments)
}
function ld(e, t) {
  var n = nd.get(e.id)
  if (!n) {
    return e
  }
  var r = {}
  n.data.forEach(function (e) {
    r[e.rowId] = e
  })
  if (t === $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.m) {
    e.data = e.data.map(function (e) {
      return $$_$$_6.a($$_$$_6.a({}, e), r[e.rowId])
    })
  }
  if (t === $$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.G) {
    e.data = n.data.map(function (e) {
      return $$_$$_6.a($$_$$_6.a({}, e), r[e.rowId])
    })
  }
  return e
}
function ud() {
  for (var e in ed.b) {
    var t = ed.b.get(e)
    if (t) {
      $$_$$_174.a.put(t).then(function (e) {
        console.info(e)
      })
    }
  }
}
function dd(e, t) {
  if ("number" === typeof t && (t > $$_$$_127.k || t < $$_$$_127.m)) {
    $$_$$_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    a.k(e, {
      width: t
    })
  }
}
function pd(e, t) {
  if ("number" === typeof t && (t > $$_$$_127.j || t < $$_$$_127.l)) {
    $$_$$_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    a.k(e, {
      height: t
    })
  }
}
function fd(e, t) {
  a.j(e, {
    x: t
  })
}
function hd(e, t) {
  a.j(e, {
    y: t
  })
}
function md(e, t) {
  var n
  if ("string" === typeof t) {
    var r
    var o = false
    ed.b.forEach(function (e) {
      if (e.name === t) {
        r = e.id
        o = true
      }
      if (e.id === t) {
        o = true
      }
    })
    if (o) {
      a.h(e, {
        dataSource: r || t
      })
      var i = null === (n = a.d(e)) || undefined === n ? undefined : n.templateSlotMap
      for (var s in i) i[s].dataBindings = ""
      a.h(e, {
        templateSlotMap: i
      })
    } else {
      $$_$$_14.a.log({
        type: "warning",
        messageId: "listViewerDataSourceNotExists",
        widgetId: e
      })
    }
  } else {
    $$_$$_14.a.log({
      type: "error",
      messageId: "mustToBeString",
      values: {
        name: "数据源"
      },
      widgetId: e
    })
  }
}
function gd(e, t) {
  a.l(e, t)
}
function _d(e, t) {
  a.h(e, {
    disabled: t
  })
}
function vd(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.width
}
function bd(e) {
  var t
  return null === (t = a.f(e)) || undefined === t ? undefined : t.height
}
function yd(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function Ed(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function Od(e) {
  var t
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.dataSource
  if (!n) {
    return ""
  }
  var r = ed.b.get(n)
  return r ? r.name : n
}
function wd(e, t, n) {
  var r
  var o
  if ("string" === typeof n) {
    var i = null === (r = a.d(e)) || undefined === r ? undefined : r.templateSlotMap
    var s = null === (o = a.d(e)) || undefined === o ? undefined : o.dataSource
    if (s) {
      if (i) {
        var c
        var l = ed.b.get(s)
        if (l) {
          for (var u in l.header) if (l.header[u].field === n) {
            c = u
          }
          if (c) {
            i[t].dataBindings = c
            a.h(e, {
              templateSlotMap: i
            })
          }
        }
        if (!c) {
          $$_$$_14.a.log({
            type: "error",
            messageId: "gridColumnNotExists",
            widgetId: e
          })
        }
      }
    } else {
      $$_$$_14.a.log({
        type: "error",
        messageId: "listViewerNoDataSource",
        widgetId: e
      })
    }
  } else {
    $$_$$_14.a.log({
      type: "error",
      messageId: "mustToBeString",
      values: {
        name: "绑定名称"
      },
      widgetId: e
    })
  }
}
function Cd(e, t, n, r, o) {
  var i
  var s
  if ("number" === typeof t) {
    if (!["color", "backgroundColor"].includes(r) || "string" !== typeof o || $$_$$_15.pb(o)) {
      var c = null === (i = a.d(e)) || undefined === i ? undefined : i.templateSlotMap
      var l = null === (s = a.d(e)) || undefined === s ? undefined : s.dataSource
      if (c) {
        var u = ed.b.get(l || "")
        if (l && u) {
          if (t > 1 && t > u.data.length || t < 1) {
            return void $$_$$_14.a.log({
              type: "error",
              messageId: "gridRowNotExists",
              widgetId: e
            })
          }
          var /* [auto-meaningful-name] */cN$dataBindings = c[n].dataBindings
          if (cN$dataBindings && ("content" === r || "fileId" === r || "backgroundImgUrl" === r)) {
            u.data[t - 1][cN$dataBindings] = String(o)
            ed.b.set(l, u)
            a.h(e, {
              dataUpdatedAt: Date.now()
            })
            return void $$_$$_174.a.put(u).then(function (e) {})
          }
        }
        var p = ed.d.get("".concat(e, "_").concat(n)) || {}
        if (p[t]) {
          p[t] = $$_$$_6.a($$_$$_6.a({}, p[t]), {}, $$_$$_11.a({}, r, o))
        } else {
          p[t] = $$_$$_11.a({}, r, o)
        }
        ed.d.set("".concat(e, "_").concat(n), p)
        a.h(e, {
          dataUpdatedAt: Date.now()
        })
      }
    } else {
      $$_$$_14.a.log({
        type: "warning",
        messageId: "argNotColor",
        widgetId: e
      })
    }
  } else {
    $$_$$_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      values: {
        name: "行数"
      },
      widgetId: e
    })
  }
}
function Td(e, t, n, r) {
  var o
  var i
  if ("number" === typeof t) {
    var s = null === (o = a.d(e)) || undefined === o ? undefined : o.templateSlotMap
    var c = null === (i = a.d(e)) || undefined === i ? undefined : i.dataSource
    if (s) {
      var l = ed.b.get(c || "")
      if (c && l) {
        if (t > 1 && t > l.data.length || t < 1) {
          return void $$_$$_14.a.log({
            type: "error",
            messageId: "gridRowNotExists",
            widgetId: e
          })
        }
        var /* [auto-meaningful-name] */sN$dataBindings = s[n].dataBindings
        if (sN$dataBindings && ("content" === r || "fileId" === r || "backgroundImgUrl" === r)) {
          return l.data[t - 1][sN$dataBindings]
        }
      }
      var d = (ed.d.get("".concat(e, "_").concat(n)) || {})[t]
      if (d && undefined !== d[r]) {
        return d[r]
      }
      var p = a.d(s[n].widgetId)
      return p ? p[r] : undefined
    }
  } else {
    $$_$$_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      values: {
        name: "行数"
      },
      widgetId: e
    })
  }
}
export { rd }
export { id }
export { sd }
export { ud }
export { dd }
export { pd }
export { fd }
export { hd }
export { md }
export { gd }
export { _d }
export { vd }
export { bd }
export { yd }
export { Ed }
export { Od }
export { wd }
export { Cd }
export { Td }
