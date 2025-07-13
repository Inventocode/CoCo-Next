var n = [].slice;
module.exports = function (e, t) {
  if ("string" == typeof t && (t = e[t]), "function" != typeof t) {
    throw new Error("bind() requires a function");
  }
  var r = n.call(arguments, 2);
  return function () {
    return t.apply(e, r.concat(n.call(arguments)));
  };
};