/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：554
 */

"use strict"

var r = require("react")
var o = require("./50/index")
var i = function (e, t) {
  return (i = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var a
var s
var c
var l = function () {
  return (l = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var o in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, o)) {
        e[o] = t[o]
      }
    }
    return e
  }).apply(this, arguments)
}
!function (e) {
  e.AUTO = "auto"
  e.START = "start"
  e.CENTER = "center"
  e.END = "end"
}(a || (a = {}));
(function (e) {
  e.HORIZONTAL = "horizontal"
  e.VERTICAL = "vertical"
})(s || (s = {}));
(function (e) {
  e.OBSERVED = "observed"
  e.REQUESTED = "requested"
})(c || (c = {}))
var u
var d
var p
var f
var h;
(u = {})[s.VERTICAL] = "scrollTop"
u[s.HORIZONTAL] = "scrollLeft"
var m = u;
(d = {})[s.VERTICAL] = "height"
d[s.HORIZONTAL] = "width"
var g = d;
(p = {})[s.VERTICAL] = "top"
p[s.HORIZONTAL] = "left"
var _ = p;
(f = {})[s.VERTICAL] = "marginTop"
f[s.HORIZONTAL] = "marginLeft"
var v = f;
(h = {})[s.VERTICAL] = "marginBottom"
h[s.HORIZONTAL] = "marginRight"
var b = h
var y = function () {
  function e(e) {
    var /* [auto-meaningful-name] */e$itemCount = e.itemCount
    var /* [auto-meaningful-name] */e$itemSizeGetter = e.itemSizeGetter
    var /* [auto-meaningful-name] */e$estimatedItemSize = e.estimatedItemSize
    this.itemSizeGetter = e$itemSizeGetter
    this.itemCount = e$itemCount
    this.estimatedItemSize = e$estimatedItemSize
    this.itemSizeAndPositionData = {}
    this.lastMeasuredIndex = -1
  }
  e.prototype.updateConfig = function (e) {
    var /* [auto-meaningful-name] */e$itemCount = e.itemCount
    var /* [auto-meaningful-name] */e$itemSizeGetter = e.itemSizeGetter
    var /* [auto-meaningful-name] */e$estimatedItemSize = e.estimatedItemSize
    if (null != e$itemCount) {
      this.itemCount = e$itemCount
    }
    if (null != e$estimatedItemSize) {
      this.estimatedItemSize = e$estimatedItemSize
    }
    if (null != e$itemSizeGetter) {
      this.itemSizeGetter = e$itemSizeGetter
    }
  }
  e.prototype.getLastMeasuredIndex = function () {
    return this.lastMeasuredIndex
  }
  e.prototype.getSizeAndPositionForIndex = function (e) {
    if (e < 0 || e >= this.itemCount) {
      throw Error("Requested index " + e + " is outside of range 0.." + this.itemCount)
    }
    if (e > this.lastMeasuredIndex) {
      for (var t = this.getSizeAndPositionOfLastMeasuredItem(), n = t.offset + t.size, r = this.lastMeasuredIndex + 1; r <= e; r++) {
        var o = this.itemSizeGetter(r)
        if (null == o || isNaN(o)) {
          throw Error("Invalid size returned for index " + r + " of value " + o)
        }
        this.itemSizeAndPositionData[r] = {
          offset: n,
          size: o
        }
        n += o
      }
      this.lastMeasuredIndex = e
    }
    return this.itemSizeAndPositionData[e]
  }
  e.prototype.getSizeAndPositionOfLastMeasuredItem = function () {
    return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : {
      offset: 0,
      size: 0
    }
  }
  e.prototype.getTotalSize = function () {
    var e = this.getSizeAndPositionOfLastMeasuredItem()
    return e.offset + e.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize
  }
  e.prototype.getUpdatedOffsetForIndex = function (e) {
    var /* [auto-meaningful-name] */e$align = e.align
    var n = undefined === e$align ? a.START : e$align
    var /* [auto-meaningful-name] */e$containerSize = e.containerSize
    var /* [auto-meaningful-name] */e$currentOffset = e.currentOffset
    var /* [auto-meaningful-name] */e$targetIndex = e.targetIndex
    if (e$containerSize <= 0) {
      return 0
    }
    var s
    var c = this.getSizeAndPositionForIndex(e$targetIndex)
    var /* [auto-meaningful-name] */c$offset = c.offset
    var u = c$offset - e$containerSize + c.size
    switch (n) {
      case a.END:
        s = u
        break
      case a.CENTER:
        s = c$offset - (e$containerSize - c.size) / 2
        break
      case a.START:
        s = c$offset
        break
      default:
        s = Math.max(u, Math.min(c$offset, e$currentOffset))
    }
    var d = this.getTotalSize()
    return Math.max(0, Math.min(d - e$containerSize, s))
  }
  e.prototype.getVisibleRange = function (e) {
    var /* [auto-meaningful-name] */e$containerSize = e.containerSize
    var /* [auto-meaningful-name] */e$offset = e.offset
    var /* [auto-meaningful-name] */e$overscanCount = e.overscanCount
    if (0 === this.getTotalSize()) {
      return {}
    }
    var o = e$offset + e$containerSize
    var i = this.findNearestItem(e$offset)
    if ("undefined" === typeof i) {
      throw Error("Invalid offset " + e$offset + " specified")
    }
    var a = this.getSizeAndPositionForIndex(i)
    e$offset = a.offset + a.size
    for (var s = i; e$offset < o && s < this.itemCount - 1;) {
      s++
      e$offset += this.getSizeAndPositionForIndex(s).size
    }
    if (e$overscanCount) {
      i = Math.max(0, i - e$overscanCount)
      s = Math.min(s + e$overscanCount, this.itemCount - 1)
    }
    return {
      start: i,
      stop: s
    }
  }
  e.prototype.resetItem = function (e) {
    this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, e - 1)
  }
  e.prototype.findNearestItem = function (e) {
    if (isNaN(e)) {
      throw Error("Invalid offset " + e + " specified")
    }
    e = Math.max(0, e)
    var t = this.getSizeAndPositionOfLastMeasuredItem()
    var n = Math.max(0, this.lastMeasuredIndex)
    return t.offset >= e ? this.binarySearch({
      high: n,
      low: 0,
      offset: e
    }) : this.exponentialSearch({
      index: n,
      offset: e
    })
  }
  e.prototype.binarySearch = function (e) {
    for (var /* [auto-meaningful-name] */e$low = e.low, /* [auto-meaningful-name] */e$high = e.high, /* [auto-meaningful-name] */e$offset = e.offset, o = 0, i = 0; e$low <= e$high;) {
      o = e$low + Math.floor((e$high - e$low) / 2)
      if ((i = this.getSizeAndPositionForIndex(o).offset) === e$offset) {
        return o
      }
      if (i < e$offset) {
        e$low = o + 1
      } else {
        if (i > e$offset) {
          e$high = o - 1
        }
      }
    }
    return e$low > 0 ? e$low - 1 : 0
  }
  e.prototype.exponentialSearch = function (e) {
    for (var /* [auto-meaningful-name] */e$index = e.index, /* [auto-meaningful-name] */e$offset = e.offset, r = 1; e$index < this.itemCount && this.getSizeAndPositionForIndex(e$index).offset < e$offset;) {
      e$index += r
      r *= 2
    }
    return this.binarySearch({
      high: Math.min(e$index, this.itemCount - 1),
      low: Math.floor(e$index / 2),
      offset: e$offset
    })
  }
  return e
}()
var E = {
  overflow: "auto",
  willChange: "transform",
  WebkitOverflowScrolling: "touch"
}
var O = {
  position: "relative",
  width: "100%",
  minHeight: "100%"
}
var w = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%"
}
var C = l({}, w, {
  position: "sticky"
})
var T = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.itemSizeGetter = function (e) {
      return function (n) {
        return t.getSize(n, e)
      }
    }
    t.sizeAndPositionManager = new y({
      itemCount: t.props.itemCount,
      itemSizeGetter: t.itemSizeGetter(t.props.itemSize),
      estimatedItemSize: t.getEstimatedItemSize()
    })
    t.state = {
      offset: t.props.scrollOffset || null != t.props.scrollToIndex && t.getOffsetForIndex(t.props.scrollToIndex) || 0,
      scrollChangeReason: c.REQUESTED
    }
    t.styleCache = {}
    t.getRef = function (e) {
      t.rootNode = e
    }
    t.handleScroll = function (e) {
      var /* [auto-meaningful-name] */t$props$onScroll = t.props.onScroll
      var r = t.getNodeOffset()
      if (!(r < 0 || t.state.offset === r || e.target !== t.rootNode)) {
        t.setState({
          offset: r,
          scrollChangeReason: c.OBSERVED
        })
        if ("function" === typeof t$props$onScroll) {
          t$props$onScroll(r, e)
        }
      }
    }
    return t
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    i(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.componentDidMount = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$scrollOffset = this$props.scrollOffset
    var /* [auto-meaningful-name] */this$props$scrollToIndex = this$props.scrollToIndex
    this.rootNode.addEventListener("scroll", this.handleScroll, {
      passive: true
    })
    if (null != this$props$scrollOffset) {
      this.scrollTo(this$props$scrollOffset)
    } else {
      if (null != this$props$scrollToIndex) {
        this.scrollTo(this.getOffsetForIndex(this$props$scrollToIndex))
      }
    }
  }
  t.prototype.componentWillReceiveProps = function (e) {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$estimatedItemSize = this$props.estimatedItemSize
    var /* [auto-meaningful-name] */this$props$itemCount = this$props.itemCount
    var /* [auto-meaningful-name] */this$props$itemSize = this$props.itemSize
    var /* [auto-meaningful-name] */this$props$scrollOffset = this$props.scrollOffset
    var /* [auto-meaningful-name] */this$props$scrollToAlignment = this$props.scrollToAlignment
    var /* [auto-meaningful-name] */this$props$scrollToIndex = this$props.scrollToIndex
    var l = e.scrollToIndex !== this$props$scrollToIndex || e.scrollToAlignment !== this$props$scrollToAlignment
    var u = e.itemCount !== this$props$itemCount || e.itemSize !== this$props$itemSize || e.estimatedItemSize !== this$props$estimatedItemSize
    if (e.itemSize !== this$props$itemSize) {
      this.sizeAndPositionManager.updateConfig({
        itemSizeGetter: this.itemSizeGetter(e.itemSize)
      })
    }
    if (!(e.itemCount === this$props$itemCount && e.estimatedItemSize === this$props$estimatedItemSize)) {
      this.sizeAndPositionManager.updateConfig({
        itemCount: e.itemCount,
        estimatedItemSize: this.getEstimatedItemSize(e)
      })
    }
    if (u) {
      this.recomputeSizes()
    }
    if (e.scrollOffset !== this$props$scrollOffset) {
      this.setState({
        offset: e.scrollOffset || 0,
        scrollChangeReason: c.REQUESTED
      })
    } else {
      if ("number" === typeof e.scrollToIndex && (l || u)) {
        this.setState({
          offset: this.getOffsetForIndex(e.scrollToIndex, e.scrollToAlignment, e.itemCount),
          scrollChangeReason: c.REQUESTED
        })
      }
    }
  }
  t.prototype.componentDidUpdate = function (e, t) {
    var /* [auto-meaningful-name] */this$state = this.state
    var /* [auto-meaningful-name] */this$state$offset = this$state.offset
    var /* [auto-meaningful-name] */this$state$scrollChangeReason = this$state.scrollChangeReason
    if (t.offset !== this$state$offset && this$state$scrollChangeReason === c.REQUESTED) {
      this.scrollTo(this$state$offset)
    }
  }
  t.prototype.componentWillUnmount = function () {
    this.rootNode.removeEventListener("scroll", this.handleScroll)
  }
  t.prototype.scrollTo = function (e) {
    var /* [auto-meaningful-name] */this$props$scrollDirection = this.props.scrollDirection
    var n = undefined === this$props$scrollDirection ? s.VERTICAL : this$props$scrollDirection
    this.rootNode[m[n]] = e
  }
  t.prototype.getOffsetForIndex = function (e, t, n) {
    if (undefined === t) {
      t = this.props.scrollToAlignment
    }
    if (undefined === n) {
      n = this.props.itemCount
    }
    var /* [auto-meaningful-name] */this$props$scrollDirection = this.props.scrollDirection
    var o = undefined === this$props$scrollDirection ? s.VERTICAL : this$props$scrollDirection
    if (e < 0 || e >= n) {
      e = 0
    }
    return this.sizeAndPositionManager.getUpdatedOffsetForIndex({
      align: t,
      containerSize: this.props[g[o]],
      currentOffset: this.state && this.state.offset || 0,
      targetIndex: e
    })
  }
  t.prototype.recomputeSizes = function (e) {
    if (undefined === e) {
      e = 0
    }
    this.styleCache = {}
    this.sizeAndPositionManager.resetItem(e)
  }
  t.prototype.render = function () {
    var e
    var t = this
    var /* [auto-meaningful-name] */this$props = this.props
    this$props.estimatedItemSize
    var /* [auto-meaningful-name] */this$props$height = this$props.height
    var /* [auto-meaningful-name] */this$props$overscanCount = this$props.overscanCount
    var a = undefined === this$props$overscanCount ? 3 : this$props$overscanCount
    var /* [auto-meaningful-name] */this$props$renderItem = this$props.renderItem
    this$props.itemCount
    this$props.itemSize
    var /* [auto-meaningful-name] */this$props$onItemsRendered = this$props.onItemsRendered
    this$props.onScroll
    var /* [auto-meaningful-name] */this$props$scrollDirection = this$props.scrollDirection
    var p = undefined === this$props$scrollDirection ? s.VERTICAL : this$props$scrollDirection
    this$props.scrollOffset
    this$props.scrollToIndex
    this$props.scrollToAlignment
    var /* [auto-meaningful-name] */this$props$stickyIndices = this$props.stickyIndices
    var /* [auto-meaningful-name] */this$props$style = this$props.style
    var /* [auto-meaningful-name] */this$props$width = this$props.width
    var _ = function (e, t) {
      var n = {}
      for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r]
      }
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
          if (t.indexOf(r[o]) < 0) {
            n[r[o]] = e[r[o]]
          }
        }
      }
      return n
    }(this$props, ["estimatedItemSize", "height", "overscanCount", "renderItem", "itemCount", "itemSize", "onItemsRendered", "onScroll", "scrollDirection", "scrollOffset", "scrollToIndex", "scrollToAlignment", "stickyIndices", "style", "width"])
    var /* [auto-meaningful-name] */this$state$offset = this.state.offset
    var b = this.sizeAndPositionManager.getVisibleRange({
      containerSize: this.props[g[p]] || 0,
      offset: this$state$offset,
      overscanCount: a
    })
    var /* [auto-meaningful-name] */b$start = b.start
    var /* [auto-meaningful-name] */b$stop = b.stop
    var C = []
    var T = l({}, E, this$props$style, {
      height: this$props$height,
      width: this$props$width
    })
    var S = l({}, O, ((e = {})[g[p]] = this.sizeAndPositionManager.getTotalSize(), e))
    if (null != this$props$stickyIndices && 0 !== this$props$stickyIndices.length) {
      this$props$stickyIndices.forEach(function (e) {
        return C.push(this$props$renderItem({
          index: e,
          style: t.getStyle(e, true)
        }))
      })
      if (p === s.HORIZONTAL) {
        S.display = "flex"
      }
    }
    if ("undefined" !== typeof b$start && "undefined" !== typeof b$stop) {
      for (var I = b$start; I <= b$stop; I++) {
        if (!(null != this$props$stickyIndices && this$props$stickyIndices.includes(I))) {
          C.push(this$props$renderItem({
            index: I,
            style: this.getStyle(I, false)
          }))
        }
      }
      if ("function" === typeof this$props$onItemsRendered) {
        this$props$onItemsRendered({
          startIndex: b$start,
          stopIndex: b$stop
        })
      }
    }
    return r.createElement("div", l({
      ref: this.getRef
    }, _, {
      style: T
    }), r.createElement("div", {
      style: S
    }, C))
  }
  t.prototype.getNodeOffset = function () {
    var /* [auto-meaningful-name] */this$props$scrollDirection = this.props.scrollDirection
    var t = undefined === this$props$scrollDirection ? s.VERTICAL : this$props$scrollDirection
    return this.rootNode[m[t]]
  }
  t.prototype.getEstimatedItemSize = function (e) {
    if (undefined === e) {
      e = this.props
    }
    return e.estimatedItemSize || "number" === typeof e.itemSize && e.itemSize || 50
  }
  t.prototype.getSize = function (e, t) {
    return "function" === typeof t ? t(e) : Array.isArray(t) ? t[e] : t
  }
  t.prototype.getStyle = function (e, t) {
    var n = this.styleCache[e]
    if (n) {
      return n
    }
    var r
    var o
    var /* [auto-meaningful-name] */this$props$scrollDirection = this.props.scrollDirection
    var a = undefined === this$props$scrollDirection ? s.VERTICAL : this$props$scrollDirection
    var c = this.sizeAndPositionManager.getSizeAndPositionForIndex(e)
    var /* [auto-meaningful-name] */c$size = c.size
    var /* [auto-meaningful-name] */c$offset = c.offset
    return this.styleCache[e] = t ? l({}, C, ((r = {})[g[a]] = c$size, r[v[a]] = c$offset, r[b[a]] = -(c$offset + c$size), r.zIndex = 1, r)) : l({}, w, ((o = {})[g[a]] = c$size, o[_[a]] = c$offset, o))
  }
  t.defaultProps = {
    overscanCount: 3,
    scrollDirection: s.VERTICAL,
    width: "100%"
  }
  t.propTypes = {
    estimatedItemSize: o.number,
    height: o.oneOfType([o.number, o.string]).isRequired,
    itemCount: o.number.isRequired,
    itemSize: o.oneOfType([o.number, o.array, o.func]).isRequired,
    onScroll: o.func,
    onItemsRendered: o.func,
    overscanCount: o.number,
    renderItem: o.func.isRequired,
    scrollOffset: o.number,
    scrollToIndex: o.number,
    scrollToAlignment: o.oneOf([a.AUTO, a.START, a.CENTER, a.END]),
    scrollDirection: o.oneOf([s.HORIZONTAL, s.VERTICAL]),
    stickyIndices: o.arrayOf(o.number),
    style: o.object,
    width: o.oneOfType([o.number, o.string])
  }
  return t
}(r.PureComponent)
exports.a = T
