import { Router } from "express";
import {
  checkLogin,
  createUser,
} from "../utils/connector.js";

const router = Router();
const mainRoute = "/user";

//Working route for user login
// TODO - Logging and response statuses
router.post(mainRoute, async (req, res) => {
  console.log(req.body.email, req.body.password);
  if(!req.body.email || !req.body.password){
    res.status(400).json({message: "Uncomplete request"});
  }
  try{
    if(await checkLogin(req.body.email, req.body.password)){
      res.status(200).json({message: "Login successful"});
    }
    res.status(400).json({message: "Login failed"});
   
  }catch(err){
  }
});



//Working route for user + api_key creation
// TODO - Logging and response statuses

/*
router.post(mainRoute, async (req, res) => {
  if(!req.body.email || !req.body.password){ 
    res.status(400).json({message: "Uncomplete request"});
  }
  try{
    await createUser(req.body.email, req.body.password);
    res.status(200).json({message: "Successfully created user"});
  }catch(err){
    res.status(400).json({message: err});
  }
});
*/
export default router;
