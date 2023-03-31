import { Router } from "express";

const router = Router();
const mainRoute = "/socket";

router.post(mainRoute, async (req, res) => {
    console.log("Received: " + req.body.process);
    res.status(200).send('Ok');
});

export default router;