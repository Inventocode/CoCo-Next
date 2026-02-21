/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：33__part-3
 */

"use strict"

import { N } from "../../../../src/editor/widget/internal/storage"
import * as C from "./53"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as E from "./75"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as v from "./95"
import * as /* [auto-meaningful-name] */$_314 from "./314"
import * as g from "./83"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import * as h from "./64"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_42_index from "./42/index"
import * as /* [auto-meaningful-name] */$_47_index from "./47/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as l from "./6"
import * as c from "./11"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as a from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_48_3_index from "./48/3/index"
import * as /* [auto-meaningful-name] */$_37_22 from "./37/22"
var re = RegeneratorRuntime.mark(_e)
var oe = RegeneratorRuntime.mark(ve)
var ie = RegeneratorRuntime.mark(be)
var ae = RegeneratorRuntime.mark(ye)
var se = 0
var /* [auto-meaningful-name] */DB_NOT_EXIST = "DB_NOT_EXIST"
var le = 2e3
var ue = 5e3
var de = .8
var pe = 1
function fe() {
  var e = []
  $_42_index.g.forEach(function (t) {
    if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.j) {
      e.push(t)
    }
  })
  return e
}
function he() {
  var e = []
  $_42_index.g.forEach(function (t) {
    if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.k && t.attributes.cloudTableId) {
      e.push(t.attributes.cloudTableId)
    }
    if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.A && "number" === typeof t.attributes.dataSource) {
      e.push(t.attributes.dataSource)
    }
  })
  return e
}
function me(e) {
  var t = []
  for (var n in e) {
    var r = e[n]
    if (r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.j && r.attributes.cloudDictId !== se) {
      t.push(Lodash.cloneDeep(r))
      r.attributes.cloudDictId = se
    }
    if (r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.k && r.attributes.cloudTableId !== se) {
      t.push(Lodash.cloneDeep(r))
      r.attributes.cloudTableId = se
    }
    if (r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.A && "number" === typeof r.attributes.dataSource) {
      t.push(Lodash.cloneDeep(r))
      r.attributes.dataSource = ""
    }
  }
  return t
}
function ge() {
  return $_42_index.b.clear()
}
function _e() {
  var /* [auto-meaningful-name] */r$sent
  var t
  var n
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2
          return $_48_3_index.f($_37_22.p)
        case 2:
          r$sent = r.sent
          t = fe()
          n = t.map(function (e) {
            return e.attributes.cloudDictId
          })
          return r.abrupt("return", $$_$$_$$_$$_src_shared_tools_index.r(n, $_25_index.a(r$sent)).filter(function (e) {
            return e !== se
          }))
        case 6:
        case "end":
          return r.stop()
      }
    }
  }, re)
}
function ve() {
  var /* [auto-meaningful-name] */n$sent
  var t
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $_48_3_index.f($_37_22.q)
        case 2:
          n$sent = n.sent
          t = he()
          return n.abrupt("return", $$_$$_$$_$$_src_shared_tools_index.r(t, $_25_index.a(n$sent)).filter(function (e) {
            return e !== se
          }))
        case 5:
        case "end":
          return n.stop()
      }
    }
  }, oe)
}
function be() {
  var /* [auto-meaningful-name] */r$sent
  var t
  var n
  return RegeneratorRuntime.wrap(function (r) {
    for (;;) {
      switch (r.prev = r.next) {
        case 0:
          r.next = 2
          return $_48_3_index.f($_37_22.p)
        case 2:
          r$sent = r.sent
          t = fe()
          n = t.map(function (e) {
            return e.attributes.cloudDictId
          })
          return r.abrupt("return", $$_$$_$$_$$_src_shared_tools_index.r($_25_index.a(r$sent), n).filter(function (e) {
            return e !== se
          }))
        case 6:
        case "end":
          return r.stop()
      }
    }
  }, ie)
}
function ye() {
  var /* [auto-meaningful-name] */n$sent
  var t
  return RegeneratorRuntime.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          n.next = 2
          return $_48_3_index.f($_37_22.q)
        case 2:
          n$sent = n.sent
          t = he()
          return n.abrupt("return", $$_$$_$$_$$_src_shared_tools_index.r($_25_index.a(n$sent), t).filter(function (e) {
            return e !== se
          }))
        case 5:
        case "end":
          return n.stop()
      }
    }
  }, ae)
}
function Ee(e) {
  var t = Se(e)
  if (t) {
    var n = t.title || t.contentTitle
    if (!n) {
      n = function (e) {
        var t = Se(e)
        if (t) {
          var n
          var r = (null === (n = N(t.type)) || undefined === n ? undefined : n.contentTextField) || ""
          return t.attributes[r] || ""
        }
      }(e).replace(C.E, "").substr(0, 20)
    }
    return n || ""
  }
  return ""
}
function Oe(e, t) {
  var n = Se(e)
  return !!n && function (e) {
    var t = xe()
    var n = []
    if (t) {
      t.widgetIds.forEach(function (t) {
        var r = Se(t)
        if ((null === r || undefined === r ? undefined : r.type) === e) {
          n.push(r)
        }
      })
      t.invisibleWidgetIds.forEach(function (t) {
        var r = Se(t)
        if ((null === r || undefined === r ? undefined : r.type) === e) {
          n.push(r)
        }
      })
    }
    je().forEach(function (t) {
      var r = Se(t)
      if ((null === r || undefined === r ? undefined : r.type) === e) {
        n.push(r)
      }
    })
    return n
  }(n.type).some(function (n) {
    var r = n.title || n.contentTitle
    return n.id !== e && r === t
  })
}
function we() {
  var e = false
  $_42_index.g.forEach(function (t) {
    if ((null === t || undefined === t ? undefined : t.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.A && "number" === typeof t.attributes.dataSource) {
      e = true
    }
  })
  return e
}
function Ce(e, t) {
  var /* [auto-meaningful-name] */$_37_index$d$getState$project$screens = $_37_index.d.getState().project.screens
  var r = new Set()
  Array.from($_37_index$d$getState$project$screens).forEach(function (t) {
    if (t.id !== e) {
      r.add(t.title)
    }
  })
  return r.has(t)
}
function Te(e) {
  $_42_index.g.delete(e)
}
function Se(e) {
  return $_42_index.g.get(e)
}
function Ae(e) {
  var t = $_42_index.g.get(e)
  if (t && t.parentId) {
    return $_42_index.g.get(t.parentId)
  }
}
function Ie(e) {
  var t
  var n = []
  var r = $_42_index.g.keys()
  var o = $_47_index.a(r)
  try {
    for (o.s(); !(t = o.n()).done;) {
      var i
      var /* [auto-meaningful-name] */t$value = t.value
      if ((null === (i = $_42_index.g.get(t$value)) || undefined === i ? undefined : i.parentId) === e) {
        n.push(t$value)
      }
    }
  } catch (s) {
    o.e(s)
  } finally {
    o.f()
  }
  return n
}
function je() {
  return $_37_index.d.getState().project.globalWidgetIds
}
function Ne(e, t) {
  return $_42_index.g.set(e, t)
}
function Re() {
  var e = []
  $_42_index.g.forEach(function (t) {
    if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.l) {
      e.push(t)
    }
  })
  return e
}
function ke() {
  var e = []
  $_42_index.g.forEach(function (t) {
    if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.h) {
      e.push(t)
    }
  })
  return e
}
function xe() {
  var /* [auto-meaningful-name] */$_37_index$d$getState$project$currentScreenIndex = $_37_index.d.getState().project.currentScreenIndex
  return $_37_index.d.getState().project.screens.get($_37_index$d$getState$project$currentScreenIndex)
}
function De(e) {
  var t = []
  $_42_index.g.forEach(function (n) {
    if (n.type === e) {
      t.push(n.id)
    }
  })
  return t
}
function Me(e) {
  var t = xe()
  var n = []
  if (t) {
    t.widgetIds.forEach(function (t) {
      var r
      if ((null === (r = Se(t)) || undefined === r ? undefined : r.type) === e) {
        n.push(t)
      }
    })
    t.invisibleWidgetIds.forEach(function (t) {
      var r
      if ((null === (r = Se(t)) || undefined === r ? undefined : r.type) === e) {
        n.push(t)
      }
    })
  }
  je().forEach(function (t) {
    var r
    if ((null === (r = Se(t)) || undefined === r ? undefined : r.type) === e) {
      n.push(t)
    }
  })
  return n
}
function Le(e) {
  for (var t in $_42_index.g.clear(), e) $_42_index.g.set(t, e[t])
}
function Pe(e) {
  var t = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1]
  var n = arguments.length > 2 ? arguments[2] : undefined
  var r = []
  var o = Se(e)
  if (o) {
    var i = function e(t) {
      var n = t instanceof Array ? [] : {}
      if (t instanceof Array || t instanceof Object) {
        for (var r in t) n[r] = e(t[r])
        return n
      }
      return t
    }
    var a = i(o)
    r.push(a)
    var s = h.a(o.type)
    a.id = s
    if (o.title) {
      var c = vt(o.type, Me(o.type), o.title)
      a.title = c
    } else if (o.contentTitle) {
      var l = vt(o.type, Me(o.type), o.contentTitle)
      a.contentTitle = l
    }
    if (n) {
      a.parentId = n
    } else if (a.parentId) {
      var d = Se(a.parentId)
      if (d) {
        var p = d
        p.widgetIds = [].concat($_25_index.a(p.widgetIds), [s])
      }
    }
    if (o.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.f) {
      var m = a
      m.widgetIds = []
      o.widgetIds.forEach(function (e) {
        var t = Pe(e, true, s)
        if (t.length) {
          var n = t[0]
          r.push(n)
          var o = n.id
          m.widgetIds.push(o)
        }
      })
    }
    if (o.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.x || o.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.A) {
      var g = a
      for (var _ in g.widgetIds = [], o.attributes.templateSlotMap) {
        var v = Pe(o.attributes.templateSlotMap[_].widgetId, true, s)
        if (v.length) {
          var b = v[0]
          r.push(b)
          var y = b.id
          g.widgetIds.push(y)
          g.attributes.templateSlotMap[_].widgetId = y
        }
      }
    }
    if (t) {
      Ne(s, a)
    }
  }
  return r
}
function Be(e, t, n) {
  var r = Se(e)
  if (r) {
    if (!r.parentId || n) {
      var o = function e(t) {
        var n = t instanceof Array ? [] : {}
        if (t instanceof Array || t instanceof Object) {
          for (var r in t) n[r] = e(t[r])
          return n
        }
        return t
      }(r);
      [].push(o)
      var i = h.a(r.type)
      o.id = i
      var a = t.indexOf(e)
      if (a > -1) {
        t.splice(a, 1, o.id)
      } else {
        console.error("copy screen error")
      }
      if (n) {
        o.parentId = n
      }
      if (r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.f) {
        var s = o
        s.widgetIds = []
        r.widgetIds.forEach(function (e) {
          var n = Be(e, t, i)
          if (n) {
            s.widgetIds.push(n.id)
          }
        })
      }
      if (r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.x || r.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.A) {
        var c = o
        for (var l in c.widgetIds = [], r.attributes.templateSlotMap) {
          var u = Be(r.attributes.templateSlotMap[l].widgetId, t, i)
          if (u) {
            c.widgetIds.push(u.id)
            c.attributes.templateSlotMap[l].widgetId = u.id
          }
        }
      }
      Ne(o.id, o)
      return o
    }
  } else {
    console.error("cloneScreenWidget get widget error")
  }
}
function Fe(e, t) {
  var n = Se(e)
  if (n && "widgetIds" in n) {
    n.widgetIds = t
  }
}
function Ge(e, t) {
  var n = Se(e)
  if (n) {
    n.title = t
  }
}
function We(e, t, n) {
  var r = Se(e)
  if (r) {
    r.attributes = l.a(l.a({}, r.attributes), {}, c.a({}, t, n))
  }
}
function Ue(e, t) {
  switch (t) {
    case g.b.CONTAINED_ICON:
    case g.b.OUTLINED_ICON:
      return $_314.e[e]
    case g.b.CONTAINED_TEXT:
    case g.b.OUTLINED_TEXT:
      return $_314.f[e]
  }
}
var He = function (e) {
  switch (e) {
    case g.b.OUTLINED_TEXT:
    case g.b.CONTAINED_TEXT:
      return "TEXT"
    case g.b.OUTLINED_ICON:
    case g.b.CONTAINED_ICON:
      return "ICON"
  }
}
var Ve = function (e) {
  var t = $_42_index.g.get(e)
  return t && t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.d ? He(t.attributes.mode) : ""
}
var ze = function (e) {
  return v.p[e]
}
function Ye(e) {
  return Array.from($_42_index.g).some(function (t) {
    return t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.v && t[1].attributes.fileId === e || t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.z && t[1].attributes.backgroundImage === e || t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.w && t[1].attributes.backgroundImage === e || t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.E && (t[1].attributes.backgroundImageFileId === e || t[1].attributes.handleImageFileId === e || t[1].attributes.trackImageFileId === e) || t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.f && t[1].attributes.backgroundImage === e || !(t[1].type !== $$_$$_$$_$$_src_editor_widget_builtIn_types.a || !t[1].attributes.actionList.some(function (t) {
      return t.styleList.some(function (t) {
        return t.source === e
      })
    }))
  })
}
function Ke(e) {
  var t = []
  Array.from($_42_index.g).forEach(function (n) {
    var r = $_10_index.a(n, 2)
    r[0]
    var o = r[1]
    if (o.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.a && o.attributes.actionList.some(function (t) {
      return t.styleList.some(function (t) {
        return t.source === e
      })
    })) {
      t.push(o)
    }
  })
  return t
}
function qe(e) {
  return Array.from($_42_index.g).some(function (t) {
    return t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.b && t[1].attributes.fileId === e
  })
}
function Xe(e) {
  return Array.from($_42_index.g).some(function (t) {
    return (t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.d || t[1].type === $$_$$_$$_$$_src_editor_widget_builtIn_types.z) && t[1].attributes.iconId === e
  })
}
function Qe(e) {
  var /* [auto-meaningful-name] */e$size = e.size
  return !e.attributes.fileId && e$size.height === $_133.h && e$size.width === $_133.l
}
function Ze(e) {
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var r = E.d
  var o = E.e
  return e$width > o || e$height > r ? e$width / e$height > o / r ? {
    width: o,
    height: e$height / e$width * o
  } : {
    width: e$width / e$height * r,
    height: r
  } : {
    width: e$width,
    height: e$height
  }
}
function Je(e, t) {
  $_42_index.g.forEach(function (n) {
    if (n.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.v) {
      if (n.attributes.fileId === e) {
        n.attributes.fileId = t
      }
      if (Wt(e, n.attributes.fileId)) {
        n.attributes.fileId = Gt(e, t, n.attributes.fileId)
      }
    } else {
      if ("ACTOR_WIDGET" === n.type) {
        n.attributes.actionList.forEach(function (n) {
          n.styleList.forEach(function (n) {
            if (n.source === e) {
              n.source = t
            }
            if (Wt(e, n.source)) {
              n.source = Gt(e, t, n.source)
            }
          })
        })
      }
    }
    if ("backgroundImage" in n.attributes) {
      if (n.attributes.backgroundImage === e) {
        n.attributes.backgroundImage = t
      }
      if (Wt(e, n.attributes.backgroundImage)) {
        n.attributes.backgroundImage = Gt(e, t, n.attributes.backgroundImage)
      }
    }
  })
}
function $e() {
  return $_42_index.a
}
function et() {
  var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0]
  var t = {}
  $_42_index.a.forEach(function (n) {
    t[n.id] = l.a(l.a({}, n), {}, {
      cdnUrl: e && n.source || n.cdnUrl
    })
  })
  return t
}
function tt(e) {
  return e.cdnUrl || e.source
}
function nt(e) {
  var t = $_42_index.a.find(function (t) {
    return t.id === e
  })
  return (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
}
function rt(e) {
  return $_42_index.a.find(function (t) {
    return t.id === e
  })
}
function ot(e, t) {
  return $_42_index.a.find(function (n) {
    return n.groupId === e && n.groupImageIndex === t
  })
}
function it(e) {
  if ("string" === typeof e) {
    if ($$_$$_$$_$$_src_shared_tools_index.U(e)) {
      return e
    }
    var t = rt(e)
    if (t) {
      return (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    var n = ht().find(function (t) {
      return t.name + ".svg" === e || t.id === e
    })
    return n ? (null === n || undefined === n ? undefined : n.source) || (null === n || undefined === n ? undefined : n.cdnUrl) : undefined
  }
}
function at(e, t) {
  if (undefined !== t) {
    $_42_index.a.splice(t, 0, e)
  } else {
    $_42_index.a.push(e)
  }
}
function st(e, t) {
  var n = $_42_index.a.find(function (t) {
    return t.id === e
  })
  if (n) {
    n.id = t
  }
}
function ct(e, t) {
  $_42_index.a.filter(function (t) {
    return t.groupId === e
  }).forEach(function (e) {
    e.groupId = t
    if (undefined !== e.groupImageIndex) {
      e.id = "".concat(t, "-").concat(e.groupImageIndex + 1).concat(e.extension)
    }
  })
}
function lt(e, t) {
  var n = rt(e)
  if (n) {
    n.cdnUrl = t
  }
}
function ut(e, t, n) {
  var r = rt(e)
  if (r && r.urls) {
    r.urls[t] = n
  }
}
function dt(e) {
  return $_37_index.d.getState().resource.soundFileList.find(function (t) {
    return t.id === e
  })
}
function pt() {
  return $_37_index.d.getState().resource.soundFileList
}
function ft(e) {
  return $_37_index.d.getState().resource.iconFileList.find(function (t) {
    return t.id === e
  })
}
function ht() {
  return $_37_index.d.getState().resource.iconFileList
}
function mt(e, t) {
  if (t.includes(e)) {
    var n = t
    var r = e.replace(/\d+$/g, "")
    var o = new RegExp("^" + r + "(\\d+)$", "i")
    var i = []
    n.forEach(function (e) {
      var t = e.match(o)
      if (t && t[1]) {
        i.push(parseInt(t[1]))
      }
    })
    var a = 1
    var s = e.match(o)
    for (s && s[1] && (a = parseInt(s[1])); i.includes(a);) {
      a++
    }
    return "".concat(r).concat(a)
  }
  return e
}
function gt(e, t) {
  return mt(e, t.toJSON().map(function (e) {
    return e.title
  }))
}
function _t(e, t, n) {
  var r = []
  n.toJSON().forEach(function (t) {
    if (t.id !== e) {
      r.push(t.title)
    }
  })
  return mt(t, r)
}
function vt(e, t, n) {
  var r = []
  t.forEach(function (t) {
    var n = Se(t)
    if (n && n.type === e) {
      if (n.title) {
        r.push(n.title)
      } else {
        if (n.contentTitle) {
          r.push(n.contentTitle)
        }
      }
    }
  })
  return mt(n, r)
}
function bt(e, t, n) {
  var r = Me(t)
  return vt(t, r = r.filter(function (t) {
    return t !== e
  }), n)
}
function yt(e, t, n) {
  var r = Me(t)
  r = r.filter(function (t) {
    return t !== e
  })
  var o = n.replace(C.E, "")
  o = o.trim()
  return o = vt(t, r, o = $_190.c(o, 40))
}
function Et(e) {
  var t = e.slice(0, e.lastIndexOf(".") < 0 ? undefined : e.lastIndexOf("."))
  var n = $$_$$_$$_$$_src_shared_tools_index.I(e)
  var r = []
  $e().forEach(function (e) {
    if (e.extension === n) {
      r.push(e.id.slice(0, e.id.lastIndexOf(".") < 0 ? undefined : e.id.lastIndexOf(".")))
    }
  })
  return mt(t, r) + n
}
function Ot(e) {
  return wt.apply(this, arguments)
}
function wt() {
  return (wt = a.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = Et(t.name)
            e.next = 3
            return $$_$$_$$_$$_src_shared_tools_index.ob(t)
          case 3:
            if (!(e$sent = e.sent)) {
              e.next = 8
              break
            }
            at(o = {
              cdnUrl: "",
              id: n,
              source: e$sent,
              extension: $$_$$_$$_$$_src_shared_tools_index.I(t.name)
            })
            return e.abrupt("return", o)
          case 8:
            return e.abrupt("return", null)
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ct(e) {
  $_42_index.a.length = 0
  var t
  var n = $_47_index.a(e)
  try {
    for (n.s(); !(t = n.n()).done;) {
      var /* [auto-meaningful-name] */t$value = t.value
      var /* [auto-meaningful-name] */t$value$source = t$value.source
      if (t$value$source && $$_$$_$$_$$_src_shared_tools_index.R(t$value$source)) {
        t$value.source = $$_$$_$$_$$_src_shared_tools_index.n(t$value$source)
      }
      $_42_index.a.push(t$value)
    }
  } catch (i) {
    n.e(i)
  } finally {
    n.f()
  }
}
function Tt() {
  return St.apply(this, arguments)
}
function St() {
  return (St = a.a(RegeneratorRuntime.mark(function e() {
    var t
    var n
    var r
    var /* [auto-meaningful-name] */r$value
    var a
    var /* [auto-meaningful-name] */a$cdnUrl
    var /* [auto-meaningful-name] */a$source
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = []
            n = $_47_index.a($_42_index.a)
            e.prev = 2
            n.s()
          case 4:
            if ((r = n.n()).done) {
              e.next = 18
              break
            }
            if (r$value = r.value, a = l.a({}, r$value), a$cdnUrl = a.cdnUrl, a$source = a.source, a$cdnUrl || !a$source || !$$_$$_$$_$$_src_shared_tools_index.P(a$source)) {
              e.next = 14
              break
            }
            e.next = 11
            return $$_$$_$$_$$_src_shared_tools_index.d(a$source)
          case 11:
            a.source = e.sent
            e.next = 15
            break
          case 14:
            if (a$cdnUrl) {
              delete a.source
            }
          case 15:
            t.push(a)
          case 16:
            e.next = 4
            break
          case 18:
            e.next = 23
            break
          case 20:
            e.prev = 20
            e.t0 = e.catch(2)
            n.e(e.t0)
          case 23:
            e.prev = 23
            n.f()
            return e.finish(23)
          case 26:
            return e.abrupt("return", t)
          case 27:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[2, 20, 23, 26]])
  }))).apply(this, arguments)
}
function At() {
  return It.apply(this, arguments)
}
function It() {
  return (It = a.a(RegeneratorRuntime.mark(function e() {
    var t
    var n
    var r
    var o
    var /* [auto-meaningful-name] */o$value
    var s
    var /* [auto-meaningful-name] */s$cdnUrl
    var /* [auto-meaningful-name] */s$source
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = $_37_index.d.getState().resource.soundFileList.toJS()
            n = []
            r = $_47_index.a(t)
            e.prev = 3
            r.s()
          case 5:
            if ((o = r.n()).done) {
              e.next = 19
              break
            }
            if (o$value = o.value, s = l.a({}, o$value), s$cdnUrl = s.cdnUrl, s$source = s.source, s$cdnUrl || !s$source || !$$_$$_$$_$$_src_shared_tools_index.P(s$source)) {
              e.next = 15
              break
            }
            e.next = 12
            return $$_$$_$$_$$_src_shared_tools_index.d(s$source)
          case 12:
            s.source = e.sent
            e.next = 16
            break
          case 15:
            if (s$cdnUrl) {
              delete s.source
            }
          case 16:
            n.push(s)
          case 17:
            e.next = 5
            break
          case 19:
            e.next = 24
            break
          case 21:
            e.prev = 21
            e.t0 = e.catch(3)
            r.e(e.t0)
          case 24:
            e.prev = 24
            r.f()
            return e.finish(24)
          case 27:
            return e.abrupt("return", n)
          case 28:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[3, 21, 24, 27]])
  }))).apply(this, arguments)
}
function jt() {
  return Nt.apply(this, arguments)
}
function Nt() {
  return (Nt = a.a(RegeneratorRuntime.mark(function e() {
    var t
    var n
    var r
    var o
    var /* [auto-meaningful-name] */o$value
    var s
    var /* [auto-meaningful-name] */s$cdnUrl
    var /* [auto-meaningful-name] */s$source
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = $_37_index.d.getState().resource.iconFileList.toJS()
            n = []
            r = $_47_index.a(t)
            e.prev = 3
            r.s()
          case 5:
            if ((o = r.n()).done) {
              e.next = 19
              break
            }
            if (o$value = o.value, s = l.a({}, o$value), s$cdnUrl = s.cdnUrl, s$source = s.source, s$cdnUrl || !s$source || !$$_$$_$$_$$_src_shared_tools_index.P(s$source)) {
              e.next = 15
              break
            }
            e.next = 12
            return $$_$$_$$_$$_src_shared_tools_index.d(s$source)
          case 12:
            s.source = e.sent
            e.next = 16
            break
          case 15:
            if (s$cdnUrl) {
              delete s.source
            }
          case 16:
            n.push(s)
          case 17:
            e.next = 5
            break
          case 19:
            e.next = 24
            break
          case 21:
            e.prev = 21
            e.t0 = e.catch(3)
            r.e(e.t0)
          case 24:
            e.prev = 24
            r.f()
            return e.finish(24)
          case 27:
            return e.abrupt("return", n)
          case 28:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[3, 21, 24, 27]])
  }))).apply(this, arguments)
}
function Rt(e) {
  var t = $_42_index.a.findIndex(function (t) {
    return t.id === e
  })
  !function (e) {
    $_42_index.g.forEach(function (t) {
      if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.v && t.attributes.fileId === e) {
        t.attributes.fileId = ""
      }
      if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.f && t.attributes.backgroundImage === e) {
        t.attributes.backgroundImage = ""
      }
    })
  }(e)
  $_42_index.a.splice(t, 1)
}
function kt(e) {
  var t = document.getElementById(e)
  return (null === t || undefined === t ? undefined : t.dataset.clickType) === C.h.CLICK
}
function xt(e) {
  $_42_index.g.forEach(function (t) {
    if (t.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.b && t.attributes.fileId === e) {
      t.attributes.fileId = ""
    }
  })
}
function Dt(e) {
  return !!rt(e)
}
function Mt(e, t) {
  var n = $_26_index.z.checkOtherScreenFieldValueIsSelected(e, t)
  var /* [auto-meaningful-name] */$_37_index$d$getState$project$screens = $_37_index.d.getState().project.screens
  var /* [auto-meaningful-name] */$_37_index$d$getState$project$currentScreenIndex = $_37_index.d.getState().project.currentScreenIndex
  var i = []
  $_37_index$d$getState$project$screens.forEach(function (e, t) {
    if (n.includes(e.id)) {
      i.push(t + 1)
    }
  })
  if ($_26_index.z.checkFieldValueIsSelected(e, t) && !i.includes($_37_index$d$getState$project$currentScreenIndex + 1)) {
    i.push($_37_index$d$getState$project$currentScreenIndex + 1)
  }
  i.sort(function (e, t) {
    return e - t
  })
  return i
}
function Lt(e) {
  var t
  var /* [auto-meaningful-name] */$_37_index$d$getState$project$screens = $_37_index.d.getState().project.screens
  var r = $_47_index.a($_37_index$d$getState$project$screens)
  try {
    for (r.s(); !(t = r.n()).done;) {
      if (t.value.backgroundImage === e) {
        return true
      }
    }
  } catch (o) {
    r.e(o)
  } finally {
    r.f()
  }
  return false
}
function Pt(e) {
  return Array.from($_42_index.g).some(function (t) {
    return t[1].type === e
  })
}
function Bt(e) {
  var t = []
  $_42_index.a.forEach(function (n) {
    if (n.groupId === e) {
      t.push(n)
    }
  })
  return t
}
function Ft(e) {
  return $_42_index.a.find(function (t) {
    return (null === t || undefined === t ? undefined : t.cdnUrl) === (null === e || undefined === e ? undefined : e.cdnUrl) && t.groupId === e.id
  })
}
function Gt(e, t, n) {
  return t + n.split(e)[1]
}
function Wt(e, t) {
  var n = rt(t)
  return (null === n || undefined === n ? undefined : n.groupId) === e
}
export { se }
export { DB_NOT_EXIST as ce }
export { le }
export { ue }
export { de }
export { pe }
export { fe }
export { he }
export { me }
export { ge }
export { _e }
export { ve }
export { be }
export { ye }
export { Ee }
export { Oe }
export { we }
export { Ce }
export { Te }
export { Se }
export { Ae }
export { Ie }
export { je }
export { Ne }
export { Re }
export { ke }
export { De }
export { Le }
export { Pe }
export { Be }
export { Fe }
export { Ge }
export { We }
export { Ue }
export { He }
export { Ve }
export { ze }
export { Ye }
export { Ke }
export { qe }
export { Xe }
export { Qe }
export { Ze }
export { Je }
export { $e }
export { et }
export { tt }
export { nt }
export { rt }
export { ot }
export { it }
export { at }
export { st }
export { ct }
export { lt }
export { ut }
export { dt }
export { pt }
export { ft }
export { ht }
export { mt }
export { gt }
export { _t }
export { vt }
export { bt }
export { yt }
export { Et }
export { Ot }
export { Ct }
export { Tt }
export { At }
export { jt }
export { Rt }
export { kt }
export { xt }
export { Dt }
export { Mt }
export { Lt }
export { Pt }
export { Bt }
export { Ft }
export { Gt }
export { Wt }
