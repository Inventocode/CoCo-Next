"use strict";

/* harmony export (binding) */
export { IntlWrapperComponent };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_intl__ from "intl";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_intl___default from "intl";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react__ from "react";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react___default from "react";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_redux__ from "react-redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3_redux__ from "redux";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4_react_intl__ from "react-intl";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__i18n__ from "../i18n-4Hmg";
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
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
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var IntlWrapper = function (_React$Component) {
  _inherits(IntlWrapper, _React$Component);
  function IntlWrapper(props) {
    _classCallCheck(this, IntlWrapper);

    // Codemao: use zh as the default language.
    var _this = _possibleConstructorReturn(this, (IntlWrapper.__proto__ || Object.getPrototypeOf(IntlWrapper)).call(this, props));
    var system_lang = 'zh';
    var init_language = system_lang;
    var init_locale = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[init_language].intl_lang_name;
    var init_messages = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[init_language].language;
    _this.state = {
      locale: init_locale,
      messages: init_messages
    };
    return _this;
  }
  _createClass(IntlWrapper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.language == this.props.language) {
        return;
      }
      var locale = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[nextProps.language].intl_lang_name;
      var messages = __WEBPACK_IMPORTED_MODULE_5__i18n__.language_list[nextProps.language].language;
      this.setState({
        locale: locale,
        messages: messages
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react__.createElement(__WEBPACK_IMPORTED_MODULE_4_react_intl__.IntlProvider, {
        locale: this.state.locale,
        messages: this.state.messages
      }, this.props.children);
    }
  }]);
  return IntlWrapper;
}(__WEBPACK_IMPORTED_MODULE_1_react__.Component);
function mapStateToProps(state) {
  return {
    language: state.main_reducer.language
  };
}
function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_redux__.bindActionCreators)({}, dispatch);
}
var IntlWrapperComponent = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__.connect)(mapStateToProps, mapDispatchToProps)(IntlWrapper);

/***/