/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1050
 */

module.exports = function (e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
};