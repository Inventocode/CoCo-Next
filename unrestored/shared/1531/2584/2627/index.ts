"use strict";

import r = require("../29");
import i = require("../19");
import o = require("react");
import a = require("./1501");
import s = require("../8");
var c = function __importDefault(module) {
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
}(s);
import u = require("../791");
import l = require("./611");
import f = require("../612");
import d = require("./790/index");
import h = require("./686/index");
import p = require("../789");
import _ = require("./462");
var A;
var g = function () {
  return _.a() && window.document.documentElement;
};
import v = require("../431");
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
  }, true);
}
var y = function (e) {
  var t;
  var n = o.useContext(p.b);
  var s = n.getPopupContainer;
  var _ = n.getPrefixCls;
  var g = n.direction;
  var y = function (t) {
    var n = e.onCancel;
    if (!(null === n || undefined === n)) {
      n(t);
    }
  };
  var b = function (t) {
    var n = e.onOk;
    if (!(null === n || undefined === n)) {
      n(t);
    }
  };
  var w = function (t) {
    var n = e.okText;
    var r = e.okType;
    var a = e.cancelText;
    var s = e.confirmLoading;
    return o.createElement(o.Fragment, null, o.createElement(f.a, i.a({
      onClick: y
    }, e.cancelButtonProps), a || t.cancelText), o.createElement(f.a, i.a({}, d.a(r), {
      loading: s,
      onClick: b
    }, e.okButtonProps), n || t.okText));
  };
  var E = e.prefixCls;
  var x = e.footer;
  var C = e.visible;
  var O = e.wrapClassName;
  var k = e.centered;
  var S = e.getContainer;
  var T = e.closeIcon;
  var B = e.focusTriggerAfterClose;
  var D = undefined === B || B;
  var I = m(e, ["prefixCls", "footer", "visible", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);
  var F = _("modal", E);
  var R = _();
  var P = o.createElement(h.a, {
    componentName: "Modal",
    defaultLocale: l.b()
  }, w);
  var N = o.createElement("span", {
    className: "".concat(F, "-close-x")
  }, T || o.createElement(u.a, {
    className: "".concat(F, "-close-icon")
  }));
  var M = c()(O, (t = {}, r.a(t, "".concat(F, "-centered"), !!k), r.a(t, "".concat(F, "-wrap-rtl"), "rtl" === g), t));
  return o.createElement(a.a, i.a({}, I, {
    getContainer: undefined === S ? s : S,
    prefixCls: F,
    wrapClassName: M,
    footer: undefined === x ? P : x,
    visible: C,
    mousePosition: A,
    onClose: y,
    closeIcon: N,
    focusTriggerAfterClose: D,
    transitionName: v.b(R, "zoom", e.transitionName),
    maskTransitionName: v.b(R, "fade", e.maskTransitionName)
  }));
};
y.defaultProps = {
  width: 520,
  confirmLoading: false,
  visible: false,
  okType: "primary"
};
var b = y;
import w = require("../75/index");
import E = require("./1024");
import x = require("./1023");
import C = require("./1025");
import O = require("./914");
import k = require("../33/index");
function S(e) {
  return !(!e || !e.then);
}
var T = function (e) {
  var t = o.useRef(false);
  var n = o.useRef();
  var r = o.useState(false);
  var a = k.a(r, 2);
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
  var h = e.prefixCls;
  var p = e.buttonProps;
  return o.createElement(f.a, i.a({}, d.a(u), {
    onClick: function (n) {
      var r = e.actionFn;
      var i = e.close;
      if (!t.current) {
        t.current = true;
        if (r) {
          var o;
          if (e.emitEvent) {
            o = r(n);
            if (e.quitOnNullishReturnValue && !S(o)) {
              t.current = false;
              return void i(n);
            }
          } else if (r.length) {
            o = r(i);
            t.current = false;
          } else if (!(o = r())) {
            return void i();
          }
          !function (n) {
            var r = e.close;
            if (S(n)) {
              c(true);
              n.then(function () {
                c(false);
                r.apply(undefined, arguments);
                t.current = false;
              }, function (e) {
                console.error(e);
                c(false);
                t.current = false;
              });
            }
          }(o);
        } else {
          i();
        }
      }
    },
    loading: s,
    prefixCls: h
  }, p, {
    ref: n
  }), l);
};
import B = require("../363/index");
import D = require("./285/index");
var I = function (e) {
  var t = e.icon;
  var n = e.onCancel;
  var i = e.onOk;
  var a = e.close;
  var s = e.zIndex;
  var u = e.afterClose;
  var l = e.visible;
  var f = e.keyboard;
  var d = e.centered;
  var h = e.getContainer;
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
  var k = undefined !== O && O;
  var S = e.closeIcon;
  var I = e.modalRender;
  var F = e.focusTriggerAfterClose;
  B.a(!("string" === typeof t && t.length > 2), "Modal", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(t, "` at https://ant.design/components/icon"));
  var R = e.okType || "primary";
  var P = "".concat(w, "-confirm");
  var N = !("okCancel" in e) || e.okCancel;
  var M = e.width || 416;
  var j = e.style || {};
  var L = undefined === e.mask || e.mask;
  var U = undefined !== e.maskClosable && e.maskClosable;
  var H = null !== e.autoFocusButton && (e.autoFocusButton || "ok");
  var V = c()(P, "".concat(P, "-").concat(e.type), r.a({}, "".concat(P, "-rtl"), "rtl" === y), e.className);
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
    wrapClassName: c()(r.a({}, "".concat(P, "-centered"), !!e.centered)),
    onCancel: function () {
      return a({
        triggerCancel: true
      });
    },
    visible: l,
    title: "",
    footer: "",
    transitionName: v.b(E, "zoom", e.transitionName),
    maskTransitionName: v.b(E, "fade", e.maskTransitionName),
    mask: L,
    maskClosable: U,
    maskStyle: p,
    style: j,
    bodyStyle: C,
    width: M,
    zIndex: s,
    afterClose: u,
    keyboard: f,
    centered: d,
    getContainer: h,
    closable: k,
    closeIcon: S,
    modalRender: I,
    focusTriggerAfterClose: F
  }, o.createElement("div", {
    className: "".concat(P, "-body-wrapper")
  }, o.createElement("div", {
    className: "".concat(P, "-body")
  }, t, undefined === e.title ? null : o.createElement("span", {
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
  var n = i.a(i.a({}, e), {
    close: s,
    visible: true
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
      var e = l.b();
      var c = D.b();
      var u = c.getPrefixCls;
      var f = c.getIconPrefixCls;
      var d = u(undefined, P);
      var h = a || "".concat(d, "-modal");
      var p = f();
      w.render(o.createElement(I, i.a({}, s, {
        prefixCls: h,
        rootPrefixCls: d,
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
    a(n = i.a(i.a({}, n), {
      visible: false,
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
      a(n = "function" === typeof e ? e(n) : i.a(i.a({}, n), e));
    }
  };
}
function M(e) {
  return i.a(i.a({
    icon: o.createElement(O.a, null),
    okCancel: false
  }, e), {
    type: "warning"
  });
}
function j(e) {
  return i.a(i.a({
    icon: o.createElement(E.a, null),
    okCancel: false
  }, e), {
    type: "info"
  });
}
function L(e) {
  return i.a(i.a({
    icon: o.createElement(x.a, null),
    okCancel: false
  }, e), {
    type: "success"
  });
}
function U(e) {
  return i.a(i.a({
    icon: o.createElement(C.a, null),
    okCancel: false
  }, e), {
    type: "error"
  });
}
function H(e) {
  return i.a(i.a({
    icon: o.createElement(O.a, null),
    okCancel: true
  }, e), {
    type: "confirm"
  });
}
import V = require("../80/index");
import G = require("./605");
var z = function (e, t) {
  var n = e.afterClose;
  var r = e.config;
  var a = o.useState(true);
  var s = k.a(a, 2);
  var c = s[0];
  var u = s[1];
  var l = o.useState(r);
  var f = k.a(l, 2);
  var d = f[0];
  var _ = f[1];
  var A = o.useContext(p.b);
  var g = A.direction;
  var v = A.getPrefixCls;
  var m = v("modal");
  var y = v();
  var b = function () {
    u(false);
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    var r = t.some(function (e) {
      return e && e.triggerCancel;
    });
    if (d.onCancel && r) {
      d.onCancel();
    }
  };
  o.useImperativeHandle(t, function () {
    return {
      destroy: b,
      update: function (e) {
        _(function (t) {
          return i.a(i.a({}, t), e);
        });
      }
    };
  });
  return o.createElement(h.a, {
    componentName: "Modal",
    defaultLocale: G.a.Modal
  }, function (e) {
    return o.createElement(I, i.a({
      prefixCls: m,
      rootPrefixCls: y
    }, d, {
      close: b,
      visible: c,
      afterClose: n,
      okText: d.okText || (d.okCancel ? e.okText : e.justOkText),
      direction: g,
      cancelText: d.cancelText || e.cancelText
    }));
  });
};
var Q = o.forwardRef(z);
var W = 0;
var K = o.memo(o.forwardRef(function (e, t) {
  var n = function () {
    var e = o.useState([]);
    var t = k.a(e, 2);
    var n = t[0];
    var r = t[1];
    return [n, o.useCallback(function (e) {
      r(function (t) {
        return [].concat(V.a(t), [e]);
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
  var r = k.a(n, 2);
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
  var n = k.a(t, 2);
  var r = n[0];
  var i = n[1];
  o.useEffect(function () {
    if (r.length) {
      V.a(r).forEach(function (e) {
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
      a = null === (r = e.current) || undefined === r ? undefined : r.patchElement(c);
      return {
        destroy: function () {
          function e() {
            var e;
            if (!(null === (e = s.current) || undefined === e)) {
              e.destroy();
            }
          }
          if (s.current) {
            e();
          } else {
            i(function (t) {
              return [].concat(V.a(t), [e]);
            });
          }
        },
        update: function (e) {
          function t() {
            var t;
            if (!(null === (t = s.current) || undefined === t)) {
              t.update(e);
            }
          }
          if (s.current) {
            t();
          } else {
            i(function (e) {
              return [].concat(V.a(e), [t]);
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
  B.a(false, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead.");
  P = t;
};
export { Y as a };
export default Y;