"use strict";

var r = require("../../19");
var i = require("../../108");
var o = require("../../20");
var a = require("../../54");
var s = require("react");
var c = require("../../95");
var u = require("../../96");
var l = require("../../103");
var f = require("../../120");
var d = require("../../140");
var h = require("../../75/index");
var p = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(h);
var _ = require("../../1026/413");
function A(e, t) {
  return !!e && e.contains(t);
}
var g = require("./1009");
var v = require("../../1026/690");
var m = require("./916");
var y = require("../../2627/462");
var b = Object(s.forwardRef)(function (e, t) {
  var n = e.didUpdate;
  var r = e.getContainer;
  var i = e.children;
  var o = Object(s.useRef)();
  Object(s.useImperativeHandle)(t, function () {
    return {};
  });
  var a = Object(s.useRef)(!1);
  if (!a.current && Object(y.a)()) {
    o.current = r();
    a.current = !0;
  }
  Object(s.useEffect)(function () {
    if (!(null === n || void 0 === n)) {
      n(e);
    }
  });
  Object(s.useEffect)(function () {
    return function () {
      var e;
      var t;
      if (!(null === (e = o.current) || void 0 === e || null === (t = e.parentNode) || void 0 === t)) {
        t.removeChild(o.current);
      }
    };
  }, []);
  return o.current ? p.a.createPortal(i, o.current) : null;
});
var w = require("../../8");
var E = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(w);
function x(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
var C = require("../../33/index");
var O = require("../../2627/790/684");
function k(e) {
  var t = e.prefixCls;
  var n = e.motion;
  var r = e.animation;
  var i = e.transitionName;
  return n || (r ? {
    motionName: "".concat(t, "-").concat(r)
  } : i ? {
    motionName: i
  } : null);
}
function S(e) {
  var t = e.prefixCls;
  var n = e.visible;
  var i = e.zIndex;
  var a = e.mask;
  var c = e.maskMotion;
  var u = e.maskAnimation;
  var l = e.maskTransitionName;
  if (!a) {
    return null;
  }
  var f = {};
  if (c || l || u) {
    f = Object(o.a)({
      motionAppear: !0
    }, k({
      motion: c,
      prefixCls: t,
      transitionName: l,
      animation: u
    }));
  }
  return s.createElement(O.a, Object(r.a)({}, f, {
    visible: n,
    removeOnLeave: !0
  }), function (e) {
    var n = e.className;
    return s.createElement("div", {
      style: {
        zIndex: i
      },
      className: E()("".concat(t, "-mask"), n)
    });
  });
}
var T = require("../../1500/555/index");
var B = require("../../110");
var D = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(B);
var I = require("../../171");
var F = ["measure", "align", null, "motion"];
var R = s.forwardRef(function (e, t) {
  var n = e.visible;
  var i = e.prefixCls;
  var a = e.className;
  var c = e.style;
  var u = e.children;
  var l = e.zIndex;
  var f = e.stretch;
  var d = e.destroyPopupOnHide;
  var h = e.forceRender;
  var p = e.align;
  var A = e.point;
  var g = e.getRootDomNode;
  var v = e.getClassNameFromAlign;
  var m = e.onAlign;
  var y = e.onMouseEnter;
  var b = e.onMouseLeave;
  var w = e.onMouseDown;
  var x = e.onTouchStart;
  var S = Object(s.useRef)();
  var B = Object(s.useRef)();
  var R = Object(s.useState)();
  var P = Object(C.a)(R, 2);
  var N = P[0];
  var M = P[1];
  var j = function (e) {
    var t = s.useState({
      width: 0,
      height: 0
    });
    var n = Object(C.a)(t, 2);
    var r = n[0];
    var i = n[1];
    return [s.useMemo(function () {
      var t = {};
      if (e) {
        var n = r.width;
        var i = r.height;
        if (-1 !== e.indexOf("height") && i) {
          t.height = i;
        } else {
          if (-1 !== e.indexOf("minHeight") && i) {
            t.minHeight = i;
          }
        }
        if (-1 !== e.indexOf("width") && n) {
          t.width = n;
        } else {
          if (-1 !== e.indexOf("minWidth") && n) {
            t.minWidth = n;
          }
        }
      }
      return t;
    }, [e, r]), function (e) {
      i({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
    }];
  }(f);
  var L = Object(C.a)(j, 2);
  var U = L[0];
  var H = L[1];
  var V = function (e, t) {
    var n = Object(s.useState)(null);
    var r = Object(C.a)(n, 2);
    var i = r[0];
    var o = r[1];
    var a = Object(s.useRef)();
    var c = Object(s.useRef)(!1);
    function u(e) {
      if (!c.current) {
        o(e);
      }
    }
    function l() {
      _.a.cancel(a.current);
    }
    Object(s.useEffect)(function () {
      u("measure");
    }, [e]);
    Object(s.useEffect)(function () {
      switch (i) {
        case "measure":
          t();
      }
      if (i) {
        a.current = Object(_.a)(Object(I.a)(D.a.mark(function e() {
          var t;
          var n;
          return D.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = F.indexOf(i);
                  if ((n = F[t + 1]) && -1 !== t) {
                    u(n);
                  }
                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })));
      }
    }, [i]);
    Object(s.useEffect)(function () {
      return function () {
        c.current = !0;
        l();
      };
    }, []);
    return [i, function (e) {
      l();
      a.current = Object(_.a)(function () {
        u(function (e) {
          switch (i) {
            case "align":
              return "motion";
            case "motion":
              return "stable";
          }
          return e;
        });
        if (!(null === e || void 0 === e)) {
          e();
        }
      });
    }];
  }(n, function () {
    if (f) {
      H(g());
    }
  });
  var G = Object(C.a)(V, 2);
  var z = G[0];
  var Q = G[1];
  var W = Object(s.useRef)();
  function K() {
    var e;
    if (!(null === (e = S.current) || void 0 === e)) {
      e.forceAlign();
    }
  }
  function X(e, t) {
    var n = v(t);
    if (N !== n) {
      M(n);
    }
    if ("align" === z) {
      if (N !== n) {
        Promise.resolve().then(function () {
          K();
        });
      } else {
        Q(function () {
          var e;
          if (!(null === (e = W.current) || void 0 === e)) {
            e.call(W);
          }
        });
      }
      if (!(null === m || void 0 === m)) {
        m(e, t);
      }
    }
  }
  var Y = Object(o.a)({}, k(e));
  function q() {
    return new Promise(function (e) {
      W.current = e;
    });
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = Y[e];
    Y[e] = function (e, n) {
      Q();
      return null === t || void 0 === t ? void 0 : t(e, n);
    };
  });
  s.useEffect(function () {
    if (!(Y.motionName || "motion" !== z)) {
      Q();
    }
  }, [Y.motionName, z]);
  s.useImperativeHandle(t, function () {
    return {
      forceAlign: K,
      getElement: function () {
        return B.current;
      }
    };
  });
  var $ = Object(o.a)(Object(o.a)({}, U), {}, {
    zIndex: l,
    opacity: "motion" !== z && "stable" !== z && n ? 0 : void 0,
    pointerEvents: "stable" === z ? void 0 : "none"
  }, c);
  var J = !0;
  if (!(!(null === p || void 0 === p ? void 0 : p.points) || "align" !== z && "stable" !== z)) {
    J = !1;
  }
  var Z = u;
  if (s.Children.count(u) > 1) {
    Z = s.createElement("div", {
      className: "".concat(i, "-content")
    }, u);
  }
  return s.createElement(O.a, Object(r.a)({
    visible: n,
    ref: B,
    leavedClassName: "".concat(i, "-hidden")
  }, Y, {
    onAppearPrepare: q,
    onEnterPrepare: q,
    removeOnLeave: d,
    forceRender: h
  }), function (e, t) {
    var n = e.className;
    var r = e.style;
    var c = E()(i, a, N, n);
    return s.createElement(T.a, {
      target: A || g,
      key: "popup",
      ref: S,
      monitorWindowResize: !0,
      disabled: J,
      align: p,
      onAlign: X
    }, s.createElement("div", {
      ref: t,
      className: c,
      onMouseEnter: y,
      onMouseLeave: b,
      onMouseDownCapture: w,
      onTouchStartCapture: x,
      style: Object(o.a)(Object(o.a)({}, r), $)
    }, Z));
  });
});
R.displayName = "PopupInner";
var P = R;
var N = s.forwardRef(function (e, t) {
  var n = e.prefixCls;
  var i = e.visible;
  var a = e.zIndex;
  var c = e.children;
  var u = e.mobile;
  var l = (u = void 0 === u ? {} : u).popupClassName;
  var f = u.popupStyle;
  var d = u.popupMotion;
  var h = void 0 === d ? {} : d;
  var p = u.popupRender;
  var _ = s.useRef();
  s.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return _.current;
      }
    };
  });
  var A = Object(o.a)({
    zIndex: a
  }, f);
  var g = c;
  if (s.Children.count(c) > 1) {
    g = s.createElement("div", {
      className: "".concat(n, "-content")
    }, c);
  }
  if (p) {
    g = p(g);
  }
  return s.createElement(O.a, Object(r.a)({
    visible: i,
    ref: _,
    removeOnLeave: !0
  }, h), function (e, t) {
    var r = e.className;
    var i = e.style;
    var a = E()(n, l, r);
    return s.createElement("div", {
      ref: t,
      className: a,
      style: Object(o.a)(Object(o.a)({}, i), A)
    }, g);
  });
});
N.displayName = "MobilePopupInner";
var M = N;
var j = ["visible", "mobile"];
var L = s.forwardRef(function (e, t) {
  var n = e.visible;
  var i = e.mobile;
  var c = Object(a.a)(e, j);
  var u = Object(s.useState)(n);
  var l = Object(C.a)(u, 2);
  var f = l[0];
  var d = l[1];
  var h = Object(s.useState)(!1);
  var p = Object(C.a)(h, 2);
  var _ = p[0];
  var A = p[1];
  var g = Object(o.a)(Object(o.a)({}, c), {}, {
    visible: f
  });
  Object(s.useEffect)(function () {
    d(n);
    if (n && i) {
      A(function () {
        if ("undefined" === typeof navigator || "undefined" === typeof window) {
          return !1;
        }
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || void 0 === e ? void 0 : e.substr(0, 4)));
      }());
    }
  }, [n, i]);
  var v = _ ? s.createElement(M, Object(r.a)({}, g, {
    mobile: i,
    ref: t
  })) : s.createElement(P, Object(r.a)({}, g, {
    ref: t
  }));
  return s.createElement("div", null, s.createElement(S, g), v);
});
L.displayName = "Popup";
var U = L;
var H = s.createContext(null);
function V() {}
function G() {
  return "";
}
function z(e) {
  return e ? e.ownerDocument : window.document;
}
var Q = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
var W = function (e) {
  var t = function (t) {
    Object(f.a)(i, t);
    var n = Object(d.a)(i);
    function i(e) {
      var t;
      var o;
      Object(c.a)(this, i);
      (t = n.call(this, e)).popupRef = s.createRef();
      t.triggerRef = s.createRef();
      t.attachId = void 0;
      t.clickOutsideHandler = void 0;
      t.touchOutsideHandler = void 0;
      t.contextMenuOutsideHandler1 = void 0;
      t.contextMenuOutsideHandler2 = void 0;
      t.mouseDownTimeout = void 0;
      t.focusTime = void 0;
      t.preClickTime = void 0;
      t.preTouchTime = void 0;
      t.delayTimer = void 0;
      t.hasPopupMouseDown = void 0;
      t.onMouseEnter = function (e) {
        var n = t.props.mouseEnterDelay;
        t.fireEvents("onMouseEnter", e);
        t.delaySetPopupVisible(!0, n, n ? null : e);
      };
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e);
        t.setPoint(e);
      };
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e);
        t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
      };
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer();
      };
      t.onPopupMouseLeave = function (e) {
        var n;
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && A(null === (n = t.popupRef.current) || void 0 === n ? void 0 : n.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
        }
      };
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e);
        t.clearDelayTimer();
        if (t.isFocusToShow()) {
          t.focusTime = Date.now();
          t.delaySetPopupVisible(!0, t.props.focusDelay);
        }
      };
      t.onMouseDown = function (e) {
        t.fireEvents("onMouseDown", e);
        t.preClickTime = Date.now();
      };
      t.onTouchStart = function (e) {
        t.fireEvents("onTouchStart", e);
        t.preTouchTime = Date.now();
      };
      t.onBlur = function (e) {
        t.fireEvents("onBlur", e);
        t.clearDelayTimer();
        if (t.isBlurToHide()) {
          t.delaySetPopupVisible(!1, t.props.blurDelay);
        }
      };
      t.onContextMenu = function (e) {
        e.preventDefault();
        t.fireEvents("onContextMenu", e);
        t.setPopupVisible(!0, e);
      };
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close();
        }
      };
      t.onClick = function (e) {
        t.fireEvents("onClick", e);
        if (t.focusTime) {
          var n;
          if (t.preClickTime && t.preTouchTime) {
            n = Math.min(t.preClickTime, t.preTouchTime);
          } else {
            if (t.preClickTime) {
              n = t.preClickTime;
            } else {
              if (t.preTouchTime) {
                n = t.preTouchTime;
              }
            }
          }
          if (Math.abs(n - t.focusTime) < 20) {
            return;
          }
          t.focusTime = 0;
        }
        t.preClickTime = 0;
        t.preTouchTime = 0;
        if (t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault();
        }
        var r = !t.state.popupVisible;
        if (t.isClickToHide() && !r || r && t.isClickToShow()) {
          t.setPopupVisible(!t.state.popupVisible, e);
        }
      };
      t.onPopupMouseDown = function () {
        var e;
        t.hasPopupMouseDown = !0;
        clearTimeout(t.mouseDownTimeout);
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = !1;
        }, 0);
        if (t.context) {
          (e = t.context).onPopupMouseDown.apply(e, arguments);
        }
      };
      t.onDocumentClick = function (e) {
        if (!t.props.mask || t.props.maskClosable) {
          var n = e.target;
          var r = t.getRootDomNode();
          var i = t.getPopupDomNode();
          if (!(A(r, n) && !t.isContextMenuOnly() || A(i, n) || t.hasPopupMouseDown)) {
            t.close();
          }
        }
      };
      t.getRootDomNode = function () {
        var e = t.props.getTriggerDOMNode;
        if (e) {
          return e(t.triggerRef.current);
        }
        try {
          var n = Object(g.a)(t.triggerRef.current);
          if (n) {
            return n;
          }
        } catch (r) {}
        return p.a.findDOMNode(Object(l.a)(t));
      };
      t.getPopupClassNameFromAlign = function (e) {
        var n = [];
        var r = t.props;
        var i = r.popupPlacement;
        var o = r.builtinPlacements;
        var a = r.prefixCls;
        var s = r.alignPoint;
        var c = r.getPopupClassNameFromAlign;
        if (i && o) {
          n.push(function (e, t, n, r) {
            for (var i = n.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
              var s = o[a];
              if (x(e[s].points, i, r)) {
                return "".concat(t, "-placement-").concat(s);
              }
            }
            return "";
          }(o, a, e, s));
        }
        if (c) {
          n.push(c(e));
        }
        return n.join(" ");
      };
      t.getComponent = function () {
        var e = t.props;
        var n = e.prefixCls;
        var i = e.destroyPopupOnHide;
        var o = e.popupClassName;
        var a = e.onPopupAlign;
        var c = e.popupMotion;
        var u = e.popupAnimation;
        var l = e.popupTransitionName;
        var f = e.popupStyle;
        var d = e.mask;
        var h = e.maskAnimation;
        var p = e.maskTransitionName;
        var _ = e.maskMotion;
        var A = e.zIndex;
        var g = e.popup;
        var v = e.stretch;
        var m = e.alignPoint;
        var y = e.mobile;
        var b = e.forceRender;
        var w = t.state;
        var E = w.popupVisible;
        var x = w.point;
        var C = t.getPopupAlign();
        var O = {};
        if (t.isMouseEnterToShow()) {
          O.onMouseEnter = t.onPopupMouseEnter;
        }
        if (t.isMouseLeaveToHide()) {
          O.onMouseLeave = t.onPopupMouseLeave;
        }
        O.onMouseDown = t.onPopupMouseDown;
        O.onTouchStart = t.onPopupMouseDown;
        return s.createElement(U, Object(r.a)({
          prefixCls: n,
          destroyPopupOnHide: i,
          visible: E,
          point: m && x,
          className: o,
          align: C,
          onAlign: a,
          animation: u,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, O, {
          stretch: v,
          getRootDomNode: t.getRootDomNode,
          style: f,
          mask: d,
          zIndex: A,
          transitionName: l,
          maskAnimation: h,
          maskTransitionName: p,
          maskMotion: _,
          ref: t.popupRef,
          motion: c,
          mobile: y,
          forceRender: b
        }), "function" === typeof g ? g() : g);
      };
      t.attachParent = function (e) {
        _.a.cancel(t.attachId);
        var n;
        var r = t.props;
        var i = r.getPopupContainer;
        var o = r.getDocument;
        var a = t.getRootDomNode();
        if (i) {
          if (a || 0 === i.length) {
            n = i(a);
          }
        } else {
          n = o(t.getRootDomNode()).body;
        }
        if (n) {
          n.appendChild(e);
        } else {
          t.attachId = Object(_.a)(function () {
            t.attachParent(e);
          });
        }
      };
      t.getContainer = function () {
        var e = (0, t.props.getDocument)(t.getRootDomNode()).createElement("div");
        e.style.position = "absolute";
        e.style.top = "0";
        e.style.left = "0";
        e.style.width = "100%";
        t.attachParent(e);
        return e;
      };
      t.setPoint = function (e) {
        if (t.props.alignPoint && e) {
          t.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          });
        }
      };
      t.handlePortalUpdate = function () {
        if (t.state.prevPopupVisible !== t.state.popupVisible) {
          t.props.afterPopupVisibleChange(t.state.popupVisible);
        }
      };
      t.triggerContextValue = {
        onPopupMouseDown: t.onPopupMouseDown
      };
      o = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible;
      t.state = {
        prevPopupVisible: o,
        popupVisible: o
      };
      Q.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n);
        };
      });
      return t;
    }
    Object(u.a)(i, [{
      key: "componentDidMount",
      value: function () {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        var e;
        var t = this.props;
        if (this.state.popupVisible) {
          if (!(this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow())) {
            e = t.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = Object(m.a)(e, "mousedown", this.onDocumentClick);
          }
          if (!this.touchOutsideHandler) {
            e = e || t.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = Object(m.a)(e, "touchstart", this.onDocumentClick);
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || t.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = Object(m.a)(e, "scroll", this.onContextMenuClose);
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = Object(m.a)(window, "blur", this.onContextMenuClose)));
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        _.a.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var e;
        return (null === (e = this.popupRef.current) || void 0 === e ? void 0 : e.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function () {
        var e = this.props;
        var t = e.popupPlacement;
        var n = e.popupAlign;
        var r = e.builtinPlacements;
        return t && r ? function (e, t, n) {
          var r = e[t] || {};
          return Object(o.a)(Object(o.a)({}, r), n);
        }(r, t, n) : n;
      }
    }, {
      key: "setPopupVisible",
      value: function (e, t) {
        var n = this.props.alignPoint;
        var r = this.state.popupVisible;
        this.clearDelayTimer();
        if (r !== e) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: e,
              prevPopupVisible: r
            });
          }
          this.props.onPopupVisibleChange(e);
        }
        if (n && t && e) {
          this.setPoint(t);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function (e, t, n) {
        var r = this;
        var i = 1e3 * t;
        this.clearDelayTimer();
        if (i) {
          var o = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, o);
            r.clearDelayTimer();
          }, i);
        } else {
          this.setPopupVisible(e, n);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function () {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function () {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function (e) {
        var t = this.props.children.props;
        var n = this.props;
        return t[e] && n[e] ? this["fire".concat(e)] : t[e] || n[e];
      }
    }, {
      key: "isClickToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
      }
    }, {
      key: "isContextMenuOnly",
      value: function () {
        var e = this.props.action;
        return "contextMenu" === e || 1 === e.length && "contextMenu" === e[0];
      }
    }, {
      key: "isContextMenuToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("contextMenu") || -1 !== n.indexOf("contextMenu");
      }
    }, {
      key: "isClickToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
      }
    }, {
      key: "isMouseEnterToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseEnter");
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseLeave");
      }
    }, {
      key: "isFocusToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("focus") || -1 !== n.indexOf("focus");
      }
    }, {
      key: "isBlurToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("focus") || -1 !== n.indexOf("blur");
      }
    }, {
      key: "forcePopupAlign",
      value: function () {
        var e;
        if (this.state.popupVisible) {
          if (!(null === (e = this.popupRef.current) || void 0 === e)) {
            e.forceAlign();
          }
        }
      }
    }, {
      key: "fireEvents",
      value: function (e, t) {
        var n = this.props.children.props[e];
        if (n) {
          n(t);
        }
        var r = this.props[e];
        if (r) {
          r(t);
        }
      }
    }, {
      key: "close",
      value: function () {
        this.setPopupVisible(!1);
      }
    }, {
      key: "render",
      value: function () {
        var t = this.state.popupVisible;
        var n = this.props;
        var r = n.children;
        var i = n.forceRender;
        var a = n.alignPoint;
        var c = n.className;
        var u = n.autoDestroy;
        var l = s.Children.only(r);
        var f = {
          key: "trigger"
        };
        if (this.isContextMenuToShow()) {
          f.onContextMenu = this.onContextMenu;
        } else {
          f.onContextMenu = this.createTwoChains("onContextMenu");
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          f.onClick = this.onClick;
          f.onMouseDown = this.onMouseDown;
          f.onTouchStart = this.onTouchStart;
        } else {
          f.onClick = this.createTwoChains("onClick");
          f.onMouseDown = this.createTwoChains("onMouseDown");
          f.onTouchStart = this.createTwoChains("onTouchStart");
        }
        if (this.isMouseEnterToShow()) {
          f.onMouseEnter = this.onMouseEnter;
          if (a) {
            f.onMouseMove = this.onMouseMove;
          }
        } else {
          f.onMouseEnter = this.createTwoChains("onMouseEnter");
        }
        if (this.isMouseLeaveToHide()) {
          f.onMouseLeave = this.onMouseLeave;
        } else {
          f.onMouseLeave = this.createTwoChains("onMouseLeave");
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          f.onFocus = this.onFocus;
          f.onBlur = this.onBlur;
        } else {
          f.onFocus = this.createTwoChains("onFocus");
          f.onBlur = this.createTwoChains("onBlur");
        }
        var d = E()(l && l.props && l.props.className, c);
        if (d) {
          f.className = d;
        }
        var h = Object(o.a)({}, f);
        if (Object(v.c)(l)) {
          h.ref = Object(v.a)(this.triggerRef, l.ref);
        }
        var p;
        var _ = s.cloneElement(l, h);
        if (t || this.popupRef.current || i) {
          p = s.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }
        if (!t && u) {
          p = null;
        }
        return s.createElement(H.Provider, {
          value: this.triggerContextValue
        }, _, p);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.popupVisible;
        var r = {};
        if (void 0 !== n && t.popupVisible !== n) {
          r.popupVisible = n;
          r.prevPopupVisible = t.popupVisible;
        }
        return r;
      }
    }]);
    return i;
  }(s.Component);
  t.contextType = H;
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: G,
    getDocument: z,
    onPopupVisibleChange: V,
    afterPopupVisibleChange: V,
    onPopupAlign: V,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: !1,
    popupAlign: {},
    defaultPopupVisible: !1,
    mask: !1,
    maskClosable: !0,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: !1
  };
  return t;
}(b);
var K = require("../1010");
var X = function (e) {
  var t = e.overlay;
  var n = e.prefixCls;
  var r = e.id;
  var i = e.overlayInnerStyle;
  return s.createElement("div", {
    className: "".concat(n, "-inner"),
    id: r,
    role: "tooltip",
    style: i
  }, "function" === typeof t ? t() : t);
};
var Y = function (e, t) {
  var n = e.overlayClassName;
  var c = e.trigger;
  var u = void 0 === c ? ["hover"] : c;
  var l = e.mouseEnterDelay;
  var f = void 0 === l ? 0 : l;
  var d = e.mouseLeaveDelay;
  var h = void 0 === d ? .1 : d;
  var p = e.overlayStyle;
  var _ = e.prefixCls;
  var A = void 0 === _ ? "rc-tooltip" : _;
  var g = e.children;
  var v = e.onVisibleChange;
  var m = e.afterVisibleChange;
  var y = e.transitionName;
  var b = e.animation;
  var w = e.motion;
  var E = e.placement;
  var x = void 0 === E ? "right" : E;
  var C = e.align;
  var O = void 0 === C ? {} : C;
  var k = e.destroyTooltipOnHide;
  var S = void 0 !== k && k;
  var T = e.defaultVisible;
  var B = e.getTooltipContainer;
  var D = e.overlayInnerStyle;
  var I = Object(a.a)(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);
  var F = Object(s.useRef)(null);
  Object(s.useImperativeHandle)(t, function () {
    return F.current;
  });
  var R = Object(o.a)({}, I);
  if ("visible" in e) {
    R.popupVisible = e.visible;
  }
  var P = !1;
  var N = !1;
  if ("boolean" === typeof S) {
    P = S;
  } else if (S && "object" === Object(i.a)(S)) {
    var M = S.keepParent;
    P = !0 === M;
    N = !1 === M;
  }
  return s.createElement(W, Object(r.a)({
    popupClassName: n,
    prefixCls: A,
    popup: function () {
      var t = e.arrowContent;
      var n = void 0 === t ? null : t;
      var r = e.overlay;
      var i = e.id;
      return [s.createElement("div", {
        className: "".concat(A, "-arrow"),
        key: "arrow"
      }, n), s.createElement(X, {
        key: "content",
        prefixCls: A,
        id: i,
        overlay: r,
        overlayInnerStyle: D
      })];
    },
    action: u,
    builtinPlacements: K.a,
    popupPlacement: x,
    ref: F,
    popupAlign: O,
    getPopupContainer: B,
    onPopupVisibleChange: v,
    afterPopupVisibleChange: m,
    popupTransitionName: y,
    popupAnimation: b,
    popupMotion: w,
    defaultPopupVisible: T,
    destroyPopupOnHide: P,
    autoDestroy: N,
    mouseLeaveDelay: h,
    popupStyle: p,
    mouseEnterDelay: f
  }, R), g);
};
var q = Object(s.forwardRef)(Y);
export { q as a };
export default q;