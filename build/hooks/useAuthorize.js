"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuthorize = void 0;

var _usePermissions2 = require("./usePermissions");

var useAuthorize = function useAuthorize(requires, authorizationStrategy) {
  var _usePermissions = (0, _usePermissions2.usePermissions)(),
      permissions = _usePermissions.permissions,
      defaultStrategy = _usePermissions.authorizationStrategy;

  return authorizationStrategy ? authorizationStrategy(permissions, requires) : defaultStrategy(permissions, requires);
};

exports.useAuthorize = useAuthorize;