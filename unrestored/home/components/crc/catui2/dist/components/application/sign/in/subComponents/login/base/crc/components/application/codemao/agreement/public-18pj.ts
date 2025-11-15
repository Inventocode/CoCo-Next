/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：18pj
 */

"use strict"

/* unused harmony export showCodemaoAgreement */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react_dom__ from "react-dom"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react_dom___default from "react-dom"
/**
 * 弹出猫厂友好协议
 * @param options
 * @return closeFn 关闭友好协议模块的方法
 */
var showCodemaoAgreement = /*#__PURE__*/function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee(options) {
    var CodemaoAgreement
    var div
    var closeFn
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            CodemaoAgreement = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.lazy(function () {
              return import("../agreement-uuPn").then(function (module) {
                return {
                  default: module.CodemaoAgreement
                }
              })
            })
            div = document.createElement("div")
            document.body.appendChild(div)
            closeFn = function closeFn() {
              __WEBPACK_IMPORTED_MODULE_3_react_dom___default.unmountComponentAtNode(div)
              document.body.removeChild(div)
            }
            __WEBPACK_IMPORTED_MODULE_3_react_dom___default.render(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2_react___default.Suspense, {
              fallback: null
            }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.createElement(CodemaoAgreement, {
              onSignSuccess: options === null || options === undefined ? undefined : options.onSignSuccess,
              onSignError: options === null || options === undefined ? undefined : options.onSignError,
              entryDialogText: options === null || options === undefined ? undefined : options.entryDialogText,
              onClose: function onClose() {
                // Dialog关闭后不会自动从DOM移除
                // 此弹窗仅会出现一次，因此我们将它彻底卸载
                setTimeout(closeFn, 0)
                if (options === null || options === undefined ? undefined : options.onClose) {
                  if (options === null || options === undefined) {
                    undefined
                  } else {
                    options.onClose()
                  }
                }
              }
            })), div)
            return _context.abrupt("return", closeFn)
          case 6:
          case "end":
            return _context.stop()
        }
      }
    }, _callee)
  }))
  return function showCodemaoAgreement(_x) {
    return _ref.apply(this, arguments)
  }
}()

/***/
