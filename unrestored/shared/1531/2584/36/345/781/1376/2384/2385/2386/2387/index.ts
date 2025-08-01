"use strict";

var r = SyntaxError;
var i = Function;
var o = TypeError;
var a = function (e) {
  try {
    return i('"use strict"; return (' + e + ").constructor;")();
  } catch (t) {}
};
var s = Object.getOwnPropertyDescriptor;
if (s) {
  try {
    s({}, "");
  } catch (O) {
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
var l = require("./1385/index")();
var f = Object.getPrototypeOf || function (e) {
  return e.__proto__;
};
var d = {};
var h = "undefined" === typeof Uint8Array ? void 0 : f(Uint8Array);
var p = {
  "%AggregateError%": "undefined" === typeof AggregateError ? void 0 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? void 0 : ArrayBuffer,
  "%ArrayIteratorPrototype%": l ? f([][Symbol.iterator]()) : void 0,
  "%AsyncFromSyncIteratorPrototype%": void 0,
  "%AsyncFunction%": d,
  "%AsyncGenerator%": d,
  "%AsyncGeneratorFunction%": d,
  "%AsyncIteratorPrototype%": d,
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
  "%GeneratorFunction%": d,
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
  "%TypedArray%": h,
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
var _ = {
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
var A = require("./969/index");
var g = require("./1386");
var v = A.call(Function.call, Array.prototype.concat);
var m = A.call(Function.apply, Array.prototype.splice);
var y = A.call(Function.call, String.prototype.replace);
var b = A.call(Function.call, String.prototype.slice);
var w = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var E = /\\(\\)?/g;
var x = function (e) {
  var t = b(e, 0, 1);
  var n = b(e, -1);
  if ("%" === t && "%" !== n) {
    throw new r("invalid intrinsic syntax, expected closing `%`");
  }
  if ("%" === n && "%" !== t) {
    throw new r("invalid intrinsic syntax, expected opening `%`");
  }
  var i = [];
  y(e, w, function (e, t, n, r) {
    i[i.length] = n ? y(r, E, "$1") : t || e;
  });
  return i;
};
var C = function (e, t) {
  var n;
  var i = e;
  if (g(_, i) && (i = "%" + (n = _[i])[0] + "%"), g(p, i)) {
    var s = p[i];
    if (s === d && (s = function e(t) {
      var n;
      if ("%AsyncFunction%" === t) {
        n = a("async function () {}");
      } else if ("%GeneratorFunction%" === t) {
        n = a("function* () {}");
      } else if ("%AsyncGeneratorFunction%" === t) {
        n = a("async function* () {}");
      } else if ("%AsyncGenerator%" === t) {
        var r = e("%AsyncGeneratorFunction%");
        if (r) {
          n = r.prototype;
        }
      } else if ("%AsyncIteratorPrototype%" === t) {
        var i = e("%AsyncGenerator%");
        if (i) {
          n = f(i.prototype);
        }
      }
      p[t] = n;
      return n;
    }(i)), "undefined" === typeof s && !t) {
      throw new o("intrinsic " + e + " exists, but is not available. Please file an issue!");
    }
    return {
      alias: n,
      name: i,
      value: s
    };
  }
  throw new r("intrinsic " + e + " does not exist!");
};
module.exports = function (e, t) {
  if ("string" !== typeof e || 0 === e.length) {
    throw new o("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && "boolean" !== typeof t) {
    throw new o('"allowMissing" argument must be a boolean');
  }
  var n = x(e);
  var i = n.length > 0 ? n[0] : "";
  var a = C("%" + i + "%", t);
  var c = a.name;
  var u = a.value;
  var l = !1;
  var f = a.alias;
  if (f) {
    i = f[0];
    m(n, v([0, 1], f));
  }
  for (var d = 1, h = !0; d < n.length; d += 1) {
    var _ = n[d];
    var A = b(_, 0, 1);
    var y = b(_, -1);
    if (('"' === A || "'" === A || "`" === A || '"' === y || "'" === y || "`" === y) && A !== y) {
      throw new r("property names with quotes must have matching quotes");
    }
    if ("constructor" !== _ && h || (l = !0), g(p, c = "%" + (i += "." + _) + "%")) {
      u = p[c];
    } else if (null != u) {
      if (!(_ in u)) {
        if (!t) {
          throw new o("base intrinsic for " + e + " exists, but the property is not available.");
        }
        return;
      }
      if (s && d + 1 >= n.length) {
        var w = s(u, _);
        u = (h = !!w) && "get" in w && !("originalValue" in w.get) ? w.get : u[_];
      } else {
        h = g(u, _);
        u = u[_];
      }
      if (h && !l) {
        p[c] = u;
      }
    }
  }
  return u;
};