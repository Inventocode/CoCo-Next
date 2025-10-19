/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2631
 */

"use strict";

import r = require("../../../337");
import i = require("../../../19");
import o = require("../../../103");
import a = require("../../../430");
require("../../../50/index");
import s = require("react");
var c = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(s);
import u = require("./1505/793");
function l(e, t) {
  var n = Object.create(null);
  if (e) {
    s.Children.map(e, function (e) {
      return e;
    }).forEach(function (e) {
      n[e.key] = function (e) {
        return t && s.isValidElement(e) ? t(e) : e;
      }(e);
    });
  }
  return n;
}
function f(e, t, n) {
  return null != n[t] ? n[t] : e.props[t];
}
function d(e, t, n) {
  var r = l(e.children);
  var i = function (e, t) {
    function n(n) {
      return n in t ? t[n] : e[n];
    }
    e = e || {};
    t = t || {};
    var r;
    var i = Object.create(null);
    var o = [];
    for (var a in e) if (a in t) {
      if (o.length) {
        i[a] = o;
        o = [];
      }
    } else {
      o.push(a);
    }
    var s = {};
    for (var c in t) {
      if (i[c]) {
        for (r = 0; r < i[c].length; r++) {
          var u = i[c][r];
          s[i[c][r]] = n(u);
        }
      }
      s[c] = n(c);
    }
    for (r = 0; r < o.length; r++) {
      s[o[r]] = n(o[r]);
    }
    return s;
  }(t, r);
  Object.keys(i).forEach(function (o) {
    var a = i[o];
    if (s.isValidElement(a)) {
      var c = o in t;
      var u = o in r;
      var l = t[o];
      var d = s.isValidElement(l) && !l.props.in;
      if (!u || c && !d) {
        if (u || !c || d) {
          if (u && c && s.isValidElement(l)) {
            i[o] = s.cloneElement(a, {
              onExited: n.bind(null, a),
              in: l.props.in,
              exit: f(a, "exit", e),
              enter: f(a, "enter", e)
            });
          }
        } else {
          i[o] = s.cloneElement(a, {
            in: false
          });
        }
      } else {
        i[o] = s.cloneElement(a, {
          onExited: n.bind(null, a),
          in: true,
          exit: f(a, "exit", e),
          enter: f(a, "enter", e)
        });
      }
    }
  });
  return i;
}
var h = Object.values || function (e) {
  return Object.keys(e).map(function (t) {
    return e[t];
  });
};
var p = function (e) {
  function t(t, n) {
    var r;
    var i = (r = e.call(this, t, n) || this).handleExited.bind(o.a(r));
    r.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: i,
      firstRender: true
    };
    return r;
  }
  a.a(t, e);
  var n = t.prototype;
  n.componentDidMount = function () {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  n.componentWillUnmount = function () {
    this.mounted = false;
  };
  t.getDerivedStateFromProps = function (e, t) {
    var n;
    var r;
    var i = t.children;
    var o = t.handleExited;
    return {
      children: t.firstRender ? (n = e, r = o, l(n.children, function (e) {
        return s.cloneElement(e, {
          onExited: r.bind(null, e),
          in: true,
          appear: f(e, "appear", n),
          enter: f(e, "enter", n),
          exit: f(e, "exit", n)
        });
      })) : d(e, i, o),
      firstRender: false
    };
  };
  n.handleExited = function (e, t) {
    var n = l(this.props.children);
    if (!(e.key in n)) {
      if (e.props.onExited) {
        e.props.onExited(t);
      }
      if (this.mounted) {
        this.setState(function (t) {
          var n = i.a({}, t.children);
          delete n[e.key];
          return {
            children: n
          };
        });
      }
    }
  };
  n.render = function () {
    var e = this.props;
    var t = e.component;
    var n = e.childFactory;
    var i = r.a(e, ["component", "childFactory"]);
    var o = this.state.contextValue;
    var a = h(this.state.children).map(n);
    delete i.appear;
    delete i.enter;
    delete i.exit;
    return null === t ? c.a.createElement(u.a.Provider, {
      value: o
    }, a) : c.a.createElement(u.a.Provider, {
      value: o
    }, c.a.createElement(t, i, a));
  };
  return t;
}(c.a.Component);
p.propTypes = {};
p.defaultProps = {
  component: "div",
  childFactory: function (e) {
    return e;
  }
};
export { p as a };
export default p;