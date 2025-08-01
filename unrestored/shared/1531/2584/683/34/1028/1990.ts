"use strict";

module.exports = {
  isString: function (e) {
    return "string" === typeof e;
  },
  isObject: function (e) {
    return "object" === typeof e && null !== e;
  },
  isNull: function (e) {
    return null === e;
  },
  isNullOrUndefined: function (e) {
    return null == e;
  }
};