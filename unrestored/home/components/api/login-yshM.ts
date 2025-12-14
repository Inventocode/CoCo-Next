/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：yshM
 */

"use strict"

/* harmony export (immutable) */
/* harmony export (immutable) */
export { getAccountProfile }
/* harmony import */
export { loginOut }
import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_axios__ from "axios"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_axios___default from "axios"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__cfg__ from "../../cfg-dpNx"
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value))
      } catch (e) {
        reject(e)
      }
    }
    function step(result) {
      if (result.done) {
        resolve(result.value)
      } else {
        new P(function (resolve) {
          resolve(result.value)
        }).then(fulfilled, rejected)
      }
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
var _config = __WEBPACK_IMPORTED_MODULE_2__cfg__.config()
var signInHost = _config.signInHost
function getAccountProfile() {
  return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
    var response
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2
            return __WEBPACK_IMPORTED_MODULE_1_axios___default.get(signInHost + "/tiger/v3/web/accounts/profile", {
              withCredentials: true
            })
          case 2:
            response = _context.sent
            return _context.abrupt("return", response.data)
          case 4:
          case "end":
            return _context.stop()
        }
      }
    }, _callee, this)
  }))
}
function loginOut() {
  return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee2() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2
            return __WEBPACK_IMPORTED_MODULE_1_axios___default.post(signInHost + "/tiger/v3/web/accounts/logout", {}, {
              withCredentials: true
            })
          case 2:
          case "end":
            return _context2.stop()
        }
      }
    }, _callee2, this)
  }))
}

/***/
