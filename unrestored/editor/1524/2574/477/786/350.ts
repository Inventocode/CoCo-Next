"use strict";

var r;
export { r as a };
(function (e) {
  e.Ok = "ok";
  e.DeadlineExceeded = "deadline_exceeded";
  e.Unauthenticated = "unauthenticated";
  e.PermissionDenied = "permission_denied";
  e.NotFound = "not_found";
  e.ResourceExhausted = "resource_exhausted";
  e.InvalidArgument = "invalid_argument";
  e.Unimplemented = "unimplemented";
  e.Unavailable = "unavailable";
  e.InternalError = "internal_error";
  e.UnknownError = "unknown_error";
  e.Cancelled = "cancelled";
  e.AlreadyExists = "already_exists";
  e.FailedPrecondition = "failed_precondition";
  e.Aborted = "aborted";
  e.OutOfRange = "out_of_range";
  e.DataLoss = "data_loss";
})(r || (r = {}));
(function (e) {
  e.fromHttpCode = function (t) {
    if (t < 400) {
      return e.Ok;
    }
    if (t >= 400 && t < 500) {
      switch (t) {
        case 401:
          return e.Unauthenticated;
        case 403:
          return e.PermissionDenied;
        case 404:
          return e.NotFound;
        case 409:
          return e.AlreadyExists;
        case 413:
          return e.FailedPrecondition;
        case 429:
          return e.ResourceExhausted;
        default:
          return e.InvalidArgument;
      }
    }
    if (t >= 500 && t < 600) {
      switch (t) {
        case 501:
          return e.Unimplemented;
        case 503:
          return e.Unavailable;
        case 504:
          return e.DeadlineExceeded;
        default:
          return e.InternalError;
      }
    }
    return e.UnknownError;
  };
})(r || (r = {}));
export default r;