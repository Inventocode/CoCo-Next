"use strict";

/* harmony export (binding) */
export { qEnd };
/* harmony export (immutable) */
export { safeName };
/* harmony export (immutable) */
export default fsmIterator;
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__utils__ from "./utils-Vr3j";
var done = {
  done: true,
  value: undefined
};
var qEnd = {};
function safeName(patternOrChannel) {
  if (__WEBPACK_IMPORTED_MODULE_0__utils__.is.channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}
function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';
  var updateState = void 0,
    qNext = q0;
  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }
    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);
      var _fsm$qNext = fsm[qNext](),
        q = _fsm$qNext[0],
        output = _fsm$qNext[1],
        _updateState = _fsm$qNext[2];
      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils__.makeIterator)(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/