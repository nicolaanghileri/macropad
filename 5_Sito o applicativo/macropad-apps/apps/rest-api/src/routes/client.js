import {Router} from 'express';

const router = Router();
const mainRoute = '/client';

router.get(mainRoute, (req,res) => {
    //Look if API key is stored into DB
    req.
    //IF YES
    res.status(200).json({
        //LOG
        message: `Route ${mainRoute}`,
        cane: true
    });

    //IF NOT 
    res.status(400).json({
        //LOG
        message: `Bad Key`,
    });
});

router.post(mainRoute, (res, req) => {
    
});