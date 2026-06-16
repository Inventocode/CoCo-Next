/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-11
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_84 from /* 84 */"../84"
function fs() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ""
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "none"
  return {
    content: e,
    state: t
  }
}
function hs(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  return n ? n.findIndex(function (e) {
    return e.isSelected
  }) + 1 : 0
}
function ms(e) {
  var t
  var n
  var r = null === (t = Module_12.b(e)) || undefined === t ? undefined : t.title
  var o = null === (n = Module_12.d(e)) || undefined === n ? undefined : n.options
  var i = null === o || undefined === o ? undefined : o.find(function (e) {
    return e.isSelected
  })
  Module_14.a.condition(!!i, {
    type: "warning",
    messageId: "emptyContent",
    values: {
      name: r
    }
  })
  return (null === i || undefined === i ? undefined : i.content) || ""
}
function gs(e, t) {
  var n
  var r
  var o = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options) || []
  var s = t > 8 || t < 0 ? "getExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: "index"
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: i.length + 1
  }, {
    type: "warning",
    messageId: s,
    values: {
      name: o,
      index: t
    }
  })
  t--
  return i && i[t] ? i[t].content : ""
}
function _s(e) {
  var t = Module_12.d(e)
  return (null === t || undefined === t ? undefined : t.headlineVisible) && (null === t || undefined === t ? undefined : t.headline) || ""
}
function vs(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  return (null === n || undefined === n ? undefined : n.length) || 0
}
function bs(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function ys(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function Es(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function Os(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function ws(e, t) {
  t = Module_28.p(t).substr(0, 200)
  return Module_12.h(e, {
    headline: t
  })
}
function Cs(e, t) {
  var n
  var r
  var o = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options) || []
  var s = t > 8 || t < 0 ? "setExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: o
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: 9
  }, {
    type: "warning",
    messageId: s,
    values: {
      name: o
    }
  })
  if (i) {
    var c = Math.min(t, 8) - i.length
    if (c <= 0) {
      i = i.slice(0, t)
    } else {
      for (; c > 0;) {
        i.push(fs())
        c--
      }
    }
  }
  Module_12.h(e, {
    options: i
  })
}
function Ts(e, t, n) {
  var r
  var o
  n = Module_28.p(n)
  var s = null === (r = Module_12.b(e)) || undefined === r ? undefined : r.title
  var c = (null === (o = Module_12.d(e)) || undefined === o ? undefined : o.options) || []
  var l = t > 8 || t < 0 ? "setExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  Module_14.a.isNumber(t, {
    type: "warning",
    messageId: "argNotNumber",
    values: {
      name: s
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: c.length + 1
  }, {
    type: "warning",
    messageId: l,
    values: {
      name: s,
      index: t
    }
  })
  t--
  if (c && c[t]) {
    c[t].content = n.slice(0, 200)
    return Module_12.h(e, {
      options: c
    })
  }
}
function Ss(e, t, n) {
  var r
  var o
  var i = null === (r = Module_12.b(e)) || undefined === r ? undefined : r.title
  var s = (null === (o = Module_12.d(e)) || undefined === o ? undefined : o.options) || []
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: i
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: s.length + 1
  }, {
    messageId: "indexOutOfRange",
    type: "warning",
    values: {
      name: i,
      index: t
    }
  })
  t--
  if (s && s[t]) {
    if ("selected" === n) {
      if (s.findIndex(function (e) {
        return e.isSelected
      }) !== t) {
        s.forEach(function (e) {
          return e.isSelected = false
        })
        s[t].isSelected = true
        Module_12.h(e, {
          options: s
        })
        Module_84.ob(e, t + 1, s[t].content)
      }
    } else {
      if ("disabled" === n) {
        s[t].state = "disabled"
        Module_12.h(e, {
          options: s
        })
      }
    }
  }
}
function As(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.isSelected = false
    })
    return Module_12.h(e, {
      options: n
    })
  }
}
function Is(e, t, n) {
  var r
  var o
  var i = (null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options) || []
  var s = null === (o = Module_12.b(e)) || undefined === o ? undefined : o.title
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: s
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: i.length + 1
  }, {
    type: "warning",
    messageId: "indexOutOfRange",
    values: {
      name: s,
      index: t
    }
  })
  t--
  if (i && i[t]) {
    i[t].state = n
    return Module_12.h(e, {
      options: i
    })
  }
}
function js(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.state = "none"
    })
    return Module_12.h(e, {
      options: n
    })
  }
}
function Ns(e, t) {
  var n
  var r
  var o = (null === (n = Module_12.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = Module_12.b(e)) || undefined === r ? undefined : r.title
  Module_14.a.range(t, {
    min: 0,
    max: o.length + 1
  }, {
    type: "warning",
    messageId: "indexOutOfRange",
    values: {
      name: i,
      index: t
    }
  })
  t--
  if (o && o[t]) {
    o.splice(t, 1)
    return Module_12.h(e, {
      options: o
    })
  }
}
function Rs(e, t) {
  var n
  var r
  t = Module_28.p(t)
  var o = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  var s = null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options
  if (s && s.length < 8) {
    s.push(fs(t.slice(0, 200)))
    return Module_12.h(e, {
      options: s
    })
  }
  if (s) {
    Module_14.a.condition(false, {
      type: "warning",
      messageId: "outMaxRange",
      values: {
        name: o
      }
    })
  }
}
function ks(e, t) {
  Module_12.l(e, t)
}
function xs(e, t) {
  var n
  var r = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  Module_14.a.condition(!t, {
    type: "warning",
    messageId: "widgetDisabled",
    values: {
      name: r
    }
  })
  Module_12.h(e, {
    disabled: t
  })
}
function Ds() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ""
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "none"
  return {
    content: e,
    state: t
  }
}
function Ms(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  var r = []
  return n ? (n.forEach(function (e, t) {
    return e.isSelected && r.push(t + 1)
  }), r) : r
}
function Ls(e) {
  var t
  var n
  var r = null === (t = Module_12.b(e)) || undefined === t ? undefined : t.title
  var o = null === (n = Module_12.d(e)) || undefined === n ? undefined : n.options
  var i = []
  return o ? (o.forEach(function (e) {
    return e.isSelected && i.push(e.content)
  }), i.every(function (e) {
    return "" !== e
  }) || Module_14.a.condition(false, {
    type: "warning",
    messageId: "emptyContent",
    values: {
      name: r
    }
  }), i) : i
}
function Ps(e, t) {
  var n
  var r
  var o = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options) || []
  var s = t > 8 || t < 0 ? "getExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  Module_14.a.isNumber(t, {
    type: "warning",
    messageId: "argNotNumber",
    values: {
      name: o
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: i.length + 1
  }, {
    type: "warning",
    messageId: s,
    values: {
      name: o,
      index: t
    }
  })
  t--
  return i && i[t] ? i[t].content : ""
}
function Bs(e) {
  var t = Module_12.d(e)
  return (null === t || undefined === t ? undefined : t.headlineVisible) && (null === t || undefined === t ? undefined : t.headline) || ""
}
function Fs(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  return (null === n || undefined === n ? undefined : n.length) || 0
}
function Gs(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x
}
function Ws(e) {
  var t
  return null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y
}
function Us(e, t) {
  Module_12.j(e, {
    x: t
  })
}
function Hs(e, t) {
  Module_12.j(e, {
    y: t
  })
}
function Vs(e, t) {
  t = Module_28.p(t).substr(0, 200)
  return Module_12.h(e, {
    headline: t
  })
}
function zs(e, t) {
  var n
  var r
  var o = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  var i = null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options
  if (i) {
    Module_14.a.isNumber(t, {
      type: "error",
      messageId: "argNotNumber",
      values: {
        name: o
      }
    })
    Module_14.a.range(t, {
      min: 0,
      max: 9
    }, {
      type: "warning",
      messageId: "setExceedingTheMaximumLimitOfRadio",
      values: {
        name: o
      }
    })
    var s = Math.min(t, 8) - i.length
    if (s <= 0) {
      i = i.slice(0, t)
    } else {
      for (; s > 0;) {
        i.push(Ds())
        s--
      }
    }
  }
  return Module_12.h(e, {
    options: i
  })
}
function Ys(e, t, n) {
  var r
  var o
  n = Module_28.p(n)
  var s = (null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options) || []
  var c = null === (o = Module_12.b(e)) || undefined === o ? undefined : o.title
  var l = t > 8 || t < 0 ? "setExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: c
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: s.length + 1
  }, {
    type: "warning",
    messageId: l,
    values: {
      name: c,
      index: t
    }
  })
  t--
  if (s && s[t]) {
    s[t].content = n.slice(0, 200)
    return Module_12.h(e, {
      options: s
    })
  }
}
function Ks(e, t) {
  var n
  var r
  var o = (null === (n = Module_12.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = Module_12.b(e)) || undefined === r ? undefined : r.title
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: i
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: o.length + 1
  }, {
    type: "warning",
    messageId: "indexOutOfRange",
    values: {
      name: i,
      index: t
    }
  })
  t--
  if (o && o[t] && !o[t].isSelected) {
    o[t].isSelected = true
    Module_12.h(e, {
      options: o
    })
    var s = []
    var c = []
    o.forEach(function (e, t) {
      if (e.isSelected) {
        s.push(t + 1)
        c.push(e.content)
      }
    })
    Module_84.S(e, t + 1, true)
    Module_84.T(e, s, c)
  }
}
function qs(e, t) {
  var n
  var r
  var o = (null === (n = Module_12.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = Module_12.b(e)) || undefined === r ? undefined : r.title
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: i
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: o.length + 1
  }, {
    type: "warning",
    messageId: "indexOutOfRange",
    values: {
      name: i,
      index: t
    }
  })
  t--
  if (o && o[t] && o[t].isSelected) {
    o[t].isSelected = false
    Module_12.h(e, {
      options: o
    })
    Module_84.S(e, t + 1, false)
    var s = []
    var c = []
    o.forEach(function (e, t) {
      if (e.isSelected) {
        s.push(t + 1)
        c.push(e.content)
      }
    })
    Module_84.U(e, s, c)
  }
}
function Xs(e, t) {
  var n
  var r
  var o = (null === (n = Module_12.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = Module_12.b(e)) || undefined === r ? undefined : r.title
  Module_14.a.range(t, {
    min: 0,
    max: o.length + 1
  }, {
    type: "warning",
    messageId: "indexOutOfRange",
    values: {
      name: i,
      index: t
    }
  })
  t--
  if (o && o[t]) {
    o[t].state = "disabled"
    Module_14.a.condition("disabled" !== o[t].state, {
      type: "warning",
      messageId: "widgetDisabled",
      values: {
        name: i
      }
    })
    Module_12.h(e, {
      options: o
    })
  }
}
function Qs(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.isSelected = false
    })
    return Module_12.h(e, {
      options: n
    })
  }
}
function Zs(e, t, n) {
  var r
  var o
  var i = (null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options) || []
  var s = null === (o = Module_12.b(e)) || undefined === o ? undefined : o.title
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: s
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: i.length + 1
  }, {
    type: "warning",
    messageId: "indexOutOfRange",
    values: {
      name: s,
      index: t
    }
  })
  t--
  if (i && i[t]) {
    i[t].state = n
    return Module_12.h(e, {
      options: i
    })
  }
}
function Js(e) {
  var t
  var n = null === (t = Module_12.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.state = "none"
    })
    return Module_12.h(e, {
      options: n
    })
  }
}
function $s(e, t) {
  var n
  var r
  var o = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options) || []
  Module_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: o
    }
  })
  Module_14.a.range(t, {
    min: 0,
    max: i.length + 1
  }, {
    type: "error",
    messageId: "indexOutOfRange",
    values: {
      name: o,
      index: t
    }
  })
  t--
  if (i && i[t]) {
    i.splice(t, 1)
    return Module_12.h(e, {
      options: i
    })
  }
}
function ec(e, t) {
  var n
  var r
  t = Module_28.p(t)
  var o = null === (n = Module_12.b(e)) || undefined === n ? undefined : n.title
  var s = null === (r = Module_12.d(e)) || undefined === r ? undefined : r.options
  if (s && s.length < 8) {
    s.push(Ds(t.slice(0, 200)))
    return Module_12.h(e, {
      options: s
    })
  }
  if (s) {
    Module_14.a.condition(false, {
      type: "warning",
      messageId: "outMaxRange",
      values: {
        name: o
      }
    })
  }
}
function tc(e, t) {
  Module_12.l(e, t)
}
function nc(e, t) {
  Module_12.h(e, {
    disabled: t
  })
}
export { hs }
export { ms }
export { gs }
export { _s }
export { vs }
export { bs }
export { ys }
export { Es }
export { Os }
export { ws }
export { Cs }
export { Ts }
export { Ss }
export { As }
export { Is }
export { js }
export { Ns }
export { Rs }
export { ks }
export { xs }
export { Ms }
export { Ls }
export { Ps }
export { Bs }
export { Fs }
export { Gs }
export { Ws }
export { Us }
export { Hs }
export { Vs }
export { zs }
export { Ys }
export { Ks }
export { qs }
export { Xs }
export { Qs }
export { Zs }
export { Js }
export { $s }
export { ec }
export { tc }
export { nc }
