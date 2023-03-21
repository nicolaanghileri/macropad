import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

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

export {
    validatePackage, 
    isFirstContact,
    createDevice,
    updateDeviceStatus,
    
}
