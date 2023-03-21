import {Router} from 'express';
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
const router = Router();
const mainRoute = '/app';

const testQuery = (a) => {
    let data = prisma.app.findMany({
        where:{
            name:{
                contains: 'G',
            }
        }
    });

    return data;
};


router.get(mainRoute, (req,res) => {
    try {
        console.log(testQuery());
    }catch(err) {
        res.status(400).json({
            message: `Error`
        });
    }
    res.json(testQuery());
});


export default router;