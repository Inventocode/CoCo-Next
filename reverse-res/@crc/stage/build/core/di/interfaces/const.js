import { DIRECTION_UP, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, } from 'hammerjs';
export var ObjectType;
(function (ObjectType) {
    ObjectType["Actor"] = "actor";
    ObjectType["Scene"] = "scene";
    ObjectType["Background"] = "background";
    ObjectType["ActorDialog"] = "actor_dialog";
})(ObjectType || (ObjectType = {}));
export var InternalObjectType;
(function (InternalObjectType) {
    InternalObjectType["ActorWrapper"] = "actor_wrapper";
})(InternalObjectType || (InternalObjectType = {}));
export var RotationType;
(function (RotationType) {
    RotationType[RotationType["ALL"] = 0] = "ALL";
    RotationType[RotationType["LEFT_RIGHT"] = 1] = "LEFT_RIGHT";
    RotationType[RotationType["NONE"] = 2] = "NONE";
})(RotationType || (RotationType = {}));
export var HammerDirection;
(function (HammerDirection) {
    HammerDirection[HammerDirection["UP"] = DIRECTION_UP] = "UP";
    HammerDirection[HammerDirection["DOWN"] = DIRECTION_DOWN] = "DOWN";
    HammerDirection[HammerDirection["LEFT"] = DIRECTION_LEFT] = "LEFT";
    HammerDirection[HammerDirection["RIGHT"] = DIRECTION_RIGHT] = "RIGHT";
})(HammerDirection || (HammerDirection = {}));
;
/**
 * 动画的变化方式。
 */
export var TweenVariation;
(function (TweenVariation) {
    /**
     * 指定结束状态，动画从当前状态变化至结束状态。
     */
    TweenVariation["TO"] = "to";
    /**
     * 指定开始状态，动画从开始状态变化至当前状态。
     */
    TweenVariation["FROM"] = "from";
    /**
     * 同时指定开始状态和结束状态，动画从开始状态变化至结束状态。
     */
    TweenVariation["FROM_TO"] = "from_to";
})(TweenVariation || (TweenVariation = {}));
/*
 * 边缘所代表的二进制数值
 */
export var EdgeBinary;
(function (EdgeBinary) {
    EdgeBinary[EdgeBinary["RIGHT"] = 8] = "RIGHT";
    EdgeBinary[EdgeBinary["LEFT"] = 4] = "LEFT";
    EdgeBinary[EdgeBinary["TOP"] = 2] = "TOP";
    EdgeBinary[EdgeBinary["BOTTOM"] = 1] = "BOTTOM";
})(EdgeBinary || (EdgeBinary = {}));
export var Adaption;
(function (Adaption) {
    Adaption["CONTAIN"] = "contain";
    Adaption["COVER"] = "cover";
    Adaption["STRETCH"] = "stretch";
})(Adaption || (Adaption = {}));
//# sourceMappingURL=const.js.map