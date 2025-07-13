"use strict";

module.exports = function (e) {
  return "object" === typeof e && !0 === e.isAxiosError;
};