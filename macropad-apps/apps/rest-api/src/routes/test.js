import {Router} from 'express';

const router = Router();
const mainRoute = '/test';

router.post(mainRoute, (req,res) => {

    //parsing of all the informations
    //let password = req.body.password || "password";
    //let email = req.body.email || "email";
    
    /*
    if(password === 'test' && email === 'test@test.com'){
        res.status(200).json({
            message: `Successfull login`
        });
    }
    */
    res.status(200).json({
        message: `Successfull login`
    });


});

export default router;