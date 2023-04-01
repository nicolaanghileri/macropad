import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
/*import crypto from "crypto";*/

const checkDevice = async (key) => {
  const obj = await prisma.api_keys.findFirst({
    where: {
      api_key: key,
    },
  });
  return obj.device;
};

const addDeviceToKey = async (device, key) => {
  const apiKeys = await prisma.api_keys.findFirst({
    where: { api_key: key },
  });

  const newDevice = await prisma.device.create({
    data: {
      name: device,
      status: "active",
    },
  });

  const upDev = await prisma.device.update({
    where: { id: newDevice.id },
    data: {
      api_keys: { connect: { id: apiKeys.id } },
    },
  });
  return upDev;
};

export { checkDevice, addDeviceToKey };
