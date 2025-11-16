/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：427__part-0
 */

"use strict"

import { "427__part-3__se" as se, "427__part-3__ce" as ce, "427__part-3__ue" as ue, "427__part-3__le" as le, "427__part-3__fe" as fe, "427__part-3__de" as de, "427__part-3__he" as he, "427__part-3__pe" as pe, "427__part-3___e" as _e } from "./index__part-3"
var r = {}
Object.defineProperty(r, "notes", {
  get: function () {
    return se
  }
})
Object.defineProperty(r, "instruments", {
  get: function () {
    return ce
  }
})
Object.defineProperty(r, "set_instrument_by_id", {
  get: function () {
    return ue
  }
})
Object.defineProperty(r, "beats_to_duration", {
  get: function () {
    return le
  }
})
Object.defineProperty(r, "duration_to_beats", {
  get: function () {
    return fe
  }
})
Object.defineProperty(r, "note_id_to_key", {
  get: function () {
    return de
  }
})
Object.defineProperty(r, "note_key_to_id", {
  get: function () {
    return he
  }
})
Object.defineProperty(r, "play", {
  get: function () {
    return pe
  }
})
Object.defineProperty(r, "midi_stop", {
  get: function () {
    return _e
  }
})
var i = {
  "sound_player/ios_webm_error": "该设备暂时不支持播放录音音频",
  "sound_player/block_no_network": "无网络连接，作品中一些积木无法正常运行",
  "voice_detection/not_found_error": "无录音设备，无法进行侦测",
  "voice_detection/pc_permission_error": "未开启声音侦测权限，快去设置吧",
  "voice_detection/no_supported_error": "你的浏览器不支持录音，建议下载最新的谷歌浏览器",
  "voice_detection/ios_wechat_error": "微信端暂不支持声音侦测功能，可以在safari浏览器中运行作品",
  "voice_detection/ios_permission_error": "未获取到录音权限",
  "voice_detection/ios_version_error": "系统版本太低，无法使用声音侦测",
  "voice_detection/android_permission_error": "未获取到录音权限，建议用微信扫一扫打开",
  "record_error/pc_browser_not_support": "你的浏览器不支持录音，建议下载最新的谷歌浏览器",
  "record_error/device_error": "你的电脑没有录音设备，无法录音",
  "record_error/pc_permission_error": "需要开启浏览器录音设备",
  "record_error/pc_other_case": "你的浏览器不支持录音",
  "record_error/ios_permission_error": "未获得录音权限",
  "record_error/ios_other_case": "你的设备不支持录音",
  "record_error/android_permission_error": "未获取到录音权限，建议用微信扫一扫打开",
  "record_error/android_other_case": "你的设备不支持录音",
  "say/not_support": "该浏览器不支持说此类语言"
}
function o(e) {
  return i[e] ? i[e] : e
}
var a
var s
export { r as "427__part-0__r" }
export { o as "427__part-0__o" }
export { a as "427__part-0__a" }
export { s as "427__part-0__s" }
