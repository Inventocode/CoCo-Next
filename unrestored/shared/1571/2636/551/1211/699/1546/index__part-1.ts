/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1546__part-1
 */

"use strict"

import { u } from "./index__part-0"
import /* [auto-meaningful-name] */$$_$$_$$_$$_80_index from "../../../../80/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_434 from "../../../../434"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_339 from "../../../../339"
import * as /* [auto-meaningful-name] */$_805 from "./805"
var f = function (e) {
  function t(t, n) {
    var r
    r = e.call(this, t, n) || this
    var i
    var o = n && !n.isMounting ? t.enter : t.appear
    r.appearStatus = null
    if (t.in) {
      if (o) {
        i = "exited"
        r.appearStatus = "entering"
      } else {
        i = "entered"
      }
    } else {
      i = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited"
    }
    r.state = {
      status: i
    }
    r.nextCallback = null
    return r
  }
  $$_$$_$$_$$_434.a(t, e)
  t.getDerivedStateFromProps = function (e, t) {
    return e.in && "unmounted" === t.status ? {
      status: "exited"
    } : null
  }
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.componentDidMount = function () {
    this.updateStatus(true, this.appearStatus)
  }
  t$prototype.componentDidUpdate = function (e) {
    var t = null
    if (e !== this.props) {
      var /* [auto-meaningful-name] */this$state$status = this.state.status
      if (this.props.in) {
        if ("entering" !== this$state$status && "entered" !== this$state$status) {
          t = "entering"
        }
      } else {
        if (!("entering" !== this$state$status && "entered" !== this$state$status)) {
          t = "exiting"
        }
      }
    }
    this.updateStatus(false, t)
  }
  t$prototype.componentWillUnmount = function () {
    this.cancelNextCallback()
  }
  t$prototype.getTimeouts = function () {
    var e
    var t
    var n
    var /* [auto-meaningful-name] */this$props$timeout = this.props.timeout
    e = t = n = this$props$timeout
    if (null != this$props$timeout && "number" !== typeof this$props$timeout) {
      e = this$props$timeout.exit
      t = this$props$timeout.enter
      n = undefined !== this$props$timeout.appear ? this$props$timeout.appear : t
    }
    return {
      exit: e,
      enter: t,
      appear: n
    }
  }
  t$prototype.updateStatus = function (e, t) {
    if (undefined === e) {
      e = false
    }
    if (null !== t) {
      this.cancelNextCallback()
      if ("entering" === t) {
        this.performEnter(e)
      } else {
        this.performExit()
      }
    } else {
      if (this.props.unmountOnExit && "exited" === this.state.status) {
        this.setState({
          status: "unmounted"
        })
      }
    }
  }
  t$prototype.performEnter = function (e) {
    var t = this
    var /* [auto-meaningful-name] */this$props$enter = this.props.enter
    var r = this.context ? this.context.isMounting : e
    var i = this.props.nodeRef ? [r] : [$$_$$_$$_$$_80_index.findDOMNode(this), r]
    var o = i[0]
    var a = i[1]
    var s = this.getTimeouts()
    var l = r ? s.appear : s.enter
    if (!e && !this$props$enter || u) {
      this.safeSetState({
        status: "entered"
      }, function () {
        t.props.onEntered(o)
      })
    } else {
      this.props.onEnter(o, a)
      this.safeSetState({
        status: "entering"
      }, function () {
        t.props.onEntering(o, a)
        t.onTransitionEnd(l, function () {
          t.safeSetState({
            status: "entered"
          }, function () {
            t.props.onEntered(o, a)
          })
        })
      })
    }
  }
  t$prototype.performExit = function () {
    var e = this
    var /* [auto-meaningful-name] */this$props$exit = this.props.exit
    var n = this.getTimeouts()
    var r = this.props.nodeRef ? undefined : $$_$$_$$_$$_80_index.findDOMNode(this)
    if (this$props$exit && !u) {
      this.props.onExit(r)
      this.safeSetState({
        status: "exiting"
      }, function () {
        e.props.onExiting(r)
        e.onTransitionEnd(n.exit, function () {
          e.safeSetState({
            status: "exited"
          }, function () {
            e.props.onExited(r)
          })
        })
      })
    } else {
      this.safeSetState({
        status: "exited"
      }, function () {
        e.props.onExited(r)
      })
    }
  }
  t$prototype.cancelNextCallback = function () {
    if (null !== this.nextCallback) {
      this.nextCallback.cancel()
      this.nextCallback = null
    }
  }
  t$prototype.safeSetState = function (e, t) {
    t = this.setNextCallback(t)
    this.setState(e, t)
  }
  t$prototype.setNextCallback = function (e) {
    var t = this
    var n = true
    this.nextCallback = function (r) {
      if (n) {
        n = false
        t.nextCallback = null
        e(r)
      }
    }
    this.nextCallback.cancel = function () {
      n = false
    }
    return this.nextCallback
  }
  t$prototype.onTransitionEnd = function (e, t) {
    this.setNextCallback(t)
    var n = this.props.nodeRef ? this.props.nodeRef.current : $$_$$_$$_$$_80_index.findDOMNode(this)
    var r = null == e && !this.props.addEndListener
    if (n && !r) {
      if (this.props.addEndListener) {
        var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback]
        var o = i[0]
        var a = i[1]
        this.props.addEndListener(o, a)
      }
      if (null != e) {
        setTimeout(this.nextCallback, e)
      }
    } else {
      setTimeout(this.nextCallback, 0)
    }
  }
  t$prototype.render = function () {
    var /* [auto-meaningful-name] */this$state$status = this.state.status
    if ("unmounted" === this$state$status) {
      return null
    }
    var /* [auto-meaningful-name] */this$props = this.props
    var /* [auto-meaningful-name] */this$props$children = this$props.children
    this$props.in
    this$props.mountOnEnter
    this$props.unmountOnExit
    this$props.appear
    this$props.enter
    this$props.exit
    this$props.timeout
    this$props.addEndListener
    this$props.onEnter
    this$props.onEntering
    this$props.onEntered
    this$props.onExit
    this$props.onExiting
    this$props.onExited
    this$props.nodeRef
    var i = $$_$$_$$_$$_339.a(this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"])
    return React.createElement($_805.a.Provider, {
      value: null
    }, "function" === typeof this$props$children ? this$props$children(this$state$status, i) : React.cloneElement(React.Children.only(this$props$children), i))
  }
  return t
}(React.Component)
function d() {}
f.contextType = $_805.a
f.propTypes = {}
f.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: d,
  onEntering: d,
  onEntered: d,
  onExit: d,
  onExiting: d,
  onExited: d
}
f.UNMOUNTED = "unmounted"
f.EXITED = "exited"
f.ENTERING = "entering"
f.ENTERED = "entered"
f.EXITING = "exiting"
export { f }
