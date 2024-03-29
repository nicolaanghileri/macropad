import {Router} from 'express';
import bcrypt from 'bcrypt';
import { getAllKeys, deleteKey, createKey } from '../utils/connector_key.js';

import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

const router = Router();
const mainRoute = '/key';

router.get(mainRoute + "/:email", async (req, res) => {
    try{
        const data = await getAllKeys(req.params.email);
        res.status(200).json({keys: data});
    }catch(err){
        console.log(err);
        res.status(401).json({message: "ERRROOOOOOR"});
    }
});


router.delete(mainRoute + "/delete/:id", async (req, res) => {
    try{
        console.log("ID to delete:" + req.params.id);
        await deleteKey(Number(req.params.id));
        res.status(200).json({message: "Key and assoc device deleted."});
    }catch(err){
        console.log("error");
        res.status(400).json({message: err.toString()});
    }
});

router.post(mainRoute + "/create/:email", async (req, res) => {
    try{
        console.log("entered key/create route with email: " + req.body.email);
        await createKey(req.params.email);
        res.status(200).json({message: "Succesfuly created key for user xy"});
    }catch(error){
        console.log("Error: "+ error);
        res.status(400).json({message: err.toString()});
    }
});

/*
//First time a device tryies to access rest api to register himself
router.post(mainRoute, async (req,res) => {
    //request body parsing
    let api_key = req.body.api_key;
    let device_name = req.body.device;

    //get api-key id
    const key_id = await prisma.api_keys.findFirst({
        where: {
            api_key: api_key,
        }
    });

    //
    const test = await prisma.device.findFirst({
        where: {
            api_keys_id: key_id,
        },
    });

    if(test == null){
        const insertion = await prisma.device.create({
            data:{
                name: device_name,
                status: "",
                api_keys_id: key_id,
            }
        });
        res.status(200).statusMessage("Device registration successful")
        //TODO: Logger
        res.end();
    }else{
        res.status(400).statusMessage("Device already exists")
        res.end();
    }
});

//Updating route for the current open application on the device
router.put(mainRoute, async(res,req) =>{
    let api_key;
    let device;
    let status;
    //try parsing status, if status == null or undefined, package is not valid
    try{
        api_key = req.body.api_key;
        device = req.body.device; //For safety reasons i want the device for checking that there is no man in the middle
        status = req.body.status;
    }catch(error){
        res.status(400).statusMessage("Data missing or invalid");$
        res.end();
    }

    //Validation key + device

    const key_id = await prisma.api_keys.findFirst({
        where: {
            api_key: api_key,
        },
        select:{
            id: true,
        }
    });

    const key_id_device = prisma.device.findUnique({
        where: {
            name: device,
        },
        select: {
            api_keys_id: true,
        }
    });

    //Ckeck if status is valid if app contains status applicatione exeution

    if(key_id == key_id_device){
        //Package is valid, and we proceed with the status update.
        const upate = prisma.device.update({
            where: {
                name:{
                    api_keys_id: api_key,
                }
            },
            data:{
                status: status,
            }
        })
    }
});

*/
export default router;