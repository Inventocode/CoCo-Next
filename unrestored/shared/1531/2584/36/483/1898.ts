!function () {
  "use strict";

  if ("object" === typeof window) {
    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
      if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
          get: function () {
            return this.intersectionRatio > 0;
          }
        });
      }
    } else {
      var e = function (e) {
        for (var t = window.document, n = i(t); n;) {
          n = i(t = n.ownerDocument);
        }
        return t;
      }();
      var t = [];
      var n = null;
      var r = null;
      a.prototype.THROTTLE_TIMEOUT = 100;
      a.prototype.POLL_INTERVAL = null;
      a.prototype.USE_MUTATION_OBSERVER = !0;
      a._setupCrossOriginUpdater = function () {
        if (!n) {
          n = function (e, n) {
            r = e && n ? d(e, n) : {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
            t.forEach(function (e) {
              e._checkForIntersections();
            });
          };
        }
        return n;
      };
      a._resetCrossOriginUpdater = function () {
        n = null;
        r = null;
      };
      a.prototype.observe = function (e) {
        if (!this._observationTargets.some(function (t) {
          return t.element == e;
        })) {
          if (!e || 1 != e.nodeType) {
            throw new Error("target must be an Element");
          }
          this._registerInstance();
          this._observationTargets.push({
            element: e,
            entry: null
          });
          this._monitorIntersections(e.ownerDocument);
          this._checkForIntersections();
        }
      };
      a.prototype.unobserve = function (e) {
        this._observationTargets = this._observationTargets.filter(function (t) {
          return t.element != e;
        });
        this._unmonitorIntersections(e.ownerDocument);
        if (0 == this._observationTargets.length) {
          this._unregisterInstance();
        }
      };
      a.prototype.disconnect = function () {
        this._observationTargets = [];
        this._unmonitorAllIntersections();
        this._unregisterInstance();
      };
      a.prototype.takeRecords = function () {
        var e = this._queuedEntries.slice();
        this._queuedEntries = [];
        return e;
      };
      a.prototype._initThresholds = function (e) {
        var t = e || [0];
        if (!Array.isArray(t)) {
          t = [t];
        }
        return t.sort().filter(function (e, t, n) {
          if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) {
            throw new Error("threshold must be a number between 0 and 1 inclusively");
          }
          return e !== n[t - 1];
        });
      };
      a.prototype._parseRootMargin = function (e) {
        var t = (e || "0px").split(/\s+/).map(function (e) {
          var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
          if (!t) {
            throw new Error("rootMargin must be specified in pixels or percent");
          }
          return {
            value: parseFloat(t[1]),
            unit: t[2]
          };
        });
        t[1] = t[1] || t[0];
        t[2] = t[2] || t[0];
        t[3] = t[3] || t[1];
        return t;
      };
      a.prototype._monitorIntersections = function (t) {
        var n = t.defaultView;
        if (n && -1 == this._monitoringDocuments.indexOf(t)) {
          var r = this._checkForIntersections;
          var o = null;
          var a = null;
          if (this.POLL_INTERVAL) {
            o = n.setInterval(r, this.POLL_INTERVAL);
          } else {
            s(n, "resize", r, !0);
            s(t, "scroll", r, !0);
            if (this.USE_MUTATION_OBSERVER && "MutationObserver" in n) {
              (a = new n.MutationObserver(r)).observe(t, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
              });
            }
          }
          this._monitoringDocuments.push(t);
          this._monitoringUnsubscribes.push(function () {
            var e = t.defaultView;
            if (e) {
              if (o) {
                e.clearInterval(o);
              }
              c(e, "resize", r, !0);
            }
            c(t, "scroll", r, !0);
            if (a) {
              a.disconnect();
            }
          });
          var u = this.root && (this.root.ownerDocument || this.root) || e;
          if (t != u) {
            var l = i(t);
            if (l) {
              this._monitorIntersections(l.ownerDocument);
            }
          }
        }
      };
      a.prototype._unmonitorIntersections = function (t) {
        var n = this._monitoringDocuments.indexOf(t);
        if (-1 != n) {
          var r = this.root && (this.root.ownerDocument || this.root) || e;
          if (!this._observationTargets.some(function (e) {
            var n = e.element.ownerDocument;
            if (n == t) {
              return !0;
            }
            for (; n && n != r;) {
              var o = i(n);
              if ((n = o && o.ownerDocument) == t) {
                return !0;
              }
            }
            return !1;
          })) {
            var o = this._monitoringUnsubscribes[n];
            if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), o(), t != r) {
              var a = i(t);
              if (a) {
                this._unmonitorIntersections(a.ownerDocument);
              }
            }
          }
        }
      };
      a.prototype._unmonitorAllIntersections = function () {
        var e = this._monitoringUnsubscribes.slice(0);
        this._monitoringDocuments.length = 0;
        this._monitoringUnsubscribes.length = 0;
        for (var t = 0; t < e.length; t++) {
          e[t]();
        }
      };
      a.prototype._checkForIntersections = function () {
        if (this.root || !n || r) {
          var e = this._rootIsInDom();
          var t = e ? this._getRootRect() : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
          };
          this._observationTargets.forEach(function (r) {
            var i = r.element;
            var a = l(i);
            var s = this._rootContainsTarget(i);
            var c = r.entry;
            var u = e && s && this._computeTargetAndRootIntersection(i, a, t);
            var f = null;
            if (this._rootContainsTarget(i)) {
              if (!(n && !this.root)) {
                f = t;
              }
            } else {
              f = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
              };
            }
            var d = r.entry = new o({
              time: window.performance && performance.now && performance.now(),
              target: i,
              boundingClientRect: a,
              rootBounds: f,
              intersectionRect: u
            });
            if (c) {
              if (e && s) {
                if (this._hasCrossedThreshold(c, d)) {
                  this._queuedEntries.push(d);
                }
              } else {
                if (c && c.isIntersecting) {
                  this._queuedEntries.push(d);
                }
              }
            } else {
              this._queuedEntries.push(d);
            }
          }, this);
          if (this._queuedEntries.length) {
            this._callback(this.takeRecords(), this);
          }
        }
      };
      a.prototype._computeTargetAndRootIntersection = function (t, i, o) {
        if ("none" != window.getComputedStyle(t).display) {
          for (var a = i, s = p(t), c = !1; !c && s;) {
            var f = null;
            var h = 1 == s.nodeType ? window.getComputedStyle(s) : {};
            if ("none" == h.display) {
              return null;
            }
            if (s == this.root || 9 == s.nodeType) {
              if (c = !0, s == this.root || s == e) {
                if (n && !this.root) {
                  if (!r || 0 == r.width && 0 == r.height) {
                    s = null;
                    f = null;
                    a = null;
                  } else {
                    f = r;
                  }
                } else {
                  f = o;
                }
              } else {
                var _ = p(s);
                var A = _ && l(_);
                var g = _ && this._computeTargetAndRootIntersection(_, A, o);
                if (A && g) {
                  s = _;
                  f = d(A, g);
                } else {
                  s = null;
                  a = null;
                }
              }
            } else {
              var v = s.ownerDocument;
              if (s != v.body && s != v.documentElement && "visible" != h.overflow) {
                f = l(s);
              }
            }
            if (f && (a = u(f, a)), !a) {
              break;
            }
            s = s && p(s);
          }
          return a;
        }
      };
      a.prototype._getRootRect = function () {
        var t;
        if (this.root && !_(this.root)) {
          t = l(this.root);
        } else {
          var n = _(this.root) ? this.root : e;
          var r = n.documentElement;
          var i = n.body;
          t = {
            top: 0,
            left: 0,
            right: r.clientWidth || i.clientWidth,
            width: r.clientWidth || i.clientWidth,
            bottom: r.clientHeight || i.clientHeight,
            height: r.clientHeight || i.clientHeight
          };
        }
        return this._expandRectByRootMargin(t);
      };
      a.prototype._expandRectByRootMargin = function (e) {
        var t = this._rootMarginValues.map(function (t, n) {
          return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100;
        });
        var n = {
          top: e.top - t[0],
          right: e.right + t[1],
          bottom: e.bottom + t[2],
          left: e.left - t[3]
        };
        n.width = n.right - n.left;
        n.height = n.bottom - n.top;
        return n;
      };
      a.prototype._hasCrossedThreshold = function (e, t) {
        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1;
        var r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (n !== r) {
          for (var i = 0; i < this.thresholds.length; i++) {
            var o = this.thresholds[i];
            if (o == n || o == r || o < n !== o < r) {
              return !0;
            }
          }
        }
      };
      a.prototype._rootIsInDom = function () {
        return !this.root || h(e, this.root);
      };
      a.prototype._rootContainsTarget = function (t) {
        var n = this.root && (this.root.ownerDocument || this.root) || e;
        return h(n, t) && (!this.root || n == t.ownerDocument);
      };
      a.prototype._registerInstance = function () {
        if (t.indexOf(this) < 0) {
          t.push(this);
        }
      };
      a.prototype._unregisterInstance = function () {
        var e = t.indexOf(this);
        if (-1 != e) {
          t.splice(e, 1);
        }
      };
      window.IntersectionObserver = a;
      window.IntersectionObserverEntry = o;
    }
  }
  function i(e) {
    try {
      return e.defaultView && e.defaultView.frameElement || null;
    } catch (t) {
      return null;
    }
  }
  function o(e) {
    this.time = e.time;
    this.target = e.target;
    this.rootBounds = f(e.rootBounds);
    this.boundingClientRect = f(e.boundingClientRect);
    this.intersectionRect = f(e.intersectionRect || {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    });
    this.isIntersecting = !!e.intersectionRect;
    var t = this.boundingClientRect;
    var n = t.width * t.height;
    var r = this.intersectionRect;
    var i = r.width * r.height;
    this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0;
  }
  function a(e, t) {
    var n = t || {};
    if ("function" != typeof e) {
      throw new Error("callback must be a function");
    }
    if (n.root && 1 != n.root.nodeType && 9 != n.root.nodeType) {
      throw new Error("root must be a Document or Element");
    }
    this._checkForIntersections = function (e, t) {
      var n = null;
      return function () {
        if (!n) {
          n = setTimeout(function () {
            e();
            n = null;
          }, t);
        }
      };
    }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
    this._callback = e;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(n.rootMargin);
    this.thresholds = this._initThresholds(n.threshold);
    this.root = n.root || null;
    this.rootMargin = this._rootMarginValues.map(function (e) {
      return e.value + e.unit;
    }).join(" ");
    this._monitoringDocuments = [];
    this._monitoringUnsubscribes = [];
  }
  function s(e, t, n, r) {
    if ("function" == typeof e.addEventListener) {
      e.addEventListener(t, n, r || !1);
    } else {
      if ("function" == typeof e.attachEvent) {
        e.attachEvent("on" + t, n);
      }
    }
  }
  function c(e, t, n, r) {
    if ("function" == typeof e.removeEventListener) {
      e.removeEventListener(t, n, r || !1);
    } else {
      if ("function" == typeof e.detatchEvent) {
        e.detatchEvent("on" + t, n);
      }
    }
  }
  function u(e, t) {
    var n = Math.max(e.top, t.top);
    var r = Math.min(e.bottom, t.bottom);
    var i = Math.max(e.left, t.left);
    var o = Math.min(e.right, t.right);
    var a = o - i;
    var s = r - n;
    return a >= 0 && s >= 0 && {
      top: n,
      bottom: r,
      left: i,
      right: o,
      width: a,
      height: s
    } || null;
  }
  function l(e) {
    var t;
    try {
      t = e.getBoundingClientRect();
    } catch (n) {}
    return t ? (t.width && t.height || (t = {
      top: t.top,
      right: t.right,
      bottom: t.bottom,
      left: t.left,
      width: t.right - t.left,
      height: t.bottom - t.top
    }), t) : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function f(e) {
    return !e || "x" in e ? e : {
      top: e.top,
      y: e.top,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      right: e.right,
      width: e.width,
      height: e.height
    };
  }
  function d(e, t) {
    var n = t.top - e.top;
    var r = t.left - e.left;
    return {
      top: n,
      left: r,
      height: t.height,
      width: t.width,
      bottom: n + t.height,
      right: r + t.width
    };
  }
  function h(e, t) {
    for (var n = t; n;) {
      if (n == e) {
        return !0;
      }
      n = p(n);
    }
    return !1;
  }
  function p(t) {
    var n = t.parentNode;
    return 9 == t.nodeType && t != e ? i(t) : (n && n.assignedSlot && (n = n.assignedSlot.parentNode), n && 11 == n.nodeType && n.host ? n.host : n);
  }
  function _(e) {
    return e && 9 === e.nodeType;
  }
}();