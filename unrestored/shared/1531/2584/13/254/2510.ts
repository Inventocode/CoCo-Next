"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.EditableInput = void 0;
var r = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1;
      r.configurable = !0;
      if ("value" in r) {
        r.writable = !0;
      }
      Object.defineProperty(e, r.key, r);
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n);
    }
    if (r) {
      e(t, r);
    }
    return t;
  };
}();
var i = require("../../0/index");
var o = s(i);
var a = s(require("../785/104/index"));
function s(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
var c = [38, 40];
var u = 1;
var l = exports.EditableInput = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }(this, t);
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    n.handleBlur = function () {
      if (n.state.blurValue) {
        n.setState({
          value: n.state.blurValue,
          blurValue: null
        });
      }
    };
    n.handleChange = function (e) {
      n.setUpdatedValue(e.target.value, e);
    };
    n.handleKeyDown = function (e) {
      var t;
      var r = function (e) {
        return Number(String(e).replace(/%/g, ""));
      }(e.target.value);
      if (!isNaN(r) && (t = e.keyCode, c.indexOf(t) > -1)) {
        var i = n.getArrowOffset();
        var o = 38 === e.keyCode ? r + i : r - i;
        n.setUpdatedValue(o, e);
      }
    };
    n.handleDrag = function (e) {
      if (n.props.dragLabel) {
        var t = Math.round(n.props.value + e.movementX);
        if (t >= 0 && t <= n.props.dragMax && n.props.onChange) {
          n.props.onChange(n.getValueObjectWithLabel(t), e);
        }
      }
    };
    n.handleMouseDown = function (e) {
      if (n.props.dragLabel) {
        e.preventDefault();
        n.handleDrag(e);
        window.addEventListener("mousemove", n.handleDrag);
        window.addEventListener("mouseup", n.handleMouseUp);
      }
    };
    n.handleMouseUp = function () {
      n.unbindEventListeners();
    };
    n.unbindEventListeners = function () {
      window.removeEventListener("mousemove", n.handleDrag);
      window.removeEventListener("mouseup", n.handleMouseUp);
    };
    n.state = {
      value: String(e.value).toUpperCase(),
      blurValue: String(e.value).toUpperCase()
    };
    n.inputId = "rc-editable-input-" + u++;
    return n;
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t);
      } else {
        e.__proto__ = t;
      }
    }
  })(t, e);
  r(t, [{
    key: "componentDidUpdate",
    value: function (e, t) {
      if (!(this.props.value === this.state.value || e.value === this.props.value && t.value === this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({
            blurValue: String(this.props.value).toUpperCase()
          });
        } else {
          this.setState({
            value: String(this.props.value).toUpperCase(),
            blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.unbindEventListeners();
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function (e) {
      return function (e, t, n) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          });
        } else {
          e[t] = n;
        }
        return e;
      }({}, this.props.label, e);
    }
  }, {
    key: "getArrowOffset",
    value: function () {
      return this.props.arrowOffset || 1;
    }
  }, {
    key: "setUpdatedValue",
    value: function (e, t) {
      var n = this.props.label ? this.getValueObjectWithLabel(e) : e;
      if (this.props.onChange) {
        this.props.onChange(n, t);
      }
      this.setState({
        value: e
      });
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = (0, a.default)({
        default: {
          wrap: {
            position: "relative"
          }
        },
        "user-override": {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        "dragLabel-true": {
          label: {
            cursor: "ew-resize"
          }
        }
      }, {
        "user-override": !0
      }, this.props);
      return o.default.createElement("div", {
        style: t.wrap
      }, o.default.createElement("input", {
        id: this.inputId,
        style: t.input,
        ref: function (t) {
          return e.input = t;
        },
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        placeholder: this.props.placeholder,
        spellCheck: "false"
      }), this.props.label && !this.props.hideLabel ? o.default.createElement("label", {
        htmlFor: this.inputId,
        style: t.label,
        onMouseDown: this.handleMouseDown
      }, this.props.label) : null);
    }
  }]);
  return t;
}(i.PureComponent || i.Component);
exports.default = l;