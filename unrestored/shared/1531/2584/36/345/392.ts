"use strict";

(function __defineESModule(exports) {
  if (typeof Symbol != "undefined" && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {
      value: "Module"
    });
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
})(exports);
var r = require("../../28/index");
var o = function () {};
var i = {
  start: function (e, t, n) {
    if (Object(r.d)()) {
      window.stepper.isStepCountingAvailable().then(function (e) {
        if (!e) {
          t();
        }
      }).catch(function (e) {
        console.error("isStepCountingAvailable", e);
        t();
      });
      window.stepper.requestPermission().then(function (t) {
        if (t) {
          window.stepper.startStepperUpdates({
            pedometerIsCountingText: "计步器正常计步",
            pedometerStepsToGoFormatText: "",
            pedometerYourProgressFormatText: "",
            pedometerGoalReachedFormatText: ""
          }, function (t) {
            if ("object" === typeof t) {
              e(t.steps_today);
            }
          }, function (e) {
            console.error("startStepper", e);
            if (3 === e.code) {
              n();
            }
          });
        } else {
          n();
        }
      }).catch(function (e) {
        console.error("requestPermission", e);
        n();
      });
    }
  },
  stop: function () {
    if (Object(r.d)()) {
      window.stepper.stopStepperUpdates().then(o).catch(function (e) {
        return console.error("stopStepperUpdates", e);
      });
    }
  },
  reset: function (e) {
    if (Object(r.d)()) {
      window.stepper.destroy().then(e).catch(function (e) {
        return console.error("destroy", e);
      });
    }
  }
};
exports.default = i;