import UsersType from "../types/usersType";
import {
  getUserDatas,
  getUserById,
  updateUser,
  deleteUser,
} from "./user.repository";

// Function to get all users data and services
export const getAllUsersServices = async () => {
  const users = await getUserDatas();
  return users;
};

// Function to get a specific user by ID
export const getUserByIdServices = async (id: number) => {
  const user = await getUserById(id);
  return user;
};

// // Function to create a new user
// export const createUserServices = async (usersType: UsersType) => {
//   const user = await createUser(usersType);
//   return user;
// };

// Function to update a user by ID
export const updateUserServices = async (id: number, usersType: UsersType) => {
  const user = await updateUser(id, usersType);
  return user;
};

// Function to delete a user by ID
export const deleteUserServices = async (id: number) => {
  const user = await deleteUser(id);
  return user;
};
