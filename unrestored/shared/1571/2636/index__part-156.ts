/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-156
 */

"use strict"

import { RS } from "./index__part-155"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useMemo, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_340 from "./340"
import /* [auto-meaningful-name] */$_3401 from "./340"
var DS = memo(function (e) {
  var /* [auto-meaningful-name] */e$consoleVisible = e.consoleVisible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var r = useSelector(function (e) {
    return e.common.consoleMessages
  })
  var o = useState(["error", "lintError", "warning", "print", "log", "customError", "customWarning"])
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(-1)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useRef(null)
  var m = useRef(.18 * document.body.clientHeight)
  var g = useSelector(function (e) {
    return e.project.playing
  })
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var b = useDispatch()
  var y = useMemo(function () {
    return {
      errorCount: r.filter(function (e) {
        return "error" === e.get("type") || "lintError" === e.get("type") || "customError" === e.get("type")
      }).size,
      warningCount: r.filter(function (e) {
        return "warning" === e.get("type") || "customWarning" === e.get("type")
      }).size
    }
  }, [r])
  var /* [auto-meaningful-name] */y$errorCount = y.errorCount
  var /* [auto-meaningful-name] */y$warningCount = y.warningCount
  function w(e, t) {
    var n = window.getSelection()
    if (!(null === n || undefined === n ? undefined : n.toString().length) && e.screenId && e.blockId) {
      d(t)
      b($$_$$_$$_$$_src_editor_redux_common_actions.ig(e.blockId, e.screenId))
      var /* [auto-meaningful-name] */e$type = e.type
      if (!("error" !== e$type && "customError" !== e$type && "warning" !== e$type)) {
        T(false, false, e.type, e.message)
      }
    }
  }
  function C(e) {
    var t = a.indexOf(e)
    if ("error" === e) {
      if (t > -1) {
        a.splice(t, 1)
        a.splice(a.indexOf("lintError"), 1)
        a.splice(a.indexOf("customError"), 1)
      } else {
        a.push("error", "lintError", "customError")
      }
    } else {
      if ("warning" === e) {
        if (t > -1) {
          a.splice(t, 1)
          a.splice(a.indexOf("customWarning"), 1)
        } else {
          a.push("warning", "customWarning")
        }
      } else {
        if (t > -1) {
          a.splice(t, 1)
        } else {
          a.push(e)
        }
      }
    }
    s($_25_index.a(a))
  }
  function T(e, t, n, r) {
    $_141_index.a("EditConsole", {
      errorMessage: "error" !== n && "customError" !== n || !r ? "" : r,
      warningMessage: "warning" === n && r ? r : "",
      isFilter: e,
      isClear: t
    })
  }
  useEffect(function () {
    d(-1)
  }, [g])
  useEffect(function () {
    b($$_$$_$$_$$_src_editor_redux_common_actions.ei(e$consoleVisible ? m.current : 0))
  }, [b, e$consoleVisible])
  useEffect(function () {
    var /* [auto-meaningful-name] */p$current = p.current
    if (p$current) {
      p$current.scrollTop = p$current.scrollHeight
    }
  }, [r])
  return React.createElement(RS, {
    onResize: function (e) {
      b($$_$$_$$_$$_src_editor_redux_common_actions.ei(e))
      m.current = e
    },
    className: N($_3401.container, !e$consoleVisible && $_3401.hide),
    resizable: true,
    placements: ["top"],
    height: .18 * document.body.clientHeight,
    minHeight: 110,
    maxHeight: (document.body.clientHeight - 52) / 2
  }, React.createElement("div", {
    className: $_3401.header
  }, React.createElement("div", {
    className: $_3401.title
  }, React.createElement("span", {
    className: $_3401.errorCount
  }, React.createElement($_13_index.j, {
    type: "icon-console-error"
  }), y$errorCount), React.createElement("span", null, React.createElement($_13_index.j, {
    type: "icon-warning"
  }), y$warningCount)), React.createElement("div", {
    className: $_3401.right
  }, React.createElement($_1213.a, {
    trigger: "click",
    placement: "bottom",
    overlayClassName: "consoleFilterPopover",
    content: React.createElement("div", {
      className: $_3401.filterCategory
    }, React.createElement("div", {
      className: $_3401.filterItem,
      onClick: C.bind(null, "error")
    }, React.createElement("div", {
      className: $_3401.iconBox
    }, a.includes("error") && React.createElement($_13_index.j, {
      type: "icon-selected"
    })), $_710$a$formatMessage({
      id: "show"
    }), $_710$a$formatMessage({
      id: "consoleError"
    })), React.createElement("div", {
      className: $_3401.filterItem,
      onClick: C.bind(null, "warning")
    }, React.createElement("div", {
      className: $_3401.iconBox
    }, a.includes("warning") && React.createElement($_13_index.j, {
      type: "icon-selected"
    })), $_710$a$formatMessage({
      id: "show"
    }), $_710$a$formatMessage({
      id: "consoleWarning"
    })), React.createElement("div", {
      className: $_3401.filterItem,
      onClick: C.bind(null, "print")
    }, React.createElement("div", {
      className: $_3401.iconBox
    }, a.includes("print") && React.createElement($_13_index.j, {
      type: "icon-selected"
    })), $_710$a$formatMessage({
      id: "show"
    }), $_710$a$formatMessage({
      id: "consolePrint"
    })), React.createElement("div", {
      className: $_3401.filterItem,
      onClick: C.bind(null, "log")
    }, React.createElement("div", {
      className: $_3401.iconBox
    }, a.includes("log") && React.createElement($_13_index.j, {
      type: "icon-selected"
    })), $_710$a$formatMessage({
      id: "show"
    }), $_710$a$formatMessage({
      id: "consoleLog"
    })))
  }, React.createElement($_748_index.a, {
    placement: "top",
    title: $_710$a$formatMessage({
      id: "consoleFilter"
    }),
    trigger: "hover"
  }, React.createElement("span", {
    className: $_3401.filterIcon,
    onClick: function () {
      T(true, false)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-filter"
  })))), React.createElement($_748_index.a, {
    placement: "top",
    title: $_710$a$formatMessage({
      id: "consolClear"
    }),
    trigger: "hover"
  }, React.createElement("div", {
    className: $_3401.clearIcon,
    onClick: function () {
      $_26_index.z.stopWarningAnimation()
      b($$_$$_$$_$$_src_editor_redux_common_actions.Sg())
      T(false, true)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-clear"
  }))), React.createElement("div", {
    className: $_3401.closeIcon,
    onClick: e$onClose
  }, React.createElement($_13_index.j, {
    type: "icon-close-bold"
  })))), React.createElement("div", {
    className: $_3401.main,
    ref: p
  }, React.createElement("ul", null, r.map(function (e, t) {
    return a.includes(e.get("type")) ? React.createElement("li", {
      key: t,
      className: N(u === t && $_3401.active),
      onClick: w.bind(null, e.toJSON(), t),
      "data-console-type": e.get("type")
    }, React.createElement("p", null, (n = e.get("message"), ("print" === (r = e.get("type")) || "customError" === r || "customWarning" === r ? "<".concat($_710$a$formatMessage({
      id: r
    }), ">") : "") + n))) : null
    var n
    var r
  }))))
})
export { DS }
