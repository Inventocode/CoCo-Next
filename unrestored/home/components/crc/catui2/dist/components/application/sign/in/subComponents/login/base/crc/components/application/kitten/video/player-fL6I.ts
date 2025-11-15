/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：fL6I
 */

"use strict"

/* harmony export (binding) */
/* harmony import */
export { KittenVideoPlayer }
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ from "@babel/runtime/helpers/esm/classCallCheck"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ from "@babel/runtime/helpers/esm/createClass"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__ from "@babel/runtime/helpers/esm/assertThisInitialized"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__ from "@babel/runtime/helpers/esm/inherits"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__ from "@babel/runtime/helpers/esm/possibleConstructorReturn"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__ from "@babel/runtime/helpers/esm/getPrototypeOf"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__ from "@babel/runtime/helpers/esm/defineProperty"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName__ from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default from "babel-plugin-react-css-modules/dist/browser/getClassName"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9_re_resizable__ from "../../../../../../../../../../../../../../../../re/resizable-iV4c"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10_react_draggable__ from "react-draggable"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_10_react_draggable___default from "react-draggable"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11_video_react__ from "video-react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_11_video_react___default from "video-react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_12__components_base_button__ from "../../../../../../../../base/button-sg+3"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_13__def__ from "./def-R5+Y"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_14__style_module_css__ from "./style.module.css-CJbE"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_14__style_module_css___default from "./style.module.css-CJbE"
var _styleModuleImportMap = {
  "./style_module.css": {
    "video_container": "CUI-kitten-video-player-video_container",
    "video_wrap": "CUI-kitten-video-player-video_wrap",
    "end-mask-img": "CUI-kitten-video-player-end-mask-img",
    "end-mask-title": "CUI-kitten-video-player-end-mask-title",
    "end-mask-text": "CUI-kitten-video-player-end-mask-text",
    "video_header": "CUI-kitten-video-player-video_header",
    "title": "CUI-kitten-video-player-title",
    "close_btn": "CUI-kitten-video-player-close_btn",
    "mini_btn": "CUI-kitten-video-player-mini_btn",
    "video_content": "CUI-kitten-video-player-video_content",
    "video-react-pause-mask": "CUI-kitten-video-player-video-react-pause-mask",
    "mask-icon": "CUI-kitten-video-player-mask-icon",
    "paused": "CUI-kitten-video-player-paused",
    "playing": "CUI-kitten-video-player-playing",
    "fadeOutZoom": "CUI-kitten-video-player-fadeOutZoom",
    "closing": "CUI-kitten-video-player-closing",
    "spin": "CUI-kitten-video-player-spin",
    "video-react-spinner-spin": "CUI-kitten-video-player-video-react-spinner-spin",
    "video-react-spinner-fade": "CUI-kitten-video-player-video-react-spinner-fade"
  }
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct()
  return function _createSuperInternal() {
    var Super = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__.default(Derived)
    var result
    if (hasNativeReflectConstruct) {
      var NewTarget = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__.default(this).constructor
      result = Reflect.construct(Super, arguments, NewTarget)
    } else {
      result = Super.apply(this, arguments)
    }
    return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__.default(this, result)
  }
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) {
    return false
  }
  if (Reflect.construct.sham) {
    return false
  }
  if (typeof Proxy === "function") {
    return true
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
    return true
  } catch (e) {
    return false
  }
}
var BOUND_ELEM_ID = "CUI-kitten-video-player-bound"
var KittenVideoPlayer = /*#__PURE__*/function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_inherits__.default(KittenVideoPlayer, _React$Component)
  var _super = _createSuper(KittenVideoPlayer)
  function KittenVideoPlayer(props) {
    var _this
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__.default(this, KittenVideoPlayer)
    _this = _super.call(this, props)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "videoElem", undefined)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "controlBarElem", undefined)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "hideControlbar", function () {
      if (!_this.controlBarElem) {
        return
      }
      _this.controlBarElem.style.height = "0px"
      _this.controlBarElem.style.bottom = "-4px"
      _this.controlBarElem.style.backgroundImage = "linear-gradient(0deg,transparent,transparent)"
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "showControllber", function () {
      if (!_this.controlBarElem) {
        return
      }
      _this.controlBarElem.style.height = "70px"
      _this.controlBarElem.style.bottom = "0"
      _this.controlBarElem.style.backgroundImage = "linear-gradient(0deg,#0000008a,transparent)"
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "videoContainerElem", undefined)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "player", undefined)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "maxWatchTime", 0)
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "onResizeStart", function (event, direction, element, delta) {
      var resizableBoxRightOffset = element.getBoundingClientRect().right
      var resizableBoxBottomOffset = element.getBoundingClientRect().bottom
      var resizableBoxWidth = element.offsetWidth
      var resizableBoxHeight = element.offsetHeight
      var _element$getBoundingC = element.getBoundingClientRect()
      var top = _element$getBoundingC.top
      var bottom = _element$getBoundingC.bottom
      var left = _element$getBoundingC.left
      var right = _element$getBoundingC.right
      var height = _element$getBoundingC.height
      var width = _element$getBoundingC.width
      if (_this.setResizableBoxOriginData) {
        _this.setResizableBoxOriginData(resizableBoxRightOffset, resizableBoxBottomOffset, resizableBoxWidth, resizableBoxHeight)
      }
      if (direction === "top" || direction === "topLeft") {
        _this.lockResizableBox(height + top, width + left)
        return
      }
      if (direction === "left" || direction === "bottomLeft") {
        _this.lockResizableBox(height + (document.body.clientHeight - bottom), width + left)
        return
      }
      if (direction === "topRight") {
        _this.lockResizableBox(height + top, width + (document.body.clientWidth - right))
        return
      }
      if (direction === "right" || direction === "bottom" || direction === "bottomRight") {
        _this.lockResizableBox(height + (document.body.clientHeight - bottom), width + (document.body.clientWidth - right))
        return
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "onResize", function (event, direction, element, delta) {
      if (_this.setResizableBoxPosition) {
        _this.setResizableBoxPosition(direction, delta)
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "onReplayClick", function () {
      var _this$player
      if ((_this$player = _this.player) === null || _this$player === undefined) {
        undefined
      } else {
        _this$player.play()
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "setDraggablePosition", function (event, data) {
      _this.setState({
        videoPosition: {
          x: data.x,
          y: data.y
        }
      })
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "handleMiniPlayer", function () {
      if (_this.props.onMinimizeBtnClick) {
        _this.props.onMinimizeBtnClick(_this.player)
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "closeSelf", function () {
      var _this$props = _this.props
      var onClose = _this$props.onClose
      var reportMaxWatchTimeRepo = _this$props.reportMaxWatchTimeRepo
      if (reportMaxWatchTimeRepo) {
        reportMaxWatchTimeRepo(_this.maxWatchTime)
      }
      if (onClose) {
        onClose(_this.player)
      }
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "handleClosePlayer", function () {
      var _this$player2
      var _this$player3
      var useConfirmMask = _this.props.useConfirmMask
      var player = (_this$player2 = _this.player) === null || _this$player2 === undefined ? undefined : _this$player2.getState().player
      if (!player || _this.state.closingConfirm || !useConfirmMask || _this.props.confirmPercent != null && player.currentTime / player.duration > _this.props.confirmPercent) {
        _this.closeSelf()
        return
      }
      if (_this.props.onConfirmMaskShow) {
        _this.props.onConfirmMaskShow()
      }
      if ((_this$player3 = _this.player) === null || _this$player3 === undefined) {
        undefined
      } else {
        _this$player3.pause()
      }
      _this.setState({
        closingConfirm: true
      })
    })
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_defineProperty__.default(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_assertThisInitialized__.default(_this), "getRemainPercent", function () {
      try {
        var _this$player4
        var _this$player4$getStat
        var state = (_this$player4 = _this.player) === null || _this$player4 === undefined ? undefined : (_this$player4$getStat = _this$player4.getState()) === null || _this$player4$getStat === undefined ? undefined : _this$player4$getStat.player
        if (!state) {
          return
        }
        var currentTime = state.currentTime
        var duration = state.duration
        return Math.round((duration - currentTime) / duration * 100)
      } catch (err) {
        return 0
      }
    })
    _this.state = {
      autoHide: false,
      width: __WEBPACK_IMPORTED_MODULE_13__def__.videoDefaultWidth(),
      height: __WEBPACK_IMPORTED_MODULE_13__def__.videoDefaultHeight(),
      boundWidth: document.body.clientWidth,
      boundHeight: document.body.clientHeight,
      showEndedMask: false,
      videoOriginRightOffset: 0,
      videoOriginBottomOffset: 0,
      resizableBoxOriginWidth: 0,
      resizableBoxOriginHeight: 0,
      paused: !props.autoPlay,
      closingConfirm: false,
      videoPosition: {
        x: __WEBPACK_IMPORTED_MODULE_13__def__.videoDefaultPositionLeft(),
        y: __WEBPACK_IMPORTED_MODULE_13__def__.videoDefaultPositionTop()
      },
      videoDeltaOffset: {
        width: 0,
        height: 0
      }
    } // 在body插入一个div并作为视频播放器拖拽的边界限制元素，卸载播放器组件时应删除该元素
    // 不使用body作为边界元素是因为有些项目的body宽高不一定为100%
    var boundElem = document.createElement("div")
    boundElem.id = BOUND_ELEM_ID
    boundElem.style.position = "fixed"
    boundElem.style.zIndex = "-999999"
    boundElem.style.width = "100%"
    boundElem.style.height = "100%"
    document.body.appendChild(boundElem)
    return _this
  }
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__.default(KittenVideoPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$player5
      if (this.props.getPlayerRef) {
        this.props.getPlayerRef(this.player)
      }
      if ((_this$player5 = this.player) === null || _this$player5 === undefined) {
        undefined
      } else {
        _this$player5.subscribeToStateChange(this.handleStateChange.bind(this))
      }
      this.setState({
        boundWidth: document.body.clientWidth,
        boundHeight: document.body.clientHeight
      })
      this.videoElem = document.getElementsByClassName("CUI-kitten-video-player-video_wrap")[0]
      this.controlBarElem = document.getElementsByClassName("video-react-control-bar")[0]
      this.videoElem.addEventListener("mouseleave", this.hideControlbar)
      this.videoElem.addEventListener("mouseenter", this.showControllber)
      this.hideControlbar()
      if (this.props.onPlayerInit) {
        this.props.onPlayerInit()
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$videoElem
      var _this$videoElem2
      var boundElem = document.getElementById(BOUND_ELEM_ID)
      if (boundElem) {
        document.body.removeChild(boundElem)
      }
      if ((_this$videoElem = this.videoElem) === null || _this$videoElem === undefined) {
        undefined
      } else {
        _this$videoElem.removeEventListener("mouseleave", this.hideControlbar)
      }
      if ((_this$videoElem2 = this.videoElem) === null || _this$videoElem2 === undefined) {
        undefined
      } else {
        _this$videoElem2.removeEventListener("mouseenter", this.showControllber)
      }
    }
  }, {
    key: "handleStateChange",
    value: function handleStateChange(state, prevState) {
      var _this$videoContainerE
      if (state.isFullscreen !== prevState.isFullscreen) {
        this.setState({
          autoHide: state.isFullscreen
        })
        if (!state.isFullscreen) {
          this.setControlBarStyle()
        }
      }
      if (state.ended !== prevState.ended && state.ended && state.currentTime === state.duration && ((_this$videoContainerE = this.videoContainerElem) === null || _this$videoContainerE === undefined ? undefined : _this$videoContainerE.style.display) !== "none") {
        this.setState({
          showEndedMask: true
        })
      }
      if (state.ended !== prevState.ended && !state.ended) {
        this.setState({
          showEndedMask: false
        })
      }
      if (state.paused !== prevState.paused) {
        this.setState({
          paused: state.paused
        })
      }
      if (state.currentTime >= this.maxWatchTime) {
        this.maxWatchTime = state.currentTime
      }
    }
  }, {
    key: "setControlBarStyle",
    value: function setControlBarStyle() {
      var controlBar = document.getElementsByClassName("video-react-control-bar")
      if (!controlBar) {
        return
      }
      controlBar[0].classList.add("float_bottom")
    }
  }, {
    key: "clickMask",
    value: function clickMask() {
      var _this$player6
      if ((_this$player6 = this.player) === null || _this$player6 === undefined) {
        undefined
      } else {
        _this$player6.play()
      }
    }
  }, {
    key: "lockResizableBox",
    value: function lockResizableBox(maxHeight, maxWidth) {
      this.setState({
        boundHeight: maxHeight,
        boundWidth: maxWidth
      })
    }
  }, {
    key: "setResizableBoxPosition",
    value: function setResizableBoxPosition(handlePosition, videoDeltaOffset) {
      var x
      var y
      switch (handlePosition) {
        case "left":
          x = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + videoDeltaOffset.width)
          y = this.state.videoPosition.y
          break
        case "top":
          x = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + videoDeltaOffset.height * 16 / 9)
          y = this.state.videoOriginBottomOffset - (this.state.resizableBoxOriginHeight + videoDeltaOffset.height)
          break
        case "bottomLeft":
          x = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + videoDeltaOffset.width)
          y = this.state.videoPosition.y
          break
        case "topLeft":
          x = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + videoDeltaOffset.height * 16 / 9)
          y = this.state.videoOriginBottomOffset - (this.state.resizableBoxOriginHeight + videoDeltaOffset.height)
          break
        case "topRight":
          x = this.state.videoPosition.x
          y = this.state.videoOriginBottomOffset - (this.state.resizableBoxOriginHeight + videoDeltaOffset.height)
          break
        default:
          x = this.state.videoPosition.x
          y = this.state.videoPosition.y
      }
      this.setState({
        videoPosition: {
          x: x,
          y: y
        }
      })
    }
  }, {
    key: "setResizableBoxOriginData",
    value: function setResizableBoxOriginData(videoOriginRightOffset, videoOriginBottomOffset, resizableBoxOriginWidth, resizableBoxOriginHeight) {
      this.setState({
        videoOriginRightOffset: videoOriginRightOffset,
        resizableBoxOriginWidth: resizableBoxOriginWidth,
        videoOriginBottomOffset: videoOriginBottomOffset,
        resizableBoxOriginHeight: resizableBoxOriginHeight
      })
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this
      var _this$props2 = this.props
      var reportMiniClick = _this$props2.reportMiniClick
      var reportCloseClick = _this$props2.reportCloseClick
      var reportReplayClick = _this$props2.reportReplayClick
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-video_container",
        style: {
          zIndex: this.props.zIndex != null ? this.props.zIndex : 1
        },
        ref: function ref(_ref2) {
          return _ref2 && (_this2.videoContainerElem = _ref2)
        }
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_10_react_draggable___default, {
        allowAnyClick: true,
        defaultClassName: "CUI-kitten-video-player-draggable",
        handle: ".CUI-kitten-video-handler",
        bounds: "#".concat(BOUND_ELEM_ID),
        position: this.state.videoPosition,
        onDrag: this.setDraggablePosition.bind(this)
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_9_re_resizable__.default, {
        className: "box",
        defaultSize: {
          width: this.state.width,
          height: this.state.height
        },
        lockAspectRatio: __WEBPACK_IMPORTED_MODULE_13__def__.videoDefaultRatio,
        onResize: this.onResize.bind(this),
        onResizeStart: this.onResizeStart.bind(this),
        lockAspectRatioExtraHeight: __WEBPACK_IMPORTED_MODULE_13__def__.videoExtraHeight,
        minHeight: __WEBPACK_IMPORTED_MODULE_13__def__.videoMinHeight(),
        minWidth: __WEBPACK_IMPORTED_MODULE_13__def__.videoMinWidth(),
        maxHeight: this.state.boundHeight,
        maxWidth: this.state.boundWidth
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-video_wrap",
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-handler CUI-kitten-video-player-video_header"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-title"
      }, this.props.title), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-mini_btn",
        onClick: this.handleMiniPlayer,
        onTouchStart: this.handleMiniPlayer,
        "data-report-click": reportMiniClick
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-close_btn",
        onClick: this.handleClosePlayer,
        onTouchStart: this.handleClosePlayer,
        "data-report-click": reportCloseClick
      })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_11_video_react__.Player, {
        playsInline: true,
        src: this.props.videoSrc,
        ref: function ref(_ref) {
          if (!_ref) {
            return
          }
          _this2.player = _ref
        },
        autoPlay: this.props.autoPlay
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_11_video_react__.ControlBar, {
        autoHide: this.state.autoHide
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_11_video_react__.ProgressControl, {
        order: 3.0
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_11_video_react__.CurrentTimeDisplay, {
        order: 4.0
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_11_video_react__.TimeDivider, {
        order: 4.1
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_11_video_react__.DurationDisplay, {
        order: 4.2
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_11_video_react__.VolumeMenuButton, {
        order: 7.0
      })), this.state.showEndedMask ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-video-finish-mask"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-video-finish-mask-title"
      }, "恭喜你看完了本节课程"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-video-finish-mask-text"
      }, "快去创作属于自己的作品吧！"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-video-finish-mask-text"
      }, "点击网页右上角的【保存】按钮，储存云端不丢失哦！"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-finish-mask-btn CUI-replay-icon",
        onClick: this.onReplayClick,
        "data-report-click": reportReplayClick
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("span", null, "再看一遍"))) : this.state.closingConfirm ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-video-react-pause-mask CUI-kitten-video-player-paused CUI-kitten-video-player-closing"
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("img", {
        className: "CUI-kitten-video-player-end-mask-img",
        src: require("./unnamed-TkkK")
      }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-end-mask-title"
      }, "真的不再坚持一下么？"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: "CUI-kitten-video-player-end-mask-text"
      }, "还剩下", this.getRemainPercent(), "%就完成了"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", null, " ", /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_button__.Button, {
        type: "secondary",
        margin: "0 18px 0 0",
        onClick: this.closeSelf
      }, "坚持退出"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement(__WEBPACK_IMPORTED_MODULE_12__components_base_button__.Button, {
        type: "primary",
        onClick: function onClick() {
          var _this2$player
          if (_this2.props.onConfirmCancel) {
            _this2.props.onConfirmCancel()
          }
          _this2.setState({
            closingConfirm: false
          })
          if ((_this2$player = _this2.player) === null || _this2$player === undefined) {
            undefined
          } else {
            _this2$player.play()
          }
        }
      }, "继续学习"))) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        onClick: this.clickMask.bind(this),
        className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("video-react-pause-mask ".concat(this.state.paused ? "paused" : "playing"), _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react__.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_7_babel_plugin_react_css_modules_dist_browser_getClassName___default("mask-icon", _styleModuleImportMap, {
          "autoResolveMultipleImports": true,
          "handleMissingStyleName": "throw"
        })
      })))))))
    }
  }])
  return KittenVideoPlayer
}(__WEBPACK_IMPORTED_MODULE_8_react__.Component)

/***/
