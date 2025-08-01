"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.ViewType = exports.RollUpFuncType = exports.FieldType = void 0;
(function (e) {
  e.Text = "Text";
  e.Number = "Number";
  e.SingleSelect = "SingleSelect";
  e.MultiSelect = "MultiSelect";
  e.DateTime = "DateTime";
  e.Attachment = "Attachment";
  e.MagicLink = "MagicLink";
  e.URL = "URL";
  e.Email = "Email";
  e.Phone = "Phone";
  e.Checkbox = "Checkbox";
  e.Rating = "Rating";
  e.Member = "Member";
  e.MagicLookUp = "MagicLookUp";
  e.Formula = "Formula";
  e.Currency = "Currency";
  e.Percent = "Percent";
  e.SingleText = "SingleText";
  e.AutoNumber = "AutoNumber";
  e.CreatedTime = "CreatedTime";
  e.LastModifiedTime = "LastModifiedTime";
  e.CreatedBy = "CreatedBy";
  e.LastModifiedBy = "LastModifiedBy";
})(exports.FieldType || (exports.FieldType = {}));
(function (e) {
  e.VALUES = "VALUES";
  e.AVERAGE = "AVERAGE";
  e.COUNT = "COUNT";
  e.COUNTA = "COUNTA";
  e.COUNTALL = "COUNTALL";
  e.SUM = "SUM";
  e.MIN = "MIN";
  e.MAX = "MAX";
  e.AND = "AND";
  e.OR = "OR";
  e.XOR = "XOR";
  e.CONCATENATE = "CONCATENATE";
  e.ARRAYJOIN = "ARRAYJOIN";
  e.ARRAYUNIQUE = "ARRAYUNIQUE";
  e.ARRAYCOMPACT = "ARRAYCOMPACT";
})(exports.RollUpFuncType || (exports.RollUpFuncType = {}));
(function (e) {
  e.Grid = "Grid";
  e.Gallery = "Gallery";
  e.Kanban = "Kanban";
  e.Gantt = "Gantt";
})(exports.ViewType || (exports.ViewType = {}));