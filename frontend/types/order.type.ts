export interface OrderItemInput {
  menuItemId: number;
  quantity: number;
  price: number;
}

export default interface OrderType {
  id?: number;
  userId: number;
  totalPrice?: number; // dihitung otomatis di service
  status?: string;
  createdAt?: Date;
  items: OrderItemInput[]; // daftar item pesanan
}
