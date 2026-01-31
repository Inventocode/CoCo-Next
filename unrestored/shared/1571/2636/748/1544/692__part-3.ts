/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：692__part-3
 */

"use strict"

import { b } from "./692__part-0"
import { M } from "./692__part-2"
import * as /* [auto-meaningful-name] */$$_$$_140 from "../../140"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import { Fragment, createElement, Component } from "react"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */$$_$$_21 from "../../21"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_54 from "../../54"
function U(e) {
  var t
  t = e && "object" === $$_$$_107.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_$$_21.a($$_$$_21.a({}, t), {}, {
    key: String(t.key)
  })
}
function H() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(U)
}
function V() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var a = H(e)
  var s = H(t)
  a.forEach(function (e) {
    for (var t = false, a = r; a < t$length; a += 1) {
      var c = s[a]
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return $$_$$_21.a($$_$$_21.a({}, e), {}, {
              status: "add"
            })
          }))
          r = a
        }
        n.push($$_$$_21.a($$_$$_21.a({}, c), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_$$_21.a($$_$$_21.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(s.slice(r).map(function (e) {
      return $$_$$_21.a($$_$$_21.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var c = {}
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    c[e$key] = (c[e$key] || 0) + 1
  })
  var u = Object.keys(c).filter(function (e) {
    return c[e] > 1
  })
  u.forEach(function (e) {
    (n = n.filter(function (t) {
      var /* [auto-meaningful-name] */t$key = t.key
      var /* [auto-meaningful-name] */t$status = t.status
      return t$key !== e || "remove" !== t$status
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep"
      }
    })
  })
  return n
}
var G = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
(function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : M
  var n = function (e) {
    $$_$$_120.a(r, e)
    var n = $$_$$_140.a(r)
    function r() {
      var e
      $$_$$_103.a(this, r);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_$$_21.a($$_$$_21.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_$$_106.a(r, [
      {
        key: "render",
        value: function () {
          var e = this
          var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$component = this$props.component
          var /* [auto-meaningful-name] */this$props$children = this$props.children
          var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
          var c = $$_$$_54.a(this$props, ["component", "children", "onVisibleChanged"])
          var u = this$props$component || Fragment
          var l = {}
          G.forEach(function (e) {
            l[e] = c[e]
            delete c[e]
          })
          delete c.keys
          return createElement(u, c, this$state$keyEntities.map(function (n) {
            var /* [auto-meaningful-name] */n$status = n.status
            var i = $$_$$_54.a(n, ["status"])
            var c = "add" === n$status || "keep" === n$status
            return createElement(t, $$_$$_19.a({}, l, {
              key: i.key,
              visible: c,
              eventProps: i,
              onVisibleChanged: function (t) {
                if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                  this$props$onVisibleChanged(t, {
                    key: i.key
                  })
                }
                if (!t) {
                  e.removeKey(i.key)
                }
              }
            }), this$props$children)
          }))
        }
      }
    ], [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          var /* [auto-meaningful-name] */e$keys = e.keys
          var /* [auto-meaningful-name] */t$keyEntities = t.keyEntities
          var i = H(e$keys)
          return {
            keyEntities: V(t$keyEntities, i).filter(function (e) {
              var t = t$keyEntities.find(function (t) {
                var /* [auto-meaningful-name] */t$key = t.key
                return e.key === t$key
              })
              return !t || "removed" !== t.status || "remove" !== e.status
            })
          }
        }
      }
    ])
    return r
  }(Component)
  n.defaultProps = {
    component: "div"
  }
})(b)
