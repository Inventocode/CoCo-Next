/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-200
 */

"use strict"

import { XM } from "./index__part-198"
import { cL } from "./index__part-199"
import * as Yr from "./53"
import /* [auto-meaningful-name] */$_161 from "../../../../src/editor/ui/header/styles.module.css"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_570 from "./570"
import /* [auto-meaningful-name] */_$_ from "./570"
var dL = React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.d()
  var n = _React.useState(true)
  var r = $_10_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = $_16_index.e(function (e) {
    return e.project.playing
  })
  var s = $_16_index.e(function (e) {
    return e.project.screens
  })
  _React.useEffect(function () {
    if (1 === s.size) {
      i(true)
    }
  }, [s])
  return React.createElement("div", {
    className: _$_.playBox
  }, React.createElement("button", {
    className: N(_$_.playButton, s.size > 1 && _$_.borderLeft),
    onClick: function () {
      if (a) {
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.Dj())
        t($$_$$_$$_$$_src_shared_events_messagesWrapper.Wh())
      } else {
        $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(t, $$_$$_$$_$$_src_shared_events_messagesWrapper.kg(o))
      }
    }
  }, a ? React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: "icon-stop"
  }), " ", $_710_index$a$formatMessage({
    id: "stop"
  })) : React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: o ? "icon-start" : "icon-start-first-screen"
  }), $_710_index$a$formatMessage({
    id: "play"
  }))), s.size > 1 && React.createElement(XM, {
    overlayClassName: _$_.playMenu,
    placement: "bottomLeft",
    overlay: React.createElement(cL, {
      onClick: function (e) {
        switch (e.key) {
          case "START_FIRST_SCREEN":
            i(false)
            break
          case "START_CURRENT_SCREEN":
            i(true)
        }
      }
    }, React.createElement(cL.Item, {
      key: "START_CURRENT_SCREEN"
    }, React.createElement($_13_index.j, {
      type: "icon-start",
      className: _$_.menuIcon
    }), React.createElement("span", {
      className: _$_.menuText
    }, $_710_index$a$formatMessage({
      id: "playCurrentScreen"
    }))), React.createElement(cL.Item, {
      key: "START_FIRST_SCREEN"
    }, React.createElement($_13_index.j, {
      type: "icon-start-first-screen",
      className: _$_.menuIcon
    }), React.createElement("span", {
      className: _$_.menuText
    }, $_710_index$a$formatMessage({
      id: "playFirstScreen"
    }))))
  }, React.createElement("div", {
    className: _$_.playType
  }, React.createElement($_13_index.j, {
    type: "icon-dropdown-down"
  }))))
})
var pL = _React.memo(function (e) {
  var t = $_16_index.e(function (e) {
    return e.project.id
  })
  var n = $_16_index.e(function (e) {
    return e.project.title
  })
  var r = $_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var o = _React.useRef(null)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = $_16_index.d()
  var s = _React.useState(false)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = _React.useState(n)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  return React.createElement($_748_index.a, {
    placement: "bottomLeft",
    title: l ? m : n,
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    className: $_161.projectTitleWrapper
  }, React.createElement($_13_index.k, {
    defaultValue: n,
    dependency: n,
    disabled: !r || e.readonly,
    isTrimmed: true,
    className: $_161.projectTitle,
    placeholder: $_710_index$a$formatMessage({
      id: "projectTitlePlaceholder"
    }),
    rules: [
      {
        rule: Yr.y
      }
    ],
    maxLength: 20,
    onChange: function (e) {
      u(true)
      g(e)
    },
    onBlur: function (e, r) {
      if (e) {
        $_16_index.b(function () {
          a($$_$$_$$_$$_src_shared_events_messagesWrapper.Bf(e))
          if (n !== e) {
            $_141_index.a("EditWorkName", {
              workId: t,
              workName: e
            })
          }
        })
      } else {
        a($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          message: $_710_index$a$formatMessage({
            id: "isEmptyProjectTitle"
          }),
          showCloseIcon: false
        }))
      }
      r.target.value = e || n
      u(false)
    },
    onFocus: function (e) {
      e.target.selectionStart = e.target.selectionEnd = e.target.value.length
      e.target.select()
    },
    ref: o,
    after: React.createElement("span", {
      onClick: function () {
        if (null === o || undefined === o ? undefined : o.current) {
          o.current.focus()
        }
      }
    }, React.createElement($_13_index.j, {
      type: "icon-edit",
      className: $_161.editIcon
    }))
  })))
})
export { dL }
export { pL }
