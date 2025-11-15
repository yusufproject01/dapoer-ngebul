import { axiosInstance } from "@/lib/api";
import CategoryType from "@/types/category.type";

// Get all Category
export async function getAllCategory() {
  const res = await axiosInstance.get("/category");
  return res.data;
}

// Get Category by id
export async function getCategoryById(id: number) {
  const res = await axiosInstance.get(`/category/${id}`);
  return res.data;
}

// Post Category
export async function postCategory(data: CategoryType) {
  const res = await axiosInstance.post("/category", data);
  return res.data;
}

// Put Category
export async function putCategory(id: number, data: CategoryType) {
  const res = await axiosInstance.put(`/category/${id}`, data);
  return res.data;
}

// Delete Category
export async function deleteCategory(id: number) {
  const res = await axiosInstance.delete(`/category/${id}`);
  return res.data;
}
