"use strict";

import * as r from "../../206/29/index";
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
            pedometerIsCountingText: "\u8ba1\u6b65\u5668\u6b63\u5e38\u8ba1\u6b65",
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
export default i;