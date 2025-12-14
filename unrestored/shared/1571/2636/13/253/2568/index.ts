/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2568
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.Raised = undefined
var r = s(require("react"))
var i = s(require("../../../50/index"))
var o = s(require("../../797/101/index"))
var a = s(require("./2569/index"))
function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var c = exports.Raised = function (e) {
  var /* [auto-meaningful-name] */e$zDepth = e.zDepth
  var /* [auto-meaningful-name] */e$radius = e.radius
  var /* [auto-meaningful-name] */e$background = e.background
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$styles = e.styles
  var u = undefined === e$styles ? {} : e$styles
  var l = (0, o.default)((0, a.default)({
    default: {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + e$zDepth + "px " + 4 * e$zDepth + "px rgba(0,0,0,.24)",
        borderRadius: e$radius,
        background: e$background
      }
    },
    "zDepth-0": {
      bg: {
        boxShadow: "none"
      }
    },
    "zDepth-1": {
      bg: {
        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
      }
    },
    "zDepth-2": {
      bg: {
        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
      }
    },
    "zDepth-3": {
      bg: {
        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
      }
    },
    "zDepth-4": {
      bg: {
        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
      }
    },
    "zDepth-5": {
      bg: {
        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
      }
    },
    square: {
      bg: {
        borderRadius: "0"
      }
    },
    circle: {
      bg: {
        borderRadius: "50%"
      }
    }
  }, u), {
    "zDepth-1": 1 === e$zDepth
  })
  return r.default.createElement("div", {
    style: l.wrap
  }, r.default.createElement("div", {
    style: l.bg
  }), r.default.createElement("div", {
    style: l.content
  }, e$children))
}
c.propTypes = {
  background: i.default.string,
  zDepth: i.default.oneOf([0, 1, 2, 3, 4, 5]),
  radius: i.default.number,
  styles: i.default.object
}
c.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
}
exports.default = c
