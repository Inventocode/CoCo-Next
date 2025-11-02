/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1650
 */

module.exports = function (e) {
  try {
    return {
      error: false,
      value: e()
    }
  } catch (t) {
    return {
      error: true,
      value: t
    }
  }
}
