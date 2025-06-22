"use strict";

/* harmony export (binding) */
export { PlayCourseVideoView };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__cfg__ from "./cfg-dpNx";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__IconFont__ from "./IconFont-zVV7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__sensorsData__ from "./sensorsData-yI2H";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var styles = require("./unnamed-V8ar");
var PlayCourseVideoView = function (_React$Component) {
  _inherits(PlayCourseVideoView, _React$Component);
  function PlayCourseVideoView(props) {
    _classCallCheck(this, PlayCourseVideoView);
    var _this = _possibleConstructorReturn(this, (PlayCourseVideoView.__proto__ || Object.getPrototypeOf(PlayCourseVideoView)).call(this, props));
    _this.state = {
      isEnd: false,
      isPause: false
    };
    _this.quitPlayCourse = _this.quitPlayCourse.bind(_this);
    _this.onPlay = _this.onPlay.bind(_this);
    _this.onPause = _this.onPause.bind(_this);
    _this.onEnded = _this.onEnded.bind(_this);
    _this.handlePlay = _this.handlePlay.bind(_this);
    _this.handleNextCourse = _this.handleNextCourse.bind(_this);
    return _this;
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
      });
    }
  }, {
    key: "openCourseInEditor",
    value: function openCourseInEditor(id) {
      var _config = Object(__WEBPACK_IMPORTED_MODULE_2__cfg__.config)(),
        cocoEditorUrl = _config.cocoEditorUrl;
      window.open(cocoEditorUrl + "?courseId=" + id, Date.now().toString());
      this.quitPlayCourse();
    }
  }, {
    key: "handlePlay",
    value: function handlePlay() {
      this.videoRef.play();
    }
  }, {
    key: "handleNextCourse",
    value: function handleNextCourse() {
      var _props = this.props,
        playCourseInfo = _props.playCourseInfo,
        courseList = _props.courseList;
      var index = courseList.findIndex(function (item) {
        return item.id === playCourseInfo.id;
      });
      if (courseList[index + 1]) {
        var nextId = courseList[index + 1].id;
        this.props.setPlayCourseInfoAction({
          id: nextId,
          visible: true
        });
        this.setState({
          isEnd: false
        });
        Object(__WEBPACK_IMPORTED_MODULE_4__sensorsData__.sensorsCustomReport)('CourseClick', {
          course_id: nextId
        });
      }
    }
  }, {
    key: "onPlay",
    value: function onPlay() {
      this.setState({
        isPause: false,
        isEnd: false
      });
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.setState({
        isPause: true
      });
    }
  }, {
    key: "onEnded",
    value: function onEnded() {
      this.setState({
        isPause: false,
        isEnd: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _state = this.state,
        isPause = _state.isPause,
        isEnd = _state.isEnd;
      var _props2 = this.props,
        playCourseInfo = _props2.playCourseInfo,
        courseList = _props2.courseList;
      var course = courseList.find(function (item) {
        return item.id === playCourseInfo.id;
      });
      var index = courseList.findIndex(function (item) {
        return item.id === playCourseInfo.id;
      });
      var isLast = index === courseList.length - 1;
      if (!playCourseInfo.visible || !course) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playVideoBox'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'content'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'videoTitle'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'title'
      }, course.title), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'icon',
        onClick: this.quitPlayCourse
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: 'icon-close'
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'videoBox'
      }, isPause && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playBox'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playIcon',
        onClick: this.handlePlay
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: 'icon-play',
        styleName: 'play'
      })), "\u64AD\u653E"), isEnd && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playBox'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playIconBox'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playIconItem'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playIcon',
        onClick: this.handlePlay
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: 'icon-replay',
        styleName: 'replay'
      })), "\u91CD\u64AD"), !isLast && __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playIconItem'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'playIcon',
        onClick: this.handleNextCourse
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__IconFont__.default, {
        type: 'icon-next-video',
        styleName: 'nextVideo'
      })), "\u4E0B\u4E00\u8282")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'openWorkBtn',
        onClick: function onClick() {
          return _this2.openCourseInEditor(course.id);
        }
      }, "\u8FB9\u770B\u8FB9\u505A")), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("video", {
        ref: function ref(e) {
          return _this2.videoRef = e;
        },
        src: course.video_url,
        styleName: 'video',
        autoPlay: true,
        controls: true,
        onPlay: this.onPlay,
        onPause: this.onPause,
        onEnded: this.onEnded
      })), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'courseInfo'
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'title'
      }, course.title), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'desc'
      }, course.course_intro)), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        styleName: 'btn',
        onClick: function onClick() {
          return _this2.openCourseInEditor(course.id);
        }
      }, "\u8FB9\u770B\u8FB9\u505A"))));
    }
  }]);
  return PlayCourseVideoView;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);
PlayCourseVideoView = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules__(styles, {
  allowMultiple: true
})], PlayCourseVideoView);

/***/