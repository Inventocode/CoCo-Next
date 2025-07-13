"use strict";

import * as r from "../6";
import * as o from "../10/index";
import * as i from "../8";
import * as a from "../8";
import * as s from "../0/index";
import * as c from "../0/index";
import * as l from "../75/index";
import * as u from "../75/index";
var d = (require("./855"), require("../94/index"));
exports.a = Object(s.memo)(function (e) {
  var t = e.className;
  var n = e.style;
  var i = e.visible;
  var l = e.maskClosable;
  var p = void 0 !== l && l;
  var f = e.mask;
  var h = void 0 === f || f;
  var m = e.onClose;
  var g = e.children;
  var _ = e.showCloseButton;
  var v = void 0 === _ || _;
  var b = e.withPortal;
  var y = void 0 !== b && b;
  var E = e.title;
  var O = e.footer;
  var w = Object(s.useRef)(null);
  var C = Object(s.useRef)(null);
  var T = Object(s.useState)(!1);
  var S = Object(o.a)(T, 2);
  var I = (S[0], S[1]);
  var A = document.getElementById("_cocoDialogContainer");
  if (!A) {
    (A = document.createElement("div")).id = "_cocoDialogContainer";
    document.body.appendChild(A);
  }
  var j = Object(s.useCallback)(function () {
    if (m) {
      m();
    }
  }, [m]);
  var N = Object(s.useCallback)(function () {
    if (p) {
      j();
    }
  }, [j, p]);
  Object(s.useEffect)(function () {
    var e = w.current;
    var t = function (e) {
      var t;
      if (!(null === (t = C.current) || void 0 === t ? void 0 : t.contains(e.target))) {
        e.stopPropagation();
      }
    };
    if (e) {
      e.addEventListener("keydown", t);
    }
    return function () {
      if (!(null === e || void 0 === e)) {
        e.removeEventListener("keydown", t);
      }
    };
  }, []);
  Object(s.useEffect)(function () {
    if (i) {
      I(!0);
    }
  }, [i]);
  var R = c.a.createElement("div", {
    "data-html2canvas-ignore": "true",
    ref: w,
    tabIndex: -1,
    className: a()("coco-dialog", t),
    style: Object(r.a)({
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
        I(!1);
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