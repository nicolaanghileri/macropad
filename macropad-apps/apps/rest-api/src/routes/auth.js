import { Router } from "express";
import bcrypt from "bcrypt";
import {
  checkLogin,
  createUser,
} from "../utils/connector.js";

const router = Router();
const mainRoute = "/auth";

//Working route for user login
// TODO - Logging and response statuses
router.post(mainRoute + "/login", async (req, res) => {
  if(!req.body.email || !req.body.password){
    res.status(400).json({message: "Uncomplete request"});
  }
  try{
    if(await checkLogin(req.body.email, req.body.password)){
      //console.log("Successful");
      res.status(200).json({message: "Login successful"});
    }else{
      res.status(401).json({message: "Login failed"});
    }
  }catch(err){
    console.log(err);
  }
});



//Working route for user + api_key creation
// TODO - Logging and response statuses
router.post(mainRoute + "/register", async (req, res) => {
  if(!req.body.email || !req.body.password){ 
    res.status(400).json({message: "Uncomplete request"});
  }
  try{
    createUser(req.body.email, req.body.password);
    res.status(200).json({message: "Successfully created user"});
  }catch(err){
    res.status(400).json({message: err});
  }
});

export default router;
