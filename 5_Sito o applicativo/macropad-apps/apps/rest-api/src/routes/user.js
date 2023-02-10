import {Router} from 'express';
import bcrypt from 'bcrypt';

import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

import {userExists, createUser} from '../utils/connector.js';

const router = Router();
const mainRoute = '/user';

router.post(mainRoute, async (req,res) => {
    //parsing of all the informations
    let password = req.body.password;
    let email = req.body.email;
    //Check if user already exists
    if(!userExists(email)) {
      //Create new users
      //Hash and store into db
      createUser(email,password);
    }

    res.end();
});

router.get(mainRoute, async (req, res) =>{
  //Parsing del body http
  let email = req.body.email;
  let passwordClear = req.body.password;

  //retrieve user information from db
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  //Check if credentials are right
  bcrypt.compare(passwordClear, user.password, function(err, result) {
    if(result){
      res.status(200);
      res.end();
    }
    res.status(400);
    res.end();
  });
});


export default router;