"use strict";

export { P as a };
export { X as b };
export { Y as c };
export { R as d };
export { M as e };
export { N as f };
export { z as g };
export { G as h };
import r = require("react");
require("../../../50/index");
import i = require("../../../548/1183/100");
import o = require("../../../19");
import a = require("../../../54");
import s = require("../../../548/1183/701/index");
import c = require("../../../548/1183/270/1509");
import u = require("../../../548/1183/270/153/index");
import l = require("../../../548/1183/270/2625/index");
var f = r.forwardRef(function (e, t) {
  var n = e.disableSpacing;
  var s = undefined !== n && n;
  var c = e.classes;
  var u = e.className;
  var l = a.a(e, ["disableSpacing", "classes", "className"]);
  return r.createElement("div", o.a({
    className: i.a(c.root, u, !s && c.spacing),
    ref: t
  }, l));
});
var d = u.a({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto"
  },
  spacing: {
    "& > :not(:first-child)": {
      marginLeft: 8
    }
  }
}, {
  name: "MuiDialogActions"
})(f);
var h = r.forwardRef(function (e, t) {
  var n = e.classes;
  var s = e.className;
  var c = e.dividers;
  var u = undefined !== c && c;
  var l = a.a(e, ["classes", "className", "dividers"]);
  return r.createElement("div", o.a({
    className: i.a(n.root, s, u && n.dividers),
    ref: t
  }, l));
});
var p = u.a(function (e) {
  return {
    root: {
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
      padding: "8px 24px",
      "&:first-child": {
        paddingTop: 20
      }
    },
    dividers: {
      padding: "16px 24px",
      borderTop: "1px solid ".concat(e.palette.divider),
      borderBottom: "1px solid ".concat(e.palette.divider)
    }
  };
}, {
  name: "MuiDialogContent"
})(h);
import _ = require("../../../29");
import A = require("../../../548/1183/270/234");
import g = require("./2630/index");
import v = require("../../../33/index");
import m = require("../../../548/1183/691/1505/index");
import y = require("./688");
import b = require("../682/index");
import w = require("./693");
import E = require("../../../548/1183/270/288");
var x = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var C = {
  enter: y.b.enteringScreen,
  exit: y.b.leavingScreen
};
var O = r.forwardRef(function (e, t) {
  var n = e.children;
  var i = e.disableStrictModeCompat;
  var s = undefined !== i && i;
  var c = e.in;
  var u = e.onEnter;
  var l = e.onEntered;
  var f = e.onEntering;
  var d = e.onExit;
  var h = e.onExited;
  var p = e.onExiting;
  var _ = e.style;
  var A = e.TransitionComponent;
  var g = undefined === A ? m.a : A;
  var y = e.timeout;
  var O = undefined === y ? C : y;
  var k = a.a(e, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);
  var S = b.a();
  var T = S.unstable_strictMode && !s;
  var B = r.useRef(null);
  var D = E.a(n.ref, t);
  var I = E.a(T ? B : undefined, D);
  var F = function (e) {
    return function (t, n) {
      if (e) {
        var r = T ? [B.current, t] : [t, n];
        var i = v.a(r, 2);
        var o = i[0];
        var a = i[1];
        if (undefined === a) {
          e(o);
        } else {
          e(o, a);
        }
      }
    };
  };
  var R = F(f);
  var P = F(function (e, t) {
    w.b(e);
    var n = w.a({
      style: _,
      timeout: O
    }, {
      mode: "enter"
    });
    e.style.webkitTransition = S.transitions.create("opacity", n);
    e.style.transition = S.transitions.create("opacity", n);
    if (u) {
      u(e, t);
    }
  });
  var N = F(l);
  var M = F(p);
  var j = F(function (e) {
    var t = w.a({
      style: _,
      timeout: O
    }, {
      mode: "exit"
    });
    e.style.webkitTransition = S.transitions.create("opacity", t);
    e.style.transition = S.transitions.create("opacity", t);
    if (d) {
      d(e);
    }
  });
  var L = F(h);
  return r.createElement(g, o.a({
    appear: true,
    in: c,
    nodeRef: T ? B : undefined,
    onEnter: P,
    onEntered: N,
    onEntering: R,
    onExit: j,
    onExited: L,
    onExiting: M,
    timeout: O
  }, k), function (e, t) {
    return r.cloneElement(n, o.a({
      style: o.a({
        opacity: 0,
        visibility: "exited" !== e || c ? undefined : "hidden"
      }, x[e], _, n.props.style),
      ref: I
    }, t));
  });
});
var k = r.forwardRef(function (e, t) {
  var n = e.children;
  var s = e.classes;
  var c = e.className;
  var u = e.invisible;
  var l = undefined !== u && u;
  var f = e.open;
  var d = e.transitionDuration;
  var h = e.TransitionComponent;
  var p = undefined === h ? O : h;
  var _ = a.a(e, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);
  return r.createElement(p, o.a({
    in: f,
    timeout: d
  }, _), r.createElement("div", {
    className: i.a(s.root, c, l && s.invisible),
    "aria-hidden": true,
    ref: t
  }, n));
});
var S = u.a({
  root: {
    zIndex: -1,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  invisible: {
    backgroundColor: "transparent"
  }
}, {
  name: "MuiBackdrop"
})(k);
import T = require("./2623");
var B = {
  enter: y.b.enteringScreen,
  exit: y.b.leavingScreen
};
var D = r.forwardRef(function (e, t) {
  var n = e.BackdropProps;
  var s = e.children;
  var c = e.classes;
  var u = e.className;
  var l = e.disableBackdropClick;
  var f = undefined !== l && l;
  var d = e.disableEscapeKeyDown;
  var h = undefined !== d && d;
  var p = e.fullScreen;
  var _ = undefined !== p && p;
  var v = e.fullWidth;
  var m = undefined !== v && v;
  var y = e.maxWidth;
  var b = undefined === y ? "sm" : y;
  var w = e.onBackdropClick;
  var E = e.onClose;
  var x = e.onEnter;
  var C = e.onEntered;
  var k = e.onEntering;
  var D = e.onEscapeKeyDown;
  var I = e.onExit;
  var F = e.onExited;
  var R = e.onExiting;
  var P = e.open;
  var N = e.PaperComponent;
  var M = undefined === N ? T.a : N;
  var j = e.PaperProps;
  var L = undefined === j ? {} : j;
  var U = e.scroll;
  var H = undefined === U ? "paper" : U;
  var V = e.TransitionComponent;
  var G = undefined === V ? O : V;
  var z = e.transitionDuration;
  var Q = undefined === z ? B : z;
  var W = e.TransitionProps;
  var K = e["aria-describedby"];
  var X = e["aria-labelledby"];
  var Y = a.a(e, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);
  var q = r.useRef();
  return r.createElement(g.a, o.a({
    className: i.a(c.root, u),
    BackdropComponent: S,
    BackdropProps: o.a({
      transitionDuration: Q
    }, n),
    closeAfterTransition: true
  }, f ? {
    disableBackdropClick: f
  } : {}, {
    disableEscapeKeyDown: h,
    onEscapeKeyDown: D,
    onClose: E,
    open: P,
    ref: t
  }, Y), r.createElement(G, o.a({
    appear: true,
    in: P,
    timeout: Q,
    onEnter: x,
    onEntering: k,
    onEntered: C,
    onExit: I,
    onExiting: R,
    onExited: F,
    role: "none presentation"
  }, W), r.createElement("div", {
    className: i.a(c.container, c["scroll".concat(A.a(H))]),
    onMouseUp: function (e) {
      if (e.target === e.currentTarget && e.target === q.current) {
        q.current = null;
        if (w) {
          w(e);
        }
        if (!f && E) {
          E(e, "backdropClick");
        }
      }
    },
    onMouseDown: function (e) {
      q.current = e.target;
    }
  }, r.createElement(M, o.a({
    elevation: 24,
    role: "dialog",
    "aria-describedby": K,
    "aria-labelledby": X
  }, L, {
    className: i.a(c.paper, c["paperScroll".concat(A.a(H))], c["paperWidth".concat(A.a(String(b)))], L.className, _ && c.paperFullScreen, m && c.paperFullWidth)
  }), s))));
});
var I = u.a(function (e) {
  return {
    root: {
      "@media print": {
        position: "absolute !important"
      }
    },
    scrollPaper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    scrollBody: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&:after": {
        content: "\"\"",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    },
    container: {
      height: "100%",
      "@media print": {
        height: "auto"
      },
      outline: 0
    },
    paper: {
      margin: 32,
      position: "relative",
      overflowY: "auto",
      "@media print": {
        overflowY: "visible",
        boxShadow: "none"
      }
    },
    paperScrollPaper: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    },
    paperScrollBody: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "left"
    },
    paperWidthFalse: {
      maxWidth: "calc(100% - 64px)"
    },
    paperWidthXs: {
      maxWidth: Math.max(e.breakpoints.values.xs, 444),
      "&$paperScrollBody": _.a({}, e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthSm: {
      maxWidth: e.breakpoints.values.sm,
      "&$paperScrollBody": _.a({}, e.breakpoints.down(e.breakpoints.values.sm + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthMd: {
      maxWidth: e.breakpoints.values.md,
      "&$paperScrollBody": _.a({}, e.breakpoints.down(e.breakpoints.values.md + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthLg: {
      maxWidth: e.breakpoints.values.lg,
      "&$paperScrollBody": _.a({}, e.breakpoints.down(e.breakpoints.values.lg + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperWidthXl: {
      maxWidth: e.breakpoints.values.xl,
      "&$paperScrollBody": _.a({}, e.breakpoints.down(e.breakpoints.values.xl + 64), {
        maxWidth: "calc(100% - 64px)"
      })
    },
    paperFullWidth: {
      width: "calc(100% - 64px)"
    },
    paperFullScreen: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      "&$paperScrollBody": {
        margin: 0,
        maxWidth: "100%"
      }
    }
  };
}, {
  name: "MuiDialog"
})(D);
import F = require("../../../548/1183/270/2632");
function R(e, t) {
  return Array.isArray(t) ? t.every(function (t) {
    return -1 !== e.indexOf(t);
  }) : -1 !== e.indexOf(t);
}
var P = 310;
var N = 325;
var M = 305;
var j = s.a(function (e) {
  return {
    staticWrapperRoot: {
      overflow: "hidden",
      minWidth: P,
      display: "flex",
      flexDirection: "column",
      backgroundColor: e.palette.background.paper
    }
  };
}, {
  name: "MuiPickersStaticWrapper"
});
var L = function (e) {
  var t = e.children;
  var n = j();
  return r.createElement("div", {
    className: n.staticWrapperRoot,
    children: t
  });
};
var U = function (e) {
  var t = e.children;
  var n = e.classes;
  var s = e.onAccept;
  var c = e.onDismiss;
  var u = e.onClear;
  var f = e.onSetToday;
  var h = e.okLabel;
  var _ = e.cancelLabel;
  var A = e.clearLabel;
  var g = e.todayLabel;
  var v = e.clearable;
  var m = e.showTodayButton;
  e.showTabs;
  var y = e.wider;
  var b = a.a(e, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);
  return r.createElement(I, o.a({
    role: "dialog",
    onClose: c,
    classes: {
      paper: i.a(n.dialogRoot, y && n.dialogRootWider)
    }
  }, b), r.createElement(p, {
    children: t,
    className: n.dialog
  }), r.createElement(d, {
    classes: {
      root: i.a((v || m) && n.withAdditionalAction)
    }
  }, v && r.createElement(l.a, {
    color: "primary",
    onClick: u
  }, A), m && r.createElement(l.a, {
    color: "primary",
    onClick: f
  }, g), _ && r.createElement(l.a, {
    color: "primary",
    onClick: c
  }, _), h && r.createElement(l.a, {
    color: "primary",
    onClick: s
  }, h)));
};
U.displayName = "ModalDialog";
var H = c.a({
  dialogRoot: {
    minWidth: P
  },
  dialogRootWider: {
    minWidth: N
  },
  dialog: {
    "&:first-child": {
      padding: 0
    }
  },
  withAdditionalAction: {
    justifyContent: "flex-start",
    "& > *:first-child": {
      marginRight: "auto"
    }
  }
});
var V = u.a(H, {
  name: "MuiPickersModal"
})(U);
var G = "undefined" === typeof window ? r.useEffect : r.useLayoutEffect;
function z(e, t) {
  var n = t[e.key];
  if (n) {
    n();
    e.preventDefault();
  }
}
function Q(e, t) {
  var n = r.useRef(t);
  n.current = t;
  G(function () {
    if (e) {
      var t = function (e) {
        z(e, n.current);
      };
      window.addEventListener("keydown", t);
      return function () {
        window.removeEventListener("keydown", t);
      };
    }
  }, [e]);
}
var W = function (e) {
  var t = e.open;
  var n = e.children;
  var i = e.okLabel;
  var s = e.cancelLabel;
  var c = e.clearLabel;
  var u = e.todayLabel;
  var l = e.showTodayButton;
  var f = e.clearable;
  var d = e.DialogProps;
  var h = e.showTabs;
  var p = e.wider;
  var _ = e.InputComponent;
  var A = e.DateInputProps;
  var g = e.onClear;
  var v = e.onAccept;
  var m = e.onDismiss;
  var y = e.onSetToday;
  var b = a.a(e, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"]);
  Q(t, {
    Enter: v
  });
  return r.createElement(r.Fragment, null, r.createElement(_, o.a({}, b, A)), r.createElement(V, o.a({
    wider: p,
    showTabs: h,
    open: t,
    onClear: g,
    onAccept: v,
    onDismiss: m,
    onSetToday: y,
    clearLabel: c,
    todayLabel: u,
    okLabel: i,
    cancelLabel: s,
    clearable: f,
    showTodayButton: l,
    children: n
  }, d)));
};
W.defaultProps = {
  okLabel: "OK",
  cancelLabel: "Cancel",
  clearLabel: "Clear",
  todayLabel: "Today",
  clearable: false,
  showTodayButton: false
};
var K = function (e) {
  var t = e.open;
  e.wider;
  var n = e.children;
  var i = e.PopoverProps;
  e.onClear;
  var s = e.onDismiss;
  e.onSetToday;
  var c = e.onAccept;
  e.showTabs;
  var u = e.DateInputProps;
  var l = e.InputComponent;
  var f = a.a(e, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);
  var d = r.useRef();
  Q(t, {
    Enter: c
  });
  return r.createElement(r.Fragment, null, r.createElement(l, o.a({}, f, u, {
    inputRef: d
  })), r.createElement(F.a, o.a({
    open: t,
    onClose: s,
    anchorEl: d.current,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    children: n
  }, i)));
};
var X = r.createContext(null);
var Y = function (e) {
  var t = e.variant;
  var n = a.a(e, ["variant"]);
  var i = function (e) {
    switch (e) {
      case "inline":
        return K;
      case "static":
        return L;
      default:
        return W;
    }
  }(t);
  return r.createElement(X.Provider, {
    value: t || "dialog"
  }, r.createElement(i, n));
};
export default P;