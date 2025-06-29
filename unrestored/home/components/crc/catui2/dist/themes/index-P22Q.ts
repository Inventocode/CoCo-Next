"use strict";

/* harmony export (immutable) */
export { setTheme };
/* harmony export (immutable) */
export { getTheme };
/* unused harmony export getThemeColorSet */
/* unused harmony export getSupColor */
/* unused harmony export getGreyColor */
/* harmony export (immutable) */
export { getColor };
/* unused harmony export colorHex2DecRgb */
/* unused harmony export colorDecRgb2Hex */
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__common_util__ from "../common/util-Yw5u";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__defs__ from "../defs-nq58";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__themeColor__ from "../themeColor-RS7I";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__supColor__ from "../supColor-qumQ";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__greyColor__ from "../greyColor-UhM9";
/* harmony namespace reexport (by used) */
export { ColorEnum } from "../defs-nq58";
/* harmony namespace reexport (by used) */
export { ThemeTypeEnum } from "../defs-nq58";
function setTheme(theme) {
  if (typeof window !== 'undefined') {
    document.body.setAttribute('data-theme', "".concat(__WEBPACK_IMPORTED_MODULE_1__defs__.THEME_PREFIX).concat(theme));
  }
  injectFilterDef(theme);
}
function getTheme() {
  if (typeof window !== 'undefined') {
    var _document$body$getAtt, _document, _document$body, _document$body$getAtt2;
    return (_document$body$getAtt = (_document = document) === null || _document === void 0 ? void 0 : (_document$body = _document.body) === null || _document$body === void 0 ? void 0 : (_document$body$getAtt2 = _document$body.getAttribute('data-theme')) === null || _document$body$getAtt2 === void 0 ? void 0 : _document$body$getAtt2.replace(__WEBPACK_IMPORTED_MODULE_1__defs__.THEME_PREFIX, '')) !== null && _document$body$getAtt !== void 0 ? _document$body$getAtt : __WEBPACK_IMPORTED_MODULE_1__defs__.ThemeTypeEnum.Default;
  }
  return __WEBPACK_IMPORTED_MODULE_1__defs__.ThemeTypeEnum.Default;
}
function getThemeColorSet(theme) {
  return __WEBPACK_IMPORTED_MODULE_2__themeColor__.themes[theme];
}
function __formatColor__(color) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb';
  if (!color) {
    return '';
  }
  if (type === 'rgb') {
    return color;
  } else {
    return color.split(',').reduce(function (str, value) {
      return str += Number(value).toString(16);
    }, '');
  }
}
function __getColor__(setType) {
  /**
   * @description 获取色集中的某个颜色色值
   * @param {string} name 色名
   * @param {'rgb' | '16'} type 色值进制
   * @return {string} 色值结果，如果色名不存在，返回空字符串
   */
  return function (name) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb';
    var set = setType === 'sup' ? __WEBPACK_IMPORTED_MODULE_3__supColor__.themeSupColor : __WEBPACK_IMPORTED_MODULE_4__greyColor__.themeGreyColor;
    var color = set[name];
    return __formatColor__(color, type);
  };
}
/* 获取补充色 */
var getSupColor = __getColor__('sup');
/* 获取灰色 */
var getGreyColor = __getColor__('grey');
/**
 * @description 获取指定主题色下某个颜色的色值
 * @param {string} theme 主题
 * @param {string} name 色名
 * @param {'rgb' | '16'} type 色值进制
 * @returns {string} 返回指定进制下的色值，如果颜色不存在，返回空字符串
 */
function getColor(theme, name) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rgb';
  var colorSet = __WEBPACK_IMPORTED_MODULE_2__themeColor__.themes[theme];
  if (!colorSet) {
    return '';
  }
  var color = colorSet[name];
  return __formatColor__(color, type);
}
/**
 * @description 16进制色值转10进制rgb格式
 * @param {string} color 16进制色值
 * @returns {string | undefined} 转化结果，失败则 undefined
 */
function colorHex2DecRgb(color) {
  var _color$replace$match;
  return (_color$replace$match = color.replace('#', '').match(/(.{2})/g)) === null || _color$replace$match === void 0 ? void 0 : _color$replace$match.map(function (value) {
    return parseInt(value, 16);
  }).join(',');
}
/**
 * @description 10进制rgb格式色值转16进制格式
 * @param {string} color 10进制rgb色值，要求格式为：R,G,B
 * @returns {string} 转化结果
 */
function colorDecRgb2Hex(color) {
  return color.split(',').map(function (value) {
    return Number(value).toString(16);
  }).join('');
}
var COMMON_THEME_FILTER = 'cui_common_theme_filter';
var SVG_CONTAINER = 'cui_filter_svg';
function injectFilterDef(theme) {
  var filterContainer = document.getElementById(SVG_CONTAINER);
  if (!filterContainer) {
    filterContainer = document.createElement('svg');
    filterContainer.id = SVG_CONTAINER;
    filterContainer.style.display = 'block';
    filterContainer.setAttribute('width', '0');
    filterContainer.setAttribute('height', '0');
    filterContainer.innerHTML = '<defs></defs>';
    document.body.insertBefore(filterContainer, document.body.childNodes[0]);
  }
  if (!filterContainer) {
    return;
  }
  var defs = filterContainer.querySelector('defs');
  if (defs) {
    var prevCommonFilter = defs.querySelector("#".concat(COMMON_THEME_FILTER));
    prevCommonFilter && prevCommonFilter.remove();
    var newCommonFilter = Object(__WEBPACK_IMPORTED_MODULE_0__common_util__.parseToSvg)(getFilterDom("#".concat(theme === __WEBPACK_IMPORTED_MODULE_1__defs__.ThemeTypeEnum.Yellow ? getColor(theme, __WEBPACK_IMPORTED_MODULE_1__defs__.ColorEnum.TCYS2, '16') : getColor(theme, __WEBPACK_IMPORTED_MODULE_1__defs__.ColorEnum.TC1, '16'))));
    defs.appendChild(newCommonFilter);
  }
}
var getFilterDom = function getFilterDom(color) {
  return "<filter id=\"".concat(COMMON_THEME_FILTER, "\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n  <feFlood result=\"floodFill\" flood-color=").concat(color, " flood-opacity=\"1\"></feFlood>\n  <feBlend in=\"SourceGraphic\" in2=\"floodFill\" mode=\"luminosity\" result=\"blend\"></feBlend>\n  <feComposite in=\"blend\" in2=\"SourceAlpha\" operator=\"in\"></feComposite>\n</filter>");
};

/***/