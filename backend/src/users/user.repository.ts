import prisma from "../db/prisma";
import UsersType from "../types/usersType";
import bcrypt from "bcrypt";

// Function to get all users
export const getUserDatas = async () => {
  const user = await prisma.user.findMany();
  return user;
};

// Function to get a specific user by ID
export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
};

// Function to create a new user
// export const createUser = async (usersType: UsersType) => {
//   const hashedPassword = await bcrypt.hash(usersType.password, 10);

//   try {
//     const user = await prisma.user.create({
//       data: {
//         name: usersType.name,
//         email: usersType.email,
//         password: hashedPassword,
//         phone: usersType.phone,
//         address: usersType.address,
//       },
//     });
//     return user;
//   } catch (error) {
//     console.error("Gagal membuat user:", error);
//     throw error;
//   }
// };

// Function to update a user by ID
export const updateUser = async (id: number, usersType: UsersType) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name: usersType.name,
        email: usersType.email,
        password: usersType.password,
        phone: usersType.phone,
        address: usersType.address,
      },
    });
    return user;
  } catch (error) {
    console.error("Gagal memperbarui user:", error);
    throw error;
  }
};

// Function to delete a user by ID
export const deleteUser = async (id: number) => {
  try {
    const user = await prisma.user.delete({ where: { id } });
    return user;
  } catch (error) {
    console.error("Gagal menghapus user:", error);
    throw error;
  }
};
