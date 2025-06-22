"use strict";

/* harmony export (immutable) */
export default throttle;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ from "./fsmIterator-q3Gb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__io__ from "./io-JJnU";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__channel__ from "./channel-xJpq";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__buffers__ from "./buffers-cXw4";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_4__utils__ from "./utils-Vr3j";
function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }
  var action = void 0,
    channel = void 0;
  var yActionChannel = {
    done: false,
    value: Object(__WEBPACK_IMPORTED_MODULE_1__io__.actionChannel)(pattern, __WEBPACK_IMPORTED_MODULE_3__buffers__.buffers.sliding(1))
  };
  var yTake = function yTake() {
    return {
      done: false,
      value: Object(__WEBPACK_IMPORTED_MODULE_1__io__.take)(channel)
    };
  };
  var yFork = function yFork(ac) {
    return {
      done: false,
      value: __WEBPACK_IMPORTED_MODULE_1__io__.fork.apply(undefined, [worker].concat(args, [ac]))
    };
  };
  var yDelay = {
    done: false,
    value: Object(__WEBPACK_IMPORTED_MODULE_1__io__.call)(__WEBPACK_IMPORTED_MODULE_4__utils__.delay, delayLength)
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };
  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__.default)({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__.END ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__.qEnd] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__.safeName)(pattern) + ', ' + worker.name + ')');
}

/***/