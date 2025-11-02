/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：cJBm
 */

"use strict"

/* harmony export (immutable) */
/* harmony export (immutable) */
export { validatePassword }
export { validateEmail }
function validatePassword(password) {
  return /^[a-zA-Z0-9\_\-@#?!~$^&\*\(\)\/%<>,\.;:"+=|\\{}\[\]]{6,20}$/.test(password)
}
function validateEmail(email) {
  return /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(email)
}

/***/
