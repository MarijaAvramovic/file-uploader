  import express from "express";
 import { Router } from "express";
 import { signUpGet, createUser } from "../controllers/auth.js";


const router = Router();

router.get('/signup', signUpGet); 
router.post('/signup', createUser)


export { router };