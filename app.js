import path from "node:path";
import { fileURLToPath } from "node:url";import express from "express";
import { prisma } from './lib/prisma.js'
import session from "express-session";

import passport from "./config/passport.js";
import  router  from "./routes/auth.js";

import { PrismaSessionStore } from "@quixo3/prisma-session-store";
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


app.use(session({
  secret: "ilove",
  resave: false,
  saveUninitialized: false,

  store: new PrismaSessionStore(prisma, {
      dbRecordIdIsSessionId: true,
      checkPeriod: 2 * 60 * 1000, // cleanup expired sessions every 2 min
    }),

    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
 

app.get("/", (req, res) => res.render("index"));
app.use("/auth", router)

const PORT = process.env.PORT || 4401;
app.listen(PORT, (error) => {
 
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
