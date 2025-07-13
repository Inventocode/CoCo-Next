"use strict";

import * as r from "../1626/86/index";
import * as o from "./944";
r({
  target: "RegExp",
  proto: !0,
  forced: /./.exec !== o
}, {
  exec: o
});