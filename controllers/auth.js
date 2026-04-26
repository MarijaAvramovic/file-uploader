import { prisma } from "../lib/prisma.js";


export async function signUpGet(req, res) {
    res.render('sign-up',  { errors: [] });
};

export async function createUser(req, res, next) {
     try {
        await prisma.user.create({
            data: {
                name: req.body.name,
                username: req.body.username, 
                password: req.body.password
            }
        });
        res.redirect("/");
     } catch (err) {
        return next(err);
     }
};

