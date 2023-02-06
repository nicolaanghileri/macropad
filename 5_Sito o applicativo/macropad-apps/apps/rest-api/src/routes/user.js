import {Router} from 'express';
import bcrypt from 'bcrypt';

import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

const router = Router();
const mainRoute = '/user';

router.post(mainRoute, async (req,res) => {
    //parsing of all the informations
    let password = req.body.password;
    let email = req.body.email;
    //Hash and store into db
    bcrypt.hash(password, 10, async (err, hash) => {
        const user = await prisma.user.create({
            data: {
              email: email,
              password: hash,
            },
          })
    });
    res.end();
});

export default router;