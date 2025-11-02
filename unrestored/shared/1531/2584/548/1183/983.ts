/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：983
 */

"use strict"

export { o as a }
import r = require("../../430");
import React = require("react");
var o = function (e) {
  function t(t) {
    var n;
    (n = e.call(this, t) || this)._state = null
    n._del = false
    n._handleChange = function (e) {
      var n$state$value = n.state.value
      var e$target$value = e.target.value
      var e$target = e.target
      var o = e$target$value.length > n$state$value.length
      var n$_del = n._del
      var s = n$state$value === n.props.format(e$target$value)
      n.setState({
        value: e$target$value,
        local: true
      }, function () {
        var e$target$selectionStart = e$target.selectionStart
        var c = n.props.refuse || /[^\d]+/g
        var u = e$target$value.substr(0, e$target$selectionStart).replace(c, "")
        n._state = {
          input: e$target,
          before: u,
          op: o,
          di: n$_del && s,
          del: n$_del
        }
        if (n.props.replace && n.props.replace(n$state$value) && o && !s) {
          for (var l = -1, f = 0; f !== u.length; ++f) {
            l = Math.max(l, e$target$value.toLowerCase().indexOf(u[f].toLowerCase(), l + 1))
          }
          var d = e$target$value.substr(l + 1).replace(c, "")[0]
          l = e$target$value.indexOf(d, l + 1)
          e$target$value = "" + e$target$value.substr(0, l) + e$target$value.substr(l + 1)
        }
        var h = n.props.format(e$target$value)
        if (n$state$value === h) {
          n.setState({
            value: e$target$value
          })
        } else {
          n.props.onChange(h)
        }
      })
    }
    n._hKD = function (e) {
      if ("Delete" === e.code) {
        n._del = true
      }
    }
    n._hKU = function (e) {
      if ("Delete" === e.code) {
        n._del = false
      }
    }
    n.state = {
      value: t.value,
      local: true
    }
    return n
  }
  r.a(t, e)
  t.getDerivedStateFromProps = function (e, t) {
    return {
      value: t.local ? t.value : e.value,
      local: false
    }
  }
  var t$prototype = t.prototype
  t$prototype.render = function () {
    var this$_handleChange = this._handleChange
    var this$state$value = this.state.value
    return (0, this.props.children)({
      value: this$state$value,
      onChange: this$_handleChange
    })
  }
  t$prototype.componentWillUnmount = function () {
    document.removeEventListener("keydown", this._hKD)
    document.removeEventListener("keyup", this._hKU)
  }
  t$prototype.componentDidMount = function () {
    document.addEventListener("keydown", this._hKD)
    document.addEventListener("keyup", this._hKU)
  }
  t$prototype.componentDidUpdate = function () {
    var this$_state = this._state
    if (this$_state) {
      for (var this$state$value = this.state.value, n = -1, r = 0; r !== this$_state.before.length; ++r) {
        n = Math.max(n, this$state$value.toLowerCase().indexOf(this$_state.before[r].toLowerCase(), n + 1))
      }
      if (this.props.replace && (this$_state.op || this$_state.del && !this$_state.di)) {
        for (; this$state$value[n + 1] && (this.props.refuse || /[^\d]+/).test(this$state$value[n + 1]);) {
          n += 1
        }
      }
      this$_state.input.selectionStart = this$_state.input.selectionEnd = n + 1 + (this$_state.di ? 1 : 0)
    }
    this._state = null
  }
  return t
}(React.Component)
export default o
