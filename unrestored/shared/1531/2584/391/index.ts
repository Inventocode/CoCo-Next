/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：391
 */

"use strict"

export { COURSE_ICON_NAME as a }
import /* [auto-meaningful-name] */React = require("react")
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import /* [auto-meaningful-name] */$$_16_index = require("../16/index")
import /* [auto-meaningful-name] */$$_623 = require("../623")
import /* [auto-meaningful-name] */$$_702 = require("../702")
import /* [auto-meaningful-name] */$$_739_index = require("../739/index")
import /* [auto-meaningful-name] */$$_13_index = require("../13/index")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper = require("../../../../../src/shared/events/messages-wrapper")
import /* [auto-meaningful-name] */$_513 = require("./513")
var p = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_513)
var /* [auto-meaningful-name] */COURSE_ICON_NAME = "COURSE_ICON_NAME"
var _b
_b = React.memo(function () {
  var e = $$_16_index.d()
  var /* [auto-meaningful-name] */$$_702$a$formatMessage = $$_702.a().formatMessage
  return o.a.createElement($$_739_index.a, {
    placement: "left",
    title: $$_702$a$formatMessage({
      id: "studyCourseVideo"
    }),
    trigger: ["hover"]
  }, o.a.createElement("div", {
    className: p.a.courseMinIcon,
    onClick: function () {
      $$_623.a.show()
      e($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ii(COURSE_ICON_NAME, false))
    }
  }, o.a.createElement($$_13_index.j, {
    type: "icon-video"
  }), o.a.createElement("div", {
    className: p.a.close,
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
  }, o.a.createElement($$_13_index.j, {
    type: "icon-close"
  }))))
})
export { _b as b }
export default COURSE_ICON_NAME
