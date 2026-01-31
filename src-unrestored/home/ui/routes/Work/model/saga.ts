/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：BmOz
 */

"use strict"

/* unused harmony export getWorkBcmUrl */
/* unused harmony export getWorkBcmJson */
/* harmony export (immutable) */
/* harmony import */
export { workSaga }
import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep__ from "lodash/cloneDeep"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default from "lodash/cloneDeep"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_redux_saga__ from "redux-saga"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__ from "redux-saga/effects"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_axios__ from "axios"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4_axios___default from "axios"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__actions__ from "./actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__redux_main_actions__ from "../../../../redux/main/actions"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__redux_selectors__ from "../../../../redux/selectors"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__utils__ from "../../../../../../unrestored/home/components/utils-jnIn"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__utils_uploader__ from "../../../../utils/uploader"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__interface__ from "./interface"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__Home_model_actions__ from "../../Home/model/actions"
var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetCreateWorkList)
var _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetCollWorkList)
var _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleGetDeleteWorkList)
var _marked4 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleQuitCollWork)
var _marked5 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleDeleteWork)
var _marked6 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleRecoverDeleteWork)
var _marked7 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleAgainDeleteWork)
var _marked8 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleClearDeleteWork)
var _marked9 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(handleRenameWork)
var _marked10 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(workSaga)
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
var LIMIT = 40
// 我创建的作品
function handleGetCreateWorkList(action) {
  var _action$payload
  var name
  var offset
  var url
  var result
  var data
  var createWorkList
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetCreateWorkList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _action$payload = action.payload
          name = _action$payload.name
          offset = _action$payload.offset
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work/list?status=1&offset=" + offset * LIMIT + "&limit=" + LIMIT
          if (name) {
            url += "&name=" + name
          }
          _context.prev = 3
          _context.next = 6
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch create work list failed, detail:", err)
            }
            throw err
          })
        case 6:
          result = _context.sent
          if (!(result.code === 200)) {
            _context.next = 31
            break
          }
          data = result.data
          _context.next = 11
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCreateWorkOffsetAction(offset))
        case 11:
          _context.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context.next = 14
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getCreateWorkList)
        case 14:
          _context.t1 = _context.sent
          createWorkList = (0, _context.t0)(_context.t1)

          // work_id、id字段变动兼容
          data.items.forEach(function (item) {
            item.work_id = item.work_id || item.id
          })
          if (!(offset === 0)) {
            _context.next = 22
            break
          }
          _context.next = 20
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCreateWorkListAction(data.items))
        case 20:
          _context.next = 24
          break
        case 22:
          _context.next = 24
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCreateWorkListAction(createWorkList.concat(data.items)))
        case 24:
          if (!(data.items.length === 0 || data.offset + LIMIT >= data.total)) {
            _context.next = 29
            break
          }
          _context.next = 27
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCreateWorkIsLoadedAction(true))
        case 27:
          _context.next = 31
          break
        case 29:
          _context.next = 31
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCreateWorkIsLoadedAction(false))
        case 31:
          _context.next = 36
          break
        case 33:
          _context.prev = 33
          _context.t2 = _context["catch"](3)
          if (false) {
            console.log("fetch create work list error, detail", _context.t2)
          }
        case 36:
        case "end":
          return _context.stop()
      }
    }
  }, _marked, this, [[3, 33]])
}
// 我参与的作品
function handleGetCollWorkList(action) {
  var _action$payload2
  var name
  var offset
  var url
  var result
  var data
  var collWorkList
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetCollWorkList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _action$payload2 = action.payload
          name = _action$payload2.name
          offset = _action$payload2.offset // let url = `${get_api_prefix()}/coconut/web/work/list/coll_works?offset=${offset}&limit=${LIMIT}`;
          // if (name) {
          //   url += `&name=${name}`;
          // }
          // TODO 我参与的 暂时用老接口
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_coll_prefix() + "/coll/coco/coll_works?current_page=" + offset + "&page_size=" + LIMIT
          _context2.prev = 2
          _context2.next = 5
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch coll work list failed, detail:", err)
            }
            throw err
          })
        case 5:
          result = _context2.sent
          if (!(result.code === 200)) {
            _context2.next = 30
            break
          }
          data = result.data
          _context2.next = 10
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCollWorkOffsetAction(offset))
        case 10:
          _context2.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context2.next = 13
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getCollWorkList)
        case 13:
          _context2.t1 = _context2.sent
          collWorkList = (0, _context2.t0)(_context2.t1)

          // work_id、id字段变动兼容
          result.data.items.forEach(function (item) {
            item.work_id = item.work_id || item.id
          })
          if (!(offset === 1)) {
            _context2.next = 21
            break
          }
          _context2.next = 19
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCollWorkListAction(data.items))
        case 19:
          _context2.next = 23
          break
        case 21:
          _context2.next = 23
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCollWorkListAction(collWorkList.concat(data.items)))
        case 23:
          if (!(data.items.length === 0 || data.currentPage * LIMIT >= data.total)) {
            _context2.next = 28
            break
          }
          _context2.next = 26
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCollWorkIsLoadedAction(true))
        case 26:
          _context2.next = 30
          break
        case 28:
          _context2.next = 30
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCollWorkIsLoadedAction(false))
        case 30:
          _context2.next = 35
          break
        case 32:
          _context2.prev = 32
          _context2.t2 = _context2["catch"](2)
          if (false) {
            console.log("fetch coll work list error, detail", _context2.t2)
          }
        case 35:
        case "end":
          return _context2.stop()
      }
    }
  }, _marked2, this, [[2, 32]])
}
// 回收站作品
function handleGetDeleteWorkList(action) {
  var offset
  var url
  var result
  var data
  var deleteWorkList
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleGetDeleteWorkList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          offset = action.payload.offset
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work/list?status=-99&offset=" + offset * LIMIT + "&limit=" + LIMIT
          _context3.prev = 2
          _context3.next = 5
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.get(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch delete work list failed, detail:", err)
            }
            throw err
          })
        case 5:
          result = _context3.sent
          if (!(result.code === 200)) {
            _context3.next = 30
            break
          }
          data = result.data
          _context3.next = 10
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkOffsetAction(offset))
        case 10:
          _context3.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context3.next = 13
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getDeleteWorkList)
        case 13:
          _context3.t1 = _context3.sent
          deleteWorkList = (0, _context3.t0)(_context3.t1)

          // work_id、id字段变动兼容
          data.items.forEach(function (item) {
            item.work_id = item.work_id || item.id
          })
          if (!(offset === 0)) {
            _context3.next = 21
            break
          }
          _context3.next = 19
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkListAction(data.items))
        case 19:
          _context3.next = 23
          break
        case 21:
          _context3.next = 23
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkListAction(deleteWorkList.concat(data.items)))
        case 23:
          if (!(data.items.length === 0 || data.offset + LIMIT >= data.total)) {
            _context3.next = 28
            break
          }
          _context3.next = 26
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkIsLoadedAction(true))
        case 26:
          _context3.next = 30
          break
        case 28:
          _context3.next = 30
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkIsLoadedAction(false))
        case 30:
          _context3.next = 35
          break
        case 32:
          _context3.prev = 32
          _context3.t2 = _context3["catch"](2)
          if (false) {
            console.log("fetch delete work list error, detail", _context3.t2)
          }
        case 35:
        case "end":
          return _context3.stop()
      }
    }
  }, _marked3, this, [[2, 32]])
}
// 退出协作
function handleQuitCollWork(action) {
  var _action$payload3
  var /* [auto-meaningful-name] */_action$payload3$id
  var userId
  var workType
  var url
  var result
  var homeWorkList
  var list
  var collWorkList
  var _list
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleQuitCollWork$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _action$payload3 = action.payload
          _action$payload3$id = _action$payload3.id
          userId = _action$payload3.userId
          workType = _action$payload3.workType
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_coll_prefix() + "/coll/coco/collaborator/" + _action$payload3$id + "?work_id=" + _action$payload3$id + "&coll_user_id=" + userId
          _context4.prev = 2
          _context4.next = 5
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.delete(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch quit coll work failed, detail:", err)
            }
            throw err
          })
        case 5:
          result = _context4.sent
          if (!(result.code === 200)) {
            _context4.next = 25
            break
          }
          if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__.EWorkType.HOME)) {
            _context4.next = 16
            break
          }
          _context4.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context4.next = 11
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getHomeAllWorkList)
        case 11:
          _context4.t1 = _context4.sent
          homeWorkList = (0, _context4.t0)(_context4.t1)
          list = homeWorkList.filter(function (item) {
            return item.work_id !== _action$payload3$id
          })
          _context4.next = 16
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_11__Home_model_actions__.setWorkListAction(list))
        case 16:
          if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__.EWorkType.COLL)) {
            _context4.next = 25
            break
          }
          _context4.t2 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context4.next = 20
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getCollWorkList)
        case 20:
          _context4.t3 = _context4.sent
          collWorkList = (0, _context4.t2)(_context4.t3)
          _list = collWorkList.filter(function (item) {
            return item.work_id !== _action$payload3$id
          })
          _context4.next = 25
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCollWorkListAction(_list))
        case 25:
          _context4.next = 30
          break
        case 27:
          _context4.prev = 27
          _context4.t4 = _context4["catch"](2)
          if (false) {
            console.log("fetch quit coll work error, detail", _context4.t4)
          }
        case 30:
        case "end":
          return _context4.stop()
      }
    }
  }, _marked4, this, [[2, 27]])
}
// 删除作品到回收站
function handleDeleteWork(action) {
  var _action$payload4
  var /* [auto-meaningful-name] */_action$payload4$id
  var workType
  var callback
  var url
  var result
  var homeWorkList
  var list
  var createWorkList
  var _list2
  var collWorkList
  var _list3
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleDeleteWork$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _action$payload4 = action.payload
          _action$payload4$id = _action$payload4.id
          workType = _action$payload4.workType
          callback = _action$payload4.callback
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work/" + _action$payload4$id
          _context5.prev = 2
          _context5.next = 5
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.delete(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch delete work failed, detail:", err)
            }
            throw err
          })
        case 5:
          result = _context5.sent
          if (!(result.code === 200)) {
            _context5.next = 40
            break
          }
          if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__.EWorkType.HOME)) {
            _context5.next = 20
            break
          }
          _context5.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context5.next = 11
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getHomeAllWorkList)
        case 11:
          _context5.t1 = _context5.sent
          homeWorkList = (0, _context5.t0)(_context5.t1)
          list = homeWorkList.filter(function (item) {
            return item.work_id !== _action$payload4$id
          })
          if (!(list.length >= 12)) {
            _context5.next = 19
            break
          }
          _context5.next = 17
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_11__Home_model_actions__.setWorkListAction(list))
        case 17:
          _context5.next = 20
          break
        case 19:
          // 主页不足两行，重新拉取数据，加延时因为更新同步数据慢一点
          setTimeout(function () {
            callback()
          }, 700)
        case 20:
          if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__.EWorkType.CREATE)) {
            _context5.next = 29
            break
          }
          _context5.t2 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context5.next = 24
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getCreateWorkList)
        case 24:
          _context5.t3 = _context5.sent
          createWorkList = (0, _context5.t2)(_context5.t3)
          _list2 = createWorkList.filter(function (item) {
            return item.work_id !== _action$payload4$id
          })
          _context5.next = 29
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCreateWorkListAction(_list2))
        case 29:
          if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__.EWorkType.COLL)) {
            _context5.next = 38
            break
          }
          _context5.t4 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context5.next = 33
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getCollWorkList)
        case 33:
          _context5.t5 = _context5.sent
          collWorkList = (0, _context5.t4)(_context5.t5)
          _list3 = collWorkList.filter(function (item) {
            return item.work_id !== _action$payload4$id
          })
          _context5.next = 38
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCollWorkListAction(_list3))
        case 38:
          _context5.next = 40
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__.setCommonToastAction({
            visible: true,
            message: "作品移至回收站"
          }))
        case 40:
          _context5.next = 47
          break
        case 42:
          _context5.prev = 42
          _context5.t6 = _context5["catch"](2)
          if (false) {
            console.log("fetch delete work error, detail", _context5.t6)
          }
          _context5.next = 47
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__.setCommonToastAction({
            visible: true,
            message: "删除作品失败"
          }))
        case 47:
        case "end":
          return _context5.stop()
      }
    }
  }, _marked5, this, [[2, 42]])
}
// 从回收站恢复作品
function handleRecoverDeleteWork(action) {
  var _action$payload5
  var /* [auto-meaningful-name] */_action$payload5$id
  var callback
  var url
  var result
  var deleteWorkList
  var list
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleRecoverDeleteWork$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _action$payload5 = action.payload
          _action$payload5$id = _action$payload5.id
          callback = _action$payload5.callback
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work/" + _action$payload5$id + "/recover"
          _context6.prev = 2
          _context6.next = 5
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.patch(url, {}, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch delete work failed, detail:", err)
            }
            throw err
          })
        case 5:
          result = _context6.sent
          if (!(result.code === 200)) {
            _context6.next = 18
            break
          }
          _context6.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context6.next = 10
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getDeleteWorkList)
        case 10:
          _context6.t1 = _context6.sent
          deleteWorkList = (0, _context6.t0)(_context6.t1)
          list = deleteWorkList.filter(function (item) {
            return item.work_id !== _action$payload5$id
          })
          _context6.next = 15
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkListAction(list))
        case 15:
          if (callback) {
            callback()
          }
          _context6.next = 18
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__.setCommonToastAction({
            visible: true,
            message: "作品已恢复"
          }))
        case 18:
          _context6.next = 23
          break
        case 20:
          _context6.prev = 20
          _context6.t2 = _context6["catch"](2)
          if (false) {
            console.log("fetch delete work error, detail", _context6.t2)
          }
        case 23:
        case "end":
          return _context6.stop()
      }
    }
  }, _marked6, this, [[2, 20]])
}
// 彻底删除作品
function handleAgainDeleteWork(action) {
  var /* [auto-meaningful-name] */action$payload
  var url
  var result
  var deleteWorkList
  var list
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleAgainDeleteWork$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          action$payload = action.payload
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work/" + action$payload + "/permanently"
          _context7.prev = 2
          _context7.next = 5
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.delete(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch delete work failed, detail:", err)
            }
            throw err
          })
        case 5:
          result = _context7.sent
          if (!(result.code === 200)) {
            _context7.next = 17
            break
          }
          _context7.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context7.next = 10
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getDeleteWorkList)
        case 10:
          _context7.t1 = _context7.sent
          deleteWorkList = (0, _context7.t0)(_context7.t1)
          list = deleteWorkList.filter(function (item) {
            return item.work_id !== action$payload
          })
          _context7.next = 15
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkListAction(list))
        case 15:
          _context7.next = 17
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__.setCommonToastAction({
            visible: true,
            message: "作品已删除"
          }))
        case 17:
          _context7.next = 22
          break
        case 19:
          _context7.prev = 19
          _context7.t2 = _context7["catch"](2)
          if (false) {
            console.log("fetch delete work error, detail", _context7.t2)
          }
        case 22:
        case "end":
          return _context7.stop()
      }
    }
  }, _marked7, this, [[2, 19]])
}
// 清空回收站
function handleClearDeleteWork() {
  var url
  var result
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleClearDeleteWork$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work/permanently"
          _context8.prev = 1
          _context8.next = 4
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.delete(url, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch clear delete work failed, detail:", err)
            }
            throw err
          })
        case 4:
          result = _context8.sent
          if (!(result.code === 200)) {
            _context8.next = 8
            break
          }
          _context8.next = 8
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setDeleteWorkListAction([]))
        case 8:
          _context8.next = 13
          break
        case 10:
          _context8.prev = 10
          _context8.t0 = _context8["catch"](1)
          if (false) {
            console.log("fetch clear delete work error, detail", _context8.t0)
          }
        case 13:
        case "end":
          return _context8.stop()
      }
    }
  }, _marked8, this, [[1, 10]])
}
// rename
function handleRenameWork(action) {
  var _action$payload6
  var /* [auto-meaningful-name] */_action$payload6$id
  var name
  var workType
  var callback
  var url
  var result
  var homeWorkList
  var createWorkList
  var bcmUrl
  var json
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function handleRenameWork$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _action$payload6 = action.payload
          _action$payload6$id = _action$payload6.id
          name = _action$payload6.name
          workType = _action$payload6.workType
          callback = _action$payload6.callback
          _context9.prev = 1
          url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/work/works/" + _action$payload6$id + "/rename"
          _context9.next = 5
          return __WEBPACK_IMPORTED_MODULE_4_axios___default.patch(url, {
            name: name,
            work_type: 12
          }, {
            withCredentials: true
          }).then(function (res) {
            return res.data
          }).catch(function (err) {
            if (false) {
              console.log("fetch rename work failed, detail:", err)
            }
            throw err
          })
        case 5:
          result = _context9.sent
          if (!result) {
            _context9.next = 36
            break
          }
          if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__.EWorkType.HOME)) {
            _context9.next = 16
            break
          }
          _context9.t0 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context9.next = 11
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getHomeAllWorkList)
        case 11:
          _context9.t1 = _context9.sent
          homeWorkList = (0, _context9.t0)(_context9.t1)
          homeWorkList.forEach(function (item) {
            if (item.work_id === _action$payload6$id) {
              item.name = name
            }
          })
          _context9.next = 16
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_11__Home_model_actions__.setWorkListAction(homeWorkList))
        case 16:
          if (!(workType === __WEBPACK_IMPORTED_MODULE_10__interface__.EWorkType.CREATE)) {
            _context9.next = 25
            break
          }
          _context9.t2 = __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default
          _context9.next = 20
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.select(__WEBPACK_IMPORTED_MODULE_7__redux_selectors__.getCreateWorkList)
        case 20:
          _context9.t3 = _context9.sent
          createWorkList = (0, _context9.t2)(_context9.t3)
          createWorkList.forEach(function (item) {
            if (item.work_id === _action$payload6$id) {
              item.name = name
            }
          })
          _context9.next = 25
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_5__actions__.setCreateWorkListAction(createWorkList))
        case 25:
          _context9.next = 27
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.call(getWorkBcmUrl, _action$payload6$id)
        case 27:
          bcmUrl = _context9.sent
          if (!bcmUrl) {
            _context9.next = 35
            break
          }
          _context9.next = 31
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.call(getWorkBcmJson, bcmUrl)
        case 31:
          json = _context9.sent
          json.title = name
          _context9.next = 35
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.call(updateProject, {
            id: _action$payload6$id,
            name: name,
            content: json
          })
        case 35:
          return _context9.abrupt("return")
        case 36:
          _context9.next = 38
          return __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__.put(__WEBPACK_IMPORTED_MODULE_6__redux_main_actions__.setCommonToastAction({
            visible: true,
            message: "作品重命名失败，请重试"
          }))
        case 38:
          _context9.next = 43
          break
        case 40:
          _context9.prev = 40
          _context9.t4 = _context9["catch"](1)
          if (false) {
            console.log("fetch rename work error, detail", _context9.t4)
          }
        case 43:
        case "end":
          return _context9.stop()
      }
    }
  }, _marked9, this, [[1, 40]])
}
function getWorkBcmUrl(id) {
  return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
    var url
    var result
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            url = __WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work/" + id + "/content"
            _context10.prev = 1
            _context10.next = 4
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.get(url, {
              withCredentials: true
            }).then(function (res) {
              return res.data
            }).catch(function (err) {
              if (false) {
                console.log("fetch delete work list failed, detail:", err)
              }
              throw err
            })
          case 4:
            result = _context10.sent
            if (!(result.code === 200)) {
              _context10.next = 7
              break
            }
            return _context10.abrupt("return", result.data.bcm_url)
          case 7:
            _context10.next = 12
            break
          case 9:
            _context10.prev = 9
            _context10.t0 = _context10["catch"](1)
            if (false) {
              console.log("fetch delete work list error, detail", _context10.t0)
            }
          case 12:
          case "end":
            return _context10.stop()
        }
      }
    }, _callee, this, [[1, 9]])
  }))
}
function getWorkBcmJson(bcmUrl) {
  return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee2() {
    var bcmRes
    var json
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee2$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2
            return fetch(bcmUrl)
          case 2:
            bcmRes = _context11.sent
            _context11.next = 5
            return bcmRes.json()
          case 5:
            json = _context11.sent
            return _context11.abrupt("return", json)
          case 7:
          case "end":
            return _context11.stop()
        }
      }
    }, _callee2, this)
  }))
}
function updateProject(params) {
  return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee3() {
    var name
    var content
    var /* [auto-meaningful-name] */params$id
    var bcmUrl
    var result
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee3$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            name = params.name
            content = params.content
            params$id = params.id
            _context12.prev = 1
            _context12.next = 4
            return __WEBPACK_IMPORTED_MODULE_9__utils_uploader__.uploadProjectJsonToCdn(JSON.stringify(content))
          case 4:
            bcmUrl = _context12.sent
            _context12.next = 7
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.put(__WEBPACK_IMPORTED_MODULE_8__utils__.get_api_prefix() + "/coconut/web/work", {
              id: params$id,
              name: name,
              bcm_url: bcmUrl,
              // cover_url: '', // 封面图
              archive_version: "0.1.0",
              save_type: 1
            }, {
              withCredentials: true
            })
          case 7:
            result = _context12.sent
            return _context12.abrupt("return", result)
          case 11:
            _context12.prev = 11
            _context12.t0 = _context12["catch"](1)
            throw _context12.t0
          case 14:
          case "end":
            return _context12.stop()
        }
      }
    }, _callee3, this, [[1, 11]])
  }))
}
function workSaga() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function workSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.GET_CREATE_WORK_LIST_ACTION, handleGetCreateWorkList)
        case 2:
          _context13.next = 4
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.GET_COLL_WORK_LIST_ACTION, handleGetCollWorkList)
        case 4:
          _context13.next = 6
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.GET_DELETE_WORK_LIST_ACTION, handleGetDeleteWorkList)
        case 6:
          _context13.next = 8
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.QUIT_COLL_WORK_ACTION, handleQuitCollWork)
        case 8:
          _context13.next = 10
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.DELETE_WORK_ACTION, handleDeleteWork)
        case 10:
          _context13.next = 12
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.RECOVER_DELETE_WORK_ACTION, handleRecoverDeleteWork)
        case 12:
          _context13.next = 14
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.AGAIN_DELETE_WORK_ACTION, handleAgainDeleteWork)
        case 14:
          _context13.next = 16
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.CLEAR_DELETED_WORK_ACTION, handleClearDeleteWork)
        case 16:
          _context13.next = 18
          return __WEBPACK_IMPORTED_MODULE_2_redux_saga__.takeLatest(__WEBPACK_IMPORTED_MODULE_5__actions__.RENAME_WORK_ACTION, handleRenameWork)
        case 18:
        case "end":
          return _context13.stop()
      }
    }
  }, _marked10, this)
}

/***/
