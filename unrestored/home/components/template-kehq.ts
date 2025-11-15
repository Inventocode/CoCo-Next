/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：kehq
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { CourseDialogView }
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default from "react-css-modules"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__Dialog__ from "./Dialog-kQfo"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__IconFont__ from "./IconFont-zVV7"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__sensorsData__ from "../sensorsData-yI2H"
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
import * as styles from "./styles-MNNq"
var CourseDialogView = function (_React$Component) {
  _inherits(CourseDialogView, _React$Component)
  function CourseDialogView(props) {
    _classCallCheck(this, CourseDialogView)
    var _this = _possibleConstructorReturn(this, (CourseDialogView.__proto__ || Object.getPrototypeOf(CourseDialogView)).call(this, props))
    _this.handleClose = _this.handleClose.bind(_this)
    return _this
  }
  _createClass(CourseDialogView, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.props.setCourseDialogVisibleAction(false)
    }
  }, {
    key: "handlePlayCourse",
    value: function handlePlayCourse(id) {
      this.props.setPlayCourseInfoAction({
        id: id,
        visible: true
      })
      this.props.setCourseDialogVisibleAction(false)
      __WEBPACK_IMPORTED_MODULE_4__sensorsData__.sensorsCustomReport("CourseClick", {
        course_id: id
      })
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this
      var _props = this.props
      var courseDialogVisible = _props.courseDialogVisible
      var courseList = _props.courseList
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__Dialog__.default, {
        withPortal: true,
        visible: courseDialogVisible,
        showCloseButton: true,
        className: "",
        title: "入门教程",
        styleName: "courseDialog",
        onClose: this.handleClose
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "courseList"
      }, courseList.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "courseItem",
          key: item.id,
          onClick: function onClick() {
            return _this2.handlePlayCourse(item.id)
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "courseImage"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "image",
          style: {
            backgroundImage: "url(" + item.preview + ")"
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "mask"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "playBox"
        }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
          type: "icon-play"
        })))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "courseName"
        }, item.title), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
          styleName: "courseDesc"
        }, item.course_intro))
      }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "courseMore"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "moreImage"
      }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "moreTips"
      }, "更多精彩，敬请期待"))))
    }
  }])
  return CourseDialogView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
CourseDialogView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], CourseDialogView)

/***/
