/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-200
 */

"use strict"

import { XM } from "./index__part-198"
import { cL } from "./index__part-199"
import * as Yr from "./53"
import /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_ui_header_styles$module$css from "../../../../src/editor/ui/header/styles.module.css"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch, useSelector, batch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState, useEffect, memo, useRef } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_570 from "./570"
import /* [auto-meaningful-name] */$_5701 from "./570"
var dL = React.memo(function () {
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var t = useDispatch()
  var n = useState(true)
  var r = $_10_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = useSelector(function (e) {
    return e.project.playing
  })
  var s = useSelector(function (e) {
    return e.project.screens
  })
  useEffect(function () {
    if (1 === s.size) {
      i(true)
    }
  }, [s])
  return React.createElement("div", {
    className: $_5701.playBox
  }, React.createElement("button", {
    className: N($_5701.playButton, s.size > 1 && $_5701.borderLeft),
    onClick: function () {
      if (a) {
        t($$_$$_$$_$$_src_editor_redux_common_actions.Dj())
        t($$_$$_$$_$$_src_editor_redux_common_actions.Wh())
      } else {
        $$_$$_$$_$$_src_editor_redux_common_actions.Nf(t, $$_$$_$$_$$_src_editor_redux_common_actions.kg(o))
      }
    }
  }, a ? React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: "icon-stop"
  }), " ", $_710$a$formatMessage({
    id: "stop"
  })) : React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: o ? "icon-start" : "icon-start-first-screen"
  }), $_710$a$formatMessage({
    id: "play"
  }))), s.size > 1 && React.createElement(XM, {
    overlayClassName: $_5701.playMenu,
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
      className: $_5701.menuIcon
    }), React.createElement("span", {
      className: $_5701.menuText
    }, $_710$a$formatMessage({
      id: "playCurrentScreen"
    }))), React.createElement(cL.Item, {
      key: "START_FIRST_SCREEN"
    }, React.createElement($_13_index.j, {
      type: "icon-start-first-screen",
      className: $_5701.menuIcon
    }), React.createElement("span", {
      className: $_5701.menuText
    }, $_710$a$formatMessage({
      id: "playFirstScreen"
    }))))
  }, React.createElement("div", {
    className: $_5701.playType
  }, React.createElement($_13_index.j, {
    type: "icon-dropdown-down"
  }))))
})
var pL = memo(function (e) {
  var t = useSelector(function (e) {
    return e.project.id
  })
  var n = useSelector(function (e) {
    return e.project.title
  })
  var r = useSelector(function (e) {
    return e.oTState.isAuthor
  })
  var o = useRef(null)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = useDispatch()
  var s = useState(false)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState(n)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  return React.createElement($_748_index.a, {
    placement: "bottomLeft",
    title: l ? m : n,
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    className: $$_$$_$$_$$_src_editor_ui_header_styles$module$css.projectTitleWrapper
  }, React.createElement($_13_index.k, {
    defaultValue: n,
    dependency: n,
    disabled: !r || e.readonly,
    isTrimmed: true,
    className: $$_$$_$$_$$_src_editor_ui_header_styles$module$css.projectTitle,
    placeholder: $_710$a$formatMessage({
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
        batch(function () {
          a($$_$$_$$_$$_src_editor_redux_common_actions.Bf(e))
          if (n !== e) {
            $_141_index.a("EditWorkName", {
              workId: t,
              workName: e
            })
          }
        })
      } else {
        a($$_$$_$$_$$_src_editor_redux_common_actions.mj({
          message: $_710$a$formatMessage({
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
      className: $$_$$_$$_$$_src_editor_ui_header_styles$module$css.editIcon
    }))
  })))
})
export { dL }
export { pL }
