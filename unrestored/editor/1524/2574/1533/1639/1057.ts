import * as r from "../1738/423/1054";
var o = Function.toString;
if ("function" != typeof r.inspectSource) {
  r.inspectSource = function (e) {
    return o.call(e);
  };
}
module.exports = r.inspectSource;