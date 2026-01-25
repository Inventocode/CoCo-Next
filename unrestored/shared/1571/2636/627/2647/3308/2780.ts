/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2780
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.handleLoadStart = function (e) {
  return {
    type: "video-react/LOAD_START",
    videoProps: e
  }
}
exports.handleCanPlay = function (e) {
  return {
    type: "video-react/CAN_PLAY",
    videoProps: e
  }
}
exports.handleWaiting = function (e) {
  return {
    type: "video-react/WAITING",
    videoProps: e
  }
}
exports.handleCanPlayThrough = function (e) {
  return {
    type: "video-react/CAN_PLAY_THROUGH",
    videoProps: e
  }
}
exports.handlePlaying = function (e) {
  return {
    type: "video-react/PLAYING",
    videoProps: e
  }
}
exports.handlePlay = function (e) {
  return {
    type: VideoReact_PLAY,
    videoProps: e
  }
}
exports.handlePause = function (e) {
  return {
    type: VideoReact_PAUSE,
    videoProps: e
  }
}
exports.handleEnd = function (e) {
  return {
    type: VideoReact_END,
    videoProps: e
  }
}
exports.handleSeeking = function (e) {
  return {
    type: "video-react/SEEKING",
    videoProps: e
  }
}
exports.handleSeeked = function (e) {
  return {
    type: "video-react/SEEKED",
    videoProps: e
  }
}
exports.handleDurationChange = function (e) {
  return {
    type: "video-react/DURATION_CHANGE",
    videoProps: e
  }
}
exports.handleTimeUpdate = function (e) {
  return {
    type: "video-react/TIME_UPDATE",
    videoProps: e
  }
}
exports.handleVolumeChange = function (e) {
  return {
    type: "video-react/VOLUME_CHANGE",
    videoProps: e
  }
}
exports.handleProgressChange = function (e) {
  return {
    type: "video-react/PROGRESS_CHANGE",
    videoProps: e
  }
}
exports.handleRateChange = function (e) {
  return {
    type: "video-react/RATE_CHANGE",
    videoProps: e
  }
}
exports.handleSuspend = function (e) {
  return {
    type: "video-react/SUSPEND",
    videoProps: e
  }
}
exports.handleAbort = function (e) {
  return {
    type: VideoReact_ABORT,
    videoProps: e
  }
}
exports.handleEmptied = function (e) {
  return {
    type: "video-react/EMPTIED",
    videoProps: e
  }
}
exports.handleStalled = function (e) {
  return {
    type: "video-react/STALLED",
    videoProps: e
  }
}
exports.handleLoadedMetaData = function (e) {
  return {
    type: "video-react/LOADED_META_DATA",
    videoProps: e
  }
}
exports.handleLoadedData = function (e) {
  return {
    type: "video-react/LOADED_DATA",
    videoProps: e
  }
}
exports.handleResize = function (e) {
  return {
    type: "video-react/RESIZE",
    videoProps: e
  }
}
exports.handleError = function (e) {
  return {
    type: VideoReact_ERROR,
    videoProps: e
  }
}
exports.handleSeekingTime = function (e) {
  return {
    type: "video-react/SEEKING_TIME",
    time: e
  }
}
exports.handleEndSeeking = function (e) {
  return {
    type: "video-react/END_SEEKING",
    time: e
  }
}
exports.ERROR = exports.RESIZE = exports.LOADED_DATA = exports.LOADED_META_DATA = exports.STALLED = exports.EMPTIED = exports.ABORT = exports.SUSPEND = exports.RATE_CHANGE = exports.PROGRESS_CHANGE = exports.VOLUME_CHANGE = exports.TIME_UPDATE = exports.DURATION_CHANGE = exports.END_SEEKING = exports.SEEKING_TIME = exports.SEEKED = exports.SEEKING = exports.END = exports.PAUSE = exports.PLAY = exports.PLAYING = exports.CAN_PLAY_THROUGH = exports.WAITING = exports.CAN_PLAY = exports.LOAD_START = undefined
exports.LOAD_START = "video-react/LOAD_START"
exports.CAN_PLAY = "video-react/CAN_PLAY"
exports.WAITING = "video-react/WAITING"
exports.CAN_PLAY_THROUGH = "video-react/CAN_PLAY_THROUGH"
exports.PLAYING = "video-react/PLAYING"
var /* [auto-meaningful-name] */VideoReact_PLAY = "video-react/PLAY"
exports.PLAY = VideoReact_PLAY
var /* [auto-meaningful-name] */VideoReact_PAUSE = "video-react/PAUSE"
exports.PAUSE = VideoReact_PAUSE
var /* [auto-meaningful-name] */VideoReact_END = "video-react/END"
exports.END = VideoReact_END
exports.SEEKING = "video-react/SEEKING"
exports.SEEKED = "video-react/SEEKED"
exports.SEEKING_TIME = "video-react/SEEKING_TIME"
exports.END_SEEKING = "video-react/END_SEEKING"
exports.DURATION_CHANGE = "video-react/DURATION_CHANGE"
exports.TIME_UPDATE = "video-react/TIME_UPDATE"
exports.VOLUME_CHANGE = "video-react/VOLUME_CHANGE"
exports.PROGRESS_CHANGE = "video-react/PROGRESS_CHANGE"
exports.RATE_CHANGE = "video-react/RATE_CHANGE"
exports.SUSPEND = "video-react/SUSPEND"
var /* [auto-meaningful-name] */VideoReact_ABORT = "video-react/ABORT"
exports.ABORT = VideoReact_ABORT
exports.EMPTIED = "video-react/EMPTIED"
exports.STALLED = "video-react/STALLED"
exports.LOADED_META_DATA = "video-react/LOADED_META_DATA"
exports.LOADED_DATA = "video-react/LOADED_DATA"
exports.RESIZE = "video-react/RESIZE"
var /* [auto-meaningful-name] */VideoReact_ERROR = "video-react/ERROR"
exports.ERROR = VideoReact_ERROR
