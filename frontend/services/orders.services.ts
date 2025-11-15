import { axiosInstance } from "@/lib/api";
import OrderType from "@/types/order.type";

// Get all order
export async function getAllOrder() {
  const res = await axiosInstance.get("/order");
  return res.data;
}

// Get order by id
export async function getOrderById(id: number) {
  const res = await axiosInstance.get(`/order/${id}`);
  return res.data;
}

// Post order
export async function postOrder(data: OrderType) {
  const res = await axiosInstance.post("/order", data);
  return res.data;
}

// Put order
export async function putOrder(id: number, data: OrderType) {
  const res = await axiosInstance.put(`/order/${id}`, data);
  return res.data;
}

// Delete order
export async function deleteOrder(id: number) {
  const res = await axiosInstance.delete(`/order/${id}`);
  return res.data;
}
