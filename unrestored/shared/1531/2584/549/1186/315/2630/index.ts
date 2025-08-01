"use strict";

var r = require("../../../../54");
var i = require("../../../../19");
var o = require("../../../../0/index");
var a = require("../../../../75/index");
require("../../../../50/index");
var s = require("../../682/2593");
var c = require("../../../../548/1183/691/153/2624");
var u = require("../../270/390");
var l = require("../../270/689");
var f = require("../288");
var d = "undefined" !== typeof window ? o.useLayoutEffect : o.useEffect;
var h = o.forwardRef(function (e, t) {
  var n = e.children;
  var r = e.container;
  var i = e.disablePortal;
  var s = void 0 !== i && i;
  var c = e.onRendered;
  var u = o.useState(null);
  var h = u[0];
  var p = u[1];
  var _ = Object(f.a)(o.isValidElement(n) ? n.ref : null, t);
  d(function () {
    if (!s) {
      p(function (e) {
        e = "function" === typeof e ? e() : e;
        return a.findDOMNode(e);
      }(r) || document.body);
    }
  }, [r, s]);
  d(function () {
    if (h && !s) {
      Object(l.a)(t, h);
      return function () {
        Object(l.a)(t, null);
      };
    }
  }, [t, h, s]);
  d(function () {
    if (c && (h || s)) {
      c();
    }
  }, [c, h, s]);
  return s ? o.isValidElement(n) ? o.cloneElement(n, {
    ref: _
  }) : n : h ? a.createPortal(n, h) : h;
});
var p = require("./909");
var _ = require("./560");
var A = require("../../701/786/1005");
var g = require("../../../../95");
var v = require("../../../../96");
var m = require("../../../../80/index");
var y = require("../../270/1007");
var b = require("./1006");
function w(e, t) {
  if (t) {
    e.setAttribute("aria-hidden", "true");
  } else {
    e.removeAttribute("aria-hidden");
  }
}
function E(e) {
  return parseInt(window.getComputedStyle(e)["padding-right"], 10) || 0;
}
function x(e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
  var i = arguments.length > 4 ? arguments[4] : void 0;
  var o = [t, n].concat(Object(m.a)(r));
  var a = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(e.children, function (e) {
    if (1 === e.nodeType && -1 === o.indexOf(e) && -1 === a.indexOf(e.tagName)) {
      w(e, i);
    }
  });
}
function C(e, t) {
  var n = -1;
  e.some(function (e, r) {
    return !!t(e) && (n = r, !0);
  });
  return n;
}
function O(e, t) {
  var n;
  var r = [];
  var i = [];
  var o = e.container;
  if (!t.disableScrollLock) {
    if (function (e) {
      var t = Object(u.a)(e);
      return t.body === e ? Object(b.a)(t).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
    }(o)) {
      var a = Object(y.a)();
      r.push({
        value: o.style.paddingRight,
        key: "padding-right",
        el: o
      });
      o.style["padding-right"] = "".concat(E(o) + a, "px");
      n = Object(u.a)(o).querySelectorAll(".mui-fixed");
      [].forEach.call(n, function (e) {
        i.push(e.style.paddingRight);
        e.style.paddingRight = "".concat(E(e) + a, "px");
      });
    }
    var s = o.parentElement;
    var c = "HTML" === s.nodeName && "scroll" === window.getComputedStyle(s)["overflow-y"] ? s : o;
    r.push({
      value: c.style.overflow,
      key: "overflow",
      el: c
    });
    c.style.overflow = "hidden";
  }
  return function () {
    if (n) {
      [].forEach.call(n, function (e, t) {
        if (i[t]) {
          e.style.paddingRight = i[t];
        } else {
          e.style.removeProperty("padding-right");
        }
      });
    }
    r.forEach(function (e) {
      var t = e.value;
      var n = e.el;
      var r = e.key;
      if (t) {
        n.style.setProperty(r, t);
      } else {
        n.style.removeProperty(r);
      }
    });
  };
}
var k = function () {
  function e() {
    Object(g.a)(this, e);
    this.modals = [];
    this.containers = [];
  }
  Object(v.a)(e, [{
    key: "add",
    value: function (e, t) {
      var n = this.modals.indexOf(e);
      if (-1 !== n) {
        return n;
      }
      n = this.modals.length;
      this.modals.push(e);
      if (e.modalRef) {
        w(e.modalRef, !1);
      }
      var r = function (e) {
        var t = [];
        [].forEach.call(e.children, function (e) {
          if (e.getAttribute && "true" === e.getAttribute("aria-hidden")) {
            t.push(e);
          }
        });
        return t;
      }(t);
      x(t, e.mountNode, e.modalRef, r, !0);
      var i = C(this.containers, function (e) {
        return e.container === t;
      });
      return -1 !== i ? (this.containers[i].modals.push(e), n) : (this.containers.push({
        modals: [e],
        container: t,
        restore: null,
        hiddenSiblingNodes: r
      }), n);
    }
  }, {
    key: "mount",
    value: function (e, t) {
      var n = C(this.containers, function (t) {
        return -1 !== t.modals.indexOf(e);
      });
      var r = this.containers[n];
      if (!r.restore) {
        r.restore = O(r, t);
      }
    }
  }, {
    key: "remove",
    value: function (e) {
      var t = this.modals.indexOf(e);
      if (-1 === t) {
        return t;
      }
      var n = C(this.containers, function (t) {
        return -1 !== t.modals.indexOf(e);
      });
      var r = this.containers[n];
      r.modals.splice(r.modals.indexOf(e), 1);
      this.modals.splice(t, 1);
      if (0 === r.modals.length) {
        if (r.restore) {
          r.restore();
        }
        if (e.modalRef) {
          w(e.modalRef, !0);
        }
        x(r.container, e.mountNode, e.modalRef, r.hiddenSiblingNodes, !1);
        this.containers.splice(n, 1);
      } else {
        var i = r.modals[r.modals.length - 1];
        if (i.modalRef) {
          w(i.modalRef, !1);
        }
      }
      return t;
    }
  }, {
    key: "isTopModal",
    value: function (e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }]);
  return e;
}();
var S = function (e) {
  var t = e.children;
  var n = e.disableAutoFocus;
  var r = void 0 !== n && n;
  var i = e.disableEnforceFocus;
  var s = void 0 !== i && i;
  var c = e.disableRestoreFocus;
  var l = void 0 !== c && c;
  var d = e.getDoc;
  var h = e.isEnabled;
  var p = e.open;
  var _ = o.useRef();
  var A = o.useRef(null);
  var g = o.useRef(null);
  var v = o.useRef();
  var m = o.useRef(null);
  var y = o.useCallback(function (e) {
    m.current = a.findDOMNode(e);
  }, []);
  var b = Object(f.a)(t.ref, y);
  var w = o.useRef();
  o.useEffect(function () {
    w.current = p;
  }, [p]);
  if (!w.current && p && "undefined" !== typeof window) {
    v.current = d().activeElement;
  }
  o.useEffect(function () {
    if (p) {
      var e = Object(u.a)(m.current);
      if (!(r || !m.current || m.current.contains(e.activeElement))) {
        if (!m.current.hasAttribute("tabIndex")) {
          m.current.setAttribute("tabIndex", -1);
        }
        m.current.focus();
      }
      var t = function () {
        if (null !== m.current) {
          if (e.hasFocus() && !s && h() && !_.current) {
            if (m.current && !m.current.contains(e.activeElement)) {
              m.current.focus();
            }
          } else {
            _.current = !1;
          }
        }
      };
      var n = function (t) {
        if (!s && h() && 9 === t.keyCode && e.activeElement === m.current) {
          _.current = !0;
          if (t.shiftKey) {
            g.current.focus();
          } else {
            A.current.focus();
          }
        }
      };
      e.addEventListener("focus", t, !0);
      e.addEventListener("keydown", n, !0);
      var i = setInterval(function () {
        t();
      }, 50);
      return function () {
        clearInterval(i);
        e.removeEventListener("focus", t, !0);
        e.removeEventListener("keydown", n, !0);
        if (!l) {
          if (v.current && v.current.focus) {
            v.current.focus();
          }
          v.current = null;
        }
      };
    }
  }, [r, s, l, h, p]);
  return o.createElement(o.Fragment, null, o.createElement("div", {
    tabIndex: 0,
    ref: A,
    "data-test": "sentinelStart"
  }), o.cloneElement(t, {
    ref: b
  }), o.createElement("div", {
    tabIndex: 0,
    ref: g,
    "data-test": "sentinelEnd"
  }));
};
var T = {
  root: {
    zIndex: -1,
    position: "fixed",
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
};
var B = o.forwardRef(function (e, t) {
  var n = e.invisible;
  var a = void 0 !== n && n;
  var s = e.open;
  var c = Object(r.a)(e, ["invisible", "open"]);
  return s ? o.createElement("div", Object(i.a)({
    "aria-hidden": !0,
    ref: t
  }, c, {
    style: Object(i.a)({}, T.root, a ? T.invisible : {}, c.style)
  })) : null;
});
var D = new k();
var I = o.forwardRef(function (e, t) {
  var n = Object(s.a)();
  var l = Object(c.a)({
    name: "MuiModal",
    props: Object(i.a)({}, e),
    theme: n
  });
  var d = l.BackdropComponent;
  var g = void 0 === d ? B : d;
  var v = l.BackdropProps;
  var m = l.children;
  var y = l.closeAfterTransition;
  var b = void 0 !== y && y;
  var E = l.container;
  var x = l.disableAutoFocus;
  var C = void 0 !== x && x;
  var O = l.disableBackdropClick;
  var k = void 0 !== O && O;
  var T = l.disableEnforceFocus;
  var I = void 0 !== T && T;
  var F = l.disableEscapeKeyDown;
  var R = void 0 !== F && F;
  var P = l.disablePortal;
  var N = void 0 !== P && P;
  var M = l.disableRestoreFocus;
  var j = void 0 !== M && M;
  var L = l.disableScrollLock;
  var U = void 0 !== L && L;
  var H = l.hideBackdrop;
  var V = void 0 !== H && H;
  var G = l.keepMounted;
  var z = void 0 !== G && G;
  var Q = l.manager;
  var W = void 0 === Q ? D : Q;
  var K = l.onBackdropClick;
  var X = l.onClose;
  var Y = l.onEscapeKeyDown;
  var q = l.onRendered;
  var $ = l.open;
  var J = Object(r.a)(l, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);
  var Z = o.useState(!0);
  var ee = Z[0];
  var te = Z[1];
  var ne = o.useRef({});
  var re = o.useRef(null);
  var ie = o.useRef(null);
  var oe = Object(f.a)(ie, t);
  var ae = function (e) {
    return !!e.children && e.children.props.hasOwnProperty("in");
  }(l);
  var se = function () {
    return Object(u.a)(re.current);
  };
  var ce = function () {
    ne.current.modalRef = ie.current;
    ne.current.mountNode = re.current;
    return ne.current;
  };
  var ue = function () {
    W.mount(ce(), {
      disableScrollLock: U
    });
    ie.current.scrollTop = 0;
  };
  var le = Object(_.a)(function () {
    var e = function (e) {
      e = "function" === typeof e ? e() : e;
      return a.findDOMNode(e);
    }(E) || se().body;
    W.add(ce(), e);
    if (ie.current) {
      ue();
    }
  });
  var fe = o.useCallback(function () {
    return W.isTopModal(ce());
  }, [W]);
  var de = Object(_.a)(function (e) {
    re.current = e;
    if (e) {
      if (q) {
        q();
      }
      if ($ && fe()) {
        ue();
      } else {
        w(ie.current, !0);
      }
    }
  });
  var he = o.useCallback(function () {
    W.remove(ce());
  }, [W]);
  o.useEffect(function () {
    return function () {
      he();
    };
  }, [he]);
  o.useEffect(function () {
    if ($) {
      le();
    } else {
      if (!(ae && b)) {
        he();
      }
    }
  }, [$, he, ae, b, le]);
  if (!z && !$ && (!ae || ee)) {
    return null;
  }
  var pe = function (e) {
    return {
      root: {
        position: "fixed",
        zIndex: e.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
      },
      hidden: {
        visibility: "hidden"
      }
    };
  }(n || {
    zIndex: A.a
  });
  var _e = {};
  if (void 0 === m.props.tabIndex) {
    _e.tabIndex = m.props.tabIndex || "-1";
  }
  if (ae) {
    _e.onEnter = Object(p.a)(function () {
      te(!1);
    }, m.props.onEnter);
    _e.onExited = Object(p.a)(function () {
      te(!0);
      if (b) {
        he();
      }
    }, m.props.onExited);
  }
  return o.createElement(h, {
    ref: de,
    container: E,
    disablePortal: N
  }, o.createElement("div", Object(i.a)({
    ref: oe,
    onKeyDown: function (e) {
      if ("Escape" === e.key && fe()) {
        if (Y) {
          Y(e);
        }
        if (!R) {
          e.stopPropagation();
          if (X) {
            X(e, "escapeKeyDown");
          }
        }
      }
    },
    role: "presentation"
  }, J, {
    style: Object(i.a)({}, pe.root, !$ && ee ? pe.hidden : {}, J.style)
  }), V ? null : o.createElement(g, Object(i.a)({
    open: $,
    onClick: function (e) {
      if (e.target === e.currentTarget) {
        if (K) {
          K(e);
        }
        if (!k && X) {
          X(e, "backdropClick");
        }
      }
    }
  }, v)), o.createElement(S, {
    disableEnforceFocus: I,
    disableAutoFocus: C,
    disableRestoreFocus: j,
    getDoc: se,
    isEnabled: fe,
    open: $
  }, o.cloneElement(m, _e))));
});
exports.a = I;