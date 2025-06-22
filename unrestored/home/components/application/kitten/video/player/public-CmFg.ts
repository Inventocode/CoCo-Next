"use strict";

/* unused harmony export kittenVideoPlayer */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ from "@babel/runtime/helpers/esm/extends";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_asyncToGenerator__ from "@babel/runtime/helpers/esm/asyncToGenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_3_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react_dom__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_4_react_dom___default from "react";
var CONTAINER_ID = 'CUI-kitten-video-player-container';
var videoPlayerContainer;
var _isLoaded = false;
var player;
var kittenVideoPlayer = {
  /**
   * 加载并展示Kitten视频播放组件
   * @param options
   */
  load: function () {
    var _load = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_asyncToGenerator__.default)(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.mark(function _callee(options) {
      var KittenVideoPlayer;
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_isLoaded) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              KittenVideoPlayer = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.lazy(function () {
                return new Promise(function (resolve) {
                  resolve();
                }).then(__webpack_require__.bind(null, "fL6I")).then(function (module) {
                  return {
                    default: module.KittenVideoPlayer
                  };
                });
              });
              videoPlayerContainer = document.createElement('div');
              videoPlayerContainer.id = CONTAINER_ID;
              document.body.appendChild(videoPlayerContainer);
              __WEBPACK_IMPORTED_MODULE_4_react_dom___default.render(/*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.Suspense, {
                fallback: null
              }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.createElement(KittenVideoPlayer, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__.default)({
                getPlayerRef: function getPlayerRef(ref) {
                  return player = ref;
                }
              }, options))), videoPlayerContainer);
              _isLoaded = true;
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    function load(_x) {
      return _load.apply(this, arguments);
    }
    return load;
  }(),
  /**
   * 关闭/卸载视频播放器组件
   * @param options
   */
  close: function close(options) {
    return new Promise(function (resolve, reject) {
      var _closeAnimationPos, _closeAnimationPos2;
      var draggableRef = document.getElementsByClassName('CUI-kitten-video-player-draggable')[0];
      if (!draggableRef) {
        return;
      }
      var _draggableRef$getBoun = draggableRef.getBoundingClientRect(),
        width = _draggableRef$getBoun.width,
        height = _draggableRef$getBoun.height;
      draggableRef.style.transform += ' scale(1)';
      var closeAnimationPos = {
        x: 0,
        y: 0
      };
      if (options !== null && options !== void 0 && options.closeAnimationPos) {
        closeAnimationPos = options.closeAnimationPos;
      }
      var ANIMATION = {
        transition: 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)',
        transform: "translate(".concat((((_closeAnimationPos = closeAnimationPos) === null || _closeAnimationPos === void 0 ? void 0 : _closeAnimationPos.x) || 0) - width / 2, "px, ").concat((((_closeAnimationPos2 = closeAnimationPos) === null || _closeAnimationPos2 === void 0 ? void 0 : _closeAnimationPos2.y) || 0) - height / 2, "px) scale(0)")
      };
      draggableRef.style.transition = ANIMATION.transition;
      draggableRef.style.transform = ANIMATION.transform;
      var close = function close() {
        if (!videoPlayerContainer) {
          return;
        }
        __WEBPACK_IMPORTED_MODULE_4_react_dom___default.unmountComponentAtNode(videoPlayerContainer);
        document.body.removeChild(videoPlayerContainer);
        videoPlayerContainer = undefined;
        resolve(undefined);
        _isLoaded = false;
      };
      draggableRef.addEventListener('transitionend', close);
    });
  },
  /**
   * 隐藏视频播放器（前提是已加载并处于显示状态）
   */
  hide: function hide() {
    var _player;
    if (!videoPlayerContainer) {
      return;
    }
    (_player = player) === null || _player === void 0 ? void 0 : _player.pause();
    var videoPlayerElem = videoPlayerContainer.children[0];
    videoPlayerElem.style.display = 'none';
  },
  /**
   * 显示视频播放器（前提是已加载并处于隐藏状态）
   */
  show: function show() {
    if (!videoPlayerContainer) {
      return;
    }
    var videoPlayerElem = videoPlayerContainer.children[0];
    videoPlayerElem.style.display = 'block';
  },
  /**
   * 是否已加载/使用中
   */
  isLoaded: function isLoaded() {
    return _isLoaded;
  },
  /**
   * 获取当前播放器实例
   */
  getPlayer: function getPlayer() {
    return player;
  }
};

/***/