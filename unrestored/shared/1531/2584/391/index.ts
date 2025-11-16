/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：391
 */

"use strict"

export { COURSE_ICON_NAME as a }
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
import * as /* [auto-meaningful-name] */$$_623 from "../623"
import * as /* [auto-meaningful-name] */$$_702 from "../702"
import * as /* [auto-meaningful-name] */$$_739_index from "../739/index"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_513 from "./513"
import /* [auto-meaningful-name] */_$_ from "./513"
var /* [auto-meaningful-name] */COURSE_ICON_NAME = "COURSE_ICON_NAME"
var _b
_b = React.memo(function () {
  var e = $$_16_index.d()
  var /* [auto-meaningful-name] */$$_702$a$formatMessage = $$_702.a().formatMessage
  return _React.createElement($$_739_index.a, {
    placement: "left",
    title: $$_702$a$formatMessage({
      id: "studyCourseVideo"
    }),
    trigger: ["hover"]
  }, _React.createElement("div", {
    className: _$_.courseMinIcon,
    onClick: function () {
      $$_623.a.show()
      e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ii(COURSE_ICON_NAME, false))
    }
  }, _React.createElement($$_13_index.j, {
    type: "icon-video"
  }), _React.createElement("div", {
    className: _$_.close,
    onClick: function (t) {
      t.stopPropagation()
      $$_623.a.show()
      $$_623.a.close({
        closeAnimationPos: {
          x: 150,
          y: 30
        }
      })
      e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Gh(COURSE_ICON_NAME))
    }
  }, _React.createElement($$_13_index.j, {
    type: "icon-close"
  }))))
})
export { _b as b }
export default COURSE_ICON_NAME
