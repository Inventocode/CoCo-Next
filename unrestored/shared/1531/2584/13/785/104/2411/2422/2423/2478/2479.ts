module.exports = function (e) {
  return function (t) {
    return null == t ? undefined : t[e];
  };
};