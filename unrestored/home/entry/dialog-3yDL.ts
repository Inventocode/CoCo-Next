"use strict";

/* harmony export (binding) */
export { EntryDialog };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__base_dialog__ from "../base/dialog-ymrb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__base_button__ from "../button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__style_module_css__ from "../style/module/css-mGwM";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4__style_module_css___default from "../style/module/css-mGwM";
var EntryDialog = function EntryDialog(props) {
  var children = props.children,
    onClose = props.onClose,
    onNextClick = props.onNextClick,
    entryDialogText = props.entryDialogText;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_1_react__.useState)(true),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2__base_dialog__.Dialog, {
    show: show,
    closeBtn: true,
    closeAnimation: true,
    top: "center",
    layout: "custom",
    header: null,
    footer: null,
    onClose: onClose,
    mask: true
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "CUI-entry-dialog-dialog"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "CUI-entry-dialog-content"
  }, entryDialogText || '喵～发布作品前，需要先与魔术喵签订《社区友爱契约》哦！'), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "CUI-entry-dialog-footer"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__base_button__.Button, {
    size: "md",
    type: "transparent-fb",
    className: "CUI-agreement-btn-cancel",
    onClick: function onClick() {
      setShow(false);
    },
    margin: "0 20px 0 0"
  }, '\u4E0B\u6B21\u518D\u8BF4'), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__base_button__.Button, {
    bgColor: "#FEC433",
    type: "transparent-fb",
    size: "md",
    onClick: onNextClick
  }, '\u7ACB\u5373\u524D\u5F80'))));
};

/***/