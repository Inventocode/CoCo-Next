/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2683
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_339 from /* 339 */"../../../../339"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../../../../19"
import * as /* [auto-meaningful-name] */Module_142 from /* 142 */"../../../../142"
import * as /* [auto-meaningful-name] */Module_434 from /* 434 */"../../../../434"
import /* 50 */"../../../../50/index"
import { Children, isValidElement, cloneElement } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_805 from /* 805 */"./805"
function l(e, t) {
  var n = Object.create(null)
  if (e) {
    Children.map(e, function (e) {
      return e
    }).forEach(function (e) {
      n[e.key] = function (e) {
        return t && isValidElement(e) ? t(e) : e
      }(e)
    })
  }
  return n
}
function f(e, t, n) {
  return null != n[t] ? n[t] : e.props[t]
}
function d(e, t, n) {
  var r = l(e.children)
  var i = function (e, t) {
    function n(n) {
      return n in t ? t[n] : e[n]
    }
    e = e || {}
    t = t || {}
    var r
    var i = Object.create(null)
    var o = []
    for (var a in e) if (a in t) {
      if (o.length) {
        i[a] = o
        o = []
      }
    } else {
      o.push(a)
    }
    var s = {}
    for (var c in t) {
      if (i[c]) {
        for (r = 0; r < i[c].length; r++) {
          var u = i[c][r]
          s[i[c][r]] = n(u)
        }
      }
      s[c] = n(c)
    }
    for (r = 0; r < o.length; r++) {
      s[o[r]] = n(o[r])
    }
    return s
  }(t, r)
  Object.keys(i).forEach(function (o) {
    var a = i[o]
    if (isValidElement(a)) {
      var c = o in t
      var u = o in r
      var l = t[o]
      var d = isValidElement(l) && !l.props.in
      if (!u || c && !d) {
        if (u || !c || d) {
          if (u && c && isValidElement(l)) {
            i[o] = cloneElement(a, {
              onExited: n.bind(null, a),
              in: l.props.in,
              exit: f(a, "exit", e),
              enter: f(a, "enter", e)
            })
          }
        } else {
          i[o] = cloneElement(a, {
            in: false
          })
        }
      } else {
        i[o] = cloneElement(a, {
          onExited: n.bind(null, a),
          in: true,
          exit: f(a, "exit", e),
          enter: f(a, "enter", e)
        })
      }
    }
  })
  return i
}
var h = Object.values || function (e) {
  return Object.keys(e).map(function (t) {
    return e[t]
  })
}
var p = function (e) {
  function t(t, n) {
    var r
    var i = (r = e.call(this, t, n) || this).handleExited.bind(Module_142.a(r))
    r.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: i,
      firstRender: true
    }
    return r
  }
  Module_434.a(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.componentDidMount = function () {
    this.mounted = true
    this.setState({
      contextValue: {
        isMounting: false
      }
    })
  }
  t$prototype.componentWillUnmount = function () {
    this.mounted = false
  }
  t.getDerivedStateFromProps = function (e, t) {
    var n
    var r
    var /* [auto-meaningful-name] */t$children = t.children
    var /* [auto-meaningful-name] */t$handleExited = t.handleExited
    return {
      children: t.firstRender ? (n = e, r = t$handleExited, l(n.children, function (e) {
        return cloneElement(e, {
          onExited: r.bind(null, e),
          in: true,
          appear: f(e, "appear", n),
          enter: f(e, "enter", n),
          exit: f(e, "exit", n)
        })
      })) : d(e, t$children, t$handleExited),
      firstRender: false
    }
  }
  t$prototype.handleExited = function (e, t) {
    var n = l(this.props.children)
    if (!(e.key in n)) {
      if (e.props.onExited) {
        e.props.onExited(t)
      }
      if (this.mounted) {
        this.setState(function (t) {
          var n = Module_19.a({}, t.children)
          delete n[e.key]
          return {
            children: n
          }
        })
      }
    }
  }
  t$prototype.render = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$component = this$props.component
    var /* [auto-meaningful-name] */this$props$childFactory = this$props.childFactory
    var i = Module_339.a(this$props, ["component", "childFactory"])
    var /* [auto-meaningful-name] */this$state$contextValue = this.state.contextValue
    var a = h(this.state.children).map(this$props$childFactory)
    delete i.appear
    delete i.enter
    delete i.exit
    return null === this$props$component ? React1.createElement(Module_805.a.Provider, {
      value: this$state$contextValue
    }, a) : React1.createElement(Module_805.a.Provider, {
      value: this$state$contextValue
    }, React1.createElement(this$props$component, i, a))
  }
  return t
}(React1.Component)
p.propTypes = {}
p.defaultProps = {
  component: "div",
  childFactory: function (e) {
    return e
  }
}
export { p as a }
export default p
