/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：a918
 */

"use strict";

/* unused harmony export Hint */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ from "@babel/runtime/helpers/esm/extends";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutProperties__ from "@babel/runtime/helpers/esm/objectWithoutProperties";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__style_module_css__ from "./style.module.css-5Ird";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_module_css___default from "./style.module.css-5Ird";
var _excluded = ["text", "img", "timeout"];
;
var Hint = function Hint(_ref) {
  var text = _ref.text;
  var img = _ref.img;
  var timeout = _ref.timeout;
  var props = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutProperties__.default(_ref, _excluded);
  var ref = __WEBPACK_IMPORTED_MODULE_2_react__.useRef(null);
  __WEBPACK_IMPORTED_MODULE_2_react__.useEffect(function () {
    ref.current.style.visibility = "visible";
    var id = setTimeout(function () {
      ref.current.style.visibility = "hidden";
    }, timeout || 3000);
    return function () {
      clearTimeout(id);
    };
  }, [text, img, timeout]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("div", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__.default({
    ref: ref,
    className: "CUI-hint-hint" + (" " + (props ? props.className || "" : ""))
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("img", {
    src: img,
    alt: "hint"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement("span", null, text));
};

/***/