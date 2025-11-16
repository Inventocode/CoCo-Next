/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Fp3z__part-1
 */

"use strict"

/* harmony export (binding) */
import { "Fp3z__part-0___createClass" as _createClass, "Fp3z__part-0___classCallCheck" as _classCallCheck, "Fp3z__part-0___possibleConstructorReturn" as _possibleConstructorReturn, "Fp3z__part-0___inherits" as _inherits, "Fp3z__part-0____decorate" as __decorate } from "./template-Fp3z__part-0"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__Alert__ from "./Alert-GlfS"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules"
/* harmony import */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import * as styles from "./styles-nlA+"
var timeId = undefined
var CommonToastView = function (_React$Component) {
  _inherits(CommonToastView, _React$Component)
  function CommonToastView(props) {
    _classCallCheck(this, CommonToastView)
    var _this = _possibleConstructorReturn(this, (CommonToastView.__proto__ || Object.getPrototypeOf(CommonToastView)).call(this, props))
    _this.handleClose = _this.handleClose.bind(_this)
    return _this
  }
  _createClass(CommonToastView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      var onClose = this.props.commonToastInfo.onClose
      if (onClose) {
        onClose()
      }
      this.props.setCommonToastAction({
        visible: false
      })
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this
      var _nextProps$commonToas = nextProps.commonToastInfo
      var visible = _nextProps$commonToas.visible
      var _nextProps$commonToas2 = _nextProps$commonToas.duration
      var duration = _nextProps$commonToas2 === undefined ? 2000 : _nextProps$commonToas2
      if (visible && duration) {
        if (timeId) {
          window.clearTimeout(timeId)
        }
        timeId = setTimeout(function () {
          _this2.handleClose()
        }, duration)
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props$commonToastInf = this.props.commonToastInfo
      var visible = _props$commonToastInf.visible
      var type = _props$commonToastInf.type
      var message = _props$commonToastInf.message
      var showCloseIcon = _props$commonToastInf.showCloseIcon
      var showPrefixIcon = _props$commonToastInf.showPrefixIcon
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__Alert__.default, {
        visible: visible,
        type: type,
        message: message,
        onClose: this.handleClose,
        showPrefixIcon: showPrefixIcon,
        styleName: "cocoToast",
        showCloseIcon: showCloseIcon
      })
    }
  }])
  return CommonToastView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
CommonToastView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], CommonToastView)

/***/
export { CommonToastView as "Fp3z__part-1__CommonToastView" }
