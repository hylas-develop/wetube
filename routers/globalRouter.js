import express from "express";
import passport from "passport";
import {
  getJoin,
  getLogin,
  githubLogin,
  logout,
  postGithubLogIn,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPublic } from "../middlewares";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.gitHubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

export default globalRouter;
