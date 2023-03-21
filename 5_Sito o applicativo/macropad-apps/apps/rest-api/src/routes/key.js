import {Router} from 'express';
import bcrypt from 'bcrypt';
import {validatePackage, isFirstContact, createDevice, updateDeviceStatus } from '../utils/connector.js';


const router = Router();
const mainRoute = '/key';


//First time a device tryies to access rest api to register himself
router.post(mainRoute, async (req,res) => {
    //request body parsing
    let api_key = req.body.api_key;
    let device_name = req.body.device;
    
    let test = isFirstContact(device_name);
    console.log(`Test: ${test}`);
    
    let r = await test;
    console.log(r);
    if(r){
        console.log("First contact");
        createDevice(device_name, api_key);
        res.status(200);
        res.end();
    }else{
        res.status(400);
        res.end();
    }
});

//Updating status route for the current open application on the device
router.put(mainRoute, async(res,req) =>{
    //try parsing status, if status == null or undefined, package is not valid
    try{
        let api_key = req.body.api_key;
        let device = req.body.device; //For safety reasons i want the device for checking that there is no man in the middle
        let status = req.body.status;

        if(validatePackage(api_key, device)){
            //Package is valid, and we proceed with the status update.
            updateDeviceStatus(api_key, status);
        }
    }catch(error){
        res.status(400);
        res.end();
    }
});



export default router;