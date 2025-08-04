var r = require("../1736/194");
module.exports = function (e, t) {
  var n = r.console;
  if (n && n.error) {
    if (1 === arguments.length) {
      n.error(e);
    } else {
      n.error(e, t);
    }
  }
};