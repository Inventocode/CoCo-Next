/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-200
 */

"use strict"

import { XM } from "../../../../../unrestored/shared/1571/2636/index__part-198"
import { cL } from "../../../../../unrestored/shared/1571/2636/index__part-199"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../../../../../unrestored/shared/1571/2636/53"
import /* [auto-meaningful-name] */Src_editor_ui_header_styles_module_css from /* 161 */"../../../../src/editor/ui/Header/styles.module.css"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import { useDispatch, useSelector, batch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useEffect, memo, useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_570 from /* 570 */"../../../../../unrestored/shared/1571/2636/570"
import /* [auto-meaningful-name] */Module_5701 from /* 570 */"../../../../../unrestored/shared/1571/2636/570"
var dL = React.memo(function () {
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var t = useDispatch()
  var n = useState(true)
  var r = Module_10.a(n, 2)
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
    className: Module_5701.playBox
  }, React.createElement("button", {
    className: Classnames(Module_5701.playButton, s.size > 1 && Module_5701.borderLeft),
    onClick: function () {
      if (a) {
        t(Src_editor_redux_common_actions.Dj())
        t(Src_editor_redux_common_actions.Wh())
      } else {
        Src_editor_redux_common_actions.Nf(t, Src_editor_redux_common_actions.kg(o))
      }
    }
  }, a ? React.createElement(React.Fragment, null, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-stop"
  }), " ", Module_710$a$formatMessage({
    id: "stop"
  })) : React.createElement(React.Fragment, null, React.createElement(Src_shared_ui_components_index.j, {
    type: o ? "icon-start" : "icon-start-first-screen"
  }), Module_710$a$formatMessage({
    id: "play"
  }))), s.size > 1 && React.createElement(XM, {
    overlayClassName: Module_5701.playMenu,
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
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-start",
      className: Module_5701.menuIcon
    }), React.createElement("span", {
      className: Module_5701.menuText
    }, Module_710$a$formatMessage({
      id: "playCurrentScreen"
    }))), React.createElement(cL.Item, {
      key: "START_FIRST_SCREEN"
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-start-first-screen",
      className: Module_5701.menuIcon
    }), React.createElement("span", {
      className: Module_5701.menuText
    }, Module_710$a$formatMessage({
      id: "playFirstScreen"
    }))))
  }, React.createElement("div", {
    className: Module_5701.playType
  }, React.createElement(Src_shared_ui_components_index.j, {
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
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var a = useDispatch()
  var s = useState(false)
  var c = Module_10.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState(n)
  var p = Module_10.a(d, 2)
  var m = p[0]
  var g = p[1]
  return React.createElement(Module_748.a, {
    placement: "bottomLeft",
    title: l ? m : n,
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    className: Src_editor_ui_header_styles_module_css.projectTitleWrapper
  }, React.createElement(Src_shared_ui_components_index.k, {
    defaultValue: n,
    dependency: n,
    disabled: !r || e.readonly,
    isTrimmed: true,
    className: Src_editor_ui_header_styles_module_css.projectTitle,
    placeholder: Module_710$a$formatMessage({
      id: "projectTitlePlaceholder"
    }),
    rules: [
      {
        rule: Module_53.y
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
          a(Src_editor_redux_common_actions.Bf(e))
          if (n !== e) {
            Module_141.a("EditWorkName", {
              workId: t,
              workName: e
            })
          }
        })
      } else {
        a(Src_editor_redux_common_actions.mj({
          message: Module_710$a$formatMessage({
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
    }, React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-edit",
      className: Src_editor_ui_header_styles_module_css.editIcon
    }))
  })))
})
export { dL }
export { pL }
