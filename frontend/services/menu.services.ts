import { axiosInstance } from "@/lib/api";
import MenuType from "@/types/menu.types";

// Get all menus
export async function getAllMenu() {
  const res = await axiosInstance.get("/menu");
  return res.data;
}

// Get menu by id
export async function getMenuById(id: number) {
  const res = await axiosInstance.get(`/menu/${id}`);
  return res.data;
}

// Post Menu
export async function postMenu(data: MenuType) {
  const res = await axiosInstance.post("/menu", data);
  return res.data;
}

// Put Menu
export async function putMenu(id: number, data: MenuType) {
  const res = await axiosInstance.put(`/menu/${id}`, data);
  return res.data;
}

// Delete Menu
export async function deleteMenu(id: number) {
  const res = await axiosInstance.delete(`/menu/${id}`);
  return res.data;
}
