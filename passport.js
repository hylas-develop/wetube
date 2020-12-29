import passport from "passport";
import GithubStrategy from "passport-github2";
import { githubLoginCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

passport.use(User.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.gitHubCallback}`,
      scope: "user:email",
    },
    githubLoginCallback
  )
);
console.log(`http://localhost:4000${routes.gitHubCallback}`);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
