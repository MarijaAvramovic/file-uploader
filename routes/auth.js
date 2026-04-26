  import express from "express";
 import { Router } from "express";
 import { signUpGet } from "../controllers/auth.js";


const router = Router();

router.get('/signup', signUpGet); 


export { router };