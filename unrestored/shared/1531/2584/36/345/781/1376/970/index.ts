"use strict";

var r;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.LOG_LEVEL_WEIGHT_MAP = exports.MAX_WRITE_SIZE_PER_REQ = exports.DEFAULT_REQUEST_TIMEOUT = exports.DEFAULT_HOST = exports.DST_MAX_RECORDS = exports.MIN_TIME_GAP = exports.QPS = exports.MAX_RECORD_SIZE = void 0;
var i = require("./2394");
exports.MAX_RECORD_SIZE = 1e3;
exports.QPS = 5;
exports.MIN_TIME_GAP = 1e3 / exports.QPS;
exports.DST_MAX_RECORDS = 5e4;
exports.DEFAULT_HOST = "https://api.vika.cn/fusion/v1";
exports.DEFAULT_REQUEST_TIMEOUT = 6e4;
exports.MAX_WRITE_SIZE_PER_REQ = 10;
exports.LOG_LEVEL_WEIGHT_MAP = ((r = {})[i.LogLevel.DEBUG] = 1, r[i.LogLevel.INFO] = 2, r[i.LogLevel.WARN] = 3, r[i.LogLevel.ERROR] = 4, r);