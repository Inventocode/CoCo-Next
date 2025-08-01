var n = /\w*$/;
module.exports = function (e) {
  var t = new e.constructor(e.source, n.exec(e));
  t.lastIndex = e.lastIndex;
  return t;
};