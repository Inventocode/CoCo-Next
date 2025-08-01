"use strict";

module.exports = function (e) {
  return !(!e || !e.__CANCEL__);
};