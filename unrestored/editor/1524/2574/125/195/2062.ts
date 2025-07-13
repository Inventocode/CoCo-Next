"use strict";

(function (e) {
  e[e.ELEMENT = 1] = "ELEMENT";
  e[e.ATTRIBUTE = 2] = "ATTRIBUTE";
  e[e.TEXT = 3] = "TEXT";
  e[e.CDATA_SECTION = 4] = "CDATA_SECTION";
  e[e.ENTITY_REFERENCE = 5] = "ENTITY_REFERENCE";
  e[e.ENTITY = 6] = "ENTITY";
  e[e.PROCESSING_INSTRUCTION = 7] = "PROCESSING_INSTRUCTION";
  e[e.COMMENT = 8] = "COMMENT";
  e[e.DOCUMENT = 9] = "DOCUMENT";
  e[e.DOCUMENT_TYPE = 10] = "DOCUMENT_TYPE";
  e[e.DOCUMENT_FRAGMENT = 11] = "DOCUMENT_FRAGMENT";
  e[e.NOTATION = 12] = "NOTATION";
})(t.NodeType || (exports.NodeType = {}));