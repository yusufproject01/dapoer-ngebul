import { axiosInstance } from "@/lib/api";
import UsersType from "@/types/usersType";

// Get all users
export async function getAllUsers() {
  const res = await axiosInstance.get("/users");
  return res.data;
}

// Get users by id
export async function getUsersById(id: number) {
  const res = await axiosInstance.get(`/users/${id}`);
  return res.data;
}

// Post users
export async function postUsers(data: UsersType) {
  const res = await axiosInstance.post("/users", data);
  return res.data;
}

// Put users
export async function putUsers(id: number, data: UsersType) {
  const res = await axiosInstance.put(`/users/${id}`, data);
  return res.data;
}

// Delete users
export async function deleteUsers(id: number) {
  const res = await axiosInstance.delete(`/users/${id}`);
  return res.data;
}
