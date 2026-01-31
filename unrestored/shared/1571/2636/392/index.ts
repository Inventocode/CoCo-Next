/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：392
 */

"use strict"

export { COURSE_ICON_NAME as a }
import { memo } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import { useDispatch } from "react-redux"
import * as /* [auto-meaningful-name] */$$_627_index from "../627/index"
import * as /* [auto-meaningful-name] */$$_710 from "../710"
import * as /* [auto-meaningful-name] */$$_748_index from "../748/index"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_516 from "./516"
import /* [auto-meaningful-name] */$_5161 from "./516"
var /* [auto-meaningful-name] */COURSE_ICON_NAME = "COURSE_ICON_NAME"
var _b
_b = memo(function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */$$_710$a$formatMessage = $$_710.a().formatMessage
  return React1.createElement($$_748_index.a, {
    placement: "left",
    title: $$_710$a$formatMessage({
      id: "studyCourseVideo"
    }),
    trigger: ["hover"]
  }, React1.createElement("div", {
    className: $_5161.courseMinIcon,
    onClick: function () {
      $$_627_index.a.show()
      e($$_$$_$$_$$_$$_src_editor_redux_common_actions.ii(COURSE_ICON_NAME, false))
    }
  }, React1.createElement($$_13_index.j, {
    type: "icon-video"
  }), React1.createElement("div", {
    className: $_5161.close,
    onClick: function (t) {
      t.stopPropagation()
      $$_627_index.a.show()
      $$_627_index.a.close({
        closeAnimationPos: {
          x: 150,
          y: 30
        }
      })
      e($$_$$_$$_$$_$$_src_editor_redux_common_actions.Gh(COURSE_ICON_NAME))
    }
  }, React1.createElement($$_13_index.j, {
    type: "icon-close"
  }))))
})
export { _b as b }
export default COURSE_ICON_NAME
