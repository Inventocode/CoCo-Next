/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-11
 */

"use strict"

import { st, dt } from "./index__part-7"
import { Cn } from "./index__part-14"
import { Sn } from "./index"
import /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import * as /* [auto-meaningful-name] */$$_$$_801_index from "../../801/index"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import { createElement, useRef } from "react"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_803 from "../../803"
import * as /* [auto-meaningful-name] */$$_1045 from "../1045"
import * as /* [auto-meaningful-name] */$$_1047 from "../1047"
import * as /* [auto-meaningful-name] */$$_927 from "../927"
import * as /* [auto-meaningful-name] */$$_1046 from "../1046"
var Xt
var Yt
var /* [auto-meaningful-name] */e$maxCount
var $t = {}
var Jt = 4.5
var Zt = 24
var en = 24
var tn = ""
var /* [auto-meaningful-name] */TopRight = "topRight"
var rn = false
function on(e) {
  var t
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : Zt
  var r = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : en
  switch (e) {
    case "topLeft":
      t = {
        left: 0,
        top: n,
        bottom: "auto"
      }
      break
    case "topRight":
      t = {
        right: 0,
        top: n,
        bottom: "auto"
      }
      break
    case "bottomLeft":
      t = {
        left: 0,
        top: "auto",
        bottom: r
      }
      break
    default:
      t = {
        right: 0,
        top: "auto",
        bottom: r
      }
  }
  return t
}
function an(e, t) {
  var /* [auto-meaningful-name] */e$placement = e.placement
  var r = undefined === e$placement ? TopRight : e$placement
  var /* [auto-meaningful-name] */e$top = e.top
  var /* [auto-meaningful-name] */e$bottom = e.bottom
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var s = undefined === e$getContainer ? Xt : e$getContainer
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var l = Cn()
  var /* [auto-meaningful-name] */l$getPrefixCls = l.getPrefixCls
  var /* [auto-meaningful-name] */l$getIconPrefixCls = l.getIconPrefixCls
  var h = l$getPrefixCls("notification", e$prefixCls || tn)
  var p = l$getIconPrefixCls()
  var _ = "".concat(h, "-").concat(r)
  var A = $t[_]
  if (A) {
    Promise.resolve(A).then(function (e) {
      t({
        prefixCls: "".concat(h, "-notice"),
        iconPrefixCls: p,
        instance: e
      })
    })
  } else {
    var g = $$_$$_8("".concat(h, "-").concat(r), $$_$$_35.a({}, "".concat(h, "-rtl"), true === rn))
    $t[_] = new Promise(function (e) {
      dt.newInstance({
        prefixCls: h,
        className: g,
        style: on(r, e$top, e$bottom),
        getContainer: s,
        maxCount: e$maxCount
      }, function (n) {
        e(n)
        t({
          prefixCls: "".concat(h, "-notice"),
          iconPrefixCls: p,
          instance: n
        })
      })
    })
  }
}
var sn = {
  success: $$_1045.a,
  info: $$_1046.a,
  error: $$_1047.a,
  warning: $$_927.a
}
function cn(e, t, n) {
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$description = e.description
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$btn = e.btn
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$key = e.key
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
  var g = undefined === e$closeIcon ? Yt : e$closeIcon
  var v = undefined === e$duration ? Jt : e$duration
  var m = null
  if (e$icon) {
    m = createElement("span", {
      className: "".concat(t, "-icon")
    }, e.icon)
  } else {
    if (e$type) {
      m = createElement(sn[e$type] || null, {
        className: "".concat(t, "-icon ").concat(t, "-icon-").concat(e$type)
      })
    }
  }
  var y = createElement("span", {
    className: "".concat(t, "-close-x")
  }, g || createElement($$_$$_803.a, {
    className: "".concat(t, "-close-icon")
  }))
  var b = !e$description && m ? createElement("span", {
    className: "".concat(t, "-message-single-line-auto-margin")
  }) : null
  return {
    content: createElement(Sn, {
      iconPrefixCls: n
    }, createElement("div", {
      className: m ? "".concat(t, "-with-icon") : "",
      role: "alert"
    }, m, createElement("div", {
      className: "".concat(t, "-message")
    }, b, e$message), createElement("div", {
      className: "".concat(t, "-description")
    }, e$description), e$btn ? createElement("span", {
      className: "".concat(t, "-btn")
    }, e$btn) : null)),
    duration: v,
    closable: true,
    closeIcon: y,
    onClose: e$onClose,
    onClick: e$onClick,
    key: e$key,
    style: e$style || {},
    className: $$_$$_8(e$className, $$_$$_35.a({}, "".concat(t, "-").concat(e$type), !!e$type))
  }
}
var un = {
  open: function (e) {
    an(e, function (t) {
      var /* [auto-meaningful-name] */t$prefixCls = t.prefixCls
      var /* [auto-meaningful-name] */t$iconPrefixCls = t.iconPrefixCls
      t.instance.notice(cn(e, t$prefixCls, t$iconPrefixCls))
    })
  },
  close: function (e) {
    Object.keys($t).forEach(function (t) {
      return Promise.resolve($t[t]).then(function (t) {
        t.removeNotice(e)
      })
    })
  },
  config: function (e) {
    var /* [auto-meaningful-name] */e$duration = e.duration
    var /* [auto-meaningful-name] */e$placement = e.placement
    var /* [auto-meaningful-name] */e$bottom = e.bottom
    var /* [auto-meaningful-name] */e$top = e.top
    var /* [auto-meaningful-name] */e$getContainer = e.getContainer
    var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    if (undefined !== e$prefixCls) {
      tn = e$prefixCls
    }
    if (undefined !== e$duration) {
      Jt = e$duration
    }
    if (undefined !== e$placement) {
      TopRight = e$placement
    } else {
      if (e.rtl) {
        TopRight = "topLeft"
      }
    }
    if (undefined !== e$bottom) {
      en = e$bottom
    }
    if (undefined !== e$top) {
      Zt = e$top
    }
    if (undefined !== e$getContainer) {
      Xt = e$getContainer
    }
    if (undefined !== e$closeIcon) {
      Yt = e$closeIcon
    }
    if (undefined !== e.rtl) {
      rn = e.rtl
    }
    if (undefined !== e.maxCount) {
      e$maxCount = e.maxCount
    }
  },
  destroy: function () {
    Object.keys($t).forEach(function (e) {
      Promise.resolve($t[e]).then(function (e) {
        e.destroy()
      })
      delete $t[e]
    })
  }
};
["success", "info", "warning", "error"].forEach(function (e) {
  un[e] = function (t) {
    return un.open($$_$$_19.a($$_$$_19.a({}, t), {
      type: e
    }))
  }
})
un.warn = un.warning
un.useNotification = function (e, t) {
  return function () {
    var /* [auto-meaningful-name] */e$getPrefixCls
    var o = null
    var a = st({
      add: function (e, t) {
        if (!(null === o || undefined === o)) {
          o.component.add(e, t)
        }
      }
    })
    var s = $$_$$_40_index.a(a, 2)
    var c = s[0]
    var u = s[1]
    var l = useRef({})
    l.current.open = function (i) {
      var /* [auto-meaningful-name] */i$prefixCls = i.prefixCls
      var s = e$getPrefixCls("notification", i$prefixCls)
      e($$_$$_19.a($$_$$_19.a({}, i), {
        prefixCls: s
      }), function (e) {
        var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
        var /* [auto-meaningful-name] */e$instance = e.instance
        o = e$instance
        c(t(i, e$prefixCls))
      })
    };
    ["success", "info", "warning", "error"].forEach(function (e) {
      l.current[e] = function (t) {
        return l.current.open($$_$$_19.a($$_$$_19.a({}, t), {
          type: e
        }))
      }
    })
    return [
      l.current, createElement($$_$$_801_index.a, {
        key: "holder"
      }, function (e) {
        e$getPrefixCls = e.getPrefixCls
        return u
      })
    ]
  }
}(an, cn)
var ln = un
export { ln }
