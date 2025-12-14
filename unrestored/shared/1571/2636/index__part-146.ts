/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-146
 */

"use strict"

import { Ag } from "./index__part-79"
import qC from "./99"
import * as /* [auto-meaningful-name] */$_135 from "./135"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1522 from "./1522"
import * as /* [auto-meaningful-name] */$_207_index from "./207/index"
import * as /* [auto-meaningful-name] */$_1523_index from "./1523/index"
import * as lT from "./43"
import * as /* [auto-meaningful-name] */$_1059 from "./1059"
import /* [auto-meaningful-name] */_$_ from "./1059"
var pT = _React.memo(function () {
  var e = _React.useRef(null)
  var t = $_16_index.d()
  var n = _React.useState(100)
  var r = $_10_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = $_16_index.e(function (e) {
    return e.block.slider
  })
  _React.useEffect(function () {
    var e = parseInt(a.value)
    e = (e = e > a.max ? a.max : e) < a.min ? a.min : e
    i(e)
  }, [a])
  _React.useEffect(function () {
    function n(r) {
      var /* [auto-meaningful-name] */r$target = r.target
      var /* [auto-meaningful-name] */e$current = e.current
      if (!("blocklyHtmlInput" === r$target.className || e$current && e$current.contains(r$target))) {
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.ih())
        document.body.removeEventListener("mousedown", n, {
          capture: true
        })
      }
    }
    if (a.visible) {
      document.body.addEventListener("mousedown", n, {
        capture: true
      })
    }
    return function () {
      document.body.removeEventListener("mousedown", n, {
        capture: true
      })
    }
  }, [t, a])
  return React.createElement("div", {
    ref: e,
    className: _$_.sliderWrapper,
    style: {
      position: "fixed",
      top: a.top + 4,
      left: a.left - 70,
      zIndex: 2
    }
  }, React.createElement("span", {
    className: _$_.leftSliderText
  }, a.minText), React.createElement($_13_index.x, {
    value: o,
    min: a.min,
    max: a.max,
    onChange: function (e) {
      i(e)
      setTimeout(function () {
        return a.setValue(e + "")
      }, 0)
    }
  }), React.createElement("span", {
    className: _$_.rightSliderText
  }, a.maxText))
})
var fT = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$options = e.options
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = $_16_index.d()
  var o = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var i = _React.useMemo(function () {
    return e$options.some(function (e) {
      var /* [auto-meaningful-name] */e$icon
      var n
      return $_17_index.BU.base.is_old_dropdown_option(e) ? "string" === typeof (null === (n = e[2]) || undefined === n ? undefined : n.src) : "basic" === e.type && "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src)
    })
  }, [e$options])
  return React.createElement($_13_index.w, {
    className: N(qC.dynamicDataList, i && qC.imageTextDataList),
    open: o.visible,
    value: o.value,
    onChange: function (e) {
      if (e !== __EMPTY_VALUE__) {
        o.setValue(e)
      }
      r($$_$$_$$_$$_src_shared_events_messagesWrapper.gh())
    }
  }, e$options.map(function (e, t) {
    var r
    if ($_17_index.BU.base.is_old_dropdown_option(e)) {
      return e[1] === Et.h && e[0] === Et.g ? React.createElement("div", {
        className: qC.nullItem,
        key: t
      }, $_710_index$a$formatMessage({
        id: "closeHeadline"
      })) : React.createElement($_13_index.p, {
        value: e[1],
        key: t,
        className: qC.dropdownOption
      }, e[2] && "string" === typeof (null === (r = e[2]) || undefined === r ? undefined : r.src) && React.createElement("div", {
        className: qC.dropdownImageBox
      }, React.createElement("img", {
        src: e[2].src,
        className: qC.image,
        alt: ""
      })), React.createElement("span", null, e[0]))
    }
    if ("line" === e.type) {
      return React.createElement("div", {
        className: qC.line,
        key: t
      })
    }
    if ("basic" === e.type) {
      var /* [auto-meaningful-name] */e$icon
      var /* [auto-meaningful-name] */_e$icon
      if (e.value === Et.h && e.text === Et.g) {
        return
      }
      return "DROPDOWN_ADD_BUTTON" === e.value ? React.createElement($_13_index.p, {
        value: __EMPTY_VALUE__,
        key: t
      }, React.createElement("div", {
        className: qC.addOption,
        onClick: e.callback
      }, React.createElement($_13_index.j, {
        type: "icon-add"
      }), React.createElement("span", null, e.text))) : React.createElement($_13_index.p, {
        value: e.value,
        key: t,
        className: qC.dropdownOption
      }, "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src) && React.createElement("div", {
        className: qC.dropdownImageBox
      }, React.createElement("img", {
        src: e.icon.src,
        className: qC.image,
        alt: ""
      })), "object" === typeof (null === (_e$icon = e.icon) || undefined === _e$icon ? undefined : _e$icon.src) && React.createElement("div", {
        className: qC.dropdownIconBox
      }, React.createElement($_13_index.j, {
        type: "icon-screen-variable"
      })), React.createElement("span", null, e.text))
    }
  }))
})
var hT = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$group = e.group
  var /* [auto-meaningful-name] */e$group$name = e$group.name
  var /* [auto-meaningful-name] */e$group$options = e$group.options
  var o = _React.useRef(null)
  var i = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var a = _React.useState("right")
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = e$group$options.some(function (e) {
    return "value" in e && e.value === i.value || Array.isArray(e) && e[1] === i.value
  })
  var v = _React.useMemo(function () {
    return Lodash.debounce(m, 100)
  }, [])
  return React.createElement("div", {
    ref: o,
    style: {
      position: "relative"
    },
    onMouseEnter: function () {
      v(function () {
        return true
      })
      var /* [auto-meaningful-name] */o$current = o.current
      if (o$current) {
        var t = o$current.getClientRects()[0]
        if (t.x + t.width + t.width < window.innerWidth) {
          l("right")
        } else {
          l("left")
        }
      }
    },
    onMouseLeave: function () {
      v(function () {
        return false
      })
    }
  }, React.createElement($_13_index.p, {
    value: __EMPTY_VALUE__,
    className: N(g && "selected", p && "hovered")
  }, React.createElement("span", null, e$group$name)), React.createElement("div", {
    style: {
      position: "absolute",
      top: 7,
      right: 2
    }
  }, React.createElement($_13_index.j, {
    type: "icon-fold-left",
    className: qC.icon
  })), React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: "right" === c ? "100%" : undefined,
      right: "left" === c ? "100%" : undefined,
      visibility: p ? "visible" : "hidden"
    }
  }, React.createElement("div", {
    style: {
      position: "fixed",
      boxShadow: "0px 0px 6px 0px rgb(177 163 191 / 30%)",
      transform: "left" === c ? "translateX(-100%)" : undefined
    }
  }, React.createElement(fT, {
    options: e$group$options
  }))))
})
var /* [auto-meaningful-name] */__EMPTY_VALUE__ = "__EMPTY_VALUE__"
var gT = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var r = $_16_index.e(function (e) {
    return e.project.currentScreenIndex
  })
  var o = _React.useMemo(function () {
    return n.options.some(function (e) {
      var /* [auto-meaningful-name] */e$icon
      var n
      return $_17_index.BU.base.is_old_dropdown_option(e) ? "string" === typeof (null === (n = e[2]) || undefined === n ? undefined : n.src) : "basic" === e.type && "string" === typeof (null === (e$icon = e.icon) || undefined === e$icon ? undefined : e$icon.src)
    })
  }, [n])
  return React.createElement($_13_index.w, {
    className: N(qC.dynamicDataList, o && qC.imageTextDataList),
    open: n.visible,
    value: n.value,
    onChange: function (e) {
      if (e !== __EMPTY_VALUE__) {
        n.setValue(e)
      }
      t($$_$$_$$_$$_src_shared_events_messagesWrapper.gh())
    }
  }, n.options.map(function (t, o) {
    var i
    if ($_17_index.BU.base.is_old_dropdown_option(t)) {
      return t[1] === Et.h && t[0] === Et.g ? React.createElement("div", {
        className: qC.nullItem
      }, $_710_index$a$formatMessage({
        id: "closeHeadline"
      })) : React.createElement($_13_index.p, {
        value: t[1],
        key: o,
        className: qC.dropdownOption
      }, t[2] && "string" === typeof (null === (i = t[2]) || undefined === i ? undefined : i.src) && React.createElement("div", {
        className: qC.dropdownImageBox
      }, React.createElement("img", {
        src: t[2].src,
        className: qC.image,
        alt: ""
      })), React.createElement("span", null, t[0]))
    }
    if ("line" === t.type) {
      return React.createElement("div", {
        className: qC.line,
        key: o
      })
    }
    if ("group" === t.type) {
      return React.createElement(hT, {
        key: o,
        group: t
      })
    }
    if ("basic" === t.type) {
      var /* [auto-meaningful-name] */t$icon
      var /* [auto-meaningful-name] */_t$icon
      if (t.value === Et.h && t.text === Et.g) {
        return
      }
      return "DROPDOWN_ADD_BUTTON" === t.value ? React.createElement($_13_index.p, {
        value: __EMPTY_VALUE__,
        key: o
      }, React.createElement("div", {
        className: qC.addOption,
        onClick: t.callback
      }, React.createElement($_13_index.j, {
        type: "icon-add"
      }), React.createElement("span", null, t.text))) : t.value === Ag.NO_BIND_DATA_SOURCE ? React.createElement("div", {
        className: qC.optionTips,
        key: Ag.NO_BIND_DATA_SOURCE
      }, React.createElement("span", null, t.text)) : t.value === Ag.EMPTY_KEYS_DATA ? React.createElement("div", {
        className: qC.optionTips,
        key: Ag.EMPTY_KEYS_DATA
      }, React.createElement("span", null, t.text)) : t.value === Ag.FETCH_DATA_FAILED ? React.createElement("div", {
        className: qC.optionTips,
        key: Ag.FETCH_DATA_FAILED
      }, React.createElement("span", null, t.text), React.createElement("div", {
        className: qC.btn,
        onClick: t.callback
      }, $_710_index$a$formatMessage({
        id: "retry"
      }))) : React.createElement($_13_index.p, {
        value: t.value,
        key: o,
        className: qC.dropdownOption
      }, "string" === typeof (null === (t$icon = t.icon) || undefined === t$icon ? undefined : t$icon.src) && React.createElement("div", {
        className: qC.dropdownImageBox
      }, React.createElement("img", {
        src: t.icon.src,
        className: qC.image,
        alt: ""
      })), "object" === typeof (null === (_t$icon = t.icon) || undefined === _t$icon ? undefined : _t$icon.src) && React.createElement("div", {
        className: N(qC.dropdownIconBox, n.showCurrentScreenIndex && qC.showCurrentScreenBg)
      }, React.createElement($_13_index.j, {
        className: "coco-iconfont-screen-bg",
        type: r > 8 ? "icon-screen-variable-plus" : "icon-screen-variable"
      }), React.createElement("div", {
        className: qC.screenIconBox
      }, React.createElement("div", {
        className: qC.screenIconText
      }, n.showCurrentScreenIndex && r + 1))), React.createElement("span", null, t.text))
    }
  }))
})
var _T = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var n = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = $_16_index.d()
  return React.createElement("ul", {
    className: qC.imageEntryList,
    style: {
      display: n.visible ? "block" : "none"
    }
  }, React.createElement("li", {
    onClick: function () {
      o($$_$$_$$_$$_src_shared_events_messagesWrapper.wj(e$type === K.a.IMAGE_DROPDOWN ? Tn.c.ImageLibrary : Tn.c.IconLibrary, function (e) {
        var t = e[0]
        n.setValue(t.id)
        o($$_$$_$$_$$_src_shared_events_messagesWrapper.sh())
      }))
    }
  }, $_710_index$a$formatMessage({
    id: e$type === K.a.IMAGE_DROPDOWN ? "selectByLibrary" : "selectByIconLibrary"
  })), React.createElement("li", null, React.createElement($_13_index.B, {
    onChange: function (e) {
      if (e) {
        var r = e$type === K.a.IMAGE_DROPDOWN ? $$_$$_$$_$$_src_shared_events_messagesWrapper.Zf : $$_$$_$$_$$_src_shared_events_messagesWrapper.rf
        o(r(e, function (e) {
          var t = e[0]
          n.setValue(t.id)
          o($$_$$_$$_$$_src_shared_events_messagesWrapper.gh())
        }))
      }
    },
    accept: e$type === K.a.IMAGE_DROPDOWN ? $_133.f : $_133.c
  }, $_710_index$a$formatMessage({
    id: "uploadFileByLocal"
  }))), n.blockInfo.emptyImageVisible && React.createElement("li", {
    onClick: function () {
      n.setValue(Et.f)
      o($$_$$_$$_$$_src_shared_events_messagesWrapper.gh())
    }
  }, $_710_index$a$formatMessage({
    id: "emptyImage"
  })))
})
var vT = _React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.d()
  return React.createElement("ul", {
    className: qC.imageEntryList,
    style: {
      display: e.visible ? "block" : "none"
    }
  }, React.createElement("li", {
    onClick: function () {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.wj(Tn.c.SoundLibrary, function (t) {
        var r = t[0]
        e.setValue(r.id)
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.sh())
      }))
    }
  }, $_710_index$a$formatMessage({
    id: "selectByLibrary"
  })), React.createElement("li", null, React.createElement($_13_index.B, {
    onChange: function (t) {
      if (t) {
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.wf(t, function (t) {
          var r = t[0]
          e.setValue(r.id)
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.gh())
        }))
      }
    },
    accept: $_135.h
  }, $_710_index$a$formatMessage({
    id: "uploadFileByLocal"
  }))))
})
export { pT }
export { gT }
export { _T }
export { vT }
