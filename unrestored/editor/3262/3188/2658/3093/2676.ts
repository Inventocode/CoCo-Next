module.exports = function (e, t) {
  if (!t) {
    t = e.slice(0);
  }
  return Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
};