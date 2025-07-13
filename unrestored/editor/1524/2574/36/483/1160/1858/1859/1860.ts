var n = /\s/;
module.exports = function (e) {
  for (var t = e.length; t-- && n.test(e.charAt(t));) {
    ;
  }
  return t;
};