"use strict";

export { g as a };
import r = require("../95");
import o = require("../96");
import i = require("../103");
import a = require("../120");
import s = require("../322");
import c = require("../273");
import l = require("../29");
import u = require("../232/index");
var d = function __importDefault(module) {
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
}(u);
import p = require("react");
var f = function __importDefault(module) {
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
}(p);
require("./1513");
var h = {
  "./style_module.css": {
    "btn-wrap": "CUI-button-btn-wrap",
    "btn-tooltip": "CUI-button-btn-tooltip",
    btn: "CUI-button-btn",
    "size-lg": "CUI-button-size-lg",
    "size-md": "CUI-button-size-md",
    "size-sm": "CUI-button-size-sm",
    "size-esm": "CUI-button-size-esm",
    "size-custom": "CUI-button-size-custom",
    primary: "CUI-button-primary",
    disabled: "CUI-button-disabled",
    secondary: "CUI-button-secondary",
    danger: "CUI-button-danger",
    transparent: "CUI-button-transparent",
    "transparent-fb": "CUI-button-transparent-fb"
  }
};
function m(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" === typeof Proxy) {
      return true;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }();
  return function () {
    var n;
    var r = c.a(e);
    if (t) {
      var o = c.a(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else {
      n = r.apply(this, arguments);
    }
    return s.a(this, n);
  };
}
var g = function (e) {
  a.a(n, e);
  var t = m(n);
  function n() {
    var e;
    r.a(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) {
      a[s] = arguments[s];
    }
    e = t.call.apply(t, [this].concat(a));
    l.a(i.a(e), "setClass", function () {
      var t = e.props;
      var n = t.type;
      var r = undefined === n ? "transparent" : n;
      var o = t.size;
      var i = undefined === o ? "md" : o;
      return "".concat(r, " size-").concat(i);
    });
    l.a(i.a(e), "preventMouseEventWhenDisable", function (t) {
      return function (n) {
        if (!e.props.disable) {
          var r = e.props;
          var o = r.onClick;
          var i = r.onContextMenu;
          var a = r.onMouseEnter;
          var s = r.onMouseLeave;
          if ("click" === t && o) {
            o(n);
          } else {
            if ("context" === t && i) {
              i(n);
            } else {
              if ("enter" === t && a) {
                a(n);
              } else {
                if ("leave" === t && s) {
                  s(n);
                }
              }
            }
          }
        }
      };
    });
    l.a(i.a(e), "inserSpaceIfTwoText", function () {
      var t = e.props.children;
      return "string" === typeof t && 2 === t.length && /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(t) ? t.split("").join(" ") : t;
    });
    return e;
  }
  o.a(n, [{
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.bgColor;
      var n = e.tooltip;
      var r = e.width;
      var o = e.height;
      var i = e.dataReport;
      var a = e.margin;
      var s = e.isSelected;
      var c = e.borderRadius;
      var l = e.disable;
      var u = e.className;
      var p = e.padding;
      var m = e.wrapClassName;
      return f.a.createElement("div", {
        className: (m ? m + " " : "") + "CUI-button-btn-wrap",
        style: {
          width: r,
          height: o,
          margin: a,
          borderRadius: c
        }
      }, f.a.createElement("div", {
        id: this.props.id,
        style: {
          borderRadius: c || "",
          backgroundColor: t || undefined,
          padding: p
        },
        onClick: this.preventMouseEventWhenDisable("click"),
        onMouseEnter: this.preventMouseEventWhenDisable("enter"),
        onMouseLeave: this.preventMouseEventWhenDisable("leave"),
        onContextMenu: this.preventMouseEventWhenDisable("context"),
        "data-report-click": i,
        className: ("".concat(s ? "selected" : "", " ").concat(null !== u && undefined !== u ? u : "") ? "".concat(s ? "selected" : "", " ").concat(null !== u && undefined !== u ? u : "") + " " : "") + d()("btn ".concat(l ? "disabled" : "", " ").concat(this.setClass()), h, {
          autoResolveMultipleImports: true,
          handleMissingStyleName: "throw"
        })
      }, this.inserSpaceIfTwoText()), null != n && f.a.createElement("span", {
        className: "CUI-button-btn-tooltip"
      }, n));
    }
  }]);
  return n;
}(f.a.Component);
l.a(g, "defaultProps", {
  type: "transparent",
  size: "md"
});
export default g;