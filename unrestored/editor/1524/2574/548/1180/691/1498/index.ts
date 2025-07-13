"use strict";

import * as r from "../../../../337";
import * as i from "../../../../430";
var o = (require("../../../../50/index"), require("../../../../0/index"));
import * as a from "../../../../430";
import * as s from "../../../../75/index";
import * as c from "../../../../75/index";
var u = !1;
import * as l from "./792";
var f = function (e) {
  function t(t, n) {
    var r;
    r = e.call(this, t, n) || this;
    var i;
    var o = n && !n.isMounting ? t.enter : t.appear;
    r.appearStatus = null;
    if (t.in) {
      if (o) {
        i = "exited";
        r.appearStatus = "entering";
      } else {
        i = "entered";
      }
    } else {
      i = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited";
    }
    r.state = {
      status: i
    };
    r.nextCallback = null;
    return r;
  }
  Object(i.a)(t, e);
  t.getDerivedStateFromProps = function (e, t) {
    return e.in && "unmounted" === t.status ? {
      status: "exited"
    } : null;
  };
  var n = t.prototype;
  n.componentDidMount = function () {
    this.updateStatus(!0, this.appearStatus);
  };
  n.componentDidUpdate = function (e) {
    var t = null;
    if (e !== this.props) {
      var n = this.state.status;
      if (this.props.in) {
        if ("entering" !== n && "entered" !== n) {
          t = "entering";
        }
      } else {
        if (!("entering" !== n && "entered" !== n)) {
          t = "exiting";
        }
      }
    }
    this.updateStatus(!1, t);
  };
  n.componentWillUnmount = function () {
    this.cancelNextCallback();
  };
  n.getTimeouts = function () {
    var e;
    var t;
    var n;
    var r = this.props.timeout;
    e = t = n = r;
    if (null != r && "number" !== typeof r) {
      e = r.exit;
      t = r.enter;
      n = void 0 !== r.appear ? r.appear : t;
    }
    return {
      exit: e,
      enter: t,
      appear: n
    };
  };
  n.updateStatus = function (e, t) {
    if (void 0 === e) {
      e = !1;
    }
    if (null !== t) {
      this.cancelNextCallback();
      if ("entering" === t) {
        this.performEnter(e);
      } else {
        this.performExit();
      }
    } else {
      if (this.props.unmountOnExit && "exited" === this.state.status) {
        this.setState({
          status: "unmounted"
        });
      }
    }
  };
  n.performEnter = function (e) {
    var t = this;
    var n = this.props.enter;
    var r = this.context ? this.context.isMounting : e;
    var i = this.props.nodeRef ? [r] : [c.a.findDOMNode(this), r];
    var o = i[0];
    var a = i[1];
    var s = this.getTimeouts();
    var l = r ? s.appear : s.enter;
    if (!e && !n || u) {
      this.safeSetState({
        status: "entered"
      }, function () {
        t.props.onEntered(o);
      });
    } else {
      this.props.onEnter(o, a);
      this.safeSetState({
        status: "entering"
      }, function () {
        t.props.onEntering(o, a);
        t.onTransitionEnd(l, function () {
          t.safeSetState({
            status: "entered"
          }, function () {
            t.props.onEntered(o, a);
          });
        });
      });
    }
  };
  n.performExit = function () {
    var e = this;
    var t = this.props.exit;
    var n = this.getTimeouts();
    var r = this.props.nodeRef ? void 0 : c.a.findDOMNode(this);
    if (t && !u) {
      this.props.onExit(r);
      this.safeSetState({
        status: "exiting"
      }, function () {
        e.props.onExiting(r);
        e.onTransitionEnd(n.exit, function () {
          e.safeSetState({
            status: "exited"
          }, function () {
            e.props.onExited(r);
          });
        });
      });
    } else {
      this.safeSetState({
        status: "exited"
      }, function () {
        e.props.onExited(r);
      });
    }
  };
  n.cancelNextCallback = function () {
    if (null !== this.nextCallback) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  n.safeSetState = function (e, t) {
    t = this.setNextCallback(t);
    this.setState(e, t);
  };
  n.setNextCallback = function (e) {
    var t = this;
    var n = !0;
    this.nextCallback = function (r) {
      if (n) {
        n = !1;
        t.nextCallback = null;
        e(r);
      }
    };
    this.nextCallback.cancel = function () {
      n = !1;
    };
    return this.nextCallback;
  };
  n.onTransitionEnd = function (e, t) {
    this.setNextCallback(t);
    var n = this.props.nodeRef ? this.props.nodeRef.current : c.a.findDOMNode(this);
    var r = null == e && !this.props.addEndListener;
    if (n && !r) {
      if (this.props.addEndListener) {
        var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback];
        var o = i[0];
        var a = i[1];
        this.props.addEndListener(o, a);
      }
      if (null != e) {
        setTimeout(this.nextCallback, e);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };
  n.render = function () {
    var e = this.state.status;
    if ("unmounted" === e) {
      return null;
    }
    var t = this.props;
    var n = t.children;
    var i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, Object(r.a)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
    return a.a.createElement(l.a.Provider, {
      value: null
    }, "function" === typeof n ? n(e, i) : a.a.cloneElement(a.a.Children.only(n), i));
  };
  return t;
}(a.a.Component);
function h() {}
f.contextType = l.a;
f.propTypes = {};
f.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: h,
  onEntering: h,
  onEntered: h,
  onExit: h,
  onExiting: h,
  onExited: h
};
f.UNMOUNTED = "unmounted";
f.EXITED = "exited";
f.ENTERING = "entering";
f.ENTERED = "entered";
f.EXITING = "exiting";
export { f as a };