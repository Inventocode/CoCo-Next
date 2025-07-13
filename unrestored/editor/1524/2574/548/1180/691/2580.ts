"use strict";

import * as r from "../../../19";
import * as i from "../../../54";
import * as o from "../../../0/index";
var a = (require("../../../50/index"), require("../100"));
import * as s from "./153";
import * as c from "../270/395";
import * as u from "../../../549/1183/315/2615/1500";
import * as l from "./234";
var f = o.forwardRef(function (e, t) {
  var n = e.edge;
  var s = void 0 !== n && n;
  var c = e.children;
  var f = e.classes;
  var h = e.className;
  var d = e.color;
  var p = void 0 === d ? "default" : d;
  var _ = e.disabled;
  var A = void 0 !== _ && _;
  var g = e.disableFocusRipple;
  var v = void 0 !== g && g;
  var m = e.size;
  var y = void 0 === m ? "medium" : m;
  var b = Object(i.a)(e, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
  return o.createElement(u.a, Object(r.a)({
    className: Object(a.a)(f.root, h, "default" !== p && f["color".concat(Object(l.a)(p))], A && f.disabled, "small" === y && f["size".concat(Object(l.a)(y))], {
      start: f.edgeStart,
      end: f.edgeEnd
    }[s]),
    centerRipple: !0,
    focusRipple: !v,
    disabled: A,
    ref: t
  }, b), o.createElement("span", {
    className: f.label
  }, c));
});
exports.a = Object(s.a)(function (e) {
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
        backgroundColor: Object(c.a)(e.palette.action.active, e.palette.action.hoverOpacity),
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
        backgroundColor: Object(c.a)(e.palette.primary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    colorSecondary: {
      color: e.palette.secondary.main,
      "&:hover": {
        backgroundColor: Object(c.a)(e.palette.secondary.main, e.palette.action.hoverOpacity),
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