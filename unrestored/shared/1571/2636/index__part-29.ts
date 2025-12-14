/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-29
 */

"use strict"

import * as An from "./5"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import /* [auto-meaningful-name] */_Lodash from "lodash"
import * as Qu from "./60"
import * as /* [auto-meaningful-name] */$_381 from "./381"
import /* [auto-meaningful-name] */_$_ from "./381"
var $u = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  return React.createElement("div", {
    className: _$_.imageAddon
  }, React.createElement($_13_index.B, {
    onChange: function (e) {
      if (e && n) {
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.Zf(e, function (e) {
          t($$_$$_$$_$$_src_shared_events_messagesWrapper.Yf(e[0], n))
        }))
      }
    },
    accept: $_133.f,
    tooltip: $_710_index$a$formatMessage({
      id: "uploadFileByLocal"
    })
  }, React.createElement($_13_index.j, {
    type: "icon-upload-image",
    className: N(_$_.item)
  })), React.createElement("div", {
    className: _$_.gap
  }), React.createElement($_748_index.a, {
    placement: "right",
    title: $_710_index$a$formatMessage({
      id: "resourceLibrary"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (n) {
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.wj(Tn.c.ImageLibrary, function (e) {
          $_16_index.b(function () {
            var r = Et.hb(e[0].id)
            if (r) {
              t($$_$$_$$_$$_src_shared_events_messagesWrapper.Yf(r, n))
            }
            t($$_$$_$$_$$_src_shared_events_messagesWrapper.sh())
          })
        }))
      }
    }
  }, React.createElement($_13_index.j, {
    type: "icon-image-library",
    className: N(_$_.item)
  }))))
})
var ed = _React.memo(function () {
  var e = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.common.widgetAttributeVisible
  })
  return React.createElement($_748_index.a, {
    placement: "right",
    title: $_710_index$a$formatMessage({
      id: "edit"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      var t = !n
      $_16_index.b(function () {
        e($$_$$_$$_$$_src_shared_events_messagesWrapper.fj(t))
        if (t) {
          e($$_$$_$$_$$_src_shared_events_messagesWrapper.Fj(false))
        }
      })
    }
  }, React.createElement($_13_index.j, {
    type: "icon-attribute",
    className: N(_$_.iconButton, _$_.editIcon)
  })))
})
var td = function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var n = $_16_index.e(function (e) {
    return e.common.previewAreaUpdatedAt
  })
  var r = _React.useState(0)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = Et.Bb(t || "")
  var c = $_16_index.d()
  if (!s || s.type !== An.C && s.type !== An.g) {
    return React.createElement(React.Fragment, null)
  }
  var /* [auto-meaningful-name] */s$attributes$options = s.attributes.options
  return React.createElement("div", {
    "data-should-update": n,
    className: _$_.radioActions,
    "data-should-update-area": i
  }, React.createElement($_748_index.a, {
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "deleteOption"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (s && s$attributes$options.length > 1) {
        a(Date.now())
        c($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(s.id, "options", s$attributes$options.slice(0, -1)))
      }
    },
    className: N(k.a({}, _$_.disabled, 1 === s$attributes$options.length))
  }, React.createElement($_13_index.j, {
    type: "icon-minus"
  }))), React.createElement($_748_index.a, {
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "addOption"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (s && s$attributes$options.length < 8) {
        s$attributes$options.push({
          content: "",
          state: "none"
        })
        c($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(s.id, "options", s$attributes$options))
        a(Date.now())
      }
    },
    className: N(k.a({}, _$_.disabled, 8 === s$attributes$options.length))
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  }))))
}
var nd = function () {
  var e = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  return React.createElement($_748_index.a, {
    placement: "right",
    title: $_710_index$a$formatMessage({
      id: "refresh"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      if (n) {
        e($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(n, "refreshTimestamp", Date.now(), true, false))
      }
    },
    className: _$_.webViewAction
  }, React.createElement($_13_index.j, {
    type: "icon-refresh",
    className: N(_$_.iconButton)
  })))
}
var rd = function () {
  var e = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var t = Et.Bb(e || "")
  return t ? React.createElement("div", {
    className: _$_.addonBox
  }, React.createElement(ed, null), t.type === An.v && React.createElement($u, null), t.type === An.L && React.createElement(nd, null)) : React.createElement(React.Fragment, null)
}
var od = {
  name: "MoveableRightAddon",
  render: function (e) {
    var t = e.getRect()
    return React.createElement("div", {
      key: "MoveableRightAddon",
      style: {
        position: "absolute",
        left: t.width + 10,
        top: 0
      }
    }, React.createElement(rd, null))
  }
}
var id = {
  name: "MoveableBottomAddon",
  render: function (e) {
    var t = e.getRect()
    return React.createElement("div", {
      key: "MoveableBottomAddon",
      style: {
        position: "absolute",
        left: t.width - 50,
        top: t.height + 10
      }
    }, React.createElement(td, null))
  }
}
var ad = _React.memo(rd)
export { od }
export { id }
export { ad }
