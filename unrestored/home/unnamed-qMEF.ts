"use strict";

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ from "babel-polyfill";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default from "babel-polyfill";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_dom__ from "react-dom";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react_dom___default from "react-dom";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_react_redux__ from "react-redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__routes__ from "./routes-EPod";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__components_IntlWrap__ from "./components/IntlWrap-GoM7";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__redux_store__ from "./redux/store-q9Rd";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__index_scss__ from "./index/scss-iCOP";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_7__index_scss___default from "./index/scss-iCOP";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css__ from "antd";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_8_antd_dist_antd_css___default from "antd";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__reset_scss__ from "./reset/scss-cw5f";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_9__reset_scss___default from "./reset/scss-cw5f"; // 创作页由主域名 调整到 editor目录，主域名加一层中转
try {
  var location = window.location;
  var origin = location.origin.replace('appcraft', 'coco');
  // 访问主域名
  if (location.pathname === '/' && !origin.includes('localhost')) {
    if (location.search) {
      // 带作品id等参数信息跳转 editor创作页
      window.location.href = origin + '/editor' + location.search;
    } else {
      // 访问跟域名统一跳转至 home主页
      window.location.href = origin.replace(/\d+/g, '') + '/home';
    }
  } else if (location.pathname.startsWith('/player/')) {
    // 旧的分享h5、社区链接
    window.location.href = origin + '/editor' + location.pathname + location.search;
  }
} catch (e) {
  console.error(e);
}
var root_dom = document.getElementById('root');
var store = __WEBPACK_IMPORTED_MODULE_6__redux_store__.store_manager.get_store();
var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__.Provider, {
    store: store
  }, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__components_IntlWrap__.IntlWrapperComponent, null, __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__routes__.ViewRouter, null)));
};
if (root_dom.hasChildNodes()) {
  Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__.hydrate)(__WEBPACK_IMPORTED_MODULE_1_react__.createElement(App, null), root_dom);
} else {
  Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__.render)(__WEBPACK_IMPORTED_MODULE_1_react__.createElement(App, null), root_dom);
}

/***/