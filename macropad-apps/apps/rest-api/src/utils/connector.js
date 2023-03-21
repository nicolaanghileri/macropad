import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
import { generateApiKey } from 'generate-api-key';

/*---------------- Finished ------------------*/

//Public
const createUser = async(email, password) => {
    //Creation of a new user with hashed password
    bcrypt.hash(password, 10, async (err, hash) => {
        const user = await prisma.user.create({
            data: {
                email: email,
                password: hash
            },
        });

        //Selection of the user
        const createdUser = await prisma.user.findUnique({
            where: {email: email},
        })

        //Creation of an API key with user_id
        await newUserKey(createdUser.id);
        
    });  
};

//Private
const newUserKey = async(user_id) => {
    //String generation 32 chars
    const key = generateApiKey();
    //Inserting the API Key into the database
    await prisma.api_keys.create({
        data: {
            api_key: key,
            user_id: user_id
        }
    })
};

//Public 
const checkLogin = async(email, password) => {
    const user = await prisma.user.findUnique({
        where: {email: email},
    });
    return await bcrypt.compare(password, user.password);
}


/*---------------- Developing ------------------*/
const getApiKeyIdFromKey = async(api_key) => {
    let key_id;
    try{
        key_id = await prisma.api_keys.findFirst({
            where: {
                api_key: api_key,
            }
        });
    } catch(e){

    }
    return key_id;
    
};

const getApiKeyInDeviceFromApiKey = async(api_key) => {
    let device;
    try{
        device = await prisma.device.findFirst({
            where: {
                api_keys_id: await getApiKeyIdFromKey(api_key),
            },
        });
    } catch(e){
    
    }
    return device;
};

const getKeyIdFromDevice = async(device) => {
    let api_key_id;
    try{
        api_key_id = await prisma.device.findFirst({
            where: {
                name: device,
            },
            select: {
                api_keys_id: true,
            }   
        });
    } catch(e){
    
    }
    return api_key_id;
};

//Public 
const validatePackage = async (apiKey, device) => {
    return (await getKeyIdFromDevice(device) === await getApiKeyIdFromKey(apiKey));
};

//Public 
//Never use this function before checking if all data is valid
// Use after validatePackage()
const updateDeviceStatus = async(api_key, status) => {
    try{
        const update = await prisma.device.update({
            where: {
                name:{
                    api_keys_id: api_key,
                }
            },
            data:{
                status: status,
            }
        })
    } catch(e){

    }
};

//Public 
const isFirstContact = async(device_name) => {
    try{
        const prova = await prisma.device.findFirst({
            where: {
                name: device_name, 
            }
        });
        if(prova == null){
            console.log("returned true")
            return true;
            
        }
        console.log("returned false")
        return false;
    } catch(e){
        console.log(e);
    }
};

//public
const createDevice = async(device_name, api_key) => {
    console.log(`Params:${device_name}, ${api_key}`);
    try{
        const deviceCration = await prisma.device.create({
            data: {
                name: device_name,
                status: "",
                api_keys_id: await getApiKeyIdFromKey(api_key).id,
            }
        }); 
        console.log("Entrato metodo");
    } catch(e){
        console.log(e);
    }

};

const userExists = async(email) => {
    let user = await prisma.user.findUnique({
        where: {
            email: email,
        }
    });

    if(user == null){
        return false;
    }
    return true;
};


const getUserFromUsername = async(username) => {
    return await prisma.user.findFirst({
        where: {
            username: username,
        },
    });
};



export {
    createUser,
    checkLogin
}
