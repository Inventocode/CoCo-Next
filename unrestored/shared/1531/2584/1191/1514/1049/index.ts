/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1049
 */

"use strict";

function r(e) {
  return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesSelector = d;
exports.matchesSelectorAndParentsTo = function (e, t, n) {
  var r = e;
  do {
    if (d(r, t)) {
      return true;
    }
    if (r === n) {
      return false;
    }
    r = r.parentNode;
  } while (r);
  return false;
};
exports.addEvent = function (e, t, n, r) {
  if (!e) {
    return;
  }
  var o = c({
    capture: true
  }, r);
  if (e.addEventListener) {
    e.addEventListener(t, n, o);
  } else {
    if (e.attachEvent) {
      e.attachEvent("on" + t, n);
    } else {
      e["on" + t] = n;
    }
  }
};
exports.removeEvent = function (e, t, n, r) {
  if (!e) {
    return;
  }
  var o = c({
    capture: true
  }, r);
  if (e.removeEventListener) {
    e.removeEventListener(t, n, o);
  } else {
    if (e.detachEvent) {
      e.detachEvent("on" + t, n);
    } else {
      e["on" + t] = null;
    }
  }
};
exports.outerHeight = function (e) {
  var t = e.clientHeight;
  var n = e.ownerDocument.defaultView.getComputedStyle(e);
  t += (0, o.int)(n.borderTopWidth);
  return t += (0, o.int)(n.borderBottomWidth);
};
exports.outerWidth = function (e) {
  var t = e.clientWidth;
  var n = e.ownerDocument.defaultView.getComputedStyle(e);
  t += (0, o.int)(n.borderLeftWidth);
  return t += (0, o.int)(n.borderRightWidth);
};
exports.innerHeight = function (e) {
  var t = e.clientHeight;
  var n = e.ownerDocument.defaultView.getComputedStyle(e);
  t -= (0, o.int)(n.paddingTop);
  return t -= (0, o.int)(n.paddingBottom);
};
exports.innerWidth = function (e) {
  var t = e.clientWidth;
  var n = e.ownerDocument.defaultView.getComputedStyle(e);
  t -= (0, o.int)(n.paddingLeft);
  return t -= (0, o.int)(n.paddingRight);
};
exports.offsetXYFromParent = function (e, t, n) {
  var r = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect();
  var o = (e.clientX + t.scrollLeft - r.left) / n;
  var i = (e.clientY + t.scrollTop - r.top) / n;
  return {
    x: o,
    y: i
  };
};
exports.createCSSTransform = function (e, t) {
  var n = p(e, t, "px");
  return l({}, (0, i.browserPrefixToKey)("transform", i.default), n);
};
exports.createSVGTransform = function (e, t) {
  return p(e, t, "");
};
exports.getTranslation = p;
exports.getTouch = function (e, t) {
  return e.targetTouches && (0, o.findInArray)(e.targetTouches, function (e) {
    return t === e.identifier;
  }) || e.changedTouches && (0, o.findInArray)(e.changedTouches, function (e) {
    return t === e.identifier;
  });
};
exports.getTouchIdentifier = function (e) {
  if (e.targetTouches && e.targetTouches[0]) {
    return e.targetTouches[0].identifier;
  }
  if (e.changedTouches && e.changedTouches[0]) {
    return e.changedTouches[0].identifier;
  }
};
exports.addUserSelectStyles = function (e) {
  if (!e) {
    return;
  }
  var t = e.getElementById("react-draggable-style-el");
  if (!t) {
    (t = e.createElement("style")).type = "text/css";
    t.id = "react-draggable-style-el";
    t.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
    t.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
    e.getElementsByTagName("head")[0].appendChild(t);
  }
  if (e.body) {
    f(e.body, "react-draggable-transparent-selection");
  }
};
exports.removeUserSelectStyles = function (e) {
  if (!e) {
    return;
  }
  try {
    if (e.body) {
      h(e.body, "react-draggable-transparent-selection");
    }
    if (e.selection) {
      e.selection.empty();
    } else {
      var t = (e.defaultView || window).getSelection();
      if (t && "Caret" !== t.type) {
        t.removeAllRanges();
      }
    }
  } catch (n) {}
};
exports.addClassName = f;
exports.removeClassName = h;
var o = require("../928");
var i = function (e) {
  if (e && e.__esModule) {
    return e;
  }
  if (null === e || "object" !== r(e) && "function" !== typeof e) {
    return {
      default: e
    };
  }
  var t = a();
  if (t && t.has(e)) {
    return t.get(e);
  }
  var n = {};
  var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
    var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
    if (s && (s.get || s.set)) {
      Object.defineProperty(n, i, s);
    } else {
      n[i] = e[i];
    }
  }
  n.default = e;
  if (t) {
    t.set(e, n);
  }
  return n;
}(require("./1515"));
function a() {
  if ("function" !== typeof WeakMap) {
    return null;
  }
  var e = new WeakMap();
  a = function () {
    return e;
  };
  return e;
}
function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      s(Object(n), true).forEach(function (t) {
        l(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        s(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function l(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
var u = "";
function d(e, t) {
  if (!u) {
    u = (0, o.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function (t) {
      return (0, o.isFunction)(e[t]);
    });
  }
  return !!(0, o.isFunction)(e[u]) && e[u](t);
}
function p(e, t, n) {
  var r = e.x;
  var o = e.y;
  var i = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
  if (t) {
    var a = "".concat("string" === typeof t.x ? t.x : t.x + n);
    var s = "".concat("string" === typeof t.y ? t.y : t.y + n);
    i = "translate(".concat(a, ", ").concat(s, ")") + i;
  }
  return i;
}
function f(e, t) {
  if (e.classList) {
    e.classList.add(t);
  } else {
    if (!e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)")))) {
      e.className += " ".concat(t);
    }
  }
}
function h(e, t) {
  if (e.classList) {
    e.classList.remove(t);
  } else {
    e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
  }
}