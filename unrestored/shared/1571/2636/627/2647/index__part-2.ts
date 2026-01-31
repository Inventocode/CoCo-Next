/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2647__part-2
 */

"use strict"

import { E, C, S } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_$$_2646_index from "../../2646/index"
import * as /* [auto-meaningful-name] */$_3308_index from "./3308/index"
import /* [auto-meaningful-name] */$$_$$_1220_index from "../../1220/index"
import * as /* [auto-meaningful-name] */$$_$$_1221 from "../../1221"
import { createElement, Component } from "react"
import /* [auto-meaningful-name] */$$_$$_2646_1219_index from "../../2646/1219/index"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_362 from "../../362"
import * as /* [auto-meaningful-name] */$$_$$_388 from "../../388"
import * as /* [auto-meaningful-name] */$$_$$_120 from "../../120"
import * as /* [auto-meaningful-name] */$$_$$_142 from "../../142"
import * as /* [auto-meaningful-name] */$$_$$_106 from "../../106"
import * as /* [auto-meaningful-name] */$$_$$_103 from "../../103"
import "./3321"
var P = {
  "./style_module.css": {
    video_container: "CUI-kitten-video-player-video_container",
    video_wrap: "CUI-kitten-video-player-video_wrap",
    "end-mask-img": "CUI-kitten-video-player-end-mask-img",
    "end-mask-title": "CUI-kitten-video-player-end-mask-title",
    "end-mask-text": "CUI-kitten-video-player-end-mask-text",
    video_header: "CUI-kitten-video-player-video_header",
    title: "CUI-kitten-video-player-title",
    close_btn: "CUI-kitten-video-player-close_btn",
    mini_btn: "CUI-kitten-video-player-mini_btn",
    video_content: "CUI-kitten-video-player-video_content",
    "video-react-pause-mask": "CUI-kitten-video-player-video-react-pause-mask",
    "mask-icon": "CUI-kitten-video-player-mask-icon",
    paused: "CUI-kitten-video-player-paused",
    playing: "CUI-kitten-video-player-playing",
    fadeOutZoom: "CUI-kitten-video-player-fadeOutZoom",
    closing: "CUI-kitten-video-player-closing",
    spin: "CUI-kitten-video-player-spin",
    "video-react-spinner-spin": "CUI-kitten-video-player-video-react-spinner-spin",
    "video-react-spinner-fade": "CUI-kitten-video-player-video-react-spinner-fade"
  }
}
function w(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return false
    }
    if (Reflect.construct.sham) {
      return false
    }
    if ("function" === typeof Proxy) {
      return true
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
      return true
    } catch (e) {
      return false
    }
  }()
  return function () {
    var n
    var a = $$_$$_362.a(e)
    if (t) {
      var /* [auto-meaningful-name] */$$_$$_362$aThis$constructor = $$_$$_362.a(this).constructor
      n = Reflect.construct(a, arguments, $$_$$_362$aThis$constructor)
    } else {
      n = a.apply(this, arguments)
    }
    return $$_$$_388.a(this, n)
  }
}
var /* [auto-meaningful-name] */CUIKittenVideoPlayerBound = "CUI-kitten-video-player-bound"
var M = function (e) {
  $$_$$_120.a(a, e)
  var t = w(a)
  function a(e) {
    var n
    $$_$$_103.a(this, a)
    n = t.call(this, e)
    $$_$$_35.a($$_$$_142.a(n), "videoElem", undefined)
    $$_$$_35.a($$_$$_142.a(n), "controlBarElem", undefined)
    $$_$$_35.a($$_$$_142.a(n), "hideControlbar", function () {
      if (n.controlBarElem) {
        n.controlBarElem.style.height = "0px"
        n.controlBarElem.style.bottom = "-4px"
        n.controlBarElem.style.backgroundImage = "linear-gradient(0deg,transparent,transparent)"
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "showControllber", function () {
      if (n.controlBarElem) {
        n.controlBarElem.style.height = "70px"
        n.controlBarElem.style.bottom = "0"
        n.controlBarElem.style.backgroundImage = "linear-gradient(0deg,#0000008a,transparent)"
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "videoContainerElem", undefined)
    $$_$$_35.a($$_$$_142.a(n), "player", undefined)
    $$_$$_35.a($$_$$_142.a(n), "maxWatchTime", 0)
    $$_$$_35.a($$_$$_142.a(n), "onResizeStart", function (e, t, a, r) {
      var /* [auto-meaningful-name] */a$getBoundingClientRect$right = a.getBoundingClientRect().right
      var /* [auto-meaningful-name] */a$getBoundingClientRect$bottom = a.getBoundingClientRect().bottom
      var /* [auto-meaningful-name] */a$offsetWidth = a.offsetWidth
      var /* [auto-meaningful-name] */a$offsetHeight = a.offsetHeight
      var s = a.getBoundingClientRect()
      var /* [auto-meaningful-name] */s$top = s.top
      var /* [auto-meaningful-name] */s$bottom = s.bottom
      var /* [auto-meaningful-name] */s$left = s.left
      var /* [auto-meaningful-name] */s$right = s.right
      var /* [auto-meaningful-name] */s$height = s.height
      var /* [auto-meaningful-name] */s$width = s.width
      if (n.setResizableBoxOriginData) {
        n.setResizableBoxOriginData(a$getBoundingClientRect$right, a$getBoundingClientRect$bottom, a$offsetWidth, a$offsetHeight)
      }
      if ("top" !== t && "topLeft" !== t) {
        if ("left" !== t && "bottomLeft" !== t) {
          if ("topRight" !== t) {
            if (!("right" !== t && "bottom" !== t && "bottomRight" !== t)) {
              n.lockResizableBox(s$height + (document.body.clientHeight - s$bottom), s$width + (document.body.clientWidth - s$right))
            }
          } else {
            n.lockResizableBox(s$height + s$top, s$width + (document.body.clientWidth - s$right))
          }
        } else {
          n.lockResizableBox(s$height + (document.body.clientHeight - s$bottom), s$width + s$left)
        }
      } else {
        n.lockResizableBox(s$height + s$top, s$width + s$left)
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "onResize", function (e, t, a, r) {
      if (n.setResizableBoxPosition) {
        n.setResizableBoxPosition(t, r)
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "onReplayClick", function () {
      var /* [auto-meaningful-name] */n$player
      if (!(null === (n$player = n.player) || undefined === n$player)) {
        n$player.play()
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "setDraggablePosition", function (e, t) {
      n.setState({
        videoPosition: {
          x: t.x,
          y: t.y
        }
      })
    })
    $$_$$_35.a($$_$$_142.a(n), "handleMiniPlayer", function () {
      if (n.props.onMinimizeBtnClick) {
        n.props.onMinimizeBtnClick(n.player)
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "closeSelf", function () {
      var /* [auto-meaningful-name] */n$props = n.props
      var /* [auto-meaningful-name] */n$props$onClose = n$props.onClose
      var /* [auto-meaningful-name] */n$props$reportMaxWatchTimeRepo = n$props.reportMaxWatchTimeRepo
      if (n$props$reportMaxWatchTimeRepo) {
        n$props$reportMaxWatchTimeRepo(n.maxWatchTime)
      }
      if (n$props$onClose) {
        n$props$onClose(n.player)
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "handleClosePlayer", function () {
      var /* [auto-meaningful-name] */n$player
      var /* [auto-meaningful-name] */n$player1
      var /* [auto-meaningful-name] */n$props$useConfirmMask = n.props.useConfirmMask
      var r = null === (n$player = n.player) || undefined === n$player ? undefined : n$player.getState().player
      if (!r || n.state.closingConfirm || !n$props$useConfirmMask || null != n.props.confirmPercent && r.currentTime / r.duration > n.props.confirmPercent) {
        n.closeSelf()
      } else {
        if (n.props.onConfirmMaskShow) {
          n.props.onConfirmMaskShow()
        }
        if (!(null === (n$player1 = n.player) || undefined === n$player1)) {
          n$player1.pause()
        }
        n.setState({
          closingConfirm: true
        })
      }
    })
    $$_$$_35.a($$_$$_142.a(n), "getRemainPercent", function () {
      try {
        var /* [auto-meaningful-name] */n$player
        var t
        var a = null === (n$player = n.player) || undefined === n$player || null === (t = n$player.getState()) || undefined === t ? undefined : t.player
        if (!a) {
          return
        }
        var /* [auto-meaningful-name] */a$currentTime = a.currentTime
        var /* [auto-meaningful-name] */a$duration = a.duration
        return Math.round((a$duration - a$currentTime) / a$duration * 100)
      } catch (i) {
        return 0
      }
    })
    n.state = {
      autoHide: false,
      width: C(),
      height: E(),
      boundWidth: document.body.clientWidth,
      boundHeight: document.body.clientHeight,
      showEndedMask: false,
      videoOriginRightOffset: 0,
      videoOriginBottomOffset: 0,
      resizableBoxOriginWidth: 0,
      resizableBoxOriginHeight: 0,
      paused: !e.autoPlay,
      closingConfirm: false,
      videoPosition: {
        x: window.innerWidth - C(),
        y: 52
      },
      videoDeltaOffset: {
        width: 0,
        height: 0
      }
    }
    var r = document.createElement("div")
    r.id = CUIKittenVideoPlayerBound
    r.style.position = "fixed"
    r.style.zIndex = "-999999"
    r.style.width = "100%"
    r.style.height = "100%"
    document.body.appendChild(r)
    return n
  }
  $$_$$_106.a(a, [
    {
      key: "componentDidMount",
      value: function () {
        var /* [auto-meaningful-name] */this$player
        if (this.props.getPlayerRef) {
          this.props.getPlayerRef(this.player)
        }
        if (!(null === (this$player = this.player) || undefined === this$player)) {
          this$player.subscribeToStateChange(this.handleStateChange.bind(this))
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
      value: function () {
        var /* [auto-meaningful-name] */this$videoElem
        var /* [auto-meaningful-name] */this$videoElem1
        var n = document.getElementById(CUIKittenVideoPlayerBound)
        if (n) {
          document.body.removeChild(n)
        }
        if (!(null === (this$videoElem = this.videoElem) || undefined === this$videoElem)) {
          this$videoElem.removeEventListener("mouseleave", this.hideControlbar)
        }
        if (!(null === (this$videoElem1 = this.videoElem) || undefined === this$videoElem1)) {
          this$videoElem1.removeEventListener("mouseenter", this.showControllber)
        }
      }
    }, {
      key: "handleStateChange",
      value: function (e, t) {
        var /* [auto-meaningful-name] */this$videoContainerElem
        if (e.isFullscreen !== t.isFullscreen) {
          this.setState({
            autoHide: e.isFullscreen
          })
          if (!e.isFullscreen) {
            this.setControlBarStyle()
          }
        }
        if (e.ended !== t.ended && e.ended && e.currentTime === e.duration && "none" !== (null === (this$videoContainerElem = this.videoContainerElem) || undefined === this$videoContainerElem ? undefined : this$videoContainerElem.style.display)) {
          this.setState({
            showEndedMask: true
          })
        }
        if (!(e.ended === t.ended || e.ended)) {
          this.setState({
            showEndedMask: false
          })
        }
        if (e.paused !== t.paused) {
          this.setState({
            paused: e.paused
          })
        }
        if (e.currentTime >= this.maxWatchTime) {
          this.maxWatchTime = e.currentTime
        }
      }
    }, {
      key: "setControlBarStyle",
      value: function () {
        var e = document.getElementsByClassName("video-react-control-bar")
        if (e) {
          e[0].classList.add("float_bottom")
        }
      }
    }, {
      key: "clickMask",
      value: function () {
        var /* [auto-meaningful-name] */this$player
        if (!(null === (this$player = this.player) || undefined === this$player)) {
          this$player.play()
        }
      }
    }, {
      key: "lockResizableBox",
      value: function (e, t) {
        this.setState({
          boundHeight: e,
          boundWidth: t
        })
      }
    }, {
      key: "setResizableBoxPosition",
      value: function (e, t) {
        var n
        var a
        switch (e) {
          case "left":
            n = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + t.width)
            a = this.state.videoPosition.y
            break
          case "top":
            n = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + 16 * t.height / 9)
            a = this.state.videoOriginBottomOffset - (this.state.resizableBoxOriginHeight + t.height)
            break
          case "bottomLeft":
            n = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + t.width)
            a = this.state.videoPosition.y
            break
          case "topLeft":
            n = this.state.videoOriginRightOffset - (this.state.resizableBoxOriginWidth + 16 * t.height / 9)
            a = this.state.videoOriginBottomOffset - (this.state.resizableBoxOriginHeight + t.height)
            break
          case "topRight":
            n = this.state.videoPosition.x
            a = this.state.videoOriginBottomOffset - (this.state.resizableBoxOriginHeight + t.height)
            break
          default:
            n = this.state.videoPosition.x
            a = this.state.videoPosition.y
        }
        this.setState({
          videoPosition: {
            x: n,
            y: a
          }
        })
      }
    }, {
      key: "setResizableBoxOriginData",
      value: function (e, t, n, a) {
        this.setState({
          videoOriginRightOffset: e,
          resizableBoxOriginWidth: n,
          videoOriginBottomOffset: t,
          resizableBoxOriginHeight: a
        })
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$reportMiniClick = this$props.reportMiniClick
        var /* [auto-meaningful-name] */this$props$reportCloseClick = this$props.reportCloseClick
        var /* [auto-meaningful-name] */this$props$reportReplayClick = this$props.reportReplayClick
        return createElement("div", {
          className: "CUI-kitten-video-player-video_container",
          style: {
            zIndex: null != this.props.zIndex ? this.props.zIndex : 1
          },
          ref: function (t) {
            return t && (e.videoContainerElem = t)
          }
        }, createElement($$_$$_1220_index, {
          allowAnyClick: true,
          defaultClassName: "CUI-kitten-video-player-draggable",
          handle: ".CUI-kitten-video-handler",
          bounds: "#".concat(CUIKittenVideoPlayerBound),
          position: this.state.videoPosition,
          onDrag: this.setDraggablePosition.bind(this)
        }, createElement($$_$$_1221.a, {
          className: "box",
          defaultSize: {
            width: this.state.width,
            height: this.state.height
          },
          lockAspectRatio: 16 / 9,
          onResize: this.onResize.bind(this),
          onResizeStart: this.onResizeStart.bind(this),
          lockAspectRatioExtraHeight: 40,
          minHeight: S(),
          minWidth: (S() - 40) * (16 / 9),
          maxHeight: this.state.boundHeight,
          maxWidth: this.state.boundWidth
        }, createElement("div", {
          className: "CUI-kitten-video-player-video_wrap",
          style: {
            width: "100%"
          }
        }, createElement("div", {
          className: "CUI-kitten-video-handler CUI-kitten-video-player-video_header"
        }, createElement("div", {
          className: "CUI-kitten-video-player-title"
        }, this.props.title), createElement("div", {
          className: "CUI-kitten-video-player-mini_btn",
          onClick: this.handleMiniPlayer,
          onTouchStart: this.handleMiniPlayer,
          "data-report-click": this$props$reportMiniClick
        }), createElement("div", {
          className: "CUI-kitten-video-player-close_btn",
          onClick: this.handleClosePlayer,
          onTouchStart: this.handleClosePlayer,
          "data-report-click": this$props$reportCloseClick
        })), createElement($_3308_index.Player, {
          playsInline: true,
          src: this.props.videoSrc,
          ref: function (t) {
            if (t) {
              e.player = t
            }
          },
          autoPlay: this.props.autoPlay
        }, createElement($_3308_index.ControlBar, {
          autoHide: this.state.autoHide
        }, createElement($_3308_index.ProgressControl, {
          order: 3
        }), createElement($_3308_index.CurrentTimeDisplay, {
          order: 4
        }), createElement($_3308_index.TimeDivider, {
          order: 4.1
        }), createElement($_3308_index.DurationDisplay, {
          order: 4.2
        }), createElement($_3308_index.VolumeMenuButton, {
          order: 7
        })), this.state.showEndedMask ? createElement("div", {
          className: "CUI-video-finish-mask"
        }, createElement("div", {
          className: "CUI-video-finish-mask-title"
        }, "恭喜你看完了本节课程"), createElement("div", {
          className: "CUI-video-finish-mask-text"
        }, "快去创作属于自己的作品吧！"), createElement("div", {
          className: "CUI-video-finish-mask-text"
        }, "点击网页右上角的【保存】按钮，储存云端不丢失哦！"), createElement("div", {
          className: "CUI-finish-mask-btn CUI-replay-icon",
          onClick: this.onReplayClick,
          "data-report-click": this$props$reportReplayClick
        }, createElement("span", null, "再看一遍"))) : this.state.closingConfirm ? createElement("div", {
          className: "CUI-kitten-video-player-video-react-pause-mask CUI-kitten-video-player-paused CUI-kitten-video-player-closing"
        }, createElement("img", {
          className: "CUI-kitten-video-player-end-mask-img",
          src: require("./3322")
        }), createElement("div", {
          className: "CUI-kitten-video-player-end-mask-title"
        }, "真的不再坚持一下么？"), createElement("div", {
          className: "CUI-kitten-video-player-end-mask-text"
        }, "还剩下", this.getRemainPercent(), "%就完成了"), createElement("div", null, " ", createElement($$_$$_2646_index.a, {
          type: "secondary",
          margin: "0 18px 0 0",
          onClick: this.closeSelf
        }, "坚持退出"), createElement($$_$$_2646_index.a, {
          type: "primary",
          onClick: function () {
            var /* [auto-meaningful-name] */e$player
            if (e.props.onConfirmCancel) {
              e.props.onConfirmCancel()
            }
            e.setState({
              closingConfirm: false
            })
            if (!(null === (e$player = e.player) || undefined === e$player)) {
              e$player.play()
            }
          }
        }, "继续学习"))) : createElement("div", {
          onClick: this.clickMask.bind(this),
          className: $$_$$_2646_1219_index("video-react-pause-mask ".concat(this.state.paused ? "paused" : "playing"), P, {
            autoResolveMultipleImports: true,
            handleMissingStyleName: "throw"
          })
        }, createElement("div", {
          className: $$_$$_2646_1219_index("mask-icon", P, {
            autoResolveMultipleImports: true,
            handleMissingStyleName: "throw"
          })
        })))))))
      }
    }
  ])
  return a
}(Component)
export { M }
