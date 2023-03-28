import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';

//Public
const getAllKeys = async(email) => {
    const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
        include: {
          api_keys: {
            include: {
              device: true,
            },
          },
        },
    });
    return user.api_keys;
};

export {
    getAllKeys
}