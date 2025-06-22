"use strict";

/* harmony export (immutable) */
export { validatePhoneNumber };
/* harmony export (immutable) */
export { validCode };
/* harmony export (immutable) */
export { validatePassword };
/* unused harmony export validateEmail */
function validatePhoneNumber(phone) {
  return /^1[3456789]\d{9}$/.test(phone);
}
function validCode(code) {
  return /^\d{6}$/.test(code);
}
function validatePassword(password) {
  return /^[0-9a-zA-Z]{6,20}$/.test(password);
}
function validateEmail(email) {
  return /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(email);
}

/***/