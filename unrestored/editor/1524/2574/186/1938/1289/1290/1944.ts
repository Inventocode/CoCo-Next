"use strict";

import * as r from "./1291/index";
module.exports = function (e, t, n) {
  var i = n.config.validateStatus;
  if (n.status && i && !i(n.status)) {
    t(r("Request failed with status code " + n.status, n.config, null, n.request, n));
  } else {
    e(n);
  }
};