"use strict";

var r = SyntaxError;
var i = Function;
var o = TypeError;
var a = function (e) {
  try {
    return Function("\"use strict\"; return (" + e + ").constructor;")();
  } catch (t) {}
};
var s = Object.getOwnPropertyDescriptor;
if (s) {
  try {
    s({}, "");
  } catch (k) {
    s = null;
  }
}
var c = function () {
  throw new o();
};
var u = s ? function () {
  try {
    return c;
  } catch (e) {
    try {
      return s(arguments, "callee").get;
    } catch (t) {
      return c;
    }
  }
}() : c;
var l = require("../2387/1385/index")();
var f = Object.getPrototypeOf || function (e) {
  return e.__proto__;
};
var d = a("async function* () {}");
var h = d ? d.prototype : void 0;
var p = h ? h.prototype : void 0;
var _ = "undefined" === typeof Uint8Array ? void 0 : f(Uint8Array);
var A = {
  "%AggregateError%": "undefined" === typeof AggregateError ? void 0 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? void 0 : ArrayBuffer,
  "%ArrayIteratorPrototype%": l ? f([][Symbol.iterator]()) : void 0,
  "%AsyncFromSyncIteratorPrototype%": void 0,
  "%AsyncFunction%": a("async function () {}"),
  "%AsyncGenerator%": h,
  "%AsyncGeneratorFunction%": d,
  "%AsyncIteratorPrototype%": p ? f(p) : void 0,
  "%Atomics%": "undefined" === typeof Atomics ? void 0 : Atomics,
  "%BigInt%": "undefined" === typeof BigInt ? void 0 : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": "undefined" === typeof DataView ? void 0 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": "undefined" === typeof Float32Array ? void 0 : Float32Array,
  "%Float64Array%": "undefined" === typeof Float64Array ? void 0 : Float64Array,
  "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
  "%Function%": i,
  "%GeneratorFunction%": a("function* () {}"),
  "%Int8Array%": "undefined" === typeof Int8Array ? void 0 : Int8Array,
  "%Int16Array%": "undefined" === typeof Int16Array ? void 0 : Int16Array,
  "%Int32Array%": "undefined" === typeof Int32Array ? void 0 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": l ? f(f([][Symbol.iterator]())) : void 0,
  "%JSON%": "object" === typeof JSON ? JSON : void 0,
  "%Map%": "undefined" === typeof Map ? void 0 : Map,
  "%MapIteratorPrototype%": "undefined" !== typeof Map && l ? f(new Map()[Symbol.iterator]()) : void 0,
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": "undefined" === typeof Promise ? void 0 : Promise,
  "%Proxy%": "undefined" === typeof Proxy ? void 0 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": "undefined" === typeof Reflect ? void 0 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": "undefined" === typeof Set ? void 0 : Set,
  "%SetIteratorPrototype%": "undefined" !== typeof Set && l ? f(new Set()[Symbol.iterator]()) : void 0,
  "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": l ? f(""[Symbol.iterator]()) : void 0,
  "%Symbol%": l ? Symbol : void 0,
  "%SyntaxError%": r,
  "%ThrowTypeError%": u,
  "%TypedArray%": _,
  "%TypeError%": o,
  "%Uint8Array%": "undefined" === typeof Uint8Array ? void 0 : Uint8Array,
  "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
  "%Uint16Array%": "undefined" === typeof Uint16Array ? void 0 : Uint16Array,
  "%Uint32Array%": "undefined" === typeof Uint32Array ? void 0 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": "undefined" === typeof WeakMap ? void 0 : WeakMap,
  "%WeakRef%": "undefined" === typeof WeakRef ? void 0 : WeakRef,
  "%WeakSet%": "undefined" === typeof WeakSet ? void 0 : WeakSet
};
var g = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var v = require("../2387/969/index");
var m = require("../2387/1386");
var y = v.call(Function.call, Array.prototype.concat);
var b = v.call(Function.apply, Array.prototype.splice);
var w = v.call(Function.call, String.prototype.replace);
var E = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var x = /\\(\\)?/g;
var C = function (e) {
  var t = [];
  w(e, E, function (e, n, r, i) {
    t[t.length] = r ? w(i, x, "$1") : n || e;
  });
  return t;
};
var O = function (e, t) {
  var n;
  var i = e;
  if (m(g, i)) {
    i = "%" + (n = g[i])[0] + "%";
  }
  if (m(A, i)) {
    var a = A[i];
    if ("undefined" === typeof a && !t) {
      throw new o("intrinsic " + e + " exists, but is not available. Please file an issue!");
    }
    return {
      alias: n,
      name: i,
      value: a
    };
  }
  throw new r("intrinsic " + e + " does not exist!");
};
module.exports = function (e, t) {
  if ("string" !== typeof e || 0 === e.length) {
    throw new o("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && "boolean" !== typeof t) {
    throw new o("\"allowMissing\" argument must be a boolean");
  }
  var n = C(e);
  var r = n.length > 0 ? n[0] : "";
  var i = O("%" + r + "%", t);
  var a = i.name;
  var c = i.value;
  var u = !1;
  var l = i.alias;
  if (l) {
    r = l[0];
    b(n, y([0, 1], l));
  }
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var h = n[f];
    if (!("constructor" !== h && d)) {
      u = !0;
    }
    if (m(A, a = "%" + (r += "." + h) + "%")) {
      c = A[a];
    } else if (null != c) {
      if (s && f + 1 >= n.length) {
        var p = s(c, h);
        d = !!p;
        if (!t && !(h in c)) {
          throw new o("base intrinsic for " + e + " exists, but the property is not available.");
        }
        c = d && "get" in p && !("originalValue" in p.get) ? p.get : c[h];
      } else {
        d = m(c, h);
        c = c[h];
      }
      if (d && !u) {
        A[a] = c;
      }
    }
  }
  return c;
};