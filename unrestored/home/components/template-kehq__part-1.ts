/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：kehq__part-1
 */

"use strict"

/* harmony export (binding) */
import { "kehq__part-0___createClass" as _createClass, "kehq__part-0___classCallCheck" as _classCallCheck, "kehq__part-0___possibleConstructorReturn" as _possibleConstructorReturn, "kehq__part-0___inherits" as _inherits, "kehq__part-0____decorate" as __decorate } from "./template-kehq__part-0"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__sensorsData__ from "../sensorsData-yI2H"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__IconFont__ from "./IconFont-zVV7"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__Dialog__ from "./Dialog-kQfo"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules"
/* harmony import */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
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
export { CourseDialogView as "kehq__part-1__CourseDialogView" }
