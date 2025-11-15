/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：/TF1
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { ConfirmDialogView }
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default from "react-css-modules"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_classnames__ from "classnames"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_classnames___default from "classnames"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__Dialog__ from "./Dialog-kQfo"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__Button__ from "./Button-XdPl"
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
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass)
    } else {
      subClass.__proto__ = superClass
    }
  }
}
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  var r = arguments$length < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc
  var d
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") {
    r = Reflect.decorate(decorators, target, key, desc)
  } else {
    for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) {
        r = (arguments$length < 3 ? d(r) : arguments$length > 3 ? d(target, key, r) : d(target, key)) || r
      }
    }
  }
  if (arguments$length > 3 && r) {
    Object.defineProperty(target, key, r)
  }
  return r
}
import * as styles from "./styles-JPI0"
var ConfirmDialogView = function (_React$Component) {
  _inherits(ConfirmDialogView, _React$Component)
  function ConfirmDialogView(props) {
    _classCallCheck(this, ConfirmDialogView)
    var _this = _possibleConstructorReturn(this, (ConfirmDialogView.__proto__ || Object.getPrototypeOf(ConfirmDialogView)).call(this, props))
    _this.handleDeny = _this.handleDeny.bind(_this)
    _this.handleConfirm = _this.handleConfirm.bind(_this)
    _this.handleCancel = _this.handleCancel.bind(_this)
    _this.handleCloseDialog = _this.handleCloseDialog.bind(_this)
    return _this
  }
  _createClass(ConfirmDialogView, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleDeny",
    value: function handleDeny() {
      var onDeny = this.props.confirmDialogInfo.onDeny
      if (onDeny) {
        onDeny()
      }
      this.handleCloseDialog()
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      var onConfirm = this.props.confirmDialogInfo.onConfirm
      if (onConfirm) {
        onConfirm()
      }
      this.handleCloseDialog()
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      var onCancel = this.props.confirmDialogInfo.onCancel
      if (onCancel) {
        onCancel()
      }
      this.handleCloseDialog()
    }
  }, {
    key: "handleCloseDialog",
    value: function handleCloseDialog() {
      var onClose = this.props.confirmDialogInfo.onClose
      if (onClose) {
        onClose()
      }
      this.props.setConfirmDialogInfoAction({
        visible: false
      })
    }
  }, {
    key: "render",
    value: function render() {
      var _props$confirmDialogI = this.props.confirmDialogInfo
      var visible = _props$confirmDialogI.visible
      var title = _props$confirmDialogI.title
      var content = _props$confirmDialogI.content
      var className = _props$confirmDialogI.className
      var isDangerous = _props$confirmDialogI.isDangerous
      var _props$confirmDialogI2 = _props$confirmDialogI.cancelText
      var cancelText = _props$confirmDialogI2 === undefined ? "取消" : _props$confirmDialogI2
      var _props$confirmDialogI3 = _props$confirmDialogI.allowText
      var allowText = _props$confirmDialogI3 === undefined ? "确认" : _props$confirmDialogI3
      var denyText = _props$confirmDialogI.denyText
      var _props$confirmDialogI4 = _props$confirmDialogI.cancelBtnVisible
      var cancelBtnVisible = _props$confirmDialogI4 === undefined ? true : _props$confirmDialogI4
      var _props$confirmDialogI5 = _props$confirmDialogI.confirmBtnVisible
      var confirmBtnVisible = _props$confirmDialogI5 === undefined ? true : _props$confirmDialogI5
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__Dialog__.default, {
        visible: visible,
        showCloseButton: false,
        onClose: this.handleCloseDialog,
        withPortal: true,
        maskClosable: false,
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default(styles.dialog, className, denyText && styles.dialogSecondary)
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("h3", null, title), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("span", null, content), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default(styles.dialogButtons)
      }, cancelBtnVisible && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__Button__.default, {
        type: "light",
        onClick: this.handleCancel
      }, cancelText), denyText && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__Button__.default, {
        onClick: this.handleDeny,
        className: styles.denyButton
      }, denyText), confirmBtnVisible && __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__Button__.default, {
        type: "primary",
        danger: isDangerous,
        onClick: this.handleConfirm
      }, allowText)))
    }
  }])
  return ConfirmDialogView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
ConfirmDialogView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], ConfirmDialogView)

/***/
