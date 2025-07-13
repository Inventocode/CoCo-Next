"use strict";

export default (function (e) {
  if (!(0, r.default)(e)) {
    var t;
    var n = null != (t = null == e ? void 0 : e.type) ? t : JSON.stringify(e);
    throw new TypeError('Not a valid node of type "'.concat(n, '"'));
  }
});
import * as r from "./2814";