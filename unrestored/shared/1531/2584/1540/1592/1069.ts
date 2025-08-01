module.exports = Math.sign || function (e) {
  return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
};