"use strict";

var r = require("../28");
var i = require("../19");
var o = require("../0/index");
var a = require("./1494");
var s = require("../8");
var c = (module => {
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
})(s);
var u = require("../790");
var l = require("./611");
var f = require("../612/index");
var h = require("../612/789/index");
var d = require("./686/index");
var p = require("../788");
var _ = require("./462");
var A;
var g = function () {
  return Object(_.a)() && window.document.documentElement;
};
var v = require("../431");
var m = function (e, t) {
  var n = {};
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r];
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]];
      }
    }
  }
  return n;
};
if (g()) {
  document.documentElement.addEventListener("click", function (e) {
    A = {
      x: e.pageX,
      y: e.pageY
    };
    setTimeout(function () {
      A = null;
    }, 100);
  }, !0);
}
var y = function (e) {
  var t;
  var n = o.useContext(p.b);
  var s = n.getPopupContainer;
  var _ = n.getPrefixCls;
  var g = n.direction;
  var y = function (t) {
    var n = e.onCancel;
    if (!(null === n || void 0 === n)) {
      n(t);
    }
  };
  var b = function (t) {
    var n = e.onOk;
    if (!(null === n || void 0 === n)) {
      n(t);
    }
  };
  var w = function (t) {
    var n = e.okText;
    var r = e.okType;
    var a = e.cancelText;
    var s = e.confirmLoading;
    return o.createElement(o.Fragment, null, o.createElement(f.a, Object(i.a)({
      onClick: y
    }, e.cancelButtonProps), a || t.cancelText), o.createElement(f.a, Object(i.a)({}, Object(h.a)(r), {
      loading: s,
      onClick: b
    }, e.okButtonProps), n || t.okText));
  };
  var E = e.prefixCls;
  var x = e.footer;
  var C = e.visible;
  var O = e.wrapClassName;
  var S = e.centered;
  var k = e.getContainer;
  var T = e.closeIcon;
  var B = e.focusTriggerAfterClose;
  var D = void 0 === B || B;
  var I = m(e, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);
  var F = _("modal", E);
  var R = _();
  var P = o.createElement(d.a, {
    componentName: "Modal",
    defaultLocale: Object(l.b)()
  }, w);
  var N = o.createElement("span", {
    className: "".concat(F, "-close-x")
  }, T || o.createElement(u.a, {
    className: "".concat(F, "-close-icon")
  }));
  var M = c()(O, (t = {}, Object(r.a)(t, "".concat(F, "-centered"), !!S), Object(r.a)(t, "".concat(F, "-wrap-rtl"), "rtl" === g), t));
  return o.createElement(a.a, Object(i.a)({}, I, {
    getContainer: void 0 === k ? s : k,
    prefixCls: F,
    wrapClassName: M,
    footer: void 0 === x ? P : x,
    visible: C,
    mousePosition: A,
    onClose: y,
    closeIcon: N,
    focusTriggerAfterClose: D,
    transitionName: Object(v.b)(R, "zoom", e.transitionName),
    maskTransitionName: Object(v.b)(R, "fade", e.maskTransitionName)
  }));
};
y.defaultProps = {
  width: 520,
  confirmLoading: !1,
  visible: !1,
  okType: "primary"
};
var b = y;
var w = require("../75/index");
var E = require("./1023");
var x = require("./1022");
var C = require("./1024");
var O = require("./913");
var S = require("../33/index");
function k(e) {
  return !(!e || !e.then);
}
var T = function (e) {
  var t = o.useRef(!1);
  var n = o.useRef();
  var r = o.useState(!1);
  var a = Object(S.a)(r, 2);
  var s = a[0];
  var c = a[1];
  o.useEffect(function () {
    var t;
    if (e.autoFocus) {
      var r = n.current;
      t = setTimeout(function () {
        return r.focus();
      });
    }
    return function () {
      if (t) {
        clearTimeout(t);
      }
    };
  }, []);
  var u = e.type;
  var l = e.children;
  var d = e.prefixCls;
  var p = e.buttonProps;
  return o.createElement(f.a, Object(i.a)({}, Object(h.a)(u), {
    onClick: function (n) {
      var r = e.actionFn;
      var i = e.close;
      if (!t.current) {
        if (t.current = !0, r) {
          var o;
          if (e.emitEvent) {
            if (o = r(n), e.quitOnNullishReturnValue && !k(o)) {
              t.current = !1;
              return void i(n);
            }
          } else if (r.length) {
            o = r(i);
            t.current = !1;
          } else if (!(o = r())) {
            return void i();
          }
          !function (n) {
            var r = e.close;
            if (k(n)) {
              c(!0);
              n.then(function () {
                c(!1);
                r.apply(void 0, arguments);
                t.current = !1;
              }, function (e) {
                console.error(e);
                c(!1);
                t.current = !1;
              });
            }
          }(o);
        } else {
          i();
        }
      }
    },
    loading: s,
    prefixCls: d
  }, p, {
    ref: n
  }), l);
};
var B = require("../363/index");
var D = require("./285/index");
var I = function (e) {
  var t = e.icon;
  var n = e.onCancel;
  var i = e.onOk;
  var a = e.close;
  var s = e.zIndex;
  var u = e.afterClose;
  var l = e.visible;
  var f = e.keyboard;
  var h = e.centered;
  var d = e.getContainer;
  var p = e.maskStyle;
  var _ = e.okText;
  var A = e.okButtonProps;
  var g = e.cancelText;
  var m = e.cancelButtonProps;
  var y = e.direction;
  var w = e.prefixCls;
  var E = e.rootPrefixCls;
  var x = e.iconPrefixCls;
  var C = e.bodyStyle;
  var O = e.closable;
  var S = void 0 !== O && O;
  var k = e.closeIcon;
  var I = e.modalRender;
  var F = e.focusTriggerAfterClose;
  Object(B.a)(!("string" === typeof t && t.length > 2), "Modal", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(t, "` at https://ant.design/components/icon"));
  var R = e.okType || "primary";
  var P = "".concat(w, "-confirm");
  var N = !("okCancel" in e) || e.okCancel;
  var M = e.width || 416;
  var j = e.style || {};
  var L = void 0 === e.mask || e.mask;
  var U = void 0 !== e.maskClosable && e.maskClosable;
  var H = null !== e.autoFocusButton && (e.autoFocusButton || "ok");
  var V = c()(P, "".concat(P, "-").concat(e.type), Object(r.a)({}, "".concat(P, "-rtl"), "rtl" === y), e.className);
  var G = N && o.createElement(T, {
    actionFn: n,
    close: a,
    autoFocus: "cancel" === H,
    buttonProps: m,
    prefixCls: "".concat(E, "-btn")
  }, g);
  return o.createElement(D.a, {
    prefixCls: E,
    iconPrefixCls: x,
    direction: y
  }, o.createElement(b, {
    prefixCls: w,
    className: V,
    wrapClassName: c()(Object(r.a)({}, "".concat(P, "-centered"), !!e.centered)),
    onCancel: function () {
      return a({
        triggerCancel: !0
      });
    },
    visible: l,
    title: "",
    footer: "",
    transitionName: Object(v.b)(E, "zoom", e.transitionName),
    maskTransitionName: Object(v.b)(E, "fade", e.maskTransitionName),
    mask: L,
    maskClosable: U,
    maskStyle: p,
    style: j,
    bodyStyle: C,
    width: M,
    zIndex: s,
    afterClose: u,
    keyboard: f,
    centered: h,
    getContainer: d,
    closable: S,
    closeIcon: k,
    modalRender: I,
    focusTriggerAfterClose: F
  }, o.createElement("div", {
    className: "".concat(P, "-body-wrapper")
  }, o.createElement("div", {
    className: "".concat(P, "-body")
  }, t, void 0 === e.title ? null : o.createElement("span", {
    className: "".concat(P, "-title")
  }, e.title), o.createElement("div", {
    className: "".concat(P, "-content")
  }, e.content)), o.createElement("div", {
    className: "".concat(P, "-btns")
  }, G, o.createElement(T, {
    type: R,
    actionFn: i,
    close: a,
    autoFocus: "ok" === H,
    buttonProps: A,
    prefixCls: "".concat(E, "-btn")
  }, _)))));
};
var F = [];
var R = function (e, t) {
  var n = {};
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r];
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]];
      }
    }
  }
  return n;
};
var P = "";
function N(e) {
  var t = document.createDocumentFragment();
  var n = Object(i.a)(Object(i.a)({}, e), {
    close: s,
    visible: !0
  });
  function r() {
    w.unmountComponentAtNode(t);
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
      r[i] = arguments[i];
    }
    var o = r.some(function (e) {
      return e && e.triggerCancel;
    });
    if (e.onCancel && o) {
      e.onCancel.apply(e, r);
    }
    for (var a = 0; a < F.length; a++) {
      var c = F[a];
      if (c === s) {
        F.splice(a, 1);
        break;
      }
    }
  }
  function a(e) {
    var n = e.okText;
    var r = e.cancelText;
    var a = e.prefixCls;
    var s = R(e, ["okText", "cancelText", "prefixCls"]);
    setTimeout(function () {
      var e = Object(l.b)();
      var c = Object(D.b)();
      var u = c.getPrefixCls;
      var f = c.getIconPrefixCls;
      var h = u(void 0, P);
      var d = a || "".concat(h, "-modal");
      var p = f();
      w.render(o.createElement(I, Object(i.a)({}, s, {
        prefixCls: d,
        rootPrefixCls: h,
        iconPrefixCls: p,
        okText: n || (s.okCancel ? e.okText : e.justOkText),
        cancelText: r || e.cancelText
      })), t);
    });
  }
  function s() {
    for (var t = this, o = arguments.length, s = new Array(o), c = 0; c < o; c++) {
      s[c] = arguments[c];
    }
    a(n = Object(i.a)(Object(i.a)({}, n), {
      visible: !1,
      afterClose: function () {
        if ("function" === typeof e.afterClose) {
          e.afterClose();
        }
        r.apply(t, s);
      }
    }));
  }
  a(n);
  F.push(s);
  return {
    destroy: s,
    update: function (e) {
      a(n = "function" === typeof e ? e(n) : Object(i.a)(Object(i.a)({}, n), e));
    }
  };
}
function M(e) {
  return Object(i.a)(Object(i.a)({
    icon: o.createElement(O.a, null),
    okCancel: !1
  }, e), {
    type: "warning"
  });
}
function j(e) {
  return Object(i.a)(Object(i.a)({
    icon: o.createElement(E.a, null),
    okCancel: !1
  }, e), {
    type: "info"
  });
}
function L(e) {
  return Object(i.a)(Object(i.a)({
    icon: o.createElement(x.a, null),
    okCancel: !1
  }, e), {
    type: "success"
  });
}
function U(e) {
  return Object(i.a)(Object(i.a)({
    icon: o.createElement(C.a, null),
    okCancel: !1
  }, e), {
    type: "error"
  });
}
function H(e) {
  return Object(i.a)(Object(i.a)({
    icon: o.createElement(O.a, null),
    okCancel: !0
  }, e), {
    type: "confirm"
  });
}
var V = require("../80/index");
var G = require("./605");
var z = function (e, t) {
  var n = e.afterClose;
  var r = e.config;
  var a = o.useState(!0);
  var s = Object(S.a)(a, 2);
  var c = s[0];
  var u = s[1];
  var l = o.useState(r);
  var f = Object(S.a)(l, 2);
  var h = f[0];
  var _ = f[1];
  var A = o.useContext(p.b);
  var g = A.direction;
  var v = A.getPrefixCls;
  var m = v("modal");
  var y = v();
  var b = function () {
    u(!1);
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    var r = t.some(function (e) {
      return e && e.triggerCancel;
    });
    if (h.onCancel && r) {
      h.onCancel();
    }
  };
  o.useImperativeHandle(t, function () {
    return {
      destroy: b,
      update: function (e) {
        _(function (t) {
          return Object(i.a)(Object(i.a)({}, t), e);
        });
      }
    };
  });
  return o.createElement(d.a, {
    componentName: "Modal",
    defaultLocale: G.a.Modal
  }, function (e) {
    return o.createElement(I, Object(i.a)({
      prefixCls: m,
      rootPrefixCls: y
    }, h, {
      close: b,
      visible: c,
      afterClose: n,
      okText: h.okText || (h.okCancel ? e.okText : e.justOkText),
      direction: g,
      cancelText: h.cancelText || e.cancelText
    }));
  });
};
var Q = o.forwardRef(z);
var W = 0;
var K = o.memo(o.forwardRef(function (e, t) {
  var n = function () {
    var e = o.useState([]);
    var t = Object(S.a)(e, 2);
    var n = t[0];
    var r = t[1];
    return [n, o.useCallback(function (e) {
      r(function (t) {
        return [].concat(Object(V.a)(t), [e]);
      });
      return function () {
        r(function (t) {
          return t.filter(function (t) {
            return t !== e;
          });
        });
      };
    }, [])];
  }();
  var r = Object(S.a)(n, 2);
  var i = r[0];
  var a = r[1];
  o.useImperativeHandle(t, function () {
    return {
      patchElement: a
    };
  }, []);
  return o.createElement(o.Fragment, null, i);
}));
function X(e) {
  return N(M(e));
}
var Y = b;
Y.useModal = function () {
  var e = o.useRef(null);
  var t = o.useState([]);
  var n = Object(S.a)(t, 2);
  var r = n[0];
  var i = n[1];
  o.useEffect(function () {
    if (r.length) {
      Object(V.a)(r).forEach(function (e) {
        e();
      });
      i([]);
    }
  }, [r]);
  var a = o.useCallback(function (t) {
    return function (n) {
      var r;
      W += 1;
      var a;
      var s = o.createRef();
      var c = o.createElement(Q, {
        key: "modal-".concat(W),
        config: t(n),
        ref: s,
        afterClose: function () {
          a();
        }
      });
      a = null === (r = e.current) || void 0 === r ? void 0 : r.patchElement(c);
      return {
        destroy: function () {
          function e() {
            var e;
            if (!(null === (e = s.current) || void 0 === e)) {
              e.destroy();
            }
          }
          if (s.current) {
            e();
          } else {
            i(function (t) {
              return [].concat(Object(V.a)(t), [e]);
            });
          }
        },
        update: function (e) {
          function t() {
            var t;
            if (!(null === (t = s.current) || void 0 === t)) {
              t.update(e);
            }
          }
          if (s.current) {
            t();
          } else {
            i(function (e) {
              return [].concat(Object(V.a)(e), [t]);
            });
          }
        }
      };
    };
  }, []);
  return [o.useMemo(function () {
    return {
      info: a(j),
      success: a(L),
      error: a(U),
      warning: a(M),
      confirm: a(H)
    };
  }, []), o.createElement(K, {
    ref: e
  })];
};
Y.info = function (e) {
  return N(j(e));
};
Y.success = function (e) {
  return N(L(e));
};
Y.error = function (e) {
  return N(U(e));
};
Y.warning = X;
Y.warn = X;
Y.confirm = function (e) {
  return N(H(e));
};
Y.destroyAll = function () {
  for (; F.length;) {
    var e = F.pop();
    if (e) {
      e();
    }
  }
};
Y.config = function (e) {
  var t = e.rootPrefixCls;
  Object(B.a)(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead.");
  P = t;
};
export { Y as a };
export default Y;