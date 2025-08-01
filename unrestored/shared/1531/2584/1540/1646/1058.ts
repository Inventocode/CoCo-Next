var r = require("../1745/423/1055");
var o = Function.toString;
if ("function" != typeof r.inspectSource) {
  r.inspectSource = function (e) {
    return o.call(e);
  };
}
module.exports = r.inspectSource;