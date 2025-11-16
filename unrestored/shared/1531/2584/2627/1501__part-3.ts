/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1501__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_20 from "../20"
import * as j from "../8"
import L from "../8"
var U = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (e) {
    var /* [auto-meaningful-name] */e$keyCode = e.keyCode
    if (e.altKey && !e.ctrlKey || e.metaKey || e$keyCode >= U.F1 && e$keyCode <= U.F12) {
      return false
    }
    switch (e$keyCode) {
      case U.ALT:
      case U.CAPS_LOCK:
      case U.CONTEXT_MENU:
      case U.CTRL:
      case U.DOWN:
      case U.END:
      case U.ESC:
      case U.HOME:
      case U.INSERT:
      case U.LEFT:
      case U.MAC_FF_META:
      case U.META:
      case U.NUMLOCK:
      case U.NUM_CENTER:
      case U.PAGE_DOWN:
      case U.PAGE_UP:
      case U.PAUSE:
      case U.PRINT_SCREEN:
      case U.RIGHT:
      case U.SHIFT:
      case U.UP:
      case U.WIN_KEY:
      case U.WIN_KEY_RIGHT:
        return false
      default:
        return true
    }
  },
  isCharacterKey: function (e) {
    if (e >= U.ZERO && e <= U.NINE) {
      return true
    }
    if (e >= U.NUM_ZERO && e <= U.NUM_MULTIPLY) {
      return true
    }
    if (e >= U.A && e <= U.Z) {
      return true
    }
    if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) {
      return true
    }
    switch (e) {
      case U.SPACE:
      case U.QUESTION_MARK:
      case U.NUM_PLUS:
      case U.NUM_MINUS:
      case U.NUM_PERIOD:
      case U.NUM_DIVISION:
      case U.SEMICOLON:
      case U.DASH:
      case U.EQUALS:
      case U.COMMA:
      case U.PERIOD:
      case U.SLASH:
      case U.APOSTROPHE:
      case U.SINGLE_QUOTE:
      case U.OPEN_SQUARE_BRACKET:
      case U.BACKSLASH:
      case U.CLOSE_SQUARE_BRACKET:
        return true
      default:
        return false
    }
  }
}
var H = U
var V = "".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap", " ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/)
function G(e, t) {
  return 0 === e.indexOf(t)
}
export { H as "1501__part-3__H" }
export { V as "1501__part-3__V" }
export { G as "1501__part-3__G" }
