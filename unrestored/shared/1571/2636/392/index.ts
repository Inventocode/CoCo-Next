/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：392
 */

"use strict"

export { COURSE_ICON_NAME as a }
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
import * as /* [auto-meaningful-name] */$$_627 from "../627"
import * as /* [auto-meaningful-name] */$$_710_index from "../710/index"
import * as /* [auto-meaningful-name] */$$_748_index from "../748/index"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_516 from "./516"
import /* [auto-meaningful-name] */_$_ from "./516"
var /* [auto-meaningful-name] */COURSE_ICON_NAME = "COURSE_ICON_NAME"
var _b
_b = React.memo(function () {
  var e = $$_16_index.d()
  var /* [auto-meaningful-name] */$$_710_index$a$formatMessage = $$_710_index.a().formatMessage
  return _React.createElement($$_748_index.a, {
    placement: "left",
    title: $$_710_index$a$formatMessage({
      id: "studyCourseVideo"
    }),
    trigger: ["hover"]
  }, _React.createElement("div", {
    className: _$_.courseMinIcon,
    onClick: function () {
      $$_627.a.show()
      e($$_$$_$$_$$_$$_src_editor_redux_common_actions.ii(COURSE_ICON_NAME, false))
    }
  }, _React.createElement($$_13_index.j, {
    type: "icon-video"
  }), _React.createElement("div", {
    className: _$_.close,
    onClick: function (t) {
      t.stopPropagation()
      $$_627.a.show()
      $$_627.a.close({
        closeAnimationPos: {
          x: 150,
          y: 30
        }
      })
      e($$_$$_$$_$$_$$_src_editor_redux_common_actions.Gh(COURSE_ICON_NAME))
    }
  }, _React.createElement($$_13_index.j, {
    type: "icon-close"
  }))))
})
export { _b as b }
export default COURSE_ICON_NAME
