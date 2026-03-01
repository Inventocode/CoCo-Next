/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-20
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../11"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"../../127"
import * as /* [auto-meaningful-name] */Module_111 from /* 111 */"../../37/111"
import * as /* [auto-meaningful-name] */Module_89 from /* 89 */"./89"
import * as /* [auto-meaningful-name] */Module_174 from /* 174 */"../../174"
var nd = new Map()
function rd(e) {
  return od.apply(this, arguments)
}
function od() {
  return (od = Module_7.a(RegeneratorRuntime.mark(function e(t) {
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
            return Module_174.a.getAll()
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
            for (n in t) if (!((r = t[n]).type !== Src_editor_widget_builtIn_types.m && r.type !== Src_editor_widget_builtIn_types.G)) {
              o = Module_6.a({
                id: r.id,
                name: r.title
              }, r.attributes.db)
              Module_89.b.set(n, ld(o, r.type))
            }
            for (i in t) if (!((s = t[i]).type !== Src_editor_widget_builtIn_types.x && s.type !== Src_editor_widget_builtIn_types.A)) {
              Module_12.h(i, {
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
  return (ad = Module_7.a(RegeneratorRuntime.mark(function e(t) {
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
            if (e$t1$value = e.t1.value, (o = t[e$t1$value]).type !== Src_editor_widget_builtIn_types.A || "number" !== typeof o.attributes.dataSource) {
              e.next = 14
              break
            }
            if (n.push(o.id), (i = Module_89.c.get(o.attributes.dataSource)) ? i.push(o.id) : Module_89.c.set(o.attributes.dataSource, [o.id]), Module_89.a.get(o.attributes.dataSource)) {
              e.next = 14
              break
            }
            e.next = 12
            return Module_111.p(o.attributes.dataSource)
          case 12:
            e$sent = e.sent
            Module_89.a.set(o.attributes.dataSource, e$sent)
          case 14:
            e.next = 2
            break
          case 16:
            for (c = 0; c < n.length; c++) {
              Module_12.h(n[c], {
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
  return (cd = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var o
    var s
    var c
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e.prev = 0, !(n = Module_89.c.get(t))) {
              e.next = 8
              break
            }
            e.next = 5
            return Module_111.p(t)
          case 5:
            for (e$sent = e.sent, Module_89.a.set(t, e$sent), o = 0; o < n.length; o++) {
              if ((null === (s = Module_12.d(n[o])) || undefined === s ? undefined : s.dataSource) === t) {
                Module_12.h(n[o], {
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
            Module_14.a.log({
              type: "error",
              messageId: "listViewerDataSourceFetchError",
              widgetId: "",
              values: {
                msg: c
              }
            })
            if (Module_28.d()) {
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
  if (t === Src_editor_widget_builtIn_types.m) {
    e.data = e.data.map(function (e) {
      return Module_6.a(Module_6.a({}, e), r[e.rowId])
    })
  }
  if (t === Src_editor_widget_builtIn_types.G) {
    e.data = n.data.map(function (e) {
      return Module_6.a(Module_6.a({}, e), r[e.rowId])
    })
  }
  return e
}
function ud() {
  for (var e in Module_89.b) {
    var t = Module_89.b.get(e)
    if (t) {
      Module_174.a.put(t).then(function (e) {
        console.info(e)
      })
    }
  }
}
function dd(e, t) {
  if ("number" === typeof t && (t > Module_127.k || t < Module_127.m)) {
    Module_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    Module_12.k(e, {
      width: t
    })
  }
}
function pd(e, t) {
  if ("number" === typeof t && (t > Module_127.j || t < Module_127.l)) {
    Module_14.a.log({
      type: "warning",
      messageId: "valueOutOfRange",
      widgetId: e
    })
  } else {
    Module_12.k(e, {
      height: t
    })
  }
}
function fd(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function hd(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function md(e, t) {
  var n
  if ("string" === typeof t) {
    var r
    var o = false
    Module_89.b.forEach(function (e) {
      if (e.name === t) {
        r = e.id
        o = true
      }
      if (e.id === t) {
        o = true
      }
    })
    if (o) {
      Module_12.h(e, {
        dataSource: r || t
      })
      var i = null === (n = Module_12.d(e)) || undefined === n ? undefined : n.templateSlotMap
      for (var s in i) i[s].dataBindings = ""
      Module_12.h(e, {
        templateSlotMap: i
      })
    } else {
      Module_14.a.log({
        type: "warning",
        messageId: "listViewerDataSourceNotExists",
        widgetId: e
      })
    }
  } else {
    Module_14.a.log({
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
  Module_12.l(e, t)
}
function _d(e, t) {
  Module_12.h(e, {
    disabled: t
  })
}
function vd(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.width
}
function bd(e) {
  var t
  return null === (t = Module_12.f(e)) || undefined === t ? undefined : t.height
}
function yd(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function Ed(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function Od(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.dataSource
  if (!n) {
    return ""
  }
  var r = Module_89.b.get(n)
  return r ? r.name : n
}
function wd(e, t, n) {
  var r
  var o
  if ("string" === typeof n) {
    var i = null === (r = Module_12.d(e)) || undefined === r ? undefined : r.templateSlotMap
    var s = null === (o = Module_12.d(e)) || undefined === o ? undefined : o.dataSource
    if (s) {
      if (i) {
        var c
        var l = Module_89.b.get(s)
        if (l) {
          for (var u in l.header) if (l.header[u].field === n) {
            c = u
          }
          if (c) {
            i[t].dataBindings = c
            Module_12.h(e, {
              templateSlotMap: i
            })
          }
        }
        if (!c) {
          Module_14.a.log({
            type: "error",
            messageId: "gridColumnNotExists",
            widgetId: e
          })
        }
      }
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "listViewerNoDataSource",
        widgetId: e
      })
    }
  } else {
    Module_14.a.log({
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
    if (!["color", "backgroundColor"].includes(r) || "string" !== typeof o || Src_shared_tools_index.pb(o)) {
      var c = null === (i = Module_12.d(e)) || undefined === i ? undefined : i.templateSlotMap
      var l = null === (s = Module_12.d(e)) || undefined === s ? undefined : s.dataSource
      if (c) {
        var u = Module_89.b.get(l || "")
        if (l && u) {
          if (t > 1 && t > u.data.length || t < 1) {
            return void Module_14.a.log({
              type: "error",
              messageId: "gridRowNotExists",
              widgetId: e
            })
          }
          var /* [auto-meaningful-name] */cN$dataBindings = c[n].dataBindings
          if (cN$dataBindings && ("content" === r || "fileId" === r || "backgroundImgUrl" === r)) {
            u.data[t - 1][cN$dataBindings] = String(o)
            Module_89.b.set(l, u)
            Module_12.h(e, {
              dataUpdatedAt: Date.now()
            })
            return void Module_174.a.put(u).then(function (e) {})
          }
        }
        var p = Module_89.d.get("".concat(e, "_").concat(n)) || {}
        if (p[t]) {
          p[t] = Module_6.a(Module_6.a({}, p[t]), {}, Module_11.a({}, r, o))
        } else {
          p[t] = Module_11.a({}, r, o)
        }
        Module_89.d.set("".concat(e, "_").concat(n), p)
        Module_12.h(e, {
          dataUpdatedAt: Date.now()
        })
      }
    } else {
      Module_14.a.log({
        type: "warning",
        messageId: "argNotColor",
        widgetId: e
      })
    }
  } else {
    Module_14.a.log({
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
    var s = null === (o = Module_12.d(e)) || undefined === o ? undefined : o.templateSlotMap
    var c = null === (i = Module_12.d(e)) || undefined === i ? undefined : i.dataSource
    if (s) {
      var l = Module_89.b.get(c || "")
      if (c && l) {
        if (t > 1 && t > l.data.length || t < 1) {
          return void Module_14.a.log({
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
      var d = (Module_89.d.get("".concat(e, "_").concat(n)) || {})[t]
      if (d && undefined !== d[r]) {
        return d[r]
      }
      var p = Module_12.d(s[n].widgetId)
      return p ? p[r] : undefined
    }
  } else {
    Module_14.a.log({
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
