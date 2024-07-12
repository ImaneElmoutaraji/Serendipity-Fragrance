import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCustomer = async ({ id,name, email, password }) => {
  const newCustomer = await prisma.customer.create({
    data: {
      CustomerID: id,
      Name: name,
      Email:email,
      Password:password,
    },
  });
  return newCustomer;
};

export default createCustomer;