"use strict";

var r = require("./2817");
var i = require("../../../../../1187/index");
var a = require("./3134");
function s(e, n) {
  var s;
  if ((n = n || {}).isFileComment) {
    e = function (e, n) {
      var a = exports.mapFileCommentRegex.exec(e);
      var s = a[1] || a[2];
      var o = i.resolve(n, s);
      try {
        return r.readFileSync(o, "utf8");
      } catch (l) {
        throw new Error("An error occurred while trying to read the map file at " + o + "\n" + l);
      }
    }(e, n.commentFileDir);
  }
  if (n.hasComment) {
    e = function (e) {
      return e.split(",").pop();
    }(e);
  }
  if (n.isEncoded) {
    s = e;
    e = a.Buffer.from(s, "base64").toString();
  }
  if (n.isJSON || n.isEncoded) {
    e = JSON.parse(e);
  }
  this.sourcemap = e;
}
Object.defineProperty(exports, "commentRegex", {
  get: function () {
    return /^\s*\/(?:\/|\*)[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/gm;
  }
});
Object.defineProperty(exports, "mapFileCommentRegex", {
  get: function () {
    return /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"`]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/){1}[ \t]*$)/gm;
  }
});
s.prototype.toJSON = function (e) {
  return JSON.stringify(this.sourcemap, null, e);
};
s.prototype.toBase64 = function () {
  var e = this.toJSON();
  return a.Buffer.from(e, "utf8").toString("base64");
};
s.prototype.toComment = function (e) {
  var t = "sourceMappingURL=data:application/json;charset=utf-8;base64," + this.toBase64();
  return e && e.multiline ? "/*# " + t + " */" : "//# " + t;
};
s.prototype.toObject = function () {
  return JSON.parse(this.toJSON());
};
s.prototype.addProperty = function (e, t) {
  if (this.sourcemap.hasOwnProperty(e)) {
    throw new Error('property "' + e + '" already exists on the sourcemap, use set property instead');
  }
  return this.setProperty(e, t);
};
s.prototype.setProperty = function (e, t) {
  this.sourcemap[e] = t;
  return this;
};
s.prototype.getProperty = function (e) {
  return this.sourcemap[e];
};
exports.fromObject = function (e) {
  return new s(e);
};
exports.fromJSON = function (e) {
  return new s(e, {
    isJSON: !0
  });
};
exports.fromBase64 = function (e) {
  return new s(e, {
    isEncoded: !0
  });
};
exports.fromComment = function (e) {
  return new s(e = e.replace(/^\/\*/g, "//").replace(/\*\/$/g, ""), {
    isEncoded: !0,
    hasComment: !0
  });
};
exports.fromMapFileComment = function (e, t) {
  return new s(e, {
    commentFileDir: t,
    isFileComment: !0,
    isJSON: !0
  });
};
exports.fromSource = function (e) {
  var n = e.match(exports.commentRegex);
  return n ? exports.fromComment(n.pop()) : null;
};
exports.fromMapFileSource = function (e, n) {
  var r = e.match(exports.mapFileCommentRegex);
  return r ? exports.fromMapFileComment(r.pop(), n) : null;
};
exports.removeComments = function (e) {
  return e.replace(exports.commentRegex, "");
};
exports.removeMapFileComments = function (e) {
  return e.replace(exports.mapFileCommentRegex, "");
};
exports.generateMapFileComment = function (e, t) {
  var n = "sourceMappingURL=" + e;
  return t && t.multiline ? "/*# " + n + " */" : "//# " + n;
};