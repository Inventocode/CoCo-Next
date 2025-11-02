/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：GlfS
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_classnames__ from "classnames"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_classnames___default from "classnames"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__IconFont__ from "./IconFont-zVV7"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__style_scss__ from "./style/scss-dCsi"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3__style_scss___default from "./style/scss-dCsi"
var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value)
        if (i && _arr.length === i) {
          break
        }
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i["return"]) {
          _i["return"]()
        }
      } finally {
        if (_d) {
          throw _e
        }
      }
    }
    return _arr
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }
}()
var Alert = function Alert(props) {
  var _props$type = props.type
  var type = _props$type === undefined ? "info" : _props$type
  var message = props.message
  var _props$showPrefixIcon = props.showPrefixIcon
  var showPrefixIcon = _props$showPrefixIcon === undefined ? false : _props$showPrefixIcon
  var _props$showCloseIcon = props.showCloseIcon
  var showCloseIcon = _props$showCloseIcon === undefined ? false : _props$showCloseIcon
  var visible = props.visible
  var onClose = props.onClose
  var icon = props.icon
  var className = props.className
  var _useState = __WEBPACK_IMPORTED_MODULE_1_react__.useState(true)
  var _useState2 = _slicedToArray(_useState, 2)
  var stateVisible = _useState2[0]
  var setStateVisible = _useState2[1]
  __WEBPACK_IMPORTED_MODULE_1_react__.useLayoutEffect(function () {
    if (visible !== undefined) {
      setStateVisible(visible)
    }
  }, [visible])
  var toSetStateVisible = __WEBPACK_IMPORTED_MODULE_1_react__.useCallback(function (v) {
    if (visible !== undefined) {
      return
    }
    setStateVisible(v)
  }, [visible])
  var typeObj = __WEBPACK_IMPORTED_MODULE_1_react__.useMemo(function () {
    var iconType = ""
    var typeClass = ""
    switch (type) {
      case "success":
        iconType = "icon-alert-success"
        typeClass = "coco-alert-success"
        break
      case "error":
        iconType = "icon-alert-error"
        typeClass = "coco-alert-error"
        break
      case "info":
        iconType = "icon-alert-info"
        typeClass = "coco-alert-info"
        break
    }
    return {
      icon: __WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__.default, {
        type: iconType
      }),
      className: typeClass
    }
  }, [type])
  var handleClose = __WEBPACK_IMPORTED_MODULE_1_react__.useCallback(function () {
    toSetStateVisible(false)
    if (onClose) {
      onClose()
    }
  }, [onClose, toSetStateVisible])
  return __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_0_classnames___default("coco-alert", typeObj.className, className, !stateVisible && "coco-alert-hide")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "coco-alert-content"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "coco-alert-icon"
  }, showPrefixIcon && (icon || typeObj.icon)), __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("span", null, message)), showCloseIcon && __WEBPACK_IMPORTED_MODULE_1_react___default.createElement("div", {
    className: "coco-alert-close",
    onClick: handleClose
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2__IconFont__.default, {
    type: "icon-close"
  })))
}
/* harmony default export */
export default __WEBPACK_IMPORTED_MODULE_1_react__.memo(Alert)
/***/
