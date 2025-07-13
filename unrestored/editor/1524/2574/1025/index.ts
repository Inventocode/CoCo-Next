"use strict";

export { y as a };
import * as r from "../95";
import * as i from "../96";
import * as o from "../103";
import * as a from "../120";
import * as s from "../140";
import * as c from "../0/index";
import * as u from "./1010";
import * as l from "./690";
import * as f from "./413";
var h = 0;
var d = {};
function p(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
  var n = h++;
  var r = t;
  function i() {
    if ((r -= 1) <= 0) {
      e();
      delete d[n];
    } else {
      d[n] = Object(f.a)(i);
    }
  }
  d[n] = Object(f.a)(i);
  return n;
}
p.cancel = function (e) {
  if (void 0 !== e) {
    f.a.cancel(d[e]);
    delete d[e];
  }
};
p.ids = d;
var _;
import * as A from "../788";
import * as g from "../314";
function v(e) {
  return !e || null === e.offsetParent || e.hidden;
}
function m(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return !(t && t[1] && t[2] && t[3]) || !(t[1] === t[2] && t[2] === t[3]);
}
var y = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n() {
    var e;
    Object(r.a)(this, n);
    (e = t.apply(this, arguments)).containerRef = c.createRef();
    e.animationStart = !1;
    e.destroyed = !1;
    e.onClick = function (t, n) {
      var r;
      var i;
      var a = e.props;
      var s = a.insertExtraNode;
      if (!(a.disabled || !t || v(t) || t.className.indexOf("-leave") >= 0)) {
        e.extraNode = document.createElement("div");
        var c = Object(o.a)(e).extraNode;
        var l = e.context.getPrefixCls;
        c.className = "".concat(l(""), "-click-animating-node");
        var f = e.getAttributeName();
        if (t.setAttribute(f, "true"), n && "#ffffff" !== n && "rgb(255, 255, 255)" !== n && m(n) && !/rgba\((?:\d*, ){3}0\)/.test(n) && "transparent" !== n) {
          c.style.borderColor = n;
          var h = (null === (r = t.getRootNode) || void 0 === r ? void 0 : r.call(t)) || t.ownerDocument;
          var d = h instanceof Document ? h.body : null !== (i = h.firstChild) && void 0 !== i ? i : h;
          _ = Object(u.a)("\n      [".concat(l(""), "-click-animating-without-extra-node='true']::after, .").concat(l(""), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n, ";\n      }"), "antd-wave", {
            csp: e.csp,
            attachTo: d
          });
        }
        if (s) {
          t.appendChild(c);
        }
        ["transition", "animation"].forEach(function (n) {
          t.addEventListener("".concat(n, "start"), e.onTransitionStart);
          t.addEventListener("".concat(n, "end"), e.onTransitionEnd);
        });
      }
    };
    e.onTransitionStart = function (t) {
      if (!e.destroyed) {
        var n = e.containerRef.current;
        if (t && t.target === n && !e.animationStart) {
          e.resetEffect(n);
        }
      }
    };
    e.onTransitionEnd = function (t) {
      if (t && "fadeEffect" === t.animationName) {
        e.resetEffect(t.target);
      }
    };
    e.bindAnimationEvent = function (t) {
      if (t && t.getAttribute && !t.getAttribute("disabled") && !(t.className.indexOf("disabled") >= 0)) {
        var n = function (n) {
          if ("INPUT" !== n.target.tagName && !v(n.target)) {
            e.resetEffect(t);
            var r = getComputedStyle(t).getPropertyValue("border-top-color") || getComputedStyle(t).getPropertyValue("border-color") || getComputedStyle(t).getPropertyValue("background-color");
            e.clickWaveTimeoutId = window.setTimeout(function () {
              return e.onClick(t, r);
            }, 0);
            p.cancel(e.animationStartId);
            e.animationStart = !0;
            e.animationStartId = p(function () {
              e.animationStart = !1;
            }, 10);
          }
        };
        t.addEventListener("click", n, !0);
        return {
          cancel: function () {
            t.removeEventListener("click", n, !0);
          }
        };
      }
    };
    e.renderWave = function (t) {
      var n = t.csp;
      var r = e.props.children;
      if (e.csp = n, !c.isValidElement(r)) {
        return r;
      }
      var i = e.containerRef;
      if (Object(l.c)(r)) {
        i = Object(l.a)(r.ref, e.containerRef);
      }
      return Object(g.a)(r, {
        ref: i
      });
    };
    return e;
  }
  Object(i.a)(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this.containerRef.current;
      if (e && 1 === e.nodeType) {
        this.instance = this.bindAnimationEvent(e);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      if (this.instance) {
        this.instance.cancel();
      }
      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }
      this.destroyed = !0;
    }
  }, {
    key: "getAttributeName",
    value: function () {
      var e = this.context.getPrefixCls;
      var t = this.props.insertExtraNode;
      return "".concat(e(""), t ? "-click-animating" : "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function (e) {
      var t = this;
      if (e && e !== this.extraNode && e instanceof Element) {
        var n = this.props.insertExtraNode;
        var r = this.getAttributeName();
        e.setAttribute(r, "false");
        if (_) {
          _.innerHTML = "";
        }
        if (n && this.extraNode && e.contains(this.extraNode)) {
          e.removeChild(this.extraNode);
        }
        ["transition", "animation"].forEach(function (n) {
          e.removeEventListener("".concat(n, "start"), t.onTransitionStart);
          e.removeEventListener("".concat(n, "end"), t.onTransitionEnd);
        });
      }
    }
  }, {
    key: "render",
    value: function () {
      return c.createElement(A.a, null, this.renderWave);
    }
  }]);
  return n;
}(c.Component);
y.contextType = A.b;