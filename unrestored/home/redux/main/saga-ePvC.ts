/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：ePvC
 */

"use strict"

/* harmony export (immutable) */
/* harmony import */
export { mainSaga }
import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_redux_saga__ from "redux-saga"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ from "redux-saga/effects"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_axios__ from "axios"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_axios___default from "axios"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__actions__ from "./actions-_FmP"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__utils__ from "../../components/utils-jnIn"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__ from "../../model/actions-HXaG"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__routes_Home_model_actions__ from "../../Home/model/actions-twBc"
var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleIsNewUser)
var _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleAsyncSetUserInfo)
var _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(mainSaga)
function handleIsNewUser() {
  var url
  var result
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleIsNewUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = __WEBPACK_IMPORTED_MODULE_5__utils__.get_api_prefix() + "/coconut/web/user_type"
          _context.prev = 1
          _context.next = 4
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch is new user failed, detail:", err)
            }
            throw err
          })
        case 4:
          result = _context.sent
          _context.next = 7
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_4__actions__.setIsNewUserAction(result === 0 ? false : true))
        case 7:
          _context.next = 12
          break
        case 9:
          _context.prev = 9
          _context.t0 = _context["catch"](1)
          if (false) {
            console.log("fetch is new user error, detail", _context.t0)
          }
        case 12:
        case "end":
          return _context.stop()
      }
    }
  }, _marked, this, [[1, 9]])
}
function handleAsyncSetUserInfo(action) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleAsyncSetUserInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_4__actions__.setUserInfoAction(action.payload))
        case 2:
          if (!action.payload) {
            _context2.next = 13
            break
          }
          _context2.next = 5
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_4__actions__.getIsNewUserAction())
        case 5:
          _context2.next = 7
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__.getCreateWorkListAction({
            name: "",
            offset: 0
          }))
        case 7:
          _context2.next = 9
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__.getCollWorkListAction({
            name: "",
            offset: 1
          }))
        case 9:
          _context2.next = 11
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_7__routes_Home_model_actions__.getWorkListAction())
        case 11:
          _context2.next = 19
          break
        case 13:
          _context2.next = 15
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__.setCreateWorkListAction([]))
        case 15:
          _context2.next = 17
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__routes_Work_model_actions__.setCollWorkListAction([]))
        case 17:
          _context2.next = 19
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_7__routes_Home_model_actions__.setWorkListAction([]))
        case 19:
          _context2.next = 21
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_4__actions__.setUserInfoFetchDoneAction())
        case 21:
        case "end":
          return _context2.stop()
      }
    }
  }, _marked2, this)
}
function mainSaga() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function mainSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2
          return __WEBPACK_IMPORTED_MODULE_1_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_4__actions__.GET_IS_NEW_USER_ACTION, handleIsNewUser)
        case 2:
          _context3.next = 4
          return __WEBPACK_IMPORTED_MODULE_1_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_4__actions__.ASYNC_SET_USER_INFO_ACTION, handleAsyncSetUserInfo)
        case 4:
        case "end":
          return _context3.stop()
      }
    }
  }, _marked3, this)
}

/***/
