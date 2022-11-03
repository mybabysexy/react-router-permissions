"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorizedSection = void 0;

var React = _interopRequireWildcard(require("react"));

var _useAuthorize = require("../hooks/useAuthorize");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var AuthorizedSection = function AuthorizedSection(_ref) {
  var requires = _ref.requires,
      authorizationStrategy = _ref.authorizationStrategy,
      children = _ref.children;
  var isAuthorized = (0, _useAuthorize.useAuthorize)(requires, authorizationStrategy);
  return children({
    isAuthorized: isAuthorized
  });
};

exports.AuthorizedSection = AuthorizedSection;