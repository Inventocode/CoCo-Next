"use strict";

export { r as a };
export { o as b };
var r = "PEDOMETER_WIDGET";
var o = {
  type: r,
  icon: "icon-widget-pedometer",
  title: "widgetName",
  platforms: ["android"],
  isGlobalWidget: true,
  isInvisibleWidget: true,
  properties: [{
    key: "stepCount",
    label: "stepCount",
    valueType: "number",
    defaultValue: 0,
    readonly: true
  }],
  methods: [{
    key: "startStepUpdate",
    label: "startStepUpdate",
    params: []
  }, {
    key: "stopStepUpdate",
    label: "stopStepUpdate",
    params: []
  }, {
    key: "resetStepCount",
    label: "resetStepCount",
    params: []
  }],
  events: [{
    key: "onStepCountChange",
    label: "onStepCountChange",
    params: [{
      key: "stepCount",
      label: "stepCount",
      valueType: "number"
    }],
    blockOptions: {
      icon: "%{BKY_BLOCK_PEDOMETER_ICON}"
    }
  }, {
    key: "onPedometerNotAvailable",
    label: "onPedometerNotAvailable",
    params: [],
    blockOptions: {
      icon: "%{BKY_BLOCK_PEDOMETER_ICON}"
    }
  }, {
    key: "onPedometerPermissionFail",
    label: "onPedometerPermissionFail",
    params: [],
    blockOptions: {
      icon: "%{BKY_BLOCK_PEDOMETER_ICON}"
    }
  }]
};
export default r;