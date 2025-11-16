/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：ReOC__part-1
 */

"use strict"

/* harmony export (binding) */
import { "ReOC__part-0___createClass" as _createClass, "ReOC__part-0___classCallCheck" as _classCallCheck, "ReOC__part-0___possibleConstructorReturn" as _possibleConstructorReturn, "ReOC__part-0___inherits" as _inherits, "ReOC__part-0____decorate" as __decorate } from "./template-ReOC__part-0"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__sensorsData__ from "../sensorsData-yI2H"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__IconFont__ from "./IconFont-zVV7"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__cfg__ from "../cfg-dpNx"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react-css-modules"
/* harmony import */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import * as styles from "./styles-V8ar"
var PlayCourseVideoView = function (_React$Component) {
  _inherits(PlayCourseVideoView, _React$Component)
  function PlayCourseVideoView(props) {
    _classCallCheck(this, PlayCourseVideoView)
    var _this = _possibleConstructorReturn(this, (PlayCourseVideoView.__proto__ || Object.getPrototypeOf(PlayCourseVideoView)).call(this, props))
    _this.state = {
      isEnd: false,
      isPause: false
    }
    _this.quitPlayCourse = _this.quitPlayCourse.bind(_this)
    _this.onPlay = _this.onPlay.bind(_this)
    _this.onPause = _this.onPause.bind(_this)
    _this.onEnded = _this.onEnded.bind(_this)
    _this.handlePlay = _this.handlePlay.bind(_this)
    _this.handleNextCourse = _this.handleNextCourse.bind(_this)
    return _this
  }
  _createClass(PlayCourseVideoView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
    }
  }, {
    key: "quitPlayCourse",
    value: function quitPlayCourse() {
      this.props.setPlayCourseInfoAction({
        id: -1,
        visible: false
      })
    }
  }, {
    key: "openCourseInEditor",
    value: function openCourseInEditor(id) {
      var _config = __WEBPACK_IMPORTED_MODULE_2__cfg__.config()
      var cocoEditorUrl = _config.cocoEditorUrl
      window.open(cocoEditorUrl + "?courseId=" + id, Date.now().toString())
      this.quitPlayCourse()
    }
  }, {
    key: "handlePlay",
    value: function handlePlay() {
      this.videoRef.play()
    }
  }, {
    key: "handleNextCourse",
    value: function handleNextCourse() {
      var _props = this.props
      var playCourseInfo = _props.playCourseInfo
      var courseList = _props.courseList
      var index = courseList.findIndex(function (item) {
        return item.id === playCourseInfo.id
      })
      if (courseList[index + 1]) {
        var nextId = courseList[index + 1].id
        this.props.setPlayCourseInfoAction({
          id: nextId,
          visible: true
        })
        this.setState({
          isEnd: false
        })
        __WEBPACK_IMPORTED_MODULE_4__sensorsData__.sensorsCustomReport("CourseClick", {
          course_id: nextId
        })
      }
    }
  }, {
    key: "onPlay",
    value: function onPlay() {
      this.setState({
        isPause: false,
        isEnd: false
      })
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.setState({
        isPause: true
      })
    }
  }, {
    key: "onEnded",
    value: function onEnded() {
      this.setState({
        isPause: false,
        isEnd: true
      })
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this
      var _state = this.state
      var isPause = _state.isPause
      var isEnd = _state.isEnd
      var _props2 = this.props
      var playCourseInfo = _props2.playCourseInfo
      var courseList = _props2.courseList
      var course = courseList.find(function (item) {
        return item.id === playCourseInfo.id
      })
      var index = courseList.findIndex(function (item) {
        return item.id === playCourseInfo.id
      })
      var isLast = index === courseList.length - 1
      if (!playCourseInfo.visible || !course) {
        return null
      }
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playVideoBox"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "content"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "videoTitle"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "title"
      }, course.title), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "icon",
        onClick: this.quitPlayCourse
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: "icon-close"
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "videoBox"
      }, isPause && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playBox"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playIcon",
        onClick: this.handlePlay
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: "icon-play",
        styleName: "play"
      })), "播放"), isEnd && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playBox"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playIconBox"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playIconItem"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playIcon",
        onClick: this.handlePlay
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: "icon-replay",
        styleName: "replay"
      })), "重播"), !isLast && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playIconItem"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "playIcon",
        onClick: this.handleNextCourse
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: "icon-next-video",
        styleName: "nextVideo"
      })), "下一节")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "openWorkBtn",
        onClick: function onClick() {
          return _this2.openCourseInEditor(course.id)
        }
      }, "边看边做")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("video", {
        ref: function ref(e) {
          return _this2.videoRef = e
        },
        src: course.video_url,
        styleName: "video",
        autoPlay: true,
        controls: true,
        onPlay: this.onPlay,
        onPause: this.onPause,
        onEnded: this.onEnded
      })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "courseInfo"
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "title"
      }, course.title), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "desc"
      }, course.course_intro)), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: "btn",
        onClick: function onClick() {
          return _this2.openCourseInEditor(course.id)
        }
      }, "边看边做"))))
    }
  }])
  return PlayCourseVideoView
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component)
PlayCourseVideoView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], PlayCourseVideoView)

/***/
export { PlayCourseVideoView as "ReOC__part-1__PlayCourseVideoView" }
