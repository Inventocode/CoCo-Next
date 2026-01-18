/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：16__part-0
 */

"use strict"

import { a } from "./index__part-3"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "../50/index"
var o = React1.createContext(null)
var s = {
  notify: function () {}
}
function c() {
  var e = a
  var t = null
  var n = null
  return {
    clear: function () {
      t = null
      n = null
    },
    notify: function () {
      e(function () {
        for (var e = t; e;) {
          e.callback()
          e = e.next
        }
      })
    },
    get: function () {
      for (var e = [], n = t; n;) {
        e.push(n)
        n = n.next
      }
      return e
    },
    subscribe: function (e) {
      var r = true
      var i = n = {
        callback: e,
        next: null,
        prev: n
      }
      if (i.prev) {
        i.prev.next = i
      } else {
        t = i
      }
      return function () {
        if (r && null !== t) {
          r = false
          if (i.next) {
            i.next.prev = i.prev
          } else {
            n = i.prev
          }
          if (i.prev) {
            i.prev.next = i.next
          } else {
            t = i.next
          }
        }
      }
    }
  }
}
var u = function () {
  function e(e, t) {
    this.store = e
    this.parentSub = t
    this.unsubscribe = null
    this.listeners = s
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.addNestedSub = function (e) {
    this.trySubscribe()
    return this.listeners.subscribe(e)
  }
  e$prototype.notifyNestedSubs = function () {
    this.listeners.notify()
  }
  e$prototype.handleChangeWrapper = function () {
    if (this.onStateChange) {
      this.onStateChange()
    }
  }
  e$prototype.isSubscribed = function () {
    return Boolean(this.unsubscribe)
  }
  e$prototype.trySubscribe = function () {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper)
      this.listeners = c()
    }
  }
  e$prototype.tryUnsubscribe = function () {
    if (this.unsubscribe) {
      this.unsubscribe()
      this.unsubscribe = null
      this.listeners.clear()
      this.listeners = s
    }
  }
  return e
}()
var l = function (e) {
  var /* [auto-meaningful-name] */e$store = e.store
  var /* [auto-meaningful-name] */e$context = e.context
  var /* [auto-meaningful-name] */e$children = e.children
  var s = React.useMemo(function () {
    var e = new u(e$store)
    e.onStateChange = e.notifyNestedSubs
    return {
      store: e$store,
      subscription: e
    }
  }, [e$store])
  var c = React.useMemo(function () {
    return e$store.getState()
  }, [e$store])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */s$subscription = s.subscription
    s$subscription.trySubscribe()
    if (c !== e$store.getState()) {
      s$subscription.notifyNestedSubs()
    }
    return function () {
      s$subscription.tryUnsubscribe()
      s$subscription.onStateChange = null
    }
  }, [s, c])
  var l = e$context || o
  return React1.createElement(l.Provider, {
    value: s
  }, e$children)
}
export { o }
export { u }
export { l }
