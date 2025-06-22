"use strict";

/* harmony export (immutable) */
export { runSaga };
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0__utils__ from "../utils-Vr3j";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__proc__ from "../proc-8o7f";
var RUN_SAGA_SIGNATURE = 'runSaga(storeInterface, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ': saga argument must be a Generator function!';
function runSaga(storeInterface, saga) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var iterator = void 0;
  if (__WEBPACK_IMPORTED_MODULE_0__utils__.is.iterator(storeInterface)) {
    if (false) {
      log('warn', 'runSaga(iterator, storeInterface) has been deprecated in favor of ' + RUN_SAGA_SIGNATURE);
    }
    iterator = storeInterface;
    storeInterface = saga;
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(saga, __WEBPACK_IMPORTED_MODULE_0__utils__.is.func, NON_GENERATOR_ERR);
    iterator = saga.apply(undefined, args);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__.check)(iterator, __WEBPACK_IMPORTED_MODULE_0__utils__.is.iterator, NON_GENERATOR_ERR);
  }
  var _storeInterface = storeInterface,
    subscribe = _storeInterface.subscribe,
    dispatch = _storeInterface.dispatch,
    getState = _storeInterface.getState,
    context = _storeInterface.context,
    sagaMonitor = _storeInterface.sagaMonitor,
    logger = _storeInterface.logger,
    onError = _storeInterface.onError;
  var effectId = Object(__WEBPACK_IMPORTED_MODULE_0__utils__.uid)();
  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || __WEBPACK_IMPORTED_MODULE_0__utils__.noop;
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || __WEBPACK_IMPORTED_MODULE_0__utils__.noop;
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || __WEBPACK_IMPORTED_MODULE_0__utils__.noop;
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || __WEBPACK_IMPORTED_MODULE_0__utils__.noop;
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || __WEBPACK_IMPORTED_MODULE_0__utils__.noop;
    sagaMonitor.effectTriggered({
      effectId: effectId,
      root: true,
      parentEffectId: 0,
      effect: {
        root: true,
        saga: saga,
        args: args
      }
    });
  }
  var task = Object(__WEBPACK_IMPORTED_MODULE_1__proc__.default)(iterator, subscribe, Object(__WEBPACK_IMPORTED_MODULE_0__utils__.wrapSagaDispatch)(dispatch), getState, context, {
    sagaMonitor: sagaMonitor,
    logger: logger,
    onError: onError
  }, effectId, saga.name);
  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }
  return task;
}

/***/