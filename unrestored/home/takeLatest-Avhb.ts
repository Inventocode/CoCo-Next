"use strict";

/* harmony export (immutable) */
export default takeLatest;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ from "./fsmIterator-q3Gb";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__io__ from "./io-JJnU";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__channel__ from "./channel-xJpq";
function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var yTake = {
    done: false,
    value: Object(__WEBPACK_IMPORTED_MODULE_1__io__.take)(patternOrChannel)
  };
  var yFork = function yFork(ac) {
    return {
      done: false,
      value: __WEBPACK_IMPORTED_MODULE_1__io__.fork.apply(undefined, [worker].concat(args, [ac]))
    };
  };
  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(__WEBPACK_IMPORTED_MODULE_1__io__.cancel)(task)
    };
  };
  var task = void 0,
    action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };
  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__.default)({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__.END ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__.qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__.safeName)(patternOrChannel) + ', ' + worker.name + ')');
}

/***/