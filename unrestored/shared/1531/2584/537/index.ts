/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：537
 */

"use strict";

import r = require("../6");
import o = require("../10/index");
import i = require("../8");
var a = function __importDefault(module) {
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
}(i);
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
import l = require("../75/index");
var u = function __importDefault(module) {
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
}(l);
require("./856");
import d = require("../94/index");
var _a;
_a = s.memo(function (e) {
  var t = e.className;
  var n = e.style;
  var i = e.visible;
  var l = e.maskClosable;
  var p = undefined !== l && l;
  var f = e.mask;
  var h = undefined === f || f;
  var m = e.onClose;
  var g = e.children;
  var _ = e.showCloseButton;
  var v = undefined === _ || _;
  var b = e.withPortal;
  var y = undefined !== b && b;
  var E = e.title;
  var O = e.footer;
  var w = s.useRef(null);
  var C = s.useRef(null);
  var T = s.useState(false);
  var S = o.a(T, 2);
  S[0];
  var I = S[1];
  var A = document.getElementById("_cocoDialogContainer");
  if (!A) {
    (A = document.createElement("div")).id = "_cocoDialogContainer";
    document.body.appendChild(A);
  }
  var j = s.useCallback(function () {
    if (m) {
      m();
    }
  }, [m]);
  var N = s.useCallback(function () {
    if (p) {
      j();
    }
  }, [j, p]);
  s.useEffect(function () {
    var e = w.current;
    var t = function (e) {
      var t;
      if (!(null === (t = C.current) || undefined === t ? undefined : t.contains(e.target))) {
        e.stopPropagation();
      }
    };
    if (e) {
      e.addEventListener("keydown", t);
    }
    return function () {
      if (!(null === e || undefined === e)) {
        e.removeEventListener("keydown", t);
      }
    };
  }, []);
  s.useEffect(function () {
    if (i) {
      I(true);
    }
  }, [i]);
  var R = c.a.createElement("div", {
    "data-html2canvas-ignore": "true",
    ref: w,
    tabIndex: -1,
    className: a()("coco-dialog", t),
    style: r.a({
      display: i ? "block" : "none"
    }, n)
  }, h && c.a.createElement("div", {
    className: i ? "coco-dialog-mask" : a()("coco-dialog-mask", "hidden"),
    onClick: N
  }), c.a.createElement("div", {
    className: "coco-dialog-scroll"
  }, c.a.createElement("div", {
    className: i ? a()("coco-dialog-wrapper", "show") : a()("coco-dialog-wrapper", "hidden"),
    onAnimationEnd: function () {
      if (!i) {
        I(false);
      }
    }
  }, c.a.createElement("div", {
    className: E && v ? "coco-dialog-title" : ""
  }, E && c.a.createElement("div", null, E), v && c.a.createElement("span", {
    className: "coco-dialog-close",
    onClick: j
  }, c.a.createElement(d.a, {
    type: "icon-close"
  }))), c.a.createElement("div", {
    className: "coco-dialog-content",
    ref: C
  }, g), O && c.a.createElement("div", {
    className: "coco-dialog-footer"
  }, O))));
  return y ? u.a.createPortal(R, A) : R;
});
export { _a as a };
export default _a;