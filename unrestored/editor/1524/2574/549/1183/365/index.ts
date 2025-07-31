"use strict";

export { C as a };
export { d as b };
export { E as c };
export { w as d };
var r;
var i = require("../../../0/index");
require("../../../50/index");
var o = require("../../../548/1180/100");
var a = require("./1502");
var s = require("../../../548/1180/691/153");
var c = require("../../../95");
var u = require("../../../96");
var l = require("../../../322");
var f = require("../../../273");
var h = require("../../../120");
!function (e) {
  e.HOURS = "hours";
  e.MINUTES = "minutes";
  e.SECONDS = "seconds";
}(r || (r = {}));
var d = r;
var p = function (e) {
  function t() {
    var e;
    var n;
    Object(c.a)(this, t);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (n = Object(l.a)(this, (e = Object(f.a)(t)).call.apply(e, [this].concat(i)))).state = {
      toAnimateTransform: !1,
      previousType: void 0
    };
    n.getAngleStyle = function () {
      var e = n.props;
      var t = e.value;
      var r = e.isInner;
      var i = e.type;
      var o = 360 / (i === d.HOURS ? 12 : 60) * t;
      if (i === d.HOURS && t > 12) {
        o -= 360;
      }
      return {
        height: r ? "26%" : "40%",
        transform: "rotateZ(".concat(o, "deg)")
      };
    };
    return n;
  }
  Object(h.a)(t, e);
  Object(u.a)(t, [{
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.classes;
      var n = e.hasSelected;
      return Object(i.createElement)("div", {
        style: this.getAngleStyle(),
        className: Object(o.a)(t.pointer, this.state.toAnimateTransform && t.animateTransform)
      }, Object(i.createElement)("div", {
        className: Object(o.a)(t.thumb, n && t.noPoint)
      }));
    }
  }]);
  return t;
}(i.Component);
p.getDerivedStateFromProps = function (e, t) {
  return e.type !== t.previousType ? {
    toAnimateTransform: !0,
    previousType: e.type
  } : {
    toAnimateTransform: !1,
    previousType: e.type
  };
};
var _ = Object(s.a)(function (e) {
  return Object(a.a)({
    pointer: {
      width: 2,
      backgroundColor: e.palette.primary.main,
      position: "absolute",
      left: "calc(50% - 1px)",
      bottom: "50%",
      transformOrigin: "center bottom 0px"
    },
    animateTransform: {
      transition: e.transitions.create(["transform", "height"])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: e.palette.primary.contrastText,
      borderRadius: "100%",
      position: "absolute",
      top: -21,
      left: -15,
      border: "14px solid ".concat(e.palette.primary.main),
      boxSizing: "content-box"
    },
    noPoint: {
      backgroundColor: e.palette.primary.main
    }
  });
}, {
  name: "MuiPickersClockPointer"
})(p);
var A = {
  x: 130,
  y: 130
};
var g = A.x - A.x;
var v = 0 - A.y;
var m = function (e, t, n) {
  var r = t - A.x;
  var i = n - A.y;
  var o = Math.atan2(g, v) - Math.atan2(r, i);
  var a = 57.29577951308232 * o;
  a = Math.round(a / e) * e;
  a %= 360;
  var s = Math.floor(a / e) || 0;
  var c = Math.pow(r, 2) + Math.pow(i, 2);
  return {
    value: s,
    distance: Math.sqrt(c)
  };
};
var y = function (e, t, n) {
  var r = m(30, e, t);
  var i = r.value;
  var o = r.distance;
  i = i || 12;
  if (n) {
    i %= 12;
  } else {
    if (o < 90) {
      i += 12;
      i %= 24;
    }
  }
  return i;
};
var b = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  var r = 6 * n;
  var i = m(r, e, t);
  var o = i.value;
  return o = o * n % 60;
};
var w = function (e, t) {
  return t.getHours(e) >= 12 ? "pm" : "am";
};
var E = function (e, t, n, r) {
  if (n && (r.getHours(e) >= 12 ? "pm" : "am") !== t) {
    var i = "am" === t ? r.getHours(e) - 12 : r.getHours(e) + 12;
    return r.setHours(e, i);
  }
  return e;
};
var x = function (e) {
  function t() {
    var e;
    var n;
    Object(c.a)(this, t);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (n = Object(l.a)(this, (e = Object(f.a)(t)).call.apply(e, [this].concat(i)))).isMoving = !1;
    n.handleTouchMove = function (e) {
      n.isMoving = !0;
      n.setTime(e);
    };
    n.handleTouchEnd = function (e) {
      if (n.isMoving) {
        n.setTime(e, !0);
        n.isMoving = !1;
      }
    };
    n.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if ("undefined" === typeof e.buttons ? 1 === e.nativeEvent.which : 1 === e.buttons) {
        n.setTime(e.nativeEvent, !1);
      }
    };
    n.handleMouseUp = function (e) {
      if (n.isMoving) {
        n.isMoving = !1;
      }
      n.setTime(e.nativeEvent, !0);
    };
    n.hasSelected = function () {
      var e = n.props;
      var t = e.type;
      var r = e.value;
      return t === d.HOURS || r % 5 === 0;
    };
    return n;
  }
  Object(h.a)(t, e);
  Object(u.a)(t, [{
    key: "setTime",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var n = e.offsetX;
      var r = e.offsetY;
      if ("undefined" === typeof n) {
        var i = e.target.getBoundingClientRect();
        n = e.changedTouches[0].clientX - i.left;
        r = e.changedTouches[0].clientY - i.top;
      }
      var o = this.props.type === d.SECONDS || this.props.type === d.MINUTES ? b(n, r, this.props.minutesStep) : y(n, r, Boolean(this.props.ampm));
      this.props.onChange(o, t);
    }
  }, {
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.classes;
      var n = e.value;
      var r = e.children;
      var o = e.type;
      var a = !e.ampm && o === d.HOURS && (n < 1 || n > 12);
      return Object(i.createElement)("div", {
        className: t.container
      }, Object(i.createElement)("div", {
        className: t.clock
      }, Object(i.createElement)("div", {
        role: "menu",
        tabIndex: -1,
        className: t.squareMask,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onMouseUp: this.handleMouseUp,
        onMouseMove: this.handleMove
      }), Object(i.createElement)("div", {
        className: t.pin
      }), Object(i.createElement)(_, {
        type: o,
        value: n,
        isInner: a,
        hasSelected: this.hasSelected()
      }), r));
    }
  }]);
  return t;
}(i.Component);
x.defaultProps = {
  ampm: !1,
  minutesStep: 1
};
var C = Object(s.a)(function (e) {
  return Object(a.a)({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      margin: "".concat(e.spacing(2), "px 0 ").concat(e.spacing(1), "px")
    },
    clock: {
      backgroundColor: "rgba(0,0,0,.07)",
      borderRadius: "50%",
      height: 260,
      width: 260,
      position: "relative",
      pointerEvents: "none"
    },
    squareMask: {
      width: "100%",
      height: "100%",
      position: "absolute",
      pointerEvents: "auto",
      outline: "none",
      touchActions: "none",
      userSelect: "none",
      "&:active": {
        cursor: "move"
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: e.palette.primary.main,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  });
}, {
  name: "MuiPickersClock"
})(x);
export default C;