import {Router} from 'express';

const router = Router();
const mainRoute = '/cane';

router.get(mainRoute, (req,res) => {
    res.status(200).json({
        message: `Route ${mainRoute}`,
        cane: true
    });
});

router.post(mainRoute, (req, res) => {
    //bla bla
});

export default router;