"use strict";

export { o as a };
var r = require("../../430");
var i = require("react");
var o = function (e) {
  function t(t) {
    var n;
    (n = e.call(this, t) || this)._state = null;
    n._del = !1;
    n._handleChange = function (e) {
      var t = n.state.value;
      var r = e.target.value;
      var i = e.target;
      var o = r.length > t.length;
      var a = n._del;
      var s = t === n.props.format(r);
      n.setState({
        value: r,
        local: !0
      }, function () {
        var e = i.selectionStart;
        var c = n.props.refuse || /[^\d]+/g;
        var u = r.substr(0, e).replace(c, "");
        n._state = {
          input: i,
          before: u,
          op: o,
          di: a && s,
          del: a
        };
        if (n.props.replace && n.props.replace(t) && o && !s) {
          for (var l = -1, f = 0; f !== u.length; ++f) {
            l = Math.max(l, r.toLowerCase().indexOf(u[f].toLowerCase(), l + 1));
          }
          var d = r.substr(l + 1).replace(c, "")[0];
          l = r.indexOf(d, l + 1);
          r = "" + r.substr(0, l) + r.substr(l + 1);
        }
        var h = n.props.format(r);
        if (t === h) {
          n.setState({
            value: r
          });
        } else {
          n.props.onChange(h);
        }
      });
    };
    n._hKD = function (e) {
      if ("Delete" === e.code) {
        n._del = !0;
      }
    };
    n._hKU = function (e) {
      if ("Delete" === e.code) {
        n._del = !1;
      }
    };
    n.state = {
      value: t.value,
      local: !0
    };
    return n;
  }
  Object(r.a)(t, e);
  t.getDerivedStateFromProps = function (e, t) {
    return {
      value: t.local ? t.value : e.value,
      local: !1
    };
  };
  var n = t.prototype;
  n.render = function () {
    var e = this._handleChange;
    var t = this.state.value;
    return (0, this.props.children)({
      value: t,
      onChange: e
    });
  };
  n.componentWillUnmount = function () {
    document.removeEventListener("keydown", this._hKD);
    document.removeEventListener("keyup", this._hKU);
  };
  n.componentDidMount = function () {
    document.addEventListener("keydown", this._hKD);
    document.addEventListener("keyup", this._hKU);
  };
  n.componentDidUpdate = function () {
    var e = this._state;
    if (e) {
      for (var t = this.state.value, n = -1, r = 0; r !== e.before.length; ++r) {
        n = Math.max(n, t.toLowerCase().indexOf(e.before[r].toLowerCase(), n + 1));
      }
      if (this.props.replace && (e.op || e.del && !e.di)) {
        for (; t[n + 1] && (this.props.refuse || /[^\d]+/).test(t[n + 1]);) {
          n += 1;
        }
      }
      e.input.selectionStart = e.input.selectionEnd = n + 1 + (e.di ? 1 : 0);
    }
    this._state = null;
  };
  return t;
}(i.Component);
export default o;