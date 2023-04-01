import { Router } from "express";
import { checkDevice, addDeviceToKey } from "../utils/connector_socket.js";

const router = Router();
const mainRoute = "/socket";

router.post(mainRoute, async (req, res) => {
    console.log("Received: " + req.body.process);
    res.status(200).send('Ok');
});

router.post(mainRoute + "/configuration", async (req, res) => {
    if(!await checkDevice(req.body.key)){
        res.status(401).json({message: "Device not registered"});
    }else{
        res.status(200).json({message: "Device already registered"});
    }
});

router.post(mainRoute + "/register", async (req, res) => {
    const result = await addDeviceToKey(req.body.device, req.body.key);
    console.log(result);
});




export default router;