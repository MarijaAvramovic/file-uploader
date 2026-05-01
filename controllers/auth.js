import { prisma } from "../lib/prisma.js"; 
import bcrypt from "bcryptjs";


export async function signUpGet(req, res) {
    res.render('sign-up',  { errors: [] });
};

export async function createUser(req, res, next) {
     try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await prisma.user.create({
            data: {
                name: req.body.name,
                username: req.body.username, 
                password: hashedPassword
            }
        });
        res.redirect("/");
     } catch (err) {
        return next(err);
     }
};

