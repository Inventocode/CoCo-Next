"use strict";

export { d as b };
export { p as a };
var r;
import * as o from "./27";
import * as i from "./40";
import * as a from "./0/index";
import * as s from "./0/index";
if (navigator.platform.match("Mac")) {
  r = "osx";
} else {
  if (navigator.platform.match("Windows")) {
    r = "windows";
  } else {
    if (navigator.platform.match("Linux")) {
      r = "linux";
    }
  }
}
var c = function () {
  function e() {
    Object(o.a)(this, e);
    this.handlers = new Array();
  }
  Object(i.a)(e, [{
    key: "addHandler",
    value: function (e) {
      this.handlers.push(e);
    }
  }, {
    key: "removeHandler",
    value: function (e) {
      var t = this.handlers.indexOf(e);
      if (-1 !== t) {
        this.handlers.splice(t, 1);
      }
    }
  }, {
    key: "dispatch",
    value: function (e) {
      var t = !1;
      this.handlers.forEach(function (n) {
        if (u(e, n.keys)) {
          t = t || !1 !== n.callback();
        }
      });
      return t;
    }
  }]);
  return e;
}();
var l = s.a.createContext(new c());
var u = function e(t, n) {
  if ("string" === typeof n) {
    return t === n;
  }
  if (Array.isArray(n)) {
    return n.includes(t);
  }
  if ("object" === typeof n) {
    var o = n[r || "windows"];
    return !!o && e(t, o);
  }
  return !1;
};
function d(e) {
  var t = e.keys;
  var n = e.callback;
  var r = e.disabled;
  var o = Object(a.useContext)(l);
  Object(a.useEffect)(function () {
    if (!r) {
      var e = {
        keys: t,
        callback: n
      };
      o.addHandler(e);
      return function () {
        return o.removeHandler(e);
      };
    }
  }, [t, n, r, o]);
  return null;
}
function p(e) {
  var t = e.children;
  var n = e.useCapture;
  var r = e.emitter;
  var o = Object(a.useRef)(new c());
  Object(a.useEffect)(function () {
    var e = function (e) {
      var t = document.activeElement;
      if (t) {
        var n = t.tagName;
        if ("INPUT" === n || "TEXTAREA" === n) {
          return;
        }
        if (t.getAttribute("contenteditable")) {
          return;
        }
      }
      var r = [];
      if (e.altKey) {
        r.push("alt");
      }
      if (e.ctrlKey) {
        r.push("control");
      }
      if (e.metaKey) {
        r.push("command");
      }
      if (e.key) {
        r.push(e.key.toLowerCase());
      }
      var i = r.join("+");
      if (!1 !== o.current.dispatch(i)) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    };
    var t = r || document;
    t.addEventListener("keydown", e, n);
    return function () {
      return t.removeEventListener("keydown", e, n);
    };
  }, [n, r]);
  return s.a.createElement(l.Provider, {
    value: o.current
  }, t);
}