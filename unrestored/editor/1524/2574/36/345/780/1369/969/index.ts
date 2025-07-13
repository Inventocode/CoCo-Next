"use strict";

var r;
import * as i from "./2384";
exports.MAX_RECORD_SIZE = 1e3;
exports.QPS = 5;
exports.MIN_TIME_GAP = 1e3 / t.QPS;
exports.DST_MAX_RECORDS = 5e4;
exports.DEFAULT_HOST = "https://api.vika.cn/fusion/v1";
exports.DEFAULT_REQUEST_TIMEOUT = 6e4;
exports.MAX_WRITE_SIZE_PER_REQ = 10;
exports.LOG_LEVEL_WEIGHT_MAP = ((r = {})[i.LogLevel.DEBUG] = 1, r[i.LogLevel.INFO] = 2, r[i.LogLevel.WARN] = 3, r[i.LogLevel.ERROR] = 4, r);