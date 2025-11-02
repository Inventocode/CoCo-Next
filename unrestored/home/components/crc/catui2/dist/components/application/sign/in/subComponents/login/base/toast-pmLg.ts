/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：pmLg
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { message }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ from "@babel/runtime/helpers/esm/extends"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_dom__ from "react-dom"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react_dom___default from "react-dom"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__Toast__ from "./Toast-tTv1"
var fakeDiv
var GLOBAL_WRAPPER
if (typeof window !== "undefined") {
  fakeDiv = document.createElement("div")
  GLOBAL_WRAPPER = document.createElement("div")
  GLOBAL_WRAPPER.className = "CUI-toast-wrapper"
  fakeDiv.appendChild(GLOBAL_WRAPPER)
  document.body.appendChild(fakeDiv)
}
var ToastManager = {
  add: addToast,
  remove: removeToast,
  clear: clearToast,
  toastList: []
}
function render() {
  __WEBPACK_IMPORTED_MODULE_2_react_dom___default.render(ToastManager.toastList.map(function (toastTuple) {
    return toastTuple[1]
  }), GLOBAL_WRAPPER)
}
function addToast(id, toast, fn) {
  ToastManager.toastList.push([id, toast, fn])
  render()
}
function removeToast(id) {
  ToastManager.toastList = ToastManager.toastList.filter(function (toastTuple) {
    return toastTuple[0] !== id
  })
  render()
}
function clearToast() {
  ToastManager.toastList.forEach(function (toastTuple) {
    return toastTuple[2]()
  })
}
var seed = 1
function toastFactory(type, config) {
  if (config.uniqueType && ToastManager.toastList.find(function (elm) {
    return elm[1].props.uniqueType === config.uniqueType
  })) {
    return undefined
  }
  var id = seed
  var destroy = function destroy() {
    return undefined
  }
  var _onClose = function _onClose() {
    if (config.onClose) {
      config.onClose()
    }
    ToastManager.remove(id)
  }
  var toast = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__Toast__.Toast, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__.default({}, config, {
    key: "toast-".concat(id),
    type: type,
    getToastDOM: function getToastDOM(ref) {
      if (config.getToastDOM) {
        config.getToastDOM(ref)
      }
      if (ref) {
        destroy = function destroy() {
          // 销毁之后 DOM 也不存在了，就不需要取消事件了
          ref.addEventListener("animationend", _onClose)
          ref.className += " CUI-toast-destroy"
        }
      }
    },
    onClose: _onClose
  }))
  ToastManager.add(id, toast, function () {
    return destroy()
  })
  seed++
  return id
}
function createCustomToast(config) {
  return toastFactory("custom", config)
}
function createInfoToast(config) {
  return toastFactory("info", config)
}
function createSuccessToast(config) {
  return toastFactory("success", config)
}
function createWarningToast(config) {
  return toastFactory("warning", config)
}
function createErrorToast(config) {
  return toastFactory("error", config)
}
function updateToast(id, config) {
  var index = ToastManager.toastList.findIndex(function (toastTuple) {
    return toastTuple[0] === id
  })
  if (index === -1) {
    return undefined
  }
  var oldToast = ToastManager.toastList[index]
  var newToast = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3__Toast__.Toast, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__.default({}, config, {
    key: "toast-".concat(id),
    type: oldToast[1].props.type,
    getToastDOM: oldToast[1].props.getToastDOM,
    onClose: oldToast[1].props.onClose
  }))
  ToastManager.toastList.splice(index, id, [id, newToast, oldToast[2]])
  render()
}
var message = {
  custom: createCustomToast,
  info: createInfoToast,
  success: createSuccessToast,
  error: createErrorToast,
  warning: createWarningToast,
  update: updateToast,
  destroy: function destroy(id) {
    var target = ToastManager.toastList.find(function (toastTuple) {
      return toastTuple[0] === id
    })
    if (target) {
      target[2]()
    }
  },
  destroyAll: function destroyAll() {
    return ToastManager.clear()
  }
}

/***/
