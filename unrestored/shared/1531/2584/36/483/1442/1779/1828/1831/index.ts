var r = require("./955");
var i = r ? r.prototype : void 0;
var o = i ? i.valueOf : void 0;
module.exports = function (e) {
  return o ? Object(o.call(e)) : {};
};