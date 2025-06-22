"use strict";

/* harmony export (binding) */
export { SignAgreementDialog };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__base_dialog__ from "../../base/dialog-ymrb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_button__ from "../../button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_checkbox__ from "../../components/base/checkbox-Bqxa";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__api__ from "../../api-d58N";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__style_module_css__ from "../../style/module/css-SxYT";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8__style_module_css___default from "../../style/module/css-SxYT";
var isRequesting = false;
var SignAgreementDialog = function SignAgreementDialog(props) {
  var children = props.children,
    onClose = props.onClose,
    onSignSuccess = props.onSignSuccess,
    onSignError = props.onSignError;
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_3_react__.useState)(false),
    _useState2 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState, 2),
    isAgreed = _useState2[0],
    setIsAgreed = _useState2[1];
  var _useState3 = Object(__WEBPACK_IMPORTED_MODULE_3_react__.useState)(true),
    _useState4 = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default)(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement(__WEBPACK_IMPORTED_MODULE_4__base_dialog__.Dialog, {
    show: show,
    closeBtn: {
      style: {
        top: 18,
        right: 18
      }
    },
    closeAnimation: true,
    top: "center",
    layout: "custom",
    header: null,
    footer: null,
    onClose: onClose,
    mask: true
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-dialog"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-bg-top"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-bg-left"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-bg-bottom"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-bg-right"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-header"
  }, "\u793E\u533A\u53CB\u597D\u5951\u7EA6"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("img", {
    className: "CUI-sign-agreement-dialog-agree-img",
    src: require("../../unnamed-P5nO")
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-agree-text-main"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement(__WEBPACK_IMPORTED_MODULE_6__base_checkbox__.Checkbox, {
    style: {
      marginRight: 5
    },
    checked: isAgreed,
    onChange: setIsAgreed
  }), "\u6211\u540C\u610F\u52A0\u5165\u7F16\u7A0B\u732B\u793E\u533A\uFF0C\u5728\u793E\u533A\u4E0E\u5176\u4ED6\u5C0F\u4F19\u4F34\u4EA4\u6D41\u65F6\uFF0C\u4F1A\u6587\u660E\u53CB\u7231\uFF0C\u9075\u5B88\u793E\u533A\u89C4\u5219\u3002"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-agree-text-tip"
  }, "\u5B8C\u6210\u7B7E\u8BA2\u52A0\u5165\u7F16\u7A0B\u732B\u793E\u533A\uFF0C\u4E0E\u5176\u4ED6\u8BAD\u7EC3\u5E08\u4E00\u8D77\u53D1\u5E03\u4F5C\u54C1\u3001\u8BC4\u8BBA\u4EA4\u6D41"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("span", {
    className: "CUI-sign-agreement-dialog-sign-btn"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement(__WEBPACK_IMPORTED_MODULE_5__base_button__.Button, {
    disable: !isAgreed,
    bgColor: "#FEC433",
    size: "md",
    type: "transparent-fb",
    onClick: /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!isRequesting) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              isRequesting = true;
              _context.next = 6;
              return __WEBPACK_IMPORTED_MODULE_7__api__.signContract();
            case 6:
              onSignSuccess();
              isRequesting = false;
              setShow(false);
              _context.next = 16;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              isRequesting = false;
              onSignError && onSignError(_context.t0);
            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }))
  }, "\u786E\u5B9A\u7B7E\u8BA2")))));
};

/***/