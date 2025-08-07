module.exports = function (e, t) {
  return function (n) {
    return null != n && n[e] === t && (undefined !== t || e in Object(n));
  };
};