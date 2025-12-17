/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：q9Rd
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { store_manager }
import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_redux__ from "redux"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_redux_saga__ from "redux-saga"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__ from "redux-saga/effects"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_reducer__ from "./routes/Home/model/reducer-eHP9"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__routes_Work_model_reducer__ from "./routes/Work/model/reducer-2PC+"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__main_reducer__ from "./main/reducer-KBfb"
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ("value" in descriptor) {
        descriptor.writable = true
      }
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps)
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps)
    }
    return Constructor
  }
}()
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(root_saga)
function get_root_reducer() {
  return __WEBPACK_IMPORTED_MODULE_1_redux__.combineReducers({
    home_reducer: __WEBPACK_IMPORTED_MODULE_4__routes_Home_model_reducer__.homeReducer,
    main_reducer: __WEBPACK_IMPORTED_MODULE_6__main_reducer__.main_reducer,
    work_reducer: __WEBPACK_IMPORTED_MODULE_5__routes_Work_model_reducer__.workReducer
  })
}
function create_store() {
  var root_reducer = get_root_reducer()
  var middleware_list = []
  var saga_middleware = __WEBPACK_IMPORTED_MODULE_2_redux_saga__.default()
  middleware_list.push(saga_middleware)
  var store = __WEBPACK_IMPORTED_MODULE_1_redux__.createStore(root_reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), __WEBPACK_IMPORTED_MODULE_1_redux__.applyMiddleware.apply(undefined, middleware_list))
  saga_middleware.run(root_saga)
  return store
}
function root_saga() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function root_saga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.fork(__WEBPACK_IMPORTED_MODULE_6__main_reducer__.mainSaga)
        case 2:
          _context.next = 4
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.fork(__WEBPACK_IMPORTED_MODULE_4__routes_Home_model_reducer__.homeSaga)
        case 4:
          _context.next = 6
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.fork(__WEBPACK_IMPORTED_MODULE_5__routes_Work_model_reducer__.workSaga)
        case 6:
        case "end":
          return _context.stop()
      }
    }
  }, _marked, this)
}
var StoreManager = function () {
  function StoreManager() {
    _classCallCheck(this, StoreManager)
    this.store = create_store()
  }
  _createClass(StoreManager, [
    {
      key: "get_store",
      value: function get_store() {
        return this.store
      }
    }, {
      key: "get_state",
      value: function get_state() {
        return this.store.getState()
      }
    }, {
      key: "subscribe",
      value: function subscribe(listener) {
        this.store.subscribe(listener)
      }
    }, {
      key: "dispatch",
      value: function dispatch(action) {
        return this.store.dispatch(action)
      }
    }
  ])
  return StoreManager
}()
var store_manager = new StoreManager()

/***/
