"use strict";

import * as r from "../../13/769/568";
import * as i from "../../13/769/1045/index";
var o = i(require("../../0/index"));
var a = r(require("../../13/769/949"));
exports.HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
var s = function () {
  (0, a.default)(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
};
var c = o.createContext({
  getFieldValue: s,
  getFieldsValue: s,
  getFieldError: s,
  getFieldWarning: s,
  getFieldsError: s,
  isFieldsTouched: s,
  isFieldTouched: s,
  isFieldValidating: s,
  isFieldsValidating: s,
  resetFields: s,
  setFields: s,
  setFieldsValue: s,
  validateFields: s,
  submit: s,
  getInternalHooks: function () {
    s();
    return {
      dispatch: s,
      initEntityValue: s,
      registerField: s,
      useSubscribe: s,
      setInitialValues: s,
      setCallbacks: s,
      getFields: s,
      setValidateMessages: s,
      setPreserve: s,
      getInitialValue: s
    };
  }
});
export default c;