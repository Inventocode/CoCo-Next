/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：TNoC
 */

import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator"
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
import { takeLatest } from "redux-saga"
import * as __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ from "redux-saga/effects"
import * as __WEBPACK_IMPORTED_MODULE_3_axios__ from "axios"
import __WEBPACK_IMPORTED_MODULE_3_axios___default from "axios"
import * as actions from "./actions"
import * as __WEBPACK_IMPORTED_MODULE_5__utils__ from "../../../../../../unrestored/home/components/utils-jnIn"
var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetBannerList)
var _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetTopicList)
var _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetCourseList)
var _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetTemplateList)
var _marked5 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetWorkList)
function handleGetBannerList() {
  var url
  var result
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetBannerList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = __WEBPACK_IMPORTED_MODULE_5__utils__.get_api_prefix() + "/coconut/banner/list"
          _context.prev = 1
          _context.next = 4
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch banner list failed, detail:", err)
            }
            throw err
          })
        case 4:
          result = _context.sent
          if (!(result.code === 200)) {
            _context.next = 8
            break
          }
          _context.next = 8
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(actions.setBannerListAction(result.data))
        case 8:
          _context.next = 13
          break
        case 10:
          _context.prev = 10
          _context.t0 = _context["catch"](1)
          if (false) {
            console.log("fetch banner list error, detail", _context.t0)
          }
        case 13:
        case "end":
          return _context.stop()
      }
    }
  }, _marked, this, [[1, 10]])
}
function handleGetTopicList() {
  var url
  var result
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetTopicList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = __WEBPACK_IMPORTED_MODULE_5__utils__.get_api_prefix() + "/coconut/topic/list"
          _context2.prev = 1
          _context2.next = 4
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch topic list failed, detail:", err)
            }
            throw err
          })
        case 4:
          result = _context2.sent
          if (!(result.code === 200)) {
            _context2.next = 8
            break
          }
          _context2.next = 8
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(actions.setTopicListAction(result.data.items))
        case 8:
          _context2.next = 13
          break
        case 10:
          _context2.prev = 10
          _context2.t0 = _context2["catch"](1)
          if (false) {
            console.log("fetch topic list error, detail", _context2.t0)
          }
        case 13:
        case "end":
          return _context2.stop()
      }
    }
  }, _marked2, this, [[1, 10]])
}
function handleGetCourseList() {
  var url
  var result
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetCourseList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          url = __WEBPACK_IMPORTED_MODULE_5__utils__.get_api_prefix() + "/coconut/primary-course/list"
          _context3.prev = 1
          _context3.next = 4
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch course list failed, detail:", err)
            }
            throw err
          })
        case 4:
          result = _context3.sent
          if (!(result.code === 200)) {
            _context3.next = 8
            break
          }
          _context3.next = 8
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(actions.setCourseListAction(result.data.items))
        case 8:
          _context3.next = 13
          break
        case 10:
          _context3.prev = 10
          _context3.t0 = _context3["catch"](1)
          if (false) {
            console.log("fetch course list error, detail", _context3.t0)
          }
        case 13:
        case "end":
          return _context3.stop()
      }
    }
  }, _marked3, this, [[1, 10]])
}
function handleGetTemplateList() {
  var url
  var result
  var list
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetTemplateList$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          url = __WEBPACK_IMPORTED_MODULE_5__utils__.get_api_prefix() + "/coconut/sample/list"
          _context4.prev = 1
          _context4.next = 4
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch template list failed, detail:", err)
            }
            throw err
          })
        case 4:
          result = _context4.sent
          if (!(result.code === 200)) {
            _context4.next = 10
            break
          }

          // 模版随机排序
          list = result.data.items
          list.sort(function (a, b) {
            return Math.random() > 0.5 ? -1 : 1
          })
          _context4.next = 10
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(actions.setTemplateListAction(list))
        case 10:
          _context4.next = 15
          break
        case 12:
          _context4.prev = 12
          _context4.t0 = _context4["catch"](1)
          if (false) {
            console.log("fetch template list error, detail", _context4.t0)
          }
        case 15:
        case "end":
          return _context4.stop()
      }
    }
  }, _marked4, this, [[1, 12]])
}
function handleGetWorkList() {
  var url
  var result
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetWorkList$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          url = __WEBPACK_IMPORTED_MODULE_5__utils__.get_api_prefix() + "/coconut/web/work/list/all?limit=20"
          _context5.prev = 1
          _context5.next = 4
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch work list failed, detail:", err)
            }
            throw err
          })
        case 4:
          result = _context5.sent
          if (!(result.code === 200)) {
            _context5.next = 9
            break
          }

          // work_id、id字段变动兼容
          result.data.items.forEach(function (item) {
            item.work_id = item.work_id || item.id
          })
          _context5.next = 9
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__.put(actions.setWorkListAction(result.data.items))
        case 9:
          _context5.next = 14
          break
        case 11:
          _context5.prev = 11
          _context5.t0 = _context5["catch"](1)
          if (false) {
            console.log("fetch work list error, detail", _context5.t0)
          }
        case 14:
        case "end":
          return _context5.stop()
      }
    }
  }, _marked5, this, [[1, 11]])
}

export function* homeSaga() {
  yield takeLatest(actions.GET_BANNER_LIST_ACTION, handleGetBannerList)
  yield takeLatest(actions.GET_TOPIC_LIST_ACTION, handleGetTopicList)
  yield takeLatest(actions.GET_COURSE_LIST_ACTION, handleGetCourseList)
  yield takeLatest(actions.GET_TEMPLATE_LIST_ACTION, handleGetTemplateList)
  yield takeLatest(actions.GET_WORK_LIST_ACTION, handleGetWorkList)
}

/***/
