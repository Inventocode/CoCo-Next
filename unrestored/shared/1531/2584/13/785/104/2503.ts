"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoprefix = undefined;
var r;
var i = require("./2483/1142/index");
var o = (r = i) && r.__esModule ? r : {
  default: r
};
var a = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
var s = {
  borderRadius: function (e) {
    return {
      msBorderRadius: e,
      MozBorderRadius: e,
      OBorderRadius: e,
      WebkitBorderRadius: e,
      borderRadius: e
    };
  },
  boxShadow: function (e) {
    return {
      msBoxShadow: e,
      MozBoxShadow: e,
      OBoxShadow: e,
      WebkitBoxShadow: e,
      boxShadow: e
    };
  },
  userSelect: function (e) {
    return {
      WebkitTouchCallout: e,
      KhtmlUserSelect: e,
      MozUserSelect: e,
      msUserSelect: e,
      WebkitUserSelect: e,
      userSelect: e
    };
  },
  flex: function (e) {
    return {
      WebkitBoxFlex: e,
      MozBoxFlex: e,
      WebkitFlex: e,
      msFlex: e,
      flex: e
    };
  },
  flexBasis: function (e) {
    return {
      WebkitFlexBasis: e,
      flexBasis: e
    };
  },
  justifyContent: function (e) {
    return {
      WebkitJustifyContent: e,
      justifyContent: e
    };
  },
  transition: function (e) {
    return {
      msTransition: e,
      MozTransition: e,
      OTransition: e,
      WebkitTransition: e,
      transition: e
    };
  },
  transform: function (e) {
    return {
      msTransform: e,
      MozTransform: e,
      OTransform: e,
      WebkitTransform: e,
      transform: e
    };
  },
  absolute: function (e) {
    var t = e && e.split(" ");
    return {
      position: "absolute",
      top: t && t[0],
      right: t && t[1],
      bottom: t && t[2],
      left: t && t[3]
    };
  },
  extend: function (e, t) {
    var n = t[e];
    return n || {
      extend: e
    };
  }
};
var c = exports.autoprefix = function (e) {
  var t = {};
  (0, o.default)(e, function (e, n) {
    var r = {};
    (0, o.default)(e, function (e, t) {
      var n = s[t];
      if (n) {
        r = a({}, r, n(e));
      } else {
        r[t] = e;
      }
    });
    t[n] = r;
  });
  return t;
};
exports.default = c;