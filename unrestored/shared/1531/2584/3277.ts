"use strict";

export { v as getCLS };
export { g as getFCP };
export { h as getFID };
export { y as getLCP };
export { F as getTTFB };
var i;
var a;
var r = function () {
  return "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12);
};
var o = function (t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
  return {
    name: t,
    value: n,
    delta: 0,
    entries: [],
    id: r(),
    isFinal: !1
  };
};
var u = function (t, n) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      var e = new PerformanceObserver(function (t) {
        return t.getEntries().map(n);
      });
      e.observe({
        type: t,
        buffered: !0
      });
      return e;
    }
  } catch (t) {}
};
var c = !1;
var s = !1;
var p = function (t) {
  c = !t.persisted;
};
var f = function () {
  addEventListener("pagehide", p);
  addEventListener("beforeunload", function () {});
};
var d = function (t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!s) {
    f();
    s = !0;
  }
  addEventListener("visibilitychange", function (n) {
    var e = n.timeStamp;
    if ("hidden" === document.visibilityState) {
      t({
        timeStamp: e,
        isUnloading: c
      });
    }
  }, {
    capture: !0,
    once: n
  });
};
var l = function (t, n, e, i) {
  var a;
  return function () {
    if (e && n.isFinal) {
      e.disconnect();
    }
    if (n.value >= 0 && (i || n.isFinal || "hidden" === document.visibilityState)) {
      n.delta = n.value - (a || 0);
      if (n.delta || n.isFinal || void 0 === a) {
        t(n);
        a = n.value;
      }
    }
  };
};
var v = function (t) {
  var n;
  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  var i = o("CLS", 0);
  var a = function (t) {
    if (!t.hadRecentInput) {
      i.value += t.value;
      i.entries.push(t);
      n();
    }
  };
  var r = u("layout-shift", a);
  if (r) {
    n = l(t, i, r, e);
    d(function (t) {
      var e = t.isUnloading;
      r.takeRecords().map(a);
      if (e) {
        i.isFinal = !0;
      }
      n();
    });
  }
};
var m = function () {
  if (void 0 === i) {
    i = "hidden" === document.visibilityState ? 0 : 1 / 0;
    d(function (t) {
      var n = t.timeStamp;
      return i = n;
    }, !0);
  }
  return {
    get timeStamp() {
      return i;
    }
  };
};
var g = function (t) {
  var n;
  var e = o("FCP");
  var i = m();
  var a = u("paint", function (t) {
    if ("first-contentful-paint" === t.name && t.startTime < i.timeStamp) {
      e.value = t.startTime;
      e.isFinal = !0;
      e.entries.push(t);
      n();
    }
  });
  if (a) {
    n = l(t, e, a);
  }
};
var h = function (t) {
  var n = o("FID");
  var e = m();
  var i = function (t) {
    if (t.startTime < e.timeStamp) {
      n.value = t.processingStart - t.startTime;
      n.entries.push(t);
      n.isFinal = !0;
      r();
    }
  };
  var a = u("first-input", i);
  var r = l(t, n, a);
  if (a) {
    d(function () {
      a.takeRecords().map(i);
      a.disconnect();
    }, !0);
  } else {
    if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
      window.perfMetrics.onFirstInputDelay(function (t, i) {
        if (i.timeStamp < e.timeStamp) {
          n.value = t;
          n.isFinal = !0;
          n.entries = [{
            entryType: "first-input",
            name: i.type,
            target: i.target,
            cancelable: i.cancelable,
            startTime: i.timeStamp,
            processingStart: i.timeStamp + t
          }];
          r();
        }
      });
    }
  }
};
var S = function () {
  if (!a) {
    a = new Promise(function (t) {
      return ["scroll", "keydown", "pointerdown"].map(function (n) {
        addEventListener(n, t, {
          once: !0,
          passive: !0,
          capture: !0
        });
      });
    });
  }
  return a;
};
var y = function (t) {
  var n;
  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  var i = o("LCP");
  var a = m();
  var r = function (t) {
    var e = t.startTime;
    if (e < a.timeStamp) {
      i.value = e;
      i.entries.push(t);
    } else {
      i.isFinal = !0;
    }
    n();
  };
  var c = u("largest-contentful-paint", r);
  if (c) {
    n = l(t, i, c, e);
    var s = function () {
      if (!i.isFinal) {
        c.takeRecords().map(r);
        i.isFinal = !0;
        n();
      }
    };
    S().then(s);
    d(s, !0);
  }
};
var F = function (t) {
  var n;
  var e = o("TTFB");
  n = function () {
    try {
      var n = performance.getEntriesByType("navigation")[0] || function () {
        var t = performance.timing;
        var n = {
          entryType: "navigation",
          startTime: 0
        };
        for (var e in t) if ("navigationStart" !== e && "toJSON" !== e) {
          n[e] = Math.max(t[e] - t.navigationStart, 0);
        }
        return n;
      }();
      e.value = e.delta = n.responseStart;
      e.entries = [n];
      e.isFinal = !0;
      t(e);
    } catch (t) {}
  };
  if ("complete" === document.readyState) {
    setTimeout(n, 0);
  } else {
    addEventListener("pageshow", n);
  }
};