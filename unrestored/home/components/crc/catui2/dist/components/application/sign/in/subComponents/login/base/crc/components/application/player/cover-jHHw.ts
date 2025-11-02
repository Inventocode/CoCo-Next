/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：jHHw
 */

"use strict"

/* unused harmony export PlayerCover */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__style_module_css__ from "./style.module.css-fR+1"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1__style_module_css___default from "./style.module.css-fR+1"
var PlayerCover = function PlayerCover(props) {
  var children = props.children
  var imgSrc = props.imgSrc
  var onPlayBtnClick = props.onPlayBtnClick
  var onSignInBtnClick = props.onSignInBtnClick
  var userInfo = props.userInfo
  var _props$signInBtnText = props.signInBtnText
  var signInBtnText = _props$signInBtnText === undefined ? "立即登录" : _props$signInBtnText
  var _props$signInTipText = props.signInTipText
  var signInTipText = _props$signInTipText === undefined ? "你还未登录，登录后体验更棒哦～" : _props$signInTipText
  var _props$playBtnTipText = props.playBtnTipText
  var playBtnTipText = _props$playBtnTipText === undefined ? "" : _props$playBtnTipText
  var _props$showSignInBtn = props.showSignInBtn
  var showSignInBtn = _props$showSignInBtn === undefined ? true : _props$showSignInBtn
  var _props$showPlayBtn = props.showPlayBtn
  var showPlayBtn = _props$showPlayBtn === undefined ? true : _props$showPlayBtn
  var _props$showUserInfo = props.showUserInfo
  var showUserInfo = _props$showUserInfo === undefined ? true : _props$showUserInfo
  var style = props.style
  var Style = Object.assign({
    backgroundImage: "url(".concat(imgSrc, ")")
  }, style)
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-container",
    style: Style
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-mask"
  }, showPlayBtn && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-play-btn",
    onClick: onPlayBtnClick
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("img", {
    src: require("./unnamed-D4iX")
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-play-btn-text"
  }, playBtnTipText)), children, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-user-info-bar"
  }, userInfo ? showUserInfo && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-user-info"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("img", {
    className: "CUI-player-cover-avatar",
    src: userInfo.avatar
  }), " ", userInfo.nickname) : showSignInBtn && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-sign-in-tip"
  }, signInTipText), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement("div", {
    className: "CUI-player-cover-sign-in-btn",
    onClick: onSignInBtnClick
  }, signInBtnText)))))
}

/***/
