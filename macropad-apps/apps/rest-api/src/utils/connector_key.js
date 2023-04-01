import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import crypto from "crypto";

//Public
const getAllKeys = async (email) => {
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

const deleteKey = async (id) => {
  try {
    // Find the api_key to delete
    console.log("IIIID:" + id);
    const api_key = await prisma.api_keys.findUnique({
      where: { id: id },
      include: { device: true },
    });

    // Delete the associated device, if it exists
    if (api_key.device) {
      await prisma.device.delete({ where: { id: api_key.device.id } });
    }

    // Delete the api_key
    await prisma.api_keys.delete({
      where: { id: id },
    });

    console.log(`api_key deleted successfully`);
  } catch (e) {
    console.error(`Error deleting api_key ${e}`);
  }
};

const createKey = async (user_email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: user_email },
    });

    // Generate a new API key
    const apiKey = crypto.randomUUID();

    // Create a new Api_keys record and connect it to the User record
    const newApiKey = await prisma.api_keys.create({
      data: {
        api_key: apiKey,
        user: { connect: { id: user.id } },
      },
    });
    return newApiKey;
  } catch (e) {
    console.log(e.toString());
  }

};

export { getAllKeys, deleteKey, createKey };
