"use strict";

/* harmony export (binding) */
export { END };
/* harmony export (binding) */
export { isEnd };
/* harmony export (immutable) */
export { emitter };
/* unused harmony export INVALID_BUFFER */
/* unused harmony export UNDEFINED_INPUT_ERROR */
/* unused harmony export channel */
/* harmony export (immutable) */
export { eventChannel };
/* harmony export (immutable) */
export { stdChannel };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__utils__ from "./utils-Vr3j";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__buffers__ from "./buffers-cXw4";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__scheduler__ from "./scheduler-2Bk7";
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = {
  type: CHANNEL_END_TYPE
};
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};
function emitter() {
  var subscribers = [];
  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__.remove)(subscribers, sub);
    };
  }
  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }
  return {
    subscribe: subscribe,
    emit: emit
  };
}
var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';
if (false) {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}
function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__buffers__.buffers.fixed();
  var closed = false;
  var takers = [];
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__.is.buffer, INVALID_BUFFER);
  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__.internalErr)('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__.internalErr)('Cannot have pending takers with non empty buffer');
    }
  }
  function put(input) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(input, __WEBPACK_IMPORTED_MODULE_0__utils__.is.notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[__WEBPACK_IMPORTED_MODULE_0__utils__.MATCH] || cb[__WEBPACK_IMPORTED_MODULE_0__utils__.MATCH](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }
  function take(cb) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(cb, __WEBPACK_IMPORTED_MODULE_0__utils__.is.func, "channel.take's callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__.remove)(takers, cb);
      };
    }
  }
  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(cb, __WEBPACK_IMPORTED_MODULE_0__utils__.is.func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }
  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }
  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}
function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__buffers__.buffers.none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__.is.func, 'Invalid match function passed to eventChannel');
  }
  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }
  if (!__WEBPACK_IMPORTED_MODULE_0__utils__.is.func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }
  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}
function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[__WEBPACK_IMPORTED_MODULE_0__utils__.SAGA_ACTION]) {
        cb(input);
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__scheduler__.asap)(function () {
        return cb(input);
      });
    });
  });
  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__.is.func, "channel.take's matcher argument must be a function");
        cb[__WEBPACK_IMPORTED_MODULE_0__utils__.MATCH] = matcher;
      }
      chan.take(cb);
    }
  });
}

/***/