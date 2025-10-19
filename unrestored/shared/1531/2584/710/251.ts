/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：251
 */

var n;
n = function () {
  return this;
}();
try {
  n = n || new Function("return this")();
} catch (r) {
  if ("object" === typeof window) {
    n = window;
  }
}
module.exports = n;