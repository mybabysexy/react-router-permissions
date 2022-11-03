"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePermissions = void 0;

var _react = require("react");

var _permissions = require("../permissions-context/permissions.context");

var usePermissions = function usePermissions() {
  return (0, _react.useContext)(_permissions.PermissionsContext);
};

exports.usePermissions = usePermissions;