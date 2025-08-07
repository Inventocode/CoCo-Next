"use strict";

(function (e) {
  var r = require("react");
  var o = function __importDefault(module) {
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
  }(r);
  var i = require("resize-observer-polyfill");
  require("./848");
  var a = require("../../16/index");
  var s = require("../../5");
  var c = require("../../64");
  var l = require("../../15");
  function u(e) {
    return e instanceof HTMLInputElement ? e.value : e.innerHTML || "";
  }
  function d(e) {
    return e.replace(/<div><br><\/div>/g, "\n").replace(/<div>|<br>/g, "\n").replace(/<\/div>/g, "");
  }
  function p(e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : s.q.FIXED;
    var r = arguments.length > 3 ? arguments[3] : undefined;
    var o = document.getElementById("COCO_APP_ZONE");
    var i = getComputedStyle(e);
    if (o) {
      var a = e.getClientRects()[0];
      var c = a.width;
      var l = a.height;
      var u = a.top;
      var d = a.left;
      var p = o.getClientRects()[0];
      var f = p.top;
      var h = p.left;
      if (n & s.q.AUTO_WIDTH) {
        t.style.width = "auto";
      } else {
        t.style.width = c / r + "px";
      }
      if (n & s.q.AUTO_HEIGHT) {
        t.style.height = "auto";
      } else {
        t.style.height = l / r + "px";
      }
      t.style.top = (u - f) / r + "px";
      t.style.left = (d - h) / r + "px";
      t.style.fontSize = i.fontSize;
      t.style.color = i.color;
      t.style.lineHeight = i.lineHeight;
      t.style.textAlign = i.textAlign;
      t.style.letterSpacing = i.letterSpacing;
      t.style.fontFamily = i.fontFamily;
      t.style.whiteSpace = i.whiteSpace;
      t.style.display = i.display;
      t.style.justifyContent = i.justifyContent;
      t.style.alignItems = i.alignItems;
      t.style.minWidth = i.minWidth;
      t.style.maxWidth = i.maxWidth;
      t.style.minHeight = i.minHeight;
      t.style.maxHeight = i.maxHeight;
    }
  }
  function f(t) {
    var n = t.target;
    var f = t.callback;
    var h = t.options;
    var m = undefined === h ? {} : h;
    var g = m.sizeAdaptive;
    var _ = undefined === g ? s.q.FIXED : g;
    var v = m.maxLength;
    var b = undefined === v ? 1 / 0 : v;
    var y = m.isMultipleRow;
    var E = undefined === y || y;
    var O = r.useRef(null);
    var w = r.useRef();
    var C = a.e(function (e) {
      return e.common.stageScale;
    });
    r.useEffect(function () {
      var t = O.current;
      if (t && n) {
        w.current = n;
        p(n, t, _, C);
        n.style.opacity = "0";
        t.contentEditable = "true";
        t.innerHTML = u(n);
        e(function () {
          c.b(t);
        });
      }
    }, [f, _, C, n]);
    r.useEffect(function () {
      var e = O.current;
      if (E && e) {
        var t = l.p(function (e) {
          f(e);
        }, 60);
        var n = new i.default(function () {
          var n = d(e.innerHTML);
          t(n);
        });
        n.observe(e);
        return function () {
          if (n) {
            n.disconnect();
          }
          n = null;
        };
      }
    }, [f, b, E]);
    return o.a.createElement("div", {
      className: "coco-widget-editor-div",
      ref: O,
      onBlur: function () {
        var e = O.current;
        if (e) {
          if (w.current) {
            w.current.style.opacity = "1";
          }
          e.style.display = "none";
        }
      },
      onDoubleClick: function () {
        var e = O.current;
        if (e) {
          c.c(e);
        }
      },
      onInput: function (e) {
        var t = O.current;
        if (t) {
          var n = d(t.innerHTML);
          if (n.length >= b) {
            t.innerHTML = n.slice(0, b);
            c.b(t);
          }
        }
      },
      onPaste: function (e) {
        if ((null === e || undefined === e ? undefined : e.clipboardData) && document.execCommand) {
          e.preventDefault();
          var t = e.clipboardData.getData("text/plain");
          document.execCommand("insertText", false, t);
        }
      }
    });
  }
  function h(t) {
    var n = t.target;
    var i = t.callback;
    var c = t.options;
    var l = (undefined === c ? {} : c).sizeAdaptive;
    var d = undefined === l ? s.q.FIXED : l;
    var f = r.useRef(null);
    var h = r.useRef();
    var m = a.e(function (e) {
      return e.common.stageScale;
    });
    r.useEffect(function () {
      var t = f.current;
      if (t && n) {
        var r = u(n);
        h.current = n;
        p(n, t, d, m);
        n.style.opacity = "0";
        t.contentEditable = "true";
        t.value = r;
        e(function () {
          t.selectionEnd = r.length;
          t.selectionStart = r.length;
          t.focus();
        });
      }
    }, [i, d, m, n]);
    return o.a.createElement("input", {
      onKeyDown: function (e) {
        if (13 === e.keyCode) {
          e.currentTarget.blur();
        }
      },
      onDoubleClick: function (e) {
        e.target.select();
      },
      type: "text",
      onBlur: function (e) {
        var t = e.target;
        if (t) {
          if (h.current) {
            h.current.style.opacity = "1";
          }
          t.style.display = "none";
        }
        i(e.target.value);
      },
      ref: f,
      className: "coco-widget-editor-input"
    });
  }
  exports.a = function (e) {
    var t = e.options;
    var n = (undefined === t ? {} : t).isMultipleRow;
    var r = undefined === n || n;
    return o.a.createElement("div", {
      className: "coco-widget-editor"
    }, r ? o.a.createElement(f, e) : o.a.createElement(h, e));
  };
}).call(this, require("../../795/625/index").setImmediate);