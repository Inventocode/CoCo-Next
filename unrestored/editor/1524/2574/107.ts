"use strict";

export { r as d };
export { i as c };
export { o as e };
export { s as f };
export { c as b };
export { u as a };
var r;
var i;
var o;
var a;
var s;
var c;
var u;
import * as l from "./683/559";
!function (e) {
  e.Actor = "actor";
  e.Scene = "scene";
  e.Background = "background";
  e.ActorDialog = "actor_dialog";
}(r || (r = {}));
(function (e) {
  e.ActorWrapper = "actor_wrapper";
})(i || (i = {}));
(function (e) {
  e[e.ALL = 0] = "ALL";
  e[e.LEFT_RIGHT = 1] = "LEFT_RIGHT";
  e[e.NONE = 2] = "NONE";
})(o || (o = {}));
(function (e) {
  e[e.UP = l.DIRECTION_UP] = "UP";
  e[e.DOWN = l.DIRECTION_DOWN] = "DOWN";
  e[e.LEFT = l.DIRECTION_LEFT] = "LEFT";
  e[e.RIGHT = l.DIRECTION_RIGHT] = "RIGHT";
})(a || (a = {}));
(function (e) {
  e.TO = "to";
  e.FROM = "from";
  e.FROM_TO = "from_to";
})(s || (s = {}));
(function (e) {
  e[e.RIGHT = 8] = "RIGHT";
  e[e.LEFT = 4] = "LEFT";
  e[e.TOP = 2] = "TOP";
  e[e.BOTTOM = 1] = "BOTTOM";
})(c || (c = {}));
(function (e) {
  e.CONTAIN = "contain";
  e.COVER = "cover";
  e.STRETCH = "stretch";
})(u || (u = {}));