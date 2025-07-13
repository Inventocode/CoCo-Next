var n = Math.expm1;
var r = Math.exp;
module.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (e) {
  return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : r(e) - 1;
} : n;