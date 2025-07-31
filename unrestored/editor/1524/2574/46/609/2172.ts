"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.load_json_js_generator_math = void 0;
exports.load_json_js_generator_math = function (e) {
  e.register("random", function (t, n) {
    var r = e.value_to_code(t, n, "a", e.ORDER_COMMA) || "0";
    return ["Math.floor(Math.random() * (" + (e.value_to_code(t, n, "b", e.ORDER_COMMA) || "0") + " - " + r + ") + " + r + ")", e.ORDER_FUNCTION_CALL];
  });
  e.register("divisible_by", function (t, n) {
    return [(e.value_to_code(t, n, "NUMBER_TO_CHECK", e.ORDER_MODULUS) || "0") + " % " + (e.value_to_code(t, n, "DIVISOR", e.ORDER_MODULUS) || "0") + " === 0", e.ORDER_EQUALITY];
  });
  e.register("calculate", function (t, n) {
    return ["(" + (e.value_to_code(t, n, "input", e.ORDER_MEMBER) || "").replace(/\'/g, "") + ")", e.ORDER_ATOMIC];
  });
  e.register("math_arithmetic", function (t, n) {
    var r = {
      ADD: [" + ", e.ORDER_ADDITION],
      MINUS: [" - ", e.ORDER_SUBTRACTION],
      MULTIPLY: [" * ", e.ORDER_MULTIPLICATION],
      DIVIDE: [" / ", e.ORDER_DIVISION],
      POWER: [void 0, e.ORDER_COMMA]
    }[e.get_field_value(t.blocks[n], "OP")];
    var i = r[0];
    var o = r[1];
    var a = e.value_to_code(t, n, "A", o) || "0";
    var s = e.value_to_code(t, n, "B", o) || "0";
    return i ? [a + i + s, o] : ["Math.pow(" + a + ", " + s + ")", e.ORDER_FUNCTION_CALL];
  });
  var t = function (t, n) {
    var r = e.get_field_value(t.blocks[n], "OP");
    var i = "";
    var o = "";
    if ("NEG" === r) {
      if ("-" === (o = e.value_to_code(t, n, "NUM", e.ORDER_UNARY_NEGATION) || "0")[0]) {
        o = " " + o;
      }
      return [i = "-" + o, e.ORDER_UNARY_NEGATION];
    }
    switch (o = "SIN" === r || "COS" === r || "TAN" === r ? e.value_to_code(t, n, "NUM", e.ORDER_DIVISION) || "0" : e.value_to_code(t, n, "NUM", e.ORDER_NONE) || "0", r) {
      case "ABS":
        i = "Math.abs(" + o + ")";
        break;
      case "ROOT":
        i = "Math.sqrt(" + o + ")";
        break;
      case "LN":
        i = "Math.log(" + o + ")";
        break;
      case "EXP":
        i = "Math.exp(" + o + ")";
        break;
      case "POW10":
        i = "Math.pow(10," + o + ")";
        break;
      case "ROUND":
        i = "Math.round(" + o + ")";
        break;
      case "ROUNDUP":
        i = "Math.ceil(" + o + ")";
        break;
      case "ROUNDDOWN":
        i = "Math.floor(" + o + ")";
        break;
      case "SIN":
        i = "Math.sin(" + o + " / 180 * Math.PI)";
        break;
      case "COS":
        i = "Math.cos(" + o + " / 180 * Math.PI)";
        break;
      case "TAN":
        i = "Math.tan(" + o + " / 180 * Math.PI)";
    }
    if (i) {
      return [i, e.ORDER_FUNCTION_CALL];
    }
    switch (r) {
      case "LOG10":
        i = "Math.log(" + o + ") / Math.log(10)";
        break;
      case "ASIN":
        i = "Math.asin(" + o + ") / Math.PI * 180";
        break;
      case "ACOS":
        i = "Math.acos(" + o + ") / Math.PI * 180";
        break;
      case "ATAN":
        i = "Math.atan(" + o + ") / Math.PI * 180";
        break;
      default:
        throw Error("Unknown math operator: " + r);
    }
    return [i, e.ORDER_DIVISION];
  };
  e.register("math_single", t);
  e.register("math_trig", t);
  e.register("math_round", t);
  e.register("math_modulo", function (t, n) {
    return [(e.value_to_code(t, n, "DIVIDEND", e.ORDER_MODULUS) || "0") + " % " + (e.value_to_code(t, n, "DIVISOR", e.ORDER_MODULUS) || "0"), e.ORDER_MODULUS];
  });
  e.register("math_number_property", function (t, n) {
    var r = e.value_to_code(t, n, "NUMBER_TO_CHECK", e.ORDER_MODULUS) || "0";
    var i = "";
    switch (e.get_field_value(t.blocks[n], "PROPERTY")) {
      case "EVEN":
        i = r + " % 2 === 0";
        break;
      case "ODD":
        i = r + " % 2 === 1";
        break;
      case "PRIME":
        i = "Math.isPrime(" + r + ")";
        break;
      case "WHOLE":
        i = r + " % 1 === 0";
        break;
      case "POSITIVE":
        i = r + " > 0";
        break;
      case "NEGATIVE":
        i = r + " < 0";
        break;
      case "DIVISIBLE_BY":
        i = r + " % " + (e.value_to_code(t, n, "DIVISOR", e.ORDER_MODULUS) || "0") + " === 0";
    }
    return [i, e.ORDER_EQUALITY];
  });
};