"use strict";

var r = null;
function i(e) {
  if (null !== r && (r.property, 1)) {
    var t = r;
    r = i.prototype = null;
    return t;
  }
  r = i.prototype = null == e ? Object.create(null) : e;
  return new i();
}
i();
module.exports = function (e) {
  return i(e);
};