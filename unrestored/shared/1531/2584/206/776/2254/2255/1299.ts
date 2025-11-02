/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1299
 */

module.exports = function (e) {
  if (undefined === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return e
}
