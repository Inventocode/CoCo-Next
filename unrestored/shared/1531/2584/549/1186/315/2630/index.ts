/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2630
 */

"use strict";

var r = require("../../../../54");
var i = require("../../../../19");
var o = require("react");
var a = require("../../../../75/index");
require("../../../../50/index");
var s = require("../../682/2593");
var c = require("../../../../548/1183/270/153/2624");
var u = require("../../../../548/1183/270/390");
var l = require("../../../../548/1183/270/689");
var f = require("../../../../548/1183/270/288");
var d = "undefined" !== typeof window ? o.useLayoutEffect : o.useEffect;
var h = o.forwardRef(function (e, t) {
  var n = e.children;
  var r = e.container;
  var i = e.disablePortal;
  var s = undefined !== i && i;
  var c = e.onRendered;
  var u = o.useState(null);
  var h = u[0];
  var p = u[1];
  var _ = f.a(o.isValidElement(n) ? n.ref : null, t);
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
      l.a(t, h);
      return function () {
        l.a(t, null);
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
var A = require("./1005");
var g = require("../../../../95");
var v = require("../../../../96");
var m = require("../../../../80/index");
var y = require("../../../../548/1183/270/1007");
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
  var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : [];
  var i = arguments.length > 4 ? arguments[4] : undefined;
  var o = [t, n].concat(m.a(r));
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
    return !!t(e) && (n = r, true);
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
      var t = u.a(e);
      return t.body === e ? b.a(t).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
    }(o)) {
      var a = y.a();
      r.push({
        value: o.style.paddingRight,
        key: "padding-right",
        el: o
      });
      o.style["padding-right"] = "".concat(E(o) + a, "px");
      n = u.a(o).querySelectorAll(".mui-fixed");
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
    g.a(this, e);
    this.modals = [];
    this.containers = [];
  }
  v.a(e, [{
    key: "add",
    value: function (e, t) {
      var n = this.modals.indexOf(e);
      if (-1 !== n) {
        return n;
      }
      n = this.modals.length;
      this.modals.push(e);
      if (e.modalRef) {
        w(e.modalRef, false);
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
      x(t, e.mountNode, e.modalRef, r, true);
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
          w(e.modalRef, true);
        }
        x(r.container, e.mountNode, e.modalRef, r.hiddenSiblingNodes, false);
        this.containers.splice(n, 1);
      } else {
        var i = r.modals[r.modals.length - 1];
        if (i.modalRef) {
          w(i.modalRef, false);
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
  var r = undefined !== n && n;
  var i = e.disableEnforceFocus;
  var s = undefined !== i && i;
  var c = e.disableRestoreFocus;
  var l = undefined !== c && c;
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
  var b = f.a(t.ref, y);
  var w = o.useRef();
  o.useEffect(function () {
    w.current = p;
  }, [p]);
  if (!w.current && p && "undefined" !== typeof window) {
    v.current = d().activeElement;
  }
  o.useEffect(function () {
    if (p) {
      var e = u.a(m.current);
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
            _.current = false;
          }
        }
      };
      var n = function (t) {
        if (!s && h() && 9 === t.keyCode && e.activeElement === m.current) {
          _.current = true;
          if (t.shiftKey) {
            g.current.focus();
          } else {
            A.current.focus();
          }
        }
      };
      e.addEventListener("focus", t, true);
      e.addEventListener("keydown", n, true);
      var i = setInterval(function () {
        t();
      }, 50);
      return function () {
        clearInterval(i);
        e.removeEventListener("focus", t, true);
        e.removeEventListener("keydown", n, true);
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
  var a = undefined !== n && n;
  var s = e.open;
  var c = r.a(e, ["invisible", "open"]);
  return s ? o.createElement("div", i.a({
    "aria-hidden": true,
    ref: t
  }, c, {
    style: i.a({}, T.root, a ? T.invisible : {}, c.style)
  })) : null;
});
var D = new k();
var I = o.forwardRef(function (e, t) {
  var n = s.a();
  var l = c.a({
    name: "MuiModal",
    props: i.a({}, e),
    theme: n
  });
  var d = l.BackdropComponent;
  var g = undefined === d ? B : d;
  var v = l.BackdropProps;
  var m = l.children;
  var y = l.closeAfterTransition;
  var b = undefined !== y && y;
  var E = l.container;
  var x = l.disableAutoFocus;
  var C = undefined !== x && x;
  var O = l.disableBackdropClick;
  var k = undefined !== O && O;
  var T = l.disableEnforceFocus;
  var I = undefined !== T && T;
  var F = l.disableEscapeKeyDown;
  var R = undefined !== F && F;
  var P = l.disablePortal;
  var N = undefined !== P && P;
  var M = l.disableRestoreFocus;
  var j = undefined !== M && M;
  var L = l.disableScrollLock;
  var U = undefined !== L && L;
  var H = l.hideBackdrop;
  var V = undefined !== H && H;
  var G = l.keepMounted;
  var z = undefined !== G && G;
  var Q = l.manager;
  var W = undefined === Q ? D : Q;
  var K = l.onBackdropClick;
  var X = l.onClose;
  var Y = l.onEscapeKeyDown;
  var q = l.onRendered;
  var $ = l.open;
  var J = r.a(l, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);
  var Z = o.useState(true);
  var ee = Z[0];
  var te = Z[1];
  var ne = o.useRef({});
  var re = o.useRef(null);
  var ie = o.useRef(null);
  var oe = f.a(ie, t);
  var ae = function (e) {
    return !!e.children && e.children.props.hasOwnProperty("in");
  }(l);
  var se = function () {
    return u.a(re.current);
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
  var le = _.a(function () {
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
  var de = _.a(function (e) {
    re.current = e;
    if (e) {
      if (q) {
        q();
      }
      if ($ && fe()) {
        ue();
      } else {
        w(ie.current, true);
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
  if (undefined === m.props.tabIndex) {
    _e.tabIndex = m.props.tabIndex || "-1";
  }
  if (ae) {
    _e.onEnter = p.a(function () {
      te(false);
    }, m.props.onEnter);
    _e.onExited = p.a(function () {
      te(true);
      if (b) {
        he();
      }
    }, m.props.onExited);
  }
  return o.createElement(h, {
    ref: de,
    container: E,
    disablePortal: N
  }, o.createElement("div", i.a({
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
    style: i.a({}, pe.root, !$ && ee ? pe.hidden : {}, J.style)
  }), V ? null : o.createElement(g, i.a({
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