module.exports = function (e, t, n) {
  e.on(t, n);
  return {
    destroy: function () {
      e.removeListener(t, n);
    }
  };
};