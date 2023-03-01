import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';



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
                api_keys_id: getApiKeyIdFromKey(api_key),
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
const validatePackage = async(api_key, device) => {
    try{
        if(getKeyIdFromDevice(device) === getApiKeyIdFromKey(api_key)) {
            return true;
        }
    } catch(e){
        
    }
    return false;
};

//Public 
//Never use this function before checking if all data is valid
// Use after validatePackage()
const updateDeviceStatus = async(api_key, status) => {
    try{
        const update = prisma.device.update({
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
                api_keys_id: getApiKeyIdFromKey(api_key).id,
            }
        }); 
        console.log("Entrato metodo");
    } catch(e){
        console.log(e);
    }

};

const userExists = async(email) => {
    let user = prisma.user.findUnique({
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


const createUser = async(email, password) => {
    bcrypt.hash(password, 10, async (err, hash) => {
        const user = await prisma.user.create({
            data: {
              email: email,
              password: hash,
            },
        });
    });
    let api_key = getAPIKey();
    while(getApiKeyIdFromKey(api_key) != null){
        api_key = getAPIKey();
    }

    const key = await prisma.api_keys.create({
        data:{
            api_key: api_key,
            user_id: (await getUserFromUsername()).id,
        },  
    });
};



export {
    validatePackage, 
    isFirstContact,
    createDevice,
    updateDeviceStatus,
    userExists,
    createUser
}
