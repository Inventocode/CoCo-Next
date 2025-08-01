"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.logic_value = exports.logic_shadow = exports.number_value = exports.number_shadow = exports.text_value = exports.text_shadow = exports.create_head_icon = exports.i18n = void 0;
exports.i18n = function (e) {
  return "%{BKY_" + e + "}";
};
exports.create_head_icon = function (e) {
  return {
    type: "field_icon",
    is_head: !0,
    src: e,
    width: 38,
    height: 38,
    alt: "*"
  };
};
exports.text_shadow = function (e, t) {
  if (void 0 === e) {
    e = "";
  }
  if (void 0 === t) {
    t = "";
  }
  return '<shadow type="text" id="' + t + '"><field name="TEXT">' + e + "</field></shadow>";
};
exports.text_value = function (e, n) {
  if (void 0 === n) {
    n = "";
  }
  return '<value name="' + e + '">' + (0, exports.text_shadow)(n) + "</value>";
};
exports.number_shadow = function (e, t) {
  if (void 0 === e) {
    e = "0";
  }
  return t ? '<shadow type="math_number"><field name="NUM" constraints="' + t + '">' + e + "</field></shadow>" : '<shadow type="math_number"><field name="NUM">' + e + "</field></shadow>";
};
exports.number_value = function (e, n, r) {
  if (void 0 === n) {
    n = "0";
  }
  return '<value name="' + e + '">' + (0, exports.number_shadow)(n, r) + "</value>";
};
exports.logic_shadow = function () {
  return '<empty type="logic_empty"></empty>';
};
exports.logic_value = function (e) {
  return '<value name="' + e + '">' + (0, exports.logic_shadow)() + "</value>";
};