/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：424__part-11
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as a from "./12"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */$$_84 from "../84"
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
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  return n ? n.findIndex(function (e) {
    return e.isSelected
  }) + 1 : 0
}
function ms(e) {
  var t
  var n
  var r = null === (t = a.b(e)) || undefined === t ? undefined : t.title
  var o = null === (n = a.d(e)) || undefined === n ? undefined : n.options
  var i = null === o || undefined === o ? undefined : o.find(function (e) {
    return e.isSelected
  })
  $$_$$_14.a.condition(!!i, {
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
  var o = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = a.d(e)) || undefined === r ? undefined : r.options) || []
  var s = t > 8 || t < 0 ? "getExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: "index"
    }
  })
  $$_$$_14.a.range(t, {
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
  var t = a.d(e)
  return (null === t || undefined === t ? undefined : t.headlineVisible) && (null === t || undefined === t ? undefined : t.headline) || ""
}
function vs(e) {
  var t
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  return (null === n || undefined === n ? undefined : n.length) || 0
}
function bs(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function ys(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function Es(e, t) {
  a.j(e, {
    x: t
  })
}
function Os(e, t) {
  a.j(e, {
    y: t
  })
}
function ws(e, t) {
  t = $$_$$_28_index.p(t).substr(0, 200)
  return a.h(e, {
    headline: t
  })
}
function Cs(e, t) {
  var n
  var r
  var o = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = a.d(e)) || undefined === r ? undefined : r.options) || []
  var s = t > 8 || t < 0 ? "setExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: o
    }
  })
  $$_$$_14.a.range(t, {
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
  a.h(e, {
    options: i
  })
}
function Ts(e, t, n) {
  var r
  var o
  n = $$_$$_28_index.p(n)
  var s = null === (r = a.b(e)) || undefined === r ? undefined : r.title
  var c = (null === (o = a.d(e)) || undefined === o ? undefined : o.options) || []
  var l = t > 8 || t < 0 ? "setExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  $$_$$_14.a.isNumber(t, {
    type: "warning",
    messageId: "argNotNumber",
    values: {
      name: s
    }
  })
  $$_$$_14.a.range(t, {
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
    return a.h(e, {
      options: c
    })
  }
}
function Ss(e, t, n) {
  var r
  var o
  var i = null === (r = a.b(e)) || undefined === r ? undefined : r.title
  var s = (null === (o = a.d(e)) || undefined === o ? undefined : o.options) || []
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: i
    }
  })
  $$_$$_14.a.range(t, {
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
        a.h(e, {
          options: s
        })
        $$_84.ob(e, t + 1, s[t].content)
      }
    } else {
      if ("disabled" === n) {
        s[t].state = "disabled"
        a.h(e, {
          options: s
        })
      }
    }
  }
}
function Is(e) {
  var t
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.isSelected = false
    })
    return a.h(e, {
      options: n
    })
  }
}
function As(e, t, n) {
  var r
  var o
  var i = (null === (r = a.d(e)) || undefined === r ? undefined : r.options) || []
  var s = null === (o = a.b(e)) || undefined === o ? undefined : o.title
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: s
    }
  })
  $$_$$_14.a.range(t, {
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
    return a.h(e, {
      options: i
    })
  }
}
function js(e) {
  var t
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.state = "none"
    })
    return a.h(e, {
      options: n
    })
  }
}
function Ns(e, t) {
  var n
  var r
  var o = (null === (n = a.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = a.b(e)) || undefined === r ? undefined : r.title
  $$_$$_14.a.range(t, {
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
    return a.h(e, {
      options: o
    })
  }
}
function Rs(e, t) {
  var n
  var r
  t = $$_$$_28_index.p(t)
  var o = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  var s = null === (r = a.d(e)) || undefined === r ? undefined : r.options
  if (s && s.length < 8) {
    s.push(fs(t.slice(0, 200)))
    return a.h(e, {
      options: s
    })
  }
  if (s) {
    $$_$$_14.a.condition(false, {
      type: "warning",
      messageId: "outMaxRange",
      values: {
        name: o
      }
    })
  }
}
function ks(e, t) {
  a.l(e, t)
}
function xs(e, t) {
  var n
  var r = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  $$_$$_14.a.condition(!t, {
    type: "warning",
    messageId: "widgetDisabled",
    values: {
      name: r
    }
  })
  a.h(e, {
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
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  var r = []
  return n ? (n.forEach(function (e, t) {
    return e.isSelected && r.push(t + 1)
  }), r) : r
}
function Ls(e) {
  var t
  var n
  var r = null === (t = a.b(e)) || undefined === t ? undefined : t.title
  var o = null === (n = a.d(e)) || undefined === n ? undefined : n.options
  var i = []
  return o ? (o.forEach(function (e) {
    return e.isSelected && i.push(e.content)
  }), i.every(function (e) {
    return "" !== e
  }) || $$_$$_14.a.condition(false, {
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
  var o = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = a.d(e)) || undefined === r ? undefined : r.options) || []
  var s = t > 8 || t < 0 ? "getExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  $$_$$_14.a.isNumber(t, {
    type: "warning",
    messageId: "argNotNumber",
    values: {
      name: o
    }
  })
  $$_$$_14.a.range(t, {
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
  var t = a.d(e)
  return (null === t || undefined === t ? undefined : t.headlineVisible) && (null === t || undefined === t ? undefined : t.headline) || ""
}
function Fs(e) {
  var t
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  return (null === n || undefined === n ? undefined : n.length) || 0
}
function Gs(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.x
}
function Us(e) {
  var t
  return null === (t = a.e(e)) || undefined === t ? undefined : t.y
}
function Ws(e, t) {
  a.j(e, {
    x: t
  })
}
function Hs(e, t) {
  a.j(e, {
    y: t
  })
}
function Vs(e, t) {
  t = $$_$$_28_index.p(t).substr(0, 200)
  return a.h(e, {
    headline: t
  })
}
function zs(e, t) {
  var n
  var r
  var o = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  var i = null === (r = a.d(e)) || undefined === r ? undefined : r.options
  if (i) {
    $$_$$_14.a.isNumber(t, {
      type: "error",
      messageId: "argNotNumber",
      values: {
        name: o
      }
    })
    $$_$$_14.a.range(t, {
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
  return a.h(e, {
    options: i
  })
}
function Ys(e, t, n) {
  var r
  var o
  n = $$_$$_28_index.p(n)
  var s = (null === (r = a.d(e)) || undefined === r ? undefined : r.options) || []
  var c = null === (o = a.b(e)) || undefined === o ? undefined : o.title
  var l = t > 8 || t < 0 ? "setExceedingTheMaximumLimitOfRadio" : "indexOutOfRange"
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: c
    }
  })
  $$_$$_14.a.range(t, {
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
    return a.h(e, {
      options: s
    })
  }
}
function Ks(e, t) {
  var n
  var r
  var o = (null === (n = a.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = a.b(e)) || undefined === r ? undefined : r.title
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: i
    }
  })
  $$_$$_14.a.range(t, {
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
    a.h(e, {
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
    $$_84.S(e, t + 1, true)
    $$_84.T(e, s, c)
  }
}
function qs(e, t) {
  var n
  var r
  var o = (null === (n = a.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = a.b(e)) || undefined === r ? undefined : r.title
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: i
    }
  })
  $$_$$_14.a.range(t, {
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
    a.h(e, {
      options: o
    })
    $$_84.S(e, t + 1, false)
    var s = []
    var c = []
    o.forEach(function (e, t) {
      if (e.isSelected) {
        s.push(t + 1)
        c.push(e.content)
      }
    })
    $$_84.U(e, s, c)
  }
}
function Xs(e, t) {
  var n
  var r
  var o = (null === (n = a.d(e)) || undefined === n ? undefined : n.options) || []
  var i = null === (r = a.b(e)) || undefined === r ? undefined : r.title
  $$_$$_14.a.range(t, {
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
    $$_$$_14.a.condition("disabled" !== o[t].state, {
      type: "warning",
      messageId: "widgetDisabled",
      values: {
        name: i
      }
    })
    a.h(e, {
      options: o
    })
  }
}
function Qs(e) {
  var t
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.isSelected = false
    })
    return a.h(e, {
      options: n
    })
  }
}
function Zs(e, t, n) {
  var r
  var o
  var i = (null === (r = a.d(e)) || undefined === r ? undefined : r.options) || []
  var s = null === (o = a.b(e)) || undefined === o ? undefined : o.title
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: s
    }
  })
  $$_$$_14.a.range(t, {
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
    return a.h(e, {
      options: i
    })
  }
}
function Js(e) {
  var t
  var n = null === (t = a.d(e)) || undefined === t ? undefined : t.options
  if (n) {
    n.forEach(function (e) {
      return e.state = "none"
    })
    return a.h(e, {
      options: n
    })
  }
}
function $s(e, t) {
  var n
  var r
  var o = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  var i = (null === (r = a.d(e)) || undefined === r ? undefined : r.options) || []
  $$_$$_14.a.isNumber(t, {
    type: "error",
    messageId: "argNotNumber",
    values: {
      name: o
    }
  })
  $$_$$_14.a.range(t, {
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
    return a.h(e, {
      options: i
    })
  }
}
function ec(e, t) {
  var n
  var r
  t = $$_$$_28_index.p(t)
  var o = null === (n = a.b(e)) || undefined === n ? undefined : n.title
  var s = null === (r = a.d(e)) || undefined === r ? undefined : r.options
  if (s && s.length < 8) {
    s.push(Ds(t.slice(0, 200)))
    return a.h(e, {
      options: s
    })
  }
  if (s) {
    $$_$$_14.a.condition(false, {
      type: "warning",
      messageId: "outMaxRange",
      values: {
        name: o
      }
    })
  }
}
function tc(e, t) {
  a.l(e, t)
}
function nc(e, t) {
  a.h(e, {
    disabled: t
  })
}
export { hs as "424__part-11__hs" }
export { ms as "424__part-11__ms" }
export { gs as "424__part-11__gs" }
export { _s as "424__part-11___s" }
export { vs as "424__part-11__vs" }
export { bs as "424__part-11__bs" }
export { ys as "424__part-11__ys" }
export { Es as "424__part-11__Es" }
export { Os as "424__part-11__Os" }
export { ws as "424__part-11__ws" }
export { Cs as "424__part-11__Cs" }
export { Ts as "424__part-11__Ts" }
export { Ss as "424__part-11__Ss" }
export { Is as "424__part-11__Is" }
export { As as "424__part-11__As" }
export { js as "424__part-11__js" }
export { Ns as "424__part-11__Ns" }
export { Rs as "424__part-11__Rs" }
export { ks as "424__part-11__ks" }
export { xs as "424__part-11__xs" }
export { Ms as "424__part-11__Ms" }
export { Ls as "424__part-11__Ls" }
export { Ps as "424__part-11__Ps" }
export { Bs as "424__part-11__Bs" }
export { Fs as "424__part-11__Fs" }
export { Gs as "424__part-11__Gs" }
export { Us as "424__part-11__Us" }
export { Ws as "424__part-11__Ws" }
export { Hs as "424__part-11__Hs" }
export { Vs as "424__part-11__Vs" }
export { zs as "424__part-11__zs" }
export { Ys as "424__part-11__Ys" }
export { Ks as "424__part-11__Ks" }
export { qs as "424__part-11__qs" }
export { Xs as "424__part-11__Xs" }
export { Qs as "424__part-11__Qs" }
export { Zs as "424__part-11__Zs" }
export { Js as "424__part-11__Js" }
export { $s as "424__part-11__$s" }
export { ec as "424__part-11__ec" }
export { tc as "424__part-11__tc" }
export { nc as "424__part-11__nc" }
