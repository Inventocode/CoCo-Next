"use strict";

export { o as a };
import * as r from "../75/index";
import * as i from "../75/index";
function o(e) {
  return e instanceof HTMLElement ? e : i.a.findDOMNode(e);
}