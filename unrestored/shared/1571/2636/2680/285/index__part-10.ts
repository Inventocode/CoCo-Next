/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-10
 */

"use strict"

import { st, dt } from "./index__part-7"
import { gt } from "./index__part-9"
import { Cn } from "./index__part-14"
import { Sn } from "./index"
import * as /* [auto-meaningful-name] */Module_224 from /* 224 */"../../224/index"
import * as /* [auto-meaningful-name] */Module_610 from /* 610 */"../../610"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_801 from /* 801 */"../../801/index"
import * as /* [auto-meaningful-name] */Module_40 from /* 40 */"../../40/index"
import * as /* [auto-meaningful-name] */Module_21 from /* 21 */"../../21"
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../35"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../19"
import * as /* [auto-meaningful-name] */Module_1044 from /* 1044 */"../../1044"
var mt = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
        }
      }
    ]
  },
  name: "check-circle",
  theme: "filled"
}
var yt = function (e, t) {
  return React.createElement(Module_224.a, Module_21.a(Module_21.a({}, e), {}, {
    ref: t,
    icon: mt
  }))
}
yt.displayName = "CheckCircleFilled"
var bt
var wt = React.forwardRef(yt)
var Et = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
        }
      }
    ]
  },
  name: "info-circle",
  theme: "filled"
}
var xt = function (e, t) {
  return React.createElement(Module_224.a, Module_21.a(Module_21.a({}, e), {}, {
    ref: t,
    icon: Et
  }))
}
xt.displayName = "InfoCircleFilled"
var /* [auto-meaningful-name] */e$top
var /* [auto-meaningful-name] */e$getContainer
var /* [auto-meaningful-name] */e$maxCount
var St = 3
var Tt = 1
var Bt = ""
var /* [auto-meaningful-name] */MoveUp = "move-up"
var It = false
var Rt = false
function Ft() {
  return Tt++
}
function Pt(e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var i = Cn()
  var /* [auto-meaningful-name] */i$getPrefixCls = i.getPrefixCls
  var /* [auto-meaningful-name] */i$getRootPrefixCls = i.getRootPrefixCls
  var /* [auto-meaningful-name] */i$getIconPrefixCls = i.getIconPrefixCls
  var c = i$getPrefixCls("message", e$prefixCls || Bt)
  var u = i$getRootPrefixCls(e.rootPrefixCls, c)
  var l = i$getIconPrefixCls()
  if (bt) {
    t({
      prefixCls: c,
      rootPrefixCls: u,
      iconPrefixCls: l,
      instance: bt
    })
  } else {
    var f = {
      prefixCls: c,
      transitionName: It ? MoveUp : "".concat(u, "-").concat(MoveUp),
      style: {
        top: e$top
      },
      getContainer: e$getContainer || e$getPopupContainer,
      maxCount: e$maxCount
    }
    dt.newInstance(f, function (e) {
      if (bt) {
        t({
          prefixCls: c,
          rootPrefixCls: u,
          iconPrefixCls: l,
          instance: bt
        })
      } else {
        bt = e
        t({
          prefixCls: c,
          rootPrefixCls: u,
          iconPrefixCls: l,
          instance: e
        })
      }
    })
  }
}
var Nt = {
  info: React.forwardRef(xt),
  success: wt,
  error: Module_1044.a,
  warning: gt,
  loading: Module_610.a
}
function Mt(e, t, n) {
  var r
  var o = undefined !== e.duration ? e.duration : St
  var a = Nt[e.type]
  var s = Classnames("".concat(t, "-custom-content"), (r = {}, Module_35.a(r, "".concat(t, "-").concat(e.type), e.type), Module_35.a(r, "".concat(t, "-rtl"), true === Rt), r))
  return {
    key: e.key,
    duration: o,
    style: e.style || {},
    className: e.className,
    content: React.createElement(Sn, {
      iconPrefixCls: n
    }, React.createElement("div", {
      className: s
    }, e.icon || a && React.createElement(a, null), React.createElement("span", null, e.content))),
    onClose: e.onClose,
    onClick: e.onClick
  }
}
var Lt
var jt
var Ut = {
  open: function (e) {
    var t = e.key || Ft()
    var n = new Promise(function (n) {
      var i = function () {
        if ("function" === typeof e.onClose) {
          e.onClose()
        }
        return n(true)
      }
      Pt(e, function (n) {
        var /* [auto-meaningful-name] */n$prefixCls = n.prefixCls
        var /* [auto-meaningful-name] */n$iconPrefixCls = n.iconPrefixCls
        n.instance.notice(Mt(Module_19.a(Module_19.a({}, e), {
          key: t,
          onClose: i
        }), n$prefixCls, n$iconPrefixCls))
      })
    })
    var i = function () {
      if (bt) {
        bt.removeNotice(t)
      }
    }
    i.then = function (e, t) {
      return n.then(e, t)
    }
    i.promise = n
    return i
  },
  config: function (e) {
    if (undefined !== e.top) {
      e$top = e.top
      bt = null
    }
    if (undefined !== e.duration) {
      St = e.duration
    }
    if (undefined !== e.prefixCls) {
      Bt = e.prefixCls
    }
    if (undefined !== e.getContainer) {
      e$getContainer = e.getContainer
    }
    if (undefined !== e.transitionName) {
      MoveUp = e.transitionName
      bt = null
      It = true
    }
    if (undefined !== e.maxCount) {
      e$maxCount = e.maxCount
      bt = null
    }
    if (undefined !== e.rtl) {
      Rt = e.rtl
    }
  },
  destroy: function (e) {
    if (bt) {
      if (e) {
        (0, bt.removeNotice)(e)
      } else {
        var /* [auto-meaningful-name] */bt$destroy = bt.destroy
        bt$destroy()
        bt = null
      }
    }
  }
}
function Ht(e, t) {
  e[t] = function (n, i, o) {
    return function (e) {
      return "[object Object]" === Object.prototype.toString.call(e) && !!e.content
    }(n) ? e.open(Module_19.a(Module_19.a({}, n), {
        type: t
      })) : ("function" === typeof i && (o = i, i = undefined), e.open({
        content: n,
        duration: i,
        type: t,
        onClose: o
      }))
  }
}
["success", "info", "warning", "error", "loading"].forEach(function (e) {
  return Ht(Ut, e)
})
Ut.warn = Ut.warning
Ut.useMessage = (Lt = Pt, jt = Mt, function () {
  var /* [auto-meaningful-name] */n$getPrefixCls
  var /* [auto-meaningful-name] */n$getPopupContainer
  var n = null
  var o = st({
    add: function (e, t) {
      if (!(null === n || undefined === n)) {
        n.component.add(e, t)
      }
    }
  })
  var a = Module_40.a(o, 2)
  var s = a[0]
  var c = a[1]
  var u = React.useRef({})
  u.current.open = function (i) {
    var /* [auto-meaningful-name] */i$prefixCls = i.prefixCls
    var a = n$getPrefixCls("message", i$prefixCls)
    var c = n$getPrefixCls()
    var u = i.key || Ft()
    var l = new Promise(function (e) {
      var o = function () {
        if ("function" === typeof i.onClose) {
          i.onClose()
        }
        return e(true)
      }
      Lt(Module_19.a(Module_19.a({}, i), {
        prefixCls: a,
        rootPrefixCls: c,
        getPopupContainer: n$getPopupContainer
      }), function (e) {
        var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
        var /* [auto-meaningful-name] */e$instance = e.instance
        n = e$instance
        s(jt(Module_19.a(Module_19.a({}, i), {
          key: u,
          onClose: o
        }), e$prefixCls))
      })
    })
    var f = function () {
      if (n) {
        n.removeNotice(u)
      }
    }
    f.then = function (e, t) {
      return l.then(e, t)
    }
    f.promise = l
    return f
  };
  ["success", "info", "warning", "error", "loading"].forEach(function (e) {
    return Ht(u.current, e)
  })
  return [
    u.current, React.createElement(Module_801.a, {
      key: "holder"
    }, function (n) {
      n$getPrefixCls = n.getPrefixCls
      n$getPopupContainer = n.getPopupContainer
      return c
    })
  ]
})
var Vt = Ut
export { Vt }
