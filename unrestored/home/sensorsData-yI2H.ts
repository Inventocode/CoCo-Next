"use strict";

/* harmony export (immutable) */
export { sensorsCustomReport };
/* harmony export (immutable) */
export { sensorsLoginReport };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript__ from "sa-sdk-javascript";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default from "sa-sdk-javascript";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__utils_url__ from "./utils/url-hVAD";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__cfg__ from "./cfg-dpNx";
/* eslint-disable @typescript-eslint/camelcase */
// 神策数据接入文档 https://codemao.yuque.com/gg5gzo/vgflgb/dt089f#CLuGJ
var env = Object(__WEBPACK_IMPORTED_MODULE_2__cfg__.getEnvironment)();
// 神策数据平台目前只有两个: 测试项目、正式项目
function getSensorsDataServerUrl() {
  // dev｜test 环境对应神策数据平台 测试项目
  if (env === 'dev' || env === 'test') {
    return 'https://shence-data.codemao.cn/sa?project=default';
  }
  // staging｜preview｜production 环境对应神策数据平台 正式项目
  return 'https://shence-data.codemao.cn/sa?project=production';
}
function getReportPage() {
  var page = 'home'; // 主页
  if (window.location.pathname.includes('work')) {
    page = 'work'; // 我的作品
  }
  return page;
}
// 驼峰转下划线，神策上报属性统一下划线命名方式，页面上报还是按驼峰命名，这里统一转换
function formatEventDataToSnakeCase(eventData) {
  if (!eventData) {
    return {
      page: getReportPage()
    };
  }
  var newEventData = {
    page: getReportPage()
  };
  for (var key in eventData) {
    newEventData[key.replace(/([A-Z])/g, '_$1').toLowerCase()] = eventData[key];
  }
  return newEventData;
}
/**
 * 自定义上报
 * @param eventName 事件名
 * @param eventData 上报时 key 为驼峰风格，会在该函数中将驼峰风格转换为下划线风格
 */
function sensorsCustomReport(eventName, eventData) {
  __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.track(eventName, formatEventDataToSnakeCase(eventData));
}
// 当用户注册成功或者登录成功时，需要调用 login() 方法传入登录ID  建议传字符串
function sensorsLoginReport(id) {
  __WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.login(id + '');
}
__WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.init({
  server_url: getSensorsDataServerUrl(),
  // 单页面配置，默认开启，若页面中有锚点设计，需要将该配置删除，否则触发锚点会多触发 $pageview 事件
  is_track_single_page: true,
  use_client_time: true,
  // 浏览器控制台日志输出功能
  show_log: Object(__WEBPACK_IMPORTED_MODULE_1__utils_url__.getUrlParams)(window.location.href).showSensorsLog ? true : false,
  send_type: 'beacon',
  // 通用字符串最大长度，超过部分会被截取丢弃（由于超过 7000 的字符串会导致 url 超长发不出去，所以限制长度）
  max_string_length: 5000,
  heatmap: {
    //是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
    clickmap: 'default',
    //是否开启触达注意力图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启
    scroll_notice_map: 'default'
  }
});
//设置公共属性，初始化 SDK 后，sensors.quick('autoTrack') 前
__WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.registerPage({
  $app_id: window.location.host,
  $app_name: 'APP工匠',
  product_name: 'APP工匠',
  page: getReportPage()
});
//用于采集 $pageview 浏览事件。
__WEBPACK_IMPORTED_MODULE_0_sa_sdk_javascript___default.quick('autoTrack');

/***/