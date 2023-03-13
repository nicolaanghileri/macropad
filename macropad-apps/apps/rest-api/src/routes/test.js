import {Router} from 'express';

const router = Router();
const mainRoute = '/test';

router.post(mainRoute, (req,res) => {

    //parsing of all the informations
    let password = req.body.password;
    let email = req.body.email;
    
    if(password === 'test' && email === 'test@test.com'){
        res.status(200).json({
            message: `Successfull login`
        });
    }
    res.status(300);

});

export default router;