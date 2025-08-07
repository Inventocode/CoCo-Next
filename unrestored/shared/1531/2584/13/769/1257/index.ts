"use strict";

var r = require("../568");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEventFromHandle = function (e, t) {
  try {
    return Object.keys(t).some(function (n) {
      return e.target === (0, o.findDOMNode)(t[n]);
    });
  } catch (n) {
    return false;
  }
};
exports.isValueOutOfRange = function (e, t) {
  var n = t.min;
  var r = t.max;
  return e < n || e > r;
};
exports.isNotTouchEvent = function (e) {
  return e.touches.length > 1 || "touchend" === e.type.toLowerCase() && e.touches.length > 0;
};
exports.getClosestPoint = s;
exports.getPrecision = c;
exports.getMousePosition = function (e, t) {
  return e ? t.clientY : t.pageX;
};
exports.getTouchPosition = function (e, t) {
  return e ? t.touches[0].clientY : t.touches[0].pageX;
};
exports.getHandleCenterPosition = function (e, t) {
  var n = t.getBoundingClientRect();
  return e ? n.top + .5 * n.height : window.pageXOffset + n.left + .5 * n.width;
};
exports.ensureValueInRange = function (e, t) {
  var n = t.max;
  var r = t.min;
  if (e <= r) {
    return r;
  }
  if (e >= n) {
    return n;
  }
  return e;
};
exports.ensureValuePrecision = function (e, t) {
  var n = t.step;
  var r = isFinite(s(e, t)) ? s(e, t) : 0;
  return null === n ? r : parseFloat(r.toFixed(c(n)));
};
exports.pauseEvent = function (e) {
  e.stopPropagation();
  e.preventDefault();
};
exports.calculateNextValue = u;
exports.getKeyboardValueMutator = function (e, t, n) {
  var r = "increase";
  switch (e.keyCode) {
    case a.default.UP:
      r = t && n ? "decrease" : "increase";
      break;
    case a.default.RIGHT:
      r = !t && n ? "decrease" : "increase";
      break;
    case a.default.DOWN:
      r = t && n ? "increase" : "decrease";
      break;
    case a.default.LEFT:
      r = !t && n ? "increase" : "decrease";
      break;
    case a.default.END:
      return function (e, t) {
        return t.max;
      };
    case a.default.HOME:
      return function (e, t) {
        return t.min;
      };
    case a.default.PAGE_UP:
      return function (e, t) {
        return e + 2 * t.step;
      };
    case a.default.PAGE_DOWN:
      return function (e, t) {
        return e - 2 * t.step;
      };
    default:
      return;
  }
  return function (e, t) {
    return u(r, e, t);
  };
};
var i = r(require("./1511/index"));
var o = require("../../../75/index");
var a = r(require("./1765"));
function s(e, t) {
  var n = t.marks;
  var r = t.step;
  var o = t.min;
  var a = t.max;
  var s = Object.keys(n).map(parseFloat);
  if (null !== r) {
    var c = Math.floor((a - o) / r);
    var u = Math.min((e - o) / r, c);
    var l = Math.round(u) * r + o;
    s.push(l);
  }
  var f = s.map(function (t) {
    return Math.abs(e - t);
  });
  return s[f.indexOf(Math.min.apply(Math, (0, i.default)(f)))];
}
function c(e) {
  var t = e.toString();
  var n = 0;
  if (t.indexOf(".") >= 0) {
    n = t.length - t.indexOf(".") - 1;
  }
  return n;
}
function u(e, t, n) {
  var r = {
    increase: function (e, t) {
      return e + t;
    },
    decrease: function (e, t) {
      return e - t;
    }
  };
  var i = r[e](Object.keys(n.marks).indexOf(JSON.stringify(t)), 1);
  var o = Object.keys(n.marks)[i];
  return n.step ? r[e](t, n.step) : Object.keys(n.marks).length && n.marks[o] ? n.marks[o] : t;
}