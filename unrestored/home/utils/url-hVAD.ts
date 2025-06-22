"use strict";

/* harmony export (immutable) */
export { getUrlParams };
/* unused harmony export getOriginPrefix */
/* harmony export (immutable) */
export { getCommunityAccountSettingUrl };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__cfg__ from "../cfg-dpNx";
function getUrlSearchParams(queryString) {
  var searchParams = new URLSearchParams(queryString);
  var key = 'inviteCode';
  var value = searchParams.get(key);
  // inviteCode字段内带有空格和描述型文字，在这里去掉
  value && searchParams.set(key, value.split(' ')[0]);
  return searchParams;
}
function getUrlParams(url) {
  var obj = {};
  var queryString = url.split('?')[1];
  if (!queryString) {
    return {};
  }
  var params = getUrlSearchParams(queryString);
  Array.from(params).forEach(function (item) {
    obj[item[0]] = item[1];
  });
  return obj;
}
function getOriginPrefix() {
  var evn = Object(__WEBPACK_IMPORTED_MODULE_0__cfg__.config)().env;
  var prefix = '';
  if (evn === 'dev') {
    prefix = 'dev-';
  } else if (evn === 'test') {
    prefix = 'test-';
  } else if (evn === 'staging') {
    prefix = 'staging-';
  }
  return prefix;
}
function getCommunityAccountSettingUrl() {
  return 'https://' + getOriginPrefix() + 'shequ.codemao.cn/setting';
}

/***/