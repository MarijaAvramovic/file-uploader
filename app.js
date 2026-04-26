import path from "node:path";
import { fileURLToPath } from "node:url";import express from "express";
import { prisma } from './lib/prisma.js'
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { router } from "./routes/auth.js";
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({
  secret: "cats",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index"));
app.use("/auth", router)

const PORT = process.env.PORT || 4401;
app.listen(PORT, (error) => {
 
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
