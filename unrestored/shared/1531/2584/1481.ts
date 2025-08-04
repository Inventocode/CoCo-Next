"use strict";

(function (e) {
  var r = require("./10/index");
  var o = require("react");
  var i = function __importDefault(module) {
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
  }(o);
  var a = require("./702");
  var s = require("./16/index");
  var c = require("./8");
  var l = function __importDefault(module) {
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
  }(c);
  var u = require("./13/index");
  var d = require("./2");
  var p = require("./101");
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
  var h = require("./188");
  exports.a = Object(o.memo)(function () {
    var t = Object(s.e)(function (e) {
      return e.block.get("commonInputDialog");
    });
    var n = t.visible;
    var c = t.title;
    var p = t.placeholder;
    var m = t.defaultValue;
    var g = t.maxLength;
    var _ = void 0 === g ? 1 / 0 : g;
    var v = t.validator;
    var b = t.confirmCallback;
    var y = t.cancelCallback;
    var E = Object(a.a)().formatMessage;
    var O = Object(o.useRef)(null);
    var w = Object(s.d)();
    var C = Object(o.useState)("");
    var T = Object(r.a)(C, 2);
    var S = T[0];
    var I = T[1];
    var A = Object(o.useState)(m || "");
    var j = Object(r.a)(A, 2);
    var N = j[0];
    var R = j[1];
    Object(o.useEffect)(function () {
      var t;
      R(m || "");
      if (n) {
        if (!(null === (t = O.current) || void 0 === t)) {
          t.focus();
        }
        e(function () {
          var e;
          if (!(null === (e = O.current) || void 0 === e)) {
            e.select();
          }
        });
        I("");
      }
    }, [n, m]);
    var k = function () {
      if (!(null === y || void 0 === y)) {
        y.call(null);
      }
      w(Object(d.jh)());
    };
    var x = function () {
      if (!S && N) {
        if (!(null === b || void 0 === b)) {
          b.call(null, N);
        }
        w(Object(d.jh)());
      }
    };
    return i.a.createElement(u.f, {
      visible: n,
      className: l()(f.a.nameDialog),
      onClose: k,
      withPortal: !0
    }, i.a.createElement(h.a, {
      useCapture: !0
    }, i.a.createElement(h.b, {
      keys: "enter",
      callback: x
    })), i.a.createElement("p", {
      className: f.a.dialogTitle
    }, c && E({
      id: c
    }) || ""), i.a.createElement("div", {
      className: f.a.inputWrapper
    }, i.a.createElement("span", null, E({
      id: "name"
    })), i.a.createElement(u.k, {
      ref: O,
      warning: !!S,
      placeholder: p && E({
        id: p
      }),
      onChange: function (e) {
        var t = null === v || void 0 === v ? void 0 : v.call(null, e);
        R(e);
        I(t || "");
      },
      maxLength: _,
      value: N
    }), S && i.a.createElement("div", {
      className: f.a.warningTips
    }, " ", E({
      id: S
    }))), i.a.createElement("div", {
      className: f.a.confirmBox
    }, i.a.createElement(u.d, {
      onClick: k
    }, E({
      id: "cancel"
    })), i.a.createElement(u.d, {
      onClick: x,
      type: "primary",
      disabled: !!S || !N
    }, E({
      id: "confirm"
    }))));
  });
}).call(this, require("./795/625/index").setImmediate);