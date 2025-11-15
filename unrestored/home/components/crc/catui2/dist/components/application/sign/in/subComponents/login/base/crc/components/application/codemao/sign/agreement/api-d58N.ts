/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：d58N
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { signContract }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_axios__ from "axios"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_axios___default from "axios"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__cfg__ from "../../../../../../../../../../../../../cfg-OT5r"
var signContract = /*#__PURE__*/function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_asyncToGenerator__.default(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2
            return __WEBPACK_IMPORTED_MODULE_2_axios___default({
              url: "".concat(__WEBPACK_IMPORTED_MODULE_3__cfg__.getConfig().api.host, "/nemo/v3/user/level/signature"),
              method: "post",
              withCredentials: true,
              data: {}
            })
          case 2:
          case "end":
            return _context.stop()
        }
      }
    }, _callee)
  }))
  return function signContract() {
    return _ref.apply(this, arguments)
  }
}()

/***/
