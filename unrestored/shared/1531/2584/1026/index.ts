/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1026
 */

"use strict";

export { y as a };
import r = require("../95");
import i = require("../96");
import o = require("../103");
import a = require("../120");
import s = require("../140");
import c = require("react");
import u = require("./1011");
import l = require("./690");
import f = require("./413");
var d = 0;
var h = {};
function p(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
  var n = d++;
  var r = t;
  function i() {
    if ((r -= 1) <= 0) {
      e();
      delete h[n];
    } else {
      h[n] = f.a(i);
    }
  }
  h[n] = f.a(i);
  return n;
}
p.cancel = function (e) {
  if (undefined !== e) {
    f.a.cancel(h[e]);
    delete h[e];
  }
};
p.ids = h;
var _;
import A = require("../789");
import g = require("../314");
function v(e) {
  return !e || null === e.offsetParent || e.hidden;
}
function m(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return !(t && t[1] && t[2] && t[3]) || !(t[1] === t[2] && t[2] === t[3]);
}
var y = function (e) {
  a.a(n, e);
  var t = s.a(n);
  function n() {
    var e;
    r.a(this, n);
    (e = t.apply(this, arguments)).containerRef = c.createRef();
    e.animationStart = false;
    e.destroyed = false;
    e.onClick = function (t, n) {
      var r;
      var i;
      var a = e.props;
      var s = a.insertExtraNode;
      if (!(a.disabled || !t || v(t) || t.className.indexOf("-leave") >= 0)) {
        e.extraNode = document.createElement("div");
        var c = o.a(e).extraNode;
        var l = e.context.getPrefixCls;
        c.className = "".concat(l(""), "-click-animating-node");
        var f = e.getAttributeName();
        t.setAttribute(f, "true");
        if (n && "#ffffff" !== n && "rgb(255, 255, 255)" !== n && m(n) && !/rgba\((?:\d*, ){3}0\)/.test(n) && "transparent" !== n) {
          c.style.borderColor = n;
          var d = (null === (r = t.getRootNode) || undefined === r ? undefined : r.call(t)) || t.ownerDocument;
          var h = d instanceof Document ? d.body : null !== (i = d.firstChild) && undefined !== i ? i : d;
          _ = u.a("\n      [".concat(l(""), "-click-animating-without-extra-node='true']::after, .").concat(l(""), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n, ";\n      }"), "antd-wave", {
            csp: e.csp,
            attachTo: h
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
            e.animationStart = true;
            e.animationStartId = p(function () {
              e.animationStart = false;
            }, 10);
          }
        };
        t.addEventListener("click", n, true);
        return {
          cancel: function () {
            t.removeEventListener("click", n, true);
          }
        };
      }
    };
    e.renderWave = function (t) {
      var n = t.csp;
      var r = e.props.children;
      e.csp = n;
      if (!c.isValidElement(r)) {
        return r;
      }
      var i = e.containerRef;
      if (l.c(r)) {
        i = l.a(r.ref, e.containerRef);
      }
      return g.a(r, {
        ref: i
      });
    };
    return e;
  }
  i.a(n, [{
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
      this.destroyed = true;
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
export default y;