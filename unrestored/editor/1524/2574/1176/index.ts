"use strict";

import * as r from "./1312";
import * as o from "./2538";
import * as i from "./1419";
import * as a from "./2539";
import * as s from "./2540/index";
import * as c from "./2541";
import * as l from "./2542";
import * as u from "./2543/index";
import * as d from "./2544";
export { init_extensions } from "./2544";
exports.init_basic_blocks = function (e) {
  (0, r.init_shadows)(e);
  (0, o.init_events_blocks)(e);
  (0, i.init_control_blocks)(e);
  (0, a.init_sensing_blocks)(e);
  (0, s.init_math_blocks)(e);
  (0, c.init_logic_blocks)(e);
  (0, l.init_text_blocks)(e);
  (0, u.init_color_blocks)(e);
};
import * as p from "./1419";
export { init_tell_blocks } from "./1419";
import * as f from "./2545";
export { init_data_blocks } from "./2545";