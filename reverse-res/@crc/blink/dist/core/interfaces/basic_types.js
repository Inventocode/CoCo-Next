"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeType = void 0;
/**
 * Constants for the nodeType attribute in the Node interface.
 *
 * These constants match those specified in the Node interface. These are
 * usually present on the Node object in recent browsers, but not in older
 * browsers (specifically, early IEs) and thus are given here.
 *
 * In some browsers (early IEs), these are not defined on the Node object,
 * so they are provided here.
 *
 * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
 */
var NodeType;
(function (NodeType) {
    NodeType[NodeType["ELEMENT"] = 1] = "ELEMENT";
    NodeType[NodeType["ATTRIBUTE"] = 2] = "ATTRIBUTE";
    NodeType[NodeType["TEXT"] = 3] = "TEXT";
    NodeType[NodeType["CDATA_SECTION"] = 4] = "CDATA_SECTION";
    NodeType[NodeType["ENTITY_REFERENCE"] = 5] = "ENTITY_REFERENCE";
    NodeType[NodeType["ENTITY"] = 6] = "ENTITY";
    NodeType[NodeType["PROCESSING_INSTRUCTION"] = 7] = "PROCESSING_INSTRUCTION";
    NodeType[NodeType["COMMENT"] = 8] = "COMMENT";
    NodeType[NodeType["DOCUMENT"] = 9] = "DOCUMENT";
    NodeType[NodeType["DOCUMENT_TYPE"] = 10] = "DOCUMENT_TYPE";
    NodeType[NodeType["DOCUMENT_FRAGMENT"] = 11] = "DOCUMENT_FRAGMENT";
    NodeType[NodeType["NOTATION"] = 12] = "NOTATION";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
