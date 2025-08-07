"use strict";

/* unused harmony export RiskyContentError */
/* unused harmony export generateID */
/* unused harmony export getFileExtension */
/* unused harmony export uploadFileToCdn */
/* harmony export (immutable) */
export { uploadProjectJsonToCdn };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ from "@babel/runtime/regenerator";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default from "@babel/runtime/regenerator";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__cmao_cdn_uploader__ from "./cmao/cdn/uploader-Slns";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2_shortid__ from "shortid";
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_2_shortid___default from "shortid";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__cfg__ from "../../../../../cfg-dpNx";
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(subClass, superClass);
    } else {
      subClass.__proto__ = superClass;
    }
  }
}
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      if (result.done) {
        resolve(result.value);
      } else {
        new P(function (resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var cfg = Object(__WEBPACK_IMPORTED_MODULE_3__cfg__.config)();
var uploadClient = new __WEBPACK_IMPORTED_MODULE_1__cmao_cdn_uploader__.default({
  env: cfg.env,
  projectName: cfg.productCode,
  config: {
    pid: cfg.pid,
    api: cfg.openServiceHost
  }
});
var RiskyContentError = function (_Error) {
  _inherits(RiskyContentError, _Error);
  function RiskyContentError(uploadResult, message) {
    _classCallCheck(this, RiskyContentError);
    var _this = _possibleConstructorReturn(this, (RiskyContentError.__proto__ || Object.getPrototypeOf(RiskyContentError)).call(this, message));
    _this.uploadResult = uploadResult;
    return _this;
  }
  return RiskyContentError;
}(Error);
__WEBPACK_IMPORTED_MODULE_2_shortid___default.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');
function generateID(prefix) {
  var id = __WEBPACK_IMPORTED_MODULE_2_shortid___default.generate();
  return prefix + '_' + id;
}
function getFileExtension(fileName) {
  var index = fileName.lastIndexOf('.');
  if (index > -1) {
    return fileName.slice(index).toLowerCase();
  }
  return '';
}
function uploadFileToCdn(file) {
  var fileType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'IMAGE';
  return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee() {
    var fileName;
    var result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileName = file instanceof File ? file.name : '';
            _context.next = 3;
            return new Promise(function (resolve, reject) {
              uploadClient.create(file, {
                // FIXED: file.name有特殊符号（[、]、...）时，请求上传会失败，临时用随机ID代替
                filename: cfg.productCode + '/' + generateID(fileType) + '_' + Date.now() + getFileExtension(fileName),
                onsuccess: function onsuccess(res) {
                  return resolve(res);
                },
                onerror: function onerror(err) {
                  return reject(err);
                }
              }).then(function (uploader) {
                return uploader && uploader.start();
              }).catch(function (err) {
                return reject(err);
              });
            });
          case 3:
            result = _context.sent;
            return _context.abrupt('return', result);
          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}
function uploadProjectJsonToCdn(content) {
  return __awaiter(this, undefined, undefined, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.mark(function _callee2() {
    var blob;
    var file;
    var result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            blob = new Blob([content], {
              type: 'application/json,charset=utf-8;'
            });
            file = new File([blob], 'project.json', {
              type: blob.type
            });
            _context2.next = 4;
            return uploadFileToCdn(file, 'JSON');
          case 4:
            result = _context2.sent;
            return _context2.abrupt('return', result.url);
          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
}

/***/