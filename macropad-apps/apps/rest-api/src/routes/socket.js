import { Router } from "express";

const router = Router();
const mainRoute = "/socket";

router.post(mainRoute, async (req, res) => {
    console.log(req.body);
});

export default router;