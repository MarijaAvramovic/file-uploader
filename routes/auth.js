  import express from "express";
 import { Router } from "express";
 import passport from "../config/passport.js";
 import { signUpGet, createUser } from "../controllers/auth.js";


const router = Router();

router.get('/signup', signUpGet); 
router.post('/signup', createUser);
router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);
router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});




export default router;