"use strict";

var r = require("./0/index");
var o = require("./50/index");
var i = function (e, t) {
  return (i = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  })(e, t);
};
var a;
var s;
var c;
var l = function () {
  return (l = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o];
      }
    }
    return e;
  }).apply(this, arguments);
};
!function (e) {
  e.AUTO = "auto";
  e.START = "start";
  e.CENTER = "center";
  e.END = "end";
}(a || (a = {}));
(function (e) {
  e.HORIZONTAL = "horizontal";
  e.VERTICAL = "vertical";
})(s || (s = {}));
(function (e) {
  e.OBSERVED = "observed";
  e.REQUESTED = "requested";
})(c || (c = {}));
var u;
var d;
var p;
var f;
var h;
(u = {})[s.VERTICAL] = "scrollTop";
u[s.HORIZONTAL] = "scrollLeft";
var m = u;
(d = {})[s.VERTICAL] = "height";
d[s.HORIZONTAL] = "width";
var g = d;
(p = {})[s.VERTICAL] = "top";
p[s.HORIZONTAL] = "left";
var _ = p;
(f = {})[s.VERTICAL] = "marginTop";
f[s.HORIZONTAL] = "marginLeft";
var v = f;
(h = {})[s.VERTICAL] = "marginBottom";
h[s.HORIZONTAL] = "marginRight";
var b = h;
var y = function () {
  function e(e) {
    var t = e.itemCount;
    var n = e.itemSizeGetter;
    var r = e.estimatedItemSize;
    this.itemSizeGetter = n;
    this.itemCount = t;
    this.estimatedItemSize = r;
    this.itemSizeAndPositionData = {};
    this.lastMeasuredIndex = -1;
  }
  e.prototype.updateConfig = function (e) {
    var t = e.itemCount;
    var n = e.itemSizeGetter;
    var r = e.estimatedItemSize;
    if (null != t) {
      this.itemCount = t;
    }
    if (null != r) {
      this.estimatedItemSize = r;
    }
    if (null != n) {
      this.itemSizeGetter = n;
    }
  };
  e.prototype.getLastMeasuredIndex = function () {
    return this.lastMeasuredIndex;
  };
  e.prototype.getSizeAndPositionForIndex = function (e) {
    if (e < 0 || e >= this.itemCount) {
      throw Error("Requested index " + e + " is outside of range 0.." + this.itemCount);
    }
    if (e > this.lastMeasuredIndex) {
      for (var t = this.getSizeAndPositionOfLastMeasuredItem(), n = t.offset + t.size, r = this.lastMeasuredIndex + 1; r <= e; r++) {
        var o = this.itemSizeGetter(r);
        if (null == o || isNaN(o)) {
          throw Error("Invalid size returned for index " + r + " of value " + o);
        }
        this.itemSizeAndPositionData[r] = {
          offset: n,
          size: o
        };
        n += o;
      }
      this.lastMeasuredIndex = e;
    }
    return this.itemSizeAndPositionData[e];
  };
  e.prototype.getSizeAndPositionOfLastMeasuredItem = function () {
    return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : {
      offset: 0,
      size: 0
    };
  };
  e.prototype.getTotalSize = function () {
    var e = this.getSizeAndPositionOfLastMeasuredItem();
    return e.offset + e.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
  };
  e.prototype.getUpdatedOffsetForIndex = function (e) {
    var t = e.align;
    var n = void 0 === t ? a.START : t;
    var r = e.containerSize;
    var o = e.currentOffset;
    var i = e.targetIndex;
    if (r <= 0) {
      return 0;
    }
    var s;
    var c = this.getSizeAndPositionForIndex(i);
    var l = c.offset;
    var u = l - r + c.size;
    switch (n) {
      case a.END:
        s = u;
        break;
      case a.CENTER:
        s = l - (r - c.size) / 2;
        break;
      case a.START:
        s = l;
        break;
      default:
        s = Math.max(u, Math.min(l, o));
    }
    var d = this.getTotalSize();
    return Math.max(0, Math.min(d - r, s));
  };
  e.prototype.getVisibleRange = function (e) {
    var t = e.containerSize;
    var n = e.offset;
    var r = e.overscanCount;
    if (0 === this.getTotalSize()) {
      return {};
    }
    var o = n + t;
    var i = this.findNearestItem(n);
    if ("undefined" === typeof i) {
      throw Error("Invalid offset " + n + " specified");
    }
    var a = this.getSizeAndPositionForIndex(i);
    n = a.offset + a.size;
    for (var s = i; n < o && s < this.itemCount - 1;) {
      s++;
      n += this.getSizeAndPositionForIndex(s).size;
    }
    if (r) {
      i = Math.max(0, i - r);
      s = Math.min(s + r, this.itemCount - 1);
    }
    return {
      start: i,
      stop: s
    };
  };
  e.prototype.resetItem = function (e) {
    this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, e - 1);
  };
  e.prototype.findNearestItem = function (e) {
    if (isNaN(e)) {
      throw Error("Invalid offset " + e + " specified");
    }
    e = Math.max(0, e);
    var t = this.getSizeAndPositionOfLastMeasuredItem();
    var n = Math.max(0, this.lastMeasuredIndex);
    return t.offset >= e ? this.binarySearch({
      high: n,
      low: 0,
      offset: e
    }) : this.exponentialSearch({
      index: n,
      offset: e
    });
  };
  e.prototype.binarySearch = function (e) {
    for (var t = e.low, n = e.high, r = e.offset, o = 0, i = 0; t <= n;) {
      o = t + Math.floor((n - t) / 2);
      if ((i = this.getSizeAndPositionForIndex(o).offset) === r) {
        return o;
      }
      if (i < r) {
        t = o + 1;
      } else {
        if (i > r) {
          n = o - 1;
        }
      }
    }
    return t > 0 ? t - 1 : 0;
  };
  e.prototype.exponentialSearch = function (e) {
    for (var t = e.index, n = e.offset, r = 1; t < this.itemCount && this.getSizeAndPositionForIndex(t).offset < n;) {
      t += r;
      r *= 2;
    }
    return this.binarySearch({
      high: Math.min(t, this.itemCount - 1),
      low: Math.floor(t / 2),
      offset: n
    });
  };
  return e;
}();
var E = {
  overflow: "auto",
  willChange: "transform",
  WebkitOverflowScrolling: "touch"
};
var O = {
  position: "relative",
  width: "100%",
  minHeight: "100%"
};
var w = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%"
};
var C = l({}, w, {
  position: "sticky"
});
var T = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.itemSizeGetter = function (e) {
      return function (n) {
        return t.getSize(n, e);
      };
    };
    t.sizeAndPositionManager = new y({
      itemCount: t.props.itemCount,
      itemSizeGetter: t.itemSizeGetter(t.props.itemSize),
      estimatedItemSize: t.getEstimatedItemSize()
    });
    t.state = {
      offset: t.props.scrollOffset || null != t.props.scrollToIndex && t.getOffsetForIndex(t.props.scrollToIndex) || 0,
      scrollChangeReason: c.REQUESTED
    };
    t.styleCache = {};
    t.getRef = function (e) {
      t.rootNode = e;
    };
    t.handleScroll = function (e) {
      var n = t.props.onScroll;
      var r = t.getNodeOffset();
      if (!(r < 0 || t.state.offset === r || e.target !== t.rootNode)) {
        t.setState({
          offset: r,
          scrollChangeReason: c.OBSERVED
        });
        if ("function" === typeof n) {
          n(r, e);
        }
      }
    };
    return t;
  }
  (function (e, t) {
    function n() {
      this.constructor = e;
    }
    i(e, t);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  })(t, e);
  t.prototype.componentDidMount = function () {
    var e = this.props;
    var t = e.scrollOffset;
    var n = e.scrollToIndex;
    this.rootNode.addEventListener("scroll", this.handleScroll, {
      passive: !0
    });
    if (null != t) {
      this.scrollTo(t);
    } else {
      if (null != n) {
        this.scrollTo(this.getOffsetForIndex(n));
      }
    }
  };
  t.prototype.componentWillReceiveProps = function (e) {
    var t = this.props;
    var n = t.estimatedItemSize;
    var r = t.itemCount;
    var o = t.itemSize;
    var i = t.scrollOffset;
    var a = t.scrollToAlignment;
    var s = t.scrollToIndex;
    var l = e.scrollToIndex !== s || e.scrollToAlignment !== a;
    var u = e.itemCount !== r || e.itemSize !== o || e.estimatedItemSize !== n;
    if (e.itemSize !== o) {
      this.sizeAndPositionManager.updateConfig({
        itemSizeGetter: this.itemSizeGetter(e.itemSize)
      });
    }
    if (!(e.itemCount === r && e.estimatedItemSize === n)) {
      this.sizeAndPositionManager.updateConfig({
        itemCount: e.itemCount,
        estimatedItemSize: this.getEstimatedItemSize(e)
      });
    }
    if (u) {
      this.recomputeSizes();
    }
    if (e.scrollOffset !== i) {
      this.setState({
        offset: e.scrollOffset || 0,
        scrollChangeReason: c.REQUESTED
      });
    } else {
      if ("number" === typeof e.scrollToIndex && (l || u)) {
        this.setState({
          offset: this.getOffsetForIndex(e.scrollToIndex, e.scrollToAlignment, e.itemCount),
          scrollChangeReason: c.REQUESTED
        });
      }
    }
  };
  t.prototype.componentDidUpdate = function (e, t) {
    var n = this.state;
    var r = n.offset;
    var o = n.scrollChangeReason;
    if (t.offset !== r && o === c.REQUESTED) {
      this.scrollTo(r);
    }
  };
  t.prototype.componentWillUnmount = function () {
    this.rootNode.removeEventListener("scroll", this.handleScroll);
  };
  t.prototype.scrollTo = function (e) {
    var t = this.props.scrollDirection;
    var n = void 0 === t ? s.VERTICAL : t;
    this.rootNode[m[n]] = e;
  };
  t.prototype.getOffsetForIndex = function (e, t, n) {
    if (void 0 === t) {
      t = this.props.scrollToAlignment;
    }
    if (void 0 === n) {
      n = this.props.itemCount;
    }
    var r = this.props.scrollDirection;
    var o = void 0 === r ? s.VERTICAL : r;
    if (e < 0 || e >= n) {
      e = 0;
    }
    return this.sizeAndPositionManager.getUpdatedOffsetForIndex({
      align: t,
      containerSize: this.props[g[o]],
      currentOffset: this.state && this.state.offset || 0,
      targetIndex: e
    });
  };
  t.prototype.recomputeSizes = function (e) {
    if (void 0 === e) {
      e = 0;
    }
    this.styleCache = {};
    this.sizeAndPositionManager.resetItem(e);
  };
  t.prototype.render = function () {
    var e;
    var t = this;
    var n = this.props;
    n.estimatedItemSize;
    var o = n.height;
    var i = n.overscanCount;
    var a = void 0 === i ? 3 : i;
    var c = n.renderItem;
    n.itemCount;
    n.itemSize;
    var u = n.onItemsRendered;
    n.onScroll;
    var d = n.scrollDirection;
    var p = void 0 === d ? s.VERTICAL : d;
    n.scrollOffset;
    n.scrollToIndex;
    n.scrollToAlignment;
    var f = n.stickyIndices;
    var h = n.style;
    var m = n.width;
    var _ = function (e, t) {
      var n = {};
      for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
          if (t.indexOf(r[o]) < 0) {
            n[r[o]] = e[r[o]];
          }
        }
      }
      return n;
    }(n, ["estimatedItemSize", "height", "overscanCount", "renderItem", "itemCount", "itemSize", "onItemsRendered", "onScroll", "scrollDirection", "scrollOffset", "scrollToIndex", "scrollToAlignment", "stickyIndices", "style", "width"]);
    var v = this.state.offset;
    var b = this.sizeAndPositionManager.getVisibleRange({
      containerSize: this.props[g[p]] || 0,
      offset: v,
      overscanCount: a
    });
    var y = b.start;
    var w = b.stop;
    var C = [];
    var T = l({}, E, h, {
      height: o,
      width: m
    });
    var S = l({}, O, ((e = {})[g[p]] = this.sizeAndPositionManager.getTotalSize(), e));
    if (null != f && 0 !== f.length) {
      f.forEach(function (e) {
        return C.push(c({
          index: e,
          style: t.getStyle(e, !0)
        }));
      });
      if (p === s.HORIZONTAL) {
        S.display = "flex";
      }
    }
    if ("undefined" !== typeof y && "undefined" !== typeof w) {
      for (var I = y; I <= w; I++) {
        if (!(null != f && f.includes(I))) {
          C.push(c({
            index: I,
            style: this.getStyle(I, !1)
          }));
        }
      }
      if ("function" === typeof u) {
        u({
          startIndex: y,
          stopIndex: w
        });
      }
    }
    return Object(r.createElement)("div", l({
      ref: this.getRef
    }, _, {
      style: T
    }), Object(r.createElement)("div", {
      style: S
    }, C));
  };
  t.prototype.getNodeOffset = function () {
    var e = this.props.scrollDirection;
    var t = void 0 === e ? s.VERTICAL : e;
    return this.rootNode[m[t]];
  };
  t.prototype.getEstimatedItemSize = function (e) {
    if (void 0 === e) {
      e = this.props;
    }
    return e.estimatedItemSize || "number" === typeof e.itemSize && e.itemSize || 50;
  };
  t.prototype.getSize = function (e, t) {
    return "function" === typeof t ? t(e) : Array.isArray(t) ? t[e] : t;
  };
  t.prototype.getStyle = function (e, t) {
    var n = this.styleCache[e];
    if (n) {
      return n;
    }
    var r;
    var o;
    var i = this.props.scrollDirection;
    var a = void 0 === i ? s.VERTICAL : i;
    var c = this.sizeAndPositionManager.getSizeAndPositionForIndex(e);
    var u = c.size;
    var d = c.offset;
    return this.styleCache[e] = t ? l({}, C, ((r = {})[g[a]] = u, r[v[a]] = d, r[b[a]] = -(d + u), r.zIndex = 1, r)) : l({}, w, ((o = {})[g[a]] = u, o[_[a]] = d, o));
  };
  t.defaultProps = {
    overscanCount: 3,
    scrollDirection: s.VERTICAL,
    width: "100%"
  };
  t.propTypes = {
    estimatedItemSize: o.number,
    height: Object(o.oneOfType)([o.number, o.string]).isRequired,
    itemCount: o.number.isRequired,
    itemSize: Object(o.oneOfType)([o.number, o.array, o.func]).isRequired,
    onScroll: o.func,
    onItemsRendered: o.func,
    overscanCount: o.number,
    renderItem: o.func.isRequired,
    scrollOffset: o.number,
    scrollToIndex: o.number,
    scrollToAlignment: Object(o.oneOf)([a.AUTO, a.START, a.CENTER, a.END]),
    scrollDirection: Object(o.oneOf)([s.HORIZONTAL, s.VERTICAL]),
    stickyIndices: Object(o.arrayOf)(o.number),
    style: o.object,
    width: Object(o.oneOfType)([o.number, o.string])
  };
  return t;
}(r.PureComponent);
exports.a = T;