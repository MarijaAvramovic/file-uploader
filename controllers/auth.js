import { prisma } from "../lib/prisma.js";


export async function signUpGet(req, res) {
    res.render('sign-up',  { errors: [] });
};