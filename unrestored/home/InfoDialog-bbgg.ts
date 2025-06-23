"use strict";

/* harmony export (binding) */
export { createInfo };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_dom__ from "react-dom";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react_dom___default from "react-dom";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__button__ from "./button-sg+3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3____ from "./base/dialog-ymrb";
var createInfo = function createInfo(config) {
  var _config$okText, _config$closeBtn, _config$maskClose;
  var btn = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement(__WEBPACK_IMPORTED_MODULE_2__button__.Button, {
    width: 110,
    height: 36,
    type: "primary",
    onClick: config.onOk
  }, (_config$okText = config.okText) !== null && _config$okText !== void 0 ? _config$okText : '确认');
  var div = document.createElement('div');
  div.className = 'CUI-dialog-warning-dialog';
  document.body.appendChild(div);
  var InfoDialog = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.createElement(__WEBPACK_IMPORTED_MODULE_3____.Dialog, {
    show: true,
    centerShowUp: true,
    top: config.top,
    closeBtn: (_config$closeBtn = config.closeBtn) !== null && _config$closeBtn !== void 0 ? _config$closeBtn : false,
    closeAnimation: false,
    maskClose: (_config$maskClose = config.maskClose) !== null && _config$maskClose !== void 0 ? _config$maskClose : false,
    header: config.title,
    footer: btn,
    container: div,
    onOpen: config.onOpen,
    onCancel: config.onOk,
    onClose: config.onClose
  }, typeof config.content === 'function' ? config.content() : config.content);
  __WEBPACK_IMPORTED_MODULE_1_react_dom___default.render(InfoDialog, div);
  var hadDestroied = false;
  return function () {
    if (hadDestroied) {
      return;
    } // 以下是同步代码。unmountComponentAtNode 会直接触发 willUnmount 生命周期。
    // 由于 Dialog 设置了 willUnmount 生命周期里触发 onClose，如果业务方通过别的方式调用了销毁函数，
    // 且在 onClose 事件中又触发了一次销毁函数，那么后触发的销毁函数会先完成，
    // 于是先调用的销毁函数在执行到 removeChild 的时候回报错，因为已经被移除了。且 unmountComponentAtNode 也是一次冗余调用。
    // 因此要先置标志位。
    hadDestroied = true;
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.unmountComponentAtNode(div);
    document.body.removeChild(div);
  };
};

/***/