/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：391
 */

"use strict"

export { f as a }
import React = require("react");
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
import i = require("../16/index");
import a = require("../623");
import s = require("../702");
import c = require("../739/index");
import l = require("../13/index");
import u = require("../../../../../src/shared/events/messages-wrapper");
import d = require("./513");
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
}(d)
var f = "COURSE_ICON_NAME"
var _b
_b = React.memo(function () {
  var e = i.d()
  var s$a$formatMessage = s.a().formatMessage
  return o.a.createElement(c.a, {
    placement: "left",
    title: s$a$formatMessage({
      id: "studyCourseVideo"
    }),
    trigger: ["hover"]
  }, o.a.createElement("div", {
    className: p.a.courseMinIcon,
    onClick: function () {
      a.a.show()
      e(u.ii(f, false))
    }
  }, o.a.createElement(l.j, {
    type: "icon-video"
  }), o.a.createElement("div", {
    className: p.a.close,
    onClick: function (t) {
      t.stopPropagation()
      a.a.show()
      a.a.close({
        closeAnimationPos: {
          x: 150,
          y: 30
        }
      })
      e(u.Gh(f))
    }
  }, o.a.createElement(l.j, {
    type: "icon-close"
  }))))
})
export { _b as b }
export default f
