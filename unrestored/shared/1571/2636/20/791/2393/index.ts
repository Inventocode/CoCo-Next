/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2393
 */

"use strict"

var _regeneratorRuntime = require("regenerator-runtime")
var _slicedToArray = require("../../../207/787/572/index")
var _createForOfIteratorHelper = require("../../../207/787/399")
var _objectSpread = require("../../../207/787/500")
var _asyncToGenerator = require("../449")
var Token = require("./2394/index")
var strtok3 = require("./2395/index")
var _require = require("./2400")
var stringToBytes = _require.stringToBytes
var tarHeaderChecksumMatches = _require.tarHeaderChecksumMatches
var uint32SyncSafeToken = _require.uint32SyncSafeToken
var supported = require("./2401")
var minimumBytes = 4100
function fromStream(e) {
  return _fromStream.apply(this, arguments)
}
function _fromStream() {
  return (_fromStream = _asyncToGenerator(_regeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return _regeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return strtok3.fromStream(t)
          case 2:
            e$sent = e.sent
            e.prev = 3
            e.next = 6
            return fromTokenizer(e$sent)
          case 6:
            return e.abrupt("return", e.sent)
          case 7:
            e.prev = 7
            e.next = 10
            return e$sent.close()
          case 10:
            return e.finish(7)
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[3,, 7, 11]])
  }))).apply(this, arguments)
}
function fromBuffer(e) {
  return _fromBuffer.apply(this, arguments)
}
function _fromBuffer() {
  return (_fromBuffer = _asyncToGenerator(_regeneratorRuntime.mark(function e(t) {
    var n
    var r
    return _regeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t instanceof Uint8Array || t instanceof ArrayBuffer || Buffer.isBuffer(t)) {
              e.next = 2
              break
            }
            throw new TypeError("Expected the `input` argument to be of type `Uint8Array` or `Buffer` or `ArrayBuffer`, got `".concat(typeof t, "`"))
          case 2:
            if ((n = t instanceof Buffer ? t : Buffer.from(t)) && n.length > 1) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            r = strtok3.fromBuffer(n)
            return e.abrupt("return", fromTokenizer(r))
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function _check(e, t, n) {
  n = _objectSpread({
    offset: 0
  }, n)
  var r
  var i = _createForOfIteratorHelper(t.entries())
  try {
    for (i.s(); !(r = i.n()).done;) {
      var o = _slicedToArray(r.value, 2)
      var a = o[0]
      var s = o[1]
      if (n.mask) {
        if (s !== (n.mask[a] & e[a + n.offset])) {
          return false
        }
      } else if (s !== e[a + n.offset]) {
        return false
      }
    }
  } catch (c) {
    i.e(c)
  } finally {
    i.f()
  }
  return true
}
function fromTokenizer(e) {
  return _fromTokenizer2.apply(this, arguments)
}
function _fromTokenizer2() {
  return (_fromTokenizer2 = _asyncToGenerator(_regeneratorRuntime.mark(function e(t) {
    return _regeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            return e.abrupt("return", _fromTokenizer(t))
          case 4:
            if (e.prev = 4, e.t0 = e.catch(0), e.t0 instanceof strtok3.EndOfStreamError) {
              e.next = 8
              break
            }
            throw e.t0
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 4]])
  }))).apply(this, arguments)
}
function _fromTokenizer(e) {
  return _fromTokenizer3.apply(this, arguments)
}
function _fromTokenizer3() {
  return (_fromTokenizer3 = _asyncToGenerator(_regeneratorRuntime.mark(function e(t) {
    var n
    var r
    var i
    var /* [auto-meaningful-name] */e$sent
    var a
    var s
    var /* [auto-meaningful-name] */_e$sent
    var u
    var l
    var f
    var d
    var h
    var p
    var _
    var /* [auto-meaningful-name] */_e$sent2
    var /* [auto-meaningful-name] */_e$sent3
    var v
    var /* [auto-meaningful-name] */_e$sent4
    var y
    var /* [auto-meaningful-name] */_e$sent5
    var w
    var E
    var /* [auto-meaningful-name] */_e$sent6
    var C
    var O
    return _regeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = Buffer.alloc(minimumBytes)
            12
            r = function (e, t) {
              return _check(n, e, t)
            }
            i = function (e, t) {
              return r(stringToBytes(e), t)
            }
            if (!t.fileInfo.size) {
              t.fileInfo.size = Number.MAX_SAFE_INTEGER
            }
            e.next = 7
            return t.peekBuffer(n, {
              length: 12,
              mayBeLess: true
            })
          case 7:
            if (!r([66, 77])) {
              e.next = 9
              break
            }
            return e.abrupt("return", {
              ext: "bmp",
              mime: "image/bmp"
            })
          case 9:
            if (!r([11, 119])) {
              e.next = 11
              break
            }
            return e.abrupt("return", {
              ext: "ac3",
              mime: "audio/vnd.dolby.dd-raw"
            })
          case 11:
            if (!r([120, 1])) {
              e.next = 13
              break
            }
            return e.abrupt("return", {
              ext: "dmg",
              mime: "application/x-apple-diskimage"
            })
          case 13:
            if (!r([77, 90])) {
              e.next = 15
              break
            }
            return e.abrupt("return", {
              ext: "exe",
              mime: "application/x-msdownload"
            })
          case 15:
            if (!r([37, 33])) {
              e.next = 21
              break
            }
            e.next = 18
            return t.peekBuffer(n, {
              length: 24,
              mayBeLess: true
            })
          case 18:
            if (!i("PS-Adobe-", {
              offset: 2
            }) || !i(" EPSF-", {
              offset: 14
            })) {
              e.next = 20
              break
            }
            return e.abrupt("return", {
              ext: "eps",
              mime: "application/eps"
            })
          case 20:
            return e.abrupt("return", {
              ext: "ps",
              mime: "application/postscript"
            })
          case 21:
            if (!r([31, 160]) && !r([31, 157])) {
              e.next = 23
              break
            }
            return e.abrupt("return", {
              ext: "Z",
              mime: "application/x-compress"
            })
          case 23:
            if (!r([255, 216, 255])) {
              e.next = 25
              break
            }
            return e.abrupt("return", {
              ext: "jpg",
              mime: "image/jpeg"
            })
          case 25:
            if (!r([73, 73, 188])) {
              e.next = 27
              break
            }
            return e.abrupt("return", {
              ext: "jxr",
              mime: "image/vnd.ms-photo"
            })
          case 27:
            if (!r([31, 139, 8])) {
              e.next = 29
              break
            }
            return e.abrupt("return", {
              ext: "gz",
              mime: "application/gzip"
            })
          case 29:
            if (!r([66, 90, 104])) {
              e.next = 31
              break
            }
            return e.abrupt("return", {
              ext: "bz2",
              mime: "application/x-bzip2"
            })
          case 31:
            if (!i("ID3")) {
              e.next = 42
              break
            }
            e.next = 34
            return t.ignore(6)
          case 34:
            e.next = 36
            return t.readToken(uint32SyncSafeToken)
          case 36:
            if (e$sent = e.sent, !(t.position + e$sent > t.fileInfo.size)) {
              e.next = 39
              break
            }
            return e.abrupt("return", {
              ext: "mp3",
              mime: "audio/mpeg"
            })
          case 39:
            e.next = 41
            return t.ignore(e$sent)
          case 41:
            return e.abrupt("return", fromTokenizer(t))
          case 42:
            if (!i("MP+")) {
              e.next = 44
              break
            }
            return e.abrupt("return", {
              ext: "mpc",
              mime: "audio/x-musepack"
            })
          case 44:
            if (67 !== n[0] && 70 !== n[0] || !r([87, 83], {
              offset: 1
            })) {
              e.next = 46
              break
            }
            return e.abrupt("return", {
              ext: "swf",
              mime: "application/x-shockwave-flash"
            })
          case 46:
            if (!r([71, 73, 70])) {
              e.next = 48
              break
            }
            return e.abrupt("return", {
              ext: "gif",
              mime: "image/gif"
            })
          case 48:
            if (!i("FLIF")) {
              e.next = 50
              break
            }
            return e.abrupt("return", {
              ext: "flif",
              mime: "image/flif"
            })
          case 50:
            if (!i("8BPS")) {
              e.next = 52
              break
            }
            return e.abrupt("return", {
              ext: "psd",
              mime: "image/vnd.adobe.photoshop"
            })
          case 52:
            if (!i("WEBP", {
              offset: 8
            })) {
              e.next = 54
              break
            }
            return e.abrupt("return", {
              ext: "webp",
              mime: "image/webp"
            })
          case 54:
            if (!i("MPCK")) {
              e.next = 56
              break
            }
            return e.abrupt("return", {
              ext: "mpc",
              mime: "audio/x-musepack"
            })
          case 56:
            if (!i("FORM")) {
              e.next = 58
              break
            }
            return e.abrupt("return", {
              ext: "aif",
              mime: "audio/aiff"
            })
          case 58:
            if (!i("icns", {
              offset: 0
            })) {
              e.next = 60
              break
            }
            return e.abrupt("return", {
              ext: "icns",
              mime: "image/icns"
            })
          case 60:
            if (!r([80, 75, 3, 4])) {
              e.next = 121
              break
            }
            e.prev = 61
          case 62:
            if (!(t.position + 30 < t.fileInfo.size)) {
              e.next = 114
              break
            }
            e.next = 65
            return t.readBuffer(n, {
              length: 30
            })
          case 65:
            a = {
              compressedSize: n.readUInt32LE(18),
              uncompressedSize: n.readUInt32LE(22),
              filenameLength: n.readUInt16LE(26),
              extraFieldLength: n.readUInt16LE(28)
            }
            e.next = 68
            return t.readToken(new Token.StringType(a.filenameLength, "utf-8"))
          case 68:
            a.filename = e.sent
            e.next = 71
            return t.ignore(a.extraFieldLength)
          case 71:
            if ("META-INF/mozilla.rsa" !== a.filename) {
              e.next = 73
              break
            }
            return e.abrupt("return", {
              ext: "xpi",
              mime: "application/x-xpinstall"
            })
          case 73:
            if (!a.filename.endsWith(".rels") && !a.filename.endsWith(".xml")) {
              e.next = 83
              break
            }
            s = a.filename.split("/")[0]
            e.t0 = s
            e.next = "_rels" === e.t0 ? 78 : "word" === e.t0 ? 79 : "ppt" === e.t0 ? 80 : "xl" === e.t0 ? 81 : 82
            break
          case 78:
            return e.abrupt("break", 83)
          case 79:
            return e.abrupt("return", {
              ext: "docx",
              mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            })
          case 80:
            return e.abrupt("return", {
              ext: "pptx",
              mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
            })
          case 81:
            return e.abrupt("return", {
              ext: "xlsx",
              mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            })
          case 82:
            return e.abrupt("break", 83)
          case 83:
            if (!a.filename.startsWith("xl/")) {
              e.next = 85
              break
            }
            return e.abrupt("return", {
              ext: "xlsx",
              mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            })
          case 85:
            if (!a.filename.startsWith("3D/") || !a.filename.endsWith(".model")) {
              e.next = 87
              break
            }
            return e.abrupt("return", {
              ext: "3mf",
              mime: "model/3mf"
            })
          case 87:
            if ("mimetype" !== a.filename || a.compressedSize !== a.uncompressedSize) {
              e.next = 98
              break
            }
            e.next = 90
            return t.readToken(new Token.StringType(a.compressedSize, "utf-8"))
          case 90:
            _e$sent = e.sent
            e.t1 = _e$sent
            e.next = "application/epub+zip" === e.t1 ? 94 : "application/vnd.oasis.opendocument.text" === e.t1 ? 95 : "application/vnd.oasis.opendocument.spreadsheet" === e.t1 ? 96 : "application/vnd.oasis.opendocument.presentation" === e.t1 ? 97 : 98
            break
          case 94:
            return e.abrupt("return", {
              ext: "epub",
              mime: "application/epub+zip"
            })
          case 95:
            return e.abrupt("return", {
              ext: "odt",
              mime: "application/vnd.oasis.opendocument.text"
            })
          case 96:
            return e.abrupt("return", {
              ext: "ods",
              mime: "application/vnd.oasis.opendocument.spreadsheet"
            })
          case 97:
            return e.abrupt("return", {
              ext: "odp",
              mime: "application/vnd.oasis.opendocument.presentation"
            })
          case 98:
            if (0 !== a.compressedSize) {
              e.next = 110
              break
            }
            u = -1
          case 100:
            if (!(u < 0 && t.position < t.fileInfo.size)) {
              e.next = 108
              break
            }
            e.next = 103
            return t.peekBuffer(n, {
              mayBeLess: true
            })
          case 103:
            u = n.indexOf("504B0304", 0, "hex")
            e.next = 106
            return t.ignore(u >= 0 ? u : n.length)
          case 106:
            e.next = 100
            break
          case 108:
            e.next = 112
            break
          case 110:
            e.next = 112
            return t.ignore(a.compressedSize)
          case 112:
            e.next = 62
            break
          case 114:
            e.next = 120
            break
          case 116:
            if (e.prev = 116, e.t2 = e.catch(61), e.t2 instanceof strtok3.EndOfStreamError) {
              e.next = 120
              break
            }
            throw e.t2
          case 120:
            return e.abrupt("return", {
              ext: "zip",
              mime: "application/zip"
            })
          case 121:
            if (!i("OggS")) {
              e.next = 140
              break
            }
            e.next = 124
            return t.ignore(28)
          case 124:
            l = Buffer.alloc(8)
            e.next = 127
            return t.readBuffer(l)
          case 127:
            if (!_check(l, [79, 112, 117, 115, 72, 101, 97, 100])) {
              e.next = 129
              break
            }
            return e.abrupt("return", {
              ext: "opus",
              mime: "audio/opus"
            })
          case 129:
            if (!_check(l, [128, 116, 104, 101, 111, 114, 97])) {
              e.next = 131
              break
            }
            return e.abrupt("return", {
              ext: "ogv",
              mime: "video/ogg"
            })
          case 131:
            if (!_check(l, [1, 118, 105, 100, 101, 111, 0])) {
              e.next = 133
              break
            }
            return e.abrupt("return", {
              ext: "ogm",
              mime: "video/ogg"
            })
          case 133:
            if (!_check(l, [127, 70, 76, 65, 67])) {
              e.next = 135
              break
            }
            return e.abrupt("return", {
              ext: "oga",
              mime: "audio/ogg"
            })
          case 135:
            if (!_check(l, [83, 112, 101, 101, 120, 32, 32])) {
              e.next = 137
              break
            }
            return e.abrupt("return", {
              ext: "spx",
              mime: "audio/ogg"
            })
          case 137:
            if (!_check(l, [1, 118, 111, 114, 98, 105, 115])) {
              e.next = 139
              break
            }
            return e.abrupt("return", {
              ext: "ogg",
              mime: "audio/ogg"
            })
          case 139:
            return e.abrupt("return", {
              ext: "ogx",
              mime: "application/ogg"
            })
          case 140:
            if (!r([80, 75]) || 3 !== n[2] && 5 !== n[2] && 7 !== n[2] || 4 !== n[3] && 6 !== n[3] && 8 !== n[3]) {
              e.next = 142
              break
            }
            return e.abrupt("return", {
              ext: "zip",
              mime: "application/zip"
            })
          case 142:
            if (!i("ftyp", {
              offset: 4
            }) || 0 === (96 & n[8])) {
              e.next = 167
              break
            }
            f = n.toString("binary", 8, 12).replace("\u0000", " ").trim()
            e.t3 = f
            e.next = "avif" === e.t3 ? 147 : "mif1" === e.t3 ? 148 : "msf1" === e.t3 ? 149 : "heic" === e.t3 || "heix" === e.t3 ? 150 : "hevc" === e.t3 || "hevx" === e.t3 ? 151 : "qt" === e.t3 ? 152 : "M4V" === e.t3 || "M4VH" === e.t3 || "M4VP" === e.t3 ? 153 : "M4P" === e.t3 ? 154 : "M4B" === e.t3 ? 155 : "M4A" === e.t3 ? 156 : "F4V" === e.t3 ? 157 : "F4P" === e.t3 ? 158 : "F4A" === e.t3 ? 159 : "F4B" === e.t3 ? 160 : "crx" === e.t3 ? 161 : 162
            break
          case 147:
            return e.abrupt("return", {
              ext: "avif",
              mime: "image/avif"
            })
          case 148:
            return e.abrupt("return", {
              ext: "heic",
              mime: "image/heif"
            })
          case 149:
            return e.abrupt("return", {
              ext: "heic",
              mime: "image/heif-sequence"
            })
          case 150:
            return e.abrupt("return", {
              ext: "heic",
              mime: "image/heic"
            })
          case 151:
            return e.abrupt("return", {
              ext: "heic",
              mime: "image/heic-sequence"
            })
          case 152:
            return e.abrupt("return", {
              ext: "mov",
              mime: "video/quicktime"
            })
          case 153:
            return e.abrupt("return", {
              ext: "m4v",
              mime: "video/x-m4v"
            })
          case 154:
            return e.abrupt("return", {
              ext: "m4p",
              mime: "video/mp4"
            })
          case 155:
            return e.abrupt("return", {
              ext: "m4b",
              mime: "audio/mp4"
            })
          case 156:
            return e.abrupt("return", {
              ext: "m4a",
              mime: "audio/x-m4a"
            })
          case 157:
            return e.abrupt("return", {
              ext: "f4v",
              mime: "video/mp4"
            })
          case 158:
            return e.abrupt("return", {
              ext: "f4p",
              mime: "video/mp4"
            })
          case 159:
            return e.abrupt("return", {
              ext: "f4a",
              mime: "audio/mp4"
            })
          case 160:
            return e.abrupt("return", {
              ext: "f4b",
              mime: "audio/mp4"
            })
          case 161:
            return e.abrupt("return", {
              ext: "cr3",
              mime: "image/x-canon-cr3"
            })
          case 162:
            if (!f.startsWith("3g")) {
              e.next = 166
              break
            }
            if (!f.startsWith("3g2")) {
              e.next = 165
              break
            }
            return e.abrupt("return", {
              ext: "3g2",
              mime: "video/3gpp2"
            })
          case 165:
            return e.abrupt("return", {
              ext: "3gp",
              mime: "video/3gpp"
            })
          case 166:
            return e.abrupt("return", {
              ext: "mp4",
              mime: "video/mp4"
            })
          case 167:
            if (!i("MThd")) {
              e.next = 169
              break
            }
            return e.abrupt("return", {
              ext: "mid",
              mime: "audio/midi"
            })
          case 169:
            if (!i("wOFF") || !r([0, 1, 0, 0], {
              offset: 4
            }) && !i("OTTO", {
              offset: 4
            })) {
              e.next = 171
              break
            }
            return e.abrupt("return", {
              ext: "woff",
              mime: "font/woff"
            })
          case 171:
            if (!i("wOF2") || !r([0, 1, 0, 0], {
              offset: 4
            }) && !i("OTTO", {
              offset: 4
            })) {
              e.next = 173
              break
            }
            return e.abrupt("return", {
              ext: "woff2",
              mime: "font/woff2"
            })
          case 173:
            if (!r([212, 195, 178, 161]) && !r([161, 178, 195, 212])) {
              e.next = 175
              break
            }
            return e.abrupt("return", {
              ext: "pcap",
              mime: "application/vnd.tcpdump.pcap"
            })
          case 175:
            if (!i("DSD ")) {
              e.next = 177
              break
            }
            return e.abrupt("return", {
              ext: "dsf",
              mime: "audio/x-dsf"
            })
          case 177:
            if (!i("LZIP")) {
              e.next = 179
              break
            }
            return e.abrupt("return", {
              ext: "lz",
              mime: "application/x-lzip"
            })
          case 179:
            if (!i("fLaC")) {
              e.next = 181
              break
            }
            return e.abrupt("return", {
              ext: "flac",
              mime: "audio/x-flac"
            })
          case 181:
            if (!r([66, 80, 71, 251])) {
              e.next = 183
              break
            }
            return e.abrupt("return", {
              ext: "bpg",
              mime: "image/bpg"
            })
          case 183:
            if (!i("wvpk")) {
              e.next = 185
              break
            }
            return e.abrupt("return", {
              ext: "wv",
              mime: "audio/wavpack"
            })
          case 185:
            if (!i("%PDF")) {
              e.next = 195
              break
            }
            e.next = 188
            return t.ignore(1350)
          case 188:
            10485760
            d = Buffer.alloc(Math.min(10485760, t.fileInfo.size))
            e.next = 192
            return t.readBuffer(d, {
              mayBeLess: true
            })
          case 192:
            if (!d.includes(Buffer.from("AIPrivateData"))) {
              e.next = 194
              break
            }
            return e.abrupt("return", {
              ext: "ai",
              mime: "application/postscript"
            })
          case 194:
            return e.abrupt("return", {
              ext: "pdf",
              mime: "application/pdf"
            })
          case 195:
            if (!r([0, 97, 115, 109])) {
              e.next = 197
              break
            }
            return e.abrupt("return", {
              ext: "wasm",
              mime: "application/wasm"
            })
          case 197:
            if (!r([73, 73, 42, 0])) {
              e.next = 210
              break
            }
            if (!i("CR", {
              offset: 8
            })) {
              e.next = 200
              break
            }
            return e.abrupt("return", {
              ext: "cr2",
              mime: "image/x-canon-cr2"
            })
          case 200:
            if (!r([28, 0, 254, 0], {
              offset: 8
            }) && !r([31, 0, 11, 0], {
              offset: 8
            })) {
              e.next = 202
              break
            }
            return e.abrupt("return", {
              ext: "nef",
              mime: "image/x-nikon-nef"
            })
          case 202:
            if (!r([8, 0, 0, 0], {
              offset: 4
            }) || !r([45, 0, 254, 0], {
              offset: 8
            }) && !r([39, 0, 254, 0], {
              offset: 8
            })) {
              e.next = 204
              break
            }
            return e.abrupt("return", {
              ext: "dng",
              mime: "image/x-adobe-dng"
            })
          case 204:
            n = Buffer.alloc(24)
            e.next = 207
            return t.peekBuffer(n)
          case 207:
            if (!r([16, 251, 134, 1], {
              offset: 4
            }) && !r([8, 0, 0, 0], {
              offset: 4
            }) || !r([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], {
              offset: 9
            })) {
              e.next = 209
              break
            }
            return e.abrupt("return", {
              ext: "arw",
              mime: "image/x-sony-arw"
            })
          case 209:
            return e.abrupt("return", {
              ext: "tif",
              mime: "image/tiff"
            })
          case 210:
            if (!r([77, 77, 0, 42])) {
              e.next = 212
              break
            }
            return e.abrupt("return", {
              ext: "tif",
              mime: "image/tiff"
            })
          case 212:
            if (!i("MAC ")) {
              e.next = 214
              break
            }
            return e.abrupt("return", {
              ext: "ape",
              mime: "audio/ape"
            })
          case 214:
            if (!r([26, 69, 223, 163])) {
              e.next = 230
              break
            }
            h = function () {
              var e = _asyncToGenerator(_regeneratorRuntime.mark(function e() {
                var /* [auto-meaningful-name] */_e$sent7
                var r
                var i
                var o
                return _regeneratorRuntime.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        e.next = 2
                        return t.peekNumber(Token.UINT8)
                      case 2:
                        for (_e$sent7 = e.sent, r = 128, i = 0; 0 === (_e$sent7 & r) && 0 !== r;) {
                          ++i
                          r >>= 1
                        }
                        o = Buffer.alloc(i + 1)
                        e.next = 9
                        return t.readBuffer(o)
                      case 9:
                        return e.abrupt("return", o)
                      case 10:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))
              return function () {
                return e.apply(this, arguments)
              }
            }()
            p = function () {
              var e = _asyncToGenerator(_regeneratorRuntime.mark(function e() {
                var /* [auto-meaningful-name] */_e$sent8
                var /* [auto-meaningful-name] */_e$sent9
                var r
                return _regeneratorRuntime.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        e.next = 2
                        return h()
                      case 2:
                        _e$sent8 = e.sent
                        e.next = 5
                        return h()
                      case 5:
                        (_e$sent9 = e.sent)[0] ^= 128 >> _e$sent9.length - 1
                        r = Math.min(6, _e$sent9.length)
                        return e.abrupt("return", {
                          id: _e$sent8.readUIntBE(0, _e$sent8.length),
                          len: _e$sent9.readUIntBE(_e$sent9.length - r, r)
                        })
                      case 9:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))
              return function () {
                return e.apply(this, arguments)
              }
            }()
            _ = function () {
              var e = _asyncToGenerator(_regeneratorRuntime.mark(function e(n, r) {
                var /* [auto-meaningful-name] */_e$sent0
                return _regeneratorRuntime.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        if (!(r > 0)) {
                          e.next = 11
                          break
                        }
                        e.next = 3
                        return p()
                      case 3:
                        if (17026 !== (_e$sent0 = e.sent).id) {
                          e.next = 6
                          break
                        }
                        return e.abrupt("return", t.readToken(new Token.StringType(_e$sent0.len, "utf-8")))
                      case 6:
                        e.next = 8
                        return t.ignore(_e$sent0.len)
                      case 8:
                        --r
                        e.next = 0
                        break
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }()
            e.next = 220
            return p()
          case 220:
            _e$sent2 = e.sent
            e.next = 223
            return _(1, _e$sent2.len)
          case 223:
            _e$sent3 = e.sent
            e.t4 = _e$sent3
            e.next = "webm" === e.t4 ? 227 : "matroska" === e.t4 ? 228 : 229
            break
          case 227:
            return e.abrupt("return", {
              ext: "webm",
              mime: "video/webm"
            })
          case 228:
            return e.abrupt("return", {
              ext: "mkv",
              mime: "video/x-matroska"
            })
          case 229:
            return e.abrupt("return")
          case 230:
            if (!r([82, 73, 70, 70])) {
              e.next = 237
              break
            }
            if (!r([65, 86, 73], {
              offset: 8
            })) {
              e.next = 233
              break
            }
            return e.abrupt("return", {
              ext: "avi",
              mime: "video/vnd.avi"
            })
          case 233:
            if (!r([87, 65, 86, 69], {
              offset: 8
            })) {
              e.next = 235
              break
            }
            return e.abrupt("return", {
              ext: "wav",
              mime: "audio/vnd.wave"
            })
          case 235:
            if (!r([81, 76, 67, 77], {
              offset: 8
            })) {
              e.next = 237
              break
            }
            return e.abrupt("return", {
              ext: "qcp",
              mime: "audio/qcelp"
            })
          case 237:
            if (!i("SQLi")) {
              e.next = 239
              break
            }
            return e.abrupt("return", {
              ext: "sqlite",
              mime: "application/x-sqlite3"
            })
          case 239:
            if (!r([78, 69, 83, 26])) {
              e.next = 241
              break
            }
            return e.abrupt("return", {
              ext: "nes",
              mime: "application/x-nintendo-nes-rom"
            })
          case 241:
            if (!i("Cr24")) {
              e.next = 243
              break
            }
            return e.abrupt("return", {
              ext: "crx",
              mime: "application/x-google-chrome-extension"
            })
          case 243:
            if (!i("MSCF") && !i("ISc(")) {
              e.next = 245
              break
            }
            return e.abrupt("return", {
              ext: "cab",
              mime: "application/vnd.ms-cab-compressed"
            })
          case 245:
            if (!r([237, 171, 238, 219])) {
              e.next = 247
              break
            }
            return e.abrupt("return", {
              ext: "rpm",
              mime: "application/x-rpm"
            })
          case 247:
            if (!r([197, 208, 211, 198])) {
              e.next = 249
              break
            }
            return e.abrupt("return", {
              ext: "eps",
              mime: "application/eps"
            })
          case 249:
            if (!r([40, 181, 47, 253])) {
              e.next = 251
              break
            }
            return e.abrupt("return", {
              ext: "zst",
              mime: "application/zstd"
            })
          case 251:
            if (!r([79, 84, 84, 79, 0])) {
              e.next = 253
              break
            }
            return e.abrupt("return", {
              ext: "otf",
              mime: "font/otf"
            })
          case 253:
            if (!i("#!AMR")) {
              e.next = 255
              break
            }
            return e.abrupt("return", {
              ext: "amr",
              mime: "audio/amr"
            })
          case 255:
            if (!i("{\\rtf")) {
              e.next = 257
              break
            }
            return e.abrupt("return", {
              ext: "rtf",
              mime: "application/rtf"
            })
          case 257:
            if (!r([70, 76, 86, 1])) {
              e.next = 259
              break
            }
            return e.abrupt("return", {
              ext: "flv",
              mime: "video/x-flv"
            })
          case 259:
            if (!i("IMPM")) {
              e.next = 261
              break
            }
            return e.abrupt("return", {
              ext: "it",
              mime: "audio/x-it"
            })
          case 261:
            if (!(i("-lh0-", {
              offset: 2
            }) || i("-lh1-", {
              offset: 2
            }) || i("-lh2-", {
              offset: 2
            }) || i("-lh3-", {
              offset: 2
            }) || i("-lh4-", {
              offset: 2
            }) || i("-lh5-", {
              offset: 2
            }) || i("-lh6-", {
              offset: 2
            }) || i("-lh7-", {
              offset: 2
            }) || i("-lzs-", {
              offset: 2
            }) || i("-lz4-", {
              offset: 2
            }) || i("-lz5-", {
              offset: 2
            }) || i("-lhd-", {
              offset: 2
            }))) {
              e.next = 263
              break
            }
            return e.abrupt("return", {
              ext: "lzh",
              mime: "application/x-lzh-compressed"
            })
          case 263:
            if (!r([0, 0, 1, 186])) {
              e.next = 268
              break
            }
            if (!r([33], {
              offset: 4,
              mask: [241]
            })) {
              e.next = 266
              break
            }
            return e.abrupt("return", {
              ext: "mpg",
              mime: "video/MP1S"
            })
          case 266:
            if (!r([68], {
              offset: 4,
              mask: [196]
            })) {
              e.next = 268
              break
            }
            return e.abrupt("return", {
              ext: "mpg",
              mime: "video/MP2P"
            })
          case 268:
            if (!i("ITSF")) {
              e.next = 270
              break
            }
            return e.abrupt("return", {
              ext: "chm",
              mime: "application/vnd.ms-htmlhelp"
            })
          case 270:
            if (!r([253, 55, 122, 88, 90, 0])) {
              e.next = 272
              break
            }
            return e.abrupt("return", {
              ext: "xz",
              mime: "application/x-xz"
            })
          case 272:
            if (!i("<?xml ")) {
              e.next = 274
              break
            }
            return e.abrupt("return", {
              ext: "xml",
              mime: "application/xml"
            })
          case 274:
            if (!r([55, 122, 188, 175, 39, 28])) {
              e.next = 276
              break
            }
            return e.abrupt("return", {
              ext: "7z",
              mime: "application/x-7z-compressed"
            })
          case 276:
            if (!r([82, 97, 114, 33, 26, 7]) || 0 !== n[6] && 1 !== n[6]) {
              e.next = 278
              break
            }
            return e.abrupt("return", {
              ext: "rar",
              mime: "application/x-rar-compressed"
            })
          case 278:
            if (!i("solid ")) {
              e.next = 280
              break
            }
            return e.abrupt("return", {
              ext: "stl",
              mime: "model/stl"
            })
          case 280:
            if (!i("BLENDER")) {
              e.next = 282
              break
            }
            return e.abrupt("return", {
              ext: "blend",
              mime: "application/x-blender"
            })
          case 282:
            if (!i("!<arch>")) {
              e.next = 291
              break
            }
            e.next = 285
            return t.ignore(8)
          case 285:
            e.next = 287
            return t.readToken(new Token.StringType(13, "ascii"))
          case 287:
            if ("debian-binary" !== e.sent) {
              e.next = 290
              break
            }
            return e.abrupt("return", {
              ext: "deb",
              mime: "application/x-deb"
            })
          case 290:
            return e.abrupt("return", {
              ext: "ar",
              mime: "application/x-unix-archive"
            })
          case 291:
            if (!r([137, 80, 78, 71, 13, 10, 26, 10])) {
              e.next = 309
              break
            }
            v = function () {
              var e = _asyncToGenerator(_regeneratorRuntime.mark(function e() {
                return _regeneratorRuntime.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        e.next = 2
                        return t.readToken(Token.INT32_BE)
                      case 2:
                        e.t0 = e.sent
                        e.next = 5
                        return t.readToken(new Token.StringType(4, "binary"))
                      case 5:
                        e.t1 = e.sent
                        return e.abrupt("return", {
                          length: e.t0,
                          type: e.t1
                        })
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))
              return function () {
                return e.apply(this, arguments)
              }
            }()
            e.next = 295
            return t.ignore(8)
          case 295:
            e.next = 297
            return v()
          case 297:
            if (!((_e$sent4 = e.sent).length < 0)) {
              e.next = 300
              break
            }
            return e.abrupt("return")
          case 300:
            e.t5 = _e$sent4.type
            e.next = "IDAT" === e.t5 ? 303 : "acTL" === e.t5 ? 304 : 305
            break
          case 303:
            return e.abrupt("return", {
              ext: "png",
              mime: "image/png"
            })
          case 304:
            return e.abrupt("return", {
              ext: "apng",
              mime: "image/apng"
            })
          case 305:
            e.next = 307
            return t.ignore(_e$sent4.length + 4)
          case 307:
            if (t.position + 8 < t.fileInfo.size) {
              e.next = 295
              break
            }
          case 308:
            return e.abrupt("return", {
              ext: "png",
              mime: "image/png"
            })
          case 309:
            if (!r([65, 82, 82, 79, 87, 49, 0, 0])) {
              e.next = 311
              break
            }
            return e.abrupt("return", {
              ext: "arrow",
              mime: "application/x-apache-arrow"
            })
          case 311:
            if (!r([103, 108, 84, 70, 2, 0, 0, 0])) {
              e.next = 313
              break
            }
            return e.abrupt("return", {
              ext: "glb",
              mime: "model/gltf-binary"
            })
          case 313:
            if (!(r([102, 114, 101, 101], {
              offset: 4
            }) || r([109, 100, 97, 116], {
              offset: 4
            }) || r([109, 111, 111, 118], {
              offset: 4
            }) || r([119, 105, 100, 101], {
              offset: 4
            }))) {
              e.next = 315
              break
            }
            return e.abrupt("return", {
              ext: "mov",
              mime: "video/quicktime"
            })
          case 315:
            if (!r([73, 73, 82, 79, 8, 0, 0, 0, 24])) {
              e.next = 317
              break
            }
            return e.abrupt("return", {
              ext: "orf",
              mime: "image/x-olympus-orf"
            })
          case 317:
            if (!i("gimp xcf ")) {
              e.next = 319
              break
            }
            return e.abrupt("return", {
              ext: "xcf",
              mime: "image/x-xcf"
            })
          case 319:
            if (!r([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) {
              e.next = 321
              break
            }
            return e.abrupt("return", {
              ext: "rw2",
              mime: "image/x-panasonic-rw2"
            })
          case 321:
            if (!r([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
              e.next = 346
              break
            }
            y = function () {
              var e = _asyncToGenerator(_regeneratorRuntime.mark(function e() {
                var n
                return _regeneratorRuntime.wrap(function (e) {
                  for (;;) {
                    switch (e.prev = e.next) {
                      case 0:
                        n = Buffer.alloc(16)
                        e.next = 3
                        return t.readBuffer(n)
                      case 3:
                        e.t0 = n
                        e.t1 = Number
                        e.next = 7
                        return t.readToken(Token.UINT64_LE)
                      case 7:
                        e.t2 = e.sent
                        e.t3 = (0, e.t1)(e.t2)
                        return e.abrupt("return", {
                          id: e.t0,
                          size: e.t3
                        })
                      case 10:
                      case "end":
                        return e.stop()
                    }
                  }
                }, e)
              }))
              return function () {
                return e.apply(this, arguments)
              }
            }()
            e.next = 325
            return t.ignore(30)
          case 325:
            if (!(t.position + 24 < t.fileInfo.size)) {
              e.next = 345
              break
            }
            e.next = 328
            return y()
          case 328:
            if (_e$sent5 = e.sent, w = _e$sent5.size - 24, !_check(_e$sent5.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
              e.next = 341
              break
            }
            E = Buffer.alloc(16)
            e.t6 = w
            e.next = 335
            return t.readBuffer(E)
          case 335:
            if (w = e.t6 -= e.sent, !_check(E, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
              e.next = 338
              break
            }
            return e.abrupt("return", {
              ext: "asf",
              mime: "audio/x-ms-asf"
            })
          case 338:
            if (!_check(E, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
              e.next = 340
              break
            }
            return e.abrupt("return", {
              ext: "asf",
              mime: "video/x-ms-asf"
            })
          case 340:
            return e.abrupt("break", 345)
          case 341:
            e.next = 343
            return t.ignore(w)
          case 343:
            e.next = 325
            break
          case 345:
            return e.abrupt("return", {
              ext: "asf",
              mime: "application/vnd.ms-asf"
            })
          case 346:
            if (!r([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) {
              e.next = 348
              break
            }
            return e.abrupt("return", {
              ext: "ktx",
              mime: "image/ktx"
            })
          case 348:
            if (!r([126, 16, 4]) && !r([126, 24, 4]) || !r([48, 77, 73, 69], {
              offset: 4
            })) {
              e.next = 350
              break
            }
            return e.abrupt("return", {
              ext: "mie",
              mime: "application/x-mie"
            })
          case 350:
            if (!r([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], {
              offset: 2
            })) {
              e.next = 352
              break
            }
            return e.abrupt("return", {
              ext: "shp",
              mime: "application/x-esri-shape"
            })
          case 352:
            if (!r([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
              e.next = 366
              break
            }
            e.next = 355
            return t.ignore(20)
          case 355:
            e.next = 357
            return t.readToken(new Token.StringType(4, "ascii"))
          case 357:
            _e$sent6 = e.sent
            e.t7 = _e$sent6
            e.next = "jp2 " === e.t7 ? 361 : "jpx " === e.t7 ? 362 : "jpm " === e.t7 ? 363 : "mjp2" === e.t7 ? 364 : 365
            break
          case 361:
            return e.abrupt("return", {
              ext: "jp2",
              mime: "image/jp2"
            })
          case 362:
            return e.abrupt("return", {
              ext: "jpx",
              mime: "image/jpx"
            })
          case 363:
            return e.abrupt("return", {
              ext: "jpm",
              mime: "image/jpm"
            })
          case 364:
            return e.abrupt("return", {
              ext: "mj2",
              mime: "image/mj2"
            })
          case 365:
            return e.abrupt("return")
          case 366:
            if (!r([255, 10]) && !r([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) {
              e.next = 368
              break
            }
            return e.abrupt("return", {
              ext: "jxl",
              mime: "image/jxl"
            })
          case 368:
            if (!r([0, 0, 1, 186]) && !r([0, 0, 1, 179])) {
              e.next = 370
              break
            }
            return e.abrupt("return", {
              ext: "mpg",
              mime: "video/mpeg"
            })
          case 370:
            if (!r([0, 1, 0, 0, 0])) {
              e.next = 372
              break
            }
            return e.abrupt("return", {
              ext: "ttf",
              mime: "font/ttf"
            })
          case 372:
            if (!r([0, 0, 1, 0])) {
              e.next = 374
              break
            }
            return e.abrupt("return", {
              ext: "ico",
              mime: "image/x-icon"
            })
          case 374:
            if (!r([0, 0, 2, 0])) {
              e.next = 376
              break
            }
            return e.abrupt("return", {
              ext: "cur",
              mime: "image/x-icon"
            })
          case 376:
            if (!r([208, 207, 17, 224, 161, 177, 26, 225])) {
              e.next = 378
              break
            }
            return e.abrupt("return", {
              ext: "cfb",
              mime: "application/x-cfb"
            })
          case 378:
            e.next = 380
            return t.peekBuffer(n, {
              length: Math.min(256, t.fileInfo.size),
              mayBeLess: true
            })
          case 380:
            if (!i("BEGIN:")) {
              e.next = 385
              break
            }
            if (!i("VCARD", {
              offset: 6
            })) {
              e.next = 383
              break
            }
            return e.abrupt("return", {
              ext: "vcf",
              mime: "text/vcard"
            })
          case 383:
            if (!i("VCALENDAR", {
              offset: 6
            })) {
              e.next = 385
              break
            }
            return e.abrupt("return", {
              ext: "ics",
              mime: "text/calendar"
            })
          case 385:
            if (!i("FUJIFILMCCD-RAW")) {
              e.next = 387
              break
            }
            return e.abrupt("return", {
              ext: "raf",
              mime: "image/x-fujifilm-raf"
            })
          case 387:
            if (!i("Extended Module:")) {
              e.next = 389
              break
            }
            return e.abrupt("return", {
              ext: "xm",
              mime: "audio/x-xm"
            })
          case 389:
            if (!i("Creative Voice File")) {
              e.next = 391
              break
            }
            return e.abrupt("return", {
              ext: "voc",
              mime: "audio/x-voc"
            })
          case 391:
            if (!(r([4, 0, 0, 0]) && n.length >= 16)) {
              e.next = 403
              break
            }
            if (!((C = n.readUInt32LE(12)) > 12 && n.length >= C + 16)) {
              e.next = 403
              break
            }
            if (e.prev = 394, O = n.slice(16, C + 16).toString(), !JSON.parse(O).files) {
              e.next = 399
              break
            }
            return e.abrupt("return", {
              ext: "asar",
              mime: "application/x-asar"
            })
          case 399:
            e.next = 403
            break
          case 401:
            e.prev = 401
            e.t8 = e.catch(394)
          case 403:
            if (!r([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) {
              e.next = 405
              break
            }
            return e.abrupt("return", {
              ext: "mxf",
              mime: "application/mxf"
            })
          case 405:
            if (!i("SCRM", {
              offset: 44
            })) {
              e.next = 407
              break
            }
            return e.abrupt("return", {
              ext: "s3m",
              mime: "audio/x-s3m"
            })
          case 407:
            if (!r([71], {
              offset: 4
            }) || !r([71], {
              offset: 192
            }) && !r([71], {
              offset: 196
            })) {
              e.next = 409
              break
            }
            return e.abrupt("return", {
              ext: "mts",
              mime: "video/mp2t"
            })
          case 409:
            if (!r([66, 79, 79, 75, 77, 79, 66, 73], {
              offset: 60
            })) {
              e.next = 411
              break
            }
            return e.abrupt("return", {
              ext: "mobi",
              mime: "application/x-mobipocket-ebook"
            })
          case 411:
            if (!r([68, 73, 67, 77], {
              offset: 128
            })) {
              e.next = 413
              break
            }
            return e.abrupt("return", {
              ext: "dcm",
              mime: "application/dicom"
            })
          case 413:
            if (!r([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) {
              e.next = 415
              break
            }
            return e.abrupt("return", {
              ext: "lnk",
              mime: "application/x.ms.shortcut"
            })
          case 415:
            if (!r([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) {
              e.next = 417
              break
            }
            return e.abrupt("return", {
              ext: "alias",
              mime: "application/x.apple.alias"
            })
          case 417:
            if (!r([76, 80], {
              offset: 34
            }) || !(r([0, 0, 1], {
              offset: 8
            }) || r([1, 0, 2], {
              offset: 8
            }) || r([2, 0, 2], {
              offset: 8
            }))) {
              e.next = 419
              break
            }
            return e.abrupt("return", {
              ext: "eot",
              mime: "application/vnd.ms-fontobject"
            })
          case 419:
            if (!r([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) {
              e.next = 421
              break
            }
            return e.abrupt("return", {
              ext: "indd",
              mime: "application/x-indesign"
            })
          case 421:
            e.next = 423
            return t.peekBuffer(n, {
              length: Math.min(512, t.fileInfo.size),
              mayBeLess: true
            })
          case 423:
            if (!tarHeaderChecksumMatches(n)) {
              e.next = 425
              break
            }
            return e.abrupt("return", {
              ext: "tar",
              mime: "application/x-tar"
            })
          case 425:
            if (!r([255, 254, 255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0])) {
              e.next = 427
              break
            }
            return e.abrupt("return", {
              ext: "skp",
              mime: "application/vnd.sketchup.skp"
            })
          case 427:
            if (!i("-----BEGIN PGP MESSAGE-----")) {
              e.next = 429
              break
            }
            return e.abrupt("return", {
              ext: "pgp",
              mime: "application/pgp-encrypted"
            })
          case 429:
            if (!(n.length >= 2 && r([255, 224], {
              offset: 0,
              mask: [255, 224]
            }))) {
              e.next = 440
              break
            }
            if (!r([16], {
              offset: 1,
              mask: [22]
            })) {
              e.next = 434
              break
            }
            if (!r([8], {
              offset: 1,
              mask: [8]
            })) {
              e.next = 433
              break
            }
            return e.abrupt("return", {
              ext: "aac",
              mime: "audio/aac"
            })
          case 433:
            return e.abrupt("return", {
              ext: "aac",
              mime: "audio/aac"
            })
          case 434:
            if (!r([2], {
              offset: 1,
              mask: [6]
            })) {
              e.next = 436
              break
            }
            return e.abrupt("return", {
              ext: "mp3",
              mime: "audio/mpeg"
            })
          case 436:
            if (!r([4], {
              offset: 1,
              mask: [6]
            })) {
              e.next = 438
              break
            }
            return e.abrupt("return", {
              ext: "mp2",
              mime: "audio/mpeg"
            })
          case 438:
            if (!r([6], {
              offset: 1,
              mask: [6]
            })) {
              e.next = 440
              break
            }
            return e.abrupt("return", {
              ext: "mp1",
              mime: "audio/mpeg"
            })
          case 440:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[61, 116], [394, 401]])
  }))).apply(this, arguments)
}
var stream = function stream(readableStream) {
  return new Promise(function (resolve, reject) {
    var stream = eval("require")("stream")
    readableStream.on("error", reject)
    readableStream.once("readable", _asyncToGenerator(_regeneratorRuntime.mark(function e() {
      var t
      var n
      var r
      var /* [auto-meaningful-name] */e$sent
      return _regeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              t = new stream.PassThrough()
              n = stream.pipeline ? stream.pipeline(readableStream, t, function () {}) : readableStream.pipe(t)
              r = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0)
              e.prev = 3
              e.next = 6
              return fromBuffer(r)
            case 6:
              e$sent = e.sent
              t.fileType = e$sent
              e.next = 13
              break
            case 10:
              e.prev = 10
              e.t0 = e.catch(3)
              reject(e.t0)
            case 13:
              resolve(n)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[3, 10]])
    })))
  })
}
var fileType = {
  fromStream: fromStream,
  fromTokenizer: fromTokenizer,
  fromBuffer: fromBuffer,
  stream: stream
}
Object.defineProperty(fileType, "extensions", {
  get: function () {
    return new Set(supported.extensions)
  }
})
Object.defineProperty(fileType, "mimeTypes", {
  get: function () {
    return new Set(supported.mimeTypes)
  }
})
module.exports = fileType
