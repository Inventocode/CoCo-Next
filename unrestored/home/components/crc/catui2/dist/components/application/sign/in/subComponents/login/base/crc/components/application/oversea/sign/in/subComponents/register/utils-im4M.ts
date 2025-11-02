/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：im4M
 */

"use strict"

/* unused harmony export validatePhoneNumber */
/* unused harmony export validCode */
/* harmony export (immutable) */
/* harmony export (immutable) */
export { validatePassword }
export { validateEmail }
function validatePhoneNumber(phone) {
  return /^1[3456789]\d{9}$/.test(phone)
}
function validCode(code) {
  return /^\d{6}$/.test(code)
}
function validatePassword(password) {
  return /^[0-9a-zA-Z]{6,20}$/.test(password)
}
function validateEmail(email) {
  return /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(email)
}

/***/
