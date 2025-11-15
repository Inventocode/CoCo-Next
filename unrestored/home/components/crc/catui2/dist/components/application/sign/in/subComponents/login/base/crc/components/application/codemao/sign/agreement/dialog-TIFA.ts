/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：TIFA
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { SignAgreementDialog }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__ from "@babel/runtime/helpers/esm/slicedToArray"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__base_dialog__ from "../../../../../../../../../base/dialog-ymrb"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__base_button__ from "../../../../../../../../../base/button-sg+3"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__base_checkbox__ from "../../../../base/checkbox-Bqxa"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__api__ from "./api-d58N"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__style_module_css__ from "./style.module.css-SxYT"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8__style_module_css___default from "./style.module.css-SxYT"
var isRequesting = false
var SignAgreementDialog = function SignAgreementDialog(props) {
  var children = props.children
  var onClose = props.onClose
  var onSignSuccess = props.onSignSuccess
  var onSignError = props.onSignError
  var _useState = __WEBPACK_IMPORTED_MODULE_3_react__.useState(false)
  var _useState2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState, 2)
  var isAgreed = _useState2[0]
  var setIsAgreed = _useState2[1]
  var _useState3 = __WEBPACK_IMPORTED_MODULE_3_react__.useState(true)
  var _useState4 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_slicedToArray__.default(_useState3, 2)
  var show = _useState4[0]
  var setShow = _useState4[1]
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
  }, "社区友好契约"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-content"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("img", {
    className: "CUI-sign-agreement-dialog-agree-img",
    src: require("./unnamed-P5nO")
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-agree-text-main"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement(__WEBPACK_IMPORTED_MODULE_6__base_checkbox__.Checkbox, {
    style: {
      marginRight: 5
    },
    checked: isAgreed,
    onChange: setIsAgreed
  }), "我同意加入编程猫社区，在社区与其他小伙伴交流时，会文明友爱，遵守社区规则。"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("div", {
    className: "CUI-sign-agreement-dialog-agree-text-tip"
  }, "完成签订加入编程猫社区，与其他训练师一起发布作品、评论交流"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement("span", {
    className: "CUI-sign-agreement-dialog-sign-btn"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement(__WEBPACK_IMPORTED_MODULE_5__base_button__.Button, {
    disable: !isAgreed,
    bgColor: "#FEC433",
    size: "md",
    type: "transparent-fb",
    onClick: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0
              if (!isRequesting) {
                _context.next = 3
                break
              }
              return _context.abrupt("return")
            case 3:
              isRequesting = true
              _context.next = 6
              return __WEBPACK_IMPORTED_MODULE_7__api__.signContract()
            case 6:
              onSignSuccess()
              isRequesting = false
              setShow(false)
              _context.next = 16
              break
            case 11:
              _context.prev = 11
              _context.t0 = _context["catch"](0)
              console.error(_context.t0)
              isRequesting = false
              if (onSignError) {
                onSignError(_context.t0)
              }
            case 16:
            case "end":
              return _context.stop()
          }
        }
      }, _callee, null, [[0, 11]])
    }))
  }, "确定签订")))))
}

/***/
