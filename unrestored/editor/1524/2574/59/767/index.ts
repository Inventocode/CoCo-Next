"use strict";

import * as r from "./1532";
var i = function (e) {
  return r({
    exact: !0
  }).test(e);
};
i.v4 = function (e) {
  return r.v4({
    exact: !0
  }).test(e);
};
i.v6 = function (e) {
  return r.v6({
    exact: !0
  }).test(e);
};
i.version = function (e) {
  return i(e) ? i.v4(e) ? 4 : 6 : void 0;
};
module.exports = i;