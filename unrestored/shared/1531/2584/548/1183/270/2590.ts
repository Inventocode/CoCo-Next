/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2590
 */

"use strict";

var r = require("../../../19");
var i = require("../../../54");
var o = require("react");
require("../../../50/index");
var a = require("../100");
var s = require("./153/index");
var c = require("./395");
var u = require("./2625/1507");
var l = require("./234");
var f = o.forwardRef(function (e, t) {
  var n = e.edge;
  var s = undefined !== n && n;
  var c = e.children;
  var f = e.classes;
  var d = e.className;
  var h = e.color;
  var p = undefined === h ? "default" : h;
  var _ = e.disabled;
  var A = undefined !== _ && _;
  var g = e.disableFocusRipple;
  var v = undefined !== g && g;
  var m = e.size;
  var y = undefined === m ? "medium" : m;
  var b = i.a(e, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
  return o.createElement(u.a, r.a({
    className: a.a(f.root, d, "default" !== p && f["color".concat(l.a(p))], A && f.disabled, "small" === y && f["size".concat(l.a(y))], {
      start: f.edgeStart,
      end: f.edgeEnd
    }[s]),
    centerRipple: true,
    focusRipple: !v,
    disabled: A,
    ref: t
  }, b), o.createElement("span", {
    className: f.label
  }, c));
});
exports.a = s.a(function (e) {
  return {
    root: {
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: e.typography.pxToRem(24),
      padding: 12,
      borderRadius: "50%",
      overflow: "visible",
      color: e.palette.action.active,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest
      }),
      "&:hover": {
        backgroundColor: c.a(e.palette.action.active, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        backgroundColor: "transparent",
        color: e.palette.action.disabled
      }
    },
    edgeStart: {
      marginLeft: -12,
      "$sizeSmall&": {
        marginLeft: -3
      }
    },
    edgeEnd: {
      marginRight: -12,
      "$sizeSmall&": {
        marginRight: -3
      }
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: e.palette.primary.main,
      "&:hover": {
        backgroundColor: c.a(e.palette.primary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    colorSecondary: {
      color: e.palette.secondary.main,
      "&:hover": {
        backgroundColor: c.a(e.palette.secondary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    disabled: {},
    sizeSmall: {
      padding: 3,
      fontSize: e.typography.pxToRem(18)
    },
    label: {
      width: "100%",
      display: "flex",
      alignItems: "inherit",
      justifyContent: "inherit"
    }
  };
}, {
  name: "MuiIconButton"
})(f);