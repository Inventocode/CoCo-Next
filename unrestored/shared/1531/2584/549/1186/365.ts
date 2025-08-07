"use strict";

export { C as a };
export { h as b };
export { E as c };
export { w as d };
var r;
import i = require("react");
require("../../50/index");
import o = require("../../548/1183/100");
import a = require("../../548/1183/270/1509");
import s = require("../../548/1183/270/153/index");
import c = require("../../95");
import u = require("../../96");
import l = require("../../322");
import f = require("../../273");
import d = require("../../120");
!function (e) {
  e.HOURS = "hours";
  e.MINUTES = "minutes";
  e.SECONDS = "seconds";
}(r || (r = {}));
var h = r;
var p = function (e) {
  function t() {
    var e;
    var n;
    c.a(this, t);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (n = l.a(this, (e = f.a(t)).call.apply(e, [this].concat(i)))).state = {
      toAnimateTransform: false,
      previousType: undefined
    };
    n.getAngleStyle = function () {
      var e = n.props;
      var t = e.value;
      var r = e.isInner;
      var i = e.type;
      var o = 360 / (i === h.HOURS ? 12 : 60) * t;
      if (i === h.HOURS && t > 12) {
        o -= 360;
      }
      return {
        height: r ? "26%" : "40%",
        transform: "rotateZ(".concat(o, "deg)")
      };
    };
    return n;
  }
  d.a(t, e);
  u.a(t, [{
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.classes;
      var n = e.hasSelected;
      return i.createElement("div", {
        style: this.getAngleStyle(),
        className: o.a(t.pointer, this.state.toAnimateTransform && t.animateTransform)
      }, i.createElement("div", {
        className: o.a(t.thumb, n && t.noPoint)
      }));
    }
  }]);
  return t;
}(i.Component);
p.getDerivedStateFromProps = function (e, t) {
  return e.type !== t.previousType ? {
    toAnimateTransform: true,
    previousType: e.type
  } : {
    toAnimateTransform: false,
    previousType: e.type
  };
};
var _ = s.a(function (e) {
  return a.a({
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
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 1;
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
    c.a(this, t);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) {
      i[o] = arguments[o];
    }
    (n = l.a(this, (e = f.a(t)).call.apply(e, [this].concat(i)))).isMoving = false;
    n.handleTouchMove = function (e) {
      n.isMoving = true;
      n.setTime(e);
    };
    n.handleTouchEnd = function (e) {
      if (n.isMoving) {
        n.setTime(e, true);
        n.isMoving = false;
      }
    };
    n.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if ("undefined" === typeof e.buttons ? 1 === e.nativeEvent.which : 1 === e.buttons) {
        n.setTime(e.nativeEvent, false);
      }
    };
    n.handleMouseUp = function (e) {
      if (n.isMoving) {
        n.isMoving = false;
      }
      n.setTime(e.nativeEvent, true);
    };
    n.hasSelected = function () {
      var e = n.props;
      var t = e.type;
      var r = e.value;
      return t === h.HOURS || r % 5 === 0;
    };
    return n;
  }
  d.a(t, e);
  u.a(t, [{
    key: "setTime",
    value: function (e) {
      var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      var n = e.offsetX;
      var r = e.offsetY;
      if ("undefined" === typeof n) {
        var i = e.target.getBoundingClientRect();
        n = e.changedTouches[0].clientX - i.left;
        r = e.changedTouches[0].clientY - i.top;
      }
      var o = this.props.type === h.SECONDS || this.props.type === h.MINUTES ? b(n, r, this.props.minutesStep) : y(n, r, Boolean(this.props.ampm));
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
      var a = !e.ampm && o === h.HOURS && (n < 1 || n > 12);
      return i.createElement("div", {
        className: t.container
      }, i.createElement("div", {
        className: t.clock
      }, i.createElement("div", {
        role: "menu",
        tabIndex: -1,
        className: t.squareMask,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onMouseUp: this.handleMouseUp,
        onMouseMove: this.handleMove
      }), i.createElement("div", {
        className: t.pin
      }), i.createElement(_, {
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
  ampm: false,
  minutesStep: 1
};
var C = s.a(function (e) {
  return a.a({
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