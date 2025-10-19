/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Y/qu
 */

"use strict";

/* harmony export (binding) */
/* harmony import */
export { ViewRouterComponent };
import * as __WEBPACK_IMPORTED_MODULE_0_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ from "react-router-dom";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__components_Header__ from "./components/Header-sEiI";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__components_IconFont_IconFontSvg__ from "./components/IconFont/IconFontSvg-DYHF";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__components_Menu__ from "./components/Menu-sdA1";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__components_PlayCourseVideo__ from "./components/PlayCourseVideo-AvcO";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_6__components_PreviewTemplate__ from "./components/PreviewTemplate-USw6";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_7__components_SignInDialog__ from "./components/SignInDialog-Lx+u";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_8__components_CourseDialog__ from "./components/CourseDialog-F4_2";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_9__components_CommonToast__ from "./components/CommonToast-jdSs";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_10__components_ConfirmDialog__ from "./components/ConfirmDialog-kwR3";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_11__Home__ from "./Home-hCpk";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_12_react_loadable__ from "react-loadable";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_12_react_loadable___default from "react-loadable";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) {
        descriptor.writable = true;
      }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps);
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps);
    }
    return Constructor;
  };
}();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass);
    } else {
      subClass.__proto__ = superClass;
    }
  }
}
var Work = __WEBPACK_IMPORTED_MODULE_12_react_loadable__({
  loader: function loader() {
    return import("./unnamed-Pv6Z");
  },
  loading: function loading() {
    return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
      style: {
        height: "400px"
      }
    });
  }
});
var ViewRouterComponent = function (_React$Component) {
  _inherits(ViewRouterComponent, _React$Component);
  function ViewRouterComponent(props) {
    _classCallCheck(this, ViewRouterComponent);
    return _possibleConstructorReturn(this, (ViewRouterComponent.__proto__ || Object.getPrototypeOf(ViewRouterComponent)).call(this, props));
  }
  _createClass(ViewRouterComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getTemplateListAction();
      this.props.getCourseListAction();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var playCourseInfo = _props.playCourseInfo;
      var courseDialogVisible = _props.courseDialogVisible;
      return __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        style: {
          minWidth: "990px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__.Header, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_3__components_IconFont_IconFontSvg__.default, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement("div", {
        className: playCourseInfo.visible || courseDialogVisible ? "blur" : ""
      }, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Menu__.Menu, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__.Switch, null, __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__.Route, {
        path: "/home",
        exact: true,
        component: __WEBPACK_IMPORTED_MODULE_11__Home__.default
      }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__.Route, {
        path: "/work",
        exact: true,
        component: Work
      }), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__.Route, {
        path: "/",
        strict: true,
        exact: true,
        component: __WEBPACK_IMPORTED_MODULE_11__Home__.default
      }))), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_9__components_CommonToast__.default, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ConfirmDialog__.default, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_7__components_SignInDialog__.default, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_8__components_CourseDialog__.default, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_5__components_PlayCourseVideo__.default, null), __WEBPACK_IMPORTED_MODULE_0_react__.createElement(__WEBPACK_IMPORTED_MODULE_6__components_PreviewTemplate__.default, null));
    }
  }]);
  return ViewRouterComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);

/***/