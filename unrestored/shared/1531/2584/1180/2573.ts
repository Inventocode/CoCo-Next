/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2573
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./1432");
var o = require("./1433");
var i = {
  blocks: function (e) {
    for (var t = [], n = e.data.length, r = 0, i = (0, o.readByte)()(e); 0 !== i && i; i = (0, o.readByte)()(e)) {
      if (e.pos + i >= n) {
        var a = n - e.pos;
        t.push((0, o.readBytes)(a)(e));
        r += a;
        break;
      }
      t.push((0, o.readBytes)(i)(e));
      r += i;
    }
    for (var s = new Uint8Array(r), c = 0, l = 0; l < t.length; l++) {
      s.set(t[l], c);
      c += t[l].length;
    }
    return s;
  }
};
var a = (0, r.conditional)({
  gce: [{
    codes: (0, o.readBytes)(2)
  }, {
    byteSize: (0, o.readByte)()
  }, {
    extras: (0, o.readBits)({
      future: {
        index: 0,
        length: 3
      },
      disposal: {
        index: 3,
        length: 3
      },
      userInput: {
        index: 6
      },
      transparentColorGiven: {
        index: 7
      }
    })
  }, {
    delay: (0, o.readUnsigned)(true)
  }, {
    transparentColorIndex: (0, o.readByte)()
  }, {
    terminator: (0, o.readByte)()
  }]
}, function (e) {
  var t = (0, o.peekBytes)(2)(e);
  return 33 === t[0] && 249 === t[1];
});
var s = (0, r.conditional)({
  image: [{
    code: (0, o.readByte)()
  }, {
    descriptor: [{
      left: (0, o.readUnsigned)(true)
    }, {
      top: (0, o.readUnsigned)(true)
    }, {
      width: (0, o.readUnsigned)(true)
    }, {
      height: (0, o.readUnsigned)(true)
    }, {
      lct: (0, o.readBits)({
        exists: {
          index: 0
        },
        interlaced: {
          index: 1
        },
        sort: {
          index: 2
        },
        future: {
          index: 3,
          length: 2
        },
        size: {
          index: 5,
          length: 3
        }
      })
    }]
  }, (0, r.conditional)({
    lct: (0, o.readArray)(3, function (e, t, n) {
      return Math.pow(2, n.descriptor.lct.size + 1);
    })
  }, function (e, t, n) {
    return n.descriptor.lct.exists;
  }), {
    data: [{
      minCodeSize: (0, o.readByte)()
    }, i]
  }]
}, function (e) {
  return 44 === (0, o.peekByte)()(e);
});
var c = (0, r.conditional)({
  text: [{
    codes: (0, o.readBytes)(2)
  }, {
    blockSize: (0, o.readByte)()
  }, {
    preData: function (e, t, n) {
      return (0, o.readBytes)(n.text.blockSize)(e);
    }
  }, i]
}, function (e) {
  var t = (0, o.peekBytes)(2)(e);
  return 33 === t[0] && 1 === t[1];
});
var l = (0, r.conditional)({
  application: [{
    codes: (0, o.readBytes)(2)
  }, {
    blockSize: (0, o.readByte)()
  }, {
    id: function (e, t, n) {
      return (0, o.readString)(n.blockSize)(e);
    }
  }, i]
}, function (e) {
  var t = (0, o.peekBytes)(2)(e);
  return 33 === t[0] && 255 === t[1];
});
var u = (0, r.conditional)({
  comment: [{
    codes: (0, o.readBytes)(2)
  }, i]
}, function (e) {
  var t = (0, o.peekBytes)(2)(e);
  return 33 === t[0] && 254 === t[1];
});
var d = [{
  header: [{
    signature: (0, o.readString)(3)
  }, {
    version: (0, o.readString)(3)
  }]
}, {
  lsd: [{
    width: (0, o.readUnsigned)(true)
  }, {
    height: (0, o.readUnsigned)(true)
  }, {
    gct: (0, o.readBits)({
      exists: {
        index: 0
      },
      resolution: {
        index: 1,
        length: 3
      },
      sort: {
        index: 4
      },
      size: {
        index: 5,
        length: 3
      }
    })
  }, {
    backgroundColorIndex: (0, o.readByte)()
  }, {
    pixelAspectRatio: (0, o.readByte)()
  }]
}, (0, r.conditional)({
  gct: (0, o.readArray)(3, function (e, t) {
    return Math.pow(2, t.lsd.gct.size + 1);
  })
}, function (e, t) {
  return t.lsd.gct.exists;
}), {
  frames: (0, r.loop)([a, l, u, s, c], function (e) {
    var t = (0, o.peekByte)()(e);
    return 33 === t || 44 === t;
  })
}];
exports.default = d;