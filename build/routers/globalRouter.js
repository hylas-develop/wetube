"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _userController = require("../controllers/userController");

var _videoController = require("../controllers/videoController");

var _middlewares = require("../middlewares");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get(_routes["default"].join, _middlewares.onlyPublic, _userController.getJoin);
globalRouter.post(_routes["default"].join, _middlewares.onlyPublic, _userController.postJoin, _userController.postLogin);
globalRouter.get(_routes["default"].login, _middlewares.onlyPublic, _userController.getLogin);
globalRouter.post(_routes["default"].login, _middlewares.onlyPublic, _userController.postLogin);
globalRouter.get(_routes["default"].home, _videoController.home);
globalRouter.get(_routes["default"].logout, _userController.logout);
globalRouter.get(_routes["default"].search, _videoController.search);
globalRouter.get(_routes["default"].gitHub, _userController.githubLogin);
globalRouter.get(_routes["default"].gitHubCallback, _passport["default"].authenticate("github", {
  failureRedirect: "/login"
}), _userController.postGithubLogIn); // User send to facebook login website

globalRouter.get(_routes["default"].faceBook, _userController.facebookLogin);
globalRouter.get(_routes["default"].faceBookCallback, _passport["default"].authenticate("facebook", _passport["default"].authenticate("facebook", {
  failureRedirect: "/login"
})), _userController.postFacebookLogin);
globalRouter.get(_routes["default"].me, _middlewares.onlyPrivate, _userController.getMe);
var _default = globalRouter;
exports["default"] = _default;