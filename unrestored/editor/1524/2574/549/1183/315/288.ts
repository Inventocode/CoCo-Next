"use strict";

export { o as a };
var r = require("../../../0/index");
var i = require("../../../548/1180/270/689");
function o(e, t) {
  return r.useMemo(function () {
    return null == e && null == t ? null : function (n) {
      Object(i.a)(e, n);
      Object(i.a)(t, n);
    };
  }, [e, t]);
}
export default o;