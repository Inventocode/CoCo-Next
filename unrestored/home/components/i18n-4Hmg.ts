"use strict";

/* unused harmony export LanguageEnum */
/* harmony export (binding) */
export { language_list };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_react_intl__ from "react-intl";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__ from "../react/intl/locale/data/en-TCl6";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en___default from "../react/intl/locale/data/en-TCl6";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_zh__ from "../react/intl/locale/data/zh-BDH0";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_zh___default from "../react/intl/locale/data/zh-BDH0";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__zh_CN__ from "./zh/CN-C38k";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__en_US__ from "./en/US-af2z";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_5__zh_TW__ from "./zh/TW-VaJI";
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
Object(__WEBPACK_IMPORTED_MODULE_0_react_intl__.addLocaleData)([].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__), _toConsumableArray(__WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_zh__)));
var LanguageEnum;
(function (LanguageEnum) {
  LanguageEnum["zh"] = "zh";
  LanguageEnum["en"] = "en";
  LanguageEnum["tw"] = "tw";
})(LanguageEnum || (LanguageEnum = {}));
var language_list = {
  zh: {
    intl_lang_name: 'zh',
    language: __WEBPACK_IMPORTED_MODULE_3__zh_CN__.zh_CN
  },
  tw: {
    intl_lang_name: 'zh-Hant',
    language: __WEBPACK_IMPORTED_MODULE_5__zh_TW__.zh_TW
  },
  en: {
    intl_lang_name: 'en',
    language: __WEBPACK_IMPORTED_MODULE_4__en_US__.en_US
  }
};

/***/