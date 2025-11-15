/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2156
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ConnectionDB = undefined
var r = require("tslib")
var i = require("inversify")
var o = function () {
  function e() {
    this.connections = []
    this.connections = new Array()
  }
  e.prototype.add_connection = function (e) {
    if (e.in_db) {
      throw new Error("Connection already in database.")
    }
    if (!e.get_source_block().is_in_flyout) {
      var t = this.find_position_for_connection(e)
      this.connections.splice(t, 0, e)
      e.in_db = true
    }
  }
  e.prototype.find_connection = function (e) {
    if (!this.connections.length) {
      return -1
    }
    var t = this.find_position_for_connection(e)
    if (t >= this.connections.length) {
      return -1
    }
    for (var n = e.y_, r = t, i = t; r >= 0 && this.connections[r].y_ == n;) {
      if (this.connections[r] == e) {
        return r
      }
      r--
    }
    for (; i < this.connections.length && this.connections[i].y_ == n;) {
      if (this.connections[i] == e) {
        return i
      }
      i++
    }
    return -1
  }
  e.prototype.find_position_for_connection = function (e) {
    if (!this.connections.length) {
      return 0
    }
    for (var t = 0, /* [auto-meaningful-name] */this$connections$length = this.connections.length; t < this$connections$length;) {
      var r = Math.floor((t + this$connections$length) / 2)
      if (this.connections[r].y_ < e.y_) {
        t = r + 1
      } else {
        if (!(this.connections[r].y_ > e.y_)) {
          t = r
          break
        }
        this$connections$length = r
      }
    }
    return t
  }
  e.prototype.remove_connection = function (e) {
    if (!e.in_db) {
      throw new Error("Connection not in database.")
    }
    var t = this.find_connection(e)
    if (-1 == t) {
      throw new Error("Unable to find connection in connectionDB.")
    }
    e.in_db = false
    this.connections.splice(t, 1)
  }
  e.prototype.get_neighbours = function (e, t) {
    for (var n = e.x_, r = e.y_, /* [auto-meaningful-name] */this$connections = this.connections, o = 0, a = this$connections.length - 2, s = a; o < s;) {
      if (this$connections[s].y_ < r) {
        o = s
      } else {
        a = s
      }
      s = Math.floor((o + a) / 2)
    }
    var c = []
    function u(e) {
      var o = n - this$connections[e].x_
      var a = r - this$connections[e].y_
      if (Math.sqrt(o * o + a * a) <= t) {
        c.push(this$connections[e])
      }
      return a < t
    }
    o = s
    a = s
    if (this$connections.length) {
      for (; o >= 0 && u(o);) {
        o--
      }
      do {
        a++
      } while (a < this$connections.length && u(a))
    }
    return c
  }
  e.prototype.is_in_y_range = function (e, t, n) {
    return Math.abs(this.connections[e].y_ - t) <= n
  }
  e.prototype.search_for_closest = function (e, t, n) {
    if (!e.source_block.is_stack_connectable() || !this.connections.length) {
      return {
        connection: undefined,
        radius: t
      }
    }
    var r = e.y_
    var i = e.x_
    e.x_ = i + n[0]
    e.y_ = r + n[1]
    for (var o, a = this.find_position_for_connection(e), s = undefined, c = t, u = a - 1; u >= 0 && this.is_in_y_range(u, e.y_, t);) {
      o = this.connections[u]
      if (e.is_connection_allowed(o, c)) {
        s = o
        c = o.distance_from(e)
      }
      u--
    }
    for (var l = a; l < this.connections.length && this.is_in_y_range(l, e.y_, t);) {
      o = this.connections[l]
      if (e.is_connection_allowed(o, c)) {
        s = o
        c = o.distance_from(e)
      }
      l++
    }
    e.x_ = i
    e.y_ = r
    return {
      connection: s,
      radius: c
    }
  }
  return e = (0, r.__decorate)([(0, i.injectable)()], e)
}()
exports.ConnectionDB = o
