/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1363
 */

"use strict"

var r = require("../500")
var i = require("../572/index")
var o = require("./2245/index")
var a = function (e, t) {
  for (var n = {}, r = 0, o = Object.entries(e); r < o.length; r++) {
    var a = i(o[r], 2)
    var s = a[0]
    var c = a[1]
    if (!Object.hasOwnProperty.call(t, s)) {
      n[s] = c
    }
  }
  return n
}(o.es2015, o.es5)
var s = {
  Atomics: false,
  SharedArrayBuffer: false
}
module.exports = new Map(Object.entries({
  builtin: {
    globals: o.es5
  },
  es6: {
    globals: a,
    parserOptions: {
      ecmaVersion: 6
    }
  },
  es2015: {
    globals: a,
    parserOptions: {
      ecmaVersion: 6
    }
  },
  es2017: {
    globals: r(r({}, a), s),
    parserOptions: {
      ecmaVersion: 8
    }
  },
  es2020: {
    globals: r(r(r({}, a), s), {
      BigInt: false,
      BigInt64Array: false,
      BigUint64Array: false
    }),
    parserOptions: {
      ecmaVersion: 11
    }
  },
  browser: {
    globals: o.browser
  },
  node: {
    globals: o.node,
    parserOptions: {
      ecmaFeatures: {
        globalReturn: true
      }
    }
  },
  "shared-node-browser": {
    globals: o["shared-node-browser"]
  },
  worker: {
    globals: o.worker
  },
  serviceworker: {
    globals: o.serviceworker
  },
  commonjs: {
    globals: o.commonjs,
    parserOptions: {
      ecmaFeatures: {
        globalReturn: true
      }
    }
  },
  amd: {
    globals: o.amd
  },
  mocha: {
    globals: o.mocha
  },
  jasmine: {
    globals: o.jasmine
  },
  jest: {
    globals: o.jest
  },
  phantomjs: {
    globals: o.phantomjs
  },
  jquery: {
    globals: o.jquery
  },
  qunit: {
    globals: o.qunit
  },
  prototypejs: {
    globals: o.prototypejs
  },
  shelljs: {
    globals: o.shelljs
  },
  meteor: {
    globals: o.meteor
  },
  mongo: {
    globals: o.mongo
  },
  protractor: {
    globals: o.protractor
  },
  applescript: {
    globals: o.applescript
  },
  nashorn: {
    globals: o.nashorn
  },
  atomtest: {
    globals: o.atomtest
  },
  embertest: {
    globals: o.embertest
  },
  webextensions: {
    globals: o.webextensions
  },
  greasemonkey: {
    globals: o.greasemonkey
  }
}))
